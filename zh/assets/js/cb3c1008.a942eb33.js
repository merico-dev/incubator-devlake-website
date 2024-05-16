"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[32721],{16784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));n(61839);const l={title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:29},r=void 0,d={unversionedId:"Metrics/CFR",id:"Metrics/CFR",title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",source:"@site/docs/Metrics/CFR.md",sourceDirName:"Metrics",slug:"/Metrics/CFR",permalink:"/zh/docs/Metrics/CFR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CFR.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:29},sidebar:"docsSidebar",previous:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/Metrics/MTTR"},next:{title:"Code Quality Issue Count",permalink:"/zh/docs/Metrics/CQIssueCount"}},o={},s=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The percentage of changes that were made to a code that then resulted in incidents, rollbacks, or any type of production failure."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"Unlike Deployment Frequency and Lead Time for Changes that measure the throughput, Change Failure Rate measures the stability and quality of software delivery. A low CFR reflects a bad end-user experience as the production failure is relatively high."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"DORA dashboard. See ",(0,i.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"The number of deployments affected by incidents/total number of deployments. For example, if there are five deployments and two deployments cause one or more incidents, that is a 40% change failure rate."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62531).Z,width:"3796",height:"938"})),(0,i.kt)("p",null,"When there are multiple deployments triggered by one pipeline, tools like GitLab and BitBucket will generate more than one deployment. In these cases, DevLake will consider these deployments as ONE deployment and use the last deployment's finished date as the deployment finished date."),(0,i.kt)("p",null,"Below are the 2023 DORA benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's change failure rate is between 15% and 64%. Therefore, DevLake provides its own benchmarks to address this problem:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"5%"),(0,i.kt)("td",{parentName:"tr",align:null},"(0, 5%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"10%"),(0,i.kt)("td",{parentName:"tr",align:null},"(5%, 10%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"15%"),(0,i.kt)("td",{parentName:"tr",align:null},"(10%, 15%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"64%"),(0,i.kt)("td",{parentName:"tr",align:null},"(15%, 100%]")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to expand or collapse 2021 DORA benchmarks"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"0%-15%"),(0,i.kt)("td",{parentName:"tr",align:null},"(0, 15%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"(16%, 20%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"(21%, 30%]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,i.kt)("td",{parentName:"tr",align:null},"(30%, 100%]")))),(0,i.kt)("p",null,(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google"))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployments")," from Jenkins, GitLab CI, GitHub Action, BitBucket Pipelines, or Webhook, etc. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incidents")," from Jira issues, GitHub issues, TAPD issues, PagerDuty Incidents, etc.")),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"Define ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incident")," in ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Configuration/Tutorial#step-3---add-transformations-optional"},"data transformations")," while configuring the blueprint of a project to let DevLake know what CI/issue records can be regarded as deployments or incidents."),(0,i.kt)("b",null,"SQL Queries"),(0,i.kt)("p",null,"If you want to measure the monthly trend of Change Failure Rate, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81282).Z,width:"1237",height:"301"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- Metric 4: change failure rate per month\nwith _deployments as (\n-- When deploying multiple commits in one pipeline, GitLab and BitBucket may generate more than one deployment. However, DevLake consider these deployments as ONE production deployment and use the last one's finished_date as the finished date.\n    SELECT\n        cdc.cicd_deployment_id as deployment_id,\n        max(cdc.finished_date) as deployment_finished_date\n    FROM \n        cicd_deployment_commits cdc\n        JOIN project_mapping pm on cdc.cicd_scope_id = pm.row_id and pm.`table` = 'cicd_scopes'\n    WHERE\n        pm.project_name in (${project:sqlstring}+'')\n        and cdc.result = 'SUCCESS'\n        and cdc.environment = 'PRODUCTION'\n    GROUP BY 1\n    HAVING $__timeFilter(max(cdc.finished_date))\n),\n\n_failure_caused_by_deployments as (\n-- calculate the number of incidents caused by each deployment\n    SELECT\n        d.deployment_id,\n        d.deployment_finished_date,\n        count(distinct case when i.type = 'INCIDENT' then d.deployment_id else null end) as has_incident\n    FROM\n        _deployments d\n        left join project_issue_metrics pim on d.deployment_id = pim.deployment_id\n        left join issues i on pim.id = i.id\n    GROUP BY 1,2\n),\n\n_change_failure_rate_for_each_month as (\n    SELECT \n        date_format(deployment_finished_date,'%y/%m') as month,\n        case \n            when count(deployment_id) is null then null\n            else sum(has_incident)/count(deployment_id) end as change_failure_rate\n    FROM\n        _failure_caused_by_deployments\n    GROUP BY 1\n)\n\nSELECT \n    cm.month,\n    cfr.change_failure_rate\nFROM \n    calendar_months cm\n    LEFT JOIN _change_failure_rate_for_each_month cfr on cm.month = cfr.month\n    WHERE $__timeFilter(cm.month_timestamp)\n")),(0,i.kt)("p",null,"If you want to measure in which category your team falls, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63226).Z,width:"449",height:"185"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-- Metric 3: change failure rate\nwith _deployments as (\n-- When deploying multiple commits in one pipeline, GitLab and BitBucket may generate more than one deployment. However, DevLake consider these deployments as ONE production deployment and use the last one\'s finished_date as the finished date.\n    SELECT\n        cdc.cicd_deployment_id as deployment_id,\n        max(cdc.finished_date) as deployment_finished_date\n    FROM \n        cicd_deployment_commits cdc\n        JOIN project_mapping pm on cdc.cicd_scope_id = pm.row_id and pm.`table` = \'cicd_scopes\'\n    WHERE\n        pm.project_name in (${project})\n        and cdc.result = \'SUCCESS\'\n        and cdc.environment = \'PRODUCTION\'\n    GROUP BY 1\n    HAVING $__timeFilter(max(cdc.finished_date))\n),\n\n_failure_caused_by_deployments as (\n-- calculate the number of incidents caused by each deployment\n    SELECT\n        d.deployment_id,\n        d.deployment_finished_date,\n        count(distinct case when i.type = \'INCIDENT\' then d.deployment_id else null end) as has_incident\n    FROM\n        _deployments d\n        left join project_issue_metrics pim on d.deployment_id = pim.deployment_id\n        left join issues i on pim.id = i.id\n    GROUP BY 1,2\n),\n\n_change_failure_rate as (\n    SELECT \n        case \n            when count(deployment_id) is null then null\n            else sum(has_incident)/count(deployment_id) end as change_failure_rate\n    FROM\n        _failure_caused_by_deployments\n),\n\n_is_collected_data as(\n    SELECT\n        CASE \n        WHEN COUNT(i.id) = 0 AND COUNT(cdc.id) = 0 THEN \'No All\'\n        WHEN COUNT(i.id) = 0 THEN \'No Incidents\' \n        WHEN COUNT(cdc.id) = 0 THEN \'No Deployments\'\n        END AS is_collected\nFROM\n    (SELECT 1) AS dummy\nLEFT JOIN\n    issues i ON i.type = \'INCIDENT\'\nLEFT JOIN\n    cicd_deployment_commits cdc ON 1=1\n)\n\n\nSELECT\n  CASE\n    WHEN (\'$dora_report\') = \'2023\' THEN\n            CASE  \n                WHEN is_collected = "No All"  THEN "N/A. Please check if you have collected deployments/incidents."\n                WHEN is_collected = "No Incidents"  THEN "N/A. Please check if you have collected incidents."\n                WHEN is_collected = "No Deployments"  THEN "N/A. Please check if you have collected deployments."\n                WHEN change_failure_rate <= .05 THEN CONCAT(round(change_failure_rate*100,1), "%(elite)")\n                WHEN change_failure_rate <= .10 THEN CONCAT(round(change_failure_rate*100,1), "%(high)")\n                WHEN change_failure_rate <= .15 THEN CONCAT(round(change_failure_rate*100,1), "%(medium)")\n                WHEN change_failure_rate > .15 THEN CONCAT(round(change_failure_rate*100,1), "%(low)")\n                ELSE "N/A. Please check if you have collected deployments/incidents."\n                END\n        WHEN (\'$dora_report\') = \'2021\' THEN\n            CASE  \n              WHEN is_collected = "No All"  THEN "N/A. Please check if you have collected deployments/incidents."\n                WHEN is_collected = "No Incidents"  THEN "N/A. Please check if you have collected incidents."\n                WHEN is_collected = "No Deployments"  THEN "N/A. Please check if you have collected deployments."\n                WHEN change_failure_rate <= .15 THEN CONCAT(round(change_failure_rate*100,1), "%(elite)")\n                WHEN change_failure_rate <= .20 THEN CONCAT(round(change_failure_rate*100,1), "%(high)")\n                WHEN change_failure_rate <= .30 THEN CONCAT(round(change_failure_rate*100,1), "%(medium)")\n                WHEN change_failure_rate > .30 THEN CONCAT(round(change_failure_rate*100,1), "%(low)") \n                ELSE "N/A. Please check if you have collected deployments/incidents."\n                END\n        ELSE \'Invalid dora report\'\n    END AS change_failure_rate\nFROM \n    _change_failure_rate, _is_collected_data\n')),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add unit tests for all new feature"),(0,i.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,i.kt)("li",{parentName:"ul"},"Enforce code review if it's not strictly executed")))}m.isMDXComponent=!0},62531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-definition-94d92cc75f857f183443ad5390d31d65.png"},81282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-monthly-78a4c5dd7640417bb22742a2b3453912.jpeg"},63226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cfr-text-b4ada4fdcf2f1f21302ffef16869514e.png"}}]);