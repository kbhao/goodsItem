import { request } from './api'
export const cartgod = data => {
    return request({
        url:'/cart/add',
        method:'POST',
        data
    })
}
export const cartdata = () => request.get('/cart/index')