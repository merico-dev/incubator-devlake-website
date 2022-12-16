"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6657],{77300:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(61839);const r={title:"Requirement Delivery Rate",description:"Requirement Delivery Rate\n",sidebar_position:3},s=void 0,o={unversionedId:"Metrics/RequirementDeliveryRate",id:"Metrics/RequirementDeliveryRate",title:"Requirement Delivery Rate",description:"Requirement Delivery Rate\n",source:"@site/docs/Metrics/RequirementDeliveryRate.md",sourceDirName:"Metrics",slug:"/Metrics/RequirementDeliveryRate",permalink:"/docs/next/Metrics/RequirementDeliveryRate",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/RequirementDeliveryRate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Requirement Delivery Rate",description:"Requirement Delivery Rate\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Requirement Lead Time",permalink:"/docs/next/Metrics/RequirementLeadTime"},next:{title:"Requirement Granularity",permalink:"/docs/next/Metrics/RequirementGranularity"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The ratio of delivered requirements to all requirements."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources."),(0,n.kt)("li",{parentName:"ol"},"Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub"))),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"The number of delivered requirements divided by the total number of requirements in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on the ",(0,n.kt)("inlineCode",{parentName:"p"},"issues")," collected from Jira, GitHub, or TAPD."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"This metric relies on the 'type-requirement' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,n.kt)("inlineCode",{parentName:"p"},"requirements"),"."),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find the ",(0,n.kt)("inlineCode",{parentName:"p"},"requirement delivery rate")," in specific boards, eg. 'board-1' and 'board-2'."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(68070).Z,width:"547",height:"226"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"WITH _requirements as(\n  SELECT\n    count(distinct i.id) as total_count,\n    count(distinct case when i.status = 'DONE' then i.id else null end) as delivered_count\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n  WHERE \n    i.type = 'REQUIREMENT'\n    and $__timeFilter(i.created_date)\n    -- please replace the board ids with your own, or create a '$board_id' variable in Grafana\n    and bi.board_id in ('board_1', 'board_2')\n)\n\nSELECT \n  now() as time,\n  1.0 * delivered_count/total_count as requirement_delivery_rate\nFROM _requirements\n")),(0,n.kt)("p",null,"If you want to measure the monthly trend of ",(0,n.kt)("inlineCode",{parentName:"p"},"requirement delivery rate")," in the screenshot below, please run the following SQL in Grafana."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(55060).Z,width:"1095",height:"226"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"WITH _requirements as(\n  SELECT\n    DATE_ADD(date(i.created_date), INTERVAL -DAYOFMONTH(date(i.created_date))+1 DAY) as time,\n    1.0 * count(distinct case when i.status = 'DONE' then i.id else null end)/count(distinct i.id) as delivered_rate\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n  WHERE \n     i.type = 'REQUIREMENT'\n    and $__timeFilter(i.created_date)\n    -- please replace the board ids with your own, or create a '$board_id' variable in Grafana\n    and bi.board_id in ($board_id)\n  GROUP BY 1\n)\n\nSELECT\n  time,\n  delivered_rate\nFROM _requirements\nORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Analyze the number of requirements and delivery rate of different time cycles to find the stability and trend of the development process."),(0,n.kt)("li",{parentName:"ol"},"Analyze and compare the number of requirements delivered and delivery rate of each project/team, and compare the scale of requirements of different projects."),(0,n.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration (optimistic, probable and pessimistic values) to provide a reference for iteration estimation."),(0,n.kt)("li",{parentName:"ol"},"Drill down to analyze the number and percentage of requirements in different phases of SDLC. Analyze rationality and identify the requirements stuck in the backlog.")))}c.isMDXComponent=!0},55060:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/requirement-delivery-rate-monthly-73541cc01c85985615cf5acfb15ae2ac.png"},68070:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/requirement-delivery-rate-text-7e0e63ca119372141eb7183731314b61.png"}}]);