"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2380],{77717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));n(61839);const a={title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},s=void 0,l={unversionedId:"UserManuals/ConfigUI/GitLab",id:"version-v0.14/UserManuals/ConfigUI/GitLab",title:"Configuring GitLab",description:"Config UI instruction for GitLab",source:"@site/versioned_docs/version-v0.14/UserManuals/ConfigUI/GitLab.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/GitLab",permalink:"/docs/UserManuals/ConfigUI/GitLab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/UserManuals/ConfigUI/GitLab.md",tags:[],version:"v0.14",sidebarPosition:3,frontMatter:{title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},sidebar:"docsSidebar",previous:{title:"Configuring GitHub",permalink:"/docs/UserManuals/ConfigUI/GitHub"},next:{title:"Configuring Jira",permalink:"/docs/UserManuals/ConfigUI/Jira"}},r={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Auth Token(s)",id:"auth-tokens",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"CI/CD",id:"cicd",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit config-ui: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitlab-add-data-connections",src:n(52438).Z,width:"932",height:"454"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Name your connection."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"This should be a valid REST API endpoint. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using gitlab.com, the endpoint will be ",(0,o.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/api/v4/")),(0,o.kt)("li",{parentName:"ul"},"If you are self-hosting GitLab, the endpoint will look like ",(0,o.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/"),"\nThe endpoint url should end with ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,o.kt)("h4",{id:"auth-tokens"},"Auth Token(s)"),(0,o.kt)("p",null,"GitLab personal access tokens are required to add a connection. Learn about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"how to create a GitLab personal access token"),"."),(0,o.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,o.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/199533780-f506b308-6808-499c-90db-b39fcda27888.png",alt:"image"})),(0,o.kt)("h4",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Choose the Gitlab projects to collect. Limited by GitLab API, You need to type more than 2 characters to search."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If you want to collect public repositories in GitLab, please uncheck "Only search my repositories" to search all repositories.')),(0,o.kt)("h4",{id:"data-entities"},"Data Entities"),(0,o.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain GitLab entities, you can unselect some entities to accerlerate the collection speed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Issue Tracking: GitLab issues, issue comments, issue labels, etc."),(0,o.kt)("li",{parentName:"ul"},"Source Code Management: GitLab repos, refs, commits, etc."),(0,o.kt)("li",{parentName:"ul"},"Code Review: GitLab MRs, MR comments and reviews, etc."),(0,o.kt)("li",{parentName:"ul"},"Cross Domain: GitLab accounts, etc.")),(0,o.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,o.kt)("h4",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,"This set of configurations is used for calculating ",(0,o.kt)("a",{parentName:"p",href:"/docs/UserManuals/DORA"},"DORA metrics"),"."),(0,o.kt)("p",null,"If you're using GitLab CI to conduct ",(0,o.kt)("inlineCode",{parentName:"p"},"deployments"),', please select "Detect Deployment from Jobs in GitLab CI", and input the RegEx in the following fields:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment: A GitLab CI job with a name that matches the given regEx will be considered as a deployment."),(0,o.kt)("li",{parentName:"ul"},"Production: A GitLab CI job with a name that matches the given regEx will be considered a job in the production environment.")),(0,o.kt)("p",null,"By the above two fields, DevLake can identify a production deployment among massive CI jobs."),(0,o.kt)("p",null,'You can also select "Not using Jobs in GitLab CI as Deployments" if you\'re not using GitLab CI to conduct deployments.'),(0,o.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,o.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."))}u.isMDXComponent=!0},52438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitlab-add-data-connections-f020111d0053bd2ca6cbdce612b42a2f.png"}}]);