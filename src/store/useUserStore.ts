import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    
    //状态
    state: () => {
        return {
            token : "null",
        };
    },
    //获取器
    getters: {
        getToken: (state) => {
            return state.token;
        },
    },
    //修改方法
    actions: {
        setToken(token: any) {
            this.token = token;
        },
    },
    persist:{
        key:'user',
        storage:localStorage,
        //paths:['user'] 需要持久化的状态
    }
});