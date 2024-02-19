<template>
  <el-menu
    :mode="mode"
    :collapse="collapse"
    :default-active="activeIndex"
    @select="select"
  >
    <menu-tree :menuList="menuList"></menu-tree>
  </el-menu>
</template>
<script>
import menuTree from "./menuTree.vue";
export default {
  name: "CMenu",
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
