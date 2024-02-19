<template>
  <el-submenu
    v-if="menu.children && menu.children.length != 0"
    :index="menu.path"
    :key="menu.path"
  >
    <template slot="title">{{ menu.title }}</template>
    <menu-item
      v-for="(item, index) in menu.children"
      :key="item.path + index"
      :menu="item"
    ></menu-item>
  </el-submenu>

  <el-menu-item v-else :index="menu.path" :key="menu.path">
    {{ menu.title }}
  </el-menu-item>
</template>
<script>
export default {
  name: 'menuItem',
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
