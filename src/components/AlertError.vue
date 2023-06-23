<template>
  <div class="alertError">
    <div
        class="flex items-center p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
         role="alert"
    >
      <div class="icon flex items-center">

        <slot name="icon"></slot>

      </div>

      <div class="flex flex-wrap px-4">
        <span
            v-if="name"
            class="font-bold pr-4"
        >
          {{ errorName }}
        </span>
        <div>
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "AlertError",
  // todo: markdown/html message
  props: {
    name: {
      type: String,
      default: ''
    },
    message: {
      required: true
    },
  },
  setup (props) {
    const errorMessage = computed(() => props.message?.message ?? props.message ?? '')
    const errorName = computed(() => props.message?.name ?? props.name ?? 'Error')
    return {
      errorMessage,
      errorName,
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 2rem 1fr;
  }
</style>
