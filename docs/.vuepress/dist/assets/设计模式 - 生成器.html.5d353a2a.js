import{_ as t,r as p,o as c,c as o,a as n,d as s,b as e,e as l}from"./app.124c272b.js";const i={},u=l(`<h2 id="_5-\u751F\u6210\u5668-builder" tabindex="-1"><a class="header-anchor" href="#_5-\u751F\u6210\u5668-builder" aria-hidden="true">#</a> 5. \u751F\u6210\u5668\uFF08Builder\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u5C01\u88C5\u4E00\u4E2A\u5BF9\u8C61\u7684\u6784\u9020\u8FC7\u7A0B\uFF0C\u5E76\u5141\u8BB8\u6309\u6B65\u9AA4\u6784\u9020\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/db5e376d-0b3e-490e-a43a-3231914b6668.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u6613\u7684 StringBuilder \u5B9E\u73B0\uFF0C\u53C2\u8003\u4E86 JDK 1.8 \u6E90\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        value<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span><span class="token keyword">int</span> minimumCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// overflow-conscious code</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minimumCapacity <span class="token operator">-</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">expandCapacity</span><span class="token punctuation">(</span>minimumCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">expandCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minimumCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> value<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minimumCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> minimumCapacity<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>minimumCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OutOfMemoryError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            newCapacity <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        value <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Create a copy, don&#39;t share the array</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>abcdefghijklmnopqrstuvwxyz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,13),r={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html#put-byte-",target:"_blank",rel:"noopener noreferrer"},k={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuffer.html#append-boolean-",target:"_blank",rel:"noopener noreferrer"},v={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Appendable.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apache/camel/tree/0e195428ee04531be27a0b659005e3aa8d159d23/camel-core/src/main/java/org/apache/camel/builder",target:"_blank",rel:"noopener noreferrer"};function b(h,y){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("java.lang.StringBuilder"),e(a)])]),n("li",null,[n("a",d,[s("java.nio.ByteBuffer"),e(a)])]),n("li",null,[n("a",k,[s("java.lang.StringBuffer"),e(a)])]),n("li",null,[n("a",v,[s("java.lang.Appendable"),e(a)])]),n("li",null,[n("a",m,[s("Apache Camel builders"),e(a)])])])])}const w=t(i,[["render",b],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u751F\u6210\u5668.html.vue"]]);export{w as default};
