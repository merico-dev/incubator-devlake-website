"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",sidebar_position:18},i=void 0,l={unversionedId:"Metrics/DeploymentFrequency",id:"Metrics/DeploymentFrequency",title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",source:"@site/docs/Metrics/DeploymentFrequency.md",sourceDirName:"Metrics",slug:"/Metrics/DeploymentFrequency",permalink:"/zh/docs/Metrics/DeploymentFrequency",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/DeploymentFrequency.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",sidebar_position:18},sidebar:"docsSidebar",previous:{title:"Build Success Rate",permalink:"/zh/docs/Metrics/BuildSuccessRate"},next:{title:"DORA - Lead Time for Changes(WIP)",permalink:"/zh/docs/Metrics/LeadTimeForChanges"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"How often an organization deploys code to production or release it to end users."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"Deployment frequency reflects the efficiency of a team's deployment. A team that deploys more frequently can deliver the product faster and users' feature requirements can be met faster."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"Deployment frequency is calculated based on the number of deployment days, not the number of deployments, e.g.,daily, weekly, monthly, yearly."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple times a day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Once a week to once a month")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Once a month to once every six months")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than once every six months")))),(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google"),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,a.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trunk development. Work in small batches and often merge their work into shared trunks."),(0,a.kt)("li",{parentName:"ul"},"Integrate CI/CD tools for automated deployment"),(0,a.kt)("li",{parentName:"ul"},"Improve automated test coverage")))}p.isMDXComponent=!0}}]);