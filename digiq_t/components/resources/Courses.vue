<script>
import {defineComponent, ref} from 'vue'
import LResourceCard from "./LResourceCard.vue";
import Course from "./Course.vue";
export default defineComponent({
  emits: ['select'],
  name: "cCourses",
  components: {
    Course,
    LResourceCard
  },
  setup(props, {emit}) {

    const items = [
      {
        title: "Semiconductor Physics, Transport, and Spintronics",
        area: "Spain",
        organisation: "Universitat Autònoma de Barcelona",
        ECTS: 2,
        inPerson: true,
        schedule: "3 lectures per week",
        homework: "4 hours of homework",
        examType: "Written take-home exam",
      },
      {
        title: "Quantum Programming",
        area: "Praque",
        organisation: "Czech Republic Technical University",
        ECTS: 2,
        inPerson: true,
        schedule: "3 lectures per week",
        homework: "4 hours of homework",
        examType: "Written take-home exam",
      },
      {
        title: "Quantum Liquids",
        area: "Pisa",
        organisation: "University of Pisa",
        ECTS: 2,
        inPerson: true,
        schedule: "3 lectures per week",
        homework: "4 hours of homework",
        examType: "Written take-home exam",
      }
    ]
    const selectedItem = ref(null)
    const onSelect = (selected) => {
      selectedItem.value = items.find(item => item.title === selected.title)
      emit('select', selected)
    }
    return {
      items,
      onSelect,
      selectedItem,
    }
  }
})
</script>

<template>
  <div class="courses flex flex-col gap-4 p-4">
    <LResourceCard
        v-for="(item, index) in items"
        :key="index"
        :is-selected="item.title === selectedItem?.title"
        @click.stop="() => onSelect(item)"
    >
      <Course :course="item"></Course>
    </LResourceCard>
  </div>
</template>

<style scoped>

</style>