"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"TAPD",description:"TAPD Plugin\n"},a=void 0,l={unversionedId:"Plugins/tapd",id:"version-v0.11/Plugins/tapd",title:"TAPD",description:"TAPD Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/tapd.md",sourceDirName:"Plugins",slug:"/Plugins/tapd",permalink:"/docs/v0.11/Plugins/tapd",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/tapd.md",tags:[],version:"v0.11",frontMatter:{title:"TAPD",description:"TAPD Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/docs/v0.11/Plugins/refdiff"},next:{title:"GitHub Basic Metrics",permalink:"/docs/v0.11/Dashboards/GitHubBasic"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects TAPD data."),(0,i.kt)("p",null,"This plugin is in development so you can't modify settings in config-ui."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to fully use this plugin, you will need to get endpoint/basic_auth_encoded/rate_limit and insert it into table ",(0,i.kt)("inlineCode",{parentName:"p"},"_tool_tapd_connections"),"."))}p.isMDXComponent=!0}}]);