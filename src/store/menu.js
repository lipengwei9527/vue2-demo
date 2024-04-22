
import { getRouteInfo } from '@/utils/router'
import { getMenus } from '@/axios/app'
import { openTab } from '@/utils/router'
const state = {
  menus: getMenus(),
  topActive: "",
  leftActive: "",
  routeInfo: getRouteInfo()
}
const getters = {
  topMenu(state) {
    return state.menus.filter(item => {
      return item.pid == 0
    })
  },
  leftMenu(state) {
    let { menus, topActive } = state
    let obj = menus.find(item => item.path == topActive)
    return menus.filter(item => item.pid == obj?.id)
  }
}
const mutations = {
  reset_active(state) {
    let { topActive, leftActive } = getRouteInfo()
    if (topActive && leftActive) {
      state.topActive = topActive
      state.leftActive = leftActive
    } else {
      let { menus } = state
      state.topActive = menus[0].path
      state.leftActive = (menus.find(item => item.pid == menus[0].id) || {}).path
    }
  },
  select_top_menu(state, index) {
    state.topActive = index
  },
  select_left_menu(state, index) {
    state.leftActive = index
  }
}
const actions = {
  resetActive({ commit }) {
    commit('reset_active')
  },
  selectTopMenu({ commit }, index) {
    commit('select_top_menu', index)
  },
  selectLeftMenu({ commit }, index) {
    commit('select_left_menu', index)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}