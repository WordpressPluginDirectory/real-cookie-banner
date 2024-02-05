"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[907],{24772:(e,t,n)=>{n.d(t,{Z:()=>B});var i=n(87363),a=n(40914),r=n.n(a),o=n(28854),l=n(82132),d=n(65197),s=n(57853),c=n(6628);const m=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["prefixCls","className","hoverable"]);const{getPrefixCls:d}=i.useContext(l.E_),s=d("card",t),c=r()(`${s}-grid`,n,{[`${s}-grid-hoverable`]:a});return i.createElement("div",Object.assign({},o,{className:c}))};var g=n(17951),p=n(9890),$=n(37245),b=n(56859);const f=e=>{const{antCls:t,componentCls:n,headerHeight:i,cardPaddingBase:a,tabsMarginBottom:r}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:i,marginBottom:-1,padding:`0 ${(0,g.bf)(a)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`},(0,p.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},p.vS),{[`\n          > ${n}-typography,\n          > ${n}-typography-edit-content\n        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:r,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},h=e=>{const{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:i,lineWidth:a}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`\n      ${(0,g.bf)(a)} 0 0 0 ${n},\n      0 ${(0,g.bf)(a)} 0 0 ${n},\n      ${(0,g.bf)(a)} ${(0,g.bf)(a)} 0 0 ${n},\n      ${(0,g.bf)(a)} 0 0 0 ${n} inset,\n      0 ${(0,g.bf)(a)} 0 0 ${n} inset;\n    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:i}}},u=e=>{const{componentCls:t,iconCls:n,actionsLiMargin:i,cardActionsIconSize:a,colorBorderSecondary:r,actionsBg:o}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:o,borderTop:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`,display:"flex",borderRadius:`0 0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)}`},(0,p.dF)()),{"& > li":{margin:i,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,g.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:a,lineHeight:(0,g.bf)(e.calc(a).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`}}})},y=e=>Object.assign(Object.assign({margin:`${(0,g.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,p.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},p.vS),"&-description":{color:e.colorTextDescription}}),S=e=>{const{componentCls:t,cardPaddingBase:n,colorFillAlter:i}=e;return{[`${t}-head`]:{padding:`0 ${(0,g.bf)(n)}`,background:i,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${(0,g.bf)(e.padding)} ${(0,g.bf)(n)}`}}},v=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},x=e=>{const{antCls:t,componentCls:n,cardShadow:i,cardHeadPadding:a,colorBorderSecondary:r,boxShadowTertiary:o,cardPaddingBase:l,extraColor:d}=e;return{[n]:Object.assign(Object.assign({},(0,p.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${n}-bordered)`]:{boxShadow:o},[`${n}-head`]:f(e),[`${n}-extra`]:{marginInlineStart:"auto",color:d,fontWeight:"normal",fontSize:e.fontSize},[`${n}-body`]:Object.assign({padding:l,borderRadius:` 0 0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)}`},(0,p.dF)()),[`${n}-grid`]:h(e),[`${n}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`}},[`${n}-actions`]:u(e),[`${n}-meta`]:y(e)}),[`${n}-bordered`]:{border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`,[`${n}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${n}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:i}},[`${n}-contain-grid`]:{borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0 `,[`${n}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${n}-loading) ${n}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${n}-contain-tabs`]:{[`> ${n}-head`]:{minHeight:0,[`${n}-head-title, ${n}-extra`]:{paddingTop:a}}},[`${n}-type-inner`]:S(e),[`${n}-loading`]:v(e),[`${n}-rtl`]:{direction:"rtl"}}},C=e=>{const{componentCls:t,cardPaddingSM:n,headerHeightSM:i,headerFontSizeSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:i,padding:`0 ${(0,g.bf)(n)}`,fontSize:a,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},O=(0,$.I$)("Card",(e=>{const t=(0,b.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[x(t),C(t)]}),(e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})));var E=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const z=e=>{const{prefixCls:t,actions:n=[]}=e;return i.createElement("ul",{className:`${t}-actions`},n.map(((e,t)=>{const a=`action-${t}`;return i.createElement("li",{style:{width:100/n.length+"%"},key:a},i.createElement("span",null,e))})))},j=i.forwardRef(((e,t)=>{const{prefixCls:n,className:a,rootClassName:g,style:p,extra:$,headStyle:b={},bodyStyle:f={},title:h,loading:u,bordered:y=!0,size:S,type:v,cover:x,actions:C,tabList:j,children:w,activeTabKey:B,defaultActiveTabKey:N,tabBarExtraContent:k,hoverable:P,tabProps:L={}}=e,M=E(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:T,direction:H,card:I}=i.useContext(l.E_),W=i.useMemo((()=>{let e=!1;return i.Children.forEach(w,(t=>{t&&t.type&&t.type===m&&(e=!0)})),e}),[w]),G=T("card",n),[R,Z,A]=O(G),D=i.createElement(s.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},w),F=void 0!==B,X=Object.assign(Object.assign({},L),{[F?"activeKey":"defaultActiveKey"]:F?B:N,tabBarExtraContent:k});let K;const _=(0,d.Z)(S),q=_&&"default"!==_?_:"large",V=j?i.createElement(c.Z,Object.assign({size:q},X,{className:`${G}-head-tabs`,onChange:t=>{var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:j.map((e=>{var{tab:t}=e,n=E(e,["tab"]);return Object.assign({label:t},n)}))})):null;(h||$||V)&&(K=i.createElement("div",{className:`${G}-head`,style:b},i.createElement("div",{className:`${G}-head-wrapper`},h&&i.createElement("div",{className:`${G}-head-title`},h),$&&i.createElement("div",{className:`${G}-extra`},$)),V));const J=x?i.createElement("div",{className:`${G}-cover`},x):null,Y=i.createElement("div",{className:`${G}-body`,style:f},u?D:w),Q=C&&C.length?i.createElement(z,{prefixCls:G,actions:C}):null,U=(0,o.Z)(M,["onTabChange"]),ee=r()(G,null==I?void 0:I.className,{[`${G}-loading`]:u,[`${G}-bordered`]:y,[`${G}-hoverable`]:P,[`${G}-contain-grid`]:W,[`${G}-contain-tabs`]:j&&j.length,[`${G}-${_}`]:_,[`${G}-type-${v}`]:!!v,[`${G}-rtl`]:"rtl"===H},a,g,Z,A),te=Object.assign(Object.assign({},null==I?void 0:I.style),p);return R(i.createElement("div",Object.assign({ref:t},U,{className:ee,style:te}),K,J,Y,Q))}));const w=j;w.Grid=m,w.Meta=e=>{const{prefixCls:t,className:n,avatar:a,title:o,description:d}=e,s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:c}=i.useContext(l.E_),m=c("card",t),g=r()(`${m}-meta`,n),p=a?i.createElement("div",{className:`${m}-meta-avatar`},a):null,$=o?i.createElement("div",{className:`${m}-meta-title`},o):null,b=d?i.createElement("div",{className:`${m}-meta-description`},d):null,f=$||b?i.createElement("div",{className:`${m}-meta-detail`},$,b):null;return i.createElement("div",Object.assign({},s,{className:g}),p,f)};const B=w},61811:(e,t,n)=>{n.d(t,{Z:()=>L});var i=n(65247),a=n(40914),r=n.n(a),o=n(87363),l=n.n(o),d=n(49521),s=n(76953),c=n(82132),m=n(73136),g=n(61318),p=n(22786),$=n(60693),b=n(29894),f=n(72954),h=n(50967);const u=l().createContext({});u.Consumer;var y=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const S=(e,t)=>{var{prefixCls:n,children:i,actions:a,extra:d,className:s,colStyle:m}=e,g=y(e,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:p,itemLayout:$}=(0,o.useContext)(u),{getPrefixCls:b}=(0,o.useContext)(c.E_),S=b("list",n),v=a&&a.length>0&&l().createElement("ul",{className:`${S}-item-action`,key:"actions"},a.map(((e,t)=>l().createElement("li",{key:`${S}-item-action-${t}`},e,t!==a.length-1&&l().createElement("em",{className:`${S}-item-action-split`}))))),x=p?"div":"li",C=l().createElement(x,Object.assign({},g,p?{}:{ref:t},{className:r()(`${S}-item`,{[`${S}-item-no-flex`]:!("vertical"===$?d:!(()=>{let e;return o.Children.forEach(i,(t=>{"string"==typeof t&&(e=!0)})),e&&o.Children.count(i)>1})())},s)}),"vertical"===$&&d?[l().createElement("div",{className:`${S}-item-main`,key:"content"},i,v),l().createElement("div",{className:`${S}-item-extra`,key:"extra"},d)]:[i,v,(0,f.Tm)(d,{key:"extra"})]);return p?l().createElement(h.Z,{ref:t,flex:1,style:m},C):C},v=(0,o.forwardRef)(S);v.Meta=e=>{var{prefixCls:t,className:n,avatar:i,title:a,description:d}=e,s=y(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:m}=(0,o.useContext)(c.E_),g=m("list",t),p=r()(`${g}-item-meta`,n),$=l().createElement("div",{className:`${g}-item-meta-content`},a&&l().createElement("h4",{className:`${g}-item-meta-title`},a),d&&l().createElement("div",{className:`${g}-item-meta-description`},d));return l().createElement("div",Object.assign({},s,{className:p}),i&&l().createElement("div",{className:`${g}-item-meta-avatar`},i),(a||d)&&$)};const x=v;var C=n(17951),O=n(9890),E=n(37245),z=n(56859);const j=e=>{const{listBorderedCls:t,componentCls:n,paddingLG:i,margin:a,itemPaddingSM:r,itemPaddingLG:o,marginLG:l,borderRadiusLG:d}=e;return{[`${t}`]:{border:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:d,[`${n}-header,${n}-footer,${n}-item`]:{paddingInline:i},[`${n}-pagination`]:{margin:`${(0,C.bf)(a)} ${(0,C.bf)(l)}`}},[`${t}${n}-sm`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:r}},[`${t}${n}-lg`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:o}}}},w=e=>{const{componentCls:t,screenSM:n,screenMD:i,marginLG:a,marginSM:r,margin:o}=e;return{[`@media screen and (max-width:${i}px)`]:{[`${t}`]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${n}px)`]:{[`${t}`]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:r}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${(0,C.bf)(o)}`}}}}}},B=e=>{const{componentCls:t,antCls:n,controlHeight:i,minHeight:a,paddingSM:r,marginLG:o,padding:l,itemPadding:d,colorPrimary:s,itemPaddingSM:c,itemPaddingLG:m,paddingXS:g,margin:p,colorText:$,colorTextDescription:b,motionDurationSlow:f,lineWidth:h,headerBg:u,footerBg:y,emptyTextPadding:S,metaMarginBottom:v,avatarMarginRight:x,titleMarginBottom:E,descriptionFontSize:z}=e,j={};return["start","center","end"].forEach((e=>{j[`&-align-${e}`]={textAlign:e}})),{[`${t}`]:Object.assign(Object.assign({},(0,O.Wf)(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:u},[`${t}-footer`]:{background:y},[`${t}-header, ${t}-footer`]:{paddingBlock:r},[`${t}-pagination`]:Object.assign(Object.assign({marginBlockStart:o},j),{[`${n}-pagination-options`]:{textAlign:"start"}}),[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:d,color:$,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:x},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:$},[`${t}-item-meta-title`]:{margin:`0 0 ${(0,C.bf)(e.marginXXS)} 0`,color:$,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:$,transition:`all ${f}`,"&:hover":{color:s}}},[`${t}-item-meta-description`]:{color:b,fontSize:z,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${(0,C.bf)(g)}`,color:b,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:h,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${(0,C.bf)(l)} 0`,color:b,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:S,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${n}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:p,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:o},[`${t}-item-meta`]:{marginBlockEnd:v,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:E,color:$,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:l,marginInlineStart:"auto","> li":{padding:`0 ${(0,C.bf)(l)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:i},[`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${(0,C.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:m},[`${t}-sm ${t}-item`]:{padding:c},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},N=(0,E.I$)("List",(e=>{const t=(0,z.TS)(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[B(t),j(t),w(t)]}),(e=>({contentWidth:220,itemPadding:`${(0,C.bf)(e.paddingContentVertical)} 0`,itemPaddingSM:`${(0,C.bf)(e.paddingContentVerticalSM)} ${(0,C.bf)(e.paddingContentHorizontal)}`,itemPaddingLG:`${(0,C.bf)(e.paddingContentVerticalLG)} ${(0,C.bf)(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})));var k=n(65197);function P(e){var t,{pagination:n=!1,prefixCls:a,bordered:l=!1,split:f=!0,className:h,rootClassName:y,style:S,children:v,itemLayout:x,loadMore:C,grid:O,dataSource:E=[],size:z,header:j,footer:w,loading:B=!1,rowKey:P,renderItem:L,locale:M}=e,T=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const H=n&&"object"==typeof n?n:{},[I,W]=o.useState(H.defaultCurrent||1),[G,R]=o.useState(H.defaultPageSize||10),{getPrefixCls:Z,renderEmpty:A,direction:D,list:F}=o.useContext(c.E_),X=e=>(t,i)=>{var a;W(t),R(i),n&&n[e]&&(null===(a=null==n?void 0:n[e])||void 0===a||a.call(n,t,i))},K=X("onChange"),_=X("onShowSizeChange"),q=Z("list",a),[V,J,Y]=N(q);let Q=B;"boolean"==typeof Q&&(Q={spinning:Q});const U=Q&&Q.spinning;let ee="";switch((0,k.Z)(z)){case"large":ee="lg";break;case"small":ee="sm"}const te=r()(q,{[`${q}-vertical`]:"vertical"===x,[`${q}-${ee}`]:ee,[`${q}-split`]:f,[`${q}-bordered`]:l,[`${q}-loading`]:U,[`${q}-grid`]:!!O,[`${q}-something-after-last-item`]:!!(C||n||w),[`${q}-rtl`]:"rtl"===D},null==F?void 0:F.className,h,y,J,Y),ne=(0,d.Z)({current:1,total:0},{total:E.length,current:I,pageSize:G},n||{}),ie=Math.ceil(ne.total/ne.pageSize);ne.current>ie&&(ne.current=ie);const ae=n?o.createElement("div",{className:r()(`${q}-pagination`,`${q}-pagination-align-${null!==(t=null==ne?void 0:ne.align)&&void 0!==t?t:"end"}`)},o.createElement($.Z,Object.assign({},ne,{onChange:K,onShowSizeChange:_}))):null;let re=(0,i.Z)(E);n&&E.length>(ne.current-1)*ne.pageSize&&(re=(0,i.Z)(E).splice((ne.current-1)*ne.pageSize,ne.pageSize));const oe=Object.keys(O||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),le=(0,p.Z)(oe),de=o.useMemo((()=>{for(let e=0;e<s.c4.length;e+=1){const t=s.c4[e];if(le[t])return t}}),[le]),se=o.useMemo((()=>{if(!O)return;const e=de&&O[de]?O[de]:O.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0}),[null==O?void 0:O.column,de]);let ce=U&&o.createElement("div",{style:{minHeight:53}});if(re.length>0){const e=re.map(((e,t)=>((e,t)=>{if(!L)return null;let n;return n="function"==typeof P?P(e):P?e[P]:e.key,n||(n=`list-item-${t}`),o.createElement(o.Fragment,{key:n},L(e,t))})(e,t)));ce=O?o.createElement(g.Z,{gutter:O.gutter},o.Children.map(e,(e=>o.createElement("div",{key:null==e?void 0:e.key,style:se},e)))):o.createElement("ul",{className:`${q}-items`},e)}else v||U||(ce=o.createElement("div",{className:`${q}-empty-text`},M&&M.emptyText||(null==A?void 0:A("List"))||o.createElement(m.Z,{componentName:"List"})));const me=ne.position||"bottom",ge=o.useMemo((()=>({grid:O,itemLayout:x})),[JSON.stringify(O),x]);return V(o.createElement(u.Provider,{value:ge},o.createElement("div",Object.assign({style:Object.assign(Object.assign({},null==F?void 0:F.style),S),className:te},T),("top"===me||"both"===me)&&ae,j&&o.createElement("div",{className:`${q}-header`},j),o.createElement(b.Z,Object.assign({},Q),ce,v),w&&o.createElement("div",{className:`${q}-footer`},w),C||("bottom"===me||"both"===me)&&ae)))}P.Item=x;const L=P}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.4.1/c19fc7ab24a90cf78b0999945ba66332/907.lite.js.map