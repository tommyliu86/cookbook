import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,a as n,d as e,b as d,e as i}from"./app-248f40bc.js";const c={},v={href:"https://leetcode.cn/problems/insert-interval/description/",target:"_blank",rel:"noopener noreferrer"},m=i('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="遍历-双指针" tabindex="-1"><a class="header-anchor" href="#遍历-双指针" aria-hidden="true">#</a> 遍历+双指针</h3><p>分析题目，仍然是重合区间如何判断的问题，那我们考虑两个区间重合，分为两种情况</p><ol><li>区间相交</li><li>区间包含<br> 如何判断新区间和某个区间重合？ 由于区间有序，因此我们可以直接遍历每个区间，当 endi &lt; newStart 时，肯定不重合<br> 当newStart&lt;=endi 时，表示新区间与当前区间重合，我们继续判断newEnd结束于哪里即可。</li></ol><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>直接遍历区间，通过条件判断是否重合：endi &lt; newStart ，不重合则继续遍历</p><p>重合，则记录 min（newStart，starti） 为合并后区间的start，同时 max(newEnd,endi) 为合并后的end<br> 然后我们使用一个新的指针 j ，向后遍历查找end 落入的区间情况。</p><p>注意边界条件：</p><ol><li>给定区间长度为0；</li><li>新区间在 区间的 开头或尾部 且 不重合；</li></ol><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',10),o=n("ul",null,[n("li",null,[n("p",null,[e("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[e("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])])])])],-1),u=i(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> class Solution {
        //start《ns《end 合并 到 start《nn《end or nn《start
        public int[][] insert(int[][] intervals, int[] newInterval) {
            if (intervals.length==0){
                return new int[][]{newInterval};
            }
            List&lt;int[]&gt; lists=new ArrayList&lt;&gt;();
            boolean merged=false;
            for (int i = 0; i &lt; intervals.length; i++) {
                int start=intervals[i][0];
                int end=intervals[i][1];
                if (merged||end&lt;newInterval[0]){
                    lists.add(intervals[i]);
                    continue;
                }

                if (newInterval[1]&lt;start){
                    lists.add(newInterval);
                    lists.add(intervals[i]);
                }else{
                    start=Math.min(start,newInterval[0] );
                    end=Math.max(end,newInterval[1]);
                    int j=i+1;
                    while (j&lt;intervals.length&amp;&amp;intervals[j][0]&lt;=end){
                        end=Math.max(end,intervals[j][1]);
                        j++;
                    }
                    lists.add(new int[]{start,end});
                    i=j-1;
                }
                merged=true;

            }
            if (!merged){
                lists.add(newInterval);
            }
            int[][] ans=new int[lists.size()][2];
            for (int i = 0; i &lt; ans.length; i++) {
                ans[i]=lists.get(i);
            }
            return ans;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(b,p){const a=l("ExternalLinkIcon");return t(),r("div",null,[n("blockquote",null,[n("p",null,[e("LeetCode题目: "),n("a",v,[e("57. 插入区间"),d(a)])])]),m,o,u])}const x=s(c,[["render",h],["__file","2023年8月28日.html.vue"]]);export{x as default};
