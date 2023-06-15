<template>
  <div class="cus-button">
    <el-button :size="size" :type="type" @click="clickFn">
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
    clickFn() {
      this.$emit('click', 4, 5, 6, 7, 8, 9)
    },
  },
}
</script>
<style lang="scss" scoped></style>
