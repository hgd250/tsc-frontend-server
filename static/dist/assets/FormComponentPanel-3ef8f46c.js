import{d as g}from"./vuedraggable.umd-b33c8db0.js";import f from"./LayoutItem-150a865f.js";import{u as _}from"./useFormDesignState-ba3aa2b7.js";import{Z as h,E as v,d as C}from"./antd-5ec2f20c.js";import{d as y,c as S,a7 as n,Z as E,_ as F,n as I,z as D,l as r,a9 as d,$ as b,ai as A,aj as P}from"./vue-07f122e3.js";import{a as V}from"./index.js";import"./FormNode-4e945390.js";import"./FormNodeOperate-3cb4faf1.js";import"./index-3128146f.js";import"./index-bb9c15bb.js";import"./formItemConfig-779ff00a.js";import"./componentMap-7c245921.js";import"./useFormItem-7245b14a.js";import"./RadioButtonGroup-7710ecaa.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./uuid-31b8b5a4.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:f,draggable:g,Form:h,Empty:v},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:e}=_(),i=({newIndex:t})=>{e.value.schemas=e.value.schemas||[];const m=e.value.schemas;m[t]=C(m[t]),a("handleSetSelectItem",m[t])},l=t=>{a("handleSetSelectItem",e.value.schemas[t.oldIndex])},p=S(()=>e.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:l,formConfig:e,layoutTag:p}}});const k={class:"form-panel v-form-container"},B={class:"draggable-box"};function z(o,a,e,i,l,p){const t=n("Empty"),m=n("LayoutItem"),c=n("draggable"),u=n("Form");return E(),F("div",k,[I(r(t,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[D,o.formConfig.schemas.length===0]]),r(u,A(P(o.formConfig)),{default:d(()=>[b("div",B,[r(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=s=>o.formConfig.schemas=s),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:s})=>[r(m,{class:"drag-move",schema:s,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const eo=V($,[["render",z],["__scopeId","data-v-19250ee6"]]);export{eo as default};