var F=(t,i,n)=>new Promise((r,b)=>{var _=s=>{try{c(n.next(s))}catch(e){b(e)}},l=s=>{try{c(n.throw(s))}catch(e){b(e)}},c=s=>s.done?r(s.value):Promise.resolve(s.value).then(_,l);c((n=n.apply(t,i)).next())});import{P as k}from"./index-df1b87ef.js";import{ab as B,am as $,u as E,_ as P}from"./index.js";import{B as T}from"./BasicForm-d44ea6f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-b48b860e.js";import{u as K}from"./useForm-4dc53c5d.js";import{a7 as C,o as V}from"./antd-15408678.js";import{d as w,f as g,a6 as f,t as A,q as D,Z as y,a7 as h,a8 as m,$ as S,l as d,E as v,_ as R,F as W,a9 as M,ab as N}from"./vue-b9806415.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";import"./index-6f85bfe1.js";import"./index-3a95ad41.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-06c01efe.js";const j=w({name:"TabsFormDemo",components:{Tabs:C,TabPane:C.TabPane,PageWrapper:k,CollapseContainer:B,BasicForm:T},setup(){const{createMessage:t}=E(),i=g("tabs2"),n=g(!1),r=[],b={showActionButtonGroup:!1,labelWidth:100},_={};for(let e=1;e<=5;++e){const a=`tabs${e}`,u=[],p={};for(let o=1;o<=8;++o)u.push({field:`${a}.field${o}`,label:`${a}-field${o}`,component:"Input",colProps:{span:24}}),p[`field${o}`]=`field: ${a}.field${o}, default value`;_[a]=p,r.push({key:a,tab:a,forceRender:!0,Form:K(Object.assign({schemas:u},b))})}function l(){return F(this,null,function*(){for(const e of r){const{resetFields:a}=e.Form[1];yield a()}})}function c(){return F(this,null,function*(){let e="";n.value=!0;try{const a={};for(const u of r){e=u.key;const{validate:p,getFieldsValue:o}=u.Form[1];yield p(),$(a,o())}t.success("提交成功！请打开控制台查看")}catch(a){i.value=e}finally{n.value=!1}})}function s(){return F(this,null,function*(){for(const e of r){const{setFieldsValue:a}=e.Form[1];yield a(_)}})}return{omit:V,loading:n,activeKey:i,tabsFormSchema:r,handleReset:l,handleSubmit:c,handleSetValues:s}}}),q={class:"mb-4"};function G(t,i,n,r,b,_){const l=f("a-button"),c=f("BasicForm"),s=f("TabPane"),e=f("Tabs"),a=f("CollapseContainer"),u=f("PageWrapper"),p=A("loading");return D((y(),h(u,{title:"标签页+多级field表单"},{default:m(()=>[S("div",q,[d(l,{onClick:t.handleReset,class:"mr-2"},{default:m(()=>[v(" 重置表单 ")]),_:1},8,["onClick"]),d(l,{onClick:t.handleSetValues,class:"mr-2"},{default:m(()=>[v(" 设置默认值 ")]),_:1},8,["onClick"]),d(l,{onClick:t.handleSubmit,class:"mr-2",type:"primary"},{default:m(()=>[v(" 提交表单 ")]),_:1},8,["onClick"])]),d(a,{title:"标签页+多级field表单"},{default:m(()=>[d(e,{activeKey:t.activeKey,"onUpdate:activeKey":i[0]||(i[0]=o=>t.activeKey=o)},{default:m(()=>[(y(!0),R(W,null,M(t.tabsFormSchema,o=>(y(),h(s,N({key:o.key},t.omit(o,["Form","key"])),{default:m(()=>[d(c,{onRegister:o.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[p,t.loading]])}const ne=P(j,[["render",G]]);export{ne as default};
