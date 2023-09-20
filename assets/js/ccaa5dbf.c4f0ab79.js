"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[29905],{19781:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));t(61839);const a={title:"PR Pickup Time",description:"PR Pickup Time\n",sidebar_position:16},o=void 0,s={unversionedId:"Metrics/PRPickupTime",id:"version-v0.17/Metrics/PRPickupTime",title:"PR Pickup Time",description:"PR Pickup Time\n",source:"@site/versioned_docs/version-v0.17/Metrics/PRPickupTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRPickupTime",permalink:"/docs/v0.17/Metrics/PRPickupTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Metrics/PRPickupTime.md",tags:[],version:"v0.17",sidebarPosition:16,frontMatter:{title:"PR Pickup Time",description:"PR Pickup Time\n",sidebar_position:16},sidebar:"docsSidebar",previous:{title:"PR Coding Time",permalink:"/docs/v0.17/Metrics/PRCodingTime"},next:{title:"PR Review Time",permalink:"/docs/v0.17/Metrics/PRReviewTime"}},l={},p=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:p};function d(e){let{components:i,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The time it takes from when a PR is issued until the first comment is added to that PR. "),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"PR Pickup Time shows how engaged your team is in collaborative work by identifying the delay in picking up PRs. "),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,r.kt)("b",null,"Data Transformation Required"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"The following SQL shows how to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"pickup time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.project_pr_metrics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n  pr_pickup_time/60 as 'PR Pickup Time(h)'\nFROM\n  project_pr_metrics\n")),(0,r.kt)("p",null,"If you want to measure the monthly trend of ",(0,r.kt)("inlineCode",{parentName:"p"},"PR pickup time")," in the screenshot below, please run the following SQL in Grafana. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(47953).Z,width:"1115",height:"298"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(pr.created_date), INTERVAL -DAY(date(pr.created_date))+1 DAY) as time,\n  avg(ppm.pr_pickup_time)/60 as 'PR Pickup Time(h)'\nFROM \n  pull_requests pr\n  JOIN project_pr_metrics ppm ON pr.id = ppm.id\nGROUP BY 1\nORDER BY 1\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use DevLake's dashboard to monitor your delivery progress;"),(0,r.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,r.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued.")))}d.isMDXComponent=!0},47953:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pr-pickup-time-monthly-c1b29ac4df1b6212190c74117de512f6.png"}}]);