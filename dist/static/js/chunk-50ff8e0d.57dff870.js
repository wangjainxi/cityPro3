(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ff8e0d"],{"10f7":function(e,t,l){"use strict";var o=l("653f"),a=l.n(o);a.a},"653f":function(e,t,l){},e6e2:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"product-container"},[l("el-dialog",{attrs:{title:"新建产品","close-on-click-modal":!1,visible:e.dialogVisible,width:"40%","before-close":e.handleClose,"close-on-press-escape":!1,"modal-append-to-body":!0,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm pro-dialog",attrs:{model:e.ruleForm,"label-width":"auto"}},[l("el-form-item",{attrs:{required:!0,label:"产品名称",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"产品描述",prop:"name"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"固件",prop:"date1"}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n              只能上传.bin文件\n            ")])],1)],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确 定")])],1)]),e._v(" "),l("div",{staticClass:"product-main"},[l("div",{staticClass:"product-header flex-row-between"},[l("div",{staticClass:"header-left"},[l("el-input",{staticClass:"input-style",attrs:{placeholder:"请输入产品名称"}}),e._v(" "),l("el-input",{staticClass:"input-style",attrs:{placeholder:"请输入产品标签"}}),e._v(" "),l("el-button",{attrs:{icon:"el-icon-search",type:"primary"}},[e._v("搜索")])],1),e._v(" "),l("div",{staticClass:"header-right"},[l("el-button",{attrs:{icon:"el-icon-refresh",type:"primary"}},[e._v("刷新")]),e._v(" "),l("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.createPro}},[e._v("新建")])],1)]),e._v(" "),l("div",{staticClass:"product-table"},[[l("el-table",{staticStyle:{width:"100%"},attrs:{border:!0,data:e.tableData,"highlight-current-row":!0}},[l("el-table-column",{attrs:{prop:"id",label:"序号",align:"center",width:"70px"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"产品型号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"snRuleId",label:"SN生成规则",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"productKey",label:"产品秘钥",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"latestFirmware",label:"固件",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"createAt",label:"添加时间",align:"center",width:"240px"}}),e._v(" "),l("el-table-column",{attrs:{prop:"handle",label:"操作",align:"center",width:"280px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){return e.toDetail(t.$index,t.row)}}},[e._v("查看")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(l){return e.toMachine(t.$index,t.row)}}},[e._v("设备")]),e._v(" "),l("delete-com",{on:{confirmDelete:e.confirmDelete}})]}}])})],1)]],2)])],1)},a=[],i=l("db72"),n=l("2f62"),r=[{id:1,name:"Loragw-1301",hash:"xdfsdfsdf",createAt:"2019-08-11 12:01:00",deviceTotal:10},{id:2,name:"Loragw-1301",hash:"xdfsdfsdf",createAt:"2019-08-11 12:01:00",deviceTotal:10}],s=l("25f6"),c=l("b775");function d(e){return Object(c["a"])({url:"/api/products",method:"get",data:e})}var u={data:function(){return{tableData:r,dialogVisible:!1,ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},components:{deleteCom:s["a"]},computed:Object(i["a"])({},Object(n["b"])(["name"])),methods:{handleChange:function(e,t){this.fileList=t.slice(-3)},createPro:function(){this.dialogVisible=!0},toDetail:function(e,t){this.$router.push({name:"detail",params:{row:t}}),console.log("index",e),console.log("row",t)},toMachine:function(e,t){console.log("index",e),console.log("row",t)},confirmDelete:function(){console.log("1111")},onConfirm:function(){this.dialogVisible=!1},handleClose:function(e){},getProductList:function(){d().then(function(e){console.log(e)})}},mounted:function(){this.getProductList()}},p=u,m=(l("10f7"),l("2877")),f=Object(m["a"])(p,o,a,!1,null,"c00196da",null);t["default"]=f.exports}}]);