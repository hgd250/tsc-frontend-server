var g=(p,l,s)=>new Promise((c,i)=>{var d=a=>{try{n(s.next(a))}catch(r){i(r)}},m=a=>{try{n(s.throw(a))}catch(r){i(r)}},n=a=>a.done?c(a.value):Promise.resolve(a.value).then(d,m);n((s=s.apply(p,l)).next())});import{C as F}from"./index-3a95ad41.js";import{u as I,a as L,b as h,L as S,_ as w}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-2ad6cda0.js";import{b as z}from"./index.js";import{ac as _,w as E,B as b}from"./antd-15408678.js";import{d as R,f as k,r as V,c as N,u as e,Z as D,_ as M,l as o,a8 as t,E as v,a0 as x,aa as U}from"./vue-b9806415.js";const O={key:0},G=R({__name:"MobileForm",setup(p){const l=_.Item,{t:s}=z(),{handleBackLogin:c,getLoginState:i}=I(),{getFormRules:d}=L(),m=k(),n=k(!1),a=V({mobile:"",sms:""}),{validForm:r}=h(m),y=N(()=>e(i)===S.MOBILE);function C(){return g(this,null,function*(){yield r()})}return(B,u)=>y.value?(D(),M("div",O,[o(w,{class:"enter-x"}),o(e(_),{class:"p-4 enter-x",model:a,rules:e(d),ref_key:"formRef",ref:m},{default:t(()=>[o(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[o(e(E),{size:"large",value:a.mobile,"onUpdate:value":u[0]||(u[0]=f=>a.mobile=f),placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[o(e(F),{size:"large",class:"fix-auto-fill",value:a.sms,"onUpdate:value":u[1]||(u[1]=f=>a.sms=f),placeholder:e(s)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(l),{class:"enter-x"},{default:t(()=>[o(e(b),{type:"primary",size:"large",block:"",onClick:C,loading:n.value},{default:t(()=>[v(x(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),o(e(b),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[v(x(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])):U("",!0)}});export{G as _};
