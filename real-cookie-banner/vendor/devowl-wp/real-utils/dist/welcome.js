(()=>{"use strict";var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=jQuery;var r=t.n(e);const n=devowlWp_utils;let s;function a(){return s||(s=(0,n.createRequestFactory)(window[n.BaseOptions.getPureSlug("real-utils",!0)]))}const o={path:"/newsletter/subscribe",method:n.RouteHttpVerb.POST};let i;function u(){return i||(i=(0,n.createLocalizationFactory)("devowl-wp-real-utils"))}const l=function(){return u().__(...arguments)};r()(document).on("click",".about-wrap .real-utils-newsletter-box .button-hero",(async function(t){t.preventDefault();const e=r()(this).parents(".real-utils-newsletter-box"),n=r()(this).parents(".wrap").data("slug"),s=`${r()("input[name='newsletter-email']").val()}`,i=e.find("input[type='checkbox']").is(":checked"),u=e.find(".error-msg").hide();r()(this).html(l("Loading...")).addClass("button-primary");try{await async function(t){await function(){return a().request(...arguments)}({location:o,request:t})}({slug:n,email:s,privacy:i}),r()(this).html(l("Successfully subscribed!")).removeClass("button-primary")}catch(t){r()(this).html(l("Subscribe")),u.html(t.responseJSON.message).show()}}))})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.2/ff4a9087b43c7472a81dcca71057df51/welcome.js.map
