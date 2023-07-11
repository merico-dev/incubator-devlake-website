"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[89960],{8846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));a(61839);const i={title:"Maintenance Troubleshooting",sidebar_position:4,description:"Maintenance Troubleshooting\n"},l=void 0,s={unversionedId:"Troubleshooting/MySqlSizeIssue",id:"version-v0.17/Troubleshooting/MySqlSizeIssue",title:"Maintenance Troubleshooting",description:"Maintenance Troubleshooting\n",source:"@site/versioned_docs/version-v0.17/Troubleshooting/MySqlSizeIssue.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/MySqlSizeIssue",permalink:"/docs/Troubleshooting/MySqlSizeIssue",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Troubleshooting/MySqlSizeIssue.md",tags:[],version:"v0.17",sidebarPosition:4,frontMatter:{title:"Maintenance Troubleshooting",sidebar_position:4,description:"Maintenance Troubleshooting\n"},sidebar:"docsSidebar",previous:{title:"Dashboard Troubleshooting",permalink:"/docs/Troubleshooting/Dashboard"}},r={},d=[{value:"How to manage the quickly increasing MySQL disk consumption?",id:"how-to-manage-the-quickly-increasing-mysql-disk-consumption",level:2},{value:"Why dose DevLake choose to delete the existing data and then insert new data?",id:"why-dose-devlake-choose-to-delete-the-existing-data-and-then-insert-new-data",level:3},{value:"How to purge old binary logs?",id:"how-to-purge-old-binary-logs",level:3},{value:"How to &quot;automate&quot; the purge of old binary logs?",id:"how-to-automate-the-purge-of-old-binary-logs",level:3},{value:"How to skip bin logs?",id:"how-to-skip-bin-logs",level:3}],h={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-manage-the-quickly-increasing-mysql-disk-consumption"},"How to manage the quickly increasing MySQL disk consumption?"),(0,n.kt)("p",null,"DevLake is designed to collect data by first deleting the existing data and\nthen inserting new data. While this approach ensures that the latest data is\nalways available, it leads to a rapid increase in MySQL disk consumption.\nThis growth is primarily caused by the large size of the binary logs generated\nafter each data collection cycle."),(0,n.kt)("h3",{id:"why-dose-devlake-choose-to-delete-the-existing-data-and-then-insert-new-data"},"Why dose DevLake choose to delete the existing data and then insert new data?"),(0,n.kt)("p",null,"Because we want to ensure that the latest data is\nalways available. If we don't delete the existing data, some old data which has been deleted\nfrom the previous step will still be available in the DevLake database."),(0,n.kt)("h3",{id:"how-to-purge-old-binary-logs"},"How to purge old binary logs?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect to your MySQL server using the MySQL client or any other database management tool such as PhpMyAdmin, MySQL Workbench, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command to check the current status of your binary log files:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW BINARY LOGS;\n")),(0,n.kt)("p",null,"This will display a list of all the binary log files that are currently available on your MySQL server."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Determine the last binary log file that you want to keep. This is the file that you want to retain for any future point-in-time recovery or replication purposes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command to purge all binary logs that are older than the binary log file that you want to retain:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"PURGE BINARY LOGS BEFORE 'DATE' ;\n")),(0,n.kt)("p",null,"You need to provide the specific date and time up to which you want to purge the binary logs. The date and time should be formatted as a string in the 'YYYY-MM-DD hh:mm:ss' format.\nFor example, if you want to purge all binary logs before March 22, 2023, 15:30:00, you would replace DATE with '2023-03-22 15:30:00', like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"PURGE BINARY LOGS BEFORE '2023-03-22 15:30:00' ;\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"After running the command, MySQL will delete all binary log files that are older than the specified file. You can verify that the purge was successful by running the SHOW BINARY LOGS; command again.")),(0,n.kt)("p",null,"Note: Keep in mind that deleting old binary log files can affect point-in-time recovery and replication capabilities, so it's important to only delete files that are no longer needed."),(0,n.kt)("p",null,"Additionally, it's recommended to take a backup before deleting any binary log files in case you need to restore to a point before the binary logs were purged."),(0,n.kt)("h3",{id:"how-to-automate-the-purge-of-old-binary-logs"},'How to "automate" the purge of old binary logs?'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect to your MySQL server using the MySQL client or any other database management tool such as PhpMyAdmin, MySQL Workbench, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command to set the expire_logs_days global variable to the number of days that you want to keep binary logs for:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SET GLOBAL expire_logs_days = 1;\n")),(0,n.kt)("h3",{id:"how-to-skip-bin-logs"},"How to skip bin logs?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To skip bin logs, you can set the skip-log-bin configuration option directly in the docker-compose.yaml file using the command option. Here's an example of how to do this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  mysql:\n    image: mysql:8\n    volumes:\n      - mysql-storage:/var/lib/mysql\n    restart: always\n    ports:\n      - "127.0.0.1:3306:3306"\n    environment:\n      MYSQL_ROOT_PASSWORD: admin\n      MYSQL_DATABASE: lake\n      MYSQL_USER: merico\n      MYSQL_PASSWORD: merico\n    command:\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_bin\n      --skip-log-bin\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"After making the changes, you can restart the MySQL container using the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  docker-compose restart mysql\n")))}u.isMDXComponent=!0}}]);