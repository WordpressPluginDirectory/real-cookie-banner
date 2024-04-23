(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=jQuery;var i=e.n(t);const n=devowlWp_utils,o=()=>window[n.BaseOptions.getPureSlug("real-utils",!0)].others;let s,a;function l(){return s||(s=(0,n.createRequestFactory)(window[n.BaseOptions.getPureSlug("real-utils",!0)]))}function c(){return a||(a=(0,n.createLocalizationFactory)("devowl-wp-real-utils"))}const r=function(){return c().__(...arguments)},d={path:"/feedback/:slug",method:n.RouteHttpVerb.POST};class u{constructor(e,t,i){this.slug=void 0,this.href=void 0,this.$handler=void 0,this.slug=e,this.$handler=i,this.href=t,this.init()}async close(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.preventDefault(),this.$handler.pointer("widget").find("input, .button").attr("disabled","disabled"),t)window.open(this.href,"_self");else{const{choice:t,note:i,email:n}=this.getValidInput();try{"none"!==t&&await function(){return l().request(...arguments)}({location:d,request:{reason:t,note:i,email:n},params:{slug:this.slug}})}catch(e){}finally{window.open(this.href,"_self")}}}buttons(){const e=i()(`<a class="button" href="#">${r("Contact support")}</a>`).click((()=>{window.open("https://devowl.io/support/","_blank")})),t=i()(`<a class="button" href="#">${r("Skip & Deactivate")}</a>`).click((e=>{this.close(e,!0)})),n=i()(`<a class="hidden button button-primary" href="#">${r("Deactivate")}</a>`).click((e=>{this.validate()&&this.close(e,!1)}));return i()('<div class="real-utils-pointer-buttons" />').append(n,t,e)}validate(){return this.validateNote()&&this.validatePrivacy()&&this.validateEmail()}validateNote(){const e=i()(`[name="${this.slug}-skip-note"]`).is(":checked"),t=i()(`.notice-${this.slug}-note`),{choice:n,note:o}=this.getValidInput();return e||o||-1!==["upgrade-to-pro","temp","none"].indexOf(n)?(t.hide(),!0):(t.show(),!1)}validatePrivacy(){const e=i()(`[name="${this.slug}-privacy"]`).is(":checked"),t=i()(`.notice-${this.slug}-privacy`),{email:n}=this.getValidInput();return n&&!e?(t.show(),!1):(t.hide(),!0)}validateEmail(){const e=i()(`.notice-${this.slug}-email`),{email:t}=this.getValidInput();return t&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase())?(e.show(),!1):(e.hide(),!0)}getValidInput(){const e=i()(`[name="${this.slug}-deactivate-choice"]:checked`).val(),t=i()(`[name="${this.slug}-note"]`).val(),n=t?i()(`[name="${this.slug}-email"]`).val():"";return!e&&t?{choice:"other",note:t,email:n}:e?{choice:e,note:t,email:n}:void 0}init(){const e=r("Too bad you are leaving"),t=o().names[this.slug],n=r("Please give us feedback why you deactivate <strong>%s</strong>.",t),s={"upgrade-to-pro":r("Upgrade to PRO Version"),"not-working":r("Plugin did not work"),"missing-features":r("Not the features I want"),incompatible:r("Incompatible with other themes or plugins"),"missing-doc":r("Lack of documentation"),"found-better-plugin":r("Found a better plugin"),temp:r("Temporary deactivation"),none:r("I do not want to give feedback"),other:r("Other")},a=this.$handler.pointer({pointerClass:"wp-pointer real-utils-feedback-pointer",content:`<h3>${e}</h3><p>${n}</p>\n<fieldset>\n    ${Object.keys(s).map((e=>`<label class="col-2"><input type="radio" name="${this.slug}-deactivate-choice" value="${e}" /> ${s[e]}</label>`)).join("")}\n        <div class="clear"></div>\n        <br />\n    <label class="${this.slug}-section-note">\n        <strong>${r("What could we do better?")}</strong>\n        <input type="text" class="regular-text" name="${this.slug}-note" />\n        <div class="notice notice-${this.slug}-note notice-error notice-alt hidden"><p>${r("Please enter a text here or check the box below.")}</p></div>\n    </label>\n    <label class="${this.slug}-section-note">\n        <input type="checkbox" name="${this.slug}-skip-note" /> ${r("I don't want to add a comment and hence not help to make %s better.",t)}\n    </label>\n    <label class="${this.slug}-section-email" style="display:none">\n        <br /><strong>${r("Email for answer/solution (optional)?")}</strong>\n        <input type="text" class="regular-text" name="${this.slug}-email" />\n        <div class="notice notice-${this.slug}-email notice-error notice-alt hidden"><p>${r("Please provide a valid email.")}</p></div>\n    </label>\n    <label class="${this.slug}-section-email" style="display:none">\n        <input type="checkbox" name="${this.slug}-privacy" /> ${r('I would like to receive an answer for my issue. For this purpose I agree to the data processing of my feedback and my email address. I have read the devowl.io <a href="https://devowl.io/privacy-policy/" target="_blank">privacy policy</a> and agree to it.',t)}\n        <div class="notice notice-${this.slug}-privacy notice-error notice-alt hidden"><p>${r("If you would like to be contacted by us, please accept the privacy policy. If you prefer not to be contacted, leave the email field blank.")}</p></div>\n    </label>\n</fieldset>`,buttons:this.buttons.bind(this)}).pointer("open").pointer("widget");a.find("input").on("input",(()=>{const e=this.getValidInput(),t="none"===(null==e?void 0:e.choice);a.find(".button:eq(0)").css("display",e?"inline-block":"none"),a.find(".button:eq(1)").css("display",e?"none":"inline-block"),a.find(".button:eq(1)").css("display",e?"none":"inline-block"),i()(`[name="${this.slug}-skip-note"]`).parent().css("display",null!=e&&e.note?"none":"block"),i()(`.${this.slug}-section-email`).css("display",null!=e&&e.note&&!t?"block":"none"),i()(`.${this.slug}-section-note`).css("display",t?"none":"block")}))}}i()(document).on("click","tr.active .row-actions .deactivate a",(function(e){const[t]=i()(this).parents("tr.active").data("plugin").split("/");if(o().names[t]){const n=i()(this).attr("href");return new u(t,n,i()(this)),e.preventDefault(),!1}return!0}))})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.6/e6121b72836bd42e2eda3cfa4003b8b0/feedback.js.map
