"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[322],{63736:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(31643),a=n(49114),c=n(60204);const o=e=>{let{url:t,style:n,label:o}=e;const{__:i}=(0,c.Q)(),s={cursor:"pointer",...n};return React.createElement(r.Z,{style:s,onClick:()=>window.open(t,"_blank")},React.createElement(a.Z,null)," ",o||i("Learn more"))}},45567:(e,t,n)=>{n.d(t,{f:()=>r});const r=e=>{let{children:t,maxWidth:n="auto",style:r={}}=e;return React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===n?1300:n,...r}},t)}},99235:(e,t,n)=>{n.r(t),n.d(t,{ConfigLicensing:()=>h});var r=n(68038),a=n(39445),c=n(89059),o=n(82780),i=n(74943),s=n(84106),l=n(87363),u=n(49048),m=n(40045),f=n(70006),d=n(63736),g=n(61959);const p=(0,r.Pi)((e=>{let{withinModal:t=!1}=e;const{pluginUpdateStore:{pluginUpdates:n}}=(0,a.useStores)(),{optionStore:r,checklistStore:p}=(0,u.m)(),{slug:v,others:{isPro:h,showLicenseFormImmediate:y},publicUrl:E}=r,b=n.get(v),{navigateAfterActivation:C}=(0,g.y)(),x=(0,l.useCallback)((()=>{p.fetchChecklist(),(0,f.refreshQueue)(),r.setShowLicenseFormImmediate(!1,!0),C&&(window.location.href=C)}),[p,r,C]),Z=(0,l.useCallback)((()=>{p.fetchChecklist(),r.setShowLicenseFormImmediate(!1,!1)}),[p,r]),R=(0,l.useCallback)((()=>{r.setShowLicenseFormImmediate(!1,!1),b.skip()}),[b,r]);(0,l.useEffect)((()=>{y&&null!=b&&b.hasInteractedWithFormOnce&&R()}),[b,y,R]);const w=(0,m._i)((0,m.__)("Before we start configuring your cookie banner, you can {{strong}}obtain your free license to enjoy all the benefits{{/strong}} of the free version of Real Cookie Banner. The cookies are already waiting for you. Get started now!"),{strong:React.createElement("strong",null)});return React.createElement(React.Fragment,null,y&&React.createElement("div",{style:{maxWidth:650,textAlign:"center",margin:"0 auto"}},!t&&React.createElement(s.C,{src:`${E}images/logos/real-cookie-banner.svg`,shape:"square",size:130,style:{backgroundColor:"white",padding:25,borderRadius:999,marginBottom:10}}),!t&&!h&&React.createElement("p",{style:{fontSize:15,margin:"0 auto 20px"}},w)),React.createElement(c.Z,{title:t||!b?void 0:React.createElement(React.Fragment,null,h||b.isLicensed?(0,m.__)("License activation"):(0,m.__)("Get your free license")," ",!h&&!y&&React.createElement(d.r,{url:(0,m.__)("https://devowl.io/knowledge-base/real-cookie-banner-upgrade-free-to-pro-version/"),label:(0,m.__)("Upgrade to PRO version")})),bordered:!t},React.createElement(o.Z,{direction:"vertical",size:"large"},t&&!h&&React.createElement("p",{className:"description",style:{fontWeight:"bold"}},w),React.createElement(a.PluginUpdateEmbed,{formProps:{onSave:x,onFailure:y&&!h?R:void 0,footer:React.createElement(i.Z.Item,{style:{margin:"25px 0 0",textAlign:y?"center":void 0}},React.createElement("input",{type:"submit",className:"button button-primary",value:y?h?(0,m.__)("Activate license & continue"):(0,m.__)("Activate free license & Continue"):(0,m.__)("Save")}))},listProps:{onDeactivate:Z},slug:v}))),b&&y&&React.createElement("div",{style:{textAlign:"center",marginBottom:20,marginTop:t?0:20}},React.createElement("a",{className:"button-link",onClick:R},h?(0,m.__)("Continue without regular updates and without any support"):(0,m.__)("Continue without any support and without e.g. discount announcements"))))}));var v=n(45567);const h=(0,r.Pi)((()=>React.createElement(v.f,{maxWidth:800,style:{margin:"auto"}},React.createElement(a.Provider,null,React.createElement(p,null)))))},61959:(e,t,n)=>{n.d(t,{y:()=>c});var r=n(66711),a=n(8700);function c(){return a.qs.parse((0,r.useLocation)().search)}},49114:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(40985),a=n(87363);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]},name:"question-circle",theme:"filled"};var o=n(15548),i=function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="QuestionCircleFilled";const s=a.forwardRef(i)},3900:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(40985),a=n(87363);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};var o=n(15548),i=function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="QuestionCircleOutlined";const s=a.forwardRef(i)},84106:(e,t,n)=>{n.d(t,{C:()=>R});var r=n(46270),a=n(1520),c=n(11616),o=n(24758),i=n(40914),s=n.n(i),l=n(47522),u=n(54552),m=n(87363),f=n(1960),d=n(21486),g=n(4800),p=m.createContext("default"),v=function(e){var t=e.children,n=e.size;return m.createElement(p.Consumer,null,(function(e){return m.createElement(p.Provider,{value:n||e},t)}))};const h=p;var y=function(e,t){var n,i,p=m.useContext(h),v=m.useState(1),y=(0,o.Z)(v,2),E=y[0],b=y[1],C=m.useState(!1),x=(0,o.Z)(C,2),Z=x[0],R=x[1],w=m.useState(!0),k=(0,o.Z)(w,2),_=k[0],S=k[1],z=m.useRef(null),P=m.useRef(null),O=(0,u.sQ)(t,z),N=m.useContext(f.E_).getPrefixCls,F=function(){if(P.current&&z.current){var t=P.current.offsetWidth,n=z.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&b(n-2*a<t?(n-2*a)/t:1)}}};m.useEffect((function(){R(!0)}),[]),m.useEffect((function(){S(!0),b(1)}),[e.src]),m.useEffect((function(){F()}),[e.gap]);var L,W=e.prefixCls,j=e.shape,B=void 0===j?"circle":j,A=e.size,I=void 0===A?"default":A,M=e.src,T=e.srcSet,Q=e.icon,U=e.className,V=e.alt,q=e.draggable,G=e.children,H=e.crossOrigin,D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),X="default"===I?p:I,$=Object.keys("object"===(0,c.Z)(X)&&X||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),J=(0,d.Z)($),K=m.useMemo((function(){if("object"!==(0,c.Z)(X))return{};var e=g.c4.find((function(e){return J[e]})),t=X[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:Q?t/2:18}:{}}),[J,X]),Y=N("avatar",W),ee=s()((n={},(0,a.Z)(n,"".concat(Y,"-lg"),"large"===X),(0,a.Z)(n,"".concat(Y,"-sm"),"small"===X),n)),te=m.isValidElement(M),ne=s()(Y,ee,(i={},(0,a.Z)(i,"".concat(Y,"-").concat(B),!!B),(0,a.Z)(i,"".concat(Y,"-image"),te||M&&_),(0,a.Z)(i,"".concat(Y,"-icon"),!!Q),i),U),re="number"==typeof X?{width:X,height:X,lineHeight:"".concat(X,"px"),fontSize:Q?X/2:18}:{};if("string"==typeof M&&_)L=m.createElement("img",{src:M,draggable:q,srcSet:T,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&S(!1)},alt:V,crossOrigin:H});else if(te)L=M;else if(Q)L=Q;else if(Z||1!==E){var ae="scale(".concat(E,") translateX(-50%)"),ce={msTransform:ae,WebkitTransform:ae,transform:ae},oe="number"==typeof X?{lineHeight:"".concat(X,"px")}:{};L=m.createElement(l.Z,{onResize:F},m.createElement("span",{className:"".concat(Y,"-string"),ref:P,style:(0,r.Z)((0,r.Z)({},oe),ce)},G))}else L=m.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:P},G);return delete D.onError,delete D.gap,m.createElement("span",(0,r.Z)({},D,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},re),K),D.style),className:ne,ref:O}),L)};const E=m.forwardRef(y);var b=n(13835),C=n(86837),x=n(86393);var Z=E;Z.Group=function(e){var t=m.useContext(f.E_),n=t.getPrefixCls,r=t.direction,c=e.prefixCls,o=e.className,i=void 0===o?"":o,l=e.maxCount,u=e.maxStyle,d=e.size,g=n("avatar-group",c),p=s()(g,(0,a.Z)({},"".concat(g,"-rtl"),"rtl"===r),i),h=e.children,y=e.maxPopoverPlacement,Z=void 0===y?"top":y,R=e.maxPopoverTrigger,w=void 0===R?"hover":R,k=(0,b.Z)(h).map((function(e,t){return(0,x.Tm)(e,{key:"avatar-key-".concat(t)})})),_=k.length;if(l&&l<_){var S=k.slice(0,l),z=k.slice(l,_);return S.push(m.createElement(C.Z,{key:"avatar-popover-key",content:z,trigger:w,placement:Z,overlayClassName:"".concat(g,"-popover")},m.createElement(E,{style:u},"+".concat(_-l)))),m.createElement(v,{size:d},m.createElement("div",{className:p,style:e.style},S))}return m.createElement(v,{size:d},m.createElement("div",{className:p,style:e.style},k))};const R=Z}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.2/db71336f9d00d1bc07da3053b454e0e2/chunk-config-tab-licensing.lite.js.map