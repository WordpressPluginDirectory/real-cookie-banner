"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[671],{72:(e,o,t)=>{t.d(o,{r:()=>i});const i="RCB/Apply/Interactive"},4959:(e,o,t)=>{t.d(o,{S:()=>i});const i=e=>{let{hideCheckbox:o,isPartial:i,isChecked:r,isDisabled:n,fontSize:a,onToggle:l,children:s,after:d,...c}=e;const{checkbox:{className:h,style:p},Label:g}=(0,t(8700).o)().extend(...t(5746).I),b=i?t(8489).A:t(3769).A,u=(0,t(7140).p)();return(0,t(6425).FD)(g,{children:[!o&&(0,t(6425).FD)(t(7936).FK,{children:[(0,t(6425).Y)("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:r,disabled:n,className:h,style:p({fontSize:a}),onChange:e=>{const{checked:o}=e.target;null==l||l(o)},"aria-labelledby":u}),(0,t(6425).Y)(t(3016).r,{"aria-hidden":!0,icon:b,...c})]}),s&&(0,t(6425).FD)("span",{children:[(0,t(6425).Y)("span",{id:u,"aria-hidden":!0,children:s}),d&&(0,t(6425).Y)("span",{onClick:e=>{e.stopPropagation()},children:d})]})]})}},5548:(e,o,t)=>{t.d(o,{Y:()=>i});const i=e=>{let{headline:o,borderless:i,children:r,legend:n,...a}=e;const{Group:l,GroupInner:s,GroupDescription:d,screenReaderOnlyClass:c}=(0,t(8700).o)().extend(...t(5453).C),h=n||("string"==typeof o?o:void 0),p=(0,t(6425).FD)(s,{children:[h&&(0,t(6425).Y)("legend",{className:c,children:h}),(0,t(6425).Y)("span",{"aria-hidden":!!h,children:o}),r&&(0,t(6425).Y)(d,{children:r})]});return i?(0,t(6425).Y)("div",{className:"group",...a,children:p}):(0,t(6425).Y)(l,{...a,children:p})}},680:(e,o,t)=>{function i(){return(0,t(8700).o)().extend(...t(151).Z)}t.d(o,{y:()=>i})},1801:(e,o,t)=>{function i(e){var o;const i=(0,t(4094).Y)(),{id:r,items:n,isEssential:a}=e,{previewCheckboxActiveState:l,consent:s,activeAction:d}=i,c=a||"history"===d,h=l||a||!!s[r];return{isDisabled:c,isChecked:h,isPartial:!a&&(null==(o=s[r])?void 0:o.length)&&JSON.stringify(n.map((e=>{let{id:o}=e;return o})).sort())!==JSON.stringify(s[r].sort()||[]),onToggle:(0,t(7936).hb)((e=>i.updateGroupChecked(r,e)),[i,r,h])}}t.d(o,{C:()=>i})},151:(e,o,t)=>{t.d(o,{Z:()=>s});var i=t(5914),r=t(1685),n=t.n(r);const a=(e,o)=>{let t,r,a;o?a=o({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:i.dD,height:i.dD}):(t=e("width"),r=e("height"));const l=[],s=()=>l.forEach(((e,o,t)=>{e(),t.splice(o,1)})),d=(e,o)=>{let i;void 0===o&&(o=[]);const d=()=>{e&&(n().clear(i),i=n().measure((()=>{const{width:o,height:i}=e.getBoundingClientRect(),{clientHeight:l,scrollHeight:s,scrollTop:d,offsetHeight:c}=e,h=l<s,p=Math.ceil(d+c+3)>=s;(0!==o||0!==i||e.offsetParent)&&n().mutate((()=>{a?a[1]({width:o,height:i,scrollbar:h,scrolledTop:0===d,scrolledBottom:p}):(e.style.setProperty(t,`${o}px`),e.style.setProperty(r,`${i}px`))}))})))};for(const t of[e,...o]){if(!t)continue;t.addEventListener("animationend",d),t.addEventListener("scroll",d);const e=new ResizeObserver(d);e.observe(t),l.push((()=>{e.disconnect(),t.removeEventListener("animationend",d),t.removeEventListener("scroll",d)}))}return s};return o?[d,a[0],s]:[d,{width:t,height:r},s]},l=(e,o)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${o()}/100))`,s=[Symbol("extendBannerStylesheet"),(e,o)=>{let{computed:t,rule:r,boolIf:n,boolNot:s,boolSwitch:d,jsx:c,variable:h,className:p,vars:g,varName:b,plugin:u}=e,{unsetDialogStyles:f,customize:{activeAction:m,pageRequestUuid4:x},boolLargeOrMobile:y,isMobile:v,layout:{dialogPosition:S,dialogMaxWidth:w,dialogMargin:B,dialogBorderRadius:C,bannerPosition:k,overlay:R,overlayBg:$,overlayBgAlpha:N,overlayBlur:W},design:{boxShadowEnabled:D,boxShadowColor:F,boxShadowOffsetX:z,boxShadowOffsetY:L,boxShadowBlurRadius:A,boxShadowSpreadRadius:I,boxShadowColorAlpha:T,fontSize:G,borderWidth:O,borderColor:P,textAlign:Y,fontInheritFamily:E,fontFamily:M,fontWeight:H,fontColor:j},mobile:Z,layout:_,individualLayout:J}=o;const V={headline:p(),description:p(),firstButton:p()},q=a(b,g),K=a(b,g),U=a(b,g),X=a(b,g),Q=a(b,g),ee=h(m,(0,i.$S)(m,["history"])),oe=h(!1,void 0,"individual"),{isDialog:te,isBanner:ie}=t([v,_.type],(e=>{let[o,t]=e;const i=o?"banner":t;return{type:i,isDialog:"dialog"===i,isBanner:"banner"===i}})),re=t([S],(e=>{let[o]=e;return[o.startsWith("top")?"flex-start":o.startsWith("bottom")?"flex-end":"center",o.endsWith("Center")?"center":o.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign"),[ne]=c("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:G("l"),background:n(R,l($,N)),pointerEvents:n(R,"all","none"),backdropFilter:"none",transform:"translateZ(0)"}),[ae]=c("dialog",{classNames:["align",f],display:"flex",width:"100%",height:"100%",alignItems:n(te,re(0)),justifyContent:n(te,re(1))},{tabIndex:0,"aria-labelledby":V.headline,"aria-describedby":V.description}),le=n({when:te,then:{when:[oe,s(J.inheritDialogMaxWidth)],then:J.dialogMaxWidth(),or:w()},or:"100%"}),{alignment:se}=Z,de=`${y(O,n)} solid ${P()}`,ce=n(te,C()),[,he]=r({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:le,width:le,textAlign:Y("val"),fontFamily:n(E,"inherit",M()),fontWeight:H(),color:j("hex"),margin:n({when:[te,s(S["is-middlecenter"])],then:B(),or:n(te,"10px")}),borderRadius:ce,boxShadow:n(D,`${z()} ${L()} ${A()} ${I()} rgba(${F("r")} ${F("g")} ${F("b")} / ${T()})`),alignSelf:n({when:v,then:d([[se("is-bottom"),"flex-end"],[se("is-top"),"flex-start"],[se("is-center"),"center"]]),or:{when:ie,then:d([[k("is-top"),"flex-start"],[k("is-bottom"),"flex-end"]])}}),borderTop:n({when:[ie,k("is-bottom")],then:de}),borderBottom:n({when:[ie,k("is-top")],then:de})}),pe={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};r({forceSelector:`#${x}, #${x} *`,...pe}),u("modifyRule",(e=>{if("unset"===e.all)for(const o in pe)Object.prototype.hasOwnProperty.call(e,o)||(e[o]=pe[o])}));const ge=`${n(te,O("l"),"0px")} solid ${P()}`;return{a11yIds:V,isDialog:te,isBanner:ie,activeAction:ee,dimsOverlay:q,dimsContent:K,dimsHeader:U,dimsFooter:X,dimsRightSidebar:Q,individualPrivacyOpen:oe,Dialog:ae,Overlay:ne,inner:he,footerBorderStyle:{borderBottomLeftRadius:ce,borderBottomRightRadius:ce,borderLeft:ge,borderRight:ge,borderBottom:ge},headerBorderStyle:{borderTopLeftRadius:ce,borderTopRightRadius:ce,borderLeft:ge,borderRight:ge,borderTop:ge}}}]},5453:(e,o,t)=>{t.d(o,{C:()=>i});const i=[Symbol("extendCommonGroupsStylesheet"),(e,o)=>{let{jsx:t,boolIf:i,boolNot:r}=e,{group:n,design:a,decision:l,bodyDesign:s,boolLargeOrMobile:d}=o;const[c]=t("fieldset",{classNames:"dotted-groups",all:"unset",marginTop:"10px",lineBreak:"anywhere",lineHeight:2,pseudos:{">span,>label":{paddingRight:"10px",fontSize:i({when:s.dottedGroupsInheritFontSize(),then:d(a.fontSize,i),or:d(s.dottedGroupsFontSize,i)}),whiteSpace:"nowrap",display:"inline-block"},">span>i":{color:s.dottedGroupsBulletColor()},">span>i::after":{paddingRight:"5px",display:"inline-block",content:"'●'"},">span>span":{verticalAlign:"middle",cursor:i(l.groupsFirstView,"pointer")}}}),[h]=t("div",{classNames:"groups",marginTop:"10px",clear:"both",pseudos:{">div:not(:last-of-type)":{marginBottom:d(n.groupSpacing,i)}}}),[p]=t("div",{classNames:"group",background:i(r(n.groupInheritBg),n.groupBg()),padding:d(n.groupPadding,i),borderRadius:n.groupBorderRadius(),textAlign:"left",borderColor:n.groupBorderColor(),borderStyle:"solid",borderWidth:d(n.groupBorderWidth,i)}),[g]=t("fieldset",{classNames:"group-inner",all:"unset",textAlign:"left",color:n.headlineFontColor(),fontSize:d(n.headlineFontSize,i),fontWeight:n.headlineFontWeight()}),[b]=t("div",{classNames:"group-description",color:n.descriptionFontColor(),fontSize:d(n.descriptionFontSize,i),marginTop:"5px"}),[u]=t("div",{classNames:"cookie",marginTop:"10px",pseudos:{">label:first-of-type":{display:"block",marginBottom:"10px"}}}),[f]=t("div",{classNames:"cookie-prop",borderStyle:"solid",borderColor:n.groupBorderColor(),borderWidth:"0px",borderLeftWidth:d(n.groupBorderWidth,i),paddingLeft:"15px",pseudos:{">span>a":{wordBreak:"break-all"}}});return{DottedGroupList:c,GroupList:h,Group:p,GroupInner:g,GroupDescription:b,Cookie:u,CookieProperty:f}}]},8084:(e,o,t)=>{t.d(o,{Iy:()=>i,_2:()=>n,kt:()=>r});const i="stylesheet-created",r="stylesheet-toggle",n="css-var-update-"}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.7/982fa5d342cc2c38b02808bf73555d68/banner-lite-671.lite.js.map
