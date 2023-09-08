import{_ as t,r as c,o as p,c as o,a as n,d as s,b as i,f as a}from"./app.5177f3e3.js";const l={},u=a('<h2 id="\u5907\u5FD8\u5F55-memento" tabindex="-1"><a class="header-anchor" href="#\u5907\u5FD8\u5F55-memento" aria-hidden="true">#</a> \u5907\u5FD8\u5F55\uFF08Memento\uFF09</h2><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>\u5728\u4E0D\u8FDD\u53CD\u5C01\u88C5\u7684\u60C5\u51B5\u4E0B\u83B7\u5F97\u5BF9\u8C61\u7684\u5185\u90E8\u72B6\u6001\uFF0C\u4ECE\u800C\u5728\u9700\u8981\u65F6\u53EF\u4EE5\u5C06\u5BF9\u8C61\u6062\u590D\u5230\u6700\u521D\u72B6\u6001\u3002</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><ul><li>Originator\uFF1A\u539F\u59CB\u5BF9\u8C61</li><li>Caretaker\uFF1A\u8D1F\u8D23\u4FDD\u5B58\u597D\u5907\u5FD8\u5F55</li><li>Memento\uFF1A\u5907\u5FD8\u5F55\uFF0C\u5B58\u50A8\u539F\u59CB\u5BF9\u8C61\u7684\u72B6\u6001\u3002\u5907\u5FD8\u5F55\u5B9E\u9645\u4E0A\u6709\u4E24\u4E2A\u63A5\u53E3\uFF0C\u4E00\u4E2A\u662F\u63D0\u4F9B\u7ED9 Caretaker \u7684\u7A84\u63A5\u53E3\uFF1A\u5B83\u53EA\u80FD\u5C06\u5907\u5FD8\u5F55\u4F20\u9012\u7ED9\u5176\u5B83\u5BF9\u8C61\uFF1B\u4E00\u4E2A\u662F\u63D0\u4F9B\u7ED9 Originator \u7684\u5BBD\u63A5\u53E3\uFF0C\u5141\u8BB8\u5B83\u8BBF\u95EE\u5230\u5148\u524D\u72B6\u6001\u6240\u9700\u7684\u6240\u6709\u6570\u636E\u3002\u7406\u60F3\u60C5\u51B5\u662F\u53EA\u5141\u8BB8 Originator \u8BBF\u95EE\u672C\u5907\u5FD8\u5F55\u7684\u5185\u90E8\u72B6\u6001\u3002</li></ul><div align="center"><img src="https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/50678f34-694f-45a4-91c6-34d985c83fee.png"></div><br><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>\u4EE5\u4E0B\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u8BA1\u7B97\u5668\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u8F93\u5165\u4E24\u4E2A\u503C\uFF0C\u7136\u540E\u8BA1\u7B97\u8FD9\u4E24\u4E2A\u503C\u7684\u548C\u3002\u5907\u5FD8\u5F55\u6A21\u5F0F\u5141\u8BB8\u5C06\u8FD9\u4E24\u4E2A\u503C\u5B58\u50A8\u8D77\u6765\uFF0C\u7136\u540E\u5728\u67D0\u4E2A\u65F6\u523B\u7528\u5B58\u50A8\u7684\u72B6\u6001\u8FDB\u884C\u6062\u590D\u3002</p>',9),r={href:"https://www.oodesign.com/memento-pattern-calculator-example-java-sourcecode.html",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Originator Interface
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token comment">// Create Memento</span>
    <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// setMemento</span>
    <span class="token keyword">void</span> <span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToCareTaker</span> memento<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Originator Implementation
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorImp</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> firstNumber<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// create a memento object used for restoring two numbers</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PreviousCalculationImp</span><span class="token punctuation">(</span>firstNumber<span class="token punctuation">,</span> secondNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToCareTaker</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToOriginator</span><span class="token punctuation">)</span> memento<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">PreviousCalculationToOriginator</span><span class="token punctuation">)</span> memento<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// result is adding two numbers</span>
        <span class="token keyword">return</span> firstNumber <span class="token operator">+</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> firstNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Memento Interface to Originator
 *
 * This interface allows the originator to restore its state
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PreviousCalculationToOriginator</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *  Memento interface to CalculatorOperator (Caretaker)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PreviousCalculationToCareTaker</span> <span class="token punctuation">{</span>
    <span class="token comment">// no operations permitted for the caretaker</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Memento Object Implementation
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * Note that this object implements both interfaces to Originator and CareTaker
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PreviousCalculationImp</span> <span class="token keyword">implements</span> <span class="token class-name">PreviousCalculationToCareTaker</span><span class="token punctuation">,</span>
        <span class="token class-name">PreviousCalculationToOriginator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> firstNumber<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PreviousCalculationImp</span><span class="token punctuation">(</span><span class="token keyword">int</span> firstNumber<span class="token punctuation">,</span> <span class="token keyword">int</span> secondNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNumber <span class="token operator">=</span> firstNumber<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>secondNumber <span class="token operator">=</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getFirstNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSecondNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> secondNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * CareTaker object
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// program starts</span>
        <span class="token class-name">Calculator</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// assume user enters two numbers</span>
        calculator<span class="token punctuation">.</span><span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        calculator<span class="token punctuation">.</span><span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// find result</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Store result of this calculation in case of error</span>
        <span class="token class-name">PreviousCalculationToCareTaker</span> memento <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">backupLastCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user enters a number</span>
        calculator<span class="token punctuation">.</span><span class="token function">setFirstNumber</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user enters a wrong second number and calculates result</span>
        calculator<span class="token punctuation">.</span><span class="token function">setSecondNumber</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">290</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// calculate result</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// user hits CTRL + Z to undo last operation and see last result</span>
        calculator<span class="token punctuation">.</span><span class="token function">restorePreviousCalculation</span><span class="token punctuation">(</span>memento<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// result restored</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">getCalculationResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>110
-273
110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><ul><li>java.io.Serializable</li></ul>`,9);function k(m,v){const e=c("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("\u5B9E\u73B0\u53C2\u8003\uFF1A"),n("a",r,[s("Memento Pattern - Calculator Example - Java Sourcecode"),i(e)])]),d])}const f=t(l,[["render",k],["__file","\u8BBE\u8BA1\u6A21\u5F0F - \u5907\u5FD8\u5F55.html.vue"]]);export{f as default};
