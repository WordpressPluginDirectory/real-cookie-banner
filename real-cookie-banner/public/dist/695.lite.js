(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[695],{13505:(e,t,n)=>{"use strict";var r=n(38006),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},76118:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(40985),o=n(87363);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},name:"rollback",theme:"outlined"};var l=n(15548),i=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};i.displayName="RollbackOutlined";const c=o.forwardRef(i)},36182:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(40985),o=n(87363);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"};var l=n(15548),i=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};i.displayName="WarningOutlined";const c=o.forwardRef(i)},87557:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var r=n(46270),o=n(87363),a=n(1520),l=n(11616),i=n(24758),c=n(30225),s=n(40985);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var f=n(15548),p=function(e,t){return o.createElement(f.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:u}))};p.displayName="CopyOutlined";const d=o.forwardRef(p);var v=n(24519),m=n(40914),y=n.n(m),b=n(13505),g=n.n(b),h=n(47522),Z=n(13835),E=n(89871),w=n(1707),x=n(44528),O=n(54552),C=n(1960),S=n(72418),k=n(11222),R={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};const j=o.forwardRef((function(e,t){var n=e.style,a=e.noStyle,l=e.disabled,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["style","noStyle","disabled"]),c={};return a||(c=(0,r.Z)({},R)),l&&(c.pointerEvents="none"),c=(0,r.Z)((0,r.Z)({},c),n),o.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},i,{onKeyDown:function(e){e.keyCode===k.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===k.Z.ENTER&&r&&r()},style:c}))}));var P=n(61087),z=n(39049);const N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var D=function(e,t){return o.createElement(f.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:N}))};D.displayName="EnterOutlined";const M=o.forwardRef(D);var I=n(26822),T=n(86393);const H=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,l=e.style,c=e.direction,s=e.maxLength,u=e.autoSize,f=void 0===u||u,p=e.value,d=e.onSave,v=e.onCancel,m=e.onEnd,b=e.component,g=e.enterIcon,h=void 0===g?o.createElement(M,null):g,Z=o.useRef(null),E=o.useRef(!1),w=o.useRef(),x=o.useState(p),O=(0,i.Z)(x,2),C=O[0],S=O[1];o.useEffect((function(){S(p)}),[p]),o.useEffect((function(){if(Z.current&&Z.current.resizableTextArea){var e=Z.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var R=function(){d(C.trim())},j=b?"".concat(t,"-").concat(b):"",P=y()(t,"".concat(t,"-edit-content"),(0,a.Z)({},"".concat(t,"-rtl"),"rtl"===c),r,j);return o.createElement("div",{className:P,style:l},o.createElement(I.Z,{ref:Z,maxLength:s,value:C,onChange:function(e){var t=e.target;S(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;E.current||(w.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,o=e.metaKey,a=e.shiftKey;w.current!==t||E.current||n||r||o||a||(t===k.Z.ENTER?(R(),null==m||m()):t===k.Z.ESC&&v())},onCompositionStart:function(){E.current=!0},onCompositionEnd:function(){E.current=!1},onBlur:function(){R()},"aria-label":n,rows:1,autoSize:f}),null!==h?(0,T.Tm)(h,{className:"".concat(t,"-edit-content-confirm")}):null)};function A(e,t){return o.useMemo((function(){var n=!!e;return[n,(0,r.Z)((0,r.Z)({},t),n&&"object"===(0,l.Z)(e)?e:null)]}),[e])}const L=o.forwardRef((function(e,t){var n=e.prefixCls,l=e.component,i=void 0===l?"article":l,c=e.className,s=e.setContentRef,u=e.children,f=e.direction,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","component","className","setContentRef","children","direction"]),d=o.useContext(C.E_),v=d.getPrefixCls,m=d.direction,b=null!=f?f:m,g=t;s&&(g=(0,O.sQ)(t,s));var h=v("typography",n),Z=y()(h,(0,a.Z)({},"".concat(h,"-rtl"),"rtl"===b),c);return o.createElement(i,(0,r.Z)({className:Z,ref:g},p),u)}));function B(e){var t=(0,l.Z)(e);return"string"===t||"number"===t}function K(e,t){for(var n=0,r=[],o=0;o<e.length;o+=1){if(n===t)return r;var a=e[o],l=n+(B(a)?String(a).length:1);if(l>t){var i=t-n;return r.push(String(a).slice(0,i)),r}r.push(a),n=l}return e}const U=function(e){var t=e.enabledMeasure,n=e.children,a=e.text,l=e.width,c=e.fontSize,s=e.rows,u=e.onEllipsis,f=o.useState([0,0,0]),p=(0,i.Z)(f,2),d=(0,i.Z)(p[0],3),v=d[0],m=d[1],y=d[2],b=p[1],g=o.useState(0),h=(0,i.Z)(g,2),w=h[0],x=h[1],O=o.useState(0),C=(0,i.Z)(O,2),S=C[0],k=C[1],R=o.useRef(null),j=o.useRef(null),P=o.useMemo((function(){return(0,Z.Z)(a)}),[a]),z=o.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){B(e)?t+=String(e).length:t+=1})),t}(P)}),[P]),N=o.useMemo((function(){return t&&3===w?n(K(P,m),m<z):n(P,!1)}),[t,w,n,P,m,z]);(0,E.Z)((function(){t&&l&&c&&z&&(x(1),b([0,Math.ceil(z/2),z]))}),[t,l,c,a,z,s]),(0,E.Z)((function(){var e;1===w&&k((null===(e=R.current)||void 0===e?void 0:e.offsetHeight)||0)}),[w]),(0,E.Z)((function(){var e,t;if(S)if(1===w)((null===(e=j.current)||void 0===e?void 0:e.offsetHeight)||0)<=s*S?(x(4),u(!1)):x(2);else if(2===w)if(v!==y){var n=(null===(t=j.current)||void 0===t?void 0:t.offsetHeight)||0,r=v,o=y;v===y-1?o=v:n<=s*S?r=m:o=m;var a=Math.ceil((r+o)/2);b([r,a,o])}else x(3),u(!0)}),[w,v,y,s,S]);var D,M,I={width:l,whiteSpace:"normal",margin:0,padding:0},T=function(e,t,n){return o.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(c/2)},n)},e)};return o.createElement(o.Fragment,null,N,t&&3!==w&&4!==w&&o.createElement(o.Fragment,null,T("lg",R,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===w?T(n(P,!1),j,I):(D=j,M=K(P,m),T(n(M,!0),D,I))))},V=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,a=e.children,l=e.tooltipProps;return(null==l?void 0:l.title)&&t?o.createElement(z.Z,(0,r.Z)({open:!!n&&void 0},l),a):a};function W(e,t,n){return!0===e||void 0===e?t:e||n&&t}function _(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var F=o.forwardRef((function(e,t){var n,s,u,f,p,m,b=e.prefixCls,k=e.className,R=e.style,N=e.type,D=e.disabled,M=e.children,I=e.ellipsis,T=e.editable,B=e.copyable,K=e.component,F=e.title,G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),Q=o.useContext(C.E_),X=Q.getPrefixCls,q=Q.direction,J=(0,S.E)("Text")[0],Y=o.useRef(null),$=o.useRef(null),ee=X("typography",b),te=(0,x.Z)(G,["mark","code","delete","underline","strong","keyboard","italic"]),ne=A(T),re=(0,i.Z)(ne,2),oe=re[0],ae=re[1],le=(0,w.Z)(!1,{value:ae.editing}),ie=(0,i.Z)(le,2),ce=ie[0],se=ie[1],ue=ae.triggerType,fe=void 0===ue?["icon"]:ue,pe=function(e){var t;e&&(null===(t=ae.onStart)||void 0===t||t.call(ae)),se(e)};f=function(){var e;ce||null===(e=$.current)||void 0===e||e.focus()},p=[ce],m=o.useRef(!1),o.useEffect((function(){m.current?f():m.current=!0}),p);var de=function(e){null==e||e.preventDefault(),pe(!0)},ve=A(B),me=(0,i.Z)(ve,2),ye=me[0],be=me[1],ge=o.useState(!1),he=(0,i.Z)(ge,2),Ze=he[0],Ee=he[1],we=o.useRef(),xe={};be.format&&(xe.format=be.format);var Oe=function(){window.clearTimeout(we.current)},Ce=function(e){var t;null==e||e.preventDefault(),null==e||e.stopPropagation(),g()(be.text||String(M)||"",xe),Ee(!0),Oe(),we.current=window.setTimeout((function(){Ee(!1)}),3e3),null===(t=be.onCopy)||void 0===t||t.call(be,e)};o.useEffect((function(){return Oe}),[]);var Se=o.useState(!1),ke=(0,i.Z)(Se,2),Re=ke[0],je=ke[1],Pe=o.useState(!1),ze=(0,i.Z)(Pe,2),Ne=ze[0],De=ze[1],Me=o.useState(!1),Ie=(0,i.Z)(Me,2),Te=Ie[0],He=Ie[1],Ae=o.useState(!1),Le=(0,i.Z)(Ae,2),Be=Le[0],Ke=Le[1],Ue=o.useState(!1),Ve=(0,i.Z)(Ue,2),We=Ve[0],_e=Ve[1],Fe=o.useState(!0),Ge=(0,i.Z)(Fe,2),Qe=Ge[0],Xe=Ge[1],qe=A(I,{expandable:!1}),Je=(0,i.Z)(qe,2),Ye=Je[0],$e=Je[1],et=Ye&&!Te,tt=$e.rows,nt=void 0===tt?1:tt,rt=o.useMemo((function(){return!et||void 0!==$e.suffix||$e.onEllipsis||$e.expandable||oe||ye}),[et,$e,oe,ye]);(0,E.Z)((function(){Ye&&!rt&&(je((0,P.G)("webkitLineClamp")),De((0,P.G)("textOverflow")))}),[rt,Ye]);var ot=o.useMemo((function(){return!rt&&(1===nt?Ne:Re)}),[rt,Ne,Re]),at=et&&(ot?We:Be),lt=et&&1===nt&&ot,it=et&&nt>1&&ot,ct=function(e){var t;He(!0),null===(t=$e.onExpand)||void 0===t||t.call($e,e)},st=o.useState(0),ut=(0,i.Z)(st,2),ft=ut[0],pt=ut[1],dt=o.useState(0),vt=(0,i.Z)(dt,2),mt=vt[0],yt=vt[1],bt=function(e){var t;Ke(e),Be!==e&&(null===(t=$e.onEllipsis)||void 0===t||t.call($e,e))};o.useEffect((function(){var e=Y.current;if(Ye&&ot&&e){var t=it?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;We!==t&&_e(t)}}),[Ye,ot,M,it,Qe]),o.useEffect((function(){var e=Y.current;if("undefined"!=typeof IntersectionObserver&&e&&ot&&et){var t=new IntersectionObserver((function(){Xe(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[ot,et]);var gt;gt=!0===$e.tooltip?{title:null!==(n=ae.text)&&void 0!==n?n:M}:o.isValidElement($e.tooltip)?{title:$e.tooltip}:"object"===(0,l.Z)($e.tooltip)?(0,r.Z)({title:null!==(s=ae.text)&&void 0!==s?s:M},$e.tooltip):{title:$e.tooltip};var ht=o.useMemo((function(){var e=function(e){return["string","number"].includes((0,l.Z)(e))};if(Ye&&!ot)return e(ae.text)?ae.text:e(M)?M:e(F)?F:e(gt.title)?gt.title:void 0}),[Ye,ot,F,gt.title,at]);if(ce)return o.createElement(H,{value:null!==(u=ae.text)&&void 0!==u?u:"string"==typeof M?M:"",onSave:function(e){var t;null===(t=ae.onChange)||void 0===t||t.call(ae,e),pe(!1)},onCancel:function(){var e;null===(e=ae.onCancel)||void 0===e||e.call(ae),pe(!1)},onEnd:ae.onEnd,prefixCls:ee,className:k,style:R,direction:q,component:K,maxLength:ae.maxLength,autoSize:ae.autoSize,enterIcon:ae.enterIcon});var Zt=function(){if(oe){var e=ae.icon,t=ae.tooltip,n=(0,Z.Z)(t)[0]||J.edit,r="string"==typeof n?n:"";return fe.includes("icon")?o.createElement(z.Z,{key:"edit",title:!1===t?"":n},o.createElement(j,{ref:$,className:"".concat(ee,"-edit"),onClick:de,"aria-label":r},e||o.createElement(v.Z,{role:"button"}))):null}},Et=function(){if(ye){var e=be.tooltips,t=be.icon,n=_(e),r=_(t),a=Ze?W(n[1],J.copied):W(n[0],J.copy),l=Ze?J.copied:J.copy,i="string"==typeof a?a:l;return o.createElement(z.Z,{key:"copy",title:a},o.createElement(j,{className:y()("".concat(ee,"-copy"),Ze&&"".concat(ee,"-copy-success")),onClick:Ce,"aria-label":i},Ze?W(r[1],o.createElement(c.Z,null),!0):W(r[0],o.createElement(d,null),!0)))}};return o.createElement(h.Z,{onResize:function(e,t){var n,r=e.offsetWidth;pt(r),yt(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},disabled:!et||ot},(function(n){var l;return o.createElement(V,{tooltipProps:gt,enabledEllipsis:et,isEllipsis:at},o.createElement(L,(0,r.Z)({className:y()((l={},(0,a.Z)(l,"".concat(ee,"-").concat(N),N),(0,a.Z)(l,"".concat(ee,"-disabled"),D),(0,a.Z)(l,"".concat(ee,"-ellipsis"),Ye),(0,a.Z)(l,"".concat(ee,"-single-line"),et&&1===nt),(0,a.Z)(l,"".concat(ee,"-ellipsis-single-line"),lt),(0,a.Z)(l,"".concat(ee,"-ellipsis-multiple-line"),it),l),k),prefixCls:b,style:(0,r.Z)((0,r.Z)({},R),{WebkitLineClamp:it?nt:void 0}),component:K,ref:(0,O.sQ)(n,Y,t),direction:q,onClick:fe.includes("text")?de:void 0,"aria-label":null==ht?void 0:ht.toString(),title:F},te),o.createElement(U,{enabledMeasure:et&&!ot,text:M,rows:nt,width:ft,fontSize:mt,onEllipsis:bt},(function(t,n){var r=t;t.length&&n&&ht&&(r=o.createElement("span",{key:"show-content","aria-hidden":!0},r));var a=function(e,t){var n=e.mark,r=e.code,a=e.underline,l=e.delete,i=e.strong,c=e.keyboard,s=e.italic,u=t;function f(e,t){e&&(u=o.createElement(t,{},u))}return f(i,"strong"),f(a,"u"),f(l,"del"),f(r,"code"),f(n,"mark"),f(c,"kbd"),f(s,"i"),u}(e,o.createElement(o.Fragment,null,r,function(e){return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),$e.suffix,(t=e,[t&&(r=$e.expandable,a=$e.symbol,r?(n=a||J.expand,o.createElement("a",{key:"expand",className:"".concat(ee,"-expand"),onClick:ct,"aria-label":J.expand},n)):null),Zt(),Et()])];var t,n,r,a}(n)));return a}))))}))}));const G=F;const Q=o.forwardRef((function(e,t){var n=e.ellipsis,a=e.rel,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["ellipsis","rel"]),i=(0,r.Z)((0,r.Z)({},l),{rel:void 0===a&&"_blank"===l.target?"noopener noreferrer":a});return delete i.navigate,o.createElement(G,(0,r.Z)({},i,{ref:t,ellipsis:!!n,component:"a"}))})),X=o.forwardRef((function(e,t){return o.createElement(G,(0,r.Z)({ref:t},e,{component:"div"}))}));var q=function(e,t){var n=e.ellipsis,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["ellipsis"]),i=o.useMemo((function(){return n&&"object"===(0,l.Z)(n)?(0,x.Z)(n,["expandable","rows"]):n}),[n]);return o.createElement(G,(0,r.Z)({ref:t},a,{ellipsis:i,component:"span"}))};const J=o.forwardRef(q);var Y=n(33348),$=(0,Y.a)(1,2,3,4,5);const ee=o.forwardRef((function(e,t){var n,a=e.level,l=void 0===a?1:a,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["level"]);return n=$.includes(l)?"h".concat(l):"h1",o.createElement(G,(0,r.Z)({ref:t},i,{component:n}))}));var te=L;te.Text=J,te.Link=Q,te.Title=ee,te.Paragraph=X;const ne=te},38006:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.4/a6364482a7a7534c8f4a8f863024bfba/695.lite.js.map
