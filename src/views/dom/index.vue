<template>
  <div>
    <el-select v-model="value"
               v-if="show"
               ref="input"
               @change="(value) => changeVal(value, 1, 2, 3)"
               placeholder="请选择">
      <el-option v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="focusFn">焦点</el-button>
    <div class="box"
         ref="box">
      <div class="item"
           ref="item"
           @click="showDom(index)"
           v-for="(item, index) in 20"
           :key="item">
        {{ item }}
      </div>
    </div>
    <el-button type="primary"
               size="mini"
               @click="refresh"> 刷新 </el-button>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "dom",
  data () {
    return {
      show: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods: {
    changeVal (...val) {
      console.log("123")
      console.log("changeVal", ...val);
    },
    focusFn () {
      this.show = !this.show;
      if (this.show) {
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
      console.log(this.show);
    },
    refresh () {
      location.reload();
      // this.reload()
    },
    showDom (index) {
      // let item = this.$refs.item[index]
      let item = document.querySelectorAll(".item");
      console.log(item[index]);
      let box = this.$refs.box;
      let vueItem = this.$refs.item[index];
      let offsetLeft = vueItem.offsetLeft;
      let offsetWidth = vueItem.offsetWidth;
      console.log(offsetLeft);
      console.log(offsetWidth);
      box.scrollTo({
        left: offsetLeft,
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
}
.input:focus {
  border: none;

  outline: 3px solid red;
}
</style>