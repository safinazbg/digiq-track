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
import Header from "../../eqrc/components/Header.vue";
import { state } from "@/store";
import { computed } from "vue";
import LSection from "@/components/layout/LSection.vue";
import CardsNews from "../../eqrc/components/News/CardsNews";
import SectionImageAndText from "@/components/SectionImageAndText.vue";
import ThePrinciples from "../../eqrc/components/ThePrinciples.vue";
import HowDoesItWork from "../../eqrc/components/HowDoesItWork.vue";
export default {
  name: "LandingView",
  components: {
    HowDoesItWork,
    ThePrinciples,
    Header,
    LSection,
    CardsNews,
    SectionImageAndText,
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
