"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2817],{5602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));t(61839);const l={title:"Jenkins",description:"Jenkins Plugin\n"},o=void 0,s={unversionedId:"Plugins/jenkins",id:"version-v0.14/Plugins/jenkins",title:"Jenkins",description:"Jenkins Plugin\n",source:"@site/versioned_docs/version-v0.14/Plugins/jenkins.md",sourceDirName:"Plugins",slug:"/Plugins/jenkins",permalink:"/zh/docs/v0.14/Plugins/jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/Plugins/jenkins.md",tags:[],version:"v0.14",frontMatter:{title:"Jenkins",description:"Jenkins Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/zh/docs/v0.14/Plugins/gitlab"},next:{title:"Jira",permalink:"/zh/docs/v0.14/Plugins/jira"}},r={},u=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>config-ui</code>",id:"by-config-ui",level:3},{value:"Collect Data From Jenkins",id:"collect-data-from-jenkins",level:2},{value:"Relationship between job and build",id:"relationship-between-job-and-build",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Jenkins data through ",(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/remote-access-api/"},"Remote Access API"),". It then computes and visualizes various DevOps metrics from the Jenkins data."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61080/141943122-dcb08c35-cb68-4967-9a7c-87b63c2d6988.png",alt:"image"})),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of builds created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Success Rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The percentage of successful builds")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In order to fully use this plugin, you will need to set various configurations via Dev Lake's ",(0,a.kt)("inlineCode",{parentName:"p"},"config-ui"),"."),(0,a.kt)("h3",{id:"by-config-ui"},"By ",(0,a.kt)("inlineCode",{parentName:"h3"},"config-ui")),(0,a.kt)("p",null,"The connection section of the configuration screen requires the following key fields to connect to the Jenkins API."),(0,a.kt)("h2",{id:"collect-data-from-jenkins"},"Collect Data From Jenkins"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "jenkins",\n      "options": {\n        "connectionId": 1\n      }\n    }\n  ]\n]\n')),(0,a.kt)("h2",{id:"relationship-between-job-and-build"},"Relationship between job and build"),(0,a.kt)("p",null,"Build is kind of a snapshot of job. Running job each time creates a build."))}c.isMDXComponent=!0}}]);