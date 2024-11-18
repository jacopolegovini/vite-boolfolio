import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppProjects from '../pages/AppProjects.vue'
import AppProject from '../pages/AppProject.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/projects', component: AppProjects, name: 'projects' },
    { path: '/projects/:id', component: AppProject, name: 'project' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }