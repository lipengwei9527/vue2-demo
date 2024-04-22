<template>
  <div>
    <draggable
      v-model="tableData"
      animation="300"
      @start="onStart"
      @end="onEnd"
    >
      <div class="item" v-for="(item, index) in tableData" :key="index">
        {{ item }}
      </div>
    </draggable>
  </div>
</template>
<script>
export default {
  name: "applyDraggable",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tableData: [1, 2, 3, 4],
    };
  },
  mounted() {},
  methods: {
    onStart(...arg) {
      console.log(...arg);
    },
    onEnd(...arg) {
      console.log(...arg);
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  background-color: #8888;
  margin: 10px;
}
</style>
