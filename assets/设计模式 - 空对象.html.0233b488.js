import{_ as n,o as s,c as a,f as e}from"./app.5177f3e3.js";const t={},p=e(`<h2 id="\u7A7A\u5BF9\u8C61-null" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u5BF9\u8C61-null" aria-hidden="true">#</a> \u7A7A\u5BF9\u8C61\uFF08Null\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u4F7F\u7528\u4EC0\u4E48\u90FD\u4E0D\u505A</p><p>\u7684\u7A7A\u5BF9\u8C61\u6765\u4EE3\u66FF NULL\u3002</p><p>\u4E00\u4E2A\u65B9\u6CD5\u8FD4\u56DE NULL\uFF0C\u610F\u5473\u7740\u65B9\u6CD5\u7684\u8C03\u7528\u7AEF\u9700\u8981\u53BB\u68C0\u67E5\u8FD4\u56DE\u503C\u662F\u5426\u662F NULL\uFF0C\u8FD9\u4E48\u505A\u4F1A\u5BFC\u81F4\u975E\u5E38\u591A\u7684\u5197\u4F59\u7684\u68C0\u67E5\u4EE3\u7801\u3002\u5E76\u4E14\u5982\u679C\u67D0\u4E00\u4E2A\u8C03\u7528\u7AEF\u5FD8\u8BB0\u4E86\u505A\u8FD9\u4E2A\u68C0\u67E5\u8FD4\u56DE\u503C\uFF0C\u800C\u76F4\u63A5\u4F7F\u7528\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5C31\u6709\u53EF\u80FD\u629B\u51FA\u7A7A\u6307\u9488\u5F02\u5E38\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/22870bbe-898f-4c17-a31a-d7c5ee5d1c10.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RealOperation</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractOperation</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;do something&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NullOperation</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractOperation</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do nothing</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractOperation</span> abstractOperation <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstractOperation<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AbstractOperation</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> para<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>para <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NullOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RealOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u7A7A\u5BF9\u8C61.html.vue"]]);export{d as default};
