<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LResourceCard",
  props: {
    isSelected: {
      type: Boolean,
      default: false
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
  <slot></slot>
</div>
</template>

<style scoped>

</style>