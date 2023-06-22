<template>
  <div
      class="lPlaceholder w-full h-full flex items-center justify-center"
      :class="{
        'bg-gray-500/50': !isAlt,
        'bg-gray-600/50': isAlt,
      }"
  >
    <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  name: "LPlaceholder",
  props: {
    label: {
      type:String,
      default: 'placeholder'
    },
    isAlt: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
