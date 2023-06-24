<template>
  <LSection>
    <template #body>
      <nav
          :key="showMenu"
          class="menuBar pt-2 h-20 font-light text-sm dark:bg-gray-900"
      >
        <div class="flex flex-wrap justify-between mt-3 h6:mt-0 items-center z-10">
          <a href="/" class="flex">
            <img src="../public/logo.png" class="h-10 h6:mt-0 h6:h-16"/>
          </a>
          <div
              class="
                  hidden k1:visible
                  absolute left-1/2
                  k1:flex k1:gap-4
                  font-bold
          ">
            <router-link to="/">Home</router-link>
            <router-link to="/info">Info</router-link>
            <router-link to="/resources">Resources</router-link>
            <router-link
                v-if="isLoggedIn"
                to="/dashboard"
            >My Dashboard</router-link>
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
                <button
                    class="hidden h6:block button main"
                    style="background-image: linear-gradient(to right, #db2777, #f97316); "
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
                class="
                    inline-flex items-center
                    p-2 ml-0
                    rounded-lg
                    k1:hidden
                    text-sm text-gray-500
                    bg-transparent
                    hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-200
                    dark:text-gray-400
                    dark:hover:bg-gray-700
                    dark:focus:ring-gray-600
                "
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
            <div class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-200 k1:flex-row k1:space-x-8 k1:mt-0 k1:text-sm k1:font-medium k1:border-0 k1:bg-white dark:bg-gray-800 k1:dark:bg-gray-900 dark:border-gray-700">
              <router-link
                  to="/"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 k1:hover:bg-transparent k1:border-0 k1:hover:text-blue-700 k1:p-0 dark:text-gray-400 k1:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white k1:dark:hover:bg-transparent"
                  :class="{
                    'text-white bg-blue-700 hover:bg-gray-600': $route.name === 'home',
                    'hover:bg-gray-200 hover:text-gray-700': $route.name !== 'home',
                  }"
              >
                Home
              </router-link>

              <router-link
                  to="/info"
                  class="
                      block
                      rounded
                      py-2 pr-4 pl-3
                      text-gray-700
                      dark:text-gray-400
                      dark:hover:bg-gray-700
                      dark:hover:text-white
                      k1:dark:hover:text-white
                      k1:dark:hover:bg-transparent
                      k1:p-0
                      k1:hover:bg-transparent
                      k1:hover:text-blue-700
                      k1:border-0
                  "
                  :class="{
                    'text-white bg-blue-700 hover:bg-gray-600': $route.name === 'info',
                    'hover:bg-gray-200 hover:text-gray-700': $route.name !== 'info',
                  }"
              >
                Organisations
              </router-link>

              <router-link
                  to="/resources"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 k1:hover:bg-transparent k1:border-0 k1:hover:text-blue-700 k1:p-0 dark:text-gray-400 k1:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white k1:dark:hover:bg-transparent"
                  :class="{
                    'text-white bg-blue-700 hover:bg-gray-600': $route.name === 'resources',
                    'hover:bg-gray-200 hover:text-gray-700': $route.name !== 'resources',
                  }"
              >
                Accords
              </router-link>

              <div
                  v-if="account && checkScreenWidth"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 k1:hover:bg-transparent k1:border-0 k1:hover:text-blue-700 k1:p-0 dark:text-gray-400 k1:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white k1:dark:hover:bg-transparent"
              >
                Logout
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
import {capitalize} from "@/lib/typeHelpers/stringFunctions/capitalization";

export default {
  components: {
    LSection,
  },
  name: "MenuBar",
  setup() {
    const {isLoggedIn, account, user} = useUserPermissions();
    const showMenu = ref(false);
    // if the screen width is less than 1000px, show the menu
    const checkScreenWidth = () => {
      return window.innerWidth < 1000;
    }

    // Split first word of account.name, but only when account.name exists
    const accountFirstName = computed(() => capitalize(account.value?.name.split(" ")[0] ?? ""));
    const closeMenu = () => showMenu.value = false

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
      showMenu,
      account,
      splitName: accountFirstName,
      user,
      checkScreenWidth,
    };
  },
};
</script>

<style scoped></style>
