import{S as f,a as E}from"./index.js";import{P as A}from"./index-ba6fd08d.js";import{d as C,f as v,u as F,a7 as c,Z as m,a8 as D,a9 as s,$ as a,l as r,E as u,_ as $,F as k,aa as B,a0 as g}from"./vue-07f122e3.js";import"./antd-5ec2f20c.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const y=C({components:{ScrollContainer:f,PageWrapper:A},setup(){const e=v(null),o=()=>{const l=F(e);if(!l)throw new Error("scroll is Null");return l};function p(l){o().scrollTo(l)}function i(){o().scrollBottom()}return{scrollTo:p,scrollRef:e,scrollBottom:i}}});const S={class:"my-4"},T={class:"scroll-wrap"},b={class:"p-3"};function w(e,o,p,i,l,x){const n=c("a-button"),_=c("ScrollContainer"),d=c("PageWrapper");return m(),D(d,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:s(()=>[a("div",S,[r(n,{onClick:o[0]||(o[0]=t=>e.scrollTo(100)),class:"mr-2"},{default:s(()=>[u(" 滚动到100px位置 ")]),_:1}),r(n,{onClick:o[1]||(o[1]=t=>e.scrollTo(800)),class:"mr-2"},{default:s(()=>[u(" 滚动到800px位置 ")]),_:1}),r(n,{onClick:o[2]||(o[2]=t=>e.scrollTo(0)),class:"mr-2"},{default:s(()=>[u(" 滚动到顶部 ")]),_:1}),r(n,{onClick:o[3]||(o[3]=t=>e.scrollBottom()),class:"mr-2"},{default:s(()=>[u(" 滚动到底部 ")]),_:1})]),a("div",T,[r(_,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",b,[(m(),$(k,null,B(100,t=>a("li",{key:t,class:"p-2",style:{border:"1px solid #eee"}},g(t),1)),64))])]),_:1},512)])]),_:1})}const Z=E(y,[["render",w],["__scopeId","data-v-63ee5099"]]);export{Z as default};