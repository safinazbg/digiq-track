<template>
<div class="lActionError">
  <div class="
      error
      p-4
      bg-red-800/20
      border border-red-800
      text-red-800
  ">
    <slot>
      <span>
        {{message}}
      </span>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "LActionError",
  props: {
    message: {
      type: String,
      default: 'no error',
    },
  },
}
</script>

<style scoped>

</style>
