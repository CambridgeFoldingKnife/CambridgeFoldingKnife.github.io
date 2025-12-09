import{_ as e,c as i,d as p,e as n,f as a,b as t,w as c,r as u,o}from"./app-D9dfRPMK.js";const r={};function d(v,s){const l=u("RouteLink");return o(),i("div",null,[s[3]||(s[3]=p(`<h1 id="_02-elasticsearch查询dsl" tabindex="-1"><a class="header-anchor" href="#_02-elasticsearch查询dsl"><span>02 - Elasticsearch查询DSL</span></a></h1><h2 id="🎯-学习目标" tabindex="-1"><a class="header-anchor" href="#🎯-学习目标"><span>🎯 学习目标</span></a></h2><ul><li>掌握DSL查询语法</li><li>理解全文检索和精确查询的区别</li><li>学会使用布尔组合查询</li><li>掌握聚合分析操作</li><li>学会使用高亮、分页、排序</li></ul><h2 id="📖-dsl查询语法" tabindex="-1"><a class="header-anchor" href="#📖-dsl查询语法"><span>📖 DSL查询语法</span></a></h2><p>DSL（Domain Specific Language）是Elasticsearch提供的JSON风格的查询语言。</p><h3 id="查询结构" tabindex="-1"><a class="header-anchor" href="#查询结构"><span>查询结构</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line">GET /index_name/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>      <span class="token comment">// 查询条件</span></span>
<span class="line">  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>             <span class="token comment">// 分页起始位置</span></span>
<span class="line">  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>            <span class="token comment">// 返回文档数量</span></span>
<span class="line">  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> ... <span class="token punctuation">]</span><span class="token punctuation">,</span>       <span class="token comment">// 排序</span></span>
<span class="line">  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> ... <span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 返回字段</span></span>
<span class="line">  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 高亮</span></span>
<span class="line">  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>        <span class="token comment">// 聚合</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-全文检索查询" tabindex="-1"><a class="header-anchor" href="#🔍-全文检索查询"><span>🔍 全文检索查询</span></a></h2><h3 id="_1-match查询-标准全文检索" tabindex="-1"><a class="header-anchor" href="#_1-match查询-标准全文检索"><span>1. match查询（标准全文检索）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 单字段匹配</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定操作符（AND/OR）</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;骁龙 处理器&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;operator&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;and&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 最小匹配度</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;骁龙8 Gen2 处理器&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;minimum_should_match&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;75%&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-match-phrase-短语匹配" tabindex="-1"><a class="header-anchor" href="#_2-match-phrase-短语匹配"><span>2. match_phrase（短语匹配）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 精确短语匹配</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_phrase&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;骁龙8 Gen2&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 允许词项间有间隔</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_phrase&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;骁龙 处理器&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;slop&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-multi-match-多字段匹配" tabindex="-1"><a class="header-anchor" href="#_3-multi-match-多字段匹配"><span>3. multi_match（多字段匹配）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在多个字段中搜索</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;multi_match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;iPhone&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;description&quot;</span>, <span class="token string">&quot;brand&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字段权重</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;multi_match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;手机&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name^3&quot;</span>, <span class="token string">&quot;description&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;best_fields&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-query-string-复杂查询字符串" tabindex="-1"><a class="header-anchor" href="#_4-query-string-复杂查询字符串"><span>4. query_string（复杂查询字符串）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;query_string&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(iPhone OR 小米) AND 手机&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;description&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-精确查询" tabindex="-1"><a class="header-anchor" href="#🎯-精确查询"><span>🎯 精确查询</span></a></h2><h3 id="_1-term查询-精确匹配" tabindex="-1"><a class="header-anchor" href="#_1-term查询-精确匹配"><span>1. term查询（精确匹配）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 单值匹配</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;手机&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 多值匹配（类似SQL的IN）</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;brand&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Apple&quot;</span>, <span class="token string">&quot;小米&quot;</span>, <span class="token string">&quot;华为&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-range查询-范围查询" tabindex="-1"><a class="header-anchor" href="#_2-range查询-范围查询"><span>2. range查询（范围查询）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4000</span>,</span>
<span class="line">        <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8000</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 日期范围</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;create_time&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2024-01-01&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2024-12-31&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;format&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 相对时间</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;create_time&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;now-7d/d&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;now/d&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-exists查询-字段存在" tabindex="-1"><a class="header-anchor" href="#_3-exists查询-字段存在"><span>3. exists查询（字段存在）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;exists&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;discount&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-prefix查询-前缀匹配" tabindex="-1"><a class="header-anchor" href="#_4-prefix查询-前缀匹配"><span>4. prefix查询（前缀匹配）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;iPhone&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-wildcard查询-通配符" tabindex="-1"><a class="header-anchor" href="#_5-wildcard查询-通配符"><span>5. wildcard查询（通配符）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;wildcard&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;*Pro*&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-fuzzy查询-模糊查询" tabindex="-1"><a class="header-anchor" href="#_6-fuzzy查询-模糊查询"><span>6. fuzzy查询（模糊查询）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 允许拼写错误</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;fuzzy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;iPone&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;fuzziness&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔗-布尔组合查询" tabindex="-1"><a class="header-anchor" href="#🔗-布尔组合查询"><span>🔗 布尔组合查询</span></a></h2><h3 id="bool查询" tabindex="-1"><a class="header-anchor" href="#bool查询"><span>bool查询</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;手机&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;brand&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apple&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>,</span>
<span class="line">              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10000</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Pro&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;must_not&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;on_sale&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">false</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;minimum_should_match&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>bool查询子句：</strong></p><table><thead><tr><th>子句</th><th>说明</th><th>影响评分</th></tr></thead><tbody><tr><td>must</td><td>必须匹配，AND关系</td><td>是</td></tr><tr><td>filter</td><td>必须匹配，不参与评分</td><td>否</td></tr><tr><td>should</td><td>应该匹配，OR关系</td><td>是</td></tr><tr><td>must_not</td><td>必须不匹配，NOT关系</td><td>否</td></tr></tbody></table><h2 id="📊-聚合分析" tabindex="-1"><a class="header-anchor" href="#📊-聚合分析"><span>📊 聚合分析</span></a></h2><h3 id="_1-桶聚合-bucket-aggregations" tabindex="-1"><a class="header-anchor" href="#_1-桶聚合-bucket-aggregations"><span>1. 桶聚合（Bucket Aggregations）</span></a></h3><h4 id="按分类统计" tabindex="-1"><a class="header-anchor" href="#按分类统计"><span>按分类统计</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;category_count&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;category&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="价格区间统计" tabindex="-1"><a class="header-anchor" href="#价格区间统计"><span>价格区间统计</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;price_ranges&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;ranges&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;低价&quot;</span>, <span class="token string">&quot;to&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token punctuation">{</span> <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;中价&quot;</span>, <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>, <span class="token string">&quot;to&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6000</span> <span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token punctuation">{</span> <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;高价&quot;</span>, <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6000</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日期直方图" tabindex="-1"><a class="header-anchor" href="#日期直方图"><span>日期直方图</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;sales_over_time&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;date_histogram&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;create_time&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;calendar_interval&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;month&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;format&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yyyy-MM&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-指标聚合-metric-aggregations" tabindex="-1"><a class="header-anchor" href="#_2-指标聚合-metric-aggregations"><span>2. 指标聚合（Metric Aggregations）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;avg_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;max_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;max&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;min_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;min&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;sum_sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;sum&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sales&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;stats_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;stats&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-嵌套聚合" tabindex="-1"><a class="header-anchor" href="#_3-嵌套聚合"><span>3. 嵌套聚合</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;by_category&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;category&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;avg_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token string">&quot;by_brand&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;brand&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎨-高亮显示" tabindex="-1"><a class="header-anchor" href="#🎨-高亮显示"><span>🎨 高亮显示</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;iPhone Pro&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;pre_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;em class=&#39;highlight&#39;&gt;&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">        <span class="token string">&quot;post_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;/em&gt;&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">        <span class="token string">&quot;fragment_size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">100</span>,</span>
<span class="line">        <span class="token string">&quot;number_of_fragments&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span></span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📄-分页" tabindex="-1"><a class="header-anchor" href="#📄-分页"><span>📄 分页</span></a></h2><h3 id="_1-from-size分页-浅分页" tabindex="-1"><a class="header-anchor" href="#_1-from-size分页-浅分页"><span>1. from/size分页（浅分页）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 适用于少量数据</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 限制：from + size &lt;= 10000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-scroll分页-深分页" tabindex="-1"><a class="header-anchor" href="#_2-scroll分页-深分页"><span>2. scroll分页（深分页）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 第一次请求</span></span>
<span class="line">POST /products/_search?scroll<span class="token operator">=</span>1m</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1000</span>,</span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后续请求</span></span>
<span class="line">POST /_search/scroll</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;scroll&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1m&quot;</span>,</span>
<span class="line">  <span class="token string">&quot;scroll_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAD4WYm9laVYtZndUQlNsdDcwakFMNjU1QQ==&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清除scroll</span></span>
<span class="line">DELETE /_search/scroll</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;scroll_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAD4WYm9laVYtZndUQlNsdDcwakFMNjU1QQ==&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-search-after分页-推荐" tabindex="-1"><a class="header-anchor" href="#_3-search-after分页-推荐"><span>3. search_after分页（推荐）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 第一次请求</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,</span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后续请求（使用上一次最后一条的sort值）</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,</span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;search_after&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">7999</span>, <span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔢-排序" tabindex="-1"><a class="header-anchor" href="#🔢-排序"><span>🔢 排序</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;rating&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;_score&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-指定返回字段" tabindex="-1"><a class="header-anchor" href="#🎯-指定返回字段"><span>🎯 指定返回字段</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;price&quot;</span>, <span class="token string">&quot;brand&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 排除字段</span></span>
<span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;excludes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;description&quot;</span>, <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💻-实战案例-电商搜索" tabindex="-1"><a class="header-anchor" href="#💻-实战案例-电商搜索"><span>💻 实战案例：电商搜索</span></a></h2><h3 id="综合搜索" tabindex="-1"><a class="header-anchor" href="#综合搜索"><span>综合搜索</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GET /products/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;function_score&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;multi_match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;手机&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name^3&quot;</span>, <span class="token string">&quot;description&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;best_fields&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span>,</span>
<span class="line">          <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;on_sale&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span>,</span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,</span>
<span class="line">                  <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8000</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span>,</span>
<span class="line">          <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;brand&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apple&quot;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token string">&quot;functions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token string">&quot;weight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">&quot;field_value_factor&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rating&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;factor&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1.2</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token string">&quot;score_mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sum&quot;</span>,</span>
<span class="line">      <span class="token string">&quot;boost_mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;multiply&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;_score&quot;</span>,</span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span>,</span>
<span class="line">  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,</span>
<span class="line">  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,</span>
<span class="line">  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line">  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;brand_count&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;brand&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;price_range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span>,</span>
<span class="line">        <span class="token string">&quot;ranges&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0-3000&quot;</span>, <span class="token string">&quot;to&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span><span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token punctuation">{</span><span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3000-6000&quot;</span>, <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>, <span class="token string">&quot;to&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6000</span><span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token punctuation">{</span><span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;6000+&quot;</span>, <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6000</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">&quot;avg_price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-最佳实践" tabindex="-1"><a class="header-anchor" href="#💡-最佳实践"><span>💡 最佳实践</span></a></h2><ol><li><strong>使用filter代替must</strong> - filter不计算评分，性能更好</li><li><strong>避免深分页</strong> - 使用search_after代替from/size</li><li><strong>合理使用分词器</strong> - 搜索用ik_smart，索引用ik_max_word</li><li><strong>聚合使用keyword</strong> - text字段无法聚合</li><li><strong>控制返回字段</strong> - 减少网络传输</li></ol><h2 id="🎯-小结" tabindex="-1"><a class="header-anchor" href="#🎯-小结"><span>🎯 小结</span></a></h2><p>本节学习了Elasticsearch查询DSL：</p><ul><li>✅ 全文检索查询（match、match_phrase、multi_match）</li><li>✅ 精确查询（term、range、exists）</li><li>✅ 布尔组合查询（bool）</li><li>✅ 聚合分析（桶聚合、指标聚合）</li><li>✅ 高亮、分页、排序</li></ul><hr>`,68)),n("p",null,[s[1]||(s[1]=n("strong",null,"下一节：",-1)),s[2]||(s[2]=a()),t(l,{to:"/tutorials/java-backend/elasticsearch/03-SpringBoot%E6%95%B4%E5%90%88Elasticsearch.html"},{default:c(()=>[...s[0]||(s[0]=[a("03-Spring Boot整合Elasticsearch",-1)])]),_:1})])])}const k=e(r,[["render",d]]),b=JSON.parse('{"path":"/tutorials/java-backend/elasticsearch/02-ElasticsearchchaxunDSL.html","title":"Elasticsearch查询DSL","lang":"zh-CN","frontmatter":{"title":"Elasticsearch查询DSL"},"headers":[{"level":2,"title":"🎯 学习目标","slug":"🎯-学习目标","link":"#🎯-学习目标","children":[]},{"level":2,"title":"📖 DSL查询语法","slug":"📖-dsl查询语法","link":"#📖-dsl查询语法","children":[{"level":3,"title":"查询结构","slug":"查询结构","link":"#查询结构","children":[]}]},{"level":2,"title":"🔍 全文检索查询","slug":"🔍-全文检索查询","link":"#🔍-全文检索查询","children":[{"level":3,"title":"1. match查询（标准全文检索）","slug":"_1-match查询-标准全文检索","link":"#_1-match查询-标准全文检索","children":[]},{"level":3,"title":"2. match_phrase（短语匹配）","slug":"_2-match-phrase-短语匹配","link":"#_2-match-phrase-短语匹配","children":[]},{"level":3,"title":"3. multi_match（多字段匹配）","slug":"_3-multi-match-多字段匹配","link":"#_3-multi-match-多字段匹配","children":[]},{"level":3,"title":"4. query_string（复杂查询字符串）","slug":"_4-query-string-复杂查询字符串","link":"#_4-query-string-复杂查询字符串","children":[]}]},{"level":2,"title":"🎯 精确查询","slug":"🎯-精确查询","link":"#🎯-精确查询","children":[{"level":3,"title":"1. term查询（精确匹配）","slug":"_1-term查询-精确匹配","link":"#_1-term查询-精确匹配","children":[]},{"level":3,"title":"2. range查询（范围查询）","slug":"_2-range查询-范围查询","link":"#_2-range查询-范围查询","children":[]},{"level":3,"title":"3. exists查询（字段存在）","slug":"_3-exists查询-字段存在","link":"#_3-exists查询-字段存在","children":[]},{"level":3,"title":"4. prefix查询（前缀匹配）","slug":"_4-prefix查询-前缀匹配","link":"#_4-prefix查询-前缀匹配","children":[]},{"level":3,"title":"5. wildcard查询（通配符）","slug":"_5-wildcard查询-通配符","link":"#_5-wildcard查询-通配符","children":[]},{"level":3,"title":"6. fuzzy查询（模糊查询）","slug":"_6-fuzzy查询-模糊查询","link":"#_6-fuzzy查询-模糊查询","children":[]}]},{"level":2,"title":"🔗 布尔组合查询","slug":"🔗-布尔组合查询","link":"#🔗-布尔组合查询","children":[{"level":3,"title":"bool查询","slug":"bool查询","link":"#bool查询","children":[]}]},{"level":2,"title":"📊 聚合分析","slug":"📊-聚合分析","link":"#📊-聚合分析","children":[{"level":3,"title":"1. 桶聚合（Bucket Aggregations）","slug":"_1-桶聚合-bucket-aggregations","link":"#_1-桶聚合-bucket-aggregations","children":[]},{"level":3,"title":"2. 指标聚合（Metric Aggregations）","slug":"_2-指标聚合-metric-aggregations","link":"#_2-指标聚合-metric-aggregations","children":[]},{"level":3,"title":"3. 嵌套聚合","slug":"_3-嵌套聚合","link":"#_3-嵌套聚合","children":[]}]},{"level":2,"title":"🎨 高亮显示","slug":"🎨-高亮显示","link":"#🎨-高亮显示","children":[]},{"level":2,"title":"📄 分页","slug":"📄-分页","link":"#📄-分页","children":[{"level":3,"title":"1. from/size分页（浅分页）","slug":"_1-from-size分页-浅分页","link":"#_1-from-size分页-浅分页","children":[]},{"level":3,"title":"2. scroll分页（深分页）","slug":"_2-scroll分页-深分页","link":"#_2-scroll分页-深分页","children":[]},{"level":3,"title":"3. search_after分页（推荐）","slug":"_3-search-after分页-推荐","link":"#_3-search-after分页-推荐","children":[]}]},{"level":2,"title":"🔢 排序","slug":"🔢-排序","link":"#🔢-排序","children":[]},{"level":2,"title":"🎯 指定返回字段","slug":"🎯-指定返回字段","link":"#🎯-指定返回字段","children":[]},{"level":2,"title":"💻 实战案例：电商搜索","slug":"💻-实战案例-电商搜索","link":"#💻-实战案例-电商搜索","children":[{"level":3,"title":"综合搜索","slug":"综合搜索","link":"#综合搜索","children":[]}]},{"level":2,"title":"💡 最佳实践","slug":"💡-最佳实践","link":"#💡-最佳实践","children":[]},{"level":2,"title":"🎯 小结","slug":"🎯-小结","link":"#🎯-小结","children":[]}],"git":{"createdTime":1765249786000,"updatedTime":1765249786000,"contributors":[{"name":"CambridgeFoldingKnife","email":"3144253125@qq.com","commits":1}]},"filePathRelative":"tutorials/java-backend/elasticsearch/02-Elasticsearch查询DSL.md"}');export{k as comp,b as data};
