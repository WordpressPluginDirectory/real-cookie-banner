"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[109],{55285:(e,t,a)=>{var n,r,i,s;a.d(t,{ak:()=>i,iQ:()=>r,um:()=>s}),Object.freeze(["name","headline","subHeadline","provider","providerNotice","providerPrivacyPolicyUrl","providerLegalNoticeUrl","groupNotice","legalBasisNotice","technicalHandlingNotice","createContentBlockerNotice"]),Object.freeze(["name","codeOnPageLoad","googleConsentModeConsentTypes","codeOptIn","codeOptOut","createContentBlockerNotice","dataProcessingInCountries","dataProcessingInCountriesSpecialTreatments","deleteTechnicalDefinitionsAfterOptOut","dynamicFields","executeCodeOptInWhenNoTagManagerConsentIsGiven","executeCodeOptOutWhenNoTagManagerConsentIsGiven","group","groupNotice","isEmbeddingOnlyExternalResources","isProviderCurrentWebsite","legalBasis","legalBasisNotice","provider","providerNotice","providerPrivacyPolicyUrl","providerLegalNoticeUrl","purposes","shouldUncheckContentBlockerCheckbox","shouldUncheckContentBlockerCheckboxWhenOneOf","tagManagerOptInEventName","tagManagerOptOutEventName","technicalDefinitions","technicalHandlingNotice"]),function(e){e.Essential="essential",e.Functional="functional",e.Statistics="statistics",e.Marketing="marketing"}(n||(n={})),function(e){e.Consent="consent",e.LegitimateInterest="legitimate-interest",e.LegalRequirement="legal-requirement"}(r||(r={})),function(e){e.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework="provider-is-self-certified-trans-atlantic-data-privacy-framework",e.StandardContractualClauses="standard-contractual-clauses"}(i||(i={})),function(e){e.AdStorage="ad_storage",e.AdUserData="ad_user_data",e.AdPersonalization="ad_personalization",e.AnalyticsStorage="analytics_storage",e.FunctionalityStorage="functionality_storage",e.PersonalizationStorage="personalization_storage",e.SecurityStorage="security_storage"}(s||(s={})),Object.freeze(["id","logo","logoId","release","releaseId","extends","next","nextId","pre","preId","extendsId","translationIds","extendedTemplateId","translationInfo","purposeIds","dynamicFieldIds","technicalDefinitionIds","translatableRequiredFields","translatedRequiredFields","translatableOptionalFields","translatedOptionalFields","version"])},17312:(e,t,a)=>{a.d(t,{r:()=>u});var n=a(37689),r=a(77196),i=a(21282),s=a(589),o=a(60102),l=a(43444),c=a(65091),d=a(41594);const u=e=>{let{languages:t=[],recordId:a,onClick:u,children:p,wrapperProps:f={},...h}=e;const[g,m]=(0,d.useState)(!1),C=t.filter((e=>{let{id:t}=e;return!1!==t})),v=t.filter((e=>{let{id:t}=e;return!1===t})),y={size:13,shape:"square",style:{display:"block",width:"auto",borderRadius:5}},x={flex:"none",style:{textAlign:"center",paddingRight:5,fontSize:11,cursor:"pointer"}},k=(0,d.useCallback)((async e=>{if(!g){m(!0);try{u(a,e)}finally{m(!1)}}}),[g,u,a]);return(0,n.jsx)(s.A,{spinning:g,...f,children:(0,n.jsxs)(o.A,{align:"middle",...h,children:[C.map((e=>{const{code:t,flag:i,id:s}=e;return s===a?null:(0,n.jsxs)(l.A,{...x,onClick:()=>k(e),children:[(0,n.jsx)(c.A,{src:i,...y,children:t.toUpperCase()}),(0,n.jsx)(r.A,{})]},t)})),v.length>0&&v.map((e=>{const{code:t,flag:a}=e;return(0,n.jsxs)(l.A,{...x,onClick:()=>k(e),children:[(0,n.jsx)(c.A,{src:a,...y,children:t.toUpperCase()}),(0,n.jsx)(i.A,{})]},t)})),p]})})}},38994:(e,t,a)=>{a.d(t,{r:()=>i});var n=a(37689),r=a(36215);const i=e=>{let{children:t,description:a,extra:i,offset:s}=e;return(0,n.jsxs)(r.A.Item,{wrapperCol:{offset:s},style:{borderBottom:"1px solid #e7e7e7"},children:[(0,n.jsx)("h3",{style:{margin:`0 0 ${a?3:15}px 0`},children:t}),!!a&&(0,n.jsx)("p",{className:"description",style:{marginBottom:15},children:a}),i]})}},41220:(e,t,a)=>{a.d(t,{sN:()=>n});const n={labelCol:{span:6},wrapperCol:{span:16}}},3820:(e,t,a)=>{a.d(t,{S:()=>p});var n=a(37689),r=a(46745),i=a(36215),s=a(41594),o=a(24801),l=a(69004),c=a(82800),d=a(59726);const u=e=>{let{when:t,title:a}=e;const{__:r}=(0,d.s)(),[i,u=""]=(0,s.useMemo)((()=>a.split(".").map((e=>`${e.trim()}.`))),[a]);return(0,n.jsx)(o.Ay,{when:t,children:e=>{let{isActive:t,onConfirm:a,onCancel:s}=e;return(0,n.jsx)(l.A,{open:t,onCancel:s,onOk:a,centered:!0,okText:r("Leave"),cancelText:r("Cancel"),children:(0,n.jsx)(c.Ay,{status:"warning",title:i,subTitle:u})})}})};function p(e){let{isEdit:t,defaultValues:a,template:o,entityTemplateVersion:l,attributes:c,handleSave:d,i18n:p,initialHasChanges:f,trackFieldsDifferFromDefaultValues:h=[],unloadPromptWhen:g}=e;const{message:m}=r.A.useApp(),C={...a,...c||{}},[v]=i.A.useForm(),[y,x]=(0,s.useState)(!1),k=(0,s.useRef)(f||!1),w=!(!t||!o)&&l!==o.version,b=!!o&&(w||!t),I=[],A=(0,s.useCallback)((async e=>{x(!0);try{await d(e),v.resetFields(),m.success(p.successMessage),k.current=!1}catch(e){m.error(e)}finally{x(!1)}}),[v,d]),j=(0,s.useCallback)((()=>{m.error(p.validationError)}),[v,p]),O=(0,n.jsx)(u,{when:e=>k.current&&(!g||g(e)),title:f&&p.unloadConfirmInitialActive?p.unloadConfirmInitialActive:p.unloadConfirm}),S=(0,s.useCallback)(((e,t)=>{if(h&&C){I.splice(0,I.length);for(const e of h)t[e]!==C[e]&&I.push(e)}k.current=!0}),[h,C]);return{defaultValues:C,template:o,isEdit:t,isTemplateUpdate:w,templateCheck:b,form:v,isBusy:y,setIsBusy:x,hasTrackedFieldDifferenceToDefaultValue:e=>I.indexOf(e)>-1,onFinish:A,onFinishFailed:j,prompt:O,onValuesChange:S}}},94349:(e,t,a)=>{a.d(t,{o:()=>o});var n=a(37689),r=a(55285),i=a(12207),s=a(41594);function o(e){let{__:t,_i:a}=e;return(0,s.useMemo)((()=>{const e=[{label:(0,n.jsxs)(n.Fragment,{children:[t("I have concluded standard contractual clauses with the provider"),(0,n.jsx)("p",{className:"description",children:a(t("Did you sign a contract with the provider, e.g. when registering online? If so, the contract may contain {{a}}standard contractual clauses{{/a}} of the EU, which promise secure data processing in insecure third countries."),{a:(0,n.jsx)("a",{href:t("https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_en"),rel:"noreferrer",target:"_blank"})})})]}),value:r.ak.StandardContractualClauses},{label:(0,n.jsxs)(n.Fragment,{children:[t("Provider is self-certified in accordance with the Trans-Atlantic Data Privacy Framework for secure data processing in the USA"),(0,n.jsx)("p",{className:"description",children:a(t('The adequacy decision for secure data processing only applies if the provider is self certified and included in the "Data Privacy Framework List". To find out which companies are certified, {{a}}visit the website of the US government{{/a}}.'),{a:(0,n.jsx)("a",{href:t("https://www.dataprivacyframework.gov/s/participant-search/"),rel:"noreferrer",target:"_blank"})})})]}),value:r.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework}];return{specialTreatments:e,bySelectedCountries:(t,a)=>{const n=(0,i.z)({dataProcessingInCountries:t,safeCountries:a});return{unsafeCountries:n,specialTreatmentOptions:e.filter((e=>{let{value:a}=e;switch(a){case r.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework:return t.indexOf("US")>-1;case r.ak.StandardContractualClauses:return n.length>0;default:return!0}}))}}}}),[])}},12207:(e,t,a)=>{a.d(t,{z:()=>i});var n=a(55285),r=a(16205);function i(e){let{dataProcessingInCountries:t,safeCountries:a,specialTreatments:i=[],designVersion:s=r.G}=e;const o=s>4?i:[];return t.filter((e=>!(o.indexOf(n.ak.StandardContractualClauses)>-1)&&(-1===a.indexOf(e)||"US"===e&&-1===o.indexOf(n.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework))))}},16205:(e,t,a)=>{a.d(t,{G:()=>n});const n=9},85360:(e,t,a)=>{a.d(t,{i:()=>i});var n=a(37689),r=a(41594);function i(e,t){const a=e.filter(Boolean);return 0===a.length?null:a.reduce(((e,a,i)=>e.length?[...e,(0,n.jsx)(r.Fragment,{children:t},i),a]:[a]),[])}},32150:(e,t,a)=>{a.d(t,{C:()=>i});var n=a(68789);const r={path:"/:objectType/multilingual/copy",namespace:"wp/v2",method:n.RouteHttpVerb.POST};async function i(e,t,a){const{root:i,nonce:s}=window.wpApiSettings,{translations:o}=await(0,n.commonRequest)({location:r,options:{restRoot:i,restNonce:s,restNamespace:"wp/v2",restQuery:{}},request:{id:t,targetLocale:a},params:{objectType:e}});return o[a]}},40164:(e,t,a)=>{a.d(t,{e:()=>r});var n=a(37689);const r=e=>{let{children:t,maxWidth:a="auto",style:r={}}=e;return(0,n.jsx)("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===a?1300:a,...r},children:t})}},76576:(e,t,a)=>{a.d(t,{f:()=>i});var n=a(69665),r=a(68789);function i(){return r.qs.parse((0,n.useLocation)().search)}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.10/fd565e59f81704faebf9ae96fffb4389/109.lite.js.map
