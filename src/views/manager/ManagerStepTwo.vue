<!-- 输入调整因子界面 -->
<template>
    <div class="person_center">
      <Head2></Head2>
      <div class="header1">
        <div class="page-header1">
          <div class="header1-container">
            <div class="avatar">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509041832135&di=abc5c99b8048b0c600049e68cdb64602&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2FnMbQAfw2LAJG4ahCYE_XJA%3D%3D%2F3886606478520925399.jpg">
            </div>
            <div class="person-info">
              <div class="name">管理员--查看调整因子</div>
              <div class="info">yourNAME</br></div>
            </div>
          </div>
        </div>
      </div>
        <Body_CheckIFPUGFactor></Body_CheckIFPUGFactor>
    </div>
</template>

<script>
    import Head2 from"../../components/Head2.vue"
    import Body_CheckIFPUGFactor from "../../components/estimation/Body_CheckIFPUGFactor"
    import global_ from "../../Global.vue"

    export default {
        name: "ManagerStepTwo",
        components: {
            Head2,Body_CheckIFPUGFactor
        },
        data() {
            return {
                isCollapse: true
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
</style>
