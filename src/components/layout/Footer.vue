<template>
  <footer class="bg-gray-900 text-gray-400 mt-12">
    <LSection>
      <template #body>
        <div
          class="container mx-auto py-10 flex flex-col items-start h6:flex-row gap-12 h6:gap-0"
        >
          <div class="flex-1 text-xs">
            <img
              src="../../../public/logo.svg"
              alt="EQRC Logo"
              class="h-10 mb-2"
            />
            <ul>
              <li class="hover:underline">
                <router-link to="/organisations">Organisations</router-link>
              </li>
              <li class="hover:underline">
                <router-link to="/news">News</router-link>
              </li>
              <li class="hover:underline">
                <router-link to="/accords">Accords</router-link>
              </li>
              <li class="hover:underline">
                <!--                <button :onClick="() => $router.push(`/about/us`)">
                  About
                </button>-->
                <router-link to="/about/us">About</router-link>
              </li>
            </ul>
          </div>

          <!--          <div class="flex-1">
            <div class="flex items-center gap-4">
              <a href="#"
                ><i class=""></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="currentColor"
                  style="color: #0077b5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
              <a href="#"
                ><i class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="currentColor"
                    style="color: #1da1f2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg> </i
              ></a>
            </div>
          </div>-->
          <div class="flex-1 flex-col">
            <img
              src="https://www.digiq.eu/img/euflag.1d437774.png"
              alt=""
              class="w-16 object-contain h-10 mb-2"
            />
            <p class="text-xs">
              This project has received funding from the European Union.
            </p>
            <div class="flex">
              <label class="text-xs"
                >Check
                <a
                  class="text-blue-600 text-xs"
                  href="/PrivacyPolicyAgreement.pdf"
                  target="_blank"
                >
                  privacy policy</a
                ></label
              >
            </div>
            <div class="flex">
              <label class="text-xs"
                >Check
                <a
                  class="text-blue-600 text-xs"
                  href="/PersonalDataAgreement.pdf"
                  target="_blank"
                >
                  terms and conditions</a
                ></label
              >
            </div>
            <div class="flex">
              <label class="text-xs">
                Check
                <a
                  class="text-blue-600 text-xs"
                  href="/CookiePolicy.pdf"
                  target="_blank"
                >
                  Cookie Policy
                </a>
                <!--                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="15px"
                  height="15px"
                  class=""
                >
                  <path
                    fill="#ffffff"
                    d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"
                  />
                </svg>-->
              </label>
            </div>
          </div>
        </div>
      </template>
    </LSection>
    <div class="bg-gray-800 py-4">
      <div class="container mx-auto text-center text-sm">
        <p>
          &copy; European Quantum Readiness Center 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import LSection from "@/components/layout/LSection.vue";

export default {
  components: { LSection },
  name: "Footer",
  setup() {
    console.log("Footer.vue setup()");
    return {};
  },
};
</script>

<style scoped></style>
