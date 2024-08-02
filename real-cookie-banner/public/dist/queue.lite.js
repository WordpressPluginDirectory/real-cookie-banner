var realCookieBanner_queue;(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=devowlWp_utils,o=devowlWp_realQueue,r="rcb-scan";let a,i=0;const s=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(a||(a=(0,n.createLocalizationFactory)(n.BaseOptions.getPureSlug("real-cookie-banner")))).__(...t)},c=jQuery;var l=e.n(c);const u={path:"/scanner/queue",method:n.RouteHttpVerb.POST},d=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function p(e,t,n){var o;void 0===n&&(n="");const r=(null==(o=e.match(d))?void 0:o[1])||"/",a=t.match(d);if(a){const[,t,o]=a,i=o?`?${o}${n?`?${n}`:""}`:n?`?${n}`:"";return`${e}${t.substr(r.length)}${i}`}return!1}const m="robots.txt";async function f(e,t){try{const n=t?`${t}=1`:"",o=await fetch(`${e}${m}${n?`?${n}`:""}`);if(!o.ok)return!1;const r=p(e,(await o.text()).match(/^sitemap:(.*)$/im)[1].trim(),n);if(r){const e=await fetch(r);if(!e.ok)return!1;const t=await e.text();return!!/<(?:sitemap|urlset)/gm.test(t)&&r}return!1}catch(e){return!1}}const y=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","index.php?xml_sitemap=params=","glossar/sitemap.xml"];async function h(e,t){void 0===t&&(t=y);const n=t.map((t=>fetch(`${e}${t}`,{mode:"no-cors"})));for(const e of n)try{const t=await e,n=await t.text();if(n.indexOf("<sitemapindex")>-1||n.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}const w="https://base";async function b(e,t,n){if(n)try{const o=await async function(e){const t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n.trim(),"application/xml")}(t),{protocol:r}=new URL(t,w),a=o.querySelector("sitemapindex");if(a){const t=Array.from(a.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean);for(const o of t){const t=p(e,o)||o;await b(e,t,n)}}const i=o.querySelector("urlset");if(i){const e=Array.from(i.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean).map((e=>{try{const t=new URL(e,w);return"http:"===t.protocol&&(t.protocol=r),t.toString()}catch(t){return e}}));n.push(...e)}}catch(e){console.error(`Error occurred during "crawl('${t}')":\n\r Error: ${e}`)}else try{return(await b(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return n}async function g(e){const t=s('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',s("https://devowl.io/support/"));let n=window.realCookieBannerQueue.originalHomeUrl;[n]=n.split("?",2),null==e||e("find-sitemap");const o=await function(e,t,n){return new Promise(((o,r)=>{const a=e=>setTimeout((()=>o(e)),100);(async()=>{try{const o=await f(e);if(o)return void a(o);const r=await h(e);if(r)return void a(r);if(t){const n=await f(e,t);if(n)return void a(n)}if(n){const t=await h(e,n);if(t)return void a(t)}a(!1)}catch(e){r(e)}})()}))}(n,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===o)throw new Error(`${s("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")} ${t}`);null==e||e("collect-sitemap");let r=[];try{r=await b(n,o)}catch(e){throw new Error(`${s("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")} ${t}`)}if(0===r.length)throw new Error(`${s("The sitemap is empty. So, we could not add any URLs to the scanner.")} ${t}`);return r}(0,n.handleCorruptRestApi)({}),document.addEventListener(`${o.JOB_DELAY_EVENT_PREFIX}${r}`,(e=>{let{detail:{isIdle:t,settings:n}}=e;/page=real-cookie-banner(?:-pro)?-component#\/scanner/.test(window.location.href)||t?i>0&&i<n.delay_ms&&(n.delay_ms=i/2):n.delay_ms=3e3})),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}${r}`,(e=>{let{detail:{job:{id:t,data:{url:r},process_total:a,group_position:s,group_total:c,group_uuid:l},resolve:u,reject:d,saveJobResult:p}}=e;const m=async e=>{const r=new URL(e),{searchParams:i}=r;"1"===i.get("rcb-scan")&&i.get("rcb-scan-job")===`${t}`||(0,n.applyQueryString)(r,[{"rcb-scan":`-${window.btoa(JSON.stringify((0,o.getConfigurableStatusParameters)()))}-`,"rcb-scan-job":t}],!0);const f=`<a href="${e}" target="_blank">${e}</a>`;try{const e=await window.fetch(r.toString(),{mode:"no-cors"}),{ok:n,status:i,statusText:h,type:w,headers:b,redirected:g,url:v}=e,_="opaque"===w;if(g)m(v);else if(n||_){var y;await(0,o.fetchStatus)({from:"html",html:await e.text()}),!l||s!==c&&1!==s||(0,o.fetchStatus)(!0),_&&await p(t,a);const n=null==(y=b.get("content-type"))?void 0:y.toLowerCase();n&&!n.startsWith("text/")&&await p(t,a),u()}else[404,410].indexOf(i)>-1?(await p(t,a),u()):d({code:`invalid_response_${i}`,message:`${h} (${f})`})}catch(e){d({code:"unexpected",message:`${e.toString()} (${f})`})}},f=(new Date).getTime();(0,o.setCurrentlyFetchingStatus)(!0),m(r).finally((()=>{(0,o.setCurrentlyFetchingStatus)(!1),i=(new Date).getTime()-f}))})),function(){const e=document.getElementById("rcb-scan-result-notice"),t=document.querySelector("#wp-admin-bar-rcb-scanner-found-services > a > span:nth-child(2)");let n=!1;document.addEventListener(o.STATUS_ADDITIONAL_DATA_EVENT,(async t=>{let{detail:{settings:{additionalData:o}}}=t;e&&n&&o.push("rcb-scan-notice")})),document.addEventListener(o.STATUS_EVENT,(o=>{let{detail:{currentJobs:{[r]:a},remaining:{[r]:i},additionalData:{"rcb-scan-notice":c}}}=o,u=100;const d=(null==i?void 0:i.failure)>0;if(i&&(null==a?void 0:a.group_position)>0){const{remaining:e,total:t}=i;u=+((t-e)/t*100).toFixed(0)}const p=u>0&&u<100,m=document.getElementById("rcb-scanner-status"),f=document.getElementById("rcb-checklist-overdue");if(n=p,e&&c&&(e.innerHTML=c.text,t.innerHTML=t.innerHTML.replace(/\d+/,c.countAll.toString())),m){const e="none"!==m.style.display;if(m.innerHTML=`${u} %`,m.style.display=p?"inline-block":"none",f&&(f.style.display=p?"none":"inline-block"),e&&!p&&!d)try{const e=l()(['#real-cookie-banner-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)','#real-cookie-banner-pro-component .nav-tab[href="#/scanner"]:not(.nav-tab-active)',"body:not(.toplevel_page_real-cookie-banner-component) #toplevel_page_real-cookie-banner-component","body:not(.toplevel_page_real-cookie-banner-pro-component) #toplevel_page_real-cookie-banner-pro-component"].join(",")),t=e.hasClass("nav-tab");e.pointer({content:`<h3>${s("Real Cookie Banner has scanned your website!")}</h3><p>${s('You may not have noticed, but we have been scanning your website in the background. View <a href="%s">scanner results</a> to obtain consent for used services from your website visitors!',`${t?"":e.find("a").attr("href")}#/scanner`)}</p>`,position:t?{edge:"top"}:{edge:"left",align:"bottom"},pointerClass:"wp-pointer arrow-"+(t?"top":"bottom"),pointerWidth:420});const n=e.pointer("widget");n.css({marginLeft:-10}),t&&n.find(".wp-pointer-arrow").css({marginLeft:-38}),e.pointer("open"),t&&e.add(n.find("a")).on("click",(()=>{e.pointer("destroy")}))}catch(e){}}}))}(),document.addEventListener(`${o.CLIENT_JOB_EVENT_PREFIX}rcb-automatic-scan-starter`,(async e=>{let t,{detail:{job:{id:r,process_total:a},resolve:i,saveJobResult:s}}=e;const c=setInterval((()=>{t=document.getElementById("rcb-btn-scan-start"),t&&(t.style.display="none")}),1e3);try{const e=await g(),{restRoot:t,restNonce:r,restQuery:a}=window.realQueue,i={restRoot:t,restNamespace:"real-cookie-banner/v1",restNonce:r,restQuery:a};await(0,n.commonRequest)({location:u,options:i,request:{urls:e,purgeUnused:!0}}),await(0,o.refreshQueue)(),(0,o.fetchStatus)(!0)}catch(e){}finally{clearInterval(c),t&&t.style.removeProperty("display"),await s(r,a),i()}})),realCookieBanner_queue=t})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.13/89e573c0c29f73f38de180b7426a4ced/queue.lite.js.map
