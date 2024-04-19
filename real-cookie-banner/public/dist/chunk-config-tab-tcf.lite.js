"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[184],{93160:(e,t,n)=>{n.d(t,{W5:()=>a,fV:()=>o,gt:()=>r});var a=function(e){return e.Consent="consent",e.LegitimateInterest="legitimate-interest",e.LegalRequirement="legal-requirement",e}(a||{}),r=function(e){return e.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework="provider-is-self-certified-trans-atlantic-data-privacy-framework",e.StandardContractualClauses="standard-contractual-clauses",e}(r||{}),o=function(e){return e.AdStorage="ad_storage",e.AdUserData="ad_user_data",e.AdPersonalization="ad_personalization",e.AnalyticsStorage="analytics_storage",e.FunctionalityStorage="functionality_storage",e.PersonalizationStorage="personalization_storage",e.SecurityStorage="security_storage",e}(o||{})},77874:(e,t,n)=>{n.d(t,{s:()=>u});var a=n(46270),r=n(2420),o=n(22865),i=n(29894),c=n(24657),l=n(19893),s=n(52956),d=n(87363);const u=e=>{let{languages:t=[],recordId:n,onClick:u,children:m,wrapperProps:f={},...g}=e;const[v,p]=(0,d.useState)(!1),h=t.filter((e=>{let{id:t}=e;return!1!==t})),y=t.filter((e=>{let{id:t}=e;return!1===t})),C={size:13,shape:"square",style:{display:"block",width:"auto",borderRadius:5}},R={flex:"none",style:{textAlign:"center",paddingRight:5,fontSize:11,cursor:"pointer"}},w=(0,d.useCallback)((async e=>{if(!v){p(!0);try{u(n,e)}finally{p(!1)}}}),[v,u,n]);return React.createElement(i.Z,(0,a.Z)({spinning:v},f),React.createElement(c.Z,(0,a.Z)({align:"middle"},g),h.map((e=>{const{code:t,flag:o,id:i}=e;return i===n?null:React.createElement(l.Z,(0,a.Z)({key:t},R,{onClick:()=>w(e)}),React.createElement(s.C,(0,a.Z)({src:o},C),t.toUpperCase()),React.createElement(r.Z,null))})),y.length>0&&y.map((e=>{const{code:t,flag:n}=e;return React.createElement(l.Z,(0,a.Z)({key:t},R,{onClick:()=>w(e)}),React.createElement(s.C,(0,a.Z)({src:n},C),t.toUpperCase()),React.createElement(o.Z,null))})),m))}},36435:(e,t,n)=>{n.d(t,{C:()=>r});var a=n(90987);const r=e=>{let{children:t,description:n,extra:r,offset:o}=e;return React.createElement(a.Z.Item,{wrapperCol:{offset:o},style:{borderBottom:"1px solid #e7e7e7"}},React.createElement("h3",{style:{margin:`0 0 ${n?3:15}px 0`}},t),!!n&&React.createElement("p",{className:"description",style:{marginBottom:15}},n),r)}},6880:(e,t,n)=>{n.d(t,{Or:()=>a});const a={labelCol:{span:6},wrapperCol:{span:16}}},75447:(e,t,n)=>{n.d(t,{u:()=>I});var a=n(87363),r=n(70756),o=n(24657),i=n(19893),c=n(70698),l=n(33124),s=n(88122),d=n(89596),u=n(43734),m=n(69017),f=n(35392),g=n(57853),v=n(60204),p=n(86352),h=n(68176),y=n(79635);function C(){const{__:e}=(0,v.Q)(),[t,n]=(0,a.useState)(),[r,o]=(0,a.useState)(),i=(0,a.useCallback)((e=>{let{total:t,title:a}=e,r=0;const i=new AbortController;let c;const l=new Promise((e=>c=e));return n(0),o({total:t,title:a,abortController:i}),[()=>{r++,r>=t?(n(void 0),o(void 0),c()):n(r)},i.signal,l]}),[]);return[i,"number"==typeof t&&r?React.createElement(s.Z,{style:{clear:"both"},description:React.createElement(React.Fragment,null,React.createElement("div",null,r.title)),image:React.createElement(y.Z,{type:"circle",width:100,percent:+(t/r.total*100).toFixed(0),format:e=>React.createElement(React.Fragment,null,e," %",React.createElement("br",null),React.createElement("span",{style:{fontSize:10}},t," / ",r.total))})},React.createElement("button",{className:"button button-primary",onClick:()=>{r.abortController.abort(),n(void 0),o(void 0)}},e("Cancel"))):void 0]}var R=n(77874),w=n(46270),E=n(17603),k=n(29894),b=n(53345),S=n(46499),T=n(70902);const A=e=>{const t=(0,p.x)(),{view:n,rows:r}=t,{__:o,_n:i}=(0,v.Q)(),{name:c,description:l,provider:s,lists:u,hasRealTimeApi:m,updatedAt:g,createContentBlockerForVendorId:h,onCreateOrEditContentBlocker:y,onCreate:C}=e,[R,w]=(0,a.useState)((()=>{var e;return null===(e=u.filter((e=>{let{isRecommended:t,name:n}=e;return t&&n}))[0])||void 0===e?void 0:e.name})),E=(0,a.useMemo)((()=>"vendors"===n?r.filter((e=>{let{vendor:{id:t},blocker:n}=e;return t===h&&!1!==n}))[0]:void 0),[n,r,h]),[k,A]=(0,a.useState)(!!y&&!E),{lang:Z}=document.documentElement,[x]=u.filter((e=>{let{name:t}=e;return t===R}));return React.createElement(b.Z,{direction:"vertical"},React.createElement("p",{className:"description"},l,React.createElement("br",null),React.createElement("br",null),o("Only advertising partners to whom your website visits have consented can participate in the auction. For advertising partners who require consent in accordance with the TCF standard, the respective TCF vendors must be configured."),React.createElement("br",null),React.createElement("br",null),o("You can automatically import these lists of TCF vendor configurations:")),React.createElement(S.ZP.Group,{value:R,onChange:e=>w(e.target.value)},React.createElement(b.Z,{direction:"vertical"},u.map((e=>{let{name:t,description:n,isRecommended:a,vendorIds:{length:r}}=e;return React.createElement(S.ZP,{value:t,key:t},React.createElement("div",null,t," (",i("%d TCF vendor","%d TCF vendors",r,r),")"," ",a&&React.createElement(f.Z,{color:"blue"},o("Recommended"))),React.createElement("p",{className:"description"},n))})))),React.createElement("p",{className:"description"},React.createElement("i",null,o("Last updated: %s",new Date(g).toLocaleDateString(Z))," • ",!m&&o("%s does not offer an API for real-time updates.",s))),y&&!E&&React.createElement(T.Z,{checked:k,onChange:e=>A(e.target.checked)},o('Create content blocker for %s (blocks scripts until consent for purpose "Store and/or access information on a device" is given for this TCF vendors)',c)),React.createElement("div",{style:{textAlign:"right"}},x&&React.createElement(d.Z,{title:React.createElement(React.Fragment,null,o("After activating the TCF vendors, I will check the information for each activated TCF vendor in the TCF vendor configuration myself and correct any information that does not match my use case."),k&&React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("br",null),o("In addition, I'll checked the information in the content blocker  myself for correctness and completeness and add missing information or corrected information that does not fit my use case. I am aware that the manufacturer of Real Cookie Banner cannot take any liability in this respect."))),overlayInnerStyle:{maxWidth:300},placement:"bottomLeft",onConfirm:async()=>{await C({adNetwork:e,list:x}),k&&!E&&setTimeout((()=>{y()}),0)},okText:o("Create"),cancelText:o("Cancel")},React.createElement("a",{className:"button button-primary"},o("Create TCF vendor configurations")))))},{Panel:Z}=E.Z,x=e=>{let{onCreate:t}=e;const n=(0,p.x)(),{adNetworks:a,view:r}=n,o=("vendors"===r?n.defaultCreateAdNetworkIdentifier:void 0)||a[0].identifier;return 0===n.rows.length?React.createElement(k.Z,{spinning:!0}):React.createElement(E.Z,{accordion:!0,defaultActiveKey:o},a.map((e=>{const{name:n,identifier:a,logo:r}=e;return React.createElement(Z,{key:a,header:n,extra:React.createElement("img",{src:r,style:{height:"1em"}})},React.createElement(A,(0,w.Z)({},e,{onCreate:t})))})))},{Column:F}=r.Z,I=()=>{const{__:e,_i:t}=(0,v.Q)(),n=(0,p.x)(),{busy:y,vendorCount:w,view:E,rows:k}=n,[b,S]=(0,a.useState)({vendor:""}),[T,A]=(0,a.useState)([]),[Z,I]=C(),[P,_]=(0,a.useState)((()=>"vendors"===E&&!!n.defaultCreateAdNetworkIdentifier)),N=(0,a.useMemo)((()=>n.adNetworks.map((e=>({network:e,vendorIds:e.lists.map((e=>{let{vendorIds:t}=e;return t})).flat()})))),[n.adNetworks]),V=(0,a.useMemo)((()=>[...k].sort(((e,t)=>{let{vendor:n}=e,{vendor:a}=t;if(!n||!a)return-1;const{name:r}=n,{name:o}=a;return r<o?-1:r>o?1:0})).filter((e=>{let{vendor:t}=e;const{vendor:n}=b;if(t&&n){const e=n.toLowerCase();return t.id.toString()===e||t.name.toLowerCase().indexOf(e)>-1}return!0}))),[k,k.length,b]),B=(0,a.useCallback)((e=>V.filter((t=>{let{configuration:n,vendor:a}=t;return e.indexOf("boolean"==typeof n?a.id:n.id)>-1&&!0!==n}))),[V]),D=e("Create TCF vendor configuration");return I||(w||"vendors"===E?React.createElement(React.Fragment,null,React.createElement(o.Z,{justify:"end",gutter:10},"vendors"===E&&React.createElement(i.Z,null,React.createElement(c.Z,{open:P,title:e("Add vendors from ad networks"),onCancel:()=>_(!1),footer:null,width:800},React.createElement(x,{onCreate:async t=>{let{list:{vendorIds:a}}=t;_(!1);const r=B(a).map((e=>{let{vendor:t}=e;return t})),[o,i,c]=Z({title:e("Creating vendors..."),total:r.length});await n.onBulkCreate(r,o,i,c)}})),React.createElement("a",{onClick:()=>_(!0),className:"button right",style:{marginBottom:10}},t(e("Add vendors from ad networks (e.g. {{img/}} Google Adsense)"),{img:React.createElement("img",{style:{height:"1em"},src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/logos/google-a-dsense.svg"})}))),React.createElement(i.Z,{style:{width:400}},React.createElement(l.Z.Search,{autoFocus:!0,style:{maxWidth:400},placeholder:e("Search vendor by name or ID..."),onChange:e=>S((t=>({...t,vendor:e.target.value})))})),"vendor-configurations"===E&&React.createElement(i.Z,null,React.createElement("a",{onClick:n.onSwitchToVendorView,className:"button button-primary right",style:{marginBottom:10}},D))),React.createElement("div",{style:{textAlign:"right",marginBottom:15}}),React.createElement(r.Z,{pagination:{pageSize:50,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},locale:{emptyText:React.createElement(s.Z,{description:e("No data")})},loading:y,dataSource:V,rowKey:e=>{let{vendor:t,configuration:n}=e;return"boolean"==typeof n?t.id:n.id},size:"small",bordered:!0,rowSelection:{type:"checkbox",getCheckboxProps:e=>{let{configuration:t}=e;return{disabled:"vendors"===E&&!0===t}},selectedRowKeys:T,onChange:(e,t,n)=>{let{type:a}=n;A("all"===a?T.length>0?[]:V.map((e=>{let{configuration:t,vendor:n}=e;return"boolean"==typeof t?t?0:n.id:t.id})).filter(Boolean):e)}}},React.createElement(F,{title:(0,h.e)([...T.length>0?[React.createElement("span",{key:"bulk"},e("%d selected",T.length)),"vendors"===E&&React.createElement(d.Z,{key:"bulk-create",title:React.createElement(React.Fragment,null,e("Please note that selecting more vendors than you actually use may lead to ineffective consent. Therefore, only activate the vendors that you actually actively work with!"),React.createElement("br",null),React.createElement("br",null),e("After activating the TCF vendors, I will check the information for each activated TCF vendor in the TCF vendor configuration myself and correct any information that does not match my use case.")),overlayInnerStyle:{maxWidth:300},placement:"bottomLeft",onConfirm:()=>{const[t,a,r]=Z({title:e("Creating vendors..."),total:T.length});n.onBulkCreate(B(T).map((e=>{let{vendor:t}=e;return t})),t,a,r),A([])},okText:e("Create"),cancelText:e("Cancel")},React.createElement("a",null,e("Create all selected vendors"))),"vendor-configurations"===E&&React.createElement(d.Z,{key:"bulk-delete",title:e("Are you sure you want to delete this vendors?"),placement:"bottomLeft",onConfirm:()=>{const[t,a,r]=Z({title:e("Deleting vendors..."),total:T.length});n.onBulkDelete(B(T).map((e=>{let{configuration:t}=e;return t})),t,a,r),A([])},okText:e("Delete all"),cancelText:e("Cancel")},React.createElement("a",null,e("Delete all")))]:[],React.createElement("span",{key:"title"},e("Vendor"))],React.createElement(u.Z,{type:"vertical"})),dataIndex:"vendor",key:"vendor",render:(t,n)=>{const{vendor:a,configuration:r}=n;return React.createElement("span",null,a?React.createElement(React.Fragment,null,a.name," ",React.createElement("span",{style:{opacity:.5}},"#",a.id)," "):"boolean"!=typeof r&&React.createElement(m.Z,{title:e("This vendor is no longer available and/or has been removed from the list of available vendors by the GVL. For this vendor, you can no longer request a consent from your visitors.")},React.createElement("span",{style:{opacity:.5}},"#",r.vendorId)," ",React.createElement(f.Z,{color:"error"},e("Abandoned"))),"vendors"===E&&!0===r&&React.createElement(React.Fragment,null,React.createElement(f.Z,null,e("Already created")),!1!==n.blocker&&React.createElement(f.Z,null,e("Content Blocker"))))}}),React.createElement(F,{title:e("Used in ad networks"),dataIndex:"adNetworks",key:"adNetworks",render:(e,t)=>{let{vendor:n}=t;if(!n)return null;const{id:a}=n;return N.map((e=>{let{network:t,vendorIds:n}=e;return n.indexOf(a)>-1?t:void 0})).filter(Boolean).map((e=>{let{name:t,logo:n}=e;return React.createElement("span",{key:t},React.createElement("img",{src:n,style:{height:"1em"}})," ",t)}))}}),React.createElement(F,{title:e("Privacy policy"),dataIndex:"privacyPolicy",key:"privacyPolicy",render:(e,t)=>{let{vendor:n}=t;if(null==n||!n.urls)return null;const{urls:[{privacy:a}]}=n;return a&&React.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},new URL(a).origin)}}),React.createElement(F,{title:e("Actions"),dataIndex:"actions",key:"actions",render:(t,a)=>{const{configuration:r,vendor:o}=a;return(0,h.e)(["vendor-configurations"===E&&"boolean"!=typeof r&&a.languages&&React.createElement(R.s,{key:"multilingual",recordId:a.configuration.id,languages:a.languages,onClick:a.languageOnClick,wrapperProps:{wrapperClassName:"alignleft"}}),"vendors"===E&&!0!==r&&React.createElement("a",{key:"create",onClick:()=>n.onCreate(o)},e("Create")),"vendor-configurations"===E&&"boolean"!=typeof r&&o&&React.createElement("a",{key:"contentBlocker",onClick:()=>n.onCreateOrEditContentBlocker(r,o)},r.blocker?e("Edit Content Blocker"):e("Create Content Blocker")),"vendor-configurations"===E&&"boolean"!=typeof r&&o&&React.createElement("a",{key:"edit",onClick:()=>n.onEdit(r,o)},e("Edit")),"vendor-configurations"===E&&"boolean"!=typeof r&&React.createElement(d.Z,{key:"delete",title:e("Are you sure you want to delete this vendor?"),placement:"bottomRight",onConfirm:()=>n.onDelete(r),okText:e("Delete"),cancelText:e("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",null,e("Delete")))],React.createElement(u.Z,{type:"vertical"}))}}))):y?React.createElement(g.Z,{loading:!0,active:!0,paragraph:{rows:1}}):React.createElement(s.Z,{description:e("You have not yet created a TCF vendor configuration.")},React.createElement("a",{className:"button button-primary",onClick:n.onSwitchToVendorView},D)))}},86352:(e,t,n)=>{n.d(t,{l:()=>i,x:()=>o});var a=n(73186);const r=Symbol(),o=()=>(0,a._3)(r),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.LN)(r,...t)}},17085:(e,t,n)=>{n.d(t,{f:()=>m});var a=n(63593),r=n(90987),o=n(87363),i=n.n(o),c=n(35977),l=n(70698),s=n(76644),d=n(60204);const u=e=>{let{when:t,title:n}=e;const{__:a}=(0,d.Q)(),[r,u=""]=(0,o.useMemo)((()=>n.split(".").map((e=>`${e.trim()}.`))),[n]);return i().createElement(c.ZP,{when:t},(e=>{let{isActive:t,onConfirm:n,onCancel:o}=e;return i().createElement(l.Z,{open:t,onCancel:o,onOk:n,centered:!0,okText:a("Leave"),cancelText:a("Cancel")},i().createElement(s.ZP,{status:"warning",title:r,subTitle:u}))}))};function m(e){let{isEdit:t,defaultValues:n,template:i,entityTemplateVersion:c,attributes:l,handleSave:s,i18n:d,initialHasChanges:m,trackFieldsDifferFromDefaultValues:f=[],unloadPromptWhen:g}=e;const{message:v}=a.Z.useApp(),p={...n,...l||{}},[h]=r.Z.useForm(),[y,C]=(0,o.useState)(!1),[R,w]=(0,o.useState)(m||!1),E=!(!t||!i)&&c!==i.version,k=!!i&&(E||!t),b=[],S=(0,o.useCallback)((async e=>{C(!0);try{await s(e),h.resetFields(),v.success(d.successMessage),w(!1)}catch(e){v.error(e)}finally{C(!1)}}),[h,s]),T=(0,o.useCallback)((()=>{v.error(d.validationError)}),[h,d]),A=React.createElement(u,{when:e=>R&&(!g||g(e)),title:m&&d.unloadConfirmInitialActive?d.unloadConfirmInitialActive:d.unloadConfirm}),Z=(0,o.useCallback)(((e,t)=>{if(f&&p){b.splice(0,b.length);for(const e of f)t[e]!==p[e]&&b.push(e)}w(!0)}),[f,p]);return{defaultValues:p,template:i,isEdit:t,isTemplateUpdate:E,templateCheck:k,form:h,isBusy:y,setIsBusy:C,hasChanges:R,hasTrackedFieldDifferenceToDefaultValue:e=>b.indexOf(e)>-1,onFinish:S,onFinishFailed:T,prompt:A,onValuesChange:Z}}},25114:(e,t,n)=>{n.d(t,{Y:()=>i});var a=n(93160),r=n(16379),o=n(87363);function i(e){let{__:t,_i:n}=e;return(0,o.useMemo)((()=>{const e=[{label:React.createElement(React.Fragment,null,t("I have concluded standard contractual clauses with the provider"),React.createElement("p",{className:"description"},n(t("Did you sign a contract with the provider, e.g. when registering online? If so, the contract may contain {{a}}standard contractual clauses{{/a}} of the EU, which promise secure data processing in insecure third countries."),{a:React.createElement("a",{href:t("https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_en"),rel:"noreferrer",target:"_blank"})}))),value:a.gt.StandardContractualClauses},{label:React.createElement(React.Fragment,null,t("Provider is self-certified in accordance with the Trans-Atlantic Data Privacy Framework for secure data processing in the USA"),React.createElement("p",{className:"description"},n(t('The adequacy decision for secure data processing only applies if the provider is self certified and included in the "Data Privacy Framework List". To find out which companies are certified, {{a}}visit the website of the US government{{/a}}.'),{a:React.createElement("a",{href:t("https://www.dataprivacyframework.gov/s/participant-search/"),rel:"noreferrer",target:"_blank"})}))),value:a.gt.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework}];return{specialTreatments:e,bySelectedCountries:(t,n)=>{const o=(0,r.D)({dataProcessingInCountries:t,safeCountries:n});return{unsafeCountries:o,specialTreatmentOptions:e.filter((e=>{let{value:n}=e;switch(n){case a.gt.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework:return t.indexOf("US")>-1;case a.gt.StandardContractualClauses:return o.length>0;default:return!0}}))}}}}),[])}},16379:(e,t,n)=>{n.d(t,{D:()=>o});var a=n(93160),r=n(22255);function o(e){let{dataProcessingInCountries:t,safeCountries:n,specialTreatments:o=[],designVersion:i=r.R}=e;const c=i>4?o:[];return t.filter((e=>!(c.indexOf(a.gt.StandardContractualClauses)>-1)&&(-1===n.indexOf(e)||"US"===e&&-1===c.indexOf(a.gt.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework))))}},22255:(e,t,n)=>{n.d(t,{R:()=>a});const a=8},68176:(e,t,n)=>{n.d(t,{e:()=>r});var a=n(87363);function r(e,t){const n=e.filter(Boolean);return 0===n.length?null:n.reduce(((e,n,r)=>e.length?[...e,React.createElement(a.Fragment,{key:r},t),n]:[n]),[])}},12053:(e,t,n)=>{n.d(t,{e:()=>o});var a=n(8700);const r={path:"/:objectType/multilingual/copy",namespace:"wp/v2",method:a.RouteHttpVerb.POST};async function o(e,t,n){const{root:o,nonce:i}=window.wpApiSettings,{translations:c}=await(0,a.commonRequest)({location:r,options:{restRoot:o,restNonce:i,restNamespace:"wp/v2",restQuery:{}},request:{id:t,targetLocale:n},params:{objectType:e}});return c[n]}},45567:(e,t,n)=>{n.d(t,{f:()=>a});const a=e=>{let{children:t,maxWidth:n="auto",style:a={}}=e;return React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===n?1300:n,...a}},t)}},7362:(e,t,n)=>{n.r(t),n.d(t,{TcfLayout:()=>s});var a=n(87363),r=n(68038),o=n(66711),i=n(49048),c=n(29894),l=n(50088);const s=(0,r.Pi)((()=>{const{tcfStore:e}=(0,i.m)(),{purposes:t}=e;return(0,a.useEffect)((()=>{e.fetchDeclarations()}),[]),0===t.size?React.createElement(c.Z,{style:{margin:"auto",marginTop:15}}):React.createElement(React.Fragment,null,React.createElement(o.Outlet,null),React.createElement(l.K,{identifier:"tcf-vendor"}))}))},4895:(e,t,n)=>{n.r(t),n.d(t,{TcfVendorConfigurationList:()=>h});var a=n(87363),r=n(68038),o=n(9520),i=n(93404),c=n(36157),l=n(49048),s=n(84683),d=n(45567),u=n(86352),m=n(75447),f=n(61278),g=n(12053),v=n(63593),p=n(27821);const h=(0,r.Pi)((()=>{const{message:e}=v.Z.useApp(),[t,n]=(0,a.useState)(!1),{addLink:r,editLink:h}=(0,o.g)(),{addLink:y,editLink:C}=(0,i.w)(),{tcfStore:R,optionStore:w}=(0,l.m)(),{vendorConfigurations:E,vendorConfigurationCount:k}=R,{busy:b,entries:S}=E,T=(0,c.v)("tcf-vendor"),A=(0,s.useTcfVendorAdNetworks)();(0,a.useEffect)((()=>{k>0&&!t&&(R.fetchVendorConfigurations(),n(!0))}),[k,t]);const[Z,x]=(0,u.l)({busy:b,vendorCount:k,adNetworks:A,rows:Array.from(S.values()).map((t=>{var n;const{key:a,restrictivePurposes:r,data:{status:o,meta:{vendorId:i},blocker:c,multilingual:l}}=t;return{busy:!1,configuration:{id:a,vendorId:i,blocker:c,restrictivePurposes:r,status:o},vendor:null===(n=t.vendorModel)||void 0===n?void 0:n.data,languages:l,languageOnClick:async(t,n)=>{let{code:a,id:r}=n;try{const e=!1===r?(await(0,g.e)("rcb-tcf-vendor-conf",t,a)).id:r,n=new URL(window.location.href);n.hash=`#/cookies/tcf-vendors/edit/${e}`,n.searchParams.set("lang",a),window.location.href=n.toString()}catch(t){var o;if(null===(o=t.responseJSON)||void 0===o||!o.message)throw t;e.error(t.responseJSON.message)}}}})),view:"vendor-configurations",onSwitchToVendorView:()=>window.location.hash=r,onEdit:e=>window.location.hash=h(S.get(e.id)),onDelete:async t=>{try{await S.get(t.id).delete({force:!0})}catch(t){e.error(t.responseJSON.message)}},onCreateOrEditContentBlocker:(e,t)=>{let{id:n,blocker:a}=e,{name:r}=t;return window.location.hash=a?C(new f.p(void 0,{id:a})):`${y}?force=scratch&attributes=${JSON.stringify({name:r,tcfVendors:[n],criteria:"tcfVendors"})}`},onBulkDelete:async(t,n,a,r)=>{for(const{id:o}of t)S.get(o).delete({force:!0},{allowBatchRequest:{onQueueItemFinished:n,waitForPromise:r},settings:{signal:a}}).catch((t=>e.error(t.responseJSON.message)));await r,(0,p.runInAction)((()=>{for(const{id:e}of t)S.delete(e)})),w.fetchCurrentRevision()}},{},{inherit:["busy","vendorCount","rows"]});return React.createElement(d.f,null,React.createElement(Z,{value:x},React.createElement(m.u,null)),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},T))}))},84683:(e,t,n)=>{n.r(t),n.d(t,{TcfVendorSelector:()=>y,useTcfVendorAdNetworks:()=>h});var a=n(87363),r=n(68038),o=n(45567),i=n(87803),c=n(30702),l=n(86352),s=n(75447),d=n(49048),u=n(63593),m=n(27821),f=n(9520),g=n(61959),v=n(66711),p=n(40045);function h(){return[{identifier:"google-adsense",name:"Google AdSense",description:(0,p.__)("Google Adsense displays advertisements from various advertising partners (ad servers) on your website by integrating just one AdSense scripts. A complex bidding system decides which advertising partner receives the advertising slot in the end."),provider:"Google",logo:"https://assets.devowl.io/in-app/wp-real-cookie-banner/logos/google-a-dsense.svg",hasRealTimeApi:!1,updatedAt:"2023-12-18T14:31:24.791Z",createContentBlockerForVendorId:755,onCreateOrEditContentBlocker:()=>{window.location.href=`#/blocker/new?force=google-adsense-tcf&navigateAfterCreation=${encodeURIComponent("#/cookies/tcf-vendors")}`},lists:[{name:(0,p.__)("Google Advertising Products only"),description:(0,p.__)("Only Google can display ads booked e.g. via Google Ads. This means that you obtain less consent from your website visitors, but will not generate the optimum revenue."),vendorIds:[755]},{name:(0,p.__)("Commonly used ad partners"),description:(0,p.__)("Consent is requested for all advertising partners who display a particularly large amount of advertising via Adsense (list provided by Google). This increases your revenue and at the same time you obtain consent from a manageable number of TCF vendors."),vendorIds:"1,4,9,10,11,12,13,15,16,21,22,23,24,25,27,28,32,34,36,37,39,40,42,45,50,52,57,59,60,63,68,69,70,71,73,76,77,78,81,82,84,85,87,91,93,94,95,97,98,109,110,119,124,126,128,129,130,132,136,137,139,140,147,156,161,163,168,192,195,202,209,212,213,226,228,241,243,246,253,264,273,275,278,281,284,294,302,304,308,312,315,317,328,345,373,381,384,385,388,394,397,402,415,416,423,431,450,452,466,468,506,512,559,565,587,602,631,657,667,686,703,734,755,758,759,762,767,772,787,793,807,827,832,853,929,1050".split(",").map(Number),isRecommended:!0},{name:(0,p.__)("All ad partners using Google Adsense"),description:(0,p.__)("Consent is obtained for all advertising partners who display advertising via Adsense. This leads to maximum revenue, but data protectionists could question the effectiveness of the consent due to the excessive number of vendors."),vendorIds:"20,33,44,46,53,55,56,66,75,100,102,122,131,138,151,153,199,216,237,239,244,248,249,251,255,259,263,270,274,276,279,280,282,318,321,323,329,331,337,343,347,350,354,361,371,377,427,430,435,436,438,440,444,448,471,488,491,493,498,501,507,509,521,524,531,539,554,561,568,569,570,571,580,581,596,598,601,610,617,621,626,628,644,646,647,648,649,652,653,662,666,671,673,676,681,682,683,687,707,708,709,715,716,717,718,719,721,724,725,727,732,733,736,737,738,741,745,746,747,748,750,755,756,768,769,770,775,776,779,780,781,782,783,786,788,795,797,798,800,803,806,808,812,815,816,819,820,821,822,828,831,833,834,835,836,842,845,850,851,856,857,858,860,861,862,864,865,866,869,870,876,877,878,880,881,883,884,888,890,892,896,900,901,902,915,918,919,920,924,927,930,931,935,936,937,938,940,941,943,951,952,954,955,959,963,965,966,967,968,969,970,972,973,978,982,987,990,993,994,995,996,997,998,999,1001,1003,1006,1009,1015,1016,1017,1021,1022,1024,1026,1027,1028,1029,1031,1033,1036,1037,1039,1040,1041,1044,1045,1048,1049,1051,1057,1059,1060,1061,1062,1064,1068,1069,1070,1072,1075,1076,1078,1079,1080,1081,1082,1083,1084,1085,1087,1089,1090,1091,1094,1098,1100,1101,1103,1104,1107,1108,1110,1111,1112,1113,1116,1119,1120,1122,1124,1127,1130,1131,1133,1134,1135,1136,1137,1138,1139,1141,1144,1146,1149,1151,1153,1155,1156,1157,1159,1160,1161,1162,1163,1165,1168,1169,1172,1174,1175,1176,1177,1178,1179,1181,1183,1184,1185,1187,1188,1190,1191,1192,1193,1195,1196,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1209,1210,1211,1212,1213,1214,1215,1216,1218,1219,1220,1221,1222,1223,1224,1225,1226,1228,1231,1232,1233,1234,1235,1236,1237,1238,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,4176,4202".split(",").map(Number)}]}]}const y=(0,r.Pi)((()=>{const{message:e}=u.Z.useApp(),{tcfStore:t,optionStore:n}=(0,d.m)(),{busyVendors:r,fetchedAllVendorConfigurations:p,vendorConfigurations:y,vendors:C}=t,[R,w]=(0,a.useState)(),{link:E}=(0,f.g)(),{adNetwork:k}=(0,g.y)(),b=h(),S=(0,v.useNavigate)();(0,a.useEffect)((()=>{t.fetchedAllVendorConfigurations||t.fetchVendorConfigurations(),t.fetchVendors()}),[]);const[T,A]=(0,l.l)({busy:r||0===C.size||!p,vendorCount:C.size,rows:Array.from(C.values()).map((e=>{const{vendorConfiguration:t}=e;return{busy:!1,configuration:!!t,vendor:e.data,blocker:!!t&&t.data.blocker}})),view:"vendors",defaultCreateAdNetworkIdentifier:k,adNetworks:b,onCreate:e=>{let{id:t}=e;return w(C.get(t.toString()))},onBulkCreate:async(t,a,r,o)=>{const c=[],l=[];for(const{id:n}of t){const t=new i.S(y,{status:"publish",meta:{dataProcessingInCountries:"[]",dataProcessingInCountriesSpecialTreatments:"[]",restrictivePurposes:"[]",vendorId:n}});c.push(t),l.push(t.persist(void 0,{allowBatchRequest:{onQueueItemFinished:a,waitForPromise:o},settings:{signal:r}}).catch((t=>e.error(t.responseJSON.message))))}await Promise.allSettled(l),(0,m.runInAction)((()=>{for(const e of c)e.key&&e.collection.entries.set(e.key,e)})),await n.fetchCurrentRevision(),setTimeout((()=>S(E.slice(1))),0)}},{},{inherit:["busy","vendorCount","rows"]});return void 0===R?React.createElement(o.f,null,React.createElement(T,{value:A},React.createElement(s.u,null))):React.createElement(o.f,{maxWidth:"fixed"},React.createElement(c.TcfVendorConfigurationForm,{vendor:R}))}))},61959:(e,t,n)=>{n.d(t,{y:()=>o});var a=n(66711),r=n(8700);function o(){return r.qs.parse((0,a.useLocation)().search)}},39630:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(46270),r=n(87363);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var i=n(51928),c=function(e,t){return r.createElement(i.Z,(0,a.Z)({},e,{ref:t,icon:o}))};const l=r.forwardRef(c)}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.4/2b2cc1ff934c860a7ff1c18f0b746f88/chunk-config-tab-tcf.lite.js.map
