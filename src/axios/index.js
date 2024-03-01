import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import serverConfig from '@config/serverConfig.js'
const xhr = axios.create({
  baseURL: serverConfig.baseURL,
  timeout: 5000
})

xhr.interceptors.request.use(
  config => {

    // console.log(
    //   `\n<---------------------------------------------\n`,
    //   '请求成功：' + config.url,
    //   config,
    //   `\n--------------------------------------------->`)

    if (config.method == 'get') {
      // axios中get请求不能直接设置请求头，根据data来判断的，data:true-允许设置请求头,data:false-不允许设置请求头
      config.data = true
    } else if (config.method == 'post') {

    }
    return config
  },
  error => {
    // console.log('请求失败：', error)
    // Message.error('请求错误：', error)
    return Promise.reject(error)
  })

xhr.interceptors.response.use(
  response => {
    let { data } = response

    // console.log(
      // `\n<---------------------------------------------\n`,
      // '响应成功：', response.config.url,
      // response,
      // `\n--------------------------------------------->\n`,)

    return Promise.resolve(data)
  },
  error => {

    // console.log(
    //   `\n<---------------------------------------------\n`,
    //   '响应失败：' + error.config.url,
    //   error,
    //   `\n--------------------------------------------->\n`,)

    // Message.error('响应错误：' + error.message)
    return Promise.reject(error)
  })
Vue.prototype.$axios = xhr
export default xhr