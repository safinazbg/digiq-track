<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: "LResourceCard",
  props: {
    resource: {
      type: Object,
      default: () => {}
    },
    attributeNames: {
      type: Array,
      default: () => []
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const attributes = computed(() =>
        Object.fromEntries(
            Object.entries(props.resource)
                .filter(([key]) => props.attributeNames.includes(key))
        )
    )
    return {
      attributes
    }
  }
})
</script>

<template>
<div
    class="lResourceCard p-4 rounded bg-white"
    :class="{
      'border border-blue-500': isSelected,
    }"
>

</div>
</template>

<style scoped>

</style>