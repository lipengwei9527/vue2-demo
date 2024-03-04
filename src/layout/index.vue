<template>
  <div class="layout">
    <!-- 顶部菜单 -->
    <ex-menu
      mode="horizontal"
      :menuList="topMenu"
      :activeIndex="topActive"
      @select="selectTopMenu"
    ></ex-menu>
    <div class="layout-page">
      <!-- 左面菜单 -->
      <ex-menu
        class="left-menu"
        mode="vertical"
        :menuList="leftMenu"
        :activeIndex="leftActive"
        @select="changeMenu"
      ></ex-menu>
      <!-- 交易页面 -->
      <div class="trade-page">
        <keep-alive :max="10">
          <router-view :to="path"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "layout",
  data() {
    return {
      path: "",
    };
  },
  computed: {
    ...mapState("menu", ["menus", "topActive", "leftActive"]),
    ...mapGetters("menu", ["topMenu", "leftMenu"]),
  },
  created() {
    this.resetActive();
  },
  methods: {
    ...mapActions("menu", ["resetActive", "selectTopMenu", "selectLeftMenu"]),
    changeMenu(index) {
      this.selectLeftMenu(index);
      this.$openTab(index);
    },
  },
};
</script>
<style lang="scss" scoped></style>
