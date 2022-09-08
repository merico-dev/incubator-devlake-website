"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},a=void 0,l={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.13/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.13/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/docs/v0.13/DeveloperManuals/DBMigration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/DeveloperManuals/DBMigration.md",tags:[],version:"v0.13",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/docs/v0.13/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/docs/v0.13/DeveloperManuals/Notifications"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Migration Script",id:"migration-script",level:2},{value:"Migration Model",id:"migration-model",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"Execution",id:"execution",level:2},{value:"How It Works",id:"how-it-works",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,r.kt)("h2",{id:"migration-script"},"Migration Script"),(0,r.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    // this function will contain the business logic of the migration (e.g. DDL logic)\n    Up(ctx context.Context, db *gorm.DB) error\n    // the version number of the migration. typically in date format (YYYYMMDDHHMMSS), e.g. 20220728000001. Migrations are executed sequentially based on this number.\n    Version() uint64\n    // The name of this migration\n    Name() string\n}\n")),(0,r.kt)("h2",{id:"migration-model"},"Migration Model"),(0,r.kt)("p",null,'For each migration we define a "snapshot" datamodel of the model that we wish to perform the migration on.\nThe fields on this model shall be identical to the actual model, but unlike the actual one, this one will\nnever change in the future. The naming convention of these models is ',(0,r.kt)("inlineCode",{parentName:"p"},"<ModelName>YYYYMMDD")," and they must implement\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"func TableName() string")," method, and consumed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Script::Up")," method."),(0,r.kt)("h2",{id:"table-migration_history"},"Table ",(0,r.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,r.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"Each plugin has a ",(0,r.kt)("inlineCode",{parentName:"p"},"migrationscripts")," subpackage that lists all the migrations to be executed for that plugin. You\nwill need to add your migration to that list for the framework to pick it up. Similarly, there is such a package\nfor the framework-only migrations defined under the ",(0,r.kt)("inlineCode",{parentName:"p"},"models")," package."),(0,r.kt)("h2",{id:"how-it-works"},"How It Works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check ",(0,r.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,r.kt)("li",{parentName:"ol"},"Sort scripts by Version in ascending order."),(0,r.kt)("li",{parentName:"ol"},"Execute scripts."),(0,r.kt)("li",{parentName:"ol"},"Save results in the ",(0,r.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")))}m.isMDXComponent=!0}}]);