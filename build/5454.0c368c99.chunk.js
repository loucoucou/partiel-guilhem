"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5454],{33073:(hs,$,s)=>{s.d($,{ReviewWorkflowsEditPage:()=>is});var t=s(92132),_=s(21272),G=s(85963),A=s(83997),J=s(43064),C=s(85829),M=s(89167),b=s(54514),R=s(53541),q=s(54894),l=s(82437),ss=s(17703),ts=s(67567),os=s(78917),e=s(9527),es=s(5035),p=s(69969),ns=s(58524),h=s(16901),E=s(45084),T=s(25524),as=s(66304),cs=s(35658),Ls=s(56336),As=s(48940),Cs=s(12083),Rs=s(72810),Ts=s(18022),Is=s(2600),Ws=s(51187),Bs=s(15126),Ks=s(63299),Us=s(67014),us=s(59080),ys=s(79275),ws=s(14718),js=s(5790),ps=s(35223),xs=s(5409),Ss=s(74930),Fs=s(41286),Ys=s(13426),zs=s(84624),Ns=s(77965),Vs=s(54257),ks=s(71210),Hs=s(39404),Qs=s(58692),Xs=s(501),Zs=s(57646),$s=s(23120),Gs=s(44414),Js=s(25962),bs=s(14664),qs=s(42588),st=s(90325),tt=s(62785),ot=s(87443),et=s(41032),nt=s(22957),at=s(93179),it=s(73055),lt=s(15747),_t=s(85306),rt=s(26509),Et=s(32058),dt=s(81185),Mt=s(82261);const is=()=>{const{workflowId:I}=(0,ss.g)(),ls=(0,l.d4)(es.s),{formatMessage:n}=(0,q.A)(),r=(0,l.wA)(),{_unstableFormatAPIError:_s,_unstableFormatValidationErrors:rs}=(0,M.useAPIErrorHandler)(),D=(0,M.useNotification)(),{isLoading:P,meta:O,workflows:g}=(0,as.u)(),{collectionTypes:x,singleTypes:S,isLoading:W}=(0,os.u)(),Es=(0,l.d4)(e.j),ds=(0,l.d4)(e.a),a=(0,l.d4)(e.b),F=(0,l.d4)(e.k),Y=(0,l.d4)(e.c),f=(0,l.d4)(e.s),{allowedActions:{canDelete:Ms,canUpdate:B}}=(0,M.useRBAC)(ls.settings?.["review-workflows"]),[c,L]=_.useState({}),{getFeature:Ds,isLoading:z}=(0,p.m)(),{isLoading:K,roles:N}=(0,ts.u)(void 0),[V,d]=_.useState(null),[Ps,k]=_.useState(),[Os,H]=_.useState(!1),U=g?.find(o=>o.id===parseInt(I,10)),Q=g?.filter(o=>o.id!==parseInt(I,10)).flatMap(o=>o.contentTypes),u=Ds("review-workflows"),v=u?.[T.C],m=u?.[T.a],[gs]=(0,ns.e)(),X=async()=>{k(void 0),H(!0);try{const o=await gs({id:I,data:{...a,stages:a.stages?.map(i=>{let Z=!0;const w=Es.workflow?.stages?.find(j=>j.id===i?.id);return w&&(Z=w.permissions?.length!==i.permissions?.length||!w.permissions?.every(j=>!!i.permissions?.find(ms=>ms.role===j.role))),{...i,permissions:Z?i.permissions:void 0}})}});if("error"in o){(0,p.x)(o.error)&&o.error.name==="ValidationError"&&k(rs(o.error)),D({type:"warning",message:_s(o.error)});return}D({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}catch{D({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{H(!1)}L({})},fs=async()=>{await X()},vs=()=>{L({})},y=(0,R.Wx)({enableReinitialize:!0,initialErrors:Ps,initialValues:a,async onSubmit(){const o=a.contentTypes?.some(i=>Q?.includes(i));O&&v&&O?.workflowCount>parseInt(v,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)?d("stage"):F||o?(F&&L(i=>({...i,hasDeletedServerStages:!0})),o&&L(i=>({...i,hasReassignedContentTypes:!0}))):X()},validate(o){return(0,e.v)({values:o,formatMessage:n})}});return(0,e.u)(T.R,e.i),_.useEffect(()=>(!P&&U&&g&&(r((0,e.l)({workflow:U})),r((0,e.d)({workflows:g}))),W||r((0,e.e)({collectionTypes:x,singleTypes:S})),K||r((0,e.f)(N)),r((0,e.g)(P||W||K)),()=>{r((0,e.r)())}),[x,r,W,P,K,N,S,U,g]),_.useEffect(()=>{!P&&!z&&(O&&v&&O?.workflowCount>parseInt(v,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)&&d("stage"))},[a.stages,z,P,u,O,v,m]),_.useEffect(()=>{!f&&Y?.length===0&&D({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,f,Y,D]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(R.QI,{value:y,children:(0,t.jsxs)(R.lV,{onSubmit:y.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:B&&(0,t.jsx)(G.$,{startIcon:(0,t.jsx)(b.A,{}),type:"submit",size:"M",disabled:!ds,loading:!Boolean(Object.keys(c).length>0)&&Os,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!f&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages?.length}),title:a.name||""}),(0,t.jsx)(h.R,{children:f?(0,t.jsx)(A.s,{justifyContent:"center",children:(0,t.jsx)(J.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(A.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:B}),(0,t.jsx)(e.S,{canDelete:Ms,canUpdate:B,stages:y.values?.stages})]})})]})}),(0,t.jsx)(M.ConfirmDialog.Root,{isConfirmButtonLoading:f,isOpen:Object.keys(c).length>0,onToggleDialog:vs,onConfirm:fs,children:(0,t.jsx)(M.ConfirmDialog.Body,{children:(0,t.jsxs)(A.s,{direction:"column",gap:5,children:[c.hasDeletedServerStages&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),c.hasReassignedContentTypes&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:Q?.filter(o=>a.contentTypes?.includes(o)).length})}),(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(E.L.Root,{isOpen:V==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(E.L.Root,{isOpen:V==="stage",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);