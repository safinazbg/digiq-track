<script>
import {defineComponent, ref} from 'vue'
import LTabs from '@/components/layout/LTabs.vue'

export default defineComponent({
  name: "cResources",
  components: {
    LTabs
  },
  setup () {
    const tabLabels = [
      'Courses',
      'Internships',
      'Networks'
    ]
    const selectedTab = ref(0)
    const onSelect = (index) => {
      selectedTab.value = index
    }
    return {
      tabLabels,
      selectedTab,
      onSelect
    }
  }
})
</script>

<template>
<div class="resources">
  <LTabs
      :labels="tabLabels"
      :selected="selectedTab"
      :update="onSelect"
  >
    <template #one>
Courses
    </template>
    <template #two>
Internships
    </template>
    <template #three>
Networks
    </template>
  </LTabs>
</div>
</template>

<style scoped>

</style>