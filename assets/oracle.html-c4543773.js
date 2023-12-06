const l=JSON.parse('{"key":"v-2c8486a4","path":"/learn/oracle/oracle.html","title":"Docker安装oracle并配置实例入门","lang":"zh-CN","frontmatter":{"title":"Docker安装oracle并配置实例入门","index":false,"dir":{"order":1},"category":["教程"]},"headers":[{"level":2,"title":"1. Docker安装oracle","slug":"_1-docker安装oracle","link":"#_1-docker安装oracle","children":[{"level":3,"title":"一、获取镜像","slug":"一、获取镜像","link":"#一、获取镜像","children":[]},{"level":3,"title":"二、启动镜像","slug":"二、启动镜像","link":"#二、启动镜像","children":[]},{"level":3,"title":"三、配置ORACLE_SID","slug":"三、配置oracle-sid","link":"#三、配置oracle-sid","children":[]},{"level":3,"title":"四、配置环境变量","slug":"四、配置环境变量","link":"#四、配置环境变量","children":[]},{"level":3,"title":"五、修改账号密码、配置文件","slug":"五、修改账号密码、配置文件","link":"#五、修改账号密码、配置文件","children":[]}]},{"level":2,"title":"2. oracle 12的数据库架构","slug":"_2-oracle-12的数据库架构","link":"#_2-oracle-12的数据库架构","children":[{"level":3,"title":"概念：","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"架构","slug":"架构","link":"#架构","children":[]}]},{"level":2,"title":"3. 创建PDB","slug":"_3-创建pdb","link":"#_3-创建pdb","children":[{"level":3,"title":"从seed库克隆创建","slug":"从seed库克隆创建","link":"#从seed库克隆创建","children":[]},{"level":3,"title":"从非SEED库克隆创建","slug":"从非seed库克隆创建","link":"#从非seed库克隆创建","children":[]},{"level":3,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":3,"title":"拔出和插入PDB","slug":"拔出和插入pdb","link":"#拔出和插入pdb","children":[]},{"level":3,"title":"删除PDB","slug":"删除pdb","link":"#删除pdb","children":[]}]},{"level":2,"title":"4. 创建用户","slug":"_4-创建用户","link":"#_4-创建用户","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"查询版本和切换pdb","slug":"查询版本和切换pdb","link":"#查询版本和切换pdb","children":[]},{"level":3,"title":"创建普通用户","slug":"创建普通用户","link":"#创建普通用户","children":[]}]},{"level":2,"title":"5. 创建表空间","slug":"_5-创建表空间","link":"#_5-创建表空间","children":[]},{"level":2,"title":"6. 使用impdp/expdp","slug":"_6-使用impdp-expdp","link":"#_6-使用impdp-expdp","children":[{"level":3,"title":"创建文件夹","slug":"创建文件夹","link":"#创建文件夹","children":[]},{"level":3,"title":"expdp导出","slug":"expdp导出","link":"#expdp导出","children":[]},{"level":3,"title":"impdp导入","slug":"impdp导入","link":"#impdp导入","children":[]}]}],"git":{"createdTime":1701846800000,"updatedTime":1701847259000,"contributors":[{"name":"liuwenfei","email":"liuwenfei@xiaomi.com","commits":2}]},"readingTime":{"minutes":13.04,"words":3913},"filePathRelative":"learn/oracle/oracle.md","localizedDate":"2023年12月6日","excerpt":"<h1> Docker安装oracle并配置</h1>\\n<p>本文档记录了使用docker安装oracle 19c，并进行数据库基础配置、使用dmp进行数据库克隆配置的流程。</p>\\n<h2> 1. Docker安装oracle</h2>\\n<h3> 一、获取镜像</h3>\\n<p>使用docker搜索oracle对应版本镜像拉取，网上很多的oracle镜像没有文档说明，因此这里做了安装和配置的步骤和说明~</p>\\n<ul>\\n<li>oracle-11g</li>\\n</ul>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:11g\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{l as data};
