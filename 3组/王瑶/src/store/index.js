import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 数据状态
const state = {
  count: 0
}
// 数据获取
const getters = {
  count (state) {
    return state.count
  }
}
// 行为，要执行的动作
export default new Vuex.Store({
  state,
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
