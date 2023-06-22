<template>
  <div class="lLevel h-full w-full">
<!--    <LPaginationArrowFrame-->
<!--        :arrowSize="4"-->
<!--        @go="loadPage"-->
<!--    >-->

<!--      <template #body>-->
        <Level
            v-if="parentImage"
            :key="[level, parentImage].join('-')"
            :level="level"
            :parentImageName="parentImage"
        ></Level>

<!--      </template>-->

<!--    </LPaginationArrowFrame>-->
  </div>
</template>

<script>
import Level from "@/components/Level";
// import LPaginationArrowFrame from "@/components/layout/LPaginationArrowFrame";
import {useRouter} from "vue-router";
import {isNonNegativeInteger} from "@/lib/isNonNegativeInteger.js";
import {useGalleryPagination} from "@/composables/useGalleryPagination.js";
import {state} from '../../store'

export default {
  name: "LLevel",
  emits: ['select'],
  components: {
    Level,
    // LPaginationArrowFrame,
  },
  props: {
    level: {
      default: "0",
      validator: value => isNonNegativeInteger(value)
    },
    parentImageName: {
      default: "0", // single-page root layer
    }
  },
  setup(props, {emit}) {
    const router = useRouter()
    const {
      currentLevel,
      parentImage,
      isAtLeftBoundary,
      isAtRightBoundary,
      isAtUpperBoundary,
      isAtLowerBoundary,
      jumpToLeftBoundary,
      jumpToRightBoundary,
      jumpToUpperBoundary,
      jumpToLowerBoundary,
      loadLeftPage,
      loadRightPage,
      loadSameColumnInPreviousRow,
      loadSameColumnInNextRow,
    } = useGalleryPagination(props.level, props.parentImageName)

    const selectLeftColumn = () => {
      if (isAtLeftBoundary.value) jumpToRightBoundary()
      else loadLeftPage()
    }
    const selectRightColumn = () => {
      if (isAtRightBoundary.value) jumpToLeftBoundary()
      else loadRightPage()
    }
    const selectPreviousRow = () => {
      if (isAtUpperBoundary.value) jumpToLowerBoundary()
      else loadSameColumnInPreviousRow()
    }
    const selectNextRow = () => {
      if (isAtLowerBoundary.value) jumpToUpperBoundary()
      else loadSameColumnInNextRow()
    }

    const navigate = transitionName => {
      router.push({
        name: `level`,
        params: {
          level: currentLevel.value-1,
          parentImageName: parentImage.value,
          transitionName,
        }
      })
    }

    const loadPage = direction => {
      state.transitionName = direction
      if (direction === 'left') {
        selectLeftColumn()
        navigate('left')
      }
      else if (direction === 'up') {
        selectPreviousRow()
        navigate('up')
      }
      else if (direction === 'right') {
        selectRightColumn()
        navigate('right')
      }
      else if (direction === 'down') {
        selectNextRow()
        navigate('down')
      }
    }

    const onSelect = url => emit('select', url)
    return {
      parentImage,
      loadPage,
      onSelect,
    }
  }
}
</script>

<style scoped>

</style>
