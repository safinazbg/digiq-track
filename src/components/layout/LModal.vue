<template>
  <div
    class="lModal modal fade fixed top-0 left-0 w-full h-full flex items-center outline-none overflow-x-hidden overflow-y-auto"
    :class="{ 'pointer-events-none': !clickable }"
    id="staticBackdropLabel"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    @click="onClose"
  >
    <div
      class="modal-dialog relative m-auto pointer-events-none flex items-center justify-center"
      v-bind="$attrs"
    >
      <div
        class="modal-content border-none outline-none shadow-lg flex flex-col pointer-events-auto bg-clip-padding text-current"
        @click.stop
      >
        <slot name="body">modal</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LModal",
  emits: ["close"],
  props: {
    clickable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const onClose = () => emit("close");
    return {
      onClose,
    };
  },
};
</script>

<style scoped></style>
