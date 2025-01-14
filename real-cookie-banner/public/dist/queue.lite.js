var realCookieBanner_queue;(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=devowlWp_utils,o=devowlWp_realQueue,r="rcb-scan",a={path:"/scanner/scan-without-login",namespace:"real-cookie-banner/v1",method:n.RouteHttpVerb.GET};let i,s=0;const c=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(i||(i=(0,n.createLocalizationFactory)(n.BaseOptions.getPureSlug("real-cookie-banner")))).__(...t)},l=jQuery;var u=e.n(l);const d={path:"/scanner/queue",method:n.RouteHttpVerb.POST},p=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function m(e,t,n){var o;void 0===n&&(n="");const r=(null==(o=e.match(p))?void 0:o[1])||"/",a=t.match(p);if(a){const[,t,o]=a,i=o?`?${o}${n?`?${n}`:""}`:n?`?${n}`:"";return`${e}${t.substr(r.length)}${i}`}return!1}const f="robots.txt";async function y(e,t){try{const n=t?`${t}=1`:"",o=await fetch(`${e}${f}${n?`?${n}`:""}`);if(!o.ok)return!1;const r=[...(await o.text()).matchAll(/^sitemap:(.*)$/gim)].map((e=>{let[,t]=e;return t.trim()}));let a=[];for(const t of r){const o=m(e,t,n);if(o){const e=await fetch(o);if(!e.ok)continue;const t=await e.text();if(!/<(?:sitemap|urlset)/gm.test(t))continue;a.push(o)}}return a=[...new Set(a)],!!a.length&&a}catch(e){return!1}}const h=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","index.php?xml_sitemap=params=","glossar/sitemap.xml"];async function w(e,t){void 0===t&&(t=h);const n=t.map((t=>fetch(`${e}${t}`,{mode:"no-cors"})));for(const e of n)try{const t=await e,n=await t.text();if(n.indexOf("<sitemapindex")>-1||n.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}const b="https://base";async function g(e,t,n){if(n)try{const o=await async function(e){const t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n.trim(),"application/xml")}(t),{protocol:r}=new URL(t,b),a=o.querySelector("sitemapindex");if(a){const t=Array.from(a.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean);for(const o of t){const t=m(e,o)||o;await g(e,t,n)}}const i=o.querySelector("urlset");if(i){const e=Array.from(i.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean).map((e=>{try{const t=new URL(e,b);return"http:"===t.protocol&&(t.protocol=r),t.toString()}catch(t){return e}}));n.push(...e)}}catch(e){console.error(`Error occurred during "crawl('${t}')":\n\r Error: ${e}`)}else try{return(await g(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return[...new Set(n)]}async function v(e){const t=c('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',c("https://devowl.io/support/"));let n=window.realCookieBannerQueue.originalHomeUrl;[n]=n.split("?",2),null==e||e("find-sitemap");const o=await function(e,t,n){return new Promise(((o,r)=>{const a=e=>setTimeout((()=>o(e)),100);(async()=>{try{const o=await y(e);if(o)return void a(o);const r=await w(e);if(r)return void a([r]);if(t){const n=await y(e,t);if(n)return void a(n)}if(n){const t=await w(e,n);if(t)return void a([t])}a(!1)}catch(e){r(e)}})()}))}(n,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===o)throw new Error(`${c("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")} ${t}`);null==e||e("collect-sitemap");let r=[];try{r=await async function(e,t){return[...new Set((await Promise.all(t.map((t=>g(e,t))))).flat())]}(n,o)}catch(e){throw new Error(`${c("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")} ${t}`)}if(0===r.length)throw new Error(`${c("The sitemap is empty. So, we could not add any URLs to the scanner.")} ${t}`);return r}(0,n.handleCorruptRestApi)({}),document.addEventListener(`${o.JOB_DELAY_EVENT_PREFIX}${r}`,(e=>{let{detail:{isIdle:t,settings:n}}=e;/page=real-cookie-banner(?:-pro)?-component#\/scanner/.test(window.location.href)||t?s>0&&s<n.delay_ms&&(n.delay_ms=s/2):n.delay_ms=3e3})),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}${r}`,(e=>{let{detail:{job:{id:t,data:{url:r,isLoopback:i,allowFailure:c},process_total:l,group_position:u,group_total:d,group_uuid:p},resolve:m,reject:f,saveJobResult:y}}=e;const h=async e=>{const r=new URL(e),{searchParams:s}=r;"1"===s.get("rcb-scan")&&s.get("rcb-scan-job")===`${t}`||(0,n.applyQueryString)(r,[{"rcb-scan":`-${window.btoa(JSON.stringify((0,o.getConfigurableStatusParameters)()))}-`,"rcb-scan-job":t}],!0);const w=`<a href="${e}" target="_blank">${e}</a>`;try{let e,n,s,g="",v=!1,_=()=>Promise.resolve(""),$=!1,x="";if(i){const i=await(0,o.request)({location:a,params:{url:r.toString(),jobId:t}});({status:e,statusText:g,ok:n,redirected:$,responseUrl:x}=i),s=i.headers["content-type"]||void 0,_=()=>Promise.resolve(i.body)}else{var b;const t=await window.fetch(r.toString(),{mode:"no-cors"}),{type:o,headers:a}=t;({status:e,statusText:g,ok:n,redirected:$,url:x}=t),s=null==(b=a.get("content-type"))?void 0:b.toLowerCase(),v="opaque"===o,_=()=>t.text()}$?h(x):n||v?(await(0,o.fetchStatus)({from:"html",html:await _()}),!p||u!==d&&1!==u||(0,o.fetchStatus)(!0),v&&await y(t,l),s&&!s.startsWith("text/")&&await y(t,l),m()):[404,410].indexOf(e)>-1||c?(await y(t,l),m()):f({code:`invalid_response_${e}`,message:`${g} (${w})`})}catch(e){f({code:"unexpected",message:`${e.toString()} (${w})`})}},w=(new Date).getTime();(0,o.setCurrentlyFetchingStatus)(!0),h(r).finally((()=>{(0,o.setCurrentlyFetchingStatus)(!1),s=(new Date).getTime()-w}))})),function(){const e=document.getElementById("rcb-scan-result-notice"),t=document.querySelector("#wp-admin-bar-rcb-scanner-found-services > a > span:nth-child(2)");let n=!1;document.addEventListener(o.STATUS_ADDITIONAL_DATA_EVENT,(async t=>{let{detail:{settings:{additionalData:o}}}=t;e&&n&&o.push("rcb-scan-notice")})),document.addEventListener(o.STATUS_EVENT,(o=>{let{detail:{currentJobs:{[r]:a},remaining:{[r]:i},additionalData:{"rcb-scan-notice":s}}}=o,l=100;const d=(null==i?void 0:i.failure)>0;if(i&&(null==a?void 0:a.group_position)>0){const{remaining:e,total:t}=i;l=+((t-e)/t*100).toFixed(0)}const p=l>0&&l<100,m=document.getElementById("rcb-scanner-status"),f=document.getElementById("rcb-checklist-overdue");if(n=p,e&&s&&(e.innerHTML=s.text,t.innerHTML=t.innerHTML.replace(/\d+/,s.countAll.toString())),m){const e="none"!==m.style.display;if(m.innerHTML=`${l} %`,m.style.display=p?"inline-block":"none",f&&(f.style.display=p?"none":"inline-block"),e&&!p&&!d)try{const e=u()(['#real-cookie-banner-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)','#real-cookie-banner-pro-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)',"body:not(.toplevel_page_real-cookie-banner-component) #toplevel_page_real-cookie-banner-component","body:not(.toplevel_page_real-cookie-banner-pro-component) #toplevel_page_real-cookie-banner-pro-component"].join(",")),t=e.hasClass("nav-tab");e.pointer({content:`<h3>${c("Real Cookie Banner has scanned your website!")}</h3><p>${c('You may not have noticed, but we have been scanning your website in the background. View <a href="%s">scanner results</a> to obtain consent for used services from your website visitors!',`${t?"":e.find("a").attr("href")}#/scanner`)}</p>`,position:t?{edge:"top"}:{edge:"left",align:"bottom"},pointerClass:"wp-pointer arrow-"+(t?"top":"bottom"),pointerWidth:420});const n=e.pointer("widget");n.css({marginLeft:-10}),t&&n.find(".wp-pointer-arrow").css({marginLeft:-38}),e.pointer("open"),t&&e.add(n.find("a")).on("click",(()=>{e.pointer("destroy")}))}catch(e){}}}))}(),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}rcb-automatic-scan-starter`,(async e=>{let t,{detail:{job:{id:r,process_total:a},resolve:i,saveJobResult:s}}=e;const c=setInterval((()=>{t=document.getElementById("rcb-btn-scan-start"),t&&(t.style.display="none")}),1e3);try{const e=await v(),{restRoot:t,restNonce:r,restQuery:a}=window.realQueue,i={restRoot:t,restNamespace:"real-cookie-banner/v1",restNonce:r,restQuery:a};await(0,n.commonRequest)({location:d,options:i,request:{urls:e,purgeUnused:!0}}),await(0,o.refreshQueue)(),(0,o.fetchStatus)(!0)}catch(e){}finally{clearInterval(c),t&&t.style.removeProperty("display"),await s(r,a),i()}})),realCookieBanner_queue=t})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.7/f1d681e1f12f325ce880e27ce862fd3e/queue.lite.js.map
