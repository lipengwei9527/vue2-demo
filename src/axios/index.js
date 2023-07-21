import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import serverConfig from '@config/serverConfig.js'
const http = axios.create({
  baseURL: serverConfig.baseURL,
  timeout: 5000
})
http.interceptors.request.use(config => {
  console.log("请求拦截器config:", config)
  if (config.method == 'post') {

  } else if (config.method == 'get') {

  }
  return config
}, error => {
  console.log('请求拦截器error：', error)
  Message.error('请求错误：', error)
  return Promise.reject(error)
})
http.interceptors.response.use(response => {
  let { data } = response
  console.log("响应拦截器response：", response)
  return Promise.resolve(data)
}, error => {
  console.log('响应拦截器error：', error)
  Message.error('响应错误：', error)
  return Promise.reject(error)
})
Vue.prototype.$axios = http
export default http