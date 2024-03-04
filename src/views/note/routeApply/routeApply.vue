<template>
  <div class="route-apply">
    <el-input v-model="value"></el-input>
    <el-button size="small" type="primary" @click="routerGo">
      routerGo
    </el-button>
    <el-button size="small" type="primary" @click="routerBack">
      routerBack
    </el-button>
    <el-button size="small" type="primary" @click="goInfo">详情页</el-button>
  </div>
</template>
<script>
export default {
  name: "routeApply",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    routerGo() {
      this.$router.go(0);
    },
    routerBack() {
      this.$router.back();
    },
    goInfo() {
      // console.log(this.$router);
      this.$openTab({
        title: "路由详情页",
        path: "/note/routerInfo",
        params: {
          id: 1234,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
