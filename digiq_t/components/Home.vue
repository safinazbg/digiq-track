<template>
  <div class="home">
    <p class="
        text-center
        text-4xl
    ">
      Create an account to see what is available for <br>
      students at your university
    </p>
    <div class="flex w-full items-center justify-center">
      <Login class="w-1/2 text-center"></Login>
    </div>
  </div>
</template>

<script>
import Login from "@/components/authentication/Login.vue";

export default {
  name: "cHome",
  components: {
    Login,
  },
  props: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>

</style>