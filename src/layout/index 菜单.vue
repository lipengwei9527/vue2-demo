<template>
  <div class="layout">
    <div class="top-menu">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">我的工作台</el-menu-item>
        <el-menu-item index="3"
                      disabled>消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div class="content">

      <div class="left-menu"></div>
      <div class="public-page"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data () {
    return {
      topMenuData: [{ name: "首页" }],
      activeIndex: '1',
    }
  },
  created () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>