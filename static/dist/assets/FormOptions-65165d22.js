var G=Object.defineProperty,P=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var k=(e,n,t)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))B.call(n,t)&&k(e,t,n[t]);if(I)for(var t of I(n))w.call(n,t)&&k(e,t,n[t]);return e},C=(e,n)=>P(e,U(n));import{u as D}from"./useFormDesignState-ba3aa2b7.js";import{c as $}from"./index-3128146f.js";import{c as N,I as V,a as A}from"./index.js";import{w as E}from"./antd-5ec2f20c.js";import{d as M,r as S,G as T,a7 as b,Z as l,_ as u,F as y,aa as F,$ as c,l as i,E as h}from"./vue-07f122e3.js";const{createMessage:p}=N(),j=Object.assign({success:e=>{p.success(e)},error:e=>{p.error(e)},warning:e=>{p.warning(e)},info:e=>{p.info(e)}}),L=j,R=M({name:"FormOptions",components:{Input:E,Icon:V},setup(){var r;const e=S({}),{formConfig:n}=D(),t=((r=n.value.currentItem)==null?void 0:r.component)==="TreeSelect"?"treeData":"options",m=()=>{var s,a,_,g;(a=(s=n.value.currentItem)==null?void 0:s.componentProps)!=null&&a[t]||(n.value.currentItem.componentProps[t]=[]);const o=((g=(_=n.value.currentItem)==null?void 0:_.componentProps)==null?void 0:g[t].length)+1;n.value.currentItem.componentProps[t].push({label:`选项${o}`,value:""+o})},v=o=>{var s,a;$((a=(s=n.value.currentItem)==null?void 0:s.componentProps)==null?void 0:a[t],o)},f=()=>{var o,s;(s=(o=n.value.currentItem)==null?void 0:o.columns)==null||s.push({span:12,children:[]})},d=o=>{if(o===0)return L.warning("请至少保留一个栅格");$(n.value.currentItem.columns,o)};return C(O({},T(e)),{formConfig:n,addOptions:m,deleteOptions:v,key:t,deleteGridOptions:d,addGridOptions:f})}});const Z={key:0},q={class:"options-box"},z=["onClick"],H={key:1},J={class:"options-box"},K=["onClick"];function Q(e,n,t,m,v,f){const d=b("Input"),r=b("Icon");return l(),u("div",null,[["Grid"].includes(e.formConfig.currentItem.component)?(l(),u("div",Z,[(l(!0),u(y,null,F(e.formConfig.currentItem.columns,(o,s)=>(l(),u("div",{key:s},[c("div",q,[i(d,{value:o.span,"onUpdate:value":a=>o.span=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteGridOptions(s)},[i(r,{icon:"ant-design:delete-outlined"})],8,z)])]))),128)),c("a",{onClick:n[0]||(n[0]=(...o)=>e.addGridOptions&&e.addGridOptions(...o))},[i(r,{icon:"ant-design:file-add-outlined"}),h(" 添加栅格 ")])])):(l(),u("div",H,[(l(!0),u(y,null,F(e.formConfig.currentItem.componentProps[e.key],(o,s)=>(l(),u("div",{key:s},[c("div",J,[i(d,{value:o.label,"onUpdate:value":a=>o.label=a},null,8,["value","onUpdate:value"]),i(d,{value:o.value,"onUpdate:value":a=>o.value=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteOptions(s)},[i(r,{icon:"ant-design:delete-outlined"})],8,K)])]))),128)),c("a",{onClick:n[1]||(n[1]=(...o)=>e.addOptions&&e.addOptions(...o))},[i(r,{icon:"ant-design:file-add-outlined"}),h(" 添加选项 ")])]))])}const oe=A(R,[["render",Q],["__scopeId","data-v-a999f6b7"]]);export{oe as default};
