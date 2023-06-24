<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CourseDetails",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
})
</script>

<template>
<div class="courseDetails p-4 bg-white">

  <div class="text-xl font-bold">
    {{ course.title }}
  </div>

  <div class="flex flex-col">

    <div class="w-full flex mb-6">
      <div class="text-sm w-20">
        {{ course.area }}
      </div>
      <div class="w-full text-sm border-l border-l-black pl-2">
        {{ course.organisation }}
      </div>
    </div>

    <div class="w-full flex mb-2">
      <div class=" w-1/2 flex gap-4 items-center">
        <span>Points Awarded</span>
        <div class="text-sm ">
          {{ course.ECTS }} ECTS
        </div>
      </div>
      <div class=" w-1/2 flex gap-4 items-center">
        <span>Date Available</span>
        <div class="text-sm ">
          {{ course.homework }}
        </div>
      </div>
    </div>

    <div class="w-full mb-2">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cupiditate iste officiis recusandae rem tempore voluptatem. Aperiam, dolor praesentium.
      </div>
    </div>

    <div class="mb-2">
      <div class="flex gap-4 items-center">
        <span>Prerequisites</span>
        <div>Quantum Mechanics, Basic solid state physics</div>
      </div>
      <div class="flex gap-4 items-center">
        <span>Teacher</span>
        <div class="text-sm ">
          {{ course.teacher }}
        </div>
      </div>
    </div>

  </div>
<!--  date available-->
<!--  numberOfLectures-->
<!--  description-->
<!--  competence framework topics-->
<!--  prerequisites-->
<!--  teacher-->
</div>
</template>

<style scoped>

</style>