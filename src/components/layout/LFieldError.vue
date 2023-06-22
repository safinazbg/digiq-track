<template>
<div class="LFieldError">
  <div class="fieldError__message text-red-800">
    <slot>
      <span>{{message}}</span>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "LFieldError",
  props: {
    message: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>

</style>
