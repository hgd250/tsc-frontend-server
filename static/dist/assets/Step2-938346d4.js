var f=(m,a,s)=>new Promise((p,n)=>{var _=e=>{try{t(s.next(e))}catch(i){n(i)}},u=e=>{try{t(s.throw(e))}catch(i){n(i)}},t=e=>e.done?p(e.value):Promise.resolve(e.value).then(_,u);t((s=s.apply(m,a)).next())});import{B as b}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as v}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{step2Schemas as E}from"./data-babf4d77.js";import{d as x,a7 as r,Z as C,_ as g,l as o,a9 as c,E as l}from"./vue-07f122e3.js";import{ab as B,a0 as D,O as d}from"./antd-5ec2f20c.js";import{a as h}from"./index.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useFormItem-7245b14a.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";const y=x({components:{BasicForm:b,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(m,{emit:a}){const[s,{validate:p,setProps:n}]=v({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:_,submitFunc:u});function _(){return f(this,null,function*(){a("prev")})}function u(){return f(this,null,function*(){try{const t=yield p();n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),a("next",t)},1500)}catch(t){}})}return{register:s}}});const O={class:"step2"};function A(m,a,s,p,n,_){const u=r("a-alert"),t=r("a-descriptions-item"),e=r("a-descriptions"),i=r("a-divider"),F=r("BasicForm");return C(),g("div",O,[o(u,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),o(e,{column:1,class:"mt-5"},{default:c(()=>[o(t,{label:"付款账户"},{default:c(()=>[l(" ant-design@alipay.com ")]),_:1}),o(t,{label:"收款账户"},{default:c(()=>[l(" test@example.com ")]),_:1}),o(t,{label:"收款人姓名"},{default:c(()=>[l(" Vben ")]),_:1}),o(t,{label:"转账金额"},{default:c(()=>[l(" 500元 ")]),_:1})]),_:1}),o(i),o(F,{onRegister:m.register},null,8,["onRegister"])])}const M=h(y,[["render",A],["__scopeId","data-v-61ce13ca"]]);export{M as default};