import{B as c}from"./BasicTable-fe9d6b51.js";import"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{u}from"./useTable-08aefb36.js";import{getBasicColumns as d}from"./tableData-6af6e925.js";import{P as f}from"./index-ba6fd08d.js";import{d as _}from"./table-9286518d.js";import{d as g,a7 as r,Z as C,a8 as B,a9 as t,l as a,E as m}from"./vue-07f122e3.js";import{a as b}from"./index.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./antd-5ec2f20c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";import"./useContentViewHeight-cfa41a84.js";const h=g({components:{BasicTable:c,PageWrapper:f},setup(){const[o,{reload:e}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function i(){e()}function n(){e({page:1})}return{registerTable:o,handleReloadCurrent:i,handleReload:n}}});function T(o,e,i,n,k,R){const p=r("a-button"),s=r("BasicTable"),l=r("PageWrapper");return C(),B(l,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[a(s,{onRegister:o.registerTable},{toolbar:t(()=>[a(p,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[m(" 刷新当前页 ")]),_:1},8,["onClick"]),a(p,{type:"primary",onClick:o.handleReload},{default:t(()=>[m(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const Y=b(h,[["render",T]]);export{Y as default};