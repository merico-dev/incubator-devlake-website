"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[80637],{34018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));t(61839);const o={title:"Blueprint Advanced Mode",sidebar_position:9,description:"Using the advanced mode of Config-UI\n"},l=void 0,r={unversionedId:"Configuration/AdvancedMode",id:"Configuration/AdvancedMode",title:"Blueprint Advanced Mode",description:"Using the advanced mode of Config-UI\n",source:"@site/docs/Configuration/AdvancedMode.md",sourceDirName:"Configuration",slug:"/Configuration/AdvancedMode",permalink:"/zh/docs/Configuration/AdvancedMode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/AdvancedMode.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Blueprint Advanced Mode",sidebar_position:9,description:"Using the advanced mode of Config-UI\n"},sidebar:"docsSidebar",previous:{title:"Incoming Webhook",permalink:"/zh/docs/Configuration/webhook"},next:{title:"Dashboard Access Control",permalink:"/zh/docs/Configuration/Dashboards/AccessControl"}},d={},c=[{value:"Why advanced mode?",id:"why-advanced-mode",level:2},{value:"How to use advanced mode to create pipelines?",id:"how-to-use-advanced-mode-to-create-pipelines",level:2},{value:"Examples",id:"examples",level:2},{value:"1. GitHub",id:"1-github",level:3},{value:"2. GitLab",id:"2-gitlab",level:3},{value:"3. Jenkins",id:"3-jenkins",level:3},{value:"4. Jira",id:"4-jira",level:3},{value:"5. Jira + GitLab",id:"5-jira--gitlab",level:3},{value:"6. TAPD",id:"6-tapd",level:3},{value:"7. TAPD + GitLab",id:"7-tapd--gitlab",level:3},{value:"8. Zentao",id:"8-zentao",level:3},{value:"Find Product Id",id:"find-product-id",level:4},{value:"Find Project Id",id:"find-project-id",level:4},{value:"Find Execution Id",id:"find-execution-id",level:4},{value:"9. BitBucket",id:"9-bitbucket",level:3},{value:"10. SonarQube",id:"10-sonarqube",level:3},{value:"11. Teambition",id:"11-teambition",level:3},{value:"Editing a Blueprint (Advanced Mode)",id:"editing-a-blueprint-advanced-mode",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function s(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-advanced-mode"},"Why advanced mode?"),(0,i.kt)("p",null,"Advanced mode allows users to create any pipeline by writing JSON. This is useful for users who want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitHub/GitLab repos or Jira projects within a single pipeline"),(0,i.kt)("li",{parentName:"ol"},"Have fine-grained control over what entities to collect or what subtasks to run for each plugin"),(0,i.kt)("li",{parentName:"ol"},"Orchestrate a complex pipeline that consists of multiple stages of plugins.")),(0,i.kt)("p",null,"Advanced mode gives utmost flexibility to users by exposing the JSON API."),(0,i.kt)("h2",{id:"how-to-use-advanced-mode-to-create-pipelines"},"How to use advanced mode to create pipelines?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click on "+ New Blueprint" on the Blueprint page.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(96371).Z,width:"2746",height:"448"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'In step 1, click on the "Advanced Mode" link.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(83684).Z,width:"1450",height:"548"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The pipeline editor expects a 2D array of plugins. The first dimension represents different stages of the pipeline and the second dimension describes the plugins in each stage. Stages run in sequential order and plugins within the same stage runs in parallel. We provide some templates for users to get started. Please also see the next section for some examples.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(87850).Z,width:"918",height:"845"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your preferred schedule. After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"1-github"},"1. GitHub"),(0,i.kt)("p",null,"Collect multiple GitHub repos sequentially. Below is an example for collecting 2 GitHub repos sequentially. It has 2 stages, each contains a GitHub task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "github",\n      "Options": {\n        "connectionId": 1,\n        "repo": "incubator-devlake",\n        "owner": "apache"\n      }\n    },\n    {\n      "Plugin": "github",\n      "Options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("p",null,"GitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your GitHub connection at page http://localhost:4000/connections/github."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner"),": Just take a look at the URL: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake"),", owner is ",(0,i.kt)("inlineCode",{parentName:"li"},"apache"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo"),": Just take a look at the URL: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake"),", repo is ",(0,i.kt)("inlineCode",{parentName:"li"},"incubator-devlake"),".")),(0,i.kt)("h3",{id:"2-gitlab"},"2. GitLab"),(0,i.kt)("p",null,"Collect multiple GitLab repos sequentially."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When there're multiple collection tasks against a single data source, we recommend running these tasks sequentially since the collection speed is mostly limited by the API rate limit of the data source.\nRunning multiple tasks against the same data source is unlikely to speed up the process and may overwhelm the data source.")),(0,i.kt)("p",null,"Below is an example for collecting 2 GitLab repos sequentially. It has 2 stages, each contains a GitLab task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "connectionId": 1,\n        "projectId": 152***74\n      }\n    }\n  ],\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "connectionId": 2,\n        "projectId": 116***98\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your GitLab connection at page http://localhost:4000/connections/gitlab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectId"),": GitLab repo's Project ID.")),(0,i.kt)("h3",{id:"3-jenkins"},"3. Jenkins"),(0,i.kt)("p",null,"Collect multiple Jenkins jobs sequentially. Below is an example for collecting 2 Jenkins jobs sequentially. It has 2 stages, each contains a Jenkins task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "jenkins",\n            "options": {\n                "connectionId": 1,\n                "scopeId": "auto_deploy"\n            }\n        }\n    ],\n    [\n        {\n            "plugin": "jenkins",\n            "options": {\n                "connectionId": 2,\n                "scopeId": "Deploy test"\n            }\n        }\n    ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your Jenkins connection at page http://localhost:4000/connections/jenkins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scopeId"),": Jenkins job name.")),(0,i.kt)("h3",{id:"4-jira"},"4. Jira"),(0,i.kt)("p",null,"Collect multiple Jira boards sequentially. Below is an example for collecting 2 Jira boards sequentially. It has 2 stages, each contains a Jira task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "jira",\n            "options": {\n                "boardId": 8,\n                "connectionId": 1\n            }\n        }\n    ],\n    [\n        {\n            "plugin": "jira",\n            "options": {\n                "boardId": 26,\n                "connectionId": 1\n            }\n        }\n    ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your Jira connection at page http://localhost:4000/connections/jira."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),": Just take a look at the URL - it will be the last number in the address. Should look something like this at the end: ",(0,i.kt)("inlineCode",{parentName:"li"},"RapidBoard.jspa?rapidView=8")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/projects/xxx/boards/8"),". So ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," would be the board ID in that case.")),(0,i.kt)("h3",{id:"5-jira--gitlab"},"5. Jira + GitLab"),(0,i.kt)("p",null,"Below is an example for collecting a GitLab repo and a Jira board in parallel. It has a single stage with a GitLab task and a Jira task. As GitLab and Jira are using their own tokens, they can be executed in parallel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin":"jira",\n            "options":{\n                "boardId":8,\n                "connectionId":1\n            }\n        }\n    ],\n    [\n        {\n            "Plugin":"gitlab",\n            "Options":{\n                "connectionId":1,\n                "projectId":116***98\n            }\n        }\n    ]\n]\n')),(0,i.kt)("h3",{id:"6-tapd"},"6. TAPD"),(0,i.kt)("p",null,"Below is an example for collecting a TAPD workspace. Since users can configure multiple TAPD connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for TAPD task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "createdDateAfter": "2006-01-02T15:04:05Z",\n                "workspaceId": 34***66,\n                "connectionId": 1\n            }\n        }\n    ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createdDateAfter"),": The data range you wish to collect after the given date."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your TAPD connection at page http://localhost:4000/connections/tapd."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workspaceId"),": TAPD workspace id, you can get it from two ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"url: ",(0,i.kt)("img",{alt:"tapd-workspace-id",src:t(51604).Z,width:"590",height:"30"})),(0,i.kt)("li",{parentName:"ul"},"db: you can check workspace info from db.","_","tool_tapd_workspaces and get all workspaceId you want to collect after execution of the following json in ",(0,i.kt)("inlineCode",{parentName:"li"},"advanced mode"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "tapd",\n      "options": {\n        "companyId": 558***09,\n        "workspaceId": 1,\n        "connectionId": 1\n      },\n      "subtasks": ["collectCompanies", "extractCompanies"]\n    }\n  ]\n]\n')))))),(0,i.kt)("h3",{id:"7-tapd--gitlab"},"7. TAPD + GitLab"),(0,i.kt)("p",null,"Below is an example for collecting a TAPD workspace and a GitLab repo in parallel. It has a single stage with a TAPD task and a GitLab task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "createdDateAfter": "2006-01-02T15:04:05Z",\n                "workspaceId": 6***14,\n                "connectionId": 1\n            }\n        }\n    ],\n    [\n        {\n            "Plugin":"gitlab",\n            "Options":{\n                "connectionId":1,\n                "projectId":116***98\n            }\n        }\n    ]\n]\n')),(0,i.kt)("h3",{id:"8-zentao"},"8. Zentao"),(0,i.kt)("p",null,"Below is an example for collecting a Zentao workspace. Since users can configure multiple Zentao connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for Zentao task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[\n  [\n    {\n      plugin: 'zentao',\n      options: {\n        connectionId: 1,\n        productId: 1,\n        projectId: 1,\n        executionId: 1\n      }\n    }\n  ]\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your Zentao connection at page http://localhost:4000/connections/zentao."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"productId"),': optional, ZENTAO product id, see "Find Product Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectId"),': optional, ZENTAO product id, see "Find Project Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executionId"),': optional, ZENTAO product id, see "Find Execution Id" for details.')),(0,i.kt)("p",null,"You must choose at least one of ",(0,i.kt)("inlineCode",{parentName:"p"},"productId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"executionId"),"."),(0,i.kt)("h4",{id:"find-product-id"},"Find Product Id"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Zentao Product in the browser\n",(0,i.kt)("img",{src:t(82107).Z,width:"1665",height:"378"})),(0,i.kt)("li",{parentName:"ol"},"Click the red square annotated in the pic above\n",(0,i.kt)("img",{src:t(91088).Z,width:"1663",height:"450"})),(0,i.kt)("li",{parentName:"ol"},"Then the number in the red circle above is ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductId"))),(0,i.kt)("h4",{id:"find-project-id"},"Find Project Id"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Zentao Project in the browser\n",(0,i.kt)("img",{src:t(81572).Z,width:"1655",height:"238"})),(0,i.kt)("li",{parentName:"ol"},"Then the number in the red square above is ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectId"))),(0,i.kt)("h4",{id:"find-execution-id"},"Find Execution Id"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Zentao Execution in the browser\n",(0,i.kt)("img",{src:t(54393).Z,width:"1656",height:"252"})),(0,i.kt)("li",{parentName:"ol"},"Then the number in the red square above is ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecutionId"))),(0,i.kt)("h3",{id:"9-bitbucket"},"9. BitBucket"),(0,i.kt)("p",null,"Below is an example for collecting a bitbucket repo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "bitbucket",\n      "options": {\n        "connectionId": 1,\n        "owner": "apache",\n        "repo": "devlake"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your bitbucket connection at page http://localhost:4000/connections/bitbucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner"),": the owner of the repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo"),": the bitbucket repository name.")),(0,i.kt)("h3",{id:"10-sonarqube"},"10. SonarQube"),(0,i.kt)("p",null,"Below is an example for collecting a SonarQube project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "sonarqube",\n      "options": {\n        "connectionId": 1,\n        "projectKey": "testDevLake"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your SonarQube connection at page http://localhost:4000/connections/sonarqube."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectKey"),": The project key of the SonarQube. To find the project key in SonarQube, please follow the steps:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Log in to the SonarQube management page."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Find the project for which you want to find the project key."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Click on the project name to enter the project homepage."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},'In the top menu bar of the project homepage, select "Project Information".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:5},(0,i.kt)("li",{parentName:"ol"},'On the "Project Information" page, you will see the project key.')))))),(0,i.kt)("h3",{id:"11-teambition"},"11. Teambition"),(0,i.kt)("p",null,"Below is an example for collecting a Teambition project. Since users can configure multiple Teambition connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for Teambition task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        {\n            "plugin": "teambition",\n            "options": {\n                "createdDateAfter": "2006-01-02T15:04:05Z",\n                "projectId": "5e5****376",\n                "connectionId": 1\n            }\n        }\n    ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ID of your Teambition connection at page http://localhost:4000/connections/teambition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectId"),": Teambition project id, you can get it from url: ",(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/3294100/229808849-66dac8c0-5ff6-459b-850c-62bc60a3a519.png",alt:"image"}))),(0,i.kt)("h2",{id:"editing-a-blueprint-advanced-mode"},"Editing a Blueprint (Advanced Mode)"),(0,i.kt)("p",null,"This section is for editing a Blueprint in the Advanced Mode. To edit in the Normal mode, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Configuration/Tutorial#editing-a-blueprint-normal-mode"},"this guide"),"."),(0,i.kt)("p",null,"To edit a Blueprint created in the Advanced mode, you can simply go the Configuration page of that Blueprint and edit its configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:t(16551).Z,width:"924",height:"599"})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}s.isMDXComponent=!0},96371:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AdvancedMode1-b57f41fff7e23f19c2af911e2adaddcf.png"},83684:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AdvancedMode2-3dd7ce37847a5d866cad6d9a45779830.png"},87850:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AdvancedMode3-9194e51e02f239171d9f920cb9d3dd6c.png"},16551:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/blueprint-edit2-ca4a8895cfae74109b65dcdbda816ce3.png"},51604:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tapd-find-workspace-id-9ff3c284a5966c50cb962518da677028.png"},54393:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/zentao-execution-id-498b8dc784a8e78ebadc01f07f613589.png"},91088:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/zentao-product-id-e446124e43c79f4a6a17855d1d64ad13.png"},82107:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/zentao-product-7ce1f181a027be0785868c2129d778c5.png"},81572:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/zentao-project-id-5b01a92ea6a9275b6bdf4b33b7485ebd.png"}}]);