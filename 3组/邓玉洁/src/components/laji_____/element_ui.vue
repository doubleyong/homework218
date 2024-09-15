<template>
    <div id="app">
        <el-transfer
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value"
                :data="data">
        </el-transfer>
        <p>{{time | timeFormat}}</p>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        data() {
            return{
                time:new Date(),
            }
            // const generateData = _ => {
            //     const data = [];
            //     const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            //     const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
            //     cities.forEach((city, index) => {
            //         data.push({
            //             label: city,
            //             key: index,
            //             pinyin: pinyin[index]
            //         });
            //     });
            //     return data;
            // };
            // return {
            //     data: generateData(),
            //     value: [],
            //     filterMethod(query, item) {
            //         return item.pinyin.indexOf(query) > -1;
            //     },
            // }
        },
        filters:{
          timeFormat(value,format = 'YYYY-MM-DD HH:mm:ss'){
              return moment(value).format(format);
          }
        },
        mounted() {
            setInterval(()=>{
                this.time = new Date();
            },1000)
        }
    };
</script>

<style scoped>

</style>