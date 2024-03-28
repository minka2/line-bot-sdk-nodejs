import{_ as e,c as t,o as a,a2 as l}from"./chunks/framework.C6tTn57k.js";const m=JSON.parse('{"title":"Class: LiffClient","description":"","frontmatter":{},"headers":[],"relativePath":"apidocs/classes/liff.LiffClient.md","filePath":"apidocs/classes/liff.LiffClient.md"}'),i={name:"apidocs/classes/liff.LiffClient.md"},o=l('<p><a href="./../README.html">@line/bot-sdk</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/liff.html">liff</a> / LiffClient</p><h1 id="class-liffclient" tabindex="-1">Class: LiffClient <a class="header-anchor" href="#class-liffclient" aria-label="Permalink to &quot;Class: LiffClient&quot;">​</a></h1><p><a href="./../modules/liff.html">liff</a>.LiffClient</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./liff.LiffClient.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./liff.LiffClient.html#addliffapp">addLIFFApp</a></li><li><a href="./liff.LiffClient.html#addliffappwithhttpinfo">addLIFFAppWithHttpInfo</a></li><li><a href="./liff.LiffClient.html#deleteliffapp">deleteLIFFApp</a></li><li><a href="./liff.LiffClient.html#deleteliffappwithhttpinfo">deleteLIFFAppWithHttpInfo</a></li><li><a href="./liff.LiffClient.html#getallliffapps">getAllLIFFApps</a></li><li><a href="./liff.LiffClient.html#getallliffappswithhttpinfo">getAllLIFFAppsWithHttpInfo</a></li><li><a href="./liff.LiffClient.html#updateliffapp">updateLIFFApp</a></li><li><a href="./liff.LiffClient.html#updateliffappwithhttpinfo">updateLIFFAppWithHttpInfo</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new LiffClient</strong>(<code>config</code>): <a href="./liff.LiffClient.html"><code>LiffClient</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>httpClientConfig</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./liff.LiffClient.html"><code>LiffClient</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L38" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:38</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addliffapp" tabindex="-1">addLIFFApp <a class="header-anchor" href="#addliffapp" aria-label="Permalink to &quot;addLIFFApp&quot;">​</a></h3><p>▸ <strong>addLIFFApp</strong>(<code>addLiffAppRequest</code>): <code>Promise</code>&lt;<a href="./../modules/liff.html#addliffappresponse"><code>AddLiffAppResponse</code></a>&gt;</p><p>Adding the LIFF app to a channel</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addLiffAppRequest</code></td><td style="text-align:left;"><a href="./../modules/liff.html#addliffapprequest"><code>AddLiffAppRequest</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/liff.html#addliffappresponse"><code>AddLiffAppResponse</code></a>&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app"> Documentation</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L69" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:69</a></p><hr><h3 id="addliffappwithhttpinfo" tabindex="-1">addLIFFAppWithHttpInfo <a class="header-anchor" href="#addliffappwithhttpinfo" aria-label="Permalink to &quot;addLIFFAppWithHttpInfo&quot;">​</a></h3><p>▸ <strong>addLIFFAppWithHttpInfo</strong>(<code>addLiffAppRequest</code>): <code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules/liff.html#addliffappresponse"><code>AddLiffAppResponse</code></a>&gt;&gt;</p><p>Adding the LIFF app to a channel. This method includes HttpInfo object to return additional information.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addLiffAppRequest</code></td><td style="text-align:left;"><a href="./../modules/liff.html#addliffapprequest"><code>AddLiffAppRequest</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules/liff.html#addliffappresponse"><code>AddLiffAppResponse</code></a>&gt;&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app"> Documentation</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L82" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:82</a></p><hr><h3 id="deleteliffapp" tabindex="-1">deleteLIFFApp <a class="header-anchor" href="#deleteliffapp" aria-label="Permalink to &quot;deleteLIFFApp&quot;">​</a></h3><p>▸ <strong>deleteLIFFApp</strong>(<code>liffId</code>): <code>Promise</code>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;</p><p>Deletes a LIFF app from a channel.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>liffId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the LIFF app to be updated</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;</p><p><strong><code>Summary</code></strong></p><p>Delete LIFF app from a channel</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#delete-liff-app">Delete LIFF app from a channel Documentation</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L97" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:97</a></p><hr><h3 id="deleteliffappwithhttpinfo" tabindex="-1">deleteLIFFAppWithHttpInfo <a class="header-anchor" href="#deleteliffappwithhttpinfo" aria-label="Permalink to &quot;deleteLIFFAppWithHttpInfo&quot;">​</a></h3><p>▸ <strong>deleteLIFFAppWithHttpInfo</strong>(<code>liffId</code>): <code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;&gt;</p><p>Deletes a LIFF app from a channel. . This method includes HttpInfo object to return additional information.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>liffId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the LIFF app to be updated</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;&gt;</p><p><strong><code>Summary</code></strong></p><p>Delete LIFF app from a channel</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#delete-liff-app">Delete LIFF app from a channel Documentation</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L111" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:111</a></p><hr><h3 id="getallliffapps" tabindex="-1">getAllLIFFApps <a class="header-anchor" href="#getallliffapps" aria-label="Permalink to &quot;getAllLIFFApps&quot;">​</a></h3><p>▸ <strong>getAllLIFFApps</strong>(): <code>Promise</code>&lt;<a href="./../modules/liff.html#getallliffappsresponse"><code>GetAllLiffAppsResponse</code></a>&gt;</p><p>Gets information on all the LIFF apps added to the channel.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/liff.html#getallliffappsresponse"><code>GetAllLiffAppsResponse</code></a>&gt;</p><p><strong><code>Summary</code></strong></p><p>Get all LIFF apps</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps">Get all LIFF apps Documentation</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L125" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:125</a></p><hr><h3 id="getallliffappswithhttpinfo" tabindex="-1">getAllLIFFAppsWithHttpInfo <a class="header-anchor" href="#getallliffappswithhttpinfo" aria-label="Permalink to &quot;getAllLIFFAppsWithHttpInfo&quot;">​</a></h3><p>▸ <strong>getAllLIFFAppsWithHttpInfo</strong>(): <code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules/liff.html#getallliffappsresponse"><code>GetAllLiffAppsResponse</code></a>&gt;&gt;</p><p>Gets information on all the LIFF apps added to the channel.. This method includes HttpInfo object to return additional information.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules/liff.html#getallliffappsresponse"><code>GetAllLiffAppsResponse</code></a>&gt;&gt;</p><p><strong><code>Summary</code></strong></p><p>Get all LIFF apps</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps">Get all LIFF apps Documentation</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L136" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:136</a></p><hr><h3 id="updateliffapp" tabindex="-1">updateLIFFApp <a class="header-anchor" href="#updateliffapp" aria-label="Permalink to &quot;updateLIFFApp&quot;">​</a></h3><p>▸ <strong>updateLIFFApp</strong>(<code>liffId</code>, <code>updateLiffAppRequest</code>): <code>Promise</code>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;</p><p>Update LIFF app settings</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>liffId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the LIFF app to be updated</td></tr><tr><td style="text-align:left;"><code>updateLiffAppRequest</code></td><td style="text-align:left;"><a href="./../modules/liff.html#updateliffapprequest"><code>UpdateLiffAppRequest</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app"> Documentation</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L149" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:149</a></p><hr><h3 id="updateliffappwithhttpinfo" tabindex="-1">updateLIFFAppWithHttpInfo <a class="header-anchor" href="#updateliffappwithhttpinfo" aria-label="Permalink to &quot;updateLIFFAppWithHttpInfo&quot;">​</a></h3><p>▸ <strong>updateLIFFAppWithHttpInfo</strong>(<code>liffId</code>, <code>updateLiffAppRequest</code>): <code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;&gt;</p><p>Update LIFF app settings. This method includes HttpInfo object to return additional information.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>liffId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the LIFF app to be updated</td></tr><tr><td style="text-align:left;"><code>updateLiffAppRequest</code></td><td style="text-align:left;"><a href="./../modules/liff.html#updateliffapprequest"><code>UpdateLiffAppRequest</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/ApiResponseType.html"><code>ApiResponseType</code></a>&lt;<a href="./../modules.html#messageapiresponsebase"><code>MessageAPIResponseBase</code></a>&gt;&gt;</p><p><strong><code>See</code></strong></p><p><a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app"> Documentation</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/line/line-bot-sdk-nodejs/blob/66c9fc1/lib/liff/api/liffClient.ts#L165" target="_blank" rel="noreferrer">lib/liff/api/liffClient.ts:165</a></p>',117),r=[o];function s(d,n,f,p,h,c){return a(),t("div",null,r)}const b=e(i,[["render",s]]);export{m as __pageData,b as default};
