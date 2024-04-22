<template>
  <div>
    <el-button size="small" type="primary" @click="changeLanguage">
      切换语言
    </el-button>
    <br />
    <div>本地语言：</div>
    <div>{{ $t("language") }}</div>
    <br />
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
  created() {
    console.log(this.$i18n);
  },
  methods: {
    changeLanguage() {
      let local = localStorage.getItem("local");
      if (local == "en") {
        localStorage.setItem("local", "zh");
        this.$i18n.locale = "zh";
      } else {
        localStorage.setItem("local", "en");
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
