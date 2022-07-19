"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9686],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"DBT",description:"DBT Plugin\n"},s=void 0,u={unversionedId:"Plugins/dbt",id:"Plugins/dbt",title:"DBT",description:"DBT Plugin\n",source:"@site/docs/Plugins/dbt.md",sourceDirName:"Plugins",slug:"/Plugins/dbt",permalink:"/docs/Plugins/dbt",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/dbt.md",tags:[],version:"current",frontMatter:{title:"DBT",description:"DBT Plugin\n"},sidebar:"docsSidebar",previous:{title:"Engineering Metrics",permalink:"/docs/EngineeringMetrics"},next:{title:"Feishu",permalink:"/docs/Plugins/feishu"}},d={},p=[{value:"Summary",id:"summary",level:2},{value:'User setup<a id="user-setup"></a>',id:"user-setup",level:2},{value:'Required Packages to Install<a id="user-setup-requirements"></a>',id:"required-packages-to-install",level:4},{value:'Commands to run or create in your terminal and the dbt project<a id="user-setup-commands"></a>',id:"commands-to-run-or-create-in-your-terminal-and-the-dbt-project",level:4},{value:"Convert Data By DBT",id:"convert-data-by-dbt",level:2},{value:"Resources:",id:"resources",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"dbt (data build tool) enables analytics engineers to transform data in their warehouses by simply writing select statements. dbt handles turning these select statements into tables and views.\ndbt does the T in ELT (Extract, Load, Transform) processes \u2013 it doesn\u2019t extract or load data, but it\u2019s extremely good at transforming data that\u2019s already loaded into your warehouse."),(0,o.kt)("h2",{id:"user-setup"},"User setup",(0,o.kt)("a",{id:"user-setup"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you plan to use this product, you need to install some environments first.")),(0,o.kt)("h4",{id:"required-packages-to-install"},"Required Packages to Install",(0,o.kt)("a",{id:"user-setup-requirements"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"python3.7+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/dbt-mysql/#configuring-your-profile"},"dbt-mysql"))),(0,o.kt)("h4",{id:"commands-to-run-or-create-in-your-terminal-and-the-dbt-project"},"Commands to run or create in your terminal and the dbt project",(0,o.kt)("a",{id:"user-setup-commands"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"pip install dbt-mysql"),(0,o.kt)("li",{parentName:"ol"},"dbt init demoapp (demoapp is project name)"),(0,o.kt)("li",{parentName:"ol"},"create your SQL transformations and data models")),(0,o.kt)("h2",{id:"convert-data-by-dbt"},"Convert Data By DBT"),(0,o.kt)("p",null,"Use the Raw JSON API to manually initiate a run using ",(0,o.kt)("strong",{parentName:"p"},"cURL")," or graphical API tool such as ",(0,o.kt)("strong",{parentName:"p"},"Postman"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," the following request to the DevLake API Endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "dbt",\n      "options": {\n          "projectPath": "/Users/abeizn/demoapp",\n          "projectName": "demoapp",\n          "projectTarget": "dev",\n          "selectedModels": ["my_first_dbt_model","my_second_dbt_model"],\n          "projectVars": {\n            "demokey1": "demovalue1",\n            "demokey2": "demovalue2"\n        }\n      }\n    }\n  ]\n]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projectPath"),": the absolute path of the dbt project. (required)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projectName"),": the name of the dbt project. (required)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projectTarget"),": this is the default target your dbt project will use. (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selectedModels"),": a model is a select statement. Models are defined in .sql files, and typically in your models directory. (required)\nAnd selectedModels accepts one or more arguments. Each argument can be one of:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a package name, runs all models in your project, example: example"),(0,o.kt)("li",{parentName:"ol"},"a model name, runs a specific model, example: my_fisrt_dbt_model"),(0,o.kt)("li",{parentName:"ol"},"a fully-qualified path to a directory of models.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projectVars"),": variables to parametrize dbt models. (optional)\nexample:\n",(0,o.kt)("inlineCode",{parentName:"li"},"select * from events where event_type = '{{ var(\"event_type\") }}'"),"\nTo execute this SQL query in your model, you need set a value for ",(0,o.kt)("inlineCode",{parentName:"li"},"event_type"),".")),(0,o.kt)("h3",{id:"resources"},"Resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more about dbt ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/introduction"},"in the docs")),(0,o.kt)("li",{parentName:"ul"},"Check out ",(0,o.kt)("a",{parentName:"li",href:"https://discourse.getdbt.com/"},"Discourse")," for commonly asked questions and answers")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);