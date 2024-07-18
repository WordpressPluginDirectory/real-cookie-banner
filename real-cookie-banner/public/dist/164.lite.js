"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[164],{87164:(e,n,a)=>{a.d(n,{A:()=>_});var o=a(41594),t=a.n(o),r=a(95997),i=a(65924),l=a.n(i),c=a(88686),d=a(74657),s=a(83503),p=a(28046),u=a(21942),m=a.n(u),f=a(10835),g=a(71356),b=a(53259),v=a(73288),h=a(71329),$=a(3840),x=a(63618),y=t().forwardRef((function(e,n){var a=e.prefixCls,o=e.forceRender,r=e.className,i=e.style,l=e.children,c=e.isActive,d=e.role,p=t().useState(c||o),u=(0,s.A)(p,2),f=u[0],g=u[1];return t().useEffect((function(){(o||c)&&g(!0)}),[o,c]),f?t().createElement("div",{ref:n,className:m()("".concat(a,"-content"),(0,h.A)((0,h.A)({},"".concat(a,"-content-active"),c),"".concat(a,"-content-inactive"),!c),r),style:i,role:d},t().createElement("div",{className:"".concat(a,"-content-box")},l)):null}));y.displayName="PanelContent";const C=y;var A=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const I=t().forwardRef((function(e,n){var a=e.showArrow,o=void 0===a||a,r=e.headerClass,i=e.isActive,l=e.onItemClick,d=e.forceRender,s=e.className,p=e.prefixCls,u=e.collapsible,f=e.accordion,g=e.panelKey,v=e.extra,y=e.header,I=e.expandIcon,k=e.openMotion,N=e.destroyInactivePanel,P=e.children,E=(0,b.A)(e,A),S="disabled"===u,w="header"===u,O="icon"===u,R=null!=v&&"boolean"!=typeof v,B=function(){null==l||l(g)},M="function"==typeof I?I(e):t().createElement("i",{className:"arrow"});M&&(M=t().createElement("div",{className:"".concat(p,"-expand-icon"),onClick:["header","icon"].includes(u)?B:void 0},M));var j=m()((0,h.A)((0,h.A)((0,h.A)({},"".concat(p,"-item"),!0),"".concat(p,"-item-active"),i),"".concat(p,"-item-disabled"),S),s),z={className:m()(r,(0,h.A)((0,h.A)((0,h.A)({},"".concat(p,"-header"),!0),"".concat(p,"-header-collapsible-only"),w),"".concat(p,"-icon-collapsible-only"),O)),"aria-expanded":i,"aria-disabled":S,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==x.A.ENTER&&e.which!==x.A.ENTER||B()}};return w||O||(z.onClick=B,z.role=f?"tab":"button",z.tabIndex=S?-1:0),t().createElement("div",(0,c.A)({},E,{ref:n,className:j}),t().createElement("div",z,o&&M,t().createElement("span",{className:"".concat(p,"-header-text"),onClick:"header"===u?B:void 0},y),R&&t().createElement("div",{className:"".concat(p,"-extra")},v)),t().createElement($.Ay,(0,c.A)({visible:i,leavedClassName:"".concat(p,"-content-hidden")},k,{forceRender:d,removeOnLeave:N}),(function(e,n){var a=e.className,o=e.style;return t().createElement(C,{ref:n,prefixCls:p,className:a,style:o,isActive:i,forceRender:d,role:f?"tabpanel":void 0},P)})))}));var k=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];var N=a(59127);function P(e){var n=e;if(!Array.isArray(n)){var a=(0,p.A)(n);n="number"===a||"string"===a?[n]:[]}return n.map((function(e){return String(e)}))}var E=t().forwardRef((function(e,n){var a=e.prefixCls,o=void 0===a?"rc-collapse":a,r=e.destroyInactivePanel,i=void 0!==r&&r,l=e.style,p=e.accordion,u=e.className,h=e.children,$=e.collapsible,x=e.openMotion,y=e.expandIcon,C=e.activeKey,A=e.defaultActiveKey,E=e.onChange,S=e.items,w=m()(o,u),O=(0,f.A)([],{value:C,onChange:function(e){return null==E?void 0:E(e)},defaultValue:A,postState:P}),R=(0,s.A)(O,2),B=R[0],M=R[1];(0,g.Ay)(!h,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var j=function(e,n,a){return Array.isArray(e)?function(e,n){var a=n.prefixCls,o=n.accordion,r=n.collapsible,i=n.destroyInactivePanel,l=n.onItemClick,d=n.activeKey,s=n.openMotion,p=n.expandIcon;return e.map((function(e,n){var u,m=e.children,f=e.label,g=e.key,v=e.collapsible,h=e.onItemClick,$=e.destroyInactivePanel,x=(0,b.A)(e,k),y=String(null!=g?g:n),C=null!=v?v:r,A=null!=$?$:i;return u=o?d[0]===y:d.indexOf(y)>-1,t().createElement(I,(0,c.A)({},x,{prefixCls:a,key:y,panelKey:y,isActive:u,accordion:o,openMotion:s,expandIcon:p,header:f,collapsible:C,onItemClick:function(e){"disabled"!==C&&(l(e),null==h||h(e))},destroyInactivePanel:A}),m)}))}(e,a):(0,v.A)(n).map((function(e,n){return function(e,n,a){if(!e)return null;var o,r=a.prefixCls,i=a.accordion,l=a.collapsible,c=a.destroyInactivePanel,d=a.onItemClick,s=a.activeKey,p=a.openMotion,u=a.expandIcon,m=e.key||String(n),f=e.props,g=f.header,b=f.headerClass,v=f.destroyInactivePanel,h=f.collapsible,$=f.onItemClick;o=i?s[0]===m:s.indexOf(m)>-1;var x=null!=h?h:l,y={key:m,panelKey:m,header:g,headerClass:b,isActive:o,prefixCls:r,destroyInactivePanel:null!=v?v:c,openMotion:p,accordion:i,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(d(e),null==$||$(e))},expandIcon:u,collapsible:x};return"string"==typeof e.type?e:(Object.keys(y).forEach((function(e){void 0===y[e]&&delete y[e]})),t().cloneElement(e,y))}(e,n,a)}))}(S,h,{prefixCls:o,accordion:p,openMotion:x,expandIcon:y,collapsible:$,destroyInactivePanel:i,onItemClick:function(e){return M((function(){return p?B[0]===e?[]:[e]:B.indexOf(e)>-1?B.filter((function(n){return n!==e})):[].concat((0,d.A)(B),[e])}))},activeKey:B});return t().createElement("div",(0,c.A)({ref:n,className:w,style:l,role:p?"tablist":void 0},(0,N.A)(e,{aria:!0,data:!0})),j)}));const S=Object.assign(E,{Panel:I}),w=S;S.Panel;var O=a(44131),R=a(18221),B=a(40900),M=a(51197),j=a(77879);const z=o.forwardRef(((e,n)=>{const{getPrefixCls:a}=o.useContext(M.QO),{prefixCls:t,className:r,showArrow:i=!0}=e,c=a("collapse",t),d=l()({[`${c}-no-arrow`]:!i},r);return o.createElement(w.Panel,Object.assign({ref:n},e,{prefixCls:c,className:d}))}));var H=a(51857),K=a(85359),L=a(97167),T=a(2947),G=a(42162);const X=e=>{const{componentCls:n,contentBg:a,padding:o,headerBg:t,headerPadding:r,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:l,collapsePanelBorderRadius:c,lineWidth:d,lineType:s,colorBorder:p,colorText:u,colorTextHeading:m,colorTextDisabled:f,fontSizeLG:g,lineHeight:b,lineHeightLG:v,marginSM:h,paddingSM:$,paddingLG:x,paddingXS:y,motionDurationSlow:C,fontSizeIcon:A,contentPadding:I,fontHeight:k,fontHeightLG:N}=e,P=`${(0,H.zA)(d)} ${s} ${p}`;return{[n]:Object.assign(Object.assign({},(0,K.dF)(e)),{backgroundColor:t,border:P,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:P,"&:last-child":{[`\n            &,\n            & > ${n}-header`]:{borderRadius:`0 0 ${(0,H.zA)(c)} ${(0,H.zA)(c)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:r,color:m,lineHeight:b,cursor:"pointer",transition:`all ${C}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:k,display:"flex",alignItems:"center",paddingInlineEnd:h},[`${n}-arrow`]:Object.assign(Object.assign({},(0,K.Nk)()),{fontSize:A,transition:`transform ${C}`,svg:{transition:`transform ${C}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:u,backgroundColor:a,borderTop:P,[`& > ${n}-content-box`]:{padding:I},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:i,paddingInlineStart:y,[`> ${n}-expand-icon`]:{marginInlineStart:e.calc($).sub(y).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:$}}},"&-large":{[`> ${n}-item`]:{fontSize:g,lineHeight:v,[`> ${n}-header`]:{padding:l,paddingInlineStart:o,[`> ${n}-expand-icon`]:{height:N,marginInlineStart:e.calc(x).sub(o).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:x}}},[`${n}-item:last-child`]:{borderBottom:0,[`> ${n}-content`]:{borderRadius:`0 0 ${(0,H.zA)(c)} ${(0,H.zA)(c)}`}},[`& ${n}-item-disabled > ${n}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},D=e=>{const{componentCls:n}=e,a=`> ${n}-item > ${n}-header ${n}-arrow`;return{[`${n}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},F=e=>{const{componentCls:n,headerBg:a,paddingXXS:o,colorBorder:t}=e;return{[`${n}-borderless`]:{backgroundColor:a,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${t}`},[`\n        > ${n}-item:last-child,\n        > ${n}-item:last-child ${n}-header\n      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:o}}}},q=e=>{const{componentCls:n,paddingSM:a}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:a}}}}}},Q=(0,T.OF)("Collapse",(e=>{const n=(0,G.h1)(e,{collapseHeaderPaddingSM:`${(0,H.zA)(e.paddingXS)} ${(0,H.zA)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,H.zA)(e.padding)} ${(0,H.zA)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[X(n),F(n),q(n),D(n),(0,L.A)(n)]}),(e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))),W=o.forwardRef(((e,n)=>{const{getPrefixCls:a,direction:t,collapse:i}=o.useContext(M.QO),{prefixCls:c,className:d,rootClassName:s,style:p,bordered:u=!0,ghost:m,size:f,expandIconPosition:g="start",children:b,expandIcon:h}=e,$=(0,j.A)((e=>{var n;return null!==(n=null!=f?f:e)&&void 0!==n?n:"middle"})),x=a("collapse",c),y=a(),[C,A,I]=Q(x),k=o.useMemo((()=>"left"===g?"start":"right"===g?"end":g),[g]),N=null!=h?h:null==i?void 0:i.expandIcon,P=o.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n="function"==typeof N?N(e):o.createElement(r.A,{rotate:e.isActive?90:void 0});return(0,B.Ob)(n,(()=>{var e;return{className:l()(null===(e=null==n?void 0:n.props)||void 0===e?void 0:e.className,`${x}-arrow`)}}))}),[N,x]),E=l()(`${x}-icon-position-${k}`,{[`${x}-borderless`]:!u,[`${x}-rtl`]:"rtl"===t,[`${x}-ghost`]:!!m,[`${x}-${$}`]:"middle"!==$},null==i?void 0:i.className,d,s,A,I),S=Object.assign(Object.assign({},(0,R.A)(y)),{motionAppear:!1,leavedClassName:`${x}-content-hidden`}),z=o.useMemo((()=>b?(0,v.A)(b).map(((e,n)=>{var a,o;if(null===(a=e.props)||void 0===a?void 0:a.disabled){const a=null!==(o=e.key)&&void 0!==o?o:String(n),{disabled:t,collapsible:r}=e.props,i=Object.assign(Object.assign({},(0,O.A)(e.props,["disabled"])),{key:a,collapsible:null!=r?r:t?"disabled":void 0});return(0,B.Ob)(e,i)}return e})):null),[b]);return C(o.createElement(w,Object.assign({ref:n,openMotion:S},(0,O.A)(e,["rootClassName"]),{expandIcon:P,prefixCls:x,className:E,style:Object.assign(Object.assign({},null==i?void 0:i.style),p)}),z))})),_=Object.assign(W,{Panel:z})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.12/42acc0f2ac090977f3c4a684ea3c3903/164.lite.js.map