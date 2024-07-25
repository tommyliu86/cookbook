import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-795fbe66.js";const t={},i=e(`<h1 id="安装后命令" tabindex="-1"><a class="header-anchor" href="#安装后命令" aria-hidden="true">#</a> 安装后命令</h1><h3 id="错误排查" tabindex="-1"><a class="header-anchor" href="#错误排查" aria-hidden="true">#</a> 错误排查</h3><p>执行podman machine init 报错：vm already exists<br> 需要先执行rm的命令，移除配置文件，然后后再进行init</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">podman</span> machine <span class="token function">rm</span>

The following files will be deleted:

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>podman-machine-default
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>podman-machine-default.pub
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token punctuation">\\</span>.local<span class="token punctuation">\\</span>share<span class="token punctuation">\\</span>containers<span class="token punctuation">\\</span>podman<span class="token punctuation">\\</span>machine<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>podman-machine-default_fedora-podman-amd64-v39.0.60.tar
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token punctuation">\\</span>.config<span class="token punctuation">\\</span>containers<span class="token punctuation">\\</span>podman<span class="token punctuation">\\</span>machine<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>podman-machine-default.json
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token punctuation">\\</span>.local<span class="token punctuation">\\</span>share<span class="token punctuation">\\</span>containers<span class="token punctuation">\\</span>podman<span class="token punctuation">\\</span>machine<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>wsldist<span class="token punctuation">\\</span>podman-machine-default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行init" tabindex="-1"><a class="header-anchor" href="#执行init" aria-hidden="true">#</a> 执行init</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">podman</span> machine init
Extracting compressed file: podman-machine-default_fedora-podman-amd64-v39.0.60.tar: <span class="token keyword">done</span>
Importing operating system into WSL <span class="token punctuation">(</span>this may take a few minutes on a new WSL <span class="token function">install</span><span class="token punctuation">)</span><span class="token punctuation">..</span>.
正在导入，这可能需要几分钟时间。
操作成功完成。
^XConfiguring system<span class="token punctuation">..</span>.
Generating public/private ed25519 key pair.
Your identification has been saved <span class="token keyword">in</span> podman-machine-default
Your public key has been saved <span class="token keyword">in</span> podman-machine-default.pub
The key fingerprint is:
SHA256:iwU+Geq2nQzVfpkFglOmXDJIJ2723GLB5VowgnL2obE root@DESKTOP-VD91CTK
The key&#39;s randomart image is:
+--<span class="token punctuation">[</span>ED25519 <span class="token number">256</span><span class="token punctuation">]</span>--+
<span class="token operator">|</span>   o+.* <span class="token operator">=</span>        <span class="token operator">|</span>
<span class="token operator">|</span><span class="token builtin class-name">.</span> <span class="token operator">=</span>.o* <span class="token operator">&amp;</span>         <span class="token operator">|</span>
<span class="token operator">|</span> + <span class="token operator">=</span>+.X + <span class="token builtin class-name">.</span>      <span class="token operator">|</span>
<span class="token operator">|</span>  Eo.<span class="token operator">=</span> @ <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>     <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token builtin class-name">.</span> @ S   <span class="token builtin class-name">.</span>    <span class="token operator">|</span>
<span class="token operator">|</span>   <span class="token builtin class-name">.</span> o * <span class="token builtin class-name">.</span> +     <span class="token operator">|</span>
<span class="token operator">|</span>    + <span class="token builtin class-name">.</span> o +      <span class="token operator">|</span>
<span class="token operator">|</span>   <span class="token builtin class-name">.</span> <span class="token operator">=</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>       <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token builtin class-name">.</span> +          <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+
Machine init complete
To start your machine run:

        <span class="token function">podman</span> machine start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行start" tabindex="-1"><a class="header-anchor" href="#执行start" aria-hidden="true">#</a> 执行start</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>liuwenfei<span class="token operator">&gt;</span> <span class="token function">podman</span> machine start
Starting machine <span class="token string">&quot;podman-machine-default&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","podman.html.vue"]]);export{d as default};
