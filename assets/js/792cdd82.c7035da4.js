"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Using Advanced Mode",sidebar_position:7,description:"Using the advanced mode of Config-UI\n"},r=void 0,l={unversionedId:"UserManuals/ConfigUI/AdvancedMode",id:"UserManuals/ConfigUI/AdvancedMode",title:"Using Advanced Mode",description:"Using the advanced mode of Config-UI\n",source:"@site/docs/UserManuals/ConfigUI/AdvancedMode.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/AdvancedMode",permalink:"/docs/UserManuals/ConfigUI/AdvancedMode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/AdvancedMode.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Using Advanced Mode",sidebar_position:7,description:"Using the advanced mode of Config-UI\n"},sidebar:"docsSidebar",previous:{title:"Configuring Tapd",permalink:"/docs/UserManuals/ConfigUI/Tapd"},next:{title:"Grafana User Guide",permalink:"/docs/UserManuals/Dashboards/GrafanaUserGuide"}},s={},d=[{value:"Why advanced mode?",id:"why-advanced-mode",level:2},{value:"How to use advanced mode to create pipelines?",id:"how-to-use-advanced-mode-to-create-pipelines",level:2},{value:"Examples",id:"examples",level:2},{value:"Editing a Blueprint (Advanced Mode)",id:"editing-a-blueprint-advanced-mode",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-advanced-mode"},"Why advanced mode?"),(0,i.kt)("p",null,"Advanced mode allows users to create any pipeline by writing JSON. This is useful for users who want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitHub/GitLab repos or Jira projects within a single pipeline"),(0,i.kt)("li",{parentName:"ol"},"Have fine-grained control over what entities to collect or what subtasks to run for each plugin"),(0,i.kt)("li",{parentName:"ol"},"Orchestrate a complex pipeline that consists of multiple stages of plugins.")),(0,i.kt)("p",null,"Advanced mode gives utmost flexibility to users by exposing the JSON API."),(0,i.kt)("h2",{id:"how-to-use-advanced-mode-to-create-pipelines"},"How to use advanced mode to create pipelines?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click on "+ New Blueprint" on the Blueprint page.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(96371).Z,width:"2746",height:"448"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'In step 1, click on the "Advanced Mode" link.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(83684).Z,width:"1450",height:"548"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The pipeline editor expects a 2D array of plugins. The first dimension represents different stages of the pipeline and the second dimension describes the plugins in each stage. Stages run in sequential order and plugins within the same stage runs in parallel. We provide some templates for users to get started. Please also see the next section for some examples.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(87850).Z,width:"1548",height:"984"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your preferred schedule. After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitLab repos sequentially.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When there're multiple collection tasks against a single data source, we recommend running these tasks sequentially since the collection speed is mostly limited by the API rate limit of the data source.\nRunning multiple tasks against the same data source is unlikely to speed up the process and may overwhelm the data source.")),(0,i.kt)("p",null,"Below is an example for collecting 2 GitLab repos sequentially. It has 2 stages, each contains a GitLab task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 15238074\n      }\n    }\n  ],\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 11624398\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Collect a GitHub repo and a Jira board in parallel")),(0,i.kt)("p",null,"Below is an example for collecting a GitHub repo and a Jira board in parallel. It has a single stage with a GitHub task and a Jira task. Since users can configure multiple Jira connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for Jira task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "github",\n      "Options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    },\n    {\n      "Plugin": "jira",\n      "Options": {\n        "connectionId": 1,\n        "boardId": 76\n      }\n    }\n  ]\n]\n')),(0,i.kt)("h2",{id:"editing-a-blueprint-advanced-mode"},"Editing a Blueprint (Advanced Mode)"),(0,i.kt)("p",null,"This section is for editing a Blueprint in the Advanced Mode. To edit in the Normal mode, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/UserManuals/ConfigUI/Tutorial#editing-a-blueprint-normal-mode"},"this guide"),"."),(0,i.kt)("p",null,"To edit a Blueprint created in the Advanced mode, you can simply go the Settings page of that Blueprint and click on Edit JSON to edit its configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(16551).Z,width:"2746",height:"774"})))}p.isMDXComponent=!0},96371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode1-b57f41fff7e23f19c2af911e2adaddcf.png"},83684:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode2-3dd7ce37847a5d866cad6d9a45779830.png"},87850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AdvancedMode3-303a06ebfeed1ba23b72ecd1562129c0.png"},16551:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprint-edit2-1e7d0a03cb1dad49eeed746f6e63e2b9.png"}}]);