<template>
  <div class="cus-button">
    <el-button :size="size" :type="type" @click="click">
      <slot></slot>
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'primary',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    'native-type': {
      type: String,
      default: 'button',
    },
  },
  name: 'cusButton',
  data() {
    return {}
  },
  created() {},
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>
<style lang="scss" scoped>
.cus-button {
  display: inline-block;
  margin: 7px 7px 7px 0;
}
</style>
