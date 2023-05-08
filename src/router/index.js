import { createRouter, createWebHistory } from 'vue-router'

import BuildView from '../views/BuildView.vue'
import HomeView from '../views/HomeView.vue'

import GetSpotifyToken from '../components/GetSpotifyToken.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/build',
            name: 'build',
            component: BuildView
        },
        {
            path: '/get_spotify_token',
            name: 'get_spoitfy_token',
            component: GetSpotifyToken
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
