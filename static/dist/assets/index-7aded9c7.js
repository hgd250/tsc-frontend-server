import{E as m}from"./EditTableHeaderIcon-11f75150.js";import{a as u,aV as p}from"./index.js";import{d as v,f as _,a7 as o,Z as n,a8 as a,a9 as t,_ as f,F as x,aa as C,ad as g,$ as y,a0 as r,E as S,l as h}from"./vue-07f122e3.js";import"./antd-5ec2f20c.js";const k=v({components:{SvgIcon:p,EditTableHeaderIcon:m},setup(){return{timeAxisList:_([{text:"Start",time:"2021-10-1",lineStyle:"solid",dot:"cancel-forbidden",lineColor:"#118e20",dotColor:"#118e20"},{text:"Check",time:"2021-10-2",dotColor:"var(--devui-success)",lineStyle:"dashed",lineColor:"var(--devui-success)",dot:"classroom-approve"},{text:"Debug",time:"2021-10-3",dotColor:"var(--devui-info)",lineStyle:"dotted",lineColor:"var(--devui-info)",dot:"add-bug"},{text:"Build",time:"2021-10-4",dotColor:"var(--devui-warning)",lineStyle:"dotted",lineColor:"var(--devui-warning)",dot:"build-with-tool"},{text:"Display",time:"2021-10-5",dotColor:"var(--devui-danger)",dot:"go-chart"}])}}});function b(i,B,$,w,E,L){const l=o("d-icon"),d=o("d-timeline-item"),s=o("d-timeline");return n(),a(s,{direction:"horizontal",center:""},{default:t(()=>[(n(!0),f(x,null,C(i.timeAxisList,(e,c)=>(n(),a(d,{key:c,"dot-color":e.dotColor,"line-style":e.lineStyle,"line-color":e.lineColor},g({time:t(()=>[y("div",null,r(e.time),1)]),default:t(()=>[S(" "+r(e.text),1)]),_:2},[e.dot?{name:"dot",fn:t(()=>[h(l,{name:"https://devui.design/components/assets/logo.svg",size:"16px"})]),key:"0"}:void 0]),1032,["dot-color","line-style","line-color"]))),128))]),_:1})}const z=u(k,[["render",b]]);export{z as default};
