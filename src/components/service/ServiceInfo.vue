<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="490" row-style="height: 60px">
      <el-table-column prop="id" label="ID" width="300" />
      <el-table-column prop="serviceName" label="服务名" width="200" />
      <el-table-column prop="serviceGroup" label="组别" width="90" />
      <el-table-column prop="serviceVersion" label="版本" width="90" />
      <el-table-column prop="registerTime" label="启动日期" width="200" />
      <el-table-column prop="url" label="访问路径" width="250" >
        <template #default="scope">
          <a :href="getServiceUrl(scope.row.serviceHost,scope.row.servicePort)" target="_blank">{{getServiceUrl(scope.row.serviceHost,scope.row.servicePort)}}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import api from '../../hooks/api';
import { onMounted, Ref } from 'vue';
import { ServiceInfo } from '../../interface';
import { ref } from 'vue';
//组件挂载的时候，就获取服务信息
onMounted(async () => {
  var res = await api.getServiceInfo();
  tableData.value = res.data["serviceInfo"]["serviceInfo"];
  console.log(tableData.value)
})
// 服务信息
const tableData : Ref<ServiceInfo[]>= ref([])
// 拼接服务路径
const getServiceUrl = ( host:string,port:number) : string => {
  return "http://" + host + ":" + port;
} 

</script>

<style lang="scss" scoped></style>
