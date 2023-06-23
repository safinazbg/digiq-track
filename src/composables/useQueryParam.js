import {state} from '../store/index'
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {isString} from "@/lib/getVariableType";

export const useQueryParam = (paramName, updateValue = false) => {
  if (!(paramName && isString(paramName))) throw 'useQueryParam requires the paramName parameter to be a String'

  const paramState = ref(state.queryStates[paramName])
  const route = useRoute()

  if (updateValue) {
    watch(() => route.query.workshop, value => {
        state.queryStates[paramName] = value === '1'
        paramState.value = state.queryStates[paramName]
    },
      {immediate: true}
    )
  }

  return {
    [paramName]: paramState,
  }
}
