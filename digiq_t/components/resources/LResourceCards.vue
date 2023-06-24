<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LResourceCards"
})
</script>

<template>
<div class="lResourceCards">
  <div class="flex flex-col h8:flex-row">
    <div class="flex-1 md:flex-none">
      <slot name="cards">
        cards
      </slot>
    </div>
    <div class="flex flex-shrink-0 w-96">
      <slot name="details">
        details
      </slot>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>