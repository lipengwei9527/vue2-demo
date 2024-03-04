import Vue from "vue"
import VueI18n from "vue-i18n"
import ElementLocal from 'element-ui/lib/locale'
import enElement from 'element-ui/lib/locale/lang/en' //引入elementui语言包
import zhElement from 'element-ui/lib/locale/lang/zh-CN' //引入ele语言包

// 本地语言
import zhLocal from './lang/zh'
import enLocal from './lang/en'

Vue.use(VueI18n)
// function loadLocalMessages() {
//   const locals = require.context('.', true, /.json$/i)
//   const messages = {}
//   locals.keys().forEach(key => {
//     messages[key.replace('./', '').replace('.json', '')] = locals(key)
//   })
//   return messages
// }
// // 加载的json语言包
// const localMessages = loadLocalMessages()


const i18n = new VueI18n({
  locale: localStorage.getItem('local') || 'zh',//页面当前使用的语言的标识
  messages: {
    zh: {
      ...zhElement, ...zhLocal
    },
    en: {
      ...enElement, ...enLocal
    },

  },
  silentTranslationWarn: true
})

ElementLocal.i18n((key, value) => i18n.t(key, value))

export default i18n


