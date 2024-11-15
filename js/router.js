import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppProjects from '../pages/AppProjects.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/projects', component: AppProjects, name: 'projects' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }