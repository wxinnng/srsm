<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="序列化器" name="serialize">User</el-tab-pane>
    <el-tab-pane label="负载均衡" name="lb">Config</el-tab-pane>
    <el-tab-pane label="容错机制" name="fault">Role</el-tab-pane>
    <el-tab-pane label="重试机制" name="retry">Task</el-tab-pane>
    <el-tab-pane label="Mock测试" name="mock">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs{
  width: 800px;
  padding-top: 9px;
  padding-left: 20px;
}
</style>