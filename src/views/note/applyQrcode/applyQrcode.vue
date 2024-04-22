<template>
  <div class="apply-qrcode">
    <el-button size="small" type="primary" @click="createQrcode">
      刷新
    </el-button>
    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "applyQrcode",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      qrcode: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.createQrcode();
  },
  methods: {
    createQrcode() {
      this.$refs.qrcode.innerHTML = "";
      this.qrcode = new QRCode("qrcode", {
        width: 300,
        height: 300,
        text: "https://blog.csdn.net/c_zyer/article/details/129401622",
        colorDark: "#000000",
        colorLight: "#fff",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.apply-qrcode {
  #qrcode {
    width: 300px;
    height: 300px;
    margin: 50px auto;
  }
}
</style>
