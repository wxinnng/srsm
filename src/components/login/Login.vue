<template>
    <div id="page" class="site">
        <div class="container">
            <div class="login">
                <div class="hero">
                    <h1>sing-rpc<br/>远程服务管理</h1>
                </div>
                <div class="main">
                    <form @submit.prevent="submit">
                        <p>
                            <input type="text" placeholder="账号" v-model="account">
                        </p>
                        <p class="password">
                            <input type="password" placeholder="密码" v-model="password">
                            <i class="ri-eye-off-line"></i>
                            <br>
                        </p>
                        <p>
                            <input type="submit" class="submit" value="登录">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import "./style.css"
import { ref } from "vue"
import { useRouter } from "vue-router"
import api from "../../hooks/api";
import { ElMessage } from 'element-plus';
const router = useRouter()
const account = ref("")
const password = ref("")

const submit = async () => {
    if (account.value === "" || password.value === "") {
        ElMessage.error("账号或密码不能为空！");
        return;
    }

    try {
        const res = await api.login(account.value, password.value);
        console.log("API Response:", res);

        if (res.data === 1) {
            router.push("/main/serviceInfo");
            ElMessage.success("登录成功！");
        } else {
            account.value = ""
            password.value = ""
            ElMessage.error("账号或密码错误！");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
}
</script>

<style scoped>

</style>