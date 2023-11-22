import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,a,b as n,d,e}from"./app-8addc70a.js";const c={},m={href:"https://leetcode.cn/problems/move-pieces-to-obtain-a-string/description/",target:"_blank",rel:"noopener noreferrer"},o=e('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><p>从题目要求可知，需要把start中的字符进行移动匹配target，这就像是华容道，只是放到了一条线上。那我们只要思考start中每个标记是否能移动到target中相同的位置即可</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>因为是要让start和target一样，因此我们是用双指针，遍历target中的位置上的标记，然后看start中是否有最近可移动的标记移动到相同位置。</p><p>我们从头开始找标记，找到target中的标记位置i1，start中的标记i，是否匹配的边界条件如下：</p><ol><li>start[i]==target[i1]</li><li>char==&#39;L&#39;,则i&gt;=i1</li><li>char==&#39;R&#39;,则i&lt;=i1</li><li>遍历完成之后判断是否有多余标记</li></ol><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',7),v=a("ul",null,[a("li",null,[a("p",null,[n("时间复杂度: "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"n"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(n)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mclose"},")")])])])])]),a("li",null,[a("p",null,[n("空间复杂度: "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mn",null,"1"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(1)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord"},"1"),a("span",{class:"mclose"},")")])])])])])],-1),h=e(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
 class Solution {
        public boolean canChange(String start, String target) {
            int i = 0, i1 = 0;
            int n = start.length();
            while (i1 &lt; n) {

                //1.找到target中不是&#39;_&#39;的字符
                while (i1 &lt; n &amp;&amp; target.charAt(i1) == &#39;_&#39;) {
                    i1++;
                }
                //2.找到start中不是&#39;_&#39;的字符
                while (i &lt; n &amp;&amp; start.charAt(i) == &#39;_&#39;) {
                    i++;
                }
                //3.如果其中一个字符串的指针到达末尾，检查两个指针是否都到达末尾
                if (i1 == n || i == n) {
                    return i == n &amp;&amp; i1 == n;
                }
                //4.检查两个字符是否相同，和是否满足&#39;L&#39;在右边，&#39;R&#39;在左边的条件
                if (start.charAt(i) != target.charAt(i1) || (start.charAt(i) == &#39;L&#39; &amp;&amp; i &lt; i1) || (start.charAt(i) == &#39;R&#39; &amp;&amp; i &gt; i1)) {
                    return false;
                }
                i++;
                i1++;
            }
            //5.检查最后一个指针在start中是否到达末尾
            while (i &lt; n &amp;&amp; start.charAt(i) == &#39;_&#39;) {
                i++;
            }
            return i == n &amp;&amp; i1 == n;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(p,b){const i=l("ExternalLinkIcon");return t(),r("div",null,[a("blockquote",null,[a("p",null,[n("LeetCode题目: "),a("a",m,[n("2337. 移动片段得到字符串"),d(i)])])]),o,v,h])}const x=s(c,[["render",u],["__file","2023年8月21日.html.vue"]]);export{x as default};
