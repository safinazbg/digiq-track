import {createRouter, createWebHashHistory} from 'vue-router'
import moduleRoutes from '@/../digiq_t/routes.js'

const routes = [
    ...moduleRoutes
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
