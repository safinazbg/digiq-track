<template>
  <div class="lView min-h-screen">
    <LSection class="min-h-screen" :use-margin="false">
      <template #body>
        <MenuBar
          class="fixed w-full h-20 z-50"
          :class="{
            'bg-indigo-900': useColor,
            'bg-[url(/newsHeader.png)] bg-no-repeat bg-cover bg-center h-32 aspect-square':
              $route.name === 'news' || $route.path.startsWith('/news/'),
          }"
        ></MenuBar>

        <div class="lg:flex lg:items-center">
          <div class="min-h-screen w-full">
            <slot name="body">

            </slot>
          </div>

        </div>

      </template>
    </LSection>

  </div>

</template>

<script>
import LSection from "@/components/layout/LSection";
import MenuBar from "@/components/MenuBar.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "LView",
  components: {
    LSection,
    MenuBar,
  },
  setup() {
    const route = useRoute();
    const scrollY = ref(0);
    const windowHeight = ref(0);
    const windowWidth = ref(0);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
        windowHeight.value = window.innerHeight;
        windowWidth.value = window.innerWidth;
        if (windowWidth.value < 1000) {
          windowHeight.value = window.innerHeight * 0.6 - 80;
        } else {
          windowHeight.value = window.innerHeight - 80;
        }
      });
      scrollY.value = window.scrollY;
    });
    const useColor = computed(
      () =>
        (scrollY.value > windowHeight.value && route.path === "/") ||
        (route.path !== "/news" &&
          !route.path.startsWith("/news/") &&
          route.path !== "/")
    );

    return {
      useColor,
    };
  },
};
</script>

<style scoped></style>
