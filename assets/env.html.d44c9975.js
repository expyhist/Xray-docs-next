import{r as e,o as a,c as r,b as i,a as d,F as n,e as l,d as o}from"./app.97b49cde.js";const s={},t=d("h1",{id:"环境变量",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#环境变量","aria-hidden":"true"},"#"),l(" 环境变量")],-1),c=d("p",null,"Xray 提供以下环境变量以供修改 Xray 的一些底层配置。",-1),u=d("h2",{id:"xtls-信息显示",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#xtls-信息显示","aria-hidden":"true"},"#"),l(" XTLS 信息显示")],-1),h=o('<h3 id="vless" tabindex="-1"><a class="header-anchor" href="#vless" aria-hidden="true">#</a> VLESS</h3><ul><li>名称：<code>xray.vless.xtls.show</code> 或 <code>XRAY_VLESS_XTLS_SHOW</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>使用 VLESS 协议时,设置此环境变量为 true 时, 会在终端或日志中输出 XTLS 的相关信息.</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>可打开此环境变量并根据是否有输出 XTLS 相关信息, 来确定 XTLS 是否成功被应用.</p></div><h3 id="trojan" tabindex="-1"><a class="header-anchor" href="#trojan" aria-hidden="true">#</a> TROJAN</h3><ul><li>名称：<code>xray.trojan.xtls.show</code> 或 <code>XRAY_TROJAN_XTLS_SHOW</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>使用 trojan 协议时, 设置此环境变量为 true 时, 会在终端或日志中输出 XTLS 的相关信息.</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>可打开此环境变量并根据是否有输出 XTLS 相关信息, 来确定 XTLS 是否成功被应用.</p></div><h2 id="资源文件路径" tabindex="-1"><a class="header-anchor" href="#资源文件路径" aria-hidden="true">#</a> 资源文件路径</h2>',9),p=d("li",null,[l("名称："),d("code",null,"xray.location.asset"),l(" 或 "),d("code",null,"XRAY_LOCATION_ASSET"),l("。")],-1),x=l("默认值：特定 "),S={href:"https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard",target:"_blank",rel:"noopener noreferrer"},b=l("FHS"),X=l(" 目录或 Xray 文件同路径。"),L=o('<p>这个环境变量指定了一个文件夹位置，这个文件夹应当包含 geoip.dat 和 geosite.dat 文件。 若无指定变量值，程序将会按以下顺序寻找资源文件：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./\n/usr/local/share/xray\n/usr/share/xray\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配置文件位置" tabindex="-1"><a class="header-anchor" href="#配置文件位置" aria-hidden="true">#</a> 配置文件位置</h2><ul><li>名称：<code>xray.location.config</code> 或 <code>XRAY_LOCATION_CONFIG</code>。</li><li>默认值：和 Xray 文件同路径。</li></ul><p>这个环境变量指定了一个文件夹位置，这个文件夹应当包含 config.json 文件。</p><h2 id="多配置目录" tabindex="-1"><a class="header-anchor" href="#多配置目录" aria-hidden="true">#</a> 多配置目录</h2><ul><li>名称：<code>xray.location.confdir</code> 或 <code>XRAY_LOCATION_CONFDIR</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>这个目录内的 <code>.json</code> 文件会按文件名顺序读取，作为多配置选项。</p>',8);s.render=function(l,o){const s=e("Badge"),f=e("OutboundLink");return a(),r(n,null,[t,c,u,i(s,{text:"Deprecated",type:"warning"}),h,d("ul",null,[p,d("li",null,[x,d("a",S,[b,i(f)]),X])]),L],64)};export default s;
