import Vue from 'vue'
let req = require.context('@/components', true, /\.vue$/)
req.keys().forEach(fileName => {
  const com = req(fileName).default
  Vue.component(com.name, com)
})
