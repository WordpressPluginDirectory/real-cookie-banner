(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=jQuery;var i=e.n(t);const n=devowlWp_utils,o=()=>window[n.BaseOptions.getPureSlug("real-utils",!0)].others;let a,s;const l=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s||(s=(0,n.createLocalizationFactory)("devowl-wp-real-utils"))).__(...t)},r={path:"/feedback/:slug",method:n.RouteHttpVerb.POST};class c{constructor(e,t,i){this.slug=e,this.$handler=i,this.href=t,this.init()}async close(e,t){if(void 0===t&&(t=!1),e.preventDefault(),this.$handler.pointer("widget").find("input, .button").attr("disabled","disabled"),t)window.open(this.href,"_self");else{const{choice:t,note:i,email:o}=this.getValidInput();try{"none"!==t&&await function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(a||(a=(0,n.createRequestFactory)(window[n.BaseOptions.getPureSlug("real-utils",!0)]))).request(...t)}({location:r,request:{reason:t,note:i,email:o},params:{slug:this.slug}})}catch(e){}finally{window.open(this.href,"_self")}}}buttons(){const e=i()(`<a class="button" href="#">${l("Contact support")}</a>`).click((()=>{window.open("https://devowl.io/support/","_blank")})),t=i()(`<a class="button" href="#">${l("Skip & Deactivate")}</a>`).click((e=>{this.close(e,!0)})),n=i()(`<a class="hidden button button-primary" href="#">${l("Deactivate")}</a>`).click((e=>{this.validate()&&this.close(e,!1)}));return i()('<div class="real-utils-pointer-buttons" />').append(n,t,e)}validate(){return this.validateNote()&&this.validatePrivacy()&&this.validateEmail()}validateNote(){const e=i()(`[name="${this.slug}-skip-note"]`).is(":checked"),t=i()(`.notice-${this.slug}-note`),{choice:n,note:o}=this.getValidInput();return e||o||-1!==["upgrade-to-pro","temp","none"].indexOf(n)?(t.hide(),!0):(t.show(),!1)}validatePrivacy(){const e=i()(`[name="${this.slug}-privacy"]`).is(":checked"),t=i()(`.notice-${this.slug}-privacy`),{email:n}=this.getValidInput();return n&&!e?(t.show(),!1):(t.hide(),!0)}validateEmail(){const e=i()(`.notice-${this.slug}-email`),{email:t}=this.getValidInput();return t&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase())?(e.show(),!1):(e.hide(),!0)}getValidInput(){const e=i()(`[name="${this.slug}-deactivate-choice"]:checked`).val(),t=i()(`[name="${this.slug}-note"]`).val(),n=t?i()(`[name="${this.slug}-email"]`).val():"";return!e&&t?{choice:"other",note:t,email:n}:e?{choice:e,note:t,email:n}:void 0}init(){const e=l("Too bad you are leaving"),t=o().names[this.slug],n=l("Please give us feedback why you deactivate <strong>%s</strong>.",t),a={"upgrade-to-pro":l("Upgrade to PRO Version"),"not-working":l("Plugin did not work"),"missing-features":l("Not the features I want"),incompatible:l("Incompatible with other themes or plugins"),"missing-doc":l("Lack of documentation"),"found-better-plugin":l("Found a better plugin"),temp:l("Temporary deactivation"),none:l("I do not want to give feedback"),other:l("Other")},s=this.$handler.pointer({pointerClass:"wp-pointer real-utils-feedback-pointer",content:`<h3>${e}</h3><p>${n}</p>\n<fieldset>\n    ${Object.keys(a).map((e=>`<label class="col-2"><input type="radio" name="${this.slug}-deactivate-choice" value="${e}" /> ${a[e]}</label>`)).join("")}\n        <div class="clear"></div>\n        <br />\n    <label class="${this.slug}-section-note">\n        <strong>${l("What could we do better?")}</strong>\n        <input type="text" class="regular-text" name="${this.slug}-note" />\n        <div class="notice notice-${this.slug}-note notice-error notice-alt hidden"><p>${l("Please enter a text here or check the box below.")}</p></div>\n    </label>\n    <label class="${this.slug}-section-note">\n        <input type="checkbox" name="${this.slug}-skip-note" /> ${l("I don't want to add a comment and hence not help to make %s better.",t)}\n    </label>\n    <label class="${this.slug}-section-email" style="display:none">\n        <br /><strong>${l("Email for answer/solution (optional)?")}</strong>\n        <input type="text" class="regular-text" name="${this.slug}-email" />\n        <div class="notice notice-${this.slug}-email notice-error notice-alt hidden"><p>${l("Please provide a valid email.")}</p></div>\n    </label>\n    <label class="${this.slug}-section-email" style="display:none">\n        <input type="checkbox" name="${this.slug}-privacy" /> ${l('I would like to receive an answer for my issue. For this purpose I agree to the data processing of my feedback and my email address. I have read the devowl.io <a href="https://devowl.io/privacy-policy/" target="_blank">privacy policy</a> and agree to it.',t)}\n        <div class="notice notice-${this.slug}-privacy notice-error notice-alt hidden"><p>${l("If you would like to be contacted by us, please accept the privacy policy. If you prefer not to be contacted, leave the email field blank.")}</p></div>\n    </label>\n</fieldset>`,buttons:this.buttons.bind(this)}).pointer("open").pointer("widget");s.find("input").on("input",(()=>{const e=this.getValidInput(),t="none"===(null==e?void 0:e.choice);s.find(".button:eq(0)").css("display",e?"inline-block":"none"),s.find(".button:eq(1)").css("display",e?"none":"inline-block"),s.find(".button:eq(1)").css("display",e?"none":"inline-block"),i()(`[name="${this.slug}-skip-note"]`).parent().css("display",(null==e?void 0:e.note)?"none":"block"),i()(`.${this.slug}-section-email`).css("display",(null==e?void 0:e.note)&&!t?"block":"none"),i()(`.${this.slug}-section-note`).css("display",t?"none":"block")}))}}i()(document).on("click","tr.active .row-actions .deactivate a",(function(e){const[t]=i()(this).parents("tr.active").data("plugin").split("/");if(o().names[t]){const n=i()(this).attr("href");return new c(t,n,i()(this)),e.preventDefault(),!1}return!0}))})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.13/0a7a496a2effb72226d52a8d48164c0d/feedback.js.map
