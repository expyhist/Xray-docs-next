import{r as e,o as l,c as a,a as r,b as n,F as i,d as o,e as h}from"./app.97b49cde.js";const s={},t=o('<h1 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范" aria-hidden="true">#</a> 开发规范</h1><h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2><h3 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h3><p>project X 的代码被托管在 github 上:</p>',4),u=h("xray 核心 "),d={href:"https://github.com/XTLS/Xray-core",target:"_blank",rel:"noopener noreferrer"},c=h("xray-core"),p=h("安装脚本 "),b={href:"https://github.com/XTLS/Xray-install",target:"_blank",rel:"noopener noreferrer"},g=h("Xray-install"),f=h("配置模板 "),m={href:"https://github.com/XTLS/Xray-examples",target:"_blank",rel:"noopener noreferrer"},x=h("Xray-examples"),y=h("xray 文档 "),X={href:"https://github.com/XTLS/Xray-docs-next",target:"_blank",rel:"noopener noreferrer"},k=h("Xray-docs-next"),P=h("您可以使用 "),_={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},v=h("Git"),G=h(" 来获取代码."),R=r("h3",{id:"分支-branch",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#分支-branch","aria-hidden":"true"},"#"),h(" 分支（Branch）")],-1),B=r("p",null,"本项目的主干分支为 main, main 分支也是发布时所使用的代码分支, 因此需要确保 master 在任一时刻都是可编译可使用的。",-1),E=r("p",null,"如果需要开发新的功能",-1),q=r("ul",null,[r("li",null,"请新开分支进行开发, 在开发完成并且经过充分测试后, 合并回主干分支."),r("li",null,"新开分支如没有必要再存在时, 可以去除.")],-1),A=r("h3",{id:"发布-release",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#发布-release","aria-hidden":"true"},"#"),h(" 发布（Release）")],-1),F=r("ul",null,[r("li",null,[h("建立尝鲜版本和稳定版本两个发布通道 "),r("ul",null,[r("li",null,"尝鲜版本，可以为 daily build，主要用于特定情况的测试，尝鲜和获得即时反馈和再改进。"),r("li",null,"稳定版本，为定时更新(比如月更)，合并稳定的修改并发布。")])])],-1),L=r("h3",{id:"引用其它项目",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#引用其它项目","aria-hidden":"true"},"#"),h(" 引用其它项目")],-1),T=h("Golang "),w=h("产品代码建议使用 Golang 标准库和 "),S={href:"https://pkg.go.dev/search?q=golang.org%2Fx",target:"_blank",rel:"noopener noreferrer"},C=h("golang.org/x/"),H=h(" 下的库；"),j=r("li",null,"如需引用其它项目，请事先创建 issue 讨论；",-1),I=r("li",null,[h("其它 "),r("ul",null,[r("li",null,"不违反双方的协议，且对项目有帮助的工具，都可以使用。")])],-1),M=o('<h2 id="开发流程" tabindex="-1"><a class="header-anchor" href="#开发流程" aria-hidden="true">#</a> 开发流程</h2><h3 id="写代码之前" tabindex="-1"><a class="header-anchor" href="#写代码之前" aria-hidden="true">#</a> 写代码之前</h3><p>发现任何问题，或对项目有任何想法，请创建 Issue 讨论以减少重复劳动和消耗在代码上的时间。</p><h3 id="修改代码" tabindex="-1"><a class="header-anchor" href="#修改代码" aria-hidden="true">#</a> 修改代码</h3>',4),z=h("Golang "),D=h("请参考 "),O={href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"},W=h("Effective Go"),J=h("；"),K=r("li",null,[h("每一次 push 之前，请运行："),r("code",null,"go generate core/format.go"),h("；")],-1),N=r("li",null,[h("如果需要修改 protobuf，例如增加新配置项，请运行："),r("code",null,"go generate core/proto.go"),h("；")],-1),Q=r("li",null,[h("提交 pull request 之前，建议测试通过："),r("code",null,"go test ./..."),h("；")],-1),U=r("li",null,"提交 pull request 之前，建议新增代码有超过 70% 的代码覆盖率（code coverage）；",-1),V=r("li",null,[h("其它 "),r("ul",null,[r("li",null,"请注意代码的可读性。")])],-1),Y=o('<h3 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> Pull Request</h3><ul><li>提交 PR 之前，请先运行 <code>git pull https://github.com/xray/xray-core.git</code> 以确保 merge 可顺利进行；</li><li>一个 PR 只做一件事，如有对多个 bug 的修复，请对每一个 bug 提交一个 PR；</li><li>由于 Golang 的特殊需求（Package path），Go 项目的 PR 流程和其它项目有所不同 ,建议流程如下： <ol><li>先 Fork 本项目，创建自己的 <code>github.com/your/Xray-core</code> 仓库；</li><li>克隆自己的 Xray 仓库到本地：<code>git clone https://github.com/your/Xray-core.git</code>；</li><li>基于 <code>main</code> 分支创建新的分支；</li><li>在自行创建的分支上作修改并提交修改(commit)；</li><li>在推送(push)修改完成的分支到自己的仓库前，先切换到 <code>main</code> 分支，运行 <code>git pull https://github.com/xray/xray-core.git</code> 拉取最新的远端代码；</li><li>如果上一步拉取得到了新的远端代码，则切换到之前自己创建的分支，运行 <code>git rebase master</code> 执行分支合并操作。如遇到文件冲突，则需要解决冲突；</li><li>上一步处理完毕后，就可以把自己创建的分支推送到自己的仓库：<code>git push -u origin your-branch</code></li><li>最后，把自己仓库的新推送的分支往 <code>xtls/Xray-core</code> 的 <code>main</code> 分支发 PR 即可；</li><li>请在 PR 的标题和正文中，完整表述此次 PR 解决的问题 / 新增的功能 / 代码所做的修改的用意等；</li><li>耐心等待开发者的回应。</li></ol></li></ul><h3 id="对代码的修改" tabindex="-1"><a class="header-anchor" href="#对代码的修改" aria-hidden="true">#</a> 对代码的修改</h3><h4 id="功能性问题" tabindex="-1"><a class="header-anchor" href="#功能性问题" aria-hidden="true">#</a> 功能性问题</h4><p>请提交至少一个测试用例（Test Case）来验证对现有功能的改动。</p><h4 id="性能相关" tabindex="-1"><a class="header-anchor" href="#性能相关" aria-hidden="true">#</a> 性能相关</h4><p>请提交必要的测试数据来证明现有代码的性能缺陷，或是新增代码的性能提升。</p><h4 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> 新功能</h4><ul><li>如果新增功能对已有功能不影响，请提供可以开启/关闭的开关（如 flag），并使新功能保持默认关闭的状态；</li><li>大型新功能（比如增加一个新的协议）开发之前，请先提交一个 issue，讨论完毕之后再进行开发。</li></ul><h4 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h4><p>视具体情况而定。</p><h2 id="xray-编码规范" tabindex="-1"><a class="header-anchor" href="#xray-编码规范" aria-hidden="true">#</a> Xray 编码规范</h2><p>以下内容适用于 Xray 中的 Golang 代码。</p><h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray-core\n├── app        // 应用模块\n│   ├── router // 路由\n├── common     // 公用代码\n├── proxy      // 通讯协议\n│   ├── blackhole\n│   ├── dokodemo-door\n│   ├── freedom\n│   ├── socks\n│   ├── vmess\n├── transport  // 传输模块\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="编码规范" tabindex="-1"><a class="header-anchor" href="#编码规范" aria-hidden="true">#</a> 编码规范</h3><p>基本与 Golang 官方所推荐做法一致，有一些例外。写在这里以方便大家熟悉 Golang。</p><h4 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h4>',18),Z=r("li",null,[h("文件和目录名尽量使用单个英文单词，比如 hello.go； "),r("ul",null,[r("li",null,"如果实在没办法，则目录使用连接线／文件名使用下划线连接两个（或多个单词），比如 hello-world/hello_again.go；"),r("li",null,"测试代码使用 _test.go 结尾；")])],-1),$=r("li",null,[h("类型使用 Pascal 命名法，比如 ConnectionHandler； "),r("ul",null,[r("li",null,"对缩写不强制小写，即 HTML 不必写成 Html；")])],-1),ee=r("li",null,"公开成员变量也使用 Pascal 命名法；",-1),le=h("私有成员变量使用 "),ae={href:"https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB",target:"_blank",rel:"noopener noreferrer"},re=h("小驼峰式命名法"),ne=h(" ，如 "),ie=r("code",null,"privateAttribute",-1),oe=h(" ；"),he=r("li",null,[h("为了方便重构，方法建议全部使用 Pascal 命名法； "),r("ul",null,[r("li",null,[h("完全私有的类型放入 "),r("code",null,"internal"),h(" 。")])])],-1),se=r("h4",{id:"内容组织",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#内容组织","aria-hidden":"true"},"#"),h(" 内容组织")],-1),te=r("ul",null,[r("li",null,"一个文件包含一个主要类型，及其相关的私有函数等；"),r("li",null,"测试相关的文件，如 Mock 等工具类，放入 testing 子目录。")],-1);s.render=function(o,h){const s=e("OutboundLink"),ue=e("Badge");return l(),a(i,null,[t,r("ul",null,[r("li",null,[u,r("a",d,[c,n(s)])]),r("li",null,[p,r("a",b,[g,n(s)])]),r("li",null,[f,r("a",m,[x,n(s)])]),r("li",null,[y,r("a",X,[k,n(s)])])]),r("p",null,[P,r("a",_,[v,n(s)]),G]),R,B,E,q,A,n(ue,{text:"WIP",type:"warning"}),F,L,r("ul",null,[r("li",null,[T,r("ul",null,[r("li",null,[w,r("a",S,[C,n(s)]),H]),j])]),I]),M,r("ul",null,[r("li",null,[z,r("ul",null,[r("li",null,[D,r("a",O,[W,n(s)]),J]),K,N,Q,U])]),V]),Y,r("ul",null,[Z,$,ee,r("li",null,[le,r("a",ae,[re,n(s)]),ne,ie,oe]),he]),se,te],64)};export default s;
