import{h as r,a as o}from"./index.js";import{b as p}from"./index-66123094.js";import{d as m,a7 as i,Z as u,_ as l,$ as c,a0 as _,l as d,ac as f,a1 as b}from"./vue-07f122e3.js";import{ap as g}from"./antd-5ec2f20c.js";import"./index-ef38ae66.js";import"./index-71e35f0e.js";import"./index-6b628d43.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./lock-04e1cdfc.js";const C=m({name:"InputNumberItem",components:{InputNumber:g},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=r("setting-input-number-item");function n(s){e.event&&p(e.event,s)}return{prefixCls:t,handleChange:n}}});function I(e,t,n,s,N,h){const a=i("InputNumber");return u(),l("div",{class:b(e.prefixCls)},[c("span",null,_(e.title),1),d(a,f(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}const E=o(C,[["render",I],["__scopeId","data-v-7ccf252c"]]);export{E as default};