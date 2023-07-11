"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[87322],{84203:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const r={title:"GitHub",description:"GitHub Plugin\n"},l=void 0,o={unversionedId:"Plugins/github",id:"version-v0.17/Plugins/github",title:"GitHub",description:"GitHub Plugin\n",source:"@site/versioned_docs/version-v0.17/Plugins/github.md",sourceDirName:"Plugins",slug:"/Plugins/github",permalink:"/docs/Plugins/github",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Plugins/github.md",tags:[],version:"v0.17",frontMatter:{title:"GitHub",description:"GitHub Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitExtractor",permalink:"/docs/Plugins/gitextractor"},next:{title:"GitLab",permalink:"/docs/Plugins/gitlab"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects GitHub data through ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/"},"REST API")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/graphql"},"GraphQL API"),". It then computes and visualizes various DevOps metrics from the GitHub data, which helps tech leads, QA and DevOps engineers, and project managers to answer questions such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is this month more productive than last?"),(0,a.kt)("li",{parentName:"ul"},"How fast do we respond to customer requirements?"),(0,a.kt)("li",{parentName:"ul"},"Was our quality improved or not?")),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"GitHub entities")," collected by this plugin."),(0,a.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Overview/SupportedDataSources#github"},"data refresh policy")," of this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from GitHub:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/RequirementCount"},"Requirement Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/RequirementLeadTime"},"Requirement Lead Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BugAge"},"Bug Age")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/IncidentAge"},"Incident Age")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/CommitCount"},"Commit Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRCount"},"PR Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRCycleTime"},"PR Cycle Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRCodingTime"},"PR Coding Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRPickupTime"},"PR Pickup Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRReviewTime"},"PR Review Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRDeployTime"},"PR Deploy Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRTimeToMerge"},"PR Time To Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRMergeRate"},"PR Merge Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRReviewDepth"},"PR Review Depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/PRSize"},"PR Size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildCount"},"Build Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildDuration"},"Build Duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/BuildSuccessRate"},"Build Success Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring GitHub via ",(0,a.kt)("a",{parentName:"li",href:"/docs/Configuration/GitHub"},"Config UI")),(0,a.kt)("li",{parentName:"ul"},"Configuring GitHub via Config UI's ",(0,a.kt)("a",{parentName:"li",href:"/docs/Configuration/AdvancedMode#1-github"},"advanced mode"),".")),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "github",\n        "options": {\n          "connectionId": 1,\n          "scopeId": "384111310",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueComponent":"",\n            "issuePriority":"(high|medium|low)$",\n            "issueSeverity":"",\n            "issueTypeBug":"(bug)$",\n            "issueTypeIncident":"",\n            "issueTypeRequirement":"(feature|feature-request)$",\n            "prBodyClosePattern":"",\n            "prComponent":"",\n            "prType":""\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "github",\n        "options": {\n          "connectionId": 1,\n          "owner": "apache",\n          "repo": "incubator-devlake",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueComponent":"",\n            "issuePriority":"(high|medium|low)$",\n            "issueSeverity":"",\n            "issueTypeBug":"(bug)$",\n            "issueTypeIncident":"",\n            "issueTypeRequirement":"(feature|feature-request)$",\n            "prBodyClosePattern":"",\n            "prComponent":"",\n            "prType":""\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/DeveloperManuals/DeveloperSetup#references"},"references"))))}c.isMDXComponent=!0}}]);