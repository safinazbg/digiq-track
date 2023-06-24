<template>
  <div class="landing -mt-32">
    <LSection class="sectionMarginY !mb-48">
      <template #body>
        <MenuBar class="fixed w-full z-50 top-0"></MenuBar>
<!--        <div class="-->
<!--            flex items-center justify-center flex-col-->
<!--        ">-->
<!--          <div class="flex gap-x-8">-->
<!--            <span>view as:</span>-->
<!--            <label>-->
<!--              <input-->
<!--                  type="checkbox"-->
<!--                  :checked="isTeacher"-->
<!--                  onclick="isTeacher=!isTeacher"-->
<!--              >-->
<!--              Teacher-->
<!--            </label>-->
<!--            <label>-->
<!--              <input-->
<!--                  type="checkbox"-->
<!--                  :checked="isRep"-->
<!--                  onclick="isRep=!isRep"-->
<!--              >-->
<!--              Uni Representative-->
<!--            </label>-->
<!--          </div>-->
<!--        </div>-->
        <router-view class="mt-20" name="header"></router-view>
        <router-view></router-view>
        <Footer></Footer>
      </template>
    </LSection>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue";
import {state} from "@/store";
import {computed, ref} from "vue";
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
    const isTeacher = ref(false);
    const isRep = ref(false);
    return {
      clientId,
      isRep,
      isTeacher,
    };
  },
};
</script>

<style scoped></style>
