<template>
    <div id="page" class="site">
        <div class="container">
            <div class="login">
                <div class="hero">
                    <h1>sing-rpc<br/>远程服务管理</h1>
                </div>
                <div class="main">
                    <form>
                        <p>
                            <input type="text" placeholder="账号" :value="account">
                        </p>
                        <p class="password">
                            <input type="password" placeholder="密码" :value="password">
                            <i class="ri-eye-off-line"></i>
                            <br>
                        </p>
                        <p>
                            <input type="submit" class="submit" @click="submit" value="登录">
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

const router = useRouter()
const account = ref("aaa")
const password  = ref("aaa")
const submit = () => {
    console.log(account.value)
    console.log(password.value)
    router.push("/main")
}

</script>

<style lang="scss" scoped></style>
