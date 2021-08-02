import { request } from './api'
export const gods = params => {
    return request({
        url:'/goods/list',
        method:'GET',
        params
    })
}
//商品列表
export const goodst = params => request.get('/goods/list',{params})
//添加购物车
export const addgoods = data => {
    return request ({
        url:'/cart/add',
        method:'POST',
        data
    })
} 
//商品详情
export const detail = id =>{
    return request({
        url:'/goods/detail',
        method:'GET',
        params:{
            id
        }
    })
}
//相关产品数据
export const Relatedgod = id => {
    return request({
        url:'/goods/related',
        method:'GET',
        params:{
            id
        }
    })
}