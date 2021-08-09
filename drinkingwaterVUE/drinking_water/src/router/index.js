import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'
import Track from '../views/Track.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/data',
        name: 'Data',
        component: Data
    },
    {
        path: '/track',
        name: 'Track',
        component: Track
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },

]

const router = new VueRouter({
    routes
})

export default router
