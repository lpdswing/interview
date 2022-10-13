import{_ as t,r as c,o as p,c as o,a,d as n,b as e,e as l}from"./app.eb109b4a.js";const i={},r=l(`<h2 id="_4-\u62BD\u8C61\u5DE5\u5382-abstract-factory" tabindex="-1"><a class="header-anchor" href="#_4-\u62BD\u8C61\u5DE5\u5382-abstract-factory" aria-hidden="true">#</a> 4. \u62BD\u8C61\u5DE5\u5382\uFF08Abstract Factory\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7528\u4E8E\u521B\u5EFA <strong>\u76F8\u5173\u7684\u5BF9\u8C61\u5BB6\u65CF</strong> \u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u521B\u5EFA\u7684\u662F\u5BF9\u8C61\u5BB6\u65CF\uFF0C\u4E5F\u5C31\u662F\u5F88\u591A\u5BF9\u8C61\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u5BF9\u8C61\u662F\u76F8\u5173\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u4E00\u8D77\u521B\u5EFA\u51FA\u6765\u3002\u800C\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u53EA\u662F\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u548C\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u6709\u5F88\u5927\u4E0D\u540C\u3002</p><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7528\u5230\u4E86\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u6765\u521B\u5EFA\u5355\u4E00\u5BF9\u8C61\uFF0CAbstractFactory \u4E2D\u7684 createProductA() \u548C createProductB() \u65B9\u6CD5\u90FD\u662F\u8BA9\u5B50\u7C7B\u6765\u5B9E\u73B0\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5355\u72EC\u6765\u770B\u5C31\u662F\u5728\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u7B26\u5408\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u7684\u5B9A\u4E49\u3002</p><p>\u81F3\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u5BB6\u65CF\u8FD9\u4E00\u6982\u5FF5\u662F\u5728 Client \u4F53\u73B0\uFF0CClient \u8981\u901A\u8FC7 AbstractFactory \u540C\u65F6\u8C03\u7528\u4E24\u4E2A\u65B9\u6CD5\u6765\u521B\u5EFA\u51FA\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u5728\u8FD9\u91CC\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u5C31\u6709\u5F88\u5927\u7684\u76F8\u5173\u6027\uFF0CClient \u9700\u8981\u540C\u65F6\u521B\u5EFA\u51FA\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u3002</p><p>\u4ECE\u9AD8\u5C42\u6B21\u6765\u770B\uFF0C\u62BD\u8C61\u5DE5\u5382\u4F7F\u7528\u4E86\u7EC4\u5408\uFF0C\u5373 Cilent \u7EC4\u5408\u4E86 AbstractFactory\uFF0C\u800C\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u4F7F\u7528\u4E86\u7EE7\u627F\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e2190c36-8b27-4690-bde5-9911020a1294.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductA</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProductB</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA1</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractProductA</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA2</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractProductA</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB1</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractProductB</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductB2</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractProductB</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token class-name">AbstractProductA</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token class-name">AbstractProductB</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">AbstractProductA</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">AbstractProductB</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductB1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactory2</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">AbstractProductA</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductA2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">AbstractProductB</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductB2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractFactory</span> abstractFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFactory1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractProductA</span> productA <span class="token operator">=</span> abstractFactory<span class="token punctuation">.</span><span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractProductB</span> productB <span class="token operator">=</span> abstractFactory<span class="token punctuation">.</span><span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// do something with productA and productB</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,22),u={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/parsers/DocumentBuilderFactory.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/transform/TransformerFactory.html#newInstance--",target:"_blank",rel:"noopener noreferrer"},k={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/xpath/XPathFactory.html#newInstance--",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=c("ExternalLinkIcon");return p(),o("div",null,[r,a("ul",null,[a("li",null,[a("a",u,[n("javax.xml.parsers.DocumentBuilderFactory"),e(s)])]),a("li",null,[a("a",d,[n("javax.xml.transform.TransformerFactory"),e(s)])]),a("li",null,[a("a",k,[n("javax.xml.xpath.XPathFactory"),e(s)])])])])}const y=t(i,[["render",v],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u62BD\u8C61\u5DE5\u5382.html.vue"]]);export{y as default};
