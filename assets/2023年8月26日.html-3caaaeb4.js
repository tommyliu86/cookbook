import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as r,a as n,d as e,b as d,e as a}from"./app-02ec6ea0.js";const c={},m={href:"https://leetcode.cn/problems/summary-ranges/description/",target:"_blank",rel:"noopener noreferrer"},o=a('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3><p>分析题目，要我们找到每段连续增加的序列，记录子序列的起始和终止大小即可</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>因此可以直接使用一次遍历，每次从当前 i 出发向后查找连续的序列 尾部 j即可，向后查找时，我们使用一个标记位来帮助记录长度是否是1即可</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',6),u=n("ul",null,[n("li",null,[n("p",null,[e("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[e("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])])])],-1),h=a(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> /**
     * 双指针一次遍历
     */
    class Solution {
        public List&lt;String&gt; summaryRanges(int[] nums) {
            List&lt;String&gt; ans = new ArrayList&lt;&gt;();
            for (int i = 0; i &lt; nums.length; ) {
                int j = i + 1;
                boolean down = false;
                while (j &lt; nums.length &amp;&amp; nums[j] - nums[j - 1] == 1) {
                    j++;
                    down = true;
                }
                if (down){
                    ans.add(&quot;&quot;+nums[i]+&quot;-&gt;&quot;+nums[j-1]);
                }else{
                    ans.add(&quot;&quot;+nums[i]);
                }
                i=j;
            }
            return ans;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(p,b){const s=i("ExternalLinkIcon");return t(),r("div",null,[n("blockquote",null,[n("p",null,[e("LeetCode题目: "),n("a",m,[e("228. 汇总区间"),d(s)])])]),o,u,h])}const x=l(c,[["render",v],["__file","2023年8月26日.html.vue"]]);export{x as default};
