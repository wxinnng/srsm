<template>
    <el-container class="layout-container-demo" style="height: auto">
        <el-aside width="200px" style="height: 550px;">
            <el-affix :offset="0">
                <div class="side-font">sing-rpc 服务管理</div>
            </el-affix>

            <el-scrollbar>
                <el-menu  @select="handleSelect">
                    <el-menu-item index="/main/servicemanagement" >
                        <template #title>
                            <el-icon>
                                <Management />
                            </el-icon>服务管理
                        </template>
                        
                    </el-menu-item>
                    <el-menu-item index="/main/serviceinfo">
                        <template #title>
                            <el-icon>
                                <MessageBox />
                            </el-icon>服务信息
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/main/servicegroup">
                        <template #title>
                            <el-icon>
                                <Grid />
                            </el-icon>服务分组
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/main/servicestrategy">
                        <template #title>
                            <el-icon>
                                <Notification />
                            </el-icon>服务策略
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/main/datastatistics">
                        <template #title>
                            <el-icon>
                                <PieChart />
                            </el-icon>数据统计
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/main/versioncontroll">
                        <template #title>
                            <el-icon>
                                <Monitor />
                            </el-icon>版本控制
                        </template>
                    </el-menu-item>
                </el-menu>

            </el-scrollbar>

        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>SRSM</span>
                </div>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MessageBox, Monitor, PieChart, Notification, Grid, Management,Setting} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSelect = (index:string) => {
  router.push(index)
}




</script>

<style scoped>
.side-font {
    z-index: 10;
    color: rgb(33, 219, 179);
    height: 50px;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 10px;
    background-color: rgb(236, 242, 243);
}

.layout-container-demo .el-header {
    position: relative;
    /* 对角线渐变（从左上到右下） */
    background: linear-gradient(135deg, #001f3f, #0088a9, #00c9a7, #92d5c6, #ebf5ee);

    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: rgb(239, 244, 248);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>