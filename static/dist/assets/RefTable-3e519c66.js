import{B as D}from"./BasicTable-fe9d6b51.js";import"./componentMap-7c245921.js";import"./TableImg.vue_vue_type_style_index_0_lang-b1be1ff9.js";import{getBasicColumns as f,getBasicShortColumns as h}from"./tableData-6af6e925.js";import{c as R,a as E}from"./index.js";import{d as F}from"./table-9286518d.js";import{d as S,f as T,u as y,a7 as p,Z as L,_ as A,$ as C,l as t,a9 as n,E as a}from"./vue-07f122e3.js";import"./BasicForm-fa347ab4.js";import"./FormItem.vue_vue_type_script_lang-5952516d.js";import"./helper-ea64bd4c.js";import"./antd-5ec2f20c.js";import"./BasicForm.vue_vue_type_style_index_0_lang-79990f37.js";import"./index-867933e1.js";import"./useWindowSizeFn-46595a7c.js";import"./useForm-41f04ca1.js";import"./RadioButtonGroup-7710ecaa.js";import"./useFormItem-7245b14a.js";import"./EditTableHeaderIcon-11f75150.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-2ea9d019.js";import"./download-a1d50707.js";import"./base64Conver-39fc0d26.js";import"./index-b5f8e34a.js";import"./index-5b4b6d03.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const K=S({components:{BasicTable:D},setup(){const e=T(null),{createMessage:u}=R();function i(){const m=y(e);if(!m)throw new Error("tableAction is null");return m}function s(){i().setLoading(!0),setTimeout(()=>{i().setLoading(!1)},1e3)}function c(){i().setProps({columns:h(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function r(){i().setProps({columns:f(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),i().reload({page:1})}function o(){u.info("请在控制台查看！")}function l(){u.info("请在控制台查看！")}function d(){u.info("请在控制台查看！")}function g(){u.info("请在控制台查看！")}function k(){i().setPagination({current:2}),i().reload()}function b(){u.info("请在控制台查看！")}function B(){u.info("请在控制台查看！")}function w(){i().setSelectedRowKeys(["0","1","2"])}function _(){i().clearSelectedRowKeys()}return{tableRef:e,api:F,columns:f(),changeLoading:s,changeColumns:c,reloadTable:r,getColumn:o,getTableData:l,getTableRawData:d,getPagination:g,setPaginationInfo:k,getSelectRowList:b,getSelectRowKeyList:B,setSelectedRowKeyList:w,clearSelect:_}}}),P={class:"p-4"},$={class:"mb-4"},v={class:"mb-4"};function I(e,u,i,s,c,r){const o=p("a-button"),l=p("BasicTable");return L(),A("div",P,[C("div",$,[t(o,{class:"mr-2",onClick:e.reloadTable},{default:n(()=>[a(" 还原 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeLoading},{default:n(()=>[a(" 开启loading ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeColumns},{default:n(()=>[a(" 更改Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getColumn},{default:n(()=>[a(" 获取Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableData},{default:n(()=>[a(" 获取表格数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableRawData},{default:n(()=>[a(" 获取接口原始数据 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setPaginationInfo},{default:n(()=>[a(" 跳转到第2页 ")]),_:1},8,["onClick"])]),C("div",v,[t(o,{class:"mr-2",onClick:e.getSelectRowList},{default:n(()=>[a(" 获取选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:n(()=>[a(" 获取选中行Key ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:n(()=>[a(" 设置选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.clearSelect},{default:n(()=>[a(" 清空选中行 ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getPagination},{default:n(()=>[a(" 获取分页信息 ")]),_:1},8,["onClick"])]),t(l,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}const ce=E(K,[["render",I]]);export{ce as default};
