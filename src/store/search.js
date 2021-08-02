import { gods } from '@/api/goods'
const state = {
    goodsList:[],
    filterCategory:[]
};
const mutations = {
   SET_CS(state,res){
      state.goodsList = res.goodsList
   }
};
const actions ={
  async  getgoodlist({commit},payload){
     const res = await gods({keyword:payload})
    
     const ee = res.data.data
     commit('SET_CS',ee)
    }
}
export default{
    state,
    mutations,
    actions
}
