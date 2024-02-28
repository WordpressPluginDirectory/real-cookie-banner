"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[718],{47359:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(87363);function r(e,t){(0,n.useEffect)((()=>{const t=new AbortController,a=[()=>t.abort()];return(async()=>{try{const n=await e({abortController:t,aborted:()=>t.signal.aborted});"function"==typeof n&&a.push(n)}catch(e){if("AbortError"!==e.name)throw e}})(),()=>a.forEach((e=>e()))}),t)}},99261:(e,t,a)=>{a.r(t),a.d(t,{CookieGroupsTabLayout:()=>M});var n=a(87363),r=a(68038),o=a(40045),l=a(29894),i=a(6628),c=a(44507),s=a(66711),u=a(49048),d=a(63593),m=a(90987),p=a(17813),g=a(17085),E=a(60204),v=a(73186);const R=Symbol(),h=()=>(0,v._3)(R);var y=a(33124);const f=()=>{const{__:e}=(0,E.Q)();return React.createElement(m.Z.Item,{label:e("Name"),name:"name",required:!0,style:{marginBottom:12},rules:[{required:!0,message:e("Please enter a name!")}]},React.createElement(y.Z,{autoFocus:!0,onKeyDown:e=>e.stopPropagation()}))};var b=a(74462);const C=()=>{const{__:e}=(0,E.Q)(),{defaultTemplateValues:{description:t}}=h();return React.createElement(m.Z.Item,{label:React.createElement(React.Fragment,null,e("Description"),!!t&&React.createElement(m.Z.Item,{shouldUpdate:(e,t)=>e.name!==t.name,noStyle:!0},(e=>{let{getFieldValue:a,setFieldsValue:n}=e;return a("description")!==t&&React.createElement("a",{style:{marginLeft:10},onClick:()=>n({description:t})},React.createElement(b.Z,null))}))),name:"description",required:!0,style:{marginBottom:12},rules:[{required:!0,message:e("Please enter a description!")}]},React.createElement(y.Z.TextArea,{autoSize:!0,onKeyDown:e=>e.stopPropagation()}))};var k=a(77874);const w=()=>{const{__:e}=(0,E.Q)(),{onCancel:t,recordId:a,languages:n,languageOnClick:r}=h();return React.createElement("div",null,(null==n?void 0:n.length)>0&&React.createElement(m.Z.Item,{label:e("Translations"),style:{marginBottom:12}},React.createElement(k.s,{recordId:a,languages:n,onClick:r})),React.createElement(f,null),React.createElement(C,null),React.createElement(m.Z.Item,null,!!t&&React.createElement("button",{className:"button",onClick:e=>{e.preventDefault(),t()}},e("Cancel")),React.createElement("input",{type:"submit",className:"button button-primary right",value:e("Save")})))};var O=a(12053);const Z=(0,r.Pi)((e=>{let{onClose:t,edit:a,navigateAfterCreation:n=!0}=e;const{message:r}=d.Z.useApp(),i=(0,s.useNavigate)(),{cookieStore:c,optionStore:{others:{defaultCookieGroupTexts:{[(null==a?void 0:a.data.name)||""]:h}}}}=(0,u.m)(),y=null==a?void 0:a.data,{form:f,defaultValues:b,isBusy:C,onFinish:k,onFinishFailed:Z,onValuesChange:S,contextValue:N}=function(e){const{__:t}=(0,E.Q)(),{attributes:a,template:n}=e,r={name:(null==a?void 0:a.name)||(null==n?void 0:n.name)||"",description:(null==a?void 0:a.description)||(null==n?void 0:n.description)||""};return{...(0,g.f)({...e,defaultValues:r,i18n:{successMessage:t("You have successfully saved the service group."),validationError:t("The service group could not be saved due to missing/invalid form values."),unloadConfirm:t("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:r,contextValue:{defaultTemplateValues:n?r:{}}}}({template:h?{identifier:"none",version:1,name:"",description:h}:void 0,handleSave:async e=>{try{if(a)a.setName(e.name),a.setDescription(e.description),await a.patch();else{const a=new p.O(c.groups,{name:e.name,description:e.description,meta:{order:c.groups.entries.size,isEssential:!1}});await a.persist(),n&&i(`/cookies/${a.key.toString()}`),null==t||t()}}catch(e){const{code:t,...a}=e.responseJSON;throw["term_exists","duplicate_term_slug"].indexOf(t)>-1?(0,o.__)("The service group already exists!"):a.message}}}),I=a?{name:y.name,description:y.description}:b,[x,T]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,v.LN)(R,...t)}({...N,recordId:null==y?void 0:y.id,languages:null==y?void 0:y.multilingual,languageOnClick:async(e,t)=>{let{code:a,id:n}=t;try{const t=!1===n?(await(0,O.e)("rcb-cookie-group",e,a)).id:n,r=new URL(window.location.href);r.hash=`#/cookies/${t}`,r.searchParams.set("lang",a),window.location.href=r.toString()}catch(e){var o;if(null===(o=e.responseJSON)||void 0===o||!o.message)throw e;r.error(e.responseJSON.message)}},onCancel:t});return React.createElement(x,{value:T},React.createElement(l.Z,{spinning:C},React.createElement("strong",null,a?(0,o.__)("Edit service group"):(0,o.__)("Add new service group")),React.createElement("hr",null),React.createElement(m.Z,{name:"edit-group-form",form:f,style:{width:300},layout:"vertical",initialValues:I,onFinish:k,onFinishFailed:Z,onValuesChange:S,labelWrap:!0},React.createElement(w,null))))}));var S=a(2420),N=a(51412),I=a(69017),x=a(89596),T=a(15320),_=a(60065);const A=(0,r.Pi)((e=>{let{group:t}=e;const{optionStore:{others:{hints:{deleteCookieGroup:a}}},cookieStore:{essentialGroup:r}}=(0,u.m)(),{busy:i,data:{id:d,name:m,description:p}}=t,[g,E]=(0,n.useState)(!1),v=(0,T.R)().group.key===t.key,R=d===r.key,h=(0,s.useNavigate)(),y=(0,n.useCallback)((async()=>{await t.delete({force:!0}),h(`/cookies/${r.key.toString()}`,{replace:!0})}),[t,r,v]);return React.createElement(l.Z,{spinning:i},React.createElement(I.Z,{title:p,placement:"bottomLeft"},React.createElement("span",null,m)),v&&React.createElement(c.Z,{open:g,arrow:{pointAtCenter:!0},content:React.createElement(Z,{edit:t,onClose:()=>E(!1)}),placement:"bottomLeft"},React.createElement(S.Z,{onClick:()=>E(!0),style:{margin:0,marginLeft:5}})),v&&(R?React.createElement(I.Z,{placement:"bottomLeft",arrow:{pointAtCenter:!0},overlay:(0,o.__)('The "%s" service group cannot be deleted.',m)},React.createElement(N.Z,{style:{margin:0,marginLeft:5,color:"#d2d2d2"}})):React.createElement(x.Z,{title:(0,_.E)([(0,o.__)("Are you sure you want to delete this service group? All services within this group will also be deleted. Consider moving them before you delete the service group."),...a].join("\n\n")),placement:"bottom",onConfirm:y,okText:(0,o.__)("Delete"),cancelText:(0,o.__)("Cancel"),overlayStyle:{maxWidth:350},onOpenChange:()=>E(!1)},React.createElement(N.Z,{style:{margin:0,marginLeft:5}}))))}));var D=a(65311),L=a.n(D),B=a(50088),G=a(47359);const M=(0,r.Pi)((()=>{const{cookieStore:e,optionStore:t}=(0,u.m)(),{essentialGroup:a,groups:{sortedGroups:r}}=e,d=(0,s.useParams)(),{pathname:m}=(0,s.useLocation)(),p=m.indexOf("tcf-vendors")>-1,[g,E]=(0,n.useState)(!1),v=(p?"tcf-vendors":d.cookieGroup)||(null==a?void 0:a.key.toString()),R=!p&&!d.cookieGroup,h=(0,s.useNavigate)(),{isBannerActive:y,isOnlyRcbCookieCreated:f,isTcf:b}=t,{groups:C}=e,k=(e=>{const t=(0,n.useRef)(),{cookieStore:a}=(0,u.m)(),{groups:{entries:{size:r}},essentialGroup:o}=a;return(0,n.useLayoutEffect)((()=>{if(t.current&&e&&r>1){const e=L()(t.current).find(".rcb-antd-tabs-nav-wrap > div:first");return e.sortable({items:"> .rcb-antd-tabs-tab",helper:"clone",cancel:"",axis:"x",start:(e,t)=>{t.placeholder.height("auto")},update:()=>{const t=e.find("> div > [aria-controls]").toArray().map((e=>+e.getAttribute("aria-controls").split("-").pop()));a.groups.orderCookieGroups(t)}}),()=>e.sortable("destroy")}return()=>{}}),[t.current,r,a,o]),t})(!R),w=(0,n.useCallback)((()=>{R&&a&&h(b?"tcf-vendors":a.key.toString(),{replace:!0})}),[R,a,b]);return(0,G.b)((async t=>{let{aborted:n}=t;a||(await e.fetchGroups(),n()||w())}),[a,w,b]),(0,n.useEffect)((()=>{w()}),[w]),R||0===r.length?React.createElement(l.Z,{style:{margin:"auto",marginTop:15}}):React.createElement(l.Z,{spinning:C.busy},React.createElement("div",{ref:k},!y&&!f&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,o.__)("The cookie banner is globally deactivated in the settings and is therefore not displayed on your website.")," ","• ",React.createElement("a",{href:"#/settings"},(0,o.__)("Enable now")))),React.createElement(i.Z,{destroyInactiveTabPane:!0,activeKey:v,tabBarExtraContent:-1===["tcf-vendors"].indexOf(v)&&React.createElement(c.Z,{open:g,content:React.createElement(Z,{onClose:()=>E(!1)}),placement:"bottomRight"},React.createElement("button",{className:"button button-primary button-large",style:{marginTop:6},onClick:()=>E(!g)},(0,o.__)("Add group"))),onTabClick:e=>{h(`/cookies/${e}`)},items:[b&&{key:"tcf-vendors",label:(0,o.__)("TCF Vendors"),children:React.createElement(React.Fragment,null,React.createElement(s.Outlet,null),React.createElement(B.K,{identifier:"tcf-vendor"}))},b&&{key:"tcf-vendors-split",label:React.createElement("span",null,"•"),disabled:!0,children:React.createElement("div",null)},...r.map((e=>({key:e.key.toString(),label:React.createElement(A,{group:e}),children:React.createElement(React.Fragment,null,React.createElement(s.Outlet,null),React.createElement(B.K,{identifier:"cookie"}))})))].filter(Boolean)})))}))},41298:(e,t,a)=>{a.r(t),a.d(t,{CookiesList:()=>F});var n=a(87363),r=a(68038),o=a(36157),l=a(15320),i=a(49048),c=a(73186);const s=Symbol(),u=()=>(0,c._3)(s);var d=a(46270),m=a(61811),p=a(57853),g=a(88122),E=a(60204),v=a(28167),R=a(89596),h=a(69017),y=a(29894),f=a(52956),b=a(35392),C=a(98570),k=a(40530),w=a(76376),O=a(34139),Z=a(13961),S=a(77874),N=a(60065);const{Paragraph:I}=v.Z,x=e=>{let{busy:t,attributes:{isEssential:a,deleteHint:n,deletable:r,id:o,name:l,purpose:i,status:c,isEmbeddingOnlyExternalResources:s,uniqueName:d,technicalDefinitions:p,legalBasis:g,tagManagerOptInEventName:v,tagManagerOptOutEventName:x,executeCodeOptInWhenNoTagManagerConsentIsGiven:T,executeCodeOptOutWhenNoTagManagerConsentIsGiven:_,codeOptIn:A,codeOptOut:D,deleteTechnicalDefinitionsAfterOptOut:L,codeOnPageLoad:B,presetId:G},avatarUrl:M,isUpdateAvailable:P,languages:F,languageOnClick:V,dragHandle:U}=e;const{__:W}=(0,E.Q)(),{isLicensed:q}=(0,O.$)(),{isConsentForwarding:H,onEdit:$,onDelete:z,setCookiesViaManager:J,isGcm:Q}=u(),K=(0,w.X)(),j=null==p?void 0:p[0],{managerLabel:Y,serviceIsManager:X,features:ee}=(0,Z.Lg)(J,{isGcm:Q,presetId:G});return React.createElement(m.Z.Item,{itemID:o.toString(),actions:[React.createElement("a",{key:"edit",onClick:()=>$(o)},W(P?"Edit and update":"Edit")),r?React.createElement(R.Z,{key:"delete",title:(0,N.E)([W("Are you sure you want to delete this service?"),...n].join("\n\n")),placement:"bottomRight",onConfirm:()=>z(o),okText:W("Delete"),cancelText:W("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},W("Delete"))):React.createElement(h.Z,{placement:"topRight",arrow:{pointAtCenter:!0},overlay:W('The "%s" service cannot be deleted.',l)},React.createElement("a",{style:{opacity:.5}},W("Delete"))),(null==F?void 0:F.length)&&React.createElement(S.s,{recordId:o,languages:F,key:"languages",onClick:V}),React.createElement("a",{key:"drag"},U)].filter(Boolean)},React.createElement(y.Z,{spinning:t},React.createElement(m.Z.Item.Meta,{avatar:M?React.createElement(f.C,{size:"large",src:M,shape:"square"}):React.createElement(f.C,{size:"large",style:{backgroundColor:s?"#4ea29a":K[j.type].backgroundColor}},s?W("None"):K[j.type].abbr),title:React.createElement("span",null,l," ","draft"===c?React.createElement(b.Z,{color:"orange"},W("Draft")):"private"===c?React.createElement(b.Z,{color:"red"},W("Disabled")):null,!!s&&React.createElement(b.Z,null,W("No technical cookies")),!a&&"legitimate-interest"===g&&React.createElement(b.Z,null,W("Legitimate interest (Opt-out)")),a&&"legal-requirement"===g&&React.createElement(b.Z,null,W("Compliance with a legal obligation")),!!G&&React.createElement(b.Z,null,W("Created from template")),!!G&&!M&&React.createElement(h.Z,{title:W(q?"There is no longer a service template for this service. Probably the service has been discontinued. Please look for alternatives!":"This service was created from a template. As you do not have a license activated at the moment, updates that are potentially available cannot be downloaded.")},React.createElement(b.Z,{color:"red"},W(q?"No longer supported":"Possibly outdated"))),!!P&&React.createElement(h.Z,{title:W("The service template has been updated to provide current legal and technical information.")},React.createElement(b.Z,{color:"green"},W("Update available")))),description:React.createElement("div",null,!!i&&React.createElement(I,{style:{color:"inherit",marginBottom:0},ellipsis:{rows:3}},(0,N.E)(i)),!!(A||D||B)&&React.createElement("div",{style:{paddingTop:5}},W("Executes code on"),":"," ",!!A&&React.createElement(b.Z,null,W("Opt-in"),ee.executeCodeWhenNoTagManagerConsentIsGiven&&T&&React.createElement(h.Z,{title:W("Only run this script if the user has not consented to use %s",Y)},React.createElement("span",null," ",React.createElement(C.Z,null)))),(!!D||L)&&!a&&React.createElement(b.Z,null,W("Opt-out"),!1!==ee.executeCodeWhenNoTagManagerConsentIsGiven&&_&&React.createElement(h.Z,{title:W("Only run this script if the user has not consented to use %s",Y)},React.createElement("span",null," ",React.createElement(C.Z,null))),L&&React.createElement(h.Z,{title:W("Delete all first-party cookies after opt-out. First-party cookies are only cookies that are set by or for this domain.")},React.createElement("span",null," ",React.createElement(k.Z,null)))),!!B&&React.createElement(b.Z,null,W("Page load"))),!!Y&&React.createElement("div",{style:{paddingTop:5}},X?React.createElement("span",null,W("Opt-in script loads"),": ",React.createElement(b.Z,null,Y)):ee.events&&React.createElement("span",null,W("%s Events",Y),":"," ",React.createElement(b.Z,null,React.createElement("strong",null,W("Opt-in"),": "),v||W("None")),React.createElement(b.Z,null,React.createElement("strong",null,W("Opt-out"),": "),x||W("None")))),H&&React.createElement("div",{style:{paddingTop:5}},W("Consent Forwarding Unique Name"),": ",React.createElement(b.Z,null,d)))})))};var T=a(62718),_=a(45653);const A=()=>{const{__:e,_i:t}=(0,E.Q)(),{isEssential:a,isOnlyRealCookieBannerServiceCreated:r,busy:o,rows:l,onSort:i,onCreate:c,servicesCount:s,groupName:v}=u(),R=(0,n.useRef)(),{SortableBodyConnected:h,SortableItem:y,DragHandle:f}=function(e){const t=(0,n.useRef)(),{DragHandle:a,SortableItem:r,SortableBody:o}=(0,n.useMemo)((()=>({DragHandle:(0,_.W6)((()=>React.createElement(T.Z,{style:{cursor:"grab",color:"#999",marginTop:5}}))),SortableItem:(0,_.W8)((e=>React.createElement("div",e))),SortableBody:(0,_.JN)((e=>React.createElement("div",(0,d.Z)({ref:t},e))))})),[]);return{listBodyRef:t,DragHandle:a,SortableItem:r,SortableBody:o,SortableBodyConnected:a=>{let{onSortEnd:n,children:r}=a;return React.createElement(o,{useDragHandle:!0,onSortEnd:(e,t)=>{let{oldIndex:a,newIndex:r}=e;return a!==r&&n(a,r,[...t.target.childNodes])},helperContainer:()=>e.current||t.current},r)}}}(R),b=(0,n.useMemo)((()=>{const e=[];for(let t=0;t<s;t++)e.push({key:t});return e}),[s]),C=e("Add service");return(a&&r?s>1:s>0)?React.createElement(React.Fragment,null,React.createElement("div",{className:"wp-clearfix"},React.createElement("a",{onClick:c,className:"button button-primary right",style:{marginBottom:10}},C)),o?React.createElement(m.Z,{dataSource:b,renderItem:()=>React.createElement(m.Z.Item,null,React.createElement(p.Z,{loading:!0,active:!0,paragraph:{rows:1}}))}):React.createElement(h,{onSortEnd:i},React.createElement(m.Z,null,React.createElement("div",{ref:R},l.map(((e,t)=>React.createElement(y,{key:e.attributes.id,index:t,"data-id":e.attributes.id},React.createElement(x,(0,d.Z)({},e,{key:e.attributes.id.toString(),dragHandle:React.createElement(f,null)}))))))))):React.createElement(g.Z,{description:t(e("You have not yet created a service in {{strong}}%s{{/strong}}.",v),{strong:React.createElement("strong",null)})},React.createElement("a",{className:"button button-primary",onClick:c},C))};var D=a(12053),L=a(63593),B=a(24635),G=a(56821),M=a(40045),P=a(45567);const F=(0,r.Pi)((()=>{const{message:e}=L.Z.useApp(),{optionStore:{isOnlyRcbCookieCreated:t,isConsentForwarding:a,isDataProcessingInUnsafeCountries:r,setCookiesViaManager:u,isGcm:d,others:{hints:{deleteCookie:m}}},cookieStore:{unassignedCookies:p,essentialGroup:g}}=(0,i.m)(),E=(0,o.v)("cookie"),{group:v,addCookieLink:R,editLink:h}=(0,l.R)(),{cookies:y,cookiesCount:f,data:{name:C}}=v,{busy:k,sortedCookies:w,entries:O}=y;(0,n.useEffect)((()=>{v.fetchCookies()}),[]);const[Z,S]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,c.LN)(s,...t)}({isConsentForwarding:a,isDataProcessingInUnsafeCountries:r,isOnlyRealCookieBannerServiceCreated:t,isEssential:g.key===v.key,setCookiesViaManager:u,isGcm:d,groupName:C,busy:k,servicesCount:f,rows:w.map((t=>{const{key:a,busy:n,data:r,templateModel:o,technicalDefinitions:l,isUpdateAvailable:i}=t,{title:{raw:c},content:{raw:s},status:u,meta:{presetId:d,codeOptIn:p,codeOptOut:E,codeOnPageLoad:v,uniqueName:R,deleteTechnicalDefinitionsAfterOptOut:h,executeCodeOptInWhenNoTagManagerConsentIsGiven:y,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f,isEmbeddingOnlyExternalResources:b,legalBasis:C,tagManagerOptInEventName:k,tagManagerOptOutEventName:w}}=r;return{busy:n,attributes:{id:a,name:c,purpose:s,status:u,codeOptIn:p,codeOptOut:E,codeOnPageLoad:v,uniqueName:R,deletable:"real-cookie-banner"!==d,deleteHint:m,deleteTechnicalDefinitionsAfterOptOut:h,executeCodeOptInWhenNoTagManagerConsentIsGiven:y,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f,isEmbeddingOnlyExternalResources:b,isEssential:r["rcb-cookie-group"][0]===g.key,legalBasis:C,presetId:d,tagManagerOptInEventName:k,tagManagerOptOutEventName:w,technicalDefinitions:l},avatarUrl:null==o?void 0:o.data.logoUrl,isUpdateAvailable:i,languages:r.multilingual,languageOnClick:async(t,a)=>{let{code:n,id:r,taxonomies:o}=a;try{let e,a;if(!1===r){const{id:r,taxonomies:{"rcb-cookie-group":o}}=await(0,D.e)("rcb-cookie",t,n);e=r,a=o[0]}else e=r,a=o["rcb-cookie-group"][0];const l=new URL(window.location.href);l.hash=`#/cookies/${a}/edit/${e}`,l.searchParams.set("lang",n),window.location.href=l.toString()}catch(t){var l;if(null===(l=t.responseJSON)||void 0===l||!l.message)throw t;e.error(t.responseJSON.message)}}}}))},{onSort:(e,t,a,n)=>{const r=n.map((e=>{let{dataset:{id:t}}=e;return+t}));!function(e,t,a){const{length:n}=e,r=t<0?n+t:t;if(r>=0&&r<n){const r=a<0?n+a:a,[o]=e.splice(t,1);e.splice(r,0,o)}}(r,t,a),v.cookies.orderCookies(r)},onDelete:(e,t)=>O.get(t).delete({force:!0}),onEdit:(e,t)=>{window.location.href=h(O.get(t))},onCreate:()=>{window.location.href=R}},{inherit:["busy","groupName","isEssential","isOnlyRealCookieBannerServiceCreated","rows","servicesCount"]});return React.createElement(P.f,null,p.size>0&&React.createElement("div",{style:{textAlign:"center",marginBottom:15}},React.createElement(B.Z,{placement:"bottomRight",menu:{items:Array.from(p.values()).map((e=>{let{id:t,title:a}=e;return{key:t,label:React.createElement("a",{href:`#/cookies/${g.key}/edit/${t}`},a)}}))}},React.createElement("a",null,React.createElement(b.Z,{color:"red"},React.createElement(G.Z,null)," ",(0,M._n)("One unassigned service","%d unassigned services",p.size,p.size))))),React.createElement(Z,{value:S},React.createElement(A,null)),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},E))}))},18298:(e,t,a)=>{a.r(t),a.d(t,{CookieTemplateCenter:()=>d});var n=a(87363),r=a(68038),o=a(51194),l=a(87870),i=a(49048),c=a(45567),s=a(61959),u=a(50056);const d=(0,r.Pi)((()=>{const{cookieStore:e}=(0,i.m)(),[t,a]=(0,n.useState)(!1),[r,d]=(0,n.useState)(),{force:m,attributes:p,navigateAfterCreation:g=!0}=(0,s.y)(),E=(0,n.useCallback)((async()=>{t||(a(!0),await e.fetchTemplatesServices());const n=Array.from(e.templatesServices.values()).map((e=>{let{data:t}=e;return t}));return n.sort(((e,t)=>e.headline.localeCompare(t.headline))),n}),[t]),[v,R]=(0,o.j)({type:"service",quickLinks:["service-individual","service-scanner","cookie-experts"],enableLocalFilter:!0,syncTemplates:()=>e.fetchTemplatesServices({storage:"redownload"}),fetchTemplates:E,fetchUse:async t=>(await E(),e.templatesServices.get(t).fetchUse()),initialSelection:m,onSelect:(e,t)=>d({identifier:null==e?void 0:e.identifier,version:null==e?void 0:e.version,overwriteAttributes:t&&p?JSON.parse(p):void 0})});return void 0===r?React.createElement(c.f,null,React.createElement(v,{value:R},React.createElement(l.F,null))):React.createElement(c.f,{maxWidth:"fixed"},React.createElement(u.CookieEditForm,{template:r.identifier?{identifier:r.identifier,version:r.version}:void 0,navigateAfterCreation:g,overwriteAttributes:r.overwriteAttributes}))}))}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.2/36a78eaf86b2825f9e3938f6ac4e3c4e/chunk-config-tab-cookies.lite.js.map
