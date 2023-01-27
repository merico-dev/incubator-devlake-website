"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9305],{3510:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(61839);const s={title:"Bug Age",description:"Bug Age\n",sidebar_position:5},o=void 0,r={unversionedId:"Metrics/BugAge",id:"version-v0.15/Metrics/BugAge",title:"Bug Age",description:"Bug Age\n",source:"@site/versioned_docs/version-v0.15/Metrics/BugAge.md",sourceDirName:"Metrics",slug:"/Metrics/BugAge",permalink:"/zh/docs/Metrics/BugAge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Metrics/BugAge.md",tags:[],version:"v0.15",sidebarPosition:5,frontMatter:{title:"Bug Age",description:"Bug Age\n",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Requirement Granularity",permalink:"/zh/docs/Metrics/RequirementGranularity"},next:{title:"Bug Count per 1k Lines of Code",permalink:"/zh/docs/Metrics/BugCountPer1kLinesOfCode"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The amount of time it takes a bug to fix."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Help the team to establish an effective hierarchical response mechanism for bugs. Focus on the resolution of important problems in the backlog."),(0,n.kt)("li",{parentName:"ol"},"Improve team's and individual's bug fixing efficiency. Identify good/to-be-improved practices that affect bug age age")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/QAEngineers/WeeklyBugRetro"},"Weekly Bug Retro"))),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/RequirementLeadTime"},"requirement lead time"),", this metric equals ",(0,n.kt)("inlineCode",{parentName:"p"},"resolution_date - created_date"),' of issues in type "BUG".'),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on ",(0,n.kt)("inlineCode",{parentName:"p"},"issues")," collected from Jira, GitHub, or TAPD."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"This metric relies on the 'type-bug' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,n.kt)("inlineCode",{parentName:"p"},"bugs"),"."),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find the bug age of a specific ",(0,n.kt)("inlineCode",{parentName:"p"},"bug"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- lead_time_minutes is a pre-calculated field whose value equals 'resolution_date - created_date'\nSELECT\n  lead_time_minutes/1440 as bug_age_in_days\nFROM\n  issues\nWHERE\n  type = 'BUG'\n")),(0,n.kt)("p",null,"If you want to measure the ",(0,n.kt)("inlineCode",{parentName:"p"},"mean bug age")," in the screenshot below, please run the following SQL in Grafana."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(78379).Z,width:"1135",height:"346"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"with _bugs as(\n  SELECT\n    DATE_ADD(date(i.resolution_date), INTERVAL -DAY(date(i.resolution_date))+1 DAY) as time,\n    AVG(i.lead_time_minutes/1440) as issue_lead_time\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\n  WHERE\n    -- $board_id is a variable defined in Grafana's dashboard settings to filter out issues by boards\n    b.id in ($board_id)\n    and i.status = \"DONE\"\n    and i.type = 'BUG'\n    and $__timeFilter(i.resolution_date)\n    -- the following condition will remove the month with incomplete data\n    and i.resolution_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  issue_lead_time as \"Mean Bug Age in Days\"\nFROM _bugs\nORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Observe the trend of bug age and locate the key reasons."),(0,n.kt)("li",{parentName:"ol"},"Compare the age of bugs by severity levels, types (business, functional classification), affected components, etc.")))}m.isMDXComponent=!0},78379:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/bug-age-monthly-4463714643145a716df6de60a6b7005c.png"}}]);