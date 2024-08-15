import axios from "axios"
import {ElNotification} from 'element-plus'
import {useCookies} from '@vueuse/integrations/useCookies'



const service = axios.create(
    {
        baseURL: "/api"
    }
)

service.interceptors.request.use(function (config){
    const cookie
        = useCookies()
    const token = cookie.get('admin-token')
    if (token) {
        config.headers['token'] = token
    }

    return config

},function(error){
    return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
    return response.data.data
}, function (error) {
    ElNotification({
        message: error.response.data.msg || "请求失败",
        type: 'error',
        duration:3000,
        position:'top-right'
    })
    return Promise.reject(error)

});

export default service