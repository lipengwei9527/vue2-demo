<template>
  <div>子组件
    <div @click="dom">ref</div>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    dom () {
      console.log(this)
    }
  }
}
</script>

<style>

</style>