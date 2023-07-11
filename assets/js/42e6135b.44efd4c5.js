"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[92795],{89348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));n(61839);const a={title:"Teambition(Beta)",sidebar_position:6,description:"Config UI instruction for Teambition"},l=void 0,r={unversionedId:"Configuration/Teambition",id:"Configuration/Teambition",title:"Teambition(Beta)",description:"Config UI instruction for Teambition",source:"@site/docs/Configuration/Teambition.md",sourceDirName:"Configuration",slug:"/Configuration/Teambition",permalink:"/docs/next/Configuration/Teambition",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/Teambition.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Teambition(Beta)",sidebar_position:6,description:"Config UI instruction for Teambition"},sidebar:"docsSidebar",previous:{title:"TAPD",permalink:"/docs/next/Configuration/Tapd"},next:{title:"Zentao",permalink:"/docs/next/Configuration/Zentao"}},p={},s=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"App Id/Secret Key",id:"app-idsecret-key",level:3},{value:"Tenant Type/Tenant Id",id:"tenant-typetenant-id",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Ralte Limit (Optional)",id:"ralte-limit-optional",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Configure Blueprint",id:"step-2---configure-blueprint",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit Config UI: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Connections")," page."),(0,o.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229744282-1959dc82-9038-49a8-924d-11821fafa73a.png",alt:"teambition-add-data-connections"})),(0,o.kt)("h3",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"This should be a valid REST API endpoint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://open.teambition.com/api/"),"\nThe endpoint url should end with ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,o.kt)("h3",{id:"app-idsecret-key"},"App Id/Secret Key"),(0,o.kt)("p",null,"Input the app id and secret key of your Teambition account, you can follow the steps as below.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229810617-fe75cf7d-5a84-4741-9016-47140b276e18.png",alt:"image-20230404213648139"}),(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229810458-cf47806b-6307-419c-8147-a176ebafca74.png",alt:"image"})),(0,o.kt)("p",null,'You should ensure that you have added all the necessary "get" and "list" authentication methods.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229813323-0c490e65-1ecb-4e1c-8df2-ef68cb55a4a4.png",alt:"image"})),(0,o.kt)("h4",{id:"tenant-typetenant-id"},"Tenant Type/Tenant Id"),(0,o.kt)("p",null,"It is important to add your app before finding the Tenant Id."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229812333-188e497f-db5c-426c-ad1e-6fdb5e1e3b17.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229812594-e3c619cb-363d-491f-aeae-3e8e6912c70a.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/229814145-9bdf006e-450e-4c14-98c6-a5b3fba690ea.png",alt:"image"})),(0,o.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,o.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,o.kt)("h3",{id:"ralte-limit-optional"},"Ralte Limit (Optional)"),(0,o.kt)("p",null,"For Teambition, we suggest you setting the rate limit to 5000"),(0,o.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h2",{id:"step-2---configure-blueprint"},"Step 2 - Configure Blueprint"),(0,o.kt)("p",null,"Similar to other beta plugins, Teambition does not support ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),", which means, you can only collect Teambition data via blueprint's advanced mode."),(0,o.kt)("p",null,"Please go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blueprints")," page and switch to advanced mode. See how to use advanced mode and JSON ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Configuration/AdvancedMode#11-teambition"},"examples"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0}}]);