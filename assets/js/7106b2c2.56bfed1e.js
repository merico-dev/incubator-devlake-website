"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:13},a=void 0,s={unversionedId:"Metrics/IncidentCountPer1kLinesOfCode",id:"Metrics/IncidentCountPer1kLinesOfCode",title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",source:"@site/docs/Metrics/IncidentCountPer1kLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/IncidentCountPer1kLinesOfCode",permalink:"/docs/Metrics/IncidentCountPer1kLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/IncidentCountPer1kLinesOfCode.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:13},sidebar:"docsSidebar",previous:{title:"PR Merge Rate",permalink:"/docs/Metrics/MergeRate"},next:{title:"Commit Author Count",permalink:"/docs/Metrics/CommitAuthorCount"}},c={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"Amount of incidents per 1,000 lines of code."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Defect drill-down analysis to inform the development of design and code review strategies and to improve the internal QA process"),(0,r.kt)("li",{parentName:"ol"},"Assist teams to locate projects/modules with higher defect severity and density, and clean up technical debts"),(0,r.kt)("li",{parentName:"ol"},"Analyze critical points, identify good/to-be-improved practices that affect defect count or defect rate, to reduce the amount of future defects")),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"The number of incidents divided by total accumulated lines of code (additions + deletions) in the given data range."),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"issues collected from Jira, GitHub or TAPD."),(0,r.kt)("li",{parentName:"ul"},"commits collected from GitHub, GitLab or BitBucket.")),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,"This metric relies on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Issue type mapping" in Jira, GitHub or TAPD\'s transformation rules page to let DevLake know what type(s) of issues can be regarded as incidents.'),(0,r.kt)("li",{parentName:"ul"},'"PR-Issue Mapping" in GitHub, GitLab\'s transformation rules page to let DevLake know the bugs are fixed by which PR/MRs.')),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the project or team dimension, observe the statistics on the total number of defects, the distribution of the number of defects in each severity level/type/owner, the cumulative trend of defects, and the change trend of the defect rate in thousands of lines, etc."),(0,r.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the statistics on the cumulative trend of the number of defects/defect rate, which can be used to determine whether the growth rate of defects is slowing down, showing a flat convergence trend, and is an important reference for judging the stability of software version quality"),(0,r.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of test defects, defect rate to locate the key items/key points"),(0,r.kt)("li",{parentName:"ol"},"Evaluate whether the software quality and test plan are reasonable by referring to CMMI standard values")))}u.isMDXComponent=!0}}]);