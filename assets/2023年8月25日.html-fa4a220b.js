import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as r,a as e,b as a,d,e as n}from"./app-05473d2a.js";const o={},c={href:"https://leetcode.cn/problems/count-good-nodes-in-binary-tree/description/",target:"_blank",rel:"noopener noreferrer"},m=n('<h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><h3 id="深度优先遍历" tabindex="-1"><a class="header-anchor" href="#深度优先遍历" aria-hidden="true">#</a> 深度优先遍历</h3><p>分析题目，要求我们找到当前节点 curNode 到 root 的 path 上的所有值小于等于curNode，那我们只要记录当前点之前的最大值是多少即可<br> 因此直接使用深度优先遍历，遍历过程保留经过的点的最大值即可。</p><h1 id="解题方法" tabindex="-1"><a class="header-anchor" href="#解题方法" aria-hidden="true">#</a> 解题方法</h1><p>递归的标准写法，直接看代码。</p><h1 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h1>',6),h=e("ul",null,[e("li",null,[e("p",null,[a("时间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])])]),e("li",null,[e("p",null,[a("空间复杂度: "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(1)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},")")])])])])])],-1),u=n(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> /**
     * dfs
     * 需要比较的是 当前节点 curNode.val &gt;=max(prePath),因此dfs 即可
     */
    class Solution {
        int ans=0;
        public int goodNodes(TreeNode root) {
            dfs(root,root.val);
            return ans;
        }
        public void dfs(TreeNode node,int max){
            if (node==null)return;
            if (node.val&gt;=max){
                ans++;
            }
            dfs(node.left,Math.max(max,node.val));
            dfs(node.right,Math.max(max,node.val));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(p,b){const s=i("ExternalLinkIcon");return t(),r("div",null,[e("blockquote",null,[e("p",null,[a("LeetCode题目: "),e("a",c,[a("1448. 统计二叉树中好节点的数目"),d(s)])])]),m,h,u])}const _=l(o,[["render",v],["__file","2023年8月25日.html.vue"]]);export{_ as default};
