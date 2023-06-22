<template>
  <div
    class="lImageTitleBodyCard group cursor-pointer w-full shadow-xl hover:shadow-2xl h-96 bg-white relative text-black"
  >
    <div class="imageFrame relative h-48 w-full object-cover overflow-hidden">
      <div
        class="!heading3 text-md absolute bottom-0 p-1 text-white bg-titleBackground/40 w-full pb-4 px-4"
      >
        <slot name="title"></slot>
      </div>
      <slot name="image"></slot>
      <div
        class="gradientLine absolute bottom-0 w-full h-1 bg-gradient-to-br from-pink-600 to-orange-500 group-hover:bg-gradient-to-bl"
      ></div>
    </div>

    <div class="flex flex-col items-stretch p-4 h-48">
      <slot name="body"></slot>

      <p
        v-if="hasAction"
        class="grow cursor-pointer flex justify-end items-end"
      >
        <SeeMoreButton></SeeMoreButton>
      </p>
    </div>
  </div>
</template>

<script>
import SeeMoreButton from "@/components/layout/layoutComponets/SeeMoreButton.vue";

export default {
  name: "LImageTitleBodyCard",
  components: { SeeMoreButton },
  props: {
    components: {},
    hasAction: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
