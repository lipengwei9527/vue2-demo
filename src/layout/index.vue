<template>
  <div class="layout">
    <!-- <app-header></app-header> -->
    <cus-button @click="fn1">测试</cus-button>
    <router-view></router-view>
  </div>
</template>
<script>
import { appHeader } from './components'
import { testapi } from '@/axios/app.js'
export default {
  name: 'layout',
  components: { appHeader },
  data() {
    return {}
  },
  created() {},
  methods: {
    fn1() {
      console.log(window.location)
      if (window.location.href.indexOf('#reloaded') == !-1) {
        window.location.href = window.location.href + '#reloaded'
        window.location.reload()
      }
      // testapi().then((res) => {
      //   console.log('接口结果', res)
      // })
      // let http = axios.create()
      // http.post('https://mock.apifox.cn/m1/2940008-0-default/pet')
    },
  },
}
</script>
<style lang="scss" scoped></style>
