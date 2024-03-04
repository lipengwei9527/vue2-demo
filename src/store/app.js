const state = {
  appState: {
    version: '0',//当前前端版本
    visibilityState: 'hidden',// 页面是否可见：visible-可见，hidden-隐藏
    isFocus: false,// 焦点是否在该页面
    onLine: false,// 是否联网
    isFullScreen: false,// 是否全屏
  }
}
const getters = {}
const mutations = {
  // 添加程序状态的监听事件
  set_app_state(state) {
    // 页面是否隐藏(页面最小化/被完全遮挡为页面隐藏)
    state.appState.visibilityState = document.visibilityState
    document.addEventListener('visibilitychange', () => {
      state.appState.visibilityState = document.visibilityState
    })
    // 焦点是否在该页面上
    state.appState.isFocus = document.hasFocus()
    window.addEventListener("focus", () => {
      state.appState.isFocus = true
    })
    window.addEventListener('blur', () => {
      state.appState.isFocus = false
    })
    // 是否联网
    state.appState.onLine = window.navigator.onLine
    window.addEventListener('offline', () => {
      state.appState.onLine = window.navigator.onLine
    })
    window.addEventListener('online', () => {
      state.appState.onLine = window.navigator.onLine
    })
    // 是否全屏
    state.appState.isFullScreen = window.innerHeight == window.screen.height ? true : false
    window.addEventListener('resize', () => {
      if (window.innerHeight == window.screen.height) {
        state.appState.isFullScreen = true
      } else {
        state.appState.isFullScreen = false
      }
    })

    console.log('app当前状态：' + '\n'
      + '   版本：' + state.appState.version + '\n'
      + '   页面是否可见：' + state.appState.visibilityState + '\n'
      + '   焦点是否在该页面：' + state.appState.isFocus + '\n'
      + '   是否联网：' + state.appState.onLine + '\n'
      + '   是否全屏：' + state.appState.isFullScreen + '\n'
    )
  },
  remove_app_state() {
    console.log('移除app中的事件监听')
  }
}
const actions = {
  setAppState({ commit }) {
    // commit('set_app_state')
  },
  removeAppState({ commit }) {
    commit('remove_app_state')
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}