"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[85],{39630:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(46270),a=n(87363);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var l=n(51928),i=function(e,t){return a.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:o}))};const c=a.forwardRef(i)},81605:(e,t,n)=>{n.d(t,{Z:()=>ee});var r=n(87363),a=n.n(r),o=n(40914),l=n.n(o),i=n(40985),c=n(1520),u=n(46898),s=n(24758),d=n(11616),f=n(14586),v=n(91552),h=n(89897);const m=r.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var b=n(46270),g=n(44236),p=n(16048);function C(e,t,n){return(e-t)/(n-t)}function k(e,t,n,r){var a=C(t,n,r),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function S(e,t){return Array.isArray(e)?e[t]:e}var y=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete"],x=r.forwardRef((function(e,t){var n,a,o=e.prefixCls,u=e.value,s=e.valueIndex,d=e.onStartMove,f=e.style,v=e.render,h=e.dragging,C=e.onOffsetChange,x=e.onChangeComplete,Z=(0,g.Z)(e,y),E=r.useContext(m),$=E.min,M=E.max,w=E.direction,B=E.disabled,H=E.keyboard,O=E.range,z=E.tabIndex,P=E.ariaLabelForHandle,L=E.ariaLabelledByForHandle,F=E.ariaValueTextFormatterForHandle,D=E.styles,N=E.classNames,R="".concat(o,"-handle"),I=function(e){B||d(e,s)},W=k(w,u,$,M),j=r.createElement("div",(0,b.Z)({ref:t,className:l()(R,(n={},(0,c.Z)(n,"".concat(R,"-").concat(s+1),O),(0,c.Z)(n,"".concat(R,"-dragging"),h),n),N.handle),style:(0,i.Z)((0,i.Z)((0,i.Z)({},W),f),D.handle),onMouseDown:I,onTouchStart:I,onKeyDown:function(e){if(!B&&H){var t=null;switch(e.which||e.keyCode){case p.Z.LEFT:t="ltr"===w||"btt"===w?-1:1;break;case p.Z.RIGHT:t="ltr"===w||"btt"===w?1:-1;break;case p.Z.UP:t="ttb"!==w?1:-1;break;case p.Z.DOWN:t="ttb"!==w?-1:1;break;case p.Z.HOME:t="min";break;case p.Z.END:t="max";break;case p.Z.PAGE_UP:t=2;break;case p.Z.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),C(t,s))}},onKeyUp:function(e){switch(e.which||e.keyCode){case p.Z.LEFT:case p.Z.RIGHT:case p.Z.UP:case p.Z.DOWN:case p.Z.HOME:case p.Z.END:case p.Z.PAGE_UP:case p.Z.PAGE_DOWN:null==x||x()}},tabIndex:B?null:S(z,s),role:"slider","aria-valuemin":$,"aria-valuemax":M,"aria-valuenow":u,"aria-disabled":B,"aria-label":S(P,s),"aria-labelledby":S(L,s),"aria-valuetext":null===(a=S(F,s))||void 0===a?void 0:a(u),"aria-orientation":"ltr"===w||"rtl"===w?"horizontal":"vertical"},Z));return v&&(j=v(j,{index:s,prefixCls:o,value:u,dragging:h})),j}));const Z=x;var E=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],$=r.forwardRef((function(e,t){var n=e.prefixCls,a=e.style,o=e.onStartMove,l=e.onOffsetChange,i=e.values,c=e.handleRender,u=e.draggingIndex,s=(0,g.Z)(e,E),d=r.useRef({});return r.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=d.current[e])||void 0===t||t.focus()}}})),r.createElement(r.Fragment,null,i.map((function(e,t){return r.createElement(Z,(0,b.Z)({ref:function(e){e?d.current[t]=e:delete d.current[t]},dragging:u===t,prefixCls:n,style:S(a,t),key:t,value:e,valueIndex:t,onStartMove:o,onOffsetChange:l,render:c},s))})))}));const M=$;function w(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function B(e){var t=e.prefixCls,n=e.style,a=e.children,o=e.value,u=e.onClick,s=r.useContext(m),d=s.min,f=s.max,v=s.direction,h=s.includedStart,b=s.includedEnd,g=s.included,p="".concat(t,"-text"),C=k(v,o,d,f);return r.createElement("span",{className:l()(p,(0,c.Z)({},"".concat(p,"-active"),g&&h<=o&&o<=b)),style:(0,i.Z)((0,i.Z)({},C),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){u(o)}},a)}function H(e){var t=e.prefixCls,n=e.marks,a=e.onClick,o="".concat(t,"-mark");return n.length?r.createElement("div",{className:o},n.map((function(e){var t=e.value,n=e.style,l=e.label;return r.createElement(B,{key:t,prefixCls:o,style:n,value:t,onClick:a},l)}))):null}function O(e){var t=e.prefixCls,n=e.value,a=e.style,o=e.activeStyle,u=r.useContext(m),s=u.min,d=u.max,f=u.direction,v=u.included,h=u.includedStart,b=u.includedEnd,g="".concat(t,"-dot"),p=v&&h<=n&&n<=b,C=(0,i.Z)((0,i.Z)({},k(f,n,s,d)),"function"==typeof a?a(n):a);return p&&(C=(0,i.Z)((0,i.Z)({},C),"function"==typeof o?o(n):o)),r.createElement("span",{className:l()(g,(0,c.Z)({},"".concat(g,"-active"),p)),style:C})}function z(e){var t=e.prefixCls,n=e.marks,a=e.dots,o=e.style,l=e.activeStyle,i=r.useContext(m),c=i.min,u=i.max,s=i.step,d=r.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),a&&null!==s)for(var t=c;t<=u;)e.add(t),t+=s;return Array.from(e)}),[c,u,s,a,n]);return r.createElement("div",{className:"".concat(t,"-step")},d.map((function(e){return r.createElement(O,{prefixCls:t,key:e,value:e,style:o,activeStyle:l})})))}function P(e){var t,n=e.prefixCls,a=e.style,o=e.start,u=e.end,s=e.index,d=e.onStartMove,f=e.replaceCls,v=r.useContext(m),h=v.direction,b=v.min,g=v.max,p=v.disabled,k=v.range,S=v.classNames,y="".concat(n,"-track"),x=C(o,b,g),Z=C(u,b,g),E=function(e){!p&&d&&d(e,-1)},$={};switch(h){case"rtl":$.right="".concat(100*x,"%"),$.width="".concat(100*Z-100*x,"%");break;case"btt":$.bottom="".concat(100*x,"%"),$.height="".concat(100*Z-100*x,"%");break;case"ttb":$.top="".concat(100*x,"%"),$.height="".concat(100*Z-100*x,"%");break;default:$.left="".concat(100*x,"%"),$.width="".concat(100*Z-100*x,"%")}var M=f||l()(y,(t={},(0,c.Z)(t,"".concat(y,"-").concat(s+1),null!==s&&k),(0,c.Z)(t,"".concat(n,"-track-draggable"),d),t),S.track);return r.createElement("div",{className:M,style:(0,i.Z)((0,i.Z)({},$),a),onMouseDown:E,onTouchStart:E})}function L(e){var t=e.prefixCls,n=e.style,a=e.values,o=e.startPoint,c=e.onStartMove,u=r.useContext(m),s=u.included,d=u.range,f=u.min,v=u.styles,h=u.classNames,b=r.useMemo((function(){if(!d){if(0===a.length)return[];var e=null!=o?o:f,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n}),[a,d,o,f]),g=null;return(h.tracks||v.tracks)&&(g=r.createElement(P,{index:null,prefixCls:t,start:b[0].start,end:b[b.length-1].end,replaceCls:l()(h.tracks,"".concat(t,"-tracks")),style:v.tracks})),s?r.createElement(r.Fragment,null,g,b.map((function(e,a){var o=e.start,l=e.end;return r.createElement(P,{index:a,prefixCls:t,style:(0,i.Z)((0,i.Z)({},S(n,a)),v.track),start:o,end:l,key:a,onStartMove:c})}))):null}var F=r.forwardRef((function(e,t){var n,a=e.prefixCls,o=void 0===a?"rc-slider":a,b=e.className,g=e.style,p=e.classNames,C=e.styles,k=e.disabled,S=void 0!==k&&k,y=e.keyboard,x=void 0===y||y,Z=e.autoFocus,E=e.onFocus,$=e.onBlur,B=e.min,O=void 0===B?0:B,P=e.max,F=void 0===P?100:P,D=e.step,N=void 0===D?1:D,R=e.value,I=e.defaultValue,W=e.range,j=e.count,A=e.onChange,q=e.onBeforeChange,T=e.onAfterChange,X=e.onChangeComplete,G=e.allowCross,Y=void 0===G||G,V=e.pushable,_=void 0!==V&&V,U=e.draggableTrack,K=e.reverse,Q=e.vertical,J=e.included,ee=void 0===J||J,te=e.startPoint,ne=e.trackStyle,re=e.handleStyle,ae=e.railStyle,oe=e.dotStyle,le=e.activeDotStyle,ie=e.marks,ce=e.dots,ue=e.handleRender,se=e.tabIndex,de=void 0===se?0:se,fe=e.ariaLabelForHandle,ve=e.ariaLabelledByForHandle,he=e.ariaValueTextFormatterForHandle,me=r.useRef(),be=r.useRef(),ge=r.useMemo((function(){return Q?K?"ttb":"btt":K?"rtl":"ltr"}),[K,Q]),pe=r.useMemo((function(){return isFinite(O)?O:0}),[O]),Ce=r.useMemo((function(){return isFinite(F)?F:100}),[F]),ke=r.useMemo((function(){return null!==N&&N<=0?1:N}),[N]),Se=r.useMemo((function(){return"boolean"==typeof _?!!_&&ke:_>=0&&_}),[_,ke]),ye=r.useMemo((function(){return Object.keys(ie||{}).map((function(e){var t=ie[e],n={value:Number(e)};return t&&"object"===(0,d.Z)(t)&&!r.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ie]),xe=function(e,t,n,a,o,l){var i=r.useCallback((function(n){var r=isFinite(n);return r=Math.min(t,n),Math.max(e,r)}),[e,t]),c=r.useCallback((function(r){if(null!==n){var a=e+Math.round((i(r)-e)/n)*n,o=function(e){return(String(e).split(".")[1]||"").length},l=Math.max(o(n),o(t),o(e)),c=Number(a.toFixed(l));return e<=c&&c<=t?c:null}return null}),[n,e,t,i]),s=r.useCallback((function(r){var o=i(r),l=a.map((function(e){return e.value}));null!==n&&l.push(c(r)),l.push(e,t);var u=l[0],s=t-e;return l.forEach((function(e){var t=Math.abs(o-e);t<=s&&(u=e,s=t)})),u}),[e,t,a,n,i,c]),d=function r(o,l,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var d,f=o[i],v=f+l,h=[];a.forEach((function(e){h.push(e.value)})),h.push(e,t),h.push(c(f));var m=l>0?1:-1;"unit"===s?h.push(c(f+m*n)):h.push(c(v)),h=h.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=f:e>=f})),"unit"===s&&(h=h.filter((function(e){return e!==f})));var b="unit"===s?f:v;d=h[0];var g=Math.abs(d-b);if(h.forEach((function(e){var t=Math.abs(e-b);t<g&&(d=e,g=t)})),void 0===d)return l<0?e:t;if("dist"===s)return d;if(Math.abs(l)>1){var p=(0,u.Z)(o);return p[i]=d,r(p,l-m,i,s)}return d}return"min"===l?e:"max"===l?t:void 0},f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],o=d(e,t,n,r);return{value:o,changed:o!==a}},v=function(e){return null===l&&0===e||"number"==typeof l&&e<l};return[s,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e.map(s),i=a[n],c=d(a,t,n,r);if(a[n]=c,!1===o){var u=l||0;n>0&&a[n-1]!==i&&(a[n]=Math.max(a[n],a[n-1]+u)),n<a.length-1&&a[n+1]!==i&&(a[n]=Math.min(a[n],a[n+1]-u))}else if("number"==typeof l||null===l){for(var h=n+1;h<a.length;h+=1)for(var m=!0;v(a[h]-a[h-1])&&m;){var b=f(a,1,h);a[h]=b.value,m=b.changed}for(var g=n;g>0;g-=1)for(var p=!0;v(a[g]-a[g-1])&&p;){var C=f(a,-1,g-1);a[g-1]=C.value,p=C.changed}for(var k=a.length-1;k>0;k-=1)for(var S=!0;v(a[k]-a[k-1])&&S;){var y=f(a,-1,k-1);a[k-1]=y.value,S=y.changed}for(var x=0;x<a.length-1;x+=1)for(var Z=!0;v(a[x+1]-a[x])&&Z;){var E=f(a,1,x+1);a[x+1]=E.value,Z=E.changed}}return{value:a[n],values:a}}]}(pe,Ce,ke,ye,Y,Se),Ze=(0,s.Z)(xe,2),Ee=Ze[0],$e=Ze[1],Me=(0,f.Z)(I,{value:R}),we=(0,s.Z)(Me,2),Be=we[0],He=we[1],Oe=r.useMemo((function(){var e=null==Be?[]:Array.isArray(Be)?Be:[Be],t=(0,s.Z)(e,1)[0],n=null===Be?[]:[void 0===t?pe:t];if(W){if(n=(0,u.Z)(e),j||void 0===Be){var r=j>=0?j+1:2;for(n=n.slice(0,r);n.length<r;){var a;n.push(null!==(a=n[n.length-1])&&void 0!==a?a:pe)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=Ee(e)})),n}),[Be,W,pe,j,Ee]),ze=r.useRef(Oe);ze.current=Oe;var Pe=function(e){return W?e:e[0]},Le=function(e){var t=(0,u.Z)(e).sort((function(e,t){return e-t}));A&&!(0,v.Z)(t,ze.current,!0)&&A(Pe(t)),He(t)},Fe=function(){null==T||T(Pe(ze.current)),(0,h.ZP)(!T,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==X||X(Pe(ze.current))},De=function(e,t,n,a,o,l,i,c,d){var f=r.useState(null),v=(0,s.Z)(f,2),h=v[0],m=v[1],b=r.useState(-1),g=(0,s.Z)(b,2),p=g[0],C=g[1],k=r.useState(n),S=(0,s.Z)(k,2),y=S[0],x=S[1],Z=r.useState(n),E=(0,s.Z)(Z,2),$=E[0],M=E[1],B=r.useRef(null),H=r.useRef(null);r.useEffect((function(){-1===p&&x(n)}),[n,p]),r.useEffect((function(){return function(){document.removeEventListener("mousemove",B.current),document.removeEventListener("mouseup",H.current),document.removeEventListener("touchmove",B.current),document.removeEventListener("touchend",H.current)}}),[]);var O=function(e,t){y.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&m(t),x(e),i(e))},z=function(e,t){if(-1===e){var n=$[0],r=$[$.length-1],i=a-n,c=o-r,s=t*(o-a);s=Math.max(s,i),s=Math.min(s,c);var f=l(n+s);s=f-n;var v=$.map((function(e){return e+s}));O(v)}else{var h=(o-a)*t,m=(0,u.Z)(y);m[e]=$[e];var b=d(m,h,e,"dist");O(b.values,b.value)}},P=r.useRef(z);P.current=z;var L=r.useMemo((function(){var e=(0,u.Z)(n).sort((function(e,t){return e-t})),t=(0,u.Z)(y).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?y:n}),[n,y]);return[p,h,L,function(r,a,o){r.stopPropagation();var l=o||n,i=l[a];C(a),m(i),M(l);var u=w(r),s=u.pageX,d=u.pageY,f=function(n){n.preventDefault();var r,o=w(n),l=o.pageX,i=o.pageY,c=l-s,u=i-d,f=e.current.getBoundingClientRect(),v=f.width,h=f.height;switch(t){case"btt":r=-u/h;break;case"ttb":r=u/h;break;case"rtl":r=-c/v;break;default:r=c/v}P.current(a,r)},v=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",f),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",f),B.current=null,H.current=null,C(-1),c()};document.addEventListener("mouseup",v),document.addEventListener("mousemove",f),document.addEventListener("touchend",v),document.addEventListener("touchmove",f),B.current=f,H.current=v}]}(be,ge,Oe,pe,Ce,Ee,Le,Fe,$e),Ne=(0,s.Z)(De,4),Re=Ne[0],Ie=Ne[1],We=Ne[2],je=Ne[3],Ae=function(e,t){if(!S){var n=0,r=Ce-pe;Oe.forEach((function(t,a){var o=Math.abs(e-t);o<=r&&(r=o,n=a)}));var a=(0,u.Z)(Oe);a[n]=e,W&&!Oe.length&&void 0===j&&a.push(e),null==q||q(Pe(a)),Le(a),t&&je(t,n,a)}},qe=r.useState(null),Te=(0,s.Z)(qe,2),Xe=Te[0],Ge=Te[1];r.useEffect((function(){if(null!==Xe){var e=Oe.indexOf(Xe);e>=0&&me.current.focus(e)}Ge(null)}),[Xe]);var Ye=r.useMemo((function(){return(!U||null!==ke)&&U}),[U,ke]),Ve=function(e,t){je(e,t),null==q||q(Pe(ze.current))},_e=-1!==Re;r.useEffect((function(){if(!_e){var e=Oe.lastIndexOf(Ie);me.current.focus(e)}}),[_e]);var Ue=r.useMemo((function(){return(0,u.Z)(We).sort((function(e,t){return e-t}))}),[We]),Ke=r.useMemo((function(){return W?[Ue[0],Ue[Ue.length-1]]:[pe,Ue[0]]}),[Ue,W,pe]),Qe=(0,s.Z)(Ke,2),Je=Qe[0],et=Qe[1];r.useImperativeHandle(t,(function(){return{focus:function(){me.current.focus(0)},blur:function(){var e=document.activeElement;be.current.contains(e)&&(null==e||e.blur())}}})),r.useEffect((function(){Z&&me.current.focus(0)}),[]);var tt=r.useMemo((function(){return{min:pe,max:Ce,direction:ge,disabled:S,keyboard:x,step:ke,included:ee,includedStart:Je,includedEnd:et,range:W,tabIndex:de,ariaLabelForHandle:fe,ariaLabelledByForHandle:ve,ariaValueTextFormatterForHandle:he,styles:C||{},classNames:p||{}}}),[pe,Ce,ge,S,x,ke,ee,Je,et,W,de,fe,ve,he,C,p]);return r.createElement(m.Provider,{value:tt},r.createElement("div",{ref:be,className:l()(o,b,(n={},(0,c.Z)(n,"".concat(o,"-disabled"),S),(0,c.Z)(n,"".concat(o,"-vertical"),Q),(0,c.Z)(n,"".concat(o,"-horizontal"),!Q),(0,c.Z)(n,"".concat(o,"-with-marks"),ye.length),n)),style:g,onMouseDown:function(e){e.preventDefault();var t,n=be.current.getBoundingClientRect(),r=n.width,a=n.height,o=n.left,l=n.top,i=n.bottom,c=n.right,u=e.clientX,s=e.clientY;switch(ge){case"btt":t=(i-s)/a;break;case"ttb":t=(s-l)/a;break;case"rtl":t=(c-u)/r;break;default:t=(u-o)/r}Ae(Ee(pe+t*(Ce-pe)),e)}},r.createElement("div",{className:l()("".concat(o,"-rail"),null==p?void 0:p.rail),style:(0,i.Z)((0,i.Z)({},ae),null==C?void 0:C.rail)}),r.createElement(L,{prefixCls:o,style:ne,values:Ue,startPoint:te,onStartMove:Ye?Ve:null}),r.createElement(z,{prefixCls:o,marks:ye,dots:ce,style:oe,activeStyle:le}),r.createElement(M,{ref:me,prefixCls:o,style:re,values:We,draggingIndex:Re,onStartMove:Ve,onOffsetChange:function(e,t){if(!S){var n=$e(Oe,e,t);null==q||q(Pe(Oe)),Le(n.values),Ge(n.value)}},onFocus:E,onBlur:$,handleRender:ue,onChangeComplete:Fe}),r.createElement(H,{prefixCls:o,marks:ye,onClick:Ae})))}));const D=F;var N=n(82132),R=n(59335),I=n(73956),W=n(13234),j=n(69017);const A=r.forwardRef(((e,t)=>{const{open:n}=e,a=(0,r.useRef)(null),o=(0,r.useRef)(null);function l(){I.Z.cancel(o.current),o.current=null}return r.useEffect((()=>(n?o.current=(0,I.Z)((()=>{var e;null===(e=a.current)||void 0===e||e.forceAlign(),o.current=null})):l(),l)),[n,e.title]),r.createElement(j.Z,Object.assign({ref:(0,W.sQ)(a,t)},e))}));var q=n(64689),T=n(9890),X=n(37245),G=n(56859),Y=n(17951);const V=e=>{const{componentCls:t,antCls:n,controlSize:r,dotSize:a,marginFull:o,marginPart:l,colorFillContentHover:i,handleColorDisabled:c,calc:u}=e;return{[t]:Object.assign(Object.assign({},(0,T.Wf)(e)),{position:"relative",height:r,margin:`${(0,Y.bf)(l)} ${(0,Y.bf)(o)}`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${(0,Y.bf)(o)} ${(0,Y.bf)(l)}`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${t}-track,${t}-tracks`]:{position:"absolute",transition:`background-color ${e.motionDurationMid}`},[`${t}-track`]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},[`${t}-track-draggable`]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{[`${t}-rail`]:{backgroundColor:e.railHoverBg},[`${t}-track`]:{backgroundColor:e.trackHoverBg},[`${t}-dot`]:{borderColor:i},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${(0,Y.bf)(e.handleLineWidth)} ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.dotActiveBorderColor}},[`${t}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none","&::before":{content:'""',position:"absolute",insetInlineStart:u(e.handleLineWidth).mul(-1).equal(),insetBlockStart:u(e.handleLineWidth).mul(-1).equal(),width:u(e.handleSize).add(u(e.handleLineWidth).mul(2)).equal(),height:u(e.handleSize).add(u(e.handleLineWidth).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${(0,Y.bf)(e.handleLineWidth)} ${e.handleColor}`,borderRadius:"50%",cursor:"pointer",transition:`\n            inset-inline-start ${e.motionDurationMid},\n            inset-block-start ${e.motionDurationMid},\n            width ${e.motionDurationMid},\n            height ${e.motionDurationMid},\n            box-shadow ${e.motionDurationMid}\n          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:u(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),insetBlockStart:u(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),width:u(e.handleSizeHover).add(u(e.handleLineWidthHover).mul(2)).equal(),height:u(e.handleSizeHover).add(u(e.handleLineWidthHover).mul(2)).equal()},"&::after":{boxShadow:`0 0 0 ${(0,Y.bf)(e.handleLineWidthHover)} ${e.handleActiveColor}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal(),insetBlockStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal()}}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:`${(0,Y.bf)(e.handleLineWidth)} solid ${e.dotBorderColor}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.railBg} !important`},[`${t}-track`]:{backgroundColor:`${e.trackBgDisabled} !important`},[`\n          ${t}-dot\n        `]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${(0,Y.bf)(e.handleLineWidth)} ${c}`,insetInlineStart:0,insetBlockStart:0},[`\n          ${t}-mark-text,\n          ${t}-dot\n        `]:{cursor:"not-allowed !important"}},[`&-tooltip ${n}-tooltip-inner`]:{minWidth:"unset"}})}},_=(e,t)=>{const{componentCls:n,railSize:r,handleSize:a,dotSize:o,marginFull:l,calc:i}=e,c=t?"paddingBlock":"paddingInline",u=t?"width":"height",s=t?"height":"width",d=t?"insetBlockStart":"insetInlineStart",f=t?"top":"insetInlineStart",v=i(r).mul(3).sub(a).div(2).equal(),h=i(a).sub(r).div(2).equal(),m=t?{borderWidth:`${(0,Y.bf)(h)} 0`,transform:`translateY(${(0,Y.bf)(i(h).mul(-1).equal())})`}:{borderWidth:`0 ${(0,Y.bf)(h)}`,transform:`translateX(${(0,Y.bf)(e.calc(h).mul(-1).equal())})`};return{[c]:r,[s]:i(r).mul(3).equal(),[`${n}-rail`]:{[u]:"100%",[s]:r},[`${n}-track,${n}-tracks`]:{[s]:r},[`${n}-track-draggable`]:Object.assign({},m),[`${n}-handle`]:{[d]:v},[`${n}-mark`]:{insetInlineStart:0,top:0,[f]:i(r).mul(3).add(t?0:l).equal(),[u]:"100%"},[`${n}-step`]:{insetInlineStart:0,top:0,[f]:r,[u]:"100%",[s]:r},[`${n}-dot`]:{position:"absolute",[d]:i(r).sub(o).div(2).equal()}}},U=e=>{const{componentCls:t,marginPartWithMark:n}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},_(e,!0)),{[`&${t}-with-marks`]:{marginBottom:n}})}},K=e=>{const{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},_(e,!1)),{height:"100%"})}},Q=(0,X.I$)("Slider",(e=>{const t=(0,G.TS)(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[V(t),U(t),K(t)]}),(e=>{const t=e.controlHeightLG/4;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:e.controlHeightSM/2,dotSize:8,handleLineWidth:e.lineWidth+1,handleLineWidthHover:e.lineWidth+3,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:e.colorPrimary,handleColorDisabled:new q.C(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}}));const J=a().forwardRef(((e,t)=>{const{prefixCls:n,range:r,className:o,rootClassName:i,style:c,disabled:u,tooltipPrefixCls:s,tipFormatter:d,tooltipVisible:f,getTooltipPopupContainer:v,tooltipPlacement:h}=e,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement"]),{direction:b,slider:g,getPrefixCls:p,getPopupContainer:C}=a().useContext(N.E_),k=a().useContext(R.Z),S=null!=u?u:k,[y,x]=a().useState({}),Z=(e,t)=>{x((n=>Object.assign(Object.assign({},n),{[e]:t})))},E=(e,t)=>e||(t?"rtl"===b?"left":"right":"top"),$=p("slider",n),[M,w,B]=Q($),H=l()(o,null==g?void 0:g.className,i,{[`${$}-rtl`]:"rtl"===b},w,B);"rtl"!==b||m.vertical||(m.reverse=!m.reverse);const[O,z]=a().useMemo((()=>r?"object"==typeof r?[!0,r.draggableTrack]:[!0,!1]:[!1]),[r]),P=Object.assign(Object.assign({},null==g?void 0:g.style),c);return M(a().createElement(D,Object.assign({},m,{step:m.step,range:O,draggableTrack:z,className:H,style:P,disabled:S,ref:t,prefixCls:$,handleRender:(t,n)=>{var r;const{index:o,dragging:l}=n,{tooltip:i={},vertical:c}=e,u=Object.assign({},i),{open:b,placement:g,getPopupContainer:k,prefixCls:S,formatter:x}=u,M=function(e,t){return e||null===e?e:t||null===t?t:e=>"number"==typeof e?e.toString():""}(x,d),w=!!M&&(y[o]||l),B=null!==(r=null!=b?b:f)&&void 0!==r?r:void 0===b&&w,H=Object.assign(Object.assign({},t.props),{onMouseEnter:()=>Z(o,!0),onMouseLeave:()=>Z(o,!1),onFocus:e=>{var t;Z(o,!0),null===(t=m.onFocus)||void 0===t||t.call(m,e)},onBlur:e=>{var t;Z(o,!1),null===(t=m.onBlur)||void 0===t||t.call(m,e)}});return a().createElement(A,Object.assign({},u,{prefixCls:p("tooltip",null!=S?S:s),title:M?M(n.value):"",open:B,placement:E(null!=g?g:h,c),key:o,overlayClassName:`${$}-tooltip`,getPopupContainer:k||v||C}),a().cloneElement(t,H))}})))})),ee=J}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.1/f0d9efbe74d0c28c17d35116d0dae46c/85.lite.js.map
