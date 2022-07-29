"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"Jenkins",description:"Jenkins Plugin\n"},o=void 0,l={unversionedId:"Plugins/jenkins",id:"Plugins/jenkins",title:"Jenkins",description:"Jenkins Plugin\n",source:"@site/docs/Plugins/jenkins.md",sourceDirName:"Plugins",slug:"/Plugins/jenkins",permalink:"/docs/Plugins/jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jenkins.md",tags:[],version:"current",frontMatter:{title:"Jenkins",description:"Jenkins Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/Plugins/gitlab"},next:{title:"Jira",permalink:"/docs/Plugins/jira"}},c={},s=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>config-ui</code>",id:"by-config-ui",level:3},{value:"Collect Data From Jenkins",id:"collect-data-from-jenkins",level:2},{value:"Relationship between job and build",id:"relationship-between-job-and-build",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Jenkins data through ",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/remote-access-api/"},"Remote Access API"),". It then computes and visualizes various DevOps metrics from the Jenkins data."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61080/141943122-dcb08c35-cb68-4967-9a7c-87b63c2d6988.png",alt:"image"})),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Build Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of builds created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Build Success Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The percentage of successful builds")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to fully use this plugin, you will need to set various configurations via Dev Lake's ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui"),"."),(0,i.kt)("h3",{id:"by-config-ui"},"By ",(0,i.kt)("inlineCode",{parentName:"h3"},"config-ui")),(0,i.kt)("p",null,"The connection section of the configuration screen requires the following key fields to connect to the Jenkins API."),(0,i.kt)("h2",{id:"collect-data-from-jenkins"},"Collect Data From Jenkins"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "jenkins",\n      "options": {}\n    }\n  ]\n]\n')),(0,i.kt)("h2",{id:"relationship-between-job-and-build"},"Relationship between job and build"),(0,i.kt)("p",null,"Build is kind of a snapshot of job. Running job each time creates a build."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}p.isMDXComponent=!0}}]);