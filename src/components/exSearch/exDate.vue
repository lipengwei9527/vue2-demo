<template>
  <div class="ex-date">
    <el-date-picker
      v-model="value"
      v-bind="{
        'start-placeholder': '开始',
        'end-placeholder': '结束',
        'value-format': 'yy-MM-dd',
        type: 'daterange',
        ...config,
      }"
      @change="changeFn"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "exDate",
  props: {
    searchData: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      value: "",
    };
  },
  created() {
    this.value = this.searchData[this.config.comKey];
  },
  methods: {
    changeFn(value) {
      console.log("exDate", value);
      this.$emit("change", this.config.comKey, value);
    },
  },
};
</script>
<style lang="scss" scoped></style>
