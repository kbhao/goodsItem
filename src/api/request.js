import { request } from './api'
export const shouye = () =>{
    return request({
        url:'/index/index',
        method:'GET'
    })
}

