import{_ as t,r as p,o,c,a as n,d as a,b as e,e as i}from"./app.124c272b.js";const l={},u=i(`<h2 id="_7-\u89C2\u5BDF\u8005-observer" tabindex="-1"><a class="header-anchor" href="#_7-\u89C2\u5BDF\u8005-observer" aria-hidden="true">#</a> 7. \u89C2\u5BDF\u8005\uFF08Observer\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u5B9A\u4E49\u5BF9\u8C61\u4E4B\u95F4\u7684\u4E00\u5BF9\u591A\u4F9D\u8D56\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u5B83\u7684\u6240\u6709\u4F9D\u8D56\u90FD\u4F1A\u6536\u5230\u901A\u77E5\u5E76\u4E14\u81EA\u52A8\u66F4\u65B0\u72B6\u6001\u3002</p><p>\u4E3B\u9898\uFF08Subject\uFF09\u662F\u88AB\u89C2\u5BDF\u7684\u5BF9\u8C61\uFF0C\u800C\u5176\u6240\u6709\u4F9D\u8D56\u8005\uFF08Observer\uFF09\u79F0\u4E3A\u89C2\u5BDF\u8005\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/7a3c6a30-c735-4edb-8115-337288a4f0f2.jpg" width="600"></div><br><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u4E3B\u9898\uFF08Subject\uFF09\u5177\u6709\u6CE8\u518C\u548C\u79FB\u9664\u89C2\u5BDF\u8005\u3001\u5E76\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005\u7684\u529F\u80FD\uFF0C\u4E3B\u9898\u662F\u901A\u8FC7\u7EF4\u62A4\u4E00\u5F20\u89C2\u5BDF\u8005\u5217\u8868\u6765\u5B9E\u73B0\u8FD9\u4E9B\u64CD\u4F5C\u7684\u3002</p><p>\u89C2\u5BDF\u8005\uFF08Observer\uFF09\u7684\u6CE8\u518C\u529F\u80FD\u9700\u8981\u8C03\u7528\u4E3B\u9898\u7684 registerObserver() \u65B9\u6CD5\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/a8c8f894-a712-447c-9906-5caef6a016e3.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>\u5929\u6C14\u6570\u636E\u5E03\u544A\u677F\u4F1A\u5728\u5929\u6C14\u4FE1\u606F\u53D1\u751F\u6539\u53D8\u65F6\u66F4\u65B0\u5176\u5185\u5BB9\uFF0C\u5E03\u544A\u677F\u6709\u591A\u4E2A\uFF0C\u5E76\u4E14\u5728\u5C06\u6765\u4F1A\u7EE7\u7EED\u589E\u52A0\u3002</p><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/b1df9732-86ce-4d69-9f06-fba1db7b3b5a.jpg"></div><br><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observers<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> observers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            observers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Observer</span> o <span class="token operator">:</span> observers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            o<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> humidity<span class="token punctuation">,</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temp<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StatisticsDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">StatisticsDisplay</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> weatherData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        weatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temp<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;StatisticsDisplay.update: &quot;</span> <span class="token operator">+</span> temp <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> humidity <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CurrentConditionsDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">CurrentConditionsDisplay</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> weatherData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        weatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temp<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CurrentConditionsDisplay.update: &quot;</span> <span class="token operator">+</span> temp <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> humidity <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherStation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CurrentConditionsDisplay</span> currentConditionsDisplay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CurrentConditionsDisplay</span><span class="token punctuation">(</span>weatherData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StatisticsDisplay</span> statisticsDisplay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatisticsDisplay</span><span class="token punctuation">(</span>weatherData<span class="token punctuation">)</span><span class="token punctuation">;</span>

        weatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>CurrentConditionsDisplay.update: 0.0 0.0 0.0
StatisticsDisplay.update: 0.0 0.0 0.0
CurrentConditionsDisplay.update: 1.0 1.0 1.0
StatisticsDisplay.update: 1.0 1.0 1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3>`,23),r={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ReactiveX/RxJava",target:"_blank",rel:"noopener noreferrer"};function m(b,y){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("java.util.Observer"),e(s)])]),n("li",null,[n("a",d,[a("java.util.EventListener"),e(s)])]),n("li",null,[n("a",k,[a("javax.servlet.http.HttpSessionBindingListener"),e(s)])]),n("li",null,[n("a",v,[a("RxJava"),e(s)])])])])}const w=t(l,[["render",m],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u89C2\u5BDF\u8005.html.vue"]]);export{w as default};
