<!-- 登陆文件 -->
<template>
  <div class="steptwo_section">
    <Head2></Head2>
    <div class="header1">
      <div class="page-header1">
        <div class="header1-container">
          <div class="avatar">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509041832135&di=abc5c99b8048b0c600049e68cdb64602&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2FnMbQAfw2LAJG4ahCYE_XJA%3D%3D%2F3886606478520925399.jpg">
          </div>
          <div class="person-info">
            <div class="name">用户创建估算--功能分解</div>
            <div class="info">yourNAME</br></div>
          </div>
        </div>
      </div>
    </div>
    <div class="steptwo_content">
      <div id="directory" >
        <div class="tree_btn">
          <el-button size="small" id="btn1" type="primary " @click="expand_all()">Expand</el-button>
          <el-button size="small" id="btn2" @click="collapse_all()">Collapse</el-button>
        </div>
        <div id="div_tree" class="tree"></div>
      </div>
      <div class="content" :model="dynamicForm" :ref="dynamicForm">
        <el-form class="form-input" :inline="true" align="center">
          <el-form-item class="form-input-item1" label="内部文件">
            <el-input v-model="ilfStr"></el-input>
          </el-form-item>
          <el-form-item class="form-input-item2" label="外部文件">
            <el-input v-model="eifStr"></el-input>
          </el-form-item>
        </el-form>
        <div class="step-box"  >

          <el-button class="step-box-plus" @click.prevent="addStep()" type="primary "><i class="el-icon-plus"></i>
          </el-button>

          <div class="step-set-list">
            <el-collapse class="step-set" v-for="(step, indexout) in dynamicForm.steps" :key="step.key"
                         :prop="'steps.'+indexout+'.value'">


              <el-collapse-item >
                <template slot="title">
                  <div class="input-box">
                  <el-input placeholder="请输入内容" v-model="step.name" class="step-input">
                    <template slot="prepend">Step{{indexout}}:</template>
                  </el-input>
                  <el-button  @click.prevent="removeStep(step)"><i
                    class="el-icon-minus"></i>
                  </el-button>
                  </div>

                </template>


                <div class="out-in">
                <el-form ref="dynamicForm" style="order: 1;" class="demo-dynamic file-type"
                         :label-position="labelPosition">
                  <el-button class="step-box-plus-1"  size="small" @click.prevent="addIlf(indexout)" type="primary "><i
                    class="el-icon-plus "></i>
                  </el-button>

                  <el-form class="step-set-list-1" style="order: 1"  :inline="true" v-for="(ilf, indexmid) in step.ilfs"
                           :key="ilf.key"
                           :prop="'ilfs.' + indexmid + '.value'">
                    <el-form-item label="内部文件" >
                      <el-select size="mini"  v-model="ilf.name">
                        <el-option disabled value="">请选择</el-option>
                        <el-option v-for="ilfSet in ilfSets" :key="ilfSet.value" :label="ilfSet.value"
                                   :value="ilfSet.value"></el-option>

                      </el-select>
                    </el-form-item>

                    <el-form-item style="order: 2"  label="数据字段">
                      <el-button size="mini"  type="primary "
                                 @click.prevent="addDataField(indexout,indexmid)"><i
                        class="el-icon-plus"></i></el-button>
                    </el-form-item>


                    <div style="order: 3"  class="data-input"
                         v-for="(dataField, indexin) in ilf.dataFields"
                         :key="dataField.key"
                         :prop="'dataFields.' + indexin + '.value'">
                      <el-input size="mini" v-model="dataField.value"
                      ></el-input>
                      <el-button  style="margin: 3px" size="mini" @click="removeDataField(indexout,indexmid,dataField)">
                        <i
                          class="el-icon-minus"></i></el-button>
                    </div>

                    <el-button style="order:4;margin: 5px"  size="small" @click="removeIlf(indexout,ilf)"><i
                      class="el-icon-minus"></i>
                    </el-button>
                  </el-form>


                </el-form>


                  <el-form ref="dynamicForm" style="order: 2" class="demo-dynamic file-type"
                           :label-position="labelPosition">
                    <el-button class="step-box-plus-1"  size="small" @click.prevent="addEif(indexout)" type="primary "><i
                      class="el-icon-plus "></i>
                    </el-button>

                    <el-form class="step-set-list-1" style="order: 1"  :inline="true" v-for="(eif, indexmid) in step.eifs"
                             :key="eif.key"
                             :prop="'eifs.' + indexmid + '.value'">
                      <el-form-item label="外部文件" >
                        <el-select size="mini"  v-model="eif.name">
                          <el-option disabled value="">请选择</el-option>
                          <el-option v-for="eifSet in eifSets" :key="eifSet.value" :label="eifSet.value"
                                     :value="eifSet.value"></el-option>

                        </el-select>
                      </el-form-item>

                      <el-form-item style="order: 2"  label="数据字段">
                        <el-button size="mini"  type="primary "
                                   @click.prevent="addEIFDataField(indexout,indexmid)"><i
                          class="el-icon-plus"></i></el-button>
                      </el-form-item>


                      <div style="order: 3"  class="data-input"
                           v-for="(dataField, indexin) in eif.dataFields"
                           :key="dataField.key"
                           :prop="'dataFields.' + indexin + '.value'">
                        <el-input size="mini" v-model="dataField.value"
                        ></el-input>
                        <el-button  style="margin: 3px" size="mini" @click="removeEIFDataField(indexout,indexmid,dataField)">
                          <i
                            class="el-icon-minus"></i></el-button>
                      </div>

                      <el-button style="order:4;margin: 5px"  size="small" @click="removeEif(indexout,eif)"><i
                        class="el-icon-minus"></i>
                      </el-button>
                    </el-form>
                  </el-form>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-btn">
      <el-button   type="primary" v-on:click="toStepOne">返回</el-button>
      <el-button   type="primary" v-on:click="toNext">提交</el-button>
    </div>
  </div>

