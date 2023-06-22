<template>
  <div class="lHighlightedText w-full group h-full mt-0 mb-10 k15:w-1/2 k1:mb-0">
    <slot name="body"></slot>
    <hr class="w-full h-1 bg-gradient-to-br from-pink-600 to-orange-500"/>
  </div>

</template>

<script>
export default {
  name: "LHighlightedText"
}
</script>

<style scoped>

</style>