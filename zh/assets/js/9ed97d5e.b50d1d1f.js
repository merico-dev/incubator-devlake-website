"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[20804],{44453:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));t(61839);const r={title:"Dashboard Access Control",sidebar_position:2,description:"Dashboard Access Control\n"},n="Dashboard Access Control",i={unversionedId:"Configuration/Dashboards/AccessControl",id:"Configuration/Dashboards/AccessControl",title:"Dashboard Access Control",description:"Dashboard Access Control\n",source:"@site/docs/Configuration/Dashboards/AccessControl.md",sourceDirName:"Configuration/Dashboards",slug:"/Configuration/Dashboards/AccessControl",permalink:"/zh/docs/Configuration/Dashboards/AccessControl",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/Dashboards/AccessControl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dashboard Access Control",sidebar_position:2,description:"Dashboard Access Control\n"},sidebar:"docsSidebar",previous:{title:"Blueprint Advanced Mode",permalink:"/zh/docs/Configuration/AdvancedMode"},next:{title:"Grafana User Guide",permalink:"/zh/docs/Configuration/Dashboards/GrafanaUserGuide"}},l={},d=[{value:"Example solution: one folder for each team",id:"example-solution-one-folder-for-each-team",level:2},{value:"Reference",id:"reference",level:2}],c={toc:d};function h(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dashboard-access-control"},"Dashboard Access Control"),(0,s.kt)("p",null,"This tutorial shows how to leverage Grafana's role-based access control (RBAC) to manage what dashboards a user has access to. If you're setting up a single DevLake instance to be shared by multiple teams in your organization, this tutorial can help you achieve data segregation between teams."),(0,s.kt)("h2",{id:"example-solution-one-folder-for-each-team"},"Example solution: one folder for each team"),(0,s.kt)("p",null,"One of the simplest solutions is to create one Grafana folder for each team and assign permissions to teams at the folder level. Below is a step-by-step walk through."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Sign in as Grafana admin and create a new folder")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create-new-folder",src:t(99801).Z,width:"1404",height:"768"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},'Click "Permissions" tab and remove the default access of "Editor (Role)" and "Viewer (Role)"')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"folder-permission",src:t(73407).Z,width:"1958",height:"698"})),(0,s.kt)("p",null,"After removing default permissions:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"after-remove-default-permissions",src:t(94061).Z,width:"1966",height:"622"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},'Add "View" permission to the target team (you\'ll need to create this team in Grafana first)')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"add-team-permission",src:t(76178).Z,width:"1950",height:"850"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Copy/move dashboards into this folder (you may need to edit the dashboard so that it only shows data belongs to this team)")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/administration/user-management/manage-dashboard-permissions/#grant-dashboard-folder-permissions"},"Manage dashboard permissions by Grafana"))))}h.isMDXComponent=!0},76178:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/add-team-permission-ec18f6f057c5b95cd318e42510abba32.png"},94061:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/after-remove-default-permissions-1b8fff455ed303bd220c94aecd72daaa.png"},99801:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/create-new-folder-64fceb44c8f7a9eea17d473e9bf1bc7a.png"},73407:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/folder-permission-0010f0b853838c60c911b9f249b69f96.png"}}]);