"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9570],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"how-DevLake-is-up-and-running",title:"How DevLake is Up and Running",authors:"Danna",tags:["devlake","apache"]},c=void 0,s={permalink:"/zh/blog/how-DevLake-is-up-and-running",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-17-How DevLake is up and running/index.md",source:"@site/blog/2022-06-17-How DevLake is up and running/index.md",title:"How DevLake is Up and Running",description:"Apache DevLake is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model.",date:"2022-06-17T00:00:00.000Z",formattedDate:"2022\u5e746\u670817\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"apache",permalink:"/zh/blog/tags/apache"}],readingTime:3.466666666666667,truncated:!0,authors:[{name:"Danna Wang",title:"DevLake Contributor",url:"https://github.com/banshengbushu",imageURL:"https://github.com/banshengbushu.png",key:"Danna"}],frontMatter:{slug:"how-DevLake-is-up-and-running",title:"How DevLake is Up and Running",authors:"Danna",tags:["devlake","apache"]},prevItem:{title:"Apache DevLake \u517c\u5bb9 PostgreSQL \u8e29\u5751\u5c0f\u7ed3",permalink:"/zh/blog/some-practices-of-supporting-postgresql"},nextItem:{title:"Apache DevLake\u4ee3\u7801\u5e93\u5bfc\u89c8",permalink:"/zh/blog/apache-devlake-codebase-walkthrough"}},u={authorsImageUrls:[void 0]},p=[{value:"Apache DevLack Architecture Overview",id:"apache-devlack-architecture-overview",level:3}],h={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model."),(0,o.kt)("h3",{id:"apache-devlack-architecture-overview"},"Apache DevLack Architecture Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The left side of the following screenshot is an ",(0,o.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"integrative DevOps data plugin"),", the existing plugins include Github, GitLab, JIRA, Jenkins, Tapd, Feishu, and the most featured analysis engine in the Simayi platform."),(0,o.kt)("li",{parentName:"ul"},"The main framework in the middle of the following screenshot, completes data collection, expansion, and conversion to the domain layer by running subtasks in the plugins. The user can trigger the tasks by config-UI or all API."),(0,o.kt)("li",{parentName:"ul"},"RMDBS currently supports Mysql and PostgresSQL, more databases will be supported in the future."),(0,o.kt)("li",{parentName:"ul"},"Grafana can generate different types of needed data by using SQL.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated",src:n(6377).Z,width:"567",height:"310"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Then let\u2019s move on to how to start running DevLake.")))}d.isMDXComponent=!0},6377:function(e,t,n){t.Z=n.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001-9fe996eee294ce1843bc3f126a1a7b89.png"}}]);