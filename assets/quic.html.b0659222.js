import{d as n}from"./app.f8d1b75e.js";const e={},s=n('<h1 id="quic" tabindex="-1"><a class="header-anchor" href="#quic" aria-hidden="true">#</a> QUIC</h1><p>QUIC 全称 Quick UDP Internet Connection，是由 Google 提出的使用 UDP 进行多路并发传输的协议。其主要优势是:</p><ol><li>减少了握手的延迟（1-RTT 或 0-RTT）</li><li>多路复用，并且没有 TCP 的阻塞问题</li><li>连接迁移，（主要是在客户端）当由 Wifi 转移到 4G 时，连接不会被断开。</li></ol><p>QUIC 目前处于实验期，使用了正在标准化过程中的 IETF 实现，不能保证与最终版本的兼容性。</p><ul><li>默认设定: <ul><li>12 字节的 Connection ID</li><li>30 秒没有数据通过时自动断开连接 (可能会影响一些长连接的使用)</li></ul></li></ul><h2 id="quicobject" tabindex="-1"><a class="header-anchor" href="#quicobject" aria-hidden="true">#</a> QuicObject</h2><p><code>QuicObject</code> 对应传输配置的 <code>quicSettings</code> 项。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>对接的两端的配置必须完全一致，否则连接失败。 QUIC 强制要求开启 TLS，在传输配置中没有开启 TLS 时，Xray 会自行签发一个证书进行 TLS 通讯。</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>security</code>: &quot;none&quot; | &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot;</p></blockquote><p>加密方式。</p><p>此加密是对 QUIC 数据包的加密，加密后数据包无法被探测。</p><p>默认值为不加密。</p><blockquote><p><code>key</code>: string</p></blockquote><p>加密时所用的密钥。</p><p>可以是任意字符串。当 <code>security</code> 不为 <code>&quot;none&quot;</code> 时有效。</p><blockquote><p><code>header</code>: <a href="#headerobject">HeaderObject</a></p></blockquote><p>数据包头部伪装设置</p><h3 id="headerobject" tabindex="-1"><a class="header-anchor" href="#headerobject" aria-hidden="true">#</a> HeaderObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: string</p></blockquote><p>伪装类型，可选的值有：</p><ul><li><code>&quot;none&quot;</code>：默认值，不进行伪装，发送的数据是没有特征的数据包。</li><li><code>&quot;srtp&quot;</code>：伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime）。</li><li><code>&quot;utp&quot;</code>：伪装成 uTP 数据包，会被识别为 BT 下载数据。</li><li><code>&quot;wechat-video&quot;</code>：伪装成微信视频通话的数据包。</li><li><code>&quot;dtls&quot;</code>：伪装成 DTLS 1.2 数据包。</li><li><code>&quot;wireguard&quot;</code>：伪装成 WireGuard 数据包。（并不是真正的 WireGuard 协议）</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当加密和伪装都不启用时，数据包即为原始的 QUIC 数据包，可以与其它的 QUIC 工具对接。 为了避免被探测，建议加密或伪装至少开启一项。</p></div>',24);e.render=function(n,e){return s};export default e;