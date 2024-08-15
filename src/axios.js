import axios from "axios"
import {ElNotification} from 'element-plus'
import {useCookies} from '@vueuse/integrations/useCookies'
import {getToken} from "~/composables/auth.js";
import {toast} from "~/composables/util.js";



const service = axios.create(
    {
        baseURL: "/api"
    }
)

service.interceptors.request.use(function (config){
    const cookie
        = useCookies()
    // const token = cookie.get('admin-token')
    const token = getToken()
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
    // ElNotification({
    //     message: error.response.data.msg || "请求失败",
    //     type: 'error',
    //     duration:3000,
    //     position:'top-right'
    // })

    toast(error.response.data.msg || "请求失败","error")
    return Promise.reject(error)

});

export default service