var J=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(e,o,t)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o)=>{for(var t in o||(o={}))k.call(o,t)&&f(e,t,o[t]);if(u)for(var t of u(o))w.call(o,t)&&f(e,t,o[t]);return e},m=(e,o)=>x(e,g(o));import{C as $,M}from"./index-2d93de14.js";import{a$ as B,c as D,a as F}from"./index.js";import{d as N,r as R,G as A,u as O,a7 as C,Z as P,_ as S,$ as v,l as d,a9 as b,E as y}from"./vue-07f122e3.js";import"./antd-5ec2f20c.js";import"./useWindowSizeFn-46595a7c.js";const V=N({name:"PreviewCode",components:{CodeEditor:$},props:{fileFormat:{type:String,default:"json"},editorJson:{type:String,default:""}},setup(e){const o=R({visible:!1}),t=(s,E=`file.${e.fileFormat}`)=>{let p="data:text/csv;charset=utf-8,";p+=s;const h=encodeURI(p),r=document.createElement("a");r.setAttribute("href",h),r.setAttribute("download",E),r.click()},c=()=>{t(e.editorJson)},{clipboardRef:i,copiedRef:l}=B(),{createMessage:a}=D(),n=()=>{const s=e.editorJson;if(!s){a.warning("代码为空！");return}i.value=s,O(l)&&a.warning("复制成功！")};return m(_({},A(o)),{exportData:t,handleCopyJson:n,handleExportJson:c,MODE:M})}});const j={class:"v-json-box"},I={class:"copy-btn-box"};function T(e,o,t,c,i,l){const a=C("CodeEditor"),n=C("a-button");return P(),S("div",null,[v("div",j,[d(a,{value:e.editorJson,ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])]),v("div",I,[d(n,{onClick:e.handleCopyJson,type:"primary",class:"copy-btn","data-clipboard-action":"copy","data-clipboard-text":e.editorJson},{default:b(()=>[y(" 复制数据 ")]),_:1},8,["onClick","data-clipboard-text"]),d(n,{onClick:e.handleExportJson,type:"primary"},{default:b(()=>[y("导出代码")]),_:1},8,["onClick"])])])}const K=F(V,[["render",T],["__scopeId","data-v-143586b7"]]);export{K as default};