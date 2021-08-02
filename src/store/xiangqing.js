import { detail,Relatedgod } from '@/api/goods'
const state = {
   xiangqingshu:[],
   //相关产品数据
   godRelated:[]
}
const mutations = {
   getxiangqing(state,res){
     state.xiangqingshu = res
   },
   //相关产品数据
   getgodRelated(state,res){
    state.godRelated = res
   }

   
}
const actions = {
  //获取商品详情页数据
 async getgoodlist({commit},payload){
      const res = await detail(payload)
      
      commit('getxiangqing',res.data.data)
  },
  //相关产品数据
  async allRelated({commit},payload){
    const res = await Relatedgod(payload)
    console.log(res);
    commit('getgodRelated',res.data.data)
  }
}
const getters = {
    attribute(state){
     return state.xiangqingshu.attribute || []
    },
    info(state){
        return state.xiangqingshu.info || []
    },
    productList(state){
      return state.xiangqingshu.productList || []
    },
   godRelated(state){
     return state.godRelated.goodsList
   }

}
export default {
    state,
    mutations,
    actions,
   getters
}