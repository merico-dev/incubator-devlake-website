"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"DORA - Change Failure Rate(WIP)",description:"DORA - Change Failure Rate\n",sidebar_position:21},l=void 0,o={unversionedId:"Metrics/CFR",id:"Metrics/CFR",title:"DORA - Change Failure Rate(WIP)",description:"DORA - Change Failure Rate\n",source:"@site/docs/Metrics/CFR.md",sourceDirName:"Metrics",slug:"/Metrics/CFR",permalink:"/docs/Metrics/CFR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CFR.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"DORA - Change Failure Rate(WIP)",description:"DORA - Change Failure Rate\n",sidebar_position:21},sidebar:"docsSidebar",previous:{title:"DORA - Mean Time to Restore Service",permalink:"/docs/Metrics/MTTR"},next:{title:"Data Models",permalink:"/docs/DataModels"}},s={},u=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The percentage of changes that were made to a code that then resulted in incidents, rollbacks, or any type of production failure."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"Unlike Deployment Frequency and Lead Time for Changes that measure the throughput, Change Failure Rate measures the stability and quality of software delivery. A low CFR reflects a bad end-user experience as the production failure is relatively high."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"The number of failures per the number of deployments. For example, if there are five deployments in a day and one causes a failure, that is a 20% change failure rate."),(0,a.kt)("p",null,"As you can see, there is not much distinction between performance benchmarks for CFR:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"0%-15%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%")))),(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google"),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,a.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Bug or Service Monitoring tools such as PagerDuty, Sentry, etc."),(0,a.kt)("li",{parentName:"ul"},"CI pipelines that marked the 'failed' deployments.")))),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,a.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add unit tests for all new feature"),(0,a.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,a.kt)("li",{parentName:"ul"},"Enforce code review if it's not strictly executed")))}p.isMDXComponent=!0}}]);