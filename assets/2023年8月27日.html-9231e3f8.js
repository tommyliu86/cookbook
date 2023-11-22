import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as r,a as n,d as a,b as d,e}from"./app-14adeffe.js";const c={},m={href:"https://leetcode.cn/problems/merge-intervals/description/",target:"_blank",rel:"noopener noreferrer"},o=e('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="遍历-排序" tabindex="-1"><a class="header-anchor" href="#遍历-排序" aria-hidden="true">#</a> 遍历+排序</h3><p>分析题目，其实就是重合区间如何判断的问题，那我们考虑两个区间重合，分为两种情况</p><ol><li>区间相交</li><li>区间包含<br> 如何判断有重合？只要 start1 &lt;= start2 &lt;= end1 成立即可。</li></ol><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>因此可以根据 start 进行排序，然后一次遍历，我们使用 start 表示当前区间的开始，end 表示合并后区间的结束，查找重合的区间，并不断更新合并后的区间的end即可。</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',7),h=n("ul",null,[n("li",null,[n("p",null,[a("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",null,"+"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n+logn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[a("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])])])],-1),v=e(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> /**
     * 排序后遍历
     */
    class Solution {
        public int[][] merge(int[][] intervals) {
            Arrays.sort(intervals,(a,b)-&gt;Integer.compare(a[0],b[0]));

            List&lt;int[]&gt; ans=new ArrayList&lt;&gt;();
            for (int i = 0; i &lt; intervals.length; ) {
                int start=intervals[i][0];
                int end=intervals[i][1];
                int j=i+1;
                while (j&lt;intervals.length&amp;&amp;intervals[j][0]&lt;=end){
                    end=Math.max(end,intervals[j][1]);
                    j++;
                }
                ans.add(new int[]{start,end});
                i=j;
            }

            int[][] arrays=new int[ans.size()][2];
            for (int i = 0; i &lt; arrays.length; i++) {
                arrays[i]=ans.get(i);
            }
            return arrays;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(p,b){const s=i("ExternalLinkIcon");return t(),r("div",null,[n("blockquote",null,[n("p",null,[a("LeetCode题目: "),n("a",m,[a("56. 合并区间"),d(s)])])]),o,h,v])}const x=l(c,[["render",u],["__file","2023年8月27日.html.vue"]]);export{x as default};
