const env = process.env.VUE_APP_ENV
console.log('当前环境：', env,process.env.NODE_ENV)
const root = {
  dev: {
    baseURL: "/api",
    proxy: {
      '/api': {
        target: "https://mock.apifox.cn/m1/2940008-0-default",
        pathRewrite: { '^/api': '' },
        // changeOrigin:true-后端收到的地址为代理之后的路径,false-收到的地址为电力之前的地址
        changeOrigin: true
      }
    },
    productionSourceMap: true
  },
  prod: {
    baseURL: ''
  },
  sit: {},
  uat: {}
}
const config = root[env]
module.exports = config
