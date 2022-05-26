"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9947],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5502:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"Roadmap",linkTitle:"Roadmap",tags:[],categories:[],weight:3,description:"The goals and roadmap for DevLake in 2022.\n"},u=void 0,s={unversionedId:"Overview/Roadmap",id:"Overview/Roadmap",title:"Roadmap",description:"The goals and roadmap for DevLake in 2022.\n",source:"@site/docs/01-Overview/03-Roadmap.md",sourceDirName:"01-Overview",slug:"/Overview/Roadmap",permalink:"/zh/docs/Overview/Roadmap",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/01-Overview/03-Roadmap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Roadmap",linkTitle:"Roadmap",tags:[],categories:[],weight:3,description:"The goals and roadmap for DevLake in 2022.\n"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/zh/docs/Overview/Architecture"},next:{title:"Deploy Locally",permalink:"/zh/docs/QuickStart/LocalSetup"}},d={},c=[{value:"Goals",id:"goals",level:2},{value:"Feature Breakdown",id:"feature-breakdown",level:2},{value:"How to Influence the Roadmap",id:"how-to-influence-the-roadmap",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("p",null,"DevLake has joined the Apache Incubator and is aiming to become a top-level project. To achieve this goal, the Apache DevLake (Incubating) community will continue to make efforts in helping development teams to analyze and improve their engineering productivity. In the 2022 Roadmap, we have summarized three major goals followed by the feature breakdown to invite the broader community to join us and grow together."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Investigate in the standard engineering data application by discovering and implementing 3 (or even more!) usage scenarios:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A collection of metrics to track the contribution, quality and growth of open-source projects"),(0,l.kt)("li",{parentName:"ul"},"DORA metrics for DevOps engineers"),(0,l.kt)("li",{parentName:"ul"},"To be decided (",(0,l.kt)("a",{parentName:"li",href:"https://join.slack.com/t/devlake-io/shared_invite/zt-17b6vuvps-x98pqseoUagM7EAmKC82xQ"},"let us know")," if you have any suggestions!)"))),(0,l.kt)("li",{parentName:"ol"},"Improve the data infrastructure by providing robust data collection modules, customizable data models, and data extensibility"),(0,l.kt)("li",{parentName:"ol"},"Design better user experience for end-users and contributors.")),(0,l.kt)("h2",{id:"feature-breakdown"},"Feature Breakdown"),(0,l.kt)("p",null,"Apache DevLake is currently under rapid development. You are more than welcome to use the following table to explore your intereted features and make contributions. We deeply appreciate the collective effort of our community to make this project possible!"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Goals"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal No.1 & 2"),(0,l.kt)("td",{parentName:"tr",align:null},"More data sources across different ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema"},"DevOps domains")),(0,l.kt)("td",{parentName:"tr",align:null},"Features in ",(0,l.kt)("strong",{parentName:"td"},"bold")," are of higher priority ",(0,l.kt)("br",null),(0,l.kt)("br",null)," Issue/Task Management: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Jira server")," ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/886"},"#886 (closed)")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Jira data center")," ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1687"},"#1687 (closed)")),(0,l.kt)("li",null,"GitLab Issues"),(0,l.kt)("li",null,"Trello ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1881"},"#1881 (open)")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"TAPD")," ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/560"},"#560 (closed)")),(0,l.kt)("li",null,"Teambition ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1882"},"#1882 (open)")),(0,l.kt)("li",null,"Ones ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1884"},"#1884 (open)")))," Source Code Management: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"BitBucket"),(0,l.kt)("li",null,"Gitee ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1883"},"#1883 (open)")),(0,l.kt)("li",null,"Coder"))," Code Review: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Gerrit"))," CI/CD: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"GitHub Action"),(0,l.kt)("li",null,"ArgoCI"),(0,l.kt)("li",null,"ArgoCD"),(0,l.kt)("li",null,"TeamCity")),"Quality: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"SonarQube")),(0,l.kt)("li",null,"Fossa"))," QA: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selenium"),(0,l.kt)("li",null,"Junit"),(0,l.kt)("li",null,"JMeter"),(0,l.kt)("li",null,"Cucumber Test"))," Calendar: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Google Calendar"),(0,l.kt)("li",null,"Zoom Calendar"),(0,l.kt)("li",null,"Lark Calendar"),(0,l.kt)("li",null,"Tencent Calendar"))," OSS Community Metrics: ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"GitHub stars, clones, watches")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal No.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Improved data collection, ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema"},"data models")," and data extensibility"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Collection: ",(0,l.kt)("br",null)," ",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Complete the logging system"),(0,l.kt)("li",null,"Implement a good error handling mechanism during data collection"))," Data Models:",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Introduce DBT to allow users to create and modify the domain layer schema. ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1479"},"#1479 (closed)")),(0,l.kt)("li",null,"Implement the data models for 5 new domains:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Quality"),(0,l.kt)("li",null,"Testing"),(0,l.kt)("li",null,"Calendar"),(0,l.kt)("li",null,"Documentation"),(0,l.kt)("li",null,"OSS Community Metrics"))),(0,l.kt)("li",null,"Polish the data models for ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/DataModels/DevLakeDomainLayerSchema"},"existing domains"),": Issue/Task Management, Source Code Management, Code Review and CI/CD."))," Data Extensibility: ",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Enhance the performance of data application under large-scaled usage scenarios"),(0,l.kt)("li",null,"Support OLAP databases for more flexible data storage options")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal No.3"),(0,l.kt)("td",{parentName:"tr",align:null},"Better user experience"),(0,l.kt)("td",{parentName:"tr",align:null},"For new users: ",(0,l.kt)("ol",null,(0,l.kt)("li",null," Iterate on a clearer step-by-step guide to improve the pre-configuration experience."),(0,l.kt)("li",null,"Design the new Config UI to reduce frictions for syncing data ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1700"},"#1700 (closed)")),(0,l.kt)("li",null," Showcase dashboard live demos to let users explore and learn about the dashboards. ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/1784"},"#1784 (open)"))),"For returning users: ",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Provide detailed guides to help users customize Grafana dashboards."),(0,l.kt)("li",null,"Work on the documentation for advanced features in the Config UI, such as the usage of Advancned Mode and replacements of old auth tokens for data connections.")),"Others:",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Build a website to present well-organized documentation to DevLake users and contributors. ")))))),(0,l.kt)("h2",{id:"how-to-influence-the-roadmap"},"How to Influence the Roadmap"),(0,l.kt)("p",null,"A roadmap is only useful when it captures real user needs. We are glad to hear from you if you have specific use cases, feedback, or ideas. You can submit an issue to let us know!\nAlso, if you plan to work (or are already working) on a new or existing feature, tell us, so that we can update the roadmap accordingly. We are happy to share knowledge and context to help your feature land successfully."),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null))}m.isMDXComponent=!0}}]);