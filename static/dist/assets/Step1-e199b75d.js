var f=(t,_,e)=>new Promise((m,n)=>{var E=u=>{try{p(e.next(u))}catch(c){n(c)}},l=u=>{try{p(e.throw(u))}catch(c){n(c)}},p=u=>u.done?m(u.value):Promise.resolve(u.value).then(E,l);p((e=e.apply(t,_)).next())});import{B as b}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as x}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{step1Schemas as g}from"./data-6b084658.js";import{U as B,w as F,a0 as h}from"./antd-5ec2f20c.js";import{d as A,a7 as a,Z as w,_ as I,$ as s,l as o,a9 as i,E as D,a2 as U,a3 as $}from"./vue-07f122e3.js";import{a as O}from"./index.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useFormItem-7245b14a.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";const N=A({components:{BasicForm:b,[B.name]:B,ASelectOption:B.Option,[F.name]:F,[F.Group.name]:F.Group,[h.name]:h},emits:["next"],setup(t,{emit:_}){const[e,{validate:m}]=x({labelWidth:100,schemas:g,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:n});function n(){return f(this,null,function*(){try{const E=yield m();_("next",E)}catch(E){}})}return{register:e}}});const r=t=>(U("data-v-2670616b"),t=t(),$(),t),R={class:"step1"},V={class:"step1-form"},k=r(()=>s("h3",null,"说明",-1)),G=r(()=>s("h4",null,"转账到支付宝账户",-1)),z=r(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),T=r(()=>s("h4",null,"转账到银行卡",-1)),W=r(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1));function Z(t,_,e,m,n,E){const l=a("a-select-option"),p=a("a-select"),u=a("a-input"),c=a("a-input-group"),y=a("BasicForm"),S=a("a-divider");return w(),I("div",R,[s("div",V,[o(y,{onRegister:t.register},{fac:i(({model:C,field:v})=>[o(c,{compact:""},{default:i(()=>[o(p,{value:C.pay,"onUpdate:value":d=>C.pay=d,class:"pay-select"},{default:i(()=>[o(l,{value:"zfb"},{default:i(()=>[D(" 支付宝 ")]),_:1}),o(l,{value:"yl"},{default:i(()=>[D(" 银联 ")]),_:1})]),_:2},1032,["value","onUpdate:value"]),o(u,{class:"pay-input",value:C[v],"onUpdate:value":d=>C[v]=d},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])]),o(S),k,G,z,T,W])}const cu=O(N,[["render",Z],["__scopeId","data-v-2670616b"]]);export{cu as default};
