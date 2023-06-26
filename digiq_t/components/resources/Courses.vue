<script>
import {computed, defineComponent, ref} from 'vue'
import LResourceCard from "./LResourceCard.vue";
import Course from "./Course.vue";
import {state} from "@/store";
export default defineComponent({
  emits: ['select'],
  name: "cCourses",
  components: {
    Course,
    LResourceCard
  },
  setup(props, {emit}) {
    const courses = computed(() =>
        Object.values(state.assets)
            .filter(item => item.dataType === 'Course')
    )
    const selectedItem = ref(null)
    const onSelect = (selected) => {
      selectedItem.value = courses.value.find(item => item.title === selected.title)
      emit('select', selected)
    }
    return {
      courses,
      onSelect,
      selectedItem,
    }
  }
})
</script>

<template>
  <div class="courses flex flex-col gap-4 p-4">
    <LResourceCard
        v-for="(item, index) in courses"
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