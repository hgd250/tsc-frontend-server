import{B as c}from"./BasicTable-215b707d.js";import{T as m}from"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import"./TableImg.vue_vue_type_style_index_0_lang-76cde985.js";import{u as p}from"./useTable-65fd89bc.js";import{d as u}from"./table-9286518d.js";import{d as f,a6 as a,Z as r,_ as b,l as _,a8 as h,a7 as T,aa as w}from"./vue-b9806415.js";import{_ as x}from"./index.js";import"./BasicForm-d44ea6f4.js";import"./antd-15408678.js";import"./index-6f85bfe1.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-3a95ad41.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";import"./sortable.esm-4ae27e0b.js";const C=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],A=f({components:{BasicTable:c,TableAction:m},setup(){const[e]=p({title:"TableAction组件及固定列示例",api:u,columns:C,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function t(i){}function o(i){}return{registerTable:e,handleDelete:t,handleOpen:o}}}),I={class:"p-4"};function B(e,t,o,i,F,k){const l=a("TableAction"),d=a("BasicTable");return r(),b("div",I,[_(d,{onRegister:e.registerTable},{bodyCell:h(({column:s,record:n})=>[s.key==="action"?(r(),T(l,{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,n)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,n)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}const K=x(A,[["render",B]]);export{K as default};
