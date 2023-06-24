<template>
  <div class="lStatusMessage w-full flex justify-center items-center gap-4">
    <slot name="icon"></slot>
    <slot name="body"></slot>
  </div>

</template>

<script>
export default {
  name: "LStatusMessage"
}
</script>

<style scoped>

</style>