import{B as c,_ as d}from"./BasicTable-fe9d6b51.js";import"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{u as _}from"./useTable-08aefb36.js";import{getCustomHeaderColumns as u}from"./tableData-6af6e925.js";import{d as f}from"./table-9286518d.js";import{a0 as B,a as H}from"./index.js";import{d as C,a7 as e,Z as o,_ as s,l as a,a9 as g,E as i,F as k,a8 as F}from"./vue-07f122e3.js";import{aH as h}from"./antd-5ec2f20c.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const T=C({components:{BasicTable:c,FormOutlined:h,BasicHelp:B,HeaderCell:d},setup(){const[t]=_({title:"定高/头部自定义",api:f,columns:u(),canResize:!1,scroll:{y:100}});return{registerTable:t}}}),b={class:"p-4"},x={key:0};function y(t,$,O,R,v,D){const m=e("BasicHelp"),p=e("FormOutlined"),n=e("HeaderCell"),l=e("BasicTable");return o(),s("div",b,[a(l,{onRegister:t.registerTable},{headerCell:g(({column:r})=>[r.key==="name"?(o(),s("span",x,[i(" 姓名 "),a(m,{class:"ml-2",text:"headerHelpMessage方式2"})])):r.key==="address"?(o(),s(k,{key:1},[i(" 地址 "),a(p,{class:"ml-2"})],64)):(o(),F(n,{key:2,column:r},null,8,["column"]))]),_:1},8,["onRegister"])])}const ae=H(T,[["render",y]]);export{ae as default};