<template>
  <div class="landing -mt-32">
    <LSection class="h-screen">
      <template #body>
        <MenuBar class="fixed w-full z-50 top-0"></MenuBar>
        <div class="flex flex-col pt-20 min-h-screen">
          <div class="flex-grow flex flex-col">
            <router-view class="flex-grow" name="header"></router-view>
            <router-view class="flex-grow"></router-view>
          </div>
          <Footer class="relative bottom-0"></Footer>
        </div>

      </template>
    </LSection>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue";
import {state} from "@/store";
import {computed} from "vue";
import LSection from "@/components/layout/LSection.vue";

``
export default {
  name: "digiq_tLandingView",
  components: {
    Footer,
    LSection,
    MenuBar,
  },
  setup() {
    const clientId = computed(() => state.clientId);
    return {
      clientId,
    };
  },
};
</script>

<style scoped>

</style>
