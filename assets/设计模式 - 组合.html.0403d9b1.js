import{_ as n,o as s,c as a,f as p}from"./app.5177f3e3.js";const t={},e=p(`<h2 id="\u7EC4\u5408-composite" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408-composite" aria-hidden="true">#</a> \u7EC4\u5408\uFF08Composite\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u5C06\u5BF9\u8C61\u7EC4\u5408\u6210\u6811\u5F62\u7ED3\u6784\u6765\u8868\u793A\u201C\u6574\u4F53/\u90E8\u5206\u201D\u5C42\u6B21\u5173\u7CFB\uFF0C\u5141\u8BB8\u7528\u6237\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u5904\u7406\u5355\u72EC\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u8C61\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u7EC4\u4EF6\uFF08Component\uFF09\u7C7B\u662F\u7EC4\u5408\u7C7B\uFF08Composite\uFF09\u548C\u53F6\u5B50\u7C7B\uFF08Leaf\uFF09\u7684\u7236\u7C7B\uFF0C\u53EF\u4EE5\u628A\u7EC4\u5408\u7C7B\u770B\u6210\u662F\u6811\u7684\u4E2D\u95F4\u8282\u70B9\u3002</p><p>\u7EC4\u5408\u5BF9\u8C61\u62E5\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u56E0\u6B64\u7EC4\u5408\u5BF9\u8C61\u7684\u64CD\u4F5C\u53EF\u4EE5\u59D4\u6258\u7ED9\u7EC4\u4EF6\u5BF9\u8C61\u53BB\u5904\u7406\uFF0C\u800C\u7EC4\u4EF6\u5BF9\u8C61\u53EF\u4EE5\u662F\u53E6\u4E00\u4E2A\u7EC4\u5408\u5BF9\u8C61\u6216\u8005\u53F6\u5B50\u5BF9\u8C61\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/2b8bfd57-b4d1-4a75-bfb0-bcf1fba4014a.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">abstract</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">abstract</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Composite</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span><span class="token punctuation">&gt;</span></span> child<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Composite</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> level<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Composite:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Component</span> component <span class="token operator">:</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            component<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Leaf</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> level<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;left:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u727A\u7272\u900F\u660E\u6027\u6362\u53D6\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF0C\u8FD9\u6837\u5C31\u4E0D\u7528\u8003\u8651\u662F\u53F6\u5B50\u8282\u70B9\u8FD8\u662F\u7EC4\u5408\u8282\u70B9</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Composite</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composite</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composite</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node21 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token string">&quot;21&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node22 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composite</span><span class="token punctuation">(</span><span class="token string">&quot;22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node21<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node22<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> node221 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token string">&quot;221&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node22<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node221<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Composite:root
--left:1
--Composite:2
----left:21
----Composite:22
------left:221
--left:3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><ul><li>javax.swing.JComponent#add(Component)</li><li>java.awt.Container#add(Component)</li><li>java.util.Map#putAll(Map)</li><li>java.util.List#addAll(Collection)</li><li>java.util.Set#addAll(Collection)</li></ul>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u7EC4\u5408.html.vue"]]);export{k as default};
