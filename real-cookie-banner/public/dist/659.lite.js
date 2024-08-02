"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[659],{53029:(e,n,i)=>{i.d(n,{A:()=>o});var t=i(2464),a=i(41594);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var c=i(4679),r=function(e,n){return a.createElement(c.A,(0,t.A)({},e,{ref:n,icon:l}))};const o=a.forwardRef(r)},19393:(e,n,i)=>{i.d(n,{A:()=>_});var t=i(41594),a=i(9066),l=i(65924),c=i.n(l),r=i(2464),o=i(21483),d=i(61129),s=i(4105),u=i(74188),h=i(81739),g=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],m=t.forwardRef((function(e,n){var i,a=e.prefixCls,l=void 0===a?"rc-switch":a,m=e.className,$=e.checked,f=e.defaultChecked,k=e.disabled,p=e.loadingIcon,b=e.checkedChildren,S=e.unCheckedChildren,v=e.onClick,C=e.onChange,I=e.onKeyDown,w=(0,s.A)(e,g),y=(0,u.A)(!1,{value:$,defaultValue:f}),E=(0,d.A)(y,2),A=E[0],M=E[1];function x(e,n){var i=A;return k||(M(i=e),null==C||C(i,n)),i}var z=c()(l,m,(i={},(0,o.A)(i,"".concat(l,"-checked"),A),(0,o.A)(i,"".concat(l,"-disabled"),k),i));return t.createElement("button",(0,r.A)({},w,{type:"button",role:"switch","aria-checked":A,disabled:k,className:z,ref:n,onKeyDown:function(e){e.which===h.A.LEFT?x(!1,e):e.which===h.A.RIGHT&&x(!0,e),null==I||I(e)},onClick:function(e){var n=x(!A,e);null==v||v(n,e)}}),p,t.createElement("span",{className:"".concat(l,"-inner")},t.createElement("span",{className:"".concat(l,"-inner-checked")},b),t.createElement("span",{className:"".concat(l,"-inner-unchecked")},S)))}));m.displayName="Switch";const $=m;var f=i(32398),k=i(80840),p=i(77648),b=i(31754),S=i(78052),v=i(26411),C=i(71094),I=i(52146),w=i(63829);const y=e=>{const{componentCls:n,trackHeightSM:i,trackPadding:t,trackMinWidthSM:a,innerMinMarginSM:l,innerMaxMarginSM:c,handleSizeSM:r,calc:o}=e,d=`${n}-inner`,s=(0,S.zA)(o(r).add(o(t).mul(2)).equal()),u=(0,S.zA)(o(c).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:a,height:i,lineHeight:(0,S.zA)(i),[`${n}-inner`]:{paddingInlineStart:c,paddingInlineEnd:l,[`${d}-checked, ${d}-unchecked`]:{minHeight:i},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${u})`,marginInlineEnd:`calc(100% - ${s} + ${u})`},[`${d}-unchecked`]:{marginTop:o(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:r,height:r},[`${n}-loading-icon`]:{top:o(o(r).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:l,paddingInlineEnd:c,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${u})`,marginInlineEnd:`calc(-100% + ${s} - ${u})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(o(r).add(t).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:o(e.marginXXS).div(2).equal(),marginInlineEnd:o(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:o(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:o(e.marginXXS).div(2).equal()}}}}}}},E=e=>{const{componentCls:n,handleSize:i,calc:t}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:t(t(i).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},A=e=>{const{componentCls:n,trackPadding:i,handleBg:t,handleShadow:a,handleSize:l,calc:c}=e,r=`${n}-handle`;return{[n]:{[r]:{position:"absolute",top:i,insetInlineStart:i,width:l,height:l,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t,borderRadius:c(l).div(2).equal(),boxShadow:a,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${r}`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(c(l).add(i).equal())})`},[`&:not(${n}-disabled):active`]:{[`${r}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${r}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},M=e=>{const{componentCls:n,trackHeight:i,trackPadding:t,innerMinMargin:a,innerMaxMargin:l,handleSize:c,calc:r}=e,o=`${n}-inner`,d=(0,S.zA)(r(c).add(r(t).mul(2)).equal()),s=(0,S.zA)(r(l).mul(2).equal());return{[n]:{[o]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:l,paddingInlineEnd:a,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${o}-checked, ${o}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:i},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${s})`,marginInlineEnd:`calc(100% - ${d} + ${s})`},[`${o}-unchecked`]:{marginTop:r(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${o}`]:{paddingInlineStart:a,paddingInlineEnd:l,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${s})`,marginInlineEnd:`calc(-100% + ${d} - ${s})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:r(t).mul(2).equal(),marginInlineEnd:r(t).mul(-1).mul(2).equal()}},[`&${n}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:r(t).mul(-1).mul(2).equal(),marginInlineEnd:r(t).mul(2).equal()}}}}}},x=e=>{const{componentCls:n,trackHeight:i,trackMinWidth:t}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,C.dF)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t,height:i,lineHeight:`${(0,S.zA)(i)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),(0,C.K8)(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},z=(0,I.OF)("Switch",(e=>{const n=(0,w.h1)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[x(n),M(n),A(n),E(n),y(n)]}),(e=>{const{fontSize:n,lineHeight:i,controlHeight:t,colorWhite:a}=e,l=n*i,c=t/2,r=l-4,o=c-4;return{trackHeight:l,trackHeightSM:c,trackMinWidth:2*r+8,trackMinWidthSM:2*o+4,trackPadding:2,handleBg:a,handleSize:r,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new v.q("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:r/2,innerMaxMargin:r+2+4,innerMinMarginSM:o/2,innerMaxMarginSM:o+2+4}}));const O=t.forwardRef(((e,n)=>{const{prefixCls:i,size:l,disabled:r,loading:o,className:d,rootClassName:s,style:h,checked:g,value:m,defaultChecked:S,defaultValue:v,onChange:C}=e,I=function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(i[t[a]]=e[t[a]])}return i}(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[w,y]=(0,u.A)(!1,{value:null!=g?g:m,defaultValue:null!=S?S:v}),{getPrefixCls:E,direction:A,switch:M}=t.useContext(k.QO),x=t.useContext(p.A),O=(null!=r?r:x)||o,q=E("switch",i),_=t.createElement("div",{className:`${q}-handle`},o&&t.createElement(a.A,{className:`${q}-loading-icon`})),[N,H,D]=z(q),L=(0,b.A)(l),j=c()(null==M?void 0:M.className,{[`${q}-small`]:"small"===L,[`${q}-loading`]:o,[`${q}-rtl`]:"rtl"===A},d,s,H,D),P=Object.assign(Object.assign({},null==M?void 0:M.style),h);return N(t.createElement(f.A,{component:"Switch"},t.createElement($,Object.assign({},I,{checked:w,onChange:function(){y(arguments.length<=0?void 0:arguments[0]),null==C||C.apply(void 0,arguments)},prefixCls:q,className:j,style:P,disabled:O,ref:n,loadingIcon:_}))))})),q=O;q.__ANT_SWITCH=!0;const _=q},84255:(e,n,i)=>{i.d(n,{Ay:()=>s});var t,a=i(41594),l=i(69665),c={exports:{}},r={};c.exports=function(){if(t)return r;t=1;var e=a,n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,t){var a,r={},d=null,s=null;for(a in void 0!==t&&(d=""+t),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(s=i.ref),i)l.call(i,a)&&!o.hasOwnProperty(a)&&(r[a]=i[a]);if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===r[a]&&(r[a]=i[a]);return{$$typeof:n,type:e,key:d,ref:s,props:r,_owner:c.current}}return r.Fragment=i,r.jsx=d,r.jsxs=d,r}();var o=c.exports;const d=e=>{const n=function(e){const n=(0,l.useBlocker)(e);return(0,a.useEffect)((()=>{"blocked"===n.state&&!e&&n.reset()}),[n,e]),(0,l.useBeforeUnload)((0,a.useCallback)((n=>{("boolean"==typeof e&&!0===e||"function"==typeof e&&e())&&(n.preventDefault(),n.returnValue="Changes that you made may not be saved.")}),[e]),{capture:!0}),n}(e);return{isActive:"blocked"===n.state,onConfirm:()=>{"blocked"===n.state&&setTimeout(n.proceed,0)},resetConfirmation:()=>{"blocked"===n.state&&n.reset()}}};function s({when:e,children:n,beforeCancel:i,beforeConfirm:t}){const{isActive:l,onConfirm:c,resetConfirmation:r}=d(e),s=(0,a.useCallback)((async()=>{t&&await t(),c()}),[t,c]),u=(0,a.useCallback)((async()=>{i&&await i(),r()}),[i,r]);return l?o.jsx(o.Fragment,{children:n({isActive:!0,onConfirm:s,onCancel:u})}):null}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.13/f4b832f530ffc0562bab84260c3ac58e/659.lite.js.map
