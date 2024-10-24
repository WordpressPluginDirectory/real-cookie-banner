var devowlWp_customize;(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){var t,n,o;return void 0===e&&(e=!0),e&&(null==(n=window)||null==(t=n.parent)?void 0:t.wp.customize)||(null==(o=window)?void 0:o.wp.customize)}function o(e,t,o){void 0===o&&(o=!1);const i=n(),s=i.panel(e)||i.section(e);if(!s)return!1;let r=s.expanded();const c=(n,i)=>{var s;(o||r!==n)&&[`accordion-panel-${e}`,`accordion-section-${e}`].indexOf(null==(s=i.currentTarget)?void 0:s.id)>-1&&(t(n),r=n)};return t(r),s.container.bind("expanded",(e=>{c(!0,e)})).bind("collapsed",(e=>{c(!1,e)})),!0}function i(e,t){const o=n();for(const n of Object.keys(e)){const i=e[n];for(const e of Object.keys(i))o(i[e],(o=>{o.bind("change",(o=>{t(n,e,o)}))}))}}function s(e){let{immediateApply:t,onChange:s,onPanelChange:r}=e;const c=n();if(c.panel){if(t&&s)for(const e of Object.keys(t)){const n=t[e];for(const t of Object.keys(n)){const o=n[t];s[1](e,t,c(o).get())}}s&&i(...s),r&&o(...r)}else console.warn("The sidebar customize API could not be retrieved!")}function r(){return!n(!1).panel}e.r(t),e.d(t,{A11yContrastRatio:()=>X,A11yFontSize:()=>Z,A11yFontWeight:()=>K,A11yNotice:()=>q,A11yTextDecoration:()=>te,CONDITIONAL_HIDDEN_CLASS_NAME:()=>a,CONTROL_VISIBILITY_CHANGED_EVENT:()=>c,CUSTOMIZE_CLASS_CHECKBOX:()=>h,CUSTOM_CONTROL_INPUT_CHECKBOX_CLASS_NAME:()=>S,ControlFieldset:()=>z,CssMarginInput:()=>T,CustomControlContextFactory:()=>w,CustomHTML:()=>M,Headline:()=>k,HeadlineBeforeSection:()=>oe,RangeInput:()=>A,SETTING_ACCESSIBILITY_CHANGED_EVENT:()=>$,SameSectionAccordion:()=>ie,__:()=>H,_i:()=>V,_n:()=>W,_nx:()=>B,_x:()=>D,a11yConstrastRatio:()=>Q,a11yFontSize:()=>ee,a11yFontWeight:()=>Y,a11yTextDecoration:()=>ne,addContentBesideSection:()=>m,calculateControlBreadcrumb:()=>G,conditionalControls:()=>l,customControl:()=>E,customControlBackboneView:()=>N,getLuminosity:()=>I,getLuminosityRatio:()=>L,getSanitizedControlValue:()=>f,getSidebarCustomize:()=>n,hasControlChanged:()=>p,initializeTinyMce:()=>x,isPreviewScreen:()=>r,listenChanges:()=>i,listenPanelExpanded:()=>o,makeDefaultsResettable:()=>y,previewFactory:()=>s,ready:()=>d,sidebarFactory:()=>R,useA11yDispatcher:()=>U,useCustomControl:()=>_,useCustomizeValues:()=>J});const c="DevOwl/Customize/Control/VisibilityChanged",a="conditional-hidden";function l(e,t){const i=n();for(const n of Object.keys(t))i.control(n,(s=>{const r=t[n];let l;function d(){let e=!0;for(const t of Object.keys(r)){const n=r[t],o=i(t).get();if("function"==typeof n){if(!n(o)){e=!1;break}}else{const t=!0===n||!1===n;if(t&&!!+o!==n||!t&&o!==n){e=!1;break}}}return["code_editor"].indexOf(s.params.type)>-1?e?s.container.fadeTo(0,1):s.container.fadeTo(0,0):e?s.activate():s.deactivate(),e?s.container.removeClass(a):s.container.addClass(a),e!==l&&(l=e,document.dispatchEvent(new CustomEvent(c,{detail:{setting:n}}))),e}d(),Object.keys(r).forEach((e=>i(e).bind("change",(()=>{d()})))),o(e,(e=>{e&&d()}),!0)}))}function d(e){const t=n();t.bind("ready",(()=>{e(t)}))}const u=devowlWp_utils;function m(e){const t=n();for(const n of Object.keys(e)){var o,i;let s={};const r=e[n];"function"==typeof r?(s.render=r,s.type="before"):s=r;const c=(null==(o=t.section(n))?void 0:o.container.get(0))||(null==(i=t.control(n))?void 0:i.container.get(0));if(!c)return;const a=document.createElement("div");"before"===s.type?c.before(a):c.after(a),(0,u.createRoot)(a).render(s.render(c))}}const h="customize-control customize-control-checkbox";function f(e,t){var o;const i=n();let s;const r=null==(o=i.control(e))?void 0:o.container;if(!r)return null;(r.hasClass(h)||"boolean"==typeof t)&&(s="checkbox");let c=i(e).get();return"checkbox"===s?c=!!+c:isNaN(+c)||(c=+c),c}function p(e,t){return JSON.stringify(f(e,t))!==JSON.stringify(t)}const v=jQuery;var g=e.n(v);function y(e,t){const o=n();for(const n in t){const s=t[n];for(const t in s){var i;let r=s[t];"function"==typeof r.toJS&&(r=r.toJS());const c=e.settings[n][t],a=null==(i=o.control(c))?void 0:i.container;if(a){let e=parseInt(a.css("padding-top"));a.hasClass(h)&&(e+=9),a.css("position","relative");const t=g()(`<button class="button button-small customize-button-reset" style="top:${e}px;">\n    <span class="dashicons dashicons-image-rotate"></span>\n</button>`).appendTo(a).on("click",(e=>{o(c).set(r),a.trigger("customize-reset-value",{defaultValue:r}),t.hide(),e.preventDefault()}));let n;const i=()=>{clearTimeout(n),n=setTimeout((()=>t[p(c,r)?"show":"hide"]()),50)};i(),o(c,(e=>e.bind("change",i)))}}}}const b="devowl-tinymce-setup";function x(){function e(){const e=g()(this);e.addClass(b);const t=e.parents("li.customize-control"),n=e.data("customize-setting-link"),o=window._wpCustomizeSettings.controls[n],{editor:i}=window.wp;if(!o)return;const{mediaButtons:s,toolbar1:r,toolbar2:c}=o;try{i.initialize(g()(this).attr("id"),{quicktags:!0,dragDropUpload:!1,teeny:!1,textareaRows:5,mediaButtons:s,tinymce:{toolbar1:r,toolbar2:c,forced_root_block:!1,wordpress_adv_hidden:!1,wpautop:!1,setup:function(e){t.on("customize-reset-value",((t,n)=>{let{defaultValue:o}=n;e.setContent(o)}))}}})}catch(e){}}g()(document).on("tinymce-editor-init",(function(e,t){t.on("change",(()=>{window.tinyMCE.triggerSave(),g()("#".concat(t.id)).trigger("change")}))}));const t=()=>g()(`.customize-control-devowl-tinymce-editor:not(.${b})`).each(e);t(),jQuery(document).on("oceanready",t)}const C=ReactJSXRuntime,j=React;class w{static Context(){return this.context=this.context||(0,j.createContext)({})}}function _(){return(0,j.useContext)(w.Context())}const z=e=>{let{children:t}=e;const{params:{label:n,description:o,skipFieldSet:i,className:s},initializeNotifications:r}=_();return i?(0,C.jsx)("div",{className:s||"",children:t}):(0,C.jsxs)(C.Fragment,{children:[!!n&&(0,C.jsx)("span",{className:"customize-control-title",children:n}),!!r&&(0,C.jsx)("div",{className:"customize-control-notifications-container",style:{display:"none"},ref:r}),!!o&&(0,C.jsx)("span",{className:"description customize-control-description",dangerouslySetInnerHTML:{__html:o}}),(0,C.jsx)("div",{className:`customize-control-content ${s||""}`,children:t})]})},S="nimblecheck-input";function N(e){const t=n(),{Control:o}=t;return o.extend({initialize(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.update=this.update.bind(this),this.initializeNotifications=this.initializeNotifications.bind(this),this.handleRemoved=this.handleRemoved.bind(this),o.prototype.initialize.apply(this,n),t.control.bind("removed",this.handleRemoved)},ready(){this.setting.bind(this.renderContent.bind(this))},renderContent(){const t=w.Context(),n=(0,C.jsx)(t.Provider,{value:{backboneView:this,params:this.params,initializeNotifications:this.initializeNotifications,value:this.setting.get(),setValue:this.update},children:(0,C.jsx)(z,{children:(0,C.jsx)(e,{})})}),o=(0,u.createRoot)(this.container[0]);o.render(n),this.reactRoot=o},update(e){"object"!=typeof e||Array.isArray(e)?this.setting.set(e):this.setting.set({...this.setting.get(),...e})},initializeNotifications(e){const{notifications:t}=this;t.container=g()(e),t.render()},handleRemoved(e){e===this&&(this.destroy(),this.container.remove(),t.control.unbind("removed",this.handleRemoved))},destroy(){var e;null==(e=this.reactRoot)||e.unmount(),o.prototype.destroy&&o.prototype.destroy.call(this)}})}function E(e){const t=n();for(const n of Object.keys(e)){const o=e[n];t.controlConstructor[n]||(t.controlConstructor[n]=N(o))}}const O=/^0+0/,T=()=>{const{value:e,setValue:t,params:{dashicon:n}}=_(),o=n=>{const o=+n.target.value,i=[...e];i.splice(+n.target.dataset.index,1,o),t(i)},i=t=>(0,C.jsx)("input",{type:"number",value:e[t].toString().replace(O,""),"data-index":t,onChange:o});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{}),(0,C.jsx)("div",{children:i(0)}),(0,C.jsx)("div",{})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{children:i(3)}),(0,C.jsx)("div",{children:(0,C.jsx)("span",{className:`dashicons dashicons-${n}`})}),(0,C.jsx)("div",{children:i(1)})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{}),(0,C.jsx)("div",{children:i(2)}),(0,C.jsx)("div",{})]})]})},A=()=>{const{value:e,setValue:t,params:{unit:n,inputAttrs:o}}=_(),i={...o,value:e,onChange:e=>{t(+e.target.value)}};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("input",{type:"range",...i}),(0,C.jsx)("div",{"data-unit":n||void 0,children:(0,C.jsx)("input",{type:"number",...i})})]})},k=()=>{const{params:{label:e,description:t,level:n}}=_(),o=`h${n}`;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{children:e}),!!t&&(0,C.jsx)("span",{className:"description customize-control-description",dangerouslySetInnerHTML:{__html:t}})]})},M=()=>{const{params:{description:e}}=_();return(0,C.jsx)(C.Fragment,{children:!!e&&(0,C.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})};function R(e){let{panel:t,ids:o,defaults:i,onReady:s,conditionals:r,controls:c,contentBesideSection:a}=e;return d((e=>{n().panel(t)&&(r&&l(t,r),a&&m(a),y(o,i),x(),s(e))})),c&&E(c),E({cssMargin:T,rangeInput:A,headline:k,customHtml:M}),!0}function I(e){const t=e.substring(1);let n=parseInt(t.substr(0,2),16)/255,o=parseInt(t.substr(2,2),16)/255,i=parseInt(t.substr(4,2),16)/255;return n=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),o=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),.2126*n+.7152*o+.0722*i}function L(e,t){const n=I(e),o=I(t);return n>o?(n+.05)/(o+.05):(o+.05)/(n+.05)}let P;function F(){return P||(P=(0,u.createLocalizationFactory)("devowl-wp-customize"))}const W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F()._n(...t)},B=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F()._nx(...t)},D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F()._x(...t)},H=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F().__(...t)},V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F()._i(...t)};function J(e){const t=n(),o=(0,j.useCallback)((e=>{const n=t(e);return{value:n.get(),visible:n.findControls()[0].active()}}),[t]),[i,s]=(0,j.useState)((()=>e.reduce(((e,t)=>(e[t]=o(t),e)),{})));return(0,j.useEffect)((()=>{for(const n of e)t(n,(e=>e.bind("change",(()=>{s((e=>({...e,[n]:o(n)})))}))));const n=async t=>{let{detail:{setting:n}}=t;Object.values(e).indexOf(n)>-1&&s((e=>({...e,[n]:o(n)})))};return document.addEventListener(c,n),()=>{document.removeEventListener(c,n)}}),[]),i}const $="DevOwl/Customize/Setting/AccessibilityChanged";function G(e){return new Promise((t=>{const o=n();o.control(e,(e=>{let{container:n,section:i}=e;const s={};n.prevAll(".customize-control-headline").each((function(){const e=jQuery(this).children().children().get(0),{nodeName:t,innerHTML:n}=e;s[t]||(s[t]=n)})),t([o.section(i()).headContainer.text().trim().split("\n")[0],...Object.values(s).reverse(),n.find(".customize-control-title,input+label").first().text()].join(" ▸ "))}))}))}function U(e){let{setting:t,valid:o}=e;(0,j.useEffect)((()=>{const e=n(),i=()=>e.control(t,(async e=>{const{container:n}=e,i=!n.hasClass(a),s=await G(t);document.dispatchEvent(new CustomEvent($,{detail:{setting:t,valid:o,visible:i,breadcrumb:s,instance:e}}))}));i();const s=async e=>{let{detail:{setting:n}}=e;t===n&&i()};return document.addEventListener(c,s),()=>{document.removeEventListener(c,s)}}),[t,o])}const q=e=>{let{text:t,severity:n}=e;return(0,C.jsx)("div",{className:`notice notice-${n} inline below-h2 notice-alt`,style:{margin:"10px 0"},children:(0,C.jsx)("p",{children:V(t,{aPerc:(0,C.jsx)("a",{href:H("https://www.w3.org/TR/WCAG22/#perceivable"),target:"_blank",rel:"noreferrer"}),aEuMinimum:(0,C.jsx)("a",{href:H("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32019L0882"),target:"_blank",rel:"noreferrer"})})})})},X=e=>{let{settings:t,severity:o,minimumRatio:i,renderNotice:s,modifier:r}=e;const c=n(),a=J(t),l=(0,j.useMemo)((()=>{const[e,n]=r?r(t.slice(0,2).reduce(((e,t)=>(e.push(a[t].value),e)),[]),t.slice(2).reduce(((e,t)=>(e.push(a[t].value),e)),[]),(e=>c(e).get())):[a[t[0]].value,a[t[1]].value];return L(e,n)}),[JSON.stringify(a)]),d=null==s?void 0:s(l,i),u=l<i;return U({setting:t[1],valid:!u}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("strong",{children:H("Contrast ratio:")})," ",l.toFixed(2),u&&(d?(0,C.jsx)("div",{className:`notice notice-${o} inline below-h2 notice-alt`,style:{margin:"10px 0"},children:(0,C.jsx)("p",{children:d})}):(0,C.jsx)(q,{severity:o,text:H('We recommend a contrast ratio between background and font color of at least %f to comply with the {{aPerc}}"perceptibility" of the WCAG 2.2 standard{{/aPerc}} and thereby meet the {{aEuMinimum}}EU\'s minimum legal requirements for accessibility{{/aEuMinimum}}.',i)}))]})};function Q(e){n().control(e.settings[1],(t=>{let{container:n}=t;(0,u.createRoot)(g()("<div />").addClass("customize-control-iris-contrast-ratio").appendTo(n.find(".wp-picker-holder")).get(0)).render((0,C.jsx)(X,{...e}))}))}const K=e=>{let{settings:t,severity:o,notAccessible:i,modifier:s}=e;const r=n(),c=J(t),a=(0,j.useMemo)((()=>{const e=s?s(c[t[0]].value,t.slice(1).reduce(((e,t)=>(e.push(c[t].value),e)),[]),(e=>r(e).get())):c[t[0]].value;return i.indexOf(e)>-1&&e}),[JSON.stringify(c),i]);return U({setting:t[0],valid:!1===a}),a?(0,C.jsx)(q,{severity:o,text:H('We do not recommend to use the font weight "%s" to comply with the {{aPerc}}"perceptibility" of the WCAG 2.2 standard{{/aPerc}} and thereby meet the {{aEuMinimum}}EU\'s minimum legal requirements for accessibility{{/aEuMinimum}}.',a)}):null};function Y(e){n().control(e.settings[0],(t=>{let{container:n}=t;(0,u.createRoot)(g()("<div />").addClass("customize-control-a11y-font-weight").appendTo(n).get(0)).render((0,C.jsx)(K,{...e}))}))}const Z=e=>{let{settings:t,severity:o,minimumPx:i,modifier:s}=e;const r=n(),c=J(t),a=(0,j.useMemo)((()=>(s?s(c[t[0]].value,t.slice(1).reduce(((e,t)=>(e.push(c[t].value),e)),[]),(e=>r(e).get())):c[t[0]].value)<i&&i),[JSON.stringify(c),i]);return U({setting:t[0],valid:!1===a}),!1===a?null:(0,C.jsx)(q,{severity:o,text:H('We recommend a font size of at least %d px to comply with the {{aPerc}}"perceptibility" of the WCAG 2.2 standard{{/aPerc}} and thereby meet the {{aEuMinimum}}EU\'s minimum legal requirements for accessibility{{/aEuMinimum}}.',a)})};function ee(e){n().control(e.settings[0],(t=>{let{container:n}=t;(0,u.createRoot)(g()("<div />").addClass("customize-control-a11y-font-size").appendTo(n).get(0)).render((0,C.jsx)(Z,{...e}))}))}const te=e=>{let{settings:t,severity:o,notAccessible:i,modifier:s}=e;const r=n(),c=J(t),a=(0,j.useMemo)((()=>{const e=s?s(c[t[0]].value,t.slice(1).reduce(((e,t)=>(e.push(c[t].value),e)),[]),(e=>r(e).get())):c[t[0]].value;return i.indexOf(e)>-1&&e}),[JSON.stringify(c),i]);return U({setting:t[0],valid:!1===a}),a?(0,C.jsx)(q,{severity:o,text:H('We recommend that you at least underline links to distinguish normal text from links in order to comply with the {{aPerc}}"perceptibility" of the WCAG 2.2 standard{{/aPerc}} and thereby meet the {{aEuMinimum}}EU\'s minimum legal requirements for accessibility{{/aEuMinimum}}.')}):null};function ne(e){n().control(e.settings[0],(t=>{let{container:n}=t;(0,u.createRoot)(g()("<div />").addClass("customize-control-a11y-text-decoration").appendTo(n).get(0)).render((0,C.jsx)(te,{...e}))}))}const oe=e=>{let{children:t}=e;return(0,C.jsx)("div",{className:"customize-control-headline-before-section",children:t})},ie=e=>{let{title:t,children:n,onToggle:o,state:i,grouped:s}=e;const[r,c]=(0,j.useState)(!1),a=(0,j.useCallback)((()=>{null==o||o(!r),c(!r)}),[r,c]),l=void 0===i?r:i;return(0,C.jsxs)("li",{className:"accordion-section same-section-accordion "+(l?"same-section-accordion-open":""),style:{marginBottom:s?0:void 0,borderBottom:s?0:void 0},children:[(0,C.jsx)("div",{className:"accordion-section-title",onClick:a,children:(0,C.jsx)("strong",{children:t})}),l&&(0,C.jsx)("div",{children:n})]})};devowlWp_customize=t})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.8.4/0d23be8c71ca4bb0cb149a095e1fb1b6/index.js.map
