import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";

import Index from '~/pages/index.vue';
import NotFound from '~/pages/404.vue';
import Login from '~/pages/login.vue';
import Admin from "~/layouts/admin.vue";

const routes = [
    {
        path: "/",
        component: Admin,
        children:[
            {
                path:'/',
                component:Index,
                meta:{
                    title:"后台首页"
                }
            }
        ]
    },
    {
        path: '/index',
        component: Index
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
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router