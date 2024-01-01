(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[379],{78964:(e,t,a)=>{"use strict";function n(e){return!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}a.d(t,{C:()=>n})},23483:(e,t,a)=>{"use strict";a.d(t,{M:()=>c});var n=a(71414),r=a(60204);function c(){const{__:e}=(0,r.Q)();return(0,n.T)({title:e("Want a better integrated visual content blocker for your website?"),testDrive:!0,feature:"visual-content-blocker",assetName:e("pro-modal/visual-content-blocker.webp"),description:e("Instead of a lot of text, you can offer your visitor a more pleasant way to view blocked content. For example, you can replace your video embeds with a privacy-compliant dummy player with thumbnail, or an embedded map with a preview map.")})}},44839:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=(0,a(68038).Pi)((()=>React.createElement("div",null)))},71006:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DashboardCards:()=>j});var n=a(77419),r=a(86459),c=a(70045),o=a(89059),l=a(87363),i=a(68038),s=a(40045),m=a(31643),d=a(24883),u=a(49048);const p="#/settings",f="#/cookies",g=(0,i.Pi)((()=>{const{optionStore:e,cookieStore:{groups:t}}=(0,u.m)(),{isTcf:a,isBannerActive:n,isBlockerActive:r,busySettings:o,cookieCounts:l,isOnlyRcbCookieCreated:i,tcfVendorConfigurationCounts:g}=e,h=n&&r;return React.createElement(c.Z,{spinning:t.busy||o},React.createElement("div",null,React.createElement(d.Z,{status:n?"success":"error",text:(0,s._i)(n?(0,s.__)("Cookie Banner is {{strong}}activated{{/strong}}"):(0,s.__)("Cookie Banner is {{strong}}deactivated{{/strong}}"),{strong:React.createElement("strong",null)})}),React.createElement("p",{className:"description"},(0,s._i)((0,s.__)("You can enable and disable the cookie banner in the {{a}}settings page{{/a}}."),{a:React.createElement("a",{href:p})}))),React.createElement("div",null,React.createElement(d.Z,{status:h?"success":"error",text:(0,s._i)(h?(0,s.__)("Content Blocker is {{strong}}activated{{/strong}}"):(0,s.__)("Content Blocker is {{strong}}deactivated{{/strong}}"),{strong:React.createElement("strong",null)})}),React.createElement("p",{className:"description"},(0,s._i)((0,s.__)("You can enable and disable the content blocker in the {{a}}settings page{{/a}}."),{a:React.createElement("a",{href:p})}))),React.createElement("p",null,(0,s.__)("Available service groups:")," ",t.sortedGroups.map((e=>{let{data:{name:t,id:a}}=e;return React.createElement(m.Z,{key:a},t)})),"• ",React.createElement("a",{href:f},(0,s.__)("Manage"))),React.createElement("p",null,(0,s._i)((0,s.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft services.",i?0:l.publish,i?0:l.private,i?0:l.draft),{strong:React.createElement("strong",null)}),"  •  ",React.createElement("a",{href:f},(0,s.__)("Manage"))),a&&g&&React.createElement("p",null,(0,s._i)((0,s.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft TCF vendors.",g.publish,g.draft,g.private),{strong:React.createElement("strong",null)}),"  •  ",React.createElement("a",{href:"#/cookies/tcf-vendors"},(0,s.__)("Manage"))))}));var h=a(70688),y=a(98320),_=a(2132),v=a(10022),b=a(84785),E=a(55327),R=a(30225),k=a(78964),w=(a(10490),a(71414));var C=a(23483);const x=(0,i.Pi)((()=>{const[e,t]=(0,l.useState)(!1),{optionStore:{dashboardMigration:{id:a,description:n,actions:r},others:{isPro:o}}}=(0,u.m)(),[i,m]=(0,l.useState)({}),[d,p]=(0,l.useState)([]),f=(0,w.T)({title:(0,s.__)("Want to optimize the cookie banner for mobile users?"),testDrive:!0,feature:"mobile-experience",assetName:(0,s.__)("pro-modal/mobile-optimization.png"),description:(0,s.__)("Cookie banners are a necessary evil that takes up a lot of space, especially on smartphones. With mobile optimization you can customize the cookie banner so that it is more discreet and at the same time easy to read on smartphones.")}),g=(0,C.M)(),x=(0,l.useCallback)((async e=>{let{id:n,callback:r}=e;if("string"==typeof r&&(0,k.C)(r))window.location.href=r;else{t(!0);try{const{success:e,redirect:r,message:c,overrideAction:o}=await(0,b.W)({location:E.n,params:{migration:a,action:n}});e&&(r?window.location.href=r:(v.ZP.success(c||(0,s.__)("Successfully saved changes!")),o&&(m((e=>({...e,[n]:o}))),p((e=>[...e,n])))))}catch(e){}finally{t(!1)}}}),[]);return React.createElement(c.Z,{spinning:e},React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:n}}),React.createElement(h.ZP,{itemLayout:"vertical",size:"small",dataSource:Object.values(r),renderItem:e=>{const{id:t,title:a,description:n,linkText:r,linkClasses:c,linkDisabled:l,confirmText:m,previewImage:u,performed:p,performedLabel:v,needsPro:b,info:E}={...e,...i[e.id]||{},...d.indexOf(e.id)>-1?{performed:!0}:{}},k=React.createElement("button",{key:"apply-link",className:c,onClick:()=>!m&&x(e),disabled:l},r);return React.createElement(h.ZP.Item,{style:{paddingLeft:0,paddingRight:0},key:t,actions:[r&&(m?React.createElement(_.Z,{title:React.createElement("span",{dangerouslySetInnerHTML:{__html:m}}),placement:"bottomLeft",onConfirm:()=>x(e),cancelText:(0,s.__)("Cancel"),okText:r,overlayStyle:{maxWidth:450},transitionName:null},k):k),p&&(!b||o)&&React.createElement("span",{style:{verticalAlign:"middle"}},React.createElement(R.Z,null)," ",v||(0,s.__)("Already applied")),b&&!o&&(()=>{let e,a;switch(t){case"visual-content-blocker":e=g.modal,a=g.tag;break;case"mobile-experience":e=f.modal,a=f.tag;break;default:return null}return React.createElement(React.Fragment,null,e," ",React.createElement("span",{style:{position:"absolute",top:3}},a))})()].filter(Boolean)},React.createElement(h.ZP.Item.Meta,{title:a,description:React.createElement(React.Fragment,null,u&&React.createElement(y.Z,{width:272,src:u,wrapperStyle:{marginLeft:15,float:"right"}}),React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:n}}),!!E&&React.createElement("div",{className:"notice notice-info below-h2 notice-alt",style:{marginTop:10}},React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:E}})))}))}}))}));var S=a(81956);const Z=(0,i.Pi)((e=>{let{description:t,links:a,logo:n}=e;return React.createElement(React.Fragment,null,!!n&&React.createElement("img",{src:n,style:{maxWidth:"100%",maxHeight:"80px",display:"block",margin:"0 0 10px"}}),!!t&&React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:t}}),null==a?void 0:a.map((e=>{let{link:t,linkText:a}=e;return React.createElement("a",{key:t,href:t,target:"_blank",rel:"noreferrer",className:"button",style:{marginTop:13,marginRight:10}},a)})))}));var N=a(39049),P=a(40985);const T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};var M=a(15548),L=function(e,t){return l.createElement(M.Z,(0,P.Z)((0,P.Z)({},e),{},{ref:t,icon:T}))};L.displayName="SyncOutlined";const O=l.forwardRef(L),F=(0,i.Pi)((()=>{const{cookieStore:e,optionStore:t}=(0,u.m)(),{busySettings:a,others:{isPro:n,isLicensed:r},cloudReleaseInfo:{blocker:c,service:o}}=t,[i,m]=(0,l.useState)(!1),d=(0,l.useCallback)((async()=>{if(!i){m(!0);try{await e.fetchTemplatesServices({storage:"redownload"}),await e.fetchTemplatesBlocker(),await t.fetchCurrentRevision(),v.ZP.success("Template database successfully updated. You can see the latest templates now!")}catch(e){v.ZP.error(e.responseJSON.message)}finally{m(!1)}}}),[i]);return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,s.__)("Templates for hundreds of services that you could be running on your website must be downloaded from Real Cookie Banner's Service Cloud. The data will be downloaded locally to your server, so your website visitors will not need to connect to the cloud.")),r?React.createElement(React.Fragment,null,c?React.createElement("p",{className:"description"},(0,s._i)((0,s.__)("You have downloaded the service templates the last time on {{u/}}"),{u:React.createElement(N.Z,{title:React.createElement(React.Fragment,null,React.createElement("strong",null,(0,s.__)("Services")),React.createElement("br",null),(0,s.__)("Release ID"),": ",null==o?void 0:o.releaseId,React.createElement("br",null),(0,s.__)("Pre-release"),":"," ",null!=o&&o.isPreReleaseEnabled?(0,s.__)("Yes"):(0,s.__)("No"),React.createElement("br",null),React.createElement("strong",null,(0,s.__)("Content Blocker")),React.createElement("br",null),(0,s.__)("Release ID"),": ",null==c?void 0:c.releaseId,React.createElement("br",null),(0,s.__)("Pre-release"),":"," ",null!=c&&c.isPreReleaseEnabled?(0,s.__)("Yes"):(0,s.__)("No"))},React.createElement("u",{style:{textDecoration:"none",borderBottom:"1px dotted #000",cursor:"help"}},new Date(c.downloadTime).toLocaleString(document.documentElement.lang)))})):a?null:React.createElement("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"}},React.createElement("p",{className:"description"},(0,s.__)('An error occurred when trying to download the templates from the Service Cloud for the first time. This means that the scanner will currently not be able to suggest scan results for service templates. The download will be performed again automatically in a few minutes, or click "Update templates" below.'))),React.createElement("p",null,React.createElement(N.Z,{title:(0,s.__)('The template database is downloaded to your WordPress and is updated daily. Click "Update templates" to download the latest version now!'),placement:"bottom"},React.createElement("a",{style:{textDecoration:"none",cursor:"pointer"},type:"button",className:"button "+(i?"button-disabled":""),onClick:d},React.createElement(O,{spin:i})," ",(0,s.__)("Update templates"))))):a?null:React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0"}},React.createElement("p",{className:"description"},(0,s.__)("This functionality is only available with a valid license, as the service templates must be downloaded regularly from our cloud service.")," ","•"," ",React.createElement("a",{href:`#/licensing?navigateAfterActivation=${encodeURIComponent(window.location.href)}`},n?(0,s.__)("Activate license"):(0,s.__)("Activate free license")))))})),Y=(0,i.Pi)((()=>{const{optionStore:{others:{cachePlugins:e}}}=(0,u.m)(),t=Object.values(e).join(", ");return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,s.__)("Real Cookie Banner can empty your page cache automatically as soon as a page cache is detected. This means that you do not have to manually clear your page cache if you make changes to the cookie banner via the customizer or if you ask for a new consent.")),t?React.createElement(d.Z,{status:"success",text:(0,s._i)((0,s.__)("We have detected {{strong}}%s{{/strong}} as your page cache.",t),{strong:React.createElement("strong",null)})}):React.createElement(d.Z,{status:"default",text:(0,s._i)((0,s.__)("We did {{strong}}not detect{{/strong}} any page cache on your site."),{strong:React.createElement("strong",null)})}))}));var I=a(44839),z=a(59958),D=a(15764);const j=(0,i.Pi)((()=>{const{statsStore:e,optionStore:t,cookieStore:a,checklistStore:i}=(0,u.m)(),{others:{isPro:m,assetsUrl:d,hints:{dashboardTile:p}},dashboardMigration:f}=t,{filters:{dates:h}}=e,[y,_]=(0,l.useState)();(0,l.useEffect)((()=>{a.groups.get(),t.fetchCurrentRevision()}),[]);const v=i.completed.length<3||f?.5:1,b=(0,l.useMemo)((()=>React.createElement(o.Z,{style:{margin:10,opacity:v},title:(0,s.__)("General"),className:"rcb-dashboard-card-focus"},React.createElement(g,null))),[v]),E=(0,l.useMemo)((()=>f?React.createElement(o.Z,{style:{margin:10},title:f.headline,extra:React.createElement("a",{href:"#",onClick:()=>t.dismissMigration()},(0,s.__)("Dismiss this info"))},React.createElement(x,null)):null),[f,t]),R=(0,l.useMemo)((()=>React.createElement(o.Z,{style:{margin:10,opacity:f?v:void 0},title:(0,s.__)("Set up the cookie banner"),extra:i.done?null:React.createElement("a",{href:"#",onClick:()=>i.toggleChecklistItem("all",!0)},(0,s.__)("I have already done all the steps"))},React.createElement(S.b,null))),[i.done,f]),k=(0,l.useMemo)((()=>p.map((e=>{let{title:t,...a}=e;return React.createElement(o.Z,{key:t,style:{margin:10,opacity:v},title:t,className:"rcb-dashboard-card-focus"},React.createElement(Z,a))}))),[p,v]);return 0===i.items.length?React.createElement(c.Z,{spinning:!0,style:{marginTop:15}}):React.createElement(c.Z,{spinning:i.busyChecklist,style:{marginTop:15}},React.createElement(n.Z,null,React.createElement(r.Z,{xl:16,sm:16,xs:24},E,i.done?b:R,React.createElement(o.Z,{style:{margin:10,opacity:v},className:"rcb-dashboard-card-focus",title:(0,s.__)("Statistics"),extra:React.createElement(React.Fragment,null,React.createElement("a",{href:"#/consent"},(0,s.__)("More statistics")),"  •  ",React.createElement(z.D,{value:h,disabled:!0}))},m?React.createElement(I.A,null):React.createElement(React.Fragment,null,React.createElement(D.n,{title:(0,s.__)("Want to see detailed statistics about the consents of your visitors?"),inContainer:!0,inContainerElement:y,testDrive:!0,feature:"dashboard-stats",description:(0,s.__)("You can get several statistics about how your users use the cookie banner. This helps you to calculate the total number of users who do not want to be tracked, for example, by extrapolating data from Google Analytics."),showHints:!1,showFomoCouponCounter:i.done}),React.createElement("div",{ref:_,className:"rcb-modal-mount",style:{height:600,backgroundImage:`url('${d}dashboard-statistics-blured.png')`}})))),React.createElement(r.Z,{xl:8,sm:8,xs:24},i.done?R:b,k,React.createElement(o.Z,{style:{margin:10,opacity:v},title:(0,s.__)("Service Cloud"),className:"rcb-dashboard-card-focus"},React.createElement(F,null)),React.createElement(o.Z,{style:{margin:10,opacity:v},title:(0,s.__)("Cache"),className:"rcb-dashboard-card-focus"},React.createElement(Y,null)))))}))},59958:(e,t,a)=>{"use strict";a.d(t,{D:()=>s});var n=a(46270),r=a(10639),c=a(40045),o=a(48488),l=a.n(o);const{RangePicker:i}=r.Z,s=e=>{const t=l().localeData();return React.createElement(i,(0,n.Z)({locale:{lang:{locale:l().locale(),placeholder:(0,c.__)("Select date"),rangePlaceholder:[(0,c.__)("Start date"),(0,c.__)("End date")],today:(0,c.__)("Today"),now:(0,c.__)("Now"),backToToday:(0,c.__)("Back to today"),ok:(0,c.__)("OK"),clear:(0,c.__)("Clear"),month:(0,c.__)("Month"),year:(0,c.__)("Year"),timeSelect:(0,c.__)("Select time"),dateSelect:(0,c.__)("Select date"),monthSelect:(0,c.__)("Choose a month"),yearSelect:(0,c.__)("Choose a year"),decadeSelect:(0,c.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,c.__)("Previous month (PageUp)"),nextMonth:(0,c.__)("Next month (PageDown)"),previousYear:(0,c.__)("Last year (Control + left)"),nextYear:(0,c.__)("Next year (Control + right)"),previousDecade:(0,c.__)("Last decade"),nextDecade:(0,c.__)("Next decade"),previousCentury:(0,c.__)("Last century"),nextCentury:(0,c.__)("Next century")},timePickerLocale:{placeholder:(0,c.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"}},e))}},60554:(e,t,a)=>{"use strict";function n(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function r(e){var t=e.getBoundingClientRect(),a=document.documentElement;return{left:t.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||a.scrollTop)-(a.clientTop||document.body.clientTop||0)}}a.d(t,{g1:()=>n,os:()=>r})},39865:e=>{e.exports=function(e,t,a,n){var r=a?a.call(n,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var c=Object.keys(e),o=Object.keys(t);if(c.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),i=0;i<c.length;i++){var s=c[i];if(!l(s))return!1;var m=e[s],d=t[s];if(!1===(r=a?a.call(n,m,d,s):void 0)||void 0===r&&m!==d)return!1}return!0}},70688:(e,t,a)=>{"use strict";a.d(t,{ZM:()=>C,ZP:()=>S});var n=a(46898),r=a(46270),c=a(1520),o=a(24758),l=a(11616),i=a(40914),s=a.n(i),m=a(87363),d=a.n(m),u=a(1960),p=a(75812),f=a(93830),g=a(21486),h=a(93592),y=a(70045),_=a(4800),v=a(85700),b=a(86393),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},R=function(e,t){var a,n=e.prefixCls,o=e.children,l=e.actions,i=e.extra,p=e.className,f=e.colStyle,g=E(e,["prefixCls","children","actions","extra","className","colStyle"]),h=(0,m.useContext)(C),y=h.grid,_=h.itemLayout,R=(0,(0,m.useContext)(u.E_).getPrefixCls)("list",n),k=l&&l.length>0&&d().createElement("ul",{className:"".concat(R,"-item-action"),key:"actions"},l.map((function(e,t){return d().createElement("li",{key:"".concat(R,"-item-action-").concat(t)},e,t!==l.length-1&&d().createElement("em",{className:"".concat(R,"-item-action-split")}))}))),w=y?"div":"li",x=d().createElement(w,(0,r.Z)({},g,y?{}:{ref:t},{className:s()("".concat(R,"-item"),(0,c.Z)({},"".concat(R,"-item-no-flex"),!("vertical"===_?i:(m.Children.forEach(o,(function(e){"string"==typeof e&&(a=!0)})),!(a&&m.Children.count(o)>1)))),p)}),"vertical"===_&&i?[d().createElement("div",{className:"".concat(R,"-item-main"),key:"content"},o,k),d().createElement("div",{className:"".concat(R,"-item-extra"),key:"extra"},i)]:[o,k,(0,b.Tm)(i,{key:"extra"})]);return y?d().createElement(v.Z,{ref:t,flex:1,style:f},x):x},k=(0,m.forwardRef)(R);k.Meta=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,c=e.title,o=e.description,l=E(e,["prefixCls","className","avatar","title","description"]),i=(0,(0,m.useContext)(u.E_).getPrefixCls)("list",t),p=s()("".concat(i,"-item-meta"),a),f=d().createElement("div",{className:"".concat(i,"-item-meta-content")},c&&d().createElement("h4",{className:"".concat(i,"-item-meta-title")},c),o&&d().createElement("div",{className:"".concat(i,"-item-meta-description")},o));return d().createElement("div",(0,r.Z)({},l,{className:p}),n&&d().createElement("div",{className:"".concat(i,"-item-meta-avatar")},n),(c||o)&&f)};const w=k;var C=m.createContext({});function x(e){var t,a=e.pagination,i=void 0!==a&&a,d=e.prefixCls,v=e.bordered,b=void 0!==v&&v,E=e.split,R=void 0===E||E,k=e.className,w=e.children,x=e.itemLayout,S=e.loadMore,Z=e.grid,N=e.dataSource,P=void 0===N?[]:N,T=e.size,M=e.header,L=e.footer,O=e.loading,F=void 0!==O&&O,Y=e.rowKey,I=e.renderItem,z=e.locale,D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),j=i&&"object"===(0,l.Z)(i)?i:{},B=m.useState(j.defaultCurrent||1),A=(0,o.Z)(B,2),W=A[0],H=A[1],U=m.useState(j.defaultPageSize||10),G=(0,o.Z)(U,2),K=G[0],$=G[1],J=m.useContext(u.E_),Q=J.getPrefixCls,V=J.renderEmpty,X=J.direction,q=function(e){return function(t,a){H(t),$(a),i&&i[e]&&i[e](t,a)}},ee=q("onChange"),te=q("onShowSizeChange"),ae=Q("list",d),ne=F;"boolean"==typeof ne&&(ne={spinning:ne});var re=ne&&ne.spinning,ce="";switch(T){case"large":ce="lg";break;case"small":ce="sm"}var oe=s()(ae,(t={},(0,c.Z)(t,"".concat(ae,"-vertical"),"vertical"===x),(0,c.Z)(t,"".concat(ae,"-").concat(ce),ce),(0,c.Z)(t,"".concat(ae,"-split"),R),(0,c.Z)(t,"".concat(ae,"-bordered"),b),(0,c.Z)(t,"".concat(ae,"-loading"),re),(0,c.Z)(t,"".concat(ae,"-grid"),!!Z),(0,c.Z)(t,"".concat(ae,"-something-after-last-item"),!!(S||i||L)),(0,c.Z)(t,"".concat(ae,"-rtl"),"rtl"===X),t),k),le=(0,r.Z)((0,r.Z)((0,r.Z)({},{current:1,total:0}),{total:P.length,current:W,pageSize:K}),i||{}),ie=Math.ceil(le.total/le.pageSize);le.current>ie&&(le.current=ie);var se=i?m.createElement("div",{className:"".concat(ae,"-pagination")},m.createElement(h.Z,(0,r.Z)({},le,{onChange:ee,onShowSizeChange:te}))):null,me=(0,n.Z)(P);i&&P.length>(le.current-1)*le.pageSize&&(me=(0,n.Z)(P).splice((le.current-1)*le.pageSize,le.pageSize));var de=Object.keys(Z||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),ue=(0,g.Z)(de),pe=m.useMemo((function(){for(var e=0;e<_.c4.length;e+=1){var t=_.c4[e];if(ue[t])return t}}),[ue]),fe=m.useMemo((function(){if(Z){var e=pe&&Z[pe]?Z[pe]:Z.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==Z?void 0:Z.column,pe]),ge=re&&m.createElement("div",{style:{minHeight:53}});if(me.length>0){var he=me.map((function(e,t){return function(e,t){return I?((a="function"==typeof Y?Y(e):Y?e[Y]:e.key)||(a="list-item-".concat(t)),m.createElement(m.Fragment,{key:a},I(e,t))):null;var a}(e,t)}));ge=Z?m.createElement(f.Z,{gutter:Z.gutter},m.Children.map(he,(function(e){return m.createElement("div",{key:null==e?void 0:e.key,style:fe},e)}))):m.createElement("ul",{className:"".concat(ae,"-items")},he)}else w||re||(ge=function(e,t){return m.createElement("div",{className:"".concat(e,"-empty-text")},z&&z.emptyText||t("List"))}(ae,V||p.Z));var ye=le.position||"bottom",_e=m.useMemo((function(){return{grid:Z,itemLayout:x}}),[JSON.stringify(Z),x]);return m.createElement(C.Provider,{value:_e},m.createElement("div",(0,r.Z)({className:oe},D),("top"===ye||"both"===ye)&&se,M&&m.createElement("div",{className:"".concat(ae,"-header")},M),m.createElement(y.Z,(0,r.Z)({},ne),ge,w),L&&m.createElement("div",{className:"".concat(ae,"-footer")},L),S||("bottom"===ye||"both"===ye)&&se))}C.Consumer,x.Item=w;const S=x},10757:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a(63915).Z}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.3.2/86ad21caa7c7116a4a72422d61d0da6c/chunk-config-tab-dashboard.lite.js.map