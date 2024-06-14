"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[40608],{39209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(61839);const l={title:"Webhook",description:"Webhook Plugin\n"},i=void 0,o={unversionedId:"Plugins/webhook",id:"version-v1.0/Plugins/webhook",title:"Webhook",description:"Webhook Plugin\n",source:"@site/versioned_docs/version-v1.0/Plugins/webhook.md",sourceDirName:"Plugins",slug:"/Plugins/webhook",permalink:"/docs/v1.0/Plugins/webhook",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Plugins/webhook.md",tags:[],version:"v1.0",frontMatter:{title:"Webhook",description:"Webhook Plugin\n"},sidebar:"docsSidebar",previous:{title:"Trello(WIP)",permalink:"/docs/v1.0/Plugins/trello"},next:{title:"Zentao",permalink:"/docs/v1.0/Plugins/zentao"}},d={},s=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Payload Schema",id:"payload-schema",level:4},{value:"Register a Deployment - Sample API Calls",id:"register-a-deployment---sample-api-calls",level:4},{value:"A real-world example - Push CircleCI deployments to DevLake",id:"a-real-world-example---push-circleci-deployments-to-devlake",level:4},{value:"Incident / Issue",id:"incident--issue",level:3},{value:"Register Issues - Update or Create Issues",id:"register-issues---update-or-create-issues",level:4},{value:"Register Issues - Close Issues (Optional)",id:"register-issues---close-issues-optional",level:4},{value:"Register Issues - Sample API Calls",id:"register-issues---sample-api-calls",level:4},{value:"References",id:"references",level:2}],p={toc:s};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Incoming Webhooks are your solution to bring data to Apache DevLake when there isn't a specific plugin ready for your DevOps tool. An Incoming Webhook allows users to actively push data to DevLake."),(0,r.kt)("p",null,"When you create an Incoming Webhook within DevLake, DevLake generates a unique URL. You can then post JSON payloads to this URL to push data directly to your DevLake instance."),(0,r.kt)("p",null,'In v0.14+, users can push "incidents" and "deployments" required by DORA metrics to DevLake via Incoming Webhooks.'),(0,r.kt)("p",null,"Webhooks are meant to be used at the lowest level that you want to relate incidents with deployments. For example, if you want to relate incidents at the individual service level, you will need a webhook per service. If you wish to relate incidents at the product level, you will need a webhook for the product. This is because incidents on a project will be related to the last deployment on the project with a timestamp that is before the incident's timestamp. This is true regardless of the source of incidents or deployments."),(0,r.kt)("p",null,"Note: If you post incidents using webhook due to your tool not being supported but your deployments are collected via plugins automatically, you need to re-collect data for deployments for the posted incidents to get mapped to deployments based on timestamps. This is required for Change Failure Rate (DORA) metric to show up correctly for the project."),(0,r.kt)("p",null,"Diagram of the relationship between incidents and deployments:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change Failure Reporting",src:a(62531).Z,width:"3796",height:"938"})),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/v1.0/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Incoming Webhooks entities")," collected by this plugin."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Metrics that can be calculated based on the data collected from Incoming Webhooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/BugAge"},"Bug Age")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/IncidentAge"},"Incident Age")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuring Incoming Webhooks via ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/Configuration/webhook"},"Config UI"))),(0,r.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"If you want to collect deployment data from your system, you can use the incoming webhooks for deployment."),(0,r.kt)("h4",{id:"payload-schema"},"Payload Schema"),(0,r.kt)("p",null,"You can copy the generated deployment curl commands to your CI/CD script to post deployments to Apache DevLake. Below is the detailed payload schema:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"This will be the unique ID of table cicd_deployments. This key replaced pipeline_id for clarity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"createdDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The time this deploy pipeline starts. E.g. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"startedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the first deploy to a certain repo starts. E.g. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"finishedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the last deploy to a certain repo ends. E.g. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"environment"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment this deployment happens. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION")," ",(0,r.kt)("inlineCode",{parentName:"td"},"STAGING")," ",(0,r.kt)("inlineCode",{parentName:"td"},"TESTING")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DEVELOPMENT"),". ",(0,r.kt)("br",null),"The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"result"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"deployment result, one of the values : ",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ABORT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MANUAL"),", ",(0,r.kt)("br",null)," The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"displayTitle"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"A readable title for the deployment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.repoUrl"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The repo URL of the deployment commit",(0,r.kt)("br",null),"If there is a row in the domain layer table ",(0,r.kt)("inlineCode",{parentName:"td"},"repos")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"repos.url")," equals ",(0,r.kt)("inlineCode",{parentName:"td"},"repo_url"),", the ",(0,r.kt)("inlineCode",{parentName:"td"},"repoId")," will be filled with ",(0,r.kt)("inlineCode",{parentName:"td"},"repos.id"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.repoId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.refName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The branch/tag to deploy ",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.startedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The start time of the deploy to this repo. E.g. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.finishedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The end time of the deploy to this repo. E.g. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.commitSha"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Commit sha that triggers the deploy in this repo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.commitMsg"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Commit sha of the deployment commit message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.result"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of the deploy to this repo. The default value is 'SUCCESS'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.displayTitle"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"A readable title for the deployment to this repo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits.name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated.")))),(0,r.kt)("p",null,"More information about these columns at the domain layer tables: ",(0,r.kt)("a",{parentName:"p",href:"/docs/v1.0/DataModels/DevLakeDomainLayerSchema#cicd_deployments"},"cicd_deployments")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/v1.0/DataModels/DevLakeDomainLayerSchema#cicd_deployment_commits"},"cicd_deployment_commits"),"."),(0,r.kt)("h4",{id:"register-a-deployment---sample-api-calls"},"Register a Deployment - Sample API Calls"),(0,r.kt)("p",null,"The payload supports the deployment to one or multiple repositories (referring to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/discussions/6162"},"discussion"),")."),(0,r.kt)("p",null,"Please replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY")," with the real token generated after creating a webhook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -H \'Authorization: Bearer {API_KEY}\' -d \'{\n    "id": "required-id",\n    "createdDate":"2020-01-01T11:00:00+00:00",\n    "startedDate":"2020-01-01T12:00:00+00:00",\n    "finishedDate":"2020-01-02T13:00:00+00:00",\n    "environment":"PRODUCTION",\n    "result": "SUCCESS",\n    "displayTitle":"optional-custom-deploy-display-title",\n    "name": "optional-deployment-name. If you do not post a name, DevLake will generate one for you.",\n    "deploymentCommits":[\n       {\n           "repoUrl":"required-repo-url",\n           "refName": "optional-release-v0.17",\n           "startedDate":"2020-01-01T11:00:00+00:00",\n           "finishedDate":"2020-01-02T11:00:00+00:00",\n           "commitSha":"c1",\n           "commitMsg":"optional-msg-1",\n           "result":"SUCCESS",\n           "name":"optional, if null, it will be deployment for {commit_sha}",\n           "displayTitle":"optional-custom-deployment-commit-display-title-1"\n       },\n       {\n           "repoUrl":"repo-2",\n           "refName": "optional-release-v0.17",\n           "startedDate":"2020-01-01T11:00:00+00:00",\n           "finishedDate":"2020-01-02T11:00:00+00:00",\n           "commitSha":"c2",\n           "commitMsg":"optional-msg-2",\n           "result":"FAILURE",\n           "name":"optional, if null, it will be deployment for {commit_sha}",\n           "displayTitle":"optional-custom-deployment-commit-display-title-2"\n       }\n    ]\n  }\'\n')),(0,r.kt)("h4",{id:"a-real-world-example---push-circleci-deployments-to-devlake"},"A real-world example - Push CircleCI deployments to DevLake"),(0,r.kt)("p",null,"The following demo shows how to post \"deployments\" to DevLake from CircleCI. In this example, the CircleCI job 'deploy' is used to manage deployments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version: 2.1\n\njobs:\n  build:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "build"\n          command: |\n            echo Hello, World!\n\n  deploy:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "deploy"\n          command: |\n            # The time a deploy started\n            started_date=`date \'+%Y-%m-%dT%H:%M:%S%z\'`\n\n            # Some deployment tasks here ...\n            echo Hello, World!\n\n            # Send the request to DevLake after deploy\n            # The values start with a \'$CIRCLE_\' are CircleCI\'s built-in variables\n            curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -d "{\n              \\"id\\": \\"$PIPELINE_ID\\",\n              \\"startedDate\\":\\"$started_date\\",\n              \\"finishedDate\\":\\"$finished_date\\",\n              \\"deploymentCommits\\":\\[\n                \\{\n                  \\"commitSha\\":\\"$CIRCLE_SHA1\\",\n                  \\"repoUrl\\":\\"$CIRCLE_REPOSITORY_URL\\",\n                \\}\n              \\]\n            }"\n\nworkflows:\n  build_and_deploy_workflow:\n    jobs:\n      - build\n      - deploy\n')),(0,r.kt)("h3",{id:"incident--issue"},"Incident / Issue"),(0,r.kt)("p",null,"If you want to collect issue or incident data from your system, you can use the two webhooks for issues."),(0,r.kt)("h4",{id:"register-issues---update-or-create-issues"},"Register Issues - Update or Create Issues"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST <devlake-host>/api/rest/plugins/webhook/1/issues")),(0,r.kt)("p",null,"needs to be called when an issue or incident is created. The body should be a JSON and include columns as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Keyname"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Issue's URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"issueKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Issue's key, needs to be unique in a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"title"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"epicKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Issue's epic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Type, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"INCIDENT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BUG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"REQUIREMENT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Issue's status. Must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"TODO")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DONE")," ",(0,r.kt)("inlineCode",{parentName:"td"},"IN_PROGRESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"originalStatus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Status in your tool, such as created/open/closed/...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"storyPoint"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"resolutionDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Resolved date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"createdDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Created date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"updatedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Last updated date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"leadTimeMinutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"How long from this issue accepted to develop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"parentIssueKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"originalEstimateMinutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"timeSpentMinutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"timeRemainingMinutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creatorId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The user id of the creator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creatorName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"The username of the creator, it will just be used to display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assigneeId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assigneeName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"severity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"More information about these columns at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/v1.0/DataModels/DevLakeDomainLayerSchema#issues"},"domain layer issues table"),"."),(0,r.kt)("h4",{id:"register-issues---close-issues-optional"},"Register Issues - Close Issues (Optional)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST <devlake-host>/api/rest/plugins/webhook/1/issue/:issueId/close")),(0,r.kt)("p",null,"needs to be called when an issue or incident is closed. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},":issueId")," with specific strings and keep the body empty."),(0,r.kt)("h4",{id:"register-issues---sample-api-calls"},"Register Issues - Sample API Calls"),(0,r.kt)("p",null,"Sample CURL for creating an incident:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/issues -X \'POST\' -d \'{\n  "issueKey":"DLK-1234",\n  "title":"a feature from DLK",\n  "description":"",\n  "url":"",\n  "type":"INCIDENT",\n  "status":"TODO",\n  "createdDate":"2020-01-01T12:00:00+00:00",\n  "updatedDate":"2020-01-01T12:00:00+00:00",\n  "priority":"",\n  "severity":"",\n  "creatorId":"user1131",\n  "creatorName":"Nick name 1",\n  "assigneeId":"user1132",\n  "assigneeName":"Nick name 2"\n}\'\n')),(0,r.kt)("p",null,"Sample CURL for Issue Closing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl <devlake-host>/api/rest/plugins/webhook/1/issue/DLK-1234/close -X 'POST'\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.0/DeveloperManuals/DeveloperSetup#references"},"references"))))}m.isMDXComponent=!0},62531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cfr-definition-94d92cc75f857f183443ad5390d31d65.png"}}]);