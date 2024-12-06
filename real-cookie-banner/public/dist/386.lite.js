"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[386],{91386:(e,t,n)=>{n.d(t,{A:()=>Pe});var r=n(70284),o=n(18539),l=n(41594),i=n(65924),a=n.n(i),s=n(88816),c=n(17826),u=n(51471);function d(e){const[t,n]=l.useState(e);return l.useEffect((()=>{const t=setTimeout((()=>{n(e)}),e.length?0:10);return()=>{clearTimeout(t)}}),[e]),t}var m=n(78052),p=n(71094),f=n(58542),g=n(81170),h=n(63829),b=n(52146);const $=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},v=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${(0,m.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${(0,m.zA)(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),y=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},x=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,p.dF)(e)),v(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},y(e,e.controlHeightSM)),"&-large":Object.assign({},y(e,e.controlHeightLG))})}},w=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,antCls:l,labelRequiredMarkColor:i,labelColor:a,labelFontSize:s,labelHeight:c,labelColonMarginInlineStart:u,labelColonMarginInlineEnd:d,itemMarginBottom:m}=e;return{[t]:Object.assign(Object.assign({},(0,p.dF)(e)),{marginBottom:m,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,\n        &-hidden${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:c,color:a,fontSize:s,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:i,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:u,marginInlineEnd:d},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:f.nF,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},C=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},E=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,\n        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},O=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),S=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:O(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},k=e=>{const{componentCls:t,formItemCls:n,antCls:r}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,\n        ${r}-col-24${n}-label,\n        ${r}-col-xl-24${n}-label`]:O(e)}},[`@media (max-width: ${(0,m.zA)(e.screenXSMax)})`]:[S(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-xs-24${n}-label`]:O(e)}}}],[`@media (max-width: ${(0,m.zA)(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-sm-24${n}-label`]:O(e)}}},[`@media (max-width: ${(0,m.zA)(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-md-24${n}-label`]:O(e)}}},[`@media (max-width: ${(0,m.zA)(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-lg-24${n}-label`]:O(e)}}}}},I=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,\n      ${n}-col-24${t}-label,\n      ${n}-col-xl-24${t}-label`]:O(e),[`@media (max-width: ${(0,m.zA)(e.screenXSMax)})`]:[S(e),{[t]:{[`${n}-col-xs-24${t}-label`]:O(e)}}],[`@media (max-width: ${(0,m.zA)(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:O(e)}},[`@media (max-width: ${(0,m.zA)(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:O(e)}},[`@media (max-width: ${(0,m.zA)(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:O(e)}}}},A=(e,t)=>(0,h.h1)(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),M=(0,b.OF)("Form",((e,t)=>{let{rootPrefixCls:n}=t;const r=A(e,n);return[x(r),w(r),$(r),C(r,r.componentCls),C(r,r.formItemCls),E(r),k(r),I(r),(0,g.A)(r),f.nF]}),(e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0})),{order:-1e3}),j=[];function F(e,t,n){return{key:"string"==typeof e?e:`${t}-${arguments.length>3&&void 0!==arguments[3]?arguments[3]:0}`,error:e,errorStatus:n}}const N=e=>{let{help:t,helpStatus:n,errors:i=j,warnings:m=j,className:p,fieldId:f,onVisibleChanged:g}=e;const{prefixCls:h}=l.useContext(r.hb),b=`${h}-item-explain`,$=(0,u.A)(h),[v,y,x]=M(h,$),w=(0,l.useMemo)((()=>(0,c.A)(h)),[h]),C=d(i),E=d(m),O=l.useMemo((()=>null!=t?[F(t,"help",n)]:[].concat((0,o.A)(C.map(((e,t)=>F(e,"error","error",t)))),(0,o.A)(E.map(((e,t)=>F(e,"warning","warning",t)))))),[t,n,C,E]),S={};return f&&(S.id=`${f}_help`),v(l.createElement(s.Ay,{motionDeadline:w.motionDeadline,motionName:`${h}-show-help`,visible:!!O.length,onVisibleChanged:g},(e=>{const{className:t,style:n}=e;return l.createElement("div",Object.assign({},S,{className:a()(b,t,x,$,p,y),style:n,role:"alert"}),l.createElement(s.aF,Object.assign({keys:O},(0,c.A)(h),{motionName:`${h}-show-help-item`,component:!1}),(e=>{const{key:t,error:n,errorStatus:r,className:o,style:i}=e;return l.createElement("div",{key:t,className:a()(o,{[`${b}-${r}`]:r}),style:i},n)})))})))};var P=n(52619),z=n(80840),W=n(77648),H=n(31754),R=n(5247);const q=e=>"object"==typeof e&&null!=e&&1===e.nodeType,_=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,T=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return _(n.overflowY,t)||_(n.overflowX,t)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},B=(e,t,n,r,o,l,i,a)=>l<e&&i>t||l>e&&i<t?0:l<=e&&a<=n||i>=t&&a>=n?l-e-r:i>t&&a<n||l<e&&a>n?i-t+o:0,D=e=>{const t=e.parentElement;return null==t?e.getRootNode().host||null:t},L=(e,t)=>{var n,r,o,l;if("undefined"==typeof document)return[];const{scrollMode:i,block:a,inline:s,boundary:c,skipOverflowHiddenElements:u}=t,d="function"==typeof c?c:e=>e!==c;if(!q(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,p=[];let f=e;for(;q(f)&&d(f);){if(f=D(f),f===m){p.push(f);break}null!=f&&f===document.body&&T(f)&&!T(document.documentElement)||null!=f&&T(f,u)&&p.push(f)}const g=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,h=null!=(l=null==(o=window.visualViewport)?void 0:o.height)?l:innerHeight,{scrollX:b,scrollY:$}=window,{height:v,width:y,top:x,right:w,bottom:C,left:E}=e.getBoundingClientRect(),{top:O,right:S,bottom:k,left:I}=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);let A="start"===a||"nearest"===a?x-O:"end"===a?C+k:x+v/2-O+k,M="center"===s?E+y/2-I+S:"end"===s?w+S:E-I;const j=[];for(let e=0;e<p.length;e++){const t=p[e],{height:n,width:r,top:o,right:l,bottom:c,left:u}=t.getBoundingClientRect();if("if-needed"===i&&x>=0&&E>=0&&C<=h&&w<=g&&x>=o&&C<=c&&E>=u&&w<=l)return j;const d=getComputedStyle(t),f=parseInt(d.borderLeftWidth,10),O=parseInt(d.borderTopWidth,10),S=parseInt(d.borderRightWidth,10),k=parseInt(d.borderBottomWidth,10);let I=0,F=0;const N="offsetWidth"in t?t.offsetWidth-t.clientWidth-f-S:0,P="offsetHeight"in t?t.offsetHeight-t.clientHeight-O-k:0,z="offsetWidth"in t?0===t.offsetWidth?0:r/t.offsetWidth:0,W="offsetHeight"in t?0===t.offsetHeight?0:n/t.offsetHeight:0;if(m===t)I="start"===a?A:"end"===a?A-h:"nearest"===a?B($,$+h,h,O,k,$+A,$+A+v,v):A-h/2,F="start"===s?M:"center"===s?M-g/2:"end"===s?M-g:B(b,b+g,g,f,S,b+M,b+M+y,y),I=Math.max(0,I+$),F=Math.max(0,F+b);else{I="start"===a?A-o-O:"end"===a?A-c+k+P:"nearest"===a?B(o,c,n,O,k+P,A,A+v,v):A-(o+n/2)+P/2,F="start"===s?M-u-f:"center"===s?M-(u+r/2)+N/2:"end"===s?M-l+S+N:B(u,l,r,f,S+N,M,M+y,y);const{scrollLeft:e,scrollTop:i}=t;I=0===W?0:Math.max(0,Math.min(i+I/W,t.scrollHeight-n/W+P)),F=0===z?0:Math.max(0,Math.min(e+F/z,t.scrollWidth-r/z+N)),A+=i-I,M+=e-F}j.push({el:t,top:I,left:F})}return j};var V=n(46403);const X=["parentNode"],K="form_item";function G(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function Y(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:X.includes(n)?`${K}_${n}`:n}function Q(e,t,n,r,o,l){let i=r;return void 0!==l?i=l:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function U(e){return G(e).join("_")}function J(e){const[t]=(0,P.mN)(),n=l.useRef({}),r=l.useMemo((()=>null!=e?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:e=>t=>{const r=U(e);t?n.current[r]=t:delete n.current[r]}},scrollToField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(e,t){const n=t.getFieldInstance(e),r=(0,V.rb)(n);if(r)return r;const o=Y(G(e),t.__INTERNAL__.name);return o?document.getElementById(o):void 0}(e,r);n&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const n=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if((e=>"object"==typeof e&&"function"==typeof e.behavior)(t))return t.behavior(L(e,t));const r="boolean"==typeof t||null==t?void 0:t.behavior;for(const{el:o,top:l,left:i}of L(e,(e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"})(t))){const e=l-n.top+n.bottom,t=i-n.left+n.right;o.scroll({top:e,left:t,behavior:r})}}(n,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:e=>{const t=U(e);return n.current[t]}})),[e,t]);return[r]}var Z=n(99410);const ee=(e,t)=>{const n=l.useContext(W.A),{getPrefixCls:o,direction:i,form:s}=l.useContext(z.QO),{prefixCls:c,className:d,rootClassName:m,size:p,disabled:f=n,form:g,colon:h,labelAlign:b,labelWrap:$,labelCol:v,wrapperCol:y,hideRequiredMark:x,layout:w="horizontal",scrollToFirstError:C,requiredMark:E,onFinishFailed:O,name:S,style:k,feedbackIcons:I,variant:A}=e,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),F=(0,H.A)(p),N=l.useContext(Z.A),q=(0,l.useMemo)((()=>void 0!==E?E:!x&&(!s||void 0===s.requiredMark||s.requiredMark)),[x,E,s]),_=null!=h?h:null==s?void 0:s.colon,T=o("form",c),B=(0,u.A)(T),[D,L,V]=M(T,B),X=a()(T,`${T}-${w}`,{[`${T}-hide-required-mark`]:!1===q,[`${T}-rtl`]:"rtl"===i,[`${T}-${F}`]:F},V,B,L,null==s?void 0:s.className,d,m),[K]=J(g),{__INTERNAL__:G}=K;G.name=S;const Y=(0,l.useMemo)((()=>({name:S,labelAlign:b,labelCol:v,labelWrap:$,wrapperCol:y,vertical:"vertical"===w,colon:_,requiredMark:q,itemRef:G.itemRef,form:K,feedbackIcons:I})),[S,b,v,y,w,_,q,K,I]),Q=l.useRef(null);l.useImperativeHandle(t,(()=>{var e;return Object.assign(Object.assign({},K),{nativeElement:null===(e=Q.current)||void 0===e?void 0:e.nativeElement})}));const U=(e,t)=>{if(e){let n={block:"nearest"};"object"==typeof e&&(n=e),K.scrollToField(t,n)}};return D(l.createElement(r.Pp.Provider,{value:A},l.createElement(W.X,{disabled:f},l.createElement(R.A.Provider,{value:F},l.createElement(r.Op,{validateMessages:N},l.createElement(r.cK.Provider,{value:Y},l.createElement(P.Ay,Object.assign({id:S},j,{name:S,onFinishFailed:e=>{if(null==O||O(e),e.errorFields.length){const t=e.errorFields[0].name;if(void 0!==C)return void U(C,t);s&&void 0!==s.scrollToFirstError&&U(s.scrollToFirstError,t)}},form:K,ref:Q,style:Object.assign(Object.assign({},null==s?void 0:s.style),k),className:X}))))))))},te=l.forwardRef(ee);var ne=n(94332),re=n(2620),oe=n(79045),le=n(82606),ie=n(51963);const ae=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,l.useContext)(r.$W);return{status:e,errors:t,warnings:n}};ae.Context=r.$W;const se=ae;var ce=n(32664),ue=n(23948),de=n(78294),me=n(15220),pe=n(86173),fe=n(78315);const ge=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},he=(0,b.bf)(["Form","item-item"],((e,t)=>{let{rootPrefixCls:n}=t;const r=A(e,n);return[ge(r)]})),be=e=>{const{prefixCls:t,status:n,wrapperCol:o,children:i,errors:s,warnings:c,_internalItemRender:u,extra:d,help:m,fieldId:p,marginBottom:f,onErrorVisibleChanged:g}=e,h=`${t}-item`,b=l.useContext(r.cK),$=o||b.wrapperCol||{},v=a()(`${h}-control`,$.className),y=l.useMemo((()=>Object.assign({},b)),[b]);delete y.labelCol,delete y.wrapperCol;const x=l.createElement("div",{className:`${h}-control-input`},l.createElement("div",{className:`${h}-control-input-content`},i)),w=l.useMemo((()=>({prefixCls:t,status:n})),[t,n]),C=null!==f||s.length||c.length?l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(r.hb.Provider,{value:w},l.createElement(N,{fieldId:p,errors:s,warnings:c,help:m,helpStatus:n,className:`${h}-explain-connected`,onVisibleChanged:g})),!!f&&l.createElement("div",{style:{width:0,height:f}})):null,E={};p&&(E.id=`${p}_extra`);const O=d?l.createElement("div",Object.assign({},E,{className:`${h}-extra`}),d):null,S=u&&"pro_table_render"===u.mark&&u.render?u.render(e,{input:x,errorList:C,extra:O}):l.createElement(l.Fragment,null,x,C,O);return l.createElement(r.cK.Provider,{value:y},l.createElement(fe.A,Object.assign({},$,{className:v}),S),l.createElement(he,{prefixCls:t}))};var $e=n(12548),ve=n(22122),ye=n(81396),xe=n(64715);const we=e=>{let{prefixCls:t,label:n,htmlFor:o,labelCol:i,labelAlign:s,colon:c,required:u,requiredMark:d,tooltip:m,vertical:p}=e;var f;const[g]=(0,ve.A)("Form"),{labelAlign:h,labelCol:b,labelWrap:$,colon:v}=l.useContext(r.cK);if(!n)return null;const y=i||b||{},x=s||h,w=`${t}-item-label`,C=a()(w,"left"===x&&`${w}-left`,y.className,{[`${w}-wrap`]:!!$});let E=n;const O=!0===c||!1!==v&&!1!==c;O&&!p&&"string"==typeof n&&""!==n.trim()&&(E=n.replace(/[:|：]\s*$/,""));const S=function(e){return e?"object"!=typeof e||l.isValidElement(e)?{title:e}:e:null}(m);if(S){const{icon:e=l.createElement($e.A,null)}=S,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(S,["icon"]),r=l.createElement(xe.A,Object.assign({},n),l.cloneElement(e,{className:`${t}-item-tooltip`,title:"",onClick:e=>{e.preventDefault()},tabIndex:null}));E=l.createElement(l.Fragment,null,E,r)}const k="optional"===d,I="function"==typeof d;I?E=d(E,{required:!!u}):k&&!u&&(E=l.createElement(l.Fragment,null,E,l.createElement("span",{className:`${t}-item-optional`,title:""},(null==g?void 0:g.optional)||(null===(f=ye.A.Form)||void 0===f?void 0:f.optional))));const A=a()({[`${t}-item-required`]:u,[`${t}-item-required-mark-optional`]:k||I,[`${t}-item-no-colon`]:!O});return l.createElement(fe.A,Object.assign({},y,{className:C}),l.createElement("label",{htmlFor:o,className:A,title:"string"==typeof n?n:""},E))};var Ce=n(14322),Ee=n(98939),Oe=n(17989),Se=n(9066);const ke={success:Ce.A,warning:Oe.A,error:Ee.A,validating:Se.A};function Ie(e){let{children:t,errors:n,warnings:o,hasFeedback:i,validateStatus:s,prefixCls:c,meta:u,noStyle:d}=e;const m=`${c}-item`,{feedbackIcons:p}=l.useContext(r.cK),f=Q(n,o,u,null,!!i,s),{isFormItemInput:g,status:h,hasFeedback:b,feedbackIcon:$}=l.useContext(r.$W),v=l.useMemo((()=>{var e;let t;if(i){const r=!0!==i&&i.icons||p,s=f&&(null===(e=null==r?void 0:r({status:f,errors:n,warnings:o}))||void 0===e?void 0:e[f]),c=f&&ke[f];t=!1!==s&&c?l.createElement("span",{className:a()(`${m}-feedback-icon`,`${m}-feedback-icon-${f}`)},s||l.createElement(c,null)):null}const r={status:f||"",errors:n,warnings:o,hasFeedback:!!i,feedbackIcon:t,isFormItemInput:!0};return d&&(r.status=(null!=f?f:h)||"",r.isFormItemInput=g,r.hasFeedback=!!(null!=i?i:b),r.feedbackIcon=void 0!==i?r.feedbackIcon:$),r}),[f,i,d,g,h]);return l.createElement(r.$W.Provider,{value:v},t)}function Ae(e){const{prefixCls:t,className:n,rootClassName:o,style:i,help:s,errors:c,warnings:u,validateStatus:m,meta:p,hasFeedback:f,hidden:g,children:h,fieldId:b,required:$,isRequired:v,onSubItemMetaChange:y,layout:x}=e,w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),C=`${t}-item`,{requiredMark:E,vertical:O}=l.useContext(r.cK),S=O||"vertical"===x,k=l.useRef(null),I=d(c),A=d(u),M=null!=s,j=!!(M||c.length||u.length),F=!!k.current&&(0,ue.A)(k.current),[N,P]=l.useState(null);(0,de.A)((()=>{if(j&&k.current){const e=getComputedStyle(k.current);P(parseInt(e.marginBottom,10))}}),[j,F]);const z=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Q(e?I:p.errors,e?A:p.warnings,p,"",!!f,m)}(),W=a()(C,n,o,{[`${C}-with-help`]:M||I.length||A.length,[`${C}-has-feedback`]:z&&f,[`${C}-has-success`]:"success"===z,[`${C}-has-warning`]:"warning"===z,[`${C}-has-error`]:"error"===z,[`${C}-is-validating`]:"validating"===z,[`${C}-hidden`]:g,[`${C}-${x}`]:x});return l.createElement("div",{className:W,style:i,ref:k},l.createElement(pe.A,Object.assign({className:`${C}-row`},(0,me.A)(w,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(we,Object.assign({htmlFor:b},e,{requiredMark:E,required:null!=$?$:v,prefixCls:t,vertical:S})),l.createElement(be,Object.assign({},e,p,{errors:I,warnings:A,prefixCls:t,status:z,help:s,marginBottom:N,onErrorVisibleChanged:e=>{e||P(null)}}),l.createElement(r.jC.Provider,{value:y},l.createElement(Ie,{prefixCls:t,meta:p,errors:p.errors,warnings:p.warnings,hasFeedback:f,validateStatus:z},h)))),!!N&&l.createElement("div",{className:`${C}-margin-offset`,style:{marginBottom:-N}}))}const Me=l.memo((e=>{let{children:t}=e;return t}),((e,t)=>function(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>{const r=e[n],o=t[n];return r===o||"function"==typeof r||"function"==typeof o}))}(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(((e,n)=>e===t.childProps[n])))),je=function(e){const{name:t,noStyle:n,className:i,dependencies:s,prefixCls:c,shouldUpdate:d,rules:m,children:p,required:f,label:g,messageVariables:h,trigger:b="onChange",validateTrigger:$,hidden:v,help:y,layout:x}=e,{getPrefixCls:w}=l.useContext(z.QO),{name:C}=l.useContext(r.cK),E=function(e){if("function"==typeof e)return e;const t=(0,ie.A)(e);return t.length<=1?t[0]:t}(p),O="function"==typeof E,S=l.useContext(r.jC),{validateTrigger:k}=l.useContext(P._z),I=void 0!==$?$:k,A=!(null==t),j=w("form",c),F=(0,u.A)(j),[N,W,H]=M(j,F);(0,le.rJ)("Form.Item");const R=l.useContext(P.EF),q=l.useRef(),[_,T]=function(e){const[t,n]=l.useState({}),r=(0,l.useRef)(null),o=(0,l.useRef)([]),i=(0,l.useRef)(!1);return l.useEffect((()=>(i.current=!1,()=>{i.current=!0,ce.A.cancel(r.current),r.current=null})),[]),[t,function(e){i.current||(null===r.current&&(o.current=[],r.current=(0,ce.A)((()=>{r.current=null,n((e=>{let t=e;return o.current.forEach((e=>{t=e(t)})),t}))}))),o.current.push(e))}]}(),[B,D]=(0,ne.A)((()=>({errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}))),L=(e,t)=>{T((n=>{const r=Object.assign({},n),l=[].concat((0,o.A)(e.name.slice(0,-1)),(0,o.A)(t)).join("__SPLIT__");return e.destroy?delete r[l]:r[l]=e,r}))},[V,X]=l.useMemo((()=>{const e=(0,o.A)(B.errors),t=(0,o.A)(B.warnings);return Object.values(_).forEach((n=>{e.push.apply(e,(0,o.A)(n.errors||[])),t.push.apply(t,(0,o.A)(n.warnings||[]))})),[e,t]}),[_,B.errors,B.warnings]),K=function(){const{itemRef:e}=l.useContext(r.cK),t=l.useRef({});return function(n,r){const o=r&&"object"==typeof r&&r.ref,l=n.join("_");return t.current.name===l&&t.current.originRef===o||(t.current.name=l,t.current.originRef=o,t.current.ref=(0,re.K4)(e(n),o)),t.current.ref}}();function Q(t,r,o){return n&&!v?l.createElement(Ie,{prefixCls:j,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:B,errors:V,warnings:X,noStyle:!0},t):l.createElement(Ae,Object.assign({key:"row"},e,{className:a()(i,H,F,W),prefixCls:j,fieldId:r,isRequired:o,errors:V,warnings:X,meta:B,onSubItemMetaChange:L,layout:x}),t)}if(!A&&!O&&!s)return N(Q(E));let U={};return"string"==typeof g?U.label=g:t&&(U.label=String(t)),h&&(U=Object.assign(Object.assign({},U),h)),N(l.createElement(P.D0,Object.assign({},e,{messageVariables:U,trigger:b,validateTrigger:I,onMetaChange:e=>{const t=null==R?void 0:R.getKey(e.name);if(D(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}:e,!0),n&&!1!==y&&S){let n=e.name;if(e.destroy)n=q.current||n;else if(void 0!==t){const[e,r]=t;n=[e].concat((0,o.A)(r)),q.current=n}S(e,n)}}}),((n,r,i)=>{const a=G(t).length&&r?r.name:[],c=Y(a,C),u=void 0!==f?f:!(!m||!m.some((e=>{if(e&&"object"==typeof e&&e.required&&!e.warningOnly)return!0;if("function"==typeof e){const t=e(i);return t&&t.required&&!t.warningOnly}return!1}))),p=Object.assign({},n);let g=null;if(Array.isArray(E)&&A)g=E;else if(O&&(!d&&!s||A));else if(!s||O||A)if(l.isValidElement(E)){const t=Object.assign(Object.assign({},E.props),p);if(t.id||(t.id=c),y||V.length>0||X.length>0||e.extra){const n=[];(y||V.length>0)&&n.push(`${c}_help`),e.extra&&n.push(`${c}_extra`),t["aria-describedby"]=n.join(" ")}V.length>0&&(t["aria-invalid"]="true"),u&&(t["aria-required"]="true"),(0,re.f3)(E)&&(t.ref=K(a,E)),new Set([].concat((0,o.A)(G(b)),(0,o.A)(G(I)))).forEach((e=>{t[e]=function(){for(var t,n,r,o,l,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];null===(r=p[e])||void 0===r||(t=r).call.apply(t,[p].concat(a)),null===(l=(o=E.props)[e])||void 0===l||(n=l).call.apply(n,[o].concat(a))}}));const n=[t["aria-required"],t["aria-invalid"],t["aria-describedby"]];g=l.createElement(Me,{control:p,update:E,childProps:n},(0,oe.Ob)(E,t))}else g=O&&(d||s)&&!A?E(i):E;return Q(g,c,u)})))};je.useStatus=se;const Fe=je;const Ne=te;Ne.Item=Fe,Ne.List=e=>{var{prefixCls:t,children:n}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","children"]);const{getPrefixCls:i}=l.useContext(z.QO),a=i("form",t),s=l.useMemo((()=>({prefixCls:a,status:"error"})),[a]);return l.createElement(P.B8,Object.assign({},o),((e,t,o)=>l.createElement(r.hb.Provider,{value:s},n(e.map((e=>Object.assign(Object.assign({},e),{fieldKey:e.key}))),t,{errors:o.errors,warnings:o.warnings}))))},Ne.ErrorList=N,Ne.useForm=J,Ne.useFormInstance=function(){const{form:e}=(0,l.useContext)(r.cK);return e},Ne.useWatch=P.FH,Ne.Provider=r.Op,Ne.create=()=>{};const Pe=Ne}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.4/bc0b516ee9e1230813412a3d1876b5fd/386.lite.js.map
