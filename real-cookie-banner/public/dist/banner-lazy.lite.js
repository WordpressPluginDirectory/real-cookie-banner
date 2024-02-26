"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[376],{88330:(e,t,a)=>{a.r(t),a.d(t,{apply:()=>g});var n=a(28243),r=a(76778),l=a(33665),o=a(67359);function s(e){var t;return(0,o.C)(e)&&!/^\.?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/gm.test(e)?null===(t=(new DOMParser).parseFromString(`<a href="${e}"></a>`,"text/html").querySelector("a"))||void 0===t?void 0:t.href:(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;return new Promise((o=>{e?(0,r.H)().then((()=>Promise.all([a.e(925),a.e(376)]).then(a.t.bind(a,80839,23)).then((a=>{let{default:r}=a;return r(n,(0,l.c)(e,t),{done:o,error:e=>{console.error(e)},beforeWriteToken:e=>{const{attrs:t,booleanAttrs:a,src:n,href:r,content:l}=e;if(null!=a&&a["skip-write"])return!1;l&&(e.content=l.replace(/window\.onload\s*=/g,"window.rcbInitiatorOnload ="));for(const e in t)if(t[e]=s(t[e]),"unique-write-name"===e&&document.querySelector(`[unique-write-name="${t[e]}"]`))return!1;return n&&(e.src=s(n)),r&&(e.href=s(r)),e}})})))):o()}))}var i=a(10340);function u(e,t){let a,n,r,{presetId:l,isGcm:o}=t,s=!1,c="";const i={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let u=e||"none";switch("googleTagManagerWithGcm"!==u||o||(u="googleTagManager"),u){case"googleTagManager":case"googleTagManagerWithGcm":r="gtm",a="dataLayer",c="Google Tag Manager",i.events="googleTagManagerWithGcm"!==u;break;case"matomoTagManager":r="mtm",a="_mtm",c="Matomo Tag Manager";break;default:i.events=!1,i.executeCodeWhenNoTagManagerConsentIsGiven=!1}return a&&(n=()=>(window[a]=window[a]||[],window[a])),r&&l===r&&(s=!0,i.events=!1,i.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:n,useManager:u,serviceIsManager:s,managerLabel:c,expectedManagerPresetId:r,features:i}}function d(e){let t,{decisionCookieName:a,setCookiesViaManager:n,isGcm:r,groups:l,type:o}=e;const{useManager:s}=u(n,{isGcm:r,presetId:""}),c=l.find((e=>{let{isEssential:t}=e;return t})),d={[c.id]:c.items.map((e=>{let{id:t}=e;return t}))};if("consent"===o){const e=(0,i.h)(a);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=d)}return"essentials"===o&&(t=d),{isManagerActive:"none"!==s,selectedGroups:t,iterateServices:async function(e){for(const s of l)for(const l of s.items){var a;const c="all"===o||(null===(a=t[s.id])||void 0===a?void 0:a.indexOf(l.id))>-1,i=u(n,{presetId:l.presetId,isGcm:r});await e(s,l,c,i)}}}}var m=a(84670);function p(e){return`^${(t=e.replace(/\*/g,"PLEACE_REPLACE_ME_AGAIN"),t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")).replace(/PLEACE_REPLACE_ME_AGAIN/g,"(.*)")}$`;var t}async function g(e){const t=[];await d(e).iterateServices((async(e,a,n)=>{n&&t.push({group:e,service:a})})),document.dispatchEvent(new CustomEvent("RCB/Apply/Interactive",{detail:{services:t}})),await(0,n.C)();const{dataLayer:a,isManagerOptOut:o,services:s,ready:i}=await async function(e){const t=[],{isManagerActive:a,iterateServices:n}=d(e),{skipOptIn:r}=e;const l=[];return await n((async(e,n,o,s)=>{let{getDataLayer:i,serviceIsManager:u}=s;const{codeDynamics:d,codeOptIn:m,executeCodeOptInWhenNoTagManagerConsentIsGiven:p}=n;if(o){const o=a&&p,s="function"==typeof r&&r(n);o||s||!m||l.push(c(m,d));const i={group:e,service:n};document.dispatchEvent(new CustomEvent("RCB/OptIn",{detail:i})),t.push(i)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(l)}}(e),{ready:u}=await async function(e,t,a){const n=[],{isManagerActive:r,iterateServices:l}=d(e);return t?(l(((e,a,n,r)=>{let{tagManagerOptInEventName:l}=a,{features:o}=r;n&&l&&o.events&&t.push({event:l})})),setTimeout((()=>l(((e,a,n,r)=>{let{tagManagerOptOutEventName:l}=a,{features:o}=r;!n&&l&&o.events&&t.push({event:l})}))),1e3)):r&&a&&await l((async(e,t,a)=>{let{codeDynamics:r,codeOptIn:l,executeCodeOptInWhenNoTagManagerConsentIsGiven:o}=t;a&&o&&n.push(c(l,r))})),{ready:Promise.all(n)}}(e,a,o),g=Promise.all([i,u]);await(0,r.H)(),document.dispatchEvent(new CustomEvent("RCB/OptIn/All",{detail:{services:s,ready:g}}));const{deleteHttpCookies:v,services:f,ready:E}=await async function(e,t){const a=[],{isManagerActive:n,iterateServices:r}=d(e),o=[],s=[];return await r((async(e,r,i)=>{const{id:u,codeDynamics:d,codeOptOut:g,deleteTechnicalDefinitionsAfterOptOut:v,isEmbeddingOnlyExternalResources:f,technicalDefinitions:E,executeCodeOptOutWhenNoTagManagerConsentIsGiven:h}=r;if(!i){const i=n&&h;(i&&t||!i)&&o.push(c(g,d)),v&&!f&&(function(e,t){for(const{type:a,name:n}of e){const e=(0,l.c)(n,t);if("*"===e)continue;const r=new RegExp(p(e),"g");switch(a){case"http":for(const e of Object.keys(m.Z.get()))r.test(e)&&m.Z.remove(e);break;case"local":case"session":try{const e="local"===a?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(r.test(t)){try{e.setItem(t,null)}catch(e){}let a=0;for(;e.getItem(t)&&a<100;)a++,e.removeItem(t)}}catch(e){continue}}}}(E,d),E.some((e=>{let{type:t}=e;return"http"===t}))&&s.push(u));const y={group:e,service:r};document.dispatchEvent(new CustomEvent("RCB/OptOut",{detail:y})),a.push(y)}})),{services:a,ready:Promise.all(o),deleteHttpCookies:s}}(e,o);document.dispatchEvent(new CustomEvent("RCB/OptOut/All",{detail:{services:f,deleteHttpCookies:v,ready:Promise.all([g,E])}}))}},33665:(e,t,a)=>{a.d(t,{c:()=>r});const n=/{{([A-Za-z0-9_]+)}}/gm;function r(e,t){return e.replace(n,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?t[a]:e))}},42845:(e,t,a)=>{a.r(t),a.d(t,{BannerHistorySelect:()=>c});var n=a(87850),r=a(61762),l=a(87363),o=a(48185),s=a(6201);const c=()=>{const e=(0,n.S)(),{Select:t}=(0,r.Y)().extend(...o.A),{set:a,consent:c,groups:i,tcf:u,isGcm:d,gcmConsent:m,lazyLoadedDataForSecondView:p,activeAction:g,history:v,fetchHistory:f,i18n:{historyLabel:E,historySelectNone:h}}=e,[y,R]=(0,l.useState)(),[C,b]=(0,l.useState)({consent:c,groups:i,tcf:u,gcmConsent:m,lazyLoadedDataForSecondView:p}),k=e=>{let{tcf:t,gcmConsent:n=[],...r}=e;const l={isTcf:!!t,tcf:null,gcmConsent:[]};t&&Object.assign(l,{tcf:"gvl"in t?t:(0,s.P)(t)}),a({...r,...l})};(0,l.useEffect)((()=>{k(y?y.context:{consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0})}),[y]);const S=(0,l.useRef)(!1);(0,l.useEffect)((()=>{p&&!S.current&&"history"===g&&(S.current=!0,async function(){const e=await f();b({consent:c,groups:i,tcf:u,gcmConsent:m,lazyLoadedDataForSecondView:p}),a({history:e}),R(e[0])}())}),[p,g]),(0,l.useEffect)((()=>()=>k(C)),[]);const w=null==y?void 0:y.uuid;return React.createElement(l.Fragment,null,E," ",React.createElement(t,{disabled:!(null!=v&&v.length),value:(null==y?void 0:y.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of v){const{id:a}=e;if(a===t){R(e);break}}}},(null==v?void 0:v.length)>0?v.map((e=>{let{id:t,isDoNotTrack:a,isUnblock:n,isForwarded:r,created:l}=e;return React.createElement("option",{key:t,value:t},new Date(l).toLocaleString(document.documentElement.lang),a?" (Do Not Track)":"",n?" (Content Blocker)":"",r?" (Consent Forwarding)":"")})):React.createElement("option",{value:-1},h)),React.createElement("div",{style:{opacity:.5,marginTop:5}},"UUID: ",w||"-"))}},36993:(e,t,a)=>{a.r(t),a.d(t,{BannerGroupList:()=>P});var n=a(87850),r=a(87363),l=a(59840),o=a(54324),s=a(46270),c=a(63508),i=a(60044),u=a(12398),d=a(97064),m=a(33665),p=a(93160),g=a(60065),v=a(61762),f=a(36556);const E=e=>{let{type:t,isDisabled:a,isBold:n}=e;const{Cookie:r}=(0,v.Y)().extend(...f.w),{gcmConsent:o,updateGcmConsentTypeChecked:s,group:{descriptionFontSize:i},i18n:{gcm:{purposes:{[t]:u}}}}=(0,c.w)();return React.createElement(r,null,React.createElement(l.X,{isChecked:o.indexOf(t)>-1,isDisabled:a,fontSize:i,onToggle:e=>s(t,e)},React.createElement("span",{style:{fontWeight:n?"bold":void 0}},u)))};var h=a(16379);const y=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:a,provider:n,providerContact:l={},providerPrivacyPolicyUrl:o,providerLegalNoticeUrl:s,legalBasis:v,ePrivacyUSA:f,dataProcessingInCountries:y,dataProcessingInCountriesSpecialTreatments:R,isEmbeddingOnlyExternalResources:C,technicalDefinitions:b,codeDynamics:k,googleConsentModeConsentTypes:S},isEssentialGroup:w,isDisabled:P}=e;const{i18n:I,isEPrivacyUSA:A,isDataProcessingInUnsafeCountries:M,iso3166OneAlpha2:O,dataProcessingInUnsafeCountriesSafeCountries:x,designVersion:D,websiteOperator:T,isGcm:F}=(0,c.w)(),L=(0,u.E)(),z={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},B=(0,r.useMemo)((()=>M?(0,h.D)({dataProcessingInCountries:y,safeCountries:x,specialTreatments:R.filter((e=>-1===[p.gt.StandardContractualClauses].indexOf(e))),designVersion:D}).map((e=>O[e]||e)):[]),[M,x,R,y,O,D]),{legalNotice:G,privacyPolicy:U,contactForm:N}=(0,d.p)(),$=(0,r.useMemo)((()=>{if(a&&T){const{address:e,country:t,contactEmail:a,contactPhone:n}=T;return{provider:[e,O[t]||t].filter(Boolean).join(", "),contact:{email:a,phone:n,link:N},legalNoticeUrl:!1===G?"":G.url,privacyPolicyUrl:!1===U?"":U.url}}return{provider:n,contact:l,privacyPolicyUrl:o,legalNoticeUrl:s}}),[a,n,l,o,s,T,G,U,N]),V=(0,r.useMemo)((()=>Object.values($.contact).filter(Boolean).length>0),[$.contact]);return React.createElement(r.Fragment,null,!!t&&React.createElement(i.l,{label:I.purpose,value:(0,g.E)(t)}),React.createElement(i.l,{label:I.legalBasis,value:"legal-requirement"===v?I.legalRequirement:"legitimate-interest"===v||w?I.legitimateInterest:I.consent}),F&&S.length>0&&React.createElement(i.l,{label:I.gcm.dataProcessingInService,printValueAs:"empty"},React.createElement("div",{style:{display:"inline-block"}},React.createElement(i.l,{printValueAs:"empty"},S.map((e=>React.createElement(E,{key:e,type:e,isDisabled:P})))))),React.createElement(i.l,{label:I.provider,value:$.provider},V&&React.createElement(r.Fragment,null,React.createElement(i.l,{label:I.providerContactPhone,value:$.contact.phone,printValueAs:"phone"}),React.createElement(i.l,{label:I.providerContactEmail,value:$.contact.email,printValueAs:"mail"}),React.createElement(i.l,{label:I.providerContactLink,value:$.contact.link}))),React.createElement(i.l,{label:I.providerPrivacyPolicyUrl,value:$.privacyPolicyUrl}),React.createElement(i.l,{label:I.providerLegalNoticeUrl,value:$.legalNoticeUrl}),!!A&&React.createElement(i.l,{label:I.ePrivacyUSA,value:f,printValueAs:"boolean"}),B.length>0&&React.createElement(i.l,{label:I.dataProcessingInUnsafeCountries,value:B.join(", ")}),D>4&&R.indexOf(p.gt.StandardContractualClauses)>-1&&React.createElement(i.l,{label:I.appropriateSafeguard,value:I.standardContractualClauses}),!C&&b.map((e=>{let{type:t,name:a,host:n,duration:r,durationUnit:l,isSessionDuration:o,purpose:s}=e;return React.createElement(i.l,{key:`${t}-${a}-${n}`,label:I.technicalCookieDefinition,monospace:!0,value:(0,m.c)(a,k)},React.createElement(i.l,{label:I.type,value:z[t].name}),React.createElement(i.l,{label:I.purpose,value:s}),!!n&&React.createElement(i.l,{label:I.host,value:n,monospace:!0}),React.createElement(i.l,{label:I.duration,value:["local","indexedDb"].indexOf(t)>-1?I.noExpiration:o||"session"===t?"Session":L(r,l)}))})))};var R=a(69216);const C=e=>{let{cookie:t,checked:a,disabled:n,onToggle:r,propertyListProps:o={}}=e;const{Cookie:i}=(0,R.R)().extend(...f.w),{name:u}=t,{group:{descriptionFontSize:d}}=(0,c.w)();return React.createElement(i,null,React.createElement(l.X,{isChecked:a,isDisabled:n,fontSize:d,onToggle:r},React.createElement("strong",null,u)),React.createElement(y,(0,s.Z)({cookie:t},o,{isDisabled:!a})))},b=e=>{let{group:{id:t,isEssential:a},cookie:l}=e;const{id:o}=l,s=(0,n.S)(),{consent:c,activeAction:i}=s,u=a||"history"===i,d=a||((null==c?void 0:c[t])||[]).some((e=>e===o)),m=(0,r.useCallback)((e=>s.updateCookieChecked(t,o,e)),[s,t,o]);return React.createElement(C,{cookie:l,propertyListProps:{isEssentialGroup:a},checked:d,disabled:u,onToggle:m})};var k=a(34429);const S=e=>{var t;let{group:a}=e;const s=(0,n.S)(),{id:c,name:i,description:u,items:d,isEssential:m}=a,{previewCheckboxActiveState:p,consent:g,activeAction:v,group:{headlineFontSize:f},individualTexts:{headline:E,showMore:h,hideMore:y}}=s,R=m||"history"===v,C=p||m||!!g[c],S=!m&&(null===(t=g[c])||void 0===t?void 0:t.length)&&JSON.stringify(d.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(g[c].sort()||[]),w=(0,r.useCallback)((e=>s.updateGroupChecked(c,e)),[s,c,C]);return React.createElement(k.Z,{legend:`${E}: ${i}`,headline:React.createElement(l.X,{onToggle:w,isPartial:S,isChecked:C,isDisabled:R,fontSize:f},i," (",d.length,")")},React.createElement("span",null,u),!!d&&React.createElement(o.O,{showMore:h,hideMore:y},d.map((e=>React.createElement(b,{key:e.id,group:a,cookie:e})))))};var w=a(29057);const P=()=>{const{groups:e}=(0,n.S)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return React.createElement(w.c,null,t.map((e=>React.createElement(S,{key:e.id,group:e}))))}},75092:(e,t,a)=>{a.r(t),a.d(t,{BannerTcfGroupList:()=>z});var n=a(87363),r=a(87850),l=a(12535),o=a(48185),s=a(69216),c=a(33163);const i=e=>{let{legend:t,active:a,onChange:n,items:r}=e;const{ButtonGroup:l,buttonGroupItem:i,screenReaderOnlyClass:u,Label:d}=(0,s.R)().extend(...o.A),m=(0,c.q)(),p=e=>{const{value:t}=e.target;n(t)};return React.createElement(l,null,React.createElement("legend",{className:u},t),r.map((e=>{let{key:t,value:n}=e;return React.createElement(d,{key:t},React.createElement("input",{name:m,type:"radio",value:t,checked:a===t,className:i,"aria-label":n,onChange:p}),React.createElement("span",{"aria-hidden":!0},n))})))};var u=a(42152),d=a(51895),m=a(61762),p=a(12398),g=a(16379),v=a(59840),f=a(54324),E=a(60044),h=a(36556),y=a(93160);function R(e,t,a){return e?e[a?"specialPurposes":"purposes"][`${t}`]||e.stdRetention:void 0}const C=e=>{var t,a;let{id:l}=e;const{Cookie:o}=(0,m.Y)().extend(...h.w),[s,c]=(0,n.useState)(!1),i=(0,r.S)(),u=(0,p.E)(),{isEPrivacyUSA:C,isDataProcessingInUnsafeCountries:k,dataProcessingInUnsafeCountriesSafeCountries:S,iso3166OneAlpha2:w,designVersion:P,tcfFilterBy:I,lazyLoadedDataForSecondView:A,tcf:{gvl:M,model:O,original:{vendorConfigurations:x}}}=i,{vendors:{[l]:D},purposes:T,specialPurposes:F,features:L,specialFeatures:z,dataCategories:B}=M,{name:G,["consent"===I?"purposes":"legIntPurposes"]:U,flexiblePurposes:N,specialPurposes:$,features:V,specialFeatures:j,dataDeclaration:Z,usesCookies:_,cookieMaxAgeSeconds:W,cookieRefresh:H,usesNonCookieAccess:q,dataRetention:X}=D,{ePrivacyUSA:Y,dataProcessingInCountries:J,dataProcessingInCountriesSpecialTreatments:K}=(0,n.useMemo)((()=>Object.values(x).filter((e=>{let{vendorId:t}=e;return t===l}))[0]),[l]),Q=(0,n.useMemo)((()=>[...U,...N.filter((e=>-1===U.indexOf(e)))].filter((e=>(0,d.a)(O,e,"legInt"===I,D)))),[l,I]),{group:{descriptionFontSize:ee},i18n:{tcf:{declarations:te,dataRetentionPeriod:ae,...ne},...re},activeAction:le}=i,{urls:oe,additionalInformation:se,deviceStorageDisclosure:ce}=(null==A||null===(t=A.tcf)||void 0===t?void 0:t.vendors[l])||{urls:[],additionalInformation:{},deviceStorageDisclosure:{}},ie=null==se?void 0:se.legalAddress,ue=!(null==se||!se.internationalTransfers),de=(null==se?void 0:se.transferMechanisms)||[],me=O["consent"===I?"vendorConsents":"vendorLegitimateInterests"],pe="history"===le,ge=me.has(l),[ve,fe]=(0,n.useState)(ge);(0,n.useEffect)((()=>{fe(ge)}),[ge]);const Ee=(0,n.useCallback)((e=>{try{me[e?"set":"unset"](l),fe(e)}catch(e){}}),[l,me,fe]),he=(0,n.useMemo)((()=>k?(0,g.D)({dataProcessingInCountries:J,safeCountries:S,specialTreatments:K.filter((e=>-1===[y.gt.StandardContractualClauses].indexOf(e))),designVersion:P}).map((e=>w[e]||e)):[]),[k,S,K,J,w,P]),ye=(0,n.useMemo)((()=>[...new Set([P>4&&K.indexOf(y.gt.StandardContractualClauses)>-1&&re.standardContractualClauses,P>6&&ue&&de.map((e=>{switch(e){case"SCCs":return re.standardContractualClauses;case"Adequacy decision":return re.adequacyDecision;case"BCRs":return re.bindingCorporateRules;case"Other":return re.other;default:return""}}))].flat().filter(Boolean))]),[P,K]),{privacy:Re,legIntClaim:Ce}=(null==oe?void 0:oe[0])||{langId:"",privacy:"",legIntClaim:""},be=(0,n.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((e=>`${(t?F:T)[e].name}${X?` (${ae}: ${u(R(X,e,!1),"d")})`:""}`)).join(", ")}),[T,F,X]);return React.createElement(o,null,React.createElement(v.X,{isChecked:ve,isDisabled:pe,fontSize:ee,onToggle:Ee,after:React.createElement(f.O,{onToggle:c,showMore:ne.showMore,hideMore:ne.hideMore})},React.createElement("strong",null,G)),s&&React.createElement(n.Fragment,null,!!ie&&React.createElement(E.l,{label:re.provider,value:ie.split(";").join(", ")}),React.createElement(E.l,{label:re.providerPrivacyPolicyUrl,value:Re}),"legInt"===I&&React.createElement(E.l,{label:ne.legIntClaim,value:Ce}),!!C&&React.createElement(E.l,{label:re.ePrivacyUSA,value:ue?re.yes:2===Y?re.unknown:1===Y?re.yes:re.no}),he.length>0&&React.createElement(E.l,{label:re.dataProcessingInUnsafeCountries,value:he.join(", ")}),ye.length>0&&React.createElement(E.l,{label:re.appropriateSafeguard,value:ye.join(", ")}),Q.length>0&&React.createElement(E.l,{label:te.purposes.title,value:be(Q)}),$.length>0&&React.createElement(E.l,{label:te.specialPurposes.title,value:be($,!0)}),V.length>0&&React.createElement(E.l,{label:te.features.title,value:V.map((e=>L[e].name)).join(", ")}),j.length>0&&React.createElement(E.l,{label:te.specialFeatures.title,value:j.map((e=>z[e].name)).join(", ")}),(null==Z?void 0:Z.length)>0&&React.createElement(E.l,{label:te.dataCategories.title,value:Z.map((e=>B[e].name)).join(", ")}),React.createElement(E.l,{label:re.usesCookies,value:_,printValueAs:"boolean"}),_&&React.createElement(E.l,{label:re.duration,value:W<=0?"Session":u(W,"s")}),React.createElement(E.l,{label:re.cookieRefresh,value:H,printValueAs:"boolean"}),React.createElement(E.l,{label:re.usesNonCookieAccess,value:q,printValueAs:"boolean"}),null==ce||null===(a=ce.disclosures)||void 0===a?void 0:a.map((e=>{let{type:t,identifier:a,domain:n,domains:r,maxAgeSeconds:l,cookieRefresh:o,purposes:s}=e;return React.createElement(E.l,{key:`${t}-${a}-${G}`,label:re.technicalCookieDefinition,value:React.createElement("span",{style:{fontFamily:"monospace"}},a)},React.createElement(E.l,{label:re.type,value:b(t)}),!!r&&React.createElement(E.l,{label:re.host,value:React.createElement("span",{style:{fontFamily:"monospace"}},r.join(","))})||!!n&&React.createElement(E.l,{label:re.host,value:React.createElement("span",{style:{fontFamily:"monospace"}},n)}),null!==l&&React.createElement(E.l,{label:re.duration,value:l<=0?"Session":u(l,"s")}),React.createElement(E.l,{label:re.cookieRefresh,value:o,printValueAs:"boolean"}),!(null==s||!s.length)&&React.createElement(E.l,{label:te.purposes.title,value:s.map((e=>{var t;return null===(t=T[e])||void 0===t?void 0:t.name})).filter(Boolean).join(", ")}))}))))};function b(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}var k=a(18215),S=a(34429);const w=()=>{const e=(0,r.S)(),{tcfFilterBy:t,i18n:{tcf:{vendors:a,filterNoVendors:n}}}=e,l=(0,k.m)(t),o=l.length>0;return React.createElement(S.Z,{headline:a},l.map((e=>{let{id:t}=e;return React.createElement(C,{key:t,id:t})})),!o&&n)};var P=a(82303),I=a(60405),A=a(60065),M=a(68176);const O=e=>{let{declaration:t,id:a}=e;const{Link:l,Cookie:s}=(0,m.Y)().extend(...o.A).extend(...h.w),[c,i]=(0,n.useState)(!1),u=(0,p.E)(),{tcf:{gvl:d,model:g},tcfFilterBy:y,group:{descriptionFontSize:C},activeAction:b,i18n:{purpose:k,tcf:{showMore:S,hideMore:w,example:O,vendors:x,vendorsCount:D,dataRetentionPeriod:T}},designVersion:F}=(0,r.S)(),{[t]:{[a.toString()]:L}}=d,{name:z,description:B,illustrations:G}=L,U=["specialPurposes","features","dataCategories"].indexOf(t)>-1,N="history"===b||U,$=U?void 0:g["specialFeatures"===t?"specialFeatureOptins":"legInt"===y?"purposeLegitimateInterests":"purposeConsents"],V=U||!(null==$||!$.has(a)),[j,Z]=(0,n.useState)(V);(0,n.useEffect)((()=>{Z(V)}),[V]);const _=(0,n.useCallback)((e=>{try{$[e?"set":"unset"](a),Z(e)}catch(e){}}),[a,$,Z]),W=(0,n.useMemo)((()=>(0,P.K)(d,g,a,t,"legInt"===y,!0)),[d,g,a,t,y]);return React.createElement(s,null,React.createElement(v.X,{hideCheckbox:-1===["purposes","specialFeatures"].indexOf(t),isChecked:j,isDisabled:N,fontSize:C,onToggle:_,after:React.createElement(f.O,{onToggle:i,showMore:S,hideMore:w})},React.createElement("strong",null,z),F>6&&React.createElement(n.Fragment,null," (",(0,I.D)(W.length,...D),")")),c&&React.createElement(n.Fragment,null,React.createElement(E.l,{label:k,value:(0,A.E)(B)},(null==G?void 0:G.length)>0&&G.map(((e,t)=>React.createElement(E.l,{key:e,label:`${O} #${t+1}`,value:e})))),React.createElement(E.l,{label:x,value:(0,M.e)(W.map((e=>{let{id:n,name:r,urls:o,dataRetention:s}=e;return React.createElement(l,{key:n,href:(null==o?void 0:o[0].privacy)||"about:blank",target:"_blank",rel:"noreferrer"},r,["purposes","specialPurposes"].indexOf(t)>-1&&s?` (${T}: ${u(R(s,a,!1),"d")})`:"")})),", ")})))};var x=a(95118);const D=e=>{let{declaration:t}=e;const a=(0,r.S)(),{i18n:{tcf:{declarations:{[t]:{title:l,desc:o}}}}}=a,s=function(e){const t=(0,r.S)(),{tcf:{gvl:a,model:l},tcfFilterBy:o}=t,{[e]:s}=a;return(0,n.useMemo)((()=>(0,x.m)(e,a,l,o,!0)),[s,a,l,e,o])}(t);return s.length>0?React.createElement(S.Z,{headline:l},o,s.map((e=>{let{id:a}=e;return React.createElement(O,{key:a,declaration:t,id:a})}))):null};var T=a(29057),F=a(17687);const L=["purposes","specialPurposes","features","specialFeatures","dataCategories"],z=()=>{const e=(0,r.S)(),{tcfFilterBy:t,suspense:a,i18n:{legitimateInterest:o,consent:s,tcf:{filterText:c,standard:d,standardDesc:m}},set:p}=e;return React.createElement(n.Fragment,null,React.createElement(S.Z,{headline:d,style:l.L,borderless:!0},m,React.createElement("div",{style:l.L},React.createElement("span",{"aria-hidden":!0},c)," ",React.createElement(i,{legend:c,active:t,onChange:e=>p({tcfFilterBy:e}),items:[{key:"legInt",value:o},{key:"consent",value:s}]}))),React.createElement(F.Y,{promise:a.lazyLoadedDataForSecondView,suspenseProbs:{fallback:React.createElement(u.X,null)}},React.createElement(T.c,null,React.createElement(w,null),L.map((e=>React.createElement(D,{key:e,declaration:e}))))))}},60044:(e,t,a)=>{a.d(t,{l:()=>i});var n=a(87363),r=a(67359),l=a(63508),o=a(69216),s=a(48185),c=a(36556);const i=e=>{let{label:t,value:a,children:i,printValueAs:u,monospace:d}=e;const m=(0,o.R)(),{Link:p,CookieProperty:g}=m.extend(...s.A).extend(...c.w),v=(0,l.w)(),{i18n:{yes:f,no:E}}=v;let h="string"==typeof a&&a.startsWith("http")&&(0,r.C)(a)?React.createElement(p,{href:a,target:"_blank",rel:"noopener noreferrer"},a):"string"==typeof a?"phone"===u?React.createElement(p,{target:"_blank",href:`tel:${a.replace(/\s+/g,"")}`},a):"mail"===u?React.createElement(p,{target:"_blank",href:`mailto:${a}`},a):React.createElement("span",{dangerouslySetInnerHTML:{__html:a}}):a;return"boolean"===u&&(h=h?f:E),a||!1===a||"empty"===u?React.createElement(n.Fragment,null,React.createElement(g,null,t&&React.createElement("strong",null,t,": "),React.createElement("span",{role:"presentation",style:{fontFamily:d?"monospace":void 0}},h)),React.createElement(g,null,!!i&&React.createElement("div",null,i))):null}},29057:(e,t,a)=>{a.d(t,{c:()=>l});var n=a(36556),r=a(69216);const l=e=>{let{children:t}=e;const{GroupList:a}=(0,r.R)().extend(...n.w);return React.createElement(a,null,t)}},54324:(e,t,a)=>{a.d(t,{O:()=>c});var n=a(46270),r=a(87363),l=a(69216),o=a(48185),s=a(33163);const c=e=>{let{onToggle:t,children:a,showMore:c,hideMore:i,...u}=e;const{Link:d}=(0,l.R)().extend(...o.A),[m,p]=(0,r.useState)(!1),g=(0,s.q)();return React.createElement(r.Fragment,null,"  •  ",React.createElement(d,(0,n.Z)({href:"#",onClick:e=>{const a=!m;p(a),null==t||t(a),e.preventDefault()}},a?{"aria-expanded":m,"aria-controls":g}:{},u),m?i:c),a&&React.createElement("div",{id:g},m&&a))}},12398:(e,t,a)=>{a.d(t,{E:()=>o});var n=a(87363),r=a(63508),l=a(60405);function o(){const{i18n:{durationUnit:e},designVersion:t}=(0,r.w)();return(0,n.useCallback)(((a,n)=>t<6?e[n]:(0,l.D)(a,e.n1[n],e.nx[n])),[e])}},67359:(e,t,a)=>{function n(e){return e.indexOf(".")>-1&&!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}a.d(t,{C:()=>n})},60065:(e,t,a)=>{a.d(t,{E:()=>l});var n=a(87363);const r=/(\r\n|\r|\n|<br[ ]?\/>)/g,l=e=>"string"==typeof e?e.split(r).map(((e,t)=>e.match(r)?(0,n.createElement)("br",{key:t}):e)):e}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.0/1dd1e29f8dbb613558cc7579e4e40f33/banner-lazy.lite.js.map
