<template>
  <div class="lImageText w-full">

    <div class="flex flex-wrap items-stretch">

      <div
          class="w-full display-none xs:block k1:w-1/2 overflow-none"
          :class="{
            'order-1 pr-10': imageLeft,
            'order-2 pl-10': !imageLeft
          }"
      >

        <div class="relative">

          <slot name="image">


          </slot>

        </div>

      </div>
      <div
          class="w-full k1:w-1/2 h-full flex-grow"
          :class="{
            'order-2': imageLeft,
            'order-1': !imageLeft
          }"
      >

        <slot name="text">

          <LPlaceholder
              label="text"
              :isAlt="true"
          ></LPlaceholder>

        </slot>

      </div>

    </div>
  </div>
</template>

<script>
import LPlaceholder from "./LPlaceholder";


export default {
  name: "LImageText",
  props: {
    imageLeft: {
      type: Boolean,
      default: true
    },
  },
  components: {
    LPlaceholder,
  },
}
</script>

<style scoped>

</style>
