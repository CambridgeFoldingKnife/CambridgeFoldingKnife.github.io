import{_ as l,c as i,d,e as n,f as a,b as r,w as c,r as p,o as t}from"./app-D9dfRPMK.js";const v={};function o(u,s){const e=p("RouteLink");return t(),i("div",null,[s[3]||(s[3]=d(`<h1 id="_03-redis持久化机制" tabindex="-1"><a class="header-anchor" href="#_03-redis持久化机制"><span>03 - Redis持久化机制</span></a></h1><h2 id="🎯-学习目标" tabindex="-1"><a class="header-anchor" href="#🎯-学习目标"><span>🎯 学习目标</span></a></h2><ul><li>理解Redis持久化的必要性</li><li>掌握RDB持久化机制</li><li>掌握AOF持久化机制</li><li>了解混合持久化</li><li>学会选择合适的持久化策略</li></ul><h2 id="📖-为什么需要持久化" tabindex="-1"><a class="header-anchor" href="#📖-为什么需要持久化"><span>📖 为什么需要持久化？</span></a></h2><p>Redis是内存数据库，数据存储在内存中。如果服务器宕机或重启，内存中的数据会全部丢失。</p><p>持久化的作用：</p><ul><li>💾 <strong>数据备份</strong> - 防止数据丢失</li><li>🔄 <strong>灾难恢复</strong> - 快速恢复数据</li><li>📊 <strong>数据迁移</strong> - 方便数据迁移</li></ul><h2 id="_1️⃣-rdb持久化" tabindex="-1"><a class="header-anchor" href="#_1️⃣-rdb持久化"><span>1️⃣ RDB持久化</span></a></h2><h3 id="什么是rdb" tabindex="-1"><a class="header-anchor" href="#什么是rdb"><span>什么是RDB？</span></a></h3><p>RDB（Redis Database）是Redis默认的持久化方式，将内存中的数据以<strong>快照</strong>形式保存到磁盘的二进制文件中。</p><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">触发RDB → fork子进程 → 子进程写RDB文件 → 替换旧文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Redis使用<code>fork()</code>创建子进程</li><li>子进程将数据写入临时RDB文件</li><li>写入完成后，替换旧的RDB文件</li></ul><h3 id="触发方式" tabindex="-1"><a class="header-anchor" href="#触发方式"><span>触发方式</span></a></h3><h4 id="_1-自动触发-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-自动触发-配置文件"><span>1. 自动触发（配置文件）</span></a></h4><p><strong>redis.conf配置：</strong></p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 900秒内至少1个key发生变化，触发RDB</span>
<span class="line">save 900 1</span>
<span class="line"></span>
<span class="line"># 300秒内至少10个key发生变化，触发RDB</span>
<span class="line">save 300 10</span>
<span class="line"></span>
<span class="line"># 60秒内至少10000个key发生变化，触发RDB</span>
<span class="line">save 60 10000</span>
<span class="line"></span>
<span class="line"># RDB文件名</span>
<span class="line">dbfilename dump.rdb</span>
<span class="line"></span>
<span class="line"># RDB文件保存路径</span>
<span class="line">dir /var/lib/redis</span>
<span class="line"></span>
<span class="line"># RDB文件压缩</span>
<span class="line">rdbcompression yes</span>
<span class="line"></span>
<span class="line"># RDB文件校验</span>
<span class="line">rdbchecksum yes</span>
<span class="line"></span>
<span class="line"># RDB失败时停止写入</span>
<span class="line">stop-writes-on-bgsave-error yes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-手动触发" tabindex="-1"><a class="header-anchor" href="#_2-手动触发"><span>2. 手动触发</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># SAVE命令（阻塞式）</span></span>
<span class="line"><span class="token comment"># 阻塞主进程，不推荐在生产环境使用</span></span>
<span class="line">SAVE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># BGSAVE命令（后台保存）</span></span>
<span class="line"><span class="token comment"># 创建子进程进行保存，推荐使用</span></span>
<span class="line">BGSAVE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看最后一次保存时间</span></span>
<span class="line">LASTSAVE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-其他触发场景" tabindex="-1"><a class="header-anchor" href="#_3-其他触发场景"><span>3. 其他触发场景</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 关闭服务器时</span></span>
<span class="line">SHUTDOWN</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 主从复制时（全量同步）</span></span>
<span class="line"><span class="token comment"># 主节点自动执行BGSAVE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rdb文件格式" tabindex="-1"><a class="header-anchor" href="#rdb文件格式"><span>RDB文件格式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">dump.rdb文件内容：</span>
<span class="line">- REDIS魔数</span>
<span class="line">- RDB版本号</span>
<span class="line">- 数据库编号</span>
<span class="line">- 键值对数据</span>
<span class="line">- EOF标志</span>
<span class="line">- 校验和</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>✅ <strong>性能高</strong> - 子进程处理，不影响主进程</li><li>✅ <strong>恢复快</strong> - 直接加载RDB文件，速度快</li><li>✅ <strong>文件小</strong> - 压缩后文件体积小</li><li>✅ <strong>适合备份</strong> - 定期备份，方便灾难恢复</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>❌ <strong>数据丢失</strong> - 可能丢失最后一次快照后的数据</li><li>❌ <strong>fork耗时</strong> - 数据量大时，fork子进程耗时</li><li>❌ <strong>CPU压力</strong> - 数据量大时，CPU和内存压力大</li></ul><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h3><ul><li>数据备份</li><li>灾难恢复</li><li>对数据完整性要求不高</li><li>可以容忍分钟级数据丢失</li></ul><h2 id="_2️⃣-aof持久化" tabindex="-1"><a class="header-anchor" href="#_2️⃣-aof持久化"><span>2️⃣ AOF持久化</span></a></h2><h3 id="什么是aof" tabindex="-1"><a class="header-anchor" href="#什么是aof"><span>什么是AOF？</span></a></h3><p>AOF（Append Only File）以<strong>日志</strong>形式记录每个写操作命令，Redis重启时重新执行AOF文件中的命令来恢复数据。</p><h3 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1"><span>工作原理</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">写命令 → 追加到AOF缓冲区 → 同步到AOF文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="开启aof" tabindex="-1"><a class="header-anchor" href="#开启aof"><span>开启AOF</span></a></h3><p><strong>redis.conf配置：</strong></p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 开启AOF</span>
<span class="line">appendonly yes</span>
<span class="line"></span>
<span class="line"># AOF文件名</span>
<span class="line">appendfilename &quot;appendonly.aof&quot;</span>
<span class="line"></span>
<span class="line"># AOF文件路径</span>
<span class="line">dir /var/lib/redis</span>
<span class="line"></span>
<span class="line"># 同步策略</span>
<span class="line"># always：每个写命令都同步</span>
<span class="line"># everysec：每秒同步一次（推荐）</span>
<span class="line"># no：由操作系统决定</span>
<span class="line">appendfsync everysec</span>
<span class="line"></span>
<span class="line"># AOF重写期间是否同步</span>
<span class="line">no-appendfsync-on-rewrite no</span>
<span class="line"></span>
<span class="line"># AOF文件自动重写条件</span>
<span class="line"># 文件大小超过64MB</span>
<span class="line">auto-aof-rewrite-min-size 64mb</span>
<span class="line"></span>
<span class="line"># 文件大小比上次重写后增长100%</span>
<span class="line">auto-aof-rewrite-percentage 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步策略" tabindex="-1"><a class="header-anchor" href="#同步策略"><span>同步策略</span></a></h3><table><thead><tr><th>策略</th><th>说明</th><th>性能</th><th>安全性</th></tr></thead><tbody><tr><td>always</td><td>每个命令都同步到磁盘</td><td>低</td><td>高</td></tr><tr><td>everysec</td><td>每秒同步一次（推荐）</td><td>中</td><td>中</td></tr><tr><td>no</td><td>由操作系统决定</td><td>高</td><td>低</td></tr></tbody></table><h3 id="aof文件示例" tabindex="-1"><a class="header-anchor" href="#aof文件示例"><span>AOF文件示例</span></a></h3><div class="language-aof line-numbers-mode" data-highlighter="prismjs" data-ext="aof" data-title="aof"><pre><code><span class="line">*2</span>
<span class="line">$6</span>
<span class="line">SELECT</span>
<span class="line">$1</span>
<span class="line">0</span>
<span class="line">*3</span>
<span class="line">$3</span>
<span class="line">SET</span>
<span class="line">$4</span>
<span class="line">name</span>
<span class="line">$5</span>
<span class="line">Redis</span>
<span class="line">*3</span>
<span class="line">$3</span>
<span class="line">SET</span>
<span class="line">$3</span>
<span class="line">age</span>
<span class="line">$2</span>
<span class="line">10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aof重写" tabindex="-1"><a class="header-anchor" href="#aof重写"><span>AOF重写</span></a></h3><p><strong>为什么需要重写？</strong></p><ul><li>AOF文件会越来越大</li><li>包含大量冗余命令</li></ul><p><strong>重写原理：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">原AOF：</span>
<span class="line">SET key1 value1</span>
<span class="line">SET key1 value2</span>
<span class="line">SET key1 value3</span>
<span class="line">DEL key2</span>
<span class="line">SET key2 value4</span>
<span class="line"></span>
<span class="line">重写后：</span>
<span class="line">SET key1 value3</span>
<span class="line">SET key2 value4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>触发重写：</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 手动触发</span></span>
<span class="line">BGREWRITEAOF</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自动触发（配置文件）</span></span>
<span class="line">auto-aof-rewrite-min-size 64mb</span>
<span class="line">auto-aof-rewrite-percentage <span class="token number">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span>优点</span></a></h3><ul><li>✅ <strong>数据安全</strong> - 最多丢失1秒数据（everysec）</li><li>✅ <strong>可读性强</strong> - 文本格式，易于理解和修复</li><li>✅ <strong>自动重写</strong> - 避免文件过大</li><li>✅ <strong>追加写入</strong> - 不会损坏已有数据</li></ul><h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1"><span>缺点</span></a></h3><ul><li>❌ <strong>文件大</strong> - 比RDB文件大</li><li>❌ <strong>恢复慢</strong> - 需要重新执行命令</li><li>❌ <strong>性能低</strong> - 写入性能比RDB低</li></ul><h3 id="适用场景-1" tabindex="-1"><a class="header-anchor" href="#适用场景-1"><span>适用场景</span></a></h3><ul><li>对数据安全性要求高</li><li>可以容忍一定的性能损失</li><li>需要数据完整性保证</li></ul><h2 id="_3️⃣-混合持久化" tabindex="-1"><a class="header-anchor" href="#_3️⃣-混合持久化"><span>3️⃣ 混合持久化</span></a></h2><h3 id="什么是混合持久化" tabindex="-1"><a class="header-anchor" href="#什么是混合持久化"><span>什么是混合持久化？</span></a></h3><p>Redis 4.0后引入，结合RDB和AOF的优点。</p><h3 id="工作原理-2" tabindex="-1"><a class="header-anchor" href="#工作原理-2"><span>工作原理</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AOF重写时：</span>
<span class="line">- 前半部分：RDB格式（快照数据）</span>
<span class="line">- 后半部分：AOF格式（增量命令）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启混合持久化" tabindex="-1"><a class="header-anchor" href="#开启混合持久化"><span>开启混合持久化</span></a></h3><p><strong>redis.conf配置：</strong></p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 开启混合持久化</span>
<span class="line">aof-use-rdb-preamble yes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2"><span>优点</span></a></h3><ul><li>✅ <strong>恢复快</strong> - RDB部分快速加载</li><li>✅ <strong>数据安全</strong> - AOF部分保证数据完整性</li><li>✅ <strong>文件小</strong> - 比纯AOF文件小</li></ul><h2 id="📊-持久化方案对比" tabindex="-1"><a class="header-anchor" href="#📊-持久化方案对比"><span>📊 持久化方案对比</span></a></h2><table><thead><tr><th>特性</th><th>RDB</th><th>AOF</th><th>混合</th></tr></thead><tbody><tr><td>数据完整性</td><td>❌ 低</td><td>✅ 高</td><td>✅ 高</td></tr><tr><td>文件大小</td><td>✅ 小</td><td>❌ 大</td><td>⭐ 中</td></tr><tr><td>恢复速度</td><td>✅ 快</td><td>❌ 慢</td><td>⭐ 快</td></tr><tr><td>性能影响</td><td>⭐ 中</td><td>❌ 高</td><td>⭐ 中</td></tr><tr><td>数据丢失</td><td>❌ 分钟级</td><td>✅ 秒级</td><td>✅ 秒级</td></tr></tbody></table><h2 id="🔧-实战配置" tabindex="-1"><a class="header-anchor" href="#🔧-实战配置"><span>🔧 实战配置</span></a></h2><h3 id="推荐配置-生产环境" tabindex="-1"><a class="header-anchor" href="#推荐配置-生产环境"><span>推荐配置（生产环境）</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 同时开启RDB和AOF</span>
<span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line">save 60 10000</span>
<span class="line"></span>
<span class="line">appendonly yes</span>
<span class="line">appendfsync everysec</span>
<span class="line">aof-use-rdb-preamble yes</span>
<span class="line"></span>
<span class="line"># RDB配置</span>
<span class="line">dbfilename dump.rdb</span>
<span class="line">dir /var/lib/redis</span>
<span class="line">rdbcompression yes</span>
<span class="line">rdbchecksum yes</span>
<span class="line"></span>
<span class="line"># AOF配置</span>
<span class="line">appendfilename &quot;appendonly.aof&quot;</span>
<span class="line">auto-aof-rewrite-min-size 64mb</span>
<span class="line">auto-aof-rewrite-percentage 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据恢复顺序" tabindex="-1"><a class="header-anchor" href="#数据恢复顺序"><span>数据恢复顺序</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 检查AOF文件是否存在</span>
<span class="line">   ↓ 是</span>
<span class="line">   加载AOF文件</span>
<span class="line">   </span>
<span class="line">   ↓ 否</span>
<span class="line">2. 检查RDB文件是否存在</span>
<span class="line">   ↓ 是</span>
<span class="line">   加载RDB文件</span>
<span class="line">   </span>
<span class="line">   ↓ 否</span>
<span class="line">3. 启动空数据库</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💻-持久化命令" tabindex="-1"><a class="header-anchor" href="#💻-持久化命令"><span>💻 持久化命令</span></a></h2><h3 id="查看持久化状态" tabindex="-1"><a class="header-anchor" href="#查看持久化状态"><span>查看持久化状态</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看RDB信息</span></span>
<span class="line">INFO persistence</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出示例：</span></span>
<span class="line"><span class="token comment"># rdb_changes_since_last_save:10</span></span>
<span class="line"><span class="token comment"># rdb_last_save_time:1704067200</span></span>
<span class="line"><span class="token comment"># rdb_last_bgsave_status:ok</span></span>
<span class="line"><span class="token comment"># aof_enabled:1</span></span>
<span class="line"><span class="token comment"># aof_rewrite_in_progress:0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动触发持久化" tabindex="-1"><a class="header-anchor" href="#手动触发持久化"><span>手动触发持久化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 触发RDB保存（阻塞）</span></span>
<span class="line">SAVE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后台触发RDB保存</span></span>
<span class="line">BGSAVE</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 触发AOF重写</span></span>
<span class="line">BGREWRITEAOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚠️-注意事项" tabindex="-1"><a class="header-anchor" href="#⚠️-注意事项"><span>⚠️ 注意事项</span></a></h2><h3 id="_1-rdb注意事项" tabindex="-1"><a class="header-anchor" href="#_1-rdb注意事项"><span>1. RDB注意事项</span></a></h3><ul><li>⚠️ <strong>fork子进程耗时</strong> - 数据量大时，fork耗时长</li><li>⚠️ <strong>内存占用</strong> - fork后内存使用翻倍（COW机制）</li><li>⚠️ <strong>磁盘空间</strong> - 确保有足够的磁盘空间</li></ul><h3 id="_2-aof注意事项" tabindex="-1"><a class="header-anchor" href="#_2-aof注意事项"><span>2. AOF注意事项</span></a></h3><ul><li>⚠️ <strong>磁盘IO</strong> - 频繁写入影响性能</li><li>⚠️ <strong>文件损坏</strong> - 使用redis-check-aof修复</li><li>⚠️ <strong>重写耗时</strong> - 数据量大时，重写耗时长</li></ul><h3 id="_3-混合持久化注意事项" tabindex="-1"><a class="header-anchor" href="#_3-混合持久化注意事项"><span>3. 混合持久化注意事项</span></a></h3><ul><li>⚠️ <strong>版本兼容</strong> - Redis 4.0+才支持</li><li>⚠️ <strong>工具兼容</strong> - 旧版工具可能无法读取</li></ul><h2 id="🛠️-故障恢复" tabindex="-1"><a class="header-anchor" href="#🛠️-故障恢复"><span>🛠️ 故障恢复</span></a></h2><h3 id="aof文件损坏修复" tabindex="-1"><a class="header-anchor" href="#aof文件损坏修复"><span>AOF文件损坏修复</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查AOF文件</span></span>
<span class="line">redis-check-aof appendonly.aof</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修复AOF文件</span></span>
<span class="line">redis-check-aof <span class="token parameter variable">--fix</span> appendonly.aof</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rdb文件损坏修复" tabindex="-1"><a class="header-anchor" href="#rdb文件损坏修复"><span>RDB文件损坏修复</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查RDB文件</span></span>
<span class="line">redis-check-rdb dump.rdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据恢复步骤" tabindex="-1"><a class="header-anchor" href="#数据恢复步骤"><span>数据恢复步骤</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 停止Redis</span></span>
<span class="line">redis-cli SHUTDOWN</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 备份现有文件</span></span>
<span class="line"><span class="token function">cp</span> dump.rdb dump.rdb.bak</span>
<span class="line"><span class="token function">cp</span> appendonly.aof appendonly.aof.bak</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 复制备份文件</span></span>
<span class="line"><span class="token function">cp</span> /backup/dump.rdb /var/lib/redis/</span>
<span class="line"><span class="token function">cp</span> /backup/appendonly.aof /var/lib/redis/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 启动Redis</span></span>
<span class="line">redis-server /etc/redis/redis.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 验证数据</span></span>
<span class="line">redis-cli DBSIZE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📈-性能优化" tabindex="-1"><a class="header-anchor" href="#📈-性能优化"><span>📈 性能优化</span></a></h2><h3 id="_1-rdb优化" tabindex="-1"><a class="header-anchor" href="#_1-rdb优化"><span>1. RDB优化</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 减少fork频率</span>
<span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line"></span>
<span class="line"># 关闭压缩（提高速度）</span>
<span class="line">rdbcompression no</span>
<span class="line"></span>
<span class="line"># 关闭校验（提高速度）</span>
<span class="line">rdbchecksum no</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-aof优化" tabindex="-1"><a class="header-anchor" href="#_2-aof优化"><span>2. AOF优化</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 使用everysec策略</span>
<span class="line">appendfsync everysec</span>
<span class="line"></span>
<span class="line"># 重写期间不同步</span>
<span class="line">no-appendfsync-on-rewrite yes</span>
<span class="line"></span>
<span class="line"># 增大重写阈值</span>
<span class="line">auto-aof-rewrite-min-size 128mb</span>
<span class="line">auto-aof-rewrite-percentage 200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-最佳实践" tabindex="-1"><a class="header-anchor" href="#💡-最佳实践"><span>💡 最佳实践</span></a></h2><ol><li><strong>同时开启RDB和AOF</strong> - 互相补充</li><li><strong>使用混合持久化</strong> - Redis 4.0+</li><li><strong>定期备份RDB文件</strong> - 异地备份</li><li><strong>监控磁盘空间</strong> - 避免空间不足</li><li><strong>选择合适的同步策略</strong> - 根据业务需求</li><li><strong>主从复制</strong> - 配合持久化使用</li></ol><h2 id="🎯-选择建议" tabindex="-1"><a class="header-anchor" href="#🎯-选择建议"><span>🎯 选择建议</span></a></h2><h3 id="场景1-缓存场景" tabindex="-1"><a class="header-anchor" href="#场景1-缓存场景"><span>场景1：缓存场景</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 可以容忍数据丢失</span>
<span class="line">save 900 1</span>
<span class="line">appendonly no</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="场景2-数据重要" tabindex="-1"><a class="header-anchor" href="#场景2-数据重要"><span>场景2：数据重要</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 不能容忍数据丢失</span>
<span class="line">save 900 1</span>
<span class="line">save 300 10</span>
<span class="line">appendonly yes</span>
<span class="line">appendfsync everysec</span>
<span class="line">aof-use-rdb-preamble yes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="场景3-性能优先" tabindex="-1"><a class="header-anchor" href="#场景3-性能优先"><span>场景3：性能优先</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre><code><span class="line"># 追求极致性能</span>
<span class="line">save &quot;&quot;           # 关闭RDB</span>
<span class="line">appendonly no     # 关闭AOF</span>
<span class="line"># 使用主从复制保证数据安全</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,105)),n("p",null,[s[1]||(s[1]=n("strong",null,"下一节：",-1)),s[2]||(s[2]=a()),r(e,{to:"/tutorials/java-backend/redis/04-SpringBoot%E6%95%B4%E5%90%88Redis.html"},{default:c(()=>[...s[0]||(s[0]=[a("04-Spring Boot整合Redis",-1)])]),_:1})])])}const m=l(v,[["render",o]]),b=JSON.parse('{"path":"/tutorials/java-backend/redis/03-chijiuhuajizhi.html","title":"Redis持久化机制","lang":"zh-CN","frontmatter":{"title":"Redis持久化机制"},"headers":[{"level":2,"title":"🎯 学习目标","slug":"🎯-学习目标","link":"#🎯-学习目标","children":[]},{"level":2,"title":"📖 为什么需要持久化？","slug":"📖-为什么需要持久化","link":"#📖-为什么需要持久化","children":[]},{"level":2,"title":"1️⃣ RDB持久化","slug":"_1️⃣-rdb持久化","link":"#_1️⃣-rdb持久化","children":[{"level":3,"title":"什么是RDB？","slug":"什么是rdb","link":"#什么是rdb","children":[]},{"level":3,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":3,"title":"触发方式","slug":"触发方式","link":"#触发方式","children":[]},{"level":3,"title":"RDB文件格式","slug":"rdb文件格式","link":"#rdb文件格式","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}]},{"level":2,"title":"2️⃣ AOF持久化","slug":"_2️⃣-aof持久化","link":"#_2️⃣-aof持久化","children":[{"level":3,"title":"什么是AOF？","slug":"什么是aof","link":"#什么是aof","children":[]},{"level":3,"title":"工作原理","slug":"工作原理-1","link":"#工作原理-1","children":[]},{"level":3,"title":"开启AOF","slug":"开启aof","link":"#开启aof","children":[]},{"level":3,"title":"同步策略","slug":"同步策略","link":"#同步策略","children":[]},{"level":3,"title":"AOF文件示例","slug":"aof文件示例","link":"#aof文件示例","children":[]},{"level":3,"title":"AOF重写","slug":"aof重写","link":"#aof重写","children":[]},{"level":3,"title":"优点","slug":"优点-1","link":"#优点-1","children":[]},{"level":3,"title":"缺点","slug":"缺点-1","link":"#缺点-1","children":[]},{"level":3,"title":"适用场景","slug":"适用场景-1","link":"#适用场景-1","children":[]}]},{"level":2,"title":"3️⃣ 混合持久化","slug":"_3️⃣-混合持久化","link":"#_3️⃣-混合持久化","children":[{"level":3,"title":"什么是混合持久化？","slug":"什么是混合持久化","link":"#什么是混合持久化","children":[]},{"level":3,"title":"工作原理","slug":"工作原理-2","link":"#工作原理-2","children":[]},{"level":3,"title":"开启混合持久化","slug":"开启混合持久化","link":"#开启混合持久化","children":[]},{"level":3,"title":"优点","slug":"优点-2","link":"#优点-2","children":[]}]},{"level":2,"title":"📊 持久化方案对比","slug":"📊-持久化方案对比","link":"#📊-持久化方案对比","children":[]},{"level":2,"title":"🔧 实战配置","slug":"🔧-实战配置","link":"#🔧-实战配置","children":[{"level":3,"title":"推荐配置（生产环境）","slug":"推荐配置-生产环境","link":"#推荐配置-生产环境","children":[]},{"level":3,"title":"数据恢复顺序","slug":"数据恢复顺序","link":"#数据恢复顺序","children":[]}]},{"level":2,"title":"💻 持久化命令","slug":"💻-持久化命令","link":"#💻-持久化命令","children":[{"level":3,"title":"查看持久化状态","slug":"查看持久化状态","link":"#查看持久化状态","children":[]},{"level":3,"title":"手动触发持久化","slug":"手动触发持久化","link":"#手动触发持久化","children":[]}]},{"level":2,"title":"⚠️ 注意事项","slug":"⚠️-注意事项","link":"#⚠️-注意事项","children":[{"level":3,"title":"1. RDB注意事项","slug":"_1-rdb注意事项","link":"#_1-rdb注意事项","children":[]},{"level":3,"title":"2. AOF注意事项","slug":"_2-aof注意事项","link":"#_2-aof注意事项","children":[]},{"level":3,"title":"3. 混合持久化注意事项","slug":"_3-混合持久化注意事项","link":"#_3-混合持久化注意事项","children":[]}]},{"level":2,"title":"🛠️ 故障恢复","slug":"🛠️-故障恢复","link":"#🛠️-故障恢复","children":[{"level":3,"title":"AOF文件损坏修复","slug":"aof文件损坏修复","link":"#aof文件损坏修复","children":[]},{"level":3,"title":"RDB文件损坏修复","slug":"rdb文件损坏修复","link":"#rdb文件损坏修复","children":[]},{"level":3,"title":"数据恢复步骤","slug":"数据恢复步骤","link":"#数据恢复步骤","children":[]}]},{"level":2,"title":"📈 性能优化","slug":"📈-性能优化","link":"#📈-性能优化","children":[{"level":3,"title":"1. RDB优化","slug":"_1-rdb优化","link":"#_1-rdb优化","children":[]},{"level":3,"title":"2. AOF优化","slug":"_2-aof优化","link":"#_2-aof优化","children":[]}]},{"level":2,"title":"💡 最佳实践","slug":"💡-最佳实践","link":"#💡-最佳实践","children":[]},{"level":2,"title":"🎯 选择建议","slug":"🎯-选择建议","link":"#🎯-选择建议","children":[{"level":3,"title":"场景1：缓存场景","slug":"场景1-缓存场景","link":"#场景1-缓存场景","children":[]},{"level":3,"title":"场景2：数据重要","slug":"场景2-数据重要","link":"#场景2-数据重要","children":[]},{"level":3,"title":"场景3：性能优先","slug":"场景3-性能优先","link":"#场景3-性能优先","children":[]}]}],"git":{"createdTime":1765249786000,"updatedTime":1765249786000,"contributors":[{"name":"CambridgeFoldingKnife","email":"3144253125@qq.com","commits":1}]},"filePathRelative":"tutorials/java-backend/redis/03-持久化机制.md"}');export{m as comp,b as data};
