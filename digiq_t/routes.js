import Home from './components/Home.vue'
import Info from "./components/Info.vue";
import Resources from "./components/Resources.vue";
export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/info',
        name: 'info',
        component: Info
    },
    {
        path: '/resources',
        name: 'resources',
        component: Resources
    },
]