var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&i(a,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&i(a,t,e[t]);return a};import{dt as c}from"./useECharts-5e1b3ab1.js";import{b as f}from"./props-8b0ad601.js";import{d as h,f as d,o as y,Z as u,_,af as b}from"./vue-07f122e3.js";const k=h({__name:"VisitAnalysisBar",props:n({},f),setup(a){const e=d(null),{setOptions:t}=c(e);return y(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map((r,o)=>`${o+1}`)},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(r,o)=>(u(),_("div",{ref_key:"chartRef",ref:e,style:b({height:r.height,width:r.width})},null,4))}});export{k as _};
