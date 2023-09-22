import{U as _,m as C,b8 as a,a as f}from"./index.js";import{P as A}from"./index-ba6fd08d.js";import S from"./CurrentPermissionMode-f9195d0b.js";import{d as B,c as l,a7 as o,Z as D,a8 as R,a9 as n,l as t,$ as r,E as s,a0 as p}from"./vue-07f122e3.js";import{W as g,ab as y}from"./antd-5ec2f20c.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const P=B({components:{Space:g,Alert:y,CurrentPermissionMode:S,PageWrapper:A},setup(){const{changeRole:u}=_(),e=C();return{userStore:e,RoleEnum:a,isSuper:l(()=>e.getRoleList.includes(a.SUPER)),isTest:l(()=>e.getRoleList.includes(a.TEST)),changeRole:u}}});const T={class:"mt-4"};function v(u,e,$,k,U,b){const c=o("CurrentPermissionMode"),m=o("Alert"),i=o("a-button"),E=o("Space"),d=o("PageWrapper");return D(),R(d,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:n(()=>[t(c),r("p",null,[s(" 当前角色: "),r("a",null,p(u.userStore.getRoleList),1)]),t(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),r("div",T,[s(" 权限切换(请先切换权限模式为前端角色权限模式): "),t(E,null,{default:n(()=>[t(i,{onClick:e[0]||(e[0]=F=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(i,{onClick:e[1]||(e[1]=F=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}const Z=f(P,[["render",v],["__scopeId","data-v-cda7941c"]]);export{Z as default};
