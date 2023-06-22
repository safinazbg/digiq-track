<template>
  <div class="lGrid h-full w-full" :style="style" ref="grid">
    <slot name="items"> no items ... </slot>
  </div>
</template>

<script>
import {
  getTailwindSpacing,
  tailwindSpacing,
} from "../../lib/tailwind/tailwindSpacing";
import { computed, ref } from "vue";
import { widths } from "../../lib/tailwind/tailwindBreakpoints";
import { useBreakpoints } from "../../composables/useBreakpoints";
import config from "./LGridDefaults.js";

const isValidNumberOfColumns = (value) => 1 <= value && value <= 12;

export default {
  name: "LGrid",
  emits: ["insert"],
  props: {
    columns: {
      type: Number,
      default: config.columnCount,
      validator: isValidNumberOfColumns,
    },
    columnsByBreakpoint: {
      type: Object,
      default: null,
      validator: (value) =>
        Object.keys(value).reduce((pass, breakpoint) => {
          pass &= Object.keys(widths).includes(breakpoint);
          return pass;
        }, true) &&
        Object.values(value).reduce((pass, columns) => {
          pass &= isValidNumberOfColumns(columns);
          return pass;
        }, true),
    },
    gap: {
      type: Number,
      default: 0,
      validator: (value) =>
        Object.keys(tailwindSpacing).includes(String(value)),
    },
    colGap: {
      type: Number,
      default: 0,
      validator: (value) =>
        Object.keys(tailwindSpacing).includes(String(value)),
    },
    rowGap: {
      type: Number,
      default: 0,
      validator: (value) =>
        Object.keys(tailwindSpacing).includes(String(value)),
    },
    itemAspectRatio: {
      type: Number,
      default: 0,
    },
    maxColWidth: {
      type: Number,
      default: 0,
      validator: (value) =>
        Object.keys(tailwindSpacing).includes(String(value)),
    },
    placeholderCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const grid = ref(null);
    const { brokenPoints } = useBreakpoints();

    const columnCount = computed(() => {
      return brokenPoints.value.reduce((cols, broken) => {
        return props.columnsByBreakpoint?.[broken] ?? cols;
      }, props.columns);
    });

    const style = computed(() => {
      const style = {};
      style.gridTemplateColumns = "1fr ".repeat(columnCount.value).trim();

      let gap = props.gap || props.colGap;
      if (gap) style.gridColumnGap = `${getTailwindSpacing(gap)}`;

      gap = props.gap || props.rowGap;
      if (gap) style.gridRowGap = `${getTailwindSpacing(gap)}`;

      if (props.maxColWidth) {
        const w =
          tailwindSpacing[props.maxColWidth] * columnCount.value +
          (columnCount.value - 1) * tailwindSpacing[props.colGap];
        style.maxWidth = `${w}px`;
        style.margin = "auto";
      }
      return style;
    });

    const isAlt = (index) => {
      const rowIndex = Math.floor(index / columnCount.value);
      let isAlt = index % 2;
      if (rowIndex % 2) isAlt = !isAlt;
      return !!isAlt;
    };

    const onBitInsert = (bitComponentName) => emit("insert", bitComponentName);

    return {
      brokenPoints,
      columnCount,
      grid,
      isAlt,
      onBitInsert,
      style,
    };
  },
};
</script>

<style scoped>
.lGrid {
  display: grid;
}
</style>
