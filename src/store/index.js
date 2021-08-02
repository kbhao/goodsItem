import Vue from 'vue'
import Vuex from 'vuex'
import search from './search'
import xiangqing from './xiangqing'
import cartgod from './cartgod'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    search,
    xiangqing,
    cartgod
  }
})
