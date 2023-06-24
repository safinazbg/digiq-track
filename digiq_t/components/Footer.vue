<template>
  <footer class="mt-12 bg-gray-400">
    <LSection>
      <template #body>
        Footer
      </template>
    </LSection>
  </footer>
</template>

<script>
import LSection from "@/components/layout/LSection.vue";

export default {
  components: { LSection },
  name: "cFooter",
  setup() {
    console.log("Footer.vue setup()");
    return {};
  },
};
</script>

<style scoped></style>
