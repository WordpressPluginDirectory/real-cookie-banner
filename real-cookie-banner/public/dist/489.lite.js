"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[489],{98489:(e,t,n)=>{n.d(t,{A:()=>Ce});var a=n(41594),o=n.n(a),r=n(12583),i=n(93776),l=n(21282),c=n(65924),d=n.n(c),s=n(88686),u=n(71329),v=n(67285),p=n(83503),f=n(28046),b=n(53259),m=n(21942),h=n.n(m),g=n(10835),$=n(97436);const k=(0,a.createContext)(null);var y=n(74657),A=n(86565),x=n(22606),_=n(42549),S=n(94369);var w={width:0,height:0,left:0,top:0};function C(e,t){var n=a.useRef(e),o=a.useState({}),r=(0,p.A)(o,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var E=Math.pow(.995,20),z=n(98723);function P(e){var t=(0,a.useState)(0),n=(0,p.A)(t,2),o=n[0],r=n[1],i=(0,a.useRef)(0),l=(0,a.useRef)();return l.current=e,(0,z.o)((function(){var e;null===(e=l.current)||void 0===e||e.call(l)}),[o]),function(){i.current===o&&(i.current+=1,r(i.current))}}var R={width:0,height:0,left:0,top:0,right:0};function I(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function T(e){return String(e).replace(/"/g,"TABS_DQ")}function L(e,t,n,a){return!(!n||a||!1===e||void 0===e&&(!1===t||null===t))}var M=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return o&&!1!==o.showAdd?a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){o.onEdit("add",{event:e})}},o.addIcon||"+"):null}));const B=M,O=a.forwardRef((function(e,t){var n,o=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l={};return"object"!==(0,f.A)(i)||a.isValidElement(i)?l.right=i:l=i,"right"===o&&(n=l.right),"left"===o&&(n=l.left),n?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}));var N=n(95598),D=n(39716),j=n(63618),G=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.id,r=e.tabs,i=e.locale,l=e.mobile,c=e.more,d=void 0===c?{}:c,v=e.style,f=e.className,b=e.editable,m=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,k=e.onTabClick,y=e.getPopupContainer,A=e.popupClassName,x=(0,a.useState)(!1),_=(0,p.A)(x,2),S=_[0],w=_[1],C=(0,a.useState)(null),E=(0,p.A)(C,2),z=E[0],P=E[1],R=d.icon,I=void 0===R?"More":R,T="".concat(o,"-more-popup"),M="".concat(n,"-dropdown"),O=null!==z?"".concat(T,"-").concat(z):null,G=null==i?void 0:i.dropdownAriaLabel,H=a.createElement(D.Ay,{onClick:function(e){var t=e.key,n=e.domEvent;k(t,n),w(!1)},prefixCls:"".concat(M,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[z],"aria-label":void 0!==G?G:"expanded dropdown"},r.map((function(e){var t=e.closable,n=e.disabled,r=e.closeIcon,i=e.key,l=e.label,c=L(t,r,b,n);return a.createElement(D.Dr,{key:i,id:"".concat(T,"-").concat(i),role:"option","aria-controls":o&&"".concat(o,"-panel-").concat(i),disabled:n},a.createElement("span",null,l),c&&a.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),b.onEdit("remove",{key:t,event:e})}(e,i)}},r||b.removeIcon||"×"))})));function W(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===z}))||0,a=t.length,o=0;o<a;o+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void P(i.key)}}(0,a.useEffect)((function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[z]),(0,a.useEffect)((function(){S||P(null)}),[S]);var X=(0,u.A)({},g?"marginRight":"marginLeft",m);r.length||(X.visibility="hidden",X.order=1);var K=h()((0,u.A)({},"".concat(M,"-rtl"),g)),F=l?null:a.createElement(N.A,(0,s.A)({prefixCls:M,overlay:H,visible:!!r.length&&S,onVisibleChange:w,overlayClassName:h()(K,A),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:y},d),a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:X,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(o,"-more"),"aria-expanded":S,onKeyDown:function(e){var t=e.which;if(S)switch(t){case j.A.UP:W(-1),e.preventDefault();break;case j.A.DOWN:W(1),e.preventDefault();break;case j.A.ESC:w(!1);break;case j.A.SPACE:case j.A.ENTER:null!==z&&k(z,e)}else[j.A.DOWN,j.A.SPACE,j.A.ENTER].includes(t)&&(w(!0),e.preventDefault())}},I));return a.createElement("div",{className:h()("".concat(n,"-nav-operations"),f),style:v,ref:t},F,a.createElement(B,{prefixCls:n,locale:i,editable:b}))}));const H=a.memo(G,(function(e,t){return t.tabMoving})),W=function(e){var t=e.prefixCls,n=e.id,o=e.active,r=e.tab,i=r.key,l=r.label,c=r.disabled,d=r.closeIcon,s=r.icon,v=e.closable,p=e.renderWrapper,f=e.removeAriaLabel,b=e.editable,m=e.onClick,g=e.onFocus,$=e.style,k="".concat(t,"-tab"),y=L(v,d,b,c);function A(e){c||m(e)}var x=a.useMemo((function(){return s&&"string"==typeof l?a.createElement("span",null,l):l}),[l,s]),_=a.createElement("div",{key:i,"data-node-key":T(i),className:h()(k,(0,u.A)((0,u.A)((0,u.A)({},"".concat(k,"-with-remove"),y),"".concat(k,"-active"),o),"".concat(k,"-disabled"),c)),style:$,onClick:A},a.createElement("div",{role:"tab","aria-selected":o,id:n&&"".concat(n,"-tab-").concat(i),className:"".concat(k,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(i),"aria-disabled":c,tabIndex:c?null:0,onClick:function(e){e.stopPropagation(),A(e)},onKeyDown:function(e){[j.A.SPACE,j.A.ENTER].includes(e.which)&&(e.preventDefault(),A(e))},onFocus:g},s&&a.createElement("span",{className:"".concat(k,"-icon")},s),l&&x),y&&a.createElement("button",{type:"button","aria-label":f||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),b.onEdit("remove",{key:i,event:t})}},d||b.removeIcon||"×"));return p?p(_):_};var X=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,o=t.offsetHeight,r=void 0===o?0:o;if(e.current){var i=e.current.getBoundingClientRect(),l=i.width,c=i.height;if(Math.abs(l-a)<1)return[l,c]}return[a,r]},K=function(e,t){return e[t?0:1]},F=a.forwardRef((function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,d=e.rtl,f=e.extra,b=e.editable,m=e.locale,g=e.tabPosition,$=e.tabBarGutter,z=e.children,L=e.onTabClick,M=e.onTabScroll,N=e.indicator,D=a.useContext(k),j=D.prefixCls,G=D.tabs,F=(0,a.useRef)(null),V=(0,a.useRef)(null),q=(0,a.useRef)(null),Y=(0,a.useRef)(null),Q=(0,a.useRef)(null),J=(0,a.useRef)(null),U=(0,a.useRef)(null),Z="top"===g||"bottom"===g,ee=C(0,(function(e,t){Z&&M&&M({direction:e>t?"left":"right"})})),te=(0,p.A)(ee,2),ne=te[0],ae=te[1],oe=C(0,(function(e,t){!Z&&M&&M({direction:e>t?"top":"bottom"})})),re=(0,p.A)(oe,2),ie=re[0],le=re[1],ce=(0,a.useState)([0,0]),de=(0,p.A)(ce,2),se=de[0],ue=de[1],ve=(0,a.useState)([0,0]),pe=(0,p.A)(ve,2),fe=pe[0],be=pe[1],me=(0,a.useState)([0,0]),he=(0,p.A)(me,2),ge=he[0],$e=he[1],ke=(0,a.useState)([0,0]),ye=(0,p.A)(ke,2),Ae=ye[0],xe=ye[1],_e=function(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),o=(0,p.A)(n,2)[1],r=(0,a.useRef)("function"==typeof e?e():e),i=P((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,o({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Se=(0,p.A)(_e,2),we=Se[0],Ce=Se[1],Ee=function(e,t,n){return(0,a.useMemo)((function(){for(var n,a=new Map,o=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,r=o.left+o.width,i=0;i<e.length;i+=1){var l,c=e[i].key,d=t.get(c);d||(d=t.get(null===(l=e[i-1])||void 0===l?void 0:l.key)||w);var s=a.get(c)||(0,v.A)({},d);s.right=r-s.left-s.width,a.set(c,s)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(G,we,fe[0]),ze=K(se,Z),Pe=K(fe,Z),Re=K(ge,Z),Ie=K(Ae,Z),Te=ze<Pe+Re,Le=Te?ze-Ie:ze-Re,Me="".concat(j,"-nav-operations-hidden"),Be=0,Oe=0;function Ne(e){return e<Be?Be:e>Oe?Oe:e}Z&&d?(Be=0,Oe=Math.max(0,Pe-Le)):(Be=Math.min(0,Le-Pe),Oe=0);var De=(0,a.useRef)(null),je=(0,a.useState)(),Ge=(0,p.A)(je,2),He=Ge[0],We=Ge[1];function Xe(){We(Date.now())}function Ke(){De.current&&clearTimeout(De.current)}!function(e,t){var n=(0,a.useState)(),o=(0,p.A)(n,2),r=o[0],i=o[1],l=(0,a.useState)(0),c=(0,p.A)(l,2),d=c[0],s=c[1],u=(0,a.useState)(0),v=(0,p.A)(u,2),f=v[0],b=v[1],m=(0,a.useState)(),h=(0,p.A)(m,2),g=h[0],$=h[1],k=(0,a.useRef)(),y=(0,a.useRef)(),A=(0,a.useRef)(null);A.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(k.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;i({x:a,y:o});var l=a-r.x,c=o-r.y;t(l,c);var u=Date.now();s(u),b(u-d),$({x:l,y:c})}},onTouchEnd:function(){if(r&&(i(null),$(null),g)){var e=g.x/f,n=g.y/f,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var l=e,c=n;k.current=window.setInterval((function(){Math.abs(l)<.01&&Math.abs(c)<.01?window.clearInterval(k.current):t(20*(l*=E),20*(c*=E))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(a);r===i?o="x"===y.current?n:a:r>i?(o=n,y.current="x"):(o=a,y.current="y"),t(-o,-o)&&e.preventDefault()}},a.useEffect((function(){function t(e){A.current.onTouchMove(e)}function n(e){A.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){A.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){A.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(Y,(function(e,t){function n(e,t){e((function(e){return Ne(e+t)}))}return!!Te&&(Z?n(ae,e):n(le,t),Ke(),Xe(),!0)})),(0,a.useEffect)((function(){return Ke(),He&&(De.current=setTimeout((function(){We(0)}),100)),Ke}),[He]);var Fe=function(e,t,n,o,r,i,l){var c,d,s,u=l.tabs,v=l.tabPosition,p=l.rtl;return["top","bottom"].includes(v)?(c="width",d=p?"right":"left",s=Math.abs(n)):(c="height",d="top",s=-n),(0,a.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var r=e.get(u[o].key)||R;if(r[d]+r[c]>s+t){a=o-1;break}}for(var i=0,l=n-1;l>=0;l-=1)if((e.get(u[l].key)||R)[d]<s){i=l+1;break}return i>=a?[0,0]:[i,a]}),[e,t,o,r,i,s,v,u.map((function(e){return e.key})).join("_"),p])}(Ee,Le,Z?ne:ie,Pe,Re,Ie,(0,v.A)((0,v.A)({},e),{},{tabs:G})),Ve=(0,p.A)(Fe,2),qe=Ve[0],Ye=Ve[1],Qe=(0,x.A)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Ee.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Z){var n=ne;d?t.right<ne?n=t.right:t.right+t.width>ne+Le&&(n=t.right+t.width-Le):t.left<-ne?n=-t.left:t.left+t.width>-ne+Le&&(n=-(t.left+t.width-Le)),le(0),ae(Ne(n))}else{var a=ie;t.top<-ie?a=-t.top:t.top+t.height>-ie+Le&&(a=-(t.top+t.height-Le)),ae(0),le(Ne(a))}})),Je={};"top"===g||"bottom"===g?Je[d?"marginRight":"marginLeft"]=$:Je.marginTop=$;var Ue=G.map((function(e,t){var n=e.key;return a.createElement(W,{id:i,prefixCls:j,key:n,tab:e,style:0===t?void 0:Je,closable:e.closable,editable:b,active:n===c,renderWrapper:z,removeAriaLabel:null==m?void 0:m.removeAriaLabel,onClick:function(e){L(n,e)},onFocus:function(){Qe(n),Xe(),Y.current&&(d||(Y.current.scrollLeft=0),Y.current.scrollTop=0)}})})),Ze=function(){return Ce((function(){var e,t=new Map,n=null===(e=Q.current)||void 0===e?void 0:e.getBoundingClientRect();return G.forEach((function(e){var a,o=e.key,r=null===(a=Q.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat(T(o),'"]'));if(r){var i=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,o=e.offsetTop,r=e.offsetLeft,i=e.getBoundingClientRect(),l=i.width,c=i.height,d=i.x,s=i.y;return Math.abs(l-n)<1?[l,c,d-t.x,s-t.y]:[n,a,r,o]}(r,n),l=(0,p.A)(i,4),c=l[0],d=l[1],s=l[2],u=l[3];t.set(o,{width:c,height:d,left:s,top:u})}})),t}))};(0,a.useEffect)((function(){Ze()}),[G.map((function(e){return e.key})).join("_")]);var et=P((function(){var e=X(F),t=X(V),n=X(q);ue([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=X(U);$e(a);var o=X(J);xe(o);var r=X(Q);be([r[0]-a[0],r[1]-a[1]]),Ze()})),tt=G.slice(0,qe),nt=G.slice(Ye+1),at=[].concat((0,y.A)(tt),(0,y.A)(nt)),ot=Ee.get(c),rt=function(e){var t=e.activeTabOffset,n=e.horizontal,r=e.rtl,i=e.indicator,l=void 0===i?{}:i,c=l.size,d=l.align,s=void 0===d?"center":d,u=(0,a.useState)(),v=(0,p.A)(u,2),f=v[0],b=v[1],m=(0,a.useRef)(),h=o().useCallback((function(e){return"function"==typeof c?c(e):"number"==typeof c?c:e}),[c]);function g(){S.A.cancel(m.current)}return(0,a.useEffect)((function(){var e={};if(t)if(n){e.width=h(t.width);var a=r?"right":"left";"start"===s&&(e[a]=t[a]),"center"===s&&(e[a]=t[a]+t.width/2,e.transform=r?"translateX(50%)":"translateX(-50%)"),"end"===s&&(e[a]=t[a]+t.width,e.transform="translateX(-100%)")}else e.height=h(t.height),"start"===s&&(e.top=t.top),"center"===s&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===s&&(e.top=t.top+t.height,e.transform="translateY(-100%)");return g(),m.current=(0,S.A)((function(){b(e)})),g}),[t,n,r,s,h]),{style:f}}({activeTabOffset:ot,horizontal:Z,indicator:N,rtl:d}).style;(0,a.useEffect)((function(){Qe()}),[c,Be,Oe,I(ot),I(Ee),Z]),(0,a.useEffect)((function(){et()}),[d]);var it,lt,ct,dt,st=!!at.length,ut="".concat(j,"-nav-wrap");return Z?d?(lt=ne>0,it=ne!==Oe):(it=ne<0,lt=ne!==Be):(ct=ie<0,dt=ie!==Be),a.createElement(A.A,{onResize:et},a.createElement("div",{ref:(0,_.xK)(t,F),role:"tablist",className:h()("".concat(j,"-nav"),n),style:r,onKeyDown:function(){Xe()}},a.createElement(O,{ref:V,position:"left",extra:f,prefixCls:j}),a.createElement(A.A,{onResize:et},a.createElement("div",{className:h()(ut,(0,u.A)((0,u.A)((0,u.A)((0,u.A)({},"".concat(ut,"-ping-left"),it),"".concat(ut,"-ping-right"),lt),"".concat(ut,"-ping-top"),ct),"".concat(ut,"-ping-bottom"),dt)),ref:Y},a.createElement(A.A,{onResize:et},a.createElement("div",{ref:Q,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(ne,"px, ").concat(ie,"px)"),transition:He?"none":void 0}},Ue,a.createElement(B,{ref:U,prefixCls:j,locale:m,editable:b,style:(0,v.A)((0,v.A)({},0===Ue.length?void 0:Je),{},{visibility:st?"hidden":null})}),a.createElement("div",{className:h()("".concat(j,"-ink-bar"),(0,u.A)({},"".concat(j,"-ink-bar-animated"),l.inkBar)),style:rt}))))),a.createElement(H,(0,s.A)({},e,{removeAriaLabel:null==m?void 0:m.removeAriaLabel,ref:J,prefixCls:j,tabs:at,className:!st&&Me,tabMoving:!!He})),a.createElement(O,{ref:q,position:"right",extra:f,prefixCls:j})))}));const V=F;var q=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.className,r=e.style,i=e.id,l=e.active,c=e.tabKey,d=e.children;return a.createElement("div",{id:i&&"".concat(i,"-panel-").concat(c),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(c),"aria-hidden":!l,style:r,className:h()(n,l&&"".concat(n,"-active"),o),ref:t},d)}));const Y=q;var Q=["renderTabBar"],J=["label","key"];const U=function(e){var t=e.renderTabBar,n=(0,b.A)(e,Q),o=a.useContext(k).tabs;return t?t((0,v.A)((0,v.A)({},n),{},{panes:o.map((function(e){var t=e.label,n=e.key,o=(0,b.A)(e,J);return a.createElement(Y,(0,s.A)({tab:t,key:n,tabKey:n},o))}))}),V):a.createElement(V,n)};var Z=n(3840),ee=["key","forceRender","style","className","destroyInactiveTabPane"];const te=function(e){var t=e.id,n=e.activeKey,o=e.animated,r=e.tabPosition,i=e.destroyInactiveTabPane,l=a.useContext(k),c=l.prefixCls,d=l.tabs,p=o.tabPane,f="".concat(c,"-tabpane");return a.createElement("div",{className:h()("".concat(c,"-content-holder"))},a.createElement("div",{className:h()("".concat(c,"-content"),"".concat(c,"-content-").concat(r),(0,u.A)({},"".concat(c,"-content-animated"),p))},d.map((function(e){var r=e.key,l=e.forceRender,c=e.style,d=e.className,u=e.destroyInactiveTabPane,m=(0,b.A)(e,ee),g=r===n;return a.createElement(Z.Ay,(0,s.A)({key:r,visible:g,forceRender:l,removeOnLeave:!(!i&&!u),leavedClassName:"".concat(f,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,i=e.className;return a.createElement(Y,(0,s.A)({},m,{prefixCls:f,id:t,tabKey:r,animated:p,active:g,style:(0,v.A)((0,v.A)({},c),o),className:h()(d,i),ref:n}))}))}))))};n(71356);var ne=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],ae=0,oe=a.forwardRef((function(e,t){var n=e.id,o=e.prefixCls,r=void 0===o?"rc-tabs":o,i=e.className,l=e.items,c=e.direction,d=e.activeKey,m=e.defaultActiveKey,y=e.editable,A=e.animated,x=e.tabPosition,_=void 0===x?"top":x,S=e.tabBarGutter,w=e.tabBarStyle,C=e.tabBarExtraContent,E=e.locale,z=e.more,P=e.destroyInactiveTabPane,R=e.renderTabBar,I=e.onChange,T=e.onTabClick,L=e.onTabScroll,M=e.getPopupContainer,B=e.popupClassName,O=e.indicator,N=(0,b.A)(e,ne),D=a.useMemo((function(){return(l||[]).filter((function(e){return e&&"object"===(0,f.A)(e)&&"key"in e}))}),[l]),j="rtl"===c,G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,v.A)({inkBar:!0},"object"===(0,f.A)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(A),H=(0,a.useState)(!1),W=(0,p.A)(H,2),X=W[0],K=W[1];(0,a.useEffect)((function(){K((0,$.A)())}),[]);var F=(0,g.A)((function(){var e;return null===(e=D[0])||void 0===e?void 0:e.key}),{value:d,defaultValue:m}),V=(0,p.A)(F,2),q=V[0],Y=V[1],Q=(0,a.useState)((function(){return D.findIndex((function(e){return e.key===q}))})),J=(0,p.A)(Q,2),Z=J[0],ee=J[1];(0,a.useEffect)((function(){var e,t=D.findIndex((function(e){return e.key===q}));-1===t&&(t=Math.max(0,Math.min(Z,D.length-1)),Y(null===(e=D[t])||void 0===e?void 0:e.key)),ee(t)}),[D.map((function(e){return e.key})).join("_"),q,Z]);var oe=(0,g.A)(null,{value:n}),re=(0,p.A)(oe,2),ie=re[0],le=re[1];(0,a.useEffect)((function(){n||(le("rc-tabs-".concat(ae)),ae+=1)}),[]);var ce={id:ie,activeKey:q,animated:G,tabPosition:_,rtl:j,mobile:X},de=(0,v.A)((0,v.A)({},ce),{},{editable:y,locale:E,more:z,tabBarGutter:S,onTabClick:function(e,t){null==T||T(e,t);var n=e!==q;Y(e),n&&(null==I||I(e))},onTabScroll:L,extra:C,style:w,panes:null,getPopupContainer:M,popupClassName:B,indicator:O});return a.createElement(k.Provider,{value:{tabs:D,prefixCls:r}},a.createElement("div",(0,s.A)({ref:t,id:n,className:h()(r,"".concat(r,"-").concat(_),(0,u.A)((0,u.A)((0,u.A)({},"".concat(r,"-mobile"),X),"".concat(r,"-editable"),y),"".concat(r,"-rtl"),j),i)},N),a.createElement(U,(0,s.A)({},de,{renderTabBar:R})),a.createElement(te,(0,s.A)({destroyInactiveTabPane:P},ce,{animated:G}))))}));const re=oe;var ie=n(51197),le=n(84472),ce=n(77879),de=n(18221);const se={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ue=n(73288),ve=n(51857),pe=n(85359),fe=n(2947),be=n(42162),me=n(92259);const he=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,me._j)(e,"slide-up"),(0,me._j)(e,"slide-down")]]},ge=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:a,cardGutter:o,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${(0,ve.zA)(e.lineWidth)} ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,ve.zA)(o)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,ve.zA)(e.borderRadiusLG)} ${(0,ve.zA)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,ve.zA)(e.borderRadiusLG)} ${(0,ve.zA)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,ve.zA)(o)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,ve.zA)(e.borderRadiusLG)} 0 0 ${(0,ve.zA)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,ve.zA)(e.borderRadiusLG)} ${(0,ve.zA)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},$e=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,pe.dF)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,ve.zA)(a)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},pe.L9),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,ve.zA)(e.paddingXXS)} ${(0,ve.zA)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},ke=e=>{const{componentCls:t,margin:n,colorBorderSecondary:a,horizontalMargin:o,verticalItemPadding:r,verticalItemMargin:i,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,ve.zA)(e.lineWidth)} ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,ve.zA)(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,ve.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,ve.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ye=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:a,horizontalItemPaddingSM:o,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,ve.zA)(e.borderRadius)} ${(0,ve.zA)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,ve.zA)(e.borderRadius)} ${(0,ve.zA)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,ve.zA)(e.borderRadius)} ${(0,ve.zA)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,ve.zA)(e.borderRadius)} 0 0 ${(0,ve.zA)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},Ae=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:a,iconCls:o,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:l,itemColor:c}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:c,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,pe.K8)(e)),"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${d}-active ${d}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${o}`]:{margin:0},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:r}}}},xe=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:a,cardGutter:o,calc:r}=e,i=`${t}-rtl`;return{[i]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,ve.zA)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,ve.zA)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,ve.zA)(r(e.marginXXS).mul(-1).equal())},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},_e=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:a,cardGutter:o,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,pe.dF)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,minHeight:a,marginLeft:{_skip_check_:!0,value:o},padding:`0 ${(0,ve.zA)(e.paddingXS)}`,background:"transparent",border:`${(0,ve.zA)(e.lineWidth)} ${e.lineType} ${l}`,borderRadius:`${(0,ve.zA)(e.borderRadiusLG)} ${(0,ve.zA)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,pe.K8)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Ae(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Se=(0,fe.OF)("Tabs",(e=>{const t=(0,be.h1)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,ve.zA)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,ve.zA)(e.horizontalItemGutter)}`});return[ye(t),xe(t),ke(t),$e(t),ge(t),_e(t),he(t)]}),(e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}));const we=e=>{var t,n,o,c,s,u,v,p,f,b,m;const{type:h,className:g,rootClassName:$,size:k,onEdit:y,hideAdd:A,centered:x,addIcon:_,removeIcon:S,moreIcon:w,more:C,popupClassName:E,children:z,items:P,animated:R,style:I,indicatorSize:T,indicator:L}=e,M=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:B}=M,{direction:O,tabs:N,getPrefixCls:D,getPopupContainer:j}=a.useContext(ie.QO),G=D("tabs",B),H=(0,le.A)(G),[W,X,K]=Se(G,H);let F;"editable-card"===h&&(F={onEdit:(e,t)=>{let{key:n,event:a}=t;null==y||y("add"===e?a:n,e)},removeIcon:null!==(t=null!=S?S:null==N?void 0:N.removeIcon)&&void 0!==t?t:a.createElement(r.A,null),addIcon:(null!=_?_:null==N?void 0:N.addIcon)||a.createElement(l.A,null),showAdd:!0!==A});const V=D(),q=(0,ce.A)(k),Y=function(e,t){return e||function(e){return e.filter((e=>e))}((0,ue.A)(t).map((e=>{if(a.isValidElement(e)){const{key:t,props:n}=e,a=n||{},{tab:o}=a,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(a,["tab"]);return Object.assign(Object.assign({key:String(t)},r),{label:o})}return null})))}(P,z),Q=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{}),t.tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},se),{motionName:(0,de.b)(e,"switch")})),t}(G,R),J=Object.assign(Object.assign({},null==N?void 0:N.style),I),U={align:null!==(n=null==L?void 0:L.align)&&void 0!==n?n:null===(o=null==N?void 0:N.indicator)||void 0===o?void 0:o.align,size:null!==(v=null!==(s=null!==(c=null==L?void 0:L.size)&&void 0!==c?c:T)&&void 0!==s?s:null===(u=null==N?void 0:N.indicator)||void 0===u?void 0:u.size)&&void 0!==v?v:null==N?void 0:N.indicatorSize};return W(a.createElement(re,Object.assign({direction:O,getPopupContainer:j},M,{items:Y,className:d()({[`${G}-${q}`]:q,[`${G}-card`]:["card","editable-card"].includes(h),[`${G}-editable-card`]:"editable-card"===h,[`${G}-centered`]:x},null==N?void 0:N.className,g,$,X,K,H),popupClassName:d()(E,X,K,H),style:J,editable:F,more:Object.assign({icon:null!==(m=null!==(b=null!==(f=null===(p=null==N?void 0:N.more)||void 0===p?void 0:p.icon)&&void 0!==f?f:null==N?void 0:N.moreIcon)&&void 0!==b?b:w)&&void 0!==m?m:a.createElement(i.A,null),transitionName:`${V}-slide-up`},C),prefixCls:G,animated:Q,indicator:U})))};we.TabPane=()=>null;const Ce=we}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.12/1f4b8526b804ba38ef762b044fd88f2e/489.lite.js.map
