import service from "../utils/request"

const API_PREFIX = 'http://localhost:9162/api'
const getServiceInfo = async():Promise<any> => {
    var res = await service.get(API_PREFIX+'/serviceInfo')
    return res;
}
const getServiceGroup = () => {

}
const getServiceStategry = () => {

}
export default { 
    getServiceInfo, 
    getServiceGroup,
    getServiceStategry
}