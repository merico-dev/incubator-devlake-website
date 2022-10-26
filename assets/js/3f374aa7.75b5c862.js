"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6071],{59551:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));i(61839);const s={title:"Incident Age",description:"Incident Age\n",sidebar_position:10},a=void 0,r={unversionedId:"Metrics/IncidentAge",id:"Metrics/IncidentAge",title:"Incident Age",description:"Incident Age\n",source:"@site/docs/Metrics/IncidentAge.md",sourceDirName:"Metrics",slug:"/Metrics/IncidentAge",permalink:"/docs/next/Metrics/IncidentAge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/IncidentAge.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Incident Age",description:"Incident Age\n",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Bug Age",permalink:"/docs/next/Metrics/BugAge"},next:{title:"Pull Request Count",permalink:"/docs/next/Metrics/PRCount"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The amount of time it takes a incident to fix."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Help the team to establish an effective hierarchical response mechanism for incidents. Focus on the resolution of important problems in the backlog."),(0,o.kt)("li",{parentName:"ol"},"Improve team's and individual's incident fixing efficiency. Identify good/to-be-improved practices that affect incident age")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jira"),(0,o.kt)("li",{parentName:"ul"},"GitHub")),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric equals to ",(0,o.kt)("inlineCode",{parentName:"p"},"resolution_date")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"created_date"),' of issues in type "INCIDENT".'),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,o.kt)("b",null,"Transformation Rules Required"),(0,o.kt)("p",null,"This metric relies on the 'type-incident' configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,o.kt)("inlineCode",{parentName:"p"},"Incidents"),"."),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Observe the trend of incident age and locate the key reasons."),(0,o.kt)("li",{parentName:"ol"},"According to the severity level, type (business, functional classification), affected module, source of bugs, count and observe the length of incident age.")))}u.isMDXComponent=!0}}]);