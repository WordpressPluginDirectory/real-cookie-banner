var devowlWp_realQueue;(()=>{"use strict";var e,t={9329:(e,t,n)=>{let a;function o(){if("boolean"==typeof a)return a;const e="real-queue-test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),a=!0,!0}catch(e){return a=!1,!1}}n.r(t),n.d(t,{CLIENT_JOB_EVENT_PREFIX:()=>q,JOBS_DELETED_EVENT:()=>J,JOBS_RETRIED_EVENT:()=>L,JOBS_SKIPPED_EVENT:()=>D,JOB_DELAY_EVENT_PREFIX:()=>B,JOB_DONE_EVENT_PREFIX:()=>C,LOCAL_STORAGE_KEY_LOCK_TAB:()=>g,LOCAL_STORAGE_KEY_QUEUE_NOTIFY_WORKER_PREFIX:()=>R,LOCAL_STORAGE_KEY_RESTORE_JOBS:()=>F,REMAINING_EVENT:()=>T,RealQueueClass:()=>z,STATUS_ADDITIONAL_DATA_EVENT:()=>te,STATUS_EVENT:()=>ne,WINDOW_ACTIVITY_DETECTOR_IS_ACTIVE_KEY:()=>$,__:()=>v,_i:()=>h,_n:()=>m,_nx:()=>f,_x:()=>p,checkWorkerNotifications:()=>O,clearWorkerNotifications:()=>k,convertClientJobToPromise:()=>Z,convertServerJobToPromise:()=>U,createActivityDetector:()=>V,createJobToPopulateNextJobs:()=>ee,deleteJobs:()=>Se,executeClientJob:()=>G,executeServerJob:()=>Y,fetchJob:()=>P,fetchStatus:()=>ue,getConfigurableStatusParameters:()=>le,getGlobalQueue:()=>X,getStaticOptions:()=>E,jobDelay:()=>W,localStorageTest:()=>o,locationRestJobExecute:()=>M,locationRestJobGet:()=>x,locationRestJobResultPost:()=>N,locationRestJobsDelete:()=>we,locationRestJobsGet:()=>I,locationRestJobsRetryPost:()=>Re,locationRestJobsSkipPost:()=>ke,locationRestStatusGet:()=>ae,lockTab:()=>S,notifyWorkerTab:()=>_,ready:()=>y,refreshQueue:()=>de,request:()=>u,restoreJobsFromLocalStorage:()=>H,retryJobs:()=>_e,saveJobResult:()=>Q,setCurrentlyFetchingStatus:()=>se,skipJobs:()=>Oe,urlBuilder:()=>l,useProgress:()=>Je,useStatusErrors:()=>he,waitObject:()=>b});const r=devowlWp_utils;let i;function s(){return i||(i=(0,r.createRequestFactory)(window[r.BaseOptions.getPureSlug("real-queue",!0)]))}const l=function(){return s().urlBuilder(...arguments)},u=function(){return s().request(...arguments)};let c;function d(){return c||(c=(0,r.createLocalizationFactory)("devowl-wp-real-queue"))}const m=function(){return d()._n(...arguments)},f=function(){return d()._nx(...arguments)},p=function(){return d()._x(...arguments)},v=function(){return d().__(...arguments)},h=function(){return d()._i(...arguments)},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"complete";return new Promise((n=>{document.readyState===t?(null==e||e(),n()):document.addEventListener("readystatechange",(()=>{document.readyState===t&&(null==e||e(),n())}))}))};async function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0;for(;!e();){if(n>0&&a>=n)return;await new Promise((e=>setTimeout(e,t))),a++}return e()}const E=()=>window[r.BaseOptions.getPureSlug("real-queue",!0)].others,g="real-queue-lock-tab";let w;function S(e){if(o()){const t=`${g}-${E().localStorageSuffix}`;if("boolean"==typeof e&&clearInterval(w),!0===e){const e=()=>localStorage.setItem(t,(new Date).getTime().toString());e(),w=setInterval(e,3e3)}else!1===e&&localStorage.removeItem(t);const n=+localStorage.getItem(t);return 0!==n&&!isNaN(n)&&(new Date).getTime()-n<7e3}return!1}const R="real-queue-notify-worker-";function _(e){if(o()){const t=`${R}${E().localStorageSuffix}-${(new Date).getTime()}`;return localStorage.setItem(t,JSON.stringify(e)),!0}return!1}function k(){if(o()){const e=`${R}${E().localStorageSuffix}`;for(const t of Object.keys(localStorage))t.startsWith(e)&&localStorage.removeItem(t);return!0}return!1}function O(e){if(o()){const n=`${R}${E().localStorageSuffix}`;for(const a of Object.keys(localStorage))if(a.startsWith(n)){var t;const{event:n,data:o}=JSON.parse(localStorage.getItem(a));localStorage.removeItem(a),null===(t=e[n])||void 0===t||t.call(e,o)}return!0}return!1}const T="RealQueue/Remaining",I={path:"/jobs",method:r.RouteHttpVerb.GET};var j=n(5226);const C="RealQueue/JobDone/",J="RealQueue/JobsDeleted",L="RealQueue/JobsRetried",q="RealQueue/ClientJob/",x={path:"/job/:id",method:r.RouteHttpVerb.GET};async function P(e,t){return await u({location:x,params:{id:e,lock:t}})}const D="RealQueue/JobsSkipped",N={path:"/job/:id/result",method:r.RouteHttpVerb.POST};async function Q(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{code:a,message:o,data:r}=n;try{const n=await u({location:N,request:{process:t,errorCode:a,errorMessage:o,errorData:r?JSON.stringify(r):void 0},params:{id:e}});return n.pauseToAvoidRecurringException&&await new Promise((e=>{const{job:{type:t}}=n,a=async n=>{let{detail:{params:{type:o}}}=n;o===t&&(document.removeEventListener(J,a),e())},o=async n=>{let{detail:{request:{type:a}}}=n;a===t&&(document.removeEventListener(L,o),e())};document.addEventListener(J,a),document.addEventListener(L,o),document.addEventListener(D,(async n=>{let{detail:{request:{type:a}}}=n;a===t&&(document.removeEventListener(L,o),e())}))})),n}catch(a){return await new Promise((e=>setTimeout(e,6e4))),await Q(e,t,n)}}var A=n(948);const $="realQueueIsIdle";function V(){const e=(0,A.Z)({autoInit:!1});e.on("idle",(()=>{window[$]=!0})),e.on("active",(()=>{window[$]=!1})),e.init()}const B="RealQueue/JobDelay/";function W(e){const t=!!window[$],{type:n,delay_ms:a}=e,o={delay_ms:a};return document.dispatchEvent(new CustomEvent(`${B}${n}`,{detail:{job:e,isIdle:t,settings:o}})),new Promise((e=>setTimeout(e,o.delay_ms)))}const F="real-queue-restore-jobs";async function H(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X().enqueueHandler();if(o()){const t=`${F}-${E().localStorageSuffix}`,n=localStorage.getItem(t);if(localStorage.removeItem(t),n)try{const{jobs:a,remaining:o}=await u({location:I,params:{ids:n}}),r=a.filter((e=>{let{process:t,process_total:n,runs:a,retries:o,locked:r}=e;return t<n&&a<o+1&&!r}));return e.enqueueFromList(r),E().remaining=o,document.dispatchEvent(new CustomEvent(T,{detail:{remaining:o}})),localStorage.setItem(t,r.map((e=>{let{id:t}=e;return t})).join(",")),r.length>0}catch(e){}}return!1}async function G(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!1;const{id:a,type:r,retries:i}=e;try{await new Promise(((n,a)=>{document.dispatchEvent(new CustomEvent(`${q}${r}`,{detail:{job:e,resolve:n,reject:a,run:t,fetchJob:P,saveJobResult:Q}}))})),n=!0}catch(o){t<i?(await W(e),n=await G(e,t+1)):(await Q(a,0,o),n=!1)}if(0===t&&o()){var s;const e=`${F}-${E().localStorageSuffix}`,t=(null===(s=localStorage.getItem(e))||void 0===s?void 0:s.split(",").map(Number))||[],n=t.indexOf(a);n>-1&&t.splice(n,1),localStorage.setItem(e,t.join(","))}return n}function Z(e,t){const{type:n}=t;return[async()=>{try{const e=await G(t);(()=>{const{remaining:e}=E();e[n]&&(e[n][0]-=1),document.dispatchEvent(new CustomEvent(T,{detail:{remaining:e}}))})(),document.dispatchEvent(new CustomEvent(`${C}${n}`,{detail:{job:t,success:e}}))}catch(t){e.pause()}},()=>W(t)]}const M={path:"/job/:id",method:r.RouteHttpVerb.POST};async function Y(e,t){var n,a;const{id:r,delay_ms:i}=e,s=await u({location:M,request:{try:t.join(",")},params:{id:r}}),{done:l,failed:c,remaining:d}=s;E().remaining=d,document.dispatchEvent(new CustomEvent(T,{detail:{remaining:d}}));const[m]=c.filter((e=>{let{id:t}=e;return t===r})),[f]=l.filter((e=>{let{id:t}=e;return t===r}));if(0===l.length&&!m||m&&m.runs<=m.retries)return await new Promise((e=>setTimeout(e,i))),Y(e,t);if((null!=m&&null!==(n=m.exception)&&void 0!==n&&null!==(a=n.errors)&&void 0!==a&&a.real_queue_job_locked||f||m&&m.runs>m.retries)&&o()){var p;const e=`${F}-${E().localStorageSuffix}`,t=(null===(p=localStorage.getItem(e))||void 0===p?void 0:p.split(",").map(Number))||[],n=t.indexOf(r);n>-1&&t.splice(n,1),localStorage.setItem(e,t.join(","))}return s}const K=[];function U(e,t,n){const{id:a,type:o}=t;return[async()=>{const r=e=>document.dispatchEvent(new CustomEvent(`${C}${o}`,{detail:{job:t,success:e}}));if(K.indexOf(a)>-1)r(!0);else try{const{done:e}=await Y(t,n);K.push(...e.map((e=>{let{id:t}=e;return t}))),r(K.indexOf(a)>-1)}catch(t){e.pause()}},()=>K.indexOf(a)>-1?Promise.resolve():W(t)]}class z{constructor(){this.queue=[],this.alreadyAddedJobIds=[],this._handler=void 0,this.queue=[],this.listenRetries(),this.listenDeletions()}enqueueFromList(e){const t=e.filter((e=>{let{worker:t}=e;return"server"===t})).map((e=>{let{id:t}=e;return t})),n=[],{handler:a,alreadyAddedJobIds:r}=this;for(const o of e){const{id:e,type:i}=o;if(r.indexOf(e)>-1)continue;"client"===o.worker?n.push({runs:Z(a,o),job:o}):(t.splice(t.indexOf(e),1),n.push({runs:U(a,o,[...t]),job:o})),r.push(e);const s=`${C}${i}`,l=t=>{let{detail:{job:{id:n},success:a}}=t;if(n===e&&!a){document.removeEventListener(s,l);const e=this.alreadyAddedJobIds.indexOf(n);e>-1&&this.alreadyAddedJobIds.splice(e,1)}};document.addEventListener(s,l)}if(n.length>0){const t=n.length>40?10:0,{job:a}=n[t];n.splice(n.length-t,0,{runs:[ee(e[e.length-1].id,this)],job:a})}if(o()){var i;const t=`${F}-${E().localStorageSuffix}`,n=(null===(i=localStorage.getItem(t))||void 0===i?void 0:i.split(",").map(Number))||[];e.forEach((e=>{let{id:t}=e;return-1===n.indexOf(t)&&n.push(t)})),localStorage.setItem(t,n.join(","))}n.forEach((e=>{let{job:t,runs:n}=e;a.addAll(n,{job:t})}))}enqueue(e,t){if(null==t||!t.job)throw new Error("Please provide a job object!");const{job:{id:n,type:a}}=t,o={...t,id:n,type:a,run:e};this.queue.push(o)}dequeue(){const e=this.queue.shift();return null==e?void 0:e.run}get size(){return this.queue.length}filterQueueItem(e){return this.queue.filter((t=>{let{id:n,type:a}=t;return!(void 0!==e.id&&n!==e.id||void 0!==e.type&&a!==e.type)}))}filter(e){return this.filterQueueItem(e).map((e=>e.run))}get handler(){return this._handler}setHandler(e){this._handler=e}removeByType(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=[];this.queue=this.queue.filter((t=>{const a=t.type!==e;return a||n.push(t.id),a})),t&&(this.alreadyAddedJobIds=this.alreadyAddedJobIds.filter((e=>-1===n.indexOf(e))))}listenDeletions(){document.addEventListener(J,(async e=>{let{detail:{params:{type:t}}}=e;this.removeByType(t,!1)}))}listenRetries(){document.addEventListener(L,(async e=>{let{detail:{request:{type:t}}}=e;this.removeByType(t)}))}}function X(){if(!window.realQueueInstance){const e=new j.Z({autoStart:!0,concurrency:1,queueClass:z});e.enqueueHandler=function(){return this._queue},window.realQueueInstance=e,window.realQueueInstance.enqueueHandler().setHandler(window.realQueueInstance)}return window.realQueueInstance}function ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X().enqueueHandler();return async()=>{try{const{jobs:n,remaining:a}=await u({location:I,params:{after:e}});E().remaining=a,document.dispatchEvent(new CustomEvent(T,{detail:{remaining:a}})),t.enqueueFromList(n)}catch(e){t.handler.pause()}}}const te="RealQueue/Status/AdditionalData",ne="RealQueue/Status",ae={path:"/status",method:r.RouteHttpVerb.GET};let oe,re,ie=!1;function se(e){ie=e}function le(){const e={additionalData:[]};return document.dispatchEvent(new CustomEvent(te,{detail:{settings:e}})),{additionalData:e.additionalData.join(",")}}async function ue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15e3,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=async e=>{document.dispatchEvent(new CustomEvent(ne,{detail:e}));const{remaining:t,errors:n}=e;window.realQueueWorker&&0===X().size&&Object.values(t).length>0&&0===Object.values(n.list).length&&de(!1)},a=async function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if((!e||!ie)&&(window.realQueueWorker||"hidden"!==document.visibilityState)){ie=!0;try{const e=await u({location:ae,params:le()});await n(e)}finally{ie=!1}}};if("number"==typeof e)re=e,clearInterval(oe),oe=setInterval((()=>a()),e),t&&await a();else if(!0===e)await a(!1);else if("object"==typeof e&&e.from)switch(re>0&&ue(re),e.from){case"html":{const{html:t}=e,a=t.match(/^\s*<!--real-queue-status:(.*)-->$/m);a?await n(JSON.parse(a[1])):await ue(!0);break}}}let ce=!1;async function de(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!ce)if(window.realQueueWorker){ce=!0;try{await ee(0)(),e&&ue(!0)}finally{ce=!1}}else _({event:"refreshQueue"})}var me=n(8442),fe=n(3593);const pe=e=>{let{children:t}=e;return React.createElement(me.ZP,{prefixCls:"real-queue-antd",theme:{token:{colorPrimary:"#2271b1",borderRadius:3}}},React.createElement(fe.Z,null,t))};var ve=n(7363);function he(){const[,e]=(0,ve.useState)(),[t,n]=(0,ve.useState)({}),a=(0,ve.useCallback)(((t,a)=>e((e=>e!==t?(n(a),t):e))),[]),o=(0,ve.useCallback)((async e=>{let{detail:{errors:{hash:t,list:n}}}=e;a(t,n)}),[]);return(0,ve.useEffect)((()=>{const{hash:e,list:t}=E().errors;return a(e,t),document.addEventListener(ne,o),()=>{document.removeEventListener(ne,o)}}),[]),{errors:t}}var ye=n(698),be=n(4779),Ee=n(9894),ge=n(6145);const we={path:"/jobs",method:r.RouteHttpVerb.DELETE};async function Se(e){const t=await u({location:we,params:e});return document.dispatchEvent(new CustomEvent(J,{detail:{params:e,response:t}})),await ue(!0),t}const Re={path:"/jobs/retry",method:r.RouteHttpVerb.POST};async function _e(e){const t=await u({location:Re,request:e});document.dispatchEvent(new CustomEvent(L,{detail:{request:e,response:t}})),await ue(!0)}const ke={path:"/jobs/skip",method:r.RouteHttpVerb.POST};async function Oe(e){const t=await u({location:ke,request:e});document.dispatchEvent(new CustomEvent(L,{detail:{request:e,response:t}})),await ue(!0)}const Te=e=>{let{item:{actions:t,type:n,label:a,description:o,failedJobs:r}}=e;const[i,s]=(0,ve.useState)(!1),l=(0,ve.useCallback)((async()=>{s(!0);try{await Se({type:n})}finally{s(!1)}}),[n]),u=(0,ve.useCallback)((async()=>{s(!0);try{await _e({type:n})}finally{s(!1)}}),[n]),c=(0,ve.useCallback)((async()=>{s(!0);try{await Oe({type:n})}finally{s(!1)}}),[n]),d=(0,ve.useCallback)(((e,n)=>{var a;return(null===(a=t.filter((t=>{let{action:n}=t;return e===n}))[0])||void 0===a?void 0:a.linkText)||n}),[t]);return React.createElement(Ee.Z,{spinning:i},React.createElement(be.Z.Item,{style:{paddingLeft:0,paddingRight:0},actions:[React.createElement(ge.Z.Button,{key:"test",onClick:u,menu:{items:[{key:"skip",label:d("skip",v("Skip failed jobs")),onClick:c},...t.map((e=>{let{action:t,url:n,linkText:a,target:o="_blank"}=e;return!t&&{key:n,onClick:()=>window.open(n,o),label:a}})),{key:"delete",danger:!0,label:d("delete",v("Cancel process")),onClick:l}]}},d("retry",v("Retry")))]},React.createElement(be.Z.Item.Meta,{title:a,description:React.createElement(React.Fragment,null,React.createElement("div",null,o),React.createElement("div",{style:{marginTop:10}},React.createElement("strong",null,v("Error message:"))),r.slice(0,1).map((e=>{const{id:t,exception:{errors:n}}=e;return React.createElement("div",{"data-job":t,key:t,onClick:()=>console.log(e)},Object.keys(n).map((e=>React.createElement("div",{key:e,"data-code":e,dangerouslySetInnerHTML:{__html:n[e].join("<br />")}}))))})))})))},Ie=e=>{let{list:t}=e;return React.createElement(be.Z,{size:"small",dataSource:Object.values(t),renderItem:e=>React.createElement(Te,{item:e,key:e.type})})},je=()=>{const{errors:e}=he(),[t,n]=(0,ve.useState)(!1);return(0,ve.useEffect)((()=>{const{activeElement:t}=document;if(Object.values(e).length>0){if(t&&(/^(?:input|select|textarea|button)$/i.test(t.nodeName)||t.hasAttribute("contenteditable"))){n(!1);const e=()=>{n(!0)};return t.addEventListener("blur",e,{once:!0}),()=>{t.removeEventListener("blur",e)}}n(!0)}else n(!1);return()=>{}}),[e]),React.createElement(ye.Z,{className:"real-queue-error-modal",footer:null,title:v("Background tasks: Something went wrong"),open:t,width:750,closable:!1},React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},v("Your WordPress installation is working in the background on tasks that you basically don't notice. Unfortunately, an error occurred while running a task. Below is a list of failed tasks that you can either delete (and thus cancel the task) or try again.")),React.createElement(Ie,{list:e})))};var Ce=n(1533);function Je(e){let{type:t,fetchStatusInterval:n,fetchAdditionalData:a=!1,onAdditionalData:o,onCancel:r}=e;const[i,s]=(0,ve.useState)(!1),[l,u]=(0,ve.useState)(!1),[c,d]=(0,ve.useState)(),[m,f]=(0,ve.useState)(),[p,v]=(0,ve.useState)(),[h,y]=(0,ve.useState)(),[b,E]=(0,ve.useState)(),[g,w]=(0,ve.useState)(),{errors:{[t]:S}}=he();let R="not-started";l&&(S?R="failed":0!==c||h||(R="done"));const _=(0,ve.useCallback)((async e=>{let{detail:{currentJobs:n,remaining:{[t]:r},additionalData:i}}=e;if(r){const{remaining:e,total:a,failure:o,paused:i}=r,s=+((a-e)/a*100).toFixed(0);w(n[t]),d(e),v(a),y(o),E(i),f(s>0?s:1)}else w(void 0),d(0),v(0),y(0),E(0),f(100);!1!==a&&i[a]&&o(i)}),[t,o,a]);(0,ve.useEffect)((()=>(document.addEventListener(ne,_),()=>{document.removeEventListener(ne,_)})),[_]),(0,ve.useEffect)((()=>{c>0&&u(!0)}),[c]),(0,ve.useEffect)((()=>{if(a){const e=async e=>{let{detail:{settings:{additionalData:t}}}=e;t.push(a)};return document.addEventListener(te,e),()=>{document.removeEventListener(te,e)}}return()=>{}}),[a]);const k=(0,ve.useCallback)((()=>{u(!1),w(void 0),d(0),v(0),y(0),E(0),f(100),null==r||r()}),[r]);(0,ve.useEffect)((()=>{const e=async e=>{let{detail:{params:{type:n}}}=e;n===t&&k()};return document.addEventListener(J,e),()=>{document.removeEventListener(J,e)}}),[_,k]);const O=(0,ve.useCallback)((async()=>{k(),s(!0),await Se({type:t}),s(!1)}),[t,k]);return(0,ve.useEffect)((()=>n>0?(ue(n,!0),()=>{ue()}):()=>{}),[n]),{errors:S,status:R,jobsStarted:l,remaining:c,percent:m,total:p,failure:h,paused:b,currentJob:g,handleCancel:O,cancelling:i}}y((async()=>{await b((()=>S()?void 0:"unlocked"),3e3),window.addEventListener("beforeunload",(()=>S(!1))),S(!0);const e=document.createElement("div");document.body.appendChild(e),(0,Ce.render)(React.createElement(pe,null,React.createElement(je,null)),e),k(),window.realQueueWorker=!0,setInterval((()=>O({refreshQueue:de})),3e3),await H()||de()}),"interactive"),y((()=>{V(),ue(15e3,!0),document.addEventListener("visibilitychange",(()=>{"visible"===document.visibilityState&&ue(!0)}))})),document.addEventListener(`${q}example`,(async e=>{let{detail:{job:t,resolve:n,fetchJob:a,saveJobResult:o}}=e;console.log("Lock this job and sleep...",t);const{id:r,process_total:i}=t;await a(r,!0),await new Promise((e=>setTimeout(e,5e3))),o(r,i),n()}))},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,r]=e[c],s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var c=l(a)}for(t&&t(n);u<i.length;u++)r=i[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self.webpackChunkdevowlWp_realQueue=self.webpackChunkdevowlWp_realQueue||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[764],(()=>a(9329)));o=a.O(o),devowlWp_realQueue=o})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.7/58e4dec6379c206b3db22a18dfd67ab8/index.js.map
