<template>
  <div class="lTabBody">
    <div class="body mt-12 relative">
      <div class="w-full flex flex-wrap h8:flex-nowrap">
        <div class="w-full order-2 h8:order-1 h8:flex-grow">
          <slot name="body"></slot>
        </div>
        <div class="w-full order-1 h8:order-2 h8:w-56">
          <div
            class="flex flex-col items-center h8:items-end justify-center mb-12 k1:mb-0"
          >
            <slot name="buttons" class=""></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LTabBody",
};
</script>

<style scoped></style>
