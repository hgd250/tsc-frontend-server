var l=(o,u,s)=>new Promise((p,t)=>{var d=e=>{try{a(s.next(e))}catch(r){t(r)}},n=e=>{try{a(s.throw(e))}catch(r){t(r)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(d,n);a((s=s.apply(o,u)).next())});import{U as C,m as k,aO as B,b9 as F,b8 as b,a as A}from"./index.js";import{P}from"./index-ba6fd08d.js";import D from"./CurrentPermissionMode-f9195d0b.js";import{d as g,c as M,a7 as i,Z as v,a8 as S,a9 as m,l as c,$,E as _}from"./vue-07f122e3.js";import{W as T,ab as w}from"./antd-5ec2f20c.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const y=g({components:{Space:T,Alert:w,CurrentPermissionMode:D,PageWrapper:P},setup(){const{refreshMenu:o}=C(),u=k(),s=B(),p=M(()=>s.getProjectConfig.permissionMode===F.BACK);function t(d){return l(this,null,function*(){const n="fakeToken"+d;u.setToken(n),u.getUserInfoAction(),o()})}return{RoleEnum:b,refreshMenu:o,switchToken:t,isBackPermissionMode:p}}});const h={class:"mt-4"};function x(o,u,s,p,t,d){const n=i("CurrentPermissionMode"),a=i("Alert"),e=i("a-button"),r=i("Space"),f=i("PageWrapper");return v(),S(f,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:m(()=>[c(n),c(a,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),$("div",h,[_(" 权限切换(请先切换权限模式为后台权限模式): "),c(r,null,{default:m(()=>[c(e,{onClick:u[0]||(u[0]=E=>o.switchToken(1)),disabled:!o.isBackPermissionMode},{default:m(()=>[_(" 获取用户id为1的菜单 ")]),_:1},8,["disabled"]),c(e,{onClick:u[1]||(u[1]=E=>o.switchToken(2)),disabled:!o.isBackPermissionMode},{default:m(()=>[_(" 获取用户id为2的菜单 ")]),_:1},8,["disabled"])]),_:1})])]),_:1})}const Z=A(y,[["render",x],["__scopeId","data-v-e2f0b5bb"]]);export{Z as default};
