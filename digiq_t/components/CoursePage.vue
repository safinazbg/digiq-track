<script>
import {computed, defineComponent} from 'vue'
import {state} from "@/store";
import Button from '@/components/forms/Button.vue'

export default defineComponent({
  name: "CoursePage",
  components: [
    Button,
  ],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = computed(() =>
        Object.values(state.assets)
            .find(item => item.id === props.id)
    )
    return {
      course,
      getImageUrl: url => process.env.NODE_ENV !== 'development' ? `/digiq-track/${url}` : url,
      state,
    }
  }
})
</script>

<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="coursePage relative">
      <div class="relative">
        <div class="relative w-full h-full flex items-center justify-center">
          <Button
              class="primary absolute rounded border w-20">
            Enroll
          </Button>
        </div>
        <img class="w-full" :src="getImageUrl('quantum.jpg')" alt="">
      </div>
      <div class="attributes">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cupiditate iste officiis
              recusandae rem tempore voluptatem. Aperiam, dolor praesentium.
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
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>