<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    ...mapState('app', ['appState']),
  },
  created() {
    this.setAppState()
  },
  methods: {
    ...mapActions('app', ['setAppState']),
  },
}
</script>

<style></style>
