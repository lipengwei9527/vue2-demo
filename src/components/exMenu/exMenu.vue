<template>
  <el-menu
    :mode="mode"
    :collapse="collapse"
    :default-active="activeIndex"
    @select="select"
  >
    <template v-for="item in menuList">
      <menu-tree
        v-if="item.children && item.children.length > 0"
        :index="item.path"
        :key="item.path"
        :menu="item"
      ></menu-tree>
      <el-menu-item v-else :index="item.path" :key="item.path">
        {{ item.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import menuTree from "./menuTree.vue";
export default {
  name: "exMenu",
  components: {
    menuTree,
  },
  props: {
    mode: {
      type: String,
      default: "horizontal",
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    activeIndex: {
      type: String,
      default: "0",
    },
    menuList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    select(index, indexPath) {
      this.$emit("select", index, indexPath);
    },
  },
};
</script>
<style lang="scss">
.el-menu-item {
  font-size: 18px;
  font-weight: 400;
}
.el-submenu__title {
  font-size: 18px;
  font-weight: 400;
}
</style>
