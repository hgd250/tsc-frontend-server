var d=(o,i,r)=>new Promise((c,l)=>{var m=e=>{try{t(r.next(e))}catch(p){l(p)}},s=e=>{try{t(r.throw(e))}catch(p){l(p)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(m,s);t((r=r.apply(o,i)).next())});import{B as A}from"./BasicForm-fa347ab4.js";import"./componentMap-7c245921.js";import{u as b}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import v from"./PersonTable-5bd538b9.js";import{P as h}from"./index-ba6fd08d.js";import{K as _}from"./antd-5ec2f20c.js";import{d as B,f as E,a7 as u,Z as q,a8 as k,a9 as a,l as n,E as C}from"./vue-07f122e3.js";import{a as F}from"./index.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useFormItem-7245b14a.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./BasicTable-fe9d6b51.js";import"./EditTableHeaderIcon-11f75150.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import"./sortable.esm-4ae27e0b.js";import"./onMountedOrActivated-2ea9d019.js";import"./useTable-08aefb36.js";import"./useContentViewHeight-cfa41a84.js";const f=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],P=[{label:"私密",value:"1"},{label:"公开",value:"2"}],y=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],R=B({name:"FormHightPage",components:{BasicForm:A,PersonTable:v,PageWrapper:h,[_.name]:_},setup(){const o=E(null),[i,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1}),[c,{validate:l}]=b({layout:"vertical",baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function m(){return d(this,null,function*(){try{o.value;const[s,t]=yield Promise.all([r(),l()])}catch(s){}})}return{register:i,registerTask:c,submitAll:m,tableRef:o}}});function S(o,i,r,c,l,m){const s=u("BasicForm"),t=u("a-card"),e=u("PersonTable"),p=u("a-button"),g=u("PageWrapper");return q(),k(g,{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:a(()=>[n(p,{type:"primary",onClick:o.submitAll},{default:a(()=>[C(" 提交 ")]),_:1},8,["onClick"])]),default:a(()=>[n(t,{title:"仓库管理",bordered:!1},{default:a(()=>[n(s,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(t,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:a(()=>[n(s,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),n(t,{title:"成员管理",bordered:!1,class:"!mt-5"},{default:a(()=>[n(e,{ref:"tableRef"},null,512)]),_:1})]),_:1})}const ae=F(R,[["render",S],["__scopeId","data-v-17dbda48"]]);export{ae as default};
