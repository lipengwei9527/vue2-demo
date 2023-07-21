<template>
  <div class="layout">
    <div class="box">
      <div class="left">
        12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df12fs阿萨德噶地方过得好的爽肤水发生地方啊啊嘎电饭锅df
      </div>
      <cus-table
        v-bind="tableConfig"
        @select="select"
        @selectAll="selectAll"
        @selectionChange="selectionChange"
        @sizeChange="sizeChange"
        @currentChange="currentChange"
      >
        <template slot="head-col0" slot-scope="{ column }">
          <div @click="clickHead(column)">{{ column.label }}</div>
        </template>
        <template slot="col0" slot-scope="{ row }">
          {{ row.col0 + 123 }}
        </template>
      </cus-table>
    </div>

    <cus-button @click="test2Fn(1, 2, 34)">按钮</cus-button>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data() {
    return {
      test: 1,
      tableConfig: {
        showIndex: true,
        selection: true,
        border: true,
        rowKey: 'id',
        stripe: true,
        currentPage: 1,
        pageSize: 10,
        total: 0,
        headSlots: [],
        colSlots: [],
        columns: [
          {
            prop: 'col0',
            label: '列0',
            align: 'center',
            labelClassName: 'col0-suc-name',
            // children: [
            //   {
            //     prop: 'col0-0',
            //     label: '列0-0',
            //     align: 'center',
            //     children: [
            //       { prop: 'col0-0-0', label: '列0-0-0' },
            //       { prop: 'col0-0-1', label: '列0-0-1' },
            //     ],
            //   },
            //   { prop: 'col0-1', label: '列0-1', fixed: 'left' },
            // ],
          },
          {
            prop: 'col1',
            label: '列1',
            // children: [
            //   { prop: 'col1-0', label: '列1-0' },
            //   { prop: 'col1-1', label: '列1-1' },
            // ],
          },
          {
            prop: 'col2',
            label: '列2',
          },
          {
            prop: 'col3',
            label: '列3',
          },
          {
            prop: 'col4',
            label: '列4',
          },
          {
            prop: 'col5',
            label: '列5',
          },
          {
            prop: 'col6',
            label: '列6',
            minWidth: '100',
            timeFormat: 'yyyy-MM-DD',
          },
          {
            prop: 'col7',
            label: '列7',
            minWidth: '100',
            // timeFormat: 'yyyy/MM/DD',
          },
        ],
        tableData: [],
      },
      totalData: [],
    }
  },
  created() {
    this.setTableData()
  },
  methods: {
    testFn() {
      console.log('原生按钮')
    },
    test2Fn(...arg) {
      console.log('自定义按钮', ...arg)
    },
    clickHead(scope) {
      console.log(scope)
    },
    sizeChange(pageSize) {
      this.tableConfig.pageSize = pageSize
      this.tableConfig.currentPage = 1
      let { currentPage: curPage, pageSize: size } = this.tableConfig
      this.tableConfig.tableData = this.totalData.slice(
        (curPage - 1) * size,
        curPage * size
      )
    },
    currentChange(currentPage) {
      this.tableConfig.currentPage = currentPage
      let { currentPage: curPage, pageSize: size } = this.tableConfig
      this.tableConfig.tableData = this.totalData.slice(
        (curPage - 1) * size,
        curPage * size
      )
    },
    selectionChange(selection) {
      console.log('selectionChange', selection)
    },
    selectAll(selection) {
      console.log('selection', selection)
    },
    select(selection, row) {
      console.log('selection, row', selection, row)
    },
    setTableData() {
      // let columns = []
      // for (let i = 0; i < 10; i++) {
      //   columns.push({
      //     prop: 'col' + i,
      //     label: '列' + i,
      //   })
      // }
      // this.tableConfig.columns = columns
      for (let i = 0; i < 115; i++) {
        let obj = {
          id: i,
          col0: 'col1-' + (i + 1),
          'col0-0': 'col0-0-' + (i + 1),
          'col0-1': 'col0-1-' + (i + 1),
          col1: 'col1-' + (i + 1),
          col2: 'col2-' + (i + 1),
          col3: 'col3-' + (i + 1),
          col4: 'col4-' + (i + 1),
          col5: 'col5-' + (i + 1),
          col6: this.$formatDate(new Date(2023, 5, i + 1), 'x'),
          col7: this.$formatDate(new Date(2023, 5, i + 1), 'yyyy-MM-DD'),
        }
        this.totalData.push(obj)
      }
      this.tableConfig.tableData = this.totalData.slice(0, 10)
      this.tableConfig.total = this.totalData.length
    },
  },
}
</script>
<style lang="scss" scoped>
.layout {
  .box {
    display: flex;
    .left {
      width: 200px;
      border: 1px solid red;
    }
    .col0-suc-name {
      background-color: blue;
    }
  }
}
</style>
