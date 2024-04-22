const env = process.env.VUE_APP_ENV
// console.log('当前环境：', env, process.env.NODE_ENV)
const root = {
  dev: {
    baseURL: "/api",
    proxy: {
      '/qrcode': {
        target: "https://qqlykm.cn",
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // 标头添加代理后的地址
        onProxyRes(proxyRes, req, res) {
          const realUrl = new URL(req.url || '', 'https://qqlykm.cn')?.href || '';
          proxyRes.headers['x-real-url2'] = realUrl;
        }
      },
      '/api': {
        target: "https://mock.apifox.cn/m1/2940008-0-default",
        pathRewrite: { '^/api': '' },
        secure: false,  // 如果是https接口，需要配置这个参数
        // changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // 标头添加代理后的地址
        onProxyRes(proxyRes, req, res) {
          const realUrl = new URL(req.url || '', 'https://mock.apifox.cn/m1/2940008-0-default')?.href || '';
          proxyRes.headers['x-real-url2'] = realUrl;
        }
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
