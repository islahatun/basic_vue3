import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from '../components/HomeView.vue'
import About from '../components/AboutView.vue'
import User from '../components/UserView.vue'
import NotFound from '../components/NotFoundView.vue'


const routes = [{
        path: '/', //jalur url aplikasi
        name: 'Home',
        component: Home //template yang aka di render pada saat rute url di akses diambil dari import nama alias from '....'

    },
    {
        path: '/about',
        name: 'About',
        component: About

    },
    {
        path: '/user/:name',
        name: 'User',
        component: User,
        props: true
    },
    {
        path:'/:catchAll(.*)',
        component:NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router