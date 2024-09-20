<template>
  <div class="container">
    <el-scrollbar max-height="400px">
      <template v-for="item in data" :key="item.serviceName">
        <el-descriptions :title="item.serviceName">
          <el-descriptions-item label="服务名称">{{ item.serviceName }}</el-descriptions-item>
          <el-descriptions-item label="实例数">{{ item.instanceCount }}</el-descriptions-item>
          <el-descriptions-item label="组别数">{{ item.grougCount }}</el-descriptions-item>
          <el-descriptions-item label="版本数">{{ item.versionCount }}</el-descriptions-item>
          <el-descriptions-item label="状态">
            <el-tag size="small" :type="getType(item.status)">{{ getDescribe(item.status) }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="远程注册中心">
            {{ item.remoteRegistry   }}
          </el-descriptions-item>
        </el-descriptions>
        <el-divider />
      </template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref ,onMounted,Ref} from "vue";
import { ServiceManagementInfo } from "../../interface";
import api from '../../hooks/api'

onMounted(async () => {
  var res = await api.getServiceManagementInfo()
  data.value = res.data['serviceManagement']
})
const data: Ref<ServiceManagementInfo[]> = ref([])
const getType = (status: number) => {
  switch (status) {
    case 1:
      return "success";
    case 2:
      return "danger";
    default:
      return "info";
  }
}
const getDescribe = (status: number) => {
  switch (status) {
    case 1:
      return "运行中";
    case 2:
      return "异常";
    default:
      return "停止";
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding-top:20px ;
  padding-left:80px ;
}
</style>
