<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";

export default defineComponent({
  name: "InfoHeader",
  components: {Header}
})
</script>

<template>
  <Header>
    <div class="infoHeader">InfoHeader</div>
  </Header>
</template>

<style scoped>

</style>