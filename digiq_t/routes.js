import Home from './components/Home.vue'
import LandingHeader from "./components/headers/LandingHeader.vue";
export default [
    {
        path: '/',
        name: 'home',
        components: {
            header: LandingHeader,
            default: Home,
        }
    },
    {
        path: '/info',
        name: 'info',
        components: {
            header: () => import('./components/headers/InfoHeader.vue'),
            default: () => import('./components/Info.vue')
        }
    },
    {
        path: '/resources',
        name: 'resources',
        components: {
            header: () => import('./components/headers/ResourcesHeader.vue'),
            default: () => import('./components/Resources.vue')
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        components: {
            header: () => import('./components/headers/DashboardHeader.vue'),
            default: () => import('./components/Dashboard.vue')
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: { name: 'home' }
    }
]