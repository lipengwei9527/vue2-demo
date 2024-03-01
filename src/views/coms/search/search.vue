<template>
  <div class="search">
    <ex-search :comData="comData" @searchFn="searchFn"></ex-search>
    <ex-table
      ref="exTable"
      v-bind="tableConfig"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    ></ex-table>
    <!-- <div>
      恢复为原始数据恢复为原始数据恢复为原始数据恢复为原始数据恢复为原始数据恢复为原始数据恢复为原始数据
    </div> -->
  </div>
</template>
<script>
import { tableData, testApi } from "@/axios/apiFox";
import { resetTableHeight } from "@/utils/general";
export default {
  name: "search",
  data() {
    return {
      comData: [
        {
          comName: "exInput",
          comKey: "key1",
          label: "搜索1",
          value: "1",
          clearable: true,
        },
        {
          comName: "exSelect",
          comKey: "key2",
          label: "搜索2",
          value: "1",
          clearable: true,
          options: [
            {
              value: "1",
              label: "黄金糕",
            },
            {
              value: "2",
              label: "双皮奶",
            },
          ],
        },
        {
          comName: "exDate",
          comKey: "key3",
          label: "搜索3",
          clearable: true,
          value: ["2024-03-01", "2024-03-05"],
        },
        {
          comName: "exInput",
          comKey: "key4",
          label: "搜索4",
          value: "2",
          clearable: true,
        },
      ],
      tableConfig: {
        showIndex: true,
        selection: true,
        border: true,
        currentPage: 1,
        pageSize: 10,
        total: 20,
        colSlots: [],
        defaultCellText: "-",
        columns: [
          {
            prop: "name",
            label: "名称",
          },
          {
            prop: "age",
            label: "年龄",
          },
          {
            prop: "sex",
            label: "性别",
          },
          {
            prop: "company",
            label: "公司",
          },
        ],
        tableData: [],
      },
    };
  },
  created() {},
  activated() {
    this.getTableData({ test: 1 });
  },
  methods: {
    getTableData() {
      tableData()
        .then((res) => {
          this.tableConfig.tableData = res.data;
          // this.tableConfig.maxHeight = 400;
          this.$refs.exTable.setTableLayout();
        })
        .catch((error) => {});
      testApi()
        .then((res) => {
          // console.log(this.)
        })
        .catch((error) => {});
    },
    searchFn(query) {
      console.log("query", query);
    },
    currentChange(currentPage) {
      console.log("当前页改变", currentPage);
      this.tableConfig.currentPage = currentPage;
    },
    sizeChange(pageSize) {
      console.log("表格每页显示数量改变", pageSize);
      this.tableConfig.pageSize = pageSize;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  height: 100%;
}
</style>
