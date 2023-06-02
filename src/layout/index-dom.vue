<template>
  <div>
    <div class="container">
      <div
        class="box"
        @mousedown="mousedownFn($event)"
        @mouseup="mouseupFn($event)"
      >
        123456789
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data() {
    return {}
  },
  created() {},
  methods: {
    mousedownFn(e) {
      e = e || window.event
      console.log(e)
      console.log(e.target.offsetWidth)
      console.log(e.target.offsetHeight)
      console.log(e.target.clientWidth)
      console.log(e.target.clientHeight)
    },
    mouseupFn(e) {
      e = e || window.event
      console.log('up')
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: 200px auto;
  overflow: auto;
}
.box {
  width: 400px;
  height: 600px;
  background-color: #ff0000;
  // border: 1px solid blue;
  // padding: 10px;
  // position: absolute;
  // top: 20px;
  // left: 20px;
}
</style>
