var f=Object.defineProperty,u=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(s,o,e)=>o in s?f(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,c=(s,o)=>{for(var e in o||(o={}))C.call(o,e)&&i(s,e,o[e]);if(l)for(var e of l(o))_.call(o,e)&&i(s,e,o[e]);return s},d=(s,o)=>u(s,v(o));import J from"./PreviewCode-2fbe25b4.js";import{r as h,a as w}from"./index-3128146f.js";import{M}from"./antd-5ec2f20c.js";import{d as b,r as N,c as $,G as x,a7 as p,Z as y,a8 as O,a9 as P,l as j}from"./vue-07f122e3.js";import{a as k}from"./index.js";import"./index-2d93de14.js";import"./useWindowSizeFn-46595a7c.js";const B=b({name:"JsonModal",components:{PreviewCode:J,Modal:M},emits:["cancel"],setup(s,{emit:o}){const e=N({visible:!1,jsonData:{}}),a=t=>{w(t.schemas),e.jsonData=t,e.visible=!0},n=$(()=>JSON.stringify(h(e.jsonData),null,"	")),r=()=>{e.visible=!1,o("cancel")};return d(c({},x(e)),{editorJson:n,handleCancel:r,showModal:a})}});function D(s,o,e,a,n,r){const t=p("PreviewCode"),m=p("Modal");return y(),O(m,{title:"JSON数据",footer:null,visible:s.visible,onCancel:s.handleCancel,destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px"},{default:P(()=>[j(t,{editorJson:s.editorJson},null,8,["editorJson"])]),_:1},8,["visible","onCancel"])}const q=k(B,[["render",D]]);export{q as default};
