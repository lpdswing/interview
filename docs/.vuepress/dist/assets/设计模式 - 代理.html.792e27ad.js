import{_ as n,o as s,c as a,e}from"./app.eb109b4a.js";const t={},p=e(`<h2 id="\u4EE3\u7406-proxy" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406-proxy" aria-hidden="true">#</a> \u4EE3\u7406\uFF08Proxy\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u63A7\u5236\u5BF9\u5176\u5B83\u5BF9\u8C61\u7684\u8BBF\u95EE\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><p>\u4EE3\u7406\u6709\u4EE5\u4E0B\u56DB\u7C7B\uFF1A</p><ul><li>\u8FDC\u7A0B\u4EE3\u7406\uFF08Remote Proxy\uFF09\uFF1A\u63A7\u5236\u5BF9\u8FDC\u7A0B\u5BF9\u8C61\uFF08\u4E0D\u540C\u5730\u5740\u7A7A\u95F4\uFF09\u7684\u8BBF\u95EE\uFF0C\u5B83\u8D1F\u8D23\u5C06\u8BF7\u6C42\u53CA\u5176\u53C2\u6570\u8FDB\u884C\u7F16\u7801\uFF0C\u5E76\u5411\u4E0D\u540C\u5730\u5740\u7A7A\u95F4\u4E2D\u7684\u5BF9\u8C61\u53D1\u9001\u5DF2\u7ECF\u7F16\u7801\u7684\u8BF7\u6C42\u3002</li><li>\u865A\u62DF\u4EE3\u7406\uFF08Virtual Proxy\uFF09\uFF1A\u6839\u636E\u9700\u8981\u521B\u5EFA\u5F00\u9500\u5F88\u5927\u7684\u5BF9\u8C61\uFF0C\u5B83\u53EF\u4EE5\u7F13\u5B58\u5B9E\u4F53\u7684\u9644\u52A0\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u5EF6\u8FDF\u5BF9\u5B83\u7684\u8BBF\u95EE\uFF0C\u4F8B\u5982\u5728\u7F51\u7AD9\u52A0\u8F7D\u4E00\u4E2A\u5F88\u5927\u56FE\u7247\u65F6\uFF0C\u4E0D\u80FD\u9A6C\u4E0A\u5B8C\u6210\uFF0C\u53EF\u4EE5\u7528\u865A\u62DF\u4EE3\u7406\u7F13\u5B58\u56FE\u7247\u7684\u5927\u5C0F\u4FE1\u606F\uFF0C\u7136\u540E\u751F\u6210\u4E00\u5F20\u4E34\u65F6\u56FE\u7247\u4EE3\u66FF\u539F\u59CB\u56FE\u7247\u3002</li><li>\u4FDD\u62A4\u4EE3\u7406\uFF08Protection Proxy\uFF09\uFF1A\u6309\u6743\u9650\u63A7\u5236\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u5B83\u8D1F\u8D23\u68C0\u67E5\u8C03\u7528\u8005\u662F\u5426\u5177\u6709\u5B9E\u73B0\u4E00\u4E2A\u8BF7\u6C42\u6240\u5FC5\u987B\u7684\u8BBF\u95EE\u6743\u9650\u3002</li><li>\u667A\u80FD\u4EE3\u7406\uFF08Smart Reference\uFF09\uFF1A\u53D6\u4EE3\u4E86\u7B80\u5355\u7684\u6307\u9488\uFF0C\u5B83\u5728\u8BBF\u95EE\u5BF9\u8C61\u65F6\u6267\u884C\u4E00\u4E9B\u9644\u52A0\u64CD\u4F5C\uFF1A\u8BB0\u5F55\u5BF9\u8C61\u7684\u5F15\u7528\u6B21\u6570\uFF1B\u5F53\u7B2C\u4E00\u6B21\u5F15\u7528\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5C06\u5B83\u88C5\u5165\u5185\u5B58\uFF1B\u5728\u8BBF\u95EE\u4E00\u4E2A\u5B9E\u9645\u5BF9\u8C61\u524D\uFF0C\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u9501\u5B9A\u4E86\u5B83\uFF0C\u4EE5\u786E\u4FDD\u5176\u5B83\u5BF9\u8C61\u4E0D\u80FD\u6539\u53D8\u5B83\u3002</li></ul><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/9b679ff5-94c6-48a7-b9b7-2ea868e828ed.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u865A\u62DF\u4EE3\u7406\u7684\u5B9E\u73B0\uFF0C\u6A21\u62DF\u4E86\u56FE\u7247\u5EF6\u8FDF\u52A0\u8F7D\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u4E0E\u56FE\u7247\u5927\u5C0F\u76F8\u7B49\u7684\u4E34\u65F6\u5185\u5BB9\u53BB\u66FF\u6362\u539F\u59CB\u56FE\u7247\uFF0C\u76F4\u5230\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u624D\u5C06\u56FE\u7247\u663E\u793A\u51FA\u6765\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Image</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">showImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HighResolutionImage</span> <span class="token keyword">implements</span> <span class="token class-name">Image</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">URL</span> imageURL<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> startTime<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> width<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HighResolutionImage</span><span class="token punctuation">(</span><span class="token class-name">URL</span> imageURL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>imageURL <span class="token operator">=</span> imageURL<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6A21\u62DF\u56FE\u7247\u52A0\u8F7D\uFF0C\u5EF6\u8FDF 3s \u52A0\u8F7D\u5B8C\u6210</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> endTime <span class="token operator">-</span> startTime <span class="token operator">&gt;</span> <span class="token number">3000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Real Image: &quot;</span> <span class="token operator">+</span> imageURL<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImageProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Image</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">HighResolutionImage</span> highResolutionImage<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ImageProxy</span><span class="token punctuation">(</span><span class="token class-name">HighResolutionImage</span> highResolutionImage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>highResolutionImage <span class="token operator">=</span> highResolutionImage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>highResolutionImage<span class="token punctuation">.</span><span class="token function">isLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Temp Image: &quot;</span> <span class="token operator">+</span> highResolutionImage<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> highResolutionImage<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        highResolutionImage<span class="token punctuation">.</span><span class="token function">showImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImageViewer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> image <span class="token operator">=</span> <span class="token string">&quot;http://image.jpg&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HighResolutionImage</span> highResolutionImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HighResolutionImage</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ImageProxy</span> imageProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageProxy</span><span class="token punctuation">(</span>highResolutionImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        imageProxy<span class="token punctuation">.</span><span class="token function">showImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><ul><li>java.lang.reflect.Proxy</li><li>RMI</li></ul>`,16),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u4EE3\u7406.html.vue"]]);export{k as default};
