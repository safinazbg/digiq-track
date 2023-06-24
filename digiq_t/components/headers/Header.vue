<template>
  <div
      class="
        header
        bg-cover
        h-[60vh]
        pt-24
        k1:p-12 k1:pb-96
    "
      :style="{
        backgroundImage: src,
        backgroundPosition: 'center top'
      }
    "
  >
    <section class="">
      <div class="pt-4 pb-12 k1:pt-36 k1:pb-20">
        <slot></slot>
      </div>
    </section>
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
      default: "url(@public/landing.jpg)",
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
