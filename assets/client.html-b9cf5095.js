import{_ as i,r as c,o as l,c as r,a as s,b as n,d as a,w as t,e as p}from"./app-7619f2e5.js";const u={},d=s("h1",{id:"client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#client","aria-hidden":"true"},"#"),n(" Client")],-1),k={href:"https://developers.line.biz/en/reference/messaging-api/",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="create-a-client" tabindex="-1"><a class="header-anchor" href="#create-a-client" aria-hidden="true">#</a> Create a client</h2><p>The <code>MessagingApiClient</code> class is provided by the main module.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// CommonJS</span>
<span class="token keyword">const</span> MessagingApiClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@line/bot-sdk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>messagingApi<span class="token punctuation">.</span>MessagingApiClient<span class="token punctuation">;</span>

<span class="token comment">// ES6 modules or TypeScript</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> messagingApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@line/bot-sdk&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> MessagingApiClient <span class="token punctuation">}</span> <span class="token operator">=</span> messagingApi<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To create a client instance:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessagingApiClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">channelAccessToken</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_CHANNEL_ACCESS_TOKEN&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now you can call client functions as usual:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">pushMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> userId<span class="token punctuation">,</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello, world&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retrieving-parameters-from-webhook" tabindex="-1"><a class="header-anchor" href="#retrieving-parameters-from-webhook" aria-hidden="true">#</a> Retrieving parameters from webhook</h2><p>Many of data used in the client functions, such as user IDs or reply tokens, can be obtained from nowhere but webhook.</p><p>Webhook event objects are just plain JSON objects, sent as request body, so you can easily access and use it.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> event <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>events<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> event<span class="token punctuation">.</span>message<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>text <span class="token operator">===</span> <span class="token string">&#39;bye&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;room&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      client<span class="token punctuation">.</span><span class="token function">leaveRoom</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">.</span>roomId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;group&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      client<span class="token punctuation">.</span><span class="token function">leaveGroup</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">.</span>groupId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      client<span class="token punctuation">.</span><span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">replyToken</span><span class="token operator">:</span> event<span class="token punctuation">.</span>replyToken<span class="token punctuation">,</span>
        <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;I cannot leave a 1-on-1 chat!&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m=p('<h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error handling</h2><p>There are 4 types of errors caused by client usage.</p><ul><li><code>RequestError</code>: A request fails by, for example, wrong domain or server refusal.</li><li><code>ReadError</code>: Reading from a response pipe fails.</li><li><code>HTTPError</code>: Server returns a non-2xx response.</li><li><code>JSONParseError</code>: JSON parsing fails for response body.</li></ul>',3),b=s("code",null,"Promise",-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"catch()",-1),f=s("code",null,"ReadableStream",-1),y=s("code",null,"'error'",-1),_=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>client
  <span class="token punctuation">.</span><span class="token function">replyMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">replyToken</span><span class="token operator">:</span> replyToken<span class="token punctuation">,</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">HTTPError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> stream <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getMessageContent</span><span class="token punctuation">(</span>messageId<span class="token punctuation">)</span><span class="token punctuation">;</span>
stream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=s("code",null,"Promise",-1),x=s("code",null,"ReadableStream",-1),j=s("code",null,"Client",-1);function A(C,T){const o=c("ExternalLinkIcon"),e=c("RouterLink");return l(),r("div",null,[d,s("p",null,[n("Client is to send messages, get user or content information, or leave chats. A client instance provides functions for "),s("a",k,[n("messaging APIs"),a(o)]),n(", so that you do not need to worry about HTTP requests and can focus on data. For type signatures of the methods, please refer to "),a(e,{to:"/api-reference/client.html"},{default:t(()=>[n("its API reference")]),_:1}),n(".")]),v,s("p",null,[n("For more detail of building webhook and retrieve event objects, please refer to its "),a(e,{to:"/guide/webhook.html"},{default:t(()=>[n("guide")]),_:1}),n(".")]),m,s("p",null,[n("For methods returning "),b,n(", you can handle the errors with "),s("a",g,[h,a(o)]),n(" method. For others returning "),f,n(", you can observe the "),y,n(" event for the stream.")]),_,s("p",null,[n("You can check which method returns "),w,n(" or "),x,n(" in the API reference of "),a(e,{to:"/api-reference/client.html"},{default:t(()=>[j]),_:1}),n(". For type signatures of the errors above, please refer to "),a(e,{to:"/api-reference/exceptions.html"},{default:t(()=>[n("Exceptions")]),_:1}),n(".")])])}const S=i(u,[["render",A],["__file","client.html.vue"]]);export{S as default};
