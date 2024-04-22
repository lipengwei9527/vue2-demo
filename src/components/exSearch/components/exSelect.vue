<template>
  <div class="ex-select">
    <el-select
      v-model="value"
      v-bind="{ placeholder: '请选择', size: 'small', ...config }"
      @change="changeFn"
    >
      <el-option
        v-for="item in config.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "exSelect",
  components: {},
  mixins: [],
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
      options: [],
    };
  },
  created() {
    this.value = this.searchData[this.config.comKey];
  },
  methods: {
    changeFn(value) {
      this.$emit("change", this.config.comKey, value);
    },
  },
};
</script>
<style lang="scss" scoped></style>
