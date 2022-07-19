"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2563],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3155:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={title:"Feishu",description:"Feishu Plugin\n"},l=void 0,c={unversionedId:"Plugins/feishu",id:"Plugins/feishu",title:"Feishu",description:"Feishu Plugin\n",source:"@site/docs/Plugins/feishu.md",sourceDirName:"Plugins",slug:"/Plugins/feishu",permalink:"/docs/Plugins/feishu",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/feishu.md",tags:[],version:"current",frontMatter:{title:"Feishu",description:"Feishu Plugin\n"},sidebar:"docsSidebar",previous:{title:"DBT",permalink:"/docs/Plugins/dbt"},next:{title:"Gitee(WIP)",permalink:"/docs/Plugins/gitee"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>.env</code>",id:"by-env",level:3},{value:"Collect data from Feishu",id:"collect-data-from-feishu",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Feishu meeting data through ",(0,i.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/home/user-identity-introduction/introduction"},"Feishu Openapi"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to fully use this plugin, you will need to get app_id and app_secret from a Feishu administrator (for help on App info, please see ",(0,i.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal"},"official Feishu Docs"),"),\nthen set these two parameters via Dev Lake's ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,i.kt)("h3",{id:"by-env"},"By ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")),(0,i.kt)("p",null,"The connection aspect of the configuration screen requires the following key fields to connect to the Feishu API. As Feishu is a single-source data provider at the moment, the connection name is read-only as there is only one instance to manage. As we continue our development roadmap we may enable multi-source connections for Feishu in the future."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FEISHU_APPID=app_id\nFEISHU_APPSCRECT=app_secret\n")),(0,i.kt)("h2",{id:"collect-data-from-feishu"},"Collect data from Feishu"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "feishu",\n      "options": {\n        "numOfDaysToCollect" : 80,\n        "rateLimitPerSecond" : 5\n      }\n    }\n  ]\n]\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"numOfDaysToCollect"),": The number of days you want to collect")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"rateLimitPerSecond"),": The number of requests to send(Maximum is 8)")),(0,i.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu 20211126",\n    "tasks": [[{\n      "plugin": "feishu",\n      "options": {\n        "numOfDaysToCollect" : 80,\n        "rateLimitPerSecond" : 5\n      }\n    }]]\n}\n\'\n')))}d.isMDXComponent=!0}}]);