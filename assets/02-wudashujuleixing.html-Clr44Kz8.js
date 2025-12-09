import{_ as l,c as i,d as p,e as n,f as a,b as c,w as t,r as d,o as r}from"./app-DyGs7pMe.js";const u={};function o(m,s){const e=d("RouteLink");return r(),i("div",null,[s[3]||(s[3]=p(`<h1 id="_02-redis五大数据类型" tabindex="-1"><a class="header-anchor" href="#_02-redis五大数据类型"><span>02 - Redis五大数据类型</span></a></h1><h2 id="🎯-学习目标" tabindex="-1"><a class="header-anchor" href="#🎯-学习目标"><span>🎯 学习目标</span></a></h2><ul><li>深入理解Redis五大基本数据类型</li><li>掌握每种类型的常用命令</li><li>了解各数据类型的应用场景</li><li>理解底层数据结构</li></ul><h2 id="📊-数据类型概览" tabindex="-1"><a class="header-anchor" href="#📊-数据类型概览"><span>📊 数据类型概览</span></a></h2><table><thead><tr><th>类型</th><th>说明</th><th>典型应用</th></tr></thead><tbody><tr><td>String</td><td>字符串</td><td>缓存、计数器、分布式锁</td></tr><tr><td>List</td><td>列表</td><td>消息队列、文章列表、评论列表</td></tr><tr><td>Set</td><td>集合</td><td>标签、好友关系、抽奖</td></tr><tr><td>Hash</td><td>哈希表</td><td>对象存储、购物车</td></tr><tr><td>Zset</td><td>有序集合</td><td>排行榜、延时队列</td></tr></tbody></table><h2 id="_1️⃣-string-字符串" tabindex="-1"><a class="header-anchor" href="#_1️⃣-string-字符串"><span>1️⃣ String（字符串）</span></a></h2><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ul><li>最基本的数据类型</li><li>二进制安全，可以存储任何数据</li><li>单个value最大512MB</li></ul><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><h4 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 设置值</span></span>
<span class="line">SET key value <span class="token punctuation">[</span>EX seconds<span class="token punctuation">]</span> <span class="token punctuation">[</span>PX milliseconds<span class="token punctuation">]</span> <span class="token punctuation">[</span>NX<span class="token operator">|</span>XX<span class="token punctuation">]</span></span>
<span class="line">SET name <span class="token string">&quot;Redis&quot;</span></span>
<span class="line">SET session:abc123 <span class="token string">&quot;user_data&quot;</span> EX <span class="token number">3600</span>  <span class="token comment"># 设置过期时间</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取值</span></span>
<span class="line">GET key</span>
<span class="line">GET name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置并返回旧值</span></span>
<span class="line">GETSET key value</span>
<span class="line">GETSET name <span class="token string">&quot;New Redis&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仅当key不存在时设置</span></span>
<span class="line">SETNX key value</span>
<span class="line">SETNX lock <span class="token string">&quot;1&quot;</span>  <span class="token comment"># 分布式锁</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量设置</span></span>
<span class="line">MSET key1 value1 key2 value2</span>
<span class="line">MSET user:1:name <span class="token string">&quot;John&quot;</span> user:1:age <span class="token string">&quot;30&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量获取</span></span>
<span class="line">MGET key1 key2</span>
<span class="line">MGET user:1:name user:1:age</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除</span></span>
<span class="line">DEL key</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数值操作" tabindex="-1"><a class="header-anchor" href="#数值操作"><span>数值操作</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化计数器</span></span>
<span class="line">SET counter <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自增1</span></span>
<span class="line">INCR counter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自减1</span></span>
<span class="line">DECR counter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加指定值</span></span>
<span class="line">INCRBY counter <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 减少指定值</span></span>
<span class="line">DECRBY counter <span class="token number">5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 浮点数增加</span></span>
<span class="line">INCRBYFLOAT price <span class="token number">0.5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作"><span>字符串操作</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 追加字符串</span></span>
<span class="line">APPEND key value</span>
<span class="line">APPEND message <span class="token string">&quot; World&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取字符串长度</span></span>
<span class="line">STRLEN key</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取子字符串</span></span>
<span class="line">GETRANGE key start end</span>
<span class="line">GETRANGE message <span class="token number">0</span> <span class="token number">4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置子字符串</span></span>
<span class="line">SETRANGE key offset value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置过期时间</span></span>
<span class="line">EXPIRE key seconds</span>
<span class="line">EXPIRE session:abc <span class="token number">3600</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看剩余时间</span></span>
<span class="line">TTL key</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><h4 id="_1-缓存对象" tabindex="-1"><a class="header-anchor" href="#_1-缓存对象"><span>1. 缓存对象</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 缓存用户信息（JSON字符串）</span></span>
<span class="line">SET user:1001 <span class="token string">&#39;{&quot;id&quot;:1001,&quot;name&quot;:&quot;John&quot;,&quot;email&quot;:&quot;john@example.com&quot;}&#39;</span> EX <span class="token number">1800</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取用户信息</span></span>
<span class="line">GET user:1001</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-计数器" tabindex="-1"><a class="header-anchor" href="#_2-计数器"><span>2. 计数器</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 文章阅读量</span></span>
<span class="line">INCR article:100:views</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点赞数</span></span>
<span class="line">INCR post:200:likes</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取统计</span></span>
<span class="line">GET article:100:views</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-分布式锁" tabindex="-1"><a class="header-anchor" href="#_3-分布式锁"><span>3. 分布式锁</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 获取锁（30秒过期）</span></span>
<span class="line">SET lock:order:1001 <span class="token string">&quot;uuid123&quot;</span> EX <span class="token number">30</span> NX</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 释放锁</span></span>
<span class="line">DEL lock:order:1001</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-限流" tabindex="-1"><a class="header-anchor" href="#_4-限流"><span>4. 限流</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 用户每分钟最多10次请求</span></span>
<span class="line">SET rate:user:1001 <span class="token number">1</span> EX <span class="token number">60</span></span>
<span class="line">INCR rate:user:1001</span>
<span class="line">GET rate:user:1001  <span class="token comment"># 检查是否超过10</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2️⃣-list-列表" tabindex="-1"><a class="header-anchor" href="#_2️⃣-list-列表"><span>2️⃣ List（列表）</span></a></h2><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h3><ul><li>有序的字符串列表</li><li>底层是双向链表</li><li>支持头部和尾部操作</li><li>最多2^32-1个元素</li></ul><h3 id="常用命令-1" tabindex="-1"><a class="header-anchor" href="#常用命令-1"><span>常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 左侧插入（头部）</span></span>
<span class="line">LPUSH list value1 <span class="token punctuation">[</span>value2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">LPUSH tasks <span class="token string">&quot;task1&quot;</span> <span class="token string">&quot;task2&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 右侧插入（尾部）</span></span>
<span class="line">RPUSH list value1 <span class="token punctuation">[</span>value2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">RPUSH logs <span class="token string">&quot;log1&quot;</span> <span class="token string">&quot;log2&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 左侧弹出</span></span>
<span class="line">LPOP list</span>
<span class="line">LPOP tasks</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 右侧弹出</span></span>
<span class="line">RPOP list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 阻塞式弹出（队列为空时等待）</span></span>
<span class="line">BLPOP list <span class="token function">timeout</span></span>
<span class="line">BLPOP tasks <span class="token number">0</span>  <span class="token comment"># 一直等待</span></span>
<span class="line"></span>
<span class="line">BRPOP list <span class="token function">timeout</span></span>
<span class="line">BRPOP tasks <span class="token number">10</span>  <span class="token comment"># 等待10秒</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取列表长度</span></span>
<span class="line">LLEN list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取指定范围元素</span></span>
<span class="line">LRANGE list start stop</span>
<span class="line">LRANGE logs <span class="token number">0</span> <span class="token parameter variable">-1</span>    <span class="token comment"># 获取所有</span></span>
<span class="line">LRANGE logs <span class="token number">0</span> <span class="token number">9</span>     <span class="token comment"># 获取前10条</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取指定索引元素</span></span>
<span class="line">LINDEX list index</span>
<span class="line">LINDEX logs <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置指定索引元素</span></span>
<span class="line">LSET list index value</span>
<span class="line">LSET logs <span class="token number">0</span> <span class="token string">&quot;new log&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除元素</span></span>
<span class="line">LREM list count value</span>
<span class="line">LREM logs <span class="token number">2</span> <span class="token string">&quot;error&quot;</span>  <span class="token comment"># 删除2个&quot;error&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保留指定范围</span></span>
<span class="line">LTRIM list start stop</span>
<span class="line">LTRIM logs <span class="token number">0</span> <span class="token number">99</span>  <span class="token comment"># 只保留前100条</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1"><span>应用场景</span></a></h3><h4 id="_1-消息队列" tabindex="-1"><a class="header-anchor" href="#_1-消息队列"><span>1. 消息队列</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生产者：推送任务</span></span>
<span class="line">LPUSH queue:email <span class="token string">&quot;send email to user1&quot;</span></span>
<span class="line">LPUSH queue:email <span class="token string">&quot;send email to user2&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 消费者：处理任务</span></span>
<span class="line">BRPOP queue:email <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-最新文章列表" tabindex="-1"><a class="header-anchor" href="#_2-最新文章列表"><span>2. 最新文章列表</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加最新文章</span></span>
<span class="line">LPUSH articles:latest <span class="token string">&quot;article:1001&quot;</span></span>
<span class="line">LPUSH articles:latest <span class="token string">&quot;article:1002&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保留最新100篇</span></span>
<span class="line">LTRIM articles:latest <span class="token number">0</span> <span class="token number">99</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取最新10篇</span></span>
<span class="line">LRANGE articles:latest <span class="token number">0</span> <span class="token number">9</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-评论列表" tabindex="-1"><a class="header-anchor" href="#_3-评论列表"><span>3. 评论列表</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加评论</span></span>
<span class="line">RPUSH comments:article:100 <span class="token string">&quot;Great article!&quot;</span></span>
<span class="line">RPUSH comments:article:100 <span class="token string">&quot;Thanks for sharing!&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有评论</span></span>
<span class="line">LRANGE comments:article:100 <span class="token number">0</span> <span class="token parameter variable">-1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 分页获取（每页10条）</span></span>
<span class="line">LRANGE comments:article:100 <span class="token number">0</span> <span class="token number">9</span>    <span class="token comment"># 第1页</span></span>
<span class="line">LRANGE comments:article:100 <span class="token number">10</span> <span class="token number">19</span>  <span class="token comment"># 第2页</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3️⃣-set-集合" tabindex="-1"><a class="header-anchor" href="#_3️⃣-set-集合"><span>3️⃣ Set（集合）</span></a></h2><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2"><span>特点</span></a></h3><ul><li>无序的字符串集合</li><li>元素唯一，自动去重</li><li>支持集合运算（交集、并集、差集）</li><li>最多2^32-1个元素</li></ul><h3 id="常用命令-2" tabindex="-1"><a class="header-anchor" href="#常用命令-2"><span>常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加元素</span></span>
<span class="line">SADD <span class="token builtin class-name">set</span> member1 <span class="token punctuation">[</span>member2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">SADD tags <span class="token string">&quot;redis&quot;</span> <span class="token string">&quot;database&quot;</span> <span class="token string">&quot;cache&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除元素</span></span>
<span class="line">SREM <span class="token builtin class-name">set</span> member1 <span class="token punctuation">[</span>member2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">SREM tags <span class="token string">&quot;cache&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有元素</span></span>
<span class="line">SMEMBERS <span class="token builtin class-name">set</span></span>
<span class="line">SMEMBERS tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断元素是否存在</span></span>
<span class="line">SISMEMBER <span class="token builtin class-name">set</span> member</span>
<span class="line">SISMEMBER tags <span class="token string">&quot;redis&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取集合大小</span></span>
<span class="line">SCARD <span class="token builtin class-name">set</span></span>
<span class="line">SCARD tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 随机获取元素</span></span>
<span class="line">SRANDMEMBER <span class="token builtin class-name">set</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span></span>
<span class="line">SRANDMEMBER tags <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 随机弹出元素</span></span>
<span class="line">SPOP <span class="token builtin class-name">set</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span></span>
<span class="line">SPOP tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动元素到另一个集合</span></span>
<span class="line">SMOVE <span class="token builtin class-name">source</span> dest member</span>
<span class="line">SMOVE tags1 tags2 <span class="token string">&quot;redis&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 集合运算</span></span>
<span class="line"><span class="token comment"># 交集</span></span>
<span class="line">SINTER set1 set2</span>
<span class="line">SINTER user:1:tags user:2:tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 并集</span></span>
<span class="line">SUNION set1 set2</span>
<span class="line">SUNION user:1:friends user:2:friends</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 差集</span></span>
<span class="line">SDIFF set1 set2</span>
<span class="line">SDIFF user:1:tags user:2:tags</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-2" tabindex="-1"><a class="header-anchor" href="#应用场景-2"><span>应用场景</span></a></h3><h4 id="_1-标签系统" tabindex="-1"><a class="header-anchor" href="#_1-标签系统"><span>1. 标签系统</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 文章标签</span></span>
<span class="line">SADD article:100:tags <span class="token string">&quot;Java&quot;</span> <span class="token string">&quot;Spring&quot;</span> <span class="token string">&quot;Redis&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询文章标签</span></span>
<span class="line">SMEMBERS article:100:tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找同时有Java和Redis标签的文章</span></span>
<span class="line">SINTER article:100:tags article:101:tags</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-好友关系" tabindex="-1"><a class="header-anchor" href="#_2-好友关系"><span>2. 好友关系</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 用户的好友</span></span>
<span class="line">SADD user:1001:friends <span class="token string">&quot;2001&quot;</span> <span class="token string">&quot;2002&quot;</span> <span class="token string">&quot;2003&quot;</span></span>
<span class="line">SADD user:1002:friends <span class="token string">&quot;2001&quot;</span> <span class="token string">&quot;2003&quot;</span> <span class="token string">&quot;2004&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 共同好友</span></span>
<span class="line">SINTER user:1001:friends user:1002:friends</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 可能认识的人（朋友的朋友）</span></span>
<span class="line">SDIFF user:1002:friends user:1001:friends</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-抽奖系统" tabindex="-1"><a class="header-anchor" href="#_3-抽奖系统"><span>3. 抽奖系统</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加参与用户</span></span>
<span class="line">SADD lottery:2024 <span class="token string">&quot;user1001&quot;</span> <span class="token string">&quot;user1002&quot;</span> <span class="token string">&quot;user1003&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 随机抽取1名中奖者</span></span>
<span class="line">SPOP lottery:2024 <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 随机抽取3名（不删除）</span></span>
<span class="line">SRANDMEMBER lottery:2024 <span class="token number">3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-去重" tabindex="-1"><a class="header-anchor" href="#_4-去重"><span>4. 去重</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 记录今日访问用户（自动去重）</span></span>
<span class="line">SADD visit:2024-01-01 <span class="token string">&quot;user1001&quot;</span></span>
<span class="line">SADD visit:2024-01-01 <span class="token string">&quot;user1002&quot;</span></span>
<span class="line">SADD visit:2024-01-01 <span class="token string">&quot;user1001&quot;</span>  <span class="token comment"># 重复添加无效</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取今日UV</span></span>
<span class="line">SCARD visit:2024-01-01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4️⃣-hash-哈希" tabindex="-1"><a class="header-anchor" href="#_4️⃣-hash-哈希"><span>4️⃣ Hash（哈希）</span></a></h2><h3 id="特点-3" tabindex="-1"><a class="header-anchor" href="#特点-3"><span>特点</span></a></h3><ul><li>键值对集合</li><li>适合存储对象</li><li>每个Hash可存储2^32-1个键值对</li></ul><h3 id="常用命令-3" tabindex="-1"><a class="header-anchor" href="#常用命令-3"><span>常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 设置单个字段</span></span>
<span class="line">HSET <span class="token builtin class-name">hash</span> field value</span>
<span class="line">HSET user:1001 name <span class="token string">&quot;John&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置多个字段</span></span>
<span class="line">HMSET <span class="token builtin class-name">hash</span> field1 value1 field2 value2</span>
<span class="line">HMSET user:1001 name <span class="token string">&quot;John&quot;</span> age <span class="token string">&quot;30&quot;</span> email <span class="token string">&quot;john@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取单个字段</span></span>
<span class="line">HGET <span class="token builtin class-name">hash</span> field</span>
<span class="line">HGET user:1001 name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取多个字段</span></span>
<span class="line">HMGET <span class="token builtin class-name">hash</span> field1 field2</span>
<span class="line">HMGET user:1001 name age</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有字段和值</span></span>
<span class="line">HGETALL <span class="token builtin class-name">hash</span></span>
<span class="line">HGETALL user:1001</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有字段名</span></span>
<span class="line">HKEYS <span class="token builtin class-name">hash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有值</span></span>
<span class="line">HVALS <span class="token builtin class-name">hash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断字段是否存在</span></span>
<span class="line">HEXISTS <span class="token builtin class-name">hash</span> field</span>
<span class="line">HEXISTS user:1001 email</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除字段</span></span>
<span class="line">HDEL <span class="token builtin class-name">hash</span> field1 <span class="token punctuation">[</span>field2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">HDEL user:1001 email</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取字段数量</span></span>
<span class="line">HLEN <span class="token builtin class-name">hash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字段值增加</span></span>
<span class="line">HINCRBY <span class="token builtin class-name">hash</span> field increment</span>
<span class="line">HINCRBY user:1001 age <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仅当字段不存在时设置</span></span>
<span class="line">HSETNX <span class="token builtin class-name">hash</span> field value</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-3" tabindex="-1"><a class="header-anchor" href="#应用场景-3"><span>应用场景</span></a></h3><h4 id="_1-存储对象" tabindex="-1"><a class="header-anchor" href="#_1-存储对象"><span>1. 存储对象</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 存储用户信息</span></span>
<span class="line">HMSET user:1001 <span class="token punctuation">\\</span></span>
<span class="line">  name <span class="token string">&quot;John Doe&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  age <span class="token string">&quot;30&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  email <span class="token string">&quot;john@example.com&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  phone <span class="token string">&quot;1234567890&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取用户信息</span></span>
<span class="line">HGETALL user:1001</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新年龄</span></span>
<span class="line">HINCRBY user:1001 age <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-购物车" tabindex="-1"><a class="header-anchor" href="#_2-购物车"><span>2. 购物车</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加商品到购物车</span></span>
<span class="line">HSET cart:user:1001 product:2001 <span class="token string">&quot;2&quot;</span>  <span class="token comment"># 商品ID:数量</span></span>
<span class="line">HSET cart:user:1001 product:2002 <span class="token string">&quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改商品数量</span></span>
<span class="line">HINCRBY cart:user:1001 product:2001 <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除商品</span></span>
<span class="line">HDEL cart:user:1001 product:2002</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取购物车所有商品</span></span>
<span class="line">HGETALL cart:user:1001</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 商品数量</span></span>
<span class="line">HLEN cart:user:1001</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-文章详情" tabindex="-1"><a class="header-anchor" href="#_3-文章详情"><span>3. 文章详情</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 存储文章信息</span></span>
<span class="line">HMSET article:100 <span class="token punctuation">\\</span></span>
<span class="line">  title <span class="token string">&quot;Redis Tutorial&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  author <span class="token string">&quot;John&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  views <span class="token string">&quot;1000&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  likes <span class="token string">&quot;50&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加阅读量</span></span>
<span class="line">HINCRBY article:100 views <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加点赞数</span></span>
<span class="line">HINCRBY article:100 likes <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5️⃣-zset-有序集合" tabindex="-1"><a class="header-anchor" href="#_5️⃣-zset-有序集合"><span>5️⃣ Zset（有序集合）</span></a></h2><h3 id="特点-4" tabindex="-1"><a class="header-anchor" href="#特点-4"><span>特点</span></a></h3><ul><li>有序的字符串集合</li><li>每个元素关联一个分数（score）</li><li>按分数排序</li><li>元素唯一，分数可重复</li></ul><h3 id="常用命令-4" tabindex="-1"><a class="header-anchor" href="#常用命令-4"><span>常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加元素</span></span>
<span class="line">ZADD zset score member <span class="token punctuation">[</span>score member <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">ZADD leaderboard <span class="token number">100</span> <span class="token string">&quot;player1&quot;</span> <span class="token number">95</span> <span class="token string">&quot;player2&quot;</span> <span class="token number">90</span> <span class="token string">&quot;player3&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取元素分数</span></span>
<span class="line">ZSCORE zset member</span>
<span class="line">ZSCORE leaderboard <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加分数</span></span>
<span class="line">ZINCRBY zset increment member</span>
<span class="line">ZINCRBY leaderboard <span class="token number">10</span> <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取排名（从小到大）</span></span>
<span class="line">ZRANK zset member</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取排名（从大到小）</span></span>
<span class="line">ZREVRANK zset member</span>
<span class="line">ZREVRANK leaderboard <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取指定范围元素（按索引）</span></span>
<span class="line">ZRANGE zset start stop <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span></span>
<span class="line">ZRANGE leaderboard <span class="token number">0</span> <span class="token parameter variable">-1</span> WITHSCORES</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 倒序获取</span></span>
<span class="line">ZREVRANGE zset start stop <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span></span>
<span class="line">ZREVRANGE leaderboard <span class="token number">0</span> <span class="token number">9</span> WITHSCORES  <span class="token comment"># 前10名</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按分数范围获取</span></span>
<span class="line">ZRANGEBYSCORE zset min max <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span></span>
<span class="line">ZRANGEBYSCORE leaderboard <span class="token number">90</span> <span class="token number">100</span> WITHSCORES</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取元素数量</span></span>
<span class="line">ZCARD zset</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除元素</span></span>
<span class="line">ZREM zset member1 <span class="token punctuation">[</span>member2 <span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">ZREM leaderboard <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按排名删除</span></span>
<span class="line">ZREMRANGEBYRANK zset start stop</span>
<span class="line">ZREMRANGEBYRANK leaderboard <span class="token number">10</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 删除10名以后</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按分数删除</span></span>
<span class="line">ZREMRANGEBYSCORE zset min max</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-4" tabindex="-1"><a class="header-anchor" href="#应用场景-4"><span>应用场景</span></a></h3><h4 id="_1-排行榜" tabindex="-1"><a class="header-anchor" href="#_1-排行榜"><span>1. 排行榜</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 游戏排行榜</span></span>
<span class="line">ZADD game:rank <span class="token number">1000</span> <span class="token string">&quot;player1&quot;</span></span>
<span class="line">ZADD game:rank <span class="token number">950</span> <span class="token string">&quot;player2&quot;</span></span>
<span class="line">ZADD game:rank <span class="token number">900</span> <span class="token string">&quot;player3&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 增加玩家分数</span></span>
<span class="line">ZINCRBY game:rank <span class="token number">50</span> <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取前10名</span></span>
<span class="line">ZREVRANGE game:rank <span class="token number">0</span> <span class="token number">9</span> WITHSCORES</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取某玩家排名</span></span>
<span class="line">ZREVRANK game:rank <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取玩家分数</span></span>
<span class="line">ZSCORE game:rank <span class="token string">&quot;player1&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-延时队列" tabindex="-1"><a class="header-anchor" href="#_2-延时队列"><span>2. 延时队列</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加延时任务（分数为时间戳）</span></span>
<span class="line">ZADD delay:queue <span class="token number">1704067200</span> <span class="token string">&quot;task1&quot;</span>  <span class="token comment"># 2024-01-01 00:00:00</span></span>
<span class="line">ZADD delay:queue <span class="token number">1704153600</span> <span class="token string">&quot;task2&quot;</span>  <span class="token comment"># 2024-01-02 00:00:00</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取到期任务</span></span>
<span class="line">ZRANGEBYSCORE delay:queue <span class="token number">0</span> <span class="token number">1704067200</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除已处理任务</span></span>
<span class="line">ZREM delay:queue <span class="token string">&quot;task1&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-热搜榜" tabindex="-1"><a class="header-anchor" href="#_3-热搜榜"><span>3. 热搜榜</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加搜索词（分数为搜索次数）</span></span>
<span class="line">ZADD hotsearch <span class="token number">1000</span> <span class="token string">&quot;Redis&quot;</span></span>
<span class="line">ZADD hotsearch <span class="token number">800</span> <span class="token string">&quot;MySQL&quot;</span></span>
<span class="line">ZADD hotsearch <span class="token number">600</span> <span class="token string">&quot;MongoDB&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索时增加计数</span></span>
<span class="line">ZINCRBY hotsearch <span class="token number">1</span> <span class="token string">&quot;Redis&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取热搜前10</span></span>
<span class="line">ZREVRANGE hotsearch <span class="token number">0</span> <span class="token number">9</span> WITHSCORES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-时间线" tabindex="-1"><a class="header-anchor" href="#_4-时间线"><span>4. 时间线</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加动态（分数为时间戳）</span></span>
<span class="line">ZADD timeline:user:1001 <span class="token number">1704067200</span> <span class="token string">&quot;post:100&quot;</span></span>
<span class="line">ZADD timeline:user:1001 <span class="token number">1704153600</span> <span class="token string">&quot;post:101&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取最新动态</span></span>
<span class="line">ZREVRANGE timeline:user:1001 <span class="token number">0</span> <span class="token number">9</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📚-底层数据结构" tabindex="-1"><a class="header-anchor" href="#📚-底层数据结构"><span>📚 底层数据结构</span></a></h2><table><thead><tr><th>数据类型</th><th>底层实现</th></tr></thead><tbody><tr><td>String</td><td>SDS（简单动态字符串）</td></tr><tr><td>List</td><td>QuickList（快速列表）</td></tr><tr><td>Set</td><td>IntSet 或 HashTable</td></tr><tr><td>Hash</td><td>ZipList 或 HashTable</td></tr><tr><td>Zset</td><td>ZipList 或 SkipList + HashTable</td></tr></tbody></table><h2 id="💡-最佳实践" tabindex="-1"><a class="header-anchor" href="#💡-最佳实践"><span>💡 最佳实践</span></a></h2><ol><li><strong>选择合适的数据类型</strong> - 根据业务场景选择</li><li><strong>合理设置过期时间</strong> - 避免内存溢出</li><li><strong>避免大key</strong> - 单个key不要超过10KB</li><li><strong>使用Pipeline</strong> - 批量操作提高性能</li><li><strong>使用Hash存储对象</strong> - 节省内存</li></ol><hr>`,81)),n("p",null,[s[1]||(s[1]=n("strong",null,"下一节：",-1)),s[2]||(s[2]=a()),c(e,{to:"/tutorials/database/redis/03-%E6%8C%81%E4%B9%85%E5%8C%96%E6%9C%BA%E5%88%B6.html"},{default:t(()=>[...s[0]||(s[0]=[a("03-持久化机制",-1)])]),_:1})])])}const b=l(u,[["render",o]]),h=JSON.parse('{"path":"/tutorials/database/redis/02-wudashujuleixing.html","title":"Redis五大数据类型","lang":"zh-CN","frontmatter":{"title":"Redis五大数据类型"},"headers":[{"level":2,"title":"🎯 学习目标","slug":"🎯-学习目标","link":"#🎯-学习目标","children":[]},{"level":2,"title":"📊 数据类型概览","slug":"📊-数据类型概览","link":"#📊-数据类型概览","children":[]},{"level":2,"title":"1️⃣ String（字符串）","slug":"_1️⃣-string-字符串","link":"#_1️⃣-string-字符串","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"2️⃣ List（列表）","slug":"_2️⃣-list-列表","link":"#_2️⃣-list-列表","children":[{"level":3,"title":"特点","slug":"特点-1","link":"#特点-1","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-1","link":"#常用命令-1","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-1","link":"#应用场景-1","children":[]}]},{"level":2,"title":"3️⃣ Set（集合）","slug":"_3️⃣-set-集合","link":"#_3️⃣-set-集合","children":[{"level":3,"title":"特点","slug":"特点-2","link":"#特点-2","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-2","link":"#常用命令-2","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-2","link":"#应用场景-2","children":[]}]},{"level":2,"title":"4️⃣ Hash（哈希）","slug":"_4️⃣-hash-哈希","link":"#_4️⃣-hash-哈希","children":[{"level":3,"title":"特点","slug":"特点-3","link":"#特点-3","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-3","link":"#常用命令-3","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-3","link":"#应用场景-3","children":[]}]},{"level":2,"title":"5️⃣ Zset（有序集合）","slug":"_5️⃣-zset-有序集合","link":"#_5️⃣-zset-有序集合","children":[{"level":3,"title":"特点","slug":"特点-4","link":"#特点-4","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-4","link":"#常用命令-4","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-4","link":"#应用场景-4","children":[]}]},{"level":2,"title":"📚 底层数据结构","slug":"📚-底层数据结构","link":"#📚-底层数据结构","children":[]},{"level":2,"title":"💡 最佳实践","slug":"💡-最佳实践","link":"#💡-最佳实践","children":[]}],"git":{"createdTime":1765249786000,"updatedTime":1765251648000,"contributors":[{"name":"CambridgeFoldingKnife","email":"3144253125@qq.com","commits":1}]},"filePathRelative":"tutorials/database/redis/02-五大数据类型.md"}');export{b as comp,h as data};
