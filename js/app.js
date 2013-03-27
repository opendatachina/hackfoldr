(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","ngCookies","ngResource","app.controllers","ui.state"]).config(["$stateProvider","$urlRouterProvider"].concat(function(e,t){return e.state("about",{url:"/about",templateUrl:"/partials/app/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/app/hack.html",controller:"HackFolderCtrl"}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath2n")})).run(["$rootScope","$state","$stateParams"].concat(function(e,t,n){return e.$state=t,e.$stateParam=n}))}.call(this),function(){function n(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function r(e,t){var n=-1,r=t.length>>>0;while(++n<r)if(e===t[n]&&n in t)return!0;return!1}var e=[].slice,t="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$resource","$rootScope"].concat(function(e,t,n,r){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,t,r){var i;return n(e,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return typeof console!="undefined"&&console!==null?console.log("notyetupdated"):void 8}},iframes:r.iframes,docs:r.docs,tree:r.tree,activate:r.activate,HackFolder:r,reload:function(e){return r.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(n){return r.getIndex(n,!1,function(){var n,i;e.$watch("docId",function(e){if(e)return r.activate(e)});if(!e.docId)if(n=(i=r.docs[0])!=null?i.id:void 8)return t.transitionTo("hack.doc",{docId:n,hackId:e.hackId})})}),e.hackId=(i=t.params.hackId)?i:"s8r4l008sk",e.$watch("$state.params.docId",function(t){if(t)return e.docId=encodeURIComponent(encodeURIComponent(t))})})}).directive("resize",["$window"].concat(function(e){return function(t){return t.width=e.innerWidth,t.height=e.innerHeight,angular.element(e).bind("resize",function(){return t.$apply(function(){return t.width=e.innerWidth,t.height=e.innerHeight})})}})).directive("ngxNoclick",function(){return function(e,t,n){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxFinal",function(){return function(e,t,n){return $(t).click(function(e){return e.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(i){var s,o,u,a;return s={},o=[],u=[],{iframes:s,collapsed:!1,docs:o,tree:u,activate:function(e,t){function g(e){return e.id}var n,i,a,f,l,c,h,p,d,v,m;t==null&&(t=!1),i=function(){var t,r,i,s=[];for(t=0,i=(r=o).length;t<i;++t)n=r[t],n.id===e&&s.push(n);return s}()[0],a=i.type;for(f=0,c=(l=u).length;f<c;++f)h=l[f],(p=h!=null?(d=h.children)!=null?d.map(g):void 8:void 8)&&r(e,p)&&(h.collapsed=!1);return v=t?"edit":"view",m=function(){var t;switch(t=[a],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+v;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://hackpad.com/"+e;case"ethercalc"!==t[0]:return"http://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e))}}(),(p=s[e])?(p.src=m,p.mode=v,p):s[e]={src:m,doc:i,mode:v}},getIndex:function(r,s,f){return a===r&&!s?f(o):i.get("http://www.ethercalc.org/_/"+r+"/csv").success(function(i){function k(){var e;switch(e=[m],!1){case!(S=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:S[1]};case!(S=/https?:\/\/hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",id:S[1]};case!(S=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(m)),icon:"http://g.etfv.co/"+S[1]};default:return typeof console!="undefined"&&console!==null?console.log("unrecognized",m):void 8}}var s,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C;a=r,o.length=0,l=[];for(c=0,p=(h=i.split(/\n/)).length;c<p;++c)d=h[c],d&&(v=d.split(/,/),m=v[0],g=v[1],y=e.call(v,2),g=t.call(g,/"/g,""),v=m.match(/^"?(\s*)(\S+)"?$/),b=v[0],w=v[1],m=v[2],E=n({url:m,title:g,indent:w.length},k()),E.icon==null&&(E.icon="img/"+E.type+".png"),l.push(E));s=l,x=0,o.splice.apply(o,[0,-1].concat(e.call(s.filter(function(e){return e!=null})))),l=[];for(c=0,p=(h=o).length;c<p;++c)N=c,E=h[c],N>0&&(E.indent?(C=s[x],C.children==null&&(C.children=[]),C.children.push(E),C.collapsed=!0,l.push(null)):(x=N,l.push(E)));return T=l,u.splice.apply(u,[0,-1].concat(e.call(T.filter(function(e){return e!=null})))),f(o)})}}})})}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this)