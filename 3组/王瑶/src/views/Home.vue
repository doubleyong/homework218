<template>
    <div class="HomeBox">
      <breadcrumb text=""></breadcrumb>
      <el-row :gutter="0">
        <el-col :span="8">
          <div>
            <el-col :span="12">
              <div class="Title-txt">今日订单总数</div>
              <div class="sum">{{orderTotalCount}}</div>
            </el-col>
            <el-col :span="6" :offset="3" class="Rightline">
              <div class="ico"><i class="el-icon-s-order "></i></div>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-col :span="12">
              <div class="Title-txt">今日销售总额</div>
              <div class="sum">{{todaySaleMoney}}</div>
            </el-col>
            <el-col :span="6" :offset="3" class="Rightline">
              <div class="ico"><span>￥</span></div>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-col :span="12">
              <div class="Title-txt">昨日销售总额</div>
              <div class="sum">{{lastDaySaleMoney}}</div>
            </el-col>
            <el-col :span="6" :offset="3" class="Rightline">
              <div class="ico"><i class="el-icon-coin "></i></div>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <div>
            <el-col :span="24">
              <div class="DataView">商品总览</div>
              <div class="DataDiv">
                <el-col :span="24">
                  <!--已下架商品-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-sold-out"></i></div>
                      <div class="Title">已下架商品</div>
                      <div class="Num">{{offGoodsCount}}</div>
                    </div>
                  </el-col>
                  <!--已上架商品-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-sell"></i></div>
                      <div class="Title">已上架商品</div>
                      <div class="Num">{{onGoodsCount}}</div>
                    </div>
                  </el-col>
                  <!--库存紧张商品-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-warning-outline"></i></div>
                      <div class="Title">库存紧张商品</div>
                      <div class="Num">{{orderTotalCount}}</div>
                    </div>
                  </el-col>
                  <!--全部商品-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-s-shop"></i></div>
                      <div class="Title">全部商品</div>
                      <div class="Num">{{totalGoodsCount}}</div>
                    </div>
                  </el-col>
                </el-col>
              </div>
            </el-col>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-col :span="24">
              <div class="DataView">用户总览</div>
              <div class="DataDiv">
                <el-col :span="24">
                  <!--今日新增-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-medal"></i></div>
                      <div class="Title">今日新增</div>
                      <div class="Num">{{todayNewMemberCount}}</div>
                    </div>
                  </el-col>
                  <!--昨日新增-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-discover"></i></div>
                      <div class="Title">昨日新增</div>
                      <div class="Num">{{lastDayNewMemberCount}}</div>
                    </div>
                  </el-col>
                  <!--本月新增-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-box"></i></div>
                      <div class="Title">本月新增</div>
                      <div class="Num">{{nowMonthNewMemberCount}}</div>
                    </div>
                  </el-col>
                  <!--会员总数-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-s-custom"></i></div>
                      <div class="Title">会员总数</div>
                      <div class="Num">{{memberCount}}</div>
                    </div>
                  </el-col>
                </el-col>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h3 class="orderCount">订单统计</h3>
        </el-col>
      </el-row>
      <el-row>
        <!--订单统计-->
        <el-col :span="6">
          <el-col :span="24">
            <div class="orderDiv">
              <el-col :span="16">
                <div class="orderTotalCountDiv">
                  <div>本月订单总数</div>
                  <div>{{orderTotalCount}}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="orderTotalCountBi">
                  <div><span>+10%</span><i class="el-icon-top"></i></div>
                  <div>同比上月</div>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="orderDiv">
              <el-col :span="16">
                <div class="orderTotalCountDiv">
                  <div>本月商品总数</div>
                  <div>{{totalGoodsCount}}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="orderTotalCountBi">
                  <div class="TitleGreen"><span>-10%</span><i class="el-icon-bottom"></i></div>
                  <div>同比上月</div>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="orderDiv">
              <el-col :span="16">
                <div class="orderTotalCountDiv">
                  <div>本月销售总额</div>
                  <div>{{lastDaySaleMoney}}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="orderTotalCountBi">
                  <div class="TitleGreen"><span>-14%</span><i class="el-icon-bottom"></i></div>
                  <div>同比上月</div>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="orderDiv">
              <el-col :span="16">
                <div class="orderTotalCountDiv">
                  <div>本周销售总额</div>
                  <div>{{lastDaySaleMoney}}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="orderTotalCountBi">
                  <div><span>+10%</span><i class="el-icon-top"></i></div>
                  <div>同比上月</div>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-col>
        <!--echarts图-->
        <el-col :span="18">
          <myEcharts></myEcharts>
        </el-col>
      </el-row>
    </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'
