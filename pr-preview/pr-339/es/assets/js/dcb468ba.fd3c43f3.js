"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1764],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const l={sidebar_label:"Setup"},o="\ud83d\udcbb\xa0Setup",i={unversionedId:"developers/gm-setup",id:"developers/gm-setup",title:"\ud83d\udcbb\xa0Setup",description:"- Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).",source:"@site/docs/developers/gm-setup.md",sourceDirName:"developers",slug:"/developers/gm-setup",permalink:"/pr-preview/pr-339/es/developers/gm-setup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-setup.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup"},sidebar:"developers",previous:{title:"gm world Overview",permalink:"/pr-preview/pr-339/es/developers/gm-world"},next:{title:"Run a Light Node",permalink:"/pr-preview/pr-339/es/developers/gm-node"}},s={},p=[{value:"\ud83c\udfc3\xa0Install Golang",id:"install-golang",level:2},{value:"\ud83d\udd25\xa0Install Ignite CLI",id:"install-ignite-cli",level:2},{value:"\ud83c\udf7a\xa0Install Homebrew",id:"install-homebrew",level:2},{value:"\ud83c\udfc3\xa0Install wget and jq",id:"install-wget-and-jq",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"\ud83d\udcbb\xa0Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).\nRecommended GNU/Linux or macOS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/ignite/cli/"},"Ignite CLI v0.25.1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/nodes/light-node/"},"A Celestia Light Node")))),(0,a.kt)("h2",{id:"install-golang"},"\ud83c\udfc3\xa0Install Golang"),(0,a.kt)("p",null,"Celestia-App, Celestia-Node, and Cosmos-SDK are written in the Golang\nprogramming language. You will need Golang to build and run them."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Be sure to use the same testnet installation instructions through this\nentire tutorial"))),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-339/es/nodes/environment#install-golang"},"install Golang here"),"."),(0,a.kt)("h2",{id:"install-ignite-cli"},"\ud83d\udd25\xa0Install Ignite CLI"),(0,a.kt)("p",null,"First, you will need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,a.kt)("p",null,"Run this command in your terminal to install Ignite CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u270b On some machines, you may run into permissions errors like the one below.\nYou can resolve this error by following the guidance\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here")," or below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Error\njcs @ ~ % curl https://get.ignite.com/cli! | bash\n\n\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  16847      0 --:--:-- --:--:-- --:--:-- 17475\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nmv: rename ./ignite to /usr/local/bin/ignite: Permission denied\n============\nError: mv failed\n")),(0,a.kt)("p",null,"The following command will resolve the permissions error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl https://get.ignite.com/cli! | sudo bash\n")),(0,a.kt)("p",null,"A successful installation will return something similar the response below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  15586      0 --:--:-- --:--:-- --:--:-- 15931\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nInstalled at /usr/local/bin/ignite\n")),(0,a.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,a.kt)("p",null,"The response that you receive should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.25.1\nIgnite CLI build date: 2022-10-20T15:52:00Z\nIgnite CLI source hash: cc393a9b59a8792b256432fafb472e5ac0738f7c\nCosmos SDK version: v0.46.3\nYour OS: darwin\nYour arch: arm64\nYour Node.js version: v18.10.0\nYour go version: go version go1.19.2 darwin/arm64\nYour uname -a: Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 arm64\nYour cwd: /Users/joshstein\nIs on Gitpod: false\n")),(0,a.kt)("h2",{id:"install-homebrew"},"\ud83c\udf7a\xa0Install Homebrew"),(0,a.kt)("p",null,"Homebrew will allow us to install dependencies for our Mac:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands similar to the output below from the successful installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h2",{id:"install-wget-and-jq"},"\ud83c\udfc3\xa0Install wget and jq"),(0,a.kt)("p",null,"wget is an Internet file retriever and jq is a lightweight and flexible\ncommand-line JSON processor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget && brew install jq\n")))}c.isMDXComponent=!0}}]);