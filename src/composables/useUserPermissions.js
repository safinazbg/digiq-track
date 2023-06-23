import {state} from "@/store";
import {computed, ref, watch} from "vue";
import config from "../../config";

const {permissionThresholds, roleNames} = config

export const useUserPermissions = () => {
    const user = computed(() => state.user)
    const isLoggedIn = ref(!!state.user?.repoId)
    const account = ref(state.account);

    const userPermission = computed(() => {
        let permission = 0
        if (user.value?.__isDevOp) permission = permissionThresholds.devOp
        else if (user.value?.__isAppAdmin) permission = permissionThresholds.manageApp
        else if (isLoggedIn.value) permission = permissionThresholds.readApp
        return permission
    })
    const roles = computed(() =>
        Object.keys(permissionThresholds)
            .filter(name => permissionThresholds[name] <= userPermission.value)
            .map(name => roleNames[name])
            .filter(n => n)
    )
    const role = computed(() => [...roles.value].pop())

    watch(user, value => {
        isLoggedIn.value = !!value
    }, {immediate: true})

    watch(() => state.account, value => {
        account.value = value
    }, {immediate: true})


    return {
        account,
        getRoleName: permission => roleNames[Object.keys(permissionThresholds).find(k => permissionThresholds[k] === permission)],
        isLoggedIn,
        role,
        roles,
        user,
        userPermission,
    }
}
