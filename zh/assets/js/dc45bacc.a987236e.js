"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[14975],{21286:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=o(87462),a=(o(67294),o(3905));o(61839);const i={title:"Azure DevOps",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},s=void 0,c={unversionedId:"Configuration/AzureDevOps",id:"version-v0.21/Configuration/AzureDevOps",title:"Azure DevOps",description:"Config UI instruction for Azure DevOps",source:"@site/versioned_docs/version-v0.21/Configuration/AzureDevOps.md",sourceDirName:"Configuration",slug:"/Configuration/AzureDevOps",permalink:"/zh/docs/v0.21/Configuration/AzureDevOps",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Configuration/AzureDevOps.md",tags:[],version:"v0.21",sidebarPosition:5,frontMatter:{title:"Azure DevOps",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},sidebar:"docsSidebar",previous:{title:"How to Organize DevLake Projects",permalink:"/zh/docs/v0.21/Configuration/HowToOrganizeDevlakeProjects"},next:{title:"BitBucket Cloud",permalink:"/zh/docs/v0.21/Configuration/BitBucket"}},l={},r=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Token",id:"token",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Select repositories",id:"select-repositories",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 1.3 - Add Scope Config (Optional)",id:"step-13---add-scope-config-optional",level:3},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a Azure DevOps Connection",id:"step-22---add-a-azure-devops-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:r};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,"On the Connections page, you can select GitHub and create a new connection or it."),(0,a.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azuredevops-create-a-connection",src:o(61111).Z,width:"3056",height:"1746"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h4",{id:"token"},"Token"),(0,a.kt)("p",null,"Paste your Azure DevOps personal access token (PAT) here. Check ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat"},"Azure's official doc"),' on how to create a PAT.\nMake sure that the Organization field is set to "All accessible organizations" when creating the PAT.'),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azuredevops-set-data-scope",src:o(98728).Z,width:"3044",height:"1772"})),(0,a.kt)("h4",{id:"select-repositories"},"Select repositories"),(0,a.kt)("p",null,"Select the repositories you want to collect data from."),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Azure DevOps supports the following data entities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CI/CD: builds and jobs."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: repositories and their commits."),(0,a.kt)("li",{parentName:"ul"},"Code Review: pull requests and their commits.")),(0,a.kt)("h3",{id:"step-13---add-scope-config-optional"},"Step 1.3 - Add Scope Config (Optional)"),(0,a.kt)("p",null,"Scope config contains two parts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect: Usually, you don't have to modify this part. However, if you don't want to collect certain Azure DevOps entities, you can unselect some entities to accelerate the collection speed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Source Code Management: Azure repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: Azure PRs, PR comments and reviews, etc."),(0,a.kt)("li",{parentName:"ul"},"CI/CD: Azure pipelines, jobs, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Azure accounts, etc."))),(0,a.kt)("li",{parentName:"ul"},"The transformations on the Azure DevOps data you are going to collect. ")),(0,a.kt)("p",null,"The transformations are mainly used for calculating ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/DORA"},"DORA metrics"),", so DevLake needs to know what are ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments")," in your Azure Pipelines. You can configure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Regex for `Deployments`: Azure DevOps pipeline or one of its jobs whose names match this regex will be registered as deployments in DevLake\n- Regex for `Production` environment: Azure DevOps pipeline or one of its jobs whose names match this regex will be considered as a PRODUCTION deployment.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azuredevops-set-transformation",src:o(43081).Z,width:"1041",height:"618"})),(0,a.kt)("p",null,"The additional settings for transformations are RefDiff options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tags Limit: the number of tags to compare."),(0,a.kt)("li",{parentName:"ul"},"Tags Pattern: Only tags that match the given regex are taken into account.")),(0,a.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,a.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,a.kt)("p",null,"Collecting Azure DevOps data requires creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-a-project",src:o(41537).Z,width:"1624",height:"684"})),(0,a.kt)("h3",{id:"step-22---add-a-azure-devops-connection"},"Step 2.2 - Add a Azure DevOps Connection"),(0,a.kt)("p",null,"You can add a previously configured GitLab connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the repositories you are looking for, please check if you have added them to the connection first."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add-a-connection",src:o(19562).Z,width:"2394",height:"624"})),(0,a.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,a.kt)("p",null,"There are three settings for Sync Policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,a.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your prefered schedule."),(0,a.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-policy",src:o(39529).Z,width:"2428",height:"336"})),(0,a.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,a.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,a.kt)("img",{alt:"collect-data",src:o(36418).Z,width:"2410",height:"664"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},19562:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},61111:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/azuredevops-create-a-connection-3a4ecfc90ce12c5dacdb74f3f95df19f.png"},98728:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/azuredevops-set-data-scope-30fe830036ca8fdccf9f3b7aa7aa89c0.png"},43081:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/azuredevops-set-transformation-b3f9875cb18eebec8b2c1e2490d20b3d.png"},36418:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},41537:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},39529:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"}}]);