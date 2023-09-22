var Rt=Object.defineProperty,$t=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var Ft=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var Ge=(e,o,t)=>o in e?Rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,H=(e,o)=>{for(var t in o||(o={}))Ft.call(o,t)&&Ge(e,t,o[t]);if(Ue)for(var t of Ue(o))_t.call(o,t)&&Ge(e,t,o[t]);return e},ue=(e,o)=>$t(e,kt(o));var ne=(e,o,t)=>new Promise((s,l)=>{var u=i=>{try{c(t.next(i))}catch(a){l(a)}},d=i=>{try{c(t.throw(i))}catch(a){l(a)}},c=i=>i.done?s(i.value):Promise.resolve(i.value).then(u,d);c((t=t.apply(e,o)).next())});import{B as It}from"./BasicForm-fa347ab4.js";import{P as Oe,a as Ht,D as Pt,I as Ae,b as Ke,R as ee,F as Dt,u as ze,d as Ot}from"./componentMap-7c245921.js";import{u as At}from"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import{ac as Xe,h as Le,l as Te,M as X,H as Pe,U as Kt,n as q,o as Be,ad as Lt,ae as Bt,a2 as Et,G as Mt,af as Nt,u as zt,s as Vt,a as oe,ag as Wt,y as jt,$ as Me,a6 as qt,P as Ut,V as Gt}from"./index.js";import{E as Ze}from"./EditTableHeaderIcon-11f75150.js";import{d as Ce,c as _,l as F,f as W,w as pe,u as n,H as de,m as Ve,r as nt,h as We,o as Xt,x as ye,a7 as $,Z as K,a8 as N,a9 as v,$ as te,a0 as V,a1 as ge,E as fe,_ as me,F as Ye,aa as Ne,ab as G,N as he,e as Zt,ad as Je,ac as Qe,n as Yt,z as Jt,ai as Ie,aj as He}from"./vue-07f122e3.js";import{_ as Qt,a as xt,b as en,c as tn,d as nn}from"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{aC as on,aD as an,d as De,a as ln,aE as sn,ad as xe,o as ot,aF as rn,T as at,aw as cn,ax as un,a0 as fn,aG as dn}from"./antd-5ec2f20c.js";import{b as et}from"./uuid-31b8b5a4.js";import{u as gn}from"./index-867933e1.js";import{u as hn}from"./useWindowSizeFn-46595a7c.js";import{o as mn}from"./onMountedOrActivated-2ea9d019.js";const pn=Ce({name:"TableHeaderCell",components:{EditTableHeaderCell:Ze,BasicHelp:Xe},props:{column:{type:Object,default:()=>({})}},setup(e){const{prefixCls:o}=Le("basic-table-header-cell"),t=_(()=>{var u;return!!((u=e.column)!=null&&u.edit)}),s=_(()=>{var d,c;const u=e.column;return typeof u.customHeaderRender=="function"?u.customHeaderRender(e.column):((d=e.column)==null?void 0:d.customTitle)||((c=e.column)==null?void 0:c.title)}),l=_(()=>{var u;return(u=e.column)==null?void 0:u.helpMessage});return()=>F("div",null,[t.value?F(Ze,null,{default:()=>[s.value]}):F("span",{class:"default-header-cell"},[s.value]),l.value&&F(Xe,{text:l.value,class:`${o}__help`},null)])}});function Cn({page:e,type:o,originalElement:t}){return o==="prev"?e===0?null:F(on,null,null):o==="next"?e===1?null:F(an,null,null):t}function bn(e){const{t:o}=Te(),t=W({}),s=W(!0);pe(()=>n(e).pagination,a=>{!X(a)&&a&&(t.value=H(H({},n(t)),a!=null?a:{}))});const l=_(()=>{const{pagination:a}=n(e);return!n(s)||X(a)&&!a?!1:H(H({current:1,pageSize:Oe,size:"small",defaultPageSize:Oe,showTotal:C=>o("component.table.total",{total:C}),showSizeChanger:!0,pageSizeOptions:Ht,itemRender:Cn,showQuickJumper:!0},X(a)?{}:a),n(t))});function u(a){const C=n(l);t.value=H(H({},X(C)?{}:C),a)}function d(){return n(l)}function c(){return n(s)}function i(a){return ne(this,null,function*(){s.value=a})}return{getPagination:d,getPaginationInfo:l,setShowPagination:i,getShowPagination:c,setPagination:u}}function Sn(e){return({text:o,record:t,index:s})=>(de(t).onValid=()=>ne(this,null,function*(){if(Pe(t==null?void 0:t.validCbs)){const l=((t==null?void 0:t.validCbs)||[]).map(d=>d());return(yield Promise.all(l)).every(d=>!!d)}else return!1}),de(t).onEdit=(l,u=!1)=>ne(this,null,function*(){var d,c;return u||(t.editable=l),!l&&u?(yield t.onValid())&&(yield(d=t.onSubmitEdit)==null?void 0:d.call(t))?(t.editable=!1,!0):!1:(!l&&!u&&((c=t.onCancelEdit)==null||c.call(t)),!0)}),Ve(Qt,{value:o,record:t,column:e,index:s}))}function lt(e,o){const{key:t,dataIndex:s,children:l}=e;e.align=e.align||Pt,o&&(t||(e.key=s),X(e.ellipsis)||Object.assign(e,{ellipsis:o})),l&&l.length&&st(l,!!o)}function st(e,o){e&&e.forEach(t=>{const{children:s}=t;lt(t,o),st(s,o)})}function yn(e,o,t){const{t:s}=Te(),{showIndexColumn:l,indexColumnProps:u,isTreeTable:d}=n(e);let c=!1;if(n(d)||(t.forEach(()=>{const a=t.findIndex(C=>C.flag===Ae);l?c=a===-1:!l&&a!==-1&&t.splice(a,1)}),!c))return;const i=t.some(a=>a.fixed==="left");t.unshift(H(H({flag:Ae,width:50,title:s("component.table.index"),align:"center",customRender:({index:a})=>{const C=n(o);if(X(C))return`${a+1}`;const{current:k=1,pageSize:P=Oe}=C;return((k<1?1:k)-1)*P+a+1}},i?{fixed:"left"}:{}),u))}function wn(e,o){const{actionColumn:t}=n(e);if(!t)return;const s=o.findIndex(l=>l.flag===Ke);s===-1&&o.push(ue(H(ue(H({},o[s]),{fixed:"right"}),t),{flag:Ke}))}function Tn(e,o){const t=W(n(e).columns);let s=n(e).columns;const l=_(()=>{const g=De(n(t));if(yn(e,o,g),wn(e,g),!g)return[];const{ellipsis:p}=n(e);return g.forEach(f=>{const{customRender:h,slots:b}=f;lt(f,Reflect.has(f,"ellipsis")?!!f.ellipsis:!!p&&!h&&!b)}),g});function u(g){const p=g.ifShow;let f=!0;return X(p)&&(f=p),q(p)&&(f=p(g)),f}const{hasPermission:d}=Kt(),c=_(()=>{const g=tt(n(l)),p=h=>{const{slots:b,customRender:A,format:D,edit:B,editRow:E,flag:j}=h;(!b||!(b!=null&&b.title))&&(h.customTitle=h.title,Reflect.deleteProperty(h,"title"));const ae=[Ae,Ke].includes(j);return!A&&D&&!B&&!ae&&(h.customRender=({text:y,record:w,index:r})=>vn(y,D,w,r)),(B||E)&&!ae&&(h.customRender=Sn(h)),nt(h)};return De(g).filter(h=>d(h.auth)&&u(h)).map(h=>{var b;return(b=h.children)!=null&&b.length&&(h.children=h.children.map(p)),p(h)})});pe(()=>n(e).columns,g=>{var p;t.value=g,s=(p=g==null?void 0:g.filter(f=>!f.flag))!=null?p:[]});function i(g,p){!g||!p||s.forEach(f=>{if(f.dataIndex===g){Object.assign(f,p);return}})}function a(g){const p=De(g);if(!Pe(p))return;if(p.length<=0){t.value=[];return}const f=p[0],h=s.map(b=>b.dataIndex);if(!Be(f)&&!Pe(f))t.value=p;else{const b=p.map(D=>D.toString()),A=[];s.forEach(D=>{var B;A.push(ue(H({},D),{defaultHidden:!b.includes(((B=D.dataIndex)==null?void 0:B.toString())||D.key)}))}),ln(h,p)||A.sort((D,B)=>{var E,j;return b.indexOf((E=D.dataIndex)==null?void 0:E.toString())-b.indexOf((j=B.dataIndex)==null?void 0:j.toString())}),t.value=A}}function C(g){const{ignoreIndex:p,ignoreAction:f,sort:h}=g||{};let b=de(n(l));return p&&(b=b.filter(A=>A.flag!==Ae)),f&&(b=b.filter(A=>A.flag!==Ke)),h&&(b=tt(b)),b}function k(){return s}function P(g){Pe(g)&&(s=g.filter(p=>!p.flag))}return{getColumnsRef:l,getCacheColumns:k,getColumns:C,setColumns:a,getViewColumns:c,setCacheColumnsByField:i,setCacheColumns:P}}function tt(e){const o=[],t=[],s=[];for(const l of e){if(l.fixed==="left"){o.push(l);continue}if(l.fixed==="right"){t.push(l);continue}s.push(l)}return[...o,...s,...t].filter(l=>!l.defaultHidden)}function vn(e,o,t,s){if(!o)return e;if(q(o))return o(e,t,s);try{const l="date|";if(Be(o)&&o.startsWith(l)&&e){const u=o.replace(l,"");return u?Lt(e,u):e}if(Bt(o))return o.get(e)}catch(l){return e}}function Rn(e,{getPaginationInfo:o,setPagination:t,setLoading:s,getFieldsValue:l,clearSelectedRowKeys:u,tableData:d},c){const i=nt({sortInfo:{},filterInfo:{}}),a=W([]),C=W({});We(()=>{d.value=n(a)}),pe(()=>n(e).dataSource,()=>{const{dataSource:r,api:m}=n(e);!m&&r&&(a.value=r)},{immediate:!0});function k(r,m,S){const{clearSelectOnPageChange:R,sortFn:O,filterFn:I}=n(e);R&&u(),t(r);const L={};if(S&&q(O)){const T=O(S);i.sortInfo=T,L.sortInfo=T}if(m&&q(I)){const T=I(m);i.filterInfo=T,L.filterInfo=T}E(L)}function P(r){!r||!Array.isArray(r)||r.forEach(m=>{m[ee]||(m[ee]=et()),m.children&&m.children.length&&P(m.children)})}const g=_(()=>n(e).autoCreateKey&&!n(e).rowKey),p=_(()=>{const{rowKey:r}=n(e);return n(g)?ee:r}),f=_(()=>{const r=n(a);if(!r||r.length===0)return n(a);if(n(g)){const m=r[0],S=r[r.length-1];if(m&&S&&(!m[ee]||!S[ee])){const R=De(n(a));R.forEach(O=>{O[ee]||(O[ee]=et()),O.children&&O.children.length&&P(O.children)}),a.value=R}}return n(a)});function h(r,m,S){return ne(this,null,function*(){return a.value[r]&&(a.value[r][m]=S),a.value[r]})}function b(r,m){const S=B(r);if(S){for(const R in S)Reflect.has(m,R)&&(S[R]=m[R]);return S}}function A(r){var O;if(!a.value||a.value.length==0)return;const m=n(p);if(!m)return;const S=Array.isArray(r)?r:[r];function R(I,L){const T=Z(I,L);if(T===null||T.index===-1)return;T.data.splice(T.index,1);function Z(M,U){var le;if(M==null)return null;for(let J=0;J<M.length;J++){const Q=M[J];let se=m;if(q(m)&&(se=m(Q)),Q[se]===U)return{index:J,data:M};if(((le=Q.children)==null?void 0:le.length)>0){const x=Z(Q.children,U);if(x!=null)return x}}return null}}for(const I of S)R(a.value,I),R(n(e).dataSource,I);t({total:(O=n(e).dataSource)==null?void 0:O.length})}function D(r,m){var R;m=m!=null?m:(R=a.value)==null?void 0:R.length;const S=Mt(r)?[r]:r;return n(a).splice(m,0,...S),n(a)}function B(r){if(!a.value||a.value.length==0)return;const m=n(p);if(!m)return;const{childrenColumnName:S="children"}=n(e);return(O=>{let I;return O.some(function L(T){if(typeof m=="function"){if(m(T)===r)return I=T,!0}else if(Reflect.has(T,m)&&T[m]===r)return I=T,!0;return T[S]&&T[S].some(L)}),I})(a.value)}function E(r){return ne(this,null,function*(){var M,U,le;const{api:m,searchInfo:S,defSort:R,fetchSetting:O,beforeFetch:I,afterFetch:L,useSearchForm:T,pagination:Z}=n(e);if(!(!m||!q(m)))try{s(!0);const{pageField:J,sizeField:Q,listField:se,totalField:x}=Object.assign({},Dt,O);let ie={};const{current:ve=1,pageSize:Re=Oe}=n(o);X(Z)&&!Z||X(o)?ie={}:(ie[J]=r&&r.page||ve,ie[Q]=Re);const{sortInfo:$e={},filterInfo:Ee}=i;let be=sn(ie,T?l():{},S,(M=r==null?void 0:r.searchInfo)!=null?M:{},R,$e,Ee,(U=r==null?void 0:r.sortInfo)!=null?U:{},(le=r==null?void 0:r.filterInfo)!=null?le:{});I&&q(I)&&(be=(yield I(be))||be);const re=yield m(be);C.value=re;const ke=Array.isArray(re);let ce=ke?re:xe(re,se);const Se=ke?re.length:xe(re,x);if(Number(Se)){const we=Math.ceil(Se/Re);if(ve>we)return t({current:we}),yield E(r)}return L&&q(L)&&(ce=(yield L(ce))||ce),a.value=ce,t({total:Se||0}),r&&r.page&&t({current:r.page||1}),c("fetch-success",{items:n(ce),total:Se}),ce}catch(J){c("fetch-error",J),a.value=[],t({total:0})}finally{s(!1)}})}function j(r){a.value=r}function ae(){return f.value}function y(){return C.value}function w(r){return ne(this,null,function*(){return yield E(r)})}return Xt(()=>{Et(()=>{n(e).immediate&&E()},16)}),{getDataSourceRef:f,getDataSource:ae,getRawDataSource:y,getRowKey:p,setTableData:j,getAutoCreateKey:g,fetch:E,reload:w,updateTableData:h,updateTableDataRecord:b,deleteTableDataRecord:A,insertTableDataRecord:D,findTableDataRecord:B,handleTableChange:k}}function $n(e){const o=W(n(e).loading);pe(()=>n(e).loading,l=>{o.value=l});const t=_(()=>n(o));function s(l){o.value=l}return{getLoading:t,setLoading:s}}function kn(e,o,t){const s=W([]),l=W([]),u=_(()=>{const{rowSelection:f}=n(e);return f?H({selectedRowKeys:n(s),onChange:h=>{i(h)}},ot(f,["onChange"])):null});pe(()=>{var f;return(f=n(e).rowSelection)==null?void 0:f.selectedRowKeys},f=>{i(f)}),pe(()=>n(s),()=>{ye(()=>{const{rowSelection:f}=n(e);if(f){const{onChange:h}=f;h&&q(h)&&h(P(),g())}t("selection-change",{keys:P(),rows:g()})})},{deep:!0});const d=_(()=>n(e).autoCreateKey&&!n(e).rowKey),c=_(()=>{const{rowKey:f}=n(e);return n(d)?ee:f});function i(f){var A;s.value=f;const h=Nt(de(n(o)).concat(de(n(l))),D=>f==null?void 0:f.includes(D[n(c)]),{children:(A=e.value.childrenColumnName)!=null?A:"children"}),b=[];f==null||f.forEach(D=>{const B=h.find(E=>E[n(c)]===D);B&&b.push(B)}),l.value=b}function a(f){l.value=f}function C(){l.value=[],s.value=[]}function k(f){const b=n(s).findIndex(A=>A===f);b!==-1&&n(s).splice(b,1)}function P(){return n(s)}function g(){return n(l)}function p(){return n(u)}return{getRowSelection:p,getRowSelectionRef:u,getSelectRows:g,getSelectRowKeys:P,setSelectedRowKeys:i,clearSelectedRowKeys:C,deleteSelectRowByKey:k,setSelectedRows:a}}function Fn(e,o,t,s,l,u,d){const c=W(167),i=gn(),a=zt(k,100),C=_(()=>{const{canResize:y,scroll:w}=n(e);return y&&!(w||{}).y});pe(()=>{var y;return[n(C),(y=n(l))==null?void 0:y.length]},()=>{a()},{flush:"post"});function k(){ye(()=>{E()})}function P(y){var w;c.value=y,(w=i==null?void 0:i.redoModalHeight)==null||w.call(i)}let g,p,f;function h(y,w){const r=y.scrollHeight>y.clientHeight,m=y.scrollWidth>y.clientWidth;r?w.classList.contains("hide-scrollbar-y")&&w.classList.remove("hide-scrollbar-y"):!w.classList.contains("hide-scrollbar-y")&&w.classList.add("hide-scrollbar-y"),m?w.classList.contains("hide-scrollbar-x")&&w.classList.remove("hide-scrollbar-x"):!w.classList.contains("hide-scrollbar-x")&&w.classList.add("hide-scrollbar-x")}function b(y){const{pagination:w}=n(e);let r=2;if(X(w))r=-8;else if(g=y.querySelector(".ant-pagination"),g){const m=g.offsetHeight;r+=m||0}else r+=24;return r}function A(y){const{pagination:w}=n(e);let r=0;if(!X(w))if(!p)p=y.querySelector(".ant-table-footer");else{const m=p.offsetHeight;r+=m||0}return r}function D(y){let w=0;return y&&(w=y.offsetHeight),w}function B(y,w){var I,L,T,Z,M,U;const{pagination:r,isCanResizeParent:m,useSearchForm:S}=n(e);let R=30,O=0;if(n(u)&&m){let Q=10;const se=(L=(I=n(u))==null?void 0:I.offsetHeight)!=null?L:0;let x=(Z=(T=n(d))==null?void 0:T.$el.offsetHeight)!=null?Z:0;x&&(x+=16),X(r)&&!r&&(Q=0),X(S)&&!S&&(R=0);const ie=(U=(M=y.querySelector(".ant-table-title"))==null?void 0:M.offsetHeight)!=null?U:0;O=se-x-ie-12-Q}else O=Vt(w).bottomIncludeBody;return{paddingHeight:R,bottomIncludeBody:O}}function E(){return ne(this,null,function*(){var U;const{resizeHeightOffset:y,maxHeight:w}=n(e),r=n(l),m=n(o);if(!m)return;const S=m.$el;if(!S||!f&&(f=S.querySelector(".ant-table-body"),!f)||(h(f,S),f.style.height="unset",!n(C)||!n(r)||r.length===0))return;yield ye();const R=S.querySelector(".ant-table-thead ");if(!R)return;const O=b(S),I=A(S),L=D(R),{paddingHeight:T,bottomIncludeBody:Z}=B(S,R);let M=Z-(y||0)-T-O-I-L;M=(U=M>w?w:M)!=null?U:M,P(M),f.style.height=`${M}px`})}hn(E,{wait:280}),mn(()=>{E(),ye(()=>{a()})});const j=_(()=>{var I,L;let y=0;n(s)&&(y+=60);const w=150,r=n(t).filter(T=>!T.defaultHidden);r.forEach(T=>{y+=Number.parseFloat(T.width)||0});const S=r.filter(T=>!Reflect.has(T,"width")).length;S!==0&&(y+=S*w);const R=n(o);return((L=(I=R==null?void 0:R.$el)==null?void 0:I.offsetWidth)!=null?L:0)>y?"100%":y});return{getScrollRef:_(()=>{const y=n(c),{canResize:w,scroll:r}=n(e);return H({x:n(j),y:w?y:null,scrollToFirstRowOnChange:!1},r)}),redoHeight:k}}function _n(e,o){let t;function s(u){return ne(this,null,function*(){var i;const{id:d}=u,c=t==null?void 0:t.querySelector(`[data-row-key="${d}"]`);yield ye(),t==null||t.scrollTo({top:(i=c==null?void 0:c.offsetTop)!=null?i:0,behavior:"smooth"})})}function l(u){const d=n(e);if(!d)return;const c=d.$el;if(!c||!t&&(t=c.querySelector(".ant-table-body"),!t))return;const i=n(o);if(i)if(u==="top")s(i[0]);else if(u==="bottom")s(i[i.length-1]);else{const a=i.find(C=>C.id===u);a&&s(a)}}return{scrollTo:l}}function In(e,o,t){return!o||t?e[ee]:Be(o)?e[o]:q(o)?e[o(e)]:null}function Hn(e,{setSelectedRowKeys:o,getSelectRowKeys:t,getAutoCreateKey:s,clearSelectedRowKeys:l,emit:u}){return{customRow:(c,i)=>({onClick:a=>{a==null||a.stopPropagation();function C(){var A;const{rowSelection:k,rowKey:P,clickToRowSelect:g}=n(e);if(!k||!g)return;const p=t()||[],f=In(c,P,n(s));if(f===null)return;if(k.type==="checkbox"){const D=(A=a.composedPath)==null?void 0:A.call(a).find(j=>j.tagName==="TR");if(!D)return;const B=D.querySelector("input[type=checkbox]");if(!B||B.hasAttribute("disabled"))return;if(!p.includes(f)){p.push(f),o(p);return}const E=p.findIndex(j=>j===f);p.splice(E,1),o(p);return}if(k.type==="radio"){if(!p.includes(f)){p.length&&l(),o([f]);return}l()}}C(),u("row-click",c,i,a)},onDblclick:a=>{u("row-dbClick",c,i,a)},onContextmenu:a=>{u("row-contextmenu",c,i,a)},onMouseenter:a=>{u("row-mouseenter",c,i,a)},onMouseleave:a=>{u("row-mouseleave",c,i,a)}})}}function Pn(e,o){function t(s,l){const{striped:u,rowClassName:d}=n(e),c=[];return u&&c.push((l||0)%2===1?`${o}-row__striped`:""),d&&q(d)&&c.push(d(s,l)),c.filter(i=>!!i).join(" ")}return{getRowClassName:t}}function Dn(e,o,t,s,l,u){const d=$("Checkbox"),c=$("a-button"),i=$("DragOutlined"),a=$("Icon"),C=$("Tooltip"),k=$("Divider"),P=$("CheckboxGroup"),g=$("ScrollContainer"),p=$("SettingOutlined"),f=$("Popover");return K(),N(C,{placement:"top"},{title:v(()=>[te("span",null,V(e.t("component.table.settingColumn")),1)]),default:v(()=>[F(f,{placement:"bottomLeft",trigger:"click",onOpenChange:e.handleVisibleChange,overlayClassName:`${e.prefixCls}__cloumn-list`,getPopupContainer:e.getPopupContainer},{title:v(()=>[te("div",{class:ge(`${e.prefixCls}__popover-title`)},[F(d,{indeterminate:e.indeterminate,checked:e.checkAll,"onUpdate:checked":o[0]||(o[0]=h=>e.checkAll=h),onChange:e.onCheckAllChange},{default:v(()=>[fe(V(e.t("component.table.settingColumnShow")),1)]),_:1},8,["indeterminate","checked","onChange"]),F(d,{checked:e.checkIndex,"onUpdate:checked":o[1]||(o[1]=h=>e.checkIndex=h),onChange:e.handleIndexCheckChange},{default:v(()=>[fe(V(e.t("component.table.settingIndexColumnShow")),1)]),_:1},8,["checked","onChange"]),F(d,{checked:e.checkSelect,"onUpdate:checked":o[2]||(o[2]=h=>e.checkSelect=h),onChange:e.handleSelectCheckChange,disabled:!e.defaultRowSelection},{default:v(()=>[fe(V(e.t("component.table.settingSelectColumnShow")),1)]),_:1},8,["checked","onChange","disabled"]),F(c,{size:"small",type:"link",onClick:e.reset},{default:v(()=>[fe(V(e.t("common.resetText")),1)]),_:1},8,["onClick"])],2)]),content:v(()=>[F(g,null,{default:v(()=>[F(P,{value:e.checkedList,"onUpdate:value":o[3]||(o[3]=h=>e.checkedList=h),onChange:e.onChange,ref:"columnListRef"},{default:v(()=>[(K(!0),me(Ye,null,Ne(e.plainOptions,h=>(K(),me(Ye,{key:h.value},["ifShow"in h&&!h.ifShow?G("",!0):(K(),me("div",{key:0,class:ge(`${e.prefixCls}__check-item`)},[F(i,{class:"table-column-drag-icon"}),F(d,{value:h.value},{default:v(()=>[fe(V(h.label),1)]),_:2},1032,["value"]),F(C,{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:e.getPopupContainer},{title:v(()=>[fe(V(e.t("component.table.settingFixedLeft")),1)]),default:v(()=>[F(a,{icon:"line-md:arrow-align-left",class:ge([`${e.prefixCls}__fixed-left`,{active:h.fixed==="left",disabled:!e.checkedList.includes(h.value)}]),onClick:b=>e.handleColumnFixed(h,"left")},null,8,["class","onClick"])]),_:2},1032,["getPopupContainer"]),F(k,{type:"vertical"}),F(C,{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:e.getPopupContainer},{title:v(()=>[fe(V(e.t("component.table.settingFixedRight")),1)]),default:v(()=>[F(a,{icon:"line-md:arrow-align-left",class:ge([`${e.prefixCls}__fixed-right`,{active:h.fixed==="right",disabled:!e.checkedList.includes(h.value)}]),onClick:b=>e.handleColumnFixed(h,"right")},null,8,["class","onClick"])]),_:2},1032,["getPopupContainer"])],2))],64))),128))]),_:1},8,["value","onChange"])]),_:1})]),default:v(()=>[F(p)]),_:1},8,["onOpenChange","overlayClassName","getPopupContainer"])]),_:1})}const On=oe(xt,[["render",Dn]]);function An(e,o,t,s,l,u){const d=$("ColumnHeightOutlined"),c=$("MenuItem"),i=$("Menu"),a=$("Dropdown"),C=$("Tooltip");return K(),N(C,{placement:"top"},{title:v(()=>[te("span",null,V(e.t("component.table.settingDens")),1)]),default:v(()=>[F(a,{placement:"bottom",trigger:["click"],getPopupContainer:e.getPopupContainer},{overlay:v(()=>[F(i,{onClick:e.handleTitleClick,selectable:"",selectedKeys:e.selectedKeysRef,"onUpdate:selectedKeys":o[0]||(o[0]=k=>e.selectedKeysRef=k)},{default:v(()=>[F(c,{key:"default"},{default:v(()=>[te("span",null,V(e.t("component.table.settingDensDefault")),1)]),_:1}),F(c,{key:"middle"},{default:v(()=>[te("span",null,V(e.t("component.table.settingDensMiddle")),1)]),_:1}),F(c,{key:"small"},{default:v(()=>[te("span",null,V(e.t("component.table.settingDensSmall")),1)]),_:1})]),_:1},8,["onClick","selectedKeys"])]),default:v(()=>[F(d)]),_:1},8,["getPopupContainer"])]),_:1})}const Kn=oe(en,[["render",An]]),Ln=Ce({name:"RedoSetting",components:{RedoOutlined:rn,Tooltip:at},setup(){const e=ze(),{t:o}=Te();function t(){e.reload()}return{redo:t,t:o}}});function Bn(e,o,t,s,l,u){const d=$("RedoOutlined"),c=$("Tooltip");return K(),N(c,{placement:"top"},{title:v(()=>[te("span",null,V(e.t("common.redo")),1)]),default:v(()=>[F(d,{onClick:e.redo},null,8,["onClick"])]),_:1})}const En=oe(Ln,[["render",Bn]]),Mn=Ce({name:"FullScreenSetting",components:{FullscreenExitOutlined:cn,FullscreenOutlined:un,Tooltip:at},setup(){const e=ze(),{t:o}=Te(),{toggle:t,isFullscreen:s}=Wt(e.wrapRef);return{toggle:t,isFullscreen:s,t:o}}});function Nn(e,o,t,s,l,u){const d=$("FullscreenOutlined"),c=$("FullscreenExitOutlined"),i=$("Tooltip");return K(),N(i,{placement:"top"},{title:v(()=>[te("span",null,V(e.t("component.table.settingFullScreen")),1)]),default:v(()=>[e.isFullscreen?(K(),N(c,{key:1,onClick:e.toggle},null,8,["onClick"])):(K(),N(d,{key:0,onClick:e.toggle},null,8,["onClick"]))]),_:1})}const zn=oe(Mn,[["render",Nn]]),Vn=Ce({name:"TableSetting",components:{ColumnSetting:On,SizeSetting:Kn,RedoSetting:En,FullScreenSetting:zn},props:{setting:{type:Object,default:()=>({})}},emits:["columns-change"],setup(e,{emit:o}){const{t}=Te(),s=ze(),l=_(()=>H({redo:!0,size:!0,setting:!0,fullScreen:!1},e.setting));function u(c){o("columns-change",c)}function d(){return s?n(s.wrapRef):document.body}return{getSetting:l,t,handleColumnChange:u,getTableContainer:d}}}),Wn={class:"table-settings"};function jn(e,o,t,s,l,u){const d=$("RedoSetting"),c=$("SizeSetting"),i=$("ColumnSetting"),a=$("FullScreenSetting");return K(),me("div",Wn,[e.getSetting.redo?(K(),N(d,{key:0,getPopupContainer:e.getTableContainer},null,8,["getPopupContainer"])):G("",!0),e.getSetting.size?(K(),N(c,{key:1,getPopupContainer:e.getTableContainer},null,8,["getPopupContainer"])):G("",!0),e.getSetting.setting?(K(),N(i,{key:2,onColumnsChange:e.handleColumnChange,getPopupContainer:e.getTableContainer},null,8,["onColumnsChange","getPopupContainer"])):G("",!0),e.getSetting.fullScreen?(K(),N(a,{key:3,getPopupContainer:e.getTableContainer},null,8,["getPopupContainer"])):G("",!0)])}const qn=oe(Vn,[["render",jn]]),Un=Ce({name:"BasicTableTitle",components:{BasicTitle:jt},props:{title:{type:[Function,String]},getSelectRows:{type:Function},helpMessage:{type:[String,Array]}},setup(e){const{prefixCls:o}=Le("basic-table-title");return{getTitle:_(()=>{const{title:s,getSelectRows:l=()=>{}}=e;let u=s;return q(s)&&(u=s({selectRows:l()})),u}),prefixCls:o}}});function Gn(e,o,t,s,l,u){const d=$("BasicTitle");return e.getTitle?(K(),N(d,{key:0,class:ge(e.prefixCls),helpMessage:e.helpMessage},{default:v(()=>[fe(V(e.getTitle),1)]),_:1},8,["class","helpMessage"])):G("",!0)}const Xn=oe(Un,[["render",Gn]]),Zn=Ce({name:"BasicTableHeader",components:{Divider:fn,TableTitle:Xn,TableSetting:qn},props:{title:{type:[Function,String]},tableSetting:{type:Object},showTableSetting:{type:Boolean},titleHelpMessage:{type:[String,Array],default:""}},emits:["columns-change"],setup(e,{emit:o}){const{prefixCls:t}=Le("basic-table-header");function s(l){o("columns-change",l)}return{prefixCls:t,handleColumnChange:s}}}),Yn={style:{width:"100%"}},Jn={key:0,style:{margin:"5px"}},Qn={class:"flex items-center"};function xn(e,o,t,s,l,u){const d=$("TableTitle"),c=$("Divider"),i=$("TableSetting");return K(),me("div",Yn,[e.$slots.headerTop?(K(),me("div",Jn,[he(e.$slots,"headerTop")])):G("",!0),te("div",Qn,[e.$slots.tableTitle?he(e.$slots,"tableTitle",{key:0}):G("",!0),!e.$slots.tableTitle&&e.title?(K(),N(d,{key:1,helpMessage:e.titleHelpMessage,title:e.title},null,8,["helpMessage","title"])):G("",!0),te("div",{class:ge(`${e.prefixCls}__toolbar`)},[he(e.$slots,"toolbar"),e.$slots.toolbar&&e.showTableSetting?(K(),N(c,{key:0,type:"vertical"})):G("",!0),e.showTableSetting?(K(),N(i,{key:1,setting:e.tableSetting,onColumnsChange:e.handleColumnChange},null,8,["setting","onColumnsChange"])):G("",!0)],2)])])}const eo=oe(Zn,[["render",xn]]);function to(e,o,t){return{getHeaderProps:_(()=>{const{title:l,showTableSetting:u,titleHelpMessage:d,tableSetting:c}=n(e),i=!o.tableTitle&&!l&&!o.toolbar&&!u;return i&&!Be(l)?{}:{title:i?null:()=>Ve(eo,{title:l,titleHelpMessage:d,showTableSetting:u,tableSetting:c,onColumnsChange:t.onColumnsChange},H(H(H({},o.toolbar?{toolbar:()=>Me(o,"toolbar")}:{}),o.tableTitle?{tableTitle:()=>Me(o,"tableTitle")}:{}),o.headerTop?{headerTop:()=>Me(o,"headerTop")}:{}))}})}}function no(e,o,t){const s=W([]),l=_(()=>n(e).autoCreateKey&&!n(e).rowKey),u=_(()=>{const{rowKey:k}=n(e);return n(l)?ee:k}),d=_(()=>{const{isTreeTable:k}=n(e);return k?{expandedRowKeys:n(s),onExpandedRowsChange:P=>{s.value=P,t("expanded-rows-change",P)}}:{}});function c(){const k=a();s.value=k}function i(k){const{isTreeTable:P}=n(e);P&&(s.value=[...s.value,...k])}function a(k){const P=[],{childrenColumnName:g}=n(e);return de(k||n(o)).forEach(p=>{P.push(p[n(u)]);const f=p[g||"children"];f!=null&&f.length&&P.push(...a(f))}),P}function C(){s.value=[]}return{getExpandOption:d,expandAll:c,expandRows:i,collapseAll:C}}function oo(e,o,t,s,l,u){const d=$("Table");return e.summaryFunc||e.summaryData?(K(),N(d,{key:0,showHeader:!1,bordered:!1,pagination:!1,dataSource:e.getDataSource,rowKey:c=>c[e.rowKey],columns:e.getColumns,tableLayout:"fixed",scroll:e.scroll},null,8,["dataSource","rowKey","columns","scroll"])):G("",!0)}const ao=oe(tn,[["render",oo]]);function lo(e,o,t,s){const l=_(()=>(n(s)||[]).length===0),u=_(()=>{const{summaryFunc:c,showSummary:i,summaryData:a}=n(e);return i&&!n(l)?()=>Ve(ao,{summaryFunc:c,summaryData:a,scroll:n(o)}):void 0});We(()=>{d()});function d(){const{showSummary:c}=n(e);!c||n(l)||ye(()=>{const i=n(t);if(!i)return;const a=i.$el.querySelector(".ant-table-content");qt({el:a,name:"scroll",listener:()=>{const C=i.$el.querySelector(".ant-table-footer .ant-table-content");!C||!a||(C.scrollLeft=a.scrollLeft)},wait:0,options:!0})})}return{getFooterProps:u}}function so(e,o,t,s){const l=_(()=>{const{formConfig:i}=n(e),{submitButtonOptions:a}=i||{};return ue(H({showAdvancedButton:!0},i),{submitButtonOptions:H({loading:n(s)},a),compact:!0})}),u=_(()=>Object.keys(o).map(a=>a.startsWith("form-")?a:null).filter(a=>!!a));function d(i){var a,C;return i&&(C=(a=i==null?void 0:i.replace)==null?void 0:a.call(i,/form-/,""))!=null?C:""}function c(i){const{handleSearchInfoFn:a}=n(e);a&&q(a)&&(i=a(i)||i),t({searchInfo:i,page:1})}return{getFormProps:l,replaceFormSlotKey:d,getFormSlotKeys:u,handleSearchInfoChange:c}}const io=Ce({name:"BasicTable",components:{Table:dn,BasicForm:It,HeaderCell:pn},props:nn,emits:["fetch-success","fetch-error","selection-change","register","row-click","row-dbClick","row-contextmenu","row-mouseenter","row-mouseleave","edit-end","edit-cancel","edit-row-end","edit-change","expanded-rows-change","change","columns-change"],setup(e,{attrs:o,emit:t,slots:s,expose:l}){const u=W(null),d=W([]),c=W(null),i=W(null),a=W(),{prefixCls:C}=Le("basic-table"),[k,P]=At(),g=_(()=>H(H({},e),n(a))),p=Zt(Ut,!1);We(()=>{n(p)&&e.canResize&&Gt()});const{getLoading:f,setLoading:h}=$n(g),{getPaginationInfo:b,getPagination:A,setPagination:D,setShowPagination:B,getShowPagination:E}=bn(g),{getRowSelection:j,getRowSelectionRef:ae,getSelectRows:y,setSelectedRows:w,clearSelectedRowKeys:r,getSelectRowKeys:m,deleteSelectRowByKey:S,setSelectedRowKeys:R}=kn(g,d,t),{handleTableChange:O,getDataSourceRef:I,getDataSource:L,getRawDataSource:T,setTableData:Z,updateTableDataRecord:M,deleteTableDataRecord:U,insertTableDataRecord:le,findTableDataRecord:J,fetch:Q,getRowKey:se,reload:x,getAutoCreateKey:ie,updateTableData:ve}=Rn(g,{tableData:d,getPaginationInfo:b,setLoading:h,setPagination:D,getFieldsValue:P.getFieldsValue,clearSelectedRowKeys:r},t);function Re(...z){O.call(void 0,...z),t("change",...z);const{onChange:Y}=n(g);Y&&q(Y)&&Y.call(void 0,...z)}const{getViewColumns:$e,getColumns:Ee,setCacheColumnsByField:be,setCacheColumns:re,setColumns:ke,getColumnsRef:ce,getCacheColumns:Se}=Tn(g,b),{getScrollRef:we,redoHeight:je}=Fn(g,u,ce,ae,I,c,i),{scrollTo:it}=_n(u,I),{customRow:rt}=Hn(g,{setSelectedRowKeys:R,getSelectRowKeys:m,clearSelectedRowKeys:r,getAutoCreateKey:ie,emit:t}),{getRowClassName:ct}=Pn(g,C),{getExpandOption:ut,expandAll:ft,expandRows:dt,collapseAll:gt}=no(g,d,t),ht={onColumnsChange:z=>{var Y,qe;t("columns-change",z),(qe=(Y=n(g)).onColumnsChange)==null||qe.call(Y,z)}},{getHeaderProps:mt}=to(g,s,ht),{getFooterProps:pt}=lo(g,we,u,I),{getFormProps:Ct,replaceFormSlotKey:bt,getFormSlotKeys:St,handleSearchInfoChange:yt}=so(g,s,Q,f),Fe=_(()=>{const z=n(I);let Y=H(ue(H(H(ue(H({},o),{customRow:rt}),n(g)),n(mt)),{scroll:n(we),loading:n(f),tableLayout:"fixed",rowSelection:n(ae),rowKey:n(se),columns:de(n($e)),pagination:de(n(b)),dataSource:z,footer:n(pt)}),n(ut));return Y=ot(Y,["class","onChange"]),Y}),wt=_(()=>{const z=n(Fe);return[C,o.class,{[`${C}-form-container`]:z.useSearchForm,[`${C}--inset`]:z.inset}]}),Tt=_(()=>{const{emptyDataIsShowTable:z,useSearchForm:Y}=n(g);return z||!Y?!0:!!n(I).length});function vt(z){a.value=H(H({},n(a)),z)}const _e={reload:x,getSelectRows:y,setSelectedRows:w,clearSelectedRowKeys:r,getSelectRowKeys:m,deleteSelectRowByKey:S,setPagination:D,setTableData:Z,updateTableDataRecord:M,deleteTableDataRecord:U,insertTableDataRecord:le,findTableDataRecord:J,redoHeight:je,setSelectedRowKeys:R,setColumns:ke,setLoading:h,getDataSource:L,getRawDataSource:T,setProps:vt,getRowSelection:j,getPaginationRef:A,getColumns:Ee,getCacheColumns:Se,emit:t,updateTableData:ve,setShowPagination:B,getShowPagination:E,setCacheColumnsByField:be,expandAll:ft,expandRows:dt,collapseAll:gt,scrollTo:it,getSize:()=>n(Fe).size,setCacheColumns:re};return Ot(ue(H({},_e),{wrapRef:c,getBindValues:Fe})),l(_e),t("register",_e,P),{formRef:i,tableElRef:u,getBindValues:Fe,getLoading:f,registerForm:k,handleSearchInfoChange:yt,getEmptyDataIsShowTable:Tt,handleTableChange:Re,getRowClassName:ct,wrapRef:c,tableAction:_e,redoHeight:je,getFormProps:Ct,replaceFormSlotKey:bt,getFormSlotKeys:St,getWrapperClass:wt,columns:$e}}});function ro(e,o,t,s,l,u){const d=$("BasicForm"),c=$("HeaderCell"),i=$("Table");return K(),me("div",{ref:"wrapRef",class:ge(e.getWrapperClass)},[e.getBindValues.useSearchForm?(K(),N(d,Qe({key:0,ref:"formRef",submitOnReset:""},e.getFormProps,{tableAction:e.tableAction,onRegister:e.registerForm,onSubmit:e.handleSearchInfoChange,onAdvancedChange:e.redoHeight}),Je({_:2},[Ne(e.getFormSlotKeys,a=>({name:e.replaceFormSlotKey(a),fn:v(C=>[he(e.$slots,a,Ie(He(C||{})))])}))]),1040,["tableAction","onRegister","onSubmit","onAdvancedChange"])):G("",!0),Yt(F(i,Qe({ref:"tableElRef"},e.getBindValues,{rowClassName:e.getRowClassName,onChange:e.handleTableChange}),Je({headerCell:v(({column:a})=>[he(e.$slots,"headerCell",Ie(He({column:a})),()=>[F(c,{column:a},null,8,["column"])])]),bodyCell:v(a=>[he(e.$slots,"bodyCell",Ie(He(a||{})))]),_:2},[Ne(Object.keys(e.$slots),a=>({name:a,fn:v(C=>[he(e.$slots,a,Ie(He(C||{})))])}))]),1040,["rowClassName","onChange"]),[[Jt,e.getEmptyDataIsShowTable]])],2)}const Ro=oe(io,[["render",ro]]);export{Ro as B,pn as _};