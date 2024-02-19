<template>
  <div class="menu-tree">
    <template v-for="(item, index) in menuList">
      <el-submenu
        v-if="item.children?.length"
        :index="item.path + index"
        :key="item.path + index"
      >
        <template slot="title">{{ item.title }}</template>
        <menu-tree :menuList="item.children"></menu-tree>
      </el-submenu>
      <el-menuItem v-else :index="item.path" :key="item.path + index">
        {{ item.title }}
      </el-menuItem>
    </template>
  </div>
</template>
<script>
export default {
  name: "menuTree",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
// .menu-tree {
//   width: 100%;
// }
</style>
