<!--管理员查看IFPUG调整因子-->
<template>
    <div class="container">
        <el-row style="margin-bottom: 0">
            <el-col :span="22"><div class="grid-content bg-white"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
                <el-button type="text" v-on:click="dialogVisible = true">编辑</el-button>
              <el-dialog
                title="编辑调整因子"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <Body_EditIFPUGFactor></Body_EditIFPUGFactor>
                <span slot="footer" class="dialog-footer">
                   <el-button @click="close">取 消</el-button>
                   <el-button type="primary" @click="submit">提交</el-button>
                </span>
              </el-dialog>
            </div></el-col>
        </el-row>

        <hr class="style-two" width=100% style="margin-top: 0">
        <el-row></el-row>
        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>开发类型</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tType}}</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>软件可靠性要求</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tReliability}}</span>
            </div></el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>开发平台</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tPlatform}}</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>产品复杂度</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tComplexity}}</span>
            </div></el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>开发语言</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tLanguage}}</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>执行时间约束</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tTime}}</span>
            </div></el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>是否使用数据库</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tDB}}</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>要求的开发进度</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tSchedule}}</span>
            </div></el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>生产率</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tProductivity}}</span>
                <span>小时／FP</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>人力成本</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{tLabor}}</span>
                <span>元／人月</span>
            </div></el-col>
        </el-row>

        <el-dialog title="提示" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="修改状态" :label-width="formLabelWidth">
                    <el-select v-model="form.state" placeholder="请选择状态">
                        <el-option label="待修改" value="modification"></el-option>
                        <el-option label="完成" value="success"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="Submit">确 定</el-button>
            </div>
        </el-dialog>

        <el-row></el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="5"><div class="grid-content bg-white"></div></el-col>
            <el-col :span="14"><div class="grid-content bg-white" style="text-align: center;">
                <el-button type="primary" @click="Prev" style="margin: auto;">返回</el-button>
                <el-button type="primary" @click="dialogFormVisible = true" style="margin: auto;">提交</el-button>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white"></div></el-col>
        </el-row>

    </div>

</template>


<script>
  import global_ from "../../Global.vue"
  import Body_EditIFPUGFactor from "./Body_EditIFPUGFactor.vue"

    export default {
        name: 'Body_CheckIFPUGFactor',
       components: {
         Body_EditIFPUGFactor
       },
        methods: {
            init(){
                this.$http.get('http://192.168.1.122:8011/estimation/getRequirement/'+global_.ID).then(res=>{
                    console.log(res.body.vaf);
                    this.tType = res.body.vaf.developmentType
                    this.tPlatform = res.body.vaf.developmentPlatform
                    this.tLanguage = res.body.vaf.languageType
                    this.tDB = res.body.vaf.dbms_Used
                    this.tReliability = res.body.vaf.rely
                    this.tComplexity = res.body.vaf.cplx
                    this.tTime = res.body.vaf.time
                    this.tSchedule = res.body.vaf.sced
                    this.tProductivity = res.body.vaf.productivity
                    this.tLabor = res.body.vaf.cost
                },res=>{
                    console.log('fail');
                })
            },
          close() {
            this.$confirm('返回前页将不会保存当前内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
            }).then(() => {
              this.dialogVisible=false
              this.$message({
                type: 'success',
                message: '已取消编辑'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消操作'
              });
            });
          },
          submit() {
              this.init();
              this.dialogVisible=false;
          },
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          },
            Prev() {
                this.$confirm('是否返回前页', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '返回前页!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
            },
          goEdit(){
                this.$router.push({path:'/managerstepthree'})
          },
          Submit(){
              this.$router.push({path:'/mver'})
              this.dialogFormVisible = false;
          }
        },
        data() {
            return {
                tType:'',
                tPlatform:'',
                tLanguage:'',
                tDB:'',

                tReliability: '',
                tComplexity: '',
                tTime: '',
                tSchedule: '',

                tProductivity: '',
                tLabor: '',
                dialogVisible: false,
                dialogFormVisible: false,
                form: {
//                    name: '',
                    state: '',
//                    date1: '',
//                    date2: '',
//                    delivery: false,
//                    type: [],
//                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        },
        mounted(){
            this.init();
        }
    }
</script>


<style>
    .container {
        font-size: 13px;
        font-family: 'Microsoft YaHei';
        width: 80%;
        height: auto;
        margin: auto;
        padding: 50px 0 40px 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .container.filter{
        width: 100%;
        border: solid rgba(71, 72, 69, 0.4) 1px;
        margin: auto;
    }
    .container .filter .quick-search {
        width: 200px;
        border: solid rgba(71, 72, 69, 0.4) 1px; }
    .container .filter .quick-search input {
        color: #474845; }
    .container .filter .quick-search input::placeholder {
        color: rgba(71, 72, 69, 0.4); }

    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-white{
        background: #FFFFFF;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #FFFFFF;
    }

    hr.style-two {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    }

</style>
