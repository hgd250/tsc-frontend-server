import{I as b,_ as S}from"./index.js";import{cardList as V}from"./data-f5cbf77a.js";import{P as B}from"./index-df1b87ef.js";import{u as L}from"./index-20aa52e3.js";import N from"./Drawer4-b499c48d.js";import{R,U as l,V as g,W as h,ab as T}from"./antd-15408678.js";import{d as W,a6 as a,Z as c,a7 as d,a8 as t,$ as o,a1 as i,l as n,_ as v,F as A,a9 as z,aa as C,a0 as p,E as m,a2 as E,a3 as F}from"./vue-b9806415.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";import"./BasicForm-d44ea6f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import"./index-3a95ad41.js";import"./index-6f85bfe1.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";import"./useForm-4dc53c5d.js";const M=W({components:{Icon:b,Progress:R,PageWrapper:B,[l.name]:l,[l.Item.name]:l.Item,AListItemMeta:l.Item.Meta,[g.name]:g,[h.name]:h,Alert:T,Drawer4:N},setup(){const[e,{openDrawer:u}]=L();function f(){u(!0,{data:"content",info:"Info"})}return{prefixCls:"list-basic",list:V,pagination:{show:!0,pageSize:3},register4:e,send:f}}});const r=e=>(E("data-v-42eac61d"),e=e(),F(),e),O=r(()=>o("div",null,"Pending",-1)),U=r(()=>o("p",null,"8",-1)),Z=r(()=>o("div",null,"Average Time",-1)),j=r(()=>o("p",null,"32 Days",-1)),q=r(()=>o("div",null,"Completed",-1)),G=r(()=>o("p",null,"24",-1)),H={key:0,class:"extra"},J={class:"description"},K={class:"info"},Q=r(()=>o("span",null,"Owner",-1)),X=r(()=>o("span",null,"start date",-1));function Y(e,u,f,ee,oe,te){const _=a("a-col"),w=a("a-row"),I=a("Icon"),y=a("a-button"),$=a("a-list-item-meta"),k=a("a-list-item"),D=a("a-list"),x=a("Drawer4"),P=a("PageWrapper");return c(),d(P,{class:i(e.prefixCls)},{default:t(()=>[o("div",{class:i(`${e.prefixCls}__top`)},[n(w,{gutter:12},{default:t(()=>[n(_,{span:8,class:i(`${e.prefixCls}__top-col`)},{default:t(()=>[O,U]),_:1},8,["class"]),n(_,{span:8,class:i(`${e.prefixCls}__top-col`)},{default:t(()=>[Z,j]),_:1},8,["class"]),n(_,{span:8,class:i(`${e.prefixCls}__top-col`)},{default:t(()=>[q,G]),_:1},8,["class"])]),_:1})],2),o("div",{class:i(`${e.prefixCls}__content`)},[n(D,{pagination:e.pagination},{default:t(()=>[(c(!0),v(A,null,z(e.list,s=>(c(),d(k,{key:s.id,class:"list"},{default:t(()=>[n($,null,{avatar:t(()=>[s.icon?(c(),d(I,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):C("",!0)]),title:t(()=>[o("span",null,p(s.title),1),s.extra?(c(),v("div",H,[n(y,{type:"primary",class:"my-4",onClick:e.send},{default:t(()=>[m(p(s.extra),1)]),_:2},1032,["onClick"])])):C("",!0)]),description:t(()=>[o("div",J,p(s.description),1),o("div",K,[o("div",null,[Q,m(p(s.author),1)]),o("div",null,[X,m(p(s.datetime),1)])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2),n(x,{onRegister:e.register4},null,8,["onRegister"])]),_:1},8,["class"])}const ye=S(M,[["render",Y],["__scopeId","data-v-42eac61d"]]);export{ye as default};
