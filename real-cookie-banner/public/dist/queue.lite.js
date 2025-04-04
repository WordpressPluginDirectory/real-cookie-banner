var realCookieBanner_queue;(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=devowlWp_utils,o=devowlWp_realQueue,r=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","index.php?xml_sitemap=params=","glossar/sitemap.xml"];async function a(e,t){void 0===t&&(t=r);const n=t.map((t=>fetch(`${e}${t}`,{mode:"no-cors"})));for(const e of n)try{const t=await e,n=await t.text();if(n.indexOf("<sitemapindex")>-1||n.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}const i=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function s(e,t,n){var o;void 0===n&&(n="");const r=(null==(o=e.match(i))?void 0:o[1])||"/",a=t.match(i);if(a){const[,t,o]=a,i=o?`?${o}${n?`?${n}`:""}`:n?`?${n}`:"";return`${e}${t.substr(r.length)}${i}`}return!1}const c="robots.txt";async function l(e,t){try{const n=t?`${t}=1`:"",o=await fetch(`${e}${c}${n?`?${n}`:""}`);if(!o.ok)return!1;const r=[...(await o.text()).matchAll(/^sitemap:(.*)$/gim)].map((e=>{let[,t]=e;return t.trim()}));let a=[];for(const t of r){const o=s(e,t,n);if(o){const e=await fetch(o);if(!e.ok)continue;const t=await e.text();if(!/<(?:sitemap|urlset)/gm.test(t))continue;a.push(o)}}return a=[...new Set(a)],!!a.length&&a}catch(e){return!1}}const u="https://base";async function d(e,t,n){if(n)try{const o=await async function(e){const t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n.trim(),"application/xml")}(t),{protocol:r}=new URL(t,u),a=o.querySelector("sitemapindex");if(a){const t=Array.from(a.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean);for(const o of t){const t=s(e,o)||o;await d(e,t,n)}}const i=o.querySelector("urlset");if(i){const e=Array.from(i.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean).map((e=>{try{const t=new URL(e,u);return"http:"===t.protocol&&(t.protocol=r),t.toString()}catch(t){return e}}));n.push(...e)}}catch(e){console.error(`Error occurred during "crawl('${t}')":\n\r Error: ${e}`)}else try{return(await d(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return[...new Set(n)]}let p;const m=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(p||(p=(0,n.createLocalizationFactory)(n.BaseOptions.getPureSlug("real-cookie-banner")))).__(...t)};async function f(e){const t=m('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',m("https://devowl.io/support/"));let n=window.realCookieBannerQueue.originalHomeUrl;[n]=n.split("?",2),null==e||e("find-sitemap");const o=await function(e,t,n){return new Promise(((o,r)=>{const i=e=>setTimeout((()=>o(e)),100);(async()=>{try{const o=await l(e);if(o)return void i(o);const r=await a(e);if(r)return void i([r]);if(t){const n=await l(e,t);if(n)return void i(n)}if(n){const t=await a(e,n);if(t)return void i([t])}i(!1)}catch(e){r(e)}})()}))}(n,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===o)throw new Error(`${m("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")} ${t}`);null==e||e("collect-sitemap");let r=[];try{r=await async function(e,t){return[...new Set((await Promise.all(t.map((t=>d(e,t))))).flat())]}(n,o)}catch(e){throw new Error(`${m("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")} ${t}`)}if(0===r.length)throw new Error(`${m("The sitemap is empty. So, we could not add any URLs to the scanner.")} ${t}`);return r}const y="rcb-scan",h={path:"/scanner/queue",method:n.RouteHttpVerb.POST},w={path:"/scanner/scan-without-login",namespace:"real-cookie-banner/v1",method:n.RouteHttpVerb.GET};let b=0;const g=jQuery;var v=e.n(g);(0,n.handleCorruptRestApi)({}),document.addEventListener(`${o.JOB_DELAY_EVENT_PREFIX}${y}`,(e=>{let{detail:{isIdle:t,settings:n}}=e;/page=real-cookie-banner(?:-pro)?-component#\/scanner/.test(window.location.href)||t?b>0&&b<n.delay_ms&&(n.delay_ms=b/2):n.delay_ms=3e3})),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}${y}`,(e=>{let{detail:{job:{id:t,data:{url:r,isLoopback:a,allowFailure:i},process_total:s,group_position:c,group_total:l,group_uuid:u},resolve:d,reject:p,saveJobResult:m}}=e;const f=async e=>{const r=new URL(e),{searchParams:y}=r;"1"===y.get("rcb-scan")&&y.get("rcb-scan-job")===`${t}`||(0,n.applyQueryString)(r,[{"rcb-scan":`-${window.btoa(JSON.stringify((0,o.getConfigurableStatusParameters)()))}-`,"rcb-scan-job":t}],!0);const h=`<a href="${e}" target="_blank">${e}</a>`;try{let e,n,y,g="",v=!1,_=()=>Promise.resolve(""),$=!1,x="";if(a){const a=await(0,o.request)({location:w,params:{url:r.toString(),jobId:t}});({status:e,statusText:g,ok:n,redirected:$,responseUrl:x}=a),y=a.headers["content-type"]||void 0,_=()=>Promise.resolve(a.body)}else{var b;const t=await window.fetch(r.toString(),{mode:"no-cors"}),{type:o,headers:a}=t;({status:e,statusText:g,ok:n,redirected:$,url:x}=t),y=null==(b=a.get("content-type"))?void 0:b.toLowerCase(),v="opaque"===o,_=()=>t.text()}$?f(x):n||v?(await(0,o.fetchStatus)({from:"html",html:await _()}),!u||c!==l&&1!==c||(0,o.fetchStatus)(!0),v&&await m(t,s),y&&!y.startsWith("text/")&&await m(t,s),d()):[404,410].indexOf(e)>-1||i?(await m(t,s),d()):p({code:`invalid_response_${e}`,message:`${g} (${h})`})}catch(e){p({code:"unexpected",message:`${e.toString()} (${h})`})}},y=(new Date).getTime();(0,o.setCurrentlyFetchingStatus)(!0),f(r).finally((()=>{(0,o.setCurrentlyFetchingStatus)(!1),b=(new Date).getTime()-y}))})),function(){const e=document.getElementById("rcb-scan-result-notice"),t=document.querySelector("#wp-admin-bar-rcb-scanner-found-services > a > span:nth-child(2)");let n=!1;document.addEventListener(o.STATUS_ADDITIONAL_DATA_EVENT,(async t=>{let{detail:{settings:{additionalData:o}}}=t;e&&n&&o.push("rcb-scan-notice")})),document.addEventListener(o.STATUS_EVENT,(o=>{let{detail:{currentJobs:{[y]:r},remaining:{[y]:a},additionalData:{"rcb-scan-notice":i}}}=o,s=100;const c=(null==a?void 0:a.failure)>0;if(a&&(null==r?void 0:r.group_position)>0){const{remaining:e,total:t}=a;s=+((t-e)/t*100).toFixed(0)}const l=s>0&&s<100,u=document.getElementById("rcb-scanner-status"),d=document.getElementById("rcb-checklist-overdue");if(n=l,e&&i&&(e.innerHTML=i.text,t.innerHTML=t.innerHTML.replace(/\d+/,i.countAll.toString())),u){const e="none"!==u.style.display;if(u.innerHTML=`${s} %`,u.style.display=l?"inline-block":"none",d&&(d.style.display=l?"none":"inline-block"),e&&!l&&!c)try{const e=v()(['#real-cookie-banner-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)','#real-cookie-banner-pro-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)',"body:not(.toplevel_page_real-cookie-banner-component) #toplevel_page_real-cookie-banner-component","body:not(.toplevel_page_real-cookie-banner-pro-component) #toplevel_page_real-cookie-banner-pro-component"].join(",")),t=e.hasClass("nav-tab");e.pointer({content:`<h3>${m("Real Cookie Banner has scanned your website!")}</h3><p>${m('You may not have noticed, but we have been scanning your website in the background. View <a href="%s">scanner results</a> to obtain consent for used services from your website visitors!',`${t?"":e.find("a").attr("href")}#/scanner`)}</p>`,position:t?{edge:"top"}:{edge:"left",align:"bottom"},pointerClass:"wp-pointer arrow-"+(t?"top":"bottom"),pointerWidth:420});const n=e.pointer("widget");n.css({marginLeft:-10}),t&&n.find(".wp-pointer-arrow").css({marginLeft:-38}),e.pointer("open"),t&&e.add(n.find("a")).on("click",(()=>{e.pointer("destroy")}))}catch(e){}}}))}(),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}rcb-automatic-scan-starter`,(async e=>{let t,{detail:{job:{id:r,process_total:a},resolve:i,saveJobResult:s}}=e;const c=setInterval((()=>{t=document.getElementById("rcb-btn-scan-start"),t&&(t.style.display="none")}),1e3);try{const e=await f(),{restRoot:t,restNonce:r,restQuery:a}=window.realQueue,i={restRoot:t,restNamespace:"real-cookie-banner/v1",restNonce:r,restQuery:a};await(0,n.commonRequest)({location:h,options:i,request:{urls:e,purgeUnused:!0}}),await(0,o.refreshQueue)(),(0,o.fetchStatus)(!0)}catch(e){}finally{clearInterval(c),t&&t.style.removeProperty("display"),await s(r,a),i()}})),realCookieBanner_queue=t})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.1.0/cf0d82c6bfbec22156d1e7b8650fb670/queue.lite.js.map
