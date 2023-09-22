import{P as W}from"./index-ba6fd08d.js";import{d as D,a7 as M,q as X,Z as L,a8 as Y,a9 as A,n as S,_ as q,E as F}from"./vue-07f122e3.js";import{a as H}from"./index.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";import"./antd-5ec2f20c.js";const m={event:"mousedown",transition:400},b={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");V(Object.keys(t.modifiers),m);const i=o||b.background,r=b.zIndex;e.addEventListener(m.event,d=>{I({event:d,el:e,background:i,zIndex:r})})},updated(e,t){var i,r;if(!t.value){(i=e==null?void 0:e.clearRipple)==null||i.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function I({event:e,el:t,zIndex:o,background:i}){var R,w;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:C,top:T}=g,{offsetWidth:x,offsetHeight:_}=t,{transition:B}=m,u=d-C,l=f-T,y=Math.max(u,x-u),$=Math.max(l,_-l),N=window.getComputedStyle(t),h=Math.sqrt(y*y+$*$),E=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((R=a.style)!=null?R:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${B}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:i!=null?i:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((w=n.style)!=null?w:{},{position:"absolute",left:`${0-E}px`,top:`${0-E}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${l}px`,marginLeft:`${u}px`});const{borderTopLeftRadius:k,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}=N;Object.assign(n.style,{width:`${x}px`,height:`${_}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}),setTimeout(()=>{var p;const s=`${h*2}px`;Object.assign((p=a.style)!=null?p:{},{width:s,height:s,marginLeft:`${u-h}px`,marginTop:`${l-h}px`})},0);function c(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var s;(s=n==null?void 0:n.parentNode)==null||s.removeChild(n)},850),t.removeEventListener("mouseup",c,!1),t.removeEventListener("mouseleave",c,!1),t.removeEventListener("dragstart",c,!1),setTimeout(()=>{let s=!0;for(let p=0;p<t.childNodes.length;p++)t.childNodes[p].className==="ripple-container"&&(s=!1);s&&(t.style.position=v!=="static"?v:"")},m.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",c,!1),t.addEventListener("mouseleave",c,!1),t.addEventListener("dragstart",c,!1)):c(),t.setBackground=s=>{s&&(a.style.backgroundColor=s)}}function V(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const Z=b,z=D({components:{PageWrapper:W},directives:{Ripple:Z}});const G={class:"demo-box"};function J(e,t,o,i,r,d){const f=M("PageWrapper"),g=X("ripple");return L(),Y(f,{title:"Ripple示例"},{default:A(()=>[S((L(),q("div",G,[F("content")])),[[g]])]),_:1})}const it=H(z,[["render",J],["__scopeId","data-v-24fa6bd6"]]);export{it as default};
