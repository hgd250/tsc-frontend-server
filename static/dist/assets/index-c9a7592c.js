import{_ as o}from"./index-f9289b30.js";import{t as i}from"./data-1ad4e56f.js";import{P as K}from"./index-ba6fd08d.js";import{H as C}from"./index.js";import{R,Q as s,K as m,A as E,d as y,aN as A}from"./antd-5ec2f20c.js";import{d as $,f as u,a7 as b,Z as B,a8 as w,a9 as t,l as a,u as e,E as f,x as L}from"./vue-07f122e3.js";import"./useContextMenu-2f05b2c8.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const G=$({__name:"index",setup(P){const p=u(null),_=u(null),v=u(null),d=u([]),l=u(!1);function k(n,c){}function x(){l.value=!0,setTimeout(()=>{d.value=y(i),l.value=!1,L(()=>{var n;(n=e(_))==null||n.expandAll(!0)})},2e3)}function D(){l.value=!0,setTimeout(()=>{d.value=y(i),l.value=!1},2e3)}const h=u([{title:"parent ",key:"0-0"}]);function T(n){return new Promise(c=>{if(C(n.children)&&n.children.length>0){c();return}setTimeout(()=>{const r=e(p);if(r){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];r.updateNodeByKey(n.eventKey,{children:g}),r.setExpandedKeys(A([n.eventKey,...r.getExpandedKeys()]))}c()},300)})}return(n,c)=>{const r=b("a-button");return B(),w(e(K),{title:"Tree基础示例"},{default:t(()=>[a(e(R),{gutter:[16,16]},{default:t(()=>[a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"基础示例，默认展开第一层",treeData:e(i),defaultExpandLevel:"1"},{title:t(()=>[f(" 123123 ")]),_:1},8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"可勾选，默认全部展开",treeData:e(i),checkable:!0,defaultExpandAll:"",onCheck:k},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"指定默认展开/勾选示例",treeData:e(i),checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(o),{title:"懒加载异步树",ref_key:"asyncTreeRef",ref:p,treeData:h.value,"load-data":T},null,8,["treeData"])]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"异步数据，默认展开"},{extra:t(()=>[a(r,{onClick:x,loading:l.value},{default:t(()=>[f("加载数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(E),{spinning:l.value},{default:t(()=>[a(e(o),{ref_key:"asyncExpandTreeRef",ref:_,treeData:d.value},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),a(e(s),{span:8},{default:t(()=>[a(e(m),{title:"BasicTree内置加载"},{extra:t(()=>[a(r,{onClick:D,loading:l.value},{default:t(()=>[f("请求数据")]),_:1},8,["loading"])]),default:t(()=>[a(e(o),{ref_key:"loadTreeRef",ref:v,treeData:d.value,loading:l.value},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{G as default};
