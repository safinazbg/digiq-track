<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";
import TextInput from "@/components/forms/TextInput.vue";
import Button from "@/components/forms/Button.vue";
import Magnify
export default defineComponent({
  name: "ResourcesHeader",
  components: {
    Button,
    Header,
    TextInput
  },
})
</script>

<template>
  <Header>
    <div class="resourcesHeader text-center ">
      <div class="text-3xl font-bold mb-2">
        Join the DigiQ education track
      </div>
      <p class="text-lg text-gray-500">
        Discover courses, internships, and network opportunities to get <br>
        the most out of your degree!
      </p>
      <div class="flex flex-row mt-6">
        <TextInput
            class="rounded-none"
            placeholder="What Subject?"
        ></TextInput>
        <TextInput
            class="rounded-none"
            placeholder="Where?"
        ></TextInput>
        <Button>
          <template #left>

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

</style>