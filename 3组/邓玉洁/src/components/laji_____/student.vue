<template>
    <div>
        <div :class="{'order':true}">
            <h3>排序</h3>
            <button @click="orderByAge(2)">年龄👆</button>
            <button @click="orderByAge(1)">年龄👇</button>
            <button @click="orderByAge(0)">默认</button>
        </div>
        <div :class="{'search':true}">
            <h3>搜索列表</h3>
            <p><input type="text" placeholder="请输入搜索的姓名" v-model="searchName"></p>
            <button @click="add">新增</button>
        </div>
        <div v-show="isShow">
            <input type="text" v-model="username" placeholder="姓名">
            <input type="text" v-model="sex" placeholder="性别">
            <input type="text" v-model="age" placeholder="年龄">
            <button @click="save">保存</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(t,index) in FilterStudent" :key="studentKeys[index]">
                <th>
                    ({{index + 1}})  {{t.name}}
                </th>
                <th>
                    {{t.sex}}
                </th>
                <th>
                    {{t.age}}
                </th>
                <th>
                    <button @click="del(index)">删除</button>
                    <button @click="updata(index)">修改</button>
                </th>
            </tr>
            </tbody>
        </table>
        <div>
            <ul><li v-for="item in productList" :key="item.id">
                {{item.id}}:{{item.productName}}:{{item.price}}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'student',
        data(){
            return{
                productList: [],
                searchName:'',
                username:'',
                age:'',
                sex:'',
                index:-1,
                student:[
                    {name:'张三',sex:'女',age:18},
                    {name:'李四',sex:'男',age:28},
                    {name:'王五',sex:'女',age:15},
                    {name:'赵六',sex:'男',age:21},
                    {name:'小七',sex:'女',age:41},
                    {name:'二八',sex:'男',age:68},
                    {name:'刘九',sex:'女',age:54},
                    {name:'一十',sex:'女',age:34},
                ],
                studentArr:[],
                isShow:false,
                studentKeys:[],
                orderType:0 //默认0
            }
        },
        computed:{
            FilterStudent(){
                //获取数据
                let {searchName,student,orderType} = this;
                //取出数组中的数据
                let arr = [...student];
                //过滤数组
                if (searchName.trim()){
                    arr = student.filter(s => s.name.indexOf(searchName)!==-1);
                }
                //排序
                if (orderType){
                    arr.sort((a,b)=>{
                       if (orderType === 1){//降序
                           return b.age - a.age
                       } else {//升序
                           return a.age - b.age
                       }
                    });
                }
                return arr;
            }
        },
        methods:{
            orderByAge(orderType){
                this.orderType = orderType;
            },
            addStudent(){
                let age = parseInt(this.age);
                let obj = {name:this.username,sex:this.sex,age:age};
                this.student.push(obj);
                this.username='';
                this.age='';
                this.sex='';
                this.isShow = false;
            },
            del(index){
                this.student.splice(index,1);
            },
            updata(index){
                this.isShow = true;
                this.index = index;
                this.username = this.student[index].name;
                this.sex = this.student[index].sex;
                this.age = this.student[index].age;
            },
            save(){
                if (this.username.length==0){
                    alert('请输入用户名');
                    return;
                }else if (this.age.length==0){
                    alert('请输入年龄');
                    return;
                }else if (this.sex.length==0){
                    alert('请输入性别');
                    return;
                }
                let age = parseInt(this.age);
                if (isNaN(age)){
                    alert('年龄格式不正确');
                    return;
                }
                if (this.index == -1){
                    //添加
                    this.addStudent();
                }else {
                    this.student[this.index].name = this.username;
                    this.student[this.index].sex = this.sex;
                    this.student[this.index].age = parseInt(this.age);
                    alert('修改成功');
                    this.username='';
                    this.age='';
                    this.sex='';
                    this.isShow = false;
                }
            },
            add(){
                this.index = -1;
                this.isShow = true;
                this.username='';
                this.age='';
                this.sex='';
            },
        } ,

    }
</script>

<style>
    .order button{
        padding: 10px;
        background-color: whitesmoke;
        border: 0;
        margin-left: 10px;
        transition: all 0.1s linear;
    }
    .order button:hover{
        background-color: black;
        color: whitesmoke;
    }
    .search{
        text-align: center;
    }
    .search button{
        position: relative;left: 230px;bottom: 35px;
        padding: 10px;
        background-color:green;
        color: whitesmoke;
    }
</style>
