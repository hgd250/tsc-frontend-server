import{d as C,S as E,f as B,c as _,u as n,a7 as r,Z as D,a8 as f,a9 as l,E as t,a0 as A,l as p,$ as e}from"./vue-07f122e3.js";import{P as h}from"./index-ba6fd08d.js";import{w as k}from"./antd-5ec2f20c.js";import{a as v}from"./index.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const $=C({name:"TestMenu",components:{PageWrapper:h,Input:k},setup(){const{currentRoute:u,replace:o}=E(),a=B("");return{value:a,handleClickGo:()=>{const{name:s}=n(u);o({name:s,params:{id:n(a)}})},params:_(()=>n(u).params)}}}),b=e("br",null,null,-1),g=e("br",null,null,-1),P=e("ul",null,[e("li",null,"可刷新页面测试路由参数情况是否正常。"),e("li",null,"可于左侧菜单中展开子菜单，点击测试参数是否携带正常。")],-1);function y(u,o,a,c,s,G){const F=r("Input"),i=r("a-button"),m=r("PageWrapper");return D(),f(m,{title:"带参数菜单（路由）",content:"支持多级参数"},{default:l(()=>[t(" 当前参数："+A(u.params)+" ",1),b,t(" 输入参数切换路由： "),p(F,{value:u.value,"onUpdate:value":o[0]||(o[0]=d=>u.value=d),placeholder:"建议为url标准字符，输入后点击切换"},null,8,["value"]),p(i,{type:"primary",onClick:u.handleClickGo},{default:l(()=>[t("切换路由")]),_:1},8,["onClick"]),g,t(" 切换路由后 "),P]),_:1})}const S=v($,[["render",y]]);export{S as default};