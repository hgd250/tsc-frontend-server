var c=(e,r,t)=>new Promise((n,o)=>{var i=a=>{try{s(t.next(a))}catch(p){o(p)}},f=a=>{try{s(t.throw(a))}catch(p){o(p)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,f);s((t=t.apply(e,r)).next())});import{u as d}from"./useScript-ac87c53b.js";import{d as m,f as u,o as l,n as w,u as h,Z as _,_ as M,ae as y}from"./vue-b9806415.js";import{_ as g}from"./index.js";import"./antd-15408678.js";const A="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",b=m({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=u(null),{toPromise:r}=d({src:A});function t(){return c(this,null,function*(){yield r(),yield w();const n=h(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return l(()=>{t()}),{wrapRef:e}}});function k(e,r,t,n,o,i){return _(),M("div",{ref:"wrapRef",style:y({height:e.height,width:e.width})},null,4)}const z=g(b,[["render",k]]);export{z as default};