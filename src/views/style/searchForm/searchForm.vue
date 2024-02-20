<template>
  <div class="search-form">
    <ex-search :comData="comData"></ex-search>
  </div>
</template>
<script>
export default {
  name: "searchForm",
  components: {},
  data() {
    return {
      comData: [
        {
          comName: "exInput",
          comKey: "key1",
          value: "1",
        },
        {
          comName: "exSelect",
          comKey: "key2",
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
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
