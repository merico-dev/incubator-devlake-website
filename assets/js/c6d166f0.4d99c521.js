"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2489],{54958:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=i(87462),d=(i(67294),i(3905));i(61839);const n={title:"Added Lines of Code",description:"Added Lines of Code\n",sidebar_position:11},a=void 0,s={unversionedId:"Metrics/AddedLinesOfCode",id:"version-v0.20/Metrics/AddedLinesOfCode",title:"Added Lines of Code",description:"Added Lines of Code\n",source:"@site/versioned_docs/version-v0.20/Metrics/AddedLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/AddedLinesOfCode",permalink:"/docs/v0.20/Metrics/AddedLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Metrics/AddedLinesOfCode.md",tags:[],version:"v0.20",sidebarPosition:11,frontMatter:{title:"Added Lines of Code",description:"Added Lines of Code\n",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Commit Author Count",permalink:"/docs/v0.20/Metrics/CommitAuthorCount"},next:{title:"Deleted Lines of Code",permalink:"/docs/v0.20/Metrics/DeletedLinesOfCode"}},r={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,d.kt)("p",null,"The accumulated number of added lines of code."),(0,d.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"identify potential bottlenecks that may affect the output"),(0,d.kt)("li",{parentName:"ol"},"Encourage the team to implement a development model that matches the business requirements; develop excellent coding habits")),(0,d.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,d.kt)("p",null,"N/A"),(0,d.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,d.kt)("p",null,"This metric is calculated by summing the additions of commits in the given data range."),(0,d.kt)("b",null,"Data Sources Required"),(0,d.kt)("p",null,"This metric relies on ",(0,d.kt)("inlineCode",{parentName:"p"},"commits")," collected from GitHub, GitLab or BitBucket."),(0,d.kt)("b",null,"Data Transformation Required"),(0,d.kt)("p",null,"N/A"),(0,d.kt)("b",null,"SQL Queries"),(0,d.kt)("p",null,"The following SQL shows how to find the added lines of code in specific repositories, eg. 'repo-1' and 'repo-2'."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"SELECT\n  sum(c.additions) as added_lines_of_code\nFROM \n  commits c\n  LEFT JOIN repo_commits rc ON c.sha = rc.commit_sha\n  LEFT JOIN repos r ON r.id = rc.repo_id\nWHERE\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n  r.id in ('repo-1','repo-2')\n  and message not like '%Merge%'\n  and $__timeFilter(c.authored_date)\n  -- the following condition will remove the month with incomplete data\n  and c.authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n")),(0,d.kt)("p",null,"If you want to measure the monthly trend of ",(0,d.kt)("inlineCode",{parentName:"p"},"added lines of code")," in the screenshot below, please run the following SQL in Grafana."),(0,d.kt)("p",null,(0,d.kt)("img",{src:i(79421).Z,width:"1251",height:"349"})),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"WITH _commits as(\n  SELECT\n    DATE_ADD(date(authored_date), INTERVAL -DAY(date(authored_date))+1 DAY) as time,\n    sum(additions) as added_lines_of_code\n  FROM commits\n  WHERE\n    message not like '%Merge%'\n    and $__timeFilter(authored_date)\n    -- the following condition will remove the month with incomplete data\n    and authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  added_lines_of_code\nFROM _commits\nORDER BY time\n")),(0,d.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"From the project/team dimension, observe the accumulated change in added lines to assess the team activity and code growth rate"),(0,d.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the active time distribution of code changes, and evaluate the effectiveness of project development model."),(0,d.kt)("li",{parentName:"ol"},"From the member dimension, observe the trend and stability of code output of each member, and identify the key points that affect code output by comparison.")))}m.isMDXComponent=!0},79421:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/added-loc-monthly-4a65e11c8e2ee438edc4e7ece3b08366.png"}}]);