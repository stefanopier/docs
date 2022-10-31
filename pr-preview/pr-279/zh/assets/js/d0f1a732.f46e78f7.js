"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},l="Quantum Gravity Bridge",i={unversionedId:"nodes/qgb",id:"nodes/qgb",title:"Quantum Gravity Bridge",description:"The Quantum Gravity Bridge, covered previously in the Celestia blog post",source:"@site/docs/nodes/qgb.md",sourceDirName:"nodes",slug:"/nodes/qgb",permalink:"/pr-preview/pr-279/zh/nodes/qgb",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Validator Node",permalink:"/pr-preview/pr-279/zh/nodes/validator-node"},next:{title:"Consensus Full Node",permalink:"/pr-preview/pr-279/zh/nodes/consensus-full-node"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Setting Up the QGB",id:"setting-up-the-qgb",level:2},{value:"Validator QGB Flags",id:"validator-qgb-flags",level:3},{value:"Starting the Orchestrator",id:"starting-the-orchestrator",level:3},{value:"Using the Relayer to Deploy the QGB Smart Contract",id:"using-the-relayer-to-deploy-the-qgb-smart-contract",level:3},{value:"Run the Relayer",id:"run-the-relayer",level:3}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quantum-gravity-bridge"},"Quantum Gravity Bridge"),(0,n.kt)("p",null,"The Quantum Gravity Bridge, covered previously in the Celestia blog post\nfound ",(0,n.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestiums/"},"here"),", introduces the concept\nof a Celestium, which is an EVM L2 rollup that uses Celestia for data availability\nbut settles on Ethereum (or any other EVM L1 chain)."),(0,n.kt)("p",null,"This tutorial goes over the Quantum Gravity Bridge and how Validators on Celestia\ncan enable and run it."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Quantum Gravity Bridge (will be referred as QGB for the remainder of this article),\nconsists of two components: an Orchestrator and a Relayer."),(0,n.kt)("p",null,"In the following diagram, we show how a celestium would post the data to\nCelestia while the Celestia Validators attest to transactions in a one-way bridge\nconnected to an EVM L1 Layer (in this case, Ethereum). Then, the celestium will\nverify the attestations, i.e. valsets and data commitments, directly on Ethereum\non the QGB smart contract. You can reference the QGB smart contract ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/quantum-gravity-bridge/blob/master/src/QuantumGravityBridge.sol"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Architecture",src:a(2920).Z,width:"1601",height:"1166"})),(0,n.kt)("p",null,"The specification of the QGB ",(0,n.kt)("inlineCode",{parentName:"p"},"Valset"),"s, which track the Celestia validator set\nchanges, can be found in this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-002-qgb-valset.md"},"ADR"),"."),(0,n.kt)("p",null,"The QGB data commitments, which represent commitments over sets of blocks\ndefined by a data commitment window, are discussed more in-depth in this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-003-qgb-data-commitments.md"},"ADR"),"."),(0,n.kt)("p",null,"The Orchestrator is part of the Validator setup and works as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Celestia App: creates an attestation on the state machine level that needs to\nbe signed"),(0,n.kt)("li",{parentName:"ul"},"The Orchestrator: queries the attestation, signs it, then submits the signature\nback to Celestia App")),(0,n.kt)("p",null,"The diagram below goes over this process."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Orchestrator",src:a(3641).Z,width:"1218",height:"919"})),(0,n.kt)("p",null,"The Relayer deploys the QGB smart contract first to the EVM L1 chain (if it is\nnot deployed before) and then relays the attestations from Celestia App to the\nEVM L1 Chain."),(0,n.kt)("p",null,"The diagram below goes over this process."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGB-Relayer",src:a(3704).Z,width:"1965",height:"438"})),(0,n.kt)("p",null,"You can learn more about the mechanics behind the Relayer in this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-004-qgb-relayer-security.md"},"ADR"),"."),(0,n.kt)("h2",{id:"setting-up-the-qgb"},"Setting Up the QGB"),(0,n.kt)("p",null,"The following section presumes you have the following setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Celestia App ",(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-279/zh/nodes/validator-node"},"Validator")," running"),(0,n.kt)("li",{parentName:"ul"},"A Celestia Node - ",(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-279/zh/nodes/bridge-node"},"Bridge Node")," running")),(0,n.kt)("h3",{id:"validator-qgb-flags"},"Validator QGB Flags"),(0,n.kt)("p",null,"Make sure that your validator has already the correct Orchestrator address\nand EVM address. These can be specified when creating a new Validator, or\nediting an existing one, using the following flags:\n",(0,n.kt)("inlineCode",{parentName:"p"},"--orchestrator-address")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--evm-address"),"."),(0,n.kt)("p",null,"So, your setup for your Validator node should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd tx staking create-validator \\\n    --orchestrator-address="<orch_address>" \\\n    --evm-address="<evm_address>" \\\n    ... (other validator creation flags)\n')),(0,n.kt)("p",null,"Here, your ",(0,n.kt)("inlineCode",{parentName:"p"},"orchestrator-address")," can be your Validator address but we recommend\ngenerating a new Celestia address for the orchestrator."),(0,n.kt)("p",null,"Your EVM address can be generated with Metamask or any other EVM key generation\ntools in order to get the public address, in hex format, that stars with ",(0,n.kt)("inlineCode",{parentName:"p"},"0x"),"."),(0,n.kt)("h3",{id:"starting-the-orchestrator"},"Starting the Orchestrator"),(0,n.kt)("p",null,"With your celestia-app Validator running in one Terminal session, open a new\nTerminal session in order to run the Orchestrator."),(0,n.kt)("p",null,"You can run the following command to start the Orchestrator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd orchestrator -x "mocha" -d <EVM-PRIVATE-KEY> --keyring-account validator --keyring-backend=test\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-x")," flag references the chain-id of the Celestia network. Here, we are\nconnecting it to Mocha Testnet so we are using ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha"),".  "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-d")," flag refers to your EVM Private Key that will be used to sign the\ntransactions."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"keyring-account")," refers to the validator key name on Celestia."),(0,n.kt)("p",null,"Running the orchestrator command above will show logs like the following\noutput:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SHOW LOGS\n")),(0,n.kt)("p",null,"With that, you have started the orchestrator! Now, let's move on to the Relayer."),(0,n.kt)("p",null,"PS: Validators don't need to run relayers or deploy the QGB smart contract.\nThey can, but it is not a must."),(0,n.kt)("h3",{id:"using-the-relayer-to-deploy-the-qgb-smart-contract"},"Using the Relayer to Deploy the QGB Smart Contract"),(0,n.kt)("p",null,"Open a new terminal session in order to deploy the QGB Smart Contract."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: This step is necessary if no QGB Smart Contract is deployed on an EVM\nChain. Here, we are deploying to the Ethereum Sepolia Testnet.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd deploy -x "test" -d <EVM-PRIVATE-KEY> -e https://rpc.sepolia.org -z 11155111\n')),(0,n.kt)("p",null,"For this to work, you will need Sepolia tokens on your EVM address you generated\nearlier. You can use the Sepolia Faucet to get Sepolia tokens ",(0,n.kt)("a",{parentName:"p",href:"https://sepolia-faucet.pk910.de/"},"here"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-e")," flag references the RPC endpoint for Sepolia in order to connect to it."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-z")," flag references the Chain ID of Sepolia."),(0,n.kt)("p",null,"When you run the command, you should get the following output that indicates\nthe QGB Smart Contract has been deployed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SHOW LOGS\n")),(0,n.kt)("p",null,"The logs will show you both the smart contract address for the deployed QGB\nsmart contract on Sepolia as well as the transaction hash. You can use the\nSepolia explorer to view the contract address ",(0,n.kt)("a",{parentName:"p",href:"https://sepolia.etherscan.io/"},"here"),"."),(0,n.kt)("p",null,"With that, you have successfully deployed the QGB Smart Contract. Let's now\nrun the Relayer."),(0,n.kt)("h3",{id:"run-the-relayer"},"Run the Relayer"),(0,n.kt)("p",null,"You can run the relayer in a separate terminal session with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd relayer -a <QGB-CONTRACT-ADDRESS> -d <EVM-PRIVATE-KEY> -e https://rpc.sepolia.org -z 11155111  -l 25000000\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-a")," flag must be the QGB smart contract address that you received in the output\nwhen you deployed the smart contract in the previous section."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-l")," flag refers to the gas limit being set for the Relayer."),(0,n.kt)("p",null,"Running the command will give you the following output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SHOW LOG\n")),(0,n.kt)("p",null,"With that, the QGB for your Validator is running. You can check the smart contract\naddress on Sepolia Block Explorer to view the attestations being submitted to the\nsmart contract."))}h.isMDXComponent=!0},2920:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/qgb-diagram-5feed6e89772e00060788a1b3f360170.png"},3641:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/qgb-orchestrator-110f743c35d3923e7d76b58c387a7ced.png"},3704:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/qgb-relayer-da55441fef306ee53cea4a420cff9c41.png"}}]);