<template>
  <div class="layout">
    <!-- 顶部菜单 -->
    <ex-menu
      :mode="mode"
      :menuList="topMenuList"
      :activeIndex="activeIndex"
      @select="topSelect"
    ></ex-menu>
    <div class="layout-page">
      <!-- 左面菜单 -->
      <ex-menu
        class="left-menu"
        mode="vertical"
        :menuList="leftMenuList"
        :activeIndex="activeIndex"
        @select="leftSelect"
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
export default {
  name: "layout",
  data() {
    return {
      mode: "horizontal", //vertical horizontal
      activeIndex: "0",
      path: "",
      cacheViews: [], //缓存的路由
      topMenuList: [
        { title: "canvas", path: "/canvas/canvas1" },
        {
          title: "动画",
          path: "/animation/test1",
        },
        {
          title: "语言",
          path: "/i18n",
        },
        {
          title: "样式",
          path: "/style",
        },
      ],
      leftMenuList: [],
      // 自己菜单
      childData: {
        "/style": [
          {
            title: "搜索表单",
            path: "/style/searchForm",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    createMenuData() {
      for (let i = 1; i < 30; i++) {
        this.leftMenuList.push({
          title: "菜单" + i,
          path: i.toString(),
        });
      }
    },
    // 顶部菜单事件
    topSelect(index, indexPath) {
      console.log(index, indexPath);
      if (!this.childData[index]) {
        this.$router.push(index);
        this.leftMenuList = [];
      } else {
        this.leftMenuList = this.childData[index];
      }
    },
    // 左面菜单事件
    leftSelect(index, indexPath) {
      this.$router.push(index);
    },
  },
};
</script>
<style lang="scss" scoped></style>
