"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[4],{18505:(e,t,n)=>{n.d(t,{apply:()=>k});var s=n(22834),a=n(66399),r=n(34766),o=n(84200);function i(e){var t;return(0,o.g)(e)&&!/^\.?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/gm.test(e)?null==(t=(new DOMParser).parseFromString(`<a href="${e}"></a>`,"text/html").querySelector("a"))?void 0:t.href:(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}function l(e,t,s){return void 0===s&&(s=document.body),new Promise((o=>{e?(0,a.P)().then((()=>Promise.all([n.e(343),n.e(4)]).then(n.t.bind(n,61104,23)).then((n=>{let{default:a}=n;return a(s,(0,r.t)(e,t),{done:o,error:e=>{console.error(e)},beforeWriteToken:e=>{const{attrs:t,booleanAttrs:n,src:s,href:a}=e;if(null==n?void 0:n["skip-write"])return!1;for(const e in t)if(t[e]=i(t[e]),"unique-write-name"===e&&document.querySelector(`[unique-write-name="${t[e]}"]`))return!1;return s&&(e.src=i(s)),a&&(e.href=i(a)),e}})})))):o()}))}var c=n(50724);const d="Google Tag Manager",u="Matomo Tag Manager",p="gtm",g="mtm";function h(e,t){let n,s,a,{presetId:r,isGcm:o}=t,i=!1,l="";const c={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let h=e||"none";switch("googleTagManagerWithGcm"!==h||o||(h="googleTagManager"),h){case"googleTagManager":case"googleTagManagerWithGcm":a=p,n="dataLayer",l=d,c.events="googleTagManagerWithGcm"!==h;break;case"matomoTagManager":a=g,n="_mtm",l=u;break;default:c.events=!1,c.executeCodeWhenNoTagManagerConsentIsGiven=!1}return n&&(s=()=>(window[n]=window[n]||[],window[n])),a&&r===a&&(i=!0,c.events=!1,c.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:s,useManager:h,serviceIsManager:i,managerLabel:l,expectedManagerPresetId:a,features:c}}function m(e){let t,{decisionCookieName:n,setCookiesViaManager:s,isGcm:a,groups:r,type:o}=e;const{useManager:i}=h(s,{isGcm:a,presetId:""}),l=r.find((e=>{let{isEssential:t}=e;return t})),d={[l.id]:l.items.map((e=>{let{id:t}=e;return t}))};if("consent"===o){const e=(0,c.y)(n);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=d)}return"essentials"===o&&(t=d),{isManagerActive:"none"!==i,selectedGroups:t,iterateServices:async function(e){const n=r.map((e=>e.items.map((t=>[e,t])))).flat();n.sort(((e,t)=>e[1].executePriority-t[1].executePriority));for(const[r,l]of n){var i;const n="all"===o||(null==(i=t[r.id])?void 0:i.indexOf(l.id))>-1,c=h(s,{presetId:l.presetId,isGcm:a});await e(r,l,n,c)}}}}const f="RCB/OptIn",v="RCB/OptOut";var C=n(57177);function x(e){return`^${(t=e.replace(/\*/g,"PLEACE_REPLACE_ME_AGAIN"),t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")).replace(/PLEACE_REPLACE_ME_AGAIN/g,"(.*)")}$`;var t}var y=n(80072);const b="RCB/OptIn/All",j="RCB/OptOut/All";async function k(e){const t=[];await m(e).iterateServices((async(e,n,s)=>{s&&t.push({group:e,service:n})})),document.dispatchEvent(new CustomEvent(y.r,{detail:{services:t,triggeredByOtherTab:e.triggeredByOtherTab}})),await(0,s.G)();const{dataLayer:n,isManagerOptOut:o,services:i,ready:c}=await async function(e){const t=[],{isManagerActive:n,iterateServices:s}=m(e),{skipOptIn:a}=e;const r=[];return await s((async(e,s,o,i)=>{let{getDataLayer:c,serviceIsManager:d}=i;const{codeDynamics:u,codeOptIn:p,executeCodeOptInWhenNoTagManagerConsentIsGiven:g}=s;if(o){const o=n&&g,i="function"==typeof a&&a(s);o||i||!p||r.push(l(p,u));const c={group:e,service:s};document.dispatchEvent(new CustomEvent(f,{detail:c})),t.push(c)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(r)}}(e),{ready:d}=await async function(e,t,n){const s=[],{isManagerActive:a,iterateServices:r}=m(e);return t?(r(((e,n,s,a)=>{let{tagManagerOptInEventName:r}=n,{features:o}=a;s&&r&&o.events&&t.push({event:r})})),setTimeout((()=>r(((e,n,s,a)=>{let{tagManagerOptOutEventName:r}=n,{features:o}=a;!s&&r&&o.events&&t.push({event:r})}))),1e3)):a&&n&&await r((async(e,t,n)=>{let{codeDynamics:a,codeOptIn:r,executeCodeOptInWhenNoTagManagerConsentIsGiven:o}=t;n&&o&&s.push(l(r,a))})),{ready:Promise.all(s)}}(e,n,o),u=Promise.all([c,d]);await(0,a.P)(),document.dispatchEvent(new CustomEvent(b,{detail:{services:i,ready:u}}));const{deleteHttpCookies:p,services:g,ready:h}=await async function(e,t){const n=[],{isManagerActive:s,iterateServices:a}=m(e),o=[],i=[];return await a((async(e,a,c)=>{const{id:d,codeDynamics:u,codeOptOut:p,deleteTechnicalDefinitionsAfterOptOut:g,isEmbeddingOnlyExternalResources:h,technicalDefinitions:m,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f}=a;if(!c){const c=s&&f;(c&&t||!c)&&o.push(l(p,u)),g&&!h&&(function(e,t){for(const{type:n,name:s}of e){const e=(0,r.t)(s,t);if("*"===e)continue;const a=new RegExp(x(e),"g");switch(n){case"http":for(const e of Object.keys(C.A.get()))a.test(e)&&C.A.remove(e);break;case"local":case"session":try{const e="local"===n?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(a.test(t)){try{e.setItem(t,null)}catch(e){}let n=0;for(;e.getItem(t)&&n<100;)n++,e.removeItem(t)}}catch(e){continue}}}}(m,u),m.some((e=>{let{type:t}=e;return"http"===t}))&&i.push(d));const y={group:e,service:a};document.dispatchEvent(new CustomEvent(v,{detail:y})),n.push(y)}})),{services:n,ready:Promise.all(o),deleteHttpCookies:i}}(e,o);document.dispatchEvent(new CustomEvent(j,{detail:{services:g,deleteHttpCookies:p,ready:Promise.all([u,h])}}))}},86264:(e,t,n)=>{n.d(t,{persistWithQueueFallback:()=>a});var s=n(5974);async function a(e,t){e.createdClientTime=(new Date).toISOString();const n=t.getConsentQueue();n.push(e),t.setConsentQueue(n);try{await t.getOption("persistConsent")(e,!0),t.setConsentQueue(t.getConsentQueue().filter((t=>{let{createdClientTime:n}=t;return e.createdClientTime!==n})))}catch(n){const{groups:a,decisionCookieName:r,tcfCookieName:o,gcmCookieName:i,failedConsentDocumentationHandling:l,revisionHash:c}=t.getOptions(),d="optimistic"===l,{decision:u,createdClientTime:p,tcfString:g,gcmConsent:h,buttonClicked:m}=e,f={consent:d?"all"===u?a.reduce(((e,t)=>(e[t.id]=t.items.map((e=>{let{id:t}=e;return t})),e)),{}):"essentials"===u?(0,s.w)(a,!1):u:(0,s.w)(a,!1),previousUuids:[],revision:c,uuid:p,created:new Date(p),buttonClicked:m};localStorage.setItem(r,JSON.stringify(f)),g&&localStorage.setItem(o,d?g:""),h&&localStorage.setItem(i,d?JSON.stringify(h):"[]")}}},17724:(e,t,n)=>{n.d(t,{retryPersistFromQueue:()=>a});var s=n(57177);function a(e,t){void 0===t&&(t=!1);const{decisionCookieName:n,tcfCookieName:r,gcmCookieName:o}=e.getOptions(),i=()=>{localStorage.removeItem(n),localStorage.removeItem(r),localStorage.removeItem(o),localStorage.removeItem(e.getConsentQueueName())},l=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==l||l.addEventListener("click",i),e.isConsentQueueLocked()){const t=t=>{t.key!==e.getConsentQueueName(!0)||t.newValue||a(e)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t),null==l||l.removeEventListener("click",i)}}{let a,r=0;const o=async()=>{e.isConsentQueueLocked(!0);const t=e.getConsentQueue();let l=15e3;if(t.length>0){r++;try{const a=t.shift(),o=0===t.length||!s.A.get(n),c=await e.getOption("persistConsent")(a,o),d=s.A.get(n);d&&-1===d.indexOf(c)&&s.A.set(n,d.replace(/^(.*?:.*?):/gm,`$1,${c}:`)),e.setConsentQueue(t),0===t.length&&i(),r=0,l=1500}catch(e){l=15*r*1e3}}a=setTimeout(o,l)};return e.isConsentQueueLocked(!0),a=setTimeout(o,t?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(a),null==l||l.removeEventListener("click",i)}}}},34766:(e,t,n)=>{n.d(t,{t:()=>a});const s=/{{([A-Za-z0-9_]+)}}/gm;function a(e,t){return e.replace(s,((e,n)=>Object.prototype.hasOwnProperty.call(t,n)?t[n]:e))}},69558:(e,t,n)=>{n.r(t),n.d(t,{BannerHistorySelect:()=>d});var s=n(3713),a=n(84094),r=n(30680),o=n(41594),i=n(45746),l=n(16215),c=n(20089);const d=()=>{const e=(0,a.Y)(),{Select:t}=(0,r.y)().extend(...i.I),{set:n,consent:d,groups:u,tcf:p,isGcm:g,gcmConsent:h,lazyLoadedDataForSecondView:m,activeAction:f,history:v,fetchHistory:C,visible:x,i18n:{historyLabel:y,historyItemLoadError:b,historySelectNone:j}}=e,[k,S]=(0,o.useState)(),[E,I]=(0,o.useState)({consent:d,groups:u,tcf:p,gcmConsent:h,lazyLoadedDataForSecondView:m}),w=e=>{let{buttonClicked:t,tcf:s,gcmConsent:a,...r}=e;const o={isTcf:!!s,tcf:null,gcmConsent:[]};s&&(Object.assign(o,{tcf:"gvl"in s?s:(0,l.T)(s)}),(null==t?void 0:t.startsWith("implicit_"))&&(0,c.o)(o.tcf.model,t)),n({...r,...o})};(0,o.useEffect)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(k){const{context:t}=k;w(t||e)}else w(e)}),[k]);const P=(0,o.useRef)(!1);(0,o.useEffect)((()=>{m&&!P.current&&"history"===f&&x&&(P.current=!0,async function(){const e=await C();I({consent:d,groups:u,tcf:p,gcmConsent:h,lazyLoadedDataForSecondView:m}),n({history:e}),S(e[0])}())}),[m,f,x]),(0,o.useEffect)((()=>{x||(P.current=!1)}),[x]),(0,o.useEffect)((()=>()=>w(E)),[]);const M=null==k?void 0:k.uuid;return(0,s.jsxs)(o.Fragment,{children:[y," ",(0,s.jsx)(t,{disabled:!(null==v?void 0:v.length),value:(null==k?void 0:k.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of v){const{id:n}=e;if(n===t){S(e);break}}},children:(null==v?void 0:v.length)>0?v.map((e=>{let{id:t,isDoNotTrack:n,isUnblock:a,isForwarded:r,created:o}=e;return(0,s.jsxs)("option",{value:t,children:[new Date(o).toLocaleString(document.documentElement.lang),n?" (Do Not Track)":"",a?" (Content Blocker)":"",r?" (Consent Forwarding)":""]},t)})):(0,s.jsx)("option",{value:-1,children:j})}),(0,s.jsxs)("div",{style:{opacity:.5,marginTop:5},children:["UUID: ",M||"-"]}),!(null==k?void 0:k.context)&&(0,s.jsx)("div",{style:{fontWeight:"bold",marginTop:5},children:b})]})}},53602:(e,t,n)=>{n.r(t),n.d(t,{BannerGroupList:()=>w});var s=n(3713),a=n(84094),r=n(11801),o=n(4959),i=n(50180),l=n(41594),c=n(41520),d=n(59112),u=n(81784),p=n(84832),g=n(9463),h=n(64349),m=n(55924),f=n(30680),v=n(45453);const C=e=>{let{type:t,isDisabled:n,isBold:a}=e;const{Cookie:r}=(0,f.y)().extend(...v.C),{activeAction:i,gcmConsent:l,updateGcmConsentTypeChecked:d,group:{descriptionFontSize:u},i18n:{gcm:{purposes:{[t]:p}}}}=(0,c.b)();return(0,s.jsx)(r,{children:(0,s.jsx)(o.S,{isChecked:l.indexOf(t)>-1,isDisabled:n||"history"===i,fontSize:u,onToggle:e=>d(t,e),children:(0,s.jsx)("span",{style:{fontWeight:a?"bold":void 0},children:p})})})};var x=n(43181);const y=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:n,provider:a,providerContact:r={},providerPrivacyPolicyUrl:o,providerLegalNoticeUrl:i,legalBasis:f,dataProcessingInCountries:v,dataProcessingInCountriesSpecialTreatments:y,isEmbeddingOnlyExternalResources:b,technicalDefinitions:j,codeDynamics:k,googleConsentModeConsentTypes:S},isEssentialGroup:E,isDisabled:I}=e;const{i18n:w,iso3166OneAlpha2:P,websiteOperator:M,isGcm:O,designVersion:T}=(0,c.b)(),{dataProcessingInUnsafeCountries:D,appropriateSafeguards:A}=(0,g.Q)({dataProcessingInCountries:v,specialTreatments:y}),{legalNotice:L,privacyPolicy:F,contactForm:B}=(0,h.s)(),N=(0,l.useMemo)((()=>{if(n&&M){const{address:e,country:t,contactEmail:n,contactPhone:s}=M;return{provider:[e,P[t]||t].filter(Boolean).join(", "),contact:{email:n,phone:s,link:B},legalNoticeUrl:!1===L?"":L.url,privacyPolicyUrl:!1===F?"":F.url}}return{provider:a,contact:r,privacyPolicyUrl:o,legalNoticeUrl:i}}),[n,a,r,o,i,M,L,F,B]),z=(0,l.useMemo)((()=>Object.values(N.contact).filter(Boolean).length>0),[N.contact]);return(0,s.jsxs)(l.Fragment,{children:[!!t&&(0,s.jsx)(d.E,{label:w.purpose,value:(0,m.g)(t)}),(0,s.jsx)(d.E,{label:w.legalBasis,value:"legal-requirement"===f?w.legalRequirement:"legitimate-interest"===f||E?w.legitimateInterest:w.consent}),O&&S.length>0&&(0,s.jsx)(d.E,{label:w.gcm.dataProcessingInService,printValueAs:"empty",children:(0,s.jsx)("div",{style:{display:"inline-block"},children:(0,s.jsx)(d.E,{printValueAs:"empty",children:S.map((e=>(0,s.jsx)(C,{type:e,isDisabled:I},e)))})})}),(0,s.jsx)(d.E,{label:w.provider,value:N.provider,children:z&&(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)(d.E,{label:w.providerContactPhone,value:N.contact.phone,printValueAs:"phone"}),(0,s.jsx)(d.E,{label:w.providerContactEmail,value:N.contact.email,printValueAs:"mail"}),(0,s.jsx)(d.E,{label:w.providerContactLink,value:N.contact.link})]})}),(0,s.jsx)(d.E,{label:w.providerPrivacyPolicyUrl,value:N.privacyPolicyUrl}),(0,s.jsx)(d.E,{label:w.providerLegalNoticeUrl,value:N.legalNoticeUrl}),T<10&&D.length>0&&(0,s.jsx)(d.E,{label:w.dataProcessingInUnsafeCountries,value:D.join(", ")}),T<10&&A.length>0&&(0,s.jsx)(d.E,{label:w.appropriateSafeguard,value:A.join(", ")}),(0,s.jsxs)(u.m,{expandable:T>9,labelModifications:{[w.technicalCookieName]:w.technicalCookieDefinitions},children:[T>9&&(0,s.jsx)(p.Q,{dataProcessingInCountries:v,dataProcessingInCountriesSpecialTreatments:y}),!b&&(0,s.jsx)(x.f,{codeDynamics:k,definitions:j})]})]})};var b=n(8700);const j=e=>{let{cookie:t,checked:n,disabled:a,onToggle:r,propertyListProps:i={}}=e;const{Cookie:l}=(0,b.o)().extend(...v.C),{name:d}=t,{group:{descriptionFontSize:u}}=(0,c.b)();return(0,s.jsxs)(l,{children:[(0,s.jsx)(o.S,{isChecked:n,isDisabled:a,fontSize:u,onToggle:r,children:(0,s.jsx)("strong",{children:d})}),(0,s.jsx)(y,{cookie:t,...i,isDisabled:!n})]})},k=e=>{let{group:{id:t,isEssential:n},cookie:r}=e;const{id:o}=r,i=(0,a.Y)(),{consent:c,activeAction:d}=i,u=n||"history"===d,p=n||((null==c?void 0:c[t])||[]).some((e=>e===o)),g=(0,l.useCallback)((e=>i.updateCookieChecked(t,o,e)),[i,t,o]);return(0,s.jsx)(j,{cookie:r,propertyListProps:{isEssentialGroup:n},checked:p,disabled:u,onToggle:g})};var S=n(55548);const E=e=>{let{group:t}=e;const n=(0,a.Y)(),{name:l,description:c,items:d}=t,{group:{headlineFontSize:u},individualTexts:{headline:p,showMore:g,hideMore:h}}=n,m=(0,r.C)(t);return(0,s.jsxs)(S.Y,{legend:`${p}: ${l}`,headline:(0,s.jsxs)(o.S,{...m,fontSize:u,children:[l," (",d.length,")"]}),children:[(0,s.jsx)("span",{children:c}),!!d&&(0,s.jsx)(i.X,{showMore:g,hideMore:h,bullets:!0,children:d.map((e=>(0,s.jsx)(k,{group:t,cookie:e},e.id)))})]})};var I=n(4528);const w=()=>{const{groups:e}=(0,a.Y)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return(0,s.jsx)(I._,{children:t.map((e=>(0,s.jsx)(E,{group:e},e.id)))})}},63362:(e,t,n)=>{n.r(t),n.d(t,{BannerSticky:()=>s});const s=()=>null},14685:(e,t,n)=>{n.r(t),n.d(t,{BannerTcfGroupList:()=>R});var s=n(3713),a=n(41594),r=n(84094),o=n(20658),i=n(45746),l=n(8700),c=n(17140);const d=e=>{let{legend:t,active:n,onChange:a,items:r}=e;const{ButtonGroup:o,buttonGroupItem:d,screenReaderOnlyClass:u,Label:p}=(0,l.o)().extend(...i.I),g=(0,c.p)(),h=e=>{const{value:t}=e.target;a(t)};return(0,s.jsxs)(o,{children:[(0,s.jsx)("legend",{className:u,children:t}),r.map((e=>{let{key:t,value:a}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)("input",{name:g,type:"radio",value:t,checked:n===t,className:d,"aria-label":a,onChange:h}),(0,s.jsx)("span",{"aria-hidden":!0,children:a})]},t)}))]})};var u=n(43204),p=n(53024),g=n(30680),h=n(35010),m=n(9463),f=n(4959),v=n(50180),C=n(59112),x=n(81784),y=n(84832),b=n(43181),j=n(45453);function k(e,t,n){return e?e[n?"specialPurposes":"purposes"][`${t}`]||e.stdRetention:void 0}const S=e=>{let{id:t}=e;var n,o;const{Cookie:i}=(0,g.y)().extend(...j.C),[l,c]=(0,a.useState)(!1),d=(0,r.Y)(),u=(0,h.V)(),{designVersion:S,tcfFilterBy:I,lazyLoadedDataForSecondView:w,tcf:{gvl:P,model:M,original:{vendorConfigurations:O}}}=d,{vendors:{[t]:T},purposes:D,specialPurposes:A,features:L,specialFeatures:F,dataCategories:B}=P,{name:N,["consent"===I?"purposes":"legIntPurposes"]:z,flexiblePurposes:R,specialPurposes:$,features:U,specialFeatures:G,dataDeclaration:V,usesCookies:_,cookieMaxAgeSeconds:Q,cookieRefresh:H,usesNonCookieAccess:W,dataRetention:Y}=T,{dataProcessingInCountries:q,dataProcessingInCountriesSpecialTreatments:Z}=(0,a.useMemo)((()=>Object.values(O).filter((e=>{let{vendorId:n}=e;return n===t}))[0]),[t]),X=(0,a.useMemo)((()=>[...z,...R.filter((e=>-1===z.indexOf(e)))].filter((e=>(0,p.n)(M,e,"legInt"===I,T)))),[t,I]),{group:{descriptionFontSize:J},i18n:{tcf:{declarations:K,dataRetentionPeriod:ee,...te},safetyMechanisms:{adequacyDecision:ne,bindingCorporateRules:se,standardContractualClauses:ae},other:re,...oe},activeAction:ie}=d,{urls:le,additionalInformation:ce,deviceStorageDisclosure:de}=(null==w||null==(n=w.tcf)?void 0:n.vendors[t])||{urls:[],additionalInformation:{},deviceStorageDisclosure:{}},ue=null==ce?void 0:ce.legalAddress,pe=!!(null==ce?void 0:ce.internationalTransfers),ge=(null==ce?void 0:ce.transferMechanisms)||[],he=M["consent"===I?"vendorConsents":"vendorLegitimateInterests"],me="history"===ie,fe=he.has(t),[ve,Ce]=(0,a.useState)(fe);(0,a.useEffect)((()=>{Ce(fe)}),[fe]);const xe=(0,a.useCallback)((e=>{try{he[e?"set":"unset"](t),Ce(e)}catch(e){}}),[t,he,Ce]),{dataProcessingInUnsafeCountries:ye,appropriateSafeguards:be}=(0,m.Q)({dataProcessingInCountries:q,specialTreatments:Z,tcf:{internationalTransfers:pe,transferMechanisms:ge}}),{privacy:je,legIntClaim:ke}=(null==le?void 0:le[0])||{langId:"",privacy:"",legIntClaim:""},Se=(0,a.useCallback)(((e,t)=>(void 0===t&&(t=!1),e.map((e=>`${(t?A:D)[e].name}${Y?` (${ee}: ${u(k(Y,e,!1),"d")})`:""}`)).join(", "))),[D,A,Y]);return(0,s.jsxs)(i,{children:[(0,s.jsx)(f.S,{isChecked:ve,isDisabled:me,fontSize:J,onToggle:xe,after:(0,s.jsx)(v.X,{onToggle:c,showMore:oe.showMore,hideMore:oe.hideMore,bullets:!0}),children:(0,s.jsx)("strong",{children:N})}),l&&(0,s.jsxs)(a.Fragment,{children:[!!ue&&(0,s.jsx)(C.E,{label:oe.provider,value:ue.split(";").join(", ")}),(0,s.jsx)(C.E,{label:oe.providerPrivacyPolicyUrl,value:je}),"legInt"===I&&(0,s.jsx)(C.E,{label:te.legIntClaim,value:ke}),S<10&&ye.length>0&&(0,s.jsx)(C.E,{label:oe.dataProcessingInUnsafeCountries,value:ye.join(", ")}),S<10&&be.length>0&&(0,s.jsx)(C.E,{label:oe.appropriateSafeguard,value:be.join(", ")}),X.length>0&&(0,s.jsx)(C.E,{label:K.purposes.title,value:Se(X)}),$.length>0&&(0,s.jsx)(C.E,{label:K.specialPurposes.title,value:Se($,!0)}),U.length>0&&(0,s.jsx)(C.E,{label:K.features.title,value:U.map((e=>L[e].name)).join(", ")}),G.length>0&&(0,s.jsx)(C.E,{label:K.specialFeatures.title,value:G.map((e=>F[e].name)).join(", ")}),(null==V?void 0:V.length)>0&&(0,s.jsx)(C.E,{label:K.dataCategories.title,value:V.map((e=>B[e].name)).join(", ")}),(0,s.jsx)(C.E,{label:oe.usesCookies,value:_,printValueAs:"boolean"}),_&&(0,s.jsx)(C.E,{label:oe.duration,value:Q<=0?"Session":u(Q,"s")}),(0,s.jsx)(C.E,{label:oe.cookieRefresh,value:H,printValueAs:"boolean"}),(0,s.jsx)(C.E,{label:oe.usesNonCookieAccess,value:W,printValueAs:"boolean"}),(0,s.jsxs)(x.m,{expandable:S>9,labelModifications:{[oe.technicalCookieName]:oe.technicalCookieDefinitions},children:[S>9&&(0,s.jsx)(y.Q,{dataProcessingInCountries:q,dataProcessingInCountriesSpecialTreatments:Z,mechanisms:e=>{const t=[...e],n=ge.map((e=>e.toLowerCase()));return n.indexOf("adequacy decision")>-1&&t.push(ne),n.indexOf("sccs")>-1&&-1===e.indexOf("B")&&t.push(ae),n.indexOf("bcrs")>-1&&-1===e.indexOf("E")&&t.push(se),n.indexOf("other")>-1&&t.push(re),t}}),(null==de||null==(o=de.disclosures)?void 0:o.length)>0&&(0,s.jsx)(b.f,{codeDynamics:{},definitions:de.disclosures.map((e=>{let{type:t,identifier:n,domain:a,domains:r,maxAgeSeconds:o,cookieRefresh:i,purposes:l}=e;return{type:E(t),name:n,host:r?r.join(","):a||"n/a",isSessionDuration:null!==o&&o<=0,duration:o,durationUnit:"s",purpose:(null==l?void 0:l.length)?l.map((e=>{var t;return null==(t=D[e])?void 0:t.name})).filter(Boolean).join(", "):void 0,children:(0,s.jsx)(C.E,{label:oe.cookieRefresh,value:i,printValueAs:"boolean"})}}))})]})]})]})};function E(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}var I=n(54989),w=n(55548);const P=()=>{const e=(0,r.Y)(),{tcfFilterBy:t,i18n:{tcf:{vendors:n,filterNoVendors:a}}}=e,o=(0,I.E)(t),i=o.length>0;return(0,s.jsxs)(w.Y,{headline:n,children:[o.map((e=>{let{id:t}=e;return(0,s.jsx)(S,{id:t},t)})),!i&&a]})};var M=n(81116),O=n(96875),T=n(55924),D=n(85360);const A=e=>{let{declaration:t,id:n}=e;const{Link:o,Cookie:l}=(0,g.y)().extend(...i.I).extend(...j.C),[c,d]=(0,a.useState)(!1),u=(0,h.V)(),{tcf:{gvl:p,model:m},tcfFilterBy:x,group:{descriptionFontSize:y},activeAction:b,i18n:{purpose:S,showMore:E,hideMore:I,tcf:{example:w,vendors:P,vendorsCount:A,dataRetentionPeriod:L}}}=(0,r.Y)(),{[t]:{[n.toString()]:F}}=p,{name:B,description:N,illustrations:z}=F,R=["specialPurposes","features","dataCategories"].indexOf(t)>-1,$="history"===b||R,U=R?void 0:m["specialFeatures"===t?"specialFeatureOptins":"legInt"===x?"purposeLegitimateInterests":"purposeConsents"],G=R||!!(null==U?void 0:U.has(n)),[V,_]=(0,a.useState)(G);(0,a.useEffect)((()=>{_(G)}),[G]);const Q=(0,a.useCallback)((e=>{try{U[e?"set":"unset"](n),_(e)}catch(e){}}),[n,U,_]),H=(0,a.useMemo)((()=>(0,M.L)(p,m,n,t,"legInt"===x,!0)),[p,m,n,t,x]);return(0,s.jsxs)(l,{children:[(0,s.jsxs)(f.S,{hideCheckbox:-1===["purposes","specialFeatures"].indexOf(t),isChecked:V,isDisabled:$,fontSize:y,onToggle:Q,after:(0,s.jsx)(v.X,{onToggle:d,showMore:E,hideMore:I,bullets:!0}),children:[(0,s.jsx)("strong",{children:B})," (",(0,O.BP)(H.length,...A),")"]}),c&&(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(C.E,{label:S,value:(0,T.g)(N),children:(null==z?void 0:z.length)>0&&z.map(((e,t)=>(0,s.jsx)(C.E,{label:`${w} #${t+1}`,value:e},e)))}),(0,s.jsx)(C.E,{label:P,value:(0,D.i)(H.map((e=>{let{id:a,name:r,urls:i,dataRetention:l}=e;return(0,s.jsxs)(o,{href:(null==i?void 0:i[0].privacy)||"about:blank",target:"_blank",rel:"noreferrer",children:[r,["purposes","specialPurposes"].indexOf(t)>-1&&l?` (${L}: ${u(k(l,n,!1),"d")})`:""]},a)})),", ")})]})]})};var L=n(98927);const F=e=>{let{declaration:t}=e;const n=(0,r.Y)(),{i18n:{tcf:{declarations:{[t]:{title:o,desc:i}}}}}=n,l=function(e){const t=(0,r.Y)(),{tcf:{gvl:n,model:s},tcfFilterBy:o}=t,{[e]:i}=n;return(0,a.useMemo)((()=>(0,L.i)(e,n,s,o,!0)),[i,n,s,e,o])}(t);return l.length>0?(0,s.jsxs)(w.Y,{headline:o,children:[i,l.map((e=>{let{id:n}=e;return(0,s.jsx)(A,{declaration:t,id:n},n)}))]}):null};var B=n(4528),N=n(81257);const z=["purposes","specialPurposes","features","specialFeatures","dataCategories"],R=()=>{const e=(0,r.Y)(),{tcfFilterBy:t,suspense:n,i18n:{legitimateInterest:i,consent:l,tcf:{filterText:c,standard:p,standardDesc:g}},set:h}=e;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(w.Y,{headline:p,style:o.r,borderless:!0,children:[g,(0,s.jsxs)("div",{style:o.r,children:[(0,s.jsx)("span",{"aria-hidden":!0,children:c})," ",(0,s.jsx)(d,{legend:c,active:t,onChange:e=>h({tcfFilterBy:e}),items:[{key:"legInt",value:i},{key:"consent",value:l}]})]})]}),(0,s.jsx)(N.k,{promise:n.lazyLoadedDataForSecondView,suspenseProbs:{fallback:(0,s.jsx)(u.t,{})},children:(0,s.jsxs)(B._,{children:[(0,s.jsx)(P,{}),z.map((e=>(0,s.jsx)(F,{declaration:e},e)))]})})]})}},59112:(e,t,n)=>{n.d(t,{E:()=>d});var s=n(3713),a=n(41594),r=n(84200),o=n(41520),i=n(8700),l=n(45746),c=n(45453);const d=e=>{let{label:t,value:n,children:d,printValueAs:u,monospace:p}=e;const g=(0,i.o)(),{Link:h,CookieProperty:m}=g.extend(...l.I).extend(...c.C),f=(0,o.b)(),{i18n:{yes:v,no:C}}=f;let x="string"==typeof n&&n.startsWith("http")&&(0,r.g)(n)?(0,s.jsx)(h,{href:n,target:"_blank",rel:"noopener noreferrer",children:n}):"string"==typeof n?"phone"===u?(0,s.jsx)(h,{target:"_blank",href:`tel:${n.replace(/\s+/g,"")}`,children:n}):"mail"===u?(0,s.jsx)(h,{target:"_blank",href:`mailto:${n}`,children:n}):(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:n}}):n;return"boolean"===u&&(x=x?v:C),n||!1===n||"empty"===u?(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(m,{children:[t&&(0,s.jsxs)("strong",{children:[t,": "]}),(0,s.jsx)("span",{role:"presentation",style:{fontFamily:p?"monospace":void 0},children:x})]}),(0,s.jsx)(m,{children:!!d&&(0,s.jsx)("div",{children:d})})]}):null}},84832:(e,t,n)=>{n.d(t,{Q:()=>u});var s=n(3713),a=n(41594),r=n(96875),o=n(41520),i=n(21917),l=n(8700),c=n(59112),d=n(85360);const u=e=>{let{mechanisms:t,...n}=e;const{screenReaderOnlyClass:u}=(0,l.o)(),p=(0,r.JY)(u),{iso3166OneAlpha2:g,predefinedDataProcessingInSafeCountriesLists:h,territorialLegalBasis:m,isDataProcessingInUnsafeCountries:f,i18n:{dataProcessingInThirdCountries:v,territorialLegalBasisArticles:{"dsg-switzerland":{dataProcessingInUnsafeCountries:C},"gdpr-eprivacy":{dataProcessingInUnsafeCountries:x}},safetyMechanisms:{label:y,eu:b,switzerland:j,adequacyDecision:k,contractualGuaranteeSccSubprocessors:S,standardContractualClauses:E,bindingCorporateRules:I}}}=(0,o.b)(),{result:w,filter:P,isGdpr:M}=(0,i.F)({predefinedDataProcessingInSafeCountriesLists:h,territorialLegalBasis:m,isDataProcessingInUnsafeCountries:f,service:n}),O=Object.entries(w),T={A:k,"A-EU":`${k} (${b})`,"A-CH":`${k} (${j})`,B:E,C:S,D:m.length>1?"":M?x:C,"D-EU":x,"D-CH":C,E:I},D=Object.keys(T).filter((e=>P((t=>t===e)).length>0)),A=t?t(D):D;return(0,s.jsxs)(a.Fragment,{children:[O.length>0&&(0,s.jsx)(c.E,{label:v,value:(0,d.i)(O.map((e=>{let[t,n]=e;return(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:p(n.map((e=>[e,T[e]])),g[t]??t)}},t)})),", ")}),A.length>0&&(0,s.jsx)(c.E,{label:y,value:(0,d.i)(A.map((e=>(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:T[e]?p([[e]],T[e]):e}},e))),", ")})]})}},81784:(e,t,n)=>{n.d(t,{m:()=>c});var s=n(3713),a=n(41594),r=n(41520),o=n(96875),i=n(59112),l=n(50180);const c=e=>{let{expandable:t,children:n,labelModifications:c={}}=e;const{group:{detailsHideLessRelevant:d},i18n:{andSeparator:u,showLessRelevantDetails:p,hideLessRelevantDetails:g}}=(0,r.b)(),h=(0,a.useRef)(null),[m,f]=(0,a.useState)("");(0,a.useEffect)((()=>{const{current:e}=h;if(e){const t=[...new Set([...e.querySelectorAll(":scope>div>strong")].map((e=>{const t=e.innerText.replace(/:?\s+$/,"");return c[t]||t})))];f((0,o.$D)(t,u))}}),[h.current,c]);const v=(0,a.useCallback)((e=>e.replace("%s",m)),[m]);return d&&t?(0,s.jsx)("div",{"aria-hidden":!m,hidden:!m,children:(0,s.jsx)(i.E,{value:(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)(l.X,{showMore:v(p),hideMore:v(g),style:{fontStyle:"italic"},forceRender:!0,children:(0,s.jsxs)("div",{ref:h,children:[(0,s.jsx)("br",{}),n]})})]})})}):n}},43181:(e,t,n)=>{n.d(t,{f:()=>l});var s=n(3713),a=n(59112),r=n(34766),o=n(41520),i=n(35010);const l=e=>{let{definitions:t,codeDynamics:n}=e;const{i18n:l}=(0,o.b)(),c=(0,i.V)(),d={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}};return null==t?void 0:t.map((e=>{let{children:t,type:o,name:i,host:u,duration:p,durationUnit:g,isSessionDuration:h,purpose:m}=e;var f;return(0,s.jsxs)(a.E,{label:l.technicalCookieName,monospace:!0,value:(0,r.t)(i,n),children:[(0,s.jsx)(a.E,{label:l.type,value:(null==(f=d[o])?void 0:f.name)||o}),!!u&&(0,s.jsx)(a.E,{label:l.host,value:u,monospace:!0}),(0,s.jsx)(a.E,{label:l.duration,value:["local","indexedDb"].indexOf(o)>-1?l.noExpiration:h||"session"===o?"Session":c(p,g)}),t,(0,s.jsx)(a.E,{label:l.purpose,value:m})]},`${o}-${i}-${u}`)}))}},4528:(e,t,n)=>{n.d(t,{_:()=>o});var s=n(3713),a=n(45453),r=n(8700);const o=e=>{let{children:t}=e;const{GroupList:n}=(0,r.o)().extend(...a.C);return(0,s.jsx)(n,{children:t})}},50180:(e,t,n)=>{n.d(t,{X:()=>l});var s=n(3713),a=n(41594),r=n(8700),o=n(45746),i=n(17140);const l=e=>{let{onToggle:t,children:n,showMore:l,hideMore:c,bullets:d,forceRender:u,...p}=e;const{Link:g}=(0,r.o)().extend(...o.I),[h,m]=(0,a.useState)(!1),f=(0,i.p)();return(0,s.jsxs)(a.Fragment,{children:[d&&(0,s.jsx)(a.Fragment,{children:"  •  "}),(0,s.jsx)(g,{href:"#",onClick:e=>{const n=!h;m(n),null==t||t(n),e.preventDefault()},...n?{"aria-expanded":h,"aria-controls":f}:{},...p,children:h?c:l}),n&&(0,s.jsx)("div",{hidden:!h,id:f,children:(h||u)&&n})]})}},9463:(e,t,n)=>{n.d(t,{Q:()=>i});var s=n(55285),a=n(41594),r=n(41520),o=n(21917);function i(e){let{dataProcessingInCountries:t,specialTreatments:n,tcf:i={internationalTransfers:!1,transferMechanisms:[]}}=e;const{designVersion:l,i18n:{safetyMechanisms:c,other:d},isDataProcessingInUnsafeCountries:u,dataProcessingInUnsafeCountriesSafeCountries:p,iso3166OneAlpha2:g}=(0,r.b)(),{internationalTransfers:h,transferMechanisms:m}=i;return{dataProcessingInUnsafeCountries:(0,a.useMemo)((()=>u?(0,o.z)({dataProcessingInCountries:t,safeCountries:p,specialTreatments:n,isDisplay:!0}).map((e=>g[e]||e)):[]),[u,p,n,t,g]),appropriateSafeguards:(0,a.useMemo)((()=>[...new Set([n.indexOf(s.ak.StandardContractualClauses)>-1&&c.standardContractualClauses,l>6&&h&&m.map((e=>{switch(e){case"SCCs":return c.standardContractualClauses;case"Adequacy decision":return c.adequacyDecision;case"BCRs":return c.bindingCorporateRules;case"Other":return d;default:return""}}))].flat().filter(Boolean))]),[n,h,m])}}},35010:(e,t,n)=>{n.d(t,{V:()=>o});var s=n(41594),a=n(41520),r=n(96875);function o(){const{i18n:{durationUnit:e}}=(0,a.b)();return(0,s.useCallback)(((t,n)=>(0,r.BP)(t,e.n1[n],e.nx[n])),[e])}},84200:(e,t,n)=>{function s(e){return e.indexOf(".")>-1&&!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}n.d(t,{g:()=>s})},55924:(e,t,n)=>{n.d(t,{g:()=>r});var s=n(41594);const a=/(\r\n|\r|\n|<br[ ]?\/>)/g,r=e=>"string"==typeof e?e.split(a).map(((e,t)=>e.match(a)?(0,s.createElement)("br",{key:t}):e)):e}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.5/9462df3e944616edeae8764797e90353/banner-lazy.lite.js.map
