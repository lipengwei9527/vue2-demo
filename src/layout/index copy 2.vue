<template>
  <div class="layout">
    <child>
      <template slot="test" slot-scope="scope"> 123 </template>
    </child>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  name: 'layout',
  components: {
    child,
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
