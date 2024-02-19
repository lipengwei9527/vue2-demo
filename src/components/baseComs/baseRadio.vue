<template>
  <div class="base-radio">
    <el-radio-group v-show="mode == 'edit'" v-model="comForm[comCfg.formKey]">
      <el-radio
        :label="item.value"
        v-for="(item, index) in options"
        :key="index"
        >{{ item.label }}</el-radio
      >
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: 'baseRadio',
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
  computed: {
    options() {
      let options = this.comCfg.options
      return options ? options : []
    },
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
