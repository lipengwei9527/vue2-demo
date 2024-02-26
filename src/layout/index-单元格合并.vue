<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" sortable label="数值 1">
      </el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2">
      </el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      merginRows: [],
      merginNum1: [],
      merginPos: "",
      tableData: [
        {
          id: "12987122",
          name: "王1",
          amount1: "111",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王1",
          amount1: "222",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王1",
          amount1: "111",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王2",
          amount1: "111",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王2",
          amount1: "111",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "王2",
          amount1: "222",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "王2",
          amount1: "222",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "王3",
          amount1: "111",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "王4",
          amount1: "111",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  created() {
    this.dealName();
    this.dealNum1();
  },
  methods: {
    dealName() {
      let data = this.tableData;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          this.merginRows.push(1);
          this.merginPos = 0;
        } else {
          if (data[i].name == data[i - 1].name) {
            this.merginRows[this.merginPos] += 1;
            this.merginRows.push(0);
          } else {
            this.merginRows.push(1);
            this.merginPos = i;
          }
        }
      }
    },
    dealNum1() {
      let data = this.tableData;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          this.merginNum1.push(1);
          this.merginPos = 0;
        } else {
          if (
            data[i].name == data[i - 1].name &&
            data[i].amount1 == data[i - 1].amount1
          ) {
            this.merginNum1[this.merginPos] += 1;
            this.merginNum1.push(0);
          } else {
            this.merginNum1.push(1);
            this.merginPos = i;
          }
        }
      }
    },
    arraySpanMethod({ row, col, rowIndex, columnIndex }) {
      // if (rowIndex % 2 === 0) {
      //   if (columnIndex === 0) {
      //     return [1, 2];
      //   } else if (columnIndex === 1) {
      //     return [0, 0];
      //   }
      // }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        const row = this.merginRows[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowspan: row,
          colspan: col,
        };
      }
      if (columnIndex == 2) {
        const row = this.merginNum1[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowspan: row,
          colspan: col,
        };
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
