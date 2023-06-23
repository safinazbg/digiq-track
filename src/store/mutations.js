import {
    RESUME_SESSION,
} from "@/store/operations";
// import {isStatusVariable, useDataType} from "@/store/lib/assets";
//
// const upsertLocalAssets = (state, payload) =>
//         Object.keys(payload)
//                 .filter(key => !isStatusVariable(key))
//                 .forEach(dataType => {
//                     useDataType(state, dataType, true)
//                             .pullAssets(payload[dataType])
//                 })

export default {
    [RESUME_SESSION](state) {
        state.user = JSON.parse(localStorage.getItem('user') ?? 'null')
        state.account = JSON.parse(localStorage.getItem('account') ?? 'null')
    },
}