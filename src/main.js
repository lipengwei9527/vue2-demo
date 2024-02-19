import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import i18n from "@/i18n/index.js"

// 全部整合样式
import '@/scss/index.scss'
// 全局组件
import '@/components'
// 要绑定到vue上的方法统一由该文件引入
import '@/utils'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// Vue.prototype.$i18n = i18n
Vue.prototype.$bus = new Vue()

Vue.use(elementUi)

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')