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
              <div class="name">管理员--IFPUG估算报告</div>
              <div class="info">yourNAME</br>查看报告</div>
            </div>
          </div>
        </div>
      </div>
        <div >
            <el-row type="flex" class="row-bg" style="margin-bottom: 0">
                <el-col :span="20"><div class="grid-content bg-white"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-white">
                    <el-button size="small" plain v-on:click="getPdf">点击下载PDF</el-button>
                    <el-button size="small" plain v-on:click="div_print">打印报告</el-button>
                </div></el-col>
            </el-row>
        </div>

        <Body_IFPUGReport class="pdf-dom" id="pdfDom"></Body_IFPUGReport>
        <div>
            <el-row></el-row>
            <el-row style="text-align: center">
                <el-button type="primary" v-on:click="toReport" >返回</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Head2 from "../../components/Head2.vue"
    import Body_IFPUGReport from "../../components/estimation/Body_IFPUGReport"
    import html2Canvas from '../../components/js/html2canvas.js'
    import JsPDF from '../../components/js/jsPdf.debug.js'
    export default {
        name: "ManagerIFPUGReport",
        components: {
            Head2,Body_IFPUGReport
        },
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            getPdf: function () {
                let _this = this
                let pdfDom = document.querySelector('#pdfDom')
                // 设置背景色
                pdfDom.style.background = '#FFFFFF'
                html2Canvas(pdfDom, {
                    onrendered: function(canvas) {
                        let contentWidth = canvas.width
                        let contentHeight = canvas.height
                        let pageHeight = contentWidth / 592.28 * 841.89
                        let leftHeight = contentHeight
                        let position = 50
                        let imgWidth = 595.28
                        let imgHeight = 592.28 / contentWidth * contentHeight

                        let pageData = canvas.toDataURL('image/jpeg', 1.0)

                        let PDF = new JsPDF('', 'pt', 'a4')

                        if (leftHeight < pageHeight) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        } else {
                            while (leftHeight > 0) {
                                PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                                leftHeight -= pageHeight
                                position -= 841.89
                                if (leftHeight > 0) {
                                    PDF.addPage()
                                }
                            }
                        }
//                        PDF.save(_this.pdfData.title + '.pdf')
                        PDF.save('Report.pdf')
                    }
                })
                html2Canvas()
            },
            div_print: function (event) {
                let div_print = document.querySelector('#pdfDom')
                let newstr=div_print.innerHTML
                let oldstr=document.body.innerHTML
                document.body.innerHTML=newstr
                window.print()
                window.location.reload()
                document.body.innerHTML=oldstr
                return false
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toReport(){
                this.$router.push( {path:'/mver'});
            }
        }
    };

</script>


<style>

  .header1 {
    width: 80%;
    margin-top:10px;
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
