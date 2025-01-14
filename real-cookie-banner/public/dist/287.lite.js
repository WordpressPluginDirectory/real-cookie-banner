"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[287],{96077:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(2464),a=n(41594);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var l=n(4679),i=function(e,t){return a.createElement(l.A,(0,r.A)({},e,{ref:t,icon:o}))};const u=a.forwardRef(i)},7643:(e,t,n)=>{n.d(t,{A:()=>ne});var r=n(41594),a=n.n(r),o=n(65924),l=n.n(o),i=n(58187),u=n(21483),c=n(18539),s=n(61129),d=n(81188),v=n(74188),f=n(65033),h=n(33717),m=n(2464),g=n(4105);function b(e,t,n){return(e-t)/(n-t)}function p(e,t,n,r){var a=b(t,n,r),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function C(e,t){return Array.isArray(e)?e[t]:e}var k=n(81739);const A=r.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var y=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],S=r.forwardRef((function(e,t){var n,a=e.prefixCls,o=e.value,c=e.valueIndex,s=e.onStartMove,d=e.style,v=e.render,f=e.dragging,h=e.onOffsetChange,b=e.onChangeComplete,S=e.onFocus,x=e.onMouseEnter,E=(0,g.A)(e,y),M=r.useContext(A),$=M.min,w=M.max,z=M.direction,B=M.disabled,H=M.keyboard,O=M.range,L=M.tabIndex,F=M.ariaLabelForHandle,P=M.ariaLabelledByForHandle,R=M.ariaValueTextFormatterForHandle,D=M.styles,N=M.classNames,I="".concat(a,"-handle"),W=function(e){B||s(e,c)},j=p(z,o,$,w),q={};null!==c&&(q={tabIndex:B?null:C(L,c),role:"slider","aria-valuemin":$,"aria-valuemax":w,"aria-valuenow":o,"aria-disabled":B,"aria-label":C(F,c),"aria-labelledby":C(P,c),"aria-valuetext":null===(n=C(R,c))||void 0===n?void 0:n(o),"aria-orientation":"ltr"===z||"rtl"===z?"horizontal":"vertical",onMouseDown:W,onTouchStart:W,onFocus:function(e){null==S||S(e,c)},onMouseEnter:function(e){x(e,c)},onKeyDown:function(e){if(!B&&H){var t=null;switch(e.which||e.keyCode){case k.A.LEFT:t="ltr"===z||"btt"===z?-1:1;break;case k.A.RIGHT:t="ltr"===z||"btt"===z?1:-1;break;case k.A.UP:t="ttb"!==z?1:-1;break;case k.A.DOWN:t="ttb"!==z?-1:1;break;case k.A.HOME:t="min";break;case k.A.END:t="max";break;case k.A.PAGE_UP:t=2;break;case k.A.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),h(t,c))}},onKeyUp:function(e){switch(e.which||e.keyCode){case k.A.LEFT:case k.A.RIGHT:case k.A.UP:case k.A.DOWN:case k.A.HOME:case k.A.END:case k.A.PAGE_UP:case k.A.PAGE_DOWN:null==b||b()}}});var T=r.createElement("div",(0,m.A)({ref:t,className:l()(I,(0,u.A)((0,u.A)({},"".concat(I,"-").concat(c+1),null!==c&&O),"".concat(I,"-dragging"),f),N.handle),style:(0,i.A)((0,i.A)((0,i.A)({},j),d),D.handle)},q,E));return v&&(T=v(T,{index:c,prefixCls:a,value:o,dragging:f})),T}));const x=S;var E=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","onFocus"],M=r.forwardRef((function(e,t){var n=e.prefixCls,a=e.style,o=e.onStartMove,l=e.onOffsetChange,u=e.values,c=e.handleRender,d=e.activeHandleRender,v=e.draggingIndex,f=e.onFocus,h=(0,g.A)(e,E),b=r.useRef({});r.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=b.current[e])||void 0===t||t.focus()}}}));var p=r.useState(-1),k=(0,s.A)(p,2),A=k[0],y=k[1],S=(0,i.A)({prefixCls:n,onStartMove:o,onOffsetChange:l,render:c,onFocus:function(e,t){y(t),null==f||f(e)},onMouseEnter:function(e,t){y(t)}},h);return r.createElement(r.Fragment,null,u.map((function(e,t){return r.createElement(x,(0,m.A)({ref:function(e){e?b.current[t]=e:delete b.current[t]},dragging:v===t,style:C(a,t),key:t,value:e,valueIndex:t},S))})),d&&r.createElement(x,(0,m.A)({key:"a11y"},S,{value:u[A],valueIndex:null,dragging:-1!==v,render:d,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}));const $=M,w=function(e){var t=e.prefixCls,n=e.style,a=e.children,o=e.value,c=e.onClick,s=r.useContext(A),d=s.min,v=s.max,f=s.direction,h=s.includedStart,m=s.includedEnd,g=s.included,b="".concat(t,"-text"),C=p(f,o,d,v);return r.createElement("span",{className:l()(b,(0,u.A)({},"".concat(b,"-active"),g&&h<=o&&o<=m)),style:(0,i.A)((0,i.A)({},C),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(o)}},a)},z=function(e){var t=e.prefixCls,n=e.marks,a=e.onClick,o="".concat(t,"-mark");return n.length?r.createElement("div",{className:o},n.map((function(e){var t=e.value,n=e.style,l=e.label;return r.createElement(w,{key:t,prefixCls:o,style:n,value:t,onClick:a},l)}))):null},B=function(e){var t=e.prefixCls,n=e.value,a=e.style,o=e.activeStyle,c=r.useContext(A),s=c.min,d=c.max,v=c.direction,f=c.included,h=c.includedStart,m=c.includedEnd,g="".concat(t,"-dot"),b=f&&h<=n&&n<=m,C=(0,i.A)((0,i.A)({},p(v,n,s,d)),"function"==typeof a?a(n):a);return b&&(C=(0,i.A)((0,i.A)({},C),"function"==typeof o?o(n):o)),r.createElement("span",{className:l()(g,(0,u.A)({},"".concat(g,"-active"),b)),style:C})},H=function(e){var t=e.prefixCls,n=e.marks,a=e.dots,o=e.style,l=e.activeStyle,i=r.useContext(A),u=i.min,c=i.max,s=i.step,d=r.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),a&&null!==s)for(var t=u;t<=c;)e.add(t),t+=s;return Array.from(e)}),[u,c,s,a,n]);return r.createElement("div",{className:"".concat(t,"-step")},d.map((function(e){return r.createElement(B,{prefixCls:t,key:e,value:e,style:o,activeStyle:l})})))},O=function(e){var t=e.prefixCls,n=e.style,a=e.start,o=e.end,c=e.index,s=e.onStartMove,d=e.replaceCls,v=r.useContext(A),f=v.direction,h=v.min,m=v.max,g=v.disabled,p=v.range,C=v.classNames,k="".concat(t,"-track"),y=b(a,h,m),S=b(o,h,m),x=function(e){!g&&s&&s(e,-1)},E={};switch(f){case"rtl":E.right="".concat(100*y,"%"),E.width="".concat(100*S-100*y,"%");break;case"btt":E.bottom="".concat(100*y,"%"),E.height="".concat(100*S-100*y,"%");break;case"ttb":E.top="".concat(100*y,"%"),E.height="".concat(100*S-100*y,"%");break;default:E.left="".concat(100*y,"%"),E.width="".concat(100*S-100*y,"%")}var M=d||l()(k,(0,u.A)((0,u.A)({},"".concat(k,"-").concat(c+1),null!==c&&p),"".concat(t,"-track-draggable"),s),C.track);return r.createElement("div",{className:M,style:(0,i.A)((0,i.A)({},E),n),onMouseDown:x,onTouchStart:x})},L=function(e){var t=e.prefixCls,n=e.style,a=e.values,o=e.startPoint,u=e.onStartMove,c=r.useContext(A),s=c.included,d=c.range,v=c.min,f=c.styles,h=c.classNames,m=r.useMemo((function(){if(!d){if(0===a.length)return[];var e=null!=o?o:v,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n}),[a,d,o,v]);if(!s)return null;var g=h.tracks||f.tracks?r.createElement(O,{index:null,prefixCls:t,start:m[0].start,end:m[m.length-1].end,replaceCls:l()(h.tracks,"".concat(t,"-tracks")),style:f.tracks}):null;return r.createElement(r.Fragment,null,g,m.map((function(e,a){var o=e.start,l=e.end;return r.createElement(O,{index:a,prefixCls:t,style:(0,i.A)((0,i.A)({},C(n,a)),f.track),start:o,end:l,key:a,onStartMove:u})})))};var F=n(52733);function P(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}var R=r.forwardRef((function(e,t){var n=e.prefixCls,a=void 0===n?"rc-slider":n,o=e.className,m=e.style,g=e.classNames,b=e.styles,p=e.disabled,C=void 0!==p&&p,k=e.keyboard,y=void 0===k||k,S=e.autoFocus,x=e.onFocus,E=e.onBlur,M=e.min,w=void 0===M?0:M,B=e.max,O=void 0===B?100:B,R=e.step,D=void 0===R?1:R,N=e.value,I=e.defaultValue,W=e.range,j=e.count,q=e.onChange,T=e.onBeforeChange,X=e.onAfterChange,G=e.onChangeComplete,Y=e.allowCross,V=void 0===Y||Y,_=e.pushable,U=void 0!==_&&_,K=e.draggableTrack,Q=e.reverse,J=e.vertical,Z=e.included,ee=void 0===Z||Z,te=e.startPoint,ne=e.trackStyle,re=e.handleStyle,ae=e.railStyle,oe=e.dotStyle,le=e.activeDotStyle,ie=e.marks,ue=e.dots,ce=e.handleRender,se=e.activeHandleRender,de=e.tabIndex,ve=void 0===de?0:de,fe=e.ariaLabelForHandle,he=e.ariaLabelledByForHandle,me=e.ariaValueTextFormatterForHandle,ge=r.useRef(null),be=r.useRef(null),pe=r.useMemo((function(){return J?Q?"ttb":"btt":Q?"rtl":"ltr"}),[Q,J]),Ce=r.useMemo((function(){return isFinite(w)?w:0}),[w]),ke=r.useMemo((function(){return isFinite(O)?O:100}),[O]),Ae=r.useMemo((function(){return null!==D&&D<=0?1:D}),[D]),ye=r.useMemo((function(){return"boolean"==typeof U?!!U&&Ae:U>=0&&U}),[U,Ae]),Se=r.useMemo((function(){return Object.keys(ie||{}).map((function(e){var t=ie[e],n={value:Number(e)};return t&&"object"===(0,d.A)(t)&&!r.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ie]),xe=function(e,t,n,a,o,l){var i=r.useCallback((function(n){return Math.max(e,Math.min(t,n))}),[e,t]),u=r.useCallback((function(r){if(null!==n){var a=e+Math.round((i(r)-e)/n)*n,o=function(e){return(String(e).split(".")[1]||"").length},l=Math.max(o(n),o(t),o(e)),u=Number(a.toFixed(l));return e<=u&&u<=t?u:null}return null}),[n,e,t,i]),s=r.useCallback((function(r){var o=i(r),l=a.map((function(e){return e.value}));null!==n&&l.push(u(r)),l.push(e,t);var c=l[0],s=t-e;return l.forEach((function(e){var t=Math.abs(o-e);t<=s&&(c=e,s=t)})),c}),[e,t,a,n,i,u]),d=function r(o,l,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var d,v=o[i],f=v+l,h=[];a.forEach((function(e){h.push(e.value)})),h.push(e,t),h.push(u(v));var m=l>0?1:-1;"unit"===s?h.push(u(v+m*n)):h.push(u(f)),h=h.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=v:e>=v})),"unit"===s&&(h=h.filter((function(e){return e!==v})));var g="unit"===s?v:f;d=h[0];var b=Math.abs(d-g);if(h.forEach((function(e){var t=Math.abs(e-g);t<b&&(d=e,b=t)})),void 0===d)return l<0?e:t;if("dist"===s)return d;if(Math.abs(l)>1){var p=(0,c.A)(o);return p[i]=d,r(p,l-m,i,s)}return d}return"min"===l?e:"max"===l?t:void 0},v=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],o=d(e,t,n,r);return{value:o,changed:o!==a}},f=function(e){return null===l&&0===e||"number"==typeof l&&e<l};return[s,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e.map(s),i=a[n],u=d(a,t,n,r);if(a[n]=u,!1===o){var c=l||0;n>0&&a[n-1]!==i&&(a[n]=Math.max(a[n],a[n-1]+c)),n<a.length-1&&a[n+1]!==i&&(a[n]=Math.min(a[n],a[n+1]-c))}else if("number"==typeof l||null===l){for(var h=n+1;h<a.length;h+=1)for(var m=!0;f(a[h]-a[h-1])&&m;){var g=v(a,1,h);a[h]=g.value,m=g.changed}for(var b=n;b>0;b-=1)for(var p=!0;f(a[b]-a[b-1])&&p;){var C=v(a,-1,b-1);a[b-1]=C.value,p=C.changed}for(var k=a.length-1;k>0;k-=1)for(var A=!0;f(a[k]-a[k-1])&&A;){var y=v(a,-1,k-1);a[k-1]=y.value,A=y.changed}for(var S=0;S<a.length-1;S+=1)for(var x=!0;f(a[S+1]-a[S])&&x;){var E=v(a,1,S+1);a[S+1]=E.value,x=E.changed}}return{value:a[n],values:a}}]}(Ce,ke,Ae,Se,V,ye),Ee=(0,s.A)(xe,2),Me=Ee[0],$e=Ee[1],we=(0,v.A)(I,{value:N}),ze=(0,s.A)(we,2),Be=ze[0],He=ze[1],Oe=r.useMemo((function(){var e=null==Be?[]:Array.isArray(Be)?Be:[Be],t=(0,s.A)(e,1)[0],n=null===Be?[]:[void 0===t?Ce:t];if(W){if(n=(0,c.A)(e),j||void 0===Be){var r=j>=0?j+1:2;for(n=n.slice(0,r);n.length<r;){var a;n.push(null!==(a=n[n.length-1])&&void 0!==a?a:Ce)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=Me(e)})),n}),[Be,W,Ce,j,Me]),Le=r.useRef(Oe);Le.current=Oe;var Fe=function(e){return W?e:e[0]},Pe=function(e){var t=(0,c.A)(e).sort((function(e,t){return e-t}));q&&!(0,f.A)(t,Le.current,!0)&&q(Fe(t)),He(t)},Re=function(){var e=Fe(Le.current);null==X||X(e),(0,h.Ay)(!X,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==G||G(e)},De=function(e,t,n,a,o,l,i,u,d){var v=r.useState(null),f=(0,s.A)(v,2),h=f[0],m=f[1],g=r.useState(-1),b=(0,s.A)(g,2),p=b[0],C=b[1],k=r.useState(n),A=(0,s.A)(k,2),y=A[0],S=A[1],x=r.useState(n),E=(0,s.A)(x,2),M=E[0],$=E[1],w=r.useRef(null),z=r.useRef(null);r.useLayoutEffect((function(){-1===p&&S(n)}),[n,p]),r.useEffect((function(){return function(){document.removeEventListener("mousemove",w.current),document.removeEventListener("mouseup",z.current),document.removeEventListener("touchmove",w.current),document.removeEventListener("touchend",z.current)}}),[]);var B=function(e,t){y.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&m(t),S(e),i(e))},H=(0,F._q)((function(e,t){if(-1===e){var n=M[0],r=M[M.length-1],i=a-n,u=o-r,s=t*(o-a);s=Math.max(s,i),s=Math.min(s,u);var v=l(n+s);s=v-n;var f=M.map((function(e){return e+s}));B(f)}else{var h=(o-a)*t,m=(0,c.A)(y);m[e]=M[e];var g=d(m,h,e,"dist");B(g.values,g.value)}})),O=r.useMemo((function(){var e=(0,c.A)(n).sort((function(e,t){return e-t})),t=(0,c.A)(y).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?y:n}),[n,y]);return[p,h,O,function(r,a,o){r.stopPropagation();var l=o||n,i=l[a];C(a),m(i),$(l);var c=P(r),s=c.pageX,d=c.pageY,v=function(n){n.preventDefault();var r,o=P(n),l=o.pageX,i=o.pageY,u=l-s,c=i-d,v=e.current.getBoundingClientRect(),f=v.width,h=v.height;switch(t){case"btt":r=-c/h;break;case"ttb":r=c/h;break;case"rtl":r=-u/f;break;default:r=u/f}H(a,r)},f=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",v),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",v),w.current=null,z.current=null,C(-1),u()};document.addEventListener("mouseup",f),document.addEventListener("mousemove",v),document.addEventListener("touchend",f),document.addEventListener("touchmove",v),w.current=v,z.current=f}]}(be,pe,Oe,Ce,ke,Me,Pe,Re,$e),Ne=(0,s.A)(De,4),Ie=Ne[0],We=Ne[1],je=Ne[2],qe=Ne[3],Te=function(e,t){if(!C){var n=0,r=ke-Ce;Oe.forEach((function(t,a){var o=Math.abs(e-t);o<=r&&(r=o,n=a)}));var a,o,l=(0,c.A)(Oe);l[n]=e,W&&!Oe.length&&void 0===j&&l.push(e),null==T||T(Fe(l)),Pe(l),t&&(null===(a=document.activeElement)||void 0===a||null===(o=a.blur)||void 0===o||o.call(a),ge.current.focus(n),qe(t,n,l))}},Xe=r.useState(null),Ge=(0,s.A)(Xe,2),Ye=Ge[0],Ve=Ge[1];r.useEffect((function(){if(null!==Ye){var e=Oe.indexOf(Ye);e>=0&&ge.current.focus(e)}Ve(null)}),[Ye]);var _e=r.useMemo((function(){return(!K||null!==Ae)&&K}),[K,Ae]),Ue=function(e,t){qe(e,t),null==T||T(Fe(Le.current))},Ke=-1!==Ie;r.useEffect((function(){if(!Ke){var e=Oe.lastIndexOf(We);ge.current.focus(e)}}),[Ke]);var Qe=r.useMemo((function(){return(0,c.A)(je).sort((function(e,t){return e-t}))}),[je]),Je=r.useMemo((function(){return W?[Qe[0],Qe[Qe.length-1]]:[Ce,Qe[0]]}),[Qe,W,Ce]),Ze=(0,s.A)(Je,2),et=Ze[0],tt=Ze[1];r.useImperativeHandle(t,(function(){return{focus:function(){ge.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=be.current)&&void 0!==e&&e.contains(t)&&(null==t||t.blur())}}})),r.useEffect((function(){S&&ge.current.focus(0)}),[]);var nt=r.useMemo((function(){return{min:Ce,max:ke,direction:pe,disabled:C,keyboard:y,step:Ae,included:ee,includedStart:et,includedEnd:tt,range:W,tabIndex:ve,ariaLabelForHandle:fe,ariaLabelledByForHandle:he,ariaValueTextFormatterForHandle:me,styles:b||{},classNames:g||{}}}),[Ce,ke,pe,C,y,Ae,ee,et,tt,W,ve,fe,he,me,b,g]);return r.createElement(A.Provider,{value:nt},r.createElement("div",{ref:be,className:l()(a,o,(0,u.A)((0,u.A)((0,u.A)((0,u.A)({},"".concat(a,"-disabled"),C),"".concat(a,"-vertical"),J),"".concat(a,"-horizontal"),!J),"".concat(a,"-with-marks"),Se.length)),style:m,onMouseDown:function(e){e.preventDefault();var t,n=be.current.getBoundingClientRect(),r=n.width,a=n.height,o=n.left,l=n.top,i=n.bottom,u=n.right,c=e.clientX,s=e.clientY;switch(pe){case"btt":t=(i-s)/a;break;case"ttb":t=(s-l)/a;break;case"rtl":t=(u-c)/r;break;default:t=(c-o)/r}Te(Me(Ce+t*(ke-Ce)),e)}},r.createElement("div",{className:l()("".concat(a,"-rail"),null==g?void 0:g.rail),style:(0,i.A)((0,i.A)({},ae),null==b?void 0:b.rail)}),r.createElement(L,{prefixCls:a,style:ne,values:Qe,startPoint:te,onStartMove:_e?Ue:void 0}),r.createElement(H,{prefixCls:a,marks:Se,dots:ue,style:oe,activeStyle:le}),r.createElement($,{ref:ge,prefixCls:a,style:re,values:je,draggingIndex:Ie,onStartMove:Ue,onOffsetChange:function(e,t){if(!C){var n=$e(Oe,e,t);null==T||T(Fe(Oe)),Pe(n.values),Ve(n.value)}},onFocus:x,onBlur:E,handleRender:ce,activeHandleRender:se,onChangeComplete:Re}),r.createElement(z,{prefixCls:a,marks:Se,onClick:Te})))}));const D=R;var N=n(32664),I=n(80840),W=n(77648),j=n(2620),q=n(64715);const T=r.forwardRef(((e,t)=>{const{open:n}=e,a=(0,r.useRef)(null),o=(0,r.useRef)(null);function l(){N.A.cancel(o.current),o.current=null}return r.useEffect((()=>(n?o.current=(0,N.A)((()=>{var e;null===(e=a.current)||void 0===e||e.forceAlign(),o.current=null})):l(),l)),[n,e.title]),r.createElement(q.A,Object.assign({ref:(0,j.K4)(a,t)},e))}));var X=n(78052),G=n(26411),Y=n(71094),V=n(52146),_=n(63829);const U=e=>{const{componentCls:t,antCls:n,controlSize:r,dotSize:a,marginFull:o,marginPart:l,colorFillContentHover:i,handleColorDisabled:u,calc:c}=e;return{[t]:Object.assign(Object.assign({},(0,Y.dF)(e)),{position:"relative",height:r,margin:`${(0,X.zA)(l)} ${(0,X.zA)(o)}`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${(0,X.zA)(o)} ${(0,X.zA)(l)}`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${t}-track,${t}-tracks`]:{position:"absolute",transition:`background-color ${e.motionDurationMid}`},[`${t}-track`]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},[`${t}-track-draggable`]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{[`${t}-rail`]:{backgroundColor:e.railHoverBg},[`${t}-track`]:{backgroundColor:e.trackHoverBg},[`${t}-dot`]:{borderColor:i},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${(0,X.zA)(e.handleLineWidth)} ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.dotActiveBorderColor}},[`${t}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none","&::before":{content:'""',position:"absolute",insetInlineStart:c(e.handleLineWidth).mul(-1).equal(),insetBlockStart:c(e.handleLineWidth).mul(-1).equal(),width:c(e.handleSize).add(c(e.handleLineWidth).mul(2)).equal(),height:c(e.handleSize).add(c(e.handleLineWidth).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${(0,X.zA)(e.handleLineWidth)} ${e.handleColor}`,borderRadius:"50%",cursor:"pointer",transition:`\n            inset-inline-start ${e.motionDurationMid},\n            inset-block-start ${e.motionDurationMid},\n            width ${e.motionDurationMid},\n            height ${e.motionDurationMid},\n            box-shadow ${e.motionDurationMid}\n          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:c(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),insetBlockStart:c(e.handleSizeHover).sub(e.handleSize).div(2).add(e.handleLineWidthHover).mul(-1).equal(),width:c(e.handleSizeHover).add(c(e.handleLineWidthHover).mul(2)).equal(),height:c(e.handleSizeHover).add(c(e.handleLineWidthHover).mul(2)).equal()},"&::after":{boxShadow:`0 0 0 ${(0,X.zA)(e.handleLineWidthHover)} ${e.handleActiveColor}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal(),insetBlockStart:e.calc(e.handleSize).sub(e.handleSizeHover).div(2).equal()}}},[`&-lock ${t}-handle`]:{"&::before, &::after":{transition:"none"}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:`${(0,X.zA)(e.handleLineWidth)} solid ${e.dotBorderColor}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.railBg} !important`},[`${t}-track`]:{backgroundColor:`${e.trackBgDisabled} !important`},[`\n          ${t}-dot\n        `]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${(0,X.zA)(e.handleLineWidth)} ${u}`,insetInlineStart:0,insetBlockStart:0},[`\n          ${t}-mark-text,\n          ${t}-dot\n        `]:{cursor:"not-allowed !important"}},[`&-tooltip ${n}-tooltip-inner`]:{minWidth:"unset"}})}},K=(e,t)=>{const{componentCls:n,railSize:r,handleSize:a,dotSize:o,marginFull:l,calc:i}=e,u=t?"paddingBlock":"paddingInline",c=t?"width":"height",s=t?"height":"width",d=t?"insetBlockStart":"insetInlineStart",v=t?"top":"insetInlineStart",f=i(r).mul(3).sub(a).div(2).equal(),h=i(a).sub(r).div(2).equal(),m=t?{borderWidth:`${(0,X.zA)(h)} 0`,transform:`translateY(${(0,X.zA)(i(h).mul(-1).equal())})`}:{borderWidth:`0 ${(0,X.zA)(h)}`,transform:`translateX(${(0,X.zA)(e.calc(h).mul(-1).equal())})`};return{[u]:r,[s]:i(r).mul(3).equal(),[`${n}-rail`]:{[c]:"100%",[s]:r},[`${n}-track,${n}-tracks`]:{[s]:r},[`${n}-track-draggable`]:Object.assign({},m),[`${n}-handle`]:{[d]:f},[`${n}-mark`]:{insetInlineStart:0,top:0,[v]:i(r).mul(3).add(t?0:l).equal(),[c]:"100%"},[`${n}-step`]:{insetInlineStart:0,top:0,[v]:r,[c]:"100%",[s]:r},[`${n}-dot`]:{position:"absolute",[d]:i(r).sub(o).div(2).equal()}}},Q=e=>{const{componentCls:t,marginPartWithMark:n}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},K(e,!0)),{[`&${t}-with-marks`]:{marginBottom:n}})}},J=e=>{const{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},K(e,!1)),{height:"100%"})}},Z=(0,V.OF)("Slider",(e=>{const t=(0,_.h1)(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[U(t),Q(t),J(t)]}),(e=>{const t=e.controlHeightLG/4;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:e.controlHeightSM/2,dotSize:8,handleLineWidth:e.lineWidth+1,handleLineWidthHover:e.lineWidth+3,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:e.colorPrimary,handleColorDisabled:new G.q(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}}));function ee(){const[e,t]=r.useState(!1),n=r.useRef(),a=()=>{N.A.cancel(n.current)};return r.useEffect((()=>a),[]),[e,e=>{a(),e?t(e):n.current=(0,N.A)((()=>{t(e)}))}]}const te=a().forwardRef(((e,t)=>{const{prefixCls:n,range:r,className:o,rootClassName:i,style:u,disabled:c,tooltipPrefixCls:s,tipFormatter:d,tooltipVisible:v,getTooltipPopupContainer:f,tooltipPlacement:h,tooltip:m={},onChangeComplete:g}=e,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement","tooltip","onChangeComplete"]),{vertical:p}=e,{direction:C,slider:k,getPrefixCls:A,getPopupContainer:y}=a().useContext(I.QO),S=a().useContext(W.A),x=null!=c?c:S,[E,M]=ee(),[$,w]=ee(),z=Object.assign({},m),{open:B,placement:H,getPopupContainer:O,prefixCls:L,formatter:F}=z,P=null!=B?B:v,R=(E||$)&&!1!==P,j=function(e,t){return e||null===e?e:t||null===t?t:e=>"number"==typeof e?e.toString():""}(F,d),[q,X]=ee(),G=(e,t)=>e||(t?"rtl"===C?"left":"right":"top"),Y=A("slider",n),[V,_,U]=Z(Y),K=l()(o,null==k?void 0:k.className,i,{[`${Y}-rtl`]:"rtl"===C,[`${Y}-lock`]:q},_,U);"rtl"!==C||b.vertical||(b.reverse=!b.reverse);const[Q,J]=a().useMemo((()=>r?"object"==typeof r?[!0,r.draggableTrack]:[!0,!1]:[!1]),[r]);a().useEffect((()=>{const e=()=>{(0,N.A)((()=>{w(!1)}),1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[]);const te=Q&&!P,ne=te?(e,t)=>{const n=a().cloneElement(e,{style:Object.assign(Object.assign({},e.props.style),{visibility:"hidden"})});return a().createElement(T,Object.assign({},z,{prefixCls:A("tooltip",null!=L?L:s),title:j?j(t.value):"",open:null!==j&&R,placement:G(null!=H?H:h,p),key:"tooltip",overlayClassName:`${Y}-tooltip`,getPopupContainer:O||f||y}),n)}:void 0,re=Object.assign(Object.assign({},null==k?void 0:k.style),u);return V(a().createElement(D,Object.assign({},b,{step:b.step,range:Q,draggableTrack:J,className:K,style:re,disabled:x,ref:t,prefixCls:Y,handleRender:(e,t)=>{const{index:n}=t,r=e.props,o=Object.assign(Object.assign({},r),{onMouseEnter:e=>{var t;M(!0),null===(t=r.onMouseEnter)||void 0===t||t.call(r,e)},onMouseLeave:e=>{var t;M(!1),null===(t=r.onMouseLeave)||void 0===t||t.call(r,e)},onMouseDown:e=>{var t;w(!0),X(!0),null===(t=r.onMouseDown)||void 0===t||t.call(r,e)},onFocus:e=>{var t,n;w(!0),null===(t=b.onFocus)||void 0===t||t.call(b,e),null===(n=r.onFocus)||void 0===n||n.call(r,e)},onBlur:e=>{var t,n;w(!1),null===(t=b.onBlur)||void 0===t||t.call(b,e),null===(n=r.onBlur)||void 0===n||n.call(r,e)}}),l=a().cloneElement(e,o),i=(!!P||R)&&null!==j;return te?l:a().createElement(T,Object.assign({},z,{prefixCls:A("tooltip",null!=L?L:s),title:j?j(t.value):"",open:i,placement:G(null!=H?H:h,p),key:n,overlayClassName:`${Y}-tooltip`,getPopupContainer:O||f||y}),l)},activeHandleRender:ne,onChangeComplete:e=>{null==g||g(e),X(!1)}})))})),ne=te}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.7/4a7a5c14d78acf92c837bbfa04b73632/287.lite.js.map
