"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[99602],{42129:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=i(87462),r=(i(67294),i(3905));i(61839);const a={title:"Recurring Pipelines",sidebar_position:3,description:"Recurring Pipelines\n"},l=void 0,s={unversionedId:"UserManuals/RecurringPipelines",id:"version-v0.11/UserManuals/RecurringPipelines",title:"Recurring Pipelines",description:"Recurring Pipelines\n",source:"@site/versioned_docs/version-v0.11/UserManuals/RecurringPipelines.md",sourceDirName:"UserManuals",slug:"/UserManuals/RecurringPipelines",permalink:"/zh/docs/v0.11/UserManuals/RecurringPipelines",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/UserManuals/RecurringPipelines.md",tags:[],version:"v0.11",sidebarPosition:3,frontMatter:{title:"Recurring Pipelines",sidebar_position:3,description:"Recurring Pipelines\n"},sidebar:"docsSidebar",previous:{title:"Advanced Mode",permalink:"/zh/docs/v0.11/UserManuals/AdvancedMode"},next:{title:"GitHub User Guide",permalink:"/zh/docs/v0.11/UserManuals/GitHubUserGuide"}},p={},o=[{value:"How to create recurring pipelines?",id:"how-to-create-recurring-pipelines",level:2}],u={toc:o};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-create-recurring-pipelines"},"How to create recurring pipelines?"),(0,r.kt)("p",null,"Once you've verified that a pipeline works, most likely you'll want to run that pipeline periodically to keep data fresh, and DevLake's pipeline blueprint feature have got you covered."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click 'Create Pipeline Run' and")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toggle the plugins you'd like to run, here we use GitHub and GitExtractor plugin as an example"),(0,r.kt)("li",{parentName:"ul"},"Toggle on Automate Pipeline\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/14050754/163596590-484e4300-b17e-4119-9818-52463c10b889.png",alt:"image"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Add Blueprint'. Fill in the form and 'Save Blueprint'."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE"),": The schedule syntax is standard unix cron syntax, ",(0,r.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"Crontab.guru")," is an useful reference"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IMPORANT"),": The scheduler is running using the ",(0,r.kt)("inlineCode",{parentName:"li"},"UTC")," timezone. If you want data collection to happen at 3 AM New York time (UTC-04:00) every day, use ",(0,r.kt)("strong",{parentName:"li"},"Custom Shedule")," and set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"0 7 * * *"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596655-db59e154-405f-4739-89f2-7dceab7341fe.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Save Blueprint'.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Pipeline Blueprints', you can view and edit the new blueprint in the blueprint list."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596773-4fb4237e-e3f2-4aef-993f-8a1499ca30e2.png",alt:"image"})))))}c.isMDXComponent=!0}}]);