import{B as n}from"./BasicTable-fe9d6b51.js";import"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{u as c}from"./useTable-08aefb36.js";import{getBasicColumns as u,getTreeTableData as d}from"./tableData-6af6e925.js";import{d as _,a7 as s,Z as f,_ as b,l as o,a9 as t,E as l}from"./vue-07f122e3.js";import{a as T}from"./index.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./antd-5ec2f20c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const C=_({components:{BasicTable:n},setup(){const[e,{expandAll:r,collapseAll:i}]=c({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(a){return a.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:u(),dataSource:d(),rowKey:"id"});return{register:e,expandAll:r,collapseAll:i}}}),g={class:"p-4"};function k(e,r,i,a,B,x){const p=s("a-button"),m=s("BasicTable");return f(),b("div",g,[o(m,{onRegister:e.register},{toolbar:t(()=>[o(p,{type:"primary",onClick:e.expandAll},{default:t(()=>[l("展开全部")]),_:1},8,["onClick"]),o(p,{type:"primary",onClick:e.collapseAll},{default:t(()=>[l("折叠全部")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}const Q=T(C,[["render",k]]);export{Q as default};
