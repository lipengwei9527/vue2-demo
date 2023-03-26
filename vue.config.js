const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
// console.log("环境变量", process.env)
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认打包路径
  outputDir: 'build',
  // 指定index.html打包后的路径及文件名
  indexPath: './html/index.html',
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  css: {
    extract: false,
    // // css文件名后加8位哈希值
    // extract: {
    //   filename: './css/[name]&[hash:8].css',
    //   chunkFilename: './css/[name]&[hash:8].css',
    // }

  },
  chainWebpack (config) {
    config.resolve.symlinks(true)
    // 打包的文件命名
    config.output
      .filename('./js/[name]&[hash:8].js')
      .chunkFilename('./js/[name]&[hash:8].js')
    // 路径
    config.resolve.alias
      .set('@', resolve(__dirname, 'src'))
  },
  // 打包输出map文件
  productionSourceMap: false
})
