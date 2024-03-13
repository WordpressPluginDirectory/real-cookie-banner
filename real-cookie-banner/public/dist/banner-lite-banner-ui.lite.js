"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[617],{9840:(e,t,n)=>{n.d(t,{X:()=>i});var o=n(748).h;const i=e=>{let{hideCheckbox:t,isPartial:i,isChecked:a,isDisabled:r,fontSize:s,onToggle:l,children:d,after:c,...u}=e;const{checkbox:{className:h,style:p},Label:g}=(0,n(9216).R)().extend(...n(8185).A),m=i?n(6539).Z:n(8358).Z,f=(0,n(3163).q)();return o(g,null,!t&&o(n(729).HY,null,o("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:a,disabled:r,className:h,style:p({fontSize:s}),onChange:e=>{const{checked:t}=e.target;null==l||l(t)},"aria-labelledby":f}),o(n(7345).p,(0,n(6270).Z)({"aria-hidden":!0,icon:m},u))),d&&o("span",null,o("span",{id:f,"aria-hidden":!0},d),c&&o("span",{onClick:e=>{e.stopPropagation()}},c)))}},4429:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(748).h;const i=e=>{let{headline:t,borderless:i,children:a,legend:r,...s}=e;const{Group:l,GroupInner:d,GroupDescription:c,screenReaderOnlyClass:u}=(0,n(9216).R)().extend(...n(6556).w),h=r||("string"==typeof t?t:void 0),p=o(d,null,h&&o("legend",{className:u},h),o("span",{"aria-hidden":!!h},t),a&&o(c,null,a));return i?o("div",(0,n(6270).Z)({className:"group"},s),p):o(l,s,p)}},1762:(e,t,n)=>{function o(){return(0,n(9216).R)().extend(...n(8681).y)}n.d(t,{Y:()=>o})},2040:(e,t,n)=>{function o(e){var t;const o=(0,n(7850).S)(),{id:i,items:a,isEssential:r}=e,{previewCheckboxActiveState:s,consent:l,activeAction:d}=o,c=r||"history"===d,u=s||r||!!l[i];return{isDisabled:c,isChecked:u,isPartial:!r&&(null===(t=l[i])||void 0===t?void 0:t.length)&&JSON.stringify(a.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(l[i].sort()||[]),onToggle:(0,n(729).I4)((e=>o.updateGroupChecked(i,e)),[o,i,u])}}n.d(t,{O:()=>o})},9186:(e,t,n)=>{function o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=[];let i=e.parentElement;const a=void 0!==t;let r=0;for(;null!==i;){const s=i.nodeType===Node.ELEMENT_NODE;if(0===r&&1===n&&s&&a){const n=e.closest(t);return n?[n]:[]}if((!a||s&&i.matches(t))&&o.push(i),i=i.parentElement,0!==n&&o.length>=n)break;r++}return o}n.d(t,{w:()=>o})},8681:(e,t,n)=>{n.d(t,{y:()=>l});var o=n(8330),i=n(3189),a=n.n(i);const r=(e,t)=>{let n,i,r;t?r=t({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:o.nw,height:o.nw}):(n=e("width"),i=e("height"));const s=[],l=()=>s.forEach(((e,t,n)=>{e(),n.splice(t,1)})),d=function(e){let t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const d=()=>{e&&(a().clear(t),t=a().measure((()=>{const{width:t,height:o}=e.getBoundingClientRect(),{clientHeight:s,scrollHeight:l,scrollTop:d,offsetHeight:c}=e,u=s<l,h=Math.ceil(d+c+3)>=l;(0!==t||0!==o||e.offsetParent)&&a().mutate((()=>{r?r[1]({width:t,height:o,scrollbar:u,scrolledTop:0===d,scrolledBottom:h}):(e.style.setProperty(n,`${t}px`),e.style.setProperty(i,`${o}px`))}))})))};for(const t of[e,...o]){if(!t)continue;t.addEventListener("animationend",d),t.addEventListener("scroll",d);const e=new ResizeObserver(d);e.observe(t),s.push((()=>{e.disconnect(),t.removeEventListener("animationend",d),t.removeEventListener("scroll",d)}))}return l};return t?[d,r[0],l]:[d,{width:n,height:i},l]},s=(e,t)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${t()}/100))`,l=[Symbol("extendBannerStylesheet"),(e,t)=>{let{computed:n,rule:i,boolIf:a,boolNot:l,boolSwitch:d,jsx:c,variable:u,className:h,vars:p,varName:g,plugin:m}=e,{unsetDialogStyles:f,customize:{activeAction:v,pageRequestUuid4:b},boolLargeOrMobile:y,isMobile:w,layout:{dialogPosition:x,dialogMaxWidth:k,dialogMargin:C,dialogBorderRadius:S,bannerPosition:O,overlay:B,overlayBg:D,overlayBgAlpha:I,overlayBlur:R},design:{boxShadowEnabled:A,boxShadowColor:N,boxShadowOffsetX:P,boxShadowOffsetY:$,boxShadowBlurRadius:L,boxShadowSpreadRadius:E,boxShadowColorAlpha:T,fontSize:W,borderWidth:H,borderColor:z,textAlign:F,fontInheritFamily:G,fontFamily:M,fontWeight:V,fontColor:_},mobile:Y,layout:q,individualLayout:j}=t;const Z={headline:h(),description:h(),firstButton:h()},J=r(g,p),U=r(g,p),Q=r(g,p),X=r(g,p),K=r(g,p),ee=u(v,(0,o.IW)(v,["history"])),te=u(!1,void 0,"individual"),{isDialog:ne,isBanner:oe}=n([w,q.type],(e=>{let[t,n]=e;const o=t?"banner":n;return{type:o,isDialog:"dialog"===o,isBanner:"banner"===o}})),ie=n([x],(e=>{let[t]=e;return[t.startsWith("top")?"flex-start":t.startsWith("bottom")?"flex-end":"center",t.endsWith("Center")?"center":t.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign"),[ae]=c("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:W("l"),background:a(B,s(D,I)),pointerEvents:a(B,"all","none"),backdropFilter:"none",transform:"translateZ(0)"}),[re]=c("dialog",{classNames:["align",f],display:"flex",width:"100%",height:"100%",alignItems:a(ne,ie(0)),justifyContent:a(ne,ie(1))},{tabIndex:0,"aria-labelledby":Z.headline,"aria-describedby":Z.description}),se=a({when:ne,then:{when:[te,l(j.inheritDialogMaxWidth)],then:j.dialogMaxWidth(),or:k()},or:"100%"}),{alignment:le}=Y,de=`${y(H,a)} solid ${z()}`,ce=a(ne,S()),[,ue]=i({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:se,width:se,textAlign:F("val"),fontFamily:a(G,"inherit",M()),fontWeight:V(),color:_("hex"),margin:a({when:[ne,l(x["is-middlecenter"])],then:C(),or:a(ne,"10px")}),borderRadius:ce,boxShadow:a(A,`${P()} ${$()} ${L()} ${E()} rgba(${N("r")} ${N("g")} ${N("b")} / ${T()})`),alignSelf:a({when:w,then:d([[le("is-bottom"),"flex-end"],[le("is-top"),"flex-start"],[le("is-center"),"center"]]),or:{when:oe,then:d([[O("is-top"),"flex-start"],[O("is-bottom"),"flex-end"]])}}),borderTop:a({when:[oe,O("is-bottom")],then:de}),borderBottom:a({when:[oe,O("is-top")],then:de})}),he={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};i({forceSelector:`#${b}, #${b} *`,...he}),m("modifyRule",(e=>{"unset"===e.all&&Object.assign(e,he)}));const pe=`${a(ne,H("l"),"0px")} solid ${z()}`;return{a11yIds:Z,isDialog:ne,isBanner:oe,activeAction:ee,dimsOverlay:J,dimsContent:U,dimsHeader:Q,dimsFooter:X,dimsRightSidebar:K,individualPrivacyOpen:te,Dialog:re,Overlay:ae,inner:ue,footerBorderStyle:{borderBottomLeftRadius:ce,borderBottomRightRadius:ce,borderLeft:pe,borderRight:pe,borderBottom:pe},headerBorderStyle:{borderTopLeftRadius:ce,borderTopRightRadius:ce,borderLeft:pe,borderRight:pe,borderTop:pe}}}]},6556:(e,t,n)=>{n.d(t,{w:()=>o});const o=[Symbol("extendCommonGroupsStylesheet"),(e,t)=>{let{jsx:n,boolIf:o,boolNot:i}=e,{group:a,design:r,decision:s,bodyDesign:l,boolLargeOrMobile:d}=t;const[c]=n("fieldset",{classNames:"dotted-groups",all:"unset",marginTop:"10px",lineBreak:"anywhere",lineHeight:2,pseudos:{">span,>label":{paddingRight:"10px",fontSize:o({when:l.dottedGroupsInheritFontSize(),then:d(r.fontSize,o),or:d(l.dottedGroupsFontSize,o)}),whiteSpace:"nowrap",display:"inline-block"},">span>i":{color:l.dottedGroupsBulletColor()},">span>i::after":{paddingRight:"5px",display:"inline-block",content:"'●'"},">span>span":{verticalAlign:"middle",cursor:o(s.groupsFirstView,"pointer")}}}),[u]=n("div",{classNames:"groups",marginTop:"10px",clear:"both",pseudos:{">div:not(:last-of-type)":{marginBottom:d(a.groupSpacing,o)}}}),[h]=n("div",{classNames:"group",background:o(i(a.groupInheritBg),a.groupBg()),padding:d(a.groupPadding,o),borderRadius:a.groupBorderRadius(),textAlign:"left",borderColor:a.groupBorderColor(),borderStyle:"solid",borderWidth:d(a.groupBorderWidth,o)}),[p]=n("fieldset",{classNames:"group-inner",all:"unset",textAlign:"left",color:a.headlineFontColor(),fontSize:d(a.headlineFontSize,o),fontWeight:a.headlineFontWeight()}),[g]=n("div",{classNames:"group-description",color:a.descriptionFontColor(),fontSize:d(a.descriptionFontSize,o),marginTop:"5px"}),[m]=n("div",{classNames:"cookie",marginTop:"10px",pseudos:{">label:first-of-type":{display:"block",marginBottom:"10px"}}}),[f]=n("div",{classNames:"cookie-prop",borderStyle:"solid",borderColor:a.groupBorderColor(),borderWidth:"0px",borderLeftWidth:d(a.groupBorderWidth,o),paddingLeft:"15px",pseudos:{">span>a":{wordBreak:"break-all"}}});return{DottedGroupList:c,GroupList:u,Group:h,GroupInner:p,GroupDescription:g,Cookie:m,CookieProperty:f}}]},7278:(e,t,n)=>{n.d(t,{IQ:()=>o,n4:()=>i,yt:()=>a});const o="stylesheet-created",i="stylesheet-toggle",a="css-var-update-"},6715:(e,t,n)=>{n.r(t),n.d(t,{WebsiteBanner:()=>Qe});var o=n(729),i=n(7818),a=n(1999),r=n(7332),s=n(7361),l=n(5874),d=n(8243),c=n(4265);const u=async e=>{let{supportsCookiesName:t}=e;return!(0,c.E)(t)&&"essentials"};var h=n(210);const p=async e=>{let{decisionCookieName:t,revisionHash:n}=e;const o=(0,h.h)(t);if(!1===o)return!1;const{revision:i}=o;return n===i&&"consent"};var g=n(6778),m=n(7893),f=n(9476);function v(){const{userAgent:e}=navigator;return!!e&&!/chrome-lighthouse/i.test(e)&&!(0,f.f)()&&(0,m.Z)(e)}function b(){try{const e=window;if((e.doNotTrack||e.navigator.doNotTrack||e.navigator.msDoNotTrack||"msTrackingProtectionEnabled"in e.external)&&("1"==e.doNotTrack||"yes"==e.navigator.doNotTrack||"1"==e.navigator.doNotTrack||"1"==e.navigator.msDoNotTrack||e.external.msTrackingProtectionEnabled()))return!0}catch(e){}return!1}const y=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return async t=>{let{decisionCookieName:n,groups:o}=t;const i=o.find((e=>{let{isEssential:t}=e;return t}));if(!1!==(0,h.h)(n)||!e)return!1;for(const e of o)if(e!==i)for(const{legalBasis:t}of e.items)if("legitimate-interest"===t)return!1;return!!b()&&"dnt"}};function w(e,t){return new Promise(((n,o)=>{e.then(n,o);const i=new Error("Timed out");setTimeout(o,t,i)}))}const x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return async o=>{let{decisionCookieName:i,revisionHash:a}=o;if(v()||!n)return!1;const r=(0,h.h)(i);if(r){const{revision:e}=r;if(a===e)return"consent"}try{const{predecision:n}=await w(e(),t);return n}catch(e){return!1}}};var k=n(3684),C=n(2022);const S={path:"/consent/dynamic-predecision",method:C.O.POST,obfuscatePath:"keep-last-part"};function O(e){(0,o.d4)((()=>{if((0,i.u)().customizeIdsBanner)return;const{restNamespace:t,restRoot:o,restQuery:c,restNonce:m,restPathObfuscateOffset:f,others:{isPreventPreDecision:b,hasDynamicPreDecisions:w,frontend:{isRespectDoNotTrack:C,isAcceptAllForBots:O}}}=(0,a.m)(),{onSave:B,suspense:D}=e;var I,R,A;!async function(e,t){let o=!0;const i=e instanceof s.G?e.getOptions():e,{gateways:a,args:r,onIsDoNotTrack:c,onShowCookieBanner:u}=t;for(const e of a){const t=await e(i,...r);if(!1!==t){o=!1;const e=e=>Promise.all([n.e(812),n.e(845),n.e(376)]).then(n.bind(n,4769)).then((t=>{let{apply:n}=t;return n({type:e,...i})}));"all"===t?e("all"):"essentials"===t?e("essentials"):"dnt"===t?c((()=>e("essentials"))):"consent"===t&&e("consent");break}}o&&(u(),document.dispatchEvent(new CustomEvent("RCB/Banner/Show/Interactive")),await(0,d.C)(),document.dispatchEvent(new CustomEvent(l.I,{detail:{}})))}((0,r.b)(),{gateways:[async()=>(await D.tcf,!1),u,p,(A=["login-action-"],"force-cookie-banner",async()=>{const{className:e}=document.body;return!(e&&e.indexOf("force-cookie-banner")>-1)&&A.filter((t=>e.indexOf(t)>-1)).length>0&&"consent"}),(R=!!O&&"all",async e=>{let{decisionCookieName:t}=e;return await(0,g.H)(),!(!1!==(0,h.h)(t)||!R)&&!!v()&&R}),y(C),x((()=>{const{clientWidth:e,clientHeight:n}=document.documentElement;return(0,k.D)({location:S,options:{restNamespace:t,restRoot:o,restQuery:c,restNonce:m,restPathObfuscateOffset:f},sendRestNonce:!1,request:{viewPortWidth:e,viewPortHeight:n},params:{_wp_http_referer:window.location.href}})}),1e4,w),(I=b,async()=>!!I&&(v()?"all":"consent"))],args:[e],onIsDoNotTrack:()=>{B(!0,"none")},onShowCookieBanner:()=>{const{tcf:t}=e;e.set({consent:(0,r.b)().getDefaultDecision(),visible:!0})}})}),[])}var B=n(6509),D=n(1762),I=n(7850),R=n(2230);function A(){const{individualPrivacyOpen:e,onSave:t,updateGroupChecked:n,updateCookieChecked:i,groups:a,activeAction:r,onClose:s,set:l}=(0,I.S)(),d=e?"ind_all":"main_all",c=e?"ind_essential":"main_essential",u=e?"ind_close_icon":"main_close_icon",h=e?"ind_custom":"main_custom",p={buttonClickedAll:d,buttonClickedEssentials:c,buttonClickedCloseIcon:u,buttonClickedCustom:h,acceptAll:(0,o.I4)((async()=>{await(0,g.H)(),l((e=>{let{updateGroupChecked:t}=e;a.forEach((e=>t(e.id,!0)))})),await(0,g.H)(),t(!1,d)}),[d]),acceptEssentials:(0,o.I4)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.forEach((e=>{let{isEssential:t,id:o,items:a}=e;if(t)n(o,!0);else for(const{legalBasis:e,id:t}of a)i(o,t,"legitimate-interest"===e)})),t(!1,!0===e?u:c)}),[c]),acceptIndividual:(0,o.I4)((()=>t(!1,h)),[h]),openIndividualPrivacy:(0,o.I4)((()=>l({individualPrivacyOpen:!0})),[l])};return{...p,closeIcon:(0,o.I4)((()=>{r?s():p.acceptEssentials(!0)}),[r,s,p.acceptEssentials])}}var N=n(4133),P=n(748).h;const $=()=>{const{headerDesign:{fontColor:e,fontSize:t},texts:{acceptEssentials:n},activeAction:i,pageRequestUuid4:a,i18n:{close:r,closeWithoutSaving:s},buttonClicked:l=""}=(0,I.S)(),{buttonClickedCloseIcon:d,closeIcon:c}=A(),u=(0,o.Ye)((()=>window.innerWidth),[]);return P(N.T,{width:t,color:e,tooltipText:i?"change"===i?s:r:n,tooltipAlways:u<R.y8,framed:l===d,renderInContainer:document.getElementById(a).querySelector("dialog"),onClick:c})};var L=n(8330);const E=[Symbol("extendBannerContentStylesheet"),(e,t)=>{let{boolIf:n,boolSwitch:o,boolOr:i,computed:a,boolNot:r,jsx:s,variable:l}=e,{dimsOverlay:d,dimsHeader:c,dimsFooter:u,dimsRightSidebar:h,boolLargeOrMobile:p,isMobile:g,isBanner:m,design:f,bodyDesign:v,headerDesign:b,layout:y,decision:w,mobile:x,texts:k,activeAction:C,footerDesign:S,individualLayout:O,individualPrivacyOpen:B,footerBorderStyle:D,headerBorderStyle:I}=t;const R=a([b.logo,b.logoRetina,b.logoFitDim,b.logoRetinaFitDim,b.logoMaxHeight],(e=>{let[t,n,o,i,a]=e;const r=n&&(null==t||!t.endsWith(".svg"))&&window.devicePixelRatio>1?i:o;return(null==r?void 0:r[0])>0?{width:(0,L.nw)(r[0]),height:(0,L.nw)(r[1])}:{width:"auto",height:(0,L.nw)(a)}})),A=n({when:m,then:{when:[B,r(O.inheritBannerMaxWidth)],then:O.bannerMaxWidth(),or:y.bannerMaxWidth()}}),N=p(b.borderWidth,n),[P]=s("div",{classNames:"header-container",position:"sticky",zIndex:9,top:0,background:n(b.inheritBg,f.bg(),b.bg()),padding:p(b.padding,n),paddingBottom:`calc(${N} + ${p(b.padding,n,2)})`,...I,pseudos:{":has(>div:empty)":{display:"none"},":has(>div:empty)+div":I,":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",bottom:"0px",background:b.borderColor(),height:N},">div":{transition:"width 500ms, max-width 500ms",maxWidth:A,margin:"auto",display:"flex",alignItems:"center",position:"relative",textAlign:n(b.inheritTextAlign,f.textAlign("val"),b.textAlign("val")),justifyContent:n(b.inheritTextAlign,o([[f.textAlign("is-center"),"center"],[f.textAlign("is-right"),"flex-end"]]),o([[b.textAlign("is-center"),"center"],[b.textAlign("is-right"),"flex-end"]])),flexDirection:n({when:[b.logo("is-filled"),k.headline("is-filled")],then:o([[b.logoPosition("is-left"),"row"],[b.logoPosition("is-right"),"row-reverse"]],"column")})},">div>img":{margin:p(b.logoMargin,n),width:R.width(),height:R.height()}}}),$=o([[[C("is-filled"),w.showCloseIcon()],"51px"]],"0px"),E=d[1].height(),T=l(`calc(${E} - ${n(m,"0px","20px")} - ${$})`),W=l(`calc(100px + ${h[1].height()} + ${c[1].height()} + ${u[1].height()})`),[H]=s("div",{classNames:"content",position:"relative",overflow:"auto",maxHeight:n({when:g,then:{when:B,then:`calc(${E} - ${$})`,or:`calc(min(${E}, ${x.maxHeight()}) - ${$})`},or:{when:i([B,r(y.maxHeightEnabled)]),then:T(),or:`min(max(${y.maxHeight()}, ${W()}), ${T()})`}}),..."Win32"===navigator.platform?{overflow:CSS.supports("overflow","overlay")?"overlay":"scroll",scrollbarWidth:"thin",scrollbarColor:`${v.teachingsFontColor()} transparent`,pseudos:{"::-webkit-scrollbar":{width:"11px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:v.teachingsFontColor(),borderRadius:y.dialogBorderRadius(),border:`3px solid ${f.bg()}`}}}:{}}),z=p(S.borderWidth,n),[F]=s("div",{classNames:"footer-container",fontWeight:S.fontWeight(),color:S.fontColor(),position:"sticky",bottom:"0px",zIndex:1,padding:p(S.padding,n),paddingTop:`calc(${z} + ${p(S.padding,n,0)})`,background:n(S.inheritBg,f.bg(),S.bg()),fontSize:p(S.fontSize,n),textAlign:n(S.inheritTextAlign,f.textAlign("val"),S.textAlign()),...D,pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",top:"0px",background:S.borderColor(),height:z},">div":{transition:"width 500ms, max-width 500ms",maxWidth:A,margin:"auto",lineHeight:"1.8"},":has(>div:empty)":{display:"none"}}});return{HeaderContainer:P,Content:H,FooterContainer:F}}];var T=n(2488),W=n(748).h;const H=(0,o.Gp)(((e,t)=>{let{className:n}=e;const o=(0,D.Y)(),{a11yIds:i,HeaderContainer:a,hasCloseIcon:r,HeaderTitle:s}=o.extend(...E).extend(...T.W),{headerDesign:{logo:l,logoRetina:d,logoAlt:c},decision:{showCloseIcon:u},texts:{headline:h},activeAction:p,individualPrivacyOpen:g,individualTexts:m,i18n:{headerTitlePrivacyPolicyHistory:f}}=(0,I.S)(),v=d&&(null==l||!l.endsWith(".svg"))&&window.devicePixelRatio>1?d:l,b=!!u||!!p,y=g?"history"===p?f:m.headline:h;return W(a,{ref:t,className:n},W("div",null,!!v&&W("img",{"aria-hidden":!0,alt:c||"",src:v}),!!y&&W(s,{id:i.headline,className:b?r:void 0},y),b&&W($,null)))}));var z=n(6270),F=n(4285),G=n(7845),M=n(4429),V=n(6556),_=(n(9840),n(2040)),Y=n(748).h;const q=e=>{let{group:t}=e;const{name:n}=t,i=(0,I.S)(),{decision:{groupsFirstView:a},design:{fontSize:r}}=i;return(0,_.O)(t),Y(o.HY,null,Y("span",null,Y("i",null),Y("span",null,n)))};var j=n(748).h;const Z=()=>{const{texts:{headline:e}}=(0,I.S)(),{DottedGroupList:t,screenReaderOnlyClass:n}=(0,D.Y)().extend(...V.w),{groups:o,decision:{showGroups:i}}=(0,I.S)();return i?j(t,null,j("legend",{className:n},e),o.filter((e=>{let{items:t}=e;return!!t.length})).map((e=>j(q,{key:e.id,group:e})))):null};var J=n(2255),U=n(5660),Q=n(748).h;const X=()=>{const e=(0,I.S)(),{isConsentRecord:t,activeAction:n,bodyDesign:{acceptEssentialsUseAcceptAll:i,acceptAllOneRowLayout:a},decision:{showGroups:r,groupsFirstView:s,saveButton:l,acceptAll:d,acceptEssentials:c,buttonOrder:u},texts:{acceptAll:h,acceptEssentials:p,acceptIndividual:g},saveButton:{type:m,useAcceptAll:f},individualTexts:{save:v},individualPrivacyOpen:b,didGroupFirstChange:y,productionNotice:w,buttonClicked:x="",designVersion:k=J.R,fetchLazyLoadedDataForSecondView:C}=e,{a11yIds:{firstButton:S}}=(0,D.Y)(),O=i&&d===c,B=f&&d===m,{all:R,essential:N,individual:P,save:$}=(0,o.Ye)((()=>{const e=u.split(","),t=e.reduce(((t,n)=>(t[n]=e.indexOf(n),t)),{}),n=e.reduce(((t,n)=>(t[e.indexOf(n)]=n,t)),{});return a&&(t[n[0]]=1,t[n[1]]=0),t}),[u,a]),{buttonClickedAll:L,buttonClickedEssentials:E,buttonClickedCustom:T,acceptAll:W,acceptEssentials:H,acceptIndividual:z,openIndividualPrivacy:F}=A(),G="change"===n&&!t,M=!b&&!1,V="change"!==n,_=b||!1,Y=!b,q=(0,o.sO)();return Q(o.HY,null,M?Q(U.z,{onClick:z,busyOnClick:G,order:R,type:"acceptAll",framed:x===T,id:S},v):Q(U.z,{onClick:W,busyOnClick:G,order:R,type:"acceptAll",framed:x===L,id:S},h),(V||k>2)&&Q(U.z,{onClick:H,busyOnClick:G,order:N,type:O?"acceptAll":"acceptEssentials",framed:x===E},p),_&&Q(U.z,{onClick:z,busyOnClick:G,order:$,type:B?"acceptAll":"save",framed:x===T},v),Y&&Q(U.z,{onClick:F,onMouseEnter:()=>{C&&(q.current=setTimeout(C,500))},onMouseLeave:()=>clearTimeout(q.current),busyOnClick:G,order:P,type:"acceptIndividual",framed:x.startsWith("ind_")},g),w)},K=[Symbol("extendBannerBodyStylesheet"),(e,t)=>{let{boolIf:n,boolNot:o,boolOr:i,jsx:a}=e,{scaleVertical:r,dimsContent:s,dimsHeader:[,l],dimsFooter:[,d],activeAction:c,boolLargeOrMobile:u,bodyDesign:h,isBanner:p,isDialog:g,isMobile:m,isMobileWidth:f,layout:v,individualLayout:b,individualPrivacyOpen:y,design:w,footerBorderStyle:x}=t;const{fontColor:k}=w,{padding:C}=h,[,{scrollbar:S,scrolledBottom:O}]=s,B=i([p,y]),D=n(p,"300px",`calc(${v.dialogMaxWidth()} - ${u(C,n,1)} - ${u(C,n,3)} - (${u(w.borderWidth,n)} * 2))`),I=o(f),R=n(g,`${u(w.borderWidth,n)} solid ${w.borderColor()}`),[A]=a("div",{classNames:"body-container",background:w.bg(),lineHeight:1.4,paddingRight:u(h.padding,n,1),paddingLeft:u(h.padding,n,3),borderLeft:R,borderRight:R,pseudos:{":has(+div>div:empty)":x,">div":{transition:"width 500ms, max-width 500ms",margin:"auto",maxWidth:n({when:p,then:{when:[y,o(b.inheritBannerMaxWidth)],then:b.bannerMaxWidth(),or:v.bannerMaxWidth()}})},">div:after":{content:"''",display:"block",clear:"both"}}}),N=n(h.acceptAllOneRowLayout,"0 0 calc(50% - 5px)","1 1 100%"),P=n(h.acceptAllOneRowLayout,"5px"),[$]=a("div",{classNames:"tb-right",position:n(i([o(y),f]),"sticky"),margin:n({when:[I,g,y,o(b.inheritDialogMaxWidth)],then:"0 0 10px 10px"}),background:w.bg(),maxWidth:"100%",width:n(I,D,"auto"),float:n(I,n({when:B,then:"right"})),paddingTop:n(f,"10px",n({when:B,then:u(C,n,0),or:"10px"})),paddingBottom:n(y,n(f,"5px","10px"),u(C,n,2)),zIndex:1,display:"flex",flexWrap:"wrap",transition:"box-shadow ease-in-out .1s",boxShadow:n({when:[S(),o(O)],then:`0 -15px 15px -15px rgba(${k("r")} ${k("g")} ${k("b")} / 30%)`}),bottom:n(o(y),d.height()),top:n(y,l.height()),pseudos:{">a":{marginBottom:n(m,`calc(10px * ${r()})`,"10px")},">a[data-order='0']":{flex:N,marginRight:P},">a[data-order='1']":{flex:N,marginLeft:P}}}),L=[I,p,o(c["is-history"])],[E]=a("div",{classNames:"tb-left",float:n({when:L,then:"left"}),width:n({when:L,then:"calc(100% - 300px)"}),paddingRight:n({when:[p,I],then:"20px"}),paddingTop:n(y,"10px",u(h.padding,n,0)),paddingBottom:n({when:[I,o(y)],then:{when:i([p,y]),then:u(h.padding,n,2),or:"0px"},or:"10px"}),pseudos:{" img":{maxWidth:"100%",height:"auto"}}}),[T]=a("div",{position:"sticky",bottom:`calc(${d.height(!0,"0px")} - 1px)`,height:"0px",margin:"auto",transition:"box-shadow ease-in-out .1s",boxShadow:n({when:[S(),o(O)],then:`0 15px 15px 15px rgba(${w.fontColor("r")} ${w.fontColor("g")} ${w.fontColor("b")} / 20%)`}),display:n(i([p,y]),"block","none")});return{Container:A,RightSide:$,LeftSide:E,BeforeFooter:T}}];var ee=n(4667),te=n(8392),ne=n(3318),oe=n(748).h;const ie=(0,ne.R)(Promise.resolve(F.I),"BodyDescription"),ae=(0,ne.R)(Promise.all([n.e(812),n.e(845),n.e(376)]).then(n.bind(n,4651)).then((e=>{let{BannerGroupList:t}=e;return t}))),re=(0,ne.R)(Promise.all([n.e(812),n.e(845),n.e(376)]).then(n.bind(n,2845)).then((e=>{let{BannerHistorySelect:t}=e;return t}))),se={margin:"20px 0 10px 0"};var le=n(498),de=n(9216),ce=n(748).h;const ue=()=>{const{FooterLanguageSwitcherSelect:e}=(0,de.R)().extend(...T.W),{footerDesign:{languageSwitcher:t},languageSwitcher:n,onLanguageSwitch:i}=(0,I.S)(),a=(0,o.Ye)((()=>n.find((e=>{let{current:t}=e;return t}))),[n]),r="flags"===t&&!(null==a||!a.flag);return ce(e,{"data-flag":r},r&&ce("span",{style:{backgroundImage:`url(${a.flag})`}}),ce("select",{value:null==a?void 0:a.locale,"aria-label":null==a?void 0:a.name,onChange:e=>{null==i||i(n.find((t=>{let{locale:n}=t;return n===e.target.value})))}},n.map((e=>{let{locale:t,name:n}=e;return ce("option",{value:t,key:t},n)}))))};var he=n(748).h;const pe=(0,o.Gp)(((e,t)=>{const{FooterContainer:n}=(0,D.Y)().extend(...E),i=(0,I.S)(),{isTcf:a,layout:{type:r},footerDesign:{languageSwitcher:s},individualPrivacyOpen:l,onClose:d,i18n:{tcf:c},isConsentRecord:u,languageSwitcher:h,set:p}=i,g=(0,o.I4)((e=>{d(),e.preventDefault()}),[d]),{rows:m,render:f}=(0,le.g)({onClose:u?g:void 0,putPoweredByLinkInRow:"banner"===r?0:1,row1:[!1],row1End:[(null==h?void 0:h.length)>0&&s&&"disabled"!==s&&he(ue,{key:"languageSwitcher"})]});return he(n,{ref:t},he("div",null,f(m)))}));var ge=n(4017),me=n(3189),fe=n.n(me),ve=n(748).h;const be=(0,ne.R)(Promise.resolve(H),"BannerHeader"),ye=(0,ne.R)(Promise.resolve((e=>{let{leftSideContainerRef:t,rightSideContainerRef:n}=e;const{a11yIds:i,Container:a,RightSide:r,LeftSide:s,BeforeFooter:l}=(0,D.Y)().extend(...K),d=(0,I.S)(),{tcf:c,isGcm:u,individualPrivacyOpen:h,activeAction:p,individualTexts:{postamble:g},i18n:{nonStandard:m,nonStandardDesc:f}}=d,v=function(e){const{groups:t}=(0,ee.w)();let n=t.map((e=>{let{items:t}=e;return[...t]})).flat();return n}(),b=(0,G.k)({services:v}),y=u&&(0,te.u)(v).length>0,w=(0,o.Ye)((()=>!1),[c,y]),x=oe(s,{key:"leftSide",ref:t},oe(ie,(0,z.Z)({id:i.description},b),"history"===p&&oe(re,null)),h?oe(o.HY,null,w&&oe(M.Z,{headline:m,style:se,borderless:!0},f),oe(ae,null),!1,!1):oe(Z,null),!!g&&h&&oe(ie,{teachings:[g],isPostamble:!0})),k="history"===p?oe("div",{ref:n}):oe(r,{key:"rightSide",ref:n},oe(X,null));return oe(a,null,oe("div",null,h?[k,x]:[x,k]),oe(l,null))})),"BannerBody"),we=(0,ne.R)(Promise.resolve(pe),"BannerFooter");var xe=n(9186),ke=n(8166);const Ce='[href^="#consent-"]';function Se(){window.location.hash.startsWith("#consent-")&&(window.location.hash="")}var Oe=n(748).h;function Be(e){let{isVisible:t,animationIn:n,animationOut:o,animationInDuration:i,animationOutDuration:a,animationInDelay:r,animationOutDelay:s}=e;return t?{animation:n,duration:i,delay:r}:{animation:o,duration:a,delay:s}}const De=e=>{let{animateOnMount:t=!0,isVisible:n=!0,animationIn:i="fadeIn",animationOut:a="fadeOut",animationInDelay:r=0,animationOutDelay:s=0,animationInDuration:l=1e3,animationOutDuration:d=1e3,className:c="",style:u={},children:h}=e;const[{animation:p,duration:g,delay:m},f]=(0,o.eJ)(t?Be({isVisible:n,animationIn:i,animationOut:a,animationInDelay:r,animationOutDelay:s,animationInDuration:l,animationOutDuration:d}):{animation:"",delay:void 0,duration:0});return(0,o.d4)((()=>{f(Be({isVisible:n,animationIn:i,animationOut:a,animationInDelay:r,animationOutDelay:s,animationInDuration:l,animationOutDuration:d}))}),[n,i,a,r,s,l,d]),Oe("div",{className:`animate__animated animate__${p} ${c}`,style:{animationDelay:`${m}ms`,animationDuration:`${g}ms`,pointerEvents:n?"all":"none",...u,...p?{}:{opacity:n?1:0,transition:`opacity ${m}ms`}}},h)};function Ie(e,t){const n=(0,o.sO)(0),i=(0,o.sO)(0),[a,r]=(0,o.eJ)(e),[s,l]=(0,o.eJ)(void 0),[d,c]=(0,o.eJ)(t),[u,h]=(0,o.eJ)(void 0);return(0,o.d4)((()=>{n.current>0&&("none"===e?r(e):(r("none"),l(e))),n.current++}),[e]),(0,o.d4)((()=>{i.current>0&&(0===t?c(t):(c(0),h(t),r("none"),l(e))),i.current++}),[t]),(0,o.d4)((()=>{void 0!==s&&(r(s),l(void 0))}),[s]),(0,o.d4)((()=>{void 0!==u&&(c(u),h(void 0))}),[u]),[a,d]}var Re=n(8735),Ae=n(8681),Ne=n(6518),Pe=n(748).h;const $e=(0,ne.R)(Promise.resolve((()=>{const{Content:e,hideOnMobileClass:t,dimsContent:n,dimsOverlay:i,dimsHeader:a,dimsFooter:r,dimsRightSidebar:s,A11ySkipToLink:l,a11yIds:{firstButton:d}}=(0,D.Y)().extend(...ge.V).extend(...E),{decision:{acceptAll:c,acceptEssentials:u,showCloseIcon:h},mobile:p,individualPrivacyOpen:m,bodyDesign:{acceptEssentialsUseAcceptAll:f},activeAction:v,pageRequestUuid4:b,i18n:{skipToConsentChoices:y}}=(0,I.S)(),w=(0,o.sO)(),x=f&&c===u?c:u,k=!p.hideHeader||v||m||"hide"===x&&h?"":t,C=(0,o.sO)();C.current=C.current||{};const S=(0,o.I4)((()=>[document.querySelector(`#${b} div[class*="animate__"]`)]),[b]),O=(0,o.I4)(((e,t)=>{let[n,,o]=e;t?n(t,S()):o()}),[S]),B=(0,o.I4)((e=>O(a,e)),[O]),R=(0,o.I4)((e=>O(r,e)),[O]),A=(0,o.I4)((e=>O(s,e)),[O]);return(0,o.d4)((()=>{const e=S(),t=[n[0](w.current),i[0](document.querySelector(`#${b}`),e)];return()=>t.forEach((e=>e()))}),[]),(0,o.d4)((()=>{fe().mutate((()=>(0,g.H)().then((()=>w.current.scrollTop=0))))}),[m]),ve(e,{ref:w},ve(l,{href:`#${d}`},y),ve(be,{ref:B,className:k}),ve(ye,{rightSideContainerRef:A}),ve(we,{ref:R}))})),"BannerContent"),Le=(e,t)=>{const{dataset:n,style:o}=document.body;void 0===n.rcbPreviousOverflow&&(n.rcbPreviousOverflow=o.overflow),o.overflow=e&&t?"hidden":n.rcbPreviousOverflow,document.body.parentElement.style.overflow=o.overflow},Ee=(0,ne.R)(Promise.resolve((()=>{const e=(0,I.S)(),{recorder:t,visible:n,skipOverlay:i,pageRequestUuid4:a,individualPrivacyOpen:r,fetchLazyLoadedDataForSecondView:s,layout:{overlay:l,animationInDuration:d,animationOutDuration:c}}=e,u=(0,o.sO)(),h=(0,o.sO)(),p=(0,o.sO)(!1),[g,m]=function(e){let{animationIn:t,animationInOnlyMobile:n,animationOut:i,animationOutOnlyMobile:a}=e;const r=(0,o.Ye)((()=>window.innerWidth),[])<R.y8;let s=n?r?t:"none":t,l=a?r?i:"none":i;return(0,o.Ye)((()=>{const e=window.navigator.userAgent.toLowerCase();return 4===["firefox","gecko","mobile","android"].map((t=>e.indexOf(t)>-1)).filter(Boolean).length}),[])&&(s="none",l="none"),[s,l]}(e.layout),[f,v]=Ie(g,d),[b,y]=Ie("none"===m?"fadeOut":m,"none"===m?0:c),[w,x]=(0,Ne.s)(["BannerContent","BannerHeader","BannerBody","BannerFooter","BodyDescription"],fe().mutate.bind(fe()),(()=>u.current.style.removeProperty("display"))),k=(0,de.R)(),{a11yIds:{firstButton:C},inner:S,Dialog:O,Overlay:B,individualPrivacyOpen:D,registerWindowResize:A}=k.extend(...Ae.y);if((0,o.Ye)((()=>{D.update(r),r&&(null==s||s())}),[r]),(0,o.d4)(A,[]),(0,o.d4)((()=>()=>{Le(!1,l)}),[l]),function(){const{openBanner:e,openHistory:t,revokeConsent:n}=(0,I.S)();(0,o.d4)((()=>{const o=(o,i,a)=>{if(e)switch(o){case"change":e(a);break;case"history":t(a);break;case"revoke":n(i,a)}},i=t=>{if(!e)return;const n=t.target;(0,xe.w)(n,Ce).concat((0,ke.D)(n,Ce)?[n]:[]).forEach((e=>{o(e.getAttribute("href").slice(9),e.getAttribute("data-success-message"),t)})),(0,ke.D)(n,".rcb-sc-link")&&o(n.getAttribute("href").slice(1),n.getAttribute("data-success-message"),t)},a=()=>{const{hash:e}=window.location;e.startsWith("#consent-")&&o(e.substring(9),void 0,void 0)};return a(),window.addEventListener("hashchange",a),document.addEventListener("click",i,!0),()=>{window.removeEventListener("hashchange",a),document.removeEventListener("click",i,!0)}}),[e,t,n])}(),(0,o.d4)((()=>{n&&t&&fe().mutate((()=>{t.restart()}))}),[n,t]),(0,o.d4)((()=>{const e=u.current,t=h.current||document.getElementById(a),o=function(e){this.querySelector(`a[href="#${C}"]`).focus(),e.preventDefault()};if(n?(p.current=!0,null!=e&&e.isConnected&&(e.open&&e.close(),fe().mutate((()=>{var t;null===(t=e[l?"showModal":"show"])||void 0===t||t.call(e)})),e.addEventListener("cancel",o))):null==e||e.close(),t){const e=0,o=n?"none"===g?e:d:"none"===m?e:c,i=o>0,a=e=>{i&&(t.style.transition=`background ${o}ms`),t.style.display=e?"block":"none",Le(e,l)};n?fe().mutate((()=>{a(!0)})):p.current&&(setTimeout((()=>fe().mutate((()=>a(!1)))),o),Se())}return()=>{null==e||e.removeEventListener("keyup",o)}}),[n,l]),(0,o.d4)((()=>{n&&fe().mutate((()=>u.current.focus({preventScroll:!0})))}),[n,r]),!n&&!p.current)return null;const N=Pe(O,{className:"wp-exclude-emoji "+(r?"second-layer":""),ref:u,style:{display:"none"},"data-nosnippet":!0},Pe(w,{value:x},Pe(De,{animationIn:f,animationInDuration:v,animationOut:b,animationOutDuration:y,isVisible:n,className:S},Pe($e,null))));return i?N:Pe(B,{id:a,className:k.className,ref:h},N)})));var Te=n(4312),We=n(7762),He=n(3013);const ze=e=>{e&&(e.preventDefault(),e.stopPropagation())},Fe=(e,t)=>Object.assign(e,{activeAction:t,individualPrivacyOpen:!0,refreshSiteAfterSave:"change"===t&&2e3,visible:!0}),Ge={path:"/revision/second-view",method:C.O.GET,obfuscatePath:"keep-last-part"},Me={path:"/consent",method:C.O.GET,obfuscatePath:"keep-last-part"};var Ve=n(8864),_e=n(2011),Ye=n(4670),qe=n(748).h;const je=e=>{let{children:t}=e;return qe(o.HY,null,t)},Ze=e=>{let{promise:t,children:n,suspenseProbs:i}=e;const a=(0,o.Ye)((()=>(0,ne.R)((t||Promise.resolve()).then((()=>je)),void 0,i)),[t]);return qe(a,null,n)};var Je=n(748).h;const Ue=(0,ne.R)(Promise.resolve((()=>{const{pageRequestUuid4:e}=(0,I.S)(),t=(0,Re.L)();t.specify(e);const[n,o]=(0,de.g)(t);return Pe(n,{value:o},Pe(Ee,null))}))),Qe=e=>{let{poweredLink:t}=e;const{frontend:n,customizeValuesBanner:s,pageRequestUuid4:l,iso3166OneAlpha2:d,bannerDesignVersion:c,bannerI18n:u,isPro:p,isLicensed:m,isDevLicense:f,affiliate:v,isCurrentlyInTranslationEditorPreview:b}=(0,i.u)(),{restNamespace:y,restRoot:w,restQuery:x,restNonce:C,restPathObfuscateOffset:S}=(0,a.m)(),{decisionCookieName:D}=n,R=(0,r.b)(),A=R.getUserDecision(),N=function(e){const t=Ye.Z.get(e);return JSON.parse(t||"[]")}(R.getOption("gcmCookieName")),P=(G=n.isTcf,M=n.tcf,V=n.tcfMetadata,R.getOptions(),_=async()=>{},Y=[G,M,V],(0,o.Ye)((()=>(0,g.H)().then(_)),Y)),[$,L]=function(e,t){const o=window.rcbLazyPromise;let i,a;if(o)[a,i]=o;else{let e=!1;a=!1===t?Promise.resolve({}):new Promise((t=>{i=async()=>{e||(e=!0,t(await(0,k.D)({location:Ge,options:{restNamespace:y,restRoot:w,restQuery:x,restNonce:C,restPathObfuscateOffset:S},params:{revisionHash:n.revisionHash},sendRestNonce:!1})))}}))}return[a,i]}(0,n.hasLazyData),E=document.getElementById(l),T=(0,o.Ye)((()=>new _e.K(E)),[]),W=(0,Te.H)(),H={onClose:e=>{Object.assign(e,{visible:!1,refreshSiteAfterSave:!1})},openHistory:(e,t)=>{Fe(e,"history"),ze(t)},openBanner:(e,t)=>{Fe(e,"change"),ze(t)},revokeConsent:(e,t,n)=>{let{onApplyConsent:o,isTcf:i,tcf:a,isGcm:r,groups:s}=e;o({consent:(0,He.R)(s,!0),gcmConsent:r?[]:void 0,buttonClicked:"shortcode_revoke",tcfString:void 0}).then((()=>{t&&alert(t),Se(),setTimeout((()=>window.location.reload()),2e3)})),ze(n)},onSave:(e,t,n)=>{const{refreshSiteAfterSave:o}=e,i=(0,g.H)().then((async()=>{const{onApplyConsent:o,activeAction:i,consent:a,tcf:r,isTcf:s,isGcm:l,gcmConsent:d,recorder:c}=e;return o({consent:a,gcmConsent:void 0,markAsDoNotTrack:t,buttonClicked:n,tcfString:void 0,recorderJsonString:c?JSON.stringify(c.createReplay()):void 0,uiView:"change"===i?"change":"revoke"!==i?"initial":void 0})}));o?i.then((()=>{Se(),setTimeout((()=>window.location.reload()),o||2e3)})):Object.assign(e,{visible:!1})},updateCookieChecked:(e,t,n,o)=>{const{consent:i,isGcm:a,groups:r,updateGcmConsentTypeChecked:s}=e;i[t]||(i[t]=[]);const l=i[t],d=l.indexOf(n);o&&-1===d?l.push(n):!o&&d>-1&&l.splice(d,1),l.length||delete i[t]},updateGroupChecked:(e,t,n)=>{const{groups:o,updateCookieChecked:i}=e;for(const e of o.find((e=>{let{id:n}=e;return n===t})).items)i(t,e.id,n)}},[z,F]=(0,I.g)({...s,...n,recorder:T,productionNotice:Je(Ve.Z,{isPro:p,isLicensed:m,isDevLicense:f,i18n:u}),pageRequestUuid4:l,iso3166OneAlpha2:d,gcmConsent:N,tcf:void 0,tcfFilterBy:"legInt",poweredLink:t,visible:!1,skipOverlay:!0,previewCheckboxActiveState:!1,individualPrivacyOpen:!1,designVersion:c,i18n:u,keepVariablesInTexts:b,affiliate:v,consent:{...!1===A?{}:A.consent,...(0,r.b)().getDefaultDecision(!1===A)},onApplyConsent:B.$,didGroupFirstChange:!1,fetchLazyLoadedDataForSecondView:L,suspense:{tcf:P,lazyLoadedDataForSecondView:$}},{...W,...H,fetchHistory:()=>(0,k.D)({location:Me,options:{restNamespace:y,restRoot:w,restQuery:x,restNonce:C,restPathObfuscateOffset:S},cookieValueAsParam:[D],sendRestNonce:!1}),onLanguageSwitch:(e,t)=>{let{url:n}=t;window.location.href=n}});var G,M,V,_,Y;return O(F),function(e,t){(0,o.d4)((()=>{const n=()=>{const n=(0,h.h)(t);n&&e.set({consent:n.consent})};return document.addEventListener(We.V,n),()=>{document.removeEventListener(We.V,n)}}),[])}(F,D),Je(z,{value:F},Je(Ze,{promise:P},Je(Ue,null)))}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.6.0/767becda1c290ef4a800907bf09a0724/banner-lite-banner-ui.lite.js.map
