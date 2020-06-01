<template>
    <div>
        <el-col :span="8" :offset="6">
            <el-input placeholder="请输入搜素的商品名" icon="search" v-model="search"></el-input>
        </el-col>
        <el-table
                :data="goodsList.slice((currentPage-1)*pageSize,currentPage*pageSize).filter(data => !search || data.goodsName.toLowerCase().includes(search.toLowerCase()))"
                :class="{'table' : true}"
                style="width: 100%">
            <el-table-column
                    label="input"
                    width="180">
                <template>
                    <el-checkbox></el-checkbox>
                    <span style="margin-left: 10px"></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="goodsName"
                    label="商品名称"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="goodsPrice"
                    label="商品价格"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.goodsPrice }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="goodsDetail"
                    label="商品详情"
                    width="180">
                <template slot-scope="scope">
                    <p style="margin-left: 10px">{{ scope.row.goodsDetail }}</p>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品图片"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px"><img :src="scope.row.goodsImgs" alt="" :class="{'img':true}"></span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="editgsForm(scope.$index, scope.row.id)"
                    >编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                :class="{'page':true}"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pageSize"
                layout="total, sizes,prev, pager, next"
                :total="pageData.total"
                prev-text="上一页"
                next-text="下一页">
        </el-pagination>

        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form  :model="update" ref="editForm" >
                <el-form-item label="品牌ID" :label-width="formLabelWidth">
                    <el-input v-model="update.editbrandId" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类ID" :label-width="formLabelWidth">
                    <el-input v-model="update.editcatId" ></el-input>
                </el-form-item>
                <el-form-item label="商品详情" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsDetail" ></el-input>
                </el-form-item>
                <el-form-item label="商品图片" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsImgs" ></el-input>
                </el-form-item>
                <el-form-item label="商品名称" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsName" ></el-input>
                </el-form-item>
                <el-form-item label="商品价格" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsPrice" ></el-input>
                </el-form-item>
                <el-form-item label="商品积分" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsScore" ></el-input>
                </el-form-item>
                <el-form-item label="商品标题" :label-width="formLabelWidth">
                    <el-input v-model="update.editgoodsTitle" ></el-input>
                </el-form-item>
                <el-form-item label="关键字" :label-width="formLabelWidth">
                    <el-input v-model="update.editkeywords" ></el-input>
                </el-form-item>
                <el-form-item label="是否推荐" :label-width="formLabelWidth">
                    <el-switch v-model="update.editrecommend"></el-switch>
                </el-form-item>
                <el-form-item label="是否下架" :label-width="formLabelWidth">
                    <el-switch v-model="update.editstatus"></el-switch>
                </el-form-item>
            </el-form>


            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleEdit('editForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        inject:["reload"],
        name: 'goodsList',
        data() {
            return {
                update: {},
                editbrandId:'',
                editcatId: '',
                editgoodsDetail: '',
                editgoodsImgs: '',
                editgoodsName: '',
                editgoodsPrice: '',
                editgoodsScore: '',
                editgoodsTitle: '',
                editkeywords: '',
                editrecommend: '',
                editstatus: '',
                id:'',


                dialogFormVisible: false,
                formLabelWidth: '120px',
                total:'',
                isSelectedAll: false,//是否全选
                goodsList: [],
                pageData:[],
                pageSize: 5,//页容量
                search:'',
                currentPage:1
            }
        },
        methods: {

            editgsForm (index, id) {
                console.log(index, id)
                this.dialogFormVisible = true
                this.Id = id
            },
            //编辑
            handleEdit(index) {
                if (this.update.editrecommend === true){
                    this.update.editrecommend = 1
                }else{
                    this.update.editrecommend = 0
                }
                if (this.update.editstatus === true){
                    this.update.editstatus = 1
                }else{
                    this.update.editstatus = 0
                }

                // if (!this.editbrandId.length > 0){
                //     alert('品牌id不能为空')
                //     return false
                // }else if (!this.editcatId.length > 0){
                //     alert('分类id不能为空')
                //     return false
                // }else if (!this.editgoodsDetail.length > 0){
                //     alert('商品详情不能为空')
                //     return false
                // }else if (!this.editgoodsImgs.length > 0){
                //     alert('商品图片不能为空')
                //     return false
                // }else if (!this.editgoodsName.length > 0){
                //     alert('商品名称不能为空')
                //     return false
                // }else if (!this.editgoodsPrice.length > 0){
                //     alert('商品价格不能为空')
                //     return false
                // }else if (!this.editgoodsScore.length > 0){
                //     alert('商品积分不能为空')
                //     return false
                // }else if (!this.editgoodsTitle.length > 0){
                //     alert('商品标题不能为空')
                //     return false
                // }else if (!this.editkeywords.length > 0){
                //     alert('关键字不能为空')
                //     return false
                // }

                this.$refs[index].validate((valid) => {
                    if (valid) {
                        const params = {
                            id: this.Id,
                            brandId: this.update.brandId,
                            catId: this.update.editcatId,
                            goodsDetail: this.update.editgoodsDetail,
                            goodsImgs: this.update.editgoodsImgs,
                            goodsName: this.update.editgoodsName,
                            goodsPrice: this.update.editgoodsPrice,
                            goodsScore: this.update.editgoodsScore,
                            goodsTitle: this.update.editgoodsTitle,
                            keywords: this.update.editkeywords,
                            recommend: this.update.editrecommend,
                            status: this.update.editstatus
                        }
                        this.$axios.post('/api/goods/edit', params,
                            {
                                headers:
                                    {
                                        'Content-Type': 'application/json'
                                    }
                            })
                            .then((response) => {
                                console.log(response)
                                if (response.data.code === 200){
                                    this.$message.success('编辑成功')
                                    this.reload();
                                }else {
                                    this.$message.error('编辑失败')
                                }
                                this.dialogFormVisible = false
                            }).catch((err) => {
                            console.log(err)
                        })
                    }
                });
            },
                //删除
                handleDelete(index) {
                    this.$axios.post('/api/goods/delete',
                        {
                            id: index,// ID-必传
                        },
                        {
                            headers:
                                {
                                'Content-Type': 'application/json'
                                 }
                        }).then((response) => {
                        if (response.data.code === 200){
                            this.$message.success('删除成功')
                            this.reload();
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                },
                handleSizeChange: function(size) {
                    this.pageSize = size;
                    console.log(this.pageSize)
                },
                //点击第几页
                handleCurrentChange: function(currentPage) {
                    this.currentPage = currentPage;
                    console.log(this.currentPage)
                },
            },
            mounted: function () {
                this.$axios.post('/api/goods/list'
                    ,
                    {
                        brandId: "", // 品牌ID-不传表示所有品牌
                        catId: "",// 分类ID-不传表示所有分类
                        goodsName: "", // 商品名字,传递-模糊查询
                        status: '',// 状态1:上架,0:下架, 不传: 所有状态
                    }
                    , {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        if (response.data.code === 200){
                            this.goodsList = response.data.data.list
                            this.pageData = response.data.data
                            this.total = response.data.data.total
                        }
                    console.log(response.data.data)
                    // console.log(response.config);

                }).catch((err) => {
                    console.log(err);

                })
            },
    }
</script>

<style scoped>
    .page{
        margin-top: 100px;
        text-align: center;
    }
    .img{
        width: 50px;
        height: 50px;
    }

</style>