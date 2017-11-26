<!--用户输入IFPUG调整因子-->
  <template>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>开发类型</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-radio-group v-model="tType">
            <el-radio :label="'New Development'">New Development</el-radio>
            <el-radio :label="'Enhencement'">Enhencement</el-radio>
            <el-radio :label="'Re-development'">Re-development</el-radio>
          </el-radio-group>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>开发平台</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-radio-group v-model="tPlatform">
            <el-radio :label="'Personal computer'">Personal computer</el-radio>
            <el-radio :label="'Mainframe'">Mainframe</el-radio>
            <el-radio :label="'Mid-range'">Mid-range</el-radio>
          </el-radio-group>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>开发语言</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-radio-group v-model="tLanguage">
            <el-radio :label="'3GL'">3GL</el-radio>
            <el-radio :label="'4GL'">4GL</el-radio>
            <el-radio :label="'ApG'">ApG</el-radio>
          </el-radio-group>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>是否使用数据库</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-radio-group v-model="tDB">
            <el-radio :label="1">Yes</el-radio>
            <el-radio :label="0">No</el-radio>
          </el-radio-group>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>软件可靠性要求</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-select v-model="tReliability" placeholder="请选择">
            <el-option
                    v-for="item in tReliabilityOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>产品复杂度</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-select v-model="tComplexity" placeholder="请选择">
            <el-option
                    v-for="item in tComplexityOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>执行时间约束</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-select v-model="tTime" placeholder="请选择">
            <el-option
                    v-for="item in tTimeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>要求的开发进度</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-select v-model="tSchedule" placeholder="请选择">
            <el-option
                    v-for="item in tScheduleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>生产率</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-input v-model="tProductivity" placeholder="10-30" style="width: 50%"></el-input>
          <span>小时／FP</span>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-white">
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-white">
          <span>人力成本</span>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-white">
          <el-input v-model="tLabor" placeholder="请输入内容" style="width: 50%"></el-input>
          <span>元／人月</span>
        </div></el-col>
      </el-row>
      <div class="grid-content bg-white" style="margin: auto">
        <el-button type="primary" @click="Prev" >返回</el-button>
        <el-button type="primary" @click="Next">提交</el-button>
      </div>
    </div>
  </template>


<script>
    import global_ from "../../Global.vue"

//    var trans={
//        "developmentType": this.tType,
//        "developmentPlatform": this.tPlatform,
//        "languageType": this.tLanguage,
//        "DBMS_Used": this.tDB,
//        "RELY": this.tReliability,
//        "CPLX": this.tComplexity,
//        "TIME": this.tTimeOptions,
//        "SCED": this.tScheduleOptions,
//        "productivity": this.tProductivity,
//        "cost": this.tLabor
//    }

  export default {
      name: 'Body_IFPUGFactor',
      methods: {
          Prev() {
              this.$confirm('返回前页将不会保存当前内容, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning',
                  center: true
              }).then(() => {
                  this.$router.push( {path:'/steptwo'});
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
          Next() {
              console.log(global_.ID);
              var trans = {
                  "developmentType": this.tType,
                  "developmentPlatform": this.tPlatform,
                  "languageType": this.tLanguage,
                  "DBMS_Used": Boolean(this.tDB),
                  "RELY": this.tReliability,
                  "CPLX": this.tComplexity,
                  "TIME": this.tTime,
                  "SCED": this.tSchedule,
                  "productivity": this.tProductivity,
                  "cost": this.tLabor
              };
              console.log(trans);
              this.$confirm('是否提交当前信息?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning',
                  center: true
              }).then(() => {
                this.$router.push( {path:'/ver'});
                  this.$http.post('http://192.168.1.122:8011/estimation/addVAF/' + global_.ID, trans).then(response => {
                      this.$message({
                          type: 'success',
                          message: '已提交当前信息!'
                      });
                  })
              }).catch(() => {
                  this.$message({
                      type: 'info',
                      message: '已取消操作'
                  });
              });
          },

//        Next() {
//            var trans={
//                "developmentType": this.tType,
//                "developmentPlatform": this.tPlatform,
//                "languageType": this.tLanguage,
//                "DBMS_Used": Boolean(this.tDB),
//                "RELY": this.tReliability,
//                "CPLX": this.tComplexity,
//                "TIME": this.tTime,
//                "SCED": this.tSchedule,
//                "productivity": this.tProductivity,
//                "cost": this.tLabor
//            }
//            this.$confirm('是否提交当前信息, 进入下一步骤?', '提示', {
//                confirmButtonText: '确定',
//                cancelButtonText: '取消',
//                type: 'warning',
//                center: true
//            }).then(() => {
//                console.log(trans);
//                this.$message({
//                    type: 'success',
//                    message: '已提交当前信息!'
//                });
//            }).catch(() => {
//                this.$message({
//                    type: 'info',
//                    message: '已取消操作'
//                });
//            });
//        }
    },
          data() {
              return {
                  tType: '', tPlatform: '', tLanguage: '', tDB: '',

                  tReliabilityOptions: [{
                      value: 1,
                      label: 'Very Low'
                  }, {
                      value: 2,
                      label: 'Low'
                  }, {
                      value: 3,
                      label: 'Normal'
                  }, {
                      value: 4,
                      label: 'High'
                  }, {
                      value: 5,
                      label: 'Very High'
                  }],

                  tReliability: 1,

                  tComplexityOptions: [{
                      value: 1,
                      label: 'Very Low'
                  }, {
                      value: 2,
                      label: 'Low'
                  }, {
                      value: 3,
                      label: 'Normal'
                  }, {
                      value: 4,
                      label: 'High'
                  }, {
                      value: 5,
                      label: 'Very High'
                  }, {
                      value: 6,
                      label: 'Extra High'
                  }],
                  tComplexity: 1,

                  tTimeOptions: [{
                      value: 1,
                      label: 'Normal'
                  }, {
                      value: 2,
                      label: 'High'
                  }, {
                      value: 3,
                      label: 'Very High'
                  }, {
                      value: 4,
                      label: 'Extra High'
                  }],
                  tTime: 1,

                  tScheduleOptions: [{
                      value: 1,
                      label: 'Very Low'
                  }, {
                      value: 2,
                      label: 'Low'
                  }, {
                      value: 3,
                      label: 'Normal'
                  }, {
                      value: 4,
                      label: 'High'
                  }, {
                      value: 5,
                      label: 'Very High'
                  }],
                  tSchedule: 1,

                  tProductivity: 30,
                  tLabor: 10
              };
          }
      }
</script>


<style>
  .container {
    font-size: 13px;
    font-family: 'Microsoft YaHei';
    width: 64%;
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
    width: 100%;
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
</style>
