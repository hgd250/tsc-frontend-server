import{I as B}from"./index-9268090d.js";import{B as E}from"./BasicTable-fe9d6b51.js";import"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{P as S}from"./index-ba6fd08d.js";import{d as h,f as F,a7 as a,Z as c,a8 as f,a9 as m,l as d,E as I,_ as b,F as C,aa as D}from"./vue-07f122e3.js";import{a as g}from"./index.js";import"./index-867933e1.js";import"./antd-5ec2f20c.js";import"./useWindowSizeFn-46595a7c.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-cfa41a84.js";const k=h({components:{BasicTable:E,ImpExcel:B,PageWrapper:S},setup(){const t=F([]);function p(n){t.value=[];for(const i of n){const{header:u,results:l,meta:{sheetName:r}}=i,e=[];for(const o of u)e.push({title:o,dataIndex:o});t.value.push({title:r,dataSource:l,columns:e})}}return{loadDataSuccess:p,tableListRef:t}}});function P(t,p,n,i,u,l){const r=a("a-button"),e=a("ImpExcel"),o=a("BasicTable"),_=a("PageWrapper");return c(),f(_,{title:"excel数据导入示例"},{default:m(()=>[d(e,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:m(()=>[d(r,{class:"m-3"},{default:m(()=>[I(" 导入Excel ")]),_:1})]),_:1},8,["onSuccess"]),(c(!0),b(C,null,D(t.tableListRef,(s,x)=>(c(),f(o,{key:x,title:s.title,columns:s.columns,dataSource:s.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}const et=g(k,[["render",P]]);export{et as default};
