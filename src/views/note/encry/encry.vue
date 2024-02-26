<template>
  <div>
    <div>md5加密：</div>
    <el-input v-model="value"></el-input>
    <el-button @click="encryptRSA">加密</el-button>
  </div>
</template>
<script>
import { encryptRSA, decryptRSA } from "@utils/encrypt";
export default {
  name: "encry",
  data() {
    return {
      value: "",
    };
  },
  mounted() {},
  methods: {
    encryptRSA() {
      let encry = encryptRSA(this.value);
      console.log("加密后：", encry);
      let decry = decryptRSA(encry);
      console.log("解密后：", decry);
    },
  },
};
</script>
<style lang="scss" scoped></style>
