import router from "~/router/index.js";
import {getToken} from "~/composables/auth.js";
import {hideFullLoading, showFullLoading, toast} from "~/composables/util.js";
import store from "~/store/index.js";

router.beforeEach(async (to, from, next) => {

    showFullLoading()

    const token = getToken()
    if (!token && to.path != '/login') {
        toast("请先登录", "error")
        return next({path: '/login'})
    }

    if (token && to.path == '/login') {
        toast("您已登录，不能重复登录", "warning")
        return next({path: from.path ? from.path : '/'})
    }

    if (token) {
        await store.dispatch("getinfo")
    }

    let title = (to.meta.title?to.meta.title:"")+""
    document.title = title

    next()
})

router.afterEach((to,from)=>{
    hideFullLoading()
})