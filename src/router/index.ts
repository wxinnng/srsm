import { createRouter, createWebHashHistory } from "vue-router";

import Login from "../components/login/Login.vue";
const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login
        }
    ]
})
export default router