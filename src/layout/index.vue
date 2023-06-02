<template>
  <div class="layout">
    <!-- <el-button type="primary" size="mini" @click="fn1('a', 'b', 'c')">
      防抖
    </el-button> -->
    <draggable element="div" v-model="list" @start="start" @end="end">
      <div class="item" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </draggable>
  </div>
</template>
<script>
// import { debounce } from '@/utils/general.js'
import draggable from 'vuedraggable'
export default {
  name: 'layout',
  components: {
    draggable,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.setList()
  },
  methods: {
    start(...arg) {
      console.log('start', ...arg)
    },
    end(...arg) {
      console.log('end', ...arg)
    },
    setList() {
      for (let i = 0; i < 20; i++) {
        this.list.push({
          id: i + 1,
          name: 'a' + (i + 1),
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  width: 200px;
  background: linear-gradient(to right, #79bbff, #c6e2ff);
  margin: 5px 0;
  padding: 5px 0;
  cursor: pointer;
  .box1 {
    margin: 5px;
    border: 1px solid red;
  }
  .box2 {
    margin: 5px;
    border: 1px solid blue;
  }
}
</style>
