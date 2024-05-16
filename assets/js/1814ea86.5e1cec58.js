"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[29710],{15174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=a(87462),o=(a(67294),a(3905));a(61839);const i={title:"Azure DevOps",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},s=void 0,c={unversionedId:"Configuration/AzureDevOps",id:"version-v1.0/Configuration/AzureDevOps",title:"Azure DevOps",description:"Config UI instruction for Azure DevOps",source:"@site/versioned_docs/version-v1.0/Configuration/AzureDevOps.md",sourceDirName:"Configuration",slug:"/Configuration/AzureDevOps",permalink:"/docs/v1.0/Configuration/AzureDevOps",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Configuration/AzureDevOps.md",tags:[],version:"v1.0",sidebarPosition:5,frontMatter:{title:"Azure DevOps",sidebar_position:5,description:"Config UI instruction for Azure DevOps"},sidebar:"docsSidebar",previous:{title:"How to Organize DevLake Projects",permalink:"/docs/v1.0/Configuration/HowToOrganizeDevlakeProjects"},next:{title:"Bitbucket Cloud",permalink:"/docs/v1.0/Configuration/BitBucket"}},l={},r=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Token",id:"token",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Select repositories",id:"select-repositories",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 1.3 - Add Scope Config (Optional)",id:"step-13---add-scope-config-optional",level:3},{value:"CI/CD",id:"cicd",level:4},{value:"Additional Settings",id:"additional-settings",level:4},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a Azure DevOps Connection",id:"step-22---add-a-azure-devops-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:r};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit Config UI at: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,"On the Connections page, you can select GitHub and create a new connection or it."),(0,o.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-create-a-connection",src:a(84170).Z,width:"3056",height:"1746"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,o.kt)("h4",{id:"token"},"Token"),(0,o.kt)("p",null,"Paste your Azure DevOps personal access token (PAT) here. Check ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat"},"Azure's official doc"),' on how to create a PAT.\nMake sure that the Organization field is set to "All accessible organizations" when creating the PAT.'),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-set-data-scope",src:a(61076).Z,width:"3044",height:"1772"})),(0,o.kt)("h4",{id:"select-repositories"},"Select repositories"),(0,o.kt)("p",null,"Select the repositories you want to collect data from."),(0,o.kt)("h4",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Azure DevOps supports the following data entities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI/CD: builds and jobs."),(0,o.kt)("li",{parentName:"ul"},"Source Code Management: repositories and their commits."),(0,o.kt)("li",{parentName:"ul"},"Code Review: pull requests and their commits.")),(0,o.kt)("h3",{id:"step-13---add-scope-config-optional"},"Step 1.3 - Add Scope Config (Optional)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-add-scope config",src:a(89855).Z,width:"1405",height:"486"})),(0,o.kt)("p",null,"Scope config contains two parts: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect: Usually, you don't have to modify this part. However, if you don't want to collect certain Azure DevOps entities, you can unselect some entities to accelerate the collection speed.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Source Code Management: Azure repos, refs, commits, etc."),(0,o.kt)("li",{parentName:"ul"},"Code Review: Azure PRs, PR comments and reviews, etc."),(0,o.kt)("li",{parentName:"ul"},"CI/CD: Azure pipelines, jobs, etc."),(0,o.kt)("li",{parentName:"ul"},"Cross Domain: Azure accounts, etc."))),(0,o.kt)("li",{parentName:"ul"},"The transformations on the Azure DevOps data you are going to collect. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azuredevops-set-transformation",src:a(87255).Z,width:"1120",height:"757"})),(0,o.kt)("h4",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,"To effectively measure ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.0/DORA"},"DORA metrics")," through Azure DevOps, it is necessary to define the concept of a 'deployment'. DevLake considers an Azure Pipeline Run (see the blue rectangle) as a DevLake deployment using specific conditions expressed through regular expressions (regex):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment: The provided regex should match either the name of the Azure pipeline (see the red rectangle) that the pipeline run belongs to or any of the job display names (see the yellow rectangle) associated with the pipeline run. This will designate it as a deployment. For example, if the deployment pipeline is named 'build-and-push-image', you can input (push-image) as the regex. To ensure case insensitivity, include (?i) before the regex."),(0,o.kt)("li",{parentName:"ul"},"Production: The given regex should match either the pipeline run's name or any of its job display names to classify it as a deployment within the production environment. For instance, if the deployment pipeline is named 'build-to-prod', you can input (prod) as the regex. To ensure case insensitivity, include (?i) before the regex.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azure-pipeline",src:a(9437).Z,width:"970",height:"352"}),"\n",(0,o.kt)("img",{alt:"azure-job",src:a(10419).Z,width:"1217",height:"864"})),(0,o.kt)("h4",{id:"additional-settings"},"Additional Settings"),(0,o.kt)("p",null,"The additional settings for transformations are RefDiff options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tags Limit: the number of tags to compare."),(0,o.kt)("li",{parentName:"ul"},"Tags Pattern: Only tags that match the given regex are taken into account.")),(0,o.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,o.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,o.kt)("p",null,"Collecting Azure DevOps data requires creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-a-project",src:a(38516).Z,width:"1624",height:"684"})),(0,o.kt)("h3",{id:"step-22---add-a-azure-devops-connection"},"Step 2.2 - Add a Azure DevOps Connection"),(0,o.kt)("p",null,"You can add a previously configured GitLab connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the repositories you are looking for, please check if you have added them to the connection first."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add-a-connection",src:a(88749).Z,width:"2394",height:"624"})),(0,o.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,o.kt)("p",null,"There are three settings for Sync Policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,o.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your prefered schedule."),(0,o.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sync-policy",src:a(93195).Z,width:"2428",height:"336"})),(0,o.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,o.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,o.kt)("img",{alt:"collect-data",src:a(5031).Z,width:"2410",height:"664"})),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.0/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},88749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},89855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-add-scope-config-01facab03b3978cb074757de07543d46.png"},84170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-create-a-connection-3a4ecfc90ce12c5dacdb74f3f95df19f.png"},61076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-set-data-scope-30fe830036ca8fdccf9f3b7aa7aa89c0.png"},87255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-set-transformation-25ff252773e9b8b0f189be3d2ed6e87a.png"},10419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-ui-job-1b8b05dd25e00fabac9f1c1464f216f3.png"},9437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azuredevops-ui-pipeline-072c4460d8f26170bdadc117debe7e2e.png"},5031:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},38516:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},93195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"}}]);