<template>
  <div class="home">
    <m-header></m-header>
    <div class="main-box">
      <vue-drag-chart :list="item"
                      v-for="(item,index) in chartlist"
                      :key="index"
                      @changelist="changelist"></vue-drag-chart>

    </div>
    <div class="menu-box">
      <m-menu></m-menu>
    </div>
  </div>
</template>

<script>
import mHeader from '../components/common/Header'
import mMenu from '../components/common/Menu'
import VueDragChart from '../components/vue-drag-chart/index'
export default {
  name: 'Home',
  components: {
    mHeader,
    mMenu,
    VueDragChart
  },
  data () {
    return {
      chartlist: [
        {
          width: 0.3,
          height: 0.3,
          x: 200,
          y: 100,
          title: '折线图',
          type: 1,
          extend: {
            width: 600,
            height: 200,
            xAxis: {
              axisLine: {
                lineStyle: {
                  color: '#BED1EF'
                }
              }
            },
            yAxis: {
              // 纵坐标字体颜色，同理横坐标
              axisLine: {
                lineStyle: {
                  color: '#BED1EF'
                }
              }
            },
            legend: {
              textStyle: {
                fontSize: 14,
                color: '#BED1EF'
              }
            }
          },
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
              { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
              { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
              { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
              { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
              { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
            ]
          }
        },
        {
          width: 0.5,
          height: 0.3,
          x: 400,
          y: 400,
          title: '饼图',
          type: 3,
          extend: {
            width: 600,
            height: 200,
            xAxis: {
              axisLine: {
                lineStyle: {
                  color: '#BED1EF'
                }
              }
            },
            yAxis: {
              // 纵坐标字体颜色，同理横坐标
              axisLine: {
                lineStyle: {
                  color: '#BED1EF'
                }
              }
            }
          },
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
              { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
              { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
              { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
              { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
              { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
            ]
          }
        }
      ]
    }
  },
  methods: {
    changelist () {
      console.log(this.chartlist)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .main-box {
    width: 1920px;
    height: 1080px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    // margin: auto;
  }
  .menu-box {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
