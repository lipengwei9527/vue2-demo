<template>
  <div class="layout">
    <!-- 顶部菜单 -->
    <ex-menu
      mode="horizontal"
      :menuList="topMenuList"
      :activeIndex="topActive"
      @select="selectTopMenu"
    ></ex-menu>
    <div class="layout-page">
      <!-- 左面菜单 -->
      <ex-menu
        class="left-menu"
        mode="vertical"
        :menuList="leftMenuList"
        :activeIndex="leftActive"
        @select="selectLeftMenu"
      ></ex-menu>
      <!-- 交易页面 -->
      <div class="trade-page">
        <keep-alive :max="10" :include="cacheViews">
          <router-view :to="path"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import menu from "./menu";
import { dataTransTree } from "@/utils/tree";
export default {
  name: "layout",
  data() {
    return {
      topActive: "",
      leftActive: "",
      path: "",
      cacheViews: [], //缓存的路由
      topMenuList: [],
      leftMenuList: [],
      allMenus: [],
    };
  },
  created() {
    this.allMenus = dataTransTree(menu);
    this.topMenuList = this.allMenus.map((item) => {
      return {
        id: item.id,
        pid: item.pid,
        title: item.title,
        path: item.path,
      };
    });
    this.topActive = this.topMenuList[0].path;
    let leftMenu = this.allMenus[0].children;
    this.leftMenuList = leftMenu;
    this.leftActive = leftMenu[0].path;
    this.$router.push(this.leftActive);
  },
  methods: {
    selectTopMenu(index, indexPath) {
      console.log(index, indexPath);
      this.leftMenuList = this.allMenus.find(
        (item) => item.path == index
      ).children;
    },
    selectLeftMenu(index, indexPath) {
      this.leftActive = index;
      this.$router.push(index);
    },
  },
};
</script>
<style lang="scss" scoped></style>
