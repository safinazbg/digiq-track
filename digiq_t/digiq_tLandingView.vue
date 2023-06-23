<template>
  <div class="landing -mt-32">
    <Header></Header>
    <LSection class="sectionMarginY !mb-48">
      <template #body>
        <router-view></router-view>
      </template>
    </LSection>
  </div>
</template>

<script>
import Header from "../../digiq_t/components/Header.vue";
import { state } from "@/store";
import { computed } from "vue";
import LSection from "@/components/layout/LSection.vue";
export default {
  name: "digiq_tLandingView",
  components: {
    Header,
    LSection,
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
