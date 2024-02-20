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
    <el-button size="mini" @click="resetFn">重置</el-button>
    <el-button size="mini" type="primary" @click="searchFn">搜索</el-button>
  </div>
</template>
<script>
import exInput from "./exInput.vue";
import exSelect from "./exSelect.vue";
import exDate from "./exDate.vue";
export default {
  name: "exSearch",
  components: { exInput, exSelect, exDate },
  mixins: [],
  props: {
    // 传入的原始数据
    comData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      handleData: [], // 操作的数据
      searchData: {}, // 搜索要返回的数据
    };
  },
  created() {
    this.resetFn();
  },
  methods: {
    changeFn(comKey, value) {
      console.log("exSearchChange", comKey, value);
      this.$set(this.searchData, comKey, value);
    },
    // 恢复为原始数据
    resetFn() {
      this.handleData = JSON.parse(JSON.stringify(this.comData));
      this.handleData.forEach((item) => {
        this.searchData[item.comKey] = item.value;
        if (this.$refs && this.$refs[item.comKey]) {
          this.$refs[item.comKey][0].value = item.value;
        }
      });
    },
    searchFn() {
      console.log(this.searchData);
    },
  },
};
</script>
<style lang="scss" scoped>
.ex-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
