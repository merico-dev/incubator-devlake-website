"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[859],{38628:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=o(87462),a=(o(67294),o(3905));o(61839);const n={title:"GitLab",sidebar_position:11,description:"Config UI instruction for GitLab"},s=void 0,l={unversionedId:"Configuration/GitLab",id:"version-v1.0/Configuration/GitLab",title:"GitLab",description:"Config UI instruction for GitLab",source:"@site/versioned_docs/version-v1.0/Configuration/GitLab.md",sourceDirName:"Configuration",slug:"/Configuration/GitLab",permalink:"/docs/v1.0/Configuration/GitLab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Configuration/GitLab.md",tags:[],version:"v1.0",sidebarPosition:11,frontMatter:{title:"GitLab",sidebar_position:11,description:"Config UI instruction for GitLab"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/docs/v1.0/Configuration/GitHub"},next:{title:"Opsgenie",permalink:"/docs/v1.0/Configuration/Opsgenie"}},r={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"GitLab Version",id:"gitlab-version",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Personal Access Token",id:"personal-access-token",level:4},{value:"Personal Access Token Permissions",id:"personal-access-token-permissions",level:5},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Step 1.3 - Add Scope Config (Optional)",id:"step-13---add-scope-config-optional",level:3},{value:"CI/CD",id:"cicd",level:4},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a GitLab Connection",id:"step-22---add-a-gitlab-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,"On the Connections page, you can select GitHub and create a new connection or it."),(0,a.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab-add-data-connections",src:o(81870).Z,width:"2266",height:"1106"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h4",{id:"gitlab-version"},"GitLab Version"),(0,a.kt)("p",null,"Select if you use GitLab Cloud or GitLab Server (v11+)."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you use GitLab cloud, you do not need to enter the endpoint, which is always ",(0,a.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/api/v4/"),"."),(0,a.kt)("li",{parentName:"ul"},"If you GitLab Server (v11+), the endpoint will look like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/"),".\nPlease note: the endpoint URL should end with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,a.kt)("h4",{id:"personal-access-token"},"Personal Access Token"),(0,a.kt)("p",null,"Your GitLab personal access token (PAT) is required to add a connection. Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"how to create a GitLab personal access token"),"."),(0,a.kt)("h5",{id:"personal-access-token-permissions"},"Personal Access Token Permissions"),(0,a.kt)("p",null,"At least one of the following permissions is required to collect data from repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"read_api"))),(0,a.kt)("p",null,"You also have to double-check your GitLab user permission settings."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the Project information -> Members page of the GitLab projects you wish to collect."),(0,a.kt)("li",{parentName:"ol"},"Check your role in this project from the Max role column. Make sure you are not the Guest role, otherwise, you will not be able to collect data from this project.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit at around 12,000 requests/hour to collect GitLab data. You can adjust the rate limit if you want to increase or lower the speed."),(0,a.kt)("p",null,"The maximum rate limit for GitLab Cloud is ",(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.gitlab.com/ee/user/gitlab_com/index.html#gitlabcom-specific-rate-limits"},"120,000 requests/hour")),". Tokens under the same IP address share the rate limit, so the actual rate limit for your token will be lower than this number."),(0,a.kt)("p",null,"For self-managed GitLab rate limiting, please contact your GitLab admin to ",(0,a.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your GitLab instance. Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,a.kt)("h4",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab-set-data-scope",src:o(3084).Z,width:"2828",height:"1404"})),(0,a.kt)("p",null,"Select the GitLab repositories you want to collect from the miller column. ",(0,a.kt)("strong",{parentName:"p"},"Please note that repositories with guest permissions or those that are archived have already been excluded.")," You can also use the search function to find them. Limited by the GitLab API, You need to type more than 2 characters to search. The repositories only with guest permissions are not shown in the list."),(0,a.kt)("h3",{id:"step-13---add-scope-config-optional"},"Step 1.3 - Add Scope Config (Optional)"),(0,a.kt)("p",null,"Scope config contains two parts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect: Usually, you don't have to modify this part. However, if you don't want to collect certain GitLab entities, you can unselect some entities to accelerate the collection speed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: GitLab issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: GitLab repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: GitLab MRs, MR comments and reviews, etc."),(0,a.kt)("li",{parentName:"ul"},"CI/CD: GitLab pipelines, jobs, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: GitLab accounts, etc."))),(0,a.kt)("li",{parentName:"ul"},"The transformations on the GitLab data you are going to collect.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The details of the transformations will be explained below."),(0,a.kt)("li",{parentName:"ul"},"Without adding transformation rules, you can still view some of the dashboards."),(0,a.kt)("li",{parentName:"ul"},"Each GitLab repo has at most ONE set of transformations.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab-set-transformation1",src:o(28034).Z,width:"2364",height:"570"}),"\n",(0,a.kt)("img",{alt:"gitlab-set-transformation2",src:o(13192).Z,width:"2016",height:"1484"})),(0,a.kt)("h4",{id:"cicd"},"CI/CD"),(0,a.kt)("p",null,"This set of configurations is used to define 'deployments'. Deployments are related to measure ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.0/DORA"},"DORA metrics"),"."),(0,a.kt)("p",null,"For GitLab deployments, DevLake recognizes them as deployments by specifying a regular expression (regex) to identify the production environments among all 'GitLab environments'."),(0,a.kt)("p",null,"If your deployments are not performed through GitLab deployments but rather specific pipelines in GitLab, you have the option to convert a GitLab pipeline run into a DevLake deployment. In this case, you need to configure two regular expressions (regex):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment: The given regex should match the name of the GitLab pipeline's branch name or one of its job names to be considered as a deployment. For example, if the pipeline is executet on the 'build-and-push-image', you can input (push-image). To make the regex case insensitive, you can include (?i) before the regex."),(0,a.kt)("li",{parentName:"ul"},"Production: The given regex should match either the pipeline's branch name or one of its job names to be considered a deployment within the production environment. For instance:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the pipeline used for deployment is named 'build-to-prod', you can input (prod). To make the regex case insensitive, you can include (?i) before the regex."),(0,a.kt)("li",{parentName:"ul"},"Also, many users in GitLab utilize the same pipeline for both staging and prod deployments, executing it on the release branch would indicate a production deployment.")))),(0,a.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,a.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,a.kt)("p",null,"Collecting GitLab data requires creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-a-project",src:o(38516).Z,width:"1624",height:"684"})),(0,a.kt)("h3",{id:"step-22---add-a-gitlab-connection"},"Step 2.2 - Add a GitLab Connection"),(0,a.kt)("p",null,"You can add a previously configured GitLab connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the repositories you are looking for, please check if you have added them to the connection first."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add-a-connection",src:o(88749).Z,width:"2394",height:"624"})),(0,a.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,a.kt)("p",null,"There are three settings for Sync Policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,a.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your prefered schedule."),(0,a.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-policy",src:o(93195).Z,width:"2428",height:"336"})),(0,a.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,a.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,a.kt)("img",{alt:"collect-data",src:o(5031).Z,width:"2410",height:"664"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.0/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},88749:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},5031:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},38516:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},81870:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/gitlab-create-a-connection-2bca753578a1ea2f32ebea8f2b392161.png"},28034:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/gitlab-scope-config-a5ad3581c89ab4d47b6b6ce5a80a244e.png"},3084:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/gitlab-set-data-scope-71302fedcb351724279d43c0041e94a6.png"},13192:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/gitlab-set-transformation2-b0e013f8fb05d5f5725bf3d1be8cc10c.png"},93195:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"}}]);