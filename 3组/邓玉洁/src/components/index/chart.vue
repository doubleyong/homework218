<template>
    <div id="main" style="width: 600px;height: 400px;"></div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "charts",
        data() {
            return {
                charts: '',
                /*  opinion: ["1", "3", "3", "4", "5"],*/
                opinionData: ["3", "2", "4", "4", "5"]
            }
        },
        methods: {
            drawLine(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['近七日收益']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ["1","2","3","4","5"]

                    },
                    yAxis: {
                        type: 'value'
                    },

                    series: [{
                        name: '订单数量',
                        type: 'line',
                        stack: '总量',
                        data: this.opinionData
                    }]
                })
            }
        },
        //调用
        mounted() {
            this.$nextTick(function() {
                this.drawLine('main')
            })
                // this.$axios.post('/api/all/all/statistics', {
                //     orderTotalCount: 9,// 总订单数
                //     todaySaleMoney: 0, // 今日销售额
                //     lastDaySaleMoney: 0,// 昨日销售额
                //     offGoodsCount: 5,// 下架商品数
                //     onGoodsCount: 6,// 上架商品数
                //     totalGoodsCount: 11,// 总商品数
                //     todayNewMemberCount : 0,// 今日新增会员数
                //     lastDayNewMemberCount : 0,// 昨日新增会员数
                //     nowMonthNewMemberCount : 2,// 当月新增会员数
                //     memberCount: 6// 总会员数量
                // },{
                //     headers: {
                //         'Content-type': 'application/json'
                //     }
                // }).then( (response)=> {
                //     console.log(response.data);
                //     // this.productList = response.data
                // }).catch((err) =>{
                //     console.log(err);
                // })
           },
    }
</script>

<style scoped>

</style>