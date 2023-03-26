<template>
  <div class="layout">
    <!-- <div class="mybkkd"
         @scroll="add">
    </div> -->
    <el-button type="primary"
               size="small"
               @click="jumpRouter('/')">echart</el-button>
    <el-button type="primary"
               size="small"
               @click="jumpRouter('/dom')">dom</el-button>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  created () {
    // let id = v4()
    // console.log(id)
  },
  methods: {
    jumpRouter (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>