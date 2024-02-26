"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[987],{90987:(e,t,n)=>{n.d(t,{Z:()=>Ne});var r=n(65247),o=n(40914),l=n.n(o),i=n(98768),a=n(87363),s=n(63582),c=n(27117);function u(e){const[t,n]=a.useState(e);return a.useEffect((()=>{const t=setTimeout((()=>{n(e)}),e.length?0:10);return()=>{clearTimeout(t)}}),[e]),t}var d=n(17951),m=n(9890),p=n(52253),f=n(70044),g=n(56859),h=n(37245);const b=e=>{const{componentCls:t}=e,n=`${t}-show-help-item`;return{[`${t}-show-help`]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},y=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${(0,d.bf)(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),v=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},$=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,m.Wf)(e)),y(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},v(e,e.controlHeightSM)),"&-large":Object.assign({},v(e,e.controlHeightLG))})}},x=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,labelRequiredMarkColor:l,labelColor:i,labelFontSize:a,labelHeight:s,labelColonMarginInlineStart:c,labelColonMarginInlineEnd:u,itemMarginBottom:d}=e;return{[t]:Object.assign(Object.assign({},(0,m.Wf)(e)),{marginBottom:d,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,\n        &-hidden.${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:s,color:i,fontSize:a,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:l,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:c,marginInlineEnd:u},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:p.kr,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},w=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},C=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,\n        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},E=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),O=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:E(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},S=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,\n      .${r}-col-24${n}-label,\n      .${r}-col-xl-24${n}-label`]:E(e),[`@media (max-width: ${(0,d.bf)(e.screenXSMax)})`]:[O(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:E(e)}}],[`@media (max-width: ${(0,d.bf)(e.screenSMMax)})`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:E(e)}},[`@media (max-width: ${(0,d.bf)(e.screenMDMax)})`]:{[t]:{[`.${r}-col-md-24${n}-label`]:E(e)}},[`@media (max-width: ${(0,d.bf)(e.screenLGMax)})`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:E(e)}}}},k=(e,t)=>(0,g.TS)(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),I=(0,h.I$)("Form",((e,t)=>{let{rootPrefixCls:n}=t;const r=k(e,n);return[$(r),x(r),b(r),w(r),C(r),S(r),(0,f.Z)(r),p.kr]}),(e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0})),{order:-1e3});var M=n(40920);const j=[];function F(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"==typeof e?e:`${t}-${r}`,error:e,errorStatus:n}}const N=e=>{let{help:t,helpStatus:n,errors:o=j,warnings:d=j,className:m,fieldId:p,onVisibleChanged:f}=e;const{prefixCls:g}=a.useContext(c.Rk),h=`${g}-item-explain`,b=(0,M.Z)(g),[y,v,$]=I(g,b),x=(0,a.useMemo)((()=>(0,s.Z)(g)),[g]),w=u(o),C=u(d),E=a.useMemo((()=>null!=t?[F(t,"help",n)]:[].concat((0,r.Z)(w.map(((e,t)=>F(e,"error","error",t)))),(0,r.Z)(C.map(((e,t)=>F(e,"warning","warning",t)))))),[t,n,w,C]),O={};return p&&(O.id=`${p}_help`),y(a.createElement(i.ZP,{motionDeadline:x.motionDeadline,motionName:`${g}-show-help`,visible:!!E.length,onVisibleChanged:f},(e=>{const{className:t,style:n}=e;return a.createElement("div",Object.assign({},O,{className:l()(h,t,$,b,m,v),style:n,role:"alert"}),a.createElement(i.V4,Object.assign({keys:E},(0,s.Z)(g),{motionName:`${g}-show-help-item`,component:!1}),(e=>{const{key:t,error:n,errorStatus:r,className:o,style:i}=e;return a.createElement("div",{key:t,className:l()(o,{[`${h}-${r}`]:r}),style:i},n)})))})))};var q=n(74276),Z=n(82132),P=n(59335),R=n(49976),W=n(65197);const _=e=>"object"==typeof e&&null!=e&&1===e.nodeType,H=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,T=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return H(n.overflowY,t)||H(n.overflowX,t)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},z=(e,t,n,r,o,l,i,a)=>l<e&&i>t||l>e&&i<t?0:l<=e&&a<=n||i>=t&&a>=n?l-e-r:i>t&&a<n||l<e&&a>n?i-t+o:0,A=e=>{const t=e.parentElement;return null==t?e.getRootNode().host||null:t},B=(e,t)=>{var n,r,o,l;if("undefined"==typeof document)return[];const{scrollMode:i,block:a,inline:s,boundary:c,skipOverflowHiddenElements:u}=t,d="function"==typeof c?c:e=>e!==c;if(!_(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,p=[];let f=e;for(;_(f)&&d(f);){if(f=A(f),f===m){p.push(f);break}null!=f&&f===document.body&&T(f)&&!T(document.documentElement)||null!=f&&T(f,u)&&p.push(f)}const g=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,h=null!=(l=null==(o=window.visualViewport)?void 0:o.height)?l:innerHeight,{scrollX:b,scrollY:y}=window,{height:v,width:$,top:x,right:w,bottom:C,left:E}=e.getBoundingClientRect(),{top:O,right:S,bottom:k,left:I}=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);let M="start"===a||"nearest"===a?x-O:"end"===a?C+k:x+v/2-O+k,j="center"===s?E+$/2-I+S:"end"===s?w+S:E-I;const F=[];for(let e=0;e<p.length;e++){const t=p[e],{height:n,width:r,top:o,right:l,bottom:c,left:u}=t.getBoundingClientRect();if("if-needed"===i&&x>=0&&E>=0&&C<=h&&w<=g&&x>=o&&C<=c&&E>=u&&w<=l)return F;const d=getComputedStyle(t),f=parseInt(d.borderLeftWidth,10),O=parseInt(d.borderTopWidth,10),S=parseInt(d.borderRightWidth,10),k=parseInt(d.borderBottomWidth,10);let I=0,N=0;const q="offsetWidth"in t?t.offsetWidth-t.clientWidth-f-S:0,Z="offsetHeight"in t?t.offsetHeight-t.clientHeight-O-k:0,P="offsetWidth"in t?0===t.offsetWidth?0:r/t.offsetWidth:0,R="offsetHeight"in t?0===t.offsetHeight?0:n/t.offsetHeight:0;if(m===t)I="start"===a?M:"end"===a?M-h:"nearest"===a?z(y,y+h,h,O,k,y+M,y+M+v,v):M-h/2,N="start"===s?j:"center"===s?j-g/2:"end"===s?j-g:z(b,b+g,g,f,S,b+j,b+j+$,$),I=Math.max(0,I+y),N=Math.max(0,N+b);else{I="start"===a?M-o-O:"end"===a?M-c+k+Z:"nearest"===a?z(o,c,n,O,k+Z,M,M+v,v):M-(o+n/2)+Z/2,N="start"===s?j-u-f:"center"===s?j-(u+r/2)+q/2:"end"===s?j-l+S+q:z(u,l,r,f,S+q,j,j+$,$);const{scrollLeft:e,scrollTop:i}=t;I=0===R?0:Math.max(0,Math.min(i+I/R,t.scrollHeight-n/R+Z)),N=0===P?0:Math.max(0,Math.min(e+N/P,t.scrollWidth-r/P+q)),M+=i-I,j+=e-N}F.push({el:t,top:I,left:N})}return F};function D(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const n=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if((e=>"object"==typeof e&&"function"==typeof e.behavior)(t))return t.behavior(B(e,t));const r="boolean"==typeof t||null==t?void 0:t.behavior;for(const{el:o,top:l,left:i}of B(e,(e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"})(t))){const e=l-n.top+n.bottom,t=i-n.left+n.right;o.scroll({top:e,left:t,behavior:r})}}const L=["parentNode"];function V(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function X(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:L.includes(n)?`form_item_${n}`:n}function G(e,t,n,r,o,l){let i=r;return void 0!==l?i=l:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function Y(e){return V(e).join("_")}function K(e){const[t]=(0,q.cI)(),n=a.useRef({}),r=a.useMemo((()=>null!=e?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:e=>t=>{const r=Y(e);t?n.current[r]=t:delete n.current[r]}},scrollToField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=V(e),o=X(n,r.__INTERNAL__.name),l=o?document.getElementById(o):null;l&&D(l,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:e=>{const t=Y(e);return n.current[t]}})),[e,t]);return[r]}var U=n(66002);const Q=(e,t)=>{const n=a.useContext(P.Z),{getPrefixCls:r,direction:o,form:i}=a.useContext(Z.E_),{prefixCls:s,className:u,rootClassName:d,size:m,disabled:p=n,form:f,colon:g,labelAlign:h,labelWrap:b,labelCol:y,wrapperCol:v,hideRequiredMark:$,layout:x="horizontal",scrollToFirstError:w,requiredMark:C,onFinishFailed:E,name:O,style:S,feedbackIcons:k}=e,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons"]),F=(0,W.Z)(m),N=a.useContext(U.Z),_=(0,a.useMemo)((()=>void 0!==C?C:!$&&(!i||void 0===i.requiredMark||i.requiredMark)),[$,C,i]),H=null!=g?g:null==i?void 0:i.colon,T=r("form",s),z=(0,M.Z)(T),[A,B,D]=I(T,z),L=l()(T,`${T}-${x}`,{[`${T}-hide-required-mark`]:!1===_,[`${T}-rtl`]:"rtl"===o,[`${T}-${F}`]:F},D,z,B,null==i?void 0:i.className,u,d),[V]=K(f),{__INTERNAL__:X}=V;X.name=O;const G=(0,a.useMemo)((()=>({name:O,labelAlign:h,labelCol:y,labelWrap:b,wrapperCol:v,vertical:"vertical"===x,colon:H,requiredMark:_,itemRef:X.itemRef,form:V,feedbackIcons:k})),[O,h,y,v,x,H,_,V,k]);a.useImperativeHandle(t,(()=>V));const Y=(e,t)=>{if(e){let n={block:"nearest"};"object"==typeof e&&(n=e),V.scrollToField(t,n)}};return A(a.createElement(P.n,{disabled:p},a.createElement(R.Z.Provider,{value:F},a.createElement(c.RV,{validateMessages:N},a.createElement(c.q3.Provider,{value:G},a.createElement(q.ZP,Object.assign({id:O},j,{name:O,onFinishFailed:e=>{if(null==E||E(e),e.errorFields.length){const t=e.errorFields[0].name;if(void 0!==w)return void Y(w,t);i&&void 0!==i.scrollToFirstError&&Y(i.scrollToFirstError,t)}},form:V,style:Object.assign(Object.assign({},null==i?void 0:i.style),S),className:L})))))))},J=a.forwardRef(Q);var ee=n(84277),te=n(13234),ne=n(72954),re=n(96847),oe=n(32481);const le=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,a.useContext)(c.aM);return{status:e,errors:t,warnings:n}};le.Context=c.aM;const ie=le;var ae=n(73956),se=n(21948),ce=n(85739),ue=n(28854),de=n(61318),me=n(50967);const pe=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},fe=(0,h.bk)(["Form","item-item"],((e,t)=>{let{rootPrefixCls:n}=t;const r=k(e,n);return[pe(r)]})),ge=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:o,errors:i,warnings:s,_internalItemRender:u,extra:d,help:m,fieldId:p,marginBottom:f,onErrorVisibleChanged:g}=e,h=`${t}-item`,b=a.useContext(c.q3),y=r||b.wrapperCol||{},v=l()(`${h}-control`,y.className),$=a.useMemo((()=>Object.assign({},b)),[b]);delete $.labelCol,delete $.wrapperCol;const x=a.createElement("div",{className:`${h}-control-input`},a.createElement("div",{className:`${h}-control-input-content`},o)),w=a.useMemo((()=>({prefixCls:t,status:n})),[t,n]),C=null!==f||i.length||s.length?a.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},a.createElement(c.Rk.Provider,{value:w},a.createElement(N,{fieldId:p,errors:i,warnings:s,help:m,helpStatus:n,className:`${h}-explain-connected`,onVisibleChanged:g})),!!f&&a.createElement("div",{style:{width:0,height:f}})):null,E={};p&&(E.id=`${p}_extra`);const O=d?a.createElement("div",Object.assign({},E,{className:`${h}-extra`}),d):null,S=u&&"pro_table_render"===u.mark&&u.render?u.render(e,{input:x,errorList:C,extra:O}):a.createElement(a.Fragment,null,x,C,O);return a.createElement(c.q3.Provider,{value:$},a.createElement(me.Z,Object.assign({},y,{className:v}),S),a.createElement(fe,{prefixCls:t}))};var he=n(98595),be=n(61810),ye=n(54113),ve=n(69017);const $e=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:i,colon:s,required:u,requiredMark:d,tooltip:m}=e;var p;const[f]=(0,ye.Z)("Form"),{vertical:g,labelAlign:h,labelCol:b,labelWrap:y,colon:v}=a.useContext(c.q3);if(!n)return null;const $=o||b||{},x=i||h,w=`${t}-item-label`,C=l()(w,"left"===x&&`${w}-left`,$.className,{[`${w}-wrap`]:!!y});let E=n;const O=!0===s||!1!==v&&!1!==s;O&&!g&&"string"==typeof n&&""!==n.trim()&&(E=n.replace(/[:|：]\s*$/,""));const S=function(e){return e?"object"!=typeof e||a.isValidElement(e)?{title:e}:e:null}(m);if(S){const{icon:e=a.createElement(he.Z,null)}=S,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(S,["icon"]),r=a.createElement(ve.Z,Object.assign({},n),a.cloneElement(e,{className:`${t}-item-tooltip`,title:"",onClick:e=>{e.preventDefault()},tabIndex:null}));E=a.createElement(a.Fragment,null,E,r)}const k="optional"===d,I="function"==typeof d;I?E=d(E,{required:!!u}):k&&!u&&(E=a.createElement(a.Fragment,null,E,a.createElement("span",{className:`${t}-item-optional`,title:""},(null==f?void 0:f.optional)||(null===(p=be.Z.Form)||void 0===p?void 0:p.optional))));const M=l()({[`${t}-item-required`]:u,[`${t}-item-required-mark-optional`]:k||I,[`${t}-item-no-colon`]:!O});return a.createElement(me.Z,Object.assign({},$,{className:C}),a.createElement("label",{htmlFor:r,className:M,title:"string"==typeof n?n:""},E))};var xe=n(91747),we=n(7738),Ce=n(99502),Ee=n(78351);const Oe={success:xe.Z,warning:Ce.Z,error:we.Z,validating:Ee.Z};function Se(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:i,prefixCls:s,meta:u,noStyle:d}=e;const m=`${s}-item`,{feedbackIcons:p}=a.useContext(c.q3),f=G(n,r,u,null,!!o,i),{isFormItemInput:g,status:h,hasFeedback:b,feedbackIcon:y}=a.useContext(c.aM),v=a.useMemo((()=>{var e;let t;if(o){const i=!0!==o&&o.icons||p,s=f&&(null===(e=null==i?void 0:i({status:f,errors:n,warnings:r}))||void 0===e?void 0:e[f]),c=f&&Oe[f];t=!1!==s&&c?a.createElement("span",{className:l()(`${m}-feedback-icon`,`${m}-feedback-icon-${f}`)},s||a.createElement(c,null)):null}const i={status:f||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:t,isFormItemInput:!0};return d&&(i.status=(null!=f?f:h)||"",i.isFormItemInput=g,i.hasFeedback=!!(null!=o?o:b),i.feedbackIcon=void 0!==o?i.feedbackIcon:y),i}),[f,o,d,g,h]);return a.createElement(c.aM.Provider,{value:v},t)}function ke(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:i,errors:s,warnings:d,validateStatus:m,meta:p,hasFeedback:f,hidden:g,children:h,fieldId:b,required:y,isRequired:v,onSubItemMetaChange:$}=e,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),w=`${t}-item`,{requiredMark:C}=a.useContext(c.q3),E=a.useRef(null),O=u(s),S=u(d),k=null!=i,I=!!(k||s.length||d.length),M=!!E.current&&(0,se.Z)(E.current),[j,F]=a.useState(null);(0,ce.Z)((()=>{if(I&&E.current){const e=getComputedStyle(E.current);F(parseInt(e.marginBottom,10))}}),[I,M]);const N=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=e?O:p.errors,n=e?S:p.warnings;return G(t,n,p,"",!!f,m)}(),q=l()(w,n,r,{[`${w}-with-help`]:k||O.length||S.length,[`${w}-has-feedback`]:N&&f,[`${w}-has-success`]:"success"===N,[`${w}-has-warning`]:"warning"===N,[`${w}-has-error`]:"error"===N,[`${w}-is-validating`]:"validating"===N,[`${w}-hidden`]:g});return a.createElement("div",{className:q,style:o,ref:E},a.createElement(de.Z,Object.assign({className:`${w}-row`},(0,ue.Z)(x,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),a.createElement($e,Object.assign({htmlFor:b},e,{requiredMark:C,required:null!=y?y:v,prefixCls:t})),a.createElement(ge,Object.assign({},e,p,{errors:O,warnings:S,prefixCls:t,status:N,help:i,marginBottom:j,onErrorVisibleChanged:e=>{e||F(null)}}),a.createElement(c.qI.Provider,{value:$},a.createElement(Se,{prefixCls:t,meta:p,errors:p.errors,warnings:p.warnings,hasFeedback:f,validateStatus:N},h)))),!!j&&a.createElement("div",{className:`${w}-margin-offset`,style:{marginBottom:-j}}))}const Ie=a.memo((e=>{let{children:t}=e;return t}),((e,t)=>function(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>{const r=e[n],o=t[n];return r===o||"function"==typeof r||"function"==typeof o}))}(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(((e,n)=>e===t.childProps[n])))),Me=function(e){const{name:t,noStyle:n,className:o,dependencies:i,prefixCls:s,shouldUpdate:u,rules:d,children:m,required:p,label:f,messageVariables:g,trigger:h="onChange",validateTrigger:b,hidden:y,help:v}=e,{getPrefixCls:$}=a.useContext(Z.E_),{name:x}=a.useContext(c.q3),w=function(e){if("function"==typeof e)return e;const t=(0,oe.Z)(e);return t.length<=1?t[0]:t}(m),C="function"==typeof w,E=a.useContext(c.qI),{validateTrigger:O}=a.useContext(q.zb),S=void 0!==b?b:O,k=!(null==t),j=$("form",s),F=(0,M.Z)(j),[N,P,R]=I(j,F);(0,re.ln)("Form.Item");const W=a.useContext(q.ZM),_=a.useRef(),[H,T]=function(e){const[t,n]=a.useState({}),r=(0,a.useRef)(null),o=(0,a.useRef)([]),l=(0,a.useRef)(!1);return a.useEffect((()=>(l.current=!1,()=>{l.current=!0,ae.Z.cancel(r.current),r.current=null})),[]),[t,function(e){l.current||(null===r.current&&(o.current=[],r.current=(0,ae.Z)((()=>{r.current=null,n((e=>{let t=e;return o.current.forEach((e=>{t=e(t)})),t}))}))),o.current.push(e))}]}(),[z,A]=(0,ee.Z)((()=>({errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}))),B=(e,t)=>{T((n=>{const o=Object.assign({},n),l=[].concat((0,r.Z)(e.name.slice(0,-1)),(0,r.Z)(t)).join("__SPLIT__");return e.destroy?delete o[l]:o[l]=e,o}))},[D,L]=a.useMemo((()=>{const e=(0,r.Z)(z.errors),t=(0,r.Z)(z.warnings);return Object.values(H).forEach((n=>{e.push.apply(e,(0,r.Z)(n.errors||[])),t.push.apply(t,(0,r.Z)(n.warnings||[]))})),[e,t]}),[H,z.errors,z.warnings]),G=function(){const{itemRef:e}=a.useContext(c.q3),t=a.useRef({});return function(n,r){const o=r&&"object"==typeof r&&r.ref,l=n.join("_");return t.current.name===l&&t.current.originRef===o||(t.current.name=l,t.current.originRef=o,t.current.ref=(0,te.sQ)(e(n),o)),t.current.ref}}();function Y(t,r,i){return n&&!y?a.createElement(Se,{prefixCls:j,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:z,errors:D,warnings:L,noStyle:!0},t):a.createElement(ke,Object.assign({key:"row"},e,{className:l()(o,R,F,P),prefixCls:j,fieldId:r,isRequired:i,errors:D,warnings:L,meta:z,onSubItemMetaChange:B}),t)}if(!k&&!C&&!i)return N(Y(w));let K={};return"string"==typeof f?K.label=f:t&&(K.label=String(t)),g&&(K=Object.assign(Object.assign({},K),g)),N(a.createElement(q.gN,Object.assign({},e,{messageVariables:K,trigger:h,validateTrigger:S,onMetaChange:e=>{const t=null==W?void 0:W.getKey(e.name);if(A(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}:e,!0),n&&!1!==v&&E){let n=e.name;if(e.destroy)n=_.current||n;else if(void 0!==t){const[e,o]=t;n=[e].concat((0,r.Z)(o)),_.current=n}E(e,n)}}}),((n,o,l)=>{const s=V(t).length&&o?o.name:[],c=X(s,x),m=void 0!==p?p:!(!d||!d.some((e=>{if(e&&"object"==typeof e&&e.required&&!e.warningOnly)return!0;if("function"==typeof e){const t=e(l);return t&&t.required&&!t.warningOnly}return!1}))),f=Object.assign({},n);let g=null;if(Array.isArray(w)&&k)g=w;else if(C&&(!u&&!i||k));else if(!i||C||k)if((0,ne.l$)(w)){const t=Object.assign(Object.assign({},w.props),f);if(t.id||(t.id=c),v||D.length>0||L.length>0||e.extra){const n=[];(v||D.length>0)&&n.push(`${c}_help`),e.extra&&n.push(`${c}_extra`),t["aria-describedby"]=n.join(" ")}D.length>0&&(t["aria-invalid"]="true"),m&&(t["aria-required"]="true"),(0,te.Yr)(w)&&(t.ref=G(s,w)),new Set([].concat((0,r.Z)(V(h)),(0,r.Z)(V(S)))).forEach((e=>{t[e]=function(){for(var t,n,r,o,l,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];null===(r=f[e])||void 0===r||(t=r).call.apply(t,[f].concat(a)),null===(l=(o=w.props)[e])||void 0===l||(n=l).call.apply(n,[o].concat(a))}}));const n=[t["aria-required"],t["aria-invalid"],t["aria-describedby"]];g=a.createElement(Ie,{control:f,update:w,childProps:n},(0,ne.Tm)(w,t))}else g=C&&(u||i)&&!k?w(l):w;return Y(g,c,m)})))};Me.useStatus=ie;const je=Me;const Fe=J;Fe.Item=je,Fe.List=e=>{var{prefixCls:t,children:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","children"]);const{getPrefixCls:o}=a.useContext(Z.E_),l=o("form",t),i=a.useMemo((()=>({prefixCls:l,status:"error"})),[l]);return a.createElement(q.aV,Object.assign({},r),((e,t,r)=>a.createElement(c.Rk.Provider,{value:i},n(e.map((e=>Object.assign(Object.assign({},e),{fieldKey:e.key}))),t,{errors:r.errors,warnings:r.warnings}))))},Fe.ErrorList=N,Fe.useForm=K,Fe.useFormInstance=function(){const{form:e}=(0,a.useContext)(c.q3);return e},Fe.useWatch=q.qo,Fe.Provider=c.RV,Fe.create=()=>{};const Ne=Fe}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.0/b2745965020658664265ae2e3dc97ae8/987.lite.js.map
