<script>
import {defineComponent, ref, watch} from 'vue'
import LTabs from '@/components/layout/LTabs.vue'
import LResourceCards from "./resources/LResourceCards.vue";
import LResourceCard from "./resources/LResourceCard.vue";

export default defineComponent({
  name: "cResources",
  components: {
    LResourceCard,
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
    const onSelect = (index) => {
      selectedTab.value = index
    }

    return {
      tabLabels,
      selectedTab,
      onSelect,
      resources: {
        courses: [
          {
            title: "Semiconductor Physics, Transport, and Spintronics",
            area: "Spain",
            institution: "Universitat Autònoma de Barcelona",
            ECTS: 2,
            inPerson: true,
            schedule: "3 lectures per week",
            homework: "4 hours of homework",
            exam: "Written take-home exam",

          }
        ],
        internships: [],
        networks: []
      }
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
        <LResourceCards>
          <template #cards>
            <LResourceCard
                v-for="(res, index) in cards"
                :key="index"
            >
              <template></template>
            </LResourceCard>

          </template>
          <template #details>

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