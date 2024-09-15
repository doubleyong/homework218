<template>
    <div>
      <!--顶部统计条-->
      <el-row :gutter="10">
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
      <!--分类统计条-->
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
                      <div class="Num">{{memberCount}}</div>
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
                      <div class="Icon"><i class="el-icon-turn-off"></i></div>
                      <div class="Title">今日新增</div>
                      <div class="Num">{{todayNewMemberCount}}</div>
                    </div>
                  </el-col>
                  <!--昨日新增-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-open"></i></div>
                      <div class="Title">昨日新增</div>
                      <div class="Num">{{lastDayNewMemberCount}}</div>
                    </div>
                  </el-col>
                  <!--库存紧张商品-->
                  <el-col :span="6">
                    <div class="ViewDiv">
                      <div class="Icon"><i class="el-icon-shopping-cart-2"></i></div>
                      <div class="Title">已下架商品</div>
                      <div class="Num">{{offGoodsCount}}</div>
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
                </el-col>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <!--标题-->
      <el-row :gutter="10">
        <el-col :span="24"><div>订单统计</div></el-col>
      </el-row>
      <!--数据显示-->
      <el-row>
        <el-col :span="6">
          <el-col class="leftbar">
            <div>
              <el-col :span="12">
                <div>
                  <p>本月订单总数</p>
                  <p>{{lastDaySaleMoney}}</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <p>+%10 <span class="el-icon-top"></span> </p>
                  <p>同比上月</p>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col class="leftbar">
            <div>
              <el-col :span="12">
                <div>
                  <p>本周订单总数</p>
                  <p>{{offGoodsCount}}</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <p>-10% <span class="el-icon-bottom"></span> </p>
                  <p>同比上周</p>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col class="leftbar">
            <div>
              <el-col :span="12">
                <div>
                  <p>本月销售总数</p>
                  <p>{{orderTotalCount}}</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <p>-14% <span class="el-icon-bottom"></span></p>
                  <p>同比上月</p>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col class="leftbar">
            <div>
              <el-col :span="12">
                <div>
                  <p>本月订单总数</p>
                  <p>{{offGoodsCount}}</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <p>+10%<span class="el-icon-top"></span></p>
                  <p>同比上周</p>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-col>
        <!--曲线图-->
        <el-col :span="18">
          <echars></echars>
        </el-col>
      </el-row>
    </div>
</template>
<script>
import ElRow from 'element-ui/packages/row/src/row'
import ElCol from 'element-ui/packages/col/src/col'
import echars from '../components/Echars.vue'
console.log(window.sessionStorage.getItem('user'))
export default {
  name: 'Home',
  components: {
    ElCol,
    ElRow,
    echars
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
    font-size: 16px;
    color: #8E8E8E;
    font-family:Source Han Sans CN;
    font-weight:400;
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
    width:64px;
    height:59px;
    font-size:36px;
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
    text-align: center;
    line-height: 100px;
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
  .leftbar{
    background:rgba(248,248,248,1);
    border-radius:20px;
    height: 95px;
    /*text-align: center;*/
    padding: 35px;
    margin-bottom: 15px;
  }
  .el-row {
    margin-bottom: 10px;
  }
  .el-row:last-child {
     margin-bottom: 0;
   }

</style>
