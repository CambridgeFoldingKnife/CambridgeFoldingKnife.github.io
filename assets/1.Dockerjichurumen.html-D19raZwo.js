import{_ as l,c as i,d as c,e as n,f as a,b as p,w as t,r as d,o as r}from"./app-DyGs7pMe.js";const o={};function v(m,s){const e=d("RouteLink");return r(),i("div",null,[s[3]||(s[3]=c(`<h1 id="docker基础入门" tabindex="-1"><a class="header-anchor" href="#docker基础入门"><span>Docker基础入门</span></a></h1><h2 id="一、docker是什么" tabindex="-1"><a class="header-anchor" href="#一、docker是什么"><span>一、Docker是什么？</span></a></h2><h3 id="_1-1-docker简介" tabindex="-1"><a class="header-anchor" href="#_1-1-docker简介"><span>1.1 Docker简介</span></a></h3><p><strong>Docker</strong> 是一个开源的容器化平台，它可以让开发者将应用及其依赖打包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 或 Windows 机器上。</p><p><strong>Docker 的核心价值：</strong></p><ul><li>🚀 <strong>快速部署</strong> - 秒级启动，比虚拟机快得多</li><li>📦 <strong>环境一致</strong> - &quot;在我机器上能跑&quot;的问题彻底解决</li><li>🔄 <strong>轻量级</strong> - 共享主机内核，资源占用少</li><li>🌍 <strong>跨平台</strong> - 一次构建，到处运行</li></ul><h3 id="_1-2-为什么要用docker" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么要用docker"><span>1.2 为什么要用Docker？</span></a></h3><p><strong>传统部署的痛点：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">问题1：环境不一致</span>
<span class="line">开发环境 ≠ 测试环境 ≠ 生产环境</span>
<span class="line">&quot;在我机器上可以运行啊！&quot;</span>
<span class="line"></span>
<span class="line">问题2：资源浪费</span>
<span class="line">虚拟机需要完整的操作系统</span>
<span class="line">启动慢，资源占用大</span>
<span class="line"></span>
<span class="line">问题3：部署复杂</span>
<span class="line">手动配置环境</span>
<span class="line">依赖管理困难</span>
<span class="line">版本冲突频繁</span>
<span class="line"></span>
<span class="line">问题4：扩展困难</span>
<span class="line">横向扩展需要重复配置</span>
<span class="line">成本高，效率低</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 Docker 的优势：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">✅ 环境隔离 - 每个容器独立运行，互不干扰</span>
<span class="line">✅ 快速启动 - 秒级启动，即开即用</span>
<span class="line">✅ 版本控制 - 镜像版本化管理，方便回滚</span>
<span class="line">✅ 资源高效 - 共享内核，资源占用小</span>
<span class="line">✅ 持续交付 - 与 CI/CD 完美集成</span>
<span class="line">✅ 微服务 - 天然适合微服务架构</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-docker-vs-虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-3-docker-vs-虚拟机"><span>1.3 Docker vs 虚拟机</span></a></h3><table><thead><tr><th>特性</th><th>Docker 容器</th><th>虚拟机</th></tr></thead><tbody><tr><td>启动速度</td><td>秒级</td><td>分钟级</td></tr><tr><td>性能</td><td>接近原生</td><td>有损耗</td></tr><tr><td>资源占用</td><td>MB级别</td><td>GB级别</td></tr><tr><td>操作系统</td><td>共享主机内核</td><td>完整OS</td></tr><tr><td>隔离性</td><td>进程级别</td><td>系统级别</td></tr><tr><td>迁移性</td><td>非常方便</td><td>相对困难</td></tr></tbody></table><p><strong>架构对比：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">虚拟机架构：</span>
<span class="line">┌─────────────────────────────┐</span>
<span class="line">│      应用A      │   应用B    │</span>
<span class="line">├─────────────────┼───────────┤</span>
<span class="line">│    Guest OS A   │ Guest OS B│</span>
<span class="line">├─────────────────┴───────────┤</span>
<span class="line">│        Hypervisor           │</span>
<span class="line">├─────────────────────────────┤</span>
<span class="line">│        Host OS              │</span>
<span class="line">└─────────────────────────────┘</span>
<span class="line"></span>
<span class="line">Docker 架构：</span>
<span class="line">┌─────────────────────────────┐</span>
<span class="line">│   应用A   │    应用B   │应用C│</span>
<span class="line">├───────────┼───────────┼─────┤</span>
<span class="line">│  容器A    │  容器B    │容器C│</span>
<span class="line">├─────────────────────────────┤</span>
<span class="line">│      Docker Engine          │</span>
<span class="line">├─────────────────────────────┤</span>
<span class="line">│        Host OS              │</span>
<span class="line">└─────────────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="二、docker安装与配置" tabindex="-1"><a class="header-anchor" href="#二、docker安装与配置"><span>二、Docker安装与配置</span></a></h2><h3 id="_2-1-系统要求" tabindex="-1"><a class="header-anchor" href="#_2-1-系统要求"><span>2.1 系统要求</span></a></h3><p><strong>Linux：</strong></p><ul><li>64位操作系统</li><li>内核版本 3.10 以上</li></ul><p><strong>Windows：</strong></p><ul><li>Windows 10 64位：Pro、Enterprise 或 Education</li><li>启用 Hyper-V 和容器功能</li></ul><p><strong>macOS：</strong></p><ul><li>macOS 10.14 或更高版本</li><li>4GB RAM 最小配置</li></ul><h3 id="_2-2-windows-安装-docker-desktop" tabindex="-1"><a class="header-anchor" href="#_2-2-windows-安装-docker-desktop"><span>2.2 Windows 安装（Docker Desktop）</span></a></h3><p><strong>步骤1：下载安装包</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">访问官网：https://www.docker.com/products/docker-desktop</span>
<span class="line">下载：Docker Desktop for Windows</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2：安装 Docker Desktop</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 双击安装包运行</span>
<span class="line">2. 勾选 &quot;Install required Windows components for WSL 2&quot;</span>
<span class="line">3. 按照向导完成安装</span>
<span class="line">4. 重启电脑</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤3：启动 Docker Desktop</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 从开始菜单启动 Docker Desktop</span>
<span class="line">2. 等待 Docker 启动（状态栏显示 Docker 图标）</span>
<span class="line">3. 打开 PowerShell 或 CMD</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤4：验证安装</strong></p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre><code><span class="line"><span class="token comment"># 查看版本</span></span>
<span class="line">docker <span class="token operator">--</span>version</span>
<span class="line">docker version</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行测试容器</span></span>
<span class="line">docker run hello-world</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 应该看到：</span></span>
<span class="line"><span class="token comment"># Hello from Docker!</span></span>
<span class="line"><span class="token comment"># This message shows that your installation appears to be working correctly.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-linux-安装-ubuntu" tabindex="-1"><a class="header-anchor" href="#_2-3-linux-安装-ubuntu"><span>2.3 Linux 安装（Ubuntu）</span></a></h3><p><strong>方式一：使用官方脚本（推荐）</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载并运行官方安装脚本</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动 Docker 服务</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start <span class="token function">docker</span></span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：手动安装</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 卸载旧版本</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 更新软件包索引</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 安装依赖包</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span></span>
<span class="line">    ca-certificates <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token function">curl</span> <span class="token punctuation">\\</span></span>
<span class="line">    gnupg <span class="token punctuation">\\</span></span>
<span class="line">    lsb-release</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 添加 Docker 官方 GPG 密钥</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings</span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 设置 Docker 仓库</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\</span>
<span class="line">  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 安装 Docker Engine</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 7. 验证安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置非root用户使用Docker：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建 docker 组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将当前用户添加到 docker 组</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新登录或执行</span></span>
<span class="line">newgrp <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 现在可以不用 sudo 运行 docker 命令</span></span>
<span class="line"><span class="token function">docker</span> run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-macos-安装" tabindex="-1"><a class="header-anchor" href="#_2-4-macos-安装"><span>2.4 macOS 安装</span></a></h3><p><strong>步骤1：下载 Docker Desktop</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">访问：https://www.docker.com/products/docker-desktop</span>
<span class="line">下载：Docker Desktop for Mac (Apple Silicon 或 Intel)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2：安装</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 打开 .dmg 文件</span>
<span class="line">2. 拖拽 Docker 图标到 Applications 文件夹</span>
<span class="line">3. 从 Applications 启动 Docker</span>
<span class="line">4. 授权 Docker 访问权限</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤3：验证</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token function">docker</span> run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#_2-5-配置镜像加速器"><span>2.5 配置镜像加速器</span></a></h3><p>由于 Docker Hub 在国内访问较慢，建议配置镜像加速器。</p><p><strong>阿里云镜像加速器（推荐）：</strong></p><ol><li>登录阿里云容器镜像服务</li><li>获取专属加速地址：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</li></ol><p><strong>Linux 配置：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建或编辑 daemon.json</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;</span>
<span class="line">{</span>
<span class="line">  &quot;registry-mirrors&quot;: [</span>
<span class="line">    &quot;https://mirror.ccs.tencentyun.com&quot;,</span>
<span class="line">    &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span>
<span class="line">    &quot;https://registry.docker-cn.com&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启 Docker 服务</span></span>
<span class="line"><span class="token function">sudo</span> systemctl daemon-reload</span>
<span class="line"><span class="token function">sudo</span> systemctl restart <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证配置</span></span>
<span class="line"><span class="token function">docker</span> info <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">1</span> <span class="token string">&quot;Registry Mirrors&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Windows/macOS 配置：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 打开 Docker Desktop</span>
<span class="line">2. 点击设置（Settings）</span>
<span class="line">3. 选择 Docker Engine</span>
<span class="line">4. 在 JSON 配置中添加：</span>
<span class="line">{</span>
<span class="line">  &quot;registry-mirrors&quot;: [</span>
<span class="line">    &quot;https://mirror.ccs.tencentyun.com&quot;,</span>
<span class="line">    &quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">5. 点击 Apply &amp; Restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="三、docker架构与核心组件" tabindex="-1"><a class="header-anchor" href="#三、docker架构与核心组件"><span>三、Docker架构与核心组件</span></a></h2><h3 id="_3-1-docker-架构" tabindex="-1"><a class="header-anchor" href="#_3-1-docker-架构"><span>3.1 Docker 架构</span></a></h3><p>Docker 使用客户端-服务器（C/S）架构：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌──────────────────────────────────────────────┐</span>
<span class="line">│           Docker Client (客户端)              │</span>
<span class="line">│  docker build, docker pull, docker run...    │</span>
<span class="line">└───────────────────┬──────────────────────────┘</span>
<span class="line">                    │ REST API</span>
<span class="line">                    ▼</span>
<span class="line">┌──────────────────────────────────────────────┐</span>
<span class="line">│         Docker Daemon (dockerd)              │</span>
<span class="line">│  ┌────────────┐  ┌────────────┐             │</span>
<span class="line">│  │  镜像管理  │  │  容器管理  │             │</span>
<span class="line">│  └────────────┘  └────────────┘             │</span>
<span class="line">│  ┌────────────┐  ┌────────────┐             │</span>
<span class="line">│  │  网络管理  │  │  数据卷    │             │</span>
<span class="line">│  └────────────┘  └────────────┘             │</span>
<span class="line">└───────────────────┬──────────────────────────┘</span>
<span class="line">                    │</span>
<span class="line">                    ▼</span>
<span class="line">┌──────────────────────────────────────────────┐</span>
<span class="line">│        Docker Registry (镜像仓库)             │</span>
<span class="line">│  Docker Hub, 阿里云, Harbor...               │</span>
<span class="line">└──────────────────────────────────────────────┘</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-核心组件" tabindex="-1"><a class="header-anchor" href="#_3-2-核心组件"><span>3.2 核心组件</span></a></h3><p><strong>1. Docker Client（客户端）</strong></p><ul><li>用户与 Docker 交互的主要方式</li><li>发送命令到 Docker Daemon</li><li>可以与多个 Daemon 通信</li></ul><p><strong>2. Docker Daemon（守护进程）</strong></p><ul><li>监听 Docker API 请求</li><li>管理 Docker 对象（镜像、容器、网络、卷）</li><li>可以与其他 Daemon 通信</li></ul><p><strong>3. Docker Images（镜像）</strong></p><ul><li>只读模板，用于创建容器</li><li>包含运行应用所需的所有内容</li><li>分层存储，节省空间</li></ul><p><strong>4. Docker Containers（容器）</strong></p><ul><li>镜像的运行实例</li><li>可以被创建、启动、停止、删除</li><li>相互隔离，保证安全</li></ul><p><strong>5. Docker Registry（仓库）</strong></p><ul><li>存储 Docker 镜像</li><li>公共仓库：Docker Hub</li><li>私有仓库：Harbor、阿里云</li></ul><h3 id="_3-3-核心概念" tabindex="-1"><a class="header-anchor" href="#_3-3-核心概念"><span>3.3 核心概念</span></a></h3><p><strong>镜像（Image）：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">镜像 = 应用 + 依赖 + 运行时环境</span>
<span class="line"></span>
<span class="line">特点：</span>
<span class="line">- 只读模板</span>
<span class="line">- 分层存储</span>
<span class="line">- 可以基于其他镜像构建</span>
<span class="line">- 版本控制（通过标签）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容器（Container）：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">容器 = 镜像的运行实例</span>
<span class="line"></span>
<span class="line">特点：</span>
<span class="line">- 可读可写</span>
<span class="line">- 轻量级</span>
<span class="line">- 相互隔离</span>
<span class="line">- 可以被启动、停止、删除</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>仓库（Registry）：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">仓库 = 存储和分发镜像的服务</span>
<span class="line"></span>
<span class="line">类型：</span>
<span class="line">- 公共仓库（Docker Hub）</span>
<span class="line">- 私有仓库（Harbor）</span>
<span class="line">- 云服务商仓库（阿里云、腾讯云）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="四、docker镜像与容器基础操作" tabindex="-1"><a class="header-anchor" href="#四、docker镜像与容器基础操作"><span>四、Docker镜像与容器基础操作</span></a></h2><h3 id="_4-1-镜像操作" tabindex="-1"><a class="header-anchor" href="#_4-1-镜像操作"><span>4.1 镜像操作</span></a></h3><p><strong>查看本地镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 列出所有镜像</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"><span class="token comment"># 或</span></span>
<span class="line"><span class="token function">docker</span> image <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># REPOSITORY    TAG       IMAGE ID       CREATED        SIZE</span></span>
<span class="line"><span class="token comment"># nginx         latest    605c77e624dd   2 weeks ago    141MB</span></span>
<span class="line"><span class="token comment"># mysql         8.0       3218b38490ce   3 weeks ago    516MB</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>搜索镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在 Docker Hub 搜索镜像</span></span>
<span class="line"><span class="token function">docker</span> search nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># NAME                DESCRIPTION           STARS     OFFICIAL</span></span>
<span class="line"><span class="token comment"># nginx               Official build...     15000     [OK]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拉取镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 拉取最新版本</span></span>
<span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取指定版本</span></span>
<span class="line"><span class="token function">docker</span> pull nginx:1.21</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取指定平台镜像</span></span>
<span class="line"><span class="token function">docker</span> pull <span class="token parameter variable">--platform</span> linux/amd64 nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 通过镜像ID删除</span></span>
<span class="line"><span class="token function">docker</span> rmi 605c77e624dd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过名称删除</span></span>
<span class="line"><span class="token function">docker</span> rmi nginx:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除（即使有容器在使用）</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有未使用的镜像</span></span>
<span class="line"><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看镜像详情：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看镜像详细信息</span></span>
<span class="line"><span class="token function">docker</span> inspect nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看镜像历史</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">history</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-容器操作" tabindex="-1"><a class="header-anchor" href="#_4-2-容器操作"><span>4.2 容器操作</span></a></h3><p><strong>运行容器：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 基本运行</span></span>
<span class="line"><span class="token function">docker</span> run nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后台运行</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定容器名称</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> my-nginx nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 端口映射</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> my-nginx nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 环境变量</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root mysql:8.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 数据卷挂载</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /my/data:/var/lib/mysql mysql:8.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 组合使用</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> my-nginx <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /my/html:/usr/share/nginx/html <span class="token punctuation">\\</span></span>
<span class="line">  nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看容器：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看所有容器（包括已停止的）</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器详细信息</span></span>
<span class="line"><span class="token function">docker</span> inspect my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器资源使用</span></span>
<span class="line"><span class="token function">docker</span> stats my-nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容器生命周期管理：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line"><span class="token function">docker</span> start my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> stop my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启容器</span></span>
<span class="line"><span class="token function">docker</span> restart my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 暂停容器</span></span>
<span class="line"><span class="token function">docker</span> pause my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复容器</span></span>
<span class="line"><span class="token function">docker</span> unpause my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有已停止的容器</span></span>
<span class="line"><span class="token function">docker</span> container prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入容器：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入容器（推荐）</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-nginx <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果没有 bash，使用 sh</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-nginx <span class="token function">sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 以 root 用户进入</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-u</span> root my-nginx <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行单条命令</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> my-nginx <span class="token function">ls</span> <span class="token parameter variable">-la</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看容器日志：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看日志</span></span>
<span class="line"><span class="token function">docker</span> logs my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 实时查看日志</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看最后100行</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">--tail</span> <span class="token number">100</span> my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示时间戳</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-t</span> my-nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容器与主机之间复制文件：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 从容器复制到主机</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> my-nginx:/etc/nginx/nginx.conf ./nginx.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从主机复制到容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> ./index.html my-nginx:/usr/share/nginx/html/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="五、docker仓库使用" tabindex="-1"><a class="header-anchor" href="#五、docker仓库使用"><span>五、Docker仓库使用</span></a></h2><h3 id="_5-1-docker-hub" tabindex="-1"><a class="header-anchor" href="#_5-1-docker-hub"><span>5.1 Docker Hub</span></a></h3><p><strong>注册与登录：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 登录 Docker Hub</span></span>
<span class="line"><span class="token function">docker</span> login</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名和密码</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 登出</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">logout</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推送镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 标记镜像（添加用户名前缀）</span></span>
<span class="line"><span class="token function">docker</span> tag my-app:latest username/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 推送到 Docker Hub</span></span>
<span class="line"><span class="token function">docker</span> push username/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 推送所有标签</span></span>
<span class="line"><span class="token function">docker</span> push username/my-app --all-tags</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拉取镜像：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 拉取公共镜像</span></span>
<span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取私有镜像（需要先登录）</span></span>
<span class="line"><span class="token function">docker</span> pull username/my-private-app</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-阿里云容器镜像服务" tabindex="-1"><a class="header-anchor" href="#_5-2-阿里云容器镜像服务"><span>5.2 阿里云容器镜像服务</span></a></h3><p><strong>配置阿里云镜像仓库：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 登录阿里云镜像仓库</span></span>
<span class="line"><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>your_username registry.cn-hangzhou.aliyuncs.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 标记镜像</span></span>
<span class="line"><span class="token function">docker</span> tag my-app:latest registry.cn-hangzhou.aliyuncs.com/namespace/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 推送镜像</span></span>
<span class="line"><span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/namespace/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 拉取镜像</span></span>
<span class="line"><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/namespace/my-app:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-私有仓库-registry" tabindex="-1"><a class="header-anchor" href="#_5-3-私有仓库-registry"><span>5.3 私有仓库（Registry）</span></a></h3><p><strong>快速搭建私有仓库：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 运行 Registry 容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> registry <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /my/registry:/var/lib/registry <span class="token punctuation">\\</span></span>
<span class="line">  registry:2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 标记镜像</span></span>
<span class="line"><span class="token function">docker</span> tag my-app:latest localhost:5000/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 推送到私有仓库</span></span>
<span class="line"><span class="token function">docker</span> push localhost:5000/my-app:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 从私有仓库拉取</span></span>
<span class="line"><span class="token function">docker</span> pull localhost:5000/my-app:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="六、docker常用命令速查" tabindex="-1"><a class="header-anchor" href="#六、docker常用命令速查"><span>六、Docker常用命令速查</span></a></h2><h3 id="_6-1-镜像命令" tabindex="-1"><a class="header-anchor" href="#_6-1-镜像命令"><span>6.1 镜像命令</span></a></h3><table><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>docker pull</code></td><td>拉取镜像</td><td><code>docker pull nginx:1.21</code></td></tr><tr><td><code>docker images</code></td><td>列出镜像</td><td><code>docker images</code></td></tr><tr><td><code>docker rmi</code></td><td>删除镜像</td><td><code>docker rmi nginx</code></td></tr><tr><td><code>docker build</code></td><td>构建镜像</td><td><code>docker build -t myapp .</code></td></tr><tr><td><code>docker tag</code></td><td>标记镜像</td><td><code>docker tag app:v1 app:latest</code></td></tr><tr><td><code>docker push</code></td><td>推送镜像</td><td><code>docker push myapp:latest</code></td></tr><tr><td><code>docker history</code></td><td>查看镜像历史</td><td><code>docker history nginx</code></td></tr><tr><td><code>docker inspect</code></td><td>查看镜像详情</td><td><code>docker inspect nginx</code></td></tr></tbody></table><h3 id="_6-2-容器命令" tabindex="-1"><a class="header-anchor" href="#_6-2-容器命令"><span>6.2 容器命令</span></a></h3><table><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>docker run</code></td><td>创建并运行容器</td><td><code>docker run -d nginx</code></td></tr><tr><td><code>docker ps</code></td><td>列出容器</td><td><code>docker ps -a</code></td></tr><tr><td><code>docker start</code></td><td>启动容器</td><td><code>docker start my-nginx</code></td></tr><tr><td><code>docker stop</code></td><td>停止容器</td><td><code>docker stop my-nginx</code></td></tr><tr><td><code>docker restart</code></td><td>重启容器</td><td><code>docker restart my-nginx</code></td></tr><tr><td><code>docker rm</code></td><td>删除容器</td><td><code>docker rm my-nginx</code></td></tr><tr><td><code>docker exec</code></td><td>进入容器</td><td><code>docker exec -it nginx bash</code></td></tr><tr><td><code>docker logs</code></td><td>查看日志</td><td><code>docker logs -f nginx</code></td></tr><tr><td><code>docker cp</code></td><td>复制文件</td><td><code>docker cp nginx:/file ./</code></td></tr></tbody></table><h3 id="_6-3-系统命令" tabindex="-1"><a class="header-anchor" href="#_6-3-系统命令"><span>6.3 系统命令</span></a></h3><table><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>docker info</code></td><td>查看系统信息</td><td><code>docker info</code></td></tr><tr><td><code>docker version</code></td><td>查看版本</td><td><code>docker version</code></td></tr><tr><td><code>docker system df</code></td><td>查看磁盘使用</td><td><code>docker system df</code></td></tr><tr><td><code>docker system prune</code></td><td>清理资源</td><td><code>docker system prune -a</code></td></tr></tbody></table><h3 id="_6-4-常用参数" tabindex="-1"><a class="header-anchor" href="#_6-4-常用参数"><span>6.4 常用参数</span></a></h3><p><strong>docker run 常用参数：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token parameter variable">-d</span>                    <span class="token comment"># 后台运行</span></span>
<span class="line"><span class="token parameter variable">-it</span>                   <span class="token comment"># 交互式运行</span></span>
<span class="line"><span class="token parameter variable">--name</span>                <span class="token comment"># 指定容器名称</span></span>
<span class="line"><span class="token parameter variable">-p</span> 主机端口:容器端口   <span class="token comment"># 端口映射</span></span>
<span class="line"><span class="token parameter variable">-v</span> 主机路径:容器路径   <span class="token comment"># 数据卷挂载</span></span>
<span class="line"><span class="token parameter variable">-e</span> <span class="token assign-left variable">KEY</span><span class="token operator">=</span>VALUE          <span class="token comment"># 环境变量</span></span>
<span class="line"><span class="token parameter variable">--network</span>             <span class="token comment"># 指定网络</span></span>
<span class="line"><span class="token parameter variable">--restart</span>             <span class="token comment"># 重启策略</span></span>
<span class="line"><span class="token parameter variable">--rm</span>                  <span class="token comment"># 容器停止后自动删除</span></span>
<span class="line"><span class="token parameter variable">--memory</span>              <span class="token comment"># 内存限制</span></span>
<span class="line"><span class="token parameter variable">--cpus</span>                <span class="token comment"># CPU限制</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> my-app <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /data:/app/data <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">SPRING_PROFILES_ACTIVE</span><span class="token operator">=</span>prod <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--network</span> my-network <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--memory</span> 512m <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--cpus</span> <span class="token number">1.0</span> <span class="token punctuation">\\</span></span>
<span class="line">  my-app:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="七、实践练习" tabindex="-1"><a class="header-anchor" href="#七、实践练习"><span>七、实践练习</span></a></h2><h3 id="练习1-运行-nginx-服务器" tabindex="-1"><a class="header-anchor" href="#练习1-运行-nginx-服务器"><span>练习1：运行 Nginx 服务器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 拉取 nginx 镜像</span></span>
<span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 运行 nginx 容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> my-nginx <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 访问 http://localhost:8080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 查看容器日志</span></span>
<span class="line"><span class="token function">docker</span> logs my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 进入容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-nginx <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 停止并删除容器</span></span>
<span class="line"><span class="token function">docker</span> stop my-nginx</span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> my-nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习2-运行-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#练习2-运行-mysql-数据库"><span>练习2：运行 MySQL 数据库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 运行 MySQL 容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> my-mysql <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root123 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>testdb <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> mysql-data:/var/lib/mysql <span class="token punctuation">\\</span></span>
<span class="line">  mysql:8.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 查看容器状态</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 查看日志</span></span>
<span class="line"><span class="token function">docker</span> logs my-mysql</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 进入容器连接数据库</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-mysql mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot123</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 在 MySQL 中执行命令</span></span>
<span class="line">SHOW DATABASES<span class="token punctuation">;</span></span>
<span class="line">USE testdb<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 退出并清理</span></span>
<span class="line"><span class="token builtin class-name">exit</span></span>
<span class="line"><span class="token function">docker</span> stop my-mysql</span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> my-mysql</span>
<span class="line"><span class="token function">docker</span> volume <span class="token function">rm</span> mysql-data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习3-构建自定义镜像" tabindex="-1"><a class="header-anchor" href="#练习3-构建自定义镜像"><span>练习3：构建自定义镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 创建项目目录</span></span>
<span class="line"><span class="token function">mkdir</span> my-web-app <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my-web-app</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 创建 index.html</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;h1&gt;Hello Docker!&lt;/h1&gt;&quot;</span> <span class="token operator">&gt;</span> index.html</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 创建 Dockerfile</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> Dockerfile <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">FROM nginx:alpine</span>
<span class="line">COPY index.html /usr/share/nginx/html/</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 构建镜像</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my-web-app:v1 <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 运行容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--name</span> web my-web-app:v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 6. 访问 http://localhost:8080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 7. 清理</span></span>
<span class="line"><span class="token function">docker</span> stop web</span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> web</span>
<span class="line"><span class="token function">docker</span> rmi my-web-app:v1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="八、小结" tabindex="-1"><a class="header-anchor" href="#八、小结"><span>八、小结</span></a></h2><p>通过本章学习，你应该掌握：</p><p>✅ <strong>Docker 是什么</strong></p><ul><li>容器化平台</li><li>轻量级、快速、可移植</li></ul><p>✅ <strong>Docker 的优势</strong></p><ul><li>环境一致性</li><li>快速部署</li><li>资源高效</li></ul><p>✅ <strong>Docker 的安装</strong></p><ul><li>Windows/Linux/macOS</li><li>镜像加速器配置</li></ul><p>✅ <strong>核心概念</strong></p><ul><li>镜像、容器、仓库</li><li>客户端-服务器架构</li></ul><p>✅ <strong>基础操作</strong></p><ul><li>镜像管理</li><li>容器生命周期</li><li>常用命令</li></ul><p><strong>下一章预告：</strong> 在下一章中，我们将深入学习 Docker 的核心概念，包括镜像原理、Dockerfile 编写、网络和数据卷管理等内容。</p><hr>`,155)),n("p",null,[s[1]||(s[1]=n("strong",null,"继续学习",-1)),s[2]||(s[2]=a(" → ",-1)),p(e,{to:"/tutorials/java-backend/docker/2.Docker%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.html"},{default:t(()=>[...s[0]||(s[0]=[a("第二章：Docker 核心概念",-1)])]),_:1})])])}const b=l(o,[["render",v]]),k=JSON.parse('{"path":"/tutorials/java-backend/docker/1.Dockerjichurumen.html","title":"Docker基础入门","lang":"zh-CN","frontmatter":{"title":"Docker基础入门"},"headers":[{"level":2,"title":"一、Docker是什么？","slug":"一、docker是什么","link":"#一、docker是什么","children":[{"level":3,"title":"1.1 Docker简介","slug":"_1-1-docker简介","link":"#_1-1-docker简介","children":[]},{"level":3,"title":"1.2 为什么要用Docker？","slug":"_1-2-为什么要用docker","link":"#_1-2-为什么要用docker","children":[]},{"level":3,"title":"1.3 Docker vs 虚拟机","slug":"_1-3-docker-vs-虚拟机","link":"#_1-3-docker-vs-虚拟机","children":[]}]},{"level":2,"title":"二、Docker安装与配置","slug":"二、docker安装与配置","link":"#二、docker安装与配置","children":[{"level":3,"title":"2.1 系统要求","slug":"_2-1-系统要求","link":"#_2-1-系统要求","children":[]},{"level":3,"title":"2.2 Windows 安装（Docker Desktop）","slug":"_2-2-windows-安装-docker-desktop","link":"#_2-2-windows-安装-docker-desktop","children":[]},{"level":3,"title":"2.3 Linux 安装（Ubuntu）","slug":"_2-3-linux-安装-ubuntu","link":"#_2-3-linux-安装-ubuntu","children":[]},{"level":3,"title":"2.4 macOS 安装","slug":"_2-4-macos-安装","link":"#_2-4-macos-安装","children":[]},{"level":3,"title":"2.5 配置镜像加速器","slug":"_2-5-配置镜像加速器","link":"#_2-5-配置镜像加速器","children":[]}]},{"level":2,"title":"三、Docker架构与核心组件","slug":"三、docker架构与核心组件","link":"#三、docker架构与核心组件","children":[{"level":3,"title":"3.1 Docker 架构","slug":"_3-1-docker-架构","link":"#_3-1-docker-架构","children":[]},{"level":3,"title":"3.2 核心组件","slug":"_3-2-核心组件","link":"#_3-2-核心组件","children":[]},{"level":3,"title":"3.3 核心概念","slug":"_3-3-核心概念","link":"#_3-3-核心概念","children":[]}]},{"level":2,"title":"四、Docker镜像与容器基础操作","slug":"四、docker镜像与容器基础操作","link":"#四、docker镜像与容器基础操作","children":[{"level":3,"title":"4.1 镜像操作","slug":"_4-1-镜像操作","link":"#_4-1-镜像操作","children":[]},{"level":3,"title":"4.2 容器操作","slug":"_4-2-容器操作","link":"#_4-2-容器操作","children":[]}]},{"level":2,"title":"五、Docker仓库使用","slug":"五、docker仓库使用","link":"#五、docker仓库使用","children":[{"level":3,"title":"5.1 Docker Hub","slug":"_5-1-docker-hub","link":"#_5-1-docker-hub","children":[]},{"level":3,"title":"5.2 阿里云容器镜像服务","slug":"_5-2-阿里云容器镜像服务","link":"#_5-2-阿里云容器镜像服务","children":[]},{"level":3,"title":"5.3 私有仓库（Registry）","slug":"_5-3-私有仓库-registry","link":"#_5-3-私有仓库-registry","children":[]}]},{"level":2,"title":"六、Docker常用命令速查","slug":"六、docker常用命令速查","link":"#六、docker常用命令速查","children":[{"level":3,"title":"6.1 镜像命令","slug":"_6-1-镜像命令","link":"#_6-1-镜像命令","children":[]},{"level":3,"title":"6.2 容器命令","slug":"_6-2-容器命令","link":"#_6-2-容器命令","children":[]},{"level":3,"title":"6.3 系统命令","slug":"_6-3-系统命令","link":"#_6-3-系统命令","children":[]},{"level":3,"title":"6.4 常用参数","slug":"_6-4-常用参数","link":"#_6-4-常用参数","children":[]}]},{"level":2,"title":"七、实践练习","slug":"七、实践练习","link":"#七、实践练习","children":[{"level":3,"title":"练习1：运行 Nginx 服务器","slug":"练习1-运行-nginx-服务器","link":"#练习1-运行-nginx-服务器","children":[]},{"level":3,"title":"练习2：运行 MySQL 数据库","slug":"练习2-运行-mysql-数据库","link":"#练习2-运行-mysql-数据库","children":[]},{"level":3,"title":"练习3：构建自定义镜像","slug":"练习3-构建自定义镜像","link":"#练习3-构建自定义镜像","children":[]}]},{"level":2,"title":"八、小结","slug":"八、小结","link":"#八、小结","children":[]}],"git":{"createdTime":1765249786000,"updatedTime":1765249786000,"contributors":[{"name":"CambridgeFoldingKnife","email":"3144253125@qq.com","commits":1}]},"filePathRelative":"tutorials/java-backend/docker/1.Docker基础入门.md"}');export{b as comp,k as data};
