"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Gitee(WIP)",description:"Gitee Plugin\n"},s=void 0,p={unversionedId:"Plugins/gitee",id:"version-v0.11.0/Plugins/gitee",title:"Gitee(WIP)",description:"Gitee Plugin\n",source:"@site/versioned_docs/version-v0.11.0/Plugins/gitee.md",sourceDirName:"Plugins",slug:"/Plugins/gitee",permalink:"/zh/docs/v0.11.0/Plugins/gitee",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11.0/Plugins/gitee.md",tags:[],version:"v0.11.0",frontMatter:{title:"Gitee(WIP)",description:"Gitee Plugin\n"},sidebar:"docsSidebar",previous:{title:"Feishu",permalink:"/zh/docs/v0.11.0/Plugins/feishu"},next:{title:"GitExtractor",permalink:"/zh/docs/v0.11.0/Plugins/gitextractor"}},u={},c=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Provider (Datasource) Connection",id:"provider-datasource-connection",level:3},{value:"Provider (Datasource) Settings",id:"provider-datasource-settings",level:3},{value:"Regular Expression Configuration",id:"regular-expression-configuration",level:3},{value:"Sample Request",id:"sample-request",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"provider-datasource-connection"},"Provider (Datasource) Connection"),(0,a.kt)("p",null,"The connection aspect of the configuration screen requires the following key fields to connect to the ",(0,a.kt)("strong",{parentName:"p"},"Gitee API"),". As gitee is a ",(0,a.kt)("em",{parentName:"p"},"single-source data provider")," at the moment, the connection name is read-only as there is only one instance to manage. As we continue our development roadmap we may enable ",(0,a.kt)("em",{parentName:"p"},"multi-source")," connections for gitee in the future."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection Name")," ","[",(0,a.kt)("inlineCode",{parentName:"li"},"READONLY"),"]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u26a0\ufe0f Defaults to "',(0,a.kt)("strong",{parentName:"li"},"Gitee"),'" and may not be changed.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint URL")," (REST URL, starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"http://"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This should be a valid REST API Endpoint eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://gitee.com/api/v5/")),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f URL should end with",(0,a.kt)("inlineCode",{parentName:"li"},"/")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auth Token(s)")," (Personal Access Token)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For help on ",(0,a.kt)("strong",{parentName:"li"},"Creating a personal access token")),(0,a.kt)("li",{parentName:"ul"},"Provide at least one token for Authentication with the . This field accepts a comma-separated list of values for multiple tokens. The data collection will take longer for gitee since they have a ",(0,a.kt)("strong",{parentName:"li"},"rate limit of 2k requests per hour"),". You can accelerate the process by configuring ",(0,a.kt)("em",{parentName:"li"},"multiple")," personal access tokens.")))),(0,a.kt)("p",null,'"For API requests using ',(0,a.kt)("inlineCode",{parentName:"p"},"Basic Authentication")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth")),(0,a.kt)("p",null,"If you have a need for more api rate limits, you can set many tokens in the config file and we will use all of your tokens."),(0,a.kt)("p",null,"For an overview of the ",(0,a.kt)("strong",{parentName:"p"},"gitee REST API"),", please see official ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/api/v5/swagger"},"gitee Docs on REST")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Connection")," to update connection settings."),(0,a.kt)("h3",{id:"provider-datasource-settings"},"Provider (Datasource) Settings"),(0,a.kt)("p",null,"Manage additional settings and options for the gitee Datasource Provider. Currently there is only one ",(0,a.kt)("strong",{parentName:"p"},"optional")," setting, ",(0,a.kt)("em",{parentName:"p"},"Proxy URL"),". If you are behind a corporate firewall or VPN you may need to utilize a proxy server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"gitee Proxy URL ","[ ",(0,a.kt)("inlineCode",{parentName:"strong"},"Optional"),"]"),"\nEnter a valid proxy server address on your Network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Settings")," to update additional settings."),(0,a.kt)("h3",{id:"regular-expression-configuration"},"Regular Expression Configuration"),(0,a.kt)("p",null,"Define regex pattern in .env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GITEE_PR_BODY_CLOSE_PATTERN: Define key word to associate issue in pr body, please check the example in .env.example")),(0,a.kt)("h2",{id:"sample-request"},"Sample Request"),(0,a.kt)("p",null,"In order to collect data, you have to compose a JSON looks like following one, and send it by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure-UI Mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,a.kt)("p",null,"and if you want to perform certain subtasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n      "options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Curl Mode:\nYou can also trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"li"},"/pipelines"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "tasks": [[{\n        "plugin": "gitee",\n        "options": {\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')),(0,a.kt)("p",null,"and if you want to perform certain subtasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "tasks": [[{\n        "plugin": "gitee",\n        "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n        "options": {\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')))}d.isMDXComponent=!0}}]);