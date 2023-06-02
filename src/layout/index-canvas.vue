<template>
  <div class="layout">
    <canvas class="canvas" ref="canvas" width="1000" height="500"></canvas>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.setCanvas()
  },
  methods: {
    /**
     * ctx.fillStyle
     * ctx.fillRect
     */
    setCanvas() {
      let canvas = this.$refs.canvas
      canvas.style.border = '1px solid red'
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      //设置是个顶点的坐标，根据顶点制定路径
      for (var i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72) / 180) * Math.PI) * 200 + 200,
          -Math.sin(((18 + i * 72) / 180) * Math.PI) * 200 + 200
        )
        ctx.lineTo(
          Math.cos(((54 + i * 72) / 180) * Math.PI) * 80 + 200,
          -Math.sin(((54 + i * 72) / 180) * Math.PI) * 80 + 200
        )
      }
      ctx.closePath()
      //设置边框样式以及填充颜色
      ctx.lineWidth = '3'
      ctx.fillStyle = '#F6F152'
      ctx.strokeStyle = '#F5270B'
      ctx.fill()
      ctx.stroke()
    },
  },
}
</script>
<style lang="scss" scoped>
.canvas {
  margin: 20px 50px;
}
</style>
