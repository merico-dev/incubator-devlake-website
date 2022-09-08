"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},r=void 0,l={unversionedId:"UserManuals/ConfigUI/Tutorial",id:"version-v0.13/UserManuals/ConfigUI/Tutorial",title:"Tutorial",description:"Config UI instruction",source:"@site/versioned_docs/version-v0.13/UserManuals/ConfigUI/Tutorial.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Tutorial",permalink:"/docs/v0.13/UserManuals/ConfigUI/Tutorial",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/UserManuals/ConfigUI/Tutorial.md",tags:[],version:"v0.13",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},sidebar:"docsSidebar",previous:{title:"User Manuals",permalink:"/docs/v0.13/UserManuals"},next:{title:"Configuring GitHub",permalink:"/docs/v0.13/UserManuals/ConfigUI/GitHub"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating a Blueprint",id:"creating-a-blueprint",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1 - Adding Data Connections",id:"step-1---adding-data-connections",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Step 3 - Adding Transformation (Optional)",id:"step-3---adding-transformation-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Editing a Blueprint (Normal Mode)",id:"editing-a-blueprint-normal-mode",level:2},{value:"Creating and Managing Data Connections",id:"creating-and-managing-data-connections",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache DevLake Config UI allows you to configure the data you wish to collect through a graphical user interface. Visit config-ui at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,i.kt)("h2",{id:"creating-a-blueprint"},"Creating a Blueprint"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Blueprint is the plan that covers all the work to get your raw data ready for query and metric computaion in the dashboards. We have designed the Blueprint to help you with data collection within only one workflow. Creating a Blueprint consists of four steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding Data Connections: Add new or select from existing data connections for the data you wish to collect"),(0,i.kt)("li",{parentName:"ol"},"Setting Data Scope: Select the scope of data (e.g. GitHub projects or Jira boards) for your data connections"),(0,i.kt)("li",{parentName:"ol"},"Adding Transformation (Optional): Add transformation rules for the data scope you have selected in order to view corresponding metrics"),(0,i.kt)("li",{parentName:"ol"},"Setting Sync Frequency: Set up a schedule for how often you wish your data to be synced")),(0,i.kt)("h3",{id:"step-1---adding-data-connections"},"Step 1 - Adding Data Connections"),(0,i.kt)("p",null,"There are two ways to add data connections to your Blueprint: adding them during the creation of a Blueprint and adding them separately on the Data Integrations page. There is no difference between these two ways."),(0,i.kt)("p",null,"When adding data connections from the Blueprint, you can either create a new or select from an exisitng data connections. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(34721).Z,width:"1640",height:"1358"})),(0,i.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,i.kt)("p",null,'After adding data connections, click on "Next Step" and you will be prompted to select the data scope of each data connections. For instance, for a GitHub connection, you will need to enter the projects you wish to sync and for Jira, you will need to select the boards.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(73050).Z,width:"1606",height:"1200"})),(0,i.kt)("h3",{id:"step-3---adding-transformation-optional"},"Step 3 - Adding Transformation (Optional)"),(0,i.kt)("p",null,"This step is only required for viewing certain metrics in the pre-built dashboards that require data transformation. Without adding transformation rules, you can still view the basic metrics. "),(0,i.kt)("p",null,"Currently, DevLake only supports transformation for GitHub and Jira connections."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(35843).Z,width:"1564",height:"1710"})),(0,i.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,i.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,i.kt)("p",null,"After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(88375).Z,width:"1550",height:"1228"})),(0,i.kt)("h2",{id:"editing-a-blueprint-normal-mode"},"Editing a Blueprint (Normal Mode)"),(0,i.kt)("p",null,"On the Blueprint list page, clicking on any Blueprint will lead you to the detail page of the blueprint. If you switch to the Settings tab on the detail page, you can see the settings of your Blueprint and edit parts of it seperately."),(0,i.kt)("p",null,"In the current version, the Blueprint editing feature ",(0,i.kt)("strong",{parentName:"p"},"allows")," editing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Blueprint's name"),(0,i.kt)("li",{parentName:"ul"},"The sync frequency"),(0,i.kt)("li",{parentName:"ul"},"The data scope of a connection"),(0,i.kt)("li",{parentName:"ul"},"The data entities of the data scope"),(0,i.kt)("li",{parentName:"ul"},"The transformation rules of any data scope")),(0,i.kt)("p",null,"and does ",(0,i.kt)("strong",{parentName:"p"},"NOT allow"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding or deleting connections to an existing blueprint (will be available in the future)"),(0,i.kt)("li",{parentName:"ul"},"Editing any connections")),(0,i.kt)("p",null,"Please note: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The connections of some data sources, such as Jenkins, do not have an editing button, because their configuration do not contain data scope, data entities and/or transformation."),(0,i.kt)("li",{parentName:"ol"},"If you have created the Blueprint in the Normal mode, you will only be able to edit it in the Normal Mode; if you have created it in the Advanced Mode, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.13/UserManuals/ConfigUI/AdvancedMode#editing-a-blueprint-advanced-mode"},"this guide")," for editing.")),(0,i.kt)("p",null,"The Settings page for editing Blueprints:\n",(0,i.kt)("img",{alt:"img",src:n(71918).Z,width:"2734",height:"976"})),(0,i.kt)("h2",{id:"creating-and-managing-data-connections"},"Creating and Managing Data Connections"),(0,i.kt)("p",null,"The Data Connections page allows you to view, create and manage all your data connections at one place."))}u.isMDXComponent=!0},34721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step1-bd057b694f2c886dff96b5bdf67dc635.png"},73050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step2-37b57efc9ce0941bb7fc509850ad0563.png"},35843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step3-d2a88fb4c754e779e15b8cce67418184.png"},88375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step4-2c2373d239baf6b76fd6ded6b9c8b9f1.png"},71918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprint-edit1-cf9c86ce65a14488b71f8475fcebd34b.png"}}]);