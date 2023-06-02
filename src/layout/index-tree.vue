<template>
  <div class="layout">
    <el-button size="mini" @click="refreshFn">刷新</el-button>
    <el-input v-model="value"></el-input>
    <!-- lazy -->
    <el-tree
      ref="tree"
      :data="data1"
      :default-expand-all="expandAll"
      :filter-node-method="filterNodeFn"
      :load="loadFn"
      :expand-on-click-node="false"
      :props="defaultProps"
      @node-click="nodeClick"
      :default-expanded-keys="defaultExpandedKeys"
      node-keys="id"
      draggable
      @node-drag-start="handleDragStart"
      @node-drag-end="handleDragEnd"
      @node-drag-over="handleDragOver"
    >
      <div class="custom-tree-node" slot-scope="{ data, node }">
        <div class="name">{{ data.name }}</div>
        <div class="operation">
          <span @click="delNode">增加</span>
          &nbsp;&nbsp;
          <span @click="delNode">删除</span>
          &nbsp;&nbsp;
        </div>
      </div>
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data() {
    return {
      value: '',
      activeNode: [],
      defaultProps: { label: 'name', children: 'children', isLeaf: 'leaf' },
      defaultExpandedKeys: [1],
      expandAll: false,
      data1: [
        {
          name: 'w1',
          id: 1,
          leaf: false,
          children: [
            {
              name: 'w1-1',
              id: 3,
              leaf: true,
              children: [{ name: 'w1-1-1', id: 7, leaf: true }],
            },
            { name: 'w1-2', id: 4, leaf: true },
            { name: 'w1-3', id: 5, leaf: true },
          ],
        },
        {
          name: 'w2',
          id: 2,
          leaf: true,
          children: [{ name: 'w2-1', id: 6, leaf: true }],
        },
      ],
    }
  },
  watch: {
    value(newVal) {
      this.$refs.tree.filter(newVal)
    },
  },
  created() {},
  methods: {
    filterNodeFn(value, data) {
      console.log(value, data)
      if (!value) return true
      return data.name.indexOf(value) != -1
    },
    addNode() {},
    delNode() {},
    nodeClick(data, node, self) {
      // console.log(this.$refs.tree)
      console.log(data, node, self)
      // this.activeNode = node
    },
    refreshFn() {},
    handleDragStart(node, event) {
      console.log('handleDragStart', node, event)
    },
    handleDragEnd(dragNode, dropNode, dropType, event) {
      console.log('handleDragEnd', dragNode, dropNode, dropType, event)
    },
    handleDragOver(dragNode, dropNode, ev) {
      console.log('handleDragOver', dragNode, dropNode, ev)
    },
    // allowDrop(draggingNode, dropNode, type) {
    //   console.log(draggingNode, dropNode, type)
    //   return true
    // },
    async loadFn(node, resolve) {
      if (node.level == 0) {
        return resolve(node.data)
      } else {
        return new Promise((res) => {
          setTimeout(() => {
            res(resolve(node.data.children))
          }, 1000)
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.custom-tree-node {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
