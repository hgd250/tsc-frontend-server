import{I as k,_ as x}from"./index.js";import{B as y}from"./BasicForm-d44ea6f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import{searchList as F,actions as L,schemas as N}from"./data-a215bd35.js";import{P}from"./index-df1b87ef.js";import{d as T,a6 as o,Z as a,a7 as p,a8 as n,l as _,a1 as s,$ as r,_ as m,F as d,a9 as u,a0 as l,aa as V,E as f}from"./vue-b9806415.js";import{a8 as W,U as c}from"./antd-15408678.js";import"./index-6f85bfe1.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-3a95ad41.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const b=T({components:{Icon:k,Tag:W,BasicForm:y,PageWrapper:P,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:L,schemas:N}}});function w(e,A,D,E,M,z){const C=o("BasicForm"),$=o("Icon"),h=o("Tag"),v=o("a-list-item-meta"),B=o("a-list-item"),I=o("a-list"),g=o("PageWrapper");return a(),p(g,{class:s(e.prefixCls),title:"搜索列表"},{headerContent:n(()=>[_(C,{class:s(`${e.prefixCls}__header-form`),labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:n(()=>[r("div",{class:s(`${e.prefixCls}__container`)},[_(I,null,{default:n(()=>[(a(!0),m(d,null,u(e.list,i=>(a(),p(B,{key:i.id},{default:n(()=>[_(v,null,{description:n(()=>[r("div",{class:s(`${e.prefixCls}__content`)},l(i.content),3),r("div",{class:s(`${e.prefixCls}__action`)},[(a(!0),m(d,null,u(e.actions,t=>(a(),m("div",{key:t.icon,class:s(`${e.prefixCls}__action-item`)},[t.icon?(a(),p($,{key:0,class:s(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):V("",!0),f(" "+l(t.text),1)],2))),128)),r("span",{class:s(`${e.prefixCls}__time`)},l(i.time),3)],2)]),title:n(()=>[r("p",{class:s(`${e.prefixCls}__title`)},l(i.title),3),r("div",null,[(a(!0),m(d,null,u(i.description,t=>(a(),p(h,{key:t,class:"mb-2"},{default:n(()=>[f(l(t),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])}const te=x(b,[["render",w],["__scopeId","data-v-708dfd24"]]);export{te as default};