<template>
  <el-submenu
    v-if="menu.children && menu.children.length > 0"
    :index="menu.path"
  >
    <template slot="title"> {{ menu.title }}</template>
    <menu-tree
      v-for="item in menu.children"
      :menu="item"
      :key="item.path"
    ></menu-tree>
  </el-submenu>
  <el-menu-item v-else :index="menu.path" :key="menu.path">
    {{ menu.title }}
  </el-menu-item>
</template>
<script>
export default {
  name: "menuTree",
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    // el-menu和el-submenu不在同一界面会导致内存溢出
    // 解决办法：https://blog.csdn.net/qq_35651352/article/details/127014926
    this.$children[0].$parent = this.$parent;
  },
  methods: {},
};
</script>
<style lang="scss"></style>
