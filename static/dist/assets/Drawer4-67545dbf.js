import{B as u,a as d}from"./index-ef38ae66.js";import{B as f}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as g}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{d as b,a7 as t,Z as v,a8 as _,a9 as i,$ as n,l as s,E as B,ac as h}from"./vue-07f122e3.js";import{a as w}from"./index.js";import"./antd-5ec2f20c.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useFormItem-7245b14a.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";const l=[{field:"Origination",component:"Select",label:"Origination",colProps:{span:24},componentProps:{mode:"multiple",options:[{label:"Citi1",value:"1"},{label:"citi2",value:"2"}]}},{field:"Services",component:"Select",label:"Services",colProps:{span:24},componentProps:{mode:"multiple",options:[{label:"Health",value:"1"},{label:"Job",value:"2"},{label:"Training",value:"3"},{label:"Money",value:"4"},{label:"Others",value:"5"}]}},{field:"target",component:"InputTextArea",label:"Description",colProps:{span:24},componentProps:{placeholder:"Navigator Suggestion...",rows:4}}],C=b({components:{BasicDrawer:u,BasicForm:f},setup(){const[e,{setFieldsValue:r}]=g({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[a]=d(o=>{r({field2:o.data,field1:o.info})});return{register:a,schemas:l,registerForm:e}}});function D(e,r,a,o,F,P){const p=t("BasicForm"),m=t("a-button"),c=t("BasicDrawer");return v(),_(c,h(e.$attrs,{onRegister:e.register,title:"Assign Origination",width:"50%"}),{default:i(()=>[n("div",null,[s(p,{onRegister:e.registerForm},null,8,["onRegister"])]),n("div",null,[s(m,{type:"primary",onClick:e.submitAll},{default:i(()=>[B(" 提交 ")]),_:1},8,["onClick"])])]),_:1},16,["onRegister"])}const j=w(C,[["render",D]]);export{j as default};