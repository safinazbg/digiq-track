<script>
import {defineComponent} from 'vue'
import Check from "@/components/icons/Check.vue";

export default defineComponent({
  name: "cCourse",
  components: {
    Check
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="course">
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
          <Check/>
          <div class="text-sm ">
            {{ course.ECTS }} ECTS
          </div>
        </div>
        <div class=" w-1/2 flex gap-4 items-center">
          <Check/>
          <div class="text-sm ">
            {{ course.homework }}
          </div>
        </div>
      </div>

      <div class="w-full flex mb-2">
        <div class="w-1/2 flex gap-4 items-center">
          <Check/>
          <div class="text-sm ">
            {{ course.inPerson ? "In person" : "Online" }}
          </div>
        </div>
        <div class="w-1/2 flex gap-4 items-center">
          <Check/>
          <div class="text-sm ">
            {{ course.examType }}
          </div>
        </div>
      </div>
        <div class="flex gap-4 items-center">
          <Check/>

          <div class="text-sm">
            {{ course.schedule }}
          </div>
        </div>

    </div>
  </div>
</template>

<style scoped>

</style>