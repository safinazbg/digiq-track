<template>
  <div
      class="header relative"
  >
    <div
        class="bg-cover"
        :style="{
        backgroundImage: src,
        backgroundPosition: 'center center',
      }
    "
    >
      <div class="
          tint-overlay
          flex flex-column items-center justify-center
          h-[30vh]
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {useUserPermissions} from "@/composables/useUserPermissions";
import {withPostfix, withPrefix} from "@/lib/typeHelpers/stringFunctions/prefixPostfix";

export default {
  name: "cHeader",
  methods: {withPostfix, withPrefix},
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  setup() {
    const {isLoggedIn, user} = useUserPermissions();

    return {
      isLoggedIn,
      user,
    };
  },
};
</script>

<style scoped>

</style>
