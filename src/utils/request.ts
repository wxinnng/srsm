import axios from "axios"; //引用axios

axios.defaults.timeout = 5000


const service = axios.create({
    timeout: 5000,
    baseURL:'http://localhost:9162/api/'

})
/**请求拦截器 */
service.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);     // 这里我们也可以在过滤下 请求参数数据
        config.headers["Content-Type"] = "application/json";
        return config;                                //然后把配置返回
    },
    err => {
        console.log(err)                              //如果出错的话 打印出来错误看看
    }
);

/**响应拦截器 */
service.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if(err.response.status === 401){
            window.location.href = "/login"
        }
    }
);
export default service; 
