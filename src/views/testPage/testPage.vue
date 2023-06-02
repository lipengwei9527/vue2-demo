<template>
  <!-- 外部 -->
  <div class="waibu">
    <!-- 头部 -->
    <div class="title">
      <span class="let"
            @click="shang">
        {{ "<"}} </span>
      <div>
        {{this.currentyear}}年{{this.currentmonth}}月{{this.currentday}}
      </div>
      <span class="rig"
            @click="xia">{{">"}}</span>
    </div>

    <!-- 周一到周日 -->
    <div class="zoumo">
      <p v-for="(item,index) in sun"
         :key="index">{{item}}</p>
    </div>
    <div class="box">
      <!-- 上个月剩余天数 -->
      <p class="sy"
         v-for="item in shanggeyue"
         :key="'a'+item">{{item}}</p>
      <!-- 当前月份 -->
      <p v-for="item in danqianyue"
         :key="'b'+item">{{item}}</p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'calendar',
  data () {
    return {
      sun: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      // 当前日
      currentday: new Date().getDate(),
      // 当前月
      currentmonth: new Date().getMonth() + 1,
      // 当前年
      currentyear: new Date().getFullYear(),
      arr: [],
    }
  },
  computed: {
    // 当前月的天数
    danqianyue () {
      // 有3个参数，第一个是年，第二个是月，然后输入0代表当前月份   这样就可以获取天数了
      return new Date(this.currentyear, this.currentmonth, 0).getDate()
    },
    // 获取当前月的一号是星期几
    // preSurplusDay
    shanggeyue () {
      return new Date(this.currentyear, this.currentmonth - 1, 1).getDay()
    }
  },
  created () {
    this.testDate()
  },
  methods: {
    testDate () {
      for (let i = 0; i < 10; i++) {
        let obj = {}
        let str = String(Math.floor(Math.random() * 3 + 1))
        console.log(str)
        obj.str = str
        this.arr.push(obj)
      }
    },
    shang () {
      console.log('上个月');
      if (this.currentmonth === 1) {
        this.currentyear--
        this.currentmonth = 12

      } else {
        this.currentmonth--
      }
    },
    xia () {
      console.log('下个月');
      if (this.currentmonth === 12) {
        this.currentyear++
        this.currentmonth = 1
      } else {
        this.currentmonth++
      }
    }
  }
}
</script>
 
<style scoped >
	.waibu{
		width: 500px;
		height: 500px;
		margin: 0 auto;
		background-color: cornflowerblue;
	}
	
	.title{
		height: 50px;
		background-color: cadetblue;
		display: flex;
		justify-content: space-between;
	}
	.title div{
		align-self: center;
	}
	.title .let,.title .rig{
		align-self: center;
		margin: 0 20px;
	}
	
	/* 周末 */
	.zoumo{
		display: flex;
		justify-content: inherit;
	}
	.zoumo p{
		display: flex;
		justify-content: center;
		width: calc(100% / 7);
		/* margin: 0 27px; */
	}
	
	
	/* 日历内容 */
	.box{
		display: flex;
		justify-content: inherit;	
		flex-wrap: wrap;
	}
	.box p{
		display: flex;
		justify-content: center;
		width: calc(100% / 7);
	}
	
	
	
	/* //剩余的天数 */
	.sy{	
		visibility:hidden;
	}
</style>