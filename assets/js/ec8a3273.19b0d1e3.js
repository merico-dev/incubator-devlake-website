"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[78898],{66091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=a(87462),i=(a(67294),a(3905));a(61839);const n={title:"Configuration and Blueprint Troubleshooting",sidebar_position:2,description:"Debug errors found in Config UI or during data collection.\n"},r=void 0,l={unversionedId:"Troubleshooting/Configuration",id:"version-v0.21/Troubleshooting/Configuration",title:"Configuration and Blueprint Troubleshooting",description:"Debug errors found in Config UI or during data collection.\n",source:"@site/versioned_docs/version-v0.21/Troubleshooting/Configuration.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/Configuration",permalink:"/docs/v0.21/Troubleshooting/Configuration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Troubleshooting/Configuration.md",tags:[],version:"v0.21",sidebarPosition:2,frontMatter:{title:"Configuration and Blueprint Troubleshooting",sidebar_position:2,description:"Debug errors found in Config UI or during data collection.\n"},sidebar:"docsSidebar",previous:{title:"Installation Troubleshooting",permalink:"/docs/v0.21/Troubleshooting/Installation"},next:{title:"Dashboard Troubleshooting",permalink:"/docs/v0.21/Troubleshooting/Dashboard"}},s={},u=[{value:"Common Error Code while collecting/processing data",id:"common-error-code-while-collectingprocessing-data",level:3},{value:"Failed to collect data from the server with a self-signed certificate",id:"failed-to-collect-data-from-the-server-with-a-self-signed-certificate",level:3},{value:"GitExtractor task failed in a GitHub/GitLab/BitBucket blueprint",id:"gitextractor-task-failed-in-a-githubgitlabbitbucket-blueprint",level:3},{value:"Pipeline failed with &quot;The total number of locks exceeds the lock table size&quot;",id:"pipeline-failed-with-the-total-number-of-locks-exceeds-the-lock-table-size",level:3},{value:"GitHub repositories keep loading when adding data scopes",id:"github-repositories-keep-loading-when-adding-data-scopes",level:3},{value:"None of them solve your problem?",id:"none-of-them-solve-your-problem",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"common-error-code-while-collectingprocessing-data"},"Common Error Code while collecting/processing data"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error code"),(0,i.kt)("th",{parentName:"tr",align:null},"An example"),(0,i.kt)("th",{parentName:"tr",align:null},"Causes"),(0,i.kt)("th",{parentName:"tr",align:null},"Solutions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"429"),(0,i.kt)("td",{parentName:"tr",align:null},"subtask collectAPiPipelines ended unexpectedly caused: Error waiting for async Collector execution caused by: retry exceeded 3 times calling projects/{projectId}/pipelines {429}"),(0,i.kt)("td",{parentName:"tr",align:null},"This error exmaple is caused by GitLab's Pipeline APIs. These APIs are implemented via Cloudflare, which is different from other GitLab entities."),(0,i.kt)("td",{parentName:"tr",align:null},"Two ways: ",(0,i.kt)("br",null)," - Enable ",(0,i.kt)("inlineCode",{parentName:"td"},"fixed rate limit")," in the GitLab connection, lower the API rates to 2,000. If it works, you can try increase the rates to accerlerate. This solution also applies to other plugins that return the 429 while collecting data, such as GitHub, TAPD, etc. ",(0,i.kt)("br",null)," - Upgrade to v0.15.x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"403"),(0,i.kt)("td",{parentName:"tr",align:null},"error: preparing task data for gitextractor caused by: unexpected http status code: 403"),(0,i.kt)("td",{parentName:"tr",align:null},"This is usually caused by the permission of your tokens. For example, if you're using an un-supported auth method, or using a token without ticking permissions to certain entities you want to collect."),(0,i.kt)("td",{parentName:"tr",align:null},"Find the supported authentication methods and token permissions that should be selected in the corresponding plugin's Config UI manuals, for example, ",(0,i.kt)("a",{parentName:"td",href:"/docs/Configuration/GitHub#auth-tokens"},"configuring GitHub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1406"),(0,i.kt)("td",{parentName:"tr",align:null},"subtask extractApiBuilds ended unexpectedly caused by: error adding the result to batch caused by: Error 1406: Data too long for column 'full_display_name' at row 138. See bug ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/4053"},"#4053")),(0,i.kt)("td",{parentName:"tr",align:null},"This is usually thrown by MySQL because a certain value is too long"),(0,i.kt)("td",{parentName:"tr",align:null},"A work-around is to manually change the field length to varchar(255) or longer in MySQL. Also, please put up a ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-devlake/issues/new?assignees=&labels=type%2Fbug&template=bug-report.yml&title=%5BBug%5D%5BModule+Name%5D+Bug+title+"},"bug")," to let us know.")))),(0,i.kt)("h3",{id:"failed-to-collect-data-from-the-server-with-a-self-signed-certificate"},"Failed to collect data from the server with a self-signed certificate"),(0,i.kt)("p",null,"There might be two problems when trying to collect data from a private GitLab server with a self-signed certificate:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'"Test Connection" error. This can be solved by setting the environment variable ',(0,i.kt)("inlineCode",{parentName:"li"},"IN_SECURE_SKIP_VERIFY=true")," for the ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," container"),(0,i.kt)("li",{parentName:"ol"},'"GitExtractor" fails to clone the repository due to certificate verification, sadly, neither gogit nor git2go we are using supports insecure HTTPS.')),(0,i.kt)("p",null,"A better approach would be adding your root CA to the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mount your ",(0,i.kt)("inlineCode",{parentName:"li"},"rootCA.crt")," into the ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," container"),(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," node to install the mounted certificate")),(0,i.kt)("p",null,"Here is an example of the `docker-compose`` installation, the idea applies to other installation methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  devlake:\n    image: apache/devlake:v...\n    ...\n    volumes:\n      ...\n      - /path/to/your/rootCA.crt:/usr/local/share/ca-certificates/rootCA.crt\n    command: [ "sh", "-c", "update-ca-certificates; lake" ]\n    ...\n')),(0,i.kt)("h3",{id:"gitextractor-task-failed-in-a-githubgitlabbitbucket-blueprint"},"GitExtractor task failed in a GitHub/GitLab/BitBucket blueprint"),(0,i.kt)("p",null,"See bug ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues/3719"},"#3719")),(0,i.kt)("p",null,"This bug happens occasionally in v0.14.x and previous versions. It is fixed by changing the docker base image. Please upgrade to v0.15.x to get it fixed if you encounter it."),(0,i.kt)("h3",{id:"pipeline-failed-with-the-total-number-of-locks-exceeds-the-lock-table-size"},'Pipeline failed with "The total number of locks exceeds the lock table size"'),(0,i.kt)("p",null,"We have had a couple of reports suggesting MySQL InnoDB would fail with the message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/issues/3849"},"Error 1206: The total number of locks exceeds the lock table size \xb7 Issue #3849 \xb7 apache/incubator-devlake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/issues/3653"},"[Bug][GitLab] gitlab collectApiJobs task failed for mysql locks error \xb7 Issue #3653 \xb7 apache/incubator-devlake"))),(0,i.kt)("p",null,"The cause of the problem is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before Apache DevLake data collection starts, it must purge expired data in the database."),(0,i.kt)("li",{parentName:"ul"},"MySQL InnoDB Engine would create locks in memory for the records being deleted."),(0,i.kt)("li",{parentName:"ul"},"When deleting huge amounts of records, the memory bursts, hence the error.")),(0,i.kt)("p",null,"You are likely to see the error when dealing with a huge repository or board. For MySQL, you can solve it by increasing the ",(0,i.kt)("inlineCode",{parentName:"p"},"innodb_buffer_pool_size")," to a higher value."),(0,i.kt)("p",null,"Here is an example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," installation, the idea applies to other installation methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  mysql:\n    image: mysql:8.....\n    ...\n    # add the follow line to the mysql container\n    command: --innodb-buffer-pool-size=200M\n")),(0,i.kt)("h3",{id:"github-repositories-keep-loading-when-adding-data-scopes"},"GitHub repositories keep loading when adding data scopes"),(0,i.kt)("p",null,"See issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues/6038"},"#6038")),(0,i.kt)("p",null,"If you're having trouble adding data scopes to a GitHub connection because the repositories keep loading, there are a few things you can check:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure your access token has the necessary permissions."),(0,i.kt)("li",{parentName:"ol"},"If your account is protected by organization SAML enforcement, make sure you've authorized the token using SSO.")),(0,i.kt)("p",null,"For more details about authenticating with SAML single sign-on, see here: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on"},"https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on"),"."),(0,i.kt)("h2",{id:"none-of-them-solve-your-problem"},"None of them solve your problem?"),(0,i.kt)("p",null,"Sorry for the inconvenience, please help us improve by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"creating an issue")))}c.isMDXComponent=!0}}]);