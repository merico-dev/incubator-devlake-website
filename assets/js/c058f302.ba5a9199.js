"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Jira",description:"Jira Plugin\n"},o=void 0,l={unversionedId:"Plugins/jira",id:"version-v0.12/Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/versioned_docs/version-v0.12/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/docs/v0.12/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/Plugins/jira.md",tags:[],version:"v0.12",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/docs/v0.12/Plugins/jenkins"},next:{title:"RefDiff",permalink:"/docs/v0.12/Plugins/refdiff"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Project Metrics This Covers",id:"project-metrics-this-covers",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From JIRA",id:"collect-data-from-jira",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Jira data through Jira Cloud REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,a.kt)("img",{width:"2035",alt:"jira metric display",src:"https://user-images.githubusercontent.com/2908155/132926143-7a31d37f-22e1-487d-92a3-cf62e402e5a8.png"}),(0,a.kt)("h2",{id:"project-metrics-this-covers"},"Project Metrics This Covers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Requirement Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Requirement"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Requirement Lead Time"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Requirement"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Requirement Delivery Rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ratio of delivered requirements to all requirements")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Requirement Granularity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of story points associated with an issue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bug Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Bug"',(0,a.kt)("br",null),(0,a.kt)("i",null,"bugs are found during testing"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bug Age"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Bug"',(0,a.kt)("br",null),(0,a.kt)("i",null,"both new and deleted lines count"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bugs Count per 1k Lines of Code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Amount of bugs per 1000 lines of code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incident Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Incident"',(0,a.kt)("br",null),(0,a.kt)("i",null,"incidents are found when running in production"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incident Age"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Incident"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incident Count per 1k Lines of Code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Amount of incidents per 1000 lines of code")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuring Jira via ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.12/UserManuals/ConfigUI/Jira"},"config-ui"),"."),(0,a.kt)("h2",{id:"collect-data-from-jira"},"Collect Data From JIRA"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "plugin": "jira",\n      "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "since": "2006-01-02T15:04:05Z"\n      }\n    }\n  ]\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,a.kt)("strong",{parentName:"li"},"JIRA Integration")," page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boardId"),': JIRA board id, see "Find Board Id" for details.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"since"),": optional, download data since a specified date only.")))}p.isMDXComponent=!0}}]);