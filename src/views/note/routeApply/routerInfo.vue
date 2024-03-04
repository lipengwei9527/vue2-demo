<template>
  <div class="information">
    <el-button size="small" type="primary" @click="routerGo">
      routerGo
    </el-button>
    <el-button size="small" type="primary" @click="routerGo">
      routerGo
    </el-button>
    <el-button size="small" type="primary" @click="routerBack">
      routerBack
    </el-button>
  </div>
</template>
<script>
export default {
  name: "information",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    routerGo() {
      this.$router.go();
    },
    routerBack() {
      this.$router.back();
      //  go(-1): 原页面表单中的内容会丢失：
      //    1. this.$router.go(-1)：后退+刷新；
      //    2. this.$router.go(0)：刷新；
      //    3. this.$router.go(1)：前进；

      //    1. this.$router.back()：后退 原页表表单中的内容会保留；
    },
  },
};
</script>
<style lang="scss" scoped></style>
