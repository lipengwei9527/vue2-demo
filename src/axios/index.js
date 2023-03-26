import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
axios.interceptors.request.use(config => {
  console.log("请求拦截器config:", config)
  return config
}, error => {
  console.log('请求拦截器error：', error)
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  let { data } = response
  console.log("响应拦截器response：", response)
  return Promise.resolve(data)
}, error => {
  console.log('响应拦截器error：', error)
  return Promise.reject(error)
})