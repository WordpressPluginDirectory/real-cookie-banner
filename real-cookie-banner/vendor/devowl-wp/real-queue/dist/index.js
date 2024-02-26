var devowlWp_realQueue;(()=>{"use strict";var e,t={921:(e,t,n)=>{let a;function o(){if("boolean"==typeof a)return a;const e="real-queue-test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),a=!0,!0}catch(e){return a=!1,!1}}n.r(t),n.d(t,{CLIENT_JOB_EVENT_PREFIX:()=>J,JOBS_DELETED_EVENT:()=>j,JOBS_RETRIED_EVENT:()=>C,JOBS_SKIPPED_EVENT:()=>x,JOB_DELAY_EVENT_PREFIX:()=>$,JOB_DONE_EVENT_PREFIX:()=>I,LOCAL_STORAGE_KEY_LOCK_TAB:()=>b,LOCAL_STORAGE_KEY_QUEUE_NOTIFY_WORKER_PREFIX:()=>w,LOCAL_STORAGE_KEY_RESTORE_JOBS:()=>B,REMAINING_EVENT:()=>k,RealQueueClass:()=>K,STATUS_ADDITIONAL_DATA_EVENT:()=>X,STATUS_EVENT:()=>ee,WINDOW_ACTIVITY_DETECTOR_IS_ACTIVE_KEY:()=>Q,__:()=>v,_i:()=>h,_n:()=>m,_nx:()=>f,_x:()=>p,checkWorkerNotifications:()=>_,clearWorkerNotifications:()=>R,convertClientJobToPromise:()=>H,convertServerJobToPromise:()=>Y,createActivityDetector:()=>A,createJobToPopulateNextJobs:()=>z,deleteJobs:()=>ge,executeClientJob:()=>F,executeServerJob:()=>M,fetchJob:()=>q,fetchStatus:()=>se,getConfigurableStatusParameters:()=>ie,getGlobalQueue:()=>U,getStaticOptions:()=>y,jobDelay:()=>V,localStorageTest:()=>o,locationRestJobExecute:()=>G,locationRestJobGet:()=>L,locationRestJobResultPost:()=>P,locationRestJobsDelete:()=>Ee,locationRestJobsGet:()=>O,locationRestJobsRetryPost:()=>we,locationRestJobsSkipPost:()=>Re,locationRestStatusGet:()=>te,lockTab:()=>g,notifyWorkerTab:()=>S,refreshQueue:()=>ce,request:()=>c,restoreJobsFromLocalStorage:()=>W,retryJobs:()=>Se,saveJobResult:()=>D,setCurrentlyFetchingStatus:()=>re,skipJobs:()=>_e,urlBuilder:()=>l,useProgress:()=>xe,useStatusErrors:()=>pe});const r=devowlWp_utils;let i;function s(){return i||(i=(0,r.createRequestFactory)(window[r.BaseOptions.getPureSlug("real-queue",!0)]))}const l=function(){return s().urlBuilder(...arguments)},c=function(){return s().request(...arguments)};let u;function d(){return u||(u=(0,r.createLocalizationFactory)("devowl-wp-real-queue"))}const m=function(){return d()._n(...arguments)},f=function(){return d()._nx(...arguments)},p=function(){return d()._x(...arguments)},v=function(){return d().__(...arguments)},h=function(){return d()._i(...arguments)},y=()=>window[r.BaseOptions.getPureSlug("real-queue",!0)].others,b="real-queue-lock-tab";let E;function g(e){if(o()){const t=`${b}-${y().localStorageSuffix}`;if("boolean"==typeof e&&clearInterval(E),!0===e){const e=()=>localStorage.setItem(t,(new Date).getTime().toString());e(),E=setInterval(e,3e3)}else!1===e&&localStorage.removeItem(t);const n=+localStorage.getItem(t);return 0!==n&&!isNaN(n)&&(new Date).getTime()-n<7e3}return!1}const w="real-queue-notify-worker-";function S(e){if(o()){const t=`${w}${y().localStorageSuffix}-${(new Date).getTime()}`;return localStorage.setItem(t,JSON.stringify(e)),!0}return!1}function R(){if(o()){const e=`${w}${y().localStorageSuffix}`;for(const t of Object.keys(localStorage))t.startsWith(e)&&localStorage.removeItem(t);return!0}return!1}function _(e){if(o()){const n=`${w}${y().localStorageSuffix}`;for(const a of Object.keys(localStorage))if(a.startsWith(n)){var t;const{event:n,data:o}=JSON.parse(localStorage.getItem(a));localStorage.removeItem(a),null===(t=e[n])||void 0===t||t.call(e,o)}return!0}return!1}const k="RealQueue/Remaining",O={path:"/jobs",method:r.RouteHttpVerb.GET};var T=n(5226);const I="RealQueue/JobDone/",j="RealQueue/JobsDeleted",C="RealQueue/JobsRetried",J="RealQueue/ClientJob/",L={path:"/job/:id",method:r.RouteHttpVerb.GET};async function q(e,t){return await c({location:L,params:{id:e,lock:t}})}const x="RealQueue/JobsSkipped",P={path:"/job/:id/result",method:r.RouteHttpVerb.POST};async function D(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{code:a,message:o,data:r}=n;try{const n=await c({location:P,request:{process:t,errorCode:a,errorMessage:o,errorData:r?JSON.stringify(r):void 0},params:{id:e}});return n.pauseToAvoidRecurringException&&await new Promise((e=>{const{job:{type:t}}=n,a=async n=>{let{detail:{params:{type:o}}}=n;o===t&&(document.removeEventListener(j,a),e())},o=async n=>{let{detail:{request:{type:a}}}=n;a===t&&(document.removeEventListener(C,o),e())};document.addEventListener(j,a),document.addEventListener(C,o),document.addEventListener(x,(async n=>{let{detail:{request:{type:a}}}=n;a===t&&(document.removeEventListener(C,o),e())}))})),n}catch(a){return await new Promise((e=>setTimeout(e,6e4))),await D(e,t,n)}}var N=n(948);const Q="realQueueIsIdle";function A(){const e=(0,N.Z)({autoInit:!1});e.on("idle",(()=>{window[Q]=!0})),e.on("active",(()=>{window[Q]=!1})),e.init()}const $="RealQueue/JobDelay/";function V(e){const t=!!window[Q],{type:n,delay_ms:a}=e,o={delay_ms:a};return document.dispatchEvent(new CustomEvent(`${$}${n}`,{detail:{job:e,isIdle:t,settings:o}})),new Promise((e=>setTimeout(e,o.delay_ms)))}const B="real-queue-restore-jobs";async function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U().enqueueHandler();if(o()){const t=`${B}-${y().localStorageSuffix}`,n=localStorage.getItem(t);if(localStorage.removeItem(t),n)try{const{jobs:a,remaining:o}=await c({location:O,params:{ids:n}}),r=a.filter((e=>{let{process:t,process_total:n,runs:a,retries:o,locked:r}=e;return t<n&&a<o+1&&!r}));return e.enqueueFromList(r),y().remaining=o,document.dispatchEvent(new CustomEvent(k,{detail:{remaining:o}})),localStorage.setItem(t,r.map((e=>{let{id:t}=e;return t})).join(",")),r.length>0}catch(e){}}return!1}async function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!1;const{id:a,type:r,retries:i}=e;try{await new Promise(((n,a)=>{document.dispatchEvent(new CustomEvent(`${J}${r}`,{detail:{job:e,resolve:n,reject:a,run:t,fetchJob:q,saveJobResult:D}}))})),n=!0}catch(o){t<i?(await V(e),n=await F(e,t+1)):(await D(a,0,o),n=!1)}if(0===t&&o()){var s;const e=`${B}-${y().localStorageSuffix}`,t=(null===(s=localStorage.getItem(e))||void 0===s?void 0:s.split(",").map(Number))||[],n=t.indexOf(a);n>-1&&t.splice(n,1),localStorage.setItem(e,t.join(","))}return n}function H(e,t){const{type:n}=t;return[async()=>{try{const e=await F(t);(()=>{const{remaining:e}=y();e[n]&&(e[n][0]-=1),document.dispatchEvent(new CustomEvent(k,{detail:{remaining:e}}))})(),document.dispatchEvent(new CustomEvent(`${I}${n}`,{detail:{job:t,success:e}}))}catch(t){e.pause()}},()=>V(t)]}const G={path:"/job/:id",method:r.RouteHttpVerb.POST};async function M(e,t){var n,a;const{id:r,delay_ms:i}=e,s=await c({location:G,request:{try:t.join(",")},params:{id:r}}),{done:l,failed:u,remaining:d}=s;y().remaining=d,document.dispatchEvent(new CustomEvent(k,{detail:{remaining:d}}));const[m]=u.filter((e=>{let{id:t}=e;return t===r})),[f]=l.filter((e=>{let{id:t}=e;return t===r}));if(0===l.length&&!m||m&&m.runs<=m.retries)return await new Promise((e=>setTimeout(e,i))),M(e,t);if((null!=m&&null!==(n=m.exception)&&void 0!==n&&null!==(a=n.errors)&&void 0!==a&&a.real_queue_job_locked||f||m&&m.runs>m.retries)&&o()){var p;const e=`${B}-${y().localStorageSuffix}`,t=(null===(p=localStorage.getItem(e))||void 0===p?void 0:p.split(",").map(Number))||[],n=t.indexOf(r);n>-1&&t.splice(n,1),localStorage.setItem(e,t.join(","))}return s}const Z=[];function Y(e,t,n){const{id:a,type:o}=t;return[async()=>{const r=e=>document.dispatchEvent(new CustomEvent(`${I}${o}`,{detail:{job:t,success:e}}));if(Z.indexOf(a)>-1)r(!0);else try{const{done:e}=await M(t,n);Z.push(...e.map((e=>{let{id:t}=e;return t}))),r(Z.indexOf(a)>-1)}catch(t){e.pause()}},()=>Z.indexOf(a)>-1?Promise.resolve():V(t)]}class K{constructor(){this.queue=[],this.alreadyAddedJobIds=[],this._handler=void 0,this.queue=[],this.listenRetries(),this.listenDeletions()}enqueueFromList(e){const t=e.filter((e=>{let{worker:t}=e;return"server"===t})).map((e=>{let{id:t}=e;return t})),n=[],{handler:a,alreadyAddedJobIds:r}=this;for(const o of e){const{id:e,type:i}=o;if(r.indexOf(e)>-1)continue;"client"===o.worker?n.push({runs:H(a,o),job:o}):(t.splice(t.indexOf(e),1),n.push({runs:Y(a,o,[...t]),job:o})),r.push(e);const s=`${I}${i}`,l=t=>{let{detail:{job:{id:n},success:a}}=t;if(n===e&&!a){document.removeEventListener(s,l);const e=this.alreadyAddedJobIds.indexOf(n);e>-1&&this.alreadyAddedJobIds.splice(e,1)}};document.addEventListener(s,l)}if(n.length>0){const t=n.length>40?10:0,{job:a}=n[t];n.splice(n.length-t,0,{runs:[z(e[e.length-1].id,this)],job:a})}if(o()){var i;const t=`${B}-${y().localStorageSuffix}`,n=(null===(i=localStorage.getItem(t))||void 0===i?void 0:i.split(",").map(Number))||[];e.forEach((e=>{let{id:t}=e;return-1===n.indexOf(t)&&n.push(t)})),localStorage.setItem(t,n.join(","))}n.forEach((e=>{let{job:t,runs:n}=e;a.addAll(n,{job:t})}))}enqueue(e,t){if(null==t||!t.job)throw new Error("Please provide a job object!");const{job:{id:n,type:a}}=t,o={...t,id:n,type:a,run:e};this.queue.push(o)}dequeue(){const e=this.queue.shift();return null==e?void 0:e.run}get size(){return this.queue.length}filterQueueItem(e){return this.queue.filter((t=>{let{id:n,type:a}=t;return!(void 0!==e.id&&n!==e.id||void 0!==e.type&&a!==e.type)}))}filter(e){return this.filterQueueItem(e).map((e=>e.run))}get handler(){return this._handler}setHandler(e){this._handler=e}removeByType(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=[];this.queue=this.queue.filter((t=>{const a=t.type!==e;return a||n.push(t.id),a})),t&&(this.alreadyAddedJobIds=this.alreadyAddedJobIds.filter((e=>-1===n.indexOf(e))))}listenDeletions(){document.addEventListener(j,(async e=>{let{detail:{params:{type:t}}}=e;this.removeByType(t,!1)}))}listenRetries(){document.addEventListener(C,(async e=>{let{detail:{request:{type:t}}}=e;this.removeByType(t)}))}}function U(){if(!window.realQueueInstance){const e=new T.Z({autoStart:!0,concurrency:1,queueClass:K});e.enqueueHandler=function(){return this._queue},window.realQueueInstance=e,window.realQueueInstance.enqueueHandler().setHandler(window.realQueueInstance)}return window.realQueueInstance}function z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U().enqueueHandler();return async()=>{try{const{jobs:n,remaining:a}=await c({location:O,params:{after:e}});y().remaining=a,document.dispatchEvent(new CustomEvent(k,{detail:{remaining:a}})),t.enqueueFromList(n)}catch(e){t.handler.pause()}}}const X="RealQueue/Status/AdditionalData",ee="RealQueue/Status",te={path:"/status",method:r.RouteHttpVerb.GET};let ne,ae,oe=!1;function re(e){oe=e}function ie(){const e={additionalData:[]};return document.dispatchEvent(new CustomEvent(X,{detail:{settings:e}})),{additionalData:e.additionalData.join(",")}}async function se(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15e3,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=async e=>{document.dispatchEvent(new CustomEvent(ee,{detail:e}));const{remaining:t,errors:n}=e;window.realQueueWorker&&0===U().size&&Object.values(t).length>0&&0===Object.values(n.list).length&&ce(!1)},a=async function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if((!e||!oe)&&(window.realQueueWorker||"hidden"!==document.visibilityState)){oe=!0;try{const e=await c({location:te,params:ie()});await n(e)}finally{oe=!1}}};if("number"==typeof e)ae=e,clearInterval(ne),ne=setInterval((()=>a()),e),t&&await a();else if(!0===e)await a(!1);else if("object"==typeof e&&e.from)switch(ae>0&&se(ae),e.from){case"html":{const{html:t}=e,a=t.match(/^\s*<!--real-queue-status:(.*)-->$/m);a?await n(JSON.parse(a[1])):await se(!0);break}}}let le=!1;async function ce(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!le)if(window.realQueueWorker){le=!0;try{await z(0)(),e&&se(!0)}finally{le=!1}}else S({event:"refreshQueue"})}var ue=n(8442),de=n(3593);const me=e=>{let{children:t}=e;return React.createElement(ue.ZP,{prefixCls:"real-queue-antd",theme:{token:{colorPrimary:"#2271b1",borderRadius:3}}},React.createElement(de.Z,null,t))};var fe=n(7363);function pe(){const[,e]=(0,fe.useState)(),[t,n]=(0,fe.useState)({}),a=(0,fe.useCallback)(((t,a)=>e((e=>e!==t?(n(a),t):e))),[]),o=(0,fe.useCallback)((async e=>{let{detail:{errors:{hash:t,list:n}}}=e;a(t,n)}),[]);return(0,fe.useEffect)((()=>{const{hash:e,list:t}=y().errors;return a(e,t),document.addEventListener(ee,o),()=>{document.removeEventListener(ee,o)}}),[]),{errors:t}}var ve=n(698),he=n(4779),ye=n(9894),be=n(6145);const Ee={path:"/jobs",method:r.RouteHttpVerb.DELETE};async function ge(e){const t=await c({location:Ee,params:e});return document.dispatchEvent(new CustomEvent(j,{detail:{params:e,response:t}})),await se(!0),t}const we={path:"/jobs/retry",method:r.RouteHttpVerb.POST};async function Se(e){const t=await c({location:we,request:e});document.dispatchEvent(new CustomEvent(C,{detail:{request:e,response:t}})),await se(!0)}const Re={path:"/jobs/skip",method:r.RouteHttpVerb.POST};async function _e(e){const t=await c({location:Re,request:e});document.dispatchEvent(new CustomEvent(C,{detail:{request:e,response:t}})),await se(!0)}const ke=e=>{let{item:{actions:t,type:n,label:a,description:o,failedJobs:r}}=e;const[i,s]=(0,fe.useState)(!1),l=(0,fe.useCallback)((async()=>{s(!0);try{await ge({type:n})}finally{s(!1)}}),[n]),c=(0,fe.useCallback)((async()=>{s(!0);try{await Se({type:n})}finally{s(!1)}}),[n]),u=(0,fe.useCallback)((async()=>{s(!0);try{await _e({type:n})}finally{s(!1)}}),[n]),d=(0,fe.useCallback)(((e,n)=>{var a;return(null===(a=t.filter((t=>{let{action:n}=t;return e===n}))[0])||void 0===a?void 0:a.linkText)||n}),[t]);return React.createElement(ye.Z,{spinning:i},React.createElement(he.Z.Item,{style:{paddingLeft:0,paddingRight:0},actions:[React.createElement(be.Z.Button,{key:"test",onClick:c,menu:{items:[{key:"skip",label:d("skip",v("Skip failed jobs")),onClick:u},...t.map((e=>{let{action:t,url:n,linkText:a,target:o="_blank"}=e;return!t&&{key:n,onClick:()=>window.open(n,o),label:a}})),{key:"delete",danger:!0,label:d("delete",v("Cancel process")),onClick:l}]}},d("retry",v("Retry")))]},React.createElement(he.Z.Item.Meta,{title:a,description:React.createElement(React.Fragment,null,React.createElement("div",null,o),React.createElement("div",{style:{marginTop:10}},React.createElement("strong",null,v("Error message:"))),r.slice(0,1).map((e=>{const{id:t,exception:{errors:n}}=e;return React.createElement("div",{"data-job":t,key:t,onClick:()=>console.log(e)},Object.keys(n).map((e=>React.createElement("div",{key:e,"data-code":e,dangerouslySetInnerHTML:{__html:n[e].join("<br />")}}))))})))})))},Oe=e=>{let{list:t}=e;return React.createElement(he.Z,{size:"small",dataSource:Object.values(t),renderItem:e=>React.createElement(ke,{item:e,key:e.type})})},Te=()=>{const{errors:e}=pe(),[t,n]=(0,fe.useState)(!1);return(0,fe.useEffect)((()=>{const{activeElement:t}=document;if(Object.values(e).length>0){if(t&&(/^(?:input|select|textarea|button)$/i.test(t.nodeName)||t.hasAttribute("contenteditable"))){n(!1);const e=()=>{n(!0)};return t.addEventListener("blur",e,{once:!0}),()=>{t.removeEventListener("blur",e)}}n(!0)}else n(!1);return()=>{}}),[e]),React.createElement(ve.Z,{className:"real-queue-error-modal",footer:null,title:v("Background tasks: Something went wrong"),open:t,width:750,closable:!1},React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},v("Your WordPress installation is working in the background on tasks that you basically don't notice. Unfortunately, an error occurred while running a task. Below is a list of failed tasks that you can either delete (and thus cancel the task) or try again.")),React.createElement(Oe,{list:e})))};var Ie=n(1533);const je=()=>{let e;return[!1,new Promise((t=>e=t)),e]},Ce={loading:je(),complete:je(),interactive:je()},Je=()=>{const{readyState:e}=document,[t,,n]=Ce[e];if(!t){Ce[e][0]=!0,n();const[t,,a]=Ce.interactive;"complete"!==e||t||(Ce.interactive[0]=!0,a())}},Le=["readystatechange","rocket-readystatechange","DOMContentLoaded","rocket-DOMContentLoaded","rocket-allScriptsLoaded"],qe=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"complete";return new Promise((n=>{let a=!1;const o=()=>{Je(),!a&&Ce[t][0]&&(a=!0,null==e||e(),setTimeout(n,0))};o();for(const e of Le)document.addEventListener(e,o);Ce[t][1].then(o)}))};function xe(e){let{type:t,fetchStatusInterval:n,fetchAdditionalData:a=!1,onAdditionalData:o,onCancel:r}=e;const[i,s]=(0,fe.useState)(!1),[l,c]=(0,fe.useState)(!1),[u,d]=(0,fe.useState)(),[m,f]=(0,fe.useState)(),[p,v]=(0,fe.useState)(),[h,y]=(0,fe.useState)(),[b,E]=(0,fe.useState)(),[g,w]=(0,fe.useState)(),{errors:{[t]:S}}=pe();let R="not-started";l&&(S?R="failed":0!==u||h||(R="done"));const _=(0,fe.useCallback)((async e=>{let{detail:{currentJobs:n,remaining:{[t]:r},additionalData:i}}=e;if(r){const{remaining:e,total:a,failure:o,paused:i}=r,s=+((a-e)/a*100).toFixed(0);w(n[t]),d(e),v(a),y(o),E(i),f(s>0?s:1)}else w(void 0),d(0),v(0),y(0),E(0),f(100);!1!==a&&i[a]&&o(i)}),[t,o,a]);(0,fe.useEffect)((()=>(document.addEventListener(ee,_),()=>{document.removeEventListener(ee,_)})),[_]),(0,fe.useEffect)((()=>{u>0&&c(!0)}),[u]),(0,fe.useEffect)((()=>{if(a){const e=async e=>{let{detail:{settings:{additionalData:t}}}=e;t.push(a)};return document.addEventListener(X,e),()=>{document.removeEventListener(X,e)}}return()=>{}}),[a]);const k=(0,fe.useCallback)((()=>{c(!1),w(void 0),d(0),v(0),y(0),E(0),f(100),null==r||r()}),[r]);(0,fe.useEffect)((()=>{const e=async e=>{let{detail:{params:{type:n}}}=e;n===t&&k()};return document.addEventListener(j,e),()=>{document.removeEventListener(j,e)}}),[_,k]);const O=(0,fe.useCallback)((async()=>{k(),s(!0),await ge({type:t}),s(!1)}),[t,k]);return(0,fe.useEffect)((()=>n>0?(se(n,!0),()=>{se()}):()=>{}),[n]),{errors:S,status:R,jobsStarted:l,remaining:u,percent:m,total:p,failure:h,paused:b,currentJob:g,handleCancel:O,cancelling:i}}qe((async()=>{await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=0;for(;!e();){if(n>0&&a>=n)return;await new Promise((e=>setTimeout(e,t))),a++}return e()}((()=>g()?void 0:"unlocked"),3e3),window.addEventListener("beforeunload",(()=>g(!1))),g(!0);const e=document.createElement("div");document.body.appendChild(e),(0,Ie.render)(React.createElement(me,null,React.createElement(Te,null)),e),R(),window.realQueueWorker=!0,setInterval((()=>_({refreshQueue:ce})),3e3),await W()||ce()}),"interactive"),qe((()=>{A(),se(15e3,!0),document.addEventListener("visibilitychange",(()=>{"visible"===document.visibilityState&&se(!0)}))})),document.addEventListener(`${J}example`,(async e=>{let{detail:{job:t,resolve:n,fetchJob:a,saveJobResult:o}}=e;console.log("Lock this job and sleep...",t);const{id:r,process_total:i}=t;await a(r,!0),await new Promise((e=>setTimeout(e,5e3))),o(r,i),n()}))},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,r]=e[u],s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self.webpackChunkdevowlWp_realQueue=self.webpackChunkdevowlWp_realQueue||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[764],(()=>a(921)));o=a.O(o),devowlWp_realQueue=o})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.0/e890a701786c6970cd539b3623212aac/index.js.map
