import { createRouter, createWebHistory } from "vue-router"

// Import Pageview
import Homepage from './views/ViewHome.vue'

// Import Services
import Add from './components/post/PostAdd'
import Post from './components/post/PostShow'
import Posts from './components/post/PostIndex'

// Declare Routes
const routes = [
    {
        path: '/',
        name: 'view-home',
        component: Homepage
    },
    {
        path: '/list',
        alias: '/posts',
        name: 'view-list',
        component: Posts
    },
    {
        path: '/add',
        name: 'view-add',
        component: Add
    },
    {
        path: '/post/:id',
        name: 'view-post',
        component: Post
    }
]

// Calling routes for CreateRouter
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router