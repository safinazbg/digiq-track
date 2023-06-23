import { createRouter, createWebHashHistory } from 'vue-router'
import digiq_t from '../../digiq_t/digiq_tLandingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: digiq_t
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
