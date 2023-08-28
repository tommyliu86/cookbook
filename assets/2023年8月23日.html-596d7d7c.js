import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,a as e,d as n,b as d,e as i}from"./app-6925a3d1.js";const c={},o={href:"https://leetcode.cn/problems/count-pairs-of-nodes/description/",target:"_blank",rel:"noopener noreferrer"},u=i('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><p>题目要获取的是两个点连接的边的数量，如果我们不考虑其他约束和条件，本题其实就是在数组中查找指定数的题目，<br> 一般我们都可以用 <code>双指针</code> 和 <code>二分查找</code> 的方法。</p><p>本题中，需要考虑的是 edge 的计算，我们直接遍历 edges 数组，可以计算出每个点连接的边，而假设 两个点 i、j,<br> 通过 i 的 为 x，通过 j 的为 y，那么 query= x + y 正确吗？ 这里是不一定，原因是 如果 i、j 之间有edge = z 条，<br> 我们的 x + y 中实际把 z 记录了两次，因此我们需要考虑的就是要把 z 修正掉。</p><p>如何修正 z ？ 如果在 <code>双指针</code> 和 <code>二分查找</code> 中就修正，那么 这两种方法就不能使用了，因为 这两个方法都依赖 <code>有序数组</code> ，</p><p>这里可以使用的是先计数，然后再通过遍历 edge 来进行修正。</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><h3 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h3><ul><li>遍历获取到每个点的边数</li><li>排序后，每个query，可以 <ol><li>从最小开始遍历，每个i，二分查找 query-i 的下标</li><li>大于query的i，后面的直接进行阶乘计算</li></ol></li></ul><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><ul><li>排序后，使用双指针<br> 1.双指针遍历，每次考虑的也是单点，不需要二分查找，代码更简单</li></ul><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',11),m=e("ul",null,[e("li",null,[e("p",null,[n("时间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])])]),e("li",null,[e("p",null,[n("空间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(1)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},")")])])])])])],-1),v=i(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
 class Solution {
        public int[] countPairs(int n, int[][] edges, int[] queries) {
            int[] counts=new int[n+1];
            Map&lt;Integer,Integer&gt; edgMap=new HashMap&lt;&gt;();

            for (int i = 0; i &lt; edges.length; i++) {
                for (int i1 : edges[i]) {
                    counts[i1]++;
                }
               int x= Math.min(edges[i][0],edges[i][1]);
               int y= Math.max(edges[i][0],edges[i][1]);
               
                edgMap.merge(x&lt;&lt;16|y,1,Integer::sum);
            }
            int[] origC = Arrays.copyOf(counts, counts.length);
            Arrays.sort(counts);
            int[] ans=new int[queries.length];
            for (int i = 0; i &lt; queries.length; i++) {
                int query = queries[i];
                int x=1,y=n;
                while (x&lt;y){
                    if (counts[x]+counts[y]&gt;query){
                        ans[i]+=y-x;
                        y--;
                    }else{
                        x++;
                    }
                }
                //计算重复边的情况,我们的ans记录的是数对数量，因此如果边不满足情况，则需要减去这个数对
                for (Map.Entry&lt;Integer, Integer&gt; entry : edgMap.entrySet()) {
                    Integer k = entry.getKey();
                    Integer v = entry.getValue();
                    int count = origC[k &gt;&gt; 16] + origC[k &amp; ((int) Math.pow(2, 16) - 1)];
                    if (count &gt; query &amp;&amp; count - v &lt;= query) {
                        ans[i]--;
                    }
                }

            }
            return ans;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(p,b){const s=l("ExternalLinkIcon");return t(),r("div",null,[e("blockquote",null,[e("p",null,[n("LeetCode题目: "),e("a",o,[n("1782. 统计点对的数目"),d(s)])])]),u,m,v])}const y=a(c,[["render",h],["__file","2023年8月23日.html.vue"]]);export{y as default};
