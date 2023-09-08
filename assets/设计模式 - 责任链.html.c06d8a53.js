import{_ as t,r as p,o as c,c as l,a as n,d as a,b as e,f as o}from"./app.5177f3e3.js";const i={},u=o(`<h2 id="\u8D23\u4EFB\u94FE-chain-of-responsibility" tabindex="-1"><a class="header-anchor" href="#\u8D23\u4EFB\u94FE-chain-of-responsibility" aria-hidden="true">#</a> \u8D23\u4EFB\u94FE\uFF08Chain Of Responsibility\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u4F7F\u591A\u4E2A\u5BF9\u8C61\u90FD\u6709\u673A\u4F1A\u5904\u7406\u8BF7\u6C42\uFF0C\u4ECE\u800C\u907F\u514D\u8BF7\u6C42\u7684\u53D1\u9001\u8005\u548C\u63A5\u6536\u8005\u4E4B\u95F4\u7684\u8026\u5408\u5173\u7CFB\u3002\u5C06\u8FD9\u4E9B\u5BF9\u8C61\u8FDE\u6210\u4E00\u6761\u94FE\uFF0C\u5E76\u6CBF\u7740\u8FD9\u6761\u94FE\u53D1\u9001\u8BE5\u8BF7\u6C42\uFF0C\u76F4\u5230\u6709\u4E00\u4E2A\u5BF9\u8C61\u5904\u7406\u5B83\u4E3A\u6B62\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><ul><li>Handler\uFF1A\u5B9A\u4E49\u5904\u7406\u8BF7\u6C42\u7684\u63A5\u53E3\uFF0C\u5E76\u4E14\u5B9E\u73B0\u540E\u7EE7\u94FE\uFF08successor\uFF09</li></ul><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/ca9f23bf-55a4-47b2-9534-a28e35397988.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Handler</span> successor<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>successor <span class="token operator">=</span> successor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteHandler1</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteHandler1</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>successor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; is handle by ConcreteHandler1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>successor <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            successor<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteHandler2</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteHandler2</span><span class="token punctuation">(</span><span class="token class-name">Handler</span> successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>successor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; is handle by ConcreteHandler2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>successor <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            successor<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">RequestType</span> type<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">RequestType</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RequestType</span> <span class="token punctuation">{</span>
    <span class="token constant">TYPE1</span><span class="token punctuation">,</span> <span class="token constant">TYPE2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Handler</span> handler1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteHandler1</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Handler</span> handler2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteHandler2</span><span class="token punctuation">(</span>handler1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Request</span> request1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE1</span><span class="token punctuation">,</span> <span class="token string">&quot;request1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler2<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Request</span> request2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token class-name">RequestType</span><span class="token punctuation">.</span><span class="token constant">TYPE2</span><span class="token punctuation">,</span> <span class="token string">&quot;request2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler2<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>request1 is handle by ConcreteHandler1
request2 is handle by ConcreteHandler2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,16),r={href:"http://docs.oracle.com/javase/8/docs/api/java/util/logging/Logger.html#log%28java.util.logging.Level,%20java.lang.String%29",target:"_blank",rel:"noopener noreferrer"},d={href:"https://commons.apache.org/proper/commons-chain/index.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/Filter.html#doFilter-javax.servlet.ServletRequest-javax.servlet.ServletResponse-javax.servlet.FilterChain-",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("java.util.logging.Logger#log()"),e(s)])]),n("li",null,[n("a",d,[a("Apache Commons Chain"),e(s)])]),n("li",null,[n("a",k,[a("javax.servlet.Filter#doFilter()"),e(s)])])])])}const y=t(i,[["render",v],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u8D23\u4EFB\u94FE.html.vue"]]);export{y as default};