import myEcharts from './myEcharts.vue'
import ElCol from 'element-ui/packages/col/src/col'
import ElRow from 'element-ui/packages/row/src/row'
export default {
  name: 'Home',
  components: {
    breadcrumb,
    myEcharts,
    ElCol,
    ElRow
  },
  data () {
    return {
      orderTotalCount: '',
      todaySaleMoney: '',
      lastDaySaleMoney: '',
      offGoodsCount: '',
      onGoodsCount: '',
      totalGoodsCount: '',
      todayNewMemberCount: '',
      lastDayNewMemberCount: '',
      nowMonthNewMemberCount: '',
      memberCount: ''
    }
  },
  methods: {
  },
  mounted () {
    this.$axios.post('/api/all/statistics', {
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('这是数据统计啊')
      console.log(response.data)
      this.orderTotalCount = response.data.data.orderTotalCount
      this.todaySaleMoney = response.data.data.todaySaleMoney
      this.lastDaySaleMoney = response.data.data.lastDaySaleMoney
      this.offGoodsCount = response.data.data.offGoodsCount
      this.onGoodsCount = response.data.data.onGoodsCount
      this.totalGoodsCount = response.data.data.totalGoodsCount
      this.todayNewMemberCount = response.data.data.todayNewMemberCount
      this.lastDayNewMemberCount = response.data.data.lastDayNewMemberCount
      this.nowMonthNewMemberCount = response.data.data.nowMonthNewMemberCount
      this.memberCount = response.data.data.memberCount
    })
  }
}
</script>
<style scope>
  .Title-txt{
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
    color: #8E8E8E;
    font-family:Source Han Sans CN;
  }
  .ico{
    width:80px;
    height:80px;
    background:rgba(96,51,221,1);
    border-radius:20px;
    font-size: 50px;
    text-align: center;
    color: #f1f1f1;
    line-height: 80px;
  }
  .sum{
    width:100%;
    height:59px;
    font-size:36px;
    text-align: center;
    font-family:Source Han Sans CN;
    font-weight:800;
    color:rgba(43,43,43,1);
    line-height:59px;
  }
  .Rightline{
    border-right: solid 2px #DADCE5;
  }
  .DataView{
    font-size: 18px;
    height: 18px;
    line-height: 18px;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
  }
  .DataDiv{
    border: 1px solid #DADCE5;
  }
  .DataDiv,.ViewDiv{
    height: 200px;
  }
  .Title,.Num{
    height: 35px;
  }
  .Icon{
    height: 45px;
    font-size: 30px;
    color: #8E8E8E;
  }
  .Title{
    font-size: 14px;
    color: #8E8E8E;
  }
  .Num{
    font-size: 26px;
    color: #2B2B2B;
    font-weight: bold;
  }
  .orderCount{
    height: 100px;
    line-height: 100px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }
  .orderDiv{
    height: 95px;
    line-height: 95px;
    padding-left: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    text-align: left;
    width: 90%;
    border-radius: 20px;
    margin-bottom: 20px;
    background-color: rgb(248,248,248);
  }
  .orderTotalCountDiv>div:nth-of-type(1){
    height: 20px;
    font-family: SourceHanSansCN-Regular;
    color: #8E8E8E;
    font-size: 14px;
  }
  .orderTotalCountDiv>div:nth-of-type(2){
    height: 30px;
    font-size: 26px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
  }
  .orderTotalCountBi{
    height: 95px;
  }
  .orderTotalCountBi>div:nth-of-type(1){
    height: 20px;
    color: #FF4B4B;
  }
  .orderTotalCountBi>div:nth-of-type(2){
    height: 20px;
    font-size: 14px;
    color: #C5C4C4;
  }
  .TitleGreen{
    color: #66CF55!important;
  }
</style>
