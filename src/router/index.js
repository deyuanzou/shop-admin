import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";

import Index from '~/pages/index.vue';
import NotFound from '~/pages/404.vue';
import Login from '~/pages/login.vue';

const routes = [
    {
        path: "/",
        component: Index,
        meta:{
            title:"后台首页"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: "404"
        }
    },
    {
        path: '/login',
        component: Login,
        meta:{
            title: "登录"
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router