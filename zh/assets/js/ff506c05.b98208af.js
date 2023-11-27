"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[33229],{17242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(61839);const r={title:"Bamboo(WIP)",description:"Bamboo Plugin\n"},i=void 0,s={unversionedId:"Plugins/bamboo",id:"version-v0.20/Plugins/bamboo",title:"Bamboo(WIP)",description:"Bamboo Plugin\n",source:"@site/versioned_docs/version-v0.20/Plugins/bamboo.md",sourceDirName:"Plugins",slug:"/Plugins/bamboo",permalink:"/zh/docs/v0.20/Plugins/bamboo",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Plugins/bamboo.md",tags:[],version:"v0.20",frontMatter:{title:"Bamboo(WIP)",description:"Bamboo Plugin\n"},sidebar:"docsSidebar",previous:{title:"Azure DevOps",permalink:"/zh/docs/v0.20/Plugins/azuredevops"},next:{title:"BitBucket(Beta)",permalink:"/zh/docs/v0.20/Plugins/bitbucket"}},l={},p=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Bamboo's CI data through ",(0,o.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/server/bamboo/rest/"},"API"),". It then computes and visualizes various DevOps metrics from the Bamboo data, which helps tech leads, QA and DevOps engineers, and project managers to answer questions such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the deployment frequency of your team?"),(0,o.kt)("li",{parentName:"ul"},"How long does it take for your codes to get deployed?")),(0,o.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,o.kt)("p",null,"Will be available for Bamboo v6.8.1+. Check ",(0,o.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,o.kt)("h2",{id:"entities"},"Entities"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.20/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Bamboo entities")," collected by this plugin."),(0,o.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.20/Overview/SupportedDataSources#bamboo"},"data refresh policy")," of this plugin."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Metrics that can be calculated based on the data collected from Bamboo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.20/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.20/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.20/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.20/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,o.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,o.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "bamboo",\n        "options": {\n          "connectionId": 1,\n          "key": "TEST",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.20/DeveloperManuals/DeveloperSetup#references"},"references"))))}c.isMDXComponent=!0}}]);