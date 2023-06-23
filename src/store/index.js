import { createStore } from 'vuex'
import { reactive } from "vue";
import actions from "./actions/index.js";
import mutations from "./mutations.js";

export const state = reactive({
  assets: {},
  status: {},
  acknowledgedErrors: {},
  documentFilter: null,
  queryStates: {},
  UI: {},
  appId: 'eqrc'
});
export default createStore({
  state,
  mutations,
  actions,
})
