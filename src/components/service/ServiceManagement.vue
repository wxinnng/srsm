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
import { ref } from "vue";
interface Service {
  serviceName: string;
  instanceCount: number;
  versionCount: number;
  status: number;
  grougCount:number;
  remoteRegistry: string;
}
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

const data: Service[] = [
  {
    serviceName: "service1",
    instanceCount: 1,
    versionCount: 1,
    status: 1,
    grougCount:1,
    remoteRegistry: "http://localhost:8080"
  },
  {
    serviceName: "service2",
    instanceCount: 2,
    versionCount: 2,
    grougCount:2,
    status: 3,
    remoteRegistry: "http://localhost:8080"
  },
  {
    serviceName: "service3",
    instanceCount: 3,
    versionCount: 3,
    grougCount:3,
    status: 2,
    remoteRegistry: "http://localhost:8080"
  },
  {
    serviceName: "service4",
    instanceCount: 4,
    versionCount: 4,
    grougCount:4,
    status: 1,
    remoteRegistry: "http://localhost:8080"
  },
  {
    serviceName: "service5",
    instanceCount: 5,
    versionCount: 5,
    grougCount:5,
    status: 1,
    remoteRegistry: "http://localhost:8080"
  },
  {
    serviceName: "service6",
    instanceCount: 6,
    versionCount: 6,
    grougCount:6,
    status: 1,
    remoteRegistry: "http://localhost:8080"
  }
]

</script>
<style lang="scss" scoped>
.container {
  padding-top:20px ;
  padding-left:80px ;
}
</style>
