var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var M=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))V.call(o,t)&&M(e,t,o[t]);if(c)for(var t of c(o))g.call(o,t)&&M(e,t,o[t]);return e},v=(e,o)=>w(e,A(o));var b=(e,o,t)=>new Promise((p,m)=>{var u=n=>{try{a(t.next(n))}catch(i){m(i)}},s=n=>{try{a(t.throw(n))}catch(i){m(i)}},a=n=>n.done?p(n.value):Promise.resolve(n.value).then(u,s);a((t=t.apply(e,o)).next())});import k from"./index-00887d67.js";import{a as D}from"./index-3128146f.js";import S from"./JsonModal-5b772a0a.js";import{M as U}from"./antd-5ec2f20c.js";import{d as $,f as y,r as B,G as E,a7 as f,Z as G,a8 as J,a9 as F,l as d}from"./vue-07f122e3.js";import{a as O}from"./index.js";import"./FormRender-f69ae4d7.js";import"./index-bb9c15bb.js";import"./formItemConfig-779ff00a.js";import"./componentMap-7c245921.js";import"./useFormItem-7245b14a.js";import"./RadioButtonGroup-7710ecaa.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./useFormDesignState-ba3aa2b7.js";import"./PreviewCode-2fbe25b4.js";import"./index-2d93de14.js";const N=$({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:U},setup(){const e=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),t=a=>{D(a.schemas),o.formConfig=a,o.visible=!0},p=()=>{o.visible=!1,o.formModel={}},m=()=>b(this,null,function*(){var n,i,r,l;const a=yield(i=(n=o.fApi).submit)==null?void 0:i.call(n);(l=(r=e.value)==null?void 0:r.showModal)==null||l.call(r,a)}),u=a=>{},s=()=>{o.formModel={}};return v(C({handleGetData:m,handleCancel:p},E(o)),{showModal:t,jsonModal:e,onSubmit:u,onCancel:s})}});function P(e,o,t,p,m,u){const s=f("a-input"),a=f("VFormCreate"),n=f("JsonModal"),i=f("Modal");return G(),J(i,{title:"预览(支持布局)",visible:e.visible,onOk:e.handleGetData,onCancel:e.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(a,{"form-config":e.formConfig,fApi:e.fApi,"onUpdate:fApi":o[0]||(o[0]=r=>e.fApi=r),formModel:e.formModel,"onUpdate:formModel":o[1]||(o[1]=r=>e.formModel=r),onSubmit:e.onSubmit},{slotName:F(({formModel:r,field:l})=>[d(s,{value:r[l],"onUpdate:value":_=>r[l]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(n,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}const so=O(N,[["render",P]]);export{so as default};
