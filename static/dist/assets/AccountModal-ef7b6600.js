var v=Object.defineProperty,B=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(t,o,e)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,u=(t,o)=>{for(var e in o||(o={}))S.call(o,e)&&h(t,e,o[e]);if(g)for(var e of g(o))A.call(o,e)&&h(t,e,o[e]);return t},b=(t,o)=>B(t,k(o));var f=(t,o,e)=>new Promise((n,s)=>{var d=a=>{try{r(e.next(a))}catch(c){s(c)}},i=a=>{try{r(e.throw(a))}catch(c){s(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(d,i);r((e=e.apply(t,o)).next())});import{B as y,a as x}from"./index-867933e1.js";import{B as q}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as C}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{i as T,b as $,a as L}from"./system-82075152.js";import{d as O,f as w,c as R,u as p,a7 as I,Z as N,a8 as U,a9 as V,l as j,ac as D}from"./vue-07f122e3.js";import{a as z}from"./index.js";const ae=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],ne=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],E=[{field:"account",label:"用户名",component:"Input",helpMessage:["本字段演示异步验证","不能输入带有admin的用户名"],rules:[{required:!0,message:"请输入用户名"},{validator(t,o){return new Promise((e,n)=>{T(o).then(()=>e()).catch(s=>{n(s.message||"验证失败")})})}}]},{field:"pwd",label:"密码",component:"InputPassword",required:!0,ifShow:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:$,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],G=O({name:"AccountModal",components:{BasicModal:y,BasicForm:q},emits:["success","register"],setup(t,{emit:o}){const e=w(!0),n=w(""),[s,{setFieldsValue:d,updateSchema:i,resetFields:r,validate:a}]=C({labelWidth:100,baseColProps:{span:24},schemas:E,showActionButtonGroup:!1,actionColOptions:{span:23}}),[c,{setModalProps:m,closeModal:_}]=x(l=>f(this,null,function*(){r(),m({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),p(e)&&(n.value=l.record.id,d(u({},l.record)));const P=yield L();i([{field:"pwd",show:!p(e)},{field:"dept",componentProps:{treeData:P}}])})),M=R(()=>p(e)?"编辑账号":"新增账号");function F(){return f(this,null,function*(){try{const l=yield a();m({confirmLoading:!0}),_(),o("success",{isUpdate:p(e),values:b(u({},l),{id:n.value})})}finally{m({confirmLoading:!1})}})}return{registerModal:c,registerForm:s,getTitle:M,handleSubmit:F}}});function W(t,o,e,n,s,d){const i=I("BasicForm"),r=I("BasicModal");return N(),U(r,D(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:V(()=>[j(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Z=z(G,[["render",W]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as A,se as a,ae as c,ne as s};