import vue from 'vue'
import vues from 'vuex'

vue.use(vues)

//数据状态
const state = {
    count: 0
}
const getters = {
    count(state){
        return state.count
    }
}
//行为
const actions = {
    add(commit,state) {
        commit('increment')
    },
    sub(commit,state) {
        commit('decrement')
    }
}
const mutations = {
    increment(state) {
        state.count++

    },
    decrement(state) {
        state.count--
    }
}
export default new vues.Store({
    state,
    getters,
    actions,
    mutations
})