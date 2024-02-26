<template>
  <div>
    <el-button @click="changeLanguage">切换语言</el-button>
    <div>json文件：</div>
    <div>{{ ta }}</div>
    <div>{{ $t("language") }}</div>
    <div>element语言包：</div>
    <div>{{ $t("el.cascader.loading") }}</div>
    <el-date-picker></el-date-picker>
  </div>
</template>
<script>
export default {
  name: "langChange",
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    ta() {
      return this.$t("language");
    },
  },
  created() {
    console.log(this);
    console.log(this.$t);
  },
  methods: {
    changeLanguage() {
      let flags = ["en", "zh"];
      this.count = this.count + 1;
      if (this.count > 1) {
        this.count = 0;
        localStorage.setItem("local", "en");
        sessionStorage.setItem("local", "en");
      } else {
        localStorage.setItem("local", "zh");
        sessionStorage.setItem("local", "zh");
      }
      this.$i18n.locale = flags[this.count];
    },
  },
};
</script>
<style lang="scss" scoped></style>
