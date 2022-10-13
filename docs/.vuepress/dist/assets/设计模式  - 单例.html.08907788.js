import{_ as t,r as p,o as c,c as i,a as n,d as a,b as e,e as o}from"./app.124c272b.js";const l={},u=o(`<h2 id="\u5355\u4F8B-singleton" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B-singleton" aria-hidden="true">#</a> \u5355\u4F8B\uFF08Singleton\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u786E\u4FDD\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u8BE5\u5B9E\u4F8B\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u4F7F\u7528\u4E00\u4E2A\u79C1\u6709\u6784\u9020\u51FD\u6570\u3001\u4E00\u4E2A\u79C1\u6709\u9759\u6001\u53D8\u91CF\u4EE5\u53CA\u4E00\u4E2A\u516C\u6709\u9759\u6001\u51FD\u6570\u6765\u5B9E\u73B0\u3002</p><p>\u79C1\u6709\u6784\u9020\u51FD\u6570\u4FDD\u8BC1\u4E86\u4E0D\u80FD\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u53EA\u80FD\u901A\u8FC7\u516C\u6709\u9759\u6001\u51FD\u6570\u8FD4\u56DE\u552F\u4E00\u7684\u79C1\u6709\u9759\u6001\u53D8\u91CF\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/eca1f422-8381-409b-ad04-98ef39ae38ba.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><h4 id="i-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#i-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168" aria-hidden="true">#</a> \u2160 \u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168</h4><p>\u4EE5\u4E0B\u5B9E\u73B0\u4E2D\uFF0C\u79C1\u6709\u9759\u6001\u53D8\u91CF uniqueInstance \u88AB\u5EF6\u8FDF\u5B9E\u4F8B\u5316\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\uFF0C\u5982\u679C\u6CA1\u6709\u7528\u5230\u8BE5\u7C7B\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u5B9E\u4F8B\u5316 uniqueInstance\uFF0C\u4ECE\u800C\u8282\u7EA6\u8D44\u6E90\u3002</p><p>\u8FD9\u4E2A\u5B9E\u73B0\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u5982\u679C\u591A\u4E2A\u7EBF\u7A0B\u80FD\u591F\u540C\u65F6\u8FDB\u5165 <code>if (uniqueInstance == null)</code> \uFF0C\u5E76\u4E14\u6B64\u65F6 uniqueInstance \u4E3A null\uFF0C\u90A3\u4E48\u4F1A\u6709\u591A\u4E2A\u7EBF\u7A0B\u6267\u884C <code>uniqueInstance = new Singleton();</code> \u8BED\u53E5\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u5B9E\u4F8B\u5316\u591A\u6B21 uniqueInstance\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> uniqueInstance<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> uniqueInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ii-\u997F\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#ii-\u997F\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168" aria-hidden="true">#</a> \u2161 \u997F\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168</h4><p>\u7EBF\u7A0B\u4E0D\u5B89\u5168\u95EE\u9898\u4E3B\u8981\u662F\u7531\u4E8E uniqueInstance \u88AB\u5B9E\u4F8B\u5316\u591A\u6B21\uFF0C\u91C7\u53D6\u76F4\u63A5\u5B9E\u4F8B\u5316 uniqueInstance \u7684\u65B9\u5F0F\u5C31\u4E0D\u4F1A\u4EA7\u751F\u7EBF\u7A0B\u4E0D\u5B89\u5168\u95EE\u9898\u3002</p><p>\u4F46\u662F\u76F4\u63A5\u5B9E\u4F8B\u5316\u7684\u65B9\u5F0F\u4E5F\u4E22\u5931\u4E86\u5EF6\u8FDF\u5B9E\u4F8B\u5316\u5E26\u6765\u7684\u8282\u7EA6\u8D44\u6E90\u7684\u597D\u5904\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="iii-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#iii-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168" aria-hidden="true">#</a> \u2162 \u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168</h4><p>\u53EA\u9700\u8981\u5BF9 getUniqueInstance() \u65B9\u6CD5\u52A0\u9501\uFF0C\u90A3\u4E48\u5728\u4E00\u4E2A\u65F6\u95F4\u70B9\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u80FD\u591F\u8FDB\u5165\u8BE5\u65B9\u6CD5\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u5B9E\u4F8B\u5316\u591A\u6B21 uniqueInstance\u3002</p><p>\u4F46\u662F\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8FDB\u5165\u8BE5\u65B9\u6CD5\u4E4B\u540E\uFF0C\u5176\u5B83\u8BD5\u56FE\u8FDB\u5165\u8BE5\u65B9\u6CD5\u7684\u7EBF\u7A0B\u90FD\u5FC5\u987B\u7B49\u5F85\uFF0C\u5373\u4F7F uniqueInstance \u5DF2\u7ECF\u88AB\u5B9E\u4F8B\u5316\u4E86\u3002\u8FD9\u4F1A\u8BA9\u7EBF\u7A0B\u963B\u585E\u65F6\u95F4\u8FC7\u957F\uFF0C\u56E0\u6B64\u8BE5\u65B9\u6CD5\u6709\u6027\u80FD\u95EE\u9898\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> uniqueInstance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iv-\u53CC\u91CD\u6821\u9A8C\u9501-\u7EBF\u7A0B\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#iv-\u53CC\u91CD\u6821\u9A8C\u9501-\u7EBF\u7A0B\u5B89\u5168" aria-hidden="true">#</a> \u2163 \u53CC\u91CD\u6821\u9A8C\u9501-\u7EBF\u7A0B\u5B89\u5168</h4><p>uniqueInstance \u53EA\u9700\u8981\u88AB\u5B9E\u4F8B\u5316\u4E00\u6B21\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E86\u3002\u52A0\u9501\u64CD\u4F5C\u53EA\u9700\u8981\u5BF9\u5B9E\u4F8B\u5316\u90A3\u90E8\u5206\u7684\u4EE3\u7801\u8FDB\u884C\uFF0C\u53EA\u6709\u5F53 uniqueInstance \u6CA1\u6709\u88AB\u5B9E\u4F8B\u5316\u65F6\uFF0C\u624D\u9700\u8981\u8FDB\u884C\u52A0\u9501\u3002</p><p>\u53CC\u91CD\u6821\u9A8C\u9501\u5148\u5224\u65AD uniqueInstance \u662F\u5426\u5DF2\u7ECF\u88AB\u5B9E\u4F8B\u5316\uFF0C\u5982\u679C\u6CA1\u6709\u88AB\u5B9E\u4F8B\u5316\uFF0C\u90A3\u4E48\u624D\u5BF9\u5B9E\u4F8B\u5316\u8BED\u53E5\u8FDB\u884C\u52A0\u9501\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> uniqueInstance<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> uniqueInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8003\u8651\u4E0B\u9762\u7684\u5B9E\u73B0\uFF0C\u4E5F\u5C31\u662F\u53EA\u4F7F\u7528\u4E86\u4E00\u4E2A if \u8BED\u53E5\u3002\u5728 uniqueInstance == null \u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u6267\u884C\u4E86 if \u8BED\u53E5\uFF0C\u90A3\u4E48\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u4F1A\u8FDB\u5165 if \u8BED\u53E5\u5757\u5185\u3002\u867D\u7136\u5728 if \u8BED\u53E5\u5757\u5185\u6709\u52A0\u9501\u64CD\u4F5C\uFF0C\u4F46\u662F\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u4F1A\u6267\u884C <code>uniqueInstance = new Singleton();</code> \u8FD9\u6761\u8BED\u53E5\uFF0C\u53EA\u662F\u5148\u540E\u7684\u95EE\u9898\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8FDB\u884C\u4E24\u6B21\u5B9E\u4F8B\u5316\u3002\u56E0\u6B64\u5FC5\u987B\u4F7F\u7528\u53CC\u91CD\u6821\u9A8C\u9501\uFF0C\u4E5F\u5C31\u662F\u9700\u8981\u4F7F\u7528\u4E24\u4E2A if \u8BED\u53E5\uFF1A\u7B2C\u4E00\u4E2A if \u8BED\u53E5\u7528\u6765\u907F\u514D uniqueInstance \u5DF2\u7ECF\u88AB\u5B9E\u4F8B\u5316\u4E4B\u540E\u7684\u52A0\u9501\u64CD\u4F5C\uFF0C\u800C\u7B2C\u4E8C\u4E2A if \u8BED\u53E5\u8FDB\u884C\u4E86\u52A0\u9501\uFF0C\u6240\u4EE5\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u8FDB\u5165\uFF0C\u5C31\u4E0D\u4F1A\u51FA\u73B0 uniqueInstance == null \u65F6\u4E24\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u64CD\u4F5C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uniqueInstance \u91C7\u7528 volatile \u5173\u952E\u5B57\u4FEE\u9970\u4E5F\u662F\u5F88\u6709\u5FC5\u8981\u7684\uFF0C <code>uniqueInstance = new Singleton();</code> \u8FD9\u6BB5\u4EE3\u7801\u5176\u5B9E\u662F\u5206\u4E3A\u4E09\u6B65\u6267\u884C\uFF1A</p><ol><li>\u4E3A uniqueInstance \u5206\u914D\u5185\u5B58\u7A7A\u95F4</li><li>\u521D\u59CB\u5316 uniqueInstance</li><li>\u5C06 uniqueInstance \u6307\u5411\u5206\u914D\u7684\u5185\u5B58\u5730\u5740</li></ol><p>\u4F46\u662F\u7531\u4E8E JVM \u5177\u6709\u6307\u4EE4\u91CD\u6392\u7684\u7279\u6027\uFF0C\u6267\u884C\u987A\u5E8F\u6709\u53EF\u80FD\u53D8\u6210 1&gt;3&gt;2\u3002\u6307\u4EE4\u91CD\u6392\u5728\u5355\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4E0D\u4F1A\u51FA\u73B0\u95EE\u9898\uFF0C\u4F46\u662F\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u8FD8\u6CA1\u6709\u521D\u59CB\u5316\u7684\u5B9E\u4F8B\u3002\u4F8B\u5982\uFF0C\u7EBF\u7A0B T<sub>1</sub> \u6267\u884C\u4E86 1 \u548C 3\uFF0C\u6B64\u65F6 T<sub>2</sub> \u8C03\u7528 getUniqueInstance() \u540E\u53D1\u73B0 uniqueInstance \u4E0D\u4E3A\u7A7A\uFF0C\u56E0\u6B64\u8FD4\u56DE uniqueInstance\uFF0C\u4F46\u6B64\u65F6 uniqueInstance \u8FD8\u672A\u88AB\u521D\u59CB\u5316\u3002</p><p>\u4F7F\u7528 volatile \u53EF\u4EE5\u7981\u6B62 JVM \u7684\u6307\u4EE4\u91CD\u6392\uFF0C\u4FDD\u8BC1\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u3002</p><h4 id="v-\u9759\u6001\u5185\u90E8\u7C7B\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#v-\u9759\u6001\u5185\u90E8\u7C7B\u5B9E\u73B0" aria-hidden="true">#</a> \u2164 \u9759\u6001\u5185\u90E8\u7C7B\u5B9E\u73B0</h4><p>\u5F53 Singleton \u7C7B\u88AB\u52A0\u8F7D\u65F6\uFF0C\u9759\u6001\u5185\u90E8\u7C7B SingletonHolder \u6CA1\u6709\u88AB\u52A0\u8F7D\u8FDB\u5185\u5B58\u3002\u53EA\u6709\u5F53\u8C03\u7528 <code>getUniqueInstance()</code> \u65B9\u6CD5\u4ECE\u800C\u89E6\u53D1 <code>SingletonHolder.INSTANCE</code> \u65F6 SingletonHolder \u624D\u4F1A\u88AB\u52A0\u8F7D\uFF0C\u6B64\u65F6\u521D\u59CB\u5316 INSTANCE \u5B9E\u4F8B\uFF0C\u5E76\u4E14 JVM \u80FD\u786E\u4FDD INSTANCE \u53EA\u88AB\u5B9E\u4F8B\u5316\u4E00\u6B21\u3002</p><p>\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u4EC5\u5177\u6709\u5EF6\u8FDF\u521D\u59CB\u5316\u7684\u597D\u5904\uFF0C\u800C\u4E14\u7531 JVM \u63D0\u4F9B\u4E86\u5BF9\u7EBF\u7A0B\u5B89\u5168\u7684\u652F\u6301\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vi-\u679A\u4E3E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vi-\u679A\u4E3E\u5B9E\u73B0" aria-hidden="true">#</a> \u2165 \u679A\u4E3E\u5B9E\u73B0</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> objName<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getObjName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> objName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setObjName</span><span class="token punctuation">(</span><span class="token class-name">String</span> objName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>objName <span class="token operator">=</span> objName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// \u5355\u4F8B\u6D4B\u8BD5</span>
        <span class="token class-name">Singleton</span> firstSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
        firstSingleton<span class="token punctuation">.</span><span class="token function">setObjName</span><span class="token punctuation">(</span><span class="token string">&quot;firstName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstSingleton<span class="token punctuation">.</span><span class="token function">getObjName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Singleton</span> secondSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
        secondSingleton<span class="token punctuation">.</span><span class="token function">setObjName</span><span class="token punctuation">(</span><span class="token string">&quot;secondName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>firstSingleton<span class="token punctuation">.</span><span class="token function">getObjName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>secondSingleton<span class="token punctuation">.</span><span class="token function">getObjName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u53CD\u5C04\u83B7\u53D6\u5B9E\u4F8B\u6D4B\u8BD5</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Singleton</span><span class="token punctuation">[</span><span class="token punctuation">]</span> enumConstants <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getEnumConstants</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span> enumConstant <span class="token operator">:</span> enumConstants<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumConstant<span class="token punctuation">.</span><span class="token function">getObjName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>firstName
secondName
secondName
secondName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u5B9E\u73B0\u53EF\u4EE5\u9632\u6B62\u53CD\u5C04\u653B\u51FB\u3002\u5728\u5176\u5B83\u5B9E\u73B0\u4E2D\uFF0C\u901A\u8FC7 setAccessible() \u65B9\u6CD5\u53EF\u4EE5\u5C06\u79C1\u6709\u6784\u9020\u51FD\u6570\u7684\u8BBF\u95EE\u7EA7\u522B\u8BBE\u7F6E\u4E3A public\uFF0C\u7136\u540E\u8C03\u7528\u6784\u9020\u51FD\u6570\u4ECE\u800C\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u5982\u679C\u8981\u9632\u6B62\u8FD9\u79CD\u653B\u51FB\uFF0C\u9700\u8981\u5728\u6784\u9020\u51FD\u6570\u4E2D\u6DFB\u52A0\u9632\u6B62\u591A\u6B21\u5B9E\u4F8B\u5316\u7684\u4EE3\u7801\u3002\u8BE5\u5B9E\u73B0\u662F\u7531 JVM \u4FDD\u8BC1\u53EA\u4F1A\u5B9E\u4F8B\u5316\u4E00\u6B21\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u51FA\u73B0\u4E0A\u8FF0\u7684\u53CD\u5C04\u653B\u51FB\u3002</p><p>\u8BE5\u5B9E\u73B0\u5728\u591A\u6B21\u5E8F\u5217\u5316\u548C\u5E8F\u5217\u5316\u4E4B\u540E\uFF0C\u4E0D\u4F1A\u5F97\u5230\u591A\u4E2A\u5B9E\u4F8B\u3002\u800C\u5176\u5B83\u5B9E\u73B0\u9700\u8981\u4F7F\u7528 transient \u4FEE\u9970\u6240\u6709\u5B57\u6BB5\uFF0C\u5E76\u4E14\u5B9E\u73B0\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u7684\u65B9\u6CD5\u3002</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><ul><li>Logger Classes</li><li>Configuration Classes</li><li>Accesing resources in shared mode</li><li>Factories implemented as Singletons</li></ul><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,43),d={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#getRuntime%28%29",target:"_blank",rel:"noopener noreferrer"},r={href:"http://docs.oracle.com/javase/8/docs/api/java/awt/Desktop.html#getDesktop--",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getSecurityManager--",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return c(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("java.lang.Runtime#getRuntime()"),e(s)])]),n("li",null,[n("a",r,[a("java.awt.Desktop#getDesktop()"),e(s)])]),n("li",null,[n("a",k,[a("java.lang.System#getSecurityManager()"),e(s)])])])])}const h=t(l,[["render",v],["__file","\u8BBE\u8BA1\u6A21\u5F0F  - \u5355\u4F8B.html.vue"]]);export{h as default};
