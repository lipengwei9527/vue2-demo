<template>
  <div class="ex-input">
    <el-input
      v-model="value"
      v-bind="{
        size: 'small',
        ...config,
      }"
      @change="changeFn"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "exInput",
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
  mounted() {},
  methods: {
    changeFn(value) {
      this.$emit("change", this.config.comKey, value);
    },
  },
};
</script>
<style lang="scss" scoped></style>
