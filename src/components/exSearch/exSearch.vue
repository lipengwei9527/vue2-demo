<template>
  <div class="ex-search">
    <component
      :is="item.comName"
      v-for="(item, index) in handleData"
      :config="item"
      :searchData="searchData"
      :key="index"
      :ref="item.comKey"
      @change="changeFn"
    ></component>
    <div class="operation">
      <el-button size="mini" @click="resetFn">重置</el-button>
      <el-button size="mini" type="primary" @click="searchFn">搜索</el-button>
    </div>
  </div>
</template>
<script>
import exInput from "./components/exInput.vue";
import exSelect from "./components/exSelect.vue";
import exDate from "./components/exDate.vue";
export default {
  name: "exSearch",
  components: { exInput, exSelect, exDate },
  mixins: [],
  props: {
    comData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      handleData: [],
      searchData: {},
    };
  },
  created() {
    this.resetFn();
  },
  methods: {
    changeFn(comKey, value) {
      this.$set(this.searchData, comKey, value);
    },
    // 恢复为原始数据
    resetFn() {
      this.handleData = JSON.parse(JSON.stringify(this.comData));
      this.$nextTick(() => {
        this.handleData.forEach((item) => {
          this.searchData[item.comKey] = item.value;
          if (this.$refs && this.$refs[item.comKey]) {
            this.$refs[item.comKey][0].value = item.value;
          }
        });
      });
    },
    searchFn() {
      this.$emit("searchFn", JSON.parse(JSON.stringify(this.searchData)));
    },
  },
};
</script>
<style lang="scss" scoped>
.ex-search {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 5px;
}
</style>
