<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";
import {useUserPermissions} from "@/composables/useUserPermissions";
import TextInput from "@/components/forms/TextInput.vue";
import Magnify from "@/components/icons/Magnify.vue";
import Button from "@/components/forms/Button.vue";

export default defineComponent({
  name: "LandingHeader",
  components: {Button, Magnify, TextInput, Header},
  setup() {
    const {isLoggedIn} = useUserPermissions()
    return {isLoggedIn}
  }
})
</script>

<template>
  <Header
      class="resourcesHeader"
      src="url(/public/quantum.jpg)"
  >
    <div class="
      landingHeader
      relative
      w-full h-full
      text-center text-white
      flex flex-col justify-center items-center
    ">
        <div class="text-3xl font-bold mb-2">
          Join the DigiQ education track
        </div>
        <p class="text-lg text-gray-200">
          Discover courses, internships, and network opportunities to get <br>
          the most out of your degree!
        </p>
        <div class="flex flex-row mt-6">
          <TextInput
              class="rounded-none h-12"
              placeholder="What Subject?"
          ></TextInput>
          <TextInput
              class="rounded-none h-12"
              placeholder="Where?"
          ></TextInput>
          <Button
              :isPrimary="true"
          >
            <template #left>
              <Magnify class="pr-2"></Magnify>
            </template>

            <template #center>
              Search
            </template>
          </Button>
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