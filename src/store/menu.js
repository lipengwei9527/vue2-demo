const state = {
  menuList: [
    { id: 0, name: '首页' },
    { id: 1, name: '页面1' }
  ]
}
const getters = {
  menuData (state) {
    return state.menuList
  }
}
const mutations = {
  setMenu (state, data) {
    console.log(state)
    return state
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}