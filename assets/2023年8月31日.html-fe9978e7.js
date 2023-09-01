import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as t,a as n,d as e,b as r,e as i}from"./app-d8adb7e3.js";const c={},m={href:"https://leetcode.cn/problems/minimum-degree-of-a-connected-trio-in-a-graph/description/",target:"_blank",rel:"noopener noreferrer"},o=i('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="排序-遍历" tabindex="-1"><a class="header-anchor" href="#排序-遍历" aria-hidden="true">#</a> 排序+遍历</h3><p>我们先从题目的要求进行分析，要求解的是三元组，也就是从数组中找3个点，条件是：1.每两个点之间有边。<br> 因此我们需要</p><ol><li>一个数组保存每个点的度</li><li>一个二维数组保存每两个点之间是否有边<br> 有了这些，我们可以直接 遍历数组，暴力找到所有符合要求的三元组，然后计算结果即可。</li></ol><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>根据分析，我们用一个数组保存每个点的度 points[] ，一个二维数组 eds[][] 保存每两个点之间是否存在边<br> 然后使用嵌套遍历，判断条件： eds[i][j]&gt;0&amp;&amp;eds[i][k]&gt;0&amp;&amp;eds[j][k]&gt;0 ，使用 Math.min 方法保存结果即可</p><p>具体看代码~</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',8),v=n("ul",null,[n("li",null,[n("p",null,[e("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mn",null,"3"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n3)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"3"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[e("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mn",null,"2"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"2"),n("span",{class:"mclose"},")")])])])])])],-1),u=i(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>  /**
     * 类记忆化搜索
     * 排序+遍历
     */
    class Solution {
        public int minTrioDegree(int n, int[][] edges) {
            int[] points=new int[n+1];
            int[][] eds=new int[n+1][n+1];
            for (int[] edge : edges) {
                points[edge[0]]++;
                points[edge[1]]++;
                eds[edge[0]][edge[1]]++;
                eds[edge[1]][edge[0]]++;
            }


            int ans=Integer.MAX_VALUE;
            for (int i = 1; i &lt; n+1; i++) {

                if (points[i]&lt;2) {
                    continue;
                }
                for (int j = i+1; j &lt;= n; j++) {
                    if (eds[i][j]&gt;0){
                        for (int k = j+1; k &lt;= n; k++) {
                            if (eds[i][k]&gt;0&amp;&amp;eds[j][k]&gt;0){
                                ans=Math.min( points[i]+points[j]+points[k]-6,ans);
                            }
                        }
                    }
                }
            }
            return ans==Integer.MAX_VALUE?-1:ans;


        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(p,b){const s=l("ExternalLinkIcon");return d(),t("div",null,[n("blockquote",null,[n("p",null,[n("a",m,[e("1761. 一个图中连通三元组的最小度数"),r(s)])])]),o,v,u])}const f=a(c,[["render",h],["__file","2023年8月31日.html.vue"]]);export{f as default};
