import {createStore} from 'vuex'
import {getinfo, login} from "~/api/manager.js";
import {removeToken, setToken} from "~/composables/auth.js";

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        setUserInfo(state, user) {
            state.user = user
        }
    },
    actions: {
        getInfo({commit}) {
            return new Promise((resolve, reject) => {
                getinfo()
                    .then(res => {
                        commit("setUserInfo", res)
                        resolve(res)
                    })
                    .catch(err=>reject(err))
            })
        },
        login({commit},{username,password}) {
            return new Promise((resolve, reject)=>{
                login(username,password).then(res=>{
                    setToken(res.token)

                    resolve(res)
                }).catch(err=> {
                    reject(err)
                })
            })
        },
        logout({commit}){
            removeToken()
            commit("setUserInfo",{})
        }
    }
})

export default store