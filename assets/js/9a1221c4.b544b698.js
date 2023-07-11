"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[90911],{77509:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=i(87462),s=(i(67294),i(3905));i(61839);const n={title:"Code Quality Maintainability-Debt",description:"Code Quality Maintainability-Debt\n",sidebar_position:32},o=void 0,l={unversionedId:"Metrics/CQMaintainability-Debt",id:"version-v0.17/Metrics/CQMaintainability-Debt",title:"Code Quality Maintainability-Debt",description:"Code Quality Maintainability-Debt\n",source:"@site/versioned_docs/version-v0.17/Metrics/CQMaintainability-Debt.md",sourceDirName:"Metrics",slug:"/Metrics/CQMaintainability-Debt",permalink:"/docs/Metrics/CQMaintainability-Debt",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Metrics/CQMaintainability-Debt.md",tags:[],version:"v0.17",sidebarPosition:32,frontMatter:{title:"Code Quality Maintainability-Debt",description:"Code Quality Maintainability-Debt\n",sidebar_position:32},sidebar:"docsSidebar",previous:{title:"Code Quality Test",permalink:"/docs/Metrics/CQTest"},next:{title:"Code Quality Duplicated Blocks",permalink:"/docs/Metrics/CQDuplicatedBlocks"}},r={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"This metric is a measure of effort to fix all code smells. This metric is collected from SonarQube, check ",(0,s.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#maintainability"},"this doc")," for detailed definition."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("p",null,"It helps developers and project managers understand the costs and risks associated with maintaining the codebase. High levels of technical debt can lead to more bugs, slower development cycles, and higher maintenance costs over time. By monitoring technical debt and working to reduce it, developers can ensure that their code is easier to maintain, more reliable, and more scalable."),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/livedemo/DataSources/SonarQube"},"SonarQube"))),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This SQL query calculates the total technical debt in days for all issues in the SonarQube instance. check ",(0,s.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#maintainability"},"this doc")," for detailed info."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on issues collected from SonarQube."),(0,s.kt)("b",null,"Data Transformation Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("p",null,"The following SQL shows how to find effort to fix all code smells in specific projects, eg. 'project1' and 'project2'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT\n  CONCAT(ROUND(SUM(debt) / (8 * 60), 0), ' days') AS 'Debt'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  project_key in ('project1', 'project2')\n")))}u.isMDXComponent=!0}}]);