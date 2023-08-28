const e=JSON.parse('{"key":"v-4238d9ab","path":"/leetCode/everyday/2023%E5%B9%B48%E6%9C%8828%E6%97%A5.html","title":"2023年8月28日","lang":"zh-CN","frontmatter":{"title":"2023年8月28日","tag":["遍历","双指针"]},"headers":[{"level":3,"title":"遍历+双指针","slug":"遍历-双指针","link":"#遍历-双指针","children":[]}],"git":{"createdTime":1693185408000,"updatedTime":1693185408000,"contributors":[{"name":"liuwenfei@xiaomi.com","email":"liuwenfei@xiaomi.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"leetCode/everyday/2023年8月28日.md","localizedDate":"2023年8月28日","excerpt":"<blockquote>\\n<p>LeetCode题目: <a href=\\"https://leetcode.cn/problems/insert-interval/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">57. 插入区间</a></p>\\n</blockquote>\\n<h1> 思路</h1>\\n<h3> 遍历+双指针</h3>\\n<p>分析题目，仍然是重合区间如何判断的问题，那我们考虑两个区间重合，分为两种情况</p>\\n<ol>\\n<li>区间相交</li>\\n<li>区间包含<br>\\n如何判断新区间和某个区间重合？ 由于区间有序，因此我们可以直接遍历每个区间，当 endi &lt; newStart 时，肯定不重合<br>\\n当newStart&lt;=endi 时，表示新区间与当前区间重合，我们继续判断newEnd结束于哪里即可。</li>\\n</ol>"}');export{e as data};
