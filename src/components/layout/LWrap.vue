<template>
  <div class="lWrap justify-between" :class="styleClasses">
    <slot name="items">
      <!--

  example use:
    <LWrap class="min-w-[50vw] min-h-[50vh] max-h-[90vh] p-4">

        <template #items>

          <div
                class="item w-[24%]"
                v-for=""
          >...</div>

        </template>

    </LWrap>

-->
      <!--
  todo:
    detect image aspect : tile wall.
      landscape: 2 wide, content-fill
      portrait: 2 high, content-fill
 -->
    </slot>
  </div>
</template>

<script>
import { computed } from "vue";
import { tailwindSpacing } from "../../lib/tailwind/tailwindSpacing";

export default {
  name: "LWrap",
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    colGap: {
      type: Number,
      default: 4,
      validator: (value) => Object.values(tailwindSpacing).includes(value),
    },
    rowGap: {
      type: Number,
      default: 4,
      validator: (value) => Object.values(tailwindSpacing).includes(value),
    },
  },
  setup(props) {
    const styleClasses = computed(() => ({
      flex: true,
      [`gap-x-${props.colGap}`]: true,
      [`gap-y-${props.rowGap}`]: true,
      [`flex-wrap`]: !props.reverse,
      [`flex-wrap-reverse`]: props.reverse,
    }));
    return {
      styleClasses,
    };
  },
};
</script>

<style scoped></style>
