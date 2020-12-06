import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: "/my-calendar",
        name: "My Calendar",
        component: () => import("../views/Calendar"),
    },
    {
        path: "/settings",
        name: "Settings",
        component: () => import(/* webpackChunkName: "about" */ "../views/Settings")
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
