"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[276],{97276:(e,t,r)=>{r.d(t,{A:()=>V});var o=r(41594),n=r(14322),i=r(41415),s=r(98939),c=r(43012),a=r(65924),l=r.n(a),u=r(15220),d=r(80840),p=r(2464),g=r(58187),m=r(4105),f={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},h=r(81188),y=r(61129),b=r(39017),$=0,k=(0,b.A)();var v=function(e){var t=e.bg,r=e.children;return o.createElement("div",{style:{width:"100%",height:"100%",background:t}},r)};function C(e,t){return Object.keys(e).map((function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)}))}const x=o.forwardRef((function(e,t){var r=e.prefixCls,n=e.color,i=e.gradientId,s=e.radius,c=e.style,a=e.ptg,l=e.strokeLinecap,u=e.strokeWidth,d=e.size,p=e.gapDegree,g=n&&"object"===(0,h.A)(n),m=g?"#FFF":void 0,f=d/2,y=o.createElement("circle",{className:"".concat(r,"-circle-path"),r:s,cx:f,cy:f,stroke:m,strokeLinecap:l,strokeWidth:u,opacity:0===a?0:1,style:c,ref:t});if(!g)return y;var b="".concat(i,"-conic"),$=p?"".concat(180+p/2,"deg"):"0deg",k=C(n,(360-p)/360),x=C(n,1),S="conic-gradient(from ".concat($,", ").concat(k.join(", "),")"),w="linear-gradient(to ".concat(p?"bottom":"top",", ").concat(x.join(", "),")");return o.createElement(o.Fragment,null,o.createElement("mask",{id:b},y),o.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(b,")")},o.createElement(v,{bg:w},o.createElement(v,{bg:S}))))}));var S=function(e,t,r,o,n,i,s,c,a,l){var u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,d=r/100*360*((360-i)/360),p=0===i?0:{bottom:0,top:180,left:90,right:-90}[s],g=(100-o)/100*t;return"round"===a&&100!==o&&(g+=l/2)>=t&&(g=t-.01),{stroke:"string"==typeof c?c:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:g+u,transform:"rotate(".concat(n+d+p,"deg)"),transformOrigin:"".concat(50,"px ").concat(50,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},w=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function E(e){var t=null!=e?e:[];return Array.isArray(t)?t:[t]}const A=function(e){var t,r,n,i,s,c=(0,g.A)((0,g.A)({},f),e),a=c.id,u=c.prefixCls,d=c.steps,b=c.strokeWidth,v=c.trailWidth,C=c.gapDegree,A=void 0===C?0:C,O=c.gapPosition,j=c.trailColor,I=c.strokeLinecap,W=c.style,N=c.className,P=c.strokeColor,D=c.percent,z=(0,m.A)(c,w),M=function(e){var t=o.useState(),r=(0,y.A)(t,2),n=r[0],i=r[1];return o.useEffect((function(){var e;i("rc_progress_".concat((k?(e=$,$+=1):e="TEST_OR_SSR",e)))}),[]),e||n}(a),R="".concat(M,"-gradient"),F=50-b/2,L=2*Math.PI*F,X=A>0?90+A/2:-90,T=L*((360-A)/360),B="object"===(0,h.A)(d)?d:{count:d,gap:2},_=B.count,H=B.gap,q=E(D),Q=E(P),Y=Q.find((function(e){return e&&"object"===(0,h.A)(e)})),G=Y&&"object"===(0,h.A)(Y)?"butt":I,J=S(L,T,0,100,X,A,O,j,G,b),K=(i=(0,o.useRef)([]),s=(0,o.useRef)(null),(0,o.useEffect)((function(){var e=Date.now(),t=!1;i.current.forEach((function(r){if(r){t=!0;var o=r.style;o.transitionDuration=".3s, .3s, .3s, .06s",s.current&&e-s.current<100&&(o.transitionDuration="0s, 0s")}})),t&&(s.current=Date.now())})),i.current);return o.createElement("svg",(0,p.A)({className:l()("".concat(u,"-circle"),N),viewBox:"0 0 ".concat(100," ").concat(100),style:W,id:a,role:"presentation"},z),!_&&o.createElement("circle",{className:"".concat(u,"-circle-trail"),r:F,cx:50,cy:50,stroke:j,strokeLinecap:G,strokeWidth:v||b,style:J}),_?(t=Math.round(_*(q[0]/100)),r=100/_,n=0,new Array(_).fill(null).map((function(e,i){var s=i<=t-1?Q[0]:j,c=s&&"object"===(0,h.A)(s)?"url(#".concat(R,")"):void 0,a=S(L,T,n,r,X,A,O,s,"butt",b,H);return n+=100*(T-a.strokeDashoffset+H)/T,o.createElement("circle",{key:i,className:"".concat(u,"-circle-path"),r:F,cx:50,cy:50,stroke:c,strokeWidth:b,opacity:1,style:a,ref:function(e){K[i]=e}})}))):function(){var e=0;return q.map((function(t,r){var n=Q[r]||Q[Q.length-1],i=S(L,T,e,t,X,A,O,n,G,b);return e+=t,o.createElement(x,{key:r,color:n,ptg:t,radius:F,prefixCls:u,gradientId:R,style:i,strokeLinecap:G,strokeWidth:b,gapDegree:A,ref:function(e){K[r]=e},size:100})})).reverse()}())};var O=r(64715),j=r(42677);function I(e){return!e||e<0?0:e>100?100:e}function W(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const N=(e,t,r)=>{var o,n,i,s;let c=-1,a=-1;if("step"===t){const t=r.steps,o=r.strokeWidth;"string"==typeof e||void 0===e?(c="small"===e?2:14,a=null!=o?o:8):"number"==typeof e?[c,a]=[e,e]:[c=14,a=8]=Array.isArray(e)?e:[e.width,e.height],c*=t}else if("line"===t){const t=null==r?void 0:r.strokeWidth;"string"==typeof e||void 0===e?a=t||("small"===e?6:8):"number"==typeof e?[c,a]=[e,e]:[c=-1,a=8]=Array.isArray(e)?e:[e.width,e.height]}else"circle"!==t&&"dashboard"!==t||("string"==typeof e||void 0===e?[c,a]="small"===e?[60,60]:[120,120]:"number"==typeof e?[c,a]=[e,e]:Array.isArray(e)&&(c=null!==(n=null!==(o=e[0])&&void 0!==o?o:e[1])&&void 0!==n?n:120,a=null!==(s=null!==(i=e[0])&&void 0!==i?i:e[1])&&void 0!==s?s:120));return[c,a]},P=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:n="round",gapPosition:i,gapDegree:s,width:c=120,type:a,children:u,success:d,size:p=c,steps:g}=e,[m,f]=N(p,"circle");let{strokeWidth:h}=e;void 0===h&&(h=Math.max((e=>3/e*100)(m),6));const y={width:m,height:f,fontSize:.15*m+6},b=o.useMemo((()=>s||0===s?s:"dashboard"===a?75:void 0),[s,a]),$=(e=>{let{percent:t,success:r,successPercent:o}=e;const n=I(W({success:r,successPercent:o}));return[n,I(I(t)-n)]})(e),k=i||"dashboard"===a&&"bottom"||void 0,v="[object Object]"===Object.prototype.toString.call(e.strokeColor),C=(e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||j.uy.green,r||null]})({success:d,strokeColor:e.strokeColor}),x=l()(`${t}-inner`,{[`${t}-circle-gradient`]:v}),S=o.createElement(A,{steps:g,percent:g?$[1]:$,strokeWidth:h,trailWidth:h,strokeColor:g?C[1]:C,strokeLinecap:n,trailColor:r,prefixCls:t,gapDegree:b,gapPosition:k}),w=m<=20,E=o.createElement("div",{className:x,style:y},S,!w&&u);return w?o.createElement(O.A,{title:u},E):E};var D=r(78052),z=r(71094),M=r(52146),R=r(63829);const F="--progress-line-stroke-color",L="--progress-percent",X=e=>{const t=e?"100%":"-100%";return new D.Mo(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},T=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,z.dF)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${F})`]},height:"100%",width:`calc(1 / var(${L}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${(0,D.zA)(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:X(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:X(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},B=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},_=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},H=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},q=(0,M.OF)("Progress",(e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=(0,R.h1)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[T(r),B(r),_(r),H(r)]}),(e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:e.fontSize/e.fontSizeSM+"em"})));const Q=(e,t)=>{const{from:r=j.uy.blue,to:o=j.uy.blue,direction:n=("rtl"===t?"to left":"to right")}=e,i=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["from","to","direction"]);if(0!==Object.keys(i).length){const e=`linear-gradient(${n}, ${(e=>{let t=[];return Object.keys(e).forEach((r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})})),t=t.sort(((e,t)=>e.key-t.key)),t.map((e=>{let{key:t,value:r}=e;return`${r} ${t}%`})).join(", ")})(i)})`;return{background:e,[F]:e}}const s=`linear-gradient(${n}, ${r}, ${o})`;return{background:s,[F]:s}},Y=e=>{const{prefixCls:t,direction:r,percent:n,size:i,strokeWidth:s,strokeColor:c,strokeLinecap:a="round",children:u,trailColor:d=null,percentPosition:p,success:g}=e,{align:m,type:f}=p,h=c&&"string"!=typeof c?Q(c,r):{[F]:c,background:c},y="square"===a||"butt"===a?0:void 0,b=null!=i?i:[-1,s||("small"===i?6:8)],[$,k]=N(b,"line",{strokeWidth:s}),v={backgroundColor:d||void 0,borderRadius:y},C=Object.assign(Object.assign({width:`${I(n)}%`,height:k,borderRadius:y},h),{[L]:I(n)/100}),x=W(e),S={width:`${I(x)}%`,height:k,borderRadius:y,backgroundColor:null==g?void 0:g.strokeColor},w={width:$<0?"100%":$},E=o.createElement("div",{className:`${t}-inner`,style:v},o.createElement("div",{className:l()(`${t}-bg`,`${t}-bg-${f}`),style:C},"inner"===f&&u),void 0!==x&&o.createElement("div",{className:`${t}-success-bg`,style:S})),A="outer"===f&&"start"===m,O="outer"===f&&"end"===m;return"outer"===f&&"center"===m?o.createElement("div",{className:`${t}-layout-bottom`},E,u):o.createElement("div",{className:`${t}-outer`,style:w},A&&u,E,O&&u)},G=e=>{const{size:t,steps:r,percent:n=0,strokeWidth:i=8,strokeColor:s,trailColor:c=null,prefixCls:a,children:u}=e,d=Math.round(r*(n/100)),p=null!=t?t:["small"===t?2:14,i],[g,m]=N(p,"step",{steps:r,strokeWidth:i}),f=g/r,h=new Array(r);for(let e=0;e<r;e++){const t=Array.isArray(s)?s[e]:s;h[e]=o.createElement("div",{key:e,className:l()(`${a}-steps-item`,{[`${a}-steps-item-active`]:e<=d-1}),style:{backgroundColor:e<=d-1?t:c,width:f,height:m}})}return o.createElement("div",{className:`${a}-steps-outer`},h,u)};var J=r(26411);const K=["normal","exception","active","success"],U=o.forwardRef(((e,t)=>{const{prefixCls:r,className:a,rootClassName:p,steps:g,strokeColor:m,percent:f=0,size:h="default",showInfo:y=!0,type:b="line",status:$,format:k,style:v,percentPosition:C={}}=e,x=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:S="end",type:w="outer"}=C,E=Array.isArray(m)?m[0]:m,A="string"==typeof m||Array.isArray(m)?m:void 0,O=o.useMemo((()=>{if(E){const e="string"==typeof E?E:Object.values(E)[0];return new J.q(e).isLight()}return!1}),[m]),j=o.useMemo((()=>{var t,r;const o=W(e);return parseInt(void 0!==o?null===(t=null!=o?o:0)||void 0===t?void 0:t.toString():null===(r=null!=f?f:0)||void 0===r?void 0:r.toString(),10)}),[f,e.success,e.successPercent]),D=o.useMemo((()=>!K.includes($)&&j>=100?"success":$||"normal"),[$,j]),{getPrefixCls:z,direction:M,progress:R}=o.useContext(d.QO),F=z("progress",r),[L,X,T]=q(F),B="line"===b,_=B&&!g,H=o.useMemo((()=>{if(!y)return null;const t=W(e);let r;const a=B&&O&&"inner"===w;return"inner"===w||k||"exception"!==D&&"success"!==D?r=(k||(e=>`${e}%`))(I(f),I(t)):"exception"===D?r=B?o.createElement(s.A,null):o.createElement(c.A,null):"success"===D&&(r=B?o.createElement(n.A,null):o.createElement(i.A,null)),o.createElement("span",{className:l()(`${F}-text`,{[`${F}-text-bright`]:a,[`${F}-text-${S}`]:_,[`${F}-text-${w}`]:_}),title:"string"==typeof r?r:void 0},r)}),[y,f,j,D,b,F,k]);let Q;"line"===b?Q=g?o.createElement(G,Object.assign({},e,{strokeColor:A,prefixCls:F,steps:"object"==typeof g?g.count:g}),H):o.createElement(Y,Object.assign({},e,{strokeColor:E,prefixCls:F,direction:M,percentPosition:{align:S,type:w}}),H):"circle"!==b&&"dashboard"!==b||(Q=o.createElement(P,Object.assign({},e,{strokeColor:E,prefixCls:F,progressStatus:D}),H));const U=l()(F,`${F}-status-${D}`,{[`${F}-${"dashboard"===b?"circle":b}`]:"line"!==b,[`${F}-inline-circle`]:"circle"===b&&N(h,"circle")[0]<=20,[`${F}-line`]:_,[`${F}-line-align-${S}`]:_,[`${F}-line-position-${w}`]:_,[`${F}-steps`]:g,[`${F}-show-info`]:y,[`${F}-${h}`]:"string"==typeof h,[`${F}-rtl`]:"rtl"===M},null==R?void 0:R.className,a,p,X,T);return L(o.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},null==R?void 0:R.style),v),className:U,role:"progressbar","aria-valuenow":j},(0,u.A)(x,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),Q))})),V=U}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.5/bee56d6bfd7533ee3766e83c3f0afa63/276.lite.js.map
