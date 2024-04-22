import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
  test: 124
}
//getters(state)
const getters = {}
//mutations(state,...arg)
const mutations = {}
//actions(context,...arg)
const actions = {}
const context = require.context('@/store', true, /\.js$/)
const modules = {}
context.keys()
  .filter(item => {
    return item != './index.js'
  })
  .forEach(item => {
    let pathName = item.replace(/(\.\/|\.js)/g, '')
    modules[pathName] = context(item).default
  })

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
export default store