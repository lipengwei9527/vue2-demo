<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
    this.setPageState()
  },
  methods: {
    ...mapActions('app', ['setPageState']),
  },
}
</script>

<style></style>
