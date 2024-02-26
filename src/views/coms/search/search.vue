<template>
    <div class="search-form">
      <ex-search :comData="comData" @searchFn="searchFn"></ex-search>
    </div>
  </template>
  <script>
  export default {
    name: "search",
    components: {},
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
          },
          {
            comName: "exInput",
            comKey: "key4",
            label: "搜索4",
            value: "2",
            clearable: true,
          },
        ],
      };
    },
    mounted() {},
    methods: {
      searchFn(query) {
        console.log("query", query);
      },
    },
  };
  </script>
  <style lang="scss" scoped></style>
  