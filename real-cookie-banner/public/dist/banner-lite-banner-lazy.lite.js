"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[376],{4769:(e,t,o)=>{o.r(t),o.d(t,{apply:()=>b});var n=o(8243),i=o(6778),a=o(6787),r=o(210);function s(e,t){let o,n,i,{presetId:a,isGcm:r}=t,s=!1,l="";const d={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let c=e||"none";switch("googleTagManagerWithGcm"!==c||r||(c="googleTagManager"),c){case"googleTagManager":case"googleTagManagerWithGcm":i="gtm",o="dataLayer",l="Google Tag Manager",d.events="googleTagManagerWithGcm"!==c;break;case"matomoTagManager":i="mtm",o="_mtm",l="Matomo Tag Manager";break;default:d.events=!1,d.executeCodeWhenNoTagManagerConsentIsGiven=!1}return o&&(n=()=>(window[o]=window[o]||[],window[o])),i&&a===i&&(s=!0,d.events=!1,d.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:n,useManager:c,serviceIsManager:s,managerLabel:l,expectedManagerPresetId:i,features:d}}function l(e){let t,{decisionCookieName:o,setCookiesViaManager:n,isGcm:i,groups:a,type:l}=e;const{useManager:d}=s(n,{isGcm:i,presetId:""}),c=a.find((e=>{let{isEssential:t}=e;return t})),u={[c.id]:c.items.map((e=>{let{id:t}=e;return t}))};if("consent"===l){const e=(0,r.h)(o);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=u)}return"essentials"===l&&(t=u),{isManagerActive:"none"!==d,selectedGroups:t,iterateServices:async function(e){for(const r of a)for(const a of r.items){var o;const d="all"===l||(null===(o=t[r.id])||void 0===o?void 0:o.indexOf(a.id))>-1,c=s(n,{presetId:a.presetId,isGcm:i});await e(r,a,d,c)}}}}var d=o(5380),c=o(7197),u=o(4670),p=o(3665),g=o(5042);var h=o(1352),m=o(7762),v=o(6616);async function b(e){const t=[];await l(e).iterateServices((async(e,o,n)=>{n&&t.push({group:e,service:o})})),document.dispatchEvent(new CustomEvent(h.x,{detail:{services:t}})),await(0,n.C)();const{dataLayer:o,isManagerOptOut:r,services:s,ready:b}=await async function(e){const t=[],{isManagerActive:o,iterateServices:n}=l(e),{skipOptIn:i}=e;const r=[];return await n((async(e,n,s,l)=>{let{getDataLayer:c,serviceIsManager:u}=l;const{codeDynamics:p,codeOptIn:g,executeCodeOptInWhenNoTagManagerConsentIsGiven:h}=n;if(s){const s=o&&h,l="function"==typeof i&&i(n);s||l||!g||r.push((0,a.K)(g,p));const c={group:e,service:n};document.dispatchEvent(new CustomEvent(d.g,{detail:c})),t.push(c)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(r)}}(e),{ready:y}=await async function(e,t,o){const n=[],{isManagerActive:i,iterateServices:r}=l(e);return t?(r(((e,o,n,i)=>{let{tagManagerOptInEventName:a}=o,{features:r}=i;n&&a&&r.events&&t.push({event:a})})),setTimeout((()=>r(((e,o,n,i)=>{let{tagManagerOptOutEventName:a}=o,{features:r}=i;!n&&a&&r.events&&t.push({event:a})}))),1e3)):i&&o&&await r((async(e,t,o)=>{let{codeDynamics:i,codeOptIn:r,executeCodeOptInWhenNoTagManagerConsentIsGiven:s}=t;o&&s&&n.push((0,a.K)(r,i))})),{ready:Promise.all(n)}}(e,o,r),f=Promise.all([b,y]);await(0,i.H)(),document.dispatchEvent(new CustomEvent(m.V,{detail:{services:s,ready:f}}));const{deleteHttpCookies:C,services:w,ready:x}=await async function(e,t){const o=[],{isManagerActive:n,iterateServices:i}=l(e),r=[],s=[];return await i((async(e,i,l)=>{const{id:d,codeDynamics:h,codeOptOut:m,deleteTechnicalDefinitionsAfterOptOut:v,isEmbeddingOnlyExternalResources:b,technicalDefinitions:y,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f}=i;if(!l){const l=n&&f;(l&&t||!l)&&r.push((0,a.K)(m,h)),v&&!b&&(function(e,t){for(const{type:o,name:n}of e){const e=(0,p.c)(n,t);if("*"===e)continue;const i=new RegExp((0,g.L)(e),"g");switch(o){case"http":for(const e of Object.keys(u.Z.get()))i.test(e)&&u.Z.remove(e);break;case"local":case"session":try{const e="local"===o?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(i.test(t)){try{e.setItem(t,null)}catch(e){}let o=0;for(;e.getItem(t)&&o<100;)o++,e.removeItem(t)}}catch(e){continue}}}}(y,h),y.some((e=>{let{type:t}=e;return"http"===t}))&&s.push(d));const C={group:e,service:i};document.dispatchEvent(new CustomEvent(c.E,{detail:C})),o.push(C)}})),{services:o,ready:Promise.all(r),deleteHttpCookies:s}}(e,r);document.dispatchEvent(new CustomEvent(v.C,{detail:{services:w,deleteHttpCookies:C,ready:Promise.all([f,x])}}))}},1352:(e,t,o)=>{o.d(t,{x:()=>n});const n="RCB/Apply/Interactive"},2845:(e,t,o)=>{o.r(t),o.d(t,{BannerHistorySelect:()=>i});var n=o(748).h;const i=()=>{const e=(0,o(7850).S)(),{Select:t}=(0,o(1762).Y)().extend(...o(8185).A),{set:i,consent:a,groups:r,tcf:s,isGcm:l,gcmConsent:d,lazyLoadedDataForSecondView:c,activeAction:u,history:p,fetchHistory:g,i18n:{historyLabel:h,historySelectNone:m}}=e,[v,b]=(0,o(729).eJ)(),[y,f]=(0,o(729).eJ)({consent:a,groups:r,tcf:s,gcmConsent:d,lazyLoadedDataForSecondView:c}),C=e=>{let{tcf:t,gcmConsent:o=[],...n}=e;i({...n,isTcf:!!t,tcf:null,gcmConsent:[]})};(0,o(729).d4)((()=>{C(v?v.context:{consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0})}),[v]);const w=(0,o(729).sO)(!1);(0,o(729).d4)((()=>{c&&!w.current&&"history"===u&&(w.current=!0,async function(){const e=await g();f({consent:a,groups:r,tcf:s,gcmConsent:d,lazyLoadedDataForSecondView:c}),i({history:e}),b(e[0])}())}),[c,u]),(0,o(729).d4)((()=>()=>C(y)),[]);const x=null==v?void 0:v.uuid;return n(o(729).HY,null,h," ",n(t,{disabled:!(null!=p&&p.length),value:(null==v?void 0:v.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of p){const{id:o}=e;if(o===t){b(e);break}}}},(null==p?void 0:p.length)>0?p.map((e=>{let{id:t,isDoNotTrack:o,isUnblock:i,isForwarded:a,created:r}=e;return n("option",{key:t,value:t},new Date(r).toLocaleString(document.documentElement.lang),o?" (Do Not Track)":"",i?" (Content Blocker)":"",a?" (Consent Forwarding)":"")})):n("option",{value:-1},m)),n("div",{style:{opacity:.5,marginTop:5}},"UUID: ",x||"-"))}},4651:(e,t,o)=>{o.r(t),o.d(t,{BannerGroupList:()=>x});var n=o(7850),i=o(729),a=o(9840),r=o(6270),s=o(9216),l=o(8185),d=o(3163),c=o(748).h;const u=e=>{let{onToggle:t,children:o,showMore:n,hideMore:a,...u}=e;const{Link:p}=(0,s.R)().extend(...l.A),[g,h]=(0,i.eJ)(!1),m=(0,d.q)();return c(i.HY,null,"  •  ",c(p,(0,r.Z)({href:"#",onClick:e=>{const o=!g;h(o),null==t||t(o),e.preventDefault()}},o?{"aria-expanded":g,"aria-controls":m}:{},u),g?a:n),o&&c("div",{id:m},g&&o))};var p=o(6652),g=o(748).h;const h=e=>{let{group:{id:t,isEssential:o},cookie:a}=e;const{id:r}=a,s=(0,n.S)(),{consent:l,activeAction:d}=s,c=o||"history"===d,u=o||((null==l?void 0:l[t])||[]).some((e=>e===r)),h=(0,i.I4)((e=>s.updateCookieChecked(t,r,e)),[s,t,r]);return g(p.Cookie,{cookie:a,propertyListProps:{isEssentialGroup:o},checked:u,disabled:c,onToggle:h})};var m=o(4429),v=o(748).h;const b=e=>{var t;let{group:o}=e;const r=(0,n.S)(),{id:s,name:l,description:d,items:c,isEssential:p}=o,{previewCheckboxActiveState:g,consent:b,activeAction:y,group:{headlineFontSize:f},individualTexts:{headline:C,showMore:w,hideMore:x}}=r,k=p||"history"===y,S=g||p||!!b[s],I=!p&&(null===(t=b[s])||void 0===t?void 0:t.length)&&JSON.stringify(c.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(b[s].sort()||[]),T=(0,i.I4)((e=>r.updateGroupChecked(s,e)),[r,s,S]);return v(m.Z,{legend:`${C}: ${l}`,headline:v(a.X,{onToggle:T,isPartial:I,isChecked:S,isDisabled:k,fontSize:f},l," (",c.length,")")},v("span",null,d),!!c&&v(u,{showMore:w,hideMore:x},c.map((e=>v(h,{key:e.id,group:o,cookie:e})))))};var y=o(6556),f=o(748).h;const C=e=>{let{children:t}=e;const{GroupList:o}=(0,s.R)().extend(...y.w);return f(o,null,t)};var w=o(748).h;const x=()=>{const{groups:e}=(0,n.S)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return w(C,null,t.map((e=>w(b,{key:e.id,group:e}))))}},9840:(e,t,o)=>{o.d(t,{X:()=>i});var n=o(748).h;const i=e=>{let{hideCheckbox:t,isPartial:i,isChecked:a,isDisabled:r,fontSize:s,onToggle:l,children:d,after:c,...u}=e;const{checkbox:{className:p,style:g},Label:h}=(0,o(9216).R)().extend(...o(8185).A),m=i?o(6539).Z:o(8358).Z,v=(0,o(3163).q)();return n(h,null,!t&&n(o(729).HY,null,n("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:a,disabled:r,className:p,style:g({fontSize:s}),onChange:e=>{const{checked:t}=e.target;null==l||l(t)},"aria-labelledby":v}),n(o(7345).p,(0,o(6270).Z)({"aria-hidden":!0,icon:m},u))),d&&n("span",null,n("span",{id:v,"aria-hidden":!0},d),c&&n("span",{onClick:e=>{e.stopPropagation()}},c)))}},6652:(e,t,o)=>{o.r(t),o.d(t,{Cookie:()=>I});var n=o(6270),i=o(4667),a=o(9840),r=o(729),s=o(7359),l=o(9216),d=o(8185),c=o(6556),u=o(748).h;const p=e=>{let{label:t,value:o,children:n,printValueAs:a,monospace:p}=e;const g=(0,l.R)(),{Link:h,CookieProperty:m}=g.extend(...d.A).extend(...c.w),v=(0,i.w)(),{i18n:{yes:b,no:y}}=v;let f="string"==typeof o&&o.startsWith("http")&&(0,s.C)(o)?u(h,{href:o,target:"_blank",rel:"noopener noreferrer"},o):"string"==typeof o?"phone"===a?u(h,{target:"_blank",href:`tel:${o.replace(/\s+/g,"")}`},o):"mail"===a?u(h,{target:"_blank",href:`mailto:${o}`},o):u("span",{dangerouslySetInnerHTML:{__html:o}}):o;return"boolean"===a&&(f=f?b:y),o||!1===o||"empty"===a?u(r.HY,null,u(m,null,t&&u("strong",null,t,": "),u("span",{role:"presentation",style:{fontFamily:p?"monospace":void 0}},f)),u(m,null,!!n&&u("div",null,n))):null};var g=o(7845),h=o(7064),m=o(3665),v=o(3160);const b=/(\r\n|\r|\n|<br[ ]?\/>)/g;var y=o(1762),f=o(748).h;const C=e=>{let{type:t,isDisabled:o,isBold:n}=e;const{Cookie:r}=(0,y.Y)().extend(...c.w),{gcmConsent:s,updateGcmConsentTypeChecked:l,group:{descriptionFontSize:d},i18n:{gcm:{purposes:{[t]:u}}}}=(0,i.w)();return f(r,null,f(a.X,{isChecked:s.indexOf(t)>-1,isDisabled:o,fontSize:d,onToggle:e=>l(t,e)},f("span",{style:{fontWeight:n?"bold":void 0}},u)))};var w=o(6379),x=o(748).h;const k=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:o,provider:n,providerContact:a={},providerPrivacyPolicyUrl:s,providerLegalNoticeUrl:l,legalBasis:d,ePrivacyUSA:c,dataProcessingInCountries:u,dataProcessingInCountriesSpecialTreatments:y,isEmbeddingOnlyExternalResources:f,technicalDefinitions:k,codeDynamics:S,googleConsentModeConsentTypes:I},isEssentialGroup:T,isDisabled:D}=e;const{i18n:M,isEPrivacyUSA:B,isDataProcessingInUnsafeCountries:O,iso3166OneAlpha2:P,dataProcessingInUnsafeCountriesSafeCountries:L,designVersion:N,websiteOperator:E,isGcm:G}=(0,i.w)(),A=function(){const{i18n:{durationUnit:e},designVersion:t}=(0,i.w)();return(0,r.I4)(((o,n)=>t<6?e[n]:(0,g.D)(o,e.n1[n],e.nx[n])),[e])}(),R={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},W=(0,r.Ye)((()=>O?(0,w.D)({dataProcessingInCountries:u,safeCountries:L,specialTreatments:y.filter((e=>-1===[v.gt.StandardContractualClauses].indexOf(e))),designVersion:N}).map((e=>P[e]||e)):[]),[O,L,y,u,P,N]),{legalNotice:z,privacyPolicy:$,contactForm:F}=(0,h.p)(),U=(0,r.Ye)((()=>{if(o&&E){const{address:e,country:t,contactEmail:o,contactPhone:n}=E;return{provider:[e,P[t]||t].filter(Boolean).join(", "),contact:{email:o,phone:n,link:F},legalNoticeUrl:!1===z?"":z.url,privacyPolicyUrl:!1===$?"":$.url}}return{provider:n,contact:a,privacyPolicyUrl:s,legalNoticeUrl:l}}),[o,n,a,s,l,E,z,$,F]),H=(0,r.Ye)((()=>Object.values(U.contact).filter(Boolean).length>0),[U.contact]);return x(r.HY,null,!!t&&x(p,{label:M.purpose,value:(V=t,"string"==typeof V?V.split(b).map(((e,t)=>e.match(b)?(0,r.az)("br",{key:t}):e)):V)}),x(p,{label:M.legalBasis,value:"legal-requirement"===d?M.legalRequirement:"legitimate-interest"===d||T?M.legitimateInterest:M.consent}),G&&I.length>0&&x(p,{label:M.gcm.dataProcessingInService,printValueAs:"empty"},x("div",{style:{display:"inline-block"}},x(p,{printValueAs:"empty"},I.map((e=>x(C,{key:e,type:e,isDisabled:D})))))),x(p,{label:M.provider,value:U.provider},H&&x(r.HY,null,x(p,{label:M.providerContactPhone,value:U.contact.phone,printValueAs:"phone"}),x(p,{label:M.providerContactEmail,value:U.contact.email,printValueAs:"mail"}),x(p,{label:M.providerContactLink,value:U.contact.link}))),x(p,{label:M.providerPrivacyPolicyUrl,value:U.privacyPolicyUrl}),x(p,{label:M.providerLegalNoticeUrl,value:U.legalNoticeUrl}),!!B&&x(p,{label:M.ePrivacyUSA,value:c,printValueAs:"boolean"}),W.length>0&&x(p,{label:M.dataProcessingInUnsafeCountries,value:W.join(", ")}),N>4&&y.indexOf(v.gt.StandardContractualClauses)>-1&&x(p,{label:M.appropriateSafeguard,value:M.standardContractualClauses}),!f&&k.map((e=>{let{type:t,name:o,host:n,duration:i,durationUnit:a,isSessionDuration:r,purpose:s}=e;return x(p,{key:`${t}-${o}-${n}`,label:M.technicalCookieDefinition,monospace:!0,value:(0,m.c)(o,S)},x(p,{label:M.type,value:R[t].name}),x(p,{label:M.purpose,value:s}),!!n&&x(p,{label:M.host,value:n,monospace:!0}),x(p,{label:M.duration,value:["local","indexedDb"].indexOf(t)>-1?M.noExpiration:r||"session"===t?"Session":A(i,a)}))})));var V};var S=o(748).h;const I=e=>{let{cookie:t,checked:o,disabled:r,onToggle:s,propertyListProps:d={}}=e;const{Cookie:u}=(0,l.R)().extend(...c.w),{name:p}=t,{group:{descriptionFontSize:g}}=(0,i.w)();return S(u,null,S(a.X,{isChecked:o,isDisabled:r,fontSize:g,onToggle:s},S("strong",null,p)),S(k,(0,n.Z)({cookie:t},d,{isDisabled:!o})))}},4429:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(748).h;const i=e=>{let{headline:t,borderless:i,children:a,legend:r,...s}=e;const{Group:l,GroupInner:d,GroupDescription:c,screenReaderOnlyClass:u}=(0,o(9216).R)().extend(...o(6556).w),p=r||("string"==typeof t?t:void 0),g=n(d,null,p&&n("legend",{className:u},p),n("span",{"aria-hidden":!!p},t),a&&n(c,null,a));return i?n("div",(0,o(6270).Z)({className:"group"},s),g):n(l,s,g)}},1762:(e,t,o)=>{function n(){return(0,o(9216).R)().extend(...o(8681).y)}o.d(t,{Y:()=>n})},8681:(e,t,o)=>{o.d(t,{y:()=>l});var n=o(8330),i=o(3189),a=o.n(i);const r=(e,t)=>{let o,i,r;t?r=t({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:n.nw,height:n.nw}):(o=e("width"),i=e("height"));const s=[],l=()=>s.forEach(((e,t,o)=>{e(),o.splice(t,1)})),d=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const d=()=>{e&&(a().clear(t),t=a().measure((()=>{const{width:t,height:n}=e.getBoundingClientRect(),{clientHeight:s,scrollHeight:l,scrollTop:d,offsetHeight:c}=e,u=s<l,p=Math.ceil(d+c)>=l;(0!==t||0!==n||e.offsetParent)&&a().mutate((()=>{r?r[1]({width:t,height:n,scrollbar:u,scrolledTop:0===d,scrolledBottom:p}):(e.style.setProperty(o,`${t}px`),e.style.setProperty(i,`${n}px`))}))})))};for(const t of[e,...n]){if(!t)continue;t.addEventListener("animationend",d),t.addEventListener("scroll",d);const e=new ResizeObserver(d);e.observe(t),s.push((()=>{e.disconnect(),t.removeEventListener("animationend",d),t.removeEventListener("scroll",d)}))}return l};return t?[d,r[0],l]:[d,{width:o,height:i},l]},s=(e,t)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${t()}/100))`,l=[Symbol("extendBannerStylesheet"),(e,t)=>{let{computed:o,rule:i,boolIf:a,boolNot:l,boolSwitch:d,jsx:c,variable:u,className:p,vars:g,varName:h,plugin:m}=e,{unsetDialogStyles:v,customize:{activeAction:b,pageRequestUuid4:y},boolLargeOrMobile:f,isMobile:C,layout:{dialogPosition:w,dialogMaxWidth:x,dialogMargin:k,dialogBorderRadius:S,bannerPosition:I,overlay:T,overlayBg:D,overlayBgAlpha:M,overlayBlur:B},design:{boxShadowEnabled:O,boxShadowColor:P,boxShadowOffsetX:L,boxShadowOffsetY:N,boxShadowBlurRadius:E,boxShadowSpreadRadius:G,boxShadowColorAlpha:A,fontSize:R,borderWidth:W,borderColor:z,textAlign:$,fontInheritFamily:F,fontFamily:U,fontWeight:H,fontColor:V},mobile:Y,layout:Z,individualLayout:j}=t;const _={headline:p(),description:p(),firstButton:p()},q=r(h,g),J=r(h,g),X=r(h,g),K=r(h,g),Q=u(b,(0,n.IW)(b,["history"])),ee=u(!1,void 0,"individual"),{isDialog:te,isBanner:oe}=o([C,Z.type],(e=>{let[t,o]=e;const n=t?"banner":o;return{type:n,isDialog:"dialog"===n,isBanner:"banner"===n}})),ne=o([w],(e=>{let[t]=e;return[t.startsWith("top")?"flex-start":t.startsWith("bottom")?"flex-end":"center",t.endsWith("Center")?"center":t.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign"),[ie]=c("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:R("l"),background:a(T,s(D,M)),pointerEvents:a(T,"all","none"),backdropFilter:"none",transform:"translateZ(0)"}),[ae]=c("dialog",{classNames:["align",v],display:"flex",width:"100%",height:"100%",alignItems:a(te,ne(0)),justifyContent:a(te,ne(1))},{tabIndex:0,"aria-labelledby":_.headline,"aria-describedby":_.description}),re=a({when:te,then:{when:[ee,l(j.inheritDialogMaxWidth)],then:j.dialogMaxWidth(),or:x()},or:"100%"}),{alignment:se}=Y,le=`${f(W,a)} solid ${z()}`,de=a(te,S()),[,ce]=i({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:re,width:re,textAlign:$("val"),fontFamily:a(F,"inherit",U()),fontWeight:H(),color:V("hex"),margin:a({when:[te,l(w["is-middlecenter"])],then:k(),or:a(te,"10px")}),borderRadius:de,boxShadow:a(O,`${L()} ${N()} ${E()} ${G()} rgba(${P("r")} ${P("g")} ${P("b")} / ${A()})`),alignSelf:a({when:C,then:d([[se("is-bottom"),"flex-end"],[se("is-top"),"flex-start"],[se("is-center"),"center"]]),or:{when:oe,then:d([[I("is-top"),"flex-start"],[I("is-bottom"),"flex-end"]])}}),borderTop:a({when:[oe,I("is-bottom")],then:le}),borderBottom:a({when:[oe,I("is-top")],then:le})}),ue={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};i({forceSelector:`#${y}, #${y} *`,...ue}),m("modifyRule",(e=>{"unset"===e.all&&Object.assign(e,ue)}));const pe=`${a(te,W("l"),"0px")} solid ${z()}`;return{a11yIds:_,isDialog:te,isBanner:oe,activeAction:Q,dimsOverlay:q,dimsContent:J,dimsHeader:X,dimsFooter:K,individualPrivacyOpen:ee,Dialog:ae,Overlay:ie,inner:ce,footerBorderStyle:{borderBottomLeftRadius:de,borderBottomRightRadius:de,borderLeft:pe,borderRight:pe,borderBottom:pe},headerBorderStyle:{borderTopLeftRadius:de,borderTopRightRadius:de,borderLeft:pe,borderRight:pe,borderTop:pe}}}]},6556:(e,t,o)=>{o.d(t,{w:()=>n});const n=[Symbol("extendCommonGroupsStylesheet"),(e,t)=>{let{jsx:o,boolIf:n,boolNot:i}=e,{group:a,design:r,decision:s,bodyDesign:l,boolLargeOrMobile:d}=t;const[c]=o("fieldset",{classNames:"dotted-groups",all:"unset",marginTop:"10px",lineBreak:"anywhere",lineHeight:2,pseudos:{">span,>label":{paddingRight:"10px",fontSize:n({when:l.dottedGroupsInheritFontSize(),then:d(r.fontSize,n),or:d(l.dottedGroupsFontSize,n)}),whiteSpace:"nowrap",display:"inline-block"},">span>i":{color:l.dottedGroupsBulletColor()},">span>i::after":{paddingRight:"5px",display:"inline-block",content:"'●'"},">span>span":{verticalAlign:"middle",cursor:n(s.groupsFirstView,"pointer")}}}),[u]=o("div",{classNames:"groups",marginTop:"10px",clear:"both",pseudos:{">div:not(:last-of-type)":{marginBottom:d(a.groupSpacing,n)}}}),[p]=o("div",{classNames:"group",background:n(i(a.groupInheritBg),a.groupBg()),padding:d(a.groupPadding,n),borderRadius:a.groupBorderRadius(),textAlign:"left",borderColor:a.groupBorderColor(),borderStyle:"solid",borderWidth:d(a.groupBorderWidth,n)}),[g]=o("fieldset",{classNames:"group-inner",all:"unset",textAlign:"left",color:a.headlineFontColor(),fontSize:d(a.headlineFontSize,n),fontWeight:a.headlineFontWeight()}),[h]=o("div",{classNames:"group-description",color:a.descriptionFontColor(),fontSize:d(a.descriptionFontSize,n),marginTop:"5px"}),[m]=o("div",{classNames:"cookie",marginTop:"10px",pseudos:{">label:first-of-type":{display:"block",marginBottom:"10px"}}}),[v]=o("div",{classNames:"cookie-prop",borderStyle:"solid",borderColor:a.groupBorderColor(),borderWidth:"0px",borderLeftWidth:d(a.groupBorderWidth,n),paddingLeft:"15px",pseudos:{">a":{wordBreak:"break-all"}}});return{DottedGroupList:c,GroupList:u,Group:p,GroupInner:g,GroupDescription:h,Cookie:m,CookieProperty:v}}]},7278:(e,t,o)=>{o.d(t,{IQ:()=>n,n4:()=>i,yt:()=>a});const n="stylesheet-created",i="stylesheet-toggle",a="css-var-update-"}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.0/bfe1352dff66021443388e3f62e54e9e/banner-lite-banner-lazy.lite.js.map
