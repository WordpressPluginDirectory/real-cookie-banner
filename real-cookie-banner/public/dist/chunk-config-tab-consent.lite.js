"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[625],{78451:(e,t,a)=>{a.d(t,{x:()=>r});var n=a(71414);const r=e=>{let{children:t,wrapperAttributes:a={},...r}=e;const{modal:c,tag:l}=(0,n.T)(r);return React.createElement(React.Fragment,null,c,React.createElement("span",a,l))}},44839:(e,t,a)=>{a.d(t,{A:()=>n});const n=(0,a(68038).Pi)((()=>React.createElement("div",null)))},22724:(e,t,a)=>{a.r(t),a.d(t,{ConsentTabRouter:()=>se});var n=a(68038),r=a(66711),c=a(45567),l=a(6628),o=a(40045),s=a(87363);const i=(0,n.Pi)((()=>React.createElement("div",null))),m=(0,n.Pi)((()=>React.createElement("div",null)));var d=a(44839),u=a(49048),_=a(73447),p=a(45890),h=a(43734),g=a(24657),R=a(19893),y=a(88122),E=a(48488),b=a.n(E);function v(){return(0,s.useMemo)((()=>({[(0,o.__)("Today")]:[b()(),b()()],[(0,o.__)("This Year")]:[b()().startOf("year"),b()().endOf("year")],[(0,o.__)("This Month")]:[b()().startOf("month"),b()().endOf("month")],[(0,o.__)("This Week")]:[b()().startOf("week"),b()().endOf("week")],[(0,o.__)("Last 30 days")]:[b()().subtract(30,"days"),b()()],[(0,o.__)("Last 90 days")]:[b()().subtract(30,"days"),b()()]})),[])}var f=a(15764);const k=(0,n.Pi)((()=>{const{optionStore:{others:{isPro:e,assetsUrl:t},contexts:a},statsStore:n}=(0,u.m)(),{filters:{dates:r,context:c}}=n,l=Object.keys(a),[E,b]=(0,s.useState)(),k=v();return e?React.createElement(React.Fragment,null,React.createElement("div",{style:{textAlign:"right"}},l.length>1&&React.createElement(React.Fragment,null,React.createElement("label",null,React.createElement(p.Z,{style:{width:200,textAlign:"left"},value:c,onSelect:e=>n.applyContext(e)},l.map((e=>React.createElement(p.Z.Option,{value:e,key:e},a[e]))))),React.createElement(h.Z,{type:"vertical"})),React.createElement("label",null,(0,o.__)("Period"),":"," ",React.createElement(_.D,{value:r,ranges:k,onChange:e=>n.applyDates(e)}))),2===(null==r?void 0:r.length)?React.createElement(React.Fragment,null,React.createElement(g.Z,null,React.createElement(R.Z,{md:12,sm:24},React.createElement(h.Z,null,(0,o.__)("Consents by clicked button")),React.createElement(i,null)),React.createElement(R.Z,{md:12,sm:24},React.createElement(h.Z,null,(0,o.__)("Cookie banner bypass")),React.createElement(m,null))),React.createElement(g.Z,null,React.createElement(R.Z,{md:20,sm:24,style:{margin:"auto",paddingTop:20,marginTop:30}},React.createElement(h.Z,null,(0,o.__)("Consents by group")),React.createElement(d.A,null)))):React.createElement(y.Z,{description:(0,o.__)("Please provide a date range!")})):React.createElement(React.Fragment,null,React.createElement(f.n,{title:(0,o.__)("Want to see detailed statistics about the consents of your visitors?"),inContainer:!0,inContainerElement:E,testDrive:!0,feature:"stats",description:(0,o.__)("You can get several statistics about how your users use the cookie banner. This helps you to calculate the total number of users who do not want to be tracked, for example, by extrapolating data from Google Analytics.")}),React.createElement("div",{ref:b,className:"rcb-antd-modal-mount",style:{height:800,backgroundImage:`url('${t}statistics-blured.png')`}}))}));var w=a(46270),Z=a(70756),x=a(63593),C=a(35392),S=a(89596),N=a(69017),T=a(87642),P=a(17635),A=a(98595);const D=(0,n.Pi)((e=>{let{record:t,visible:a,onClose:n,replayBannerRecord:r}=e})),F=(0,n.Pi)((e=>{let{record:{forwarded:t,revision:{data:{options:a}},revision_independent:{data:{options:n}}}}=e;const{optionStore:{others:{pageByIdUrl:r,iso3166OneAlpha2:c}}}=(0,u.m)(),l={...n,...a};return t?null:React.createElement(g.Z,null,React.createElement(R.Z,{span:24},React.createElement(h.Z,null,(0,o.__)("Settings at the time of consent"))),Object.keys(l).map((e=>{var t,a,n;let s=e,i=l[e],m=!0;switch(e){case"isTcf":case"cookieVersion":case"consentDuration":case"isGcm":case"isGcmRedactAdsDataWithoutConsent":case"isGcmListPurposes":case"isGcmCollectAdditionalDataViaUrlParameters":return null;case"operatorCountry":s=(0,o.__)("Website operator country"),i=c[i]||i||(0,o.__)("Not defined");break;case"operatorContactAddress":s=(0,o.__)("Website operator full address"),i=i||(0,o.__)("Not defined");break;case"operatorContactEmail":s=(0,o.__)("Website operator email"),i=i||(0,o.__)("Not defined");break;case"operatorContactPhone":s=(0,o.__)("Website operator phone"),i=i||(0,o.__)("Not defined");break;case"operatorContactFormId":s=(0,o.__)("Contact form page"),i=i?React.createElement("a",{href:`${r}=${i}`,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,o.__)("Open site")," (ID ",i,")"):(0,o.__)("Not defined");break;case"territorialLegalBasis":s=(0,o.__)("Legal basis to be applied"),i=i.map((e=>{switch(e){case"gdpr-eprivacy":return(0,o.__)("GDPR / ePrivacy Directive");case"dsg-switzerland":return(0,o.__)("DSG (Switzerland)");default:return e}})).join(", ");break;case"isBannerActive":s=(0,o.__)("Cookie Banner/Dialog"),i=i?(0,o.__)("Active"):(0,o.__)("Deactivated");break;case"isBlockerActive":s=(0,o.__)("Content Blocker"),i=i?(0,o.__)("Active"):(0,o.__)("Deactivated");break;case"setCookiesViaManager":s=(0,o.__)("Set cookies after consent via"),i="googleTagManager"===i||"googleTagManagerWithGcm"===i?"Google Tag Manager":"matomoTagManager"===i?"Matomo Tag Manager":(0,o.__)("Disabled");break;case"isAcceptAllForBots":s=(0,o.__)("Automatically accept all services for bots"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"isRespectDoNotTrack":s=(0,o.__)('Respect "Do Not Track"'),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"cookieDuration":s=(0,o.__)("Duration of cookie consent"),i=`${i} ${(0,o.__)("days")}`;break;case"isSaveIp":s=(0,o.__)("Save IP address on consent"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"isEPrivacyUSA":s=(0,o.__)("Consent for data processing in the USA"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"isDataProcessingInUnsafeCountries":s=(0,o.__)("Consent for data processing in unsecure third countries"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"dataProcessingInUnsafeCountriesSafeCountries":if(!l.isDataProcessingInUnsafeCountries)return null;if(s=(0,o.__)("Secure countries in terms of the GDPR"),i){const e=i.map((e=>c[e]));i=React.createElement(N.Z,{title:e.join(", ")},React.createElement(C.Z,null,(0,o.__)("%d countries",e.length)))}else i=(0,o.__)("Not defined");break;case"isAgeNotice":s=(0,o.__)("Age notice for consent"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"ageNoticeAgeLimit":if(!l.isAgeNotice)return null;s=(0,o.__)("Age limit");break;case"isListServicesNotice":s=(0,o.__)("Naming of all services in first view"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"isConsentForwarding":s=(0,o.__)("Consent Forwarding"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"forwardTo":s=(0,o.__)("Forward To"),i&&(i=i.map((e=>React.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,o.__)("Open endpoint"))))),i=null!==(t=i)&&void 0!==t&&t.length?i:(0,o.__)("Not defined");break;case"crossDomains":s=(0,o.__)("Additional cross domain endpoints"),i&&(i=i.map((e=>React.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,o.__)("Open endpoint"))))),i=null!==(a=i)&&void 0!==a&&a.length?i:(0,o.__)("Not defined");break;case"hidePageIds":s=(0,o.__)("Hide on additional pages"),i&&(i=i.map((e=>React.createElement("a",{key:e,href:`${r}=${e}`,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,o.__)("Open site")," (ID ",e,")")))),i=null!==(n=i)&&void 0!==n&&n.length?i:(0,o.__)("Not defined");break;case"isCountryBypass":s=(0,o.__)("Geo-restriction"),i=i?(0,o.__)("Enabled"):(0,o.__)("Disabled");break;case"countryBypassCountries":if(!l.isCountryBypass)return null;if(s=(0,o.__)("Show banner only to users from these countries"),i){const e=i.map((e=>c[e]));i=React.createElement(N.Z,{title:e.join(", ")},React.createElement(C.Z,null,(0,o.__)("%d countries",e.length)))}else i=(0,o.__)("Not defined");break;case"countryBypassType":if(!l.isCountryBypass)return null;s=(0,o.__)("Implicit consent for users from third countries"),i="all"===i?(0,o.__)("Accept all"):(0,o.__)("Accept only essentials");break;default:m=!1}return React.createElement(R.Z,{key:e,md:12,sm:24},React.createElement("div",{style:{padding:"0 10px"}},m?React.createElement("strong",null,s):React.createElement("code",null,s),": ",i))})))})),I=(0,n.Pi)((e=>{let{record:t,replayBlockerRecord:a,replayFinished:n}=e}));var B=a(78451);const L=(0,n.Pi)((e=>{let{record:t,onPreview:a}=e;const{optionStore:{others:{isPro:n}}}=(0,u.m)(),[r,c]=(0,s.useState)(!1),{custom_bypass:l,blocker:i,recorder:m,forwarded:d,viewed_page:_,design_version:p}=t;return l?React.createElement(React.Fragment,null,React.createElement(h.Z,null,(0,o.__)("Bypassed banner")),React.createElement("p",{className:"description"},(0,o._i)((0,o.__)("There is no preview for this consent, as it was given implicitly by {{strong}}%s bypass{{/strong}}.",t.custom_bypass_readable),{strong:React.createElement("strong",null)}))):i>0?React.createElement(React.Fragment,null,React.createElement(h.Z,null,(0,o.__)("Content Blocker as at the time of consent")),React.createElement("p",{className:"description"},(0,o.__)("The consent to the service was given via a content blocker. Below you can see how the content blocker looked like when the user consented.")),n?React.createElement(I,{record:t,replayBlockerRecord:r,replayFinished:()=>c(!1)}):React.createElement(B.x,{title:(0,o.__)("You want to see what was displayed to the visitor?"),tagText:(0,o.__)("Unlock preview"),testDrive:!0,feature:"consent-preview-blocker",assetName:(0,o.__)("pro-modal/consent-preview-blocker.png"),description:(0,o.__)("We generate the content blocker that your visitor has seen from all settings, design preferences and services. You can see exactly how his or her consent was obtained and track clicks on buttons.")}),n&&!!m&&React.createElement(React.Fragment,null,React.createElement("p",{className:"description",style:{marginTop:15}},(0,o.__)("The process of how the website visitor interacted with the content blocker to give consent was recorded for documentation purposes. You can replay the interactions. Note that the dimensions of the content blocker and consent dialog do not have to be the same as the ones that were displayed to the website visitor, and the recording may not be fully accurate if, for example, you use custom CSS on your website or the visitor used a translating browser extension.")),React.createElement("button",{className:"button-primary button-large",onClick:()=>{c(!r)}},r?(0,o.__)("Stop"):(0,o.__)("Replay interactions")))):d>0?React.createElement(React.Fragment,null,React.createElement(h.Z,null,(0,o.__)("Forwarded consent")),React.createElement("p",{className:"description"},(0,o._i)((0,o.__)("There is no preview for this consent, as it was given implicitly by forwarding the consent. The user has given his/her consent via {{a}}%s{{/a}}, and this consent has been forwarded automatically.",_),{a:React.createElement("a",{href:_,rel:"noopener noreferrer",target:"_blank"})}))):React.createElement(React.Fragment,null,React.createElement(h.Z,null,(0,o.__)("Cookie banner as at the time of consent")),React.createElement("p",{className:"description"},(0,o.__)("Use the button below to see what the cookie banner looked like at the time of the user's consent. The services/groups selected there also look the way the user saw them. A button framed in red shows which button the user clicked on at the time of consent.")),n?React.createElement("button",{className:"button-primary button-large",onClick:()=>{a(t,!1)},disabled:t.tcf_string&&p<7},(0,o.__)("Open banner")):React.createElement(B.x,{title:(0,o.__)("You want to see what was displayed to the visitor?"),tagText:(0,o.__)("Unlock preview"),testDrive:!0,feature:"consent-preview-banner",assetName:(0,o.__)("pro-modal/consent-preview-banner.png"),description:(0,o.__)("We generate the cookie banner from all (design) settings and services that the visitor has seen. You can see exactly how consent was obtained and track clicks on buttons.")}),n&&!!m&&React.createElement(React.Fragment,null,React.createElement("p",{className:"description",style:{marginTop:15}},(0,o.__)("The process of how the website visitor interacted with the cookie banner to give consent was recorded for documentation purposes. You can replay the interactions. Note that the recording may not be fully accurate if, for example, you use custom CSS on your website or the visitor used a translating browser extension.")),React.createElement("button",{className:"button-primary button-large",onClick:()=>{a(t,!0)},disabled:p<6||t.tcf_string&&p<7},(0,o.__)("Replay interactions")),p<6?React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,o._i)((0,o.__)("This consent was documented with a Real Cookie Banner version prior to 3.10.0. Due to rework to comply with the {{aAct}}European Accessibility Act{{/aAct}}, interactions with the currently installed version of Real Cookie Banner are no longer playable. However, they are still documented in the consent export. If you need to play the interactions, please request an old Real Cookie Banner version from the {{aSupport}}support{{/aSupport}}."),{aAct:React.createElement("a",{href:(0,o.__)("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882"),rel:"noreferrer",target:"_blank"}),aSupport:React.createElement("a",{href:(0,o.__)("https://devowl.io/support/"),rel:"noreferrer",target:"_blank"})}))):t.tcf_string&&p<7?React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,o._i)((0,o.__)("This consent was documented with a Real Cookie Banner version prior to 4.1.0. Due to rework to comply with the TCF 2.2 standard, interactions with the currently installed version of Real Cookie Banner are no longer playable. However, they are still documented in the consent export. If you need to play the interactions, please request an old Real Cookie Banner version from the {{aSupport}}support{{/aSupport}}."),{aSupport:React.createElement("a",{href:(0,o.__)("https://devowl.io/support/"),rel:"noreferrer",target:"_blank"})}))):null))}));var O=a(66880);const Y=(0,n.Pi)((e=>{let{record:t}=e;const{message:a}=x.Z.useApp();return React.createElement(React.Fragment,null,React.createElement(h.Z,null,(0,o.__)("Export consent")),React.createElement("p",{className:"description"},(0,o.__)("Use the button below to export all consents in a machine readable form.")),React.createElement("button",{className:"button button-large",onClick:()=>{(0,O.v)(JSON.stringify(t.export)),a.success((0,o.__)("Successfully copied to the clipboard!"))}},(0,o.__)("Export to clipboard")))}));var M=a(29894);const U=(0,n.Pi)((e=>{let{record:t,onPreview:a}=e;const[n,r]=(0,s.useState)(!1),{viewed_page:c,context:l,viewport_width:i,viewport_height:m,forwarded:d}=t;return(0,s.useEffect)((()=>{t.fetchRevisions().then((()=>{r(!0)}))}),[t]),n?React.createElement("div",null,React.createElement("div",null,React.createElement("strong",null,(0,o.__)("Viewport (px)"),":")," ",i," x ",m),React.createElement("div",null,React.createElement("strong",null,(0,o.__)("Viewed page"),":")," ",React.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},c)),!!l&&React.createElement("div",null,React.createElement("strong",null,(0,o.__)("Context"),":")," ",React.createElement("code",null,l)),React.createElement(F,{record:t}),React.createElement(g.Z,null,React.createElement(R.Z,{md:d?void 0:12,sm:d?void 0:24,span:d?24:void 0},React.createElement("div",{style:{padding:10}},React.createElement(L,{record:t,onPreview:a}))),!d&&React.createElement(R.Z,{md:12,sm:24},React.createElement("div",{style:{padding:10}},React.createElement(Y,{record:t}))))):React.createElement(M.Z,{spinning:!0})}));var W=a(36157);const $=(0,n.Pi)((e=>{let{value:t,onChange:a}=e;const[n,r]=(0,s.useState)(t),[c,l]=(0,s.useState)(!1),{consentStore:i}=(0,u.m)(),{busyReferer:m,referer:d}=i;return(0,s.useEffect)((()=>{c&&i.fetchReferer()}),[c]),React.createElement(React.Fragment,null,React.createElement(p.Z,{showSearch:!0,onFocus:()=>l(!0),value:n,notFoundContent:m?React.createElement(M.Z,{size:"small"}):null,loading:m,dropdownMatchSelectWidth:!1,dropdownAlign:{points:["tr","br"]},style:{width:200},placeholder:(0,o.__)("Filter by URL..."),optionFilterProp:"children",onChange:e=>{const t=e||void 0;r(t),null==a||a(t)},className:"rcb-antd-select-ellipses-left"},React.createElement(p.Z.Option,{value:null,disabled:!t},(0,o.__)("Reset filter")),d.map((e=>React.createElement(p.Z.Option,{key:e,value:e},e)))))}));var G=a(30547),j=a(33124),z=a(60204);const{Column:K}=Z.Z,{Column:V}=Z.Z,H=(0,n.Pi)((()=>{const{message:e}=x.Z.useApp(),{consentStore:t,optionStore:{contexts:a}}=(0,u.m)(),{busyConsent:n,pageCollection:r,perPage:c,count:l,truncatedIpsCount:i,filters:{page:m,referer:d,context:g,dates:R,ip:E}}=t,[b,f]=(0,s.useState)(),[k,F]=(0,s.useState)(!1),[I,B]=(0,s.useState)(!0),L=Object.keys(a),O=v(),Y=(0,s.useCallback)((async()=>{try{await t.fetchAll()}catch(t){e.error(t.responseJSON.message)}}),[]);(0,s.useEffect)((()=>{Y()}),[]);const M=(0,W.v)("list-of-consents"),K=(0,W.v)("consents-deleted"),H=function(){const{__:e}=(0,z.Q)();return(0,s.useCallback)((()=>({filterDropdown:t=>{let{setSelectedKeys:a,selectedKeys:n,confirm:r,clearFilters:c}=t;return React.createElement("div",{style:{padding:8}},React.createElement(j.Z,{autoFocus:!0,value:n[0],onChange:e=>a(e.target.value?[e.target.value]:[]),style:{width:188,marginBottom:8,display:"block"}}),React.createElement("button",{className:"button-primary right",style:{marginLeft:10},onClick:()=>r()},React.createElement(G.Z,null)," ",e("Search")),React.createElement("button",{className:"button right",onClick:c},e("Reset")),React.createElement("div",{className:"clear"}))},filterIcon:e=>React.createElement(G.Z,{style:{color:e?"#1890ff":void 0}})})),[])}();return React.createElement(React.Fragment,null,b&&React.createElement(D,{record:b,visible:I,replayBannerRecord:k,onClose:()=>{B(!1),F(!1),f(void 0)}}),React.createElement("div",{style:{textAlign:"right",marginBottom:15}},L.length>1&&React.createElement(React.Fragment,null,React.createElement("label",null,React.createElement(p.Z,{style:{width:200,textAlign:"left"},value:g,onSelect:e=>{t.applyPage(1),t.applyContext(e),Y()}},L.map((e=>React.createElement(p.Z.Option,{value:e,key:e},a[e]))))),React.createElement(h.Z,{type:"vertical"})),React.createElement("label",null,(0,o.__)("Period"),":"," ",React.createElement(_.D,{value:R,ranges:O,onChange:e=>{t.applyPage(1),t.applyDates(e||[void 0,void 0]),Y()}})),React.createElement(h.Z,{type:"vertical"}),React.createElement("label",{style:{textAlign:"left"}},React.createElement($,{value:d,onChange:e=>{t.applyPage(1),t.applyReferer(e),Y()}}))),i>0&&!!E&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0"}},React.createElement("p",null,(0,o.__)("For data protection reasons, IP addresses, depending on the configuration of the cookie banner, were only shortened by the last octet and stored hashed. In this case, you can only assign consents to individual IP addresses with a high probability, but not with absolute certainty. Therefore, also match the time of consent to narrow down your search for the proper consent!"))),React.createElement(Z.Z,{pagination:{current:m,pageSize:c,total:l,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},locale:{emptyText:React.createElement(y.Z,{description:(0,o.__)("No data")})},loading:n,dataSource:Array.from(r.values()),rowKey:"id",size:"small",bordered:!0,expandable:{expandedRowRender:e=>React.createElement("div",{style:{background:"white",padding:10}},React.createElement(U,{record:e,onPreview:(e,t)=>{f(e),F(t),B(!0)}})),rowExpandable:()=>!0,expandIcon:e=>{let{expanded:t,onExpand:a,record:n}=e;return React.createElement(C.Z,{style:{cursor:"pointer"},onClick:e=>a(n,e),icon:t?React.createElement(T.Z,null):React.createElement(P.Z,null)},t?(0,o.__)("Less"):(0,o.__)("More"))}},onChange:(e,a)=>{var n,r;let{current:c}=e;const l=(null===(n=a.uuid)||void 0===n?void 0:n[0])||"",o=(null===(r=a.ip)||void 0===r?void 0:r[0])||"";t.applyPage(c),t.applyUuid(l),t.applyIp(o),Y()},footer:()=>React.createElement(S.Z,{overlayStyle:{maxWidth:300},arrow:{pointAtCenter:!0},title:(0,o._i)((0,o.__)("Are you sure you want to delete all consents? You should only do this if it is absolutely necessary. In case you want to continue, make sure you have {{a}}exported{{/a}} all consents beforehand (for legal reasons)."),{a:React.createElement("a",{href:"#/import"})}),okText:(0,o.__)("I am sure!"),cancelText:(0,o.__)("Cancel"),placement:"topRight",onConfirm:()=>window.confirm((0,o.__)("Just to be sure: Do you really want to delete all consents?"))&&t.deleteAll()},React.createElement("button",{className:"button-link"},(0,o.__)("Delete all consents")))},React.createElement(V,{title:(0,o.__)("Time of consent"),dataIndex:"created",key:"created",render:(e,t)=>{const{created:a}=t;return React.createElement(React.Fragment,null,new Date(a).toLocaleString(document.documentElement.lang)," ",t.dnt&&React.createElement(N.Z,{title:(0,o.__)("This consent was given automatically because the browser sent a 'Do Not Track' header. Accordingly, only essential services have been consented to.")},React.createElement(C.Z,{color:"magenta"},(0,o.__)("Do Not Track"))),t.blocker>0&&React.createElement(N.Z,{title:(0,o.__)("This consent has been given in a content blocker.")},React.createElement(C.Z,{color:"cyan"},(0,o.__)("Content Blocker"))),t.forwarded>0&&React.createElement(N.Z,{title:(0,o.__)("This consent was implicitly given by Consent Forwarding.")},React.createElement(C.Z,{color:"green"},t.forwarded_blocker?(0,o.__)("Forwarded through Content Blocker"):(0,o.__)("Forwarded"))),t.custom_bypass&&React.createElement(N.Z,{title:(0,o.__)("This consent was implicitly given by a configured bypass.")},React.createElement(C.Z,{color:"magenta"},t.custom_bypass_readable)))}}),React.createElement(V,(0,w.Z)({title:React.createElement(N.Z,{title:(0,o.__)("Unique name of the consent given")},React.createElement("span",null,(0,o.__)("UUID")," ",React.createElement(A.Z,{style:{color:"#9a9a9a"}}))),dataIndex:"uuid",key:"uuid",render:(e,t)=>React.createElement("code",null,t.uuid)},H())),React.createElement(V,(0,w.Z)({title:React.createElement(N.Z,{title:(0,o.__)("If you have allowed to log IP addresses, you can view them here. Otherwise you will see a salted hash of the IP address (truncated).")},React.createElement("span",null,(0,o.__)("IP")," ",React.createElement(A.Z,{style:{color:"#9a9a9a"}}))),dataIndex:"ip",key:"ip",render:(e,t)=>t.ipv4?React.createElement(React.Fragment,null,React.createElement("code",null,t.ipv4),!!E&&t.ipv4===E&&React.createElement(C.Z,{style:{marginLeft:5},color:"blue"},(0,o.__)("Exact match"))):t.ipv6?React.createElement(React.Fragment,null,React.createElement("code",null,t.ipv6),!!E&&t.ipv6===E&&React.createElement(C.Z,{style:{marginLeft:5},color:"blue"},(0,o.__)("Exact match"))):t.ipv4_hash?React.createElement(N.Z,{title:t.ipv4_hash},React.createElement("code",null,t.ipv4_hash.slice(0,8))):React.createElement(N.Z,{title:t.ipv6_hash},React.createElement("code",null,t.ipv6_hash.slice(0,8)))},H())),React.createElement(V,{title:(0,o.__)("Accepted services"),dataIndex:"decision",key:"decision",render:(e,t)=>t.decision_labels.map((e=>React.createElement(C.Z,{key:e},e)))})),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},M),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},K))}));var J=a(17603),q=a(24772),X=a(61497),Q=a(61811);const ee=(0,n.Pi)((()=>{const{message:e}=x.Z.useApp(),{optionStore:t}=(0,u.m)(),{navMenus:a,busyCountryBypassUpdate:n,others:{adminUrl:r}}=t,c=(0,s.useCallback)((async a=>{try{await t.addLinksToNavigationMenu(a),e.success((0,o.__)("Successfully added the links to your menu!"))}catch(t){e.error(t.responseJSON.message)}}),[]);return React.createElement(Q.Z,{loading:n,itemLayout:"horizontal",dataSource:a,size:"small",locale:{emptyText:React.createElement(y.Z,{description:(0,o.__)("No WordPress menu created yet.")},React.createElement("a",{href:`${r}nav-menus.php`,className:"button button-primary"},(0,o.__)("Create menu")))},renderItem:e=>{const{id:t,applied:a,edit_url:n,languages:r,name:l}=e;return React.createElement(Q.Z.Item,{actions:[a?React.createElement("a",{key:"apply"},React.createElement(X.Z,{style:{color:"#52c41a"}})," ",(0,o.__)("Already added")):React.createElement("a",{key:"applied",onClick:()=>c(t)},(0,o.__)("Add all legal links")),React.createElement("a",{key:"edit-manually",target:"_blank",href:n,rel:"noreferrer"},(0,o.__)("Edit manually"))]},React.createElement(Q.Z.Item.Meta,{title:React.createElement("span",null,l," ",r.length>0&&React.createElement(C.Z,null,r[0].language)),description:"legacy_nav"===e.type&&Object.values(e.locations).join(", ")}))}})}));var te=a(90987),ae=a(46499);const ne={labelCol:{span:24},wrapperCol:{span:24}},re=e=>{let{type:t}=e;const{message:a}=x.Z.useApp(),[n,r]=(0,s.useState)(""),c={tag:"a",id:"",text:"history"===t?(0,o._x)("Privacy settings history","legal-text"):"revoke"===t?(0,o._x)("Revoke consents","legal-text"):(0,o._x)("Change privacy settings","legal-text"),successmessage:"revoke"===t?(0,o._x)("You have successfully revoked consent for services with its cookies and personal data processing. The page will be reloaded now!","legal-text"):""},[l]=te.Z.useForm(),i=(0,s.useCallback)(((e,a)=>{const n=[];for(const e of Object.keys(a)){const t=a[e];t&&n.push(`${e}="${t.replace('"','\\"')}"`)}r(`[rcb-consent type="${t}" ${n.join(" ")}]`)}),[r]);(0,s.useEffect)((()=>{i(c,c)}),[]);const m=(0,s.useCallback)((()=>{(0,O.v)(n),a.success((0,o.__)("Successfully copied shortcode to clipboard!"))}),[n]);return React.createElement(te.Z,(0,w.Z)({name:`link-shortcode-${t}`,form:l},ne,{initialValues:c,onValuesChange:i}),React.createElement(te.Z.Item,{label:(0,o.__)("Appearance")},React.createElement(te.Z.Item,{name:"tag",noStyle:!0},React.createElement(ae.ZP.Group,null,React.createElement(ae.ZP.Button,{value:"a"},(0,o.__)("Link")),React.createElement(ae.ZP.Button,{value:"button"},(0,o.__)("Button")))),React.createElement("p",{className:"description"},(0,o.__)("It is recommended to use a simple link in your footer instead of a button to avoid visual misunderstandings."))),React.createElement(te.Z.Item,{label:(0,o.__)("HTML ID")},React.createElement(te.Z.Item,{name:"id",noStyle:!0},React.createElement(j.Z,null)),React.createElement("p",{className:"description"},(0,o.__)("If you want to apply a custom style to the link/button, the shortcode output should be tagged with an ID attribute."))),React.createElement(te.Z.Item,{label:(0,o.__)("Text")},React.createElement(te.Z.Item,{name:"text",noStyle:!0},React.createElement(j.Z,null)),React.createElement("p",{className:"description"},(0,o.__)("The user must be able to clearly understand the behaviour of the link/button from the name."))),"revoke"===t&&React.createElement(te.Z.Item,{label:(0,o.__)("Success message")},React.createElement(te.Z.Item,{name:"successmessage",noStyle:!0},React.createElement(j.Z.TextArea,{autoSize:!0})),React.createElement("p",{className:"description"},(0,o.__)("After the consent is revoked, the page will be reloaded. Let the user know what happened with a success message."))),React.createElement(te.Z.Item,null,React.createElement(te.Z.Item,{noStyle:!0},React.createElement(h.Z,{style:{marginTop:0}},(0,o.__)("Result")),React.createElement(j.Z.TextArea,{value:n,readOnly:!0,autoSize:!0})),React.createElement("p",{className:"description"},(0,o.__)("Copy the generated shortcode and paste it into your website.")),React.createElement("button",{className:"button alignright",onClick:m},(0,o.__)("Copy to clipboard"))))},{Panel:ce}=J.Z,le=(0,n.Pi)((()=>{const e=(0,W.v)("shortcodes");return React.createElement(React.Fragment,null,React.createElement(J.Z,{defaultActiveKey:["nav"],ghost:!0},React.createElement(ce,{key:"nav",header:React.createElement("a",null,(0,o.__)("Add links to existing menu"))},React.createElement(q.Z,{style:{margin:5}},React.createElement(ee,null))),React.createElement(ce,{key:"shortcode",header:React.createElement("a",null,(0,o.__)("Generate shortcode (advanced)"))},React.createElement(g.Z,null,React.createElement(R.Z,{xl:8,sm:12,xs:24},React.createElement(q.Z,{style:{margin:5},title:(0,o._x)("Change privacy settings","legal-text")},React.createElement(re,{type:"change"}))),React.createElement(R.Z,{xl:8,sm:12,xs:24},React.createElement(q.Z,{style:{margin:5},title:(0,o._x)("Privacy settings history","legal-text")},React.createElement(re,{type:"history"}))),React.createElement(R.Z,{xl:8,sm:12,xs:24},React.createElement(q.Z,{style:{margin:5},title:(0,o._x)("Revoke consents","legal-text")},React.createElement(re,{type:"revoke"})))))),React.createElement("span",{className:"description",style:{display:"block",maxWidth:800,margin:"30px auto 0",textAlign:"center"}},e))}));var oe=a(50088);const se=(0,n.Pi)((()=>{const e=(0,r.useParams)().tab||"",t=(0,r.useNavigate)();return React.createElement(l.Z,{defaultActiveKey:e,onChange:e=>{t(`/consent/${e}`)},items:[{key:"",label:(0,o.__)("Statistics"),children:React.createElement(c.f,{maxWidth:"fixed",style:{paddingTop:0}},React.createElement(k,null))},{key:"list",label:(0,o.__)("List of consents"),children:React.createElement(React.Fragment,null,React.createElement(H,null),React.createElement(oe.K,{identifier:"list-of-consents"}))},{key:"legal",label:(0,o.__)("Legal links"),children:React.createElement(React.Fragment,null,React.createElement(le,null),React.createElement(oe.K,{identifier:"shortcodes"}))}]})}))},45567:(e,t,a)=>{a.d(t,{f:()=>n});const n=e=>{let{children:t,maxWidth:a="auto",style:n={}}=e;return React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===a?1300:a,...n}},t)}},73447:(e,t,a)=>{a.d(t,{D:()=>d});var n=a(46270),r=a(40045),c=a(48488),l=a.n(c),o=a(57350),s=a(53090);const i=o.Z.generatePicker(s.Z),{RangePicker:m}=i,d=e=>{const t=l().localeData();return React.createElement(m,(0,n.Z)({locale:{lang:{locale:l().locale(),placeholder:(0,r.__)("Select date"),rangePlaceholder:[(0,r.__)("Start date"),(0,r.__)("End date")],today:(0,r.__)("Today"),now:(0,r.__)("Now"),backToToday:(0,r.__)("Back to today"),ok:(0,r.__)("OK"),clear:(0,r.__)("Clear"),month:(0,r.__)("Month"),year:(0,r.__)("Year"),timeSelect:(0,r.__)("Select time"),dateSelect:(0,r.__)("Select date"),monthSelect:(0,r.__)("Choose a month"),yearSelect:(0,r.__)("Choose a year"),decadeSelect:(0,r.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,r.__)("Previous month (PageUp)"),nextMonth:(0,r.__)("Next month (PageDown)"),previousYear:(0,r.__)("Last year (Control + left)"),nextYear:(0,r.__)("Next year (Control + right)"),previousDecade:(0,r.__)("Last decade"),nextDecade:(0,r.__)("Next decade"),previousCentury:(0,r.__)("Last century"),nextCentury:(0,r.__)("Next century")},timePickerLocale:{placeholder:(0,r.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"}},e))}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.6.1/435e6d59d3929ad589e19ac035141383/chunk-config-tab-consent.lite.js.map
