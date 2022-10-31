"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[160],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,w=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(w,c(c({ref:t},m),{},{components:n})):r.createElement(w,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],l={sidebar_label:"Contract Deployment"},i="Contract Deployment on CosmWasm with Rollmint",s={unversionedId:"developers/cosmwasm-contract-deployment",id:"developers/cosmwasm-contract-deployment",title:"Contract Deployment on CosmWasm with Rollmint",description:"Compile the Smart Contract",source:"@site/docs/developers/cosmwasm-contract-deployment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-deployment",permalink:"/pr-preview/pr-281/fr/developers/cosmwasm-contract-deployment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-deployment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contract Deployment"},sidebar:"developers",previous:{title:"Setup Network Environment",permalink:"/pr-preview/pr-281/fr/developers/cosmwasm-environment"},next:{title:"Contract Interaction",permalink:"/pr-preview/pr-281/fr/developers/cosmwasm-contract-interaction"}},m={},p=[{value:"Compile the Smart Contract",id:"compile-the-smart-contract",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Optimized Smart Contract",id:"optimized-smart-contract",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-deployment-on-cosmwasm-with-rollmint"},"Contract Deployment on CosmWasm with Rollmint"),(0,a.kt)("h2",{id:"compile-the-smart-contract"},"Compile the Smart Contract"),(0,a.kt)("p",null,"We will run the following commands to pull down the Nameservice\nsmart contract and compile it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/InterWasm/cw-contracts\ncd cw-contracts\ncd contracts/nameservice\ncargo wasm\n")),(0,a.kt)("p",null,"The compiled contract is outputted to:\n",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),"."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"If we want to run tests, we can do so with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo unit-test\n")),(0,a.kt)("h2",{id:"optimized-smart-contract"},"Optimized Smart Contract"),(0,a.kt)("p",null,"Because we are deploying the compiled smart contract to ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd"),",\nwe want it to be as small as possible."),(0,a.kt)("p",null,"CosmWasm team provides a tool called ",(0,a.kt)("inlineCode",{parentName:"p"},"rust-optimizer")," which we need\nDocker for in order to compile."),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,a.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),"."),(0,a.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,a.kt)("p",null,"Let's now deploy our smart contract!"),(0,a.kt)("p",null,"Run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from $KEY_NAME --keyring-backend test $TXFLAG --output json -y | jq -r '.txhash') \n")),(0,a.kt)("p",null,"This will get you the transaction hash for the smart contract deployment. Given\nwe are using Rollmint, there will be a delay on the transaction being included\ndue to Rollmint waiting on Celestia's Data Availability Layer to confirm the block\nhas been included before submitting a new block."))}d.isMDXComponent=!0}}]);