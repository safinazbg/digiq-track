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
        <LModal
          v-show="modalComponentName"
          class="fixed h-full w-full bg-black/30"
          style="z-index: 4000"
          @close="onModalClose"
        >
          <template #body>
            <div v-if="modalComponentName">
              <component
                :is="modalComponentName"
                @close="onModalClose"
                @done="onModalClose"
              ></component>
            </div>
          </template>
        </LModal>
        <div class="relative w-full flex flex-col items-stretch">
          <div class="h-full mt-32">
            <router-view></router-view>
          </div>
        </div>
      </template>
    </lView>
    <Footer></Footer>
  </div>
</template>

<script>
import LView from "@/components/layout/LView";
import { computed, shallowRef, watch } from "vue";
import { useQueryParam } from "@/composables/useQueryParam";
import LModal from "@/components/layout/LModal";
import { _PUT_STATUS, LIST_ASSETS, RESUME_SESSION } from "@/store/operations";
import { useStore } from "vuex";
import Login from "@/components/authentication/Login";
import { useRouter } from "vue-router";
import RegisterUserAccount from "@/components/authentication/RegisterUserAccount";
import ManageAssetMembers from "@/components/admin/ManageAssetMembers.vue";
import ManageAppUsers from "@/components/admin/ManageAppUsers.vue";
import { useUserPermissions } from "@/composables/useUserPermissions";
import AssetStatus from "@/components/asset/AssetStatus.vue";
import { state } from "@/store";
import { withoutPostfix } from "@/lib/prefixPostfix";
import Footer from "@/components/layout/Footer.vue";

const modalComponentNames = {
  login: Login,
  "sign up": RegisterUserAccount,
  ManageMembers: ManageAssetMembers,
};
const appAdminModalComponentNames = {
  ManageAppUsers: ManageAppUsers,
};

export default {
  name: "App",
  components: {
    AssetStatus,
    LModal,
    Login,
    LView,
    RegisterUserAccount,
    ManageAssetMembers,
    ManageAppUsers,
    Footer,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const self = useUserPermissions();
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

    watch(
      router.currentRoute,
      (route) => {
        const { query } = route;
        const { modal } = query;
        modalComponentName.value = modalComponentNames[modal];
        if (!modalComponentName.value && self.user.value?.__isAppAdmin)
          modalComponentName.value = appAdminModalComponentNames[modal];
        modalComponentName.value = modalComponentName.value ?? "";
      },
      { immediate: true }
    );

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
