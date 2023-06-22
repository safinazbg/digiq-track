<template>
  <div>
    <div
      :class="{
        'm-auto px-4 w-[24rem] h6:w-[30rem] h8:w-[40rem] k1:w-[64rem]':
          useMargin,
      }"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LSection",
  props: {
    useMargin: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped></style>
