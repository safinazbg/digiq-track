import * as operations from '../store/operations'
import {useStore} from "vuex";
import {computed} from "vue";
import {isObject} from "@/lib/typeHelpers/getVariableType";

const assertOperationExists = operation => {
    if (!operations[operation]) throw new Error(`Invalid operation: ${operation}`)
}
export const useStatusMessage = operation => {
    if (operation) assertOperationExists(operation)

    const store = useStore()
    const message = computed(() => store.state.status[operation])

    const deleteMessage = () => delete store.state.status[operation]
    const setMessage = message => {
        const target = store.state.status[operation]
        if (isObject(target)) {
            Object.keys(target).forEach(key => delete target[key])
        }
        if (isObject(message)) {
            Object.assign(target, message)
        } else {
            store.state.status[operation] = message
        }
    }

    return {
        deleteMessage,
        message,
        setMessage,
    }
}