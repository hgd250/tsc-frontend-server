var g=Object.defineProperty;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var r=(e,n,o)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,s=(e,n)=>{for(var o in n||(n={}))h.call(n,o)&&r(e,o,n[o]);if(l)for(var o of l(n))j.call(n,o)&&r(e,o,n[o]);return e};import{Y as A,x as C,B as w,Z as F,p as t,l as S}from"./index.js";import{Z as v,Q as i}from"./antd-5ec2f20c.js";import{d as x,c as a}from"./vue-07f122e3.js";const b=Symbol();function I(e){return C(e,b)}function _(){return A(b)}const P=x({name:"BasicFormAction",components:{FormItem:v.Item,Button:w,BasicArrow:F,[i.name]:i},props:{showActionButtonGroup:t.bool.def(!0),showResetButton:t.bool.def(!0),showSubmitButton:t.bool.def(!0),showAdvancedButton:t.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:t.number.def(6),isAdvanced:t.bool,hideAdvanceBtn:t.bool},emits:["toggle-advanced"],setup(e,{emit:n}){const{t:o}=S(),p=a(()=>{const{showAdvancedButton:u,actionSpan:O,actionColOptions:y}=e,c=24-O,B=u?{span:c<6?24:c}:{};return s(s({style:{textAlign:"right"},span:u?6:4},B),y)}),m=a(()=>Object.assign({text:o("common.resetText")},e.resetButtonOptions)),d=a(()=>Object.assign({text:o("common.queryText")},e.submitButtonOptions));function f(){n("toggle-advanced")}return s({t:o,actionColOpt:p,getResetBtnOptions:m,getSubmitBtnOptions:d,toggleAdvanced:f},_())}}),z={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:t.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:t.bool.def(!0),autoSubmitOnEnter:t.bool.def(!1),submitOnReset:t.bool,submitOnChange:t.bool,size:t.oneOf(["default","small","large"]).def("default"),disabled:t.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:t.bool,transformDateFunc:{type:Function,default:e=>{var n,o;return(o=(n=e==null?void 0:e.format)==null?void 0:n.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?o:e}},rulesMessageJoinLabel:t.bool.def(!0),autoAdvancedLine:t.number.def(3),alwaysShowLines:t.number.def(1),showActionButtonGroup:t.bool.def(!0),actionColOptions:Object,showResetButton:t.bool.def(!0),autoFocusFirstItem:t.bool,resetButtonOptions:Object,showSubmitButton:t.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:t.bool,labelCol:Object,layout:t.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:t.bool,labelAlign:t.string,rowProps:Object};export{P as _,z as b,I as c};
