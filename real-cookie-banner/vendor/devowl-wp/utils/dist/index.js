var devowlWp_utils;(()=>{"use strict";var t,e={54:(t,e,n)=>{n.r(e),n.d(e,{AbstractCategory:()=>pt,AbstractCategoryCollection:()=>ft,AbstractPost:()=>ut,AbstractPostCollection:()=>dt,BATCH_MAX_CHUNK_SIZE:()=>g,BaseOptions:()=>o,ClientCollection:()=>rt,ClientModel:()=>ht,RouteHttpVerb:()=>G,SuspenseChunkTranslation:()=>yt,addCorruptRestApi:()=>j,addCorruptRestApiLog:()=>D,applyQueryString:()=>y,batchRequest:()=>E,commonRequest:()=>U,commonUrlBuilder:()=>v,createContextFactory:()=>c,createLocalizationFactory:()=>J,createRequestFactory:()=>z,handleCorrupRestApi:()=>q,handleCorruptRestApi:()=>L,locationRestKeyValueMapPatch:()=>mt,locationRestPluginGet:()=>V,nonceDeprecationPool:()=>x,obfuscatePath:()=>u,parseResult:()=>$,qs:()=>m,removeCorruptRestApi:()=>N,simpleHash:()=>a,sprintf:()=>W,trailingslashit:()=>s,untrailingslashit:()=>r,useChunkTranslation:()=>wt,waitForValidLogin:()=>C});class o{constructor(){this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.restRecreateNonceEndpoint=void 0,this.restPathObfuscateOffset=void 0,this.publicUrl=void 0,this.chunkFolder=void 0,this.chunksLanguageFolder=void 0,this.chunks=void 0}static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?o.slugCamelCase(t):t}}const r=t=>t.endsWith("/")||t.endsWith("\\")?r(t.slice(0,-1)):t,s=t=>`${r(t)}/`;function a(t){let e=0;for(const n of t)e=(e<<5>>>0)-e+n.charCodeAt(0),e&=2147483647;return e}var i=n(363);function c(t){const e=(0,i.createContext)(t);return{StoreContext:e,StoreProvider:n=>{let{children:o}=n;return React.createElement(e.Provider,{value:t},o)},useStores:()=>(0,i.useContext)(e)}}var l=function(t){return t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t}(l||{});const h="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keep-last-part",o=0;const r=window.btoa(t).toLowerCase(),s=e.split("/").map(((e,s,a)=>"keep-last-part"===n&&s===a.length-1?e:d(e.match(new RegExp(".{1,4}","g")).map((e=>{if(e.length<4)return e;o=o>=t.length?0:o;const n=[e.split("").map((t=>{const e=r.indexOf(t);return e>-1?`/${e}/`:t})).join(""),t[o]];return o++,n})).flat().join("")).replace(/([=]+)?$/,(t=>`${t.length}`)).toLowerCase()));return s.splice(s.length-1,0,`${"full"===n?1:0}${t.toString()}`),s.join("/")}function d(t){const e=window.btoa(t);let n="",o=0,r=0;for(let t=0;t<e.length;t++)for(r=r<<8|e.charCodeAt(t),o+=8;o>=5;)n+=h[r>>>o-5&31],o-=5;return o>0&&(n+=h[r<<5-o&31]),n}var p=n(451),f=n.n(p),m=n(282),w=n(670);function y(t,e,n){return t.search=m.stringify(n?f().all([m.parse(t.search),...e]):e,!0),t}function v(t){let{location:e,params:n={},nonce:o=!0,options:i,cookieValueAsParam:c}=t;const{obfuscatePath:h}=e,{href:d}=window.location,{restPathObfuscateOffset:p}=i,f=new URL(i.restRoot,d),v=m.parse(f.search),g=v.rest_route||f.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),n[e])));const O={};for(const t of Object.keys(n))-1===b.indexOf(t)&&(O[t]=n[t]);c&&(O._httpCookieInvalidate=a(JSON.stringify(c.map(w.Z.get))));const{search:k,pathname:E}=new URL(e.path,d);if(k){const t=m.parse(k);for(const e in t)O[e]=t[e];P=E}f.protocol=window.location.protocol;const T=s(g);let C=r(e.namespace||i.restNamespace)+P;p&&h&&(C=u(p,C,h));const R=`${T}${C}`;return v.rest_route?v.rest_route=R:f.pathname=R,o&&i.restNonce&&(v._wpnonce=i.restNonce),y(f,v),["wp-json/","rest_route="].filter((t=>f.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET&&y(f,[{_method:e.method}],!0),y(f,[i.restQuery,O],!0),f.toString()}const g=25;let b,P=[];const O=Promise.resolve();async function k(){P=P.filter((t=>{let{options:{signal:e,onQueueItemFinished:n,waitForPromise:o=O},reject:r}=t;return null==e||!e.aborted||(null==n||n(!1),o.then((()=>r(e.reason))),!1)}));const t=P.splice(0,g);if(0!==t.length){try{const[{options:e}]=t,{signal:n,onQueueItemFinished:o,waitForPromise:r=O}=e,{responses:s}=await U({location:{path:"/",method:l.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:n}});for(let e=0;e<s.length;e++){const{resolve:n,reject:a}=t[e],{body:i,status:c}=s[e],l=c>=200&&c<400;null==o||o(l),r.then((()=>{l?n(i):a({responseJSON:i})}))}}catch(e){for(const{reject:n,options:{onQueueItemFinished:o,waitForPromise:r=O}}of t)null==o||o(!1),r.then((()=>n(e)))}P.length>0&&k()}}function E(t,e){return new Promise(((n,o)=>{P.push({resolve:n,reject:o,request:t,options:e}),clearTimeout(b),b=setTimeout(k,100)}))}let T=!1;function C(){var t;const e=window.jQuery;return null!==(t=window.wp)&&void 0!==t&&t.heartbeat&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),T||(T=!0,e(document).ajaxSend(((t,n,o)=>{let{url:r,data:s}=o;null!=r&&r.endsWith("/admin-ajax.php")&&(null==s?void 0:s.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&n.abort()}))),new Promise((t=>{const n=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(n),t())}),100)}))):new Promise((()=>{}))}const R={},S={};async function x(t,e){if(void 0!==e){const n=S[t]||new Promise((async(n,o)=>{try{const r=await window.fetch(e,{method:"POST"});if(r.ok){const e=await r.text();t===e?o():(R[t]=e,n(e))}else o()}catch(t){o()}}));return S[t]=n,n.finally((()=>{delete S[t]})),n}{if(void 0===t)return;await Promise.all(Object.values(S));let e=t;for(;R[e]&&(e=R[e],R[e]!==t););return Promise.resolve(e)}}const A="notice-corrupt-rest-api",_="data-namespace";async function F(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:async()=>{};const n=document.getElementById(A);if(n&&window.navigator.onLine){if(n.querySelector(`li[data-namespace="${t}"]`))return;try{await e()}catch(e){n.style.display="block";const o=document.createElement("li");o.setAttribute(_,t),o.innerHTML=`<code>${t}</code>`,n.childNodes[1].appendChild(o),n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function N(t){const e=document.getElementById(A);if(e){const n=e.querySelector(`li[data-namespace="${t}"]`);if(null==n||n.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function j(t,e){let{method:n}=t;n===l.GET&&(e?F(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(A))))}function D(t){let{route:e,method:n,ms:o,response:r}=t;const s=document.querySelector(`#${A} textarea`);if(s){const t=s.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${n||"GET"}] [${o}ms] ${e}; ${null==r?void 0:r.substr(0,999)}`),s.value=t.join("\n")}}function L(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const n=document.getElementById(A);n&&e&&0===window.detectCorruptRestApiFailed&&(n.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))F(e,t[e])};let n;const o=()=>{clearTimeout(n),n=setTimeout(e,1e3)};o(),window.addEventListener(A,o)}const q=L;async function $(t,e,n){if(204===e.status)return{};const o=e.clone();try{return await e.json()}catch(e){const r=await o.text();if(""===r&&[l.DELETE,l.PUT].indexOf(n)>-1)return;let s;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:r});for(const t of r.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){s=t}throw s}}var I=n(414),Z=n.n(I);async function U(t){let{location:e,options:n,request:o,params:r,settings:s={},cookieValueAsParam:a,multipart:i=!1,sendRestNonce:c=!0,replayReason:h,allowBatchRequest:u}=t;const d=e.namespace||n.restNamespace,p=v({location:e,params:r,nonce:!1,options:n,cookieValueAsParam:a});["wp-json/","rest_route="].filter((t=>p.indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET?s.method=l.POST:s.method=e.method||l.GET;const m=new URL(p,window.location.href),w=-1===["HEAD","GET"].indexOf(s.method);!w&&o&&y(m,[o],!0);const g=m.toString();let b;w&&(i?(b=Z()(o,"boolean"==typeof i?{}:i),Array.from(b.values()).filter((t=>t instanceof File)).length>0||(b=JSON.stringify(o))):b=JSON.stringify(o));const P=await x(n.restNonce),O=void 0!==P,k=f().all([s,{headers:{..."string"==typeof b?{"Content-Type":"application/json;charset=utf-8"}:{},...O&&c?{"X-WP-Nonce":P}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(k.body=b,u&&e.method!==l.GET&&!(b instanceof FormData))return E({method:e.method,path:v({location:e,params:r,nonce:!1,options:{...n,restRoot:"https://a.de/wp-json"},cookieValueAsParam:a}).substring(20),body:o},{...n,signal:s.signal,..."boolean"==typeof u?{}:u});let T,R=!1;const S=()=>{R=!0};window.addEventListener("pagehide",S),window.addEventListener("beforeunload",S);const A=(new Date).getTime();let _;try{T=await window.fetch(g,k),_=(new Date).getTime()-A,N(d)}catch(t){throw _=(new Date).getTime()-A,R||(D({method:e.method,route:m.pathname,ms:_,response:`${t}`}),j(s,d)),console.error(t),t}finally{window.removeEventListener("pagehide",S),window.removeEventListener("beforeunload",S)}if(!T.ok){let t,a,l=!1;try{if(t=await $(g,T,e.method),"private_site"===t.code&&403===T.status&&O&&!c&&(l=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&O){const{restRecreateNonceEndpoint:t}=n;try{l=!0,2===h?(a=4,await C()):a=2,await x(P,t)}catch(t){}}const o=T.headers.get("retry-after");o.match(/^\d+$/)&&(l=1e3*+o,a=3)}catch(t){}if(l){const t={location:e,options:n,multipart:i,params:r,request:o,sendRestNonce:!0,settings:s,replayReason:a};return"number"==typeof l?new Promise((e=>setTimeout((()=>U(t).then(e)),l))):await U(t)}D({method:e.method,route:m.pathname,ms:_,response:JSON.stringify(t)}),j(s);const u=T;throw u.responseJSON=t,u}return $(g,T,e.method)}function z(t){return{urlBuilder:e=>v({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>U({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const G=l;var Q=n(449);const B=wp.i18n,H=wp;var M=n.n(H);function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return B.sprintf(t,...n)}function J(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&M()&&M().i18n)for(const n of e[t])M().i18n.setLocaleData(n,t);return{_n:function(e,n,o){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];return W(B._n(e,n,o,t),...s)},_nx:function(e,n,o,r){for(var s=arguments.length,a=new Array(s>4?s-4:0),i=4;i<s;i++)a[i-4]=arguments[i];return W(B._nx(e,n,r,o,t),...a)},_x:function(e,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return W(B._x(e,n,t),...r)},__:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return W(B.__(e,t),...o)},_i:function(t,e){return(0,Q.Z)({mixedString:t,components:e})}}}const V={path:"/plugin",method:l.GET};var K=n(824),X=n(736);const Y=mobx;var tt,et,nt,ot;let rt=((ot=class{constructor(){(0,K.Z)(this,"entries",et,this),(0,K.Z)(this,"busy",nt,this),this.annotated=void 0,this.get=(0,Y.flow)((function*(t){const{request:e,params:n,clear:o=!1}=t||{};this.busy=!0;try{const{path:t,namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:t,method:l.GET,namespace:r},request:e,params:n});o&&this.entries.clear();for(const t of s){const e=this.instance(t),n=this.entries.get(e.key);n?n.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,Y.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:n}=t||{};this.busy=!0;try{const{singlePath:t,namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:t,method:l.GET,namespace:o},request:e,params:n}),s=this.instance(r);this.entries.set(s.key,s)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},tt=ot,et=(0,X.Z)(tt.prototype,"entries",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),nt=(0,X.Z)(tt.prototype,"busy",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),tt);var st,at,it,ct,lt;let ht=((lt=class{get key(){var t;return null===(t=this.data)||void 0===t?void 0:t[this.annotated.keyId]}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,K.Z)(this,"data",at,this),(0,K.Z)(this,"collection",it,this),(0,K.Z)(this,"busy",ct,this),this.annotated=void 0,this.persist=(0,Y.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||l.POST,namespace:r},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(s),null!=e&&e.allowBatchRequest||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,Y.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:n},namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:e,method:n||l.PATCH,namespace:o},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(r),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,Y.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||l.DELETE,namespace:r},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return null!=e&&e.allowBatchRequest||(this.collection.entries.delete(this.key),this.afterDelete()),s}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,Y.runInAction)((()=>{this.collection=t,this.data=e}))}fromResponse(t){return(0,Y.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},st=lt,at=(0,X.Z)(st.prototype,"data",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),it=(0,X.Z)(st.prototype,"collection",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ct=(0,X.Z)(st.prototype,"busy",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,X.Z)(st.prototype,"key",[Y.computed],Object.getOwnPropertyDescriptor(st.prototype,"key"),st.prototype),st);class ut extends ht{transformDataForPersist(){var t,e;const n={...super.transformDataForPersist()};return n.title=null===(t=n.title)||void 0===t?void 0:t.rendered,n.content=null===(e=n.content)||void 0===e?void 0:e.rendered,delete n._links,delete n.link,n}transformDataForPatch(){return this.transformDataForPersist()}}class dt extends rt{}class pt extends ht{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class ft extends rt{}const mt={path:"/key-value-map/:name/:key",method:l.PATCH};function wt(t,e){let{chunks:n,chunksLanguageFolder:o,textDomain:r,version:s}=e;const a=n[t.split("?")[0]],c=!!a,[l,h]=(0,i.useState)(!1),u=(0,i.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:n}=e.wpi18nLazy,a=`${o}/${r}-${t}.json`;if(c&&-1===n.indexOf(a)){n.push(a);try{const t=await window.fetch(`${a}?ver=${s}`),{locale_data:{messages:e}}=await t.json();M().i18n.setLocaleData(e,r)}catch{}}}),[o,r]);return(0,i.useEffect)((()=>{c?Promise.all(a.map(u)).then((()=>{h(!0)})):h(!0)}),[c,u]),l}const yt=t=>{let{children:e,chunkFile:n,fallback:o,options:r}=t;const s=wt(n,r());return React.createElement(React.Fragment,null,s?e:o)}},363:t=>{t.exports=React}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}o.m=e,t=[],o.O=(e,n,r,s)=>{if(!n){var a=1/0;for(h=0;h<t.length;h++){for(var[n,r,s]=t[h],i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(h--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[n,r,s]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,s,[a,i,c]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var h=c(o)}for(e&&e(n);l<a.length;l++)s=a[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(h)},n=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[764],(()=>o(54)));r=o.O(r),devowlWp_utils=r})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.6.1/adedc89afe046cf6a3b61585ad1fc78d/index.js.map
