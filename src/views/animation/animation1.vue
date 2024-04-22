<template>
  <div class="animation">
    <el-button size="mini" type="primary" @click="execBtns"> 动画 </el-button>
    <div ref="shell" class="shell">
      <el-button
        size="mini"
        type="primary"
        :class="{ 'jello-horizontal': flag }"
        @click="execBtns(0)"
      >
        动画1
      </el-button>
      <el-button
        size="mini"
        type="primary"
        :class="{ 'shake-horizontal': flag }"
        @click="execBtns(1)"
      >
        动画2
      </el-button>
    </div>
  </div>
</template>
<script>
import { debounce, throttle } from "@/utils/general.js";
export default {
  name: "animation1",
  data() {
    return {
      btns: [false, false],
      flag: false,
    };
  },
  created() {},
  methods: {
    execBtns() {
      this.flag = !this.flag;
    },
  },
};
</script>
<style lang="scss" scoped>
.jello-horizontal {
  animation: jello-horizontal 1s;
}
.shake-horizontal {
  animation: shake-horizontal 1s;
}
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  80% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  90% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
}
</style>
