<script>
import {defineComponent, ref, watch} from 'vue'
import LTabs from '@/components/layout/LTabs.vue'
import LResourceCards from "./resources/LResourceCards.vue";
import CourseDetails from "./resources/CourseDetails.vue";
import Courses from "./resources/Courses.vue";

export default defineComponent({
  name: "cResources",
  components: {
    CourseDetails,
    Courses,
    LResourceCards,
    LTabs
  },
  props: {
    type: {
      type: String,
      default: 'courses'
    }
  },
  setup(props) {
    const tabLabels = [
      'Courses',
      'Internships',
      'Networks'
    ]
    const selectedTab = ref(0)
    watch(() => props.type, value => {
      value = value || 'courses'
      selectedTab.value = tabLabels
          .map(item => item.toLowerCase())
          .indexOf(value)
    }, {
      immediate: true
    })
    const selectedItem = ref(null)
    const onSelectTab = (index) => {
      selectedTab.value = index
    }
    const onSelectItem = (item) => {
      selectedItem.value = item
    }

    return {
      tabLabels,
      selectedTab,
      onSelectItem,
      onSelectTab,
      resources: {
        internships: [],
        networks: []
      },
      selectedItem,
    }
  }
})
</script>

<template>
  <div class="resources">
    <LTabs
        :labels="tabLabels"
        :selected="selectedTab"
        :update="onSelectTab"
    >
      <template #one>
        <LResourceCards class="mt-16">
          <template #cards>
            <Courses
                @select="onSelectItem"
            ></Courses>
          </template>
          <template #details>
            <CourseDetails
                v-if="selectedItem"
                :course="selectedItem"
            ></CourseDetails>
          </template>
        </LResourceCards>
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