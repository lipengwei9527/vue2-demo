<template>
  <div class="layout">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="150"> </el-table-column>
      <el-table-column
        label="配送信息1111111111111111111111111111111111111111111111111"
      >
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
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
            label: '列000000000000000000000000',
            fixed: 'left',
            // align: 'center',
            children: [
              { prop: 'col0-0', label: '列0-0' },
              { prop: 'col0-1', label: '列0-1' },
            ],
          },
          {
            prop: 'col1',
            label: '列1',
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
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
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
  }
}
</style>
