var devowlWp_utils;(()=>{"use strict";var t,e={471:(t,e,o)=>{o.r(e),o.d(e,{AbstractCategory:()=>dt,AbstractCategoryCollection:()=>pt,AbstractPost:()=>ht,AbstractPostCollection:()=>ut,BATCH_MAX_CHUNK_SIZE:()=>v,BaseOptions:()=>n,ClientCollection:()=>nt,ClientModel:()=>lt,RouteHttpVerb:()=>Z,SuspenseChunkTranslation:()=>wt,addCorruptRestApi:()=>F,addCorruptRestApiLog:()=>j,applyQueryString:()=>w,batchRequest:()=>k,commonRequest:()=>z,commonUrlBuilder:()=>y,createContextFactory:()=>i,createLocalizationFactory:()=>W,createRequestFactory:()=>U,handleCorrupRestApi:()=>q,handleCorruptRestApi:()=>D,locationRestKeyValueMapPatch:()=>ft,locationRestPluginGet:()=>J,nonceDeprecationPool:()=>S,obfuscatePath:()=>u,parseResult:()=>L,qs:()=>f,removeCorruptRestApi:()=>N,simpleHash:()=>l,simpleObfuscate:()=>h,sprintf:()=>M,trailingslashit:()=>s,untrailingslashit:()=>r,useChunkTranslation:()=>mt,waitForValidLogin:()=>E});class n{constructor(){this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.restRecreateNonceEndpoint=void 0,this.restPathObfuscateOffset=void 0,this.publicUrl=void 0,this.chunkFolder=void 0,this.chunksLanguageFolder=void 0,this.chunks=void 0}static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?n.slugCamelCase(t):t}}const r=t=>t.endsWith("/")||t.endsWith("\\")?r(t.slice(0,-1)):t,s=t=>`${r(t)}/`;var a=o(363);function i(t){const e=(0,a.createContext)(t);return{StoreContext:e,StoreProvider:o=>{let{children:n}=o;return React.createElement(e.Provider,{value:t},n)},useStores:()=>(0,a.useContext)(e)}}var c=function(t){return t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t}(c||{});function l(t){let e=0;for(const o of t)e=(e<<5>>>0)-e+o.charCodeAt(0),e&=2147483647;return e}function h(t,e,o){const n=e.length;if(!/^[a-z0-9]+$/i.test(e))return"";let r="",s=0;const a=t.length;for(let i=0;i<a;i++)if(/[a-z]/i.test(t[i])){const a=t[i]===t[i].toUpperCase()?"A".charCodeAt(0):"a".charCodeAt(0),c=e[(i-s)%n];let l;l=isNaN(parseInt(c,10))?(c.toLowerCase().charCodeAt(0)-a)%26:parseInt(c,10),l=o?l:-l,r+=String.fromCharCode(((t.charCodeAt(i)+l-a)%26+26)%26+a)}else r+=t[i],s++;return r}function u(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keep-last-part";const n=e.split("/").map(((e,n,r)=>"keep-last-part"===o&&n===r.length-1?e:h(e,t,!0)));return n.splice(n.length-1,0,`${"full"===o?1:0}${t.toString()}`),n.join("/")}var d=o(451),p=o.n(d),f=o(282),m=o(670);function w(t,e,o){return t.search=f.stringify(o?p().all([f.parse(t.search),...e]):e,!0),t}function y(t){let{location:e,params:o={},nonce:n=!0,options:a,cookieValueAsParam:i}=t;const{obfuscatePath:h}=e,{href:d}=window.location,{restPathObfuscateOffset:p}=a,y=new URL(a.restRoot,d),v=f.parse(y.search),g=v.rest_route||y.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),o[e])));const O={};for(const t of Object.keys(o))-1===b.indexOf(t)&&(O[t]=o[t]);i&&(O._httpCookieInvalidate=l(JSON.stringify(i.map(m.Z.get))));const{search:k,pathname:C}=new URL(e.path,d);if(k){const t=f.parse(k);for(const e in t)O[e]=t[e];P=C}y.protocol=window.location.protocol;const E=s(g);let T=r(e.namespace||a.restNamespace)+P;p&&h&&(T=u(p,T,h));const R=`${E}${T}`;return v.rest_route?v.rest_route=R:y.pathname=R,n&&a.restNonce&&(v._wpnonce=a.restNonce),w(y,v),["wp-json/","rest_route="].filter((t=>y.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==c.GET&&w(y,[{_method:e.method}],!0),w(y,[a.restQuery,O],!0),y.toString()}const v=25;let g,b=[];const P=Promise.resolve();async function O(){b=b.filter((t=>{let{options:{signal:e,onQueueItemFinished:o,waitForPromise:n=P},reject:r}=t;return null==e||!e.aborted||(null==o||o(!1),n.then((()=>r(e.reason))),!1)}));const t=b.splice(0,v);if(0!==t.length){try{const[{options:e}]=t,{signal:o,onQueueItemFinished:n,waitForPromise:r=P}=e,{responses:s}=await z({location:{path:"/",method:c.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:o}});for(let e=0;e<s.length;e++){const{resolve:o,reject:a}=t[e],{body:i,status:c}=s[e],l=c>=200&&c<400;null==n||n(l),r.then((()=>{l?o(i):a({responseJSON:i})}))}}catch(e){for(const{reject:o,options:{onQueueItemFinished:n,waitForPromise:r=P}}of t)null==n||n(!1),r.then((()=>o(e)))}b.length>0&&O()}}function k(t,e){return new Promise(((o,n)=>{b.push({resolve:o,reject:n,request:t,options:e}),clearTimeout(g),g=setTimeout(O,100)}))}let C=!1;function E(){var t;const e=window.jQuery;return null!==(t=window.wp)&&void 0!==t&&t.heartbeat&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),C||(C=!0,e(document).ajaxSend(((t,o,n)=>{let{url:r,data:s}=n;null!=r&&r.endsWith("/admin-ajax.php")&&(null==s?void 0:s.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&o.abort()}))),new Promise((t=>{const o=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(o),t())}),100)}))):new Promise((()=>{}))}const T={},R={};async function S(t,e){if(void 0!==e){const o=R[t]||new Promise((async(o,n)=>{try{const r=await window.fetch(e,{method:"POST"});if(r.ok){const e=await r.text();t===e?n():(T[t]=e,o(e))}else n()}catch(t){n()}}));return R[t]=o,o.finally((()=>{delete R[t]})),o}{if(void 0===t)return;await Promise.all(Object.values(R));let e=t;for(;T[e]&&(e=T[e],T[e]!==t););return Promise.resolve(e)}}const A="notice-corrupt-rest-api",x="data-namespace";async function _(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:async()=>{};const o=document.getElementById(A);if(o&&window.navigator.onLine){if(o.querySelector(`li[data-namespace="${t}"]`))return;try{await e()}catch(e){o.style.display="block";const n=document.createElement("li");n.setAttribute(x,t),n.innerHTML=`<code>${t}</code>`,o.childNodes[1].appendChild(n),o.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function N(t){const e=document.getElementById(A);if(e){const o=e.querySelector(`li[data-namespace="${t}"]`);if(null==o||o.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function F(t,e){let{method:o}=t;o===c.GET&&(e?_(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(A))))}function j(t){let{route:e,method:o,ms:n,response:r}=t;const s=document.querySelector(`#${A} textarea`);if(s){const t=s.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${o||"GET"}] [${n}ms] ${e}; ${null==r?void 0:r.substr(0,999)}`),s.value=t.join("\n")}}function D(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const o=document.getElementById(A);o&&e&&0===window.detectCorruptRestApiFailed&&(o.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))_(e,t[e])};let o;const n=()=>{clearTimeout(o),o=setTimeout(e,1e3)};n(),window.addEventListener(A,n)}const q=D;async function L(t,e,o){if(204===e.status)return{};const n=e.clone();try{return await e.json()}catch(e){const r=await n.text();if(""===r&&[c.DELETE,c.PUT].indexOf(o)>-1)return;let s;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:r});for(const t of r.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){s=t}throw s}}var $=o(414),I=o.n($);async function z(t){let{location:e,options:o,request:n,params:r,settings:s={},cookieValueAsParam:a,multipart:i=!1,sendRestNonce:l=!0,replayReason:h,allowBatchRequest:u}=t;const d=e.namespace||o.restNamespace,f=y({location:e,params:r,nonce:!1,options:o,cookieValueAsParam:a});["wp-json/","rest_route="].filter((t=>f.indexOf(t)>-1)).length>0&&e.method&&e.method!==c.GET?s.method=c.POST:s.method=e.method||c.GET;const m=new URL(f,window.location.href),v=-1===["HEAD","GET"].indexOf(s.method);!v&&n&&w(m,[n],!0);const g=m.toString();let b;v&&(i?(b=I()(n,"boolean"==typeof i?{}:i),Array.from(b.values()).filter((t=>t instanceof File)).length>0||(b=JSON.stringify(n))):b=JSON.stringify(n));const P=await S(o.restNonce),O=void 0!==P,C=p().all([s,{headers:{..."string"==typeof b?{"Content-Type":"application/json;charset=utf-8"}:{},...O&&l?{"X-WP-Nonce":P}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(C.body=b,u&&e.method!==c.GET&&!(b instanceof FormData))return k({method:e.method,path:y({location:e,params:r,nonce:!1,options:{...o,restRoot:"https://a.de/wp-json"},cookieValueAsParam:a}).substring(20),body:n},{...o,signal:s.signal,..."boolean"==typeof u?{}:u});let T,R=!1;const A=()=>{R=!0};window.addEventListener("pagehide",A),window.addEventListener("beforeunload",A);const x=(new Date).getTime();let _;try{T=await window.fetch(g,C),_=(new Date).getTime()-x,N(d)}catch(t){throw _=(new Date).getTime()-x,R||(j({method:e.method,route:m.pathname,ms:_,response:`${t}`}),F(s,d)),console.error(t),t}finally{window.removeEventListener("pagehide",A),window.removeEventListener("beforeunload",A)}if(!T.ok){let t,a,c=!1;try{if(t=await L(g,T,e.method),"private_site"===t.code&&403===T.status&&O&&!l&&(c=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&O){const{restRecreateNonceEndpoint:t}=o;try{c=!0,2===h?(a=4,await E()):a=2,await S(P,t)}catch(t){}}const n=T.headers.get("retry-after");n.match(/^\d+$/)&&(c=1e3*+n,a=3)}catch(t){}if(c){const t={location:e,options:o,multipart:i,params:r,request:n,sendRestNonce:!0,settings:s,replayReason:a};return"number"==typeof c?new Promise((e=>setTimeout((()=>z(t).then(e)),c))):await z(t)}j({method:e.method,route:m.pathname,ms:_,response:JSON.stringify(t)}),F(s);const u=T;throw u.responseJSON=t,u}return L(g,T,e.method)}function U(t){return{urlBuilder:e=>y({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>z({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const Z=c;var G=o(449);const Q=wp.i18n,B=wp;var H=o.n(B);function M(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return Q.sprintf(t,...o)}function W(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&H()&&H().i18n)for(const o of e[t])H().i18n.setLocaleData(o,t);return{_n:function(e,o,n){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];return M(Q._n(e,o,n,t),...s)},_nx:function(e,o,n,r){for(var s=arguments.length,a=new Array(s>4?s-4:0),i=4;i<s;i++)a[i-4]=arguments[i];return M(Q._nx(e,o,r,n,t),...a)},_x:function(e,o){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return M(Q._x(e,o,t),...r)},__:function(e){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return M(Q.__(e,t),...n)},_i:function(t,e){return(0,G.Z)({mixedString:t,components:e})}}}const J={path:"/plugin",method:c.GET};var V=o(824),K=o(736);const X=mobx;var Y,tt,et,ot;let nt=((ot=class{constructor(){(0,V.Z)(this,"entries",tt,this),(0,V.Z)(this,"busy",et,this),this.annotated=void 0,this.get=(0,X.flow)((function*(t){const{request:e,params:o,clear:n=!1}=t||{};this.busy=!0;try{const{path:t,namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:t,method:c.GET,namespace:r},request:e,params:o});n&&this.entries.clear();for(const t of s){const e=this.instance(t),o=this.entries.get(e.key);o?o.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,X.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:o}=t||{};this.busy=!0;try{const{singlePath:t,namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:t,method:c.GET,namespace:n},request:e,params:o}),s=this.instance(r);this.entries.set(s.key,s)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},Y=ot,tt=(0,K.Z)(Y.prototype,"entries",[X.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),et=(0,K.Z)(Y.prototype,"busy",[X.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Y);var rt,st,at,it,ct;let lt=((ct=class{get key(){var t;return null===(t=this.data)||void 0===t?void 0:t[this.annotated.keyId]}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,V.Z)(this,"data",st,this),(0,V.Z)(this,"collection",at,this),(0,V.Z)(this,"busy",it,this),this.annotated=void 0,this.persist=(0,X.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:o,method:n},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:o,method:n||c.POST,namespace:r},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(s),null!=e&&e.allowBatchRequest||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,X.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:o},namespace:n}=this.annotated,r=yield this.annotated.request({location:{path:e,method:o||c.PATCH,namespace:n},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(r),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,X.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:o,method:n},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:o,method:n||c.DELETE,namespace:r},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return null!=e&&e.allowBatchRequest||(this.collection.entries.delete(this.key),this.afterDelete()),s}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,X.runInAction)((()=>{this.collection=t,this.data=e}))}fromResponse(t){return(0,X.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}).annotate=t=>e=>class extends e{constructor(){super(...arguments),this.annotated=t}},rt=ct,st=(0,K.Z)(rt.prototype,"data",[X.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),at=(0,K.Z)(rt.prototype,"collection",[X.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=(0,K.Z)(rt.prototype,"busy",[X.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,K.Z)(rt.prototype,"key",[X.computed],Object.getOwnPropertyDescriptor(rt.prototype,"key"),rt.prototype),rt);class ht extends lt{transformDataForPersist(){var t,e;const o={...super.transformDataForPersist()};return o.title=null===(t=o.title)||void 0===t?void 0:t.rendered,o.content=null===(e=o.content)||void 0===e?void 0:e.rendered,delete o._links,delete o.link,o}transformDataForPatch(){return this.transformDataForPersist()}}class ut extends nt{}class dt extends lt{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class pt extends nt{}const ft={path:"/key-value-map/:name/:key",method:c.PATCH};function mt(t,e){let{chunks:o,chunksLanguageFolder:n,textDomain:r,version:s}=e;const i=o[t.split("?")[0]],c=!!i,[l,h]=(0,a.useState)(!1),u=(0,a.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:o}=e.wpi18nLazy,a=`${n}/${r}-${t}.json`;if(c&&-1===o.indexOf(a)){o.push(a);try{const t=await window.fetch(`${a}?ver=${s}`),{locale_data:{messages:e}}=await t.json();H().i18n.setLocaleData(e,r)}catch{}}}),[n,r]);return(0,a.useEffect)((()=>{c?Promise.all(i.map(u)).then((()=>{h(!0)})):h(!0)}),[c,u]),l}const wt=t=>{let{children:e,chunkFile:o,fallback:n,options:r}=t;const s=mt(o,r());return React.createElement(React.Fragment,null,s?e:n)}},363:t=>{t.exports=React}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t].call(s.exports,s,s.exports,n),s.exports}n.m=e,t=[],n.O=(e,o,r,s)=>{if(!o){var a=1/0;for(h=0;h<t.length;h++){for(var[o,r,s]=t[h],i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(h--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[o,r,s]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var r,s,[a,i,c]=o,l=0;if(a.some((e=>0!==t[e]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var h=c(n)}for(e&&e(o);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(h)},o=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var r=n.O(void 0,[764],(()=>n(471)));r=n.O(r),devowlWp_utils=r})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.6/9d1f1df33b7bc3f772146277d110535b/index.js.map