</template>

<script>

  import Head2 from "../../components/Head2.vue";
  import '../../../config/Aimara'
  //    import MessageBox from 'MessageBox'
  export default {
    name: "StepTwo1",
    components: {Head2},
    data: function () {
      return {

        labelPosition: 'right',
        tree: {},
        v_tree: {},
        node: {},
        node1: {},
        node2: {},
        node3: {},
        length: length,
        step_num: 1,

        ilfStr: '',
        eifStr: '',

        dynamicForm: {
          steps: [{
            name: '',
            ilfs: [{
              name: '',
              dataFields: [{
                value: ''
              }],
            }],
            eifs: [{
              name: '',
              dataFields: [{
                value: ''
              }],
            }]
          }]

        },

      }
    },

    mounted() {
      this.initTree()
    },

    computed: {
      // 计算属性的 getter
      ilfSets: function () {
        var set = this.ilfStr.split(' ')
        var jsonArray = []

        for (var i = 0; i < set.length; i++) {
          jsonArray.push({'value': set[i]});
          //     console.log(jsonArray);
        }
        return jsonArray;
      },

      eifSets: function () {
        var set = this.eifStr.split(' ')
        var jsonArray = []

        for (var i = 0; i < set.length; i++) {
          jsonArray.push({'value': set[i]});
//               console.log(jsonArray);
        }
        return jsonArray;
      }


    },


    methods: {
      toStepOne() {
        this.$confirm('返回前页将不会保存当前内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$router.push( {path:'/stepone'});
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
      toNext(){
        this.$confirm('是否提交当前信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$router.push( {path:'/stepthree'});
            this.$message({
              type: 'success',
              message: '已提交当前信息!'
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      toStepThree() {
//////////仅测试用//////
       //this.$router.push( {path:'/stepthree'});

//        var stepArray=[];
//        for(var i=0;i<this.steps.length;i++){
//          var temp=this.steps[i];
//          stepArray.push({
//            "stepName" : temp.name ,
//            "eifDataSets" : {
//              "eifFileName" : temp.eifs.name,
//              "eifDETSets" : temp.eifs.dataFields,
//            },
//            "ilfDataSets" : {
//              "ilfFileName" : temp.ilfs.name,
//              "ilfDETSets" : [{
//                "ilfDETs" : xxx
//              }]
//            }
//          })
//
//        }
//
        var msg = {
          "transactionName": 'test',
          "nameOfILF": this.ilfStr,
          "nameOfELF": this.eifStr,
          "steps": this.dynamicForm.steps,
        }
        this.$http.post('http://192.168.1.122:8011/estimation/addTransaction/' + "321", msg).then(res => {
          alert("success")
        }, res => {
          alert("fail")
        })


      },

      removeStep(item) {
        var index = this.dynamicForm.steps.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.steps.splice(index, 1)
        }
      },
      addStep() {
        this.dynamicForm.steps.push({
          ilfs: [{
            name: '',
            dataFields: [],
          }],
          eifs: [{
            name: '',
            dataFields: [],
          }],
          key: Date.now()
        });
      },

      addDataField(indexout, indexmid) {
        this.dynamicForm.steps[indexout].ilfs[indexmid].dataFields.push({
          value: '',
          key: Date.now()
        });
      },

      removeDataField(index_out, index_mid, item) {
        var index = this.dynamicForm.steps[index_out].ilfs[index_mid].dataFields.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.steps[index_out].ilfs[index_mid].dataFields.splice(index, 1)
        }
      },

      addEIFDataField(indexout, indexmid) {
        this.dynamicForm.steps[indexout].eifs[indexmid].dataFields.push({
          value: '',
          key: Date.now()
        });
      },

      removeEIFDataField(index_out, index_mid, item) {
        var index = this.dynamicForm.steps[index_out].eifs[index_mid].dataFields.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.steps[index_out].eifs[index_mid].dataFields.splice(index, 1)
        }
      },


      removeIlf(index_out, item) {
        var index = this.dynamicForm.steps[index_out].ilfs.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.steps[index_out].ilfs.splice(index, 1)
        }
      },

      addIlf(index_out) {
        this.dynamicForm.steps[index_out].ilfs.push({
          name: '',
          dataFields: [{
            value: ''
          }],
          key: Date.now()
        });
      },

      removeEif(index_out, item) {
        var index = this.dynamicForm.steps[index_out].eifs.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.steps[index_out].eifs.splice(index, 1)
        }
      },

      addEif(index_out) {
        this.dynamicForm.steps[index_out].eifs.push({
          name: '',
          dataFields: [{
            value: ''
          }],
          key: Date.now()
        });
      },


      push(owner, element) {

        owner.childNodes[++owner.top] = element;
      },

      //返回栈顶元素，同时top的位置减1
      pop(owner, vue) {
        return owner[--this.top];
      },


      //Create a HTML element specified by parameter 'p_type'
      createSimpleElement(p_type, p_id, p_class) {
        var element = document.createElement(p_type);
        if (p_id != undefined)
          element.id = p_id;
        if (p_class != undefined)
          element.className = p_class;
        return element;
      },
      ///// Creating the tree component
// p_div: ID of the div where the tree will be rendered;
// p_backColor: Background color of the region where the tree is being rendered;
// p_contextMenu: Object containing all the context menus. Set null for no context menu;
      createTre(vue, p_div, p_backColor, p_contextMenu) {

        var tree = {
          name: 'tree',
          div: p_div,
          ulElement: null,
          childNodes: [],
          backcolor: p_backColor,
          contextMenu: p_contextMenu,
          selectedNode: null,
          nodeCounter: 0,
          contextMenuDiv: null,
          rendered: false,
          top: -1,


          ///// Creating a new node
          // p_text: Text displayed on the node;
          // p_expanded: True or false, indicating wether the node starts expanded or not;
          // p_icon: Relative path to the icon displayed with the node. Set null if the node has no icon;
          // p_parentNode: Reference to the parent node. Set null to create the node on the root;
          // p_tag: Tag is used to store additional information on the node. All node attributes are visible when programming events and context menu actions;
          // p_contextmenu: Name of the context menu, which is one of the attributes of the p_contextMenu object created with the tree;
          createNode(vue, p_text, p_expanded, p_icon, p_parentNode, p_tag, p_contextmenu) {
            vue.v_tree = this;

            vue.node = {
              id: 'node_' + this.nodeCounter,
              text: p_text,
              icon: p_icon,
              parent: p_parentNode,
              expanded: p_expanded,
              childNodes: [],
              tag: p_tag,
              contextMenu: p_contextmenu,
              elementLi: null,
              top: -1,

              ///// Removing the node and all its children
              removeNode(vue) {
                vue.v_tree.removeNode(this);
              },
              ///// Expanding or collapsing the node, depending on the expanded value
              toggleNode(p_event) {
                vue.v_tree.toggleNode(this);
              },
              ///// Expanding the node
              expandNode(p_event) {
                vue.v_tree.expandNode(this);
              },
              ///// Expanding the node and its children recursively
              expandSubtree() {
                vue.v_tree.expandSubtree(this);
              },
              ///// Changing the node text
              // p_text: New text;
              setText(p_text) {
                vue.v_tree.setText(this, p_text);
              },
              ///// Collapsing the node
              collapseNode() {
                vue.v_tree.collapseNode(this);
              },
              ///// Collapsing the node and its children recursively
              collapseSubtree() {
                vue.v_tree.collapseSubtree(this);
              },
              ///// Deleting all child nodes
              removeChildNodes() {
                vue.v_tree.removeChildNodes(this);
              },
              ///// Creating a new child node;
              // p_text: Text displayed;
              // p_expanded: True or false, indicating wether the node starts expanded or not;
              // p_icon: Icon;
              // p_tag: Tag;
              // p_contextmenu: Context Menu;
              createChildNode(vue, p_text, p_expanded, p_icon, p_tag, p_contextmenu) {
                return vue.v_tree.createNode(vue, p_text, p_expanded, p_icon, this, p_tag, p_contextmenu);
              }
            }

            vue.tree.nodeCounter++;

            if (this.rendered) {
              if (p_parentNode == undefined) {
                this.drawNode(vue, this.ulElement, vue.node);
                this.adjustLines(this.ulElement, false);
              }
              else {
                var v_ul = p_parentNode.elementLi.getElementsByTagName("ul")[0];
                if (p_parentNode.childNodes.length == 0) {
                  if (p_parentNode.expanded) {
                    p_parentNode.elementLi.getElementsByTagName("ul")[0].style.display = 'block';
                    var v_img = p_parentNode.elementLi.getElementsByTagName("i")[0];
                    v_img.style.visibility = "visible";
                    v_img.className = 'menu_img el-icon-caret-bottom';
                    v_img.id = 'toggle_off';
                  }
                  else {
                    p_parentNode.elementLi.getElementsByTagName("ul")[0].style.display = 'none';
                    var v_img = p_parentNode.elementLi.getElementsByTagName("i")[0];
                    v_img.style.visibility = "visible";
                    v_img.className = 'menu_img el-icon-caret-right';
                    v_img.id = 'toggle_on';
                  }
                }
                this.drawNode(vue, v_ul, vue.node);
                this.adjustLines(v_ul, false);
              }
            }

            if (p_parentNode == undefined) {
              vue.push(this, vue.node);
              vue.node.parent = this;
            }
            else
              vue.push(p_parentNode, vue.node);

            return vue.node;
          },


          //Create img element
          createImgElement(p_id, p_class) {
            var element = document.createElement('i');
            if (p_id != undefined)
              element.id = p_id;
            if (p_class != undefined)
              element.className = p_class;
            // if (p_src!=undefined)
            //     element.src = p_src;
            return element;
          },


          createSimpleElement(p_type, p_id, p_class) {
            var element = document.createElement(p_type);
            if (p_id != undefined)
              element.id = p_id;
            if (p_class != undefined)
              element.className = p_class;
            return element;
          },

          ///// Render the tree;
          drawTree(vue) {

            this.rendered = true;
            var div_tree = document.getElementById(this.div);
            div_tree.innerHTML = '';

            var ulElement = this.createSimpleElement('ul', this.name, 'tree');

            this.ulElement = ulElement;

            for (var i = 0; i < this.childNodes.length; i++) {
              this.drawNode(vue, ulElement, this.childNodes[i]);
            }

            div_tree.appendChild(ulElement);

            this.adjustLines(document.getElementById(this.name), true);

          },
          ///// Drawing the node. This function is used when drawing the Tree and should not be called directly;
          // p_ulElement: Reference to the UL tag element where the node should be created;
          // p_node: Reference to the node object;
          drawNode(vue, p_ulElement, p_node) {

            vue.v_tree = this;

            var v_icon = null;

            if (p_node.icon != null)
              v_icon = vue.createImgElement(null, 'icon_tree ' + p_node.icon.className);

            var v_li = document.createElement('li');
            p_node.elementLi = v_li;

            var v_span = vue.createSimpleElement('span', null, 'node');

            var v_exp_col = null;

            if (p_node.childNodes.length == 0) {
              v_exp_col = vue.createImgElement('toggle_off', 'exp_col ' + 'el-icon-caret-bottom');
              v_exp_col.style.visibility = "hidden";
            }
            else {
              if (p_node.expanded) {
                v_exp_col = vue.createImgElement('toggle_off', 'exp_col ' + 'el-icon-caret-bottom');
              }
              else {
                v_exp_col = vue.createImgElement('toggle_on', 'exp_col ' + 'el-icon-caret-right');
              }
            }

            v_span.ondblclick = function () {
              vue.v_tree.doubleClickNode(p_node);
            };

            v_exp_col.onclick = function () {
              vue.v_tree.toggleNode(p_node);
            };

            v_span.onclick = function () {
              vue.v_tree.selectNode(p_node);
            };

            v_span.oncontextmenu = function (e) {
              vue.v_tree.selectNode(p_node);
              vue.v_tree.nodeContextMenu(vue, e, p_node);
            };

            if (v_icon != undefined)
              v_span.appendChild(v_icon);
/////////////////////////////////////////
            var v_a = vue.createSimpleElement('a', null, null);
            v_a.innerHTML = p_node.text;
            v_span.appendChild(v_a);
            v_li.appendChild(v_exp_col);
            v_li.appendChild(v_span);

            p_ulElement.appendChild(v_li);

            var v_ul = vue.createSimpleElement('ul', 'ul_' + p_node.id, null);
            v_li.appendChild(v_ul);

            if (p_node.childNodes.length > 0) {

              if (!p_node.expanded)
                v_ul.style.display = 'none';

              for (var i = 0; i < p_node.childNodes.length; i++) {
                this.drawNode(vue, v_ul, p_node.childNodes[i]);
              }
            }
          },
          ///// Changing node text
          // p_node: Reference to the node that will have its text updated;
          // p_text: New text;
          setText(p_node, p_text) {
            p_node.elementLi.getElementsByTagName('span')[0].lastChild.innerHTML = p_text;
            p_node.text = p_text;
          },
          ///// Expanding all tree nodes
          expandTree() {
            for (var i = 0; i < this.childNodes.length; i++) {
              if (this.childNodes[i].childNodes.length > 0) {
                this.expandSubtree(this.childNodes[i]);
              }
            }
          },
          ///// Expanding all nodes inside the subtree that have parameter 'p_node' as root
          // p_node: Subtree root;
          expandSubtree(p_node) {
            this.expandNode(p_node);
            for (var i = 0; i < p_node.childNodes.length; i++) {
              if (p_node.childNodes[i].childNodes.length > 0) {
                this.expandSubtree(p_node.childNodes[i]);
              }
            }
          },
          ///// Collapsing all tree nodes
          collapseTree() {
            for (var i = 0; i < this.childNodes.length; i++) {
              if (this.childNodes[i].childNodes.length > 0) {
                this.collapseSubtree(this.childNodes[i]);
              }
            }
          },
          ///// Collapsing all nodes inside the subtree that have parameter 'p_node' as root
          // p_node: Subtree root;
          collapseSubtree(p_node) {
            this.collapseNode(p_node);
            for (var i = 0; i < p_node.childNodes.length; i++) {
              if (p_node.childNodes[i].childNodes.length > 0) {
                this.collapseSubtree(p_node.childNodes[i]);
              }
            }
          },
          ///// Expanding node
          // p_node: Reference to the node;
          expandNode(p_node) {
            if (p_node.childNodes.length > 0 && p_node.expanded == false) {
              if (this.nodeBeforeOpenEvent != undefined)
                this.nodeBeforeOpenEvent(p_node);

              var img = p_node.elementLi.getElementsByTagName("i")[0];

              p_node.expanded = true;

              img.id = "toggle_off";
              img.className = 'el-icon-caret-bottom';
              var elem_ul = img.parentElement.getElementsByTagName("ul")[0];
              elem_ul.style.display = 'block';

              if (this.nodeAfterOpenEvent != undefined)
                this.nodeAfterOpenEvent(p_node);
            }
          },
          ///// Collapsing node
          // p_node: Reference to the node;
          collapseNode(p_node) {
            if (p_node.childNodes.length > 0 && p_node.expanded == true) {
              var img = p_node.elementLi.getElementsByTagName("i")[0];

              p_node.expanded = false;
              if (this.nodeBeforeCloseEvent != undefined)
                this.nodeBeforeCloseEvent(p_node);

              img.id = "toggle_on";
              img.className = 'el-icon-caret-right';
              var elem_ul = img.parentElement.getElementsByTagName("ul")[0];
              elem_ul.style.display = 'none';

            }
          },
          ///// Toggling node
          // p_node: Reference to the node;
          toggleNode(p_node) {
            if (p_node.childNodes.length > 0) {
              if (p_node.expanded)
                p_node.collapseNode();
              else
                p_node.expandNode();
            }
          },
          ///// Double clicking node
          // p_node: Reference to the node;
          doubleClickNode(p_node) {
            this.toggleNode(p_node);
          },
          ///// Selecting node
          // p_node: Reference to the node;
          selectNode(p_node) {
            var span = p_node.elementLi.getElementsByTagName("span")[0];
            span.className = 'node_selected';
            if (this.selectedNode != null && this.selectedNode != p_node)
              this.selectedNode.elementLi.getElementsByTagName("span")[0].className = 'node';
            this.selectedNode = p_node;
          },
          ///// Deleting node
          // p_node: Reference to the node;
          removeNode(p_node) {
            var index = p_node.parent.childNodes.indexOf(p_node);

            if (p_node.elementLi.className == "last" && index != 0) {
              p_node.parent.childNodes[index - 1].elementLi.className += "last";
              p_node.parent.childNodes[index - 1].elementLi.style.backgroundColor = this.backcolor;
            }

            p_node.elementLi.parentNode.removeChild(p_node.elementLi);
            p_node.parent.childNodes.splice(index, 1);

            if (p_node.parent.childNodes.length == 0) {
              var v_img = p_node.parent.elementLi.getElementsByTagName("i")[0];
              v_img.style.visibility = "hidden";
            }

          },
          ///// Deleting all node children
          // p_node: Reference to the node;
          removeChildNodes(p_node) {

            if (p_node.childNodes.length > 0) {
              var v_ul = p_node.elementLi.getElementsByTagName("ul")[0];

              var v_img = p_node.elementLi.getElementsByTagName("i")[0];
              v_img.style.visibility = "hidden";

              p_node.childNodes = [];
              v_ul.innerHTML = "";
            }
          },
          ///// Rendering context menu when mouse right button is pressed over a node. This function should no be called directly
          // p_event: Event triggered when right clicking;
          // p_node: Reference to the node;
          nodeContextMenu(vue, p_event, p_node) {
            if (p_event.button == 2) {
              p_event.preventDefault();
              p_event.stopPropagation();
              if (p_node.contextMenu != undefined) {

                vue.v_tree = this;

                var v_menu = this.contextMenu[p_node.contextMenu];

                var v_div;
                if (this.contextMenuDiv == null) {
                  v_div = vue.createSimpleElement('ul', 'ul_cm', 'menu');
                  document.body.appendChild(v_div);
                }
                else
                  v_div = this.contextMenuDiv;

                v_div.innerHTML = '';

                var v_left = p_event.pageX - 5;
                var v_right = p_event.pageY - 5;

                v_div.style.display = 'block';
                v_div.style.position = 'absolute';
                v_div.style.left = v_left + 'px';
                v_div.style.top = v_right + 'px';

                for (var i = 0; i < v_menu.elements.length; i++) (function (i) {

                  var v_li = vue.createSimpleElement('li', null, null);

                  var v_span = vue.createSimpleElement('span', null, null);
                  v_span.onclick = function () {
                    v_menu.elements[i].action(vue, p_node)
                  };

                  var v_a = vue.createSimpleElement('a', null, null);
                  var v_ul = vue.createSimpleElement('ul', null, 'sub-menu');

                  v_a.appendChild(document.createTextNode(v_menu.elements[i].text));

                  v_li.appendChild(v_span);

                  if (v_menu.elements[i].icon != undefined) {
                    var v_img = vue.createImgElement('null', v_menu.elements[i].icon.className + ' el-icon-menu');
                    var v_img = vue.createImgElement('null', 'menu_img el-icon-menu');

                    v_li.appendChild(v_img);
                  }

                  v_li.appendChild(v_a);
                  v_li.appendChild(v_ul);
                  v_div.appendChild(v_li);

                  if (v_menu.elements[i].submenu != undefined) {
                    var v_span_more = vue.createSimpleElement('div', null, null);
//                    v_span_more.appendChild(createImgElement(null, 'menu_img el-icon-caret-right'));
                    v_li.appendChild(v_span_more);
                    vue.v_tree.contextMenuLi(vue, v_menu.elements[i].submenu, v_ul, p_node);
                  }

                })(i);

                this.contextMenuDiv = v_div;

              }
            }
          },
          ///// Recursive function called when rendering context menu submenus. This function should no be called directly
          // p_submenu: Reference to the submenu object;
          // p_ul: Reference to the UL tag;
          // p_node: Reference to the node;
          contextMenuLi(vue, p_submenu, p_ul, p_node) {

            vue.v_tree = this;

            for (var i = 0; i < p_submenu.elements.length; i++) (function (i) {

              var v_li = vue.createSimpleElement('li', null, null);

              var v_span = vue.createSimpleElement('span', null, null);
              v_span.onclick = function () {
                p_submenu.elements[i].action(vue, p_node)
              };

              var v_a = vue.createSimpleElement('a', null, null);
              var v_ul = vue.createSimpleElement('ul', null, 'sub-menu');

              v_a.appendChild(document.createTextNode(p_submenu.elements[i].text));

              v_li.appendChild(v_span);

              if (p_submenu.elements[i].icon != undefined) {
                var v_img = vue.createImgElement('null', p_submenu.elements[i].icon);
                v_li.appendChild(v_img);
              }

              v_li.appendChild(v_a);
              v_li.appendChild(v_ul);
              p_ul.appendChild(v_li);

              if (p_submenu.elements[i].p_submenu != undefined) {
                var v_span_more = vue.createSimpleElement('div', null, null);
                v_span_more.appendChild(vue.createImgElement(null, 'menu_img el-icon-caret-right'));
                v_li.appendChild(v_span_more);
                vue.v_tree.contextMenuLi(vue, p_submenu.elements[i].p_submenu, v_ul, p_node);
              }

            })(i);
          },
          ///// Adjusting tree dotted lines. This function should not be called directly
          // p_node: Reference to the node;
          adjustLines(p_ul, p_recursive) {
            var tree = p_ul;

            var lists = [];

            if (tree.childNodes.length > 0) {
              lists = [tree];

              if (p_recursive) {
                for (var i = 0; i < tree.getElementsByTagName("ul").length; i++) {
                  var check_ul = tree.getElementsByTagName("ul")[i];
                  if (check_ul.childNodes.length != 0)
                    lists[lists.length] = check_ul;
                }
              }

            }

            for (var i = 0; i < lists.length; i++) {
              var item = lists[i].lastChild;

              while (!item.tagName || item.tagName.toLowerCase() != "li") {
                item = item.previousSibling;
              }

              item.className += "last";
              item.style.backgroundColor = this.backcolor;

              item = item.previousSibling;

              if (item != null)
                if (item.tagName.toLowerCase() == "li") {
                  item.className = "";
                  item.style.backgroundColor = 'transparent';
                }
            }
          }
        }

        window.onclick = function () {
          if (tree.contextMenuDiv != null)
            tree.contextMenuDiv.style.display = 'none';
        }

        return tree;
      },

      // Helper Functions


      //Create img element
      createImgElement(p_id, p_class) {
        var element = document.createElement('i');
        if (p_id != undefined)
          element.id = p_id;
        if (p_class != undefined)
          element.className = p_class;
        // if (p_src!=undefined)
        //     element.src = p_src;
        return element;
      },


      initTree() {

        //存放剪切node
        var cutNode = [];

        //Initializing Tree

        //Tree Context Menu Structure
        var contex_menu = {
          'context1': {
            elements: [
              {
                text: 'Tree Actions',
                icon: 'el-icon-close',
                action: function (node) {

                },
                submenu: {
                  elements: [
                    {
                      text: 'Toggle Node',
                      icon: 'menu_img el-icon-d-caret',
                      action: function (node) {
                        node.toggleNode();
                      }
                    },
                    {
                      text: 'Expand Node',
                      icon: 'menu_img el-icon-arrow-down',
                      action: function (node) {
                        node.expandNode();
                      }
                    },
                    {
                      text: 'Collapse Node',
                      icon: 'menu_img el-icon-arrow-right',
                      action: function (node) {
                        node.collapseNode();
                      }
                    },
                    {
                      text: 'Expand Subtree',
                      icon: 'menu_img el-icon-arrow-down',
                      action: function (node) {
                        node.expandSubtree();
                      }
                    },
                    {
                      text: 'Collapse Subtree',
                      icon: 'menu_img el-icon-arrow-right',
                      action: function (node) {
                        node.collapseSubtree();
                      }
                    },

                  ]
                }
              },
              {
                text: 'Node Actions',
                icon: 'el-icon-close',
                action: function (node) {

                },
                submenu: {
                  elements: [
                    {
                      text: 'Create Child Node',
                      icon: 'menu_img el-icon-plus',
                      action: function (vue, node) {
                        vue.$prompt('Enter the node name', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({value}) => {
                          node.createChildNode(vue, value, false, ' el-icon-plus', null, 'context1');
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '取消新建节点'
                          });
                        });

                      }
                    },
                    {
                      text: 'Delete Child Nodes',
                      icon: 'menu_img el-icon-close',
                      action: function (node) {
                        node.removeChildNodes();
                      }
                    },
                    {
                      text: 'Delete Node',
                      icon: 'menu_img el-icon-close',
                      action: function (vue, node) {
                        node.removeNode(vue);
                      }
                    },
                    {
                      text: 'Create Sibling Nodes',
                      icon: 'menu_img el-icon-plus',
                      action: function (vue, node) {
                        vue.$prompt('Enter the node name', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({value}) => {
                          if (node.parent.name == "tree")
                            node.parent.createNode(this, value, false, ' el-icon-plus', null, null, 'context1');
                          else {
                            node.parent.createChildNode(this, value, false, ' el-icon-plus', null, 'context1');
                          }
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '取消新建节点'
                          });
                        });


                      }
                    },
                    {
                      text: 'cut Node',
                      icon: 'menu_img el-icon-minus',
                      action: function (vue, node) {
                        cutNode = node;
                        node.removeNode(vue);
                      }
                    },
                    {
                      text: 'Paste Node',
                      icon: 'menu_img el-icon-close',
                      action: function (vue, node) {

                        node.createChildNode(vue, cutNode.text, true, cutNode.icon, node, null, 'context1');

                        //递归
                        pasteChildNode(vue, node.childNodes[node.childNodes.length - 1], cutNode);

                        function pasteChildNode(vue, parentNode, cutNode) {
                          if (cutNode.childNodes.length != 0) {
                            for (var i = 0; i < cutNode.childNodes.length; i++) {
                              parentNode.createChildNode(vue, cutNode.childNodes[i].text, true, cutNode.childNodes[i].icon, parentNode, null, 'context1');
                              pasteChildNode(vue, parentNode.childNodes[i], cutNode.childNodes[i]);
                            }
                          }
                        }


                      }

                    },
                    {
                      text: 'Rename Node',
                      icon: 'menu_img el-icon-edit',
                      action: function (vue, node) {
                        vue.$prompt('Enter the node name', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({value}) => {
                          node.setText(value);
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '取消新建节点'
                          });
                        });

                      }
                    },
                  ]
                }
              }
            ]
          }
        };

        //Creating the tree
        this.tree = this.createTre(this, 'div_tree', '', contex_menu);


        //Loop to create test nodes
        for (var i = 0; i < 9; i++) {
          this.node1 = this.tree.createNode(this, 'Level 0 - Node ' + i, false, ' el-icon-close', null, null, 'context1');

          for (var j = 0; j < 3; j++) {
            this.node2 = this.node1.createChildNode(this, 'Level 1 - Node ' + j, false, ' el-icon-close', null, 'context1');
            for (var k = 1; k < 5; k++) {
              this.node3 = this.node2.createChildNode(this, 'Level 2 - Node ' + k, false, ' el-icon-close', null, 'context1');

            }
          }
        }


