<template>
  <div class="landing -mt-32">
    <Header></Header>
    <LSection class="sectionMarginY !mb-48">
      <template #body>
        <MenuBar class="fixed w-full h-20 z-50"></MenuBar>
        <router-view></router-view>
        <Footer></Footer>
      </template>
    </LSection>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue";
import { state } from "@/store";
import { computed } from "vue";
import LSection from "@/components/layout/LSection.vue";
export default {
  name: "digiq_tLandingView",
  components: {
    Footer,
    Header,
    LSection,
    MenuBar,
  },
  setup() {
    const clientId = computed(() => state.clientId);
    return {
      clientId,
      state,
    };
  },
};
</script>

<style scoped></style>
