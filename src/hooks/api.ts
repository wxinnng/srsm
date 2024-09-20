import service from "../utils/request"

const API_PREFIX = 'http://localhost:9162/api'
const getServiceInfo = async():Promise<any> => {
    var res = await service.get(API_PREFIX+'/serviceInfo')
    return res;
}
const getServiceGroup = async():Promise<any> => {
}
const getServiceManagementInfo = async ():Promise<any> => {
    var res = await service.get(API_PREFIX + "/serviceManagement")
    return res;
}
const getServiceStategry = async():Promise<any> => {
    var res = await service.get(API_PREFIX + '/serviceStrategy')
    return res;
}
const login = async (account:string,password:string):Promise<any> => {
    var res = await service.get(API_PREFIX + `/login/${account}/${password}`)
    return res;
}
export default {
    login, 
    getServiceInfo, 
    getServiceGroup,
    getServiceStategry,
    getServiceManagementInfo
}