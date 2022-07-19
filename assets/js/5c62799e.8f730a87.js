"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1124],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={title:"TAPD",description:"TAPD Plugin\n"},c=void 0,l={unversionedId:"Plugins/tapd",id:"version-v0.11.0/Plugins/tapd",title:"TAPD",description:"TAPD Plugin\n",source:"@site/versioned_docs/version-v0.11.0/Plugins/tapd.md",sourceDirName:"Plugins",slug:"/Plugins/tapd",permalink:"/docs/v0.11.0/Plugins/tapd",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11.0/Plugins/tapd.md",tags:[],version:"v0.11.0",frontMatter:{title:"TAPD",description:"TAPD Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/docs/v0.11.0/Plugins/refdiff"},next:{title:"GitHub Basic Metrics",permalink:"/docs/v0.11.0/Dashboards/GitHubBasic"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects TAPD data."),(0,o.kt)("p",null,"This plugin is in development so you can't modify settings in config-ui."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get endpoint/basic_auth_encoded/rate_limit and insert it into table ",(0,o.kt)("inlineCode",{parentName:"p"},"_tool_tapd_connections"),"."))}d.isMDXComponent=!0}}]);