"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[568],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9076:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={},i="Upgrade your validator node for the hardfork",l={unversionedId:"nodes/itn-hardfork-upgrade",id:"nodes/itn-hardfork-upgrade",title:"Upgrade your validator node for the hardfork",description:"Description",source:"@site/docs/nodes/itn-hardfork-upgrade.md",sourceDirName:"nodes",slug:"/nodes/itn-hardfork-upgrade",permalink:"/pr-preview/pr-690/nodes/itn-hardfork-upgrade",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-hardfork-upgrade.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],s={toc:d},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrade-your-validator-node-for-the-hardfork"},"Upgrade your validator node for the hardfork"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"In this phase, the Celestia Network will undergo a Hardfork Upgrade\nas an exercise for all Validators."),(0,o.kt)("p",null,"You can read more about the our hardfork process ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/hardfork-process#blockspace-race-hardfork"},"here"),"."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upgrade your ",(0,o.kt)("inlineCode",{parentName:"li"},"celestia-app")," binary to version v0.13.0\nahead of the hardfork block number ",(0,o.kt)("inlineCode",{parentName:"li"},"674000"),". Also, upgrade\nyour bridge node version of ",(0,o.kt)("inlineCode",{parentName:"li"},"celestia-node")," to v0.9.2."),(0,o.kt)("li",{parentName:"ol"},"You will need restart your validator and bridge nodes with the\nnew binaries."),(0,o.kt)("li",{parentName:"ol"},"Maintain high validator uptime after the hardfork activates.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if you have upgraded to v0.13.0 prior to the\nhardfork block number."),(0,o.kt)("li",{parentName:"ol"},"No points if you did not upgrade in time.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Please submit your ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}u.isMDXComponent=!0}}]);