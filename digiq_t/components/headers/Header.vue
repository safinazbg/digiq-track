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
        backgroundImage: 'url(@public/landing.jpg)',
        backgroundPosition: 'center top'
      }
    "
  >
    <!--    <LParticles class="pointer-events-none"></LParticles>-->
    <section class="">
      <div class="pt-4 pb-12 k1:pt-36 k1:pb-20">
        <router-view name="header"></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import {useUserPermissions} from "@/composables/useUserPermissions";

export default {
  name: "cHeader",
  components: {},
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
