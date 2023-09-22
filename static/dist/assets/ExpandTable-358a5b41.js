import{B as d}from"./BasicTable-fe9d6b51.js";import{T as f}from"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{u as B}from"./useTable-08aefb36.js";import{P as C}from"./index-ba6fd08d.js";import{getBasicColumns as F}from"./tableData-6af6e925.js";import{d as b}from"./table-9286518d.js";import{d as g,a7 as t,Z as u,a8 as s,a9 as n,l as E,$ as T,a0 as _,ab as w}from"./vue-07f122e3.js";import{a as A}from"./index.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./antd-5ec2f20c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-cfa41a84.js";import"./select-93eac05e.js";const h=g({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function i(r){}function a(r){}return{registerTable:o,handleDelete:i,handleOpen:a}}});function k(o,i,a,r,x,y){const l=t("TableAction"),m=t("BasicTable"),c=t("PageWrapper");return u(),s(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n(()=>[E(m,{onRegister:o.registerTable},{expandedRowRender:n(({record:e})=>[T("span",null,"No: "+_(e.no),1)]),bodyCell:n(({column:e,record:p})=>[e.key==="action"?(u(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const io=A(h,[["render",k]]);export{io as default};
