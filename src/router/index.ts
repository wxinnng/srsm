import { createRouter, createWebHashHistory } from "vue-router";

import Login from "../components/login/Login.vue";
import Main from "../components/main/Main.vue";
import ServiceInfo from "../components/service/ServiceInfo.vue";
import ServiceManagement from "../components/service/ServiceManagement.vue";
import ServiceStrategy from "../components/service/ServiceStrategy.vue";
import VersionControll from "../components/service/VersionControll.vue";
import DataStatistics from "../components/service/DataStatistics.vue";
import ServiceGroup from "../components/service/ServiceGroup.vue";

const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
          name:'index',
          path:'/',
          redirect:'/main/serviceInfo'  
        },
        {
            name:'login',
            path:'/login',
            component:Login
        },
        {
            name:'main',
            path:'/main',
            component:Main,
            children:[
                {
                    name:'serviceInfo',
                    path:'serviceInfo',
                    component:ServiceInfo
                },{
                    name:'serviceManagement',
                    path:'serviceManagement',
                    component:ServiceManagement
                },{
                    name:'serviceStrategy',
                    path:'serviceStrategy',
                    component:ServiceStrategy
                },{
                    name:'versionControll',
                    path:'versionControll',
                    component:VersionControll
                },
                {
                    name:'dataStatistics',
                    path:'dataStatistics',
                    component:DataStatistics
                },
                {
                    name:'serviceGroup',
                    path:'serviceGroup',
                    component:ServiceGroup
                }
            ]
        }
    ]
})
export default router