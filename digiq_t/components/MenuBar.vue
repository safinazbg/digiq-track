<template>
    <LSection>
        <template #body
        >
            <nav
                    :key="showMenu"
                    class="menuBar pt-2 h-20 text-gray-100 font-light text-sm dark:bg-gray-900"
            >
                <div class="flex flex-wrap justify-between mt-3 h6:mt-0 items-center z-10">
                    <a href="/" class="flex">
                        <img src="../../public/logo.svg" class="h-10 h6:mt-0 h6:h-16"/>
                    </a>
                    <div
                            class="hidden k1:visible k1:flex k1:gap-4 absolute left-1/2 -translate-x-1/2"
                    >
                        <router-link to="/organisations">Organisations</router-link>
                        <router-link to="/accords">Accords</router-link>
                        <router-link to="/news">News</router-link>
                        <router-link to="/about/us">About</router-link>
                    </div>
                    <div class="k1:ml-8 gap-2 items-center flex k1:gap-4">
                        <!-- <button
                          @click="$router.push({ query: { modal: 'sign up' } })"
                          class="bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Sign up
                        </button> -->
                        <button
                                v-if="!isLoggedIn"
                                class="button main"
                                style="background-image: linear-gradient(to right, #db2777, #f97316); "
                                @click="$router.push({ path: '/', query: { modal: 'login' } })"
                        >
                            Log In
                        </button>
                        <div v-else-if="account">
                            <div class="flex text-xs gap-2 items-center">
                                <div>Welcome {{ splitName }}</div>

                                <button
                                        class="hidden h6:block button main"
                                        style="background-image: linear-gradient(to right, #db2777, #f97316); "
                                        @click="onLogout"
                                >
                                    Log Out
                                </button>
                                <!--                        <div class="k1:block hidden" v-if="user?.__isAppAdmin">-->
                                <!--                            <button-->
                                <!--                                    class="button main"-->
                                <!--                                    style="background-image: linear-gradient(to right, #db2777, #f97316); "-->
                                <!--                                    @click="$router.push({query: {modal: 'ManageAppUsers'}})"-->
                                <!--                            >-->
                                <!--                                Manage Users-->
                                <!--                            </button>-->
                                <!--                        </div>-->
                            </div>

                        </div>
                        <button
                                type="button"
                                class="bg-transparent inline-flex items-center p-2 ml-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 k1:hidden"
                                @click="showMenu = !showMenu"
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>

                    </div>
                    <div
                            v-if="showMenu"
                            id="navbar-default"
                            class="w-full k1:hidden k1:w-auto"
                            :class="{ hidden: !showMenu }"
                            @click="() => showMenu = false"
                    >
                        <div
                                class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-200 md:flex-row k1:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <router-link
                                    to="/"
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'home',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'home',
                }"
                            >
                                Home
                            </router-link>

                            <router-link
                                    to="/organisations"
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'organisations',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'organisations',
                }"
                            >
                                Organisations
                            </router-link>

                            <router-link
                                    to="/accords"
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'accords',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'accords',
                }"
                            >
                                Accords
                            </router-link>
                            <router-link
                                    to="/news"
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'news',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'news',
                }"
                            >
                                News
                            </router-link>
                            <router-link
                                    to="/about/us"
                                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'about/us',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'about/us',
                }"
                            >
                                About
                            </router-link>

                            <router-link v-if="user?.__isAppAdmin"
                                         @click="$router.push({query: {modal: 'ManageAppUsers'}})"
                                         to="manageAppUsers"
                                         class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                         :class="{
                  'text-white bg-blue-700 hover:bg-gray-600':
                    $route.name === 'manageAppUsers',
                  'hover:bg-gray-200 hover:text-gray-700':
                    $route.name !== 'manageAppUsers',
                }"
                            >
                                Manage Users
                            </router-link>
                            <div @click="onLogout" v-if="account && checkScreenWidth"
                                 class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >Logout
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </template>
    </LSection>
</template>
<script>
import LSection from "@/components/layout/LSection.vue";
import {ref, onMounted, onBeforeUnmount, computed} from "vue";
import {useUserPermissions} from "@/composables/useUserPermissions";
import {useStore} from "vuex";
import {LOGOUT} from "@/store/operations";
import {capitalize} from "@/lib/typeHelpers";
import manageMembers from "@/components/admin/ManageAssetMembers.vue";

export default {
  computed: {
    manageMembers() {
      return manageMembers
    }
  },
  components: {
    LSection,
  },
  name: "MenuBar",
  setup() {
    const {isLoggedIn, account, user} = useUserPermissions();
    const showMenu = ref(false);
    const store = useStore();
    const onLogout = () => {
      store.dispatch(LOGOUT)
    };
    // if the screen width is less than 1000px, show the menu
    const checkScreenWidth = () => {
      return window.innerWidth < 1000;
    }
    // Add closeMenu method
    const closeMenu = () => {
      showMenu.value = false;
    };
    // Split first word of account.name, but only when account.name exists
    const splitName = computed(() => capitalize(account.value?.name.split(" ")[0] ?? ""));

    // Add onClickOutside method
    const onClickOutside = (event) => {
      const menuElement = event.target.closest(".menuBar");
      if (!menuElement) {
        closeMenu();
      }
    };

    // Add and remove the onClickOutside listener
    onMounted(() => {
      document.addEventListener("click", onClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", onClickOutside);
    });


    return {
      isLoggedIn,
      onLogout,
      showMenu,
      account,
      splitName,
      user,
      checkScreenWidth,
    };
  },
};
</script>

<style scoped></style>
