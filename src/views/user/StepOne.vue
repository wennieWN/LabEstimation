<!-- 登陆文件 -->
<template>
    <div class="stepone_section">
        <Head2></Head2>
        <div class="header1">
        <div class="page-header1">
          <div class="header1-container">
            <div class="avatar">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509041832135&di=abc5c99b8048b0c600049e68cdb64602&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2FnMbQAfw2LAJG4ahCYE_XJA%3D%3D%2F3886606478520925399.jpg">
            </div>
            <div class="person-info">
              <div class="name">用户创建估算--项目说明</div>
              <div class="info">yourNAME</br>填写估算项目的详细信息</div>
            </div>
          </div>
        </div>
      </div>
        <div class="stepone_content">
            <el-form label-position="left"  label-width="100px":model="form">
                    <el-form-item label="项目名称">
                        <el-input v-model="form.projectName" placeholder="项目名称"></el-input>
                    </el-form-item>
                <el-form-item label="项目简介">
                    <el-input type="textarea"  v-model="form.projectDescription" placeholder="项目简介"></el-input>
                </el-form-item>

                <el-form-item label="项目负责人">
                    <el-input  v-model="form.projectLeader" placeholder="项目负责人"></el-input>
                </el-form-item>

                <el-form-item label="联系方式">
                    <el-input  v-model="form.projectContact" placeholder="联系方式"></el-input>
                </el-form-item>

                <el-form-item label="估算方式"  >
                    <el-select  style="padding-right: 80%" v-model="form.estimationMethod" placeholder="请选择估算方式">
                        <el-option label="IFPUG" value="IFPUG"></el-option>
                        <el-option label="COSMIC" value="COSMIC"></el-option>
                    </el-select >
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  v-on:click="toReport" >返回</el-button>
                    <el-button type="primary" v-on:click="toStepTwo" style="margin-right: 10%">提交</el-button>
                </el-form-item>
            </el-form>


        </div>

    </div>

</template>

<script>
    import Head2 from "../../components/Head2.vue";
    import global_ from "../../Global.vue"
    export default {
        name: "StepOne",
        components: { Head2 },
        data: function () {
            return {
                form: {
                    projectName: '',
                    projectDescription: '',
                    projectLeader: '',
                    projectContact: '',
                    estimationMethod: 'IFPUG/COSMIC'
                },
                msg: 'Welcome to Your Vue.js App'
            }
        },

        methods: {
            toStepTwo () {

                //仅测试用，实际运行时删掉这一句
               // this.$router.push( {path:'/steptwo'});

               this.$http.get('http://192.168.1.122:8011/estimation/addRequirement').then(response => {
                    console.log('get success')
                    var id = response.body
                    global_.ID=id
                    console.log(global_.ID)
                    var description = this.form
                    this.$http.post('http://192.168.1.122:8011/estimation/addDescription/' + id, description).then(response => {
                            console.log('save success')
                            this.$router.push( {path:'/steptwo'});
                        }, response => {
                            console.log('fail')
                            alert('fail')
                        }
                    )
                }, response => {
                    console.log('fail')
                    alert('fail')
                })

            },
          toReport(){
            this.$confirm('返回前页将不会保存当前内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
            }).then(() => {
              this.$router.push( {path:'/ver'});
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
          }
        }

    };
</script>

<style>
  .header1 {
    width: 80%;
    margin-top:40px;
    margin-left:10% ;
    display: flex;
    flex-direction: row;
    background: rgba(53,94,122, 0.7);
  }
  .header1 .page-header1 {
    border-radius: 4px 4px 0 0;
    margin: 0 auto;
    width: 80%;
    max-width: 948px;
    display: block;
  }
  .header1 .page-header1 .header1-container {
    background: rgba(245,245,245, 1);
    margin-top: 32px;
    height: 120px;
    position: relative;
    display: flex;
    flex-direction: row; }
  .header1 .page-header1 .header1-container .avatar {
    display: inline-block;
  }
  .header1 .page-header1 .header1-container .avatar img {
    width: 120px;
    height: 120px;
  }
  .header1 .page-header1 .header1-container .person-info {
    width: 784px;
    height: 120px;
    display: flex;
    flex-direction: column;
  }
  .header1 .page-header1 .header1-container .person-info .name {
    max-width: 460px;
    padding: 12px;
    font-size: 25px;
  }
  .header1 .page-header1 .header1-container .person-info .info {
    padding: 8px 0 0 24px;
    color: grey;
    font-size: 15px;
    line-height: 24px;}

    .stepone_content {
        text-align: center;
        margin-top: 40px;
        width: 64%;
        margin-left: auto;
        margin-right: auto;
        .margin-bottom: 40px;
    }

    .stepone_content > .el-input {
        margin: 5px;
    }

    .stepone_content > .el-button {
        width: 100%;
        margin: 8px 5px;
    }

    .no_account {
        float: right;
        cursor: pointer;
        font-size: 12px;

    }

    .no_account > a {
        color: #323a45;
    }

</style>

