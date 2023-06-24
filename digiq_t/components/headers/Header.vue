<template>
  <div
      class="
        header
        bg-cover
        flex flex-column items-center justify-center
        h-[30vh]
    "
      :style="{
        backgroundImage: src,
        backgroundPosition: 'center center'
      }
    "
  >
    <slot></slot>
  </div>
</template>

<script>
import {useUserPermissions} from "@/composables/useUserPermissions";

export default {
  name: "cHeader",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  setup() {
    const {isLoggedIn, user} = useUserPermissions();
    return {
      isLoggedIn,
      user,
    };
  },
};
</script>

<style scoped></style>
