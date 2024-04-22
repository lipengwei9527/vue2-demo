<template>
  <div class="apply-image">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "applyImage",
};
</script>

<style lang="scss" scoped>
.apply-image {
  height: 100%;
  .box {
    height: 200px;
    width: 200px;
    background: no-repeat;
    background-image: url("./image.png");
  }
}
</style>