"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[559],{79857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));a(61839);const l={title:"Install via Kubernetes",description:"The steps to install Apache DevLake via Kubernetes\n",sidebar_position:3},o=void 0,r={unversionedId:"GettingStarted/KubernetesSetup",id:"version-v0.14/GettingStarted/KubernetesSetup",title:"Install via Kubernetes",description:"The steps to install Apache DevLake via Kubernetes\n",source:"@site/versioned_docs/version-v0.14/GettingStarted/KubernetesSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/KubernetesSetup",permalink:"/docs/v0.14/GettingStarted/KubernetesSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/GettingStarted/KubernetesSetup.md",tags:[],version:"v0.14",sidebarPosition:3,frontMatter:{title:"Install via Kubernetes",description:"The steps to install Apache DevLake via Kubernetes\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Install via Helm",permalink:"/docs/v0.14/GettingStarted/HelmSetup"},next:{title:"Install via Temporal",permalink:"/docs/v0.14/GettingStarted/TemporalSetup"}},p={},s=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"We highly recommend the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.14/GettingStarted/HelmSetup"},"helm approach"),", this page is for Advanced Installation only")),(0,i.kt)("p",null,"We provide a sample ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/blob/main/deployment/k8s/k8s-deploy.yaml"},"k8s-deploy.yaml")," to help deploy DevLake to Kubernetes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/blob/main/deployment/k8s/k8s-deploy.yaml"},"k8s-deploy.yaml")," will create a namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," on your k8s cluster, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePort 30004")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePort 30002")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana")," dashboards. If you would like to use a specific version of Apache DevLake, please update the image tag of ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," deployments."),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/deployment/k8s/k8s-deploy.yaml"},"k8s-deploy.yaml")),(0,i.kt)("li",{parentName:"ol"},"Customize the settings (",(0,i.kt)("inlineCode",{parentName:"li"},"devlake-config")," config map):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_ROOT_PASSWORD"),": set root password for ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE"),": shared between ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")))),(0,i.kt)("li",{parentName:"ul"},"Settings used by ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_URL"),": set MySQL URL for ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOST:$PORT")," format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GF_SERVER_ROOT_URL"),": Public URL to the ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")))),(0,i.kt)("li",{parentName:"ul"},"Settings used by ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRAFANA_ENDPOINT"),": FQDN of grafana which can be reached within k8s cluster, normally you don't need to change it unless namespace was changed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEVLAKE_ENDPOINT"),": FQDN of devlake which can be reached within k8s cluster, normally you don't need to change it unless namespace was changed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_USER"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_PASS"),": Not required, but highly recommended"))),(0,i.kt)("li",{parentName:"ul"},"Settings used by ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": update this value if  ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE")," were changed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOGGING_DIR"),": the directory of logs for Devlake - you likely don't need to change it."))))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," deployment store its configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/.env"),". In our sample yaml, we use ",(0,i.kt)("inlineCode",{parentName:"li"},"hostPath")," volume, so please make sure directory ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/devlake")," exists on your k8s workers, or employ other techniques to persist ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/.env")," file. Please do NOT mount the entire ",(0,i.kt)("inlineCode",{parentName:"li"},"/app")," directory, because plugins are located in ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/bin")," folder."),(0,i.kt)("li",{parentName:"ol"},"Finally, execute the following command and DevLake should be up and running:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f k8s-deploy.yaml\n")))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Can I use a managed Cloud database service instead of running database in docker?"),(0,i.kt)("p",{parentName:"li"},"Yes, it only takes a few changes in the sample yaml file. Below we'll use MySQL on AWS RDS as an example."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"(Optional) Create a MySQL instance on AWS RDS following this ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html"},"doc"),", skip this step if you'd like to use an existing instance"),(0,i.kt)("li",{parentName:"ol"},"Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," deployment and service sections from ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s-deploy.yaml")),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake-config")," configmap according to your RDS instance setup:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_ROOT_PASSWORD"),": remove this line"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_USER"),": use your RDS instance's master username"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_PASSWORD"),": use your RDS instance's password"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_DATABASE"),": use your RDS instance's DB name, you may need to create a database first with ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE <DB name>;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_URL"),": set this for ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOST:$PORT")," format, where $HOST and $PORT should be your RDS instance's endpoint and port respectively"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DB_URL"),": update the connection string with your RDS instance's info for ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake"))))))}m.isMDXComponent=!0}}]);