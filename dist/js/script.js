!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var i=t.pop();if(i&&i.pop)for(o=i.length;o--;)t.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}t.r(n);const o=["おつかれさまです！","がんばってください！"],i=({message:e})=>r("div",{style:{"font-family":"Gulim, sans-serif",position:"relative",display:"table-cell",width:90,height:90,background:"#70a6ff","border-radius":"50%",color:"#EEE","vertical-align":"middle","text-align":"center",opacity:.8}},r("p",null,e),r("div",{style:{position:"absolute",bottom:-18,left:"50%",border:"10px solid transparent","border-top":"15px solid #70a6ff","margin-left":-10}})),l=()=>(e,n)=>r("div",{oncreate:n.start,style:{position:"absolute",right:e.position.x,bottom:e.position.y}},()=>e.message?r(i,{message:e.message}):null,r("a",{href:"javascript:void(0)"},r("img",{src:"images/ishino_last.png",width:100})));!function(e,n,t,r){var o,i=[].map,l=r&&r.children[0]||null,u=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:i.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],s=!0,f=h(e),c=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"==typeof i&&(i=i(g(n,f),r)),i&&i!==(t=g(n,f))&&!i.then&&p(f=m(n,h(t,i),f)),i}}(o,r[o]):e(n.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],f,h(n));return p(),c;function d(e){return"function"==typeof e?d(e(f,c)):null!=e?e:""}function v(){o=!o;var e=d(t);for(r&&!o&&(l=function e(n,t,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var i=0;i<n.children.length;i++)r.appendChild(e(n.children[i]=d(n.children[i]),t));for(var l in o)N(r,l,o[l],null,t)}return r}(o,i);n.insertBefore(l,t),null!=r&&x(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in h(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&N(e,o,t[o],n[o],r);var i=s?t.oncreate:t.onupdate;i&&a.push(function(){i(e,n)})}(t,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var u={},f={},c=[],v=r.children,p=o.children,m=0;m<v.length;m++){c[m]=t.childNodes[m];var g=y(v[m]);null!=g&&(u[g]=[c[m],v[m]])}for(var m=0,b=0;b<p.length;){var g=y(v[m]),j=y(p[b]=d(p[b]));if(f[g])m++;else if(null==j||j!==y(v[m+1]))if(null==j||s)null==g&&(e(t,c[m],v[m],p[b],i),b++),m++;else{var w=u[j]||[];g===j?(e(t,w[0],w[1],p[b],i),m++):w[0]?e(t,t.insertBefore(w[0],c[m]),w[1],p[b],i):e(t,c[m],null,p[b],i),f[j]=p[b],b++}else null==g&&x(t,c[m],v[m]),m++}for(;m<v.length;)null==y(v[m])&&x(t,c[m],v[m]),m++;for(var m in u)f[m]||x(t,u[m][0],u[m][1])}return t}(r,l,u,u=e)),s=!1;a.length;)a.pop()()}function p(){o||(o=!0,setTimeout(v))}function h(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function m(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),n,t[e[0]]):n,h(t,r)):n}function g(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function y(e){return e?e.key:null}function b(e){return e.currentTarget.events[e.type](e)}function N(e,n,t,r,o){if("key"===n);else if("style"===n)for(var i in h(r,t)){var l=null==t||null==t[i]?"":t[i];"-"===i[0]?e[n].setProperty(i,l):e[n][i]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,b):e.removeEventListener(n,b)):n in e&&"list"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function x(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}({position:{x:0,y:0},message:"おはようございます！"},{setPosition:e=>({position:e}),setMessage:e=>({message:e}),start:()=>(e,n)=>{console.log("start"),setInterval(()=>n.setMessage(o[Math.floor(Math.random()*o.length)]),36e5)}},(e,n)=>r("main",{style:{}},r(l,null)),document.body)}]);