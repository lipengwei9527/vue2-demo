<template>
  <div class="layout">
    <div class="container">
      <div id="item:">1</div>
      <div id="item:">2</div>
      <div id="item:">3</div>
      <div id="item:">4</div>
      <div id="item:">5</div>
      <div id="item:">6</div>
      <div id="item:">7</div>
      <div id="item:">8</div>
      <div id="item:">9</div>
      <div id="item:">10</div>
      <div id="item:">11</div>
      <div id="item:">12</div>
      <div id="item:">13</div>
      <div id="item:">14</div>
      <div id="item:">15</div>
      <div id="item:">16</div>
      <div id="item:">17</div>
      <div id="item:">18</div>
      <div id="item:">19</div>
      <div id="item:">20</div>
      <div id="item:">21</div>
      <div id="item:">22</div>
      <div id="item:">23</div>
      <div id="item:">24</div>
      <div id="item:">25</div>
      <div id="item:">26</div>
      <div id="item:">27</div>
      <div id="item:">28</div>
      <div id="item:">29</div>
      <div id="item:">30</div>
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
  methods: {},
}
</script>
<style lang="scss" scoped>
.container {
  width: 80%;
  height: 300px;
  margin: 100px auto;
  // border: 1px solid gray;
  overflow: auto;
}
// 滚动条整体部分
.container::-webkit-scrollbar {
  width: 8px;
}
// // 滚动条两端按钮
// .container::-webkit-scrollbar-button {
// }
// 外层轨道
.container::-webkit-scrollbar-track {
  border-radius: 4px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.1;
  background: #d9ecff;
}
// // 内层轨道，滚动条中间部分
// .container::-webkit-scrollbar-track-piece {
// }
// 内嵌滑块
.container::-webkit-scrollbar-thumb {
  border-radius: 4px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.2;
  background: #79bbff;
}

// // 边角
// .container::-webkit-scrollbar-corner {
// }
// // 定义右下角拖动块的样式
// .container::-webkit-resizer {
// }
</style>
