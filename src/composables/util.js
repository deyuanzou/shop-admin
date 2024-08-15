import {ElNotification} from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import nprogress from "nprogress"



export function toast(message,type="success",dangerouslyUseHTMLString=false) {
    ElNotification({
        message,
        type,
        duration: 3000,
        position: 'top-right',
        dangerouslyUseHTMLString
    })
}

export function showModal(content="提示内容",type="warning",title="警告") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type:type,
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '退出成功',
                duration:2000
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '操作取消',
                duration:2000
            })
        })
}

export function showFullLoading() {
    nprogress.start()
}

export function hideFullLoading() {
    nprogress.done()
}