import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import store from '@/store'
import '@/scss/index.scss'
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(elementUi)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
