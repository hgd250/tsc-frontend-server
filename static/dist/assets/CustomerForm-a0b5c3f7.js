import{B as F}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as D}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{C as h,c as V,a as E}from"./index.js";import{P as g}from"./index-ba6fd08d.js";import{w as r,X as c,U as n}from"./antd-5ec2f20c.js";import{d as S,m as A,l as t,E as d,a7 as p,Z as P,a8 as I,a9 as i}from"./vue-07f122e3.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useFormItem-7245b14a.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./useContentViewHeight-cfa41a84.js";import"./onMountedOrActivated-2ea9d019.js";const x=e=>[{required:!0,validator:(l,a,u)=>{if(!e.typeKey)return u("请选择类型");if(!e.typeValue)return u("请输入数据");u()}}],b=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],render:({model:e,field:l},{disabled:a})=>A(r,{placeholder:"请输入",value:e[l],onChange:u=>{e[l]=u.target.value},disabled:a})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],renderComponentContent:(e,{disabled:l})=>({suffix:()=>l?"suffix_disabled":"suffix_default"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}]},{field:"field4",component:"Input",renderColContent({model:e,field:l},{disabled:a}){return t(c,{name:"field4",label:"renderColContent渲染",rules:[{required:!0}]},{default:()=>[t(r,{placeholder:"请输入",value:e[l],"onUpdate:value":u=>e[l]=u,disabled:a},null)]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field5",component:"Input",label:"自定义colSlot",colSlot:"colSlot_field5",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{required:!0,field:"typeKey2",defaultValue:"测试类型",fields:["typeValue2"],defaultValueObj:{typeValue2:"默认测试_文字"},component:"Input",label:"复合field render",render({model:e,field:l},{disabled:a}){return t(r.Group,{compact:!0},{default:()=>[t(n,{disabled:a,style:"width: 120px",allowClear:!0,value:e[l],"onUpdate:value":u=>e[l]=u},{default:()=>[t(n.Option,{value:"测试类型"},{default:()=>[d("测试类型")]}),t(n.Option,{value:"测试名称"},{default:()=>[d("测试名称")]})]}),t(c,{name:"typeValue2",class:"local_typeValue",rules:[{required:!0}]},{default:()=>[t(r,{placeholder:"请输入",value:e.typeValue2,"onUpdate:value":u=>e.typeValue2=u,disabled:a},null)]})]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"typeKey",defaultValue:"公司名称",fields:["typeValue"],defaultValueObj:{typeValue:"默认文字"},component:"Input",renderColContent({model:e,field:l},{disabled:a}){return t(c,{name:"typeKey",label:"复合field renderColContent",rules:x(e)},{default:()=>[t(r.Group,{compact:!0},{default:()=>[t(n,{allowClear:!0,disabled:a,style:"width: 120px",value:e[l],"onUpdate:value":u=>e[l]=u},{default:()=>[t(n.Option,{value:"公司名称"},{default:()=>[d("公司名称")]}),t(n.Option,{value:"产品名称"},{default:()=>[d("产品名称")]})]}),t(r,{style:"width: calc(100% - 120px); margin-left: -1px;",placeholder:"请输入",value:e.typeValue,"onUpdate:value":u=>e.typeValue=u,disabled:a},null)]})]})},colProps:{span:16},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field_disabled",component:"Switch",label:"是否禁用 编辑字段",colProps:{span:8},labelWidth:200}],U=S({components:{BasicForm:F,CollapseContainer:h,PageWrapper:g,[r.name]:r,FormItem:c},setup(){const{createMessage:e}=V(),[l,{setProps:a}]=D({labelWidth:120,schemas:b,actionColOptions:{span:24}});return{register:l,schemas:b,handleSubmit:u=>{e.success("click search,values:"+JSON.stringify(u))},setProps:a}}});function q(e,l,a,u,w,O){const _=p("a-input"),y=p("FormItem"),v=p("BasicForm"),C=p("CollapseContainer"),B=p("PageWrapper");return P(),I(B,{title:"自定义组件示例"},{default:i(()=>[t(C,{title:"自定义表单"},{default:i(()=>[t(v,{class:"local_form",onRegister:e.register,onSubmit:e.handleSubmit},{f3:i(({model:s,field:o,disabled:m})=>[t(_,{value:s[o],"onUpdate:value":f=>s[o]=f,disabled:m,placeholder:"自定义slot"},null,8,["value","onUpdate:value","disabled"])]),colSlot_field5:i(({model:s,field:o,disabled:m})=>[t(y,{name:o,label:"自定义colSlot",rules:[{required:!0}]},{default:i(()=>[t(_,{value:s[o],"onUpdate:value":f=>s[o]=f,disabled:m,placeholder:"自定义colSlot"},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const le=E(U,[["render",q],["__scopeId","data-v-09357266"]]);export{le as default};