//Rendering the tree
        this.tree.drawTree(this);

//Adding node after tree is already rendered
        this.tree.createNode(this, 'Real Time', false, 'el-icon-close', null, null, 'context1');


      },


      expand_all() {
        this.tree.expandTree();
      },


      collapse_all() {
        this.tree.collapseTree();
      },


      //使用数组dataStore保存站内元素，构造函数将其初始化为一个空数组。
      //变量top定义栈顶的位置，构造时初始化为0，表示栈的起始位置为0


      //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
      peek(vue) {
        return vue.dataStore[vue.top - 1];
      },

      //将top的值设置0，即清空一个栈
      clear(vue) {
        vue.top = 0;
      },


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
    background: rgba(53,94,122, 0.8);
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
  .steptwo_content {
    width: 80%;
    /*text-align: center;*/
    margin-top: 50px;
    /*width: 30%;*/
    margin-left: 10%;
    /*margin-right: auto;*/
    /*max-width: 280px;;*/
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }

  .steptwo_content > .el-input {
    margin: 5px;
  }

  .steptwo_content > .el-button {
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

  /*aimara.css*/

  ul.tree, ul.tree ul {
    list-style-type: none;
    /*background: url(vline.png) repeat-y;*/
    margin: 0;
    padding: 0;
    padding-left: 7px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: default;
  }

  li.last {
    /*background: url(lastnode.png);*/
    background-repeat: no-repeat;
  }

  ul.tree ul {
    padding-left: 7px;
  }

  ul.tree li {
    margin: 0;
    padding: 0 12px;
    line-height: 22px;
    /*background: url(node.png) no-repeat;*/
  }

  ul.tree li.last {
    /*background: #fff url(lastnode.png) no-repeat;*/
  }

  img.exp_col {
    position: absolute;
    margin-top: 4px;
    margin-left: -20px;
    vertical-align: sub;
  }

  img.exp_col_empty {
    position: absolute;
    margin-top: 4px;
    margin-left: -20px;
    vertical-align: sub;
    width: 16px;
  }

  img.icon_tree {
    vertical-align: middle;
    padding-left: 3px;
    margin-top: -3px;
  }

  a.node {
    padding: 2px;
  }

  span.node a {
    padding-left: 3px;
  }

  span.node {
    margin-left: -1px;
    padding-right: 3px;

    padding-top: 4px;
    padding-bottom: 4px;
  }

  span.node:hover {
    margin-left: -1px;
    padding-right: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: #efefef;
    border-radius: 2px;
  }

  span.node_selected {
    margin-left: -2px;
    padding-right: 3px;

    padding-top: 4px;
    padding-bottom: 4px;
    background-color: #dedede;
    border-radius: 2px;
  }

  span.node_selected a {
    padding-left: 3px;
  }

  .menu, .sub-menu {
    margin: 0;
    padding: 0;
    font: 12px Verdana, sans-serif;
  }

  .menu,
  .sub-menu {
    list-style: none;
    background: #000;
  }

  .sub-menu {
    background: #F1F1F1;
  }

  .menu a {
    text-decoration: none;
    display: inline-block;
    padding: 8px;
  }

  .menu span {
    position: absolute;
    /*background-color: #aeaeae;*/
    width: 100%;
    height: 100%;
  }

  .menu div {
    position: absolute;
    right: 4px;
    top: 0px;
    padding: 8px;
  }

  .menu .menu_img {
    vertical-align: middle;
    margin-left: 10px;
  }

  .menu img {
    text-decoration: none;
    display: inline-block;
    vertical-align: sub;
    padding-left: 5px;
  }

  .menu li {
    position: relative;
    background: #efefef;
  }

  .menu li:hover {
    background: #bfbfbf;
    cursor: pointer;
  }

  .sub-menu li:hover {
    background: #bfbfbf;
  }

  .menu li:hover > .sub-menu {
    display: block;
  }

  .menu {
    width: 175px;
    position: absolute;
    background: #F1F1F1;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    cursor: default;
    box-shadow: 4px 4px 5px #BDBDBD;
  }

  .sub-menu {
    display: none;
    position: absolute;
    min-width: 175px;
    box-shadow: 2px 2px 3px #BDBDBD;
  }

  .menu .sub-menu {
    top: 0;
    left: 100%;

  }

  .menu a {
    color: #3f3f3f;
  }

  .undefined {
    left: 10px;
  }

  /*example.css*/

  body {
    font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans;

  }

  #div_tree {
    margin-top: 20px;
    font: 12px Verdana, sans-serif;
    display: inline-block;
    width: 280px;

    /*background-color: #8DD7B5*/
  }

  .el-row {
    margin-bottom: 20px;
    width: 250px;

  }

  .grid-content {
    /*border-radius: 4px;*/
    /*min-height: 26px;*/
  }

  .row-bg {
    /*padding: 5px 0;*/
  }

  #directory {
    /*width: 200px;*/
    /*height: 300px;*/
    order: 1;
    flex-grow: 3;
    width: 5%;
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;

  }

  .content {
    order: 2;
    flex-grow: 5;
    width: 70%;

    /*margin: 10px;*/
    /*display: block;*/
    /*max-width: 650px;*/

    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }

  .my-drop-menu {
    margin-top: 20px;
    box-shadow: none;
    padding: 10px;
    min-width: 600px;

  }

  .tree_btn {
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }

  .tree a {
    color: #3f3f3f;
  }

  .form-input {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
  }

  .el-collapse-item__header {
    height: 48px;
  }

  .form-input-item1 {
    order: 1;
  }

  .step-box {
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: flex-start;
    margin: auto;
  }

  .step-box-plus {

    order: 1;
    margin-top: 10px;
    margin-right: 5px;
  }

  .step-set {

    order: 2;
    margin: 5px;

  }

  .step-set-list {
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-between;

  }

  .form-input-item2 {
    order: 2;
  }

  .bottom-btn {
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .bottom-btn1 {
    margin: 5px;
    order: 1;
  }

  .bottom-btn2 {
    margin: 5px;
    order: 2;
  }

  . file-type{
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: flex-start;

  }

  .step-box-plus-1 {

    order: 1;
    /*margin-top: 5px;*/
    /*margin-right: 2px;*/
  }

  .step-set-list-1{
    order: 2;
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    /*align-content: flex-start;*/
    /*justify-content: space-between;*/
  }
  .el-form-item{
    margin-bottom: 5px;
  }

  .demo-dynamic{
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    max-width: 580px;
    /*justify-content: space-between;*/
  }

  .input-box{
    padding: 5px;
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap:nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    min-width: 571px;
  }

  .step-input{
   width: 520px;
    margin-right: 5px;
  }
  .data-input{
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: row;
    flex-wrap:nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
  .out-in{
    display: -webkit-flex;
    display: flex;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    flex-wrap:wrap;
    /*align-items: center;*/
    /*align-content: center;*/
    /*justify-content: space-between;*/
  }
</style>

