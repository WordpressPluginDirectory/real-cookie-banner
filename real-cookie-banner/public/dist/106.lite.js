"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[106],{30702:(e,t,a)=>{a.r(t),a.d(t,{TcfVendorConfigurationForm:()=>ne});var n=a(70045),r=a(74943),o=a(46270),i=a(98656),s=a(10022),l=a(87363),c=a(68038),d=a(91070),u=a(49048),m=a(66711),p=a(9520),f=a(87803),h=a(17085),v=a(60204);class g{static Context(){return this.context=this.context||(0,l.createContext)({})}}function E(){return(0,l.useContext)(g.Context())}g.context=void 0;var R=a(6880),y=a(36435),b=a(28365);const k=()=>{const{__:e}=(0,v.Q)(),{vendor:{id:t,name:a}}=E();return React.createElement(r.Z.Item,{label:e("Provider")},React.createElement(b.Z,{value:a,readOnly:!0,addonAfter:e("Vendor ID: %d",t)}))};var C=a(11970);const S=()=>{const{__:e}=(0,v.Q)();return React.createElement(r.Z.Item,{label:e("Status"),required:!0},React.createElement(r.Z.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose a status!")}]},React.createElement(C.ZP.Group,null,React.createElement(C.ZP.Button,{value:"publish"},e("Enabled")),React.createElement(C.ZP.Button,{value:"private"},e("Disabled")),React.createElement(C.ZP.Button,{value:"draft"},e("Draft")))),React.createElement("p",{className:"description"},e('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.')))},I=()=>{const{__:e}=(0,v.Q)(),{vendor:{additionalInformation:t}}=E();return React.createElement(r.Z.Item,{label:e("Legal address")},React.createElement(b.Z.TextArea,{value:(null==t?void 0:t.legalAddress.split(";").join("\n"))||"",readOnly:!0,autoSize:!0}))},w=()=>{const{__:e}=(0,v.Q)(),{vendor:{urls:t}}=E(),{privacy:a,legIntClaim:n}=(null==t?void 0:t[0])||{langId:"",privacy:"",legIntClaim:""};return React.createElement(React.Fragment,null,React.createElement(r.Z.Item,{label:e("Privacy policy of the provider")},React.createElement(b.Z,{value:a,readOnly:!0})),React.createElement(r.Z.Item,{label:e("Explanation of the legitimate interest")},React.createElement(b.Z,{value:n,readOnly:!0})))};var Z=a(25654),x=a(15898);const P=()=>{const{__:e}=(0,v.Q)(),{iso3166OneAlpha2:t,vendor:{additionalInformation:a}}=E();return React.createElement(React.Fragment,null,React.createElement(r.Z.Item,{label:e("Territorial scope")},React.createElement(x.Z,{mode:"multiple",disabled:!0,value:null!=a&&a.territorialScope?[...a.territorialScope]:[]},Object.keys(t).map((e=>React.createElement(x.Z.Option,{value:e,key:e},t[e])))),React.createElement("p",{className:"description"},e("The EU/EEA/EFTA/UK jurisdictions where the vendor operates in the context of its TCF registration. Note that this is different from the place of establishment.")),React.createElement(Z.Z,{checked:null==a?void 0:a.internationalTransfers,disabled:!0}),React.createElement("span",null,"  ",e("This vendor transfers data outside EU/EEA"))),(null==a?void 0:a.internationalTransfers)&&React.createElement(r.Z.Item,{label:e("Transfer mechanism")},React.createElement(x.Z,{mode:"multiple",disabled:!0,value:null!=a&&a.transferMechanisms?[...a.transferMechanisms]:[]},React.createElement(x.Z.Option,{value:"Adequacy decision"},e("Adequacy decision")),React.createElement(x.Z.Option,{value:"SCCs"},e("Standard contractual clauses")),React.createElement(x.Z.Option,{value:"BCRs"},e("Binding corporate rules")),React.createElement(x.Z.Option,{value:"Other"},e("Other")))))},T=()=>{const{__:e}=(0,v.Q)(),{iso3166OneAlpha2:t}=E();return React.createElement(r.Z.Item,{label:e("Data processing in countries")},React.createElement(r.Z.Item,{name:"dataProcessingInCountries",noStyle:!0},React.createElement(x.Z,{mode:"multiple",showSearch:!0,optionFilterProp:"children",maxTagCount:"responsive"},Object.keys(t).map((e=>React.createElement(x.Z.Option,{value:e,key:e},t[e]))))),React.createElement("p",{className:"description"},e("Data is usually processed in the countries where the vendor has its headquarter or servers. You should check with your service provider where your users' data is processed.")))};var O=a(38704),_=a(25114);const N=()=>{const{__:e,_i:t}=(0,v.Q)(),{iso3166OneAlpha2:a,dataProcessingInUnsafeCountriesSafeCountries:n,territorialLegalBasis:o}=E(),{bySelectedCountries:i}=(0,_.Y)({__:e,_i:t});return React.createElement(r.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>JSON.stringify(e.dataProcessingInCountries)!==JSON.stringify(t.dataProcessingInCountries)},(s=>{let{getFieldValue:l}=s;const c=l("dataProcessingInCountries"),{specialTreatmentOptions:d,unsafeCountries:u}=i(c,n);return React.createElement(r.Z.Item,{label:e("Special treatment for unsafe countries"),style:{display:0===d.length?"none":void 0}},React.createElement("p",{className:"description",style:{margin:"0px 0px 10px 0px"}},t(e("You have selected countries which are considered as unsafe (%s). If you activate one of this special treatment options, you do not ask for consent according to {{a}}Art. 49 GDPR{{/a}}, if this kind of consent is activated at all in the settings.",u.map((e=>a[e])).join(", ")),{a:React.createElement("a",{href:e("https://gdpr-info.eu/art-49-gdpr/"),rel:"noreferrer",target:"_blank"})})," ",o.indexOf("dsg-switzerland")>-1&&React.createElement("strong",null,e("Please note that standard contractual clauses do not exist in Switzerland and the Trans-Atlantic Data Privacy Framework is not set into force. Therefore, you should leave the following checkboxes empty when addressing Swiss website visitors."))),React.createElement(r.Z.Item,{name:"dataProcessingInCountriesSpecialTreatments",noStyle:!0},React.createElement(O.Z.Group,{options:d})))}))},F=6,D=()=>{const{__:e}=(0,v.Q)();return React.createElement(React.Fragment,null,React.createElement(y.C,{offset:F},e("General vendor configuration")),React.createElement(k,null),React.createElement(S,null),React.createElement(I,null),React.createElement(w,null),React.createElement(P,null),React.createElement(T,null),React.createElement(N,null))};var A=a(31643),V=a(39049),B=a(20146),L=a(15976);var j=a(32188);const{Column:Q}=L.Z,$={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},q=250,J=()=>{const{__:e,_i:t,_n:a}=(0,v.Q)(),{vendor:n,declarations:{purposes:i,specialPurposes:s}}=E(),{dataRetention:c}=n,d=(0,l.useMemo)((()=>Object.values(i).map((e=>n.purposes.indexOf(e.id)>-1||n.legIntPurposes.indexOf(e.id)>-1?{purpose:e,type:"normal"}:void 0)).concat(Object.values(s).map((e=>n.specialPurposes.indexOf(e.id)>-1?{purpose:e,type:"special"}:void 0))).filter(Boolean)),[n,i,s]);return React.createElement(React.Fragment,null,React.createElement(y.C,{offset:F,description:t(e('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:React.createElement("strong",null),aGdpr:React.createElement("a",{href:e("https://gdpr-text.com/read/article-6/"),target:"_blank",rel:"noreferrer"})})},e("Purposes and special purposes")),React.createElement(L.Z,{dataSource:d,rowKey:e=>{let{purpose:{id:t},type:a}=e;return`${a}${t}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25}},React.createElement(Q,{width:q,title:e("Name"),dataIndex:"name",key:"name",render:(e,t)=>{let{purpose:{name:a}}=t;return a}}),React.createElement(Q,{title:e("Enabled"),dataIndex:"enabled",key:"enabled",render:(e,t)=>{let{purpose:{id:a},type:n}=t;return React.createElement(r.Z.Item,(0,o.Z)({},$,{name:"special"===n?void 0:["restrictivePurposes",n,a.toString(),"enabled"],valuePropName:"checked"}),React.createElement(Z.Z,{size:"small",disabled:"normal"!==n,defaultChecked:"special"===n||void 0}))}}),React.createElement(Q,{title:e("Legal basis"),dataIndex:"name",key:"name",render:(t,a)=>{let{purpose:{id:i},type:s}=a;return React.createElement(r.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>{var a,n;return(null===(a=e.restrictivePurposes[s])||void 0===a?void 0:a[i].enabled)!==(null===(n=t.restrictivePurposes[s])||void 0===n?void 0:n[i].enabled)}},(t=>{let{getFieldValue:a}=t;return React.createElement(r.Z.Item,(0,o.Z)({},$,{name:"special"===s?void 0:["restrictivePurposes",s,i.toString(),"legInt"]}),React.createElement(x.Z,{size:"small",disabled:-1===n.flexiblePurposes.indexOf(i)||!a(["restrictivePurposes",s,i.toString(),"enabled"]),defaultValue:"special"===s?"no":void 0},React.createElement(x.Z.Option,{value:"yes"},e("Legitimate interest")),React.createElement(x.Z.Option,{value:"no"},e("Consent"))))}))}}),React.createElement(Q,{title:e("Description"),dataIndex:"description",key:"description",render:(t,a)=>{let{purpose:{description:n,illustrations:r},type:o}=a;return React.createElement(V.Z,{title:r.length>0&&React.createElement("div",null,React.createElement("strong",null,e("Illustrations"),": "),React.createElement("ul",null,r.map((e=>React.createElement("li",{key:e},e))))),placement:"bottomLeft",overlayInnerStyle:{width:500}},React.createElement(j.Z,{style:{cursor:"pointer",opacity:.5}})," ",n," ","special"===o&&React.createElement(A.Z,{color:"warning"},e("Special purpose")))}}),React.createElement(Q,{title:e("Data retention period"),dataIndex:"dataRetention",key:"dataRetention",render:(t,n)=>{let{purpose:{id:r},type:o}=n;const i=function(e,t,a){return e?e[a?"specialPurposes":"purposes"][`${t}`]||e.stdRetention:void 0}(c,r,"special"===o);return i?a("%d day","%d days",i,i):e("Not defined")}})))};var z=a(6470),M=function(e){return e.Cookie="cookie",e.Web="web",e.App="app",e}(M||{});const{Column:G}=L.Z,U=()=>{const{__:e,_i:t,_n:a}=(0,v.Q)(),{vendor:{usesCookies:n,usesNonCookieAccess:r,cookieMaxAgeSeconds:o,cookieRefresh:i,deviceStorageDisclosureUrl:s,deviceStorageDisclosureViolation:c,deviceStorageDisclosure:d},declarations:{purposes:u}}=E(),m=(0,l.useMemo)((()=>{const e=null!=d&&d.disclosures.length?[...d.disclosures]:[];return r&&e.unshift({type:M.Web,identifier:"*",purposes:void 0,cookieRefresh:void 0,domain:"*",maxAgeSeconds:null}),n&&e.unshift({type:M.Cookie,identifier:"*",purposes:void 0,cookieRefresh:i,domain:"*",maxAgeSeconds:o}),e}),[r,n,o,i,d]);return React.createElement(React.Fragment,null,React.createElement(y.C,{offset:F,description:t(e("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Art. 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:React.createElement("a",{href:e("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0136"),target:"_blank",rel:"noreferrer"})})},e("Device Storage Disclosure")," (",e("Technical cookie information"),")"),c?React.createElement("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"}},React.createElement("p",null,t(e('TCF vendors must disclose their cookies, among other things, in accordance with the {{a}}"Vendor Device Storage & Operational Disclosures"{{/a}} specification. However, this vendor fails to comply with the specification, so that the mandatory information for obtaining informed consent as defined by the GDPR cannot be read. You as a website operator can therefore not obtain valid consent for this vendor.'),{a:React.createElement("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/7c79f48b033f783d98da922152430657097f5ab2/TCFv2/Vendor%20Device%20Storage%20&%20Operational%20Disclosures.md",target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,t(e("You can find the vendor's faulty device storage disclosure at {{a}}%s{{/a}}. Please contact the vendor and ask for a standard compliant device disclosures!",s),{a:React.createElement("a",{href:s,target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,React.createElement("strong",null,e("Problem:"))," ",e("no-disclosures"===c?"The vendor does not provide any disclosures.":"disclosure-no-domains"===c?"The vendor does not specify for one or multiple cookies for which domains they are valid.":"disclosure-no-purposes"===c?"The vendor does not specify the purpose for one or multiple cookies.":"disclosure-no-cookie-refresh"===c?"The vendor does not specify for one or multiple cookies if the cookie does refresh.":"disclosure-no-max-age-seconds"===c?"The vendor does not specify the age in seconds for one or multiple cookies.":"The vendor provides a technically non-machine-readable variant of the data, which differs significantly from the defined standard."))):React.createElement(L.Z,{locale:{emptyText:React.createElement(B.Z,{description:e("This vendor does not provide any device storage disclosure.")})},dataSource:m,pagination:{pageSize:15,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},rowKey:e=>{let{identifier:t,type:a}=e;return`${a}${t}`},size:"small",bordered:!0},React.createElement(G,{width:q,title:e("Cookie type"),dataIndex:"cookieType",key:"cookieType",render:(e,t)=>{let{type:a}=t;return function(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}(a)}}),React.createElement(G,{title:e("Identifier"),dataIndex:"identifier",key:"identifier",render:(t,a)=>{let{identifier:n}=a;return n?React.createElement("code",null,n):e("Not defined")}}),React.createElement(G,{title:e("Domain"),dataIndex:"domain",key:"domain",render:(t,a)=>{let{domains:n,domain:r}=a;return n?React.createElement("code",null,n.join(",")):r?React.createElement("code",null,r):e("Not defined")}}),React.createElement(G,{title:e("Duration"),dataIndex:"duration",key:"duration",render:(t,a)=>{let{maxAgeSeconds:n,cookieRefresh:r}=a;return null!==n?React.createElement(React.Fragment,null,n<=0?React.createElement(V.Z,{title:e("This cookie is active as long as the session is active")},React.createElement("span",null,e("Session"))):React.createElement("span",null,n," ",e("second(s)")),r&&React.createElement(A.Z,{icon:React.createElement(z.Z,null),style:{marginLeft:10}},e("Refresh"))):e("Not defined")}}),React.createElement(G,{title:e("Purposes"),dataIndex:"purposes",key:"purposes",render:(t,n)=>{let{purposes:r}=n;return r?r.length?React.createElement(V.Z,{title:React.createElement("ul",{style:{margin:0,padding:0}},r.map((e=>React.createElement("li",{key:e},u[e].name))))},a("%d purpose","%d purposes",r.length,r.length)):e("None"):e("Unknown")}})))},{Column:Y}=L.Z,K=()=>{const{__:e}=(0,v.Q)(),{vendor:t,declarations:{features:a,specialFeatures:n}}=E(),r=(0,l.useMemo)((()=>Object.values(a).map((e=>t.features.indexOf(e.id)>-1?{feature:e,isSpecial:!1}:void 0)).concat(Object.values(n).map((e=>t.specialFeatures.indexOf(e.id)>-1?{feature:e,isSpecial:!0}:void 0))).filter(Boolean)),[t,a,n]);return React.createElement(React.Fragment,null,React.createElement(y.C,{offset:F,description:e("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes.")},e("Features and special features")),React.createElement(L.Z,{locale:{emptyText:React.createElement(B.Z,{description:e("This vendor has not listed any used features.")})},dataSource:r,rowKey:e=>{let{feature:{id:t},isSpecial:a}=e;return`${t}-${a}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25}},React.createElement(Y,{width:q,title:e("Name"),dataIndex:"name",key:"name",render:(e,t)=>{let{feature:{name:a}}=t;return a}}),React.createElement(Y,{title:e("Description"),dataIndex:"description",key:"description",render:(t,a)=>{let{feature:{description:n,illustrations:r},isSpecial:o}=a;return React.createElement(V.Z,{title:r.length>0&&React.createElement("div",null,React.createElement("strong",null,e("Illustrations"),": "),React.createElement("ul",null,r.map((e=>React.createElement("li",{key:e},e))))),placement:"bottomLeft",overlayInnerStyle:{width:500}},React.createElement(j.Z,{style:{cursor:"pointer",opacity:.5}})," ",n," ",o&&React.createElement(A.Z,{color:"warning"},e("Special feature")))}})))},{Column:W}=L.Z,H=()=>{const{__:e}=(0,v.Q)(),{vendor:t,declarations:{dataCategories:a}}=E(),n=(0,l.useMemo)((()=>Object.values(a).filter((e=>t.dataDeclaration.indexOf(e.id)>-1))),[t,a]);return React.createElement(React.Fragment,null,React.createElement(y.C,{offset:F,description:e("Data categories are specified by the vendor and are immutable. They describe the characteristics of which personal data is processed.")},e("Data categories")),React.createElement(L.Z,{locale:{emptyText:React.createElement(B.Z,{description:e("This vendor has not listed any data categories.")})},dataSource:n,rowKey:"id",size:"small",bordered:!0,pagination:!1},React.createElement(W,{width:q,title:e("Name"),dataIndex:"name",key:"name"}),React.createElement(W,{title:e("Description"),dataIndex:"description",key:"description"})))};var X=a(63736);const ee=()=>{const{__:e,_x:t}=(0,v.Q)(),{isEdit:a}=E();return!a&&React.createElement(r.Z.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the contents of the service.")}],wrapperCol:{offset:R.Or.labelCol.span}},React.createElement(O.Z,null,t("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.","legal-text")," ",React.createElement(X.r,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})))},te=()=>{const{__:e}=(0,v.Q)(),t=(0,l.useRef)();return React.createElement("div",{ref:t},React.createElement(D,null),React.createElement(U,null),React.createElement(J,null),React.createElement(K,null),React.createElement(H,null),React.createElement(r.Z.Item,{className:"rcb-form-sticky-submit",labelCol:{span:0},wrapperCol:{span:24}},React.createElement(ee,null),React.createElement(r.Z.Item,{wrapperCol:{offset:F}},React.createElement("div",{style:{textAlign:"center"}},React.createElement("input",{type:"submit",className:"button button-primary",value:e("Save")})))))};var ae=a(45567);const ne=(0,c.Pi)((e=>{let{vendor:t,navigateAfterCreation:a=!0,scrollToTop:c=!0,onCreated:E}=e;const{vendorConfiguration:y,id:b,queried:k,fetched:C,link:S}=(0,p.g)(),I=(0,m.useNavigate)(),{tcfStore:w,optionStore:{dataProcessingInUnsafeCountriesSafeCountriesResolvedLists:Z,territorialLegalBasis:x,others:{iso3166OneAlpha2:P}}}=(0,u.m)(),{vendorConfigurations:T,declarations:O}=w,[_,N]=(0,l.useState)(t),{prompt:F,form:D,isBusy:A,defaultValues:V,onFinish:B,onFinishFailed:L,onValuesChange:j,contextValue:Q}=function(e){const{__:t}=(0,v.Q)(),{attributes:a,template:n,vendor:r,declarations:o,isEdit:i}=e,s={status:"publish",restrictivePurposes:{normal:{}},dataProcessingInCountries:[],dataProcessingInCountriesSpecialTreatments:[],templateCheck:!1,...a||{}};if(r&&o)for(const e of[...r.legIntPurposes,...r.purposes].filter(Boolean))s.restrictivePurposes.normal[e.toString()]={enabled:!0,legInt:r.legIntPurposes.indexOf(e)>-1&&-1===r.specialPurposes.indexOf(e)?"yes":"no"};return{...(0,h.f)({...e,handleSave:async a=>{if(0===Object.values(a.restrictivePurposes.normal).filter((e=>{let{enabled:t}=e;return t})).length+r.specialPurposes.length)throw t("You need to enable at least one purpose!");await e.handleSave(a)},defaultValues:s,i18n:{successMessage:t("You have successfully saved the TCF vendor configuration."),validationError:t("The TCF vendor configuration could not be saved due to missing/invalid form values."),unloadConfirm:t("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:s,contextValue:{isEdit:i,vendor:r,declarations:o,defaultTemplateValues:n?s:{}}}}({isEdit:C,handleSave:async e=>{const{status:t,restrictivePurposes:n={normal:{}},dataProcessingInCountries:r,dataProcessingInCountriesSpecialTreatments:o,...i}=e;try{const e={...i,vendorId:_.data.id,restrictivePurposes:JSON.stringify(n),dataProcessingInCountries:JSON.stringify(r),dataProcessingInCountriesSpecialTreatments:JSON.stringify(o)};if(delete e.templateCheck,k)y.setStatus(t),y.setMeta(e),await y.patch();else{const a=new f.S(T,{status:t,meta:{...e}});await a.persist(),null==E||E(a)}a&&setTimeout((()=>I(S.slice(1))),0)}catch(e){throw s.ZP.error(e.responseJSON.message),e}},declarations:O,vendor:null==_?void 0:_.data}),$=C?{status:y.data.status,restrictivePurposes:JSON.parse(JSON.stringify(y.restrictivePurposes)),dataProcessingInCountries:JSON.parse(JSON.stringify(y.dataProcessingInCountries)),dataProcessingInCountriesSpecialTreatments:JSON.parse(JSON.stringify(y.dataProcessingInCountriesSpecialTreatments)),templateCheck:!0}:V;(0,l.useEffect)((()=>{y.vendorModel&&N(y.vendorModel)}),[y]),(0,l.useEffect)((()=>{k&&!C&&T.getSingle({params:{id:b,context:"edit"}})}),[k,C]),(0,l.useEffect)((()=>{c&&(0,d.X)(0)}),[]);const q=g.Context();return k&&!C||!_||!O?React.createElement(ae.f,{maxWidth:"fixed"},React.createElement(i.Z,{active:!0,paragraph:{rows:8}})):React.createElement(ae.f,{maxWidth:"fixed"},React.createElement(q.Provider,{value:{...Q,territorialLegalBasis:x,dataProcessingInUnsafeCountriesSafeCountries:[...Z],iso3166OneAlpha2:P}},React.createElement(n.Z,{spinning:A},F,React.createElement(r.Z,(0,o.Z)({name:`tcf-vendor-${b}`,form:D},R.Or,{initialValues:$,onFinish:B,onFinishFailed:L,onValuesChange:j,scrollToFirstError:{behavior:"smooth",block:"center"}}),React.createElement(te,null)))))}))},93404:(e,t,a)=>{a.d(t,{w:()=>s});var n=a(66711),r=a(49048),o=a(87363),i=a(61278);const s=()=>{const e=(0,n.useParams)(),{cookieStore:t}=(0,r.m)(),a=+e.blocker,s=isNaN(+a)?0:+a,l=!!a,c=t.blockers.entries.get(s)||new i.p(t.blockers,{id:0}),d=(0,o.useCallback)((e=>{let{key:t}=e;return`#/blocker/edit/${t}`}),[c]);return{blocker:c,id:s,queried:l,fetched:0!==c.key,link:"#/blocker",editLink:d,addLink:"#/blocker/new"}}},9520:(e,t,a)=>{a.d(t,{g:()=>s});var n=a(66711),r=a(49048),o=a(87363),i=a(87803);const s=()=>{const{tcfStore:e}=(0,r.m)(),t=+(0,n.useParams)().vendorConfiguration,a=isNaN(+t)?0:+t,s=!!t,l=e.vendorConfigurations.entries.get(a)||new i.S(e.vendorConfigurations,{id:0}),c=(0,o.useCallback)((e=>{let{key:t}=e;return`#/cookies/tcf-vendors/edit/${t}`}),[l]);return{vendorConfiguration:l,id:a,queried:s,fetched:0!==l.key,link:"#/cookies/tcf-vendors",editLink:c,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.2/b859f045776a6ae9cf4122eb7f3d2199/106.lite.js.map