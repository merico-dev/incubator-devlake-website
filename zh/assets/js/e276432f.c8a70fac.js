"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7996],{28364:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));t(61839);const s={title:"Build Duration",description:"Build Duration\n",sidebar_position:24},o=void 0,r={unversionedId:"Metrics/BuildDuration",id:"Metrics/BuildDuration",title:"Build Duration",description:"Build Duration\n",source:"@site/docs/Metrics/BuildDuration.md",sourceDirName:"Metrics",slug:"/Metrics/BuildDuration",permalink:"/zh/docs/next/Metrics/BuildDuration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/BuildDuration.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Build Duration",description:"Build Duration\n",sidebar_position:24},sidebar:"docsSidebar",previous:{title:"Build Count",permalink:"/zh/docs/next/Metrics/BuildCount"},next:{title:"Build Success Rate",permalink:"/zh/docs/next/Metrics/BuildSuccessRate"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:i,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The duration of successful builds."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As a process indicator, it reflects the value flow efficiency of upstream production and research links"),(0,a.kt)("li",{parentName:"ol"},"Identify excellent/to-be-improved practices that impact the build, and drive the team to precipitate reusable tools and mechanisms to build infrastructure for fast and high-frequency delivery")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://grafana-lake.demo.devlake.io/grafana/d/W8AiDFQnk/jenkins?orgId=1"},"Jenkins"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"This metric is calculated by getting the duration of successful cicd_pipelines, such as Jenkins builds, GitLab pipelines and GitHub workflow runs in the given data range."),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on Jenkins builds, GitLab pipelines or GitHub workflow runs."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the mean duration of successful CI builds ",(0,a.kt)("strong",{parentName:"p"},"finished")," in the given time range."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  avg(duration_sec/60) as duration_in_minutes\nFROM cicd_pipelines\nWHERE\n  result = 'SUCCESS'\n  and $__timeFilter(finished_date)\nORDER BY 1\n")),(0,a.kt)("p",null,"If you want to measure the ",(0,a.kt)("inlineCode",{parentName:"p"},"mean duration of builds")," in the screenshot below, please run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(76921).Z,width:"1938",height:"375"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"WITH _builds as(\n  SELECT\n    DATE_ADD(date(finished_date), INTERVAL -DAYOFMONTH(date(finished_date))+1 DAY) as time,\n    avg(duration_sec) as mean_duration_sec\n  FROM \n    cicd_pipelines\n  WHERE\n    $__timeFilter(finished_date)\n    and id like \"%jenkins%\"\n    and name in ($job_id)\n    -- the following condition will remove the month with incomplete data\n    and finished_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  GROUP BY 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  mean_duration_sec/60 as mean_duration_minutes\nFROM _builds\nORDER BY time\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the project dimension, compare the number of builds and success rate by combining the project phase and the complexity of tasks."),(0,a.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of builds and success rate to see if it has improved over time.")))}c.isMDXComponent=!0},76921:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/build-duration-monthly-cd1d38f33475808d166c3ffc2f2733c6.png"}}]);