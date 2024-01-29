"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[49252],{61233:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));t(61839);const l={title:"Tool Layer Schema",description:"Extract raw data into a relational schema for each specific tool\n",sidebar_position:2},r=void 0,i={unversionedId:"DataModels/ToolLayerSchema",id:"version-v0.21/DataModels/ToolLayerSchema",title:"Tool Layer Schema",description:"Extract raw data into a relational schema for each specific tool\n",source:"@site/versioned_docs/version-v0.21/DataModels/ToolLayerSchema.md",sourceDirName:"DataModels",slug:"/DataModels/ToolLayerSchema",permalink:"/zh/docs/v0.21/DataModels/ToolLayerSchema",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/DataModels/ToolLayerSchema.md",tags:[],version:"v0.21",sidebarPosition:2,frontMatter:{title:"Tool Layer Schema",description:"Extract raw data into a relational schema for each specific tool\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Domain Layer Schema",permalink:"/zh/docs/v0.21/DataModels/DevLakeDomainLayerSchema"},next:{title:"Raw Layer Schema",permalink:"/zh/docs/v0.21/DataModels/RawLayerSchema"}},n={},c=[{value:"Summary",id:"summary",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Data Models",id:"data-models",level:2}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"This document describes Apache DevLake's tool layer schema."),(0,s.kt)("p",null,"Referring to DevLake's ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/Overview/Architecture"},"architecture"),", the Tool layer extracts raw data from JSONs into a relational schema that's easier to consume by analytical tasks. Each DevOps tool would have a schema that's tailored to its data structure, hence the name, the Tool layer."),(0,s.kt)("h2",{id:"use-cases"},"Use Cases"),(0,s.kt)("p",null,"As a user, you can check tool data tables to verify data quality if you have concerns about the ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/v0.21/DataModels/DevLakeDomainLayerSchema"},"domain layer data"),"."),(0,s.kt)("h2",{id:"data-models"},"Data Models"),(0,s.kt)("p",null,"Tool layer tables start with a prefix ",(0,s.kt)("inlineCode",{parentName:"p"},"_tool_"),". Each plugin contains multiple tool data tables, the naming convension of these tables is ",(0,s.kt)("inlineCode",{parentName:"p"},"_tool_{plugin}_{entity}"),". For instance,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"_tool_jira_issues"),(0,s.kt)("li",{parentName:"ul"},"_tool_jira_boards"),(0,s.kt)("li",{parentName:"ul"},"_tool_jira_board_issues`"),(0,s.kt)("li",{parentName:"ul"},"...")),(0,s.kt)("p",null,"Normally, you do not need to use tool layer tables, unless you have one of the above use cases."))}m.isMDXComponent=!0}}]);