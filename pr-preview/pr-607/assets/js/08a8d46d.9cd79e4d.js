"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Run a public RPC node",l={unversionedId:"nodes/itn-rpc-node",id:"nodes/itn-rpc-node",title:"Run a public RPC node",description:"Description",source:"@site/docs/nodes/itn-rpc-node.md",sourceDirName:"nodes",slug:"/nodes/itn-rpc-node",permalink:"/pr-preview/pr-607/nodes/itn-rpc-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-rpc-node.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-a-public-rpc-node"},"Run a public RPC node"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Run a publicly-available RPC Node (preferraly with seed mode).\nYou can follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/consensus-full-node"},"here"),"\nfor running celestia-app to provide an RPC endpoint."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run a publicly-available RPC node by following the\nConsensus Full Node tutorial."),(0,o.kt)("li",{parentName:"ol"},"Provide the IP and port of the available RPC node to the community\nand ensure the correct ports are open so that the community\ncan use it."),(0,o.kt)("li",{parentName:"ol"},"Please submit a PR to our docs with your RPC ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/docs/blob/main/docs/nodes/blockspace-race.md#rpc-endpoints"},"here"),".")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if your RPC node is available for use by others and Data Availability\nnodes can connect to it."),(0,o.kt)("li",{parentName:"ol"},"No points if not.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Please submit your node's IP and port. Make sure it is accessible to\nthe internet in case you have a firewall set up."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://156.16.134.52:26657")))}d.isMDXComponent=!0}}]);