<template>
  <div class="lTabs h-full">

    <div class="w-full pt-4 flex h8:border-b h8:border-gray-300 relative flex-col h8:flex-row">
      <div
          v-for="(label, index) in slotLabels"
          :key="label"
          class="flex-1 px-4 h8:text-center font-medium pb-3 border-b-4 cursor-pointer hover:text-blue-400"
          :class="{
            // is active
            'text-blue-400': selectedTab === index,
            '-mb-px': selectedTab === index,
            'opacity-100': selectedTab === index,
            'border-blue-400': selectedTab === index,
            // is not active
            'text-neutral-500': selectedTab !== index,
            'opacity-50': selectedTab !== index,
            'border-neutral-500': selectedTab !== index,

          }"
          @click="onSelect(index)"
      >
        {{ label }}
      </div>
    </div>

    <div class="w-full h-full flex flex-col items-stretcb">
      <keep-alive>
        <div class="h-full">
          <slot name="one" v-if="selectedTab === 0"></slot>
          <slot name="two" v-if="selectedTab === 1"></slot>
          <slot name="three" v-if="selectedTab === 2"></slot>
          <slot name="four" v-if="selectedTab === 3"></slot>
          <slot name="five" v-if="selectedTab === 4"></slot>
          <slot name="six" v-if="selectedTab === 5"></slot>
          <slot name="seven" v-if="selectedTab === 6"></slot>
          <slot name="eight" v-if="selectedTab === 7"></slot>
          <slot name="nine" v-if="selectedTab === 8"></slot>
          <slot name="ten" v-if="selectedTab === 9"></slot>
          <slot name="eleven" v-if="selectedTab === 10"></slot>
          <slot name="twelve" v-if="selectedTab === 11"></slot>
        </div>
      </keep-alive>

    </div>

  </div>
</template>

<script>
import {isArray, isString} from "../../lib/typeHelpers/getVariableType";
import {computed, ref, watch} from "vue";

export default {
  name: "LTabs",
  emits: ['select'],
  props: {
    labels: {
      type: Array,
      required: true,
      validator: value => isArray(value) && value.reduce((pass, item) => pass && item && isString(item), true)
    },
    selected: {
      type: Number,
      default: -1
    },
    update: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const slotLabels = computed(() => {
      const set = new Set(props.labels)
      return [...set]
    })

    const selectedTab = ref(0)

    const readProps = computed(() => props.update)
    watch(readProps, () => selectedTab.value = props.selected)

    const onSelect = index => {
      if (selectedTab.value !== index) {
        selectedTab.value = index
        // emit('select', {index, label: slotLabels.value[index]})
      }
    }

    return {
      selectedTab,
      slotLabels,
      onSelect,
    }
  }
}
</script>

<style scoped>

</style>
