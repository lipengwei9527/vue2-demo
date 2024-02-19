<template>
  <div class="base-checkbox">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用"></el-checkbox>
      <el-checkbox label="选中且禁用"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'baseCheckbox',
  props: {
    comForm: {
      type: Object,
      default: () => ({}),
    },
    comCfg: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
      default: 'edit',
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
