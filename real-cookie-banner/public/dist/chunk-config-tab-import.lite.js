"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[357],{61933:(e,t,a)=>{a.r(t),a.d(t,{ImportExportCards:()=>U});var l=a(68038),n=a(24657),r=a(19893),c=a(24772),o=a(40045),s=a(46270),i=a(87363),m=a(63593),u=a(90987),p=a(29894),_=a(33124),d=a(59747),E=a(45890),R=a(33942),g=a(46499),k=a(84785),b=a(49048),y=a(43270),Z=a(43734);const h=(0,l.Pi)((e=>{let{result:t}=e;const a=(0,i.useCallback)((e=>{let{fix:t,settingsTab:a,cookieDuplicate:l,cookie:n,blockerDuplicate:r,blocker:c,href:s,linkText:i}=e;switch(t){case"settings":return React.createElement("a",{href:`#/settings/${a}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Set manually"));case"cookieDuplicate":{const{original:[e,t],duplicate:[a,n]}=l;return React.createElement(React.Fragment,null,React.createElement("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Open original"))," ","•"," ",React.createElement("a",{href:`#/cookies/${a}/edit/${n}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Open newly created")))}case"cookie":{const[e,t]=n;return React.createElement("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Check manually"))}case"blockerDuplicate":{const{original:e,duplicate:t}=r;return React.createElement(React.Fragment,null,React.createElement("a",{href:`#/blocker/edit/${e}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Open original"))," ","•"," ",React.createElement("a",{href:`#/blocker/edit/${t}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Open newly created")))}case"blocker":return React.createElement("a",{href:`#/blocker/edit/${c}`,target:"_blank",rel:"noreferrer"},(0,o.__)("Check manually"));case"link":return React.createElement("a",{href:s,rel:"noreferrer"},i||(0,o.__)("Set manually"));default:return null}}),[]);return t?React.createElement(React.Fragment,null,React.createElement(Z.Z,{style:{marginTop:0}},(0,o.__)("Result")),t.messages.map(((e,t)=>{let{message:l,severity:n,...r}=e;return React.createElement("div",{key:t,className:`notice notice-${n} inline below-h2 notice-alt`,style:{margin:"10px 0 0 0"}},React.createElement("p",null,React.createElement("span",{dangerouslySetInnerHTML:{__html:l}}),!!r.fix&&React.createElement(React.Fragment,null," • ",a(r))))}))):null}));var v=a(38411);const f={labelCol:{span:24},wrapperCol:{span:24}},S=(0,l.Pi)((()=>{var e;const{message:t}=m.Z.useApp(),{cookieStore:a,optionStore:l}=(0,b.m)(),{groups:n,busy:r}=a,[c]=u.Z.useForm(),[Z,S]=(0,i.useState)(!1),[x,P]=(0,i.useState)(void 0);(0,i.useEffect)((()=>{a.fetchGroups()}),[]);const C=(0,i.useCallback)((async e=>{S(!0);try{P(await(0,k.W)({location:y.H,request:{cookieGroup:0,cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep",...e}})),l.fetchCurrentRevision(),l.fetchSettings(),l.fetchBannerLinks(),t.success((0,o.__)("Successfully imported!"))}catch(e){t.error(e.responseJSON.message)}finally{S(!1)}}),[]),I=(0,i.useCallback)((e=>{const t=new FileReader;return t.readAsText(e,"UTF-8"),t.onload=e=>c.setFieldsValue({json:e.target.result}),t.onerror=()=>c.setFieldsValue({json:(0,o.__)("File could not be read.")}),!1}),[c]),F=(0,i.useCallback)(((e,t)=>{try{const a=JSON.parse(e);return!t||!!a[t]}catch(e){return!1}}),[]);return React.createElement(p.Z,{spinning:Z||r},React.createElement(u.Z,(0,s.Z)({name:"import",form:c},f,{initialValues:{json:"",cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep"},onFinish:C,labelWrap:!0}),React.createElement(u.Z.Item,{label:(0,o.__)("Content to import"),required:!0},React.createElement(u.Z.Item,{name:"json",rules:[{required:!0,message:(0,o.__)("Please provide a value!")}],extra:(0,o.__)("You can get the settings as JSON file or text if you export the settings in this or another WordPress installation.")},React.createElement(_.Z.TextArea,{rows:5})),React.createElement("p",{className:"description"},(0,o.__)("or select a file to upload:")),React.createElement(d.Z,{accept:"application/json",showUploadList:!1,beforeUpload:I},React.createElement("a",{className:"button"},React.createElement(v.Z,null)," ",(0,o.__)("Select File")))),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return F(t("json"),"cookies")&&React.createElement(u.Z.Item,{label:(0,o.__)("Fallback service group"),required:!0},React.createElement(u.Z.Item,{name:"cookieGroup",noStyle:!0,rules:[{required:!0,message:(0,o.__)("Please provide a group!")}]},React.createElement(E.Z,{style:{width:"70%"}},n.sortedGroups.map((e=>{let{data:{id:t,name:a}}=e;return React.createElement(E.Z.Option,{key:t,value:t},a)})))),React.createElement("p",{className:"description"},(0,o.__)("Select an alternative group to assign the service to if an imported service cannot be assigned to its original group.")))})),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return F(t("json"),"cookies")&&React.createElement(React.Fragment,null,React.createElement(u.Z.Item,null,React.createElement("span",null,React.createElement(u.Z.Item,{name:"cookieSkipExisting",valuePropName:"checked",noStyle:!0},React.createElement(R.Z,null)),React.createElement("span",null,"  ",(0,o.__)("Skip already existing services")))),React.createElement(u.Z.Item,{label:(0,o.__)("Set service status"),name:"cookieStatus",rules:[{required:!0,message:(0,o.__)("Please choose a status!")}]},React.createElement(g.ZP.Group,null,React.createElement(g.ZP.Button,{value:"keep"},(0,o.__)("Keep")),React.createElement(g.ZP.Button,{value:"publish"},(0,o.__)("Enabled")),React.createElement(g.ZP.Button,{value:"private"},(0,o.__)("Disabled")),React.createElement(g.ZP.Button,{value:"draft"},(0,o.__)("Draft")))))})),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return F(t("json"),"blocker")&&React.createElement(React.Fragment,null,React.createElement(u.Z.Item,null,React.createElement("span",null,React.createElement(u.Z.Item,{name:"blockerSkipExisting",valuePropName:"checked",noStyle:!0},React.createElement(R.Z,null)),React.createElement("span",null,"  ",(0,o.__)("Skip already existing content blocker")))),React.createElement(u.Z.Item,{label:(0,o.__)("Set content blocker status"),name:"blockerStatus",rules:[{required:!0,message:(0,o.__)("Please choose a status!")}]},React.createElement(g.ZP.Group,null,React.createElement(g.ZP.Button,{value:"keep"},(0,o.__)("Keep")),React.createElement(g.ZP.Button,{value:"publish"},(0,o.__)("Enabled")),React.createElement(g.ZP.Button,{value:"private"},(0,o.__)("Disabled")),React.createElement(g.ZP.Button,{value:"draft"},(0,o.__)("Draft")))))})),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json},(e=>{let{getFieldValue:t}=e;return F(t("json"),"tcfVendorConfigurations")&&React.createElement(u.Z.Item,{label:(0,o.__)("Set TCF Vendor configuration status"),name:"tcfVendorConfigurationStatus",rules:[{required:!0,message:(0,o.__)("Please choose a status!")}]},React.createElement(g.ZP.Group,null,React.createElement(g.ZP.Button,{value:"keep"},(0,o.__)("Keep")),React.createElement(g.ZP.Button,{value:"publish"},(0,o.__)("Enabled")),React.createElement(g.ZP.Button,{value:"private"},(0,o.__)("Disabled")),React.createElement(g.ZP.Button,{value:"draft"},(0,o.__)("Draft"))))})),React.createElement(u.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,o.__)("Import")})),React.createElement(u.Z.Item,{style:{display:null!=x&&null!==(e=x.messages)&&void 0!==e&&e.length?"block":"none"}},React.createElement(h,{result:x}))))}));var x=a(70902),P=a(16435),C=a(66880),I=a(60065);const F={labelCol:{span:24},wrapperCol:{span:24}},w=(0,l.Pi)((()=>{const{message:e}=m.Z.useApp(),{optionStore:{isTcf:t,others:{hints:{export:a}}}}=(0,b.m)(),[l]=u.Z.useForm(),[n,r]=(0,i.useState)(!1),[c,d]=(0,i.useState)(""),E=(0,i.useCallback)((async e=>{r(!0);try{d(JSON.stringify(await(0,k.W)({location:P.V,params:e})))}finally{r(!1)}}),[]),R=(0,i.useCallback)((()=>{(0,C.v)(c),e.success((0,o.__)("Export successfully copied to the clipboard."))}),[c]),g=(0,i.useCallback)((e=>((async()=>{r(!0),window.location.href=(0,k.Y)({location:P.V,params:{...l.getFieldsValue(),download:!0}}),r(!1)})(),e.preventDefault(),!1)),[r,l]);return React.createElement(p.Z,{spinning:n},React.createElement(u.Z,(0,s.Z)({name:"export",form:l},F,{initialValues:{settings:!0,cookieGroups:!0,cookies:!0,blocker:!0,tcfVendorConfigurations:!0,customizeBanner:!0},onFinish:E,labelWrap:!0}),React.createElement(u.Z.Item,{label:(0,o.__)("Content to export")},React.createElement("div",null,React.createElement(u.Z.Item,{name:"settings",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("Settings")))),React.createElement("div",null,React.createElement(u.Z.Item,{name:"cookieGroups",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("Service groups")))),React.createElement("div",null,React.createElement(u.Z.Item,{name:"cookies",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("Services")))),React.createElement("div",null,React.createElement(u.Z.Item,{name:"blocker",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("Content Blocker")))),t&&React.createElement("div",null,React.createElement(u.Z.Item,{name:"tcfVendorConfigurations",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("TCF Vendor configurations")))),React.createElement("div",null,React.createElement(u.Z.Item,{name:"customizeBanner",noStyle:!0,valuePropName:"checked"},React.createElement(x.Z,null,(0,o.__)("Cookie banner customization"))))),React.createElement(u.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,o.__)("Export")}),React.createElement("input",{onClick:g,type:"submit",className:"button",style:{margin:"10px 0 0 10px"},value:(0,o.__)("Download JSON")}),a.length>0&&React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,I.E)(a.join("\n\n"))))),React.createElement(u.Z.Item,{style:{display:c?"block":"none"}},React.createElement(u.Z.Item,{noStyle:!0},React.createElement(Z.Z,{style:{marginTop:0}},(0,o.__)("Result")),React.createElement(_.Z.TextArea,{onClick:R,value:c,readOnly:!0,rows:5})),React.createElement("p",{className:"description"},(0,o.__)('Copy the exported content and paste it into the "Import" text area of your target WordPress installation.')))))}));var D=a(73447),N=a(15529),Y=a(48488),V=a.n(Y);const B={labelCol:{span:24},wrapperCol:{span:24}},T=(0,l.Pi)((()=>{const[e]=u.Z.useForm(),[t,a]=(0,i.useState)(!1),[l,n]=(0,i.useState)(!1),r=(0,i.useCallback)((()=>{(async()=>{a(!0),n(!0);const{uuid:t,date:l}=e.getFieldsValue(),r=(0,k.Y)({location:N.Q,params:{uuid:t||"",from:(null==l?void 0:l[0].format("YYYY-MM-DD"))||"",to:(null==l?void 0:l[1].format("YYYY-MM-DD"))||""}});window.open(r,"_blank"),a(!1)})()}),[a,n,e]);return React.createElement(p.Z,{spinning:t},React.createElement(u.Z,(0,s.Z)({name:"export",form:e},B,{initialValues:{by:"",date:[],uuid:""},onFinish:r,labelWrap:!0}),React.createElement(u.Z.Item,{label:(0,o.__)("Export by"),required:!0},React.createElement(u.Z.Item,{name:"by",noStyle:!0,rules:[{required:!0,message:(0,o.__)("Please select an option!")}]},React.createElement(g.ZP.Group,null,React.createElement(g.ZP.Button,{value:"date"},(0,o.__)("Date range")),React.createElement(g.ZP.Button,{value:"uuid"},(0,o.__)("UUID"))))),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by},(e=>{let{getFieldValue:t}=e;return"date"===t("by")&&React.createElement(u.Z.Item,{name:"date",label:(0,o.__)("Date range"),required:!0,rules:[{type:"array",required:!0,message:(0,o.__)("Please provide a valid date range!")}]},React.createElement(D.D,{disabledDate:e=>!e||e.isAfter(V()())}))})),React.createElement(u.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by},(e=>{let{getFieldValue:t}=e;return"uuid"===t("by")&&React.createElement(u.Z.Item,{name:"uuid",label:(0,o.__)("UUID"),required:!0,rules:[{required:!0,pattern:/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/,message:(0,o.__)("Please provide a valid UUID!")}]},React.createElement(_.Z,null))})),React.createElement(u.Z.Item,null,React.createElement("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,o.__)("Download CSV")})),l&&React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"}},React.createElement("p",null,(0,o.__)("The CSV file can be very large because data in this format is redundant per line. In your WordPress database the consents are much smaller.")))))}));var j=a(50088),L=a(36157);const U=(0,l.Pi)((()=>{const e=(0,L.v)("import");return React.createElement(n.Z,null,React.createElement(r.Z,{xl:16,sm:16,xs:24},React.createElement(c.Z,{style:{margin:10},title:(0,o.__)("Import")},React.createElement(S,null))),React.createElement(r.Z,{xl:8,sm:8,xs:24},React.createElement(c.Z,{style:{margin:10},title:(0,o.__)("Export")},React.createElement(w,null)),React.createElement(c.Z,{style:{margin:10},title:(0,o.__)("Export consents")},React.createElement(T,null))),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},e),React.createElement(j.K,{identifier:"import"}))}))},73447:(e,t,a)=>{a.d(t,{D:()=>u});var l=a(46270),n=a(40045),r=a(48488),c=a.n(r),o=a(57350),s=a(53090);const i=o.Z.generatePicker(s.Z),{RangePicker:m}=i,u=e=>{const t=c().localeData();return React.createElement(m,(0,l.Z)({locale:{lang:{locale:c().locale(),placeholder:(0,n.__)("Select date"),rangePlaceholder:[(0,n.__)("Start date"),(0,n.__)("End date")],today:(0,n.__)("Today"),now:(0,n.__)("Now"),backToToday:(0,n.__)("Back to today"),ok:(0,n.__)("OK"),clear:(0,n.__)("Clear"),month:(0,n.__)("Month"),year:(0,n.__)("Year"),timeSelect:(0,n.__)("Select time"),dateSelect:(0,n.__)("Select date"),monthSelect:(0,n.__)("Choose a month"),yearSelect:(0,n.__)("Choose a year"),decadeSelect:(0,n.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,n.__)("Previous month (PageUp)"),nextMonth:(0,n.__)("Next month (PageDown)"),previousYear:(0,n.__)("Last year (Control + left)"),nextYear:(0,n.__)("Next year (Control + right)"),previousDecade:(0,n.__)("Last decade"),nextDecade:(0,n.__)("Next decade"),previousCentury:(0,n.__)("Last century"),nextCentury:(0,n.__)("Next century")},timePickerLocale:{placeholder:(0,n.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"}},e))}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.6.1/b9914e5faa01702887043a9aec46657f/chunk-config-tab-import.lite.js.map
