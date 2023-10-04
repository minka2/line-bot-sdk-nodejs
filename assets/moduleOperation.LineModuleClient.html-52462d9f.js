import{_ as i,r as d,o as r,c as h,a as e,d as o,w as n,b as t,e as s}from"./app-7e8ebe7e.js";const c={},u=e("h1",{id:"class-linemoduleclient",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-linemoduleclient","aria-hidden":"true"},"#"),t(" Class: LineModuleClient")],-1),_=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),p=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),m=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),f=s('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new LineModuleClient</strong>(<code>config</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>httpClientConfig</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',6),b={href:"https://github.com/line/line-bot-sdk-nodejs/blob/2419bb0/lib/module/api/lineModuleClient.ts#L38",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"methods-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods-1","aria-hidden":"true"},"#"),t(" Methods")],-1),x=e("h3",{id:"acquirechatcontrol",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#acquirechatcontrol","aria-hidden":"true"},"#"),t(" acquireChatControl")],-1),C=e("strong",null,"acquireChatControl",-1),y=e("code",null,"chatId",-1),M=e("code",null,"acquireChatControlRequest?",-1),I=e("code",null,"Promise",-1),P=e("code",null,"MessageAPIResponseBase",-1),L=e("p",null,"If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API. The channel that was previously an Active Channel will automatically switch to a Standby Channel.",-1),q=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1","aria-hidden":"true"},"#"),t(" Parameters")],-1),R=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"chatId")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},[t("The "),e("code",null,"userId"),t(", "),e("code",null,"roomId"),t(", or "),e("code",null,"groupId")])],-1),O=e("td",{style:{"text-align":"left"}},[e("code",null,"acquireChatControlRequest?")],-1),v={style:{"text-align":"left"}},A=e("code",null,"AcquireChatControlRequest",-1),D=e("td",{style:{"text-align":"left"}},null,-1),T=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),N=e("code",null,"Promise",-1),B=e("code",null,"MessageAPIResponseBase",-1),S=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),w=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/partner-docs/#acquire-control-api"}," Documentation")],-1),j=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),E={href:"https://github.com/line/line-bot-sdk-nodejs/blob/2419bb0/lib/module/api/lineModuleClient.ts#L70",target:"_blank",rel:"noopener noreferrer"},V=e("hr",null,null,-1),z=e("h3",{id:"detachmodule",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#detachmodule","aria-hidden":"true"},"#"),t(" detachModule")],-1),G=e("strong",null,"detachModule",-1),J=e("code",null,"detachModuleRequest?",-1),F=e("code",null,"Promise",-1),H=e("code",null,"MessageAPIResponseBase",-1),K=e("p",null,"The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.",-1),Q=e("h4",{id:"parameters-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-2","aria-hidden":"true"},"#"),t(" Parameters")],-1),U=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),W=e("td",{style:{"text-align":"left"}},[e("code",null,"detachModuleRequest?")],-1),X={style:{"text-align":"left"}},Y=e("code",null,"DetachModuleRequest",-1),Z=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),$=e("code",null,"Promise",-1),ee=e("code",null,"MessageAPIResponseBase",-1),te=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),oe=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin"}," Documentation")],-1),le=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),t(" Defined in")],-1),ne={href:"https://github.com/line/line-bot-sdk-nodejs/blob/2419bb0/lib/module/api/lineModuleClient.ts#L91",target:"_blank",rel:"noopener noreferrer"},ae=e("hr",null,null,-1),se=e("h3",{id:"getmodules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getmodules","aria-hidden":"true"},"#"),t(" getModules")],-1),de=e("strong",null,"getModules",-1),ie=e("code",null,"start?",-1),re=e("code",null,"limit?",-1),he=e("code",null,"Promise",-1),ce=e("code",null,"GetModulesResponse",-1),ue=s('<p>Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>start?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Value of the continuation token found in the next property of the JSON object returned in the response. If you can&#39;t get all basic information about the bots in one request, include this parameter to get the remaining array.</td></tr><tr><td style="text-align:left;"><code>limit?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Specify the maximum number of bots that you get basic information from. The default value is 100. Max value: 100</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>',4),_e=e("code",null,"Promise",-1),pe=e("code",null,"GetModulesResponse",-1),me=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),fe=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api"}," Documentation")],-1),be=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),ge={href:"https://github.com/line/line-bot-sdk-nodejs/blob/2419bb0/lib/module/api/lineModuleClient.ts#L106",target:"_blank",rel:"noopener noreferrer"},xe=e("hr",null,null,-1),Ce=e("h3",{id:"releasechatcontrol",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#releasechatcontrol","aria-hidden":"true"},"#"),t(" releaseChatControl")],-1),ye=e("strong",null,"releaseChatControl",-1),Me=e("code",null,"chatId",-1),Ie=e("code",null,"Promise",-1),Pe=e("code",null,"MessageAPIResponseBase",-1),Le=s('<p>To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API.</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>chatId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The <code>userId</code>, <code>roomId</code>, or <code>groupId</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>',4),qe=e("code",null,"Promise",-1),Re=e("code",null,"MessageAPIResponseBase",-1),ke=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),Oe=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/partner-docs/#release-control-api"}," Documentation")],-1),ve=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ae={href:"https://github.com/line/line-bot-sdk-nodejs/blob/2419bb0/lib/module/api/lineModuleClient.ts#L127",target:"_blank",rel:"noopener noreferrer"};function De(Te,Ne){const l=d("RouterLink"),a=d("ExternalLinkIcon");return r(),h("div",null,[e("p",null,[o(l,{to:"/apidocs/"},{default:n(()=>[t("@line/bot-sdk")]),_:1}),t(" / "),o(l,{to:"/apidocs/modules.html"},{default:n(()=>[t("Exports")]),_:1}),t(" / "),o(l,{to:"/apidocs/modules/moduleOperation.html"},{default:n(()=>[t("moduleOperation")]),_:1}),t(" / LineModuleClient")]),u,e("p",null,[o(l,{to:"/apidocs/modules/moduleOperation.html"},{default:n(()=>[t("moduleOperation")]),_:1}),t(".LineModuleClient")]),_,p,e("ul",null,[e("li",null,[o(l,{to:"/apidocs/classes/moduleOperation.LineModuleClient.html#constructor"},{default:n(()=>[t("constructor")]),_:1})])]),m,e("ul",null,[e("li",null,[o(l,{to:"/apidocs/classes/moduleOperation.LineModuleClient.html#acquirechatcontrol"},{default:n(()=>[t("acquireChatControl")]),_:1})]),e("li",null,[o(l,{to:"/apidocs/classes/moduleOperation.LineModuleClient.html#detachmodule"},{default:n(()=>[t("detachModule")]),_:1})]),e("li",null,[o(l,{to:"/apidocs/classes/moduleOperation.LineModuleClient.html#getmodules"},{default:n(()=>[t("getModules")]),_:1})]),e("li",null,[o(l,{to:"/apidocs/classes/moduleOperation.LineModuleClient.html#releasechatcontrol"},{default:n(()=>[t("releaseChatControl")]),_:1})])]),f,e("p",null,[e("a",b,[t("lib/module/api/lineModuleClient.ts:38"),o(a)])]),g,x,e("p",null,[t("▸ "),C,t("("),y,t(", "),M,t("): "),I,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[P]),_:1}),t(">")]),L,q,e("table",null,[R,e("tbody",null,[k,e("tr",null,[O,e("td",v,[o(l,{to:"/apidocs/modules/moduleOperation.html#acquirechatcontrolrequest"},{default:n(()=>[A]),_:1})]),D])])]),T,e("p",null,[N,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[B]),_:1}),t(">")]),S,w,j,e("p",null,[e("a",E,[t("lib/module/api/lineModuleClient.ts:70"),o(a)])]),V,z,e("p",null,[t("▸ "),G,t("("),J,t("): "),F,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[H]),_:1}),t(">")]),K,Q,e("table",null,[U,e("tbody",null,[e("tr",null,[W,e("td",X,[o(l,{to:"/apidocs/modules/moduleOperation.html#detachmodulerequest"},{default:n(()=>[Y]),_:1})])])])]),Z,e("p",null,[$,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[ee]),_:1}),t(">")]),te,oe,le,e("p",null,[e("a",ne,[t("lib/module/api/lineModuleClient.ts:91"),o(a)])]),ae,se,e("p",null,[t("▸ "),de,t("("),ie,t(", "),re,t("): "),he,t("<"),o(l,{to:"/apidocs/modules/moduleOperation.html#getmodulesresponse"},{default:n(()=>[ce]),_:1}),t(">")]),ue,e("p",null,[_e,t("<"),o(l,{to:"/apidocs/modules/moduleOperation.html#getmodulesresponse"},{default:n(()=>[pe]),_:1}),t(">")]),me,fe,be,e("p",null,[e("a",ge,[t("lib/module/api/lineModuleClient.ts:106"),o(a)])]),xe,Ce,e("p",null,[t("▸ "),ye,t("("),Me,t("): "),Ie,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[Pe]),_:1}),t(">")]),Le,e("p",null,[qe,t("<"),o(l,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[Re]),_:1}),t(">")]),ke,Oe,ve,e("p",null,[e("a",Ae,[t("lib/module/api/lineModuleClient.ts:127"),o(a)])])])}const Se=i(c,[["render",De],["__file","moduleOperation.LineModuleClient.html.vue"]]);export{Se as default};
