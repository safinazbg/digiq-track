<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LResourceCard",
  props: {
    isSelected: {
      type: Boolean,
      default: false
    }
  },
})
</script>

<template>
  <div
      class="lResourceCard p-4 bg-white border"
      :class="{
      'border-digiPurple': isSelected,
      'border-white': !isSelected
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>

</style>