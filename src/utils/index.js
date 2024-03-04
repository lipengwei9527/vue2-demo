import Vue from 'vue'
import { formatDate } from '@/utils/format'
import { openTab, backTab } from '@/utils/router'

Vue.prototype.$formatDate = formatDate
Vue.prototype.$openTab = openTab
Vue.prototype.$backTab = backTab