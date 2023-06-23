<template>
  <div class="landing -mt-32">
    <Header></Header>
    <LSection class="sectionMarginY !mb-48">
      <template #body>
        <h3 class="heading2 w-full h-full mt-0 mb-10">What's happening</h3>
        <CardsNews></CardsNews>
      </template>
    </LSection>
  </div>
</template>

<script>
import Header from "../../digiq_t/components/Header.vue";
import { state } from "@/store";
import { computed } from "vue";
import LSection from "@/components/layout/LSection.vue";
import CardsNews from "../../digiq_t/components/News/CardsNews";
export default {
  name: "LandingView",
  components: {
    Header,
    LSection,
    CardsNews,
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
