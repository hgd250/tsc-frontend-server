var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Z=(e,s,o)=>s in e?de(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,C=(e,s)=>{for(var o in s||(s={}))we.call(s,o)&&Z(e,o,s[o]);if(U)for(var o of U(s))he.call(s,o)&&Z(e,o,s[o]);return e},L=(e,s)=>fe(e,ge(s));var G=(e,s,o)=>new Promise((i,l)=>{var u=c=>{try{n(o.next(c))}catch(p){l(p)}},t=c=>{try{n(o.throw(c))}catch(p){l(p)}},n=c=>c.done?i(c.value):Promise.resolve(c.value).then(u,t);n((o=o.apply(e,s)).next())});import{l as Y,h as j,a as I,y as ye,p as N,S as me,z as Ce,e as J,v as De,n as x,t as ee,D as ke,E as te,w as $e}from"./index.js";import{d as A,c as w,a7 as D,Z as d,_ as P,F as Be,N as f,a8 as O,a9 as h,E as R,a0 as S,ac as T,ab as b,a1 as $,af as oe,$ as K,l as E,f as k,g as _,u as a,H as v,w as Q,x as se,q as ve,ad as W,n as Pe,aa as be,ai as Oe,aj as Se,r as ne,h as Te}from"./vue-07f122e3.js";import{ac as _e,V as Fe,a as He}from"./antd-5ec2f20c.js";const{t:X}=Y(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:X("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:X("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=C({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},open:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re),Ne=A({name:"BasicDrawerFooter",props:L(C({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:o}=j("basic-drawer-footer"),i=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function l(){s("ok")}function u(){s("close")}return{handleOk:l,prefixCls:o,handleClose:u,getStyle:i}}});function Re(e,s,o,i,l,u){const t=D("a-button");return e.showFooter||e.$slots.footer?(d(),P("div",{key:0,class:$(e.prefixCls),style:oe(e.getStyle)},[e.$slots.footer?f(e.$slots,"footer",{key:1}):(d(),P(Be,{key:0},[f(e.$slots,"insertFooter"),e.showCancelBtn?(d(),O(t,T({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(S(e.cancelText),1)]),_:1},16,["onClick"])):b("",!0),f(e.$slots,"centerFooter"),e.showOkBtn?(d(),O(t,T({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(S(e.okText),1)]),_:1},16,["type","onClick","loading"])):b("",!0),f(e.$slots,"appendFooter")],64))],6)):b("",!0)}const Ee=I(Ne,[["render",Re]]),Ve=A({name:"BasicDrawerHeader",components:{BasicTitle:ye,ArrowLeftOutlined:_e},props:{isDetail:N.bool,showDetailBack:N.bool,title:N.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:o}=j("basic-drawer-header");function i(){s("close")}return{prefixCls:o,handleClose:i}}});const je={key:1};function Ie(e,s,o,i,l,u){const t=D("BasicTitle"),n=D("ArrowLeftOutlined");return e.isDetail?(d(),P("div",{key:1,class:$([e.prefixCls,`${e.prefixCls}--detail`])},[K("span",{class:$(`${e.prefixCls}__twrap`)},[e.showDetailBack?(d(),P("span",{key:0,onClick:s[0]||(s[0]=(...c)=>e.handleClose&&e.handleClose(...c))},[E(n,{class:$(`${e.prefixCls}__back`)},null,8,["class"])])):b("",!0),e.title?(d(),P("span",je,S(e.title),1)):b("",!0)],2),K("span",{class:$(`${e.prefixCls}__toolbar`)},[f(e.$slots,"titleToolbar")],2)],2)):(d(),O(t,{key:0,class:$(e.prefixCls)},{default:h(()=>[f(e.$slots,"title"),R(" "+S(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}const Ae=I(Ve,[["render",Ie]]),qe=A({components:{Drawer:Fe,ScrollContainer:me,DrawerFooter:Ee,DrawerHeader:Ae},inheritAttrs:!1,props:Le,emits:["open-change","ok","close","register"],setup(e,{emit:s}){const o=k(!1),i=Ce(),l=k(null),{t:u}=Y(),{prefixVar:t,prefixCls:n}=j("basic-drawer"),c={setDrawerProps:ce,emitOpen:void 0},p=_();p&&s("register",c,p.uid);const m=w(()=>J(v(e),a(l))),y=w(()=>{const r=L(C(C({placement:"right"},a(i)),a(m)),{open:a(o)});r.title=void 0;const{isDetail:g,width:H,wrapClassName:z,getContainer:pe}=r;if(g){H||(r.width="100%");const M=`${n}__detail`;r.rootClassName=z?`${z} ${M}`:M,pe||(r.getContainer=`.${t}-layout-content`)}return r}),F=w(()=>C(C({},i),a(y))),q=w(()=>{const{footerHeight:r,showFooter:g}=a(y);return g&&r?De(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=w(()=>({position:"relative",height:`calc(100% - ${a(q)})`})),le=w(()=>{var r;return!!((r=a(y))!=null&&r.loading)});Q(()=>e.open,(r,g)=>{r!==g&&(o.value=r)},{deep:!0}),Q(()=>o.value,r=>{se(()=>{s("open-change",r)})});function ie(r){return G(this,null,function*(){const{closeFunc:g}=a(y);if(s("close",r),g&&x(g)){const H=yield g();o.value=!H;return}o.value=!1})}function ce(r){l.value=J(a(l)||{},r),Reflect.has(r,"open")&&(o.value=!!r.open)}function ue(){s("ok")}return{onClose:ie,t:u,prefixCls:n,getMergeProps:m,getScrollContentStyle:ae,getProps:y,getLoading:le,getBindValues:F,getFooterHeight:q,handleOk:ue}}});function ze(e,s,o,i,l,u){const t=D("DrawerHeader"),n=D("ScrollContainer"),c=D("DrawerFooter"),p=D("Drawer"),m=ve("loading");return d(),O(p,T({rootClassName:e.prefixCls,onClose:e.onClose},e.getBindValues),W({default:h(()=>[Pe((d(),O(n,{style:oe(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[f(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[m,e.getLoading]]),E(c,T(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),W({_:2},[be(Object.keys(e.$slots),y=>({name:y,fn:h(F=>[f(e.$slots,y,Oe(Se(F||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[f(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[E(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[f(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["rootClassName","onClose"])}const Me=I(qe,[["render",ze]]),B=ne({}),V=ne({});function Ke(){if(!_())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=k(null),s=k(!1),o=k("");function i(t,n){ee(()=>{e.value=null,s.value=null,B[a(o)]=null}),!(a(s)&&ke()&&t===a(e))&&(o.value=n,e.value=t,s.value=!0,t.emitOpen=(c,p)=>{V[p]=c})}const l=()=>{const t=a(e);return t||te("useDrawer instance is undefined!"),t},u={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getOpen:w(()=>V[~~a(o)]),openDrawer:(t=!0,n,c=!0)=>{var m;if((m=l())==null||m.setDrawerProps({open:t}),!n)return;if(c){B[a(o)]=null,B[a(o)]=v(n);return}He(v(B[a(o)]),v(n))||(B[a(o)]=v(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({open:!1})}};return[i,u]}const Qe=e=>{const s=k(null),o=_(),i=k("");if(!_())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(s);if(!t){te("useDrawerInner instance is undefined!");return}return t},u=(t,n)=>{ee(()=>{s.value=null}),i.value=n,s.value=t,o==null||o.emit("register",t,n)};return Te(()=>{const t=B[a(i)];t&&(!e||!x(e)||se(()=>{e(t)}))}),[u,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getOpen:w(()=>V[~~a(i)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({open:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},We=$e(Me);export{We as B,Qe as a,Ke as u};
