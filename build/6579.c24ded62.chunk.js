"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6579,6619],{96579:(V,f,s)=>{s.d(f,{ProtectedCreateView:()=>G});var t=s(92132),M=s(89167),m=s(82437),v=s(5035),A=s(6619),g=s(21272),c=s(72810),l=s(18022),_=s(69969),D=s(15126),d=s(63299),n=s(67014),N=s(59080),z=s(79275),y=s(14718),j=s(53541),C=s(5790),U=s(12083),x=s(35223),R=s(5409),O=s(74930),Z=s(2600),H=s(48940),X=s(41286),w=s(56336),b=s(13426),q=s(84624),ss=s(77965),ts=s(54257),_s=s(71210),as=s(51187),ns=s(39404),Es=s(58692),os=s(501),rs=s(57646),es=s(23120),ds=s(44414),is=s(25962),Ps=s(14664),Ms=s(42588),ls=s(90325),Ds=s(62785),Os=s(87443),Ts=s(41032),ms=s(22957),vs=s(93179),As=s(73055),Cs=s(15747),Rs=s(85306),Ls=s(26509),Is=s(32058),Bs=s(81185),fs=s(82261),Us=s(81481),Ws=s(90238);const G=()=>{const Y=(0,m.d4)(v.s);return(0,t.jsx)(M.CheckPagePermissions,{permissions:Y.settings?.["transfer-tokens"].create,children:(0,t.jsx)(A.w,{})})}},6619:(V,f,s)=>{s.d(f,{ProtectedEditView:()=>hs,w:()=>$});var t=s(92132),M=s(21272),m=s(38413),v=s(4198),A=s(83997),g=s(94061),c=s(85829),l=s(90151),_=s(68074),D=s(55356),d=s(85963),n=s(89167),N=s(54514),z=s(53541),y=s(54894),j=s(17703),C=s(12083),U=s(69969),x=s(81481),R=s(99831),O=s(90238),Z=s(15126),H=s(63299),X=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),as=s(5409),ns=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(56336),ds=s(13426),is=s(84624),Ps=s(77965),Ms=s(54257),ls=s(71210),Ds=s(51187),Os=s(39404),Ts=s(58692),ms=s(501),vs=s(57646),As=s(23120),Cs=s(44414),Rs=s(25962),Ls=s(14664),Is=s(42588),Bs=s(90325),fs=s(62785),Us=s(87443),Ws=s(41032),G=s(22957),Y=s(93179),Ns=s(73055),zs=s(15747),Gs=s(85306),Ys=s(26509),$s=s(32058),ks=s(81185),Js=s(82261);const Ks=C.Ik().shape({name:C.Yj().max(100).required(n.translatedErrors.required),description:C.Yj().nullable(),lifespan:C.ai().integer().min(0).nullable().defined(n.translatedErrors.required),permissions:C.Yj().required(n.translatedErrors.required)}),$=()=>{(0,n.useFocusWhenNavigate)();const{formatMessage:o}=(0,y.A)(),{lockApp:r,unlockApp:W}=(0,n.useOverlayBlocker)(),i=(0,n.useNotification)(),L=(0,j.W6)(),{state:K}=(0,j.zy)(),[E,I]=M.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,n.useTracking)(),{setCurrentStep:ys}=(0,n.useGuidedTour)(),js=(0,U.j)(e=>e.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:xs,canUpdate:us,canRegenerate:ps}}=(0,n.useRBAC)(js),u=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,P=u==="create",{_unstableFormatAPIError:p,_unstableFormatValidationErrors:k}=(0,n.useAPIErrorHandler)();M.useEffect(()=>{T(P?"didAddTokenFromList":"didEditTokenFromList",{tokenType:R.T})},[P,T]);const{data:S,error:F}=(0,x.u)(u,{skip:P||E!==null||!u});M.useEffect(()=>{F&&i({type:"warning",message:p(F)})},[F,p,i]),M.useEffect(()=>{S&&I(S)},[S]);const[Ss]=(0,x.a)(),[Fs]=(0,x.b)(),Vs=async(e,B)=>{T(P?"willCreateToken":"willEditToken",{tokenType:R.T}),r();const h=e.permissions.split("-");if((a=>a.length===1?a[0]==="push"||a[0]==="pull":a[0]==="push"&&a[1]==="pull")(h))try{if(P){const a=await Ss({...e,lifespan:e?.lifespan||null,permissions:h});if("error"in a){(0,U.x)(a.error)&&a.error.name==="ValidationError"?B.setErrors(k(a.error)):i({type:"warning",message:p(a.error)});return}I(a.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:R.T}),L.push(`/settings/transfer-tokens/${a.data.id}`,{transferToken:a.data}),ys("transferTokens.success")}else{const a=await Fs({id:u,name:e.name,description:e.description,permissions:h});if("error"in a){(0,U.x)(a.error)&&a.error.name==="ValidationError"?B.setErrors(k(a.error)):i({type:"warning",message:p(a.error)});return}I(a.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:R.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{W()}},J=us&&!P||xs&&P;return!P&&!E?(0,t.jsx)(cs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(n.SettingsPageTitle,{name:"Transfer Tokens"}),(0,t.jsx)(z.l1,{validationSchema:Ks,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan||null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(e,B)=>Vs(e,B),children:({errors:e,handleChange:B,isSubmitting:h,values:Q})=>(0,t.jsxs)(n.Form,{children:[(0,t.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:I,canEditInputs:J,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(O.c,{token:E.accessKey,tokenType:R.T}),(0,t.jsx)(gs,{errors:e,onChange:B,canEditInputs:J,isCreating:P,values:Q,transferToken:E})]})})]})})]})},hs=()=>{const o=(0,U.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(n.CheckPagePermissions,{permissions:o,children:(0,t.jsx)($,{})})},gs=({errors:o={},onChange:r,canEditInputs:W,isCreating:i,values:L,transferToken:K={}})=>{const{formatMessage:E}=(0,y.A)(),I=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(l.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(O.T,{error:o.name,value:L.name,canEditInputs:W,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(O.a,{error:o.description,value:L.description,canEditInputs:W,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(O.L,{isCreating:i,error:o.lifespan,value:L.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(O.b,{name:"permissions",value:L.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:I,canEditInputs:W})},"permissions")]})]})})},cs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.A)();return(0,n.useFocusWhenNavigate)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(n.SettingsPageTitle,{name:"Transfer Tokens"}),(0,t.jsx)(D.Q,{primaryAction:(0,t.jsx)(d.$,{disabled:!0,startIcon:(0,t.jsx)(N.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(n.LoadingIndicatorPage,{})})]})}},81481:(V,f,s)=>{s.d(f,{a:()=>A,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(69969);const M=t.n.injectEndpoints({endpoints:l=>({getTransferTokens:l.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,D)=>[..._?.map(({id:d})=>({type:"TransferToken",id:d}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:l.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,D,d)=>[{type:"TransferToken",id:d}]}),createTransferToken:l.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:l.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,D,d)=>[{type:"TransferToken",id:d}]}),updateTransferToken:l.mutation({query:({id:_,...D})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:D}),transformResponse:_=>_.data,invalidatesTags:(_,D,{id:d})=>[{type:"TransferToken",id:d}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:A,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=M}}]);