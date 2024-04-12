"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[603],{17603:(e,n,o)=>{o.d(n,{Z:()=>D});var a=o(87363),t=o.n(a),r=o(75234),i=o(40914),l=o.n(i),c=o(46898),d=o(24758),s=o(11616),p=o(14586),u=o(89897),m=o(46270),f=o(44236),b=o(32481),g=o(1520),v=o(98768),$=o(16048),h=t().forwardRef((function(e,n){var o,a=e.prefixCls,r=e.forceRender,i=e.className,c=e.style,s=e.children,p=e.isActive,u=e.role,m=t().useState(p||r),f=(0,d.Z)(m,2),b=f[0],v=f[1];return t().useEffect((function(){(r||p)&&v(!0)}),[r,p]),b?t().createElement("div",{ref:n,className:l()("".concat(a,"-content"),(o={},(0,g.Z)(o,"".concat(a,"-content-active"),p),(0,g.Z)(o,"".concat(a,"-content-inactive"),!p),o),i),style:c,role:u},t().createElement("div",{className:"".concat(a,"-content-box")},s)):null}));h.displayName="PanelContent";const x=h;var C=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const y=t().forwardRef((function(e,n){var o,a,r=e.showArrow,i=void 0===r||r,c=e.headerClass,d=e.isActive,s=e.onItemClick,p=e.forceRender,u=e.className,b=e.prefixCls,h=e.collapsible,y=e.accordion,I=e.panelKey,k=e.extra,P=e.header,Z=e.expandIcon,N=e.openMotion,E=e.destroyInactivePanel,S=e.children,w=(0,f.Z)(e,C),R="disabled"===h,O="header"===h,B="icon"===h,M=null!=k&&"boolean"!=typeof k,A=function(){null==s||s(I)},j="function"==typeof Z?Z(e):t().createElement("i",{className:"arrow"});j&&(j=t().createElement("div",{className:"".concat(b,"-expand-icon"),onClick:["header","icon"].includes(h)?A:void 0},j));var T=l()((o={},(0,g.Z)(o,"".concat(b,"-item"),!0),(0,g.Z)(o,"".concat(b,"-item-active"),d),(0,g.Z)(o,"".concat(b,"-item-disabled"),R),o),u),H={className:l()(c,(a={},(0,g.Z)(a,"".concat(b,"-header"),!0),(0,g.Z)(a,"".concat(b,"-header-collapsible-only"),O),(0,g.Z)(a,"".concat(b,"-icon-collapsible-only"),B),a)),"aria-expanded":d,"aria-disabled":R,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==$.Z.ENTER&&e.which!==$.Z.ENTER||A()}};return O||B||(H.onClick=A,H.role=y?"tab":"button",H.tabIndex=R?-1:0),t().createElement("div",(0,m.Z)({},w,{ref:n,className:T}),t().createElement("div",H,i&&j,t().createElement("span",{className:"".concat(b,"-header-text"),onClick:"header"===h?A:void 0},P),M&&t().createElement("div",{className:"".concat(b,"-extra")},k)),t().createElement(v.ZP,(0,m.Z)({visible:d,leavedClassName:"".concat(b,"-content-hidden")},N,{forceRender:p,removeOnLeave:E}),(function(e,n){var o=e.className,a=e.style;return t().createElement(x,{ref:n,prefixCls:b,className:o,style:a,isActive:d,forceRender:p,role:y?"tabpanel":void 0},S)})))}));var I=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];function k(e){var n=e;if(!Array.isArray(n)){var o=(0,s.Z)(n);n="number"===o||"string"===o?[n]:[]}return n.map((function(e){return String(e)}))}var P=t().forwardRef((function(e,n){var o=e.prefixCls,a=void 0===o?"rc-collapse":o,r=e.destroyInactivePanel,i=void 0!==r&&r,s=e.style,g=e.accordion,v=e.className,$=e.children,h=e.collapsible,x=e.openMotion,C=e.expandIcon,P=e.activeKey,Z=e.defaultActiveKey,N=e.onChange,E=e.items,S=l()(a,v),w=(0,p.Z)([],{value:P,onChange:function(e){return null==N?void 0:N(e)},defaultValue:Z,postState:k}),R=(0,d.Z)(w,2),O=R[0],B=R[1];(0,u.ZP)(!$,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var M=function(e,n,o){return Array.isArray(e)?function(e,n){var o=n.prefixCls,a=n.accordion,r=n.collapsible,i=n.destroyInactivePanel,l=n.onItemClick,c=n.activeKey,d=n.openMotion,s=n.expandIcon;return e.map((function(e,n){var p,u=e.children,b=e.label,g=e.key,v=e.collapsible,$=e.onItemClick,h=e.destroyInactivePanel,x=(0,f.Z)(e,I),C=String(null!=g?g:n),k=null!=v?v:r,P=null!=h?h:i;return p=a?c[0]===C:c.indexOf(C)>-1,t().createElement(y,(0,m.Z)({},x,{prefixCls:o,key:C,panelKey:C,isActive:p,accordion:a,openMotion:d,expandIcon:s,header:b,collapsible:k,onItemClick:function(e){"disabled"!==k&&(l(e),null==$||$(e))},destroyInactivePanel:P}),u)}))}(e,o):(0,b.Z)(n).map((function(e,n){return function(e,n,o){if(!e)return null;var a,r=o.prefixCls,i=o.accordion,l=o.collapsible,c=o.destroyInactivePanel,d=o.onItemClick,s=o.activeKey,p=o.openMotion,u=o.expandIcon,m=e.key||String(n),f=e.props,b=f.header,g=f.headerClass,v=f.destroyInactivePanel,$=f.collapsible,h=f.onItemClick;a=i?s[0]===m:s.indexOf(m)>-1;var x=null!=$?$:l,C={key:m,panelKey:m,header:b,headerClass:g,isActive:a,prefixCls:r,destroyInactivePanel:null!=v?v:c,openMotion:p,accordion:i,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(d(e),null==h||h(e))},expandIcon:u,collapsible:x};return"string"==typeof e.type?e:(Object.keys(C).forEach((function(e){void 0===C[e]&&delete C[e]})),t().cloneElement(e,C))}(e,n,o)}))}(E,$,{prefixCls:a,accordion:g,openMotion:x,expandIcon:C,collapsible:h,destroyInactivePanel:i,onItemClick:function(e){return B((function(){return g?O[0]===e?[]:[e]:O.indexOf(e)>-1?O.filter((function(n){return n!==e})):[].concat((0,c.Z)(O),[e])}))},activeKey:O});return t().createElement("div",{ref:n,className:S,style:s,role:g?"tablist":void 0},M)}));const Z=Object.assign(P,{Panel:y}),N=Z;Z.Panel;var E=o(28854),S=o(63582),w=o(72954),R=o(82132),O=o(65197);const B=a.forwardRef(((e,n)=>{const{getPrefixCls:o}=a.useContext(R.E_),{prefixCls:t,className:r,showArrow:i=!0}=e,c=o("collapse",t),d=l()({[`${c}-no-arrow`]:!i},r);return a.createElement(N.Panel,Object.assign({ref:n},e,{prefixCls:c,className:d}))}));var M=o(17951),A=o(9890),j=o(70044),T=o(37245),H=o(56859);const K=e=>{const{componentCls:n,contentBg:o,padding:a,headerBg:t,headerPadding:r,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:l,collapsePanelBorderRadius:c,lineWidth:d,lineType:s,colorBorder:p,colorText:u,colorTextHeading:m,colorTextDisabled:f,fontSizeLG:b,lineHeight:g,lineHeightLG:v,marginSM:$,paddingSM:h,paddingLG:x,paddingXS:C,motionDurationSlow:y,fontSizeIcon:I,contentPadding:k,fontHeight:P,fontHeightLG:Z}=e,N=`${(0,M.bf)(d)} ${s} ${p}`;return{[n]:Object.assign(Object.assign({},(0,A.Wf)(e)),{backgroundColor:t,border:N,borderBottom:0,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:N,"&:last-child":{[`\n            &,\n            & > ${n}-header`]:{borderRadius:`0 0 ${(0,M.bf)(c)} ${(0,M.bf)(c)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:r,color:m,lineHeight:g,cursor:"pointer",transition:`all ${y}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:P,display:"flex",alignItems:"center",paddingInlineEnd:$},[`${n}-arrow`]:Object.assign(Object.assign({},(0,A.Ro)()),{fontSize:I,svg:{transition:`transform ${y}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:u,backgroundColor:o,borderTop:N,[`& > ${n}-content-box`]:{padding:k},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:i,paddingInlineStart:C,[`> ${n}-expand-icon`]:{marginInlineStart:e.calc(h).sub(C).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:h}}},"&-large":{[`> ${n}-item`]:{fontSize:b,lineHeight:v,[`> ${n}-header`]:{padding:l,paddingInlineStart:a,[`> ${n}-expand-icon`]:{height:Z,marginInlineStart:e.calc(x).sub(a).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:x}}},[`${n}-item:last-child`]:{[`> ${n}-content`]:{borderRadius:`0 0 ${(0,M.bf)(c)} ${(0,M.bf)(c)}`}},[`& ${n}-item-disabled > ${n}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:$}}}}})}},L=e=>{const{componentCls:n}=e;return{[`${n}-rtl`]:{[`> ${n}-item > ${n}-header ${n}-arrow svg`]:{transform:"rotate(180deg)"}}}},G=e=>{const{componentCls:n,headerBg:o,paddingXXS:a,colorBorder:t}=e;return{[`${n}-borderless`]:{backgroundColor:o,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${t}`},[`\n        > ${n}-item:last-child,\n        > ${n}-item:last-child ${n}-header\n      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:a}}}},z=e=>{const{componentCls:n,paddingSM:o}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:o}}}}}},X=(0,T.I$)("Collapse",(e=>{const n=(0,H.TS)(e,{collapseHeaderPaddingSM:`${(0,M.bf)(e.paddingXS)} ${(0,M.bf)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,M.bf)(e.padding)} ${(0,M.bf)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[K(n),G(n),z(n),L(n),(0,j.Z)(n)]}),(e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))),_=a.forwardRef(((e,n)=>{const{getPrefixCls:o,direction:t,collapse:i}=a.useContext(R.E_),{prefixCls:c,className:d,rootClassName:s,style:p,bordered:u=!0,ghost:m,size:f,expandIconPosition:g="start",children:v,expandIcon:$}=e,h=(0,O.Z)((e=>{var n;return null!==(n=null!=f?f:e)&&void 0!==n?n:"middle"})),x=o("collapse",c),C=o(),[y,I,k]=X(x),P=a.useMemo((()=>"left"===g?"start":"right"===g?"end":g),[g]),Z=l()(`${x}-icon-position-${P}`,{[`${x}-borderless`]:!u,[`${x}-rtl`]:"rtl"===t,[`${x}-ghost`]:!!m,[`${x}-${h}`]:"middle"!==h},null==i?void 0:i.className,d,s,I,k),B=Object.assign(Object.assign({},(0,S.Z)(C)),{motionAppear:!1,leavedClassName:`${x}-content-hidden`}),M=a.useMemo((()=>v?(0,b.Z)(v).map(((e,n)=>{var o,a;if(null===(o=e.props)||void 0===o?void 0:o.disabled){const o=null!==(a=e.key)&&void 0!==a?a:String(n),{disabled:t,collapsible:r}=e.props,i=Object.assign(Object.assign({},(0,E.Z)(e.props,["disabled"])),{key:o,collapsible:null!=r?r:t?"disabled":void 0});return(0,w.Tm)(e,i)}return e})):null),[v]);return y(a.createElement(N,Object.assign({ref:n,openMotion:B},(0,E.Z)(e,["rootClassName"]),{expandIcon:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=$?$(e):a.createElement(r.Z,{rotate:e.isActive?90:void 0});return(0,w.Tm)(n,(()=>({className:l()(n.props.className,`${x}-arrow`)})))},prefixCls:x,className:Z,style:Object.assign(Object.assign({},null==i?void 0:i.style),p)}),M))})),D=Object.assign(_,{Panel:B})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.3/bfaae85ac529277b653ee211e6f98347/603.lite.js.map
