import{I as L,_ as k}from"./index.js";import{applicationList as x}from"./data-199c263c.js";import{U as _,N as y,V as d,W as m}from"./antd-15408678.js";import{d as B,a6 as e,Z as n,a7 as c,a8 as t,l as i,_ as F,F as N,a9 as V,a1 as s,$ as l,aa as f,E as r,a0 as p}from"./vue-b9806415.js";const g=B({components:{List:_,ListItem:_.Item,Card:y,Icon:L,[d.name]:d,[m.name]:m},setup(){return{prefixCls:"account-center-application",list:x}}});function A(o,E,h,D,b,z){const u=e("Icon"),C=e("Card"),$=e("ListItem"),v=e("a-col"),w=e("a-row"),I=e("List");return n(),c(I,{class:s(o.prefixCls)},{default:t(()=>[i(w,{gutter:16},{default:t(()=>[(n(!0),F(N,null,V(o.list,a=>(n(),c(v,{key:a.title,span:6},{default:t(()=>[i($,null,{default:t(()=>[i(C,{hoverable:!0,class:s(`${o.prefixCls}__card`)},{default:t(()=>[l("div",{class:s(`${o.prefixCls}__card-title`)},[a.icon?(n(),c(u,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):f("",!0),r(" "+p(a.title),1)],2),l("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 活跃用户："),l("span",null,p(a.active),1),r(" 万 ")],2),l("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 新增用户："),l("span",null,p(a.new),1)],2),a.download?(n(),c(u,{key:0,class:s(`${o.prefixCls}__card-download`),icon:a.download},null,8,["class","icon"])):f("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const W=k(g,[["render",A]]);export{W as default};
