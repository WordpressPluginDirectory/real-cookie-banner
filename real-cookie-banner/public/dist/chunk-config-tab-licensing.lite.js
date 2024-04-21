"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[322],{45567:(e,t,a)=>{a.d(t,{f:()=>n});const n=e=>{let{children:t,maxWidth:a="auto",style:n={}}=e;return React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===a?1300:a,...n}},t)}},99235:(e,t,a)=>{a.r(t),a.d(t,{ConfigLicensing:()=>f});var n=a(68038),o=a(39445),r=a(87363),i=a(49048),l=a(52956),c=a(24772),s=a(53345),d=a(90987),m=a(40045),g=a(70006),b=a(63736),u=a(61959);const p=(0,n.Pi)((e=>{let{withinModal:t=!1}=e;const{pluginUpdateStore:{pluginUpdates:a}}=(0,o.useStores)(),{optionStore:n,checklistStore:p}=(0,i.m)(),{slug:h,others:{isPro:f,showLicenseFormImmediate:$},publicUrl:y}=n,v=a.get(h),{navigateAfterActivation:S}=(0,u.y)(),x=(0,r.useCallback)((()=>{p.fetchChecklist(),(0,g.refreshQueue)(),n.setShowLicenseFormImmediate(!1,!0),S&&(window.location.href=S)}),[p,n,S]),C=(0,r.useCallback)((()=>{p.fetchChecklist(),n.setShowLicenseFormImmediate(!1,!1)}),[p,n]),E=(0,r.useCallback)((()=>{n.setShowLicenseFormImmediate(!1,!1),v.skip()}),[v,n]);(0,r.useEffect)((()=>{$&&null!=v&&v.hasInteractedWithFormOnce&&E()}),[v,$,E]);const w=(0,m._i)((0,m.__)("Before we start configuring your cookie banner, you can {{strong}}obtain your free license to enjoy all the benefits{{/strong}} of the free version of Real Cookie Banner. The cookies are already waiting for you. Get started now!"),{strong:React.createElement("strong",null)});return React.createElement(React.Fragment,null,$&&React.createElement("div",{style:{maxWidth:650,textAlign:"center",margin:"0 auto"}},!t&&React.createElement(l.C,{src:`${y}images/logos/real-cookie-banner.svg`,shape:"square",size:130,style:{backgroundColor:"white",padding:25,borderRadius:999,marginBottom:10}}),!t&&!f&&React.createElement("p",{style:{fontSize:15,margin:"0 auto 20px"}},w)),React.createElement(c.Z,{title:t||!v?void 0:React.createElement(React.Fragment,null,f||v.isLicensed?(0,m.__)("License activation"):(0,m.__)("Get your free license")," ",!f&&!$&&React.createElement(b.r,{url:(0,m.__)("https://devowl.io/knowledge-base/real-cookie-banner-upgrade-free-to-pro-version/"),label:(0,m.__)("Upgrade to PRO version")})),bordered:!t},React.createElement(s.Z,{direction:"vertical",size:"large"},t&&!f&&React.createElement("p",{className:"description",style:{fontWeight:"bold"}},w),React.createElement(o.PluginUpdateEmbed,{formProps:{onSave:x,onFailure:$&&!f?E:void 0,footer:React.createElement(d.Z.Item,{style:{margin:"25px 0 0",textAlign:$?"center":void 0}},React.createElement("input",{type:"submit",className:"button button-primary",value:$?f?(0,m.__)("Activate license & continue"):(0,m.__)("Activate free license & Continue"):(0,m.__)("Save")}))},listProps:{onDeactivate:C},slug:h}))),v&&$&&React.createElement("div",{style:{textAlign:"center",marginBottom:20,marginTop:t?0:20}},React.createElement("a",{className:"button-link",onClick:E},f?(0,m.__)("Continue without regular updates and without any support"):(0,m.__)("Continue without any support and without e.g. discount announcements"))))}));var h=a(45567);const f=(0,n.Pi)((()=>React.createElement(h.f,{maxWidth:800,style:{margin:"auto"}},React.createElement(o.Provider,null,React.createElement(p,null)))))},61959:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(66711),o=a(8700);function r(){return o.qs.parse((0,n.useLocation)().search)}},98595:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(46270),o=a(87363);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};var i=a(51928),l=function(e,t){return o.createElement(i.Z,(0,n.Z)({},e,{ref:t,icon:r}))};const c=o.forwardRef(l)},24772:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(87363),o=a(40914),r=a.n(o),i=a(28854),l=a(82132),c=a(65197),s=a(57853),d=a(6628);const m=e=>{var{prefixCls:t,className:a,hoverable:o=!0}=e,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,["prefixCls","className","hoverable"]);const{getPrefixCls:c}=n.useContext(l.E_),s=c("card",t),d=r()(`${s}-grid`,a,{[`${s}-grid-hoverable`]:o});return n.createElement("div",Object.assign({},i,{className:d}))};var g=a(17951),b=a(9890),u=a(37245),p=a(56859);const h=e=>{const{antCls:t,componentCls:a,headerHeight:n,cardPaddingBase:o,tabsMarginBottom:r}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:n,marginBottom:-1,padding:`0 ${(0,g.bf)(o)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`},(0,b.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},b.vS),{[`\n          > ${a}-typography,\n          > ${a}-typography-edit-content\n        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:r,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},f=e=>{const{cardPaddingBase:t,colorBorderSecondary:a,cardShadow:n,lineWidth:o}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`\n      ${(0,g.bf)(o)} 0 0 0 ${a},\n      0 ${(0,g.bf)(o)} 0 0 ${a},\n      ${(0,g.bf)(o)} ${(0,g.bf)(o)} 0 0 ${a},\n      ${(0,g.bf)(o)} 0 0 0 ${a} inset,\n      0 ${(0,g.bf)(o)} 0 0 ${a} inset;\n    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}},$=e=>{const{componentCls:t,iconCls:a,actionsLiMargin:n,cardActionsIconSize:o,colorBorderSecondary:r,actionsBg:i}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:i,borderTop:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`,display:"flex",borderRadius:`0 0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)}`},(0,b.dF)()),{"& > li":{margin:n,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${a}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,g.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${a}`]:{fontSize:o,lineHeight:(0,g.bf)(e.calc(o).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`}}})},y=e=>Object.assign(Object.assign({margin:`${(0,g.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,b.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},b.vS),"&-description":{color:e.colorTextDescription}}),v=e=>{const{componentCls:t,cardPaddingBase:a,colorFillAlter:n}=e;return{[`${t}-head`]:{padding:`0 ${(0,g.bf)(a)}`,background:n,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${(0,g.bf)(e.padding)} ${(0,g.bf)(a)}`}}},S=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},x=e=>{const{antCls:t,componentCls:a,cardShadow:n,cardHeadPadding:o,colorBorderSecondary:r,boxShadowTertiary:i,cardPaddingBase:l,extraColor:c}=e;return{[a]:Object.assign(Object.assign({},(0,b.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${a}-bordered)`]:{boxShadow:i},[`${a}-head`]:h(e),[`${a}-extra`]:{marginInlineStart:"auto",color:c,fontWeight:"normal",fontSize:e.fontSize},[`${a}-body`]:Object.assign({padding:l,borderRadius:` 0 0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)}`},(0,b.dF)()),[`${a}-grid`]:f(e),[`${a}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`}},[`${a}-actions`]:$(e),[`${a}-meta`]:y(e)}),[`${a}-bordered`]:{border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`,[`${a}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${a}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:n}},[`${a}-contain-grid`]:{borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0 `,[`${a}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${a}-loading) ${a}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${a}-contain-tabs`]:{[`> ${a}-head`]:{minHeight:0,[`${a}-head-title, ${a}-extra`]:{paddingTop:o}}},[`${a}-type-inner`]:v(e),[`${a}-loading`]:S(e),[`${a}-rtl`]:{direction:"rtl"}}},C=e=>{const{componentCls:t,cardPaddingSM:a,headerHeightSM:n,headerFontSizeSM:o}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:n,padding:`0 ${(0,g.bf)(a)}`,fontSize:o,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:a}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},E=(0,u.I$)("Card",(e=>{const t=(0,p.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[x(t),C(t)]}),(e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})));var w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};const O=e=>{const{prefixCls:t,actions:a=[]}=e;return n.createElement("ul",{className:`${t}-actions`},a.map(((e,t)=>{const o=`action-${t}`;return n.createElement("li",{style:{width:100/a.length+"%"},key:o},n.createElement("span",null,e))})))},R=n.forwardRef(((e,t)=>{const{prefixCls:a,className:o,rootClassName:g,style:b,extra:u,headStyle:p={},bodyStyle:h={},title:f,loading:$,bordered:y=!0,size:v,type:S,cover:x,actions:C,tabList:R,children:z,activeTabKey:j,defaultActiveTabKey:B,tabBarExtraContent:k,hoverable:P,tabProps:L={}}=e,N=w(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:I,direction:T,card:M}=n.useContext(l.E_),_=n.useMemo((()=>{let e=!1;return n.Children.forEach(z,(t=>{t&&t.type&&t.type===m&&(e=!0)})),e}),[z]),W=I("card",a),[G,H,F]=E(W),A=n.createElement(s.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},z),D=void 0!==j,Z=Object.assign(Object.assign({},L),{[D?"activeKey":"defaultActiveKey"]:D?j:B,tabBarExtraContent:k});let q;const K=(0,c.Z)(v),U=K&&"default"!==K?K:"large",X=R?n.createElement(d.Z,Object.assign({size:U},Z,{className:`${W}-head-tabs`,onChange:t=>{var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)},items:R.map((e=>{var{tab:t}=e,a=w(e,["tab"]);return Object.assign({label:t},a)}))})):null;(f||u||X)&&(q=n.createElement("div",{className:`${W}-head`,style:p},n.createElement("div",{className:`${W}-head-wrapper`},f&&n.createElement("div",{className:`${W}-head-title`},f),u&&n.createElement("div",{className:`${W}-extra`},u)),X));const V=x?n.createElement("div",{className:`${W}-cover`},x):null,Q=n.createElement("div",{className:`${W}-body`,style:h},$?A:z),J=C&&C.length?n.createElement(O,{prefixCls:W,actions:C}):null,Y=(0,i.Z)(N,["onTabChange"]),ee=r()(W,null==M?void 0:M.className,{[`${W}-loading`]:$,[`${W}-bordered`]:y,[`${W}-hoverable`]:P,[`${W}-contain-grid`]:_,[`${W}-contain-tabs`]:R&&R.length,[`${W}-${K}`]:K,[`${W}-type-${S}`]:!!S,[`${W}-rtl`]:"rtl"===T},o,g,H,F),te=Object.assign(Object.assign({},null==M?void 0:M.style),b);return G(n.createElement("div",Object.assign({ref:t},Y,{className:ee,style:te}),q,V,Q,J))}));const z=R;z.Grid=m,z.Meta=e=>{const{prefixCls:t,className:a,avatar:o,title:i,description:c}=e,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=n.useContext(l.E_),m=d("card",t),g=r()(`${m}-meta`,a),b=o?n.createElement("div",{className:`${m}-meta-avatar`},o):null,u=i?n.createElement("div",{className:`${m}-meta-title`},i):null,p=c?n.createElement("div",{className:`${m}-meta-description`},c):null,h=u||p?n.createElement("div",{className:`${m}-meta-detail`},u,p):null;return n.createElement("div",Object.assign({},s,{className:g}),b,h)};const j=z},70044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.5/4b508291e4487a48269e31055695cfff/chunk-config-tab-licensing.lite.js.map
