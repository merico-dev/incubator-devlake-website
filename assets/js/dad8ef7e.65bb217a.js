"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[96691],{46530:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));t(61839);const s={title:"Incident Age",description:"Incident Age\n",sidebar_position:7},o=void 0,d={unversionedId:"Metrics/IncidentAge",id:"version-v0.19/Metrics/IncidentAge",title:"Incident Age",description:"Incident Age\n",source:"@site/versioned_docs/version-v0.19/Metrics/IncidentAge.md",sourceDirName:"Metrics",slug:"/Metrics/IncidentAge",permalink:"/docs/v0.19/Metrics/IncidentAge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/Metrics/IncidentAge.md",tags:[],version:"v0.19",sidebarPosition:7,frontMatter:{title:"Incident Age",description:"Incident Age\n",sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Bug Count per 1k Lines of Code",permalink:"/docs/v0.19/Metrics/BugCountPer1kLinesOfCode"},next:{title:"Incident Count per 1k Lines of Code",permalink:"/docs/v0.19/Metrics/IncidentCountPer1kLinesOfCode"}},r={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:l};function u(e){let{components:i,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The amount of time it takes an incident to fix."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Help the team to establish an effective hierarchical response mechanism for incidents. Focus on the resolution of important problems in the backlog."),(0,a.kt)("li",{parentName:"ol"},"Improve team's and individual's incident fixing efficiency. Identify good/to-be-improved practices that affect incident age")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.19/Metrics/RequirementLeadTime"},"requirement lead time"),", this metric equals ",(0,a.kt)("inlineCode",{parentName:"p"},"resolution_date - created_date"),' of issues in type "INCIDENT".'),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on ",(0,a.kt)("inlineCode",{parentName:"p"},"issues")," collected from Jira, GitHub, TAPD, or PagerDuty."),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on the 'type-incident' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,a.kt)("inlineCode",{parentName:"p"},"incidents"),"."),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the incident age of a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"incident"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- lead_time_minutes is a pre-calculated field whose value equals 'resolution_date - created_date'\nSELECT\n  lead_time_minutes/1440 as incident_age_in_days\nFROM\n  issues\nWHERE\n  type = 'INCIDENT'\n")),(0,a.kt)("p",null,"If you want to measure the ",(0,a.kt)("inlineCode",{parentName:"p"},"mean incident age")," in the screenshot below, please run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(84518).Z,width:"1255",height:"377"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"with _incidents as(\n  SELECT\n    DATE_ADD(date(i.resolution_date), INTERVAL -DAY(date(i.resolution_date))+1 DAY) as time,\n    AVG(i.lead_time_minutes/1440) as issue_lead_time\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\n  WHERE\n    -- $board_id is a variable defined in Grafana's dashboard settings to filter out issues by boards\n    b.id in ($board_id)\n    and i.status = \"DONE\"\n    and i.type = 'INCIDENT'\n    and $__timeFilter(i.resolution_date)\n    -- the following condition will remove the month with incomplete data\n    and i.resolution_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  issue_lead_time as \"Mean Incident Age in Days\"\nFROM _incidents\nORDER BY time\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Observe the trend of incident age and locate the key reasons."),(0,a.kt)("li",{parentName:"ol"},"Compare the age of incidents by severity levels, types (business, functional classification), affected components, etc.")))}u.isMDXComponent=!0},84518:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/incident-age-monthly-98ad510805ed2538c125c7eba2f1aed7.png"}}]);