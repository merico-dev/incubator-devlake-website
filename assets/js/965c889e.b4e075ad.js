"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[38836],{90270:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>r});var a=t(87462),s=(t(67294),t(3905));t(61839);const n={title:"Code Quality Duplicated Lines",description:"Code Quality Duplicated Lines\n",sidebar_position:34},l=void 0,o={unversionedId:"Metrics/CQDuplicatedLines",id:"Metrics/CQDuplicatedLines",title:"Code Quality Duplicated Lines",description:"Code Quality Duplicated Lines\n",source:"@site/docs/Metrics/CQDuplicatedLines.md",sourceDirName:"Metrics",slug:"/Metrics/CQDuplicatedLines",permalink:"/docs/next/Metrics/CQDuplicatedLines",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CQDuplicatedLines.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Code Quality Duplicated Lines",description:"Code Quality Duplicated Lines\n",sidebar_position:34},sidebar:"docsSidebar",previous:{title:"Code Quality Duplicated Blocks",permalink:"/docs/next/Metrics/CQDuplicatedBlocks"},next:{title:"Data Models",permalink:"/docs/next/DataModels"}},d={},r=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2}],c={toc:r};function u(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"This metric is the number of files involved in duplications. This metric is collected from SonarQube, check ",(0,s.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#duplications"},"this doc")," for detailed definition."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("p",null,"Duplicated lines are individual lines of code that are identical or nearly identical to each other, and can occur within a single file or across multiple files. Duplicated code can make the codebase harder to maintain, increase the risk of bugs and errors, and make it more difficult to understand and modify the code. Identifying and removing duplicated code can improve the maintainability, reliability, and readability of the codebase, and reduce the risk of introducing bugs or errors in the future."),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/livedemo/DataSources/SonarQube"},"SonarQube"))),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This SQL query calculates the percentage of duplicated lines in a project, as well as the total number of lines in the project.\nThe sum(duplicated_lines) represents the total number of duplicated lines in the project, while sum(num_of_lines) represents the total number of lines of code. These two values are divided and multiplied by 100 to get the percentage of duplicated lines in the project."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on file metrics collected from SonarQube."),(0,s.kt)("b",null,"Data Transformation Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("p",null,"The following SQL shows how to find the number of files involved in duplications in specific projects, eg. 'project1' and 'project2'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT\n  CONCAT(ROUND(sum(duplicated_lines) / sum(num_of_lines) * 100, 1), '% ', 'Duplications on ', ROUND(sum(ncloc) / 1000, 0),'k Lines')\nFROM cq_file_metrics\nWHERE\n  project_key in ('project1', 'project2')\n")))}u.isMDXComponent=!0}}]);