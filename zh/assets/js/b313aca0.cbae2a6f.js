"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6452],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={title:"Gitee(WIP)",description:"Gitee Plugin\n"},a=void 0,l={unversionedId:"Plugins/gitee",id:"Plugins/gitee",title:"Gitee(WIP)",description:"Gitee Plugin\n",source:"@site/docs/Plugins/gitee.md",sourceDirName:"Plugins",slug:"/Plugins/gitee",permalink:"/zh/docs/Plugins/gitee",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/gitee.md",tags:[],version:"current",frontMatter:{title:"Gitee(WIP)",description:"Gitee Plugin\n"},sidebar:"docsSidebar",previous:{title:"Feishu",permalink:"/zh/docs/Plugins/feishu"},next:{title:"GitExtractor",permalink:"/zh/docs/Plugins/gitextractor"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect data from Gitee",id:"collect-data-from-gitee",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects ",(0,o.kt)("inlineCode",{parentName:"p"},"Gitee")," data through ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/api/v5/swagger"},"Gitee Openapi"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," on the Gitee website."),(0,o.kt)("p",null,"A connection should be created before you can collection any data. Currently, this plugin supports creating connection by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/plugins/gitee/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee",\n    "endpoint": "https://gitee.com/api/v5/",\n    "proxy": "http://localhost:1080",\n    "rateLimitPerHour": 20000,\n    "token": "<YOUR_TOKEN>"\n}\n\'\n')),(0,o.kt)("h2",{id:"collect-data-from-gitee"},"Collect data from Gitee"),(0,o.kt)("p",null,"In order to collect data, you have to compose a JSON looks like following one, and send it by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure-UI Mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("p",null,"and if you want to perform certain subtasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Curl Mode:\nYou can also trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"li"},"/pipelines"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "tasks": [[{\n        "plugin": "gitee",\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')),(0,o.kt)("p",null,"and if you want to perform certain subtasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "tasks": [[{\n        "plugin": "gitee",\n        "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')))}s.isMDXComponent=!0}}]);