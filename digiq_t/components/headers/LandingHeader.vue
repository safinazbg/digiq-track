<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";
import {useUserPermissions} from "@/composables/useUserPermissions";

export default defineComponent({
  name: "LandingHeader",
  components: {Header},
  setup() {
    const {isLoggedIn} = useUserPermissions()
    return {isLoggedIn}
  }
})
</script>

<template>
  <Header
      src="url(@public/landing.jpg)"
  >
    <div class="
      landingHeader
      relative
      w-full h-full
    ">
      <div class="tint-overlay"></div>
      <div class="relative z-10 w-full h-full flex flex-col items-center justify-center">
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
                @click="$router.push('/info')"
            >
              Create Organisation
            </button>
          </div>
        </div>
      </div>
    </div>
  </Header>

</template>

<style scoped>
.tint-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.5) for desired tint intensity */
}
</style>