"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3720],{46523:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var l=a(87462),r=(a(67294),a(3905));a(61839);const n={title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},i=void 0,p={unversionedId:"QuickStart/HelmSetup",id:"version-v0.12/QuickStart/HelmSetup",title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",source:"@site/versioned_docs/version-v0.12/QuickStart/HelmSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/HelmSetup",permalink:"/docs/v0.12/QuickStart/HelmSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/QuickStart/HelmSetup.md",tags:[],version:"v0.12",sidebarPosition:2,frontMatter:{title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Install via Docker Compose",permalink:"/docs/v0.12/QuickStart/DockerComposeSetup"},next:{title:"Install via Kubernetes",permalink:"/docs/v0.12/QuickStart/KubernetesSetup"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Install",id:"quick-install",level:2},{value:"Some example deployments",id:"some-example-deployments",level:2},{value:"Deploy with NodePort",id:"deploy-with-nodeport",level:3},{value:"Deploy with Ingress",id:"deploy-with-ingress",level:3},{value:"Deploy with Ingress (Https)",id:"deploy-with-ingress-https",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Helm >= 3.6.0"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes >= 1.19.0")),(0,r.kt)("h2",{id:"quick-install"},"Quick Install"),(0,r.kt)("p",null,"clone the code, and enter the deployment/helm folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install devlake . --set service.grafanaEndpoint=http://YOUR-NODE-IP:32000\n")),(0,r.kt)("p",null,"And visit your devlake from the node port (32001 by default)."),(0,r.kt)("p",null,"http://YOUR-NODE-IP:32001"),(0,r.kt)("h2",{id:"some-example-deployments"},"Some example deployments"),(0,r.kt)("h3",{id:"deploy-with-nodeport"},"Deploy with NodePort"),(0,r.kt)("p",null,"Conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP Address of Kubernetes node: 192.168.0.6"),(0,r.kt)("li",{parentName:"ul"},"Want to visit devlake with port 30000, and grafana at port 30001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'helm install devlake . --set "service.uiPort=30000,service.grafanaPort=30001,service.grafanaEndpoint=http://192.168.0.6:30001"\n')),(0,r.kt)("p",null,"After deployed, visit devlake: ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.6:30000"},"http://192.168.0.6:30000")),(0,r.kt)("h3",{id:"deploy-with-ingress"},"Deploy with Ingress"),(0,r.kt)("p",null,"Conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I have already configured default ingress for the Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"I want to use ",(0,r.kt)("a",{parentName:"li",href:"http://devlake.example.com"},"http://devlake.example.com")," for visiting devlake")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'helm install devlake . --set "ingress.enabled=true,ingress.hostname=devlake.example.com"\n')),(0,r.kt)("p",null,"After deployed, visit devlake: ",(0,r.kt)("a",{parentName:"p",href:"http://devlake.example.com"},"http://devlake.example.com"),", and grafana at ",(0,r.kt)("a",{parentName:"p",href:"http://devlake.example.com/grafana"},"http://devlake.example.com/grafana")),(0,r.kt)("h3",{id:"deploy-with-ingress-https"},"Deploy with Ingress (Https)"),(0,r.kt)("p",null,"Conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I have already configured ingress(class: nginx) for the Kubernetes cluster, and the https using 8443 port."),(0,r.kt)("li",{parentName:"ul"},"I want to use ",(0,r.kt)("a",{parentName:"li",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443")," for visiting devlake."),(0,r.kt)("li",{parentName:"ul"},"The https certificates are generated by letsencrypt.org, and the certificate and key files: ",(0,r.kt)("inlineCode",{parentName:"li"},"cert.pem")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"key.pem"))),(0,r.kt)("p",null,"First, create the secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret tls ssl-certificate --cert cert.pem --key secret.pem\n")),(0,r.kt)("p",null,"Then, deploy the devlake:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'helm install devlake . \\\n    --set "ingress.enabled=true,ingress.enableHttps=true,ingress.hostname=devlake-0.example.com" \\\n    --set "ingress.className=nginx,ingress.httpsPort=8443" \\\n    --set "ingress.tlsSecretName=ssl-certificate"\n')),(0,r.kt)("p",null,"After deployed, visit devlake: ",(0,r.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443"),", and grafana at ",(0,r.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443/grafana"},"https://devlake-0.example.com:8443/grafana")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Some useful parameters for the chart, you could also check them in values.yaml"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicaCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Replica Count for devlake, currently not used"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.useExternal"),(0,r.kt)("td",{parentName:"tr",align:null},"If use external mysql server, currently not used"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.externalServer"),(0,r.kt)("td",{parentName:"tr",align:null},"External mysql server address"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.externalPort"),(0,r.kt)("td",{parentName:"tr",align:null},"External mysql server port"),(0,r.kt)("td",{parentName:"tr",align:null},"3306")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.username"),(0,r.kt)("td",{parentName:"tr",align:null},"username for mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"merico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.password"),(0,r.kt)("td",{parentName:"tr",align:null},"password for mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"merico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.database"),(0,r.kt)("td",{parentName:"tr",align:null},"database for mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"lake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.rootPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"root password for mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.storage.class"),(0,r.kt)("td",{parentName:"tr",align:null},"storage class for mysql's volume"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.storage.size"),(0,r.kt)("td",{parentName:"tr",align:null},"volume size for mysql's data"),(0,r.kt)("td",{parentName:"tr",align:null},"5Gi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"repository for mysql's image"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"image tag for mysql's image"),(0,r.kt)("td",{parentName:"tr",align:null},"8.0.26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql.image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"pullPolicy for mysql's image"),(0,r.kt)("td",{parentName:"tr",align:null},"IfNotPresent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana.image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"repository for grafana's image"),(0,r.kt)("td",{parentName:"tr",align:null},"mericodev/grafana")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana.image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"image tag for grafana's image"),(0,r.kt)("td",{parentName:"tr",align:null},"latest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grafana.image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"pullPolicy for grafana's image"),(0,r.kt)("td",{parentName:"tr",align:null},"Always")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lake.storage.class"),(0,r.kt)("td",{parentName:"tr",align:null},"storage class for lake's volume"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lake.storage.size"),(0,r.kt)("td",{parentName:"tr",align:null},"volume size for lake's data"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lake.image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"repository for lake's image"),(0,r.kt)("td",{parentName:"tr",align:null},"mericodev/lake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lake.image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"image tag for lake's image"),(0,r.kt)("td",{parentName:"tr",align:null},"latest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lake.image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"pullPolicy for lake's image"),(0,r.kt)("td",{parentName:"tr",align:null},"Always")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ui.image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"repository for ui's image"),(0,r.kt)("td",{parentName:"tr",align:null},"mericodev/config-ui")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ui.image.tag"),(0,r.kt)("td",{parentName:"tr",align:null},"image tag for ui's image"),(0,r.kt)("td",{parentName:"tr",align:null},"latest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ui.image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"pullPolicy for ui's image"),(0,r.kt)("td",{parentName:"tr",align:null},"Always")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Service type for exposed service"),(0,r.kt)("td",{parentName:"tr",align:null},"NodePort")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.grafanaPort"),(0,r.kt)("td",{parentName:"tr",align:null},"Service port for grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"32000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.uiPort"),(0,r.kt)("td",{parentName:"tr",align:null},"Service port for config ui"),(0,r.kt)("td",{parentName:"tr",align:null},"32001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.grafanaEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"The external grafana endpoint, used when ingress not configured"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:32000"},"http://127.0.0.1:32000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If enable ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.enableHttps"),(0,r.kt)("td",{parentName:"tr",align:null},"If enable https"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.className"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name for ingressClass. If leave empty, the default IngressClass will be used"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname/domainname for ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"The prefix for endpoints, currently not supported due to devlake's implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.tlsSecretName"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret name for tls's certificate, required when https enabled"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.httpPort"),(0,r.kt)("td",{parentName:"tr",align:null},"The http port for ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.ingress.httpsPort"),(0,r.kt)("td",{parentName:"tr",align:null},"The https port for ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option.localtime"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostpath for mount as /etc/localtime"),(0,r.kt)("td",{parentName:"tr",align:null},"/etc/localtime")))))}o.isMDXComponent=!0}}]);