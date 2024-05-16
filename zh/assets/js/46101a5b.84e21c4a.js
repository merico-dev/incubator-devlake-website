"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[40608],{39209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(61839);const l={title:"Webhook",description:"Webhook Plugin\n"},i=void 0,o={unversionedId:"Plugins/webhook",id:"version-v1.0/Plugins/webhook",title:"Webhook",description:"Webhook Plugin\n",source:"@site/versioned_docs/version-v1.0/Plugins/webhook.md",sourceDirName:"Plugins",slug:"/Plugins/webhook",permalink:"/zh/docs/v1.0/Plugins/webhook",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v1.0/Plugins/webhook.md",tags:[],version:"v1.0",frontMatter:{title:"Webhook",description:"Webhook Plugin\n"},sidebar:"docsSidebar",previous:{title:"Trello(WIP)",permalink:"/zh/docs/v1.0/Plugins/trello"},next:{title:"Zentao",permalink:"/zh/docs/v1.0/Plugins/zentao"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Payload Schema",id:"payload-schema",level:4},{value:"Register a Deployment - Sample API Calls",id:"register-a-deployment---sample-api-calls",level:4},{value:"A real-world example - Push CircleCI deployments to DevLake",id:"a-real-world-example---push-circleci-deployments-to-devlake",level:4},{value:"Incident / Issue",id:"incident--issue",level:3},{value:"Register Issues - Update or Create Issues",id:"register-issues---update-or-create-issues",level:4},{value:"Register Issues - Close Issues (Optional)",id:"register-issues---close-issues-optional",level:4},{value:"Register Issues - Sample API Calls",id:"register-issues---sample-api-calls",level:4},{value:"References",id:"references",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Incoming Webhooks are your solution to bring data to Apache DevLake when there isn't a specific plugin ready for your DevOps tool. An Incoming Webhook allows users to actively push data to DevLake."),(0,r.kt)("p",null,"When you create an Incoming Webhook within DevLake, DevLake generates a unique URL. You can then post JSON payloads to this URL to push data directly to your DevLake instance."),(0,r.kt)("p",null,'In v0.14+, users can push "incidents" and "deployments" required by DORA metrics to DevLake via Incoming Webhooks.'),(0,r.kt)("p",null,"Webhooks are meant to be used at the lowest level that you want to relate incidents with deployments. For example, if you want to relate incidents at the individual service level, you will need a webhook per service. If you wish to relate incidents at the product level, you will need a webhook for the product. This is because incidents on a project will be related to the last deployment on the project with a timestamp that is before the incident's timestamp. This is true regardless of the source of incidents or deployments."),(0,r.kt)("p",null,"Diagram of the relationship between incidents and deployments:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change Failure Reporting",src:n(62531).Z,width:"3796",height:"938"})),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Incoming Webhooks entities")," collected by this plugin."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Metrics that can be calculated based on the data collected from Incoming Webhooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/BugAge"},"Bug Age")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/IncidentAge"},"Incident Age")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuring Incoming Webhooks via ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/Configuration/webhook"},"Config UI"))),(0,r.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"If you want to collect deployment data from your system, you can use the incoming webhooks for deployment."),(0,r.kt)("h4",{id:"payload-schema"},"Payload Schema"),(0,r.kt)("p",null,"You can copy the generated deployment curl commands to your CI/CD script to post deployments to Apache DevLake. Below is the detailed payload schema:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pipeline_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"related Domain Layer ",(0,r.kt)("inlineCode",{parentName:"td"},"cicd_pipelines.id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"environment"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the environment this deployment happens, one of the values: ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"STAGING"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TESTING"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEVELOPMENT"),". ",(0,r.kt)("br",null),"The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"repo_url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the repo URL of the deployment commit",(0,r.kt)("br",null),"If there is a row in the domain layer table ",(0,r.kt)("inlineCode",{parentName:"td"},"repos")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"repos.url")," equals ",(0,r.kt)("inlineCode",{parentName:"td"},"repo_url"),", the ",(0,r.kt)("inlineCode",{parentName:"td"},"repoId")," will be filled with ",(0,r.kt)("inlineCode",{parentName:"td"},"repos.id"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"repo_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"related Domain Layer ",(0,r.kt)("inlineCode",{parentName:"td"},"repos.id")," ",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},'deployment name. The default value is "deployment for ',(0,r.kt)("inlineCode",{parentName:"td"},"request.commit_sha"),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ref_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"related branch/tag",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"commit_sha"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the sha of the deployment commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"commit_msg"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the sha of the deployment commit message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Time. Eg. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"start_time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Time. Eg. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"end_time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Time. Eg. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," The default value is the time when DevLake receives the POST request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"result"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"deployment result, one of the values: ",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ABORT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MANUAL"),". ",(0,r.kt)("br",null)," The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"deploymentCommits[]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow deployment webhook to push deployments to multiple repos in one request, includes repo_url,commit_sha,commit_msg,name,ref_name")))),(0,r.kt)("h4",{id:"register-a-deployment---sample-api-calls"},"Register a Deployment - Sample API Calls"),(0,r.kt)("p",null,"To deploy on a single repository, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -d \'{\n    "pipeline_id": "optional-pipeline-id",\n    "environment":"PRODUCTION",\n    "repo_url":"https://github.com/apache/incubator-devlake/",\n    "repo_id": "optional-repo-id",\n    "name": "optional-deployment-name. If you do not post a name, DevLake will generate one for you.",\n    "ref_name": "optional-release-v0.17",\n    "commit_sha":"015e3d3b480e417aede5a1293bd61de9b0fd051d",\n    "commit_msg":"optional-commit-message",\n    "create_time":"2020-01-01T11:00:00+00:00",\n    "start_time":"2020-01-01T12:00:00+00:00",\n    "end_time":"2020-01-02T13:00:00+00:00",\n    "result": "FAILURE"\n  }\'\n')),(0,r.kt)("p",null,"To deploy across multiple repositories (refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/discussions/6162"},"discussion"),"), use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -d \'{\n    "pipeline_id": "optional-pipeline-id",\n    "environment":"PRODUCTION",\n    "repo_id": "optional-repo-id",\n    "name": "optional-deployment-name. If you do not post a name, DevLake will generate one for you.",\n    "create_time":"2020-01-01T11:00:00+00:00",\n    "start_time":"2020-01-01T12:00:00+00:00",\n    "end_time":"2020-01-02T13:00:00+00:00",\n    "result": "FAILURE",\n    "deploymentCommits":[\n       {\n           "repo_url":"repo-1",\n           "name":"optional, if null, it will be deployment for {commit_sha}",\n           "ref_name": "optional-release-v0.17",\n           "commit_sha":"c1",\n           "commit_msg":"optional-msg-1"\n       },\n       {\n           "repo_url":"repo-2",\n           "name":"optional, if null, it will be deployment for {commit_sha}",\n           "ref_name": "optional-release-v0.17",\n           "commit_sha":"c2",\n           "commit_msg":"optional-msg-2"\n       }\n    ]\n  }\'\n')),(0,r.kt)("p",null,"If you have set a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/v1.0/GettingStarted/Authentication"},"username/password")," for Config UI, you'll need to add them to the curl command to register a ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -u \'username:password\' -d \'{\n    "deploymentCommits":[\n        {\n        "commit_sha":"the sha of deployment commit1",\n        "repo_url":"the repo URL of the deployment commit"\n        }\n    ],\n    "start_time":"2020-01-01T12:00:00+00:00",\n    "end_time":"2020-01-02T12:00:00+00:00"\n  }\'\n')),(0,r.kt)("h4",{id:"a-real-world-example---push-circleci-deployments-to-devlake"},"A real-world example - Push CircleCI deployments to DevLake"),(0,r.kt)("p",null,"The following demo shows how to post \"deployments\" to DevLake from CircleCI. In this example, the CircleCI job 'deploy' is used to manage deployments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version: 2.1\n\njobs:\n  build:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "build"\n          command: |\n            echo Hello, World!\n\n  deploy:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "deploy"\n          command: |\n            # The time a deploy started\n            start_time=`date \'+%Y-%m-%dT%H:%M:%S%z\'`\n\n            # Some deployment tasks here ...\n            echo Hello, World!\n\n            # Send the request to DevLake after deploy\n            # The values start with a \'$CIRCLE_\' are CircleCI\'s built-in variables\n            curl <devlake-host>/api/rest/plugins/webhook/1/deployments -X \'POST\' -d "{\n              \\"commit_sha\\":\\"$CIRCLE_SHA1\\",\n              \\"repo_url\\":\\"$CIRCLE_REPOSITORY_URL\\",\n              \\"start_time\\":\\"$start_time\\"\n            }"\n\nworkflows:\n  build_and_deploy_workflow:\n    jobs:\n      - build\n      - deploy\n')),(0,r.kt)("h3",{id:"incident--issue"},"Incident / Issue"),(0,r.kt)("p",null,"If you want to collect issue or incident data from your system, you can use the two webhooks for issues."),(0,r.kt)("h4",{id:"register-issues---update-or-create-issues"},"Register Issues - Update or Create Issues"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST <devlake-host>/api/rest/plugins/webhook/1/issues")),(0,r.kt)("p",null,"needs to be called when an issue or incident is created. The body should be a JSON and include columns as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Keyname"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"issue_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's key, needs to be unique in a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"title"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"epic_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"in which epic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"type, such as bug/incident/epic/...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's status. Must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"TODO")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DONE")," ",(0,r.kt)("inlineCode",{parentName:"td"},"IN_PROGRESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"original_status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"status in your system, such as created/open/closed/...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"story_point"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"resolution_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"created_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"updated_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"lead_time_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"how long from this issue accepted to develop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"parent_issue_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"original_estimate_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time_spent_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time_remaining_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creator_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the user id of the creator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creator_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the user name of the creator, it will just be used to display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assignee_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assignee_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"severity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"which component is this issue in.")))),(0,r.kt)("p",null,"More information about these columns at ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema#domain-1---issue-tracking"},"DomainLayerIssueTracking"),"."),(0,r.kt)("h4",{id:"register-issues---close-issues-optional"},"Register Issues - Close Issues (Optional)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST <devlake-host>/api/rest/plugins/webhook/1/issue/:issueId/close")),(0,r.kt)("p",null,"needs to be called when an issue or incident is closed. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},":issueId")," with specific strings and keep the body empty."),(0,r.kt)("h4",{id:"register-issues---sample-api-calls"},"Register Issues - Sample API Calls"),(0,r.kt)("p",null,"Sample CURL for creating an incident:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl <devlake-host>/api/rest/plugins/webhook/1/issues -X \'POST\' -d \'{\n  "issue_key":"DLK-1234",\n  "title":"a feature from DLK",\n  "description":"",\n  "url":"",\n  "type":"INCIDENT",\n  "status":"TODO",\n  "created_date":"2020-01-01T12:00:00+00:00",\n  "updated_date":"2020-01-01T12:00:00+00:00",\n  "priority":"",\n  "severity":"",\n  "creator_id":"user1131",\n  "creator_name":"Nick name 1",\n  "assignee_id":"user1132",\n  "assignee_name":"Nick name 2"\n}\'\n')),(0,r.kt)("p",null,"Sample CURL for Issue Closing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl <devlake-host>/api/rest/plugins/webhook/1/issue/DLK-1234/close -X 'POST'\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v1.0/DeveloperManuals/DeveloperSetup#references"},"references"))))}m.isMDXComponent=!0},62531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-definition-94d92cc75f857f183443ad5390d31d65.png"}}]);