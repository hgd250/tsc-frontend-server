var d=(t,s,e)=>new Promise((p,F)=>{var m=u=>{try{o(e.next(u))}catch(r){F(r)}},c=u=>{try{o(e.throw(u))}catch(r){F(r)}},o=u=>u.done?p(u.value):Promise.resolve(u.value).then(m,c);o((e=e.apply(t,s)).next())});import{P as B}from"./index-ba6fd08d.js";import{m as f,a as C}from"./index.js";import{t as D}from"./account-728ff1b2.js";import{K as l}from"./antd-5ec2f20c.js";import{d as E,a7 as i,Z as A,a8 as k,a9 as a,l as n,E as _,$ as y}from"./vue-07f122e3.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const x=E({name:"TestSessionTimeout",components:{ACardGrid:l.Grid,ACard:l,PageWrapper:B},setup(){const t=f();function s(){return d(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return d(this,null,function*(){try{yield D()}catch(p){}})}return{test1:s,test2:e}}}),g=y("span",null,null,-1);function h(t,s,e,p,F,m){const c=i("a-button"),o=i("a-card-grid"),u=i("a-card"),r=i("PageWrapper");return A(),k(r,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a(()=>[n(u,{title:"请点击下面的按钮访问测试接口",extra:"所访问的接口会返回Token过期响应"},{default:a(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[n(c,{type:"primary",onClick:t.test1},{default:a(()=>[_("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[g,n(c,{class:"ml-4",type:"primary",onClick:t.test2},{default:a(()=>[_("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const v=C(x,[["render",h]]);export{v as default};