"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[71994],{4064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));n(61839);const r={title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:28},o=void 0,s={unversionedId:"Metrics/MTTR",id:"Metrics/MTTR",title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",source:"@site/docs/Metrics/MTTR.md",sourceDirName:"Metrics",slug:"/Metrics/MTTR",permalink:"/zh/docs/Metrics/MTTR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/MTTR.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:28},sidebar:"docsSidebar",previous:{title:"DORA - Median Lead Time for Changes",permalink:"/zh/docs/Metrics/LeadTimeForChanges"},next:{title:"DORA - Change Failure Rate",permalink:"/zh/docs/Metrics/CFR"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:l};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The time to restore service after service incidents, rollbacks, or any type of production failure happened."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"This metric is essential to measure the disaster control capability of your team and the robustness of the software."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"DORA dashboard. See ",(0,a.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"MTTR = Total ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/IncidentAge"},"incident age")," (in hours)/number of incidents."),(0,a.kt)("p",null,"If you have three incidents that happened in the given data range, one lasting 1 hour, one lasting 2 hours and one lasting 3 hours. Your MTTR will be: (1 + 2 + 3) / 3 = 2 hours."),(0,a.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's median time to restore service is ",(0,a.kt)("inlineCode",{parentName:"p"},"between one week and six months"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,a.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less one day"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than one day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,a.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,a.kt)("td",{parentName:"tr",align:null},"More than one week")))),(0,a.kt)("p",null,(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deployments")," from Jenkins, GitLab CI, GitHub Action, BitBucket Pipelines, or Webhook, etc. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Incidents")," from Jira issues, GitHub issues, TAPD issues, PagerDuty Incidents, etc.")),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"Define ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"incident")," in ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Configuration/Tutorial#step-3---add-transformations-optional"},"data transformations")," while configuring the blueprint of a project to let DevLake know what CI/issue records can be regarded as deployments or incidents."),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"If you want to measure the monthly trend of the Median Time to Restore Service as the picture shown below, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(40518).Z,width:"1354",height:"602"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- Metric 3: median time to restore service - MTTR\nwith _incidents as (\n-- get the number of incidents created each month\n    SELECT\n      distinct i.id,\n        date_format(i.created_date,'%y/%m') as month,\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues i\n      join board_issues bi on i.id = bi.issue_id\n      join boards b on bi.board_id = b.id\n      join project_mapping pm on b.id = pm.row_id and pm.`table` = 'boards'\n    WHERE\n      pm.project_name in ($project)\n        and i.type = 'INCIDENT'\n        and i.lead_time_minutes is not null\n),\n\n_find_median_mttr_each_month_ranks as(\n    SELECT *, percent_rank() over(PARTITION BY month order by lead_time_minutes) as ranks\n    FROM _incidents\n),\n\n_mttr as(\n    SELECT month, max(lead_time_minutes) as median_time_to_resolve\n    FROM _find_median_mttr_each_month_ranks\n    WHERE ranks <= 0.5\n    GROUP BY month\n)\n\nSELECT\n    cm.month,\n    case\n        when m.median_time_to_resolve is null then 0\n        else m.median_time_to_resolve/60 end as median_time_to_resolve_in_hour\nFROM\n    calendar_months cm\n    LEFT JOIN _mttr m on cm.month = m.month\n  WHERE $__timeFilter(cm.month_timestamp)\n")),(0,a.kt)("p",null,"If you want to measure in which category your team falls into as in the picture shown below, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65213).Z,width:"672",height:"378"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'with _incidents as (\n-- get the incidents created within the selected time period in the top-right corner\n    SELECT\n      distinct i.id,\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues i\n      join board_issues bi on i.id = bi.issue_id\n      join boards b on bi.board_id = b.id\n      join project_mapping pm on b.id = pm.row_id\n    WHERE\n      pm.project_name in ($project)\n        and i.type = \'INCIDENT\'\n        and $__timeFilter(i.created_date)\n),\n\n_median_mttr_ranks as(\n    SELECT *, percent_rank() over(order by lead_time_minutes) as ranks\n    FROM _incidents\n),\n\n_median_mttr as(\n    SELECT max(lead_time_minutes) as median_time_to_resolve\n    FROM _median_mttr_ranks\n    WHERE ranks <= 0.5\n)\n\nSELECT\n    case\n        WHEN median_time_to_resolve < 60  then "Less than one hour"\n    WHEN median_time_to_resolve < 24 * 60 then "Less than one Day"\n    WHEN median_time_to_resolve < 7 * 24 * 60  then "Between one day and one week"\n    WHEN median_time_to_resolve >= 7 * 24 * 60 then "More than one week"\n    ELSE "N/A.Please check if you have collected deployments/incidents."\n    END as median_time_to_resolve\nFROM\n    _median_mttr\n')),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use automated tools to quickly report failure"),(0,a.kt)("li",{parentName:"ul"},"Prioritize recovery when a failure happens"),(0,a.kt)("li",{parentName:"ul"},"Establish a go-to action plan to respond to failures immediately"),(0,a.kt)("li",{parentName:"ul"},"Reduce the deployment time for failure-fixing")))}h.isMDXComponent=!0},40518:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mttr-monthly-71f037b867c1f94523aa18ca7cd2e497.jpeg"},65213:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mttr-text-d8b5e6799ddda9c692bd6a8fbdf05b0f.jpeg"}}]);