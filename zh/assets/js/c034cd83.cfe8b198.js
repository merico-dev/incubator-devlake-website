"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[12637],{16559:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));t(61839);const r={title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},l=void 0,i={unversionedId:"GettingStarted/DockerComposeSetup",id:"version-v0.15/GettingStarted/DockerComposeSetup",title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",source:"@site/versioned_docs/version-v0.15/GettingStarted/DockerComposeSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/DockerComposeSetup",permalink:"/zh/docs/v0.15/GettingStarted/DockerComposeSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/GettingStarted/DockerComposeSetup.md",tags:[],version:"v0.15",sidebarPosition:1,frontMatter:{title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/zh/docs/v0.15/GettingStarted"},next:{title:"Install via Helm",permalink:"/zh/docs/v0.15/GettingStarted/HelmSetup"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Collect data and view dashboards",id:"collect-data-and-view-dashboards",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2},{value:"FAQ",id:"faq",level:2},{value:"Can I use a managed cloud database service instead of running database in Docker?",id:"can-i-use-a-managed-cloud-database-service-instead-of-running-database-in-docker",level:3},{value:"Can I use an external Grafana instead of running Grafana in Docker?",id:"can-i-use-an-external-grafana-instead-of-running-grafana-in-docker",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:d};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+")," (If you have Docker Desktop installed then you already have the Compose plugin installed)")),(0,o.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commands written ",(0,o.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,o.kt)("li",{parentName:"ol"},"Rename ",(0,o.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,o.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal. This file contains the environment variables that the Devlake server will use. Additional ones can be found in the compose file(s)."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,o.kt)("h2",{id:"collect-data-and-view-dashboards"},"Collect data and view dashboards"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure DevLake and collect data.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Please follow the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.15/UserManuals/ConfigUI/Tutorial"},"tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"devlake")," container takes a while to fully boot up. If ",(0,o.kt)("inlineCode",{parentName:"li"},"config-ui")," complains about API being unreachable, please wait a few seconds and refresh the page."))),(0,o.kt)("li",{parentName:"ol"},"To view dashboards, click ",(0,o.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left corner, or visit ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," to visualize the DevOps ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.15/Overview/SupportedDataSources"},"data")," and build dashboards."),(0,o.kt)("li",{parentName:"ul"},"For how to customize and provision dashboards, please see our ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.15/UserManuals/Dashboards/GrafanaUserGuide"},"Grafana doc"),".")))),(0,o.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,o.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"can-i-use-a-managed-cloud-database-service-instead-of-running-database-in-docker"},"Can I use a managed cloud database service instead of running database in Docker?"),(0,o.kt)("p",null,"Yes, please follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Comment out the 'mysql' part in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  mysql:\n    image: mysql:8\n    volumes:\n      - mysql-storage:/var/lib/mysql\n    restart: always\n    ports:\n      - "127.0.0.1:3306:3306"\n    environment:\n      MYSQL_ROOT_PASSWORD: admin\n      MYSQL_DATABASE: lake\n      MYSQL_USER: merico\n      MYSQL_PASSWORD: merico\n    command:\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_bin\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Comment out the 'mysql' volume in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n   mysql-storage:\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Comment out the 'depends_on mysql' part in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    depends_on:\n      - mysql\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Provide your managed cloud database connection info in the 'grafana' section in ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'MYSQL_URL: This parameter specifies the URL of your database instance. For example, if your database is hosted on a server with IP address 123.45.67.89 and port number 3306, the URL would be "123.45.67.89:3306".'),(0,o.kt)("li",{parentName:"ul"},'MYSQL_DATABASE: This parameter specifies the name of your database. For example, if your database is named "mydatabase", you would set this parameter to "mydatabase".'),(0,o.kt)("li",{parentName:"ul"},'MYSQL_USER: This parameter specifies the username that you will use to connect to your database. For example, if your username is "myuser", you would set this parameter to "myuser".'),(0,o.kt)("li",{parentName:"ul"},'MYSQL_PASSWORD: This parameter specifies the password that you will use to connect to your database. For example, if your password is "mypassword", you would set this parameter to "mypassword".')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      MYSQL_URL: 123.45.67.89:3306\n      MYSQL_DATABASE: mydatabase\n      MYSQL_USER: myuser\n      MYSQL_PASSWORD: mypassword\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Set DB_URL to your own DB_URL in ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DB_URL="mysql://YOUR_USER:YOUR_PASSWORD@YOUR_IP:YOUR_PORT/lake?charset=utf8mb4&parseTime=True"\n# Don\'t forget to create db named `lake` in your own db, and set character-set-server=utf8mb4, collation-server=utf8mb4_bin as below\n#      character-set-server=utf8mb4\n#      collation-server=utf8mb4_bin\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Final step: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker compose up -d"))),(0,o.kt)("h3",{id:"can-i-use-an-external-grafana-instead-of-running-grafana-in-docker"},"Can I use an external Grafana instead of running Grafana in Docker?"),(0,o.kt)("p",null,"Yes, please follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Comment out the 'grafana' part:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  grafana:\n    image: mericodev/devlake-dashboard:latest\n    build:\n      context: grafana/\n    ports:\n      - "3002:3000"\n    volumes:\n      - grafana-storage:/var/lib/grafana\n    environment:\n      GF_SERVER_ROOT_URL: "http://localhost:4000/grafana"\n      GF_USERS_DEFAULT_THEME: "light"\n      MYSQL_URL: mysql:3306\n      MYSQL_DATABASE: lake\n      MYSQL_USER: merico\n      MYSQL_PASSWORD: merico\n    restart: always\n    depends_on:\n      - mysql\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Comment out grafana volume:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n  grafana-storage:\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set config-ui.environment.GRAFANA_ENDPOINT to your own grafana url in docker-compose.yml")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please connect your Grafana to DevLake's database by following ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/data-source-management/"},"https://grafana.com/docs/grafana/latest/administration/data-source-management/"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to import dashboards, please check ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/export-import/"},"https://grafana.com/docs/grafana/latest/dashboards/export-import/"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can find DevLake's self-built Grafana dashboards here (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/tree/main/grafana/dashboards"},"https://github.com/apache/incubator-devlake/tree/main/grafana/dashboards"),").")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Final step: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker compose up -d"))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.15/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0}}]);