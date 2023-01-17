"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4197],{23213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));a(61839);const l={title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},r=void 0,n={unversionedId:"QuickStart/TemporalSetup",id:"version-v0.12/QuickStart/TemporalSetup",title:"Install via Temporal",description:"The steps to install DevLake in Temporal mode.\n",source:"@site/versioned_docs/version-v0.12/QuickStart/TemporalSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/TemporalSetup",permalink:"/docs/v0.12/QuickStart/TemporalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/QuickStart/TemporalSetup.md",tags:[],version:"v0.12",sidebarPosition:6,frontMatter:{title:"Install via Temporal",sidebar_position:6,description:"The steps to install DevLake in Temporal mode.\n"},sidebar:"docsSidebar",previous:{title:"Install via Kubernetes",permalink:"/docs/v0.12/QuickStart/KubernetesSetup"},next:{title:"Tutorial",permalink:"/docs/v0.12/UserManuals/ConfigUI/Tutorial"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Temporal Demo",id:"temporal-demo",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to setup",id:"how-to-setup",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Normally, DevLake would execute pipelines on a local machine (we call it ",(0,o.kt)("inlineCode",{parentName:"p"},"local mode"),"), it is sufficient most of the time. However, when you have too many pipelines that need to be executed in parallel, it can be problematic, as the horsepower and throughput of a single machine is limited."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"temporal mode")," was added to support distributed pipeline execution, you can fire up arbitrary workers on multiple machines to carry out those pipelines in parallel to overcome the limitations of a single machine."),(0,o.kt)("p",null,"But, be careful, many API services like JIRA/GITHUB have a request rate limit mechanism. Collecting data in parallel against the same API service with the same identity would most likely hit such limit."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"DevLake Server and Workers connect to the same temporal server by setting up ",(0,o.kt)("inlineCode",{parentName:"li"},"TEMPORAL_URL")),(0,o.kt)("li",{parentName:"ol"},"DevLake Server sends a ",(0,o.kt)("inlineCode",{parentName:"li"},"pipeline")," to the temporal server, and one of the Workers pick it up and execute it")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT: This feature is in early stage of development. Please use with caution")),(0,o.kt)("h2",{id:"temporal-demo"},"Temporal Demo"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio"))),(0,o.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone and fire up  ",(0,o.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio")," services"),(0,o.kt)("li",{parentName:"ol"},"Clone this repo, and fire up DevLake with command ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose -f docker-compose-temporal.yml up -d"))))}u.isMDXComponent=!0}}]);