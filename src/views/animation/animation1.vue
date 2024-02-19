<template>
  <div class="animation">
    <el-button size="mini" type="primary" @click="changeStyle">动画</el-button>
    <div class="basic" :class="{ style1: flag == 1 }"></div>
  </div>
</template>
<script>
export default {
  name: 'animation1',
  data() {
    return {
      flag: 0,
    }
  },
  created() {},
  methods: {
    changeStyle() {
      this.flag++
      if (this.flag == 10) this.flag = 0
    },
  },
}
</script>
<style lang="scss" scoped>
.basic {
  width: 200px;
  height: 200px;
  background: red;
}
.style1 {
  // animation-name：设置需要绑定到元素的动画名称；
  // animation-duration：设置完成动画所需要花费的时间，单位为秒或毫秒，默认为 0；
  // animation-timing-function：设置动画的速度曲线，默认为 ease；
  // animation-fill-mode：设置当动画不播放时（动画播放完或延迟播放时）的状态；
  // animation-delay：设置动画开始之前的延迟时间，默认为 0；
  // animation-iteration-count：设置动画被播放的次数，默认为 1；
  // animation-direction：设置是否在下一周期逆向播放动画，默认为 normal；
  // animation-play-state：设置动画是正在运行还是暂停，默认是 running；
  // animation：所有动画属性的简写属性。
  animation-name: an1;
  animation: 2s ease 0 infinite normal;
}
@keyframes an1 {
  0% {
    width: 200px;
  }
  25% {
    width: 300px;
  }
  50% {
    width: 400px;
  }
  100% {
    width: 500px;
  }
}
</style>
