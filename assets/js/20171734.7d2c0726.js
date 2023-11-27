"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[56348],{62679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=a(87462),i=(a(67294),a(3905));a(61839);const n={title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},r=void 0,l={unversionedId:"Configuration/Tutorial",id:"version-v0.20/Configuration/Tutorial",title:"Tutorial",description:"Config UI instruction",source:"@site/versioned_docs/version-v0.20/Configuration/Tutorial.md",sourceDirName:"Configuration",slug:"/Configuration/Tutorial",permalink:"/docs/v0.20/Configuration/Tutorial",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Configuration/Tutorial.md",tags:[],version:"v0.20",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},sidebar:"docsSidebar",previous:{title:"Config UI",permalink:"/docs/v0.20/Config UI"},next:{title:"BitBucket Cloud",permalink:"/docs/v0.20/Configuration/BitBucket"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Create a Project",id:"create-a-project",level:2},{value:"Create a Blueprint",id:"create-a-blueprint",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Step 2 - Set Data Scope",id:"step-2---set-data-scope",level:3},{value:"Step 3 - Add Transformations (Optional)",id:"step-3---add-transformations-optional",level:3},{value:"Step 4 - Set the Sync Policies",id:"step-4---set-the-sync-policies",level:3},{value:"Step 5 - Collect Data",id:"step-5---collect-data",level:3},{value:"View the Blueprint Status and Download Logs for Historical Runs",id:"view-the-blueprint-status-and-download-logs-for-historical-runs",level:3},{value:"Edit a Blueprint (Normal Mode)",id:"edit-a-blueprint-normal-mode",level:2},{value:"Create and Manage Data Connections",id:"create-and-manage-data-connections",level:2},{value:"Manage Transformations",id:"manage-transformations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache DevLake Config UI allows you to configure the data you wish to collect through a graphical user interface. Visit config-ui at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,i.kt)("h2",{id:"create-a-project"},"Create a Project"),(0,i.kt)("p",null,'Starting from v0.15, DevLake has introduced the Project feature to alllow viewing project-based metrics, such as DORA. To create a project, simply go to Project on the main navigation, click on the "+ New Project" button and fill out the info on the dialog below.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(42532).Z,width:"1724",height:"626"})),(0,i.kt)("h2",{id:"create-a-blueprint"},"Create a Blueprint"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Blueprint is a plan that covers all the work to get your raw data ready for query and metric computation in the dashboards. Blueprints can either be used to collect data for a Project or be used alone without being dependent on any Project. To use the Blueprint within a Project, you can create the Blueprint once a Project is created; to use it alone, you can create the Blueprint from the Blueprint page from the main navigation. "),(0,i.kt)("p",null,"For either usage of the Blueprint, creating it consists of four steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding Data Connections: Add new or select from existing data connections for the data you wish to collect"),(0,i.kt)("li",{parentName:"ol"},"Setting Data Scope: Select the scope of data (e.g. GitHub projects or Jira boards) for your data connections"),(0,i.kt)("li",{parentName:"ol"},"Adding Transformations (Optional): Add transformation rules for the data scope you have selected in order to view corresponding metrics"),(0,i.kt)("li",{parentName:"ol"},"Setting the Sync Policies: Set the sync frequency, time range and the skip-on-fail option for your data")),(0,i.kt)("p",null,"For detailed instructions of each data source, please go to their individual configuration docs from the sidebar."),(0,i.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,i.kt)("p",null,"There are two ways to add data connections to your Blueprint: adding them during the creation of a Blueprint and adding them separately on the Data Integrations page. There is no difference between these two ways."),(0,i.kt)("p",null,"When adding data connections from the Blueprint, you can either create a new or select from existing data connections. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(40067).Z,width:"1890",height:"1106"})),(0,i.kt)("h3",{id:"step-2---set-data-scope"},"Step 2 - Set Data Scope"),(0,i.kt)("p",null,'After adding data connections, click on "Next Step" and you will be prompted to select the data scope of each data connection. For instance, for a GitHub connection, you will need to select or enter the projects you wish to sync, and for Jira, you will need to select from your boards.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(27005).Z,width:"1888",height:"426"}),"\n",(0,i.kt)("img",{alt:"img",src:a(71274).Z,width:"1872",height:"1541"})),(0,i.kt)("h3",{id:"step-3---add-transformations-optional"},"Step 3 - Add Transformations (Optional)"),(0,i.kt)("p",null,"This step is required for viewing certain metrics (e.g. Bug Age, Bug Count per 1k Lines of Code and DORA)in the pre-built dashboards that require data transformation. We highly recommend adding Transformations for your data for the best display of the metrics. but you can still view the basic metrics if you skip this step. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-add-transformation-rules-list",src:a(66231).Z,width:"2418",height:"506"}),"\n",(0,i.kt)("img",{alt:"github-add-transformation-rules",src:a(93650).Z,width:"973",height:"1292"})),(0,i.kt)("h3",{id:"step-4---set-the-sync-policies"},"Step 4 - Set the Sync Policies"),(0,i.kt)("p",null,"Time Filter: You can select the time range of the data you wish to sync to speed up the collection process."),(0,i.kt)("p",null,"Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your preferred schedule. "),(0,i.kt)("p",null,"Running Policy: By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip failed tasks")," is checked to avoid losing all data when encountering a few bugs during data collection, when you are collecting a large volume of data, e.g. 10+ GitHub repositories, Jira boards, etc. For clarity, a task is a unit of a pipeline, an execution of a blueprint. By default, when a task is failed, the whole pipeline will fail and all the data that has been collected will be discarded. By skipping failed tasks, the pipeline will continue to run, and the data collected by successful tasks will not be affected. After the pipeline is finished, you can rerun these failed tasks on the blueprint's detail page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(79991).Z,width:"1890",height:"1410"})),(0,i.kt)("h3",{id:"step-5---collect-data"},"Step 5 - Collect Data"),(0,i.kt)("p",null,"Upon completing the blueprint configuration, you can proceed to the 'Status' tab to initiate data collection in DevLake. There are three available modes for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collect Data (Default): This mode collects data within the configured time range. Tools and entities that support incremental refresh will utilize this method, while those that only support full refresh will perform a full refresh. This mode is the default for recurring pipelines."),(0,i.kt)("li",{parentName:"ul"},"Collect Data in Full Refresh Mode: In this mode, all existing data within the configured time range will be deleted and re-collected. It is useful for removing outdated or irrelevant data from DevLake that no longer exists in the original tools."),(0,i.kt)("li",{parentName:"ul"},"Re-transform Data: This mode does not collect new data but instead applies the latest transformation rules from the Scope Config to the existing data.")),(0,i.kt)("h3",{id:"view-the-blueprint-status-and-download-logs-for-historical-runs"},"View the Blueprint Status and Download Logs for Historical Runs"),(0,i.kt)("p",null,"After setting up the Blueprint, you will be prompted to the Blueprint's status page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page."),(0,i.kt)("p",null,"If you run into any errors, you can also download the pipeline logs and share them with us on Slack so that our developers can help you debug."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(15898).Z,width:"1755",height:"835"})),(0,i.kt)("h2",{id:"edit-a-blueprint-normal-mode"},"Edit a Blueprint (Normal Mode)"),(0,i.kt)("p",null,"If you switch to the Configuration tab on the Blueprint detail page, you can see the settings of your Blueprint and edit them."),(0,i.kt)("p",null,"In the current version, the Blueprint editing feature ",(0,i.kt)("strong",{parentName:"p"},"allows")," editing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Blueprint's name"),(0,i.kt)("li",{parentName:"ul"},"The sync policies"),(0,i.kt)("li",{parentName:"ul"},"The data scope of a connection"),(0,i.kt)("li",{parentName:"ul"},"The data entities of the data scope"),(0,i.kt)("li",{parentName:"ul"},"The transformation rules of any data scope"),(0,i.kt)("li",{parentName:"ul"},"Editing any connections")),(0,i.kt)("p",null,"Please note:\nIf you have created the Blueprint in the Normal mode, you will only be able to edit it in the Normal Mode; if you have created it in the Advanced Mode, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.20/Configuration/AdvancedMode#editing-a-blueprint-advanced-mode"},"this guide")," for editing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(71918).Z,width:"2734",height:"976"})),(0,i.kt)("h2",{id:"create-and-manage-data-connections"},"Create and Manage Data Connections"),(0,i.kt)("p",null,"The Data Connections page allows you to view, create and manage all your data connections in one place.\n",(0,i.kt)("img",{alt:"img",src:a(78889).Z,width:"1862",height:"778"})),(0,i.kt)("h2",{id:"manage-transformations"},"Manage Transformations"),(0,i.kt)("p",null,"The Transformations page allows you to manage all your transformation rules.\n",(0,i.kt)("img",{alt:"img",src:a(28885).Z,width:"1890",height:"858"})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.20/Troubleshooting/Configuration"},"Troubleshooting"),", contact us on ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/devlake-io/shared_invite/zt-17b6vuvps-x98pqseoUagM7EAmKC82xQ"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue"),"."))}u.isMDXComponent=!0},78889:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/connections-5fe94a4e1047ade9d4750013ea9f4ff1.png"},42532:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/project-152575da22e9f2804ec4efaea2b7c36b.png"},40067:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/step1-6ff7f3e6be38900da58a770e83dc063a.png"},27005:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/step2-1-de5b6d5d0e3accbb344fefcbfe7bcb49.png"},71274:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/step2-2-2432c93e2ed7ebcab11566dac2fd0d3e.png"},79991:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/step4-c72d1f32564691527fb19084dc552431.png"},28885:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/transformations-b2d37592de9892fdae773546c1426d14.png"},71918:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/blueprint-edit1-cf9c86ce65a14488b71f8475fcebd34b.png"},15898:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/blueprint-edit3-beff0ecb765048a9a008d2b06c0c268a.png"},66231:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/github-set-transformation1-9c44ad103df89500803353df4eda2ca0.png"},93650:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/github-set-transformation2-8a84153828bfed36f4089019c8059db9.png"}}]);