import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c,a as n,b as e,d as r,e as a}from"./app-8addc70a.js";const d={},o={href:"https://leetcode.cn/problems/number-of-ways-to-buy-pens-and-pencils/description/",target:"_blank",rel:"noopener noreferrer"},m=a('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="遍历i" tabindex="-1"><a class="header-anchor" href="#遍历i" aria-hidden="true">#</a> 遍历i*</h3><p>该题本质上就是一个数切分问题，把数分成 a+b ，其中a是cost1的倍数 ，找到b最多可以买多少cost2即可。</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>我们使用一个 i 从0开始递增，表示买了多少 cost1 ，剩余的直接用除法找到最大可买多少 cost2 即可。</p><p>具体看代码~</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',7),h=n("ul",null,[n("li",null,[n("p",null,[e("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[e("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])])])],-1),u=a(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>  /**
     * 遍历
     */
    class Solution {
        public long waysToBuyPensPencils(int total, int cost1, int cost2) {
            long ans = 0;
            if (cost1 &lt; cost2) {
                int temp = cost2;
                cost2 = cost1;
                cost1 = temp;
            }
            if (cost2 &gt; total) return 1;
            int i = 0;
            while (i * cost1 &lt;= total) {
                int remain = total - cost1 * i;
                int j = remain / cost2;
                ans += j + 1;
                i++;
            }
            return ans;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(p,b){const s=i("ExternalLinkIcon");return t(),c("div",null,[n("blockquote",null,[n("p",null,[n("a",o,[e("2240. 买钢笔和铅笔的方案数"),r(s)])])]),m,h,u])}const f=l(d,[["render",v],["__file","2023年9月1日.html.vue"]]);export{f as default};
