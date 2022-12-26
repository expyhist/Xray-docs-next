import{r as n,o as s,c as a,b as l,a as e,w as t,F as o,e as r}from"./app.97b49cde.js";const c={},p=e("h1",{id:"路由-routing-功能简析-上",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#路由-routing-功能简析-上","aria-hidden":"true"},"#"),r(" 路由 (routing) 功能简析（上）")],-1),u=e("p",null,"如果说 Xray 的【强大】主要体现在它极致的速度和广泛的兼容性。那么 Xray 的【灵活】，则主要应该归功于它巧妙的【路由】功能。本文就稍微说明一下这个功能的逻辑以及使用方式。",-1),i=e("h2",{id:"_1-初识【路由】三兄弟",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-初识【路由】三兄弟","aria-hidden":"true"},"#"),r(" 1. 初识【路由】三兄弟")],-1),d=e("p",null,[r("要理解路由，就要理解完整的路由功能需要有三兄弟来合力完成：1. "),e("strong",null,"入站"),r("；2. "),e("strong",null,"路由"),r("；3. "),e("strong",null,"出站"),r("。")],-1),b=e("p",null,[e("img",{src:"/Xray-docs-next/assets/routing-lv1-img01-trio.bfd35866.png",alt:"路由三兄弟"})],-1),k=e("p",null,"三兄弟桃园结义，不求同年同月同日生，但求同年同月同日死。",-1),g=e("p",null,"所以谨记：任何一个元素错误，就可能导致路由功能无法正常工作。",-1),m=e("p",null,"因为路由的灵活性非常高，只看技术文档很容易把自己绕晕，所以本文我们用几个具体的示例来逐层讲解。",-1),y=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"啰嗦君"),e("p",null,"路由功能实在过于灵活，所以本文的示例，都是为了讲解对应的概念，实际使用时请根据自己的需求进行调整。")],-1),A=e("h2",{id:"_2-基本功-兄弟一条心",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-基本功-兄弟一条心","aria-hidden":"true"},"#"),r(" 2. 基本功： “兄弟一条心”")],-1),E=e("p",null,[r("下图的示例，就是在客户端的 "),e("code",null,"Xray"),r(" 入站接收 APP 数据、在路由 100%转发给出站，并从出站流向 VPS。")],-1),h=e("p",null,"下面我们来逐个分析：",-1),f=e("h3",{id:"_2-1-入站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-1-入站","aria-hidden":"true"},"#"),r(" 2.1 入站")],-1),B=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"提示"),e("p",null,[e("strong",null,"入站："),r(" 就是流量如何流入 "),e("code",null,"Xray")])],-1),x=e("p",null,[r("下面的入站配置示例，用大白话说就是：数据按照 "),e("code",null,"socks"),r(" 协议，通过 "),e("code",null,"10808"),r(" 端口，从本机 "),e("code",null,"127.0.0.1"),r(" 流入"),e("code",null,"Xray"),r("。同时，"),e("code",null,"Xray"),r(" 将这个入站用 "),e("code",null,"[tag]"),r(" 命名为 "),e("code",null,"inbound-10808"),r("。")],-1),D=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"inbounds"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"inbound-10808"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"socks"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"listen"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"127.0.0.1"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"port"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token number"},"10808"),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"settings"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"udp"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token boolean"},"true"),r("\n      "),e("span",{class:"token punctuation"},"}"),r("\n    "),e("span",{class:"token punctuation"},"}"),r("\n  "),e("span",{class:"token punctuation"},"]"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br")])],-1),v=e("p",null,[e("strong",null,"2.2 出站")],-1),_=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"提示"),e("p",null,[e("strong",null,"出站："),r(" 就是流量如何流出 "),e("code",null,"Xray")])],-1),F=e("p",null,[r("下面的出站配置示例，用大白话说就是：数据按照 "),e("code",null,"VLESS"),r(" 协议，以 "),e("code",null,"tcp + xtls"),r(" 的方式、及其他相关设置，把流量发送给对应的 VPS。同时，"),e("code",null,"Xray"),r(" 将这个出站用 "),e("code",null,"[tag]"),r(" 命名为 "),e("code",null,"proxy-out-vless"),r("：")],-1),P=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"outbounds"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"proxy-out-vless"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"vless"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"settings"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"vnext"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n          "),e("span",{class:"token punctuation"},"{"),r("\n            "),e("span",{class:"token property"},'"address"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"a-name.yourdomain.com"'),e("span",{class:"token punctuation"},","),r("\n            "),e("span",{class:"token property"},'"port"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token number"},"443"),e("span",{class:"token punctuation"},","),r("\n            "),e("span",{class:"token property"},'"users"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n              "),e("span",{class:"token punctuation"},"{"),r("\n                "),e("span",{class:"token property"},'"id"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"uuiduuid-uuid-uuid-uuid-uuiduuiduuid"'),e("span",{class:"token punctuation"},","),r("\n                "),e("span",{class:"token property"},'"flow"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"xtls-rprx-vision"'),e("span",{class:"token punctuation"},","),r("\n                "),e("span",{class:"token property"},'"encryption"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"none"'),e("span",{class:"token punctuation"},","),r("\n                "),e("span",{class:"token property"},'"level"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token number"},"0"),r("\n              "),e("span",{class:"token punctuation"},"}"),r("\n            "),e("span",{class:"token punctuation"},"]"),r("\n          "),e("span",{class:"token punctuation"},"}"),r("\n        "),e("span",{class:"token punctuation"},"]"),r("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"streamSettings"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"network"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"tcp"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"security"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"tls"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"tlsSettings"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n          "),e("span",{class:"token property"},'"serverName"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"a-name.yourdomain.com"'),e("span",{class:"token punctuation"},","),r("\n          "),e("span",{class:"token property"},'"allowInsecure"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token boolean"},"false"),e("span",{class:"token punctuation"},","),r("\n          "),e("span",{class:"token property"},'"fingerprint"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"chrome"'),r("\n        "),e("span",{class:"token punctuation"},"}"),r("\n      "),e("span",{class:"token punctuation"},"}"),r("\n    "),e("span",{class:"token punctuation"},"}"),r("\n  "),e("span",{class:"token punctuation"},"]"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br"),e("span",{class:"line-number"},"30"),e("br"),e("span",{class:"line-number"},"31"),e("br"),e("span",{class:"line-number"},"32"),e("br"),e("span",{class:"line-number"},"33"),e("br")])],-1),S=e("h3",{id:"_2-3-路由",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-3-路由","aria-hidden":"true"},"#"),r(" 2.3 路由")],-1),X=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"提示"),e("p",null,[e("strong",null,"路由："),r(" 就是把【入站】和【出站】之间的通道，用某种【条件】串联起来")])],-1),V=e("p",null,[r("下面的路由配置示例，用大白话说就是：把所有通过 "),e("code",null,'[tag]="inbound-10808"'),r(" 入站流入 "),e("code",null,"Xray"),r(" 的流量，"),e("code",null,"100%"),r(" 全部流转导入 "),e("code",null,'[tag]="proxy-out-vless"'),r(" 的出站，没有任何分流或其他操作。")],-1),O=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"routing"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n    "),e("span",{class:"token property"},'"domainStrategy"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"AsIs"'),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token property"},'"rules"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n      "),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"type"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"field"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"inboundTag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"inbound-10808"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"outboundTag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"proxy-out-vless"'),r("\n      "),e("span",{class:"token punctuation"},"}"),r("\n    "),e("span",{class:"token punctuation"},"]"),r("\n  "),e("span",{class:"token punctuation"},"}"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br")])],-1),R=e("p",null,[r("至此，我们最开始设计的极简规则【客户端的 "),e("code",null,"Xray"),r(" 入站接收 APP 数据、在路由 100%转发给出站，并从出站流向 VPS】已经完成。")],-1),j=e("h3",{id:"_2-4-路由配置项解析之一-流量筛选的依据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-4-路由配置项解析之一-流量筛选的依据","aria-hidden":"true"},"#"),r(" 2.4 路由配置项解析之一：流量筛选的依据")],-1),C=e("p",null,"注意观察路由配置，我们可以看到几个新名词：",-1),I=e("ol",null,[e("li",null,[e("code",null,'"domainStrategy": "AsIs"')]),e("li",null,[e("code",null,"“rules”")]),e("li",null,[e("code",null,'"type": "field"')]),e("li",null,[e("code",null,'"inboundTag": ["inbound-10808"]')]),e("li",null,[e("code",null,'"outboundTag": "proxy-out-vless"')])],-1),L=e("p",null,[r("其中 "),e("code",null,"domainStrategy"),r(" 我们暂且按下不表，先简单说明后面几个：")],-1),w=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"配置名称"),e("th",{style:{"text-align":"center"}},"配置值"),e("th",{style:{"text-align":"left"}},"配置说明")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"“rules”")]),e("td",{style:{"text-align":"center"}},"                                                   "),e("td",{style:{"text-align":"left"}},"它的内层就是【路由规则】的明细设置")]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,'"type"')]),e("td",{style:{"text-align":"center"}},[e("code",null,'"field"')]),e("td",{style:{"text-align":"left"}},"该项暂时没有特别定义，但是不能省略，所以记得写上就好")]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,'"inboundTag"')]),e("td",{style:{"text-align":"center"}},[e("code",null,'["inbound-10808"]')]),e("td",{style:{"text-align":"left"}},[r("筛选流量的 "),e("strong",null,"【依据】"),r(" 是【入站 Tag】，具体 "),e("strong",null,"【条件】"),r(" 现在只有一个：【入站来源是 "),e("code",null,"inbound-10808"),r("】")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,'"outboundTag"')]),e("td",{style:{"text-align":"center"}},[e("code",null,'"proxy-out-vless"')]),e("td",{style:{"text-align":"left"}},[r("当上面的筛选条件成立时（即入站"),e("code",null,'[tag]="inbound-10808"'),r("时 ），"),e("code",null,"Xray"),r(" 会将流量导入 "),e("code",null,'[tag]="proxy-out-vless"'),r(" 的出站")])])])],-1),T=e("p",null,[r("本例中，我们只有一个入站，它的"),e("code",null,'"inboundTag" = "inbound-10808"'),r(" 。我们也只有一个出站，它的 "),e("code",null,'[tag]="proxy-out-vless"'),r("。所以根据上面这个路由规则，从唯一入站端口 "),e("code",null,"10808"),r(" 流入"),e("code",null,"Xray"),r("的流量，"),e("code",null,"100%"),r(" 符合筛选条件、会被路由模块选中，然后转发给唯一的出站。")],-1),q=e("p",null,[r("至此，"),e("strong",null,"入站"),r("、"),e("strong",null,"路由"),r("、"),e("strong",null,"出站"),r(" 三兄弟就已经可以携手工作了。当然，现在这个 100%转发的工作并没有什么特别的意义。那么接下来，我们就看看这种分工合作的机制可以带来什么好处。")],-1),G=e("h2",{id:"_3-小试牛刀-三分天下-之-域名分流",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-小试牛刀-三分天下-之-域名分流","aria-hidden":"true"},"#"),r(" 3. 小试牛刀： “三分天下” 之 “域名分流”")],-1),W=e("blockquote",null,[e("p",null,[e("code",null,"[geosite.dat]")])],-1),M=e("p",null,"这个配置逻辑，其实就是最简单、最常用的（《小小白白话文》中也在用的）路由配置三件套：",-1),N=e("ol",null,[e("li",null,[r("广告流量屏蔽 "),e("code",null,"[block]")]),e("li",null,[r("国内流量直连 "),e("code",null,"[direct]")]),e("li",null,[r("国外流量转发 VPS "),e("code",null,"[proxy]")])],-1),z=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,"小小白白话文中的直连配置是包括【国内域名】、【国内 IP】、【本机内部 IP】的。这里先讲解【国内域名】。")],-1),H=e("h3",{id:"_3-1-入站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-入站","aria-hidden":"true"},"#"),r(" 3.1 入站")],-1),J=e("p",null,[r("保持上例的 "),e("code",null,"inbound-10808"),r(" 不变。")],-1),K=e("h3",{id:"_3-2-出站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-2-出站","aria-hidden":"true"},"#"),r(" 3.2 出站")],-1),Q=e("p",null,[r("在上例的基础上，我们已经有了 "),e("code",null,"[proxy]"),r(" 的出站 "),e("code",null,'"proxy-out-vless"'),r("，所以它保持不变。显而易见，我们需要加入两个新的出站方式："),e("code",null,"[block]"),r(" 和 "),e("code",null,"[direct]"),r("，如下：")],-1),U=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"outbounds"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"proxy-out-vless"'),r("\n      "),e("span",{class:"token comment"},"// ... ..."),r("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"block"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"blackhole"'),r("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"direct-out"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"freedom"'),r("\n    "),e("span",{class:"token punctuation"},"}"),r("\n  "),e("span",{class:"token punctuation"},"]"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br")])],-1),Y=e("p",null,"上面的配置用大白话翻译如下：",-1),Z=e("ol",null,[e("li",null,[r("上例中的 "),e("code",null,"[proxy-out-vless]"),r(" 出站配置保持不变")]),e("li",null,[r("加入 "),e("strong",null,[e("code",null,"blackhole"),r(" 黑洞协议")]),r("，通过这个协议出站的流量，其实都被发送到了 "),e("code",null,"Xray"),r(" 内部的黑洞里，再也无法逃脱，于是效果就是屏蔽 "),e("code",null,"[block]")]),e("li",null,[r("加入 "),e("strong",null,[e("code",null,"freedom"),r(" 自由协议")]),r("，通过这个协议出站的流量，是自由的离开"),e("code",null,"Xray"),r("去寻找原定的服务器，就像从没有来过，于是效果就是直连 "),e("code",null,"[direct]"),r(" （我这里起名叫做 "),e("code",null,"[direct-out]"),r(" 是为了强调它是一个出站）")])],-1),$=e("h3",{id:"_3-3-路由",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-3-路由","aria-hidden":"true"},"#"),r(" 3.3 路由")],-1),nn=e("p",null,"接下来就是见证奇迹的时刻了，我们可以用【路由】的配置把这些连接起来！",-1),sn=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"routing"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"{"),r("\n    "),e("span",{class:"token property"},'"domainStrategy"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"AsIs"'),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token property"},'"rules"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n      "),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"type"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"field"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"domain"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"geosite:category-ads-all"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"outboundTag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"block"'),r("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"type"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"field"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"domain"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"geosite:cn"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"outboundTag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"direct-out"'),r("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token punctuation"},"{"),r("\n        "),e("span",{class:"token property"},'"type"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"field"'),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"domain"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"geosite:geolocation-!cn"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),r("\n        "),e("span",{class:"token property"},'"outboundTag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"proxy-out-vless"'),r("\n      "),e("span",{class:"token punctuation"},"}"),r("\n    "),e("span",{class:"token punctuation"},"]"),r("\n  "),e("span",{class:"token punctuation"},"}"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br")])],-1),an=e("p",null,"为了理解这个配置文件，我们要稍微解释一下这里出现的几个新配置项：",-1),ln=e("ul",null,[e("li",null,[e("code",null,'"domain": ["geosite:category-ads-all"]')]),e("li",null,[e("code",null,'"domain": ["geosite:cn"]')]),e("li",null,[e("code",null,'"domain": ["geosite:geolocation-!cn"]')])],-1),en=e("h3",{id:"_3-4-简析域名文件-geosite-dat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-4-简析域名文件-geosite-dat","aria-hidden":"true"},"#"),r(" 3.4 简析域名文件： "),e("code",null,"geosite.dat")],-1),tn=e("p",null,"其实，聪明的你大概可以通过这些配置项的名称猜出来个大概：",-1),on=e("ul",null,[e("li",null,[e("code",null,'"domain"'),r("：就是这次筛选流量的 "),e("strong",null,"【依据】"),r(" 是 "),e("strong",null,"【域名】"),r(" （而不再是入站 tag）")]),e("li",null,[e("code",null,'"geosite"'),r("：就是 "),e("code",null,"Xray"),r(" 会去 "),e("code",null,"geosite.dat"),r(" 文件中寻找 "),e("strong",null,"【符合条件的域名】")]),e("li",null,[e("code",null,'"category-ads-all"'),r("：就是该文件中的 "),e("strong",null,"【所有广告类域名】")]),e("li",null,[e("code",null,'"cn"'),r("：就是该文件中的 "),e("strong",null,"【中国域名】")]),e("li",null,[e("code",null,'"geolocation-!cn"'),r("：就是该文件中的 "),e("strong",null,"【非中国域名】")])],-1),rn=e("p",null,"结合这些说明，3.3 中的配置用大白话翻译就是：",-1),cn=e("ol",null,[e("li",null,[r("APP 试图访问国外域名 "),e("code",null,'"domain": "geolocation-!cn"'),r(" 的流量，通过 "),e("code",null,"[proxy-out-vless]"),r(" 出站，转发至 VPS")]),e("li",null,[r("APP 试图访问国外域名广告域名 "),e("code",null,'"domain": "geosite:category-ads-all"'),r(" 的流量，通过 "),e("code",null,"[block]"),r(" 出站，转发至黑洞进行屏蔽")]),e("li",null,[r("APP 试图访问国内域名 "),e("code",null,'"domain": "geosite:cn"'),r(" 的流量，通过 "),e("code",null,"[direct-out]"),r(" 出站，自由离开完成直连")])],-1),pn=e("p",null,"这时，才让【路由功能】的好处稍微得到了一些展现。",-1),un=e("h3",{id:"_3-5-所以-geosite-dat-到底是什么-不是有个-gfwlist-吗",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-5-所以-geosite-dat-到底是什么-不是有个-gfwlist-吗","aria-hidden":"true"},"#"),r(" 3.5 所以 "),e("code",null,"geosite.dat"),r(" 到底是什么？不是有个 "),e("code",null,"GFWList"),r(" 吗？")],-1),dn=e("p",null,"你想，这世界上的域名何止千万，如果我们每写一个基于【域名】匹配的路由规则，都要自己收集、手动输入域名，那效率将会何其低下！",-1),bn=e("p",null,[r("而如果所有的域名都只有一个种类，"),e("code",null,"[direct], [proxy], [block]"),r(" 只能三选其一，那又是多么的不方便！")],-1),kn=e("p",null,[r("就如关羽需要他的青龙偃月刀，"),e("code",null,"geosite.dat"),r(" 文件便作为【路由功能】驱使的神兵利器横空出世了，它致力于为用户提供成熟完善的【域名分类表】。让用户可以简单的通过 "),e("code",null,"geosite:xxx"),r(" 这种格式方便的调用任何子类，定制符合自身需求的路由规则。")],-1),gn=r("这种模块化结构提供的灵活性，其实远超传统的一揽子防火墙域名列表 "),mn={href:"https://github.com/gfwlist/gfwlist",target:"_blank",rel:"noopener noreferrer"},yn=e("code",null,"GFWList",-1),An=r("。为什么这么说呢？比如，你可以指定苹果的域名 "),En=e("code",null,"geosite:apple",-1),hn=r(" 和 icloud 相关域名 "),fn=e("code",null,"geosite:icloud",-1),Bn=r(" 通过代理 "),xn=e("code",null,"[proxy]",-1),Dn=r("，但是苹果的软件域名 "),vn=e("code",null,"geosite:apple-update",-1),_n=r(" 保持直连 "),Fn=e("code",null,"[direct]",-1),Pn=r(" 来保持最大下载速度。"),Sn={class:"custom-container warning"},Xn=e("p",{class:"custom-container-title"},"注意",-1),Vn=e("p",null,[e("strong",null,"注意："),r(" 现在，"),e("code",null,"geosite.dat"),r(" 文件其实有多种选择：")],-1),On=r("最初，从 "),Rn=e("code",null,"Victoria Raymond",-1),jn=r(" 主力维护 "),Cn=e("code",null,"Project V",-1),In=r(" 项目时期，便提供了最初的配套项目："),Ln={href:"https://github.com/v2ray/domain-list-community",target:"_blank",rel:"noopener noreferrer"},wn=e("code",null,"domain-list-community",-1),Tn=r("，用来收集、沉淀、分类各种常用的域名类型；"),qn=r("之后，随着 V 姐突然消失导致 "),Gn=e("code",null,"Project V",-1),Wn=r(" 的原项目开发陷入停滞，"),Mn=e("code",null,"v2fly",-1),Nn=r(" 社区维护并持续更新了社区版本的 "),zn={href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"},Hn=e("code",null,"domain-list-community",-1),Jn=r("；"),Kn=r("同时，"),Qn=e("a",{href:"Loyalsoldier"},"@Loyalsoldier",-1),Un=r(" 维护了其个人修改增强的路由规则文件 "),Yn={href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"},Zn=r("v2ray-rules-dat"),$n=r("，提供了诸多不同的选择和分类逻辑；"),ns=r("另外，"),ss=e("code",null,"Project X",-1),as=r(" 也计划于未来定制维护更适合 "),ls=e("code",null,"Xray",-1),es=r(" 使用的路由规则文件 "),ts={href:"https://github.com/XTLS/Xray-rules-dat",target:"_blank",rel:"noopener noreferrer"},os=r("Xray-rules-dat"),rs=r("。"),cs=e("s",null,"(你们看，文件夹都建好了，所以快了快了)",-1),ps=e("p",null,[r("甚至，你还可以定制自己的 "),e("code",null,"geosite"),r(" 文件，外挂给 "),e("code",null,"Xray"),r(" 使用，但是这个就跑题了，本文不展开。")],-1),us=e("p",null,[r("如果你发现有些你遇到的域名没有被合理分类，请向上面的项目们提出 "),e("code",null,"issue"),r(" 甚至提交 "),e("code",null,"Pull Request"),r(" 吧！社区列表社区维护，人人为我我为人人！")],-1),is=e("h3",{id:"_3-6-军师锦囊藏奇兵-一条隐藏的路由规则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-6-军师锦囊藏奇兵-一条隐藏的路由规则","aria-hidden":"true"},"#"),r(" 3.6 军师锦囊藏奇兵：一条隐藏的路由规则")],-1),ds=e("p",null,[r("事实上，当你认真思考上面的规则，不难发现一个问题，我们的所有规则都只规定了【当入站流量 "),e("strong",null,"符合某种条件时"),r(" 应该被转发给哪个出站】，那么，如果 "),e("code",null,"geosite.dat"),r(" 文件不全面，我们的入站流量【"),e("strong",null,"不符合任何条件时"),r("】，"),e("code",null,"Xray"),r(" 会怎么处理呢？")],-1),bs=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,[r("如果你认为【不符合条件当然就无法连接啦！】的话，你可要重新思考一下哦。因为只有指定了 "),e("code",null,"[block]"),r(" 规则，才会被导入到 "),e("code",null,"blackhole"),r(" 黑洞协议从而阻断连接")])],-1),ks=e("p",null,[r("事实上，"),e("code",null,"Xray"),r(" 为了避免路由规则不完全导致的规则混乱，已经贴心的提供了一条隐藏的路由规则：【"),e("strong",null,"当入站流量不符合任何条件时，转发给第一个出站"),r(" 】")],-1),gs=e("p",null,"这样，就不会有任何流量被漏掉了。所以，你一定要把你最信赖的心腹大将放在【第一条出站】，让它为你守城护池。",-1),ms=e("h3",{id:"_3-7-再看-三分天下-的大地图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-7-再看-三分天下-的大地图","aria-hidden":"true"},"#"),r(" 3.7 再看“三分天下”的大地图")],-1),ys=e("p",null,[r("因为我们在前面的示例中把 "),e("code",null,"[proxy-out-vless]"),r(" 放在了出站的第一位，所以隐藏规则生效时，流量会通过 "),e("code",null,"VLESS"),r(" 协议被转发至远端的 VPS。因此，"),e("code",null,"Xray"),r(" 此时的完整工作逻辑如下：")],-1),As=e("p",null,[r("事实上，这就是传统所谓的 "),e("strong",null,"【默认科学上网、国内网站白名单直连】"),r(" 的配置。")],-1),Es=e("h2",{id:"_4-三分天下-之-蜀魏争雄",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-三分天下-之-蜀魏争雄","aria-hidden":"true"},"#"),r(" 4. “三分天下” 之 “蜀魏争雄”")],-1),hs=e("p",null,[r("现在，你已经知道了隐藏的默认路由规则：【"),e("strong",null,"当入站流量不符合任何条件时，转发给第一个出站"),r(" 】。这时候，你应该能看出来，究竟是【科学上网】为王，还是【直连】称霸，全看你的第一条出站是什么！")],-1),fs=e("p",null,[r("上一步我们已经配置出了 "),e("strong",null,"【默认科学上网、国内网站白名单直连】"),r(" 的规则。那么现在只要 "),e("strong",null,"【把直连规则放在第一位】"),r("，就立即变成了正好相反的 "),e("strong",null,"【默认直连、国外网站白名单科学上网】"),r(" 规则。")],-1),Bs=e("p",null,"是不是，非常地简单？",-1),xs=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),r("\n  "),e("span",{class:"token property"},'"outbounds"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token punctuation"},"["),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"direct-out"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"freedom"'),r("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"proxy-out-vless"'),r("\n      "),e("span",{class:"token comment"},"// ... ..."),r("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),r("\n    "),e("span",{class:"token punctuation"},"{"),r("\n      "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"block"'),e("span",{class:"token punctuation"},","),r("\n      "),e("span",{class:"token property"},'"protocol"'),e("span",{class:"token operator"},":"),r(),e("span",{class:"token string"},'"blackhole"'),r("\n    "),e("span",{class:"token punctuation"},"}"),r("\n  "),e("span",{class:"token punctuation"},"]"),r("\n"),e("span",{class:"token punctuation"},"}"),r("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br")])],-1),Ds=e("p",null,"此时，路由规则其实变成了：",-1),vs=e("p",null,"这就是路由功能的灵活之处了，你可以自由的改变它的顺序来实现不同的设计。",-1),_s=e("p",null,[r("至此，我们已经解释完了 "),e("strong",null,[r("【如何利用 "),e("code",null,"geosite.dat"),r(" 文件，通过路由规则，根据【域名】来分流网络流量】。")])],-1),Fs=e("h2",{id:"_5-攻城略池-多种路由匹配条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-攻城略池-多种路由匹配条件","aria-hidden":"true"},"#"),r(" 5. 攻城略池 - 多种路由匹配条件")],-1),Ps=e("p",null,"请确保你已经读懂了上面的内容，因为这样，你就已经理解了【路由】功能的工作逻辑。有了这个基础，我们就可以继续分析【路由】功能更多更详细的配置方式和匹配条件了。",-1),Ss=r("等你看完后面的内容，就完全可以自由的定制属于自己的路由规则啦！还等什么，让我们一起进入 "),Xs=r("《路由 (routing) 功能简析（下）》"),Vs=r(" 吧！");c.render=function(r,c){const Os=n("Mermaid"),Rs=n("OutboundLink"),js=n("RouterLink");return s(),a(o,null,[p,u,i,d,b,k,g,m,y,A,E,l(Os,{identifier:"mermaid_382ee188",graph:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%3E%20O%5B%E5%87%BA%E7%AB%99%5D%0A%20%20%20%20end%0A%0A%20%20%20%20O%20.-%3E%20V(VPS)%0A%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE%0A%0A"}),h,f,B,x,D,v,_,F,P,S,X,V,O,R,j,C,I,L,w,T,q,G,W,l(Os,{identifier:"mermaid_64a56ee8",graph:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),M,N,z,H,J,K,Q,U,Y,Z,$,nn,sn,an,ln,en,tn,on,rn,cn,pn,un,dn,bn,kn,e("p",null,[gn,e("a",mn,[yn,l(Rs)]),An,En,hn,fn,Bn,xn,Dn,vn,_n,Fn,Pn]),e("div",Sn,[Xn,Vn,e("p",null,[On,Rn,jn,Cn,In,e("a",Ln,[wn,l(Rs)]),Tn]),e("p",null,[qn,Gn,Wn,Mn,Nn,e("a",zn,[Hn,l(Rs)]),Jn]),e("p",null,[Kn,Qn,Un,e("a",Yn,[Zn,l(Rs)]),$n]),e("p",null,[ns,ss,as,ls,es,e("a",ts,[os,l(Rs)]),rs,cs]),ps,us]),is,ds,bs,ks,gs,ms,ys,l(Os,{identifier:"mermaid_64a55fb4",graph:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20-.%20%22%E6%B2%A1%E6%9C%89%E5%91%BD%E4%B8%AD%E8%A7%84%E5%88%99%E7%9A%84%E6%B5%81%E9%87%8F%22%20.-%3E%20O4%5B%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%87%BA%E7%AB%99%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%20%20%20%20O4%20.-%3E%20V(VPS)%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),As,Es,hs,fs,Bs,xs,Ds,l(Os,{identifier:"mermaid_64a55a22",graph:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20-.%20%22%E6%B2%A1%E6%9C%89%E5%91%BD%E4%B8%AD%E8%A7%84%E5%88%99%E7%9A%84%E6%B5%81%E9%87%8F%22%20.-%3E%20O4%5B%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%87%BA%E7%AB%99%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%20%20%20%20O4%20.-%3E%20D%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),vs,_s,Fs,Ps,e("p",null,[Ss,l(js,{to:"/document/level-1/routing-lv1-part2.html"},{default:t((()=>[Xs])),_:1}),Vs])],64)};export default c;
