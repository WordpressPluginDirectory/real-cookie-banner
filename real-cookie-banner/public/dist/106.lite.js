"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[106],{30702:(e,t,a)=>{a.r(t),a.d(t,{TcfVendorConfigurationForm:()=>re});var n=a(46270),r=a(87363),o=a(68038),i=a(26241),s=a(46766),l=a(9847),c=a(7432),d=a(61702),u=a(49048),m=a(66711),p=a(9520),f=a(87803),h=a(17085),v=a(60204),g=a(73186);const E=Symbol(),R=()=>(0,g._3)(E);var y=a(6880),b=a(36435),k=a(94684);const C=()=>{const{__:e}=(0,v.Q)(),{vendor:{id:t,name:a}}=R();return React.createElement(c.Z.Item,{label:e("Provider")},React.createElement(k.Z,{value:a,readOnly:!0,addonAfter:e("Vendor ID: %d",t)}))};var S=a(91272);const I=()=>{const{__:e}=(0,v.Q)();return React.createElement(c.Z.Item,{label:e("Status"),required:!0},React.createElement(c.Z.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose a status!")}]},React.createElement(S.ZP.Group,null,React.createElement(S.ZP.Button,{value:"publish"},e("Enabled")),React.createElement(S.ZP.Button,{value:"private"},e("Disabled")),React.createElement(S.ZP.Button,{value:"draft"},e("Draft")))),React.createElement("p",{className:"description"},e('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.')))},w=()=>{const{__:e}=(0,v.Q)(),{vendor:{additionalInformation:t}}=R();return React.createElement(c.Z.Item,{label:e("Legal address")},React.createElement(k.Z.TextArea,{value:(null==t?void 0:t.legalAddress.split(";").join("\n"))||"",readOnly:!0,autoSize:!0}))},Z=()=>{const{__:e}=(0,v.Q)(),{vendor:{urls:t}}=R(),{privacy:a,legIntClaim:n}=(null==t?void 0:t[0])||{langId:"",privacy:"",legIntClaim:""};return React.createElement(React.Fragment,null,React.createElement(c.Z.Item,{label:e("Privacy policy of the provider")},React.createElement(k.Z,{value:a,readOnly:!0})),React.createElement(c.Z.Item,{label:e("Explanation of the legitimate interest")},React.createElement(k.Z,{value:n,readOnly:!0})))};var P=a(79544),T=a(86275);const x=()=>{const{__:e}=(0,v.Q)(),{iso3166OneAlpha2:t,vendor:{additionalInformation:a}}=R();return React.createElement(React.Fragment,null,React.createElement(c.Z.Item,{label:e("Territorial scope")},React.createElement(P.Z,{mode:"multiple",disabled:!0,value:null!=a&&a.territorialScope?[...a.territorialScope]:[]},Object.keys(t).map((e=>React.createElement(P.Z.Option,{value:e,key:e},t[e])))),React.createElement("p",{className:"description"},e("The EU/EEA/EFTA/UK jurisdictions where the vendor operates in the context of its TCF registration. Note that this is different from the place of establishment.")),React.createElement(T.Z,{checked:null==a?void 0:a.internationalTransfers,disabled:!0}),React.createElement("span",null,"  ",e("This vendor transfers data outside EU/EEA"))),(null==a?void 0:a.internationalTransfers)&&React.createElement(c.Z.Item,{label:e("Transfer mechanism")},React.createElement(P.Z,{mode:"multiple",disabled:!0,value:null!=a&&a.transferMechanisms?[...a.transferMechanisms]:[]},React.createElement(P.Z.Option,{value:"Adequacy decision"},e("Adequacy decision")),React.createElement(P.Z.Option,{value:"SCCs"},e("Standard contractual clauses")),React.createElement(P.Z.Option,{value:"BCRs"},e("Binding corporate rules")),React.createElement(P.Z.Option,{value:"Other"},e("Other")))))},O=()=>{const{__:e}=(0,v.Q)(),{iso3166OneAlpha2:t}=R();return React.createElement(c.Z.Item,{label:e("Data processing in countries")},React.createElement(c.Z.Item,{name:"dataProcessingInCountries",noStyle:!0},React.createElement(P.Z,{mode:"multiple",showSearch:!0,optionFilterProp:"children",maxTagCount:"responsive"},Object.keys(t).map((e=>React.createElement(P.Z.Option,{value:e,key:e},t[e]))))),React.createElement("p",{className:"description"},e("Data is usually processed in the countries where the vendor has its headquarter or servers. You should check with your service provider where your users' data is processed.")))};var _=a(90621),N=a(25114);const F=()=>{const{__:e,_i:t}=(0,v.Q)(),{iso3166OneAlpha2:a,dataProcessingInUnsafeCountriesSafeCountries:n,territorialLegalBasis:r}=R(),{bySelectedCountries:o}=(0,N.Y)({__:e,_i:t});return React.createElement(c.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>JSON.stringify(e.dataProcessingInCountries)!==JSON.stringify(t.dataProcessingInCountries)},(i=>{let{getFieldValue:s}=i;const l=s("dataProcessingInCountries"),{specialTreatmentOptions:d,unsafeCountries:u}=o(l,n);return React.createElement(c.Z.Item,{label:e("Special treatment for unsafe countries"),style:{display:0===d.length?"none":void 0}},React.createElement("p",{className:"description",style:{margin:"0px 0px 10px 0px"}},t(e("You have selected countries which are considered as unsafe (%s). If you activate one of this special treatment options, you do not ask for consent according to {{a}}Art. 49 GDPR{{/a}}, if this kind of consent is activated at all in the settings.",u.map((e=>a[e])).join(", ")),{a:React.createElement("a",{href:e("https://gdpr-info.eu/art-49-gdpr/"),rel:"noreferrer",target:"_blank"})})," ",r.indexOf("dsg-switzerland")>-1&&React.createElement("strong",null,e("Please note that standard contractual clauses do not exist in Switzerland and the Trans-Atlantic Data Privacy Framework is not set into force. Therefore, you should leave the following checkboxes empty when addressing Swiss website visitors."))),React.createElement(c.Z.Item,{name:"dataProcessingInCountriesSpecialTreatments",noStyle:!0},React.createElement(_.Z.Group,{options:d})))}))},D=6,A=()=>{const{__:e}=(0,v.Q)();return React.createElement(React.Fragment,null,React.createElement(b.C,{offset:D},e("General vendor configuration")),React.createElement(C,null),React.createElement(I,null),React.createElement(w,null),React.createElement(Z,null),React.createElement(x,null),React.createElement(O,null),React.createElement(F,null))};var L=a(37563),V=a(30789),B=a(7585);var j=a(5721);const{Column:Q}=L.Z,$={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},q=250,J=()=>{const{__:e,_i:t,_n:a}=(0,v.Q)(),{vendor:o,declarations:{purposes:i,specialPurposes:s}}=R(),{dataRetention:l}=o,d=(0,r.useMemo)((()=>Object.values(i).map((e=>o.purposes.indexOf(e.id)>-1||o.legIntPurposes.indexOf(e.id)>-1?{purpose:e,type:"normal"}:void 0)).concat(Object.values(s).map((e=>o.specialPurposes.indexOf(e.id)>-1?{purpose:e,type:"special"}:void 0))).filter(Boolean)),[o,i,s]);return React.createElement(React.Fragment,null,React.createElement(b.C,{offset:D,description:t(e('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:React.createElement("strong",null),aGdpr:React.createElement("a",{href:e("https://gdpr-text.com/read/article-6/"),target:"_blank",rel:"noreferrer"})})},e("Purposes and special purposes")),React.createElement(L.Z,{dataSource:d,rowKey:e=>{let{purpose:{id:t},type:a}=e;return`${a}${t}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25}},React.createElement(Q,{width:q,title:e("Name"),dataIndex:"name",key:"name",render:(e,t)=>{let{purpose:{name:a}}=t;return a}}),React.createElement(Q,{title:e("Enabled"),dataIndex:"enabled",key:"enabled",render:(e,t)=>{let{purpose:{id:a},type:r}=t;return React.createElement(c.Z.Item,(0,n.Z)({},$,{name:"special"===r?void 0:["restrictivePurposes",r,a.toString(),"enabled"],valuePropName:"checked"}),React.createElement(T.Z,{size:"small",disabled:"normal"!==r,defaultChecked:"special"===r||void 0}))}}),React.createElement(Q,{title:e("Legal basis"),dataIndex:"name",key:"name",render:(t,a)=>{let{purpose:{id:r},type:i}=a;return React.createElement(c.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>{var a,n;return(null===(a=e.restrictivePurposes[i])||void 0===a?void 0:a[r].enabled)!==(null===(n=t.restrictivePurposes[i])||void 0===n?void 0:n[r].enabled)}},(t=>{let{getFieldValue:a}=t;return React.createElement(c.Z.Item,(0,n.Z)({},$,{name:"special"===i?void 0:["restrictivePurposes",i,r.toString(),"legInt"]}),React.createElement(P.Z,{size:"small",disabled:-1===o.flexiblePurposes.indexOf(r)||!a(["restrictivePurposes",i,r.toString(),"enabled"]),defaultValue:"special"===i?"no":void 0},React.createElement(P.Z.Option,{value:"yes"},e("Legitimate interest")),React.createElement(P.Z.Option,{value:"no"},e("Consent"))))}))}}),React.createElement(Q,{title:e("Description"),dataIndex:"description",key:"description",render:(t,a)=>{let{purpose:{description:n,illustrations:r},type:o}=a;return React.createElement(V.Z,{title:r.length>0&&React.createElement("div",null,React.createElement("strong",null,e("Illustrations"),": "),React.createElement("ul",null,r.map((e=>React.createElement("li",{key:e},e))))),placement:"bottomLeft",overlayInnerStyle:{width:500}},React.createElement(j.Z,{style:{cursor:"pointer",opacity:.5}})," ",n," ","special"===o&&React.createElement(B.Z,{color:"warning"},e("Special purpose")))}}),React.createElement(Q,{title:e("Data retention period"),dataIndex:"dataRetention",key:"dataRetention",render:(t,n)=>{let{purpose:{id:r},type:o}=n;const i=function(e,t,a){return e?e[a?"specialPurposes":"purposes"][`${t}`]||e.stdRetention:void 0}(l,r,"special"===o);return i?a("%d day","%d days",i,i):e("Not defined")}})))};var z=a(86485),M=a(18511),G=function(e){return e.Cookie="cookie",e.Web="web",e.App="app",e}(G||{});const{Column:U}=L.Z,Y=()=>{const{__:e,_i:t,_n:a}=(0,v.Q)(),{vendor:{usesCookies:n,usesNonCookieAccess:o,cookieMaxAgeSeconds:i,cookieRefresh:s,deviceStorageDisclosureUrl:l,deviceStorageDisclosureViolation:c,deviceStorageDisclosure:d},declarations:{purposes:u}}=R(),m=(0,r.useMemo)((()=>{const e=null!=d&&d.disclosures.length?[...d.disclosures]:[];return o&&e.unshift({type:G.Web,identifier:"*",purposes:void 0,cookieRefresh:void 0,domain:"*",maxAgeSeconds:null}),n&&e.unshift({type:G.Cookie,identifier:"*",purposes:void 0,cookieRefresh:s,domain:"*",maxAgeSeconds:i}),e}),[o,n,i,s,d]);return React.createElement(React.Fragment,null,React.createElement(b.C,{offset:D,description:t(e("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Art. 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:React.createElement("a",{href:e("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0136"),target:"_blank",rel:"noreferrer"})})},e("Device Storage Disclosure")," (",e("Technical cookie information"),")"),c?React.createElement("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"}},React.createElement("p",null,t(e('TCF vendors must disclose their cookies, among other things, in accordance with the {{a}}"Vendor Device Storage & Operational Disclosures"{{/a}} specification. However, this vendor fails to comply with the specification, so that the mandatory information for obtaining informed consent as defined by the GDPR cannot be read. You as a website operator can therefore not obtain valid consent for this vendor.'),{a:React.createElement("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/7c79f48b033f783d98da922152430657097f5ab2/TCFv2/Vendor%20Device%20Storage%20&%20Operational%20Disclosures.md",target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,t(e("You can find the vendor's faulty device storage disclosure at {{a}}%s{{/a}}. Please contact the vendor and ask for a standard compliant device disclosures!",l),{a:React.createElement("a",{href:l,target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,React.createElement("strong",null,e("Problem:"))," ",e("no-disclosures"===c?"The vendor does not provide any disclosures.":"disclosure-no-domains"===c?"The vendor does not specify for one or multiple cookies for which domains they are valid.":"disclosure-no-purposes"===c?"The vendor does not specify the purpose for one or multiple cookies.":"disclosure-no-cookie-refresh"===c?"The vendor does not specify for one or multiple cookies if the cookie does refresh.":"disclosure-no-max-age-seconds"===c?"The vendor does not specify the age in seconds for one or multiple cookies.":"The vendor provides a technically non-machine-readable variant of the data, which differs significantly from the defined standard."))):React.createElement(L.Z,{locale:{emptyText:React.createElement(z.Z,{description:e("This vendor does not provide any device storage disclosure.")})},dataSource:m,pagination:{pageSize:15,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},rowKey:e=>{let{identifier:t,type:a}=e;return`${a}${t}`},size:"small",bordered:!0},React.createElement(U,{width:q,title:e("Cookie type"),dataIndex:"cookieType",key:"cookieType",render:(e,t)=>{let{type:a}=t;return function(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}(a)}}),React.createElement(U,{title:e("Identifier"),dataIndex:"identifier",key:"identifier",render:(t,a)=>{let{identifier:n}=a;return n?React.createElement("code",null,n):e("Not defined")}}),React.createElement(U,{title:e("Domain"),dataIndex:"domain",key:"domain",render:(t,a)=>{let{domains:n,domain:r}=a;return n?React.createElement("code",null,n.join(",")):r?React.createElement("code",null,r):e("Not defined")}}),React.createElement(U,{title:e("Duration"),dataIndex:"duration",key:"duration",render:(t,a)=>{let{maxAgeSeconds:n,cookieRefresh:r}=a;return null!==n?React.createElement(React.Fragment,null,n<=0?React.createElement(V.Z,{title:e("This cookie is active as long as the session is active")},React.createElement("span",null,e("Session"))):React.createElement("span",null,n," ",e("second(s)")),r&&React.createElement(B.Z,{icon:React.createElement(M.Z,null),style:{marginLeft:10}},e("Refresh"))):e("Not defined")}}),React.createElement(U,{title:e("Purposes"),dataIndex:"purposes",key:"purposes",render:(t,n)=>{let{purposes:r}=n;return r?r.length?React.createElement(V.Z,{title:React.createElement("ul",{style:{margin:0,padding:0}},r.map((e=>React.createElement("li",{key:e},u[e].name))))},a("%d purpose","%d purposes",r.length,r.length)):e("None"):e("Unknown")}})))},{Column:K}=L.Z,W=()=>{const{__:e}=(0,v.Q)(),{vendor:t,declarations:{features:a,specialFeatures:n}}=R(),o=(0,r.useMemo)((()=>Object.values(a).map((e=>t.features.indexOf(e.id)>-1?{feature:e,isSpecial:!1}:void 0)).concat(Object.values(n).map((e=>t.specialFeatures.indexOf(e.id)>-1?{feature:e,isSpecial:!0}:void 0))).filter(Boolean)),[t,a,n]);return React.createElement(React.Fragment,null,React.createElement(b.C,{offset:D,description:e("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes.")},e("Features and special features")),React.createElement(L.Z,{locale:{emptyText:React.createElement(z.Z,{description:e("This vendor has not listed any used features.")})},dataSource:o,rowKey:e=>{let{feature:{id:t},isSpecial:a}=e;return`${t}-${a}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25}},React.createElement(K,{width:q,title:e("Name"),dataIndex:"name",key:"name",render:(e,t)=>{let{feature:{name:a}}=t;return a}}),React.createElement(K,{title:e("Description"),dataIndex:"description",key:"description",render:(t,a)=>{let{feature:{description:n,illustrations:r},isSpecial:o}=a;return React.createElement(V.Z,{title:r.length>0&&React.createElement("div",null,React.createElement("strong",null,e("Illustrations"),": "),React.createElement("ul",null,r.map((e=>React.createElement("li",{key:e},e))))),placement:"bottomLeft",overlayInnerStyle:{width:500}},React.createElement(j.Z,{style:{cursor:"pointer",opacity:.5}})," ",n," ",o&&React.createElement(B.Z,{color:"warning"},e("Special feature")))}})))},{Column:H}=L.Z,X=()=>{const{__:e}=(0,v.Q)(),{vendor:t,declarations:{dataCategories:a}}=R(),n=(0,r.useMemo)((()=>Object.values(a).filter((e=>t.dataDeclaration.indexOf(e.id)>-1))),[t,a]);return React.createElement(React.Fragment,null,React.createElement(b.C,{offset:D,description:e("Data categories are specified by the vendor and are immutable. They describe the characteristics of which personal data is processed.")},e("Data categories")),React.createElement(L.Z,{locale:{emptyText:React.createElement(z.Z,{description:e("This vendor has not listed any data categories.")})},dataSource:n,rowKey:"id",size:"small",bordered:!0,pagination:!1},React.createElement(H,{width:q,title:e("Name"),dataIndex:"name",key:"name"}),React.createElement(H,{title:e("Description"),dataIndex:"description",key:"description"})))};var ee=a(63736);const te=()=>{const{__:e,_x:t}=(0,v.Q)(),{isEdit:a}=R();return!a&&React.createElement(c.Z.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the contents of the service.")}],wrapperCol:{offset:y.Or.labelCol.span}},React.createElement(_.Z,null,t("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.","legal-text")," ",React.createElement(ee.r,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})))},ae=()=>{const{__:e}=(0,v.Q)(),t=(0,r.useRef)();return React.createElement("div",{ref:t},React.createElement(A,null),React.createElement(Y,null),React.createElement(J,null),React.createElement(W,null),React.createElement(X,null),React.createElement(c.Z.Item,{className:"rcb-antd-form-sticky-submit",labelCol:{span:0},wrapperCol:{span:24}},React.createElement(te,null),React.createElement(c.Z.Item,{wrapperCol:{offset:D}},React.createElement("div",{style:{textAlign:"center"}},React.createElement("input",{type:"submit",className:"button button-primary",value:e("Save")})))))};var ne=a(45567);const re=(0,o.Pi)((e=>{let{vendor:t,navigateAfterCreation:a=!0,scrollToTop:o=!0,onCreated:R}=e;const{message:b}=i.Z.useApp(),{vendorConfiguration:k,id:C,queried:S,fetched:I,link:w}=(0,p.g)(),Z=(0,m.useNavigate)(),{tcfStore:P,optionStore:{dataProcessingInUnsafeCountriesSafeCountriesResolvedLists:T,territorialLegalBasis:x,others:{iso3166OneAlpha2:O}}}=(0,u.m)(),{vendorConfigurations:_,declarations:N}=P,[F,D]=(0,r.useState)(t),{prompt:A,form:L,isBusy:V,defaultValues:B,onFinish:j,onFinishFailed:Q,onValuesChange:$,contextValue:q}=function(e){const{__:t}=(0,v.Q)(),{attributes:a,template:n,vendor:r,declarations:o,isEdit:i}=e,s={status:"publish",restrictivePurposes:{normal:{}},dataProcessingInCountries:[],dataProcessingInCountriesSpecialTreatments:[],templateCheck:!1,...a||{}};if(r&&o)for(const e of[...r.legIntPurposes,...r.purposes].filter(Boolean))s.restrictivePurposes.normal[e.toString()]={enabled:!0,legInt:r.legIntPurposes.indexOf(e)>-1&&-1===r.specialPurposes.indexOf(e)?"yes":"no"};return{...(0,h.f)({...e,handleSave:async a=>{if(0===Object.values(a.restrictivePurposes.normal).filter((e=>{let{enabled:t}=e;return t})).length+r.specialPurposes.length)throw t("You need to enable at least one purpose!");await e.handleSave(a)},defaultValues:s,i18n:{successMessage:t("You have successfully saved the TCF vendor configuration."),validationError:t("The TCF vendor configuration could not be saved due to missing/invalid form values."),unloadConfirm:t("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:s,contextValue:{isEdit:i,vendor:r,declarations:o,defaultTemplateValues:n?s:{}}}}({isEdit:I,handleSave:async e=>{const{status:t,restrictivePurposes:n={normal:{}},dataProcessingInCountries:r,dataProcessingInCountriesSpecialTreatments:o,...i}=e;try{const e={...i,vendorId:F.data.id,restrictivePurposes:JSON.stringify(n),dataProcessingInCountries:JSON.stringify(r),dataProcessingInCountriesSpecialTreatments:JSON.stringify(o)};if(delete e.templateCheck,S)k.setStatus(t),k.setMeta(e),await k.patch();else{const a=new f.S(_,{status:t,meta:{...e}});await a.persist(),null==R||R(a)}a&&setTimeout((()=>Z(w.slice(1))),0)}catch(e){throw b.error(e.responseJSON.message),e}},declarations:N,vendor:null==F?void 0:F.data}),J=I?{status:k.data.status,restrictivePurposes:JSON.parse(JSON.stringify(k.restrictivePurposes)),dataProcessingInCountries:JSON.parse(JSON.stringify(k.dataProcessingInCountries)),dataProcessingInCountriesSpecialTreatments:JSON.parse(JSON.stringify(k.dataProcessingInCountriesSpecialTreatments)),templateCheck:!0}:B;(0,r.useEffect)((()=>{k.vendorModel&&D(k.vendorModel)}),[k]),(0,r.useEffect)((()=>{S&&!I&&_.getSingle({params:{id:C,context:"edit"}})}),[S,I]),(0,r.useEffect)((()=>{o&&(0,d.X)(0)}),[]);const z=S&&!I||!F||!N,[M,G]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,g.LN)(E,...t)}({...q,territorialLegalBasis:x,dataProcessingInUnsafeCountriesSafeCountries:[...T],iso3166OneAlpha2:O},{},{inherit:["vendor"],deps:[z]});return z?React.createElement(ne.f,{maxWidth:"fixed"},React.createElement(s.Z,{active:!0,paragraph:{rows:8}})):React.createElement(ne.f,{maxWidth:"fixed"},React.createElement(M,{value:G},React.createElement(l.Z,{spinning:V},A,React.createElement(c.Z,(0,n.Z)({name:`tcf-vendor-${C}`,form:L},y.Or,{initialValues:J,onFinish:j,onFinishFailed:Q,onValuesChange:$,scrollToFirstError:{behavior:"smooth",block:"center"},labelWrap:!0}),React.createElement(ae,null)))))}))},93404:(e,t,a)=>{a.d(t,{w:()=>s});var n=a(66711),r=a(49048),o=a(87363),i=a(61278);const s=()=>{const e=(0,n.useParams)(),{cookieStore:t}=(0,r.m)(),a=+e.blocker,s=isNaN(+a)?0:+a,l=!!a,c=t.blockers.entries.get(s)||new i.p(t.blockers,{id:0}),d=(0,o.useCallback)((e=>{let{key:t}=e;return`#/blocker/edit/${t}`}),[c]);return{blocker:c,id:s,queried:l,fetched:0!==c.key,link:"#/blocker",editLink:d,addLink:"#/blocker/new"}}},9520:(e,t,a)=>{a.d(t,{g:()=>s});var n=a(66711),r=a(49048),o=a(87363),i=a(87803);const s=()=>{const{tcfStore:e}=(0,r.m)(),t=+(0,n.useParams)().vendorConfiguration,a=isNaN(+t)?0:+t,s=!!t,l=e.vendorConfigurations.entries.get(a)||new i.S(e.vendorConfigurations,{id:0}),c=(0,o.useCallback)((e=>{let{key:t}=e;return`#/cookies/tcf-vendors/edit/${t}`}),[l]);return{vendorConfiguration:l,id:a,queried:s,fetched:0!==l.key,link:"#/cookies/tcf-vendors",editLink:c,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.9/db4cce3a48d01c56bae09ce630e7ea88/106.lite.js.map
