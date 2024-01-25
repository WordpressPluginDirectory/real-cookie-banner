var devowlWp_utils;(()=>{"use strict";var t,e={54:(t,e,n)=>{n.r(e),n.d(e,{AbstractCategory:()=>ft,AbstractCategoryCollection:()=>mt,AbstractPost:()=>dt,AbstractPostCollection:()=>pt,BATCH_MAX_CHUNK_SIZE:()=>b,BaseOptions:()=>o,ClientCollection:()=>st,ClientModel:()=>ut,RouteHttpVerb:()=>Q,SuspenseChunkTranslation:()=>vt,addCorruptRestApi:()=>D,addCorruptRestApiLog:()=>L,applyQueryString:()=>v,batchRequest:()=>T,commonRequest:()=>z,commonUrlBuilder:()=>g,createContextFactory:()=>l,createLocalizationFactory:()=>V,createRequestFactory:()=>G,getWebpackPublicPath:()=>a,handleCorrupRestApi:()=>$,handleCorruptRestApi:()=>q,locationRestKeyValueMapPatch:()=>wt,locationRestPluginGet:()=>K,nonceDeprecationPool:()=>A,obfuscatePath:()=>d,parseResult:()=>I,qs:()=>w,removeCorruptRestApi:()=>j,simpleHash:()=>i,sprintf:()=>J,trailingslashit:()=>s,untrailingslashit:()=>r,useChunkTranslation:()=>yt,waitForValidLogin:()=>R});class o{constructor(){this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.restRecreateNonceEndpoint=void 0,this.restPathObfuscateOffset=void 0,this.publicUrl=void 0,this.chunkFolder=void 0,this.chunksLanguageFolder=void 0,this.chunks=void 0}static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?o.slugCamelCase(t):t}}const r=t=>t.endsWith("/")||t.endsWith("\\")?r(t.slice(0,-1)):t,s=t=>`${r(t)}/`,a=t=>{const e=window[t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))];return`${e.publicUrl}${e.chunkFolder}/`},i=t=>t.split("").reduce(((t,e)=>(t=(t<<5)-t+e.charCodeAt(0))&t),0);var c=n(363);function l(t){const e=(0,c.createContext)(t);return{StoreContext:e,StoreProvider:n=>{let{children:o}=n;return React.createElement(e.Provider,{value:t},o)},useStores:()=>(0,c.useContext)(e)}}var h=function(t){return t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t}(h||{});const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";function d(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keep-last-part",o=0;const r=window.btoa(t).toLowerCase(),s=e.split("/").map(((e,s,a)=>"keep-last-part"===n&&s===a.length-1?e:p(e.match(new RegExp(".{1,4}","g")).map((e=>{if(e.length<4)return e;o=o>=t.length?0:o;const n=[e.split("").map((t=>{const e=r.indexOf(t);return e>-1?`/${e}/`:t})).join(""),t[o]];return o++,n})).flat().join("")).replace(/([=]+)?$/,(t=>`${t.length}`)).toLowerCase()));return s.splice(s.length-1,0,`${"full"===n?1:0}${t.toString()}`),s.join("/")}function p(t){const e=window.btoa(t);let n="",o=0,r=0;for(let t=0;t<e.length;t++)for(r=r<<8|e.charCodeAt(t),o+=8;o>=5;)n+=u[r>>>o-5&31],o-=5;return o>0&&(n+=u[r<<5-o&31]),n}var f=n(451),m=n.n(f),w=n(282),y=n(670);function v(t,e,n){return t.search=w.stringify(n?m().all([w.parse(t.search),...e]):e,!0),t}function g(t){let{location:e,params:n={},nonce:o=!0,options:a,cookieValueAsParam:c}=t;const{obfuscatePath:l}=e,{href:u}=window.location,{restPathObfuscateOffset:p}=a,f=new URL(a.restRoot,u),m=w.parse(f.search),g=m.rest_route||f.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),n[e])));const O={};for(const t of Object.keys(n))-1===b.indexOf(t)&&(O[t]=n[t]);c&&(O._httpCookieInvalidate=i(JSON.stringify(c.map(y.Z.get))));const{search:k,pathname:E}=new URL(e.path,u);if(k){const t=w.parse(k);for(const e in t)O[e]=t[e];P=E}f.protocol=window.location.protocol;const T=s(g);let C=r(e.namespace||a.restNamespace)+P;p&&l&&(C=d(p,C,l));const R=`${T}${C}`;return m.rest_route?m.rest_route=R:f.pathname=R,o&&a.restNonce&&(m._wpnonce=a.restNonce),v(f,m),["wp-json/","rest_route="].filter((t=>f.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==h.GET&&v(f,[{_method:e.method}],!0),v(f,[a.restQuery,O],!0),f.toString()}const b=25;let P,O=[];const k=Promise.resolve();async function E(){O=O.filter((t=>{let{options:{signal:e,onQueueItemFinished:n,waitForPromise:o=k},reject:r}=t;return null==e||!e.aborted||(null==n||n(!1),o.then((()=>r(e.reason))),!1)}));const t=O.splice(0,b);if(0!==t.length){try{const[{options:e}]=t,{signal:n,onQueueItemFinished:o,waitForPromise:r=k}=e,{responses:s}=await z({location:{path:"/",method:h.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:n}});for(let e=0;e<s.length;e++){const{resolve:n,reject:a}=t[e],{body:i,status:c}=s[e],l=c>=200&&c<400;null==o||o(l),r.then((()=>{l?n(i):a({responseJSON:i})}))}}catch(e){for(const{reject:n,options:{onQueueItemFinished:o,waitForPromise:r=k}}of t)null==o||o(!1),r.then((()=>n(e)))}O.length>0&&E()}}function T(t,e){return new Promise(((n,o)=>{O.push({resolve:n,reject:o,request:t,options:e}),clearTimeout(P),P=setTimeout(E,100)}))}let C=!1;function R(){var t;const e=window.jQuery;return null!==(t=window.wp)&&void 0!==t&&t.heartbeat&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),C||(C=!0,e(document).ajaxSend(((t,n,o)=>{let{url:r,data:s}=o;null!=r&&r.endsWith("/admin-ajax.php")&&(null==s?void 0:s.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&n.abort()}))),new Promise((t=>{const n=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(n),t())}),100)}))):new Promise((()=>{}))}const S={},x={};async function A(t,e){if(void 0!==e){const n=x[t]||new Promise((async(n,o)=>{try{const r=await window.fetch(e,{method:"POST"});if(r.ok){const e=await r.text();t===e?o():(S[t]=e,n(e))}else o()}catch(t){o()}}));return x[t]=n,n.finally((()=>{delete x[t]})),n}{if(void 0===t)return;await Promise.all(Object.values(x));let e=t;for(;S[e]&&(e=S[e],S[e]!==t););return Promise.resolve(e)}}const F="notice-corrupt-rest-api",_="data-namespace";async function N(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:async()=>{};const n=document.getElementById(F);if(n&&window.navigator.onLine){if(n.querySelector(`li[data-namespace="${t}"]`))return;try{await e()}catch(e){n.style.display="block";const o=document.createElement("li");o.setAttribute(_,t),o.innerHTML=`<code>${t}</code>`,n.childNodes[1].appendChild(o),n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function j(t){const e=document.getElementById(F);if(e){const n=e.querySelector(`li[data-namespace="${t}"]`);if(null==n||n.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function D(t,e){let{method:n}=t;n===h.GET&&(e?N(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(F))))}function L(t){let{route:e,method:n,ms:o,response:r}=t;const s=document.querySelector(`#${F} textarea`);if(s){const t=s.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${n||"GET"}] [${o}ms] ${e}; ${null==r?void 0:r.substr(0,999)}`),s.value=t.join("\n")}}function q(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const n=document.getElementById(F);n&&e&&0===window.detectCorruptRestApiFailed&&(n.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))N(e,t[e])};let n;const o=()=>{clearTimeout(n),n=setTimeout(e,1e3)};o(),window.addEventListener(F,o)}const $=q;async function I(t,e,n){if(204===e.status)return{};const o=e.clone();try{return await e.json()}catch(e){const r=await o.text();if(""===r&&[h.DELETE,h.PUT].indexOf(n)>-1)return;let s;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:r});for(const t of r.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){s=t}throw s}}var U=n(414),Z=n.n(U);async function z(t){let{location:e,options:n,request:o,params:r,settings:s={},cookieValueAsParam:a,multipart:i=!1,sendRestNonce:c=!0,replayReason:l,allowBatchRequest:u}=t;const d=e.namespace||n.restNamespace,p=g({location:e,params:r,nonce:!1,options:n,cookieValueAsParam:a});["wp-json/","rest_route="].filter((t=>p.indexOf(t)>-1)).length>0&&e.method&&e.method!==h.GET?s.method=h.POST:s.method=e.method||h.GET;const f=new URL(p,window.location.href),w=-1===["HEAD","GET"].indexOf(s.method);!w&&o&&v(f,[o],!0);const y=f.toString();let b;w&&(i?(b=Z()(o,"boolean"==typeof i?{}:i),Array.from(b.values()).filter((t=>t instanceof File)).length>0||(b=JSON.stringify(o))):b=JSON.stringify(o));const P=await A(n.restNonce),O=void 0!==P,k=m().all([s,{headers:{..."string"==typeof b?{"Content-Type":"application/json;charset=utf-8"}:{},...O&&c?{"X-WP-Nonce":P}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(k.body=b,u&&e.method!==h.GET&&!(b instanceof FormData))return T({method:e.method,path:g({location:e,params:r,nonce:!1,options:{...n,restRoot:"https://a.de/wp-json"},cookieValueAsParam:a}).substring(20),body:o},{...n,signal:s.signal,..."boolean"==typeof u?{}:u});let E,C=!1;const S=()=>{C=!0};window.addEventListener("pagehide",S),window.addEventListener("beforeunload",S);const x=(new Date).getTime();let F;try{E=await window.fetch(y,k),F=(new Date).getTime()-x,j(d)}catch(t){throw F=(new Date).getTime()-x,C||(L({method:e.method,route:f.pathname,ms:F,response:`${t}`}),D(s,d)),console.error(t),t}finally{window.removeEventListener("pagehide",S),window.removeEventListener("beforeunload",S)}if(!E.ok){let t,a,h=!1;try{if(t=await I(y,E,e.method),"private_site"===t.code&&403===E.status&&O&&!c&&(h=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&O){const{restRecreateNonceEndpoint:t}=n;try{h=!0,2===l?(a=4,await R()):a=2,await A(P,t)}catch(t){}}const o=E.headers.get("retry-after");o.match(/^\d+$/)&&(h=1e3*+o,a=3)}catch(t){}if(h){const t={location:e,options:n,multipart:i,params:r,request:o,sendRestNonce:!0,settings:s,replayReason:a};return"number"==typeof h?new Promise((e=>setTimeout((()=>z(t).then(e)),h))):await z(t)}L({method:e.method,route:f.pathname,ms:F,response:JSON.stringify(t)}),D(s);const u=E;throw u.responseJSON=t,u}return I(y,E,e.method)}function G(t){return{urlBuilder:e=>g({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>z({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const Q=h;var W=n(449);const B=wp.i18n,H=wp;var M=n.n(H);function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return B.sprintf(t,...n)}function V(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&M()&&M().i18n)for(const n of e[t])M().i18n.setLocaleData(n,t);return{_n:function(e,n,o){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];return J(B._n(e,n,o,t),...s)},_nx:function(e,n,o,r){for(var s=arguments.length,a=new Array(s>4?s-4:0),i=4;i<s;i++)a[i-4]=arguments[i];return J(B._nx(e,n,r,o,t),...a)},_x:function(e,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return J(B._x(e,n,t),...r)},__:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return J(B.__(e,t),...o)},_i:function(t,e){return(0,W.Z)({mixedString:t,components:e})}}}const K={path:"/plugin",method:h.GET};var X=n(824),Y=n(736);const tt=mobx;var et,nt,ot,rt;let st=((rt=class{constructor(){(0,X.Z)(this,"entries",nt,this),(0,X.Z)(this,"busy",ot,this),this.annotated=void 0,this.get=(0,tt.flow)((function*(t){const{request:e,params:n,clear:o=!1}=t||{};this.busy=!0;try{const{path:t,namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:t,method:h.GET,namespace:r},request:e,params:n});o&&this.entries.clear();for(const t of s){const e=this.instance(t),n=this.entries.get(e.key);n?n.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,tt.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:n}=t||{};this.busy=!0;try{const{singlePath:t,namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:t,method:h.GET,namespace:o},request:e,params:n}),s=this.instance(r);this.entries.set(s.key,s)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},et=rt,nt=(0,Y.Z)(et.prototype,"entries",[tt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),ot=(0,Y.Z)(et.prototype,"busy",[tt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),et);var at,it,ct,lt,ht;let ut=((ht=class{get key(){var t;return null===(t=this.data)||void 0===t?void 0:t[this.annotated.keyId]}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,X.Z)(this,"data",it,this),(0,X.Z)(this,"collection",ct,this),(0,X.Z)(this,"busy",lt,this),this.annotated=void 0,this.persist=(0,tt.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||h.POST,namespace:r},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(s),null!=e&&e.allowBatchRequest||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,tt.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:n},namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:e,method:n||h.PATCH,namespace:o},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(r),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,tt.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||h.DELETE,namespace:r},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return null!=e&&e.allowBatchRequest||(this.collection.entries.delete(this.key),this.afterDelete()),s}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,tt.runInAction)((()=>{this.collection=t,this.data=e}))}fromResponse(t){return(0,tt.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},at=ht,it=(0,Y.Z)(at.prototype,"data",[tt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),ct=(0,Y.Z)(at.prototype,"collection",[tt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=(0,Y.Z)(at.prototype,"busy",[tt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,Y.Z)(at.prototype,"key",[tt.computed],Object.getOwnPropertyDescriptor(at.prototype,"key"),at.prototype),at);class dt extends ut{transformDataForPersist(){var t,e;const n={...super.transformDataForPersist()};return n.title=null===(t=n.title)||void 0===t?void 0:t.rendered,n.content=null===(e=n.content)||void 0===e?void 0:e.rendered,delete n._links,delete n.link,n}transformDataForPatch(){return this.transformDataForPersist()}}class pt extends st{}class ft extends ut{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class mt extends st{}const wt={path:"/key-value-map/:name/:key",method:h.PATCH};function yt(t,e){let{chunks:n,chunksLanguageFolder:o,textDomain:r,version:s}=e;const a=n[t.split("?")[0]],i=!!a,[l,h]=(0,c.useState)(!1),u=(0,c.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:n}=e.wpi18nLazy,a=`${o}/${r}-${t}.json`;if(i&&-1===n.indexOf(a)){n.push(a);try{const t=await window.fetch(`${a}?ver=${s}`),{locale_data:{messages:e}}=await t.json();M().i18n.setLocaleData(e,r)}catch{}}}),[o,r]);return(0,c.useEffect)((()=>{i?Promise.all(a.map(u)).then((()=>{h(!0)})):h(!0)}),[i,u]),l}const vt=t=>{let{children:e,chunkFile:n,fallback:o,options:r}=t;const s=yt(n,r());return React.createElement(React.Fragment,null,s?e:o)}},363:t=>{t.exports=React}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}o.m=e,t=[],o.O=(e,n,r,s)=>{if(!n){var a=1/0;for(h=0;h<t.length;h++){for(var[n,r,s]=t[h],i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(h--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[n,r,s]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,s,[a,i,c]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var h=c(o)}for(e&&e(n);l<a.length;l++)s=a[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(h)},n=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[764],(()=>o(54)));r=o.O(r),devowlWp_utils=r})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.7/93aaf35837372321f54836862c3089a2/index.js.map
