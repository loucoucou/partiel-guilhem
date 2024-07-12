"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[1203],{62482:(H,h,t)=>{t.d(h,{F:()=>g});var s=t(92132),A=t(21272),I=t(94061),R=t(85963),m=t(89167),v=t(28604),u=t(54894);const g=({displayedFilters:C})=>{const[p,y]=A.useState(!1),{formatMessage:B}=(0,u.A)(),L=A.useRef(null),f=()=>{y(W=>!W)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(I.a,{paddingTop:1,paddingBottom:1,children:[(0,s.jsx)(R.$,{variant:"tertiary",ref:L,startIcon:(0,s.jsx)(v.A,{}),onClick:f,size:"S",children:B({id:"app.utils.filters",defaultMessage:"Filters"})}),p&&(0,s.jsx)(m.FilterPopoverURLQuery,{displayedFilters:C,isVisible:p,onToggle:f,source:L})]}),(0,s.jsx)(m.FilterListURLQuery,{filtersSchema:C})]})}},21203:(H,h,t)=>{t.d(h,{ProtectedListPage:()=>Et});var s=t(92132),A=t(61485),I=t(99248),R=t(6239),m=t(83997),v=t(43064),u=t(94061),g=t(85829),C=t(90151),p=t(82166),y=t(25641),B=t(90361),L=t(33363),f=t(88353),W=t(76517),Y=t(80782),J=t(42455),N=t(4198),X=t(38413),Z=t(55356),b=t(74773),_=t(89167),c=t(54894),T=t(69969),k=t(62482),K=t(21272),w=t(37679),q=t(60043),tt=t(62490),st=t(83925),j=t(33544),mt=t(15126),gt=t(63299),Mt=t(67014),Pt=t(59080),Dt=t(79275),Ot=t(14718),ut=t(82437),Lt=t(53541),ct=t(5790),At=t(12083),Ct=t(35223),pt=t(5409),ft=t(74930),Tt=t(2600),Ut=t(48940),ht=t(41286),It=t(56336),Rt=t(13426),vt=t(84624),yt=t(77965),Bt=t(54257),Wt=t(71210),Kt=t(51187),jt=t(39404),xt=t(58692),St=t(501),Ft=t(57646),Nt=t(23120),$t=t(44414),Qt=t(25962),Vt=t(14664),zt=t(42588),Gt=t(90325),Ht=t(62785),Yt=t(87443),Jt=t(41032),Xt=t(22957),Zt=t(93179),bt=t(73055),kt=t(15747),wt=t(85306),qt=t(26509),ts=t(32058),ss=t(81185),es=t(82261);const et=T.n.injectEndpoints({endpoints:e=>({getAuditLogs:e.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:e.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:at,useGetAuditLogQuery:nt}=et,$=()=>{const{formatDate:e}=(0,c.A)();return r=>{const a=(0,tt.A)(r),d=e(a,{dateStyle:"long"}),n=e(a,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${n}`}},Q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},x=e=>Q[e]||e,it=({handleClose:e,logId:i})=>{const r=(0,_.useNotification)(),{_unstableFormatAPIError:a}=(0,_.useAPIErrorHandler)(),{data:d,error:n,isLoading:o}=nt(i);K.useEffect(()=>{n&&(r({type:"warning",message:a(n)}),e())},[n,a,e,r]);const l=$(),E=d&&"date"in d?l(d.date):"";return(0,s.jsxs)(A.k,{onClose:e,labelledBy:"title",children:[(0,s.jsx)(I.r,{children:(0,s.jsx)(w.B,{label:E,id:"title",children:(0,s.jsx)(q.m,{isCurrent:!0,children:E})})}),(0,s.jsx)(R.c,{children:(0,s.jsx)(ot,{isLoading:o,data:d,formattedDate:E})})]})},ot=({isLoading:e,data:i,formattedDate:r})=>{const{formatMessage:a}=(0,c.A)();if(e)return(0,s.jsx)(m.s,{padding:7,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.a,{children:"Loading content..."})});const{action:d,user:n,payload:o}=i;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.a,{marginBottom:3,children:(0,s.jsx)(g.o,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,s.jsxs)(C.x,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,s.jsx)(U,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:o?.model})}),(0,s.jsx)(U,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:r}),(0,s.jsx)(U,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:n?.displayName||"-"}),(0,s.jsx)(U,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:n?.id.toString()||"-"})]}),(0,s.jsx)(p.j,{value:JSON.stringify(o,null,2),disabled:!0,label:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},U=({actionLabel:e,actionName:i})=>(0,s.jsxs)(m.s,{direction:"column",alignItems:"baseline",gap:1,children:[(0,s.jsx)(g.o,{textColor:"neutral600",variant:"sigma",children:e}),(0,s.jsx)(g.o,{textColor:"neutral600",children:i})]}),dt=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,s.jsx)(u.a,{paddingTop:4,children:(0,s.jsxs)(m.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,s.jsx)(_.PageSizeURLQuery,{}),(0,s.jsx)(_.PaginationURLQuery,{pagination:e})]})}),S=({headers:e,rows:i,onOpenModal:r})=>{const{formatMessage:a}=(0,c.A)(),d=$(),n=({type:o,value:l,model:E})=>o==="date"?d(l):o==="action"?a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:x(l)},{model:E}):l||"-";return(0,s.jsx)(y.N,{children:i.map(o=>(0,s.jsxs)(B.Tr,{...(0,_.onRowClick)({fn:()=>r(o.id)}),children:[e?.map(({key:l,name:E,cellFormatter:M})=>{const P=o[E];return(0,s.jsx)(L.Td,{children:(0,s.jsx)(g.o,{textColor:"neutral800",children:n({type:l,value:M?M(P):P,model:o.payload?.model})})},l)}),(0,s.jsx)(L.Td,{..._.stopPropagation,children:(0,s.jsx)(m.s,{justifyContent:"end",children:(0,s.jsx)(f.K,{onClick:()=>r(o.id),"aria-label":a({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${o.action} action`}),noBorder:!0,icon:(0,s.jsx)(st.A,{})})})})]},o.id))})};S.defaultProps={rows:[]},S.propTypes={headers:j.array.isRequired,rows:j.array,onOpenModal:j.func.isRequired};const rt=({canReadAuditLogs:e,canReadUsers:i})=>{const r=(0,_.useNotification)(),{_unstableFormatAPIError:a}=(0,_.useAPIErrorHandler)(),[{query:d}]=(0,_.useQueryParams)(),{data:n,error:o,isError:l,isLoading:E}=(0,T.k)({},{skip:!i,refetchOnMountOrArgChange:!0});K.useEffect(()=>{o&&r({type:"warning",message:a(o)})},[o,r,a]);const{data:M,isLoading:P,isError:F,error:D}=at(d,{refetchOnMountOrArgChange:!0,skip:!e});return K.useEffect(()=>{D&&r({type:"warning",message:a(D)})},[D,r,a]),{auditLogs:M,users:n?.users??[],isLoading:E||P,hasError:F||l}},V=({value:e,options:i,onChange:r}={value:void 0})=>{const{formatMessage:a}=(0,c.A)(),d=a({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,s.jsx)(W.G3,{"aria-label":d,value:e,onChange:r,children:i?.map(({label:n,customValue:o})=>(0,s.jsx)(Y.j,{value:o,children:n},o))})},z=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],_t=({formatMessage:e,users:i,canReadUsers:r})=>{const a=[{name:"action",metadatas:{customOperators:z,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:V,options:Object.keys(Q).map(d=>({label:e({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:void 0}),customValue:d}))},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(r&&i){const d=n=>n.username?n.username:n.firstname&&n.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:n.firstname,lastname:n.lastname}):n.email;return[...a,{name:"user",metadatas:{customOperators:z,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i.map(n=>({label:d(n),customValue:n.id.toString()})),customInput:V},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return a},lt=()=>{const{formatMessage:e}=(0,c.A)(),i=(0,T.j)(O=>O.admin_app.permissions.settings),{allowedActions:{canRead:r,canReadUsers:a},isLoading:d}=(0,_.useRBAC)({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:n},o]=(0,_.useQueryParams)(),{auditLogs:l,users:E,isLoading:M,hasError:P}=rt({canReadAuditLogs:r,canReadUsers:a});(0,_.useFocusWhenNavigate)();const F=_t({formatMessage:e,users:E,canReadUsers:a}),D=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:O=>O?O.displayName:""}];if(P)return(0,s.jsx)(J.P,{children:(0,s.jsx)(N.s,{children:(0,s.jsx)(u.a,{paddingTop:8,children:(0,s.jsx)(_.AnErrorOccurred,{})})})});const G=M||d;return(0,s.jsxs)(X.g,{"aria-busy":G,children:[(0,s.jsx)(_.SettingsPageTitle,{name:e({id:"global.auditLogs",defaultMessage:"Audit Logs"})}),(0,s.jsx)(Z.Q,{title:e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,s.jsx)(b.B,{startActions:(0,s.jsx)(k.F,{displayedFilters:F})}),(0,s.jsxs)(N.s,{children:[(0,s.jsx)(_.DynamicTable,{contentType:"Audit logs",headers:D,rows:l?.results||[],withBulkActions:!0,isLoading:G,children:(0,s.jsx)(S,{headers:D,rows:l?.results||[],onOpenModal:O=>o({id:`${O}`})})}),l?.pagination&&(0,s.jsx)(dt,{pagination:l.pagination})]}),n?.id&&(0,s.jsx)(it,{handleClose:()=>o({id:null},"remove"),logId:n.id})]})},Et=()=>{const e=(0,T.j)(i=>i.admin_app.permissions.settings?.auditLogs?.main);return(0,s.jsx)(_.CheckPagePermissions,{permissions:e,children:(0,s.jsx)(lt,{})})}}}]);