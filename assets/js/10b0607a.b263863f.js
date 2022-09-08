"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9747],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return i?r.createElement(h,a(a({ref:t},u),{},{components:i})):r.createElement(h,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},74898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"Build Count",description:"Build Count\n",sidebar_position:15},a=void 0,l={unversionedId:"Metrics/BuildCount",id:"version-v0.13/Metrics/BuildCount",title:"Build Count",description:"Build Count\n",source:"@site/versioned_docs/version-v0.13/Metrics/BuildCount.md",sourceDirName:"Metrics",slug:"/Metrics/BuildCount",permalink:"/docs/v0.13/Metrics/BuildCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/BuildCount.md",tags:[],version:"v0.13",sidebarPosition:15,frontMatter:{title:"Build Count",description:"Build Count\n",sidebar_position:15},sidebar:"docsSidebar",previous:{title:"Commit Author Count",permalink:"/docs/v0.13/Metrics/CommitAuthorCount"},next:{title:"Build Duration",permalink:"/docs/v0.13/Metrics/BuildDuration"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The number of successful builds."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"As a process indicator, it reflects the value flow efficiency of upstream production and research links"),(0,n.kt)("li",{parentName:"ol"},"Identify excellent/to-be-improved practices that impact the build, and drive the team to precipitate reusable tools and mechanisms to build infrastructure for fast and high-frequency delivery")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jenkins")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by counting the number of successful CI builds/pipelines/runs in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on CI builds/pipelines/runs collected from Jenkins, GitLab or GitHub."),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project dimension, compare the number of builds and success rate by combining the project phase and the complexity of tasks."),(0,n.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of builds and success rate to see if it has improved over time.")))}d.isMDXComponent=!0}}]);