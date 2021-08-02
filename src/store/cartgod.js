import { cartdata } from '@/api/cart'
import {  Message } from 'element-ui'
const state = {
//cartList购物车列表
cartList:[]
};
const mutations = {
     staeCart(state,res){
         state.cartList = res
     }
};
const actions ={
 async getAllCart({commit}){
  const res = await cartdata()
  console.log(res.data.data);
  if(res.status == 200){
    commit('staeCart',res.data.data)
    Message({        
    message: '欢迎来到购物车频道',
    type: 'success'
       })
  }
  
  }
};
const getters = {
 cartList(state){
     return state.cartList.cartList
 },
 //获取 购物车全部数量
cartTotal(state){
    return state.cartList.cartTotal
}
}
export default {
    state,
    mutations,
    actions,
    getters
}

