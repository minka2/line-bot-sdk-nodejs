import{_ as r,r as d,o as l,c as h,a as e,d as a,w as n,b as t,e as o}from"./app-64b2e76f.js";const c={},g=e("h1",{id:"class-messagingapiblobclient",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-messagingapiblobclient","aria-hidden":"true"},"#"),t(" Class: MessagingApiBlobClient")],-1),p=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),m=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),u=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),b=o('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new MessagingApiBlobClient</strong>(<code>config</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>httpClientConfig</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',6),f={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L36",target:"_blank",rel:"noopener noreferrer"},_=o('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="getmessagecontent" tabindex="-1"><a class="header-anchor" href="#getmessagecontent" aria-hidden="true">#</a> getMessageContent</h3><p>▸ <strong>getMessageContent</strong>(<code>messageId</code>): <code>Promise</code>&lt;<code>Readable</code>&gt;</p><p>Download image, video, and audio data sent from users.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>messageId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Message ID of video or audio</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Readable</code>&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/messaging-api/#get-content"> Documentation</a></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',11),x={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L67",target:"_blank",rel:"noopener noreferrer"},y=o('<hr><h3 id="getmessagecontentpreview" tabindex="-1"><a class="header-anchor" href="#getmessagecontentpreview" aria-hidden="true">#</a> getMessageContentPreview</h3><p>▸ <strong>getMessageContentPreview</strong>(<code>messageId</code>): <code>Promise</code>&lt;<code>Readable</code>&gt;</p><p>Get a preview image of the image or video</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>messageId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Message ID of image or video</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Readable</code>&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview"> Documentation</a></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',11),M={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L81",target:"_blank",rel:"noopener noreferrer"},C=e("hr",null,null,-1),A=e("h3",{id:"getmessagecontenttranscodingbymessageid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getmessagecontenttranscodingbymessageid","aria-hidden":"true"},"#"),t(" getMessageContentTranscodingByMessageId")],-1),B=e("strong",null,"getMessageContentTranscodingByMessageId",-1),I=e("code",null,"messageId",-1),v=e("code",null,"Promise",-1),D=e("code",null,"GetMessageContentTranscodingResponse",-1),R=o('<p>Verify the preparation status of a video or audio for getting</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>messageId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Message ID of video or audio</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>',4),P=e("code",null,"Promise",-1),k=e("code",null,"GetMessageContentTranscodingResponse",-1),w=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),T=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status"}," Documentation")],-1),L=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),N={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L95",target:"_blank",rel:"noopener noreferrer"},j=o('<hr><h3 id="getrichmenuimage" tabindex="-1"><a class="header-anchor" href="#getrichmenuimage" aria-hidden="true">#</a> getRichMenuImage</h3><p>▸ <strong>getRichMenuImage</strong>(<code>richMenuId</code>): <code>Promise</code>&lt;<code>Readable</code>&gt;</p><p>Download rich menu image.</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>richMenuId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the rich menu with the image to be downloaded</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Readable</code>&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image"> Documentation</a></p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',11),S={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L112",target:"_blank",rel:"noopener noreferrer"},z=e("hr",null,null,-1),V=e("h3",{id:"setrichmenuimage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setrichmenuimage","aria-hidden":"true"},"#"),t(" setRichMenuImage")],-1),E=e("strong",null,"setRichMenuImage",-1),G=e("code",null,"richMenuId",-1),U=e("code",null,"body?",-1),q=e("code",null,"Promise",-1),F=e("code",null,"MessageAPIResponseBase",-1),H=o('<p>Upload rich menu image</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>richMenuId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The ID of the rich menu to attach the image to</td></tr><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;"><code>Blob</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>',4),J=e("code",null,"Promise",-1),K=e("code",null,"MessageAPIResponseBase",-1),O=e("p",null,[e("strong",null,[e("code",null,"See")])],-1),Q=e("p",null,[e("a",{href:"https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image"}," Documentation")],-1),W=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),t(" Defined in")],-1),X={href:"https://github.com/line/line-bot-sdk-nodejs/blob/79c061a/lib/messaging-api/api/messagingApiBlobClient.ts#L127",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const s=d("RouterLink"),i=d("ExternalLinkIcon");return l(),h("div",null,[e("p",null,[a(s,{to:"/apidocs/"},{default:n(()=>[t("@line/bot-sdk")]),_:1}),t(" / "),a(s,{to:"/apidocs/modules.html"},{default:n(()=>[t("Exports")]),_:1}),t(" / "),a(s,{to:"/apidocs/modules/messagingApi.html"},{default:n(()=>[t("messagingApi")]),_:1}),t(" / MessagingApiBlobClient")]),g,e("p",null,[a(s,{to:"/apidocs/modules/messagingApi.html"},{default:n(()=>[t("messagingApi")]),_:1}),t(".MessagingApiBlobClient")]),p,m,e("ul",null,[e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#constructor"},{default:n(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#getmessagecontent"},{default:n(()=>[t("getMessageContent")]),_:1})]),e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#getmessagecontentpreview"},{default:n(()=>[t("getMessageContentPreview")]),_:1})]),e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#getmessagecontenttranscodingbymessageid"},{default:n(()=>[t("getMessageContentTranscodingByMessageId")]),_:1})]),e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#getrichmenuimage"},{default:n(()=>[t("getRichMenuImage")]),_:1})]),e("li",null,[a(s,{to:"/apidocs/classes/messagingApi.MessagingApiBlobClient.html#setrichmenuimage"},{default:n(()=>[t("setRichMenuImage")]),_:1})])]),b,e("p",null,[e("a",f,[t("lib/messaging-api/api/messagingApiBlobClient.ts:36"),a(i)])]),_,e("p",null,[e("a",x,[t("lib/messaging-api/api/messagingApiBlobClient.ts:67"),a(i)])]),y,e("p",null,[e("a",M,[t("lib/messaging-api/api/messagingApiBlobClient.ts:81"),a(i)])]),C,A,e("p",null,[t("▸ "),B,t("("),I,t("): "),v,t("<"),a(s,{to:"/apidocs/modules/messagingApi.html#getmessagecontenttranscodingresponse"},{default:n(()=>[D]),_:1}),t(">")]),R,e("p",null,[P,t("<"),a(s,{to:"/apidocs/modules/messagingApi.html#getmessagecontenttranscodingresponse"},{default:n(()=>[k]),_:1}),t(">")]),w,T,L,e("p",null,[e("a",N,[t("lib/messaging-api/api/messagingApiBlobClient.ts:95"),a(i)])]),j,e("p",null,[e("a",S,[t("lib/messaging-api/api/messagingApiBlobClient.ts:112"),a(i)])]),z,V,e("p",null,[t("▸ "),E,t("("),G,t(", "),U,t("): "),q,t("<"),a(s,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[F]),_:1}),t(">")]),H,e("p",null,[J,t("<"),a(s,{to:"/apidocs/modules.html#messageapiresponsebase"},{default:n(()=>[K]),_:1}),t(">")]),O,Q,W,e("p",null,[e("a",X,[t("lib/messaging-api/api/messagingApiBlobClient.ts:127"),a(i)])])])}const te=r(c,[["render",Y],["__file","messagingApi.MessagingApiBlobClient.html.vue"]]);export{te as default};