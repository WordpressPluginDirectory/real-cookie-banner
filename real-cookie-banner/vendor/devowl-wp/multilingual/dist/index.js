var devowlWp_multilingual;(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{createCopy:()=>n,locationRestCopyPost:()=>r});const o=devowlWp_utils,r={path:"/:objectType/multilingual/copy",namespace:"wp/v2",method:o.RouteHttpVerb.POST};async function n(e,t,n){const{root:a,nonce:l}=window.wpApiSettings,{translations:i}=await(0,o.commonRequest)({location:r,options:{restRoot:a,restNonce:l,restNamespace:"wp/v2",restQuery:{}},request:{id:t,targetLocale:n},params:{objectType:e}});return i[n]}devowlWp_multilingual=t})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.1/2d42d803c4291b15c39fca87adfebc51/index.js.map
