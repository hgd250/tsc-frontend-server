import{B as d}from"./BasicTable-215b707d.js";import{T as f}from"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import"./TableImg.vue_vue_type_style_index_0_lang-76cde985.js";import{u as B}from"./useTable-65fd89bc.js";import{P as C}from"./index-df1b87ef.js";import{getBasicColumns as F}from"./tableData-73260e1c.js";import{d as b}from"./table-9286518d.js";import{d as g,a6 as t,Z as p,a7 as s,a8 as n,l as E,$ as _,a0 as T,aa as w}from"./vue-b9806415.js";import{_ as A}from"./index.js";import"./BasicForm-d44ea6f4.js";import"./antd-15408678.js";import"./index-6f85bfe1.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-3a95ad41.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bbdf3bf4.js";import"./select-93eac05e.js";const h=g({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function a(r){}function i(r){}return{registerTable:o,handleDelete:a,handleOpen:i}}});function k(o,a,i,r,x,y){const l=t("TableAction"),c=t("BasicTable"),m=t("PageWrapper");return p(),s(m,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n(()=>[E(c,{onRegister:o.registerTable},{expandedRowRender:n(({record:e})=>[_("span",null,"No: "+T(e.no),1)]),bodyCell:n(({column:e,record:u})=>[e.key==="action"?(p(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const X=A(h,[["render",k]]);export{X as default};
