"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[4],{93:(e,t,n)=>{n.r(t),n.d(t,{apply:()=>k});var o=n(2834),i=n(6399),a=n(1714),r=n(9408);const s="Google Tag Manager",c="Matomo Tag Manager",l="gtm",d="mtm";function u(e,t){let n,o,i,{presetId:a,isGcm:r}=t,u=!1,g="";const p={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let m=e||"none";switch("googleTagManagerWithGcm"!==m||r||(m="googleTagManager"),m){case"googleTagManager":case"googleTagManagerWithGcm":i=l,n="dataLayer",g=s,p.events="googleTagManagerWithGcm"!==m;break;case"matomoTagManager":i=d,n="_mtm",g=c;break;default:p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1}return n&&(o=()=>(window[n]=window[n]||[],window[n])),i&&a===i&&(u=!0,p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:o,useManager:m,serviceIsManager:u,managerLabel:g,expectedManagerPresetId:i,features:p}}function g(e){let t,{decisionCookieName:n,setCookiesViaManager:o,isGcm:i,groups:a,type:s}=e;const{useManager:c}=u(o,{isGcm:i,presetId:""}),l=a.find((e=>{let{isEssential:t}=e;return t})),d={[l.id]:l.items.map((e=>{let{id:t}=e;return t}))};if("consent"===s){const e=(0,r.y)(n);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=d)}return"essentials"===s&&(t=d),{isManagerActive:"none"!==c,selectedGroups:t,iterateServices:async function(e){for(const r of a)for(const a of r.items){var n;const c="all"===s||(null==(n=t[r.id])?void 0:n.indexOf(a.id))>-1,l=u(o,{presetId:a.presetId,isGcm:i});await e(r,a,c,l)}}}}var p=n(7400),m=n(6145),v=n(7177),h=n(4766),y=n(729);var C=n(72),f=n(9179),b=n(6336);async function k(e){const t=[];await g(e).iterateServices((async(e,n,o)=>{o&&t.push({group:e,service:n})})),document.dispatchEvent(new CustomEvent(C.r,{detail:{services:t}})),await(0,o.G)();const{dataLayer:n,isManagerOptOut:r,services:s,ready:c}=await async function(e){const t=[],{isManagerActive:n,iterateServices:o}=g(e),{skipOptIn:i}=e;const r=[];return await o((async(e,o,s,c)=>{let{getDataLayer:l,serviceIsManager:d}=c;const{codeDynamics:u,codeOptIn:g,executeCodeOptInWhenNoTagManagerConsentIsGiven:m}=o;if(s){const s=n&&m,c="function"==typeof i&&i(o);s||c||!g||r.push((0,a.l)(g,u));const l={group:e,service:o};document.dispatchEvent(new CustomEvent(p.D,{detail:l})),t.push(l)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(r)}}(e),{ready:l}=await async function(e,t,n){const o=[],{isManagerActive:i,iterateServices:r}=g(e);return t?(r(((e,n,o,i)=>{let{tagManagerOptInEventName:a}=n,{features:r}=i;o&&a&&r.events&&t.push({event:a})})),setTimeout((()=>r(((e,n,o,i)=>{let{tagManagerOptOutEventName:a}=n,{features:r}=i;!o&&a&&r.events&&t.push({event:a})}))),1e3)):i&&n&&await r((async(e,t,n)=>{let{codeDynamics:i,codeOptIn:r,executeCodeOptInWhenNoTagManagerConsentIsGiven:s}=t;n&&s&&o.push((0,a.l)(r,i))})),{ready:Promise.all(o)}}(e,n,r),d=Promise.all([c,l]);await(0,i.P)(),document.dispatchEvent(new CustomEvent(f.T,{detail:{services:s,ready:d}}));const{deleteHttpCookies:u,services:k,ready:w}=await async function(e,t){const n=[],{isManagerActive:o,iterateServices:i}=g(e),r=[],s=[];return await i((async(e,i,c)=>{const{id:l,codeDynamics:d,codeOptOut:u,deleteTechnicalDefinitionsAfterOptOut:g,isEmbeddingOnlyExternalResources:p,technicalDefinitions:C,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f}=i;if(!c){const c=o&&f;(c&&t||!c)&&r.push((0,a.l)(u,d)),g&&!p&&(function(e,t){for(const{type:n,name:o}of e){const e=(0,h.t)(o,t);if("*"===e)continue;const i=new RegExp((0,y.Z)(e),"g");switch(n){case"http":for(const e of Object.keys(v.A.get()))i.test(e)&&v.A.remove(e);break;case"local":case"session":try{const e="local"===n?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(i.test(t)){try{e.setItem(t,null)}catch(e){}let n=0;for(;e.getItem(t)&&n<100;)n++,e.removeItem(t)}}catch(e){continue}}}}(C,d),C.some((e=>{let{type:t}=e;return"http"===t}))&&s.push(l));const b={group:e,service:i};document.dispatchEvent(new CustomEvent(m.G,{detail:b})),n.push(b)}})),{services:n,ready:Promise.all(r),deleteHttpCookies:s}}(e,r);document.dispatchEvent(new CustomEvent(b.a,{detail:{services:k,deleteHttpCookies:u,ready:Promise.all([d,w])}}))}},6264:(e,t,n)=>{async function o(e,t){e.createdClientTime=(new Date).toISOString();const o=t.getConsentQueue();o.push(e),t.setConsentQueue(o);try{await t.getOption("persistConsent")(e,!0),t.setConsentQueue(t.getConsentQueue().filter((t=>{let{createdClientTime:n}=t;return e.createdClientTime!==n})))}catch(o){const{groups:i,decisionCookieName:a,tcfCookieName:r,gcmCookieName:s,failedConsentDocumentationHandling:c,revisionHash:l}=t.getOptions(),d="optimistic"===c,{decision:u,createdClientTime:g,tcfString:p,gcmConsent:m}=e,v={consent:d?"all"===u?i.reduce(((e,t)=>(e[t.id]=t.items.map((e=>{let{id:t}=e;return t})),e)),{}):"essentials"===u?(0,n(5974).w)(i,!1):u:(0,n(5974).w)(i,!1),previousUuids:[],revision:l,uuid:g,created:new Date(g)};localStorage.setItem(a,JSON.stringify(v)),p&&localStorage.setItem(r,d?p:""),m&&localStorage.setItem(s,d?JSON.stringify(m):"[]")}}n.d(t,{persistWithQueueFallback:()=>o})},7724:(e,t,n)=>{function o(e,t){void 0===t&&(t=!1);const{decisionCookieName:i,tcfCookieName:a,gcmCookieName:r}=e.getOptions(),s=()=>{localStorage.removeItem(i),localStorage.removeItem(a),localStorage.removeItem(r),localStorage.removeItem(e.getConsentQueueName())},c=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==c||c.addEventListener("click",s),e.isConsentQueueLocked()){const t=t=>{t.key!==e.getConsentQueueName(!0)||t.newValue||o(e)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t),null==c||c.removeEventListener("click",s)}}{let o,a=0;const r=async()=>{e.isConsentQueueLocked(!0);const t=e.getConsentQueue();let c=15e3;if(t.length>0){a++;try{const o=t.shift(),r=0===t.length||!n(7177).A.get(i),l=await e.getOption("persistConsent")(o,r),d=n(7177).A.get(i);d&&-1===d.indexOf(l)&&n(7177).A.set(i,d.replace(/^(.*?:.*?):/gm,`$1,${l}:`)),e.setConsentQueue(t),0===t.length&&s(),a=0,c=1500}catch(e){c=15*a*1e3}}o=setTimeout(r,c)};return e.isConsentQueueLocked(!0),o=setTimeout(r,t?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(o),null==c||c.removeEventListener("click",s)}}}n.d(t,{retryPersistFromQueue:()=>o})},72:(e,t,n)=>{n.d(t,{r:()=>o});const o="RCB/Apply/Interactive"},9558:(e,t,n)=>{n.r(t),n.d(t,{BannerHistorySelect:()=>o});const o=()=>{const e=(0,n(4094).Y)(),{Select:t}=(0,n(680).y)().extend(...n(5746).I),{set:o,consent:i,groups:a,tcf:r,isGcm:s,gcmConsent:c,lazyLoadedDataForSecondView:l,activeAction:d,history:u,fetchHistory:g,visible:p,i18n:{historyLabel:m,historyItemLoadError:v,historySelectNone:h}}=e,[y,C]=(0,n(7936).J0)(),[f,b]=(0,n(7936).J0)({consent:i,groups:a,tcf:r,gcmConsent:c,lazyLoadedDataForSecondView:l}),k=e=>{let{tcf:t,gcmConsent:n=[],...i}=e;o({...i,isTcf:!!t,tcf:null,gcmConsent:[]})};(0,n(7936).vJ)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(y){const{context:t}=y;k(t||e)}else k(e)}),[y]);const w=(0,n(7936).li)(!1);(0,n(7936).vJ)((()=>{l&&!w.current&&"history"===d&&p&&(w.current=!0,async function(){const e=await g();b({consent:i,groups:a,tcf:r,gcmConsent:c,lazyLoadedDataForSecondView:l}),o({history:e}),C(e[0])}())}),[l,d,p]),(0,n(7936).vJ)((()=>{p||(w.current=!1)}),[p]),(0,n(7936).vJ)((()=>()=>k(f)),[]);const S=null==y?void 0:y.uuid;return(0,n(6425).FD)(n(7936).FK,{children:[m," ",(0,n(6425).Y)(t,{disabled:!(null==u?void 0:u.length),value:(null==y?void 0:y.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of u){const{id:n}=e;if(n===t){C(e);break}}},children:(null==u?void 0:u.length)>0?u.map((e=>{let{id:t,isDoNotTrack:o,isUnblock:i,isForwarded:a,created:r}=e;return(0,n(6425).FD)("option",{value:t,children:[new Date(r).toLocaleString(document.documentElement.lang),o?" (Do Not Track)":"",i?" (Content Blocker)":"",a?" (Consent Forwarding)":""]},t)})):(0,n(6425).Y)("option",{value:-1,children:h})}),(0,n(6425).FD)("div",{style:{opacity:.5,marginTop:5},children:["UUID: ",S||"-"]}),!(null==y?void 0:y.context)&&(0,n(6425).Y)("div",{style:{fontWeight:"bold",marginTop:5},children:v})]})}},8997:(e,t,n)=>{n.r(t),n.d(t,{BannerGroupList:()=>C});var o=n(6425),i=n(4094),a=n(1801),r=n(4959),s=n(7936),c=n(8700),l=n(5746),d=n(7140);const u=e=>{let{onToggle:t,children:n,showMore:i,hideMore:a,...r}=e;const{Link:u}=(0,c.o)().extend(...l.I),[g,p]=(0,s.J0)(!1),m=(0,d.p)();return(0,o.FD)(s.FK,{children:["  •  ",(0,o.Y)(u,{href:"#",onClick:e=>{const n=!g;p(n),null==t||t(n),e.preventDefault()},...n?{"aria-expanded":g,"aria-controls":m}:{},...r,children:g?a:i}),n&&(0,o.Y)("div",{id:m,children:g&&n})]})};var g=n(7080);const p=e=>{let{group:{id:t,isEssential:n},cookie:a}=e;const{id:r}=a,c=(0,i.Y)(),{consent:l,activeAction:d}=c,u=n||"history"===d,p=n||((null==l?void 0:l[t])||[]).some((e=>e===r)),m=(0,s.hb)((e=>c.updateCookieChecked(t,r,e)),[c,t,r]);return(0,o.Y)(g.Cookie,{cookie:a,propertyListProps:{isEssentialGroup:n},checked:p,disabled:u,onToggle:m})};var m=n(5548);const v=e=>{let{group:t}=e;const n=(0,i.Y)(),{name:s,description:c,items:l}=t,{group:{headlineFontSize:d},individualTexts:{headline:g,showMore:v,hideMore:h}}=n,y=(0,a.C)(t);return(0,o.FD)(m.Y,{legend:`${g}: ${s}`,headline:(0,o.FD)(r.S,{...y,fontSize:d,children:[s," (",l.length,")"]}),children:[(0,o.Y)("span",{children:c}),!!l&&(0,o.Y)(u,{showMore:v,hideMore:h,children:l.map((e=>(0,o.Y)(p,{group:t,cookie:e},e.id)))})]})};var h=n(5453);const y=e=>{let{children:t}=e;const{GroupList:n}=(0,c.o)().extend(...h.C);return(0,o.Y)(n,{children:t})},C=()=>{const{groups:e}=(0,i.Y)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return(0,o.Y)(y,{children:t.map((e=>(0,o.Y)(v,{group:e},e.id)))})}},3362:(e,t,n)=>{n.r(t),n.d(t,{BannerSticky:()=>o});const o=()=>null},7080:(e,t,n)=>{n.r(t),n.d(t,{Cookie:()=>k});var o=n(6425),i=n(5922),a=n(4959),r=n(7936),s=n(4200),c=n(8700),l=n(5746),d=n(5453);const u=e=>{let{label:t,value:n,children:a,printValueAs:u,monospace:g}=e;const p=(0,c.o)(),{Link:m,CookieProperty:v}=p.extend(...l.I).extend(...d.C),h=(0,i.b)(),{i18n:{yes:y,no:C}}=h;let f="string"==typeof n&&n.startsWith("http")&&(0,s.g)(n)?(0,o.Y)(m,{href:n,target:"_blank",rel:"noopener noreferrer",children:n}):"string"==typeof n?"phone"===u?(0,o.Y)(m,{target:"_blank",href:`tel:${n.replace(/\s+/g,"")}`,children:n}):"mail"===u?(0,o.Y)(m,{target:"_blank",href:`mailto:${n}`,children:n}):(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:n}}):n;return"boolean"===u&&(f=f?y:C),n||!1===n||"empty"===u?(0,o.FD)(r.FK,{children:[(0,o.FD)(v,{children:[t&&(0,o.FD)("strong",{children:[t,": "]}),(0,o.Y)("span",{role:"presentation",style:{fontFamily:g?"monospace":void 0},children:f})]}),(0,o.Y)(v,{children:!!a&&(0,o.Y)("div",{children:a})})]}):null};var g=n(1477),p=n(4349),m=n(4766),v=n(5285);const h=/(\r\n|\r|\n|<br[ ]?\/>)/g;var y=n(680);const C=e=>{let{type:t,isDisabled:n,isBold:r}=e;const{Cookie:s}=(0,y.y)().extend(...d.C),{gcmConsent:c,updateGcmConsentTypeChecked:l,group:{descriptionFontSize:u},i18n:{gcm:{purposes:{[t]:g}}}}=(0,i.b)();return(0,o.Y)(s,{children:(0,o.Y)(a.S,{isChecked:c.indexOf(t)>-1,isDisabled:n,fontSize:u,onToggle:e=>l(t,e),children:(0,o.Y)("span",{style:{fontWeight:r?"bold":void 0},children:g})})})};var f=n(2207);const b=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:n,provider:a,providerContact:s={},providerPrivacyPolicyUrl:c,providerLegalNoticeUrl:l,legalBasis:d,ePrivacyUSA:y,dataProcessingInCountries:b,dataProcessingInCountriesSpecialTreatments:k,isEmbeddingOnlyExternalResources:w,technicalDefinitions:S,codeDynamics:Y,googleConsentModeConsentTypes:D},isEssentialGroup:I,isDisabled:T}=e;const{i18n:O,isEPrivacyUSA:M,isDataProcessingInUnsafeCountries:L,iso3166OneAlpha2:P,dataProcessingInUnsafeCountriesSafeCountries:x,designVersion:E,websiteOperator:F,isGcm:N}=(0,i.b)(),G=function(){const{i18n:{durationUnit:e},designVersion:t}=(0,i.b)();return(0,r.hb)(((n,o)=>t<6?e[o]:(0,g.B)(n,e.n1[o],e.nx[o])),[e])}(),A={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},U=(0,r.Kr)((()=>L?(0,f.z)({dataProcessingInCountries:b,safeCountries:x,specialTreatments:k.filter((e=>-1===[v.ak.StandardContractualClauses].indexOf(e))),designVersion:E}).map((e=>P[e]||e)):[]),[L,x,k,b,P,E]),{legalNotice:B,privacyPolicy:V,contactForm:Q}=(0,p.s)(),W=(0,r.Kr)((()=>{if(n&&F){const{address:e,country:t,contactEmail:n,contactPhone:o}=F;return{provider:[e,P[t]||t].filter(Boolean).join(", "),contact:{email:n,phone:o,link:Q},legalNoticeUrl:!1===B?"":B.url,privacyPolicyUrl:!1===V?"":V.url}}return{provider:a,contact:s,privacyPolicyUrl:c,legalNoticeUrl:l}}),[n,a,s,c,l,F,B,V,Q]),z=(0,r.Kr)((()=>Object.values(W.contact).filter(Boolean).length>0),[W.contact]);return(0,o.FD)(r.FK,{children:[!!t&&(0,o.Y)(u,{label:O.purpose,value:(H=t,"string"==typeof H?H.split(h).map(((e,t)=>e.match(h)?(0,r.n)("br",{key:t}):e)):H)}),(0,o.Y)(u,{label:O.legalBasis,value:"legal-requirement"===d?O.legalRequirement:"legitimate-interest"===d||I?O.legitimateInterest:O.consent}),N&&D.length>0&&(0,o.Y)(u,{label:O.gcm.dataProcessingInService,printValueAs:"empty",children:(0,o.Y)("div",{style:{display:"inline-block"},children:(0,o.Y)(u,{printValueAs:"empty",children:D.map((e=>(0,o.Y)(C,{type:e,isDisabled:T},e)))})})}),(0,o.Y)(u,{label:O.provider,value:W.provider,children:z&&(0,o.FD)(r.FK,{children:[(0,o.Y)(u,{label:O.providerContactPhone,value:W.contact.phone,printValueAs:"phone"}),(0,o.Y)(u,{label:O.providerContactEmail,value:W.contact.email,printValueAs:"mail"}),(0,o.Y)(u,{label:O.providerContactLink,value:W.contact.link})]})}),(0,o.Y)(u,{label:O.providerPrivacyPolicyUrl,value:W.privacyPolicyUrl}),(0,o.Y)(u,{label:O.providerLegalNoticeUrl,value:W.legalNoticeUrl}),!!M&&(0,o.Y)(u,{label:O.ePrivacyUSA,value:y,printValueAs:"boolean"}),U.length>0&&(0,o.Y)(u,{label:O.dataProcessingInUnsafeCountries,value:U.join(", ")}),E>4&&k.indexOf(v.ak.StandardContractualClauses)>-1&&(0,o.Y)(u,{label:O.appropriateSafeguard,value:O.standardContractualClauses}),!w&&S.map((e=>{let{type:t,name:n,host:i,duration:a,durationUnit:r,isSessionDuration:s,purpose:c}=e;return(0,o.FD)(u,{label:O.technicalCookieDefinition,monospace:!0,value:(0,m.t)(n,Y),children:[(0,o.Y)(u,{label:O.type,value:A[t].name}),(0,o.Y)(u,{label:O.purpose,value:c}),!!i&&(0,o.Y)(u,{label:O.host,value:i,monospace:!0}),(0,o.Y)(u,{label:O.duration,value:["local","indexedDb"].indexOf(t)>-1?O.noExpiration:s||"session"===t?"Session":G(a,r)})]},`${t}-${n}-${i}`)}))]});var H},k=e=>{let{cookie:t,checked:n,disabled:r,onToggle:s,propertyListProps:l={}}=e;const{Cookie:u}=(0,c.o)().extend(...d.C),{name:g}=t,{group:{descriptionFontSize:p}}=(0,i.b)();return(0,o.FD)(u,{children:[(0,o.Y)(a.S,{isChecked:n,isDisabled:r,fontSize:p,onToggle:s,children:(0,o.Y)("strong",{children:g})}),(0,o.Y)(b,{cookie:t,...l,isDisabled:!n})]})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.10/0ce5b0e06beca79eee710c7894341bf7/banner-lite-banner-lazy.lite.js.map
