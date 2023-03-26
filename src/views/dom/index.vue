<template>
  <div>
    <div class="box"
         ref="box">
      <div class="item"
           ref="item"
           @click="showDom(index)"
           v-for="(item,index) in 20"
           :key='item'>{{item}} </div>
    </div>
    <el-button type="primary"
               size="mini"
               @click="refresh">
      刷新
    </el-button>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'dom',
  data () {
    return {

    }
  },
  methods: {
    refresh () {
      location.reload()
      // this.reload()
    },
    showDom (index) {
      // let item = this.$refs.item[index]
      let item = document.querySelectorAll('.item')
      console.log(item[index])
      let box = this.$refs.box
      let vueItem = this.$refs.item[index]
      let offsetLeft = vueItem.offsetLeft
      let offsetWidth = vueItem.offsetWidth
      console.log(offsetLeft)
      console.log(offsetWidth)
      box.scrollTo({
        left: offsetLeft,
        top: 0,
        behavior: 'smooth'
      })

    },
  }
}
</script>

<style lang="scss" scoped>

</style>