import{dt as r}from"./useECharts-5e1b3ab1.js";import{K as s}from"./antd-5ec2f20c.js";import{d as n,f as i,w as d,a7 as l,Z as m,a8 as f,a9 as p,$ as c,af as u}from"./vue-07f122e3.js";import{a as h}from"./index.js";const g=n({components:{Card:s},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=i(null),{setOptions:t}=r(a);return d(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function w(e,a,t,y,S,C){const o=l("Card");return m(),f(o,{title:"销售统计",loading:e.loading},{default:p(()=>[c("div",{ref:"chartRef",style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}const v=h(g,[["render",w]]);export{v as default};
