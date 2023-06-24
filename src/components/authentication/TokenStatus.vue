<template>
    <div class="tokenStatus">
        <StatusMessage :operation="operation"></StatusMessage>
    </div>
</template>

<script>
import StatusMessage from "@/components/status/StatusMessage.vue";
import * as tokenOperations from "@/store/operations";
import {useStore} from "vuex";
import {computed, watch} from "vue";

export default {
    name: "TokenStatus",
    emits: ['token-has-expired', 'token-is-valid', "token-is-invalid"],
    components: {
        StatusMessage,
    },
    props: {
        operation: {
            type: String,
            required: true,
            validator: value => !!tokenOperations[value]
        },
        token: {
            type: String,
            required: true
        },
        tokenName: {
            type: String,
            required: true
        },
        checkImmediately: {
            type: Boolean,
            default: true
        }
    },
    setup(props, {emit}) {
        const store = useStore()

        delete store.state.status[props.operation]

        if (props.checkImmediately) store.dispatch(props.operation, {
            [props.tokenName]: props.token
        })

        const tokenHasExpired = computed(() => store.state.status[props.operation]?.hasExpired)
        const tokenIsValid = computed(() => store.state.status[props.operation]?.isValid)
        const tokenIsInValid = computed(() => store.state.status[props.operation]?.isInValid)

        watch(tokenIsValid, value => {
            if (value) emit('token-is-valid')
        })
        watch(tokenHasExpired, value => {
            if (value) emit('token-has-expired')
        })
        watch(tokenIsInValid, value => {
            if (value) emit('token-is-invalid')
        })

        return {
            tokenHasExpired,
            tokenIsValid,
            tokenIsInValid,
        };
    },
};

</script>

<style scoped>

</style>