<template>
  <div class="child">
    <div>child组件</div>
    <slot name="test" :obj="obj"></slot>
  </div>
</template>
<script>
export default {
  name: 'child',
  data() {
    return {
      obj: {
        a: 1,
        b: 2,
      },
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.child {
  border: 1px solid red;
}
</style>
