const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("path");
const serverConfig = require("./config/serverConfig.js");
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认打包路径
  outputDir: "build",
  // 指定index.html打包后的路径及文件名
  indexPath: "./html/index.html",
  devServer: {
    // host: "127.0.0.1",
    host: "localhost",
    port: "8080",
    open: false,
    proxy: {
      ...serverConfig.proxy,
    },
  },
  css: {
    // 热重载:true-关闭热重载,false-打开热重载
    extract: false,
    // // css文件名后加8位哈希值
    // extract: {
    //   filename: './css/[name]&[hash:8].css',
    //   chunkFilename: './css/[name]&[hash:8].css',
    // }
    loaderOptions: {
      sass: {
        // 传入全局scss变量
        additionalData: `@import "@/scss/variate.scss";`,
      },
    },
  },
  chainWebpack(config) {
    // 显示源码
    config.devtool("cheap-module-source-map");
    config.resolve.symlinks(true);
    // 打包的文件命名
    config.output
      .filename("./js/[name]&[hash:8].js")
      .chunkFilename("./js/[name]&[hash:8].js");
    // 相对路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@axios", resolve("src/axios"))
      .set("@mixin", resolve("src/mixin"))
      .set("@utils", resolve("src/utils"))
      .set("@config", resolve("config"));
  },
  // 打包输出map文件
  productionSourceMap: serverConfig.productionSourceMap,
});
