"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[84438],{47666:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));i(61839);const r={title:"Requirement Count",description:"Requirement Count\n",sidebar_position:1},o=void 0,s={unversionedId:"Metrics/RequirementCount",id:"version-v0.16/Metrics/RequirementCount",title:"Requirement Count",description:"Requirement Count\n",source:"@site/versioned_docs/version-v0.16/Metrics/RequirementCount.md",sourceDirName:"Metrics",slug:"/Metrics/RequirementCount",permalink:"/docs/v0.16/Metrics/RequirementCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/Metrics/RequirementCount.md",tags:[],version:"v0.16",sidebarPosition:1,frontMatter:{title:"Requirement Count",description:"Requirement Count\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Metrics",permalink:"/docs/v0.16/Metrics"},next:{title:"Requirement Lead Time",permalink:"/docs/v0.16/Metrics/RequirementLeadTime"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The number of delivered requirements or features."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources."),(0,a.kt)("li",{parentName:"ol"},"Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,'This metric is calculated by counting the number of delivered issues in type "REQUIREMENT" in the given data range.'),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"issues")," collected from Jira, GitHub, or TAPD."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"This metric relies on the 'type-requirement' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements"),"."),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the total count of requirements in specific boards, eg. 'board-1' and 'board-2'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select \n  count(*) as \"Requirement Count\"\nfrom issues i\n  join board_issues bi on i.id = bi.issue_id\nwhere \n  i.type = 'REQUIREMENT'\n  and i.status = 'DONE'\n  -- please replace the board ids with your own, or create a '$board_id' variable in Grafana\n  and bi.board_id in ('board-1','board-2')\n  and $__timeFilter(i.created_date)\n")),(0,a.kt)("p",null,"If you want to see the monthly trend of ",(0,a.kt)("inlineCode",{parentName:"p"},"requirement count")," in the screenshot below, please run the following SQL"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(33910).Z,width:"1287",height:"346"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  DATE_ADD(date(i.created_date), INTERVAL -DAYOFMONTH(date(i.created_date))+1 DAY) as time,\n  count(distinct case when status != 'DONE' then i.id else null end) as \"Number of Open Requirements\",\n  count(distinct case when status = 'DONE' then i.id else null end) as \"Number of Delivered Requirements\"\nFROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\nwhere \n  i.type = 'REQUIREMENT'\n  and $__timeFilter(i.created_date)\n  -- please replace the board ids with your own, or create a '$board_id' variable in Grafana\n  and bi.board_id in ($board_id)\ngroup by 1\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Analyze the number of requirements and delivery rate of different time cycles to find the stability and trend of the development process."),(0,a.kt)("li",{parentName:"ol"},"Analyze and compare the number of requirements delivered and delivery rate of each project/team, and compare the scale of requirements of different projects."),(0,a.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration (optimistic, probable and pessimistic values) to provide a reference for iteration estimation."),(0,a.kt)("li",{parentName:"ol"},"Drill down to analyze the number and percentage of requirements in different phases of SDLC. Analyze rationality and identify the requirements stuck in the backlog.")))}c.isMDXComponent=!0},33910:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/requirement-count-monthly-7238fd8f30cdc7d56ee9a2a332d520d6.png"}}]);