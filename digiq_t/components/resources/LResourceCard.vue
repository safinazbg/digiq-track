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
      class="lResourceCard p-4 bg-white"
      :class="{
      'border border-digiPurple': isSelected,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>

</style>