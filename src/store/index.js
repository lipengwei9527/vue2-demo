import Vuex from 'vuex'
import Vue from 'vue'
import user from './user.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

  },
  getters: {
    getUserInfo (state) {
      return 111
    }
  },
  mutations: {
    getUserInfo (state) {
      console.log("getUserInfo", state)
    }
  },
  actions: {
    getUserInfo (context) {
      console.log("getUserInfo", state)
    }
  },
  modules: {
    user
  }
})
export default store