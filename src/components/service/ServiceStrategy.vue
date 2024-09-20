<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="序列化器" name="serialize">
      <template v-for="item in serializer">
        <el-alert :title="item.title" :type="item.type" :closable="false" >
          {{ item.host }}
        </el-alert>
        <br>
      </template>
    </el-tab-pane>
    <el-tab-pane label="负载均衡" name="lb">
      <template v-for="item in lb">
        <el-alert :title="item.title" :type="item.type" :closable="false" >
          {{ item.host }}
        </el-alert>
        <br>
      </template>
    </el-tab-pane>
    <el-tab-pane label="容错机制" name="fault">
      <template v-for="item in fault">
        <el-alert :title="item.title" :type="item.type" :closable="false" >
          {{ item.host }}
        </el-alert>
        <br>
      </template>
    </el-tab-pane>
    <el-tab-pane label="重试机制" name="retry">
      <template v-for="item in retry">
        <el-alert :title="item.title" :type="item.type" :closable="false" >
          {{ item.host }}
        </el-alert>
        <br>
      </template>
    </el-tab-pane>
    <el-tab-pane label="Mock测试" name="mock">
      <template v-for="item in mock">
        <el-alert :title="item.title" :type="item.type" :closable="false" >
          {{ item.host }}
        </el-alert>
        <br>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref,onMounted, Ref} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import api from '../../hooks/api';
import { ServiceStrategy } from '../../interface';

onMounted(async () => {
  var result = await api.getServiceStategry()
  var resultData: ServiceStrategy[] = result.data["serviceStrategy"]
  console.log(resultData)
  for(var i=0;i<resultData.length;i++){
    var item = resultData[i]
    var host = item.host
    lb.value.push({
      title: item.loadBalancer,
      type: map[item.loadBalancer],
      host: host
    })
    mock.value.push({
      title: item.mock + "",
      type: map[item.mock == true ? 'success': 'info'],
      host: host
    })
    retry.value.push({
      title: item.retryStrategy,
      type: map[item.retryStrategy],
      host: host
    })
    serializer.value.push({
      title: item.serializer,
      type: map[item.serializer],
      host: host
    })
    fault.value.push({
      title: item.tolerantStrategy,
      type: map[item.tolerantStrategy],
      host: host
    })
  }
})
interface MapType {
    [key: string]: 'success' | 'warning' | 'error' | 'info';
}
interface AlertItem {
  title: string;
  type: 'success' | 'warning' | 'error' | 'info';
  host: string;
}
const map:MapType = {
  'json':'success',
  'kroy':'warning',
  'hessian':'error',
  'jdk':'info',
  'roundRobin':'warning',
  'random':'error',
  'fixedInterval':'error',
  'no':'info',
  'failBack':'error',
  'failfast':'info',
  'failOver':'warning',
  'failSafe':'success',
  'consistentHash':'info'
}
const activeName = ref('serialize')
const serializer:Ref<AlertItem[]> = ref([])
const lb : Ref<AlertItem[]> = ref([])
const fault:Ref<AlertItem[]> = ref([])
const retry:Ref<AlertItem[]> = ref([])
const mock : Ref<AlertItem[]>= ref([])
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab)
  console.log(event)
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