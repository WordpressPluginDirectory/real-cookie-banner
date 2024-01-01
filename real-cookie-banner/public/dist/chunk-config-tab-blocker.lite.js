"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[478],{23483:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(71414),l=a(60204);function r(){const{__:e}=(0,l.Q)();return(0,n.T)({title:e("Want a better integrated visual content blocker for your website?"),testDrive:!0,feature:"visual-content-blocker",assetName:e("pro-modal/visual-content-blocker.webp"),description:e("Instead of a lot of text, you can offer your visitor a more pleasant way to view blocked content. For example, you can replace your video embeds with a privacy-compliant dummy player with thumbnail, or an embedded map with a preview map.")})}},94802:(e,t,a)=>{a.r(t),a.d(t,{BlockerEditForm:()=>Ee});var n=a(70045),l=a(74943),r=a(46270),o=a(98320),c=a(15602),i=a(98656),s=a(87363),u=a(68038),d=a(48036),m=a(91070),p=a(40045),v=a(49048),h=a(66711),f=a(93404),R=a(61278),y=a(39446),E=a(13426);const b=(0,u.Pi)((e=>{let{nonExistingServices:t,onCreated:a}=e;const[n,l]=(0,s.useState)(),r=(0,v.m)().cookieStore.groups.sortedGroups.map((e=>{let{data:{id:t,name:a}}=e;return{id:t,name:a}})),[o,i]=(0,s.useState)([]),u=(t||[]).filter((e=>{let{identifier:t}=e;return-1===o.indexOf(t)})),d=null==t?void 0:t.map((e=>{const{identifier:t,version:s}=e;return React.createElement(c.Z,{key:t,open:n===t,title:(0,p.__)("Add service"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>l(void 0)},React.createElement(y.CookieEditForm,{overwriteAttributes:(0,E.H)(e,{groups:r}),navigateAfterCreation:!1,scrollToTop:!1,template:{identifier:t,version:s},onCreated:e=>{l(void 0),i([...o,n]),a(e)}}))}));return React.createElement(React.Fragment,null,d,0===u.length?null:React.createElement("div",{className:"notice notice-warning below-h2 notice-alt"},React.createElement("p",null,(0,p.__)("Some services from the template could not be found. Please select (or create if not already exist) the following services:",u.join(", "))),React.createElement("ul",{style:{margin:"0 0 10px"}},u.map((e=>{let{identifier:t,name:a,subHeadline:n}=e;return React.createElement("li",{key:t},React.createElement("strong",null,a,n?` (${n})`:"")," • ",React.createElement("a",{onClick:e=>{l(t),e.preventDefault()},style:{cursor:"pointer"}},(0,p.__)("Create now")))})))))}));var g=a(30702);const k=(0,u.Pi)((e=>{let{nonExistingTcfVendors:t,onCreated:a}=e;const[l,r]=(0,s.useState)(),{tcfStore:o}=(0,v.m)(),{vendorListVersion:i,vendors:u}=o,[d,m]=(0,s.useState)([]),h=(t||[]).filter((e=>{let{vendorId:t}=e;return-1===d.indexOf(t)}));if((0,s.useEffect)((()=>{t.length>0&&!i&&o.fetchVendors()}),[t,i]),!i&&t.length>0)return React.createElement(n.Z,{spinning:!0});const f=null==t?void 0:t.map((e=>{let{vendorId:t}=e;return React.createElement(c.Z,{key:t,open:l===t,title:(0,p.__)("Add TCF vendor configuration"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>r(void 0)},React.createElement(g.TcfVendorConfigurationForm,{navigateAfterCreation:!1,scrollToTop:!1,vendor:u.get(`${t}`),onCreated:e=>{r(void 0),m([...d,l]),a(e)}}))}));return React.createElement(React.Fragment,null,f,0===h.length?null:React.createElement("div",{className:"notice notice-warning below-h2 notice-alt"},React.createElement("p",null,(0,p.__)("Some TCF vendors from the template could not be found. Please select (or create if not already exist) the following TCF vendors:",h.join(", "))),React.createElement("ul",{style:{margin:"0 0 10px"}},h.map((e=>{let{vendorId:t,createAdNetwork:a}=e;return React.createElement("li",{key:t},React.createElement("strong",null,u.get(`${t}`).data.name)," • ",React.createElement("a",{onClick:e=>{a?window.location.href=`#/cookies/tcf-vendors/new?adNetwork=${encodeURIComponent(a)}`:r(t),e.preventDefault()},style:{cursor:"pointer"}},(0,p.__)("Create now")))})))))}));var w=a(45567),C=a(8700),Z=a(15998),T=a(7818),S=a(84785);let V=!1;const _=e=>{let{attachmentId:t,title:a,allowedTypes:l,render:r,onChange:o}=e;const c=t||void 0,{data:i,error:u,fetching:d}=function(e){const[t,a]=(0,s.useState)(!1),[n,l]=(0,s.useState)(),[r,o]=(0,s.useState)(),c=(0,s.useCallback)((async e=>{a(!0);const{currentLanguage:t}=(0,T.u)();try{const n=await(0,S.W)({location:{path:"/media/:id",method:C.RouteHttpVerb.GET,namespace:"wp/v2"},params:{id:e,_dataLocale:t}});l(n),o(void 0)}catch(e){l(void 0),o(e)}finally{a(!1)}}),[]);return(0,s.useEffect)((()=>{e?c(e):(l(void 0),o(void 0))}),[e]),{fetching:t,data:n,fetch:c,error:r}}(c),m=null==i?void 0:i.source_url;(0,s.useEffect)((()=>{var e;"rest_post_invalid_id"===(null==u||null===(e=u.responseJSON)||void 0===e?void 0:e.code)&&o(void 0,void 0)}),[u]);const p=function(){const{addFilter:e}=Z.hooks,{MediaUpload:t}=Z.mediaUtils;return V||(V=!0,e("editor.MediaUpload","core/edit-post/components/media-upload/replace-media-upload",(()=>t))),t}();return React.createElement(n.Z,{spinning:d},React.createElement(p,{onSelect:e=>{null==o||o(null==e?void 0:e.id,e)},title:a,allowedTypes:l,value:c,render:e=>{let{open:t}=e;return r({open:t,reset:()=>o(void 0,void 0),attachmentId:c,url:m})}}))};var x=a(33639),P=a(50034);const I={labelCol:{span:6},wrapperCol:{span:16}};var F=a(28365),A=a(60204),N=a(34219);const D=()=>{const{__:e}=(0,A.Q)(),[t,a]=(0,s.useState)();return React.createElement(l.Z.Item,{label:e("Name"),required:!0},React.createElement(l.Z.Item,{name:"name",noStyle:!0,rules:[{required:!0,message:e("Please provide a name!")}]},React.createElement(F.Z,null)),React.createElement("p",{className:"description",ref:a},React.createElement(N.sN,{form:"blocker",valueName:"name",widthOfRef:t,renderDiff:e=>React.createElement(F.Z,{value:e,readOnly:!0})}),e('Each content blocker should have a descriptive name that is understandable to a non-professional user, e.g. "Google Maps".')))};var B=a(11970);const U=()=>{const{__:e}=(0,A.Q)();return React.createElement(l.Z.Item,{label:e("Status"),required:!0},React.createElement(l.Z.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose an option!")}]},React.createElement(B.ZP.Group,null,React.createElement(B.ZP.Button,{value:"publish"},e("Enabled")),React.createElement(B.ZP.Button,{value:"private"},e("Disabled")),React.createElement(B.ZP.Button,{value:"draft"},e("Draft")))),React.createElement("p",{className:"description"},e('Content Blockers with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft will be highlighted in the content blocker table so that you do not forget to configure it.')))},M=()=>{const{__:e}=(0,A.Q)();return React.createElement(l.Z.Item,{label:e("Description")},React.createElement(l.Z.Item,{name:"description",noStyle:!0},React.createElement(F.Z.TextArea,{autoSize:{minRows:3}})),React.createElement("p",{className:"description"},e("You can give your visitors further explanations why a content has been blocked or, for example, how they can contact you alternatively instead of agreeing to load the contact form. The description is displayed only in visual content blockers.")))};var q=a(36435),O=a(63736);const $=()=>{const{__:e}=(0,A.Q)();return React.createElement(React.Fragment,null,React.createElement(q.C,{offset:I.labelCol.span},e("General content blocker configuration")," ",React.createElement(O.r,{url:e("https://devowl.io/knowledge-base/real-cookie-banner-create-individual-content-blocker/")})),React.createElement(D,null),React.createElement(U,null),React.createElement(M,null))};var L=a(68384);const Q=()=>{const{__:e,_i:t}=(0,A.Q)(),{openDialog:a}=(0,L.u)(),[n,r]=(0,s.useState)();return React.createElement(l.Z.Item,{label:e("URLs / Elements to block"),required:!0},React.createElement(l.Z.Item,{name:"rules",noStyle:!0,rules:[{required:!0,message:e("Please provide at least one URL/element!")}]},React.createElement(F.Z.TextArea,{autoSize:{minRows:3,maxRows:15}})),React.createElement("p",{className:"description",ref:r},React.createElement(N.sN,{form:"blocker",valueName:"rules",widthOfRef:n,difference:(e,t)=>{const a=e.split("\n"),n=t.split("\n").filter((e=>!a.includes(e)));return n.length>0?n:void 0},apply:(e,t,a)=>t({rules:a.split("\n").concat(e).join("\n")}),newValueText:e("Missing entries:"),renderDiff:(e,t)=>React.createElement(F.Z.TextArea,{value:t.join("\n"),readOnly:!0,autoSize:{minRows:3,maxRows:15}})}),t(e("Enter one rule per line to replace content with a content blocker. You can block all available URLs or HTML tags on your website including videos, iframes, scripts, inline scripts and stylesheets. Please use an asterisk ({{code}}*{{/code}}) as a wildcard (placeholder)."),{code:React.createElement("code",null)})," • ",!!a&&React.createElement("button",{type:"button",className:"button-link",onClick:a},e("Can't handle it? Let a Cookie Expert help you!")),React.createElement("br",null),React.createElement("br",null),t(e('{{strong}}Pro tip:{{/strong}} Look up all available syntaxes like {{code}}div[class*="my-embed"]{{/code}} in our knowledge base to block content perfectly.'),{strong:React.createElement("strong",null),code:React.createElement("code",null)})," ",React.createElement(O.r,{url:e("https://devowl.io/knowledge-base/real-cookie-banner-create-individual-content-blocker/")})))},z=()=>{const{__:e}=(0,A.Q)(),{isTcf:t}=(0,P.f)();return React.createElement(l.Z.Item,{label:e("Block by"),required:!0,style:{display:t?void 0:"none"}},React.createElement(l.Z.Item,{name:"criteria",noStyle:!0,rules:[{required:!0,message:e("Please choose an option!")}]},React.createElement(B.ZP.Group,null,React.createElement(B.ZP.Button,{value:"services"},e("Services")),React.createElement(B.ZP.Button,{value:"tcfVendors"},e("TCF Vendors")))),React.createElement("p",{className:"description"},e("You can block content through non-standard services or TCF vendors. If you want to block it through TCF vendors, then the visual content blocker cannot be displayed because TCF is usually used to obtain consent for ad networks. Moreover, after the initial consents in the cookie banner, users will probably never consent to the ad.")))},G=e=>{let{dropdown:t,children:a}=e;const{__:n,_i:r}=(0,A.Q)();return React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria},(e=>{let{getFieldValue:o}=e;return"services"===o("criteria")&&React.createElement(l.Z.Item,{label:n("Connected services"),required:!0},React.createElement(l.Z.Item,{name:"services",noStyle:!0,rules:[{type:"array",required:!0,message:n("Please provide at least one service!")}]},t),React.createElement("p",{className:"description"},r(n("A content blocker is displayed until the user has agreed to {{strong}}all{{/strong}} necessary services that would be used by loading the content. You must define all services that are loaded as soon as the user wants to see the blocked content."),{strong:React.createElement("strong",null)})),a)}))};var j=a(77419),H=a(86459),W=a(38704);const Y=e=>{let{dropdownVendors:t,children:a}=e;const{__:n,_i:r}=(0,A.Q)(),{tcfPurposes:o=[]}=(0,P.f)();return React.createElement(React.Fragment,null,React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria},(e=>{let{getFieldValue:c}=e;return"tcfVendors"===c("criteria")&&React.createElement(React.Fragment,null,React.createElement(l.Z.Item,{label:n("Connected TCF Vendors"),required:!0},React.createElement(l.Z.Item,{name:"tcfVendors",noStyle:!0,rules:[{type:"array",required:!0,message:n("Please provide at least one vendor!")}]},t),React.createElement("p",{className:"description"},r(n("A content blocker is displayed until the user has agreed to {{strong}}all{{/strong}} necessary TCF vendors and purposes that would be used by loading the content. You must define all TCF vendors and purposes that are loaded based on legitimate interest or consent as soon as the user wants to see the blocked content."),{strong:React.createElement("strong",null)})),a),React.createElement(l.Z.Item,{label:n("Required TCF purposes"),required:!0,rules:[{type:"array",required:!0,message:n("Please provide at least one purpose!")}]},React.createElement(l.Z.Item,{noStyle:!0,name:"tcfPurposes",rules:[{type:"array",required:!0,message:n("Please provide at least one purpose!")}]},React.createElement(W.Z.Group,{style:{marginTop:6}},React.createElement(j.Z,null,o.map((e=>{let{name:t,id:a}=e;return React.createElement(H.Z,{key:`purpose-${a}`,span:12},React.createElement(W.Z,{value:a},t))}))))),React.createElement("p",{className:"description",style:{marginTop:10}},n('Defined which purposes of all connected TCF vendors must be allowed (by consent or legitimate interest) for the content blocker to unblock the content. At a minimum, "Store and/or access information on a device" should be given if cookies or similar information are read/written. In terms of data economy according to the GDPR, you should specify further purposes if, for example, only personalized advertising is displayed and therefore unblocking without consent/legitimate interest to this purpose has no practical use.'))))})))},J=e=>{let{servicesFieldProps:t,tcfVendorsFieldProps:a}=e;const{__:n}=(0,A.Q)();return React.createElement(React.Fragment,null,React.createElement(q.C,{offset:I.labelCol.span},n("Technical Definition")),React.createElement(Q,null),React.createElement(z,null),React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria},(e=>{let{getFieldValue:n}=e;switch(n("criteria")){case"services":return React.createElement(G,t);case"tcfVendors":return React.createElement(Y,a);default:return null}})))};var X=a(25654);const K=()=>{const{__:e}=(0,A.Q)();return React.createElement(l.Z.Item,{wrapperCol:{offset:I.labelCol.span}},React.createElement("span",null,React.createElement(l.Z.Item,{name:"isVisual",valuePropName:"checked",noStyle:!0},React.createElement(X.Z,null)),React.createElement("span",null,"  ",e("Show the visual content blocker, if possible"))))};var ee=a(89059),te=a(34139),ae=a(23483);const ne=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)(),{modal:a,tag:n}=(0,ae.M)(),r=(0,s.useMemo)((()=>({default:{title:e("Textbox"),description:e("Plain text with button")},wrapped:{title:e("Wrapped"),description:e("Image surrounding the content blocker")},hero:{title:e("Hero"),description:e("Image with content blocker on click")}})),[e]);return React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual},(o=>{let{getFieldValue:c}=o;return!!c("isVisual")&&React.createElement(l.Z.Item,{wrapperCol:{offset:I.labelCol.span},style:{paddingBottom:10}},React.createElement("span",null,React.createElement(l.Z.Item,{name:"visualType",noStyle:!0,rules:t?[]:[{required:!0,type:"enum",enum:["default"],message:e("This type of visual content blocker is available only in the PRO version of the plugin. Please choose a textbox content blocker!")}]},React.createElement(B.ZP.Group,{size:"large",buttonStyle:"solid",className:"rcb-antd-radio-button-card",style:{marginBottom:10}},Object.keys(r).map((e=>{const{description:t,title:l}=r[e];return React.createElement(B.ZP.Button,{value:e,key:e},React.createElement(ee.Z,{style:{width:300},bordered:!1,cover:React.createElement("img",{style:{height:168.75},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}.png`})},React.createElement(ee.Z.Meta,{title:React.createElement(React.Fragment,null,a,l," ","default"!==e&&n),description:t})))}))))))}))},le=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)(),{modal:a,tag:n}=(0,ae.M)(),r=(0,s.useMemo)((()=>({map:e("Map"),"audio-player":e("Audio player"),"video-player":e("Video player"),"feed-text":e("Feed (text)"),"feed-video":e("Feed (image/video)"),generic:e("None of these")})),[e]);return React.createElement(React.Fragment,null,a,React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisualDarkMode!==t.isVisualDarkMode||e.isVisual!==t.isVisual||e.visualType!==t.visualType},(a=>{let{getFieldValue:o}=a;const c=o("isVisual"),i=o("visualType");return!!c&&"default"!==i&&React.createElement(l.Z.Item,{label:e("Content type"),required:!0,extra:n},React.createElement(l.Z.Item,{name:"visualContentType",rules:[{required:!0,message:e("Please choose an option!")}]},React.createElement(B.ZP.Group,{size:"large",buttonStyle:"solid",className:"rcb-antd-radio-button-card"},Object.keys(r).map((e=>{const a=r[e];return React.createElement(B.ZP.Button,{value:e,key:e,style:{margin:"0 5px 5px 0"},disabled:!t},React.createElement(ee.Z,{style:{width:240},bordered:!1,size:"small",cover:React.createElement(React.Fragment,null,React.createElement("img",{style:{display:o("isVisualDarkMode")?"none":void 0},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}-light.png`}),React.createElement("img",{style:{display:o("isVisualDarkMode")?void 0:"none"},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}-dark.png`}))},React.createElement(ee.Z.Meta,{title:a})))})))))})))},re=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)();return t&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType},(t=>{let{getFieldValue:a}=t;const n=a("isVisual"),r=a("visualType");return!!n&&"default"!==r&&React.createElement(l.Z.Item,{wrapperCol:{offset:I.labelCol.span}},React.createElement("span",null,React.createElement(l.Z.Item,{name:"isVisualDarkMode",valuePropName:"checked",noStyle:!0},React.createElement(X.Z,null)),"  ",e("Enable dark mode"),React.createElement("p",{className:"description"},e("As soon as no image is found for the content blocker, a default image is automatically used. You can also specify whether the image should be displayed light or dark."))))}))};var oe=a(2132);const ce=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)();return t&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualDownloadThumbnail!==t.visualDownloadThumbnail||e.isVisual!==t.isVisual||e.visualType!==t.visualType},(t=>{let{getFieldValue:a,setFieldsValue:n}=t;const r=a("visualDownloadThumbnail"),o=a("isVisual"),c=a("visualType");return!!o&&"default"!==c&&React.createElement(React.Fragment,null,React.createElement(l.Z.Item,{label:e("Automatic preview image")},React.createElement(l.Z.Item,{noStyle:!0,name:"visualDownloadThumbnail",required:!0,rules:[{required:!0,type:"boolean",message:e("Please choose an option!")}]},React.createElement(B.ZP.Group,{style:{display:r?void 0:"none"}},React.createElement(B.ZP.Button,{value:!0},e("Download preview image and serve locally")),React.createElement(B.ZP.Button,{value:!1},e("Image from media library")))),!r&&React.createElement(B.ZP.Group,{value:r},React.createElement(oe.Z,{title:e("I confirm that I have the required rights to embedded content and its thumbnails can be copied to my servers without e.g. copyright infringement."),cancelText:e("Cancel"),okText:e("Activate now"),overlayStyle:{maxWidth:450},onCancel:()=>n({visualDownloadThumbnail:!1}),onConfirm:()=>n({visualDownloadThumbnail:!0}),placement:"bottomLeft"},React.createElement(B.ZP.Button,{value:!0},e("Download preview image and serve locally"))),React.createElement(B.ZP.Button,{value:!1,onClick:()=>n({visualDownloadThumbnail:!1})},e("Image from media library"))),React.createElement("p",{className:"description"},e("If you block an external URL, this option will try to download an image for this URL using different mechanisms (oEmbed, OpenGraph, ...), saves it locally and use it as background image."))))}))},ie=e=>{let{children:t}=e;const{__:a}=(0,A.Q)(),{isPro:n}=(0,te.$)();return n&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualDownloadThumbnail!==t.visualDownloadThumbnail||e.isVisual!==t.isVisual||e.visualType!==t.visualType||e.visualContentType!==t.visualContentType},(e=>{let{getFieldValue:n}=e;const r=n("isVisual"),o=n("visualType"),c=n("visualContentType"),i=n("visualDownloadThumbnail");return!!r&&"default"!==o&&React.createElement(l.Z.Item,{label:a(i||"generic"===c?"Fallback preview image":"Preview image"),name:"visualMediaThumbnail",valuePropName:"attachmentId",style:{display:void 0===i?"none":void 0}},t)}))};var se=a(24622);const ue=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)();return t&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType},(t=>{let{getFieldValue:a}=t;const n=a("isVisual"),r=a("visualType");return!!n&&"default"!==r&&React.createElement(l.Z.Item,{label:e("Blur image")},React.createElement(l.Z.Item,{name:"visualBlur",noStyle:!0},React.createElement(se.Z,{min:0,max:20,marks:{0:e("Disabled"),5:"5%",10:"10%",15:"15%",20:"20%"},tooltip:{open:!1},style:{marginLeft:40}})),React.createElement("p",{className:"description"},e("You can apply an additional blur to the background image. This can be useful e.g. for blocked contact forms to show it only schematically.")))}))},de=()=>{const{__:e}=(0,A.Q)(),{isPro:t}=(0,te.$)();return t&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType},(t=>{let{getFieldValue:a}=t;const n=a("isVisual"),r=a("visualType");return!!n&&"default"!==r&&React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualContentType!==t.visualContentType},(t=>{let{getFieldValue:a}=t;const n=a("visualContentType"),r=a("visualType");return React.createElement(l.Z.Item,{label:e("Button text"),style:{display:["audio-player","video-player"].indexOf(n)>-1||"hero"!==r?"none":void 0}},React.createElement(l.Z.Item,{name:"visualHeroButtonText",noStyle:!0},React.createElement(F.Z,null)),React.createElement("p",{className:"description"},e("If you specify a button text, a button with this text will be centered in the image and only when you click on this button the content blocker will be opened. Otherwise, clicking on the image itself will open the Content Blocker.")))}))}))},me=()=>{const{__:e}=(0,A.Q)();return React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual},(t=>{let{getFieldValue:a}=t;return!!a("isVisual")&&React.createElement(l.Z.Item,{wrapperCol:{offset:I.labelCol.span}},React.createElement("span",null,React.createElement(l.Z.Item,{name:"shouldForceToShowVisual",valuePropName:"checked",noStyle:!0},React.createElement(X.Z,null)),"  ",e("Force visual content blocker for hidden elements"),React.createElement("p",{className:"description"},e("In rare cases, visual content blockers are not displayed because the main element of the blocked content is not visible either. Enable this option if this is the case and you want to force to display a content blocker for non-visible elements."))))}))},pe=e=>{let{visualMediaThumbnailPicker:t}=e;const{__:a}=(0,A.Q)();return React.createElement(l.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria},(e=>{let{getFieldValue:n}=e;return"services"===n("criteria")&&React.createElement(React.Fragment,null,React.createElement(q.C,{offset:I.labelCol.span,description:a("For each content blocker it can be defined if it should be visually visible. This means that if the user has not agreed to the respective services, a box with a button is displayed to adjust the privacy settings so that the actual content can be loaded. The design of the box is copied from the cookie banner.")},a("Visual")),React.createElement(K,null),React.createElement(ne,null),React.createElement(le,null),React.createElement(re,null),React.createElement(ce,null),React.createElement(ie,null,t),React.createElement(ue,null),React.createElement(de,null),React.createElement(me,null))}))},ve=()=>{const{__:e,_x:t}=(0,A.Q)(),{templateCheck:a,isTemplateUpdate:n}=(0,P.f)();return!(!a&&!n)&&React.createElement(l.Z.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the content of the content blocker.")}]},React.createElement(W.Z,null,t("I have checked the information in the content blocker template myself for correctness and completeness and have added missing information or corrected information that does not fit my use case. I am aware that the manufacturer of Real Cookie Banner cannot take any liability in this respect.","legal-text")," ",React.createElement(O.r,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})))};var he=a(70502),fe=a(56769),Re=a(98e3);const ye=e=>{let{technicalProps:t,visualProps:a}=e;const{__:n}=(0,A.Q)(),r=(0,s.useRef)(),o=(0,s.useRef)();return React.createElement("div",{ref:r},React.createElement(he.f,{containerRef:r,resetButton:o,resetButtonEvent:fe.o,form:"blocker"}),React.createElement(Re.D,{form:"blocker"}),React.createElement($,null),React.createElement(J,t),React.createElement(pe,a),React.createElement(l.Z.Item,{className:"rcb-form-sticky-submit",colon:!1,labelAlign:"left",label:React.createElement(fe.S,{anchorRef:o})},React.createElement(ve,null),React.createElement("div",{style:{textAlign:"center",margin:"10px 0"}},React.createElement("input",{type:"submit",className:"button button-primary",value:n("Save")}))))},Ee=(0,u.Pi)((e=>{var t,a;let{template:u,overwriteAttributes:E,navigateAfterCreation:g=!0,comingFromServiceCreation:C=!1}=e;const{blocker:Z,id:T,queried:S,fetched:V,link:F}=(0,f.w)(),A=(0,h.useNavigate)(),[N,D]=(0,s.useState)(!1),{cookieStore:B,tcfStore:U,optionStore:{isTcf:M,others:{isPro:q}}}=(0,v.m)(),O=(null==Z?void 0:Z.templateModel)||B.templatesBlocker.get(null==u?void 0:u.identifier),{declarations:$}=U,{prompt:L,form:Q,isBusy:z,defaultValues:G,nonExistingServices:j,nonExistingTcfVendors:H,onFinish:W,onFinishFailed:Y,onValuesChange:J,contextValue:X}=(0,x.h)({attributes:E,isTcf:M,isEdit:V,entityTemplateVersion:null==Z||null===(t=Z.data)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.presetVersion,template:null==O?void 0:O.use,initialHasChanges:C,handleSave:async e=>{try{var t,a,n;const{name:l,status:r,description:o,...c}=e,i={...c,visualMediaThumbnail:c.visualMediaThumbnail||0,criteria:c.criteria,tcfVendors:(null===(t=c.tcfVendors)||void 0===t?void 0:t.join(","))||"",tcfPurposes:(null===(a=c.tcfPurposes)||void 0===a?void 0:a.join(","))||"",services:(null===(n=c.services)||void 0===n?void 0:n.join(","))||"",isVisual:"services"===c.criteria&&c.isVisual,presetId:null==O?void 0:O.data.identifier,presetVersion:null==O?void 0:O.data.version};if(delete i.templateCheck,S)Z.setName(l),Z.setStatus(r),Z.setDescription(o),Z.setMeta(i),await Z.patch();else{const e=new R.p(K,{title:{rendered:l},content:{rendered:o,protected:!1},status:r,meta:i});await e.persist()}g&&setTimeout((()=>"string"==typeof g?window.location.href=g:A(F.slice(1))),0)}catch(e){throw e.responseJSON.message}}}),{blockers:K,essentialGroup:ee}=B,te=V?{name:Z.data.title.raw,status:Z.data.status,description:Z.data.content.raw,criteria:Z.data.meta.criteria,rules:Z.data.meta.rules,tcfVendors:Z.tcfVendors,tcfPurposes:Z.tcfPurposes,services:Z.services,isVisual:Z.data.meta.isVisual,visualType:q?Z.data.meta.visualType:"default",visualMediaThumbnail:Z.data.meta.visualMediaThumbnail,visualContentType:Z.data.meta.visualContentType,isVisualDarkMode:Z.data.meta.isVisualDarkMode,visualBlur:Z.data.meta.visualBlur,visualDownloadThumbnail:Z.data.meta.visualDownloadThumbnail,visualHeroButtonText:Z.data.meta.visualHeroButtonText,shouldForceToShowVisual:Z.data.meta.shouldForceToShowVisual,templateCheck:void 0}:G,ae=(0,s.useCallback)((e=>{Q.setFieldsValue({services:[...Q.getFieldValue("services"),e.key]})}),[Q]),ne=(0,s.useCallback)((e=>{Q.setFieldsValue({tcfVendors:[...Q.getFieldValue("tcfVendors"),e.key]})}),[Q]);(0,s.useEffect)((()=>{S&&!V&&K.getSingle({params:{id:T,context:"edit"}})}),[S,V]),(0,s.useEffect)((()=>{!O||O.use||O.busy||O.fetchUse()}),[O]),(0,s.useEffect)((()=>{(0,m.X)(0),ee||B.fetchGroups()}),[]),(0,s.useEffect)((()=>{!$&&M&&U.fetchDeclarations()}),[M,$]);const le=P.$.Context();return S&&!V||O&&!O.use?React.createElement(w.f,{maxWidth:"fixed"},React.createElement(i.Z,{active:!0,paragraph:{rows:8}})):React.createElement(w.f,{maxWidth:"fixed"},React.createElement(le.Provider,{value:{...X,tcfPurposes:Object.values((null==$?void 0:$.purposes)||[])}},React.createElement(n.Z,{spinning:z||(null==O?void 0:O.busy)||!1},L,React.createElement(l.Z,(0,r.Z)({name:`blocker-${T}`,form:Q},I,{initialValues:te,onFinish:W,onFinishFailed:Y,onValuesChange:J,scrollToFirstError:{behavior:"smooth",block:"center"}}),React.createElement(ye,{technicalProps:{servicesFieldProps:{dropdown:React.createElement(d.m,{postType:"rcb-cookie",multiple:!0,filter:e=>e["rcb-cookie-group"][0]!==(null==ee?void 0:ee.key)}),children:React.createElement(React.Fragment,null,React.createElement("button",{type:"button",className:"button",onClick:()=>D(!0)},(0,p.__)("Create new service")),React.createElement(c.Z,{key:T,open:N,title:(0,p.__)("Add service"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>D(!1)},React.createElement(y.CookieEditForm,{navigateAfterCreation:!1,scrollToTop:!1,onCreated:e=>{D(!1),ae(e)}})),React.createElement(b,{nonExistingServices:j,onCreated:ae}))},tcfVendorsFieldProps:{dropdownVendors:React.createElement(d.m,{postType:"rcb-tcf-vendor-conf",multiple:!0,titleRender:e=>{let{vendor:{name:t}}=e;return t}}),children:React.createElement(k,{nonExistingTcfVendors:H,onCreated:ne})}},visualProps:{visualMediaThumbnailPicker:React.createElement(_,{title:(0,p.__)("Select preview image"),allowedTypes:["image"],render:e=>{let{open:t,reset:a,attachmentId:n,url:l}=e;return React.createElement(React.Fragment,null,React.createElement("p",{style:{marginTop:0}},React.createElement("a",{className:"button",onClick:t},n?(0,p.__)("Replace image"):(0,p.__)("Select from media library"))," ",n&&React.createElement("a",{className:"button",onClick:a},(0,p.__)("Remove image"))),l&&React.createElement(o.Z,{width:272,src:l}))}})}})))))}))},41319:(e,t,a)=>{a.r(t),a.d(t,{BlockerList:()=>_});var n=a(10022),l=a(87363),r=a(68038),o=a(49048),c=a(93404),i=a(15320),s=a(36157);class u{static Context(){return this.context=this.context||(0,l.createContext)({})}}function d(){return(0,l.useContext)(u.Context())}u.context=void 0;var m=a(20146),p=a(46270),v=a(70688),h=a(98656),f=a(60204),R=a(70045),y=a(39049),E=a(31643),b=a(84106),g=a(2132),k=a(2358),w=a(52069),C=a(77874);const Z=e=>{let{busy:t,attributes:{id:a,name:n,description:r,status:o,criteria:c,services:i,tcfVendors:s,rules:u,isVisual:m},avatarUrl:p,isCreatedFromTemplate:h,isUpdateAvailable:Z,languages:T,languageOnClick:S}=e;const{__:V}=(0,f.Q)(),{onEdit:_,onDelete:x}=d(),[P,I]=(0,l.useState)(!1);return React.createElement(v.ZP.Item,{itemID:a.toString(),actions:[React.createElement("a",{key:"edit",onClick:()=>_(a),style:{cursor:"pointer",textDecoration:"none"}},V(Z?"Edit and update":"Edit")),React.createElement(g.Z,{key:"delete",title:V("Are you sure that you want to delete this content blocker?"),placement:"bottomRight",onConfirm:()=>x(a),okText:V("Delete"),cancelText:V("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},V("Delete"))),(null==T?void 0:T.length)&&React.createElement(C.s,{recordId:a,languages:T,key:"languages",onClick:S})].filter(Boolean)},React.createElement(R.Z,{spinning:t},React.createElement(v.ZP.Item.Meta,{avatar:p?React.createElement(b.C,{size:"large",src:p,shape:"square"}):React.createElement(b.C,{size:"large",shape:"circle"},n.toUpperCase()[0]),title:React.createElement("span",null,n," ","draft"===o?React.createElement(E.Z,{color:"orange"},V("Draft")):"private"===o?React.createElement(E.Z,{color:"red"},V("Disabled")):null,"services"===c&&0===i.length&&React.createElement(E.Z,{color:"red"},V("No connected services defined")," ",React.createElement(k.Z,null)," ",V("Disabled")),"tcfVendors"===c&&0===s.length&&React.createElement(E.Z,{color:"red"},V("No connected TCF Vendors defined")," ",React.createElement(k.Z,null)," ",V("Disabled")),!!h&&React.createElement(E.Z,null,V("Created from template")),!!h&&!p&&React.createElement(y.Z,{title:V("This content blocker was created from a template. As you do not have a license activated at the moment, updates that are potentially available cannot be downloaded.")},React.createElement(E.Z,{color:"red"},V("Possibly outdated"))),!!Z&&React.createElement(y.Z,{title:V("The blocker template has been updated to provide current legal and technical information.")},React.createElement(E.Z,{color:"green"},V("Update available")))),description:React.createElement("div",null,!!r&&React.createElement("div",null,(0,w.E)(r)),React.createElement("div",{style:{paddingTop:5}},V("URLs / Elements to block"),":"," ",u.slice(0,P?u.length:5).map(((e,t)=>React.createElement(E.Z,{key:`${e}-${t}`},e))),u.length>5&&!P&&React.createElement(E.Z,{onClick:()=>I(!0),style:{cursor:"pointer",textDecoration:"underline"}},V("Show all"))),React.createElement("div",{style:{paddingTop:5}},V("Visual Content Blocker"),":"," ",React.createElement(E.Z,null,V(m?"Yes, if possible":"No"))))})))},T=()=>{const{__:e}=(0,f.Q)(),{busy:t,serviceCount:a,contentBlockerCount:n,rows:r,onCreate:o}=d(),c=(0,l.useMemo)((()=>{const e=[];for(let t=0;t<n;t++)e.push({key:t});return e}),[n]),i=e("Add content blocker");return n?React.createElement(React.Fragment,null,React.createElement("div",{className:"wp-clearfix"},React.createElement("a",{onClick:o,className:"button button-primary right",style:{marginBottom:10}},i)),t?React.createElement(v.ZP,{dataSource:c,renderItem:()=>React.createElement(v.ZP.Item,null,React.createElement(h.Z,{loading:!0,active:!0,paragraph:{rows:1}}))}):React.createElement(v.ZP,null,r.map((e=>React.createElement(Z,(0,p.Z)({},e,{key:e.attributes.id.toString()})))))):React.createElement(m.Z,{description:e(a>0?"You have not yet created a content blocker.":"Because a content blocker must be associated with a service, you must create a service first.")},React.createElement("a",{className:"button button-primary",onClick:o},i))};var S=a(12053),V=a(45567);const _=(0,r.Pi)((()=>{const{addLink:e,editLink:t}=(0,c.w)(),{cookieStore:a}=(0,o.m)(),{blockers:r,cookiesCount:d,blockersCount:m}=a,{busy:p,entries:v}=r,{link:h}=(0,i.R)(),f=(0,s.v)("blocker");(0,l.useEffect)((()=>{a.fetchBlockers(),a.fetchGroups()}),[]);const R=u.Context();return React.createElement(V.f,null,React.createElement(R.Provider,{value:{busy:p,serviceCount:d,contentBlockerCount:m,rows:Array.from(v.values()).map((e=>{const{key:t,busy:a,data:l,rules:r,services:o,tcfVendors:c,templateModel:i,isUpdateAvailable:s}=e,{title:{raw:u},content:{raw:d},status:m,meta:{criteria:p,presetId:v,isVisual:h}}=l;return{busy:a,attributes:{id:t,criteria:p,description:d,name:u,isVisual:h,rules:r,services:o,status:m,tcfVendors:c},avatarUrl:null==i?void 0:i.data.logoUrl,isCreatedFromTemplate:!!v,isUpdateAvailable:s,languages:l.multilingual,languageOnClick:async(e,t)=>{let{code:a,id:l}=t;try{const t=!1===l?(await(0,S.e)("rcb-blocker",e,a)).id:l,n=new URL(window.location.href);n.hash=`#/blocker/edit/${t}`,n.searchParams.set("lang",a),window.location.href=n.toString()}catch(e){var r;if(null===(r=e.responseJSON)||void 0===r||!r.message)throw e;n.ZP.error(e.responseJSON.message)}}}})),onDelete:e=>v.get(e).delete({force:!0}),onEdit:e=>{window.location.href=t(v.get(e))},onCreate:()=>{window.location.href=d>0?e:h}}},React.createElement(T,null)),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},f))}))},22813:(e,t,a)=>{a.r(t),a.d(t,{BlockerTemplateCenter:()=>d});var n=a(87363),l=a(68038),r=a(51194),o=a(87870),c=a(49048),i=a(45567),s=a(61959),u=a(94802);const d=(0,l.Pi)((()=>{const{cookieStore:e,optionStore:{isTcf:t}}=(0,c.m)(),[a,l]=(0,n.useState)(!1),d=r.F.Context(),[m,p]=(0,n.useState)(),{force:v,comingFromServiceCreation:h,attributes:f,navigateAfterCreation:R=!0}=(0,s.y)(),y=(0,n.useCallback)((async()=>{a||(l(!0),await e.fetchTemplatesBlocker());const t=Array.from(e.templatesBlocker.values()).map((e=>{let{data:t}=e;return t}));return t.sort(((e,t)=>e.headline.localeCompare(t.headline))),t}),[a]);return void 0===m?React.createElement(i.f,null,React.createElement(d.Provider,{value:{type:"content-blocker",quickLinks:["blocker-individual","service-scanner","cookie-experts"],enableLocalFilter:!0,syncTemplates:()=>e.fetchTemplatesBlocker({storage:"redownload"}),fetchTemplates:y,fetchUse:async t=>(await y(),e.templatesBlocker.get(t).fetchUse()),initialSelection:v,onSelect:(e,a)=>{(null==e?void 0:e.tcfVendorIds.length)>0&&!t?window.location.href=`#/settings/tcf?tcfIntegrationItem=${encodeURIComponent(e.name)}&navigateAfterTcfActivation=${encodeURIComponent(`#/blocker/new?force=${e.identifier}`)}`:p({identifier:null==e?void 0:e.identifier,version:null==e?void 0:e.version,overwriteAttributes:a&&f?JSON.parse(f):void 0})}}},React.createElement(o.F,null))):React.createElement(i.f,{maxWidth:"fixed"},React.createElement(u.BlockerEditForm,{comingFromServiceCreation:"1"===h,template:m.identifier?{identifier:m.identifier,version:m.version}:void 0,overwriteAttributes:m.overwriteAttributes,navigateAfterCreation:R}))}))},48036:(e,t,a)=>{a.d(t,{m:()=>m});var n=a(15898),l=a(70045),r=a(87363),o=a(7818),c=a(84785),i=a(40045),s=a(8700),u=a(78964);function d(e){var t;return(0,u.C)(e)&&!/^\.?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/gm.test(e)?null===(t=(new DOMParser).parseFromString(`<a href="${e}"></a>`,"text/html").querySelector("a"))||void 0===t?void 0:t.href:(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}const m=e=>{let{postType:t,postStatus:a=["draft","publish","private"],perPage:u=10,value:m,multiple:p,disabled:v,forceDefaultLanguage:h,onChange:f,titleRender:R=(e=>null==e?void 0:e.title.rendered),applyTitleRenderOnSelectOption:y,filter:E=(()=>!0)}=e;const[b,g]=(0,r.useState)(!1),[k,w]=(0,r.useState)(m),[C,Z]=(0,r.useState)(!1),[T,S]=(0,r.useState)([]),V=(0,r.useCallback)((async function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Z(!0);const{defaultLanguage:l,currentLanguage:r}=(0,o.u)(),i=await(0,c.W)({location:{path:`/${t}`,method:s.RouteHttpVerb.GET,namespace:"wp/v2"},request:{status:e.include?["draft","publish","private"]:a,orderby:e.search?"relevance":"title",...e},params:{_dataLocale:h?l:r}});return n&&S(i),Z(!1),i}),[]);!function(e,t,a,n){const[l,o]=(0,r.useState)(e);(0,r.useEffect)((()=>{const a=setTimeout((()=>{o(e)}),t);return null==n||n(e),()=>{clearTimeout(a)}}),[e]),(0,r.useEffect)((()=>{var e;!1!==(e=l)&&V({search:e,per_page:e.length?50:u})}),[l])}(b,""===b?0:800,0,(e=>{!1!==e&&Z(!0),S([])})),(0,r.useEffect)((()=>{const e=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return"number"==typeof k&&k>0||Array.isArray(k)&&k.length>0?V({include:Array.isArray(k)?k:[k]},e):Promise.resolve([])},t=async()=>{if("visible"===document.visibilityState){const[t]=await e(!1);t&&S((e=>e.map((e=>e.id===t.id?t:e))))}};return e(),document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}}),[]),(0,r.useEffect)((()=>{JSON.stringify(k)!==JSON.stringify(m)&&("number"==typeof m&&m>0||Array.isArray(m)&&m.length>0)&&(w(m),V({include:Array.isArray(m)?m:[m]}))}),[m,k]);const _=Array.isArray(k)?k:[k].filter(Boolean),x=`— ${(0,i.__)("Select")} —`;return React.createElement(n.Z,{mode:p?"multiple":void 0,disabled:v,showSearch:!0,value:k,placeholder:(0,i.__)("Search..."),notFoundContent:C?React.createElement(l.Z,{size:"small"}):null,onClick:()=>g(""),onSearch:g,onChange:e=>{const t=Array.isArray(e)?e.map(Number):+e;w(t),null==f||f(t)},filterOption:!1,loading:C},!p&&!C&&React.createElement(n.Z.Option,{value:0},d(y&&R(void 0,_)||x)),T.map((e=>React.createElement(n.Z.Option,{key:e.id,value:e.id,style:{display:E(e)?void 0:"none"}},d(R(e,_))))))}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.2/61d0ceb92556370d85c1ebf03cb61f29/chunk-config-tab-blocker.lite.js.map