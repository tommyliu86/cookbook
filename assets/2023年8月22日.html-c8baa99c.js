import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as r,a as e,d as a,b as c,e as n}from"./app-a96b74ee.js";const d={},m={href:"https://leetcode.cn/problems/maximize-distance-to-closest-person/description/",target:"_blank",rel:"noopener noreferrer"},o=n('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><p>我们分析题目，位置分为两种情况，如果开头或尾部是空的，那么坐在开头和结尾只需要考虑一边的位置；<br> 而如果是在中间，则需要考虑左、右两边有人，此时需要坐在中间位置；</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>我们根据分析可以把计算分成两种情况：</p><ol><li>坐在行首或行尾位置，也就是只有一边有人，此时距离是座位i到有人的位置j的差：j-i;</li><li>坐在中间，也就是两边都有人，我们设两边的座位长度len，此时座位距离最近的值为 len/2；</li></ol><p>我们使用双指针，查找所有的空白长度，分情况计算即可。</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',7),h=e("ul",null,[e("li",null,[e("p",null,[a("时间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])])]),e("li",null,[e("p",null,[a("空间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(1)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},")")])])])])])],-1),u=n(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
 class Solution {
        public int maxDistToClosest(int[] seats) {
            int max=0;
            int i=0,j=0;
            while (j&lt;seats.length){
                while (j&lt;seats.length&amp;&amp;seats[j]==0){
                    j++;
                }

                if (i==0||j==seats.length){
                    max=Math.max(j-i,max);
                }else{
                    max=Math.max(max,(j-i+1)/2);
                }
                i=j++;
            }
            return max;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(v,b){const s=i("ExternalLinkIcon");return t(),r("div",null,[e("blockquote",null,[e("p",null,[a("LeetCode题目: "),e("a",m,[a("849. 到最近的人的最大距离"),c(s)])])]),o,h,u])}const g=l(d,[["render",p],["__file","2023年8月22日.html.vue"]]);export{g as default};
