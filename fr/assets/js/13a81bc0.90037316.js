"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6904],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},a),{},{components:r})):n.createElement(f,l({ref:t},a))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6263:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:'aper\xe7u de "bonjour tout le monde" (gm world)'},l="\u2600\ufe0f Introduction",u={unversionedId:"developers/gm-world",id:"developers/gm-world",title:"\u2600\ufe0f Introduction",description:"Dans ce tutoriel, nous allons construire un rollup souverain gm world en utilisant rollmint, la disponibilit\xe9 de donn\xe9es et la couche de consensus de Celestia pour soumettre des blocs rollmint.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/gm-world.md",sourceDirName:"developers",slug:"/developers/gm-world",permalink:"/fr/developers/gm-world",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-world.md",tags:[],version:"current",frontMatter:{sidebar_label:'aper\xe7u de "bonjour tout le monde" (gm world)'},sidebar:"developers",previous:{title:"gm world",permalink:"/fr/category/gm-world"},next:{title:"Setup",permalink:"/fr/developers/gm-setup"}},c={},s=[],a={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-introduction"},"\u2600\ufe0f Introduction"),(0,o.kt)("p",null,"Dans ce tutoriel, nous allons construire un rollup souverain ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," en utilisant rollmint, la disponibilit\xe9 de donn\xe9es et la couche de consensus de Celestia pour soumettre des blocs rollmint."),(0,o.kt)("p",null,"Ce tutoriel couvrira la configuration d'un Light Node Celestia , le CLI Ignite, et la construction d'un rollup de blockchain sp\xe9cifique \xe0 l'application du Cosmos-SDK sur Celestia."),(0,o.kt)("p",null,"Le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," est une structure pour construire des applications blockchain. L'\xe9cosyst\xe8me Cosmos utilise ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"}," la Communication Inter-Blockchain (IBC en anglais)")," pour permettre aux blockchains de communiquer entre elles."))}p.isMDXComponent=!0}}]);