import{C as W,c as v,a as S}from"./index.js";import{P as T}from"./index-ba6fd08d.js";import{d as I,a7 as c,Z as b,a8 as y,a9 as e,l as o,E as a}from"./vue-07f122e3.js";import"./antd-5ec2f20c.js";import"./useContentViewHeight-cfa41a84.js";import"./useWindowSizeFn-46595a7c.js";import"./onMountedOrActivated-2ea9d019.js";const N=I({components:{CollapseContainer:W,PageWrapper:T},setup(){const{createMessage:s,createConfirm:n,createSuccessModal:d,createInfoModal:u,createErrorModal:f,createWarningModal:m,notification:r}=v(),{info:t,success:i,warning:l,error:g}=s;function p(){s.loading("Loading...")}function C(h){n({iconType:h,title:"Tip",content:"content message..."})}function M(){d({title:"Tip",content:"content message..."})}function k(){f({title:"Tip",content:"content message..."})}function w(){m({title:"Tip",content:"content message..."})}function E(){u({title:"Tip",content:"content message..."})}function $(){r.success({message:"Tip",description:"content message..."})}return{infoMsg:t,successMsg:i,warningMsg:l,errorMsg:g,handleLoading:p,handleConfirm:C,handleSuccessModal:M,handleErrorModal:k,handleWarningModal:w,handleInfoModal:E,handleNotify:$}}});function L(s,n,d,u,f,m){const r=c("a-button"),t=c("CollapseContainer"),i=c("PageWrapper");return b(),y(i,{title:"消息示例"},{default:e(()=>[o(t,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:e(()=>[o(r,{onClick:n[0]||(n[0]=l=>s.infoMsg("Info message")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[1]||(n[1]=l=>s.successMsg("Success message")),class:"mr-2",color:"success"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[2]||(n[2]=l=>s.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[3]||(n[3]=l=>s.errorMsg("Error message")),class:"mr-2",color:"error"},{default:e(()=>[a(" Error ")]),_:1}),o(r,{onClick:s.handleLoading,class:"mr-2",type:"primary"},{default:e(()=>[a(" Loading ")]),_:1},8,["onClick"])]),_:1}),o(t,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:e(()=>[o(r,{onClick:n[4]||(n[4]=l=>s.handleConfirm("info")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[5]||(n[5]=l=>s.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[6]||(n[6]=l=>s.handleConfirm("success")),color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[7]||(n[7]=l=>s.handleConfirm("error")),color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1})]),_:1}),o(t,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:e(()=>[o(r,{onClick:s.handleInfoModal,class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleSuccessModal,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleErrorModal,color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleWarningModal,color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1},8,["onClick"])]),_:1}),o(t,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:e(()=>[o(r,{onClick:s.handleNotify,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"])]),_:1})]),_:1})}const Z=S(N,[["render",L]]);export{Z as default};