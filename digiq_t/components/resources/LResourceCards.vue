<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LResourceCards",
})
</script>

<template>
<div class="lResourceCards bg-gray-200">
  <div class="flex flex-col h8:flex-row">
    <div class="flex-none h8:flex-1">
      <slot class="p-4" name="cards">
        cards
      </slot>
    </div>
    <div class="flex p-4 gap-4 flex-shrink-0 w-96">
      <slot name="details"></slot>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>