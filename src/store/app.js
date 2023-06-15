const state = {
  pageStatus: {
    visibilityState: 'hidden',//页面是否可见：visible-可见，hidden-隐藏
    isFocus: false//焦点是否在该页面
  }
}
const getters = {}
const mutations = {
  set_page_state (state) {
    document.addEventListener('visibilitychange', () => {
      state.pageStatus.visibilityState = document.visibilityState
    })
    window.addEventListener("focus", () => {
      state.pageStatus.isFocus = true
    })
    window.addEventListener('blur', () => {
      state.pageStatus.isFocus = false
    })
  },
}
const actions = {
  setPageState ({ commit }) {
    commit('set_page_state')
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}