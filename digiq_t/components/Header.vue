<template>
  <div
    class="header bg-cover k1:pb-96 pt-24 k1:p-12 h-[60vh] k1:h-screen"
    style="
      background-image: url('../../particles_2000.jpg');
      background-position: center top;
    "
  >
<!--    <LParticles class="pointer-events-none"></LParticles>-->
    <section class="">
      <div class="pt-4 pb-12 k1:pt-36 k1:pb-20">
        <div
          class="text-center font-header text-2xl h8:text-3xl k15:text-4xl mb-6 text-gray-300 w-full font-bold tracking-tight leading-none"
        >
          European Quantum Readiness Center

        </div>
        <p
          class="text-center text-lg h8:text-xl k15:text-2xl text-gray-300 font-normal tracking-normal mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Making Europe Quantum Ready for the quantum revolution
        </p>

        <div
          class="max-w-3xl mx-auto text-center justify-center w-full flex items-center"
        >
          <div class="flex gap-4">
            <button
              v-if="!isLoggedIn"
              class="button main"
              style="background-image: linear-gradient(to right, #db2777, #f97316); "
              @click="$router.push('/SignUp')"
            >
              Sign Up
            </button>
            <button
              v-else
              class="button main"
              style="background-image: linear-gradient(to right, #db2777, #f97316); "
              @click="$router.push('/registerOrganisation')"
            >
              Create Organisation
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import LParticles from "@/components/layout/LParticles.vue";
import { useUserPermissions } from "@/composables/useUserPermissions";

export default {
  name: "Header",
  components: {
    // LParticles,
  },
  setup() {
    const { isLoggedIn, user } = useUserPermissions();
    return {
      isLoggedIn,
      user,
    };
  },
};
</script>

<style scoped></style>
