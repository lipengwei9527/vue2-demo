<template>
  <div>
    <div class="p-h1">语言切换</div>
    <div>json文件：</div>
    <div>{{ ta }}</div>
    <div>{{ $t('language') }}</div>
    <div>element语言包：</div>
    <div>{{ $t('el.cascader.loading') }}</div>
    <div></div>
    <el-button @click="changeLanguage">切换语言</el-button>
  </div>
</template>
<script>
export default {
  name: 'i18n',
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    ta() {
      return this.$t('language')
    },
  },
  created() {
    console.log(this)
    console.log(this.$t)
  },
  methods: {
    changeLanguage() {
      let flags = ['en', 'zh']
      this.count = this.count + 1
      if (this.count > 1) {
        this.count = 0
      }
      this.$i18n.locale = flags[this.count]
    },
  },
}
</script>
<style lang="scss" scoped></style>
