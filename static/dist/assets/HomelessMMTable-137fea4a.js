var c=(t,n,a)=>new Promise((u,d)=>{var l=e=>{try{o(a.next(e))}catch(i){d(i)}},r=e=>{try{o(a.throw(e))}catch(i){d(i)}},o=e=>e.done?u(e.value):Promise.resolve(e.value).then(l,r);o((a=a.apply(t,n)).next())});import{B as h}from"./BasicTable-215b707d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import"./TableImg.vue_vue_type_style_index_0_lang-76cde985.js";import{u as b}from"./useTable-65fd89bc.js";import{a as T,u as g,_ as I}from"./index.js";import{d as w,a6 as p,Z as x,_ as C,l as f,a8 as E,E as k}from"./vue-b9806415.js";import"./BasicForm-d44ea6f4.js";import"./antd-15408678.js";import"./index-6f85bfe1.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-3a95ad41.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";import"./sortable.esm-4ae27e0b.js";const _=[{title:"Homeless Id",dataIndex:"HOMELESS_ID",edit:!0,editComponentProps:{prefix:""},width:200},{title:"Name",dataIndex:"NAME",edit:!0,width:200},{title:"Phone",dataIndex:"PHONE",edit:!0,editRule:!0,width:200},{title:"Status",dataIndex:"STATUS",edit:!0,editRule:!0,width:200},{title:"Requirement",dataIndex:"REQUEST",edit:!0,editRule:!0,width:200},{title:"JOIN DATE",dataIndex:"JOIN_DATE",edit:!0,editRule:!0,width:200},{title:"Birthday",dataIndex:"BIRTHDAY",edit:!0,editRule:!0,width:200}],v=w({components:{BasicTable:h},setup(){const[t,n]=b({title:"Navigator Management",columns:_,showIndexColumn:!1,bordered:!0}),{createMessage:a}=g();function u({record:e,index:i,key:m,value:s}){return!1}function d({value:e,key:i,id:m}){return a.loading({content:`saving ${i}`,key:"_save_fake_data",duration:0}),new Promise(s=>{setTimeout(()=>{e===""?(a.error({content:"save fail：cannot save empty!",key:"_save_fake_data",duration:2}),s(!1)):(a.success({content:`${m} ${i} save success!`,key:"_save_fake_data",duration:2}),s(!0))},2e3)})}function l(K){return c(this,arguments,function*({record:e,index:i,key:m,value:s}){return yield d({id:e.id,key:m,value:s})})}function r(){}function o(){return c(this,null,function*(){yield T.get("http://54.211.182.203:8080/listAllHomeless").then(e=>{n.setLoading(!0),n.setColumns(_),n.setTableData(e.data),setTimeout(()=>{n.setLoading(!1)},200)})})}return{registerTable:t,handleEditEnd:u,handleEditCancel:r,beforeEditSubmit:l,handleButton:o}}}),S={class:"p-4"};function y(t,n,a,u,d,l){const r=p("a-button"),o=p("BasicTable");return x(),C("div",S,[f(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},{toolbar:E(()=>[f(r,{type:"primary",onClick:t.handleButton},{default:E(()=>[k(" Query ")]),_:1},8,["onClick"])]),_:1},8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}const z=I(v,[["render",y]]);export{z as default};