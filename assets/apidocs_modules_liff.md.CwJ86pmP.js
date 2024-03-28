import{_ as e,c as t,o as a,a2 as l}from"./chunks/framework.C6tTn57k.js";const u=JSON.parse('{"title":"Namespace: liff","description":"","frontmatter":{},"headers":[],"relativePath":"apidocs/modules/liff.md","filePath":"apidocs/modules/liff.md"}'),i={name:"apidocs/modules/liff.md"},o=l('<p><a href="./../README.html">@line/bot-sdk</a> / <a href="./../modules.html">Exports</a> / liff</p><h1 id="namespace-liff" tabindex="-1">Namespace: liff <a class="header-anchor" href="#namespace-liff" aria-label="Permalink to &quot;Namespace: liff&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h3><ul><li><a href="./liff.AddLiffAppRequest.html">AddLiffAppRequest</a></li><li><a href="./liff.LiffApp.html">LiffApp</a></li><li><a href="./liff.LiffView.html">LiffView</a></li><li><a href="./liff.UpdateLiffAppRequest.html">UpdateLiffAppRequest</a></li></ul><h3 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h3><ul><li><a href="./../classes/liff.LiffClient.html">LiffClient</a></li></ul><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./liff.html#addliffapprequest">AddLiffAppRequest</a></li><li><a href="./liff.html#addliffappresponse">AddLiffAppResponse</a></li><li><a href="./liff.html#getallliffappsresponse">GetAllLiffAppsResponse</a></li><li><a href="./liff.html#liffapp">LiffApp</a></li><li><a href="./liff.html#liffbotprompt">LiffBotPrompt</a></li><li><a href="./liff.html#lifffeatures">LiffFeatures</a></li><li><a href="./liff.html#liffscope">LiffScope</a></li><li><a href="./liff.html#liffview">LiffView</a></li><li><a href="./liff.html#updateliffapprequest">UpdateLiffAppRequest</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="addliffapprequest" tabindex="-1">AddLiffAppRequest <a class="header-anchor" href="#addliffapprequest" aria-label="Permalink to &quot;AddLiffAppRequest&quot;">​</a></h3><p>Ƭ <strong>AddLiffAppRequest</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>botPrompt?</code></td><td style="text-align:left;"><a href="./liff.html#liffbotprompt"><code>LiffBotPrompt</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">botPrompt Documentation</a></td></tr><tr><td style="text-align:left;"><code>description?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the LIFF app. The LIFF app name can&#39;t include &quot;LINE&quot; or similar strings, or inappropriate strings. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">description Documentation</a></td></tr><tr><td style="text-align:left;"><code>features?</code></td><td style="text-align:left;"><a href="./liff.html#lifffeatures"><code>LiffFeatures</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">features Documentation</a></td></tr><tr><td style="text-align:left;"><code>permanentLinkPattern?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">How additional information in LIFF URLs is handled. Specify <code>concat</code>. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">permanentLinkPattern Documentation</a></td></tr><tr><td style="text-align:left;"><code>scope?</code></td><td style="text-align:left;"><a href="./liff.html#liffscope"><code>LiffScope</code></a>[]</td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">scope Documentation</a></td></tr><tr><td style="text-align:left;"><code>view</code></td><td style="text-align:left;"><a href="./liff.html#liffview"><code>LiffView</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">view Documentation</a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/addLiffAppRequest.ts#L18" target="_blank" rel="noreferrer">lib/liff/model/addLiffAppRequest.ts:18</a></p><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/addLiffAppRequest.ts#L53" target="_blank" rel="noreferrer">lib/liff/model/addLiffAppRequest.ts:53</a></p><hr><h3 id="addliffappresponse" tabindex="-1">AddLiffAppResponse <a class="header-anchor" href="#addliffappresponse" aria-label="Permalink to &quot;AddLiffAppResponse&quot;">​</a></h3><p>Ƭ <strong>AddLiffAppResponse</strong>: <code>Object</code></p><p>LIFF server API LIFF Server API.</p><p>The version of the OpenAPI document: 1.0.0</p><p>NOTE: This class is auto generated by OpenAPI Generator (<a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a>). <a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a> Do not edit the class manually.</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>liffId</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/addLiffAppResponse.ts#L13" target="_blank" rel="noreferrer">lib/liff/model/addLiffAppResponse.ts:13</a></p><hr><h3 id="getallliffappsresponse" tabindex="-1">GetAllLiffAppsResponse <a class="header-anchor" href="#getallliffappsresponse" aria-label="Permalink to &quot;GetAllLiffAppsResponse&quot;">​</a></h3><p>Ƭ <strong>GetAllLiffAppsResponse</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>apps?</code></td><td style="text-align:left;"><a href="./liff.html#liffapp"><code>LiffApp</code></a>[]</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/getAllLiffAppsResponse.ts#L15" target="_blank" rel="noreferrer">lib/liff/model/getAllLiffAppsResponse.ts:15</a></p><hr><h3 id="liffapp" tabindex="-1">LiffApp <a class="header-anchor" href="#liffapp" aria-label="Permalink to &quot;LiffApp&quot;">​</a></h3><p>Ƭ <strong>LiffApp</strong>: <code>Object</code></p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>botPrompt?</code></td><td style="text-align:left;"><a href="./liff.html#liffbotprompt"><code>LiffBotPrompt</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>description?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the LIFF app</td></tr><tr><td style="text-align:left;"><code>features?</code></td><td style="text-align:left;"><a href="./liff.html#lifffeatures"><code>LiffFeatures</code></a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>liffId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">LIFF app ID</td></tr><tr><td style="text-align:left;"><code>permanentLinkPattern?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">How additional information in LIFF URLs is handled. concat is returned.</td></tr><tr><td style="text-align:left;"><code>scope?</code></td><td style="text-align:left;"><a href="./liff.html#liffscope"><code>LiffScope</code></a>[]</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>view?</code></td><td style="text-align:left;"><a href="./liff.html#liffview"><code>LiffView</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffApp.ts#L18" target="_blank" rel="noreferrer">lib/liff/model/liffApp.ts:18</a></p><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffApp.ts#L45" target="_blank" rel="noreferrer">lib/liff/model/liffApp.ts:45</a></p><hr><h3 id="liffbotprompt" tabindex="-1">LiffBotPrompt <a class="header-anchor" href="#liffbotprompt" aria-label="Permalink to &quot;LiffBotPrompt&quot;">​</a></h3><p>Ƭ <strong>LiffBotPrompt</strong>: <code>&quot;normal&quot;</code> | <code>&quot;aggressive&quot;</code> | <code>&quot;none&quot;</code></p><p>Specify the setting for bot link feature with one of the following values: <code>normal</code>: Display the option to add the LINE Official Account as a friend in the channel consent screen. <code>aggressive</code>: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen. <code>none</code>: Don&#39;t display the option to add the LINE Official Account as a friend. The default value is none.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffBotPrompt.ts#L17" target="_blank" rel="noreferrer">lib/liff/model/liffBotPrompt.ts:17</a></p><hr><h3 id="lifffeatures" tabindex="-1">LiffFeatures <a class="header-anchor" href="#lifffeatures" aria-label="Permalink to &quot;LiffFeatures&quot;">​</a></h3><p>Ƭ <strong>LiffFeatures</strong>: <code>Object</code></p><p>LIFF server API LIFF Server API.</p><p>The version of the OpenAPI document: 1.0.0</p><p>NOTE: This class is auto generated by OpenAPI Generator (<a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a>). <a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a> Do not edit the class manually.</p><h4 id="type-declaration-4" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-4" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ble?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code> if the LIFF app supports Bluetooth® Low Energy for LINE Things. <code>false</code> otherwise.</td></tr><tr><td style="text-align:left;"><code>qrCode?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code> to use the 2D code reader in the LIFF app. false otherwise. The default value is <code>false</code>.</td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffFeatures.ts#L13" target="_blank" rel="noreferrer">lib/liff/model/liffFeatures.ts:13</a></p><hr><h3 id="liffscope" tabindex="-1">LiffScope <a class="header-anchor" href="#liffscope" aria-label="Permalink to &quot;LiffScope&quot;">​</a></h3><p>Ƭ <strong>LiffScope</strong>: <code>&quot;openid&quot;</code> | <code>&quot;email&quot;</code> | <code>&quot;profile&quot;</code> | <code>&quot;chat_message.write&quot;</code></p><p>Array of scopes required for some LIFF SDK methods to function. The default value is <code>[\\&quot;profile\\&quot;, \\&quot;chat_message.write\\&quot;]</code>.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffScope.ts#L17" target="_blank" rel="noreferrer">lib/liff/model/liffScope.ts:17</a></p><hr><h3 id="liffview" tabindex="-1">LiffView <a class="header-anchor" href="#liffview" aria-label="Permalink to &quot;LiffView&quot;">​</a></h3><p>Ƭ <strong>LiffView</strong>: <code>Object</code></p><p>LIFF server API LIFF Server API.</p><p>The version of the OpenAPI document: 1.0.0</p><p>NOTE: This class is auto generated by OpenAPI Generator (<a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a>). <a href="https://openapi-generator.tech" target="_blank" rel="noreferrer">https://openapi-generator.tech</a> Do not edit the class manually.</p><h4 id="type-declaration-5" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-5" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>moduleMode?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code> to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">moduleMode Documentation</a></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><a href="./liff.LiffView.html#typeenum"><code>TypeEnum</code></a></td><td style="text-align:left;">Size of the LIFF app view. Specify one of these values: - compact - tall - full <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">type Documentation</a></td></tr><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. <a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a>). Used when the LIFF app is launched using the LIFF URL. The URL scheme must be https. URL fragments (#URL-fragment) can&#39;t be specified. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">url Documentation</a></td></tr></tbody></table><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffView.ts#L13" target="_blank" rel="noreferrer">lib/liff/model/liffView.ts:13</a></p><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/liffView.ts#L34" target="_blank" rel="noreferrer">lib/liff/model/liffView.ts:34</a></p><hr><h3 id="updateliffapprequest" tabindex="-1">UpdateLiffAppRequest <a class="header-anchor" href="#updateliffapprequest" aria-label="Permalink to &quot;UpdateLiffAppRequest&quot;">​</a></h3><p>Ƭ <strong>UpdateLiffAppRequest</strong>: <code>Object</code></p><h4 id="type-declaration-6" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-6" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>botPrompt?</code></td><td style="text-align:left;"><a href="./liff.html#liffbotprompt"><code>LiffBotPrompt</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">botPrompt Documentation</a></td></tr><tr><td style="text-align:left;"><code>description?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the LIFF app. The LIFF app name can&#39;t include &quot;LINE&quot; or similar strings, or inappropriate strings. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">description Documentation</a></td></tr><tr><td style="text-align:left;"><code>features?</code></td><td style="text-align:left;"><a href="./liff.html#lifffeatures"><code>LiffFeatures</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">features Documentation</a></td></tr><tr><td style="text-align:left;"><code>permanentLinkPattern?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">How additional information in LIFF URLs is handled. Specify <code>concat</code>. <strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">permanentLinkPattern Documentation</a></td></tr><tr><td style="text-align:left;"><code>scope?</code></td><td style="text-align:left;"><a href="./liff.html#liffscope"><code>LiffScope</code></a>[]</td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">scope Documentation</a></td></tr><tr><td style="text-align:left;"><code>view?</code></td><td style="text-align:left;"><a href="./liff.html#liffview"><code>LiffView</code></a></td><td style="text-align:left;"><strong><code>See</code></strong> <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">view Documentation</a></td></tr></tbody></table><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/updateLiffAppRequest.ts#L18" target="_blank" rel="noreferrer">lib/liff/model/updateLiffAppRequest.ts:18</a></p><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/model/updateLiffAppRequest.ts#L53" target="_blank" rel="noreferrer">lib/liff/model/updateLiffAppRequest.ts:53</a></p>',83),f=[o];function d(r,n,s,p,c,h){return a(),t("div",null,f)}const g=e(i,[["render",d]]);export{u as __pageData,g as default};
