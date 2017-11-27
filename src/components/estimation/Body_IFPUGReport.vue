<!--用户查看IFPUG报告-->
<template>
    <div>
    <div class="container">
        <h1 style="font-family: 'PingFang SC';text-align: center">IFPUG报告</h1>

        <!--数据功能表格-->
        <el-table id="table1" :data="tableData1" border stripe style="width: 100%">
            <el-table-column prop="name" label="逻辑文件名称"></el-table-column>
            <el-table-column prop="type" label="逻辑文件类型"></el-table-column>
            <el-table-column prop="RET" label="RET"></el-table-column>
            <el-table-column prop="DET" label="DET"></el-table-column>
            <el-table-column prop="complexity" label="复杂度"></el-table-column>
            <el-table-column prop="UFP" label="UFP"></el-table-column>
        </el-table>

        <el-row></el-row>
        <el-row></el-row>

        <!--事务功能表格-->
        <el-table id="table2" :data="tableData2" border stripe style="width: 100%">
            <el-table-column prop="name" label="事务名称"></el-table-column>
            <el-table-column prop="type" label="事务类型"></el-table-column>
            <el-table-column prop="file" label="逻辑文件"></el-table-column>
            <el-table-column prop="DET" label="DET"></el-table-column>
            <el-table-column prop="complexity" label="复杂度"></el-table-column>
            <el-table-column prop="UFP" label="UFP"></el-table-column>
        </el-table>

        <el-row></el-row>
        <el-row></el-row>


        <!--前五行调整因子-->
        <div>
            <el-row :gutter="20" v-for="group in displays" :key="group.index">
                <div v-for="item in group.items" :key="item.name" v-model="item.value">
                    <el-col :span="2"><div class="grid-content bg-white">
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-white">
                        <span>{{item.name}}</span>
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-white">
                        <span>{{item.value}}</span>
                        <span>{{item.unit}}</span>
                    </div></el-col>
                </div>
            </el-row>
        </div>

        <!--AFP-->
        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>AFP</span>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-white">
                <span>{{AFP}}</span>
            </div></el-col>
        </el-row>

        <!--项目工期、项目成本-->
        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>项目工期</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{projectDuration}}</span>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-white">
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>项目成本</span>
            </div></el-col>
            <el-col :span="5"><div class="grid-content bg-white">
                <span>{{projectCost}}</span>
            </div></el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import global_ from "../../Global.vue"
    var trans;
    export default {
        name:'Body_IFPUGReport',
        mounted:function () {
//            this.displays[0].items[0].value="1"
//            this.displays[0].items[1].value="2"
//            this.displays[1].items[0].value="3"
//            this.displays[1].items[1].value="4"
//            this.displays[2].items[0].value="5"
//            this.displays[2].items[1].value="6"
//            this.displays[3].items[0].value="7"
//            this.displays[3].items[1].value="8"
//            this.displays[4].items[0].value="9"
//            this.displays[4].items[1].value="10"

            this.$http.get('http://192.168.1.122:8011/estimation/getRequirement/' + global_.ID).then(response=>{
                trans=response.body.vaf;
                this.displays[0].items[0].value=trans.developmentType;
                this.displays[0].items[1].value=trans.rely;
                this.displays[1].items[0].value=trans.developmentPlatform;
                this.displays[1].items[1].value=trans.cplx;
                this.displays[2].items[0].value=trans.languageType;
                this.displays[2].items[1].value=trans.time;
                this.displays[3].items[0].value=trans.dbms_Used;
                this.displays[3].items[1].value=trans.sced;
                this.displays[4].items[0].value=trans.productivity;
                this.displays[4].items[1].value=trans.cost;
            },response=>{
                alert("error!");

            })
        },

        data() {
            return {
                tableData1: [{
                    name: '',
                    type: 'EIF',
                    RET: '',
                    DET: '',
                    complexity:'高',
                    UFP:''
                }],
                tableData2: [{
                    name: '',
                    type: 'EI',
                    RET: '',
                    DET: '',
                    complexity:'',
                    UFP:''
                }],
                displays:[
                    {
                        index:1,
                        items:[{
                            name:"开发类型",
                            value:""
                        },{
                            name:"软件可靠性要求",
                            value:""
                        }]
                    },{
                        index:2,
                        items:[{
                            name:"开发平台",
                            value:""
                        },{
                            name:"产品复杂度",
                            value:"",
                        }]
                    },{
                        index:3,
                        items:[{
                            name:"开发语言",
                            value:""
                        },{
                            name:"执行时间约束",
                            value:""
                        }]
                    },{
                        index:4,
                        items:[{
                            name:"是否使用数据库",
                            value:""
                        },{
                            name:"要求的开发进度",
                            value:""
                        }]
                    },{
                        index:5,
                        items:[{
                            name:"生产率",
                            value:"",
                            unit:"小时／FP"
                        },{
                            name:"人力成本",
                            value:"",
                            unit:"元／人月"
                        }]
                    }
                ],
                AFP:23.556,
                projectDuration:'',
                projectCost:''
            };
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
        margin-top: 10px;
        padding: 0px 0 40px 0;
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
        background: #FFFFFF
    }
    .bg-gray{
        background: #474845;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #FFFFFF;
    }
</style>
