<template>
  <el-submenu v-if="menu.children?.length" :index="menu.path" :key="menu.path">
    <template slot="title">{{ menu.title }}</template>
    <menu-tree
      v-for="(item, index) in menu.children"
      :key="item.path + index"
      :menu="item"
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
  methods: {},
};
</script>
<style lang="scss" scoped></style>
