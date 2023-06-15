import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全部整合样式
import '@/scss/index.scss'
// echarts图表
import * as echarts from 'echarts'
// 全局组件
import '@/components'
// 绑定到Vue.prototype的公共方法
import '@/utils'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(elementUi)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')