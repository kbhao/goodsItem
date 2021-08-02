import { request } from './api'
export const dl = data =>{
    return request ({
        url:'/auth/loginByWeb',
        method:'POST',
        data
    })
}