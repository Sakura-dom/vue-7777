import{d as J,r as h,b as U,c as r,o as u,e as n,f as e,i as s,j as i,g as m,G as d,E as x,S as X,F as Z,p as T,s as b,m as v,t as o,h as a}from"./vendor.f0b6f500.js";import{b as tt,V as et,i as ot,W as st,c as ut}from"./index.4d4884a7.js";const nt={class:"createExam"},at={class:"blockBox"},ct=e("span",{class:"spanImg"},[e("img",{alt:""})],-1),it={class:"top"},lt={class:"left"},_t=e("span",null,"\u56DE\u6536\u7AD9",-1),dt={class:"max-box"},rt={class:"leftNav"},pt={class:"dis"},ht=e("p",{class:"p"},"\u8003\u8BD5\u9898\u578B",-1),wt={class:"list"},Ft=["onClick"],ft={class:"huishouBox"},vt={class:"buttonBox"},gt=v("\u6279\u91CF\u5F7B\u5E95\u5220\u9664"),At=v("\u6279\u91CF\u6062\u590D"),mt={key:0,class:"details"},Bt={class:"one"},yt={class:"appq"},Et={class:"appq"},kt={class:"appq"},Dt={class:"appq"},qt={key:0,class:"appq"},xt={key:1,class:"appq"},bt={key:2,class:"appq"},Ct={key:3,class:"appq"},zt={key:4,class:"appq"},Gt={key:5,class:"appq"},Nt={key:6,class:"appq"},It={class:"two"},St={class:"appq"},Lt={class:"appq"},Vt={class:"appq"},Ht={key:1,class:"details"},Ot={class:"one"},$t={class:"appq"},jt={class:"appq"},Kt={class:"appq"},Mt={class:"appq"},Qt={key:0,class:"appq"},Yt={key:1,class:"appq"},Pt={key:2,class:"appq"},Rt={key:3,class:"appq"},Wt={key:4,class:"appq"},Jt={key:5,class:"appq"},Ut={key:6,class:"appq"},Xt={class:"two"},Zt={class:"appq"},Tt={class:"appq"},te={class:"appq"},ee={key:2,class:"details"},oe={class:"one"},se={class:"appq"},ue={class:"two"},ne={class:"appq"},ae={class:"appq"},ce={class:"appq"},ie={key:3,class:"details"},le={class:"one"},_e={class:"appq"},de={class:"two"},re={class:"appq"},pe={class:"appq"},he={class:"appq"},we={key:4,class:"details"},Fe={class:"one"},fe={class:"appq"},ve={class:"two"},ge={class:"appq"},Ae={class:"appq"},me=v("\u5F7B\u5E95\u5220\u9664"),Be=v("\u6062\u590D");var k=(l=>(l[l.\u5355\u9009\u9898=0]="\u5355\u9009\u9898",l[l.\u591A\u9009\u9898=1]="\u591A\u9009\u9898",l[l.\u586B\u7A7A\u9898=2]="\u586B\u7A7A\u9898",l[l.\u7B80\u7B54\u9898=3]="\u7B80\u7B54\u9898",l[l.\u5224\u65AD\u9898=4]="\u5224\u65AD\u9898",l))(k||{});const De=J({setup(l){const w=h([]),C=c=>{w.value=c,console.log(w.value)},B=h(10),y=h([1]),z=c=>{console.log(`${c} items per page`)},G=c=>{y.value=c},N=U(),I=()=>{N.go(-1)},S=h([{topic:"\u5168\u90E8",index:0,icon:"iconfont icon-danxuan"},{topic:"\u5355\u9009\u9898",index:1,icon:"iconfont icon-danxuan"},{topic:"\u591A\u9009\u9898",index:2,icon:"iconfont icon-duoxuantiankong"},{topic:"\u586B\u7A7A\u9898",index:3,icon:"iconfont icon-tiankongti1"},{topic:"\u7B80\u7B54\u9898",index:4,icon:"iconfont icon-jiandati"},{topic:"\u5224\u65AD\u9898",index:5,icon:"iconfont icon-panduanshifoucunzai"}]);let D=h(0),A=h([]),F=h([]);const g=async()=>{let c=await tt({});console.log(c),A.value=c.data,F.value=A.value.filter(_=>{if(_.ischeck==="false")return _}),console.log(156454),console.log(F.value)};g();const L=c=>{D.value=c,console.log(k[c-1]),c===0?F.value=A.value.filter(_=>{if(_.ischeck==="false")return _}):F.value=A.value.filter(_=>{if(_.ischeck==="false"&&_.type===k[c-1])return _})},V=async c=>{console.log("confirm!"),await st({id:c}),g(),d({type:"success",message:"\u5220\u9664\u6210\u529F"})},H=()=>{console.log("cancel!"),d({type:"info",message:"\u5DF2\u53D6\u6D88"})},O=async c=>{console.log("confirm!"),await ut({id:c,ischeck:"true"}),g(),d({type:"success",message:"\u6062\u590D\u6210\u529F"})},$=()=>{console.log("cancel!"),d({type:"info",message:"\u5DF2\u53D6\u6D88"})},j=async()=>{w.value.length===0?d({showClose:!0,message:"\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u8BD5\u9898",type:"warning"}):x.confirm("\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u5417?","\u63D0\u793A",{confirmButtonText:"OK",cancelButtonText:"NO",type:"warning"}).then(async()=>{await et({list:w.value}),g(),d({type:"success",message:"\u5220\u9664\u6210\u529F"})}).catch(()=>{d({type:"info",message:"\u5DF2\u53D6\u6D88"})})},K=async()=>{w.value.length===0?d({showClose:!0,message:"\u8BF7\u9009\u62E9\u9700\u8981\u6062\u590D\u7684\u8BD5\u9898",type:"warning"}):x.confirm("\u786E\u5B9A\u8981\u6062\u590D\u9009\u4E2D\u7684\u5417?","\u63D0\u793A",{confirmButtonText:"OK",cancelButtonText:"NO",type:"warning"}).then(async()=>{await ot({ischeck:w.value,all:"true"}),g(),d({type:"success",message:"\u6062\u590D\u6210\u529F"})}).catch(()=>{d({type:"info",message:"\u5DF2\u53D6\u6D88"})})};return(c,_)=>{const M=r("el-drawer"),Q=r("el-icon"),Y=r("el-tab-pane"),P=r("el-tabs"),f=r("el-button"),p=r("el-table-column"),q=r("el-popconfirm"),R=r("el-table"),W=r("el-pagination");return u(),n("div",nt,[e("div",at,[s(M,null,{default:i(()=>[ct]),_:1})]),e("div",it,[e("div",lt,[s(Q,{onClick:I},{default:i(()=>[s(m(X))]),_:1}),_t])]),e("div",dt,[e("div",rt,[s(P,{type:"border-card",class:"demo-tabs"},{default:i(()=>[s(Y,{label:"\u9898\u578B"},{default:i(()=>[e("div",pt,[ht,e("ul",wt,[(u(!0),n(Z,null,T(S.value,(t,E)=>(u(),n("li",{key:E,class:b(m(D)===t.index?"active":"")},[e("button",{style:{color:"#909090"},onClick:ye=>L(t.index)},[e("span",{class:b(t.icon)},null,2),v(" "+o(t.topic),1)],8,Ft)],2))),128))])])]),_:1})]),_:1})]),e("div",ft,[e("div",vt,[s(f,{onClick:j},{default:i(()=>[gt]),_:1}),s(f,{onClick:K},{default:i(()=>[At]),_:1})]),s(R,{data:m(F).slice((y.value-1)*B.value,y.value*B.value),style:{width:"100%"},onSelectionChange:C},{default:i(()=>[s(p,{type:"expand"},{default:i(t=>[t.row.type==="\u5355\u9009\u9898"?(u(),n("div",mt,[e("div",Bt,[e("p",yt,"\u9898\u5E72\uFF1A"+o(t.row.topic_nav),1),e("p",Et,o(t.row.optionA),1),e("p",kt,o(t.row.optionB),1),e("p",Dt,o(t.row.optionC),1),t.row.optionD!==""?(u(),n("p",qt,o(t.row.optionD),1)):a("",!0),t.row.optionE!==""?(u(),n("p",xt,o(t.row.optionE),1)):a("",!0),t.row.optionF!==""?(u(),n("p",bt,o(t.row.optionF),1)):a("",!0),t.row.optionG!==""?(u(),n("p",Ct,o(t.row.optionG),1)):a("",!0),t.row.optionH!==""?(u(),n("p",zt,o(t.row.optionH),1)):a("",!0),t.row.optionI!==""?(u(),n("p",Gt,o(t.row.optionI),1)):a("",!0),t.row.optionG!==""?(u(),n("p",Nt,o(t.row.optionG),1)):a("",!0)]),e("div",It,[e("p",St,"\u7B54\u6848\uFF1A"+o(t.row.answer),1),e("p",Lt,"\u4E13\u4E1A\uFF1A"+o(t.row.stage),1),e("p",Vt,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+o(t.row.create_time),1)])])):a("",!0),t.row.type==="\u591A\u9009\u9898"?(u(),n("div",Ht,[e("div",Ot,[e("p",$t,"\u9898\u5E72\uFF1A"+o(t.row.topic_nav),1),e("p",jt,o(t.row.optionA),1),e("p",Kt,o(t.row.optionB),1),e("p",Mt,o(t.row.optionC),1),t.row.optionD!==""?(u(),n("p",Qt,o(t.row.optionD),1)):a("",!0),t.row.optionE!==""?(u(),n("p",Yt,o(t.row.optionE),1)):a("",!0),t.row.optionF!==""?(u(),n("p",Pt,o(t.row.optionF),1)):a("",!0),t.row.optionG!==""?(u(),n("p",Rt,o(t.row.optionG),1)):a("",!0),t.row.optionH!==""?(u(),n("p",Wt,o(t.row.optionH),1)):a("",!0),t.row.optionI!==""?(u(),n("p",Jt,o(t.row.optionI),1)):a("",!0),t.row.optionG!==""?(u(),n("p",Ut,o(t.row.optionG),1)):a("",!0)]),e("div",Xt,[e("p",Zt,"\u7B54\u6848\uFF1A"+o(t.row.answer),1),e("p",Tt,"\u4E13\u4E1A\uFF1A"+o(t.row.stage),1),e("p",te,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+o(t.row.create_time),1)])])):a("",!0),t.row.type==="\u5224\u65AD\u9898"?(u(),n("div",ee,[e("div",oe,[e("p",se,"\u9898\u5E72\uFF1A"+o(t.row.topic_nav),1)]),e("div",ue,[e("p",ne,"\u7B54\u6848\uFF1A"+o(t.row.estimate_true==="\u662F"?"\u662F":"\u5426"),1),e("p",ae,"\u4E13\u4E1A\uFF1A"+o(t.row.stage),1),e("p",ce,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+o(t.row.create_time),1)])])):a("",!0),t.row.type==="\u7B80\u7B54\u9898"?(u(),n("div",ie,[e("div",le,[e("p",_e,"\u9898\u5E72\uFF1A"+o(t.row.topic_nav),1)]),e("div",de,[e("p",re,"\u7B54\u6848\uFF1A"+o(t.row.answer),1),e("p",pe,"\u4E13\u4E1A\uFF1A"+o(t.row.stage),1),e("p",he,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+o(t.row.create_time),1)])])):a("",!0),t.row.type==="\u586B\u7A7A\u9898"?(u(),n("div",we,[e("div",Fe,[e("p",fe,"\u9898\u5E72\uFF1A"+o(t.row.fill_text),1)]),e("div",ve,[e("p",ge,"\u4E13\u4E1A\uFF1A"+o(t.row.stage),1),e("p",Ae,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+o(t.row.create_time),1)])])):a("",!0)]),_:1}),s(p,{type:"selection",width:"55"}),s(p,{label:"\u8BD5\u9898\u5185\u5BB9",width:"150"},{default:i(t=>[v(o(t.row.topic_nav),1)]),_:1}),s(p,{label:"\u9898\u578B",prop:"type"}),s(p,{label:"\u4E13\u4E1A",prop:"stage"}),s(p,{label:"\u521B\u5EFA\u4EBA",prop:"author"}),s(p,{label:"\u521B\u5EFA\u65F6\u95F4",sortable:"",prop:"create_time"}),s(p,{label:"\u64CD\u4F5C"},{default:i(t=>[s(f,{type:"text",size:"small"},{default:i(()=>[s(q,{class:"deke","confirm-button-text":"Yes","cancel-button-text":"No",icon:"InfoFilled","icon-color":"red",title:"\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u5417?",onConfirm:E=>V(t.row.id),onCancel:H},{reference:i(()=>[s(f,{style:{color:"#45a1ff","font-size":"13px"}},{default:i(()=>[me]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024),s(f,{type:"text",size:"small"},{default:i(()=>[s(q,{class:"deke","confirm-button-text":"Yes","cancel-button-text":"No",icon:"InfoFilled","icon-color":"red",title:"\u786E\u5B9A\u8981\u6062\u590D\u5417?",onConfirm:E=>O(t.row.id),onCancel:$},{reference:i(()=>[s(f,{style:{color:"#45a1ff","font-size":"13px"}},{default:i(()=>[Be]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),s(W,{class:"pageListAll",background:"",layout:"prev,pager,next",onSizeChange:z,onCurrentChange:G,total:m(F).length,"page-size":B.value},null,8,["total","page-size"])])])])}}});export{De as default};
