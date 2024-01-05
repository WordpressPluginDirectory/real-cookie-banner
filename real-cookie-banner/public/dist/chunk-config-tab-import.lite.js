"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[357],{63736:(e,t,a)=>{a.d(t,{r:()=>l});var n=a(31643),r=a(49114),o=a(60204);const l=e=>{let{url:t,style:a,label:l}=e;const{__:c}=(0,o.Q)(),s={cursor:"pointer",...a};return React.createElement(n.Z,{style:s,onClick:()=>window.open(t,"_blank")},React.createElement(r.Z,null)," ",l||c("Learn more"))}},50435:(e,t,a)=>{a.d(t,{S$:()=>n});const n="https://assets.devowl.io/in-app/wp-real-cookie-banner/"},68384:(e,t,a)=>{a.d(t,{h:()=>i,u:()=>m});var n=a(12717),r=a(84106),o=a(15602),l=a(87363),c=a(50435),s=a(60204);const i=`${c.S$}cookie-experts.svg`,u=["niklas.moselewski","mario.guenter","matthias.guenter","jan.karres"];function m(){const{__:e}=(0,s.Q)();return{openDialog:(0,l.useCallback)((()=>{o.Z.info({icon:void 0,width:500,closable:!0,okButtonProps:{style:{display:"none"}},content:React.createElement("div",{style:{textAlign:"center"}},React.createElement("img",{src:i,style:{display:"block",paddingTop:15,margin:"auto",height:176}}),React.createElement("h3",{style:{margin:"10px 0 0"}},"Cookie Experts"),React.createElement("p",{style:{marginTop:0}},e("Let our team help you with the setup")),React.createElement(n.Z,null,React.createElement(r.C.Group,{size:"large"},u.map((e=>React.createElement(r.C,{key:e,src:`${c.S$}cookie-experts-faces/${e}.jpeg?v=3`}))))),React.createElement("a",{href:e("https://devowl.io/wordpress-real-cookie-banner/cookie-experts/"),target:"_blank",rel:"noreferrer",className:"button button-large button-primary"},e("Get help from Cookie Experts")),React.createElement("p",null,e("We admit, it is not easy to find all the services, cookies, etc. The legal requirements in the EU are quite complex for many website operators. We can understand if you feel overwhelmed - if this goes far beyond what you can technically do. After you know what all has to be considered, the question of how to make your website privacy compliant does not let you sleep peacefully either.")),React.createElement("p",null,e("Don't worry, we have a solution for you! Our Cookie Experts have already set up many cookie banners and know exactly what they are doing. They can also set up your cookie banner quickly and easily. So, we can simply take this worry away from you.")),React.createElement("a",{style:{marginTop:10,textDecoration:"underline",display:"inline-block",cursor:"pointer"},onClick:()=>o.Z.destroyAll()},e("Close")))})}),[])}}},50088:(e,t,a)=>{a.d(t,{K:()=>u});var n=a(15602),r=a(87363),o=a(68038),l=a(40045),c=a(33373),s=a(36157),i=a(49048);const u=(0,o.Pi)((e=>{let{identifier:t,width:a,title:o,sprintfArgs:u=[],always:m}=e;const{optionStore:d}=(0,i.m)(),{others:{modalHints:p}}=d,[_,h]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(m){const e=p.indexOf(t);e>-1&&p.splice(e,1)}}),[m,p]),(0,r.useEffect)((()=>{h(-1===p.indexOf(t))}),[p.length,t]);const y=(0,s.v)(t,...u),g="string"==typeof y&&y.indexOf("?")>-1?y.split("?")[0]:"",E=o||(g?`${g}?`:(0,l.__)("What you should definitely know!")),R="string"==typeof y&&"string"==typeof E&&g?y.replace(E,"").trim():y,k=(0,r.useCallback)((()=>{d.setModalHintSeen(t)}),[t,d]);return React.createElement(n.Z,{open:_,title:React.createElement("span",null,React.createElement(c.Z,{style:{color:"#1890ff"}})," ",E),closable:!1,onOk:k,width:a,okText:(0,l.__)("Okay, I got it"),cancelButtonProps:{style:{display:"none"}}},R)}))},61933:(e,t,a)=>{a.r(t),a.d(t,{ImportExportCards:()=>L});var n=a(77419),r=a(86459),o=a(89059),l=a(68038),c=a(40045),s=a(70045),i=a(46270),u=a(11970),m=a(25654),d=a(15898),p=a(21029),_=a(28365),h=a(10022),y=a(74943),g=a(87363),E=a(84785),R=a(49048),k=a(43270),f=a(12717);const b=(0,l.Pi)((e=>{let{result:t}=e;const a=(0,g.useCallback)((e=>{let{fix:t,settingsTab:a,cookieDuplicate:n,cookie:r,blockerDuplicate:o,blocker:l,href:s,linkText:i}=e;switch(t){case"settings":return React.createElement("a",{href:`#/settings/${a}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Set manually"));case"cookieDuplicate":{const{original:[e,t],duplicate:[a,r]}=n;return React.createElement(React.Fragment,null,React.createElement("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Open original"))," ","•"," ",React.createElement("a",{href:`#/cookies/${a}/edit/${r}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Open newly created")))}case"cookie":{const[e,t]=r;return React.createElement("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Check manually"))}case"blockerDuplicate":{const{original:e,duplicate:t}=o;return React.createElement(React.Fragment,null,React.createElement("a",{href:`#/blocker/edit/${e}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Open original"))," ","•"," ",React.createElement("a",{href:`#/blocker/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Open newly created")))}case"blocker":return React.createElement("a",{href:`#/blocker/edit/${l}`,target:"_blank",rel:"noreferrer"},(0,c.__)("Check manually"));case"link":return React.createElement("a",{href:s,rel:"noreferrer"},i||(0,c.__)("Set manually"));default:return null}}),[]);return t?React.createElement(React.Fragment,null,React.createElement(f.Z,{style:{marginTop:0}},(0,c.__)("Result")),t.messages.map(((e,t)=>{let{message:n,severity:r,...o}=e;return React.createElement("div",{key:t,className:`notice notice-${r} inline below-h2 notice-alt`,style:{margin:"10px 0 0 0"}},React.createElement("p",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:n}}),!!o.fix&&React.createElement(React.Fragment,null," • ",a(o))))}))):null}));var v=a(52569);const w={labelCol:{span:24},wrapperCol:{span:24}},Z=(0,l.Pi)((()=>{var e;const{cookieStore:t,optionStore:a}=(0,R.m)(),{groups:n,busy:r}=t,[o]=y.Z.useForm(),[l,f]=(0,g.useState)(!1),[Z,S]=(0,g.useState)(void 0);(0,g.useEffect)((()=>{t.fetchGroups()}),[]);const x=(0,g.useCallback)((async e=>{f(!0);try{S(await(0,E.W)({location:k.H,request:{cookieGroup:0,cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep",...e}})),a.fetchCurrentRevision(),a.fetchSettings(),a.fetchBannerLinks(),h.ZP.success((0,c.__)("Successfully imported!"))}catch(e){h.ZP.error(e.responseJSON.message)}finally{f(!1)}}),[]),C=(0,g.useCallback)((e=>{const t=new FileReader;return t.readAsText(e,"UTF-8"),t.onload=e=>o.setFieldsValue({json:e.target.result}),t.onerror=()=>o.setFieldsValue({json:(0,c.__)("File could not be read.")}),!1}),[o]),P=(0,g.useCallback)(((e,t)=>{try{const a=JSON.parse(e);return!t||!!a[t]}catch(e){return!1}}),[]);return React.createElement(s.Z,{spinning:l||r},React.createElement(y.Z,(0,i.Z)({name:"import",form:o},w,{initialValues:{json:"",cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep"},onFinish:x}),React.createElement(y.Z.Item,{label:(0,c.__)("Content to import"),required:!0},React.createElement(y.Z.Item,{name:"json",rules:[{required:!0,message:(0,c.__)("Please provide a value!")}],extra:(0,c.__)("You can get the settings as JSON file or text if you export the settings in this or another WordPress installation.")},React.createElement(_.Z.TextArea,{rows:5})),React.createElement("p",{className:"description"},(0,c.__)("or select a file to upload:")),React.createElement(p.Z,{accept:"application/json",showUploadList:!1,beforeUpload:C},React.createElement("a",{className:"button"},React.createElement(v.Z,null)," ",(0,c.__)("Select File")))),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return P(t("json"),"cookies")&&React.createElement(y.Z.Item,{label:(0,c.__)("Fallback service group"),required:!0},React.createElement(y.Z.Item,{name:"cookieGroup",noStyle:!0,rules:[{required:!0,message:(0,c.__)("Please provide a group!")}]},React.createElement(d.Z,{style:{width:"70%"}},n.sortedGroups.map((e=>{let{data:{id:t,name:a}}=e;return React.createElement(d.Z.Option,{key:t,value:t},a)})))),React.createElement("p",{className:"description"},(0,c.__)("Select an alternative group to assign the service to if an imported service cannot be assigned to its original group.")))})),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return P(t("json"),"cookies")&&React.createElement(React.Fragment,null,React.createElement(y.Z.Item,null,React.createElement("span",null,React.createElement(y.Z.Item,{name:"cookieSkipExisting",valuePropName:"checked",noStyle:!0},React.createElement(m.Z,null)),React.createElement("span",null,"  ",(0,c.__)("Skip already existing services")))),React.createElement(y.Z.Item,{label:(0,c.__)("Set service status"),name:"cookieStatus",rules:[{required:!0,message:(0,c.__)("Please choose a status!")}]},React.createElement(u.ZP.Group,null,React.createElement(u.ZP.Button,{value:"keep"},(0,c.__)("Keep")),React.createElement(u.ZP.Button,{value:"publish"},(0,c.__)("Enabled")),React.createElement(u.ZP.Button,{value:"private"},(0,c.__)("Disabled")),React.createElement(u.ZP.Button,{value:"draft"},(0,c.__)("Draft")))))})),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return P(t("json"),"blocker")&&React.createElement(React.Fragment,null,React.createElement(y.Z.Item,null,React.createElement("span",null,React.createElement(y.Z.Item,{name:"blockerSkipExisting",valuePropName:"checked",noStyle:!0},React.createElement(m.Z,null)),React.createElement("span",null,"  ",(0,c.__)("Skip already existing content blocker")))),React.createElement(y.Z.Item,{label:(0,c.__)("Set content blocker status"),name:"blockerStatus",rules:[{required:!0,message:(0,c.__)("Please choose a status!")}]},React.createElement(u.ZP.Group,null,React.createElement(u.ZP.Button,{value:"keep"},(0,c.__)("Keep")),React.createElement(u.ZP.Button,{value:"publish"},(0,c.__)("Enabled")),React.createElement(u.ZP.Button,{value:"private"},(0,c.__)("Disabled")),React.createElement(u.ZP.Button,{value:"draft"},(0,c.__)("Draft")))))})),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return P(t("json"),"tcfVendorConfigurations")&&React.createElement(y.Z.Item,{label:(0,c.__)("Set TCF Vendor configuration status"),name:"tcfVendorConfigurationStatus",rules:[{required:!0,message:(0,c.__)("Please choose a status!")}]},React.createElement(u.ZP.Group,null,React.createElement(u.ZP.Button,{value:"keep"},(0,c.__)("Keep")),React.createElement(u.ZP.Button,{value:"publish"},(0,c.__)("Enabled")),React.createElement(u.ZP.Button,{value:"private"},(0,c.__)("Disabled")),React.createElement(u.ZP.Button,{value:"draft"},(0,c.__)("Draft"))))})),React.createElement(y.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,c.__)("Import")})),React.createElement(y.Z.Item,{style:{display:null!=Z&&null!==(e=Z.messages)&&void 0!==e&&e.length?"block":"none"}},React.createElement(b,{result:Z}))))}));var S=a(38704),x=a(16435),C=a(52069),P=a(80395);const F={labelCol:{span:24},wrapperCol:{span:24}},I=(0,l.Pi)((()=>{const{optionStore:{isTcf:e,others:{hints:{export:t}}}}=(0,R.m)(),[a]=y.Z.useForm(),[n,r]=(0,g.useState)(!1),[o,l]=(0,g.useState)(""),u=(0,g.useCallback)((async e=>{r(!0);try{l(JSON.stringify(await(0,E.W)({location:x.V,params:e})))}finally{r(!1)}}),[]),m=(0,g.useCallback)((()=>{(0,P.v)(o),h.ZP.success((0,c.__)("Export successfully copied to the clipboard."))}),[o]),d=(0,g.useCallback)((e=>((async()=>{r(!0),window.location.href=(0,E.Y)({location:x.V,params:{...a.getFieldsValue(),download:!0}}),r(!1)})(),e.preventDefault(),!1)),[r,a]);return React.createElement(s.Z,{spinning:n},React.createElement(y.Z,(0,i.Z)({name:"export",form:a},F,{initialValues:{settings:!0,cookieGroups:!0,cookies:!0,blocker:!0,tcfVendorConfigurations:!0,customizeBanner:!0},onFinish:u}),React.createElement(y.Z.Item,{label:(0,c.__)("Content to export")},React.createElement("div",null,React.createElement(y.Z.Item,{name:"settings",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("Settings")))),React.createElement("div",null,React.createElement(y.Z.Item,{name:"cookieGroups",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("Service groups")))),React.createElement("div",null,React.createElement(y.Z.Item,{name:"cookies",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("Services")))),React.createElement("div",null,React.createElement(y.Z.Item,{name:"blocker",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("Content Blocker")))),e&&React.createElement("div",null,React.createElement(y.Z.Item,{name:"tcfVendorConfigurations",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("TCF Vendor configurations")))),React.createElement("div",null,React.createElement(y.Z.Item,{name:"customizeBanner",noStyle:!0,valuePropName:"checked"},React.createElement(S.Z,null,(0,c.__)("Cookie banner customization"))))),React.createElement(y.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,c.__)("Export")}),React.createElement("input",{onClick:d,type:"submit",className:"button",style:{margin:"10px 0 0 10px"},value:(0,c.__)("Download JSON")}),t.length>0&&React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,C.E)(t.join("\n\n"))))),React.createElement(y.Z.Item,{style:{display:o?"block":"none"}},React.createElement(y.Z.Item,{noStyle:!0},React.createElement(f.Z,{style:{marginTop:0}},(0,c.__)("Result")),React.createElement(_.Z.TextArea,{onClick:m,value:o,readOnly:!0,rows:5})),React.createElement("p",{className:"description"},(0,c.__)('Copy the exported content and paste it into the "Import" text area of your target WordPress installation.')))))}));var T=a(59958),D=a(15529),Y=a(48488),N=a.n(Y);const B={labelCol:{span:24},wrapperCol:{span:24}},V=(0,l.Pi)((()=>{const[e]=y.Z.useForm(),[t,a]=(0,g.useState)(!1),[n,r]=(0,g.useState)(!1),o=(0,g.useCallback)((()=>{(async()=>{a(!0),r(!0);const{uuid:t,date:n}=e.getFieldsValue(),o=(0,E.Y)({location:D.Q,params:{uuid:t||"",from:(null==n?void 0:n[0].format("YYYY-MM-DD"))||"",to:(null==n?void 0:n[1].format("YYYY-MM-DD"))||""}});window.open(o,"_blank"),a(!1)})()}),[a,r,e]);return React.createElement(s.Z,{spinning:t},React.createElement(y.Z,(0,i.Z)({name:"export",form:e},B,{initialValues:{by:"",date:[],uuid:""},onFinish:o}),React.createElement(y.Z.Item,{label:(0,c.__)("Export by"),required:!0},React.createElement(y.Z.Item,{name:"by",noStyle:!0,rules:[{required:!0,message:(0,c.__)("Please select an option!")}]},React.createElement(u.ZP.Group,null,React.createElement(u.ZP.Button,{value:"date"},(0,c.__)("Date range")),React.createElement(u.ZP.Button,{value:"uuid"},(0,c.__)("UUID"))))),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by},(e=>{let{getFieldValue:t}=e;return"date"===t("by")&&React.createElement(y.Z.Item,{name:"date",label:(0,c.__)("Date range"),required:!0,rules:[{type:"array",required:!0,message:(0,c.__)("Please provide a valid date range!")}]},React.createElement(T.D,{disabledDate:e=>!e||e.isAfter(N()())}))})),React.createElement(y.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by},(e=>{let{getFieldValue:t}=e;return"uuid"===t("by")&&React.createElement(y.Z.Item,{name:"uuid",label:(0,c.__)("UUID"),required:!0,rules:[{required:!0,pattern:/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/,message:(0,c.__)("Please provide a valid UUID!")}]},React.createElement(_.Z,null))})),React.createElement(y.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,c.__)("Download CSV")})),n&&React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,c.__)("The CSV file can be very large because data in this format is redundant per line. In your WordPress database the consents are much smaller.")))))}));var q=a(50088),A=a(36157);const L=(0,l.Pi)((()=>{const e=(0,A.v)("import");return React.createElement(n.Z,null,React.createElement(r.Z,{xl:16,sm:16,xs:24},React.createElement(o.Z,{style:{margin:10},title:(0,c.__)("Import")},React.createElement(Z,null))),React.createElement(r.Z,{xl:8,sm:8,xs:24},React.createElement(o.Z,{style:{margin:10},title:(0,c.__)("Export")},React.createElement(I,null)),React.createElement(o.Z,{style:{margin:10},title:(0,c.__)("Export consents")},React.createElement(V,null))),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},e),React.createElement(q.K,{identifier:"import"}))}))},59958:(e,t,a)=>{a.d(t,{D:()=>i});var n=a(46270),r=a(10639),o=a(40045),l=a(48488),c=a.n(l);const{RangePicker:s}=r.Z,i=e=>{const t=c().localeData();return React.createElement(s,(0,n.Z)({locale:{lang:{locale:c().locale(),placeholder:(0,o.__)("Select date"),rangePlaceholder:[(0,o.__)("Start date"),(0,o.__)("End date")],today:(0,o.__)("Today"),now:(0,o.__)("Now"),backToToday:(0,o.__)("Back to today"),ok:(0,o.__)("OK"),clear:(0,o.__)("Clear"),month:(0,o.__)("Month"),year:(0,o.__)("Year"),timeSelect:(0,o.__)("Select time"),dateSelect:(0,o.__)("Select date"),monthSelect:(0,o.__)("Choose a month"),yearSelect:(0,o.__)("Choose a year"),decadeSelect:(0,o.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,o.__)("Previous month (PageUp)"),nextMonth:(0,o.__)("Next month (PageDown)"),previousYear:(0,o.__)("Last year (Control + left)"),nextYear:(0,o.__)("Next year (Control + right)"),previousDecade:(0,o.__)("Last decade"),nextDecade:(0,o.__)("Next decade"),previousCentury:(0,o.__)("Last century"),nextCentury:(0,o.__)("Next century")},timePickerLocale:{placeholder:(0,o.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"}},e))}},36157:(e,t,a)=>{a.d(t,{v:()=>_});var n=a(77419),r=a(86459),o=a(12717),l=a(64041),c=a(91283),s=a(68384),i=a(63736),u=a(49048),m=a(40045),d=a(48488),p=a.n(d);function _(e){const{optionStore:{isTcf:t,consentsDeletedAt:a,consentDuration:d}}=(0,u.m)();switch(e){case"scanner":{const{openDialog:e}=(0,s.u)();return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,m.__)("The scanner finds services that you use on your website that might set/read cookies or process personal data. This is e.g. Google Analytics, YouTube or Elementor. If there is no template for a service, you will see from which external URLs content, scripts etc. are embedded. This allows you to set up your cookie banner quickly and easily.")),React.createElement("p",{className:"description"},(0,m._i)((0,m.__)("We explicitly do not find cookies because that would not work reliably. {{a}}We explained why in our knowledge base.{{/a}}"),{a:React.createElement("a",{rel:"noreferrer",href:(0,m.__)("https://devowl.io/knowledge-base/real-cookie-banner-cookie-scanner-finds-cookies-automatically/"),target:"_blank"})})),React.createElement(n.Z,{style:{margin:"10px 0"}},React.createElement(r.Z,{span:11},React.createElement("div",{style:{paddingRight:10}},React.createElement(o.Z,null,(0,m.__)("What the scanner finds ...")),[(0,m.__)("External services (with and without template)"),(0,m.__)("WordPress plugins with templates that require consent"),(0,m.__)("Automatic check of all subpages of your website")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(l.Z,{twoToneColor:"#52c41a"}),"  ",e))))),React.createElement(r.Z,{span:2,style:{textAlign:"center"}},React.createElement(o.Z,{type:"vertical",style:{height:"100%"}})),React.createElement(r.Z,{span:11},React.createElement("div",null,React.createElement(o.Z,null,(0,m.__)("... and what it does not")),[(0,m.__)("Cookies from unknown WordPress plugins"),(0,m.__)("Services embedded after the page load via JavaScript"),(0,m.__)("Complete coverage of your individual use case")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(c.Z,{twoToneColor:"#eb2f96"}),"  ",e)))))),React.createElement("p",{className:"description"},(0,m._i)((0,m.__)("Just by using the scanner, you will not set up your cookie banner one hundred percent correctly. If it is too complex or time-consuming for you to set up the cookie banner yourself, just let one of our {{a}}cookie experts{{/a}} set it up for you!"),{a:React.createElement("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:e})})))}case"cookie":return React.createElement(React.Fragment,null,(0,m.__)("What are services? Services can be external applications such as Google Analytics or WordPress plugins or themes that process personal data (e.g. IP address) and/or set cookies. Cookies (and similar technologies) are small text files that are stored on the device of visitors to your website. You can store information about the visitor in cookies, such as the website's language, or unique advertising IDs to display personalized advertising. You, as the site owner, must ensure that cookies are only placed on your visitors' devices and personal data are only processed if they have given their explicit consent. Unless you have a legitimate interest in the legal sense to do so even without consent. You can define here all the services you use and their cookies with their legal and technical information.")," ",React.createElement(i.r,{url:(0,m.__)("https://devowl.io/2021/web-cookies-overview/")}));case"blocker":return(0,m.__)("What is a content blocker? Imagine that a user of your website does not accept all services. At the same time, you have integrated e.g. a YouTube video that sets cookies that the visitor has not agreed to. According to the ePrivacy Directive, this is prohibited. Content blockers automatically replace iframes, script and link tags like YouTube videos for such users and offer them to watch the video as soon as they agree to load it.");case"list-of-consents":return(0,m._i)((0,m.__)("Consents are automatically documented in order to be able to prove compliance with the legal requirements according to {{a}}Art. 5 GDPR{{/a}} and, in case of dispute, to prove how the consent was obtained."),{a:React.createElement("a",{href:(0,m.__)("https://gdpr-text.com/read/article-5/"),target:"_blank",rel:"noreferrer"})});case"consents-deleted":return React.createElement(React.Fragment,null,a?(0,m.__)("Consents before %s has been automatically deleted according to the settings you have made.",p()(a).subtract(d,"months").toDate().toLocaleString(document.documentElement.lang)):null);case"shortcodes":return React.createElement(React.Fragment,null,(0,m._i)((0,m.__)("Your website visitors must be able to view their consent history, change their consent, or withdraw their consent at any time. This must be as easy as giving consent. Therefore, the legal links must be included on every subpage of the website (e.g. in the footer)."),{strong:React.createElement("strong",null)}),React.createElement("br",null),React.createElement("br",null),(0,m._i)((0,m.__)("Hiding these options, e.g. in the privacy policy, is in the opinion of multiple data protection authorities in the EU a violation of the GDPR."),{a:React.createElement("a",{href:(0,m.__)("https://www.datenschutzkonferenz-online.de/media/oh/20211220_oh_telemedien.pdf"),target:"_blank",rel:"noreferrer"})}),t?React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("br",null),(0,m.__)("To meet the requirements of the TCF standard, the shortcodes should be placed near the link to the privacy policy.")):null);case"tcf-vendor":return(0,m._i)((0,m.__)("What is a TCF vendor? According to the IAB Europe Transparency and Consent Framework (TCF), any service (e.g. Google for Google Ads) that wants to use consents according to the TCF standard must register as a vendor in the {{a}}Global Vendor List (GVL){{/a}}. All TCF vendors specify for which purposes they need consent to process data and set cookies and which features they can offer with these consents. They also provide a link to their privacy policy for further information. You, as a website operator, must obtain consent in your cookie banner for all vendors you work with. You can limit the requested purposes of vendors to keep consents as privacy-friendly as possible."),{a:React.createElement("a",{href:(0,m.__)("https://iabeurope.eu/vendor-list-tcf/"),target:"_blank",rel:"noreferrer"})});case"tcf-integration":for(var _=arguments.length,h=new Array(_>1?_-1:0),y=1;y<_;y++)h[y-1]=arguments[y];return React.createElement(React.Fragment,null,(0,m.__)("You are trying to obtain consent for the advertising network %s. In order to be able to display advertising, you must obtain consent in accordance with the TCF standard. Therefore, please first activate TCF compatibility for your cookie banner so that you can then make all the necessary configurations!",...h));case"import":return React.createElement(React.Fragment,null,(0,m.__)("You can export and import all or only some of the settings you made in Real Cookie Banner. If you have several websites, you can save a lot of time by transferring the settings comfortably."),React.createElement("br",null),React.createElement("br",null),(0,m.__)("Also, you can export documented consents to save them in a local backup."));default:return""}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.4/562b081f0526e66d897a4d6455bc0aa2/chunk-config-tab-import.lite.js.map
