var K=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(o,n,t)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,$=(o,n)=>{for(var t in n||(n={}))E.call(n,t)&&j(o,t,n[t]);if(P)for(var t of P(n))L.call(n,t)&&j(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var r in o)E.call(o,r)&&n.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&P)for(var r of P(o))n.indexOf(r)<0&&L.call(o,r)&&(t[r]=o[r]);return t};var w=(o,n,t)=>new Promise((r,g)=>{var d=a=>{try{c(t.next(a))}catch(i){g(i)}},F=a=>{try{c(t.throw(a))}catch(i){g(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,F);c((t=t.apply(o,n)).next())});import T from"./FormRender-f69ae4d7.js";import{Z as W,bf as B,d as D,bd as O,R as H,Q as U,o as X}from"./antd-5ec2f20c.js";import{g as Y,H as x,d as I,f as oo,c as y,p as Z,u as eo,a7 as R,Z as k,_ as q,l as z,a9 as V,F as to,aa as no,a8 as so,ad as ro,N as ao,ai as io,aj as mo,ac as lo}from"./vue-07f122e3.js";import{b as fo,f as Q}from"./index-3128146f.js";import{bc as co,a as uo}from"./index.js";import"./index-bb9c15bb.js";import"./formItemConfig-779ff00a.js";import"./componentMap-7c245921.js";import"./useFormItem-7245b14a.js";import"./RadioButtonGroup-7710ecaa.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./useFormDesignState-ba3aa2b7.js";function po(o,n,t,r){(()=>{const u=Y(),C=u==null?void 0:u.parent;C&&o.formConfig.schemas.forEach(m=>{B(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))}),B(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))})})})();const{emit:d}=t,F=W.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:h}=F(n,[]);return{validate:a,validateField:h,resetFields:c,clearValidate:i,submit:()=>w(this,null,function*(){var C,m;const u=D(x(n.value));return d==null||d("submit",u),(m=(C=o.formConfig).submit)==null||m.call(C,u),u})}}function go(o,n,t,r){const g=e=>fo(o.formConfig.schemas,s=>s.field===e),d=(e,s,l)=>{const f=g(e);f&&(f[s]=l)},F=(e,s,l)=>{const f=g(e);f!=null&&f.componentProps&&(["options","treeData"].includes(s)&&c(e,void 0),f.componentProps[s]=l)},c=(e,s)=>{var l;typeof e=="string"?(o.formModel[e]=s,(l=t.value)==null||l.validateField(e,s,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,s)=>{o.formConfig[e]=s},i=e=>D(o.formModel)[e],h=()=>w(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?F(e,"disabled",!0):a("disabled",e!==!1)},C=e=>{d(e,"hidden",!1)},m={};return(e=>{Q(e,s=>{Q(e,l=>{var f;m[l.field]||(m[l.field]=new Set),(f=s.link)!=null&&f.includes(l.field)&&O(s.update)&&m[l.field].add(s)}),m[s.field].add(s)})})(o.formConfig.schemas),$({linkOn:m,setValue:c,getValue:i,hidden:v,show:C,set:d,get:g,setProps:F,getData:h,disable:u},r)}const Fo=I({name:"VFormCreate",components:{FormRender:T,Form:W,Row:H},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?U:H,{emit:r}=n,g=oo(null),d=y({get:()=>o.formModel,set:p=>r("update:formModel",p)}),F=y(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=co(o,"fApi",r),{submit:a,validate:i,clearValidate:h,resetFields:v,validateField:u}=po(o,d,n),f=go({formConfig:o.formConfig,formData:o.formModel},n,g,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h}),{linkOn:C}=f,m=A(f,["linkOn"]);c.value=m;const M=p=>{var S;const{schema:b,value:G}=p,{field:J}=eo(b);(S=C[J])==null||S.forEach(_=>{var N;(N=_.update)==null||N.call(_,G,_,c.value)})},e=y(()=>X(o.formConfig,["disabled","labelWidth","schemas"])),s=()=>{a()};Z("formModel",d);const l=(p,b)=>{d.value[p]=b};return Z("setFormModelMethod",l),{eFormModel:g,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h,handleChange:M,formModelProps:e,handleSubmit:s,setFormModel:l,formModelNew:d,wrapperComp:t,noHiddenList:F}}});const Co={class:"v-form-container"};function ho(o,n,t,r,g,d){const F=R("FormRender"),c=R("Row"),a=R("Form");return k(),q("div",Co,[z(a,lo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:V(()=>[z(c,null,{default:V(()=>[(k(!0),q(to,null,no(o.noHiddenList,(i,h)=>(k(),so(F,{key:h,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},ro({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:V(()=>[ao(o.$slots,i.componentProps.slotName,io(mo({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}const Bo=uo(Fo,[["render",ho],["__scopeId","data-v-808f2155"]]);export{Bo as default};