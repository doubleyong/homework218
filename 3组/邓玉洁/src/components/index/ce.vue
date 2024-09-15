<template>
    <div :class="{'che':true}">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <router-link :class="{'router':true}" :to="{name: 'charts'}"><el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                </router-link>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">会员列表</span>
                </el-menu-item>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-s-shop"></i>
                        <span>商品</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :class="{'router':true}" :to="{name: 'tables'}"><el-menu-item index="3-1">商品列表 </el-menu-item></router-link>
                        <router-link :class="{'router':true}" :to="{name: 'addGoods'}"><el-menu-item index="3-2">
                            添加商品
                        </el-menu-item>
                        </router-link>
                        <el-menu-item index="3-3">商品分类</el-menu-item>
                        <el-menu-item index="3-4">商品类型</el-menu-item>
                        <el-menu-item index="3-5">商品管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <span>订单</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">订单1</el-menu-item>
                        <el-menu-item index="3-2">订单1</el-menu-item>
                        <el-menu-item index="3-3">订单1</el-menu-item>
                        <el-menu-item index="3-4">订单1</el-menu-item>
                        <el-menu-item index="3-5">订单1</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="5">
                    <i class="el-icon-s-marketing"></i>
                    <span slot="title">营销</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-place"></i>
                    <span slot="title">权限</span>
                </el-menu-item>
            </el-menu>
        </div>

</template>

<script>
    export default {
        name :'ce',
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .router{
        text-decoration: none;
        color: black;
        transition: all 0.2s linear;
    }
    .router:hover{
        color: red;
    }
</style>