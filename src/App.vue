<template>
  <div class="app flex flex-col min-h-screen">
    <lView class="app relative text-slate-900">
      <template #body>
        <LModal
            v-for="(actionError, index) in actionErrors"
            :key="index"
            class="fixed"
            :clickable="false"
            style="z-index: 4002; margin-top: 1rem"
        >
          <template #body>
            <AssetStatus
                :contextName="actionError.name"
                :error="actionError"
                @click="() => onAcknowledgeActionError(actionError)"
            ></AssetStatus>
          </template>
        </LModal>
        <div class="relative w-full flex flex-col items-stretch">
          <div class="h-full mt-32">
            <Digiq_t-landing-view></Digiq_t-landing-view>
          </div>
        </div>
      </template>
    </lView>
    <Footer></Footer>
  </div>
</template>

<script>
import LView from "@/components/layout/LView";
import { computed, shallowRef } from "vue";
import { useQueryParam } from "@/composables/useQueryParam";
import LModal from "@/components/layout/LModal";
import { _PUT_STATUS, LIST_ASSETS, RESUME_SESSION } from "@/store/operations";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AssetStatus from "@/components/AssetStatus.vue";
import { state } from "@/store";
import { withoutPostfix } from "@/lib/typeHelpers/stringFunctions/prefixPostfix";
import Footer from "../digiq_t/components/Footer.vue";
import Digiq_tLandingView from "../digiq_t/digiq_tLandingView.vue";

export default {
  name: "App",
  components: {
    Digiq_tLandingView,
    AssetStatus,
    LModal,
    LView,
    Footer,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const modalComponentName = shallowRef("");
    const { isWorkshopSession } = useQueryParam("isWorkshopSession", true);

    const actionErrors = computed(() =>
        Object.entries(state.status)
            // eslint-disable-next-line no-unused-vars
            .filter(([key, value]) => value?.isError === true)
            .map(([name, value]) => ({
              actionName: name,
              name: withoutPostfix(withoutPostfix(name, "Error"), " Error"),
              message: value.body,
            }))
    );
    const permissionItems = {
      readAsset: "Read Asset",
      maintainAsset: "Maintain Asset",
      developAsset: "Create, Edit, Delete Asset",
      manageAsset: "Manage Asset",
    };
    store.dispatch(LIST_ASSETS, { dataType: "Organisation" });
    store.commit(RESUME_SESSION);

    const onModalClose = () => {
      router.push({ query: {} });
    };
    const onAcknowledgeActionError = (action) => {
      const { actionName } = action;
      console.log(93, actionName);
      store.commit(_PUT_STATUS, {
        event: actionName,
        result: {
          _status: { isError: false, body: null },
        },
      });
    };

    return {
      actionErrors,
      isWorkshopSession,
      modalComponentName,
      onAcknowledgeActionError,
      onModalClose,
      permissionItems,
      state,
    };
  },
};
</script>
<style lang="css">
.button.main,
.button.primary,
button.main,
button.primary {
  background-image: linear-gradient(
      to bottom right,
      #db2777,
      #f97316
  ) !important;
}

.button.main:hover,
.button.primary:hover,
button.main:hover,
button.primary:hover {
  background-image: linear-gradient(to top left, #db2777, #f97316) !important;
}

.gradientLine {
  background-image: linear-gradient(to bottom right, #db2777, #f97316);
}

.gradientLine:hover {
  background-image: linear-gradient(to bottom left, #db2777, #f97316);
}
</style>
