"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[55830],{44902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const r={title:"DORA - Median Lead Time for Changes",description:"DORA - Median Lead Time for Changes\n",sidebar_position:27},o=void 0,s={unversionedId:"Metrics/LeadTimeForChanges",id:"version-v0.18/Metrics/LeadTimeForChanges",title:"DORA - Median Lead Time for Changes",description:"DORA - Median Lead Time for Changes\n",source:"@site/versioned_docs/version-v0.18/Metrics/LeadTimeForChanges.md",sourceDirName:"Metrics",slug:"/Metrics/LeadTimeForChanges",permalink:"/zh/docs/v0.18/Metrics/LeadTimeForChanges",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Metrics/LeadTimeForChanges.md",tags:[],version:"v0.18",sidebarPosition:27,frontMatter:{title:"DORA - Median Lead Time for Changes",description:"DORA - Median Lead Time for Changes\n",sidebar_position:27},sidebar:"docsSidebar",previous:{title:"DORA - Deployment Frequency",permalink:"/zh/docs/v0.18/Metrics/DeploymentFrequency"},next:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/v0.18/Metrics/MTTR"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The median amount of time for a code change to be deployed into production."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"This metric measures the time it takes to a code change to the production environment and reflects the speed of software delivery. A lower average change preparation time means that your team is efficient at coding and deploying your project."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"DORA dashboard. See ",(0,i.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"This metric is quite similar to ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.18/Metrics/PRCycleTime"},"PR Cycle Time"),". The difference is that 'Lead Time for Changes' uses a different method to filter PRs."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the PRs' associated deployment commits whose finished_date falls into the time range that users select."),(0,i.kt)("li",{parentName:"ol"},"Find the associated pull requests of the commits diff between two consecutive successful ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment commits")," in the production environment."),(0,i.kt)("li",{parentName:"ol"},"Calculate the PRs' median cycle time. This will be the Median Lead Time for Changes.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(51976).Z,width:"4338",height:"3654"})),(0,i.kt)("p",null,"PR cycle time is pre-calculated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"dora")," plugin during every data collection. You can find it in ",(0,i.kt)("inlineCode",{parentName:"p"},"pr_cycle_time")," in ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/#project_pr_metrics"},"table.project_pr_metrics")," of DevLake's database."),(0,i.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's median lead time for changes is ",(0,i.kt)("inlineCode",{parentName:"p"},"between one week and one month"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one month and six months"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one week and six months")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months")))),(0,i.kt)("p",null,(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployments")," from Jenkins, GitLab CI, GitHub Action, BitBucket Pipelines, Webhook, etc. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pull Requests")," from GitHub PRs, GitLab MRs, BitBucket PRs, Azure DevOps PRs, etc.")),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"Define ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," in ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Configuration/Tutorial#step-3---add-transformations-optional"},"data transformations")," while configuring the blueprint of a project to let DevLake know what CI records can be regarded as deployments."),(0,i.kt)("b",null,"SQL Queries"),(0,i.kt)("p",null,"If you want to measure the monthly trend of median lead time for changes as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95784).Z,width:"1352",height:"606"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- Metric 2: median change lead time per month\nwith _pr_stats as (\n-- get the cycle time of PRs deployed by the deployments finished each month\n    SELECT\n        distinct pr.id,\n        date_format(cdc.finished_date,'%y/%m') as month,\n        ppm.pr_cycle_time\n    FROM\n        pull_requests pr\n        join project_pr_metrics ppm on ppm.id = pr.id\n        join project_mapping pm on pr.base_repo_id = pm.row_id and pm.`table` = 'repos'\n        join cicd_deployment_commits cdc on ppm.deployment_commit_id = cdc.id\n    WHERE\n        pm.project_name in ($project)\n        and pr.merged_date is not null\n        and ppm.pr_cycle_time is not null\n        and $__timeFilter(cdc.finished_date)\n),\n\n_find_median_clt_each_month_ranks as(\n    SELECT *, percent_rank() over(PARTITION BY month order by pr_cycle_time) as ranks\n    FROM _pr_stats\n),\n\n_clt as(\n    SELECT month, max(pr_cycle_time) as median_change_lead_time\n    FROM _find_median_clt_each_month_ranks\n    WHERE ranks <= 0.5\n    group by month\n)\n\nSELECT\n    cm.month,\n    case\n        when _clt.median_change_lead_time is null then 0\n        else _clt.median_change_lead_time/60 end as median_change_lead_time_in_hour\nFROM\n    calendar_months cm\n    LEFT JOIN _clt on cm.month = _clt.month\n  WHERE $__timeFilter(cm.month_timestamp)\n")),(0,i.kt)("p",null,"If you want to measure in which category your team falls as in the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(94320).Z,width:"617",height:"189"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'with _pr_stats as (\n-- get the cycle time of PRs deployed by the deployments finished in the selected period\n    SELECT\n        distinct pr.id,\n        ppm.pr_cycle_time\n    FROM\n        pull_requests pr\n        join project_pr_metrics ppm on ppm.id = pr.id\n        join project_mapping pm on pr.base_repo_id = pm.row_id\n        join cicd_deployment_commits cdc on ppm.deployment_commit_id = cdc.id\n    WHERE\n      pm.project_name in ($project)\n        and pr.merged_date is not null\n        and ppm.pr_cycle_time is not null\n        and $__timeFilter(cdc.finished_date)\n),\n\n_median_change_lead_time_ranks as(\n    SELECT *, percent_rank() over(order by pr_cycle_time) as ranks\n    FROM _pr_stats\n),\n\n_median_change_lead_time as(\n-- use median PR cycle time as the median change lead time\n    SELECT max(pr_cycle_time) as median_change_lead_time\n    FROM _median_change_lead_time_ranks\n    WHERE ranks <= 0.5\n)\n\nSELECT\n  CASE\n    WHEN median_change_lead_time < 60 then "Less than one hour"\n    WHEN median_change_lead_time < 7 * 24 * 60 then "Less than one week"\n    WHEN median_change_lead_time < 180 * 24 * 60 then "Between one week and six months"\n    WHEN median_change_lead_time >= 180 * 24 * 60 then "More than six months"\n    ELSE "N/A.Please check if you have collected deployments/incidents."\n    END as median_change_lead_time\nFROM _median_change_lead_time\n')),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Break requirements into smaller, more manageable deliverables"),(0,i.kt)("li",{parentName:"ul"},"Optimize the code review process"),(0,i.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,i.kt)("li",{parentName:"ul"},"Integrate CI/CD tools to automate the deployment process")))}c.isMDXComponent=!0},95784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lead-time-for-changes-monthly-7086f1b85f30342aa7385a1baaa026d1.jpeg"},94320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lead-time-for-changes-text-a2c1a9e801ca354b58cba010b5de51c4.jpeg"},51976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lead_time_for_changes_definition-3ed4250c3659e07b0dd6e1e2714d4479.png"}}]);