var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))u.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>c(e,f(o));import{r as C,a as b}from"./index-3128146f.js";import w from"./PreviewCode-2fbe25b4.js";import{M as _}from"./antd-5ec2f20c.js";import{d as D,r as M,c as h,G as J,a7 as l,Z as V,a8 as $,a9 as x,l as y}from"./vue-07f122e3.js";import{a as A}from"./index.js";import"./index-2d93de14.js";import"./useWindowSizeFn-46595a7c.js";const g=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let j=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const k=D({name:"CodeModal",components:{PreviewCode:w,Modal:_},setup(){const e=M({visible:!1,jsonData:{}}),o=a=>{a.schemas&&b(a.schemas),e.visible=!0,e.jsonData=a},t=h(()=>g+JSON.stringify(C(e.jsonData),null,"	")+j);return i(n({},J(e)),{editorVueJson:t,showModal:o})}});function N(e,o,t,a,P,B){const m=l("PreviewCode"),d=l("Modal");return V(),$(d,{title:"代码",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=E=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:x(()=>[y(m,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}const z=A(k,[["render",N]]);export{z as default};
