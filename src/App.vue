<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState("app", ["appState"]),
  },
  created() {
    this.setAppState();
  },
  destroyed() {
    this.removeAppState();
  },
  methods: {
    ...mapActions("app", ["setAppState", "removeAppState"]),
  },
};
</script>

<style></style>
