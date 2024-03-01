<template>
  <div class="com-table">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    </el-tabs>
    <keep-alive>
      <component :is="activeName"></component>
    </keep-alive>
  </div>
</template>
<script>
import first from "./components/first.vue";
import second from "./components/second.vue";
export default {
  name: "comTable",
  components: { first, second },
  mixins: [],
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
