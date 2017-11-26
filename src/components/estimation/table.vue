<!--查看估算记录表格-->
  <template>
    <div class="container-list">
      <div class="filter">
        <div class="quick-search" >
          <input type="text" placeholder="请输入搜索内容"  @input="search" class="quick-search">
        </div>

        <div class="create" style="width: 200px">
          <el-button  type="primary"  @click="goCreate" >创建估算 <i class="el-icon-plus"></i></el-button>
        </div>
      </div>
      <div class="box">
        <div class="table">
          <el-table :data="tableData4" style="width: 100%;margin: auto" height=400>
            <el-table-column prop="id" label="id" width="80" type="index" :index="indexMethod"></el-table-column>
            <el-table-column prop="proName" label="项目名称" width="150"></el-table-column>
            <el-table-column prop="proIntro" label="项目简介" width="150"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
            <el-table-column prop="state" label="状态" width="150"></el-table-column>
            <el-table-column prop="method" label="估算方法" width="150"></el-table-column>
            <el-table-column label="操作" width="218">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
                <el-button @click.native.prevent="modify(scope.$index)" type="text" size="small">修改</el-button>
                <el-button type="text" size="small" @click.native.prevent="goReport">查看报告</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="200"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </template>


<script>
  import global_ from "../../Global.vue"
  export default {
    name:'ReportTable',
    methods: {
          goReport:function () {
            this.$router.push( {path:'/stepfour'})
          },
      indexMethod(index) {
        return index +1;
      },
      goCreate:function () {
        this.$router.push( {path:'/stepone'})
      },
      deleteRow(index, rows) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
          .then(() => {
            this.$http.post('http://192.168.1.122:8011/estimation/deleteRequirement/' + this.tableData4[index].rId).then(res=>{
                rows.splice(index, 1);
            this.$message(
            {
              type: 'success',
             message: '删除成功!'
           }
          );
            },res=>{
              this.$message({
                type: 'info',
                message:'删除失败!'
              });
            })
        })
//          .catch(() => {
//          this.$message({
//            type: 'info',
//            message:'已取消删除!'
//          });
//        });
      },
      modify(index){
        var s="待修改";
        var e="待审核"
        var est=[];
        est = this.tableData4[index].state;
        if(est == s|| est==e )
        {
          global_.ID = this.tableData4[index].rId
          console.log(global_.ID)
          this.$router.push( {path:'/steptwo'})

        }
        else{
          this.$alert('只能对待修改状态项目进行编辑', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message:'请选择待修改项目进行编辑'
              });
            }
          })
        }
      },
      search(e) {
          this.tableData4.length = 0;
          var v = new RegExp(e.target.value);
          for(var j=0;j<this.allData.length;j++){
            if(v.test(this.allData[j].proName)||
                v.test(this.allData[j].proIntro)||
                v.test(this.allData[j].state)||
                v.test(this.allData[j].method)){
                var temp = {
                    "rId" : '',
                    "proName" : '',
                    "proIntro" : '',
                    "createTime" : '',
                    "state" : '',
                    "method" : '',
                    "remark" : ''
                }
                temp.rId = this.allData[j].rId;
                temp.proName=this.allData[j].proName;
                temp.proIntro = this.allData[j].proIntro;
                temp.createTime = this.allData[j].createTime;
                temp.state = this.allData[j].state;
                temp.method = this.allData[j].method;
                temp.remark = this.allData[j].remark;
                this.tableData4.push(temp);
            }
            console.log(v.test(this.allData[j].proName))

          }

      }
    },
    data() {
      return {
        tableData4: [],
          allData: []
      }
    },
    mounted() {
      this.$http.get('http://192.168.1.122:8011/estimation/getAllRequirements').then(res=>{
          for(var i = 0; i < res.body.length; i++){
            var temp = {
              "rId" : '',
              "proName" : '',
              "proIntro" : '',
              "createTime" : '',
              "state" : '',
              "method" : '',
              "remark" : ''
            }
            temp.rId = res.body[i].id;
            temp.proName = res.body[i].description.projectName;
            temp.proIntro = res.body[i].description.projectDescription;
            temp.createTime = res.body[i].createTime.split('T')[0];
            temp.state = res.body[i].state;
            temp.method = res.body[i].description.estimationMethod;
            temp.remark = res.body[i].remark;
            this.tableData4.push(temp);
            this.allData.push(temp);
          }
          console.log(this.tableData4)
        },res=>{
          console.log('fail');
        })
    }
  }

</script>


<style>
  .container-list {
    font-size: 13px;
    font-family: 'Microsoft YaHei';
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .container-list.filter{
    width: 100%;
    height: 70px;
    border: solid rgba(71, 72, 69, 0.4) 1px;
    margin: auto;
  }
  .container-list .filter .quick-search {
    width: 250px;
    height: 40px;
    border: solid rgba(71, 72, 69, 0.4) 1px;
  display: flex;
  float:left}
  .container-list .filter .quick-search input {
    color: #474845; }
  .container-list .filter .quick-search input::placeholder {
    color: rgba(71, 72, 69, 0.4); }
  .filter{
    width: 100%;
    border: solid rgba(71, 72, 69, 0.4) 1px;
    margin: auto;
  }
  .box{
    width: 100%;
    border-bottom: solid rgba(71, 72, 69, 0.4) 1px;
    border-right: solid rgba(71, 72, 69, 0.4) 1px;
    border-left: solid rgba(71, 72, 69, 0.4) 1px;
    border-top: 0;
    margin: auto;
  }
  .quick-search {
    margin: 10px 5%;
    position: relative;
    display: flex;
    float:left;
    background: rgba(255, 255, 255, 0.3);
    transition: all .2s;
    border-radius: 5px; }
  .quick-search:hover {
    background: rgba(255, 255, 255, 0.4); }
  .quick-search input{
    border: none;
    height: 28px;
    margin: 0;
    background: transparent;
    color: white;
    letter-spacing: 1px; }
  .quick-search input {
    border-radius: 5px 0 0 5px;
    font: 14px bold;
    padding: 0 10px;
    width: 250px; }
  .quick-search input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0; }
  .table {
    padding: 0;
    border-collapse: collapse;
    table-layout: fixed;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 90%;
  }
  .create{
    margin-top:13px;
    display: flex;
    float: right;
  }

</style>
