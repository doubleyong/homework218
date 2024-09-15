<template>
  <div id="myChart" :style="{width: '100%', height: '450px'}"></div>
</template>
<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'myEcharts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      startTime: '2020-04',
      endTime: '2020-06'
    }
  },
  mounted () {
    this.drawLine()
    this.$axios.post('/api/all/order/money', {
      startTime: '2020-04',
      endTime: '2020-06'
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('这是图标啊')
      console.log(response.data)
      if (response.data.code !== 200) {
        return this.$message.error(response.data.msg)
      } else {
        this.$message.success(response.data.msg)
      }
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        color: ['rgba(96,51,221,.5)', 'rgba(253,106,48,.5)'],
        title: { text: '订单销量统计图' },
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [2020.1, 2020.2, 2020.3, 2020.4, 2020.5, 2020.6]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 元'
          },
          data: [0, 200, 500, 800, 1100, 1400]
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1320],
          type: 'line',
          smooth: 'true',
          areaStyle: {}
        }, {
          data: [300, 500, 700, 934, 400, 1020],
          type: 'line',
          smooth: 'true',
          areaStyle: {}
        }
        ]
      })
    }
  }
}
</script>
<style scoped>

</style>
