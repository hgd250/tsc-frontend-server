import{I as $,a as w}from"./index.js";import{cardList as A}from"./data-d787e9e2.js";import{P}from"./index-ba6fd08d.js";import{d as k,a7 as a,Z as i,a8 as p,a9 as o,a1 as c,$ as s,l,_ as d,aa as y,ab as m,a0 as r,E as f,F as b,a2 as S,a3 as L}from"./vue-07f122e3.js";import{a9 as N,aa as _,R as h,Q as v}from"./antd-5ec2f20c.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const V=k({components:{Icon:$,Progress:N,PageWrapper:P,[_.name]:_,[_.Item.name]:_.Item,AListItemMeta:_.Item.Meta,[h.name]:h,[v.name]:v},setup(){return{prefixCls:"list-basic",list:A,pagination:{show:!0,pageSize:3}}}});const n=t=>(S("data-v-96c623b7"),t=t(),L(),t),W=n(()=>s("div",null,"我的待办",-1)),z=n(()=>s("p",null,"8个任务",-1)),M=n(()=>s("div",null,"本周任务平均处理时间",-1)),R=n(()=>s("p",null,"32分钟",-1)),D=n(()=>s("div",null,"本周完成任务数",-1)),O=n(()=>s("p",null,"24个任务",-1)),Q={key:0,class:"extra"},T={class:"description"},Z={class:"info"},j=n(()=>s("span",null,"Owner",-1)),q=n(()=>s("span",null,"开始时间",-1)),G={class:"progress"};function H(t,J,K,U,X,Y){const u=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return i(),p(E,{class:c(t.prefixCls),title:"标准列表"},{default:o(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:o(()=>[l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[W,z]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[M,R]),_:1},8,["class"]),l(u,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[D,O]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:o(()=>[(i(!0),d(b,null,y(t.list,e=>(i(),p(x,{key:e.id,class:"list"},{default:o(()=>[l(I,null,{avatar:o(()=>[e.icon?(i(),p(g,{key:0,class:"icon",icon:e.icon,color:e.color},null,8,["icon","color"])):m("",!0)]),title:o(()=>[s("span",null,r(e.title),1),e.extra?(i(),d("div",Q,r(e.extra),1)):m("",!0)]),description:o(()=>[s("div",T,r(e.description),1),s("div",Z,[s("div",null,[j,f(r(e.author),1)]),s("div",null,[q,f(r(e.datetime),1)])]),s("div",G,[l(F,{percent:e.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}const is=w(V,[["render",H],["__scopeId","data-v-96c623b7"]]);export{is as default};
