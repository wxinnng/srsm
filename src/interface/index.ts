// 服务信息接口
export interface ServiceInfo{
    id : string,
    serviceName : string,
    serviceVersion : string,
    serviceHost : string,
    serviceGroup : string,
    servicePort: number,
    registerTime : Date,
    token : string
}