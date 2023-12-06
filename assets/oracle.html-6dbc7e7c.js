import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-02ec6ea0.js";const p="/cookbook/assets/image-2-edfb2beb.png",l="/cookbook/assets/image-3-284da396.png",o="/cookbook/assets/image-4-76d87d06.png",t="/cookbook/assets/image-5-b69347c2.png",i="/cookbook/assets/image-8c3f9f8c.png",c="/cookbook/assets/image-1-c2912e56.png",d={},r=e(`<h1 id="docker安装oracle并配置" tabindex="-1"><a class="header-anchor" href="#docker安装oracle并配置" aria-hidden="true">#</a> Docker安装oracle并配置</h1><p>本文档记录了使用docker安装oracle 19c，并进行数据库基础配置、使用dmp进行数据库克隆配置的流程。</p><h2 id="_1-docker安装oracle" tabindex="-1"><a class="header-anchor" href="#_1-docker安装oracle" aria-hidden="true">#</a> 1. Docker安装oracle</h2><h3 id="一、获取镜像" tabindex="-1"><a class="header-anchor" href="#一、获取镜像" aria-hidden="true">#</a> 一、获取镜像</h3><p>使用docker搜索oracle对应版本镜像拉取，网上很多的oracle镜像没有文档说明，因此这里做了安装和配置的步骤和说明~</p><ul><li>oracle-11g</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>oracle-19c</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:19c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、启动镜像" tabindex="-1"><a class="header-anchor" href="#二、启动镜像" aria-hidden="true">#</a> 二、启动镜像</h3><p>启动命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#11g</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">1521</span>:1521 <span class="token parameter variable">--name</span> oracle  registry.aliyuncs.com/wifiliu/oracle:11g

<span class="token comment">#19c详细启动命令：</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> oracle_19c <span class="token parameter variable">-p</span> <span class="token number">1524</span>:1521 <span class="token parameter variable">-p</span> <span class="token number">5502</span>:5500  <span class="token parameter variable">-d</span> registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:19c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用docker命令查看是否启动成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> oracle_19c <span class="token parameter variable">-p</span> <span class="token number">1524</span>:1521 <span class="token parameter variable">-p</span> <span class="token number">5502</span>:5500  <span class="token parameter variable">-d</span> registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:19c
604791d9bb4d53650e45d7340d750db177236e72bd686a718fa5854acdbea592
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE                                                  COMMAND                   CREATED         STATUS                            PORTS                                            NAMES
604791d9bb4d   registry.cn-hangzhou.aliyuncs.com/wifiliu/oracle:19c   <span class="token string">&quot;/bin/sh -c &#39;exec <span class="token variable">$O</span>…&quot;</span>   <span class="token number">6</span> seconds ago   Up <span class="token number">5</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">0.0</span>.0.0:1524-<span class="token operator">&gt;</span><span class="token number">1521</span>/tcp, <span class="token number">0.0</span>.0.0:5502-<span class="token operator">&gt;</span><span class="token number">5500</span>/tcp   oracle_19c
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用docker 客户端可以在containers中直接点击查看镜像实例的运行情况和详细信息~<br><img src="`+p+'" alt="Alt text" loading="lazy"></p><p>第一次创建容器实例时，oracle数据库需要进行初始化，在logs中会有日志显示，等待初始化完成之后才可以进行使用。<br><img src="'+l+`" alt="Alt text" loading="lazy"></p><h4 id="docker启动失败exited-139" tabindex="-1"><a class="header-anchor" href="#docker启动失败exited-139" aria-hidden="true">#</a> docker启动失败EXITED(139)</h4><p>在<code>C:\\Users\\(用户名)\\</code>中找到.wslconfig文件，若没有则创建，里面写入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[wsl2]
kernelCommandLine = vsyscall=emulate

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启电脑即可</p><h3 id="三、配置oracle-sid" tabindex="-1"><a class="header-anchor" href="#三、配置oracle-sid" aria-hidden="true">#</a> 三、配置ORACLE_SID</h3><p>使用sqlplus的nolog方式登录服务器遇到ORA-12162报错，一般是因为没有配置ORACLE_SID这个环境变量导致。</p><p>启动oracle后，我们使用sqlplus登录服务器，</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>sh<span class="token operator">-</span><span class="token number">4.2</span>$ sqlplus <span class="token operator">/</span>nolog

<span class="token keyword">SQL</span><span class="token operator">*</span>Plus: <span class="token keyword">Release</span> <span class="token number">19.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token number">.0</span> <span class="token operator">-</span> Production <span class="token keyword">on</span> Wed <span class="token keyword">Dec</span> <span class="token number">6</span> <span class="token number">01</span>:<span class="token number">55</span>:<span class="token number">45</span> <span class="token number">2023</span>
Version <span class="token number">19.3</span><span class="token number">.0</span><span class="token number">.0</span><span class="token number">.0</span>

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">1982</span><span class="token punctuation">,</span> <span class="token number">2019</span><span class="token punctuation">,</span> Oracle<span class="token punctuation">.</span>  <span class="token keyword">All</span> rights reserved<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span> conn <span class="token operator">/</span><span class="token keyword">as</span> sysdba
ERROR:
ORA<span class="token operator">-</span><span class="token number">12162</span>: TNS:net service name <span class="token operator">is</span> incorrectly specified

<span class="token keyword">SQL</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、配置环境变量" tabindex="-1"><a class="header-anchor" href="#四、配置环境变量" aria-hidden="true">#</a> 四、配置环境变量</h3><p>一般情况下docker容器都是使用非root账号运行，我们想要修改环境变量配置文件，需要使用root用户登录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用root登录</span>
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>root oracle_19c /bin/bash
<span class="token comment">#修改配置文档 在文档最后append export ORACLE_SID=ORCLCDB</span>
bash-4.2<span class="token comment"># vim /etc/profile</span>
<span class="token comment"># 刷新配置</span>
bash-4.2<span class="token comment"># source /etc/profile</span>
bash-4.2<span class="token comment"># echo $ORACLE_SID</span>
ORCLCDB
bash-4.2<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置ORACLE_SID变量之后，重新登录sqlplus,连接数据库成功</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>sh<span class="token operator">-</span><span class="token number">4.2</span>$ sqlplus <span class="token operator">/</span>nolog

<span class="token keyword">SQL</span><span class="token operator">*</span>Plus: <span class="token keyword">Release</span> <span class="token number">19.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token number">.0</span> <span class="token operator">-</span> Production <span class="token keyword">on</span> Wed <span class="token keyword">Dec</span> <span class="token number">6</span> <span class="token number">03</span>:<span class="token number">33</span>:<span class="token number">12</span> <span class="token number">2023</span>
Version <span class="token number">19.3</span><span class="token number">.0</span><span class="token number">.0</span><span class="token number">.0</span>

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">1982</span><span class="token punctuation">,</span> <span class="token number">2019</span><span class="token punctuation">,</span> Oracle<span class="token punctuation">.</span>  <span class="token keyword">All</span> rights reserved<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span> conn <span class="token operator">/</span><span class="token keyword">as</span> sysdba
Connected<span class="token punctuation">.</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> pdbs<span class="token punctuation">;</span>

    CON_ID CON_NAME                       <span class="token keyword">OPEN</span> <span class="token keyword">MODE</span>  RESTRICTED
<span class="token comment">---------- ------------------------------ ---------- ----------</span>
         <span class="token number">2</span> PDB$SEED                       <span class="token keyword">READ</span> ONLY  <span class="token keyword">NO</span>
         <span class="token number">3</span> ORCLPDB1                       <span class="token keyword">READ</span> <span class="token keyword">WRITE</span> <span class="token keyword">NO</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、修改账号密码、配置文件" tabindex="-1"><a class="header-anchor" href="#五、修改账号密码、配置文件" aria-hidden="true">#</a> 五、修改账号密码、配置文件</h3><p>默认启动的docker容器的管理员密码在第一次启动时的log日志中显示，一般会创建为随机密码，<br><img src="`+o+`" alt="Alt text" loading="lazy"><br> 我们可以通过服务端sqlplus进行修改：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">user</span> sys identified <span class="token keyword">by</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">User</span> altered<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">user</span> system identified <span class="token keyword">by</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">User</span> altered<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后，我们可以使用客户端进行连接测试：<br><img src="`+t+'" alt="Alt text" loading="lazy"></p><h2 id="_2-oracle-12的数据库架构" tabindex="-1"><a class="header-anchor" href="#_2-oracle-12的数据库架构" aria-hidden="true">#</a> 2. oracle 12的数据库架构</h2><p>在创建数据库前，我们需要先要了解一下oracle 12版本的数据库、用户、CDB与PDB之间的关系。</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3><ol><li><p>Multitenant Environment：多租户环境</p></li><li><p>CDB（Container Database）：数据库容器</p></li><li><p>PDB（Pluggable Database）：可插拔数据库</p></li><li><p>PDB$SEED：PDB数据库模板，只读用来创建PDB使用</p></li><li><p>COMMON USERS(普通用户)：建立在CDB层，用户名以C##或c##开头；</p></li><li><p>LOCAL USERS(本地用户)：仅建立在PDB层，建立的时候得指定CONTAINER。</p></li></ol><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><figure><img src="'+i+`" alt="CDB和PDB的关系示意" tabindex="0" loading="lazy"><figcaption>CDB和PDB的关系示意</figcaption></figure><p>在oracle 12中，引入了container，使用CDB层作为数据库抽象层，在这一层中，实际上是不能真正的存储数据的，数据存储在PDB（插拔数据库）中，oracle通过这样的设计把整个数据库服务端设计成了多租户形式，在每个机器上都可以实现多租户的数据库设计。</p><p>相应的，在CDB层上的用户是公有用户，也就是在CDB上创建的用户是可以操作所有的PDB（所有PDB的公有用户），为了区分这样的用户，oracle 12中创建此类用户需要在名称前添加<code>C##</code>这个特殊前缀。因此，在CDB下创建用户必须添加<code>C##</code>，在PDB下可以创建普通用户。</p><p>SQL示例:</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>---不登陆方式打开sqlplus
sqlplus /nolog

---以syadba账号链接
conn /as sysdba

---查询当前用户
show user;
---线上当前容器
show con_name;

---显示当前的pdb
show pdbs;

---查询当前数据库信息
SELECT *  FROM &quot;V$DATABASE&quot; ;

-- 切回到CDB 容器数据库
alter session set container=CDB$ROOT; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建pdb" tabindex="-1"><a class="header-anchor" href="#_3-创建pdb" aria-hidden="true">#</a> 3. 创建PDB</h2><p>PDB(pluggable database)是可插拔数据库，也就是我们使用的实例，下面我们创建PDB。</p><h3 id="从seed库克隆创建" tabindex="-1"><a class="header-anchor" href="#从seed库克隆创建" aria-hidden="true">#</a> 从seed库克隆创建</h3><p>oracle数据库安装后一般情况下会带有一个PDB#SEED的数据库，这个数据库的状态是READ ONLY的，我们创建PDB时，一般使用seed来进行pdb的创建</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> pdbs<span class="token punctuation">;</span>

    CON_ID CON_NAME                       <span class="token keyword">OPEN</span> <span class="token keyword">MODE</span>  RESTRICTED
<span class="token comment">---------- ------------------------------ ---------- ----------</span>
         <span class="token number">2</span> PDB$SEED                       <span class="token keyword">READ</span> ONLY  <span class="token keyword">NO</span>
         <span class="token number">3</span> ORCLPDB1                       <span class="token keyword">READ</span> <span class="token keyword">WRITE</span> <span class="token keyword">NO</span>
      
<span class="token keyword">SQL</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SQL语法：<br> create pluggable database [databaseName] admin user [userName] identified by [password]<br> file_name_convert=(&#39;pdbseed&#39;,&#39;[pathName]&#39;);<br> 这里的file_name_convert函数接收两个参数，第一个参数是我们要copy的seed数据库的文件夹路径，第二个是我们的表空间文件夹路径，这里可以使用全路径或简写两种方式。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> pluggable <span class="token keyword">database</span> EPTEST admin <span class="token keyword">user</span> test1 identified <span class="token keyword">by</span> test1 file_name_convert<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;pdbseed&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;EPTEST&#39;</span><span class="token punctuation">)</span>
  <span class="token number">2</span>  <span class="token punctuation">;</span>

Pluggable <span class="token keyword">database</span> created<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> pdbs

    CON_ID CON_NAME                       <span class="token keyword">OPEN</span> <span class="token keyword">MODE</span>  RESTRICTED
<span class="token comment">---------- ------------------------------ ---------- ----------</span>
         <span class="token number">2</span> PDB$SEED                       <span class="token keyword">READ</span> ONLY  <span class="token keyword">NO</span>
         <span class="token number">3</span> ORCLPDB1                       <span class="token keyword">READ</span> <span class="token keyword">WRITE</span> <span class="token keyword">NO</span>
         <span class="token number">4</span> EPTEST                         MOUNTED

<span class="token keyword">SQL</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样创建的PDB默认只创建了SYSTEM,SYSAUX,TEMP,UNDO表空间(19c环境)</p></blockquote><p>也可以指定默认用户表空间来进行创建：<br> create pluggable database [databaseName] admin user [userName] identified by [password]<br> file_name_convert=(&#39;pdbseed&#39;,&#39;[pathName]&#39;)<br> default tablespace users<br> datafile &#39;/u01/app/oracle/oradata/ORA19C/testpdb3/user01.dbf&#39; size 10m autoextend on;</p><p>创建完PDB数据库之后，默认情况下的数据库处于mount状态：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> pdbs

    CON_ID CON_NAME                       <span class="token keyword">OPEN</span> <span class="token keyword">MODE</span>  RESTRICTED
<span class="token comment">---------- ------------------------------ ---------- ----------</span>
         <span class="token number">2</span> PDB$SEED                       <span class="token keyword">READ</span> ONLY  <span class="token keyword">NO</span>
         <span class="token number">3</span> ORCLPDB1                       <span class="token keyword">READ</span> <span class="token keyword">WRITE</span> <span class="token keyword">NO</span>
         <span class="token number">4</span> EPTEST                         MOUNTED

<span class="token keyword">SQL</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要我们执行open操作，打开database，同时保存PDB数据库的默认状态：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--开启pdb数据库</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> EPTEST <span class="token keyword">open</span><span class="token punctuation">;</span>

Pluggable <span class="token keyword">database</span> altered<span class="token punctuation">.</span>
<span class="token comment">--保存pdb数据库状态在数据库启动时自动开启</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> EPTEST <span class="token keyword">save</span> state<span class="token punctuation">;</span>

Pluggable <span class="token keyword">database</span> altered<span class="token punctuation">.</span>
<span class="token comment">--切换当前sqlplus的会话到指定的pdb</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">session</span> <span class="token keyword">set</span> container<span class="token operator">=</span>EPTEST<span class="token punctuation">;</span>

<span class="token keyword">Session</span> altered<span class="token punctuation">.</span>
<span class="token comment">--查看当前数据库</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> con_name<span class="token punctuation">;</span>

CON_NAME
<span class="token comment">------------------------------</span>
EPTEST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从非seed库克隆创建" tabindex="-1"><a class="header-anchor" href="#从非seed库克隆创建" aria-hidden="true">#</a> 从非SEED库克隆创建</h3><p>我们也可以从已经存在的非seed库进行克隆:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PLUGGABLE <span class="token keyword">DATABASE</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">FROM</span> <span class="token punctuation">[</span>oldDatabaseName<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">open</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">from</span>  <span class="token punctuation">[</span>oldDatabaseName<span class="token punctuation">]</span>
file_name_convert<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;[oldName]&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;[newName]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>克隆之后的操作与seed克隆一样</p><p>数据库信息查询语句</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">--查看数据库信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$version

<span class="token comment">--查看数据库基础配置</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> nls_database_parameters

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>创建好pdb数据库后，还需要修改对应的配置文件<code>tnsnames.ora</code>,该文件一般在$ORACLE_HOME/network/admin/ 文件夹下，直接在文件后面添加如下配置即可<br> 如果不进行配置文件修改，在使用账号密码登录PDB数据库时会遇到ORA-12154的报错：<br><code>ORA-12154: TNS:could not resolve the connect identifier specified</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> oracle_19c /bin/bash
<span class="token punctuation">[</span>oracle@604791d9bb4d ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> <span class="token variable">$ORACLE_HOME</span>/network/admin
<span class="token punctuation">[</span>oracle@604791d9bb4d admin<span class="token punctuation">]</span>$ <span class="token function">ls</span>
listener.ora  samples  shrept.lst  sqlnet.ora  tnsnames.ora
<span class="token punctuation">[</span>oracle@604791d9bb4d admin<span class="token punctuation">]</span>$
<span class="token comment">#默认是ORCL</span>
ORCL <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> localhost<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVER <span class="token operator">=</span> DEDICATED<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> orcl<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token comment">#新建的PDB</span>
PDB_NAME <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> localhost<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVER <span class="token operator">=</span> DEDICATED<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> PDB_NAME<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拔出和插入pdb" tabindex="-1"><a class="header-anchor" href="#拔出和插入pdb" aria-hidden="true">#</a> 拔出和插入PDB</h3><h4 id="拔出pdb" tabindex="-1"><a class="header-anchor" href="#拔出pdb" aria-hidden="true">#</a> 拔出PDB</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--1.关闭PDB数据库</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">close</span> immediate<span class="token punctuation">;</span>
 
Pluggable <span class="token keyword">database</span> altered<span class="token punctuation">.</span>
<span class="token comment">---2.拔出pdb</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> unplug <span class="token keyword">into</span> <span class="token string">&#39;/home/oracle/pdb.xml&#39;</span><span class="token punctuation">;</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li><p>被拔出的PDB只能被删除,不能做其它操作,例如mount,打开等,删除之后我们仍然可以再插入.</p></li><li><p>拔出PDB的时候需要指定xml位置,xml中记录了PDB的信息,例如数据文件目录,DBID,PDB参数等等</p></li></ol><h4 id="插入pdb" tabindex="-1"><a class="header-anchor" href="#插入pdb" aria-hidden="true">#</a> 插入PDB</h4><p>插入PDB使用create pluggable database指定xml位置操作：</p><p>一、拔出的PDB再进行插入：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">using</span> <span class="token string">&#39;/home/oracle/testpdb4.xml&#39;</span> nocopy<span class="token punctuation">;</span>   
 
Pluggable <span class="token keyword">database</span> created<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们就可以把删除的PDB重新插入到CDB中，相当于又加回来了。<br> 二、拔出PDB在不同的数据库上插入：<br> 有时候我们拔出的PDB会在其他数据库上进行插入，这时候我们需要对文件路径和数据库名称等进行配置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">using</span> <span class="token string">&#39;/tmp/pdb.xml&#39;</span> 
SOURCE_FILE_NAME_CONVERT<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;[xml_file_path]&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;[current_file_path]&#39;</span><span class="token punctuation">)</span>
MOVE FILE_NAME_CONVERT<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;[current_file_path]&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;[PDB_file_path]&#39;</span><span class="token punctuation">)</span>
PATH_PREFIX<span class="token operator">=</span><span class="token string">&#39;[PDB_file_path]&#39;</span> <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当xml中的文件路径和我们放置的文件路径不一样时，</p><ol><li>我们需要进行source路径配置 SOURCE_FILE_NAME_CONVERT</li><li>我们需要配置文件copy路径：FILE_NAME_CONVERT</li><li>配置路径前缀PATH_PREFIX=&#39;[PDB_file_path]&#39;<br> 也就是：xml文件中的路径是xml_file_path，而实际的文件路径是current_file_path，最终我们把文件copy到pdb_file_path下。</li></ol><p>三、查看插入PDB是否有报错</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> name<span class="token punctuation">,</span>cause<span class="token punctuation">,</span><span class="token keyword">type</span><span class="token punctuation">,</span>message<span class="token punctuation">,</span><span class="token keyword">status</span> <span class="token keyword">from</span> PDB_PLUG_IN_VIOLATIONs <span class="token keyword">order</span> <span class="token keyword">by</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除pdb" tabindex="-1"><a class="header-anchor" href="#删除pdb" aria-hidden="true">#</a> 删除PDB</h3><p>删除PDB之前需要将PDB先关闭,使用drop pluggable database命令:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> pluggable <span class="token keyword">database</span> <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> <span class="token keyword">close</span><span class="token punctuation">;</span>
 
Pluggable <span class="token keyword">database</span> altered<span class="token punctuation">.</span>
 
<span class="token keyword">SQL</span><span class="token operator">&gt;</span>  <span class="token keyword">drop</span> pluggable <span class="token keyword">database</span>  <span class="token punctuation">[</span>databaseName<span class="token punctuation">]</span> including datafiles<span class="token punctuation">;</span>
 
Pluggable <span class="token keyword">database</span> dropped<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>drop命令：<br> 如果使用了including datafiles则会将数据文件一起删除.<br> 使用keep datafiles会保留数据文件,默认如果不添加参数即为keep datafiles,但是注意keep datafiles则必须先将PDB拔出,所以一般是用在拔出和插入PDB场景下.</li></ul><h2 id="_4-创建用户" tabindex="-1"><a class="header-anchor" href="#_4-创建用户" aria-hidden="true">#</a> 4. 创建用户</h2><p>我们使用sqlplus默认登录之后，链接进入的是CDB，在这个session中，我们只能创建common user，直接执行create user命令一般会遇到ORA-65096这个错误：<br><code>ORA-65096: invalid common user or role name</code><br> 这是因为在CDB层我们只能创建common user ，要创建实例数据库用户需要在相对应的PDB会话中。</p><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">show</span> con_name<span class="token punctuation">;</span>

CON_NAME
<span class="token comment">------------------------------</span>
CDB$ROOT
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">user</span> c<span class="token comment">##comuser identified by 123;</span>

<span class="token keyword">User</span> created<span class="token punctuation">.</span>

<span class="token comment">--创建common用户</span>

<span class="token keyword">create</span> <span class="token keyword">user</span> C<span class="token comment">##用户名称 identified by 密码 default tablespace 表空间;</span>

<span class="token comment">--授权</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource <span class="token keyword">to</span> C<span class="token comment">##用户名称;</span>
<span class="token keyword">grant</span> dba <span class="token keyword">to</span> C<span class="token comment">##用户名称;</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span>

<span class="token comment">--创建普通用户</span>
<span class="token comment">--1.切换到pdb会话</span>
<span class="token keyword">alter</span> <span class="token keyword">session</span> <span class="token keyword">set</span> container<span class="token operator">=</span>pdbname<span class="token punctuation">;</span>
<span class="token comment">--2.创建用户</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> 用户名称 identified <span class="token keyword">by</span> 密码 <span class="token keyword">default</span> <span class="token keyword">tablespace</span> 表空间<span class="token punctuation">;</span>

<span class="token comment">--授权</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource <span class="token keyword">to</span> 用户名称<span class="token punctuation">;</span>

<span class="token keyword">SQL</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="创建后C##用户会在PDB中自动创建" tabindex="0" loading="lazy"><figcaption>创建后C##用户会在PDB中自动创建</figcaption></figure><h3 id="查询版本和切换pdb" tabindex="-1"><a class="header-anchor" href="#查询版本和切换pdb" aria-hidden="true">#</a> 查询版本和切换pdb</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--查询当前版本</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$version<span class="token punctuation">;</span>

<span class="token comment">--查询当前容器数据库信息</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">select</span> sys_context <span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CON_NAME&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> 
<span class="token comment">--也可以使用下面这个</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">SHOW</span> CON_NAME<span class="token punctuation">;</span>

<span class="token comment">--查询pdb列表</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">show</span> pdbs<span class="token punctuation">;</span>
<span class="token comment">---或者</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> V$pdbs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建普通用户" tabindex="-1"><a class="header-anchor" href="#创建普通用户" aria-hidden="true">#</a> 创建普通用户</h3><p>切换到对应的pdb数据库之后，就可以创建对应的pdb中的普通用户啦</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">-- 切换容器 这里需要权限</span>
<span class="token keyword">alter</span> <span class="token keyword">session</span> <span class="token keyword">set</span> container<span class="token operator">=</span>ORCLPDB1<span class="token punctuation">;</span>

<span class="token comment">--创建用户</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> userName identified <span class="token keyword">by</span> password <span class="token keyword">default</span> <span class="token keyword">tablespace</span> tablespaceName<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--给用户授权</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource<span class="token punctuation">,</span>dba <span class="token keyword">to</span> user_name<span class="token punctuation">;</span>

<span class="token comment">-- 给用户user_name 授权。</span>

<span class="token comment">--connect和resource是两个系统内置的角色，和dba是并列的关系。</span>


<span class="token comment">--DBA：拥有全部特权，是系统最高权限，只有DBA才可以创建数据库结构。</span>
<span class="token comment">--RESOURCE:拥有Resource权限的用户只可以创建实体，不可以创建数据库结构。</span>
<span class="token comment">--CONNECT：拥有Connect权限的用户只可以登录Oracle，不可以创建实体，不可以创建数据库结构。</span>

<span class="token keyword">grant</span> 
<span class="token keyword">create</span> <span class="token keyword">any</span> directory<span class="token punctuation">,</span>
<span class="token keyword">create</span> <span class="token keyword">session</span><span class="token punctuation">,</span>
<span class="token keyword">create</span> <span class="token keyword">table</span><span class="token punctuation">,</span>
<span class="token keyword">create</span> <span class="token keyword">view</span><span class="token punctuation">,</span>
unlimited <span class="token keyword">tablespace</span>
<span class="token keyword">to</span> userName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-创建表空间" tabindex="-1"><a class="header-anchor" href="#_5-创建表空间" aria-hidden="true">#</a> 5. 创建表空间</h2><p>oracle中的表空间是数据库级别下的一个空间概念，我们创建的用户和表都需要处在一个表空间中才行，因此一般创建数据库之后，需要给这个数据库创建一个表空间，用来作为我们创建scheme(user)的空间</p><ul><li>创建表空间的sql语法：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--建立临时表空间</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLESPACE</span> temp_name <span class="token comment">--创建名为temp_name的临时表空间</span>
TEMPFILE <span class="token string">&#39;D:\\app\\super\\oradata\\oracle\\temp_name.DBF&#39;</span>    <span class="token comment">-- 临时文件</span>
SIZE <span class="token number">50</span>M    <span class="token comment">-- 其初始大小为50M</span>
AUTOEXTEND <span class="token keyword">ON</span>    <span class="token comment">-- 支持自动扩展</span>
<span class="token keyword">NEXT</span> <span class="token number">50</span>M MAXSIZE <span class="token number">20480</span>M    <span class="token comment">-- 每次增量为50M ,最大2048M</span>
EXTENT MANAGEMENT <span class="token keyword">LOCAL</span>
MAXSIZE <span class="token number">10</span>g<span class="token punctuation">;</span> <span class="token comment">--文件最大多少</span>
<span class="token punctuation">;</span>
 
<span class="token comment">--建立表空间</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> test_name <span class="token comment">--创建名为&quot;test_name&quot;的表空间</span>
LOGGING
DATAFILE <span class="token string">&#39;D:\\app\\super\\oradata\\oracle\\test_name.DBF&#39;</span>
SIZE <span class="token number">50</span>M    <span class="token comment">-- 其初始大小为50M</span>
AUTOEXTEND <span class="token keyword">ON</span>    <span class="token comment">-- 支持自动扩展</span>
<span class="token keyword">NEXT</span> <span class="token number">50</span>M MAXSIZE <span class="token number">20480</span>M    <span class="token comment">-- 每次增量为50M ,最大2048M</span>
EXTENT MANAGEMENT <span class="token keyword">LOCAL</span>
MAXSIZE <span class="token number">10</span>g<span class="token punctuation">;</span> <span class="token comment">--文件最大多少</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sql示例：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">---创建表空间</span>
<span class="token keyword">create</span> <span class="token keyword">tablespace</span> name datafile <span class="token string">&#39;/opt/oracle/oradata/rayfoo_pdb.dbf&#39;</span> size <span class="token number">100</span>m autoextend <span class="token keyword">on</span> <span class="token keyword">next</span> <span class="token number">100</span>m maxsize <span class="token number">10</span>g<span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">TABLESPACE</span> T1EP logging datafile <span class="token string">&#39;/opt/oracle/oradata/ORCLCDB/EPTEST/t1ep.dbf&#39;</span> size <span class="token number">50</span>m autoextend <span class="token keyword">on</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">TABLESPACE</span> users logging datafile <span class="token string">&#39;/opt/oracle/oradata/ORCLCDB/EPTEST/t1ep.dbf&#39;</span> size <span class="token number">50</span>m autoextend <span class="token keyword">on</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>设置数据库默认表空间</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">database</span> <span class="token keyword">default</span> <span class="token keyword">tablespace</span> users<span class="token punctuation">;</span>

<span class="token keyword">Database</span> altered<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>表空间相关信息查询：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--查看用户的表空间</span>
<span class="token keyword">select</span> default_tablespace <span class="token keyword">from</span> dba_users <span class="token keyword">where</span> username<span class="token operator">=</span><span class="token string">&#39;登录用户&#39;</span>

<span class="token comment">--查询当前数据库所有的表空间</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_tablespaces<span class="token punctuation">;</span>


<span class="token comment">--修改表空间名称</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">tablespace</span> lims <span class="token keyword">rename</span> <span class="token keyword">to</span> lims_data<span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-使用impdp-expdp" tabindex="-1"><a class="header-anchor" href="#_6-使用impdp-expdp" aria-hidden="true">#</a> 6. 使用impdp/expdp</h2><p>impdp/expdp和sqlplus一样，是oracle服务提供的cmd命令，用来进行数据库的导入、导出。</p><h3 id="创建文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件夹" aria-hidden="true">#</a> 创建文件夹</h3><p>在导入导出中一般会使用到directory文件夹，这个是在sqlplus进入对应的数据库中，创建指定的文件夹变量;<br> 如果某个数据库中没有对应的directory变量，而在导入导出命令中使用，则会导致执行失败。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--进入指定的PDB数据库</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token keyword">session</span> <span class="token keyword">set</span> container<span class="token operator">=</span>EPTEST<span class="token punctuation">;</span>

<span class="token keyword">Session</span> altered<span class="token punctuation">.</span>
<span class="token comment">--创建文件夹 </span>
<span class="token keyword">create</span> directory dir <span class="token keyword">as</span> <span class="token string">&#39;/home/oracle&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--给文件夹设置权限</span>
<span class="token keyword">grant</span> <span class="token keyword">read</span><span class="token punctuation">,</span><span class="token keyword">write</span><span class="token punctuation">,</span><span class="token keyword">execute</span> <span class="token keyword">on</span> directory dir <span class="token keyword">to</span> username<span class="token punctuation">;</span>

<span class="token comment">---查询文件夹</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_directories<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expdp导出" tabindex="-1"><a class="header-anchor" href="#expdp导出" aria-hidden="true">#</a> expdp导出</h3><p>我们在服务端可以使用expdp导出dmp文件（不需要进入sqlplus，impdp/expdp和sqlplus一样是cmd命令），主要的命令是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#按用户/schema导</span>
expdp <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>password<span class="token punctuation">]</span>@<span class="token punctuation">[</span>database<span class="token punctuation">]</span> <span class="token assign-left variable">schemas</span><span class="token operator">=</span><span class="token punctuation">[</span>schema1,schema2<span class="token punctuation">]</span> <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>expdp.dmp <span class="token assign-left variable">DIRECTORY</span><span class="token operator">=</span>dpdata <span class="token assign-left variable">logfile</span><span class="token operator">=</span>expdlog.log<span class="token punctuation">;</span>

<span class="token comment">#按表名导,表名需要带上scheme</span>
expdp <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>password<span class="token punctuation">]</span>@<span class="token punctuation">[</span>database<span class="token punctuation">]</span> <span class="token assign-left variable">tables</span><span class="token operator">=</span><span class="token punctuation">[</span>tablename1,tablename2<span class="token punctuation">]</span> <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>expdp.dmp <span class="token assign-left variable">DIRECTORY</span><span class="token operator">=</span>dpdata <span class="token assign-left variable">logfile</span><span class="token operator">=</span>expdlog.log <span class="token punctuation">;</span>

<span class="token comment">#按查询条件导，主要用来导出表和表中的指定数据</span>
expdp <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>password<span class="token punctuation">]</span>@<span class="token punctuation">[</span>database<span class="token punctuation">]</span> <span class="token assign-left variable">tables</span><span class="token operator">=</span>tablename1 <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>expdp.dmp <span class="token assign-left variable">DIRECTORY</span><span class="token operator">=</span>dpdata <span class="token assign-left variable">logfile</span><span class="token operator">=</span>expdlog.log <span class="token assign-left variable">query</span><span class="token operator">=</span><span class="token string">&#39;where id&lt;1000&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#按表空间导</span>
expdp <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>password<span class="token punctuation">]</span>@<span class="token punctuation">[</span>database<span class="token punctuation">]</span> <span class="token assign-left variable">TABLESPACES</span><span class="token operator">=</span><span class="token punctuation">[</span>tbspacename1,tbspacename2<span class="token punctuation">]</span> <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>expdp.dmp <span class="token assign-left variable">DIRECTORY</span><span class="token operator">=</span>dpdata <span class="token assign-left variable">logfile</span><span class="token operator">=</span>expdlog.log<span class="token punctuation">;</span>

<span class="token comment"># 整个数据库</span>
expdp <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>password<span class="token punctuation">]</span>  <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>expdp.dmp <span class="token assign-left variable">DIRECTORY</span><span class="token operator">=</span>dpdata <span class="token assign-left variable">logfile</span><span class="token operator">=</span>expdlog.log <span class="token assign-left variable">FULL</span><span class="token operator">=</span>y<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>命令可以添加parallel=number 来设置并行执行线程数量</p></blockquote><h3 id="impdp导入" tabindex="-1"><a class="header-anchor" href="#impdp导入" aria-hidden="true">#</a> impdp导入</h3><p>impdp导入命令对应expdp命令，其中的参数基本一致，在使用impdp导入schema到新数据库中时，需要注意：</p><ol><li>命令中的directory变量是目标数据库中创建好的。</li><li>directory路径是当前登录用户有权限的，或者使用root用户操作</li><li>目标数据库的表空间需要和dmp文件的表空间名称一致（例如：导出的schema的表空间名称是：users，则当前数据库中需要有对应的表空间）</li></ol><blockquote><p>导出时数据所在的表空间以及用户会记录在文件中,因此导出时是什么表空间/用户,导入时也必须是什么表空间/用户.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>impdp test1/test1@EPTEST <span class="token assign-left variable">dumpfile</span><span class="token operator">=</span>PE231230.DMP <span class="token assign-left variable">directory</span><span class="token operator">=</span>DBBACK <span class="token assign-left variable">schemas</span><span class="token operator">=</span>CORE,MSTDATA,BASEPM,QUOTATION,SUPPLIER,BPMGMT,PPMGMT,CSTMGMT,PRDCTPM,CUSTOM <span class="token assign-left variable">logfile</span><span class="token operator">=</span>PE231230.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用的附加命令：</p><ol><li>修改schema到对应的schema（修改用户）：REMAP_SCHEMA=sourceSchema:targetSchema</li><li>指定表数据的处理方式为追加：TABLE_EXISTS_ACTION=append</li></ol><h4 id="报错处理" tabindex="-1"><a class="header-anchor" href="#报错处理" aria-hidden="true">#</a> 报错处理</h4><p>使用的账号不是对应PDB数据库的账号时，会导致配置的文件夹读取不到<br><code>ORA-39087: directory name DBBACK is invalid</code><br> 解决方式：使用对应的PDB中的有dba权限的账号</p><p>登录在docker实例使用的用户是非root账号，导致没有文件的操作权限：<br><code>ORA-29283: invalid file operation: cannot open file [29435]</code><br> 解决方法：使用root账号登录，或者修改配置文件的权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用root登录</span>
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>root oracle_19c /bin/bash
<span class="token comment"># 递归配置所有用户的权限</span>
bash-4.2<span class="token comment"># chmod -R 777 dbback</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,127),u=[r];function k(m,v){return n(),a("div",null,u)}const h=s(d,[["render",k],["__file","oracle.html.vue"]]);export{h as default};
