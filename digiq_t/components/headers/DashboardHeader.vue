<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";
export default defineComponent({
  name: "DashboardHeader",
  components: {
    Header
  },
})
</script>

<template>
<div class="dashboardHeader">
  <Header>
      DashboardHeader
  </Header>
</div>
</template>

<style scoped>

</style>