<template>
  <div>
    <h2>vue中插入Echarts示例</h2>
    <div id="chart_example">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echar',
  data () {
    return {}
  },
  methods: {

  },
  mounted () {
    const myChart = echarts.init(document.getElementById('chart_example'))
    const option = {
      color: ['#f44'],
      title: { text: '订单统计图' },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [],
        type: 'line',
        areaStyle: {}
      }]
    }
    myChart.setOption(option)
    // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
    window.addEventListener('resize', function () { myChart.resize() })
  },
  created () {
  }
}
</script>
<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 80%;
    height: 500px;
    margin: 0 auto;
  }
</style>
