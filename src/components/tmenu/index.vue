<template>
  <el-col :span="3" class="content">
    <el-menu
      class="menu"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <Menu :data="menuList"></Menu>
    </el-menu>
  </el-col>
</template>
<script>
import Menu from './menu.vue'
export default {
  components: {
    Menu,
  },
  data() {
    return {
      activeIndex: '0',
      menuList: [
        {
          value: 'form',
          label: '表单系列',
          children: [
            {
              value: 'multiFormCheck',
              label: '多表单校验',
              children: [
                {
                  value: 'form1',
                  label: '表单1',
                },
                {
                  value: 'form2',
                  label: '表单2',
                },
              ],
            },
            {
              value: 'loopForm',
              label: '循环表单',
            },
          ],
        },
        {
          value: 'secondaryPackageCom',
          label: '封装组件',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
