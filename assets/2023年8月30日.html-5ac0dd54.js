import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as d,a as n,b as e,d as r,e as i}from"./app-8addc70a.js";const m={},c={href:"https://leetcode.cn/problems/minimum-jumps-to-reach-home/description/",target:"_blank",rel:"noopener noreferrer"},u=i('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="广度优先遍历-哈希" tabindex="-1"><a class="header-anchor" href="#广度优先遍历-哈希" aria-hidden="true">#</a> 广度优先遍历+哈希</h3><p>从题目可以直观的知道，本题可以使用广度优先遍历方法，遍历每一个step可以到达的所有点，进行判断即可。难点在于如何找到边界条件</p><ol><li>对于走过的点，我们可以添加到forbids中，这样避免重复路径</li><li>对于最远距离，参考官方解题方法，我们直接用结论的6000（根本想不到啊）</li></ol><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>除了最远距离的论证，其他都直接使用标准的广度优先遍历写法，注意添加到 forbids 数组的时机，只在 可前进可后退 时添加即可</p><p>具体看代码~</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',8),o=n("ul",null,[n("li",null,[n("p",null,[e("时间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(nlogn)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])])])]),n("li",null,[n("p",null,[e("空间复杂度: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"n"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])])])])],-1),v=i(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>  /**
     * 广度优先遍历，
     * 最远的边界条件，使用 3*2000. 
     */
    class Solution {
        public int minimumJumps(int[] forbidden, int a, int b, int x) {
            int step=0;
            Set&lt;Integer&gt; forbids=new HashSet&lt;&gt;();
            for (int i : forbidden) {
                forbids.add(i);
            }
            Queue&lt;int[]&gt; queue=new LinkedList&lt;&gt;();
            queue.offer(new int[]{0,0});
            forbids.add(0);
            while (!queue.isEmpty()){
                step++;
                int size = queue.size();
                for (int i = 0; i &lt; size; i++) {
                    int[] poll = queue.poll();
                    int next = poll[0] + a;

                    if (!forbids.contains(next)){
                        forbids.add(next);
                        if (next==x) return step;
                        //1.&lt;x
                        // 2.&gt;x  1.a-b&gt;0 不需要 2.a-b&lt;0 &amp;&amp;
                        if (next&lt;x){
                            queue.offer(new int[]{next,0});

                        }else{
                            if (next&lt;6000){
                                queue.offer(new int[]{next,0});
                            }
                        }
                    }

                    if (poll[1]==0){
                        next = poll[0] - b;
                        if (!forbids.contains(next)){

                            if (next==x) return step;
                            if (next&gt;0){
                                queue.offer(new int[]{next,1});
                            }
                        }
                    }
                }
            }
            return -1;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(p,b){const s=a("ExternalLinkIcon");return t(),d("div",null,[n("blockquote",null,[n("p",null,[n("a",c,[e("1654. 到家的最少跳跃次数"),r(s)])])]),u,o,v])}const g=l(m,[["render",h],["__file","2023年8月30日.html.vue"]]);export{g as default};
