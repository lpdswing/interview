import{_ as n,o as a,c as s,e}from"./app.124c272b.js";const t={},p=e(`<h2 id="\u88C5\u9970-decorator" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970-decorator" aria-hidden="true">#</a> \u88C5\u9970\uFF08Decorator\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u4E3A\u5BF9\u8C61\u52A8\u6001\u6DFB\u52A0\u529F\u80FD\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u88C5\u9970\u8005\uFF08Decorator\uFF09\u548C\u5177\u4F53\u7EC4\u4EF6\uFF08ConcreteComponent\uFF09\u90FD\u7EE7\u627F\u81EA\u7EC4\u4EF6\uFF08Component\uFF09\uFF0C\u5177\u4F53\u7EC4\u4EF6\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E0D\u9700\u8981\u4F9D\u8D56\u4E8E\u5176\u5B83\u5BF9\u8C61\uFF0C\u800C\u88C5\u9970\u8005\u7EC4\u5408\u4E86\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u5B83\u53EF\u4EE5\u88C5\u9970\u5176\u5B83\u88C5\u9970\u8005\u6216\u8005\u5177\u4F53\u7EC4\u4EF6\u3002\u6240\u8C13\u88C5\u9970\uFF0C\u5C31\u662F\u628A\u8FD9\u4E2A\u88C5\u9970\u8005\u5957\u5728\u88AB\u88C5\u9970\u8005\u4E4B\u4E0A\uFF0C\u4ECE\u800C\u52A8\u6001\u6269\u5C55\u88AB\u88C5\u9970\u8005\u7684\u529F\u80FD\u3002\u88C5\u9970\u8005\u7684\u65B9\u6CD5\u6709\u4E00\u90E8\u5206\u662F\u81EA\u5DF1\u7684\uFF0C\u8FD9\u5C5E\u4E8E\u5B83\u7684\u529F\u80FD\uFF0C\u7136\u540E\u8C03\u7528\u88AB\u88C5\u9970\u8005\u7684\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u4ECE\u800C\u4E5F\u4FDD\u7559\u4E86\u88AB\u88C5\u9970\u8005\u7684\u529F\u80FD\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5177\u4F53\u7EC4\u4EF6\u5E94\u5F53\u662F\u88C5\u9970\u5C42\u6B21\u7684\u6700\u4F4E\u5C42\uFF0C\u56E0\u4E3A\u53EA\u6709\u5177\u4F53\u7EC4\u4EF6\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E0D\u9700\u8981\u4F9D\u8D56\u4E8E\u5176\u5B83\u5BF9\u8C61\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/6b833bc2-517a-4270-8a5e-0a5f6df8cd96.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>\u8BBE\u8BA1\u4E0D\u540C\u79CD\u7C7B\u7684\u996E\u6599\uFF0C\u996E\u6599\u53EF\u4EE5\u6DFB\u52A0\u914D\u6599\uFF0C\u6BD4\u5982\u53EF\u4EE5\u6DFB\u52A0\u725B\u5976\uFF0C\u5E76\u4E14\u652F\u6301\u52A8\u6001\u6DFB\u52A0\u65B0\u914D\u6599\u3002\u6BCF\u589E\u52A0\u4E00\u79CD\u914D\u6599\uFF0C\u8BE5\u996E\u6599\u7684\u4EF7\u683C\u5C31\u4F1A\u589E\u52A0\uFF0C\u8981\u6C42\u8BA1\u7B97\u4E00\u79CD\u996E\u6599\u7684\u4EF7\u683C\u3002</p><p>\u4E0B\u56FE\u8868\u793A\u5728 DarkRoast \u996E\u6599\u4E0A\u65B0\u589E\u65B0\u6DFB\u52A0 Mocha \u914D\u6599\uFF0C\u4E4B\u540E\u53C8\u6DFB\u52A0\u4E86 Whip \u914D\u6599\u3002DarkRoast \u88AB Mocha \u5305\u88F9\uFF0CMocha \u53C8\u88AB Whip \u5305\u88F9\u3002\u5B83\u4EEC\u90FD\u7EE7\u627F\u81EA\u76F8\u540C\u7236\u7C7B\uFF0C\u90FD\u6709 cost() \u65B9\u6CD5\uFF0C\u5916\u5C42\u7C7B\u7684 cost() \u65B9\u6CD5\u8C03\u7528\u4E86\u5185\u5C42\u7C7B\u7684 cost() \u65B9\u6CD5\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/c9cfd600-bc91-4f3a-9f99-b42f88a5bb24.jpg" width="600"></div><br><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DarkRoast</span> <span class="token keyword">implements</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HouseBlend</span> <span class="token keyword">implements</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">CondimentDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Beverage</span> beverage<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Milk</span> <span class="token keyword">extends</span> <span class="token class-name">CondimentDecorator</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Milk</span><span class="token punctuation">(</span><span class="token class-name">Beverage</span> beverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>beverage <span class="token operator">=</span> beverage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mocha</span> <span class="token keyword">extends</span> <span class="token class-name">CondimentDecorator</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span><span class="token class-name">Beverage</span> beverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>beverage <span class="token operator">=</span> beverage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Beverage</span> beverage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HouseBlend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        beverage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span>beverage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        beverage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Milk</span><span class="token punctuation">(</span>beverage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBE\u8BA1\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219" aria-hidden="true">#</a> \u8BBE\u8BA1\u539F\u5219</h3><p>\u7C7B\u5E94\u8BE5\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5173\u95ED\uFF1A\u4E5F\u5C31\u662F\u6DFB\u52A0\u65B0\u529F\u80FD\u65F6\u4E0D\u9700\u8981\u4FEE\u6539\u4EE3\u7801\u3002\u996E\u6599\u53EF\u4EE5\u52A8\u6001\u6DFB\u52A0\u65B0\u7684\u914D\u6599\uFF0C\u800C\u4E0D\u9700\u8981\u53BB\u4FEE\u6539\u996E\u6599\u7684\u4EE3\u7801\u3002</p><p>\u4E0D\u53EF\u80FD\u628A\u6240\u6709\u7684\u7C7B\u8BBE\u8BA1\u6210\u90FD\u6EE1\u8DB3\u8FD9\u4E00\u539F\u5219\uFF0C\u5E94\u5F53\u628A\u8BE5\u539F\u5219\u5E94\u7528\u4E8E\u6700\u6709\u53EF\u80FD\u53D1\u751F\u6539\u53D8\u7684\u5730\u65B9\u3002</p><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><ul><li>java.io.BufferedInputStream(InputStream)</li><li>java.io.DataInputStream(InputStream)</li><li>java.io.BufferedOutputStream(OutputStream)</li><li>java.util.zip.ZipOutputStream(OutputStream)</li><li>java.util.Collections#checked<a href="">List|Map|Set|SortedSet|SortedMap</a></li></ul>`,25),c=[p];function o(l,i){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u88C5\u9970.html.vue"]]);export{d as default};
