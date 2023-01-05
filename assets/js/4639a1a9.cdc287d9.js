"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3299],{49799:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=t(87462),i=(t(67294),t(3905));t(61839);const a={title:"Configuring Incoming Webhook",sidebar_position:7,description:"Config UI instruction for Webhook"},s=void 0,r={unversionedId:"UserManuals/ConfigUI/webhook",id:"UserManuals/ConfigUI/webhook",title:"Configuring Incoming Webhook",description:"Config UI instruction for Webhook",source:"@site/docs/UserManuals/ConfigUI/webhook.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/webhook",permalink:"/docs/next/UserManuals/ConfigUI/webhook",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/webhook.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Configuring Incoming Webhook",sidebar_position:7,description:"Config UI instruction for Webhook"},sidebar:"docsSidebar",previous:{title:"Using Advanced Mode",permalink:"/docs/next/UserManuals/ConfigUI/AdvancedMode"},next:{title:"Grafana User Guide",permalink:"/docs/next/UserManuals/Dashboards/GrafanaUserGuide"}},l={},h=[{value:"Step 1 - Add a new incoming webhook",id:"step-1---add-a-new-incoming-webhook",level:3},{value:"Step 2 - Use Webhooks",id:"step-2---use-webhooks",level:3},{value:"Put webhook on the internet",id:"put-webhook-on-the-internet",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:h};function d(e){let{components:o,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visit config-ui: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{localhost}:4000"),"."),(0,i.kt)("h3",{id:"step-1---add-a-new-incoming-webhook"},"Step 1 - Add a new incoming webhook"),(0,i.kt)("p",null,"Go to the 'Data Connections' page. Create a webhook."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webhook-add-data-connections",src:t(65947).Z,width:"601",height:"201"})),(0,i.kt)("p",null,"We recommend that you give your webhook connection a unique name so that you can identify and manage where you have used it later."),(0,i.kt)("h3",{id:"step-2---use-webhooks"},"Step 2 - Use Webhooks"),(0,i.kt)("p",null,"Click on Generate POST URL, and you will find four webhook URLs. Copy the ones that suit your usage into your CI or issue-tracking systems. You can always come back to the webhook page to copy the URLs later on."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webhook-use",src:t(41362).Z,width:"602",height:"622"})),(0,i.kt)("h4",{id:"put-webhook-on-the-internet"},"Put webhook on the internet"),(0,i.kt)("p",null,"For the new webhook to work, it needs to be accessible from the DevOps tools from which you would like to push data to DevLake. If DevLake is deployed in your private network and your DevOps tool (e.g. CircleCI) is a cloud service that lives outside of your private network, then you need to make DevLake's webhook accessible to the outside cloud service."),(0,i.kt)("p",null,"There're many tools for this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For testing and quick setup, ",(0,i.kt)("a",{parentName:"li",href:"https://ngrok.com/"},"ngrok")," is a useful utility that provides a publicly accessible web URL to any locally hosted application. You can put DevLake's webhook on the internet within 5 mins by following ngrok's ",(0,i.kt)("a",{parentName:"li",href:"https://ngrok.com/docs/getting-started"},"Getting Started")," guide. Note that, when posting to webhook, you may need to replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")," part in the webhook URL with the forwarding URL that ngrok provides."),(0,i.kt)("li",{parentName:"ul"},"If you prefer DIY, please checkout open-source reverse proxies like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fatedier/frp"},"fatedier/frp")," or go for the classic ",(0,i.kt)("a",{parentName:"li",href:"https://www.nginx.com/"},"nginx"),".")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},65947:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/webhook-add-data-connections-71adb92f2c6b0812f08795ae677a223e.png"},41362:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/webhook-use-5dca5513810a6b4ccadbaca5dfff1fb4.png"}}]);