import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as r,a as e,d as t,b as i,e as n}from"./app-14adeffe.js";const c="/cookbook/assets/image-6a4fd2f8.png",d="/cookbook/assets/image-1-71277b58.png",p="/cookbook/assets/image-2-85f5418d.png",g="/cookbook/assets/image-3-7442df1c.png",_="/cookbook/assets/image-4-21737847.png",h="/cookbook/assets/image-5-910ab906.png",b="/cookbook/assets/image-9-161062da.png",m="/cookbook/assets/image-10-01eedd51.png",f="/cookbook/assets/image-11-79acc682.png",k="/cookbook/assets/image-13-74c1f781.jpeg",u="/cookbook/assets/image-12-82f968c8.png",x="/cookbook/assets/image-13-990f3d36.png",A="/cookbook/assets/image-14-ace65c49.png",R={},z=e("h1",{id:"抓包工具fiddler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抓包工具fiddler","aria-hidden":"true"},"#"),t(" 抓包工具Fiddler")],-1),y={href:"https://www.telerik.com",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"一、下载安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、下载安装","aria-hidden":"true"},"#"),t(" 一、下载安装")],-1),H={href:"https://www.telerik.com/fiddler/fiddler-classic",target:"_blank",rel:"noopener noreferrer"},C=n('<p>进入网页之后，需要填写一下用途等信息，可以随意填写，之后下载后安装即可免费使用<br><img src="'+c+'" alt="Alt text" loading="lazy"></p><h2 id="二、常用配置" tabindex="-1"><a class="header-anchor" href="#二、常用配置" aria-hidden="true">#</a> 二、常用配置</h2><h3 id="_1-https配置" tabindex="-1"><a class="header-anchor" href="#_1-https配置" aria-hidden="true">#</a> 1.HTTPS配置</h3><p>进入 Rules-Options：<br><img src="'+d+'" alt="Alt text" loading="lazy"><br> 在options的HTTPS的tab界面中，勾选上以下选项<br><img src="'+p+'" alt="Alt text" loading="lazy"></p><p>勾选完成后，点击OK保存，在弹出的对话框中，会有询问是否要安装认证证书到机器（Add certificate to the Machine Root List？）的选项，注意选择YES进行安装，这样就可以对HTTPS的网络请求进行抓包拦截啦。</p><p>TIPS：如果没有安装证书，可以再次进行配置安装，或者手动导出证书，在浏览器中进行手动配置：</p><ol><li>在Actions下拉选项中，选择：Trust Root Certificate ，信任证书；然后选择：Export Root Certificate to Desktop ，这个选项将会导出证书到本地。</li></ol><figure><img src="'+g+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ol start="2"><li><p>可以双击安装证书，然后下一步、下一步，最后点击完成即可<br><img src="'+_+'" alt="Alt text" loading="lazy"></p></li><li><p>或者可以在浏览器中进行证书配置：打开浏览器的设置，找到 隐私、搜索和服务中的安全性-》管理证书<br><img src="'+h+'" alt="Alt text" loading="lazy"><br> 选择受信任的根证书颁发机构，然后导入即可。</p></li></ol><h3 id="_2-过滤配置" tabindex="-1"><a class="header-anchor" href="#_2-过滤配置" aria-hidden="true">#</a> 2.过滤配置</h3><p>在Rules选项中可以配置过滤规则：<br><img src="'+b+'" alt="Alt text" loading="lazy"></p><ol><li>过滤图片<br> Hide Image Requests</li><li>过滤连接请求<br> Hide CONNECTs</li><li>配置断点<br> Automatic Breakpoints</li><li>自定义脚本<br> Customize Rules</li></ol><h3 id="_3-配置拦截规则" tabindex="-1"><a class="header-anchor" href="#_3-配置拦截规则" aria-hidden="true">#</a> 3.配置拦截规则</h3><p>通过打开和关闭Filters，可以进行拦截的启用和关闭，在Filters选项卡中可以配置拦截规则的定义<br><img src="'+m+'" alt="Alt text" loading="lazy"></p><ol><li><p>勾选Use Filters 控制打开和关闭过滤<br> 第一个是根据Hosts 进行过滤，第一个选项保持默认；第二个选项分别为：不过滤、隐藏配置的host、仅显示配置的host、标记配置的host，输入框则是如数域名，多个使用冒号分隔<br><img src="'+f+'" alt="Alt text" loading="lazy"></p></li><li><p>Client Process<br> 配置客户端来源</p></li><li><p>Request Headers<br> 根据请求 Headers进行过滤</p></li><li><p>Breakpoints<br> 配置断点功能</p></li><li><p>Response Status Code<br> 根据响应状态进行过滤的规则</p></li><li><p>Response Type and Size<br> 配置根据响应类型和大小进行过滤的规则</p></li><li><p>Response Headers<br> 根据响应头进行过滤和设置的规则。</p></li></ol><h3 id="_4-拦截并修改响应结果" tabindex="-1"><a class="header-anchor" href="#_4-拦截并修改响应结果" aria-hidden="true">#</a> 4.拦截并修改响应结果</h3><ol><li><p>使用Automatic Breakpoints 功能</p><ol><li>拦截请求</li><li>拦截响应</li><li>关闭</li><li>忽略图片<br><img src="'+k+'" alt="Alt text" loading="lazy"><br> 该功能可以对所有的请求和响应进行拦截，相当于进行断点调试，适用于DEBUG使用。</li></ol></li><li><p>使用AutoResponder<br> 先看截图：<br><img src="'+u+'" alt="Alt text" loading="lazy"></p></li></ol><p>在右侧的tab中点击AutoResponder 进入的，是进行方法级别拦截并进行响应mock的功能。<br> 使用方法：</p><ol><li>选择某个方法</li><li>点击Add Rule<br><img src="'+x+'" alt="Alt text" loading="lazy"></li><li>进行Response的控制，这里我使用的是本地json文件进行响应的mock</li></ol><figure><img src="'+A+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><p>这里可以配置多个Rules，可以根据需要进行勾选生效。如果要关闭所有，则关闭左上角的Enable rules即可。</p>',21);function E(S,B){const o=s("ExternalLinkIcon");return l(),r("div",null,[z,e("blockquote",null,[e("p",null,[e("a",y,[t("fiddler官网"),i(o)])])]),T,e("p",null,[t("安装包下载链接："),e("a",H,[t("fiddler classic"),i(o)])]),C])}const P=a(R,[["render",E],["__file","fiddler.html.vue"]]);export{P as default};
