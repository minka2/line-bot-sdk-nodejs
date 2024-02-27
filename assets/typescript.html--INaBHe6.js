import{_ as o,r as p,o as i,c as l,a as s,b as n,d as a,e as t}from"./app-d6ODzTmM.js";const c={},r=s("h1",{id:"typescript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),n(" TypeScript")],-1),d={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>When installed via npm, the built JavaScript files are already included and you do not need to worry about TypeScript, but it may be nice to consider using TypeScript for implement what you need.</p><h2 id="what-s-good-about-using-typescript" tabindex="-1"><a class="header-anchor" href="#what-s-good-about-using-typescript" aria-hidden="true">#</a> What&#39;s good about using TypeScript</h2><p>It provides a default type set for mostly used objects in webhook and client and prevent possible typo and mistakes.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  channelAccessToken<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// typo Token</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessagingApiClient</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token comment">// will throw a compile error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, when building a complex message object, you can make use of types for its fields.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> message<span class="token operator">:</span> TemplateMessage <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span>
  altText<span class="token operator">:</span> <span class="token string">&quot;cannot display template message&quot;</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;carousel&quot;</span><span class="token punctuation">,</span>
    columns<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;col1&quot;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;Column 1&quot;</span><span class="token punctuation">,</span>
      actions<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">&quot;send message&quot;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&quot;hi, there&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The object above will be type-checked to have the type of <code>TemplateMessage</code>, and thus ensured not to miss any required field.</p>`,7),k={href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"type",-1),v=s("code",null,"type",-1),b=t(`<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><p>The library is built to just-work with TypeScript too, so import the library and there you go.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token comment">// main APIs</span>
  Client<span class="token punctuation">,</span>
  middleware<span class="token punctuation">,</span>

  <span class="token comment">// exceptions</span>
  JSONParseError<span class="token punctuation">,</span>
  SignatureValidationFailed<span class="token punctuation">,</span>

  <span class="token comment">// types</span>
  TemplateMessage<span class="token punctuation">,</span>
  WebhookEvent<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@line/bot-sdk&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=s("code",null,"@line/bot-sdk",-1),y=s("code",null,"TemplateMessage",-1),g=s("code",null,"Event",-1),_={href:"https://github.com/line/line-bot-sdk-nodejs/blob/master/lib/",target:"_blank",rel:"noopener noreferrer"};function f(w,q){const e=p("ExternalLinkIcon");return i(),l("div",null,[r,s("p",null,[s("a",d,[n("TypeScript"),a(e)]),n(" is a statically typed language that compiled to plain JavaScript. As you may already have found, This library is written in TypeScript.")]),u,s("p",null,[n("Also, "),s("a",k,[n("literal type"),a(e)]),n(" is used for "),m,n(" fields, which means the compiler will complain if a wrong type string is used, and also inference the type of objects by its "),v,n(" field.")]),b,s("p",null,[n("Message object and webhook event types can be also imported from "),h,n(", e.g. "),y,n(" or "),g,n(". For declarations of the types, please refer to "),s("a",_,[n("lib/"),a(e)]),n(".")])])}const x=o(c,[["render",f],["__file","typescript.html.vue"]]);export{x as default};