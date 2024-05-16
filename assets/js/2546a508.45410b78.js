"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[69675],{91470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));a(61839);const i={title:"DORA",sidebar_position:4,description:"DORA Metrics\n"},r=void 0,s={unversionedId:"DORA",id:"version-v1.0/DORA",title:"DORA",description:"DORA Metrics\n",source:"@site/versioned_docs/version-v1.0/DORA.md",sourceDirName:".",slug:"/DORA",permalink:"/docs/v1.0/DORA",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/DORA.md",tags:[],version:"v1.0",sidebarPosition:4,frontMatter:{title:"DORA",sidebar_position:4,description:"DORA Metrics\n"},sidebar:"docsSidebar",previous:{title:"Grafana User Guide",permalink:"/docs/v1.0/Configuration/Dashboards/GrafanaUserGuide"},next:{title:"Metrics",permalink:"/docs/v1.0/Metrics"}},l={},d=[{value:"What are DORA metrics?",id:"what-are-dora-metrics",level:2},{value:"Why is DORA important?",id:"why-is-dora-important",level:2},{value:"How to implement DORA metrics with Apache DevLake?",id:"how-to-implement-dora-metrics-with-apache-devlake",level:2},{value:"A real-world example",id:"a-real-world-example",level:2},{value:"Step 1 - Configure GitHub &amp; Jira connections",id:"step-1---configure-github--jira-connections",level:3},{value:"Step 2 - Collect CircleCI deployments via webhook",id:"step-2---collect-circleci-deployments-via-webhook",level:3},{value:"Step 3 - Create a project and collect data",id:"step-3---create-a-project-and-collect-data",level:3},{value:"Step 4 - View and customize DevLake&#39;s DORA dashboard",id:"step-4---view-and-customize-devlakes-dora-dashboard",level:3},{value:"Try it Out",id:"try-it-out",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes everything you need to know about DORA, and implementing this powerful and practical framework in DevLake."),(0,n.kt)("h2",{id:"what-are-dora-metrics"},"What are DORA metrics?"),(0,n.kt)("p",null,'Created six years ago by a team of researchers, DORA stands for "DevOps Research & Assessment" and is the answer to years of research, having examined thousands of teams, seeking a reliable and actionable approach to understanding the performance of software development teams.'),(0,n.kt)("p",null,"DORA has since become a standardized framework focused on the stability and velocity of development processes, one that avoids the more controversial aspects of productivity and individual performance measures."),(0,n.kt)("p",null,"There are two key clusters of data inside DORA: Velocity and Stability. The DORA framework is focused on keeping them in context with each other, as a whole, rather than as independent variables, making the data more challenging to misinterpret or abuse."),(0,n.kt)("p",null,"Within velocity are two core metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/DeploymentFrequency"},"Deployment Frequency"),": Number of successful deployments to production, how rapidly is your team releasing to users?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/LeadTimeForChanges"},"Lead Time for Changes"),": How long does it take from commit to the code running in production? This is important, as it reflects how quickly your team can respond to user requirements.")),(0,n.kt)("p",null,"Stability is composed of two core metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/CFR"},"Change Failure Rate"),": How often are your deployments causing a failure?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/MTTR"},"Median Time to Restore Service (MTTR)"),": How long does it take the team to properly recover from a failure once it is identified?")),(0,n.kt)("p",null,"However, MTTR is replaced by ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Metrics/FailedDeploymentRecoveryTime"},"Failed Deployment Recovery Time")," from the 2023 DORA report. This metric measures the finish time of a deployment to the resolution of the incident caused by the deployment."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(12115).Z,width:"1280",height:"704"})),(0,n.kt)("p",null,'To make DORA even more actionable, there are well-established benchmarks to determine if you are performing at "Elite", "High", "Medium", or "Low" levels. Inside DevLake, you will find the benchmarking table available to assess and compare your own projects.'),(0,n.kt)("h2",{id:"why-is-dora-important"},"Why is DORA important?"),(0,n.kt)("p",null,"DORA metrics help teams and projects measure and improve software development practices to consistently deliver reliable products, and thus happy users!"),(0,n.kt)("h2",{id:"how-to-implement-dora-metrics-with-apache-devlake"},"How to implement DORA metrics with Apache DevLake?"),(0,n.kt)("p",null,"DevLake measures DORA metrics at the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/HowToOrganizeDevlakeProjects#2-why-is-it-important-to-organize-projects"},"project level"),". You can set up DORA metrics in a few steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Install"),": via ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/GettingStarted/DockerComposeSetup"},"Docker Compose")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/GettingStarted/HelmSetup"},"Helm"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Configure and collect data"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create ",(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Overview/KeyConcepts#data-connection"},"data connections")," to retrieve the data from various tools such as Jira, GitHub, Jenkins, etc."),(0,n.kt)("li",{parentName:"ul"},"Configure the DORA-related ",(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Overview/KeyConcepts#scope-config"},"scope config")," to define ",(0,n.kt)("inlineCode",{parentName:"li"},"deployments")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"incidents"),"."),(0,n.kt)("li",{parentName:"ul"},"Create a DevLake project, and associate the data connections with the project. Collect data to see DORA metrics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Report"),": DevLake provides a built-in DORA dashboard and another dashboard to help you debug DORA. See an example screenshot below or check out our ",(0,n.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),". "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"DORA Dashboard",src:a(95773).Z,width:"2708",height:"1822"})))),(0,n.kt)("p",null,"DevLake now supports Jenkins, GitHub Action, GitLab CI, BitBucket and Azure Pipelines as the data sources for ",(0,n.kt)("inlineCode",{parentName:"p"},"deployments"),"; Jira boards, GitHub issues, TAPD workspaces and Zentao issues as the sources for ",(0,n.kt)("inlineCode",{parentName:"p"},"incidents")," data; Github/BitBucket/Azure/GitLab repos as the sources for ",(0,n.kt)("inlineCode",{parentName:"p"},"Pull Requests")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Commits"),"."),(0,n.kt)("p",null,"If your CI/CD or incident management tools are not listed on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Overview/SupportedDataSources"},"Supported Data Sources")," page, have no fear! DevLake provides incoming webhooks to push your ",(0,n.kt)("inlineCode",{parentName:"p"},"deployments")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"incidents")," to DevLake. The webhook configuration doc can be found ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/webhook"},"here"),"."),(0,n.kt)("h2",{id:"a-real-world-example"},"A real-world example"),(0,n.kt)("p",null,"Let us walk through the DORA implementation process for a ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/HowToOrganizeDevlakeProjects#43-measuring-dora-at-the-team-level"},"project team")," with the following toolchain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Source Code Management and Code Review: GitHub"),(0,n.kt)("li",{parentName:"ul"},"Continous Deployments: GitHub Actions & CircleCI"),(0,n.kt)("li",{parentName:"ul"},"Incident management: Jira")),(0,n.kt)("p",null,"Calculating DORA metrics requires three key entities: ",(0,n.kt)("strong",{parentName:"p"},"Pull requests"),", ",(0,n.kt)("strong",{parentName:"p"},"deployments"),", and ",(0,n.kt)("strong",{parentName:"p"},"incidents"),". Their exact definitions of course depend on a project's DevOps practice and vary project by project. For the project in this example, let us assume the following definition:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code Changes: All commits and pull requests in GitHub."),(0,n.kt)("li",{parentName:"ul"},'Deployments: GitHub workflow run whose jobs contain "deploy" and "push-image" in their names and CircleCI deployments.'),(0,n.kt)("li",{parentName:"ul"},'Incidents: Jira issues whose type is "DORA Incident"')),(0,n.kt)("p",null,"In the next section, we will demonstrate how to configure DevLake to implement DORA metrics for the aforementioned example project team."),(0,n.kt)("h3",{id:"step-1---configure-github--jira-connections"},"Step 1 - Configure GitHub & Jira connections"),(0,n.kt)("p",null,"1.1 Visit the config-ui at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,n.kt)("p",null,"1.2 Go to the ",(0,n.kt)("strong",{parentName:"p"},"Connections")," page. Create a Jira connection."),(0,n.kt)("p",null,"1.3 Add your project's Jira boards. Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Associate Scope Config")," icon to configure for DORA metrics."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(98005).Z,width:"1234",height:"489"})),(0,n.kt)("p",null,"  To make it simple, fields with the ",(0,n.kt)("img",{src:a(40979).Z,width:"72",height:"28"}),' label are DORA-related configurations for every data source. Via these fields, you can define what "incidents" and "deployments" are for each data source.'),(0,n.kt)("p",null,"  This project uses Jira issue type ",(0,n.kt)("inlineCode",{parentName:"p"},"DORA Incident"),' as "incident". Please select the ',(0,n.kt)("inlineCode",{parentName:"p"},"DORA Incident")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Incident")," field. Jira issues belonging to this type will be converted to 'INCIDENT' in DevLake."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(29964).Z,width:"885",height:"403"})),(0,n.kt)("p",null,"1.4 Create a GitHub connection. Add the GitHub repositories. Once added, associate the scope configuration with the repositories."),(0,n.kt)("p",null,"  In this project, the GitHub CI jobs 'deploy' and 'push-image' are recognized as deployments. To identify these deployments, please use the pattern '(?i)(deploy|push-image)'. GitHub Workflow runs that match this pattern will be transformed into 'deployments' and recorded in the table 'cicd_deployments' in DevLake."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(91208).Z,width:"880",height:"387"})),(0,n.kt)("p",null,"  Please note that starting from v0.20, DevLake automatically collects GitHub deployments and converts them into DevLake deployments by default."),(0,n.kt)("h3",{id:"step-2---collect-circleci-deployments-via-webhook"},"Step 2 - Collect CircleCI deployments via webhook"),(0,n.kt)("p",null,"Using CircleCI as an example, we demonstrate how to actively push data to DevLake using the Webhook approach, in cases where DevLake does not have a plugin specific to that tool to pull data from your data source. Please note that CircleCI will be supported from v0.21."),(0,n.kt)("p",null,"2.1 Go to the ",(0,n.kt)("strong",{parentName:"p"},"Connections")," page. Add a webhook called 'CircleCI'."),(0,n.kt)("p",null,"2.2 Copy the curl command to register deployments to Devlake. This curl command includes a non-expired ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/APIKeys"},"API key")," generated automatically."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(41881).Z,width:"867",height:"586"})),(0,n.kt)("p",null,"2.3 Head to your CircleCI's pipelines page in a new tab. Find your deployment pipeline and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Configuration File"),"."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(5064).Z,width:"2334",height:"1106"})),(0,n.kt)("p",null,"2.4 Paste the curl command to the ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml"),". Change the key-values in the payload. See the full payload schema ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Plugins/webhook/#deployment"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'version: 2.1\n\njobs:\n  build:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "build"\n          command: |\n            echo Hello, World!\n\n  deploy:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "deploy"\n          command: |\n            # The time a deploy started\n            start_time=`date \'+%Y-%m-%dT%H:%M:%S%z\'`\n\n            # Some deployment tasks here ...\n            echo Hello, World!\n\n            # Send the request to DevLake after deploy\n            # The values start with a \'$CIRCLE_\' are CircleCI\'s built-in variables\n            curl http://127.0.0.1:4000/api/plugins/webhook/2/deployments -X \'POST\' -d "{\n              \\"commit_sha\\":\\"$CIRCLE_SHA1\\",\n              \\"repo_url\\":\\"$CIRCLE_REPOSITORY_URL\\",\n              \\"start_time\\":\\"$start_time\\"\n            }"\n\nworkflows:\n  build_and_deploy_workflow:\n    jobs:\n      - build\n      - deploy\n')),(0,n.kt)("p",null,"2.5 Run the CircleCI pipeline. Visit DevLake's DB to check if the deployments have been successfully pushed to DevLake. The deployments will appear in table ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/DataModels/DevLakeDomainLayerSchema#cicd_deployments"},"cicd_deployments")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/DataModels/DevLakeDomainLayerSchema#cicd_deployment_commits"},"cicd_deployment_commits")," in DevLake's database."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:a(11107).Z,width:"2398",height:"1285"})),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"webhook-query",src:a(34717).Z,width:"2386",height:"534"})),(0,n.kt)("h3",{id:"step-3---create-a-project-and-collect-data"},"Step 3 - Create a project and collect data"),(0,n.kt)("p",null,"Once all the data connections and webhooks have been configured, it is essential to associate them with a DevLake project. This association is necessary to accurately measure DORA metrics."),(0,n.kt)("p",null,"3.1 Go to the ",(0,n.kt)("strong",{parentName:"p"},"Projects")," page. Create 'project1' and enable DORA metrics."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"project1",src:a(94218).Z,width:"824",height:"294"})),(0,n.kt)("p",null,"3.2 Add Jira and a GitHub connections to this project. "),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{src:a(13978).Z,width:"1220",height:"275"})),(0,n.kt)("p",null,"  Choose the Jira boards and GitHub repos that belong to 'project1'."),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{src:a(35099).Z,width:"812",height:"477"})),(0,n.kt)("p",null,"3.3 Go to the ",(0,n.kt)("strong",{parentName:"p"},"webhooks")," tab. Add the existing webhook 'CircleCI' to this project."),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{src:a(1913).Z,width:"1222",height:"522"})),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{src:a(86774).Z,width:"826",height:"335"})),(0,n.kt)("p",null,"3.4 Go to the ",(0,n.kt)("strong",{parentName:"p"},"blueprint status")," tab, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Collect All")," to start data collection."),(0,n.kt)("h3",{id:"step-4---view-and-customize-devlakes-dora-dashboard"},"Step 4 - View and customize DevLake's DORA dashboard"),(0,n.kt)("p",null,"With all the data collected, DevLake's DORA dashboard is ready to deliver your DORA metrics and benchmarks. "),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Dashboards")," on the top right corner. You can find the DORA dashboard within the Grafana instance shipped with DevLake, ready for you to put into action."),(0,n.kt)("p",null,"You can customize the DORA dashboard by editing the underlying SQL query of each panel."),(0,n.kt)("p",null,"For a breakdown of each metric's SQL query, please refer to the corresponding metric docs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/DeploymentFrequency"},"Deployment Frequency")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/LeadTimeForChanges"},"Lead Time for Changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/MTTR"},"Median Time to Restore Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/CFR"},"Change Failure Rate"))),(0,n.kt)("p",null,"If you are not familiar with Grafana, please refer to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/Dashboards/GrafanaUserGuide"},"Grafana doc"),", or jump into Slack for help."),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congratulations! You are now a DevOps Hero, with your own DORA dashboard!"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"try-it-out"},"Try it Out"),(0,n.kt)("p",null,"To create the DORA dashboard with your own toolchain, please look at the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/Tutorial"},"configuration tutorial")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Configuration/HowToOrganizeDevlakeProjects"},"project organization documentation")," for more details."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into any problem, please check the DORA debug dashboard, ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.0/Troubleshooting/Dashboard#debugging-dora-issue-metrics"},"DORA troubleshooting documentation")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")," on GitHub."))}p.isMDXComponent=!0},94218:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/project1-58602175bfe30a91e7ce91d60049d4f1.png"},34717:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/webhook-query-deployments-c48f75ecf8c47f5175f0594fbefc9f7f.png"},5064:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-circleci-screenshot-1-8e12b69a93c1106fa9cdfd4cf25102b7.png"},11107:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-circleci-screenshot-2-43c262068235ddb25e8ff35a2e2638b9.png"},40979:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},95773:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-dashboard-d0c06a27821366eb4fe8f0575b1501e1.png"},91208:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-github-connection-1-6151fbcb441d0acd7bab8b9364e5564a.png"},12115:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-intro-e3847646d8dbe47220e6c8347ab14f7b.png"},98005:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-jira-connection-1-7b05f4818671ef5d65c895722fd1da26.png"},29964:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-jira-connection-2-40732530bdc277cbdcf6fce462757bb7.png"},13978:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-project-2-32ac2c0d302d31eb323b2de03358615e.png"},35099:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-project-3-82bfc86350e8484cfb6d5f8c95d0f62f.png"},41881:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-webhook-1-cc0e2acaafc3ce36fcb4963c5f04a971.png"},1913:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-webhook-2-fa7a0be3e246e5a8cc6dfae3294f1e82.png"},86774:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dora-webhook-3-c868e69c28deca4d46fb44399ed239e9.png"}}]);