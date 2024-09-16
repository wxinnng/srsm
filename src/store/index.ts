import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

 
// 创建
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)

// 导出
export default pinia;