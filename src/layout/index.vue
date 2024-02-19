<template>
  <div class="layout">
    <c-menu
      class="left-tab"
      :mode="mode"
      :menuList="menuList"
      :activeIndex="activeIndex"
      @select="select"
    ></c-menu>
    <div class="trade-page">
      <keep-alive :max="10" :include="cacheViews">
        <router-view :to="path"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      mode: "vertical", //vertical horizontal
      activeIndex: "0",
      path: "",
      cacheViews: [], //缓存的路由
      menuList: [
        { title: "canvas", path: "/canvas/canvas1" },
        {
          title: "动画",
          path: "/animation/test1",
        },
        {
          title: "语言",
          path: "/i18n",
          children: [{ title: "i18n", path: "/language/i18n" }],
        },
        {
          title: "样式",
          path: "/inputcss",
          children: [{ title: "inputcss", path: "/style/inputcss" }],
        },
      ],
    };
  },
  created() {},
  methods: {
    select(index, indexPath) {
      console.log(index);
      this.cacheViews.unshift(index);
      this.$router.push(index);
    },
  },
};
</script>
<style lang="scss" scoped></style>
