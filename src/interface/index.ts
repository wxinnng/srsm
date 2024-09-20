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

export interface ServiceManagementInfo{
    serviceName: string,
    instanceCount: number,
    versionCount: number,
    status: number,
    grougCount:number,
    remoteRegistry: string
}
export interface ServiceStrategy {
    host: string;
    mock: boolean;
    fault:string,
    loadBalancer: string;
    serializer: string;
    retryStrategy: string;
    tolerantStrategy: string;
    
}