(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)o=r[u],n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function o(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3676700d"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise(function(t,a){s=n[e]=[t,a]});t.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,s[1](o)}n[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("MainNav"),s("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main_nav"}},[e._v("\n   MainNav goes here\n   "),s("ProjectNav"),s("AppNav")],1)},r=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"app-nav"},[e._v("\n    AppNav sagt hallo\n")])},l=[],u=s("2877"),m={},d=Object(u["a"])(m,c,l,!1,null,null,null),v=d.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"project-nav"},[e._v("\n    ProjectNav sagt hallo\n")])},f=[],h={},$=Object(u["a"])(h,p,f,!1,null,null,null),g=$.exports,b={name:"MainNav",components:{AppNav:v,ProjectNav:g}},D=b,C=Object(u["a"])(D,o,r,!1,null,null,null),y=C.exports,_={components:{MainNav:y}},w=_,x=(s("034f"),Object(u["a"])(w,n,i,!1,null,null,null)),N=x.exports,T=s("8c4f"),L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Nav"),s("VuseBuilder",{on:{saved:e.onSave}}),s("Footer")],1)},j=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-item nav-logo",attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05")}}),a("span",[e._v("Website Title")])]),a("div",{staticClass:"nav-menu"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("Home")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/settings"}},[e._v("Settings")])],1)],1)},P=[],M={name:"Nav"},E=M,H=Object(u["a"])(E,k,P,!1,null,null,null),S=H.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"footer-left"},[a("router-link",{staticClass:"nav-item nav-logo",attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05")}}),a("span",[e._v("Website Title")])])],1),a("div",{staticClass:"footer-right"},[a("div",{staticClass:"social-links"},[a("a",{staticClass:"social-link",attrs:{href:""}},[a("img",{attrs:{src:"@/assets/socials/"+e.socialLinks[0]+".svg"}})])])])])},O=[],A={name:"Footer",data:function(){return{socialLinks:["twitter","medium","github"]}}},U=A,W=Object(u["a"])(U,q,O,!1,null,null,null),B=W.exports,R={name:"builder",components:{Nav:S,Footer:B},methods:{onSave:function(e){e.export("pwa")}}},F=R,G=Object(u["a"])(F,L,j,!1,null,null,null),I=G.exports;a["default"].use(T["a"]);var z=new T["a"]({routes:[{path:"/",name:"builder",component:I},{path:"/settings",name:"settings",component:function(){return s.e("about").then(s.bind(null,"26d3"))}}]}),J=s("9483");Object(J["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var X=s("ce5b"),V=s.n(X),K=(s("bf40"),s("97f5")),Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uploader"},[s("img",{attrs:{src:e.src}}),e.$builder.isEditing&&"input"===e.mode?s("input",{ref:"uploader",staticClass:"uploader-input",attrs:{type:"file"},on:{change:e.updateImage}}):e._e()])},Y=[],Z={name:"Uploader",inject:["$builder","$section"],props:{path:{type:String,required:!0},mode:{default:"input",type:String}},data:function(){return{src:""}},created:function(){this.src=this.$section.get(this.path)},methods:{updateImage:function(){var e=this.$refs.uploader.files[0];if(e){var t=URL.createObjectURL(e);this.src=t,this.$section.set(this.path,t)}}}},ee=Z,te=(s("db2a"),Object(u["a"])(ee,Q,Y,!1,null,null,null)),se=te.exports,ae=s("795b"),ne=s.n(ae),ie=(s("ac6a"),s("5df3"),s("774e")),oe=s.n(ie),re=(s("7f7f"),s("7c39")),ce=s.n(re),le=s("67a3"),ue=s.n(le);s("c5f6"),s("28a5"),s("a745"),s("7618"),s("9b02");function me(e){return new ne.a(function(t,s){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){var e=this.response,s=this.response.type.split("/")[1].split("+")[0],a=(new Date).getUTCMilliseconds(),n="image-".concat(a,".").concat(s);t({blob:e,name:n})},a.send(null)})}function de(e){var t=oe()(e.querySelectorAll(".is-editable")),s=oe()(e.querySelectorAll(".uploader")),a=oe()(e.querySelectorAll(".styler"));t.forEach(function(e){e.contentEditable="inherit",e.classList.remove("is-editable")}),s.forEach(function(e){var t=e.querySelector(":scope > input"),s=e.querySelector(":scope > img");s.classList.add("add-full-width"),e.classList.remove("uploader"),t.remove()}),a.forEach(function(e){e.remove()})}function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.images,a=void 0===s?[]:s;e.file("sw.js","\n    const staticCacheName = 'bbuilder-static-v1';\n\n    self.addEventListener('install', function(event) {\n      event.waitUntil(\n        caches.open(staticCacheName).then(function(cache) {\n          return cache.addAll([\n            '/',\n            '/assets/js/main.js',\n            ".concat(a.map(function(e){return"'/assets/img/"+e.name+"'"}).join(",").trim(","),"\n          ]);\n        })\n      );\n    });\n\n    function serveAsset(request) {\n      return caches.open(staticCacheName).then(function(cache) {\n        return cache.match(request).then(function(response) {\n          if (response) return response;\n\n          return fetch(request).then(function(networkResponse) {\n            cache.put(request, networkResponse.clone());\n            return networkResponse;\n          });\n        });\n      });\n    }\n\n    self.addEventListener('fetch', function(event) {\n      const requestUrl = new URL(event.request.url);\n\n      if (requestUrl.origin === location.origin) {\n        if (requestUrl.pathname === '/') {\n          event.respondWith(caches.match('/'));\n          return;\n        }\n        if (requestUrl.pathname.startsWith('/assets/')) {\n          event.respondWith(serveAsset(event.request));\n          return;\n        }\n      }\n\n      event.respondWith(\n        caches.match(event.request).then(function(response) {\n          return response || fetch(event.request);\n        })\n      );\n    });\n  "));var n=e.folder("assets/js");n.file("main.js","\n    function registerSW () {\n      if (!navigator.serviceWorker) return;\n      navigator.serviceWorker.register('/sw.js').then(function (reg) {\n        console.log('SW registered!');\n      });\n    }\n\n    registerSW();\n  ")}function pe(e,t){ve(e,t)}function fe(e){var t=this.outputFragment(),s=oe()(t.querySelectorAll("img")),a=t.querySelector("#artboard"),n=document.title,i=new ce.a,o=i.folder("project"),r=o.folder("assets/img"),c=o.folder("assets/css");ne.a.all(s.map(function(e){var t=me(e.src);return t.then(function(t){return r.file(t.name,t.blob,{base64:!0}),e.setAttribute("src","assets/img/".concat(t.name)),t})})).then(function(e){pe(o,{images:e})}).then(function(){return new ne.a(function(t,s){var a=new XMLHttpRequest;a.open("GET",e.css),a.onload=function(){t(this.response)},a.send(null)}).then(function(e){return c.file("app.css",e),e})}).then(function(){de(t),o.file("index.html","<html>\n          <head>\n            <title>".concat(n,'</title>\n            <link href="assets/css/app.css" rel="stylesheet">\n          </head>\n          <body>\n            ').concat(a.innerHTML,'\n          <script src="/assets/js/main.js"><\/script>\n          </body>\n        </html>')),i.generateAsync({type:"blob"}).then(function(e){ue()(e,"project.zip")})})}function he(e){var t=e.builder;t.download=fe}s("757a");var $e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.classes,expression:"$sectionData.classes"}],staticClass:"header",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"column is-desktop-6 add-center-vertical"},[s("h1",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.title,expression:"$sectionData.title"}],staticClass:"header-title",domProps:{innerHTML:e._s(e.$sectionData.title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.content,expression:"$sectionData.content"}],staticClass:"header-content",domProps:{innerHTML:e._s(e.$sectionData.content)}}),s("a",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.button,expression:"$sectionData.button"}],staticClass:"button",class:e.$sectionData.button.classes,attrs:{href:e.$sectionData.button.href},domProps:{innerHTML:e._s(e.$sectionData.button.text)}})]),s("div",{staticClass:"column is-desktop-6"},[s("uploader",{staticClass:"header-image",attrs:{path:"$sectionData.images[0]"}})],1)])])])},ge=[],be={name:"Hero1",cover:"img/covers/hero1.png",group:"hero",$schema:{title:K["b"].Title,content:K["b"].Text,images:[K["b"].Image],button:K["b"].Button,classes:K["b"].ClassList},props:{id:{type:Number,required:!0}}},De=be,Ce=Object(u["a"])(De,$e,ge,!1,null,null,null),ye=Ce.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.classes,expression:"$sectionData.classes"}],staticClass:"header",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"column is-desktop-6 is-offset-screen-3 add-center-horizontal add-padding add-text-center"},[s("h3",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.title,expression:"$sectionData.title"}],staticClass:"header-title",domProps:{innerHTML:e._s(e.$sectionData.title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.content,expression:"$sectionData.content"}],staticClass:"header-content",domProps:{innerHTML:e._s(e.$sectionData.content)}}),s("a",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.button,expression:"$sectionData.button"}],staticClass:"button",class:e.$sectionData.button.classes,attrs:{href:e.$sectionData.button.href},domProps:{innerHTML:e._s(e.$sectionData.button.text)}})]),s("div",{staticClass:"column is-desktop-8 is-offset-screen-2"},[s("uploader",{staticClass:"header-image",attrs:{path:"$sectionData.images[0]"}})],1)])])])},we=[],xe={name:"Hero2",cover:"img/covers/hero2.png",group:"hero",$schema:{title:K["b"].Title,content:K["b"].Text,images:[K["b"].Image],button:K["b"].Button,classes:K["b"].ClassList},props:{id:{type:Number,required:!0}}},Ne=xe,Te=Object(u["a"])(Ne,_e,we,!1,null,null,null),Le=Te.exports,je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.classes,expression:"$sectionData.classes"}],staticClass:"section",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid is-center"},[s("div",{directives:[{name:"styler",rawName:"v-styler:grid",value:e.$sectionData.columns[0].grid,expression:"$sectionData.columns[0].grid",arg:"grid"}],staticClass:"column",class:e.gridClasses[0]},[s("h2",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].title,expression:"$sectionData.columns[0].title"}],staticClass:"section-title",domProps:{innerHTML:e._s(e.$sectionData.columns[0].title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].content,expression:"$sectionData.columns[0].content"}],staticClass:"section-paragraph",domProps:{innerHTML:e._s(e.$sectionData.columns[0].content)}})]),s("div",{directives:[{name:"styler",rawName:"v-styler:grid",value:e.$sectionData.columns[1].grid,expression:"$sectionData.columns[1].grid",arg:"grid"}],staticClass:"column is-offset-screen-1",class:e.gridClasses[1]},[s("h2",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].title,expression:"$sectionData.columns[1].title"}],staticClass:"section-title",domProps:{innerHTML:e._s(e.$sectionData.columns[1].title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].content,expression:"$sectionData.columns[1].content"}],staticClass:"section-paragraph",domProps:{innerHTML:e._s(e.$sectionData.columns[1].content)}})])])])])},ke=[],Pe={name:"Section1",cover:"img/covers/section1.png",group:"section",$schema:{classes:K["b"].ClassList,columns:[{title:K["b"].Title,content:K["b"].Text,grid:{mobile:0,desktop:5}},{title:K["b"].Title,content:K["b"].Text,grid:{mobile:0,desktop:5}}]},props:{id:{type:Number,required:!0}}},Me=Pe,Ee=Object(u["a"])(Me,je,ke,!1,null,null,null),He=Ee.exports,Se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"section",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid is-center"},[s("div",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].grid,expression:"$sectionData.columns[0].grid"}],staticClass:"column",class:e.gridClasses[0]},[s("h2",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].title,expression:"$sectionData.columns[0].title"}],staticClass:"section-title",domProps:{innerHTML:e._s(e.$sectionData.columns[0].title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].content,expression:"$sectionData.columns[0].content"}],staticClass:"section-paragraph",domProps:{innerHTML:e._s(e.$sectionData.columns[0].content)}})]),s("div",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].grid,expression:"$sectionData.columns[1].grid"}],staticClass:"column",class:e.gridClasses[1]},[s("h2",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].title,expression:"$sectionData.columns[1].title"}],staticClass:"section-title",domProps:{innerHTML:e._s(e.$sectionData.columns[1].title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].content,expression:"$sectionData.columns[1].content"}],staticClass:"section-paragraph",domProps:{innerHTML:e._s(e.$sectionData.columns[1].content)}})]),s("div",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[2].grid,expression:"$sectionData.columns[2].grid"}],staticClass:"column",class:e.gridClasses[2]},[s("h2",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[2].title,expression:"$sectionData.columns[2].title"}],staticClass:"section-title",domProps:{innerHTML:e._s(e.$sectionData.columns[2].title)}}),s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[2].content,expression:"$sectionData.columns[2].content"}],staticClass:"section-paragraph",domProps:{innerHTML:e._s(e.$sectionData.columns[2].content)}})])])])])},qe=[],Oe={name:"Section2",cover:"img/covers/section2.png",group:"section",$schema:{classes:K["b"].ClassList,columns:[{title:K["b"].Title,content:K["b"].Text,grid:K["b"].Grid},{title:K["b"].Title,content:K["b"].Text,grid:K["b"].Grid},{title:K["b"].Title,content:K["b"].Text,grid:K["b"].Grid}]},props:{id:{type:Number,required:!0}}},Ae=Oe,Ue=Object(u["a"])(Ae,Se,qe,!1,null,null,null),We=Ue.exports,Be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"social",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid is-center"},[s("div",{staticClass:"column is-desktop-2 social-item"},[s("h6",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].content,expression:"$sectionData.columns[0].content"}],staticClass:"social-number",domProps:{innerHTML:e._s(e.$sectionData.columns[0].content)}}),s("b",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].title,expression:"$sectionData.columns[0].title"}],staticClass:"social-keyword",domProps:{innerHTML:e._s(e.$sectionData.columns[0].title)}})]),s("div",{staticClass:"column is-desktop-2 social-item"},[s("h6",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].content,expression:"$sectionData.columns[1].content"}],staticClass:"social-number",domProps:{innerHTML:e._s(e.$sectionData.columns[1].content)}}),s("b",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[1].title,expression:"$sectionData.columns[1].title"}],staticClass:"social-keyword",domProps:{innerHTML:e._s(e.$sectionData.columns[1].title)}})]),s("div",{staticClass:"column is-desktop-2 social-item"},[s("h6",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[2].content,expression:"$sectionData.columns[2].content"}],staticClass:"social-number",domProps:{innerHTML:e._s(e.$sectionData.columns[2].content)}}),s("b",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[2].title,expression:"$sectionData.columns[2].title"}],staticClass:"social-keyword",domProps:{innerHTML:e._s(e.$sectionData.columns[2].title)}})])])])])},Re=[],Fe={name:"Social1",cover:"img/covers/social1.png",group:"social",$schema:{classes:K["b"].ClassList,columns:[{title:K["b"].Title,content:Number},{title:K["b"].Title,content:Number},{title:K["b"].Title,content:Number}]},props:{id:{type:Number,required:!0}}},Ge=Fe,Ie=Object(u["a"])(Ge,Be,Re,!1,null,null,null),ze=Ie.exports,Je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"social",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"row is-center"},[s("div",{staticClass:"column is-desktop-6"},[s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.content,expression:"$sectionData.content"}],staticClass:"social-quote",domProps:{innerHTML:e._s(e.$sectionData.content)}})])]),s("div",{staticClass:"row is-center"},[s("div",{staticClass:"column is-desktop-2"},[s("div",{staticClass:"user is-alt"},[s("uploader",{staticClass:"user-avatar",attrs:{path:"$sectionData.images[0]"}}),e._m(0)],1)])])])])])},Xe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-data"},[s("h4",{staticClass:"user-name"},[e._v("Ahmed")]),s("span",{staticClass:"user-caption"},[e._v("SEO at Baianat")])])}],Ve={name:"Social2",cover:"img/covers/social2.png",group:"social",$schema:{classes:K["b"].ClassList,content:K["b"].Text,images:[K["b"].Avatar]},props:{id:{type:Number,required:!0}}},Ke=Ve,Qe=Object(u["a"])(Ke,Je,Xe,!1,null,null,null),Ye=Qe.exports,Ze=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"social",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"row is-center"},[s("div",{staticClass:"column is-12 is-desktop-7"},[s("h3",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.title,expression:"$sectionData.title"}],staticClass:"social-title",domProps:{innerHTML:e._s(e.$sectionData.title)}})]),s("div",{staticClass:"column is-12 is-desktop-7"},[s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.content,expression:"$sectionData.content"}],staticClass:"social-content",domProps:{innerHTML:e._s(e.$sectionData.content)}})])]),s("div",{staticClass:"row is-center"},e._l(e.$sectionData.images,function(e,t){return s("div",{staticClass:"column is-desktop-2"},[s("uploader",{staticClass:"social-logo",attrs:{path:"$sectionData.images["+t+"]"}})],1)}),0)])])])},et=[],tt={name:"Social3",cover:"img/covers/social3.png",group:"social",$schema:{classes:K["b"].ClassList,title:K["b"].Title,content:K["b"].Text,images:[K["b"].Logo,K["b"].Logo,K["b"].Logo]},props:{id:{type:Number,required:!0}}},st=tt,at=Object(u["a"])(st,Ze,et,!1,null,null,null),nt=at.exports,it=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"social",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"row is-center"},[s("div",{staticClass:"column is-12"},[s("h3",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.title,expression:"$sectionData.title"}],staticClass:"social-title",domProps:{innerHTML:e._s(e.$sectionData.title)}})])]),s("div",{staticClass:"row is-center"},[s("div",{staticClass:"column is-12 is-desktop-4"},[s("p",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.columns[0].content,expression:"$sectionData.columns[0].content"}],domProps:{innerHTML:e._s(e.$sectionData.columns[0].content)}}),s("div",{staticClass:"user"},[s("uploader",{staticClass:"user-avatar",attrs:{path:"$sectionData.images[0]"}}),e._m(0)],1)]),s("div",{staticClass:"column is-12 is-desktop-4"},[s("p",{directives:[{name:"styler",rawName:"v-styler:text",value:e.$sectionData.columns[1].content,expression:"$sectionData.columns[1].content",arg:"text"}],domProps:{innerHTML:e._s(e.$sectionData.columns[1].content)}}),s("div",{staticClass:"user"},[s("uploader",{staticClass:"user-avatar",attrs:{path:"$sectionData.images[1]"}}),e._m(1)],1)]),s("div",{staticClass:"column is-12 is-desktop-4"},[s("p",{directives:[{name:"styler",rawName:"v-styler:text",value:e.$sectionData.columns[2].content,expression:"$sectionData.columns[2].content",arg:"text"}],domProps:{innerHTML:e._s(e.$sectionData.columns[2].content)}}),s("div",{staticClass:"user"},[s("uploader",{staticClass:"user-avatar",attrs:{path:"$sectionData.images[2]"}}),e._m(2)],1)])])])])])},ot=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-data"},[s("h4",{staticClass:"user-name"},[e._v("Ahmed")]),s("span",{staticClass:"user-caption"},[e._v("SEO at Baianat")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-data"},[s("h4",{staticClass:"user-name"},[e._v("Ahmed")]),s("span",{staticClass:"user-caption"},[e._v("SEO at Baianat")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-data"},[s("h4",{staticClass:"user-name"},[e._v("Ahmed")]),s("span",{staticClass:"user-caption"},[e._v("SEO at Baianat")])])}],rt={name:"Social4",cover:"img/covers/social4.png",group:"social",$schema:{classes:[K["b"].ClassList],title:K["b"].Title,columns:[{content:K["b"].Text},{content:K["b"].Text},{content:K["b"].Text}],images:[K["b"].Avatar,K["b"].Avatar,K["b"].Avatar]},props:{id:{type:Number,required:!0}}},ct=rt,lt=Object(u["a"])(ct,it,ot,!1,null,null,null),ut=lt.exports,mt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{directives:[{name:"styler",rawName:"v-styler:section",value:e.$sectionData.classes,expression:"$sectionData.classes",arg:"section"}],staticClass:"header",class:e.$sectionData.classes},[s("div",{staticClass:"container"},[s("div",{staticClass:"grid is-center"},[e._m(0),s("form",{staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"column is-desktop-4"},[s("div",{staticClass:"input-group has-itemAfter"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$sectionData.form.email,expression:"$sectionData.form.email"}],staticClass:"input",attrs:{type:"text",name:"email",placeholder:"Email address"},domProps:{value:e.$sectionData.form.email},on:{input:function(t){t.target.composing||e.$set(e.$sectionData.form,"email",t.target.value)}}}),s("a",{directives:[{name:"styler",rawName:"v-styler",value:e.$sectionData.action,expression:"$sectionData.action"}],staticClass:"button",class:e.$sectionData.action.classes,attrs:{href:e.$sectionData.action.href},domProps:{innerHTML:e._s(e.$sectionData.action.text)},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}})])])])])])])},dt=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("h3",{staticClass:"header-title"},[e._v("Sign up for our newsletter")])])}],vt={name:"Newsletter",cover:"img/covers/newsletter.png",group:"forms",$schema:{classes:K["b"].ClassList,action:K["b"].Button,form:{email:""}},props:{id:{type:Number,required:!0}},methods:{onSubmit:function(){if(!this.$builder.isEditing){var e=this.$sectionData.action.href;console.log("Pinging ".concat(e," with ").concat(this.$sectionData.form.email))}}}},pt=vt,ft=Object(u["a"])(pt,mt,dt,!1,null,null,null),ht=ft.exports;K["a"].mix({components:{Uploader:se}}),K["a"].component(ye),K["a"].component(Le),K["a"].component(He),K["a"].component(We),K["a"].component(ze),K["a"].component(Ye),K["a"].component(nt),K["a"].component(ut),K["a"].component(ht),K["a"].use(he),a["default"].use(V.a),a["default"].use(K["a"],{assets:{css:"css/vuse.css"},themes:[{name:"Theme 1",sections:[ye,He,ze,nt,ht]},{name:"Theme 2",sections:[Le,We,nt,ut,ht]}]}),a["default"].config.productionTip=!1,new a["default"]({router:z,render:function(e){return e(N)}}).$mount("#app")},"64a9":function(e,t,s){},"757a":function(e,t,s){},9127:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},db2a:function(e,t,s){"use strict";var a=s("9127"),n=s.n(a);n.a}});
//# sourceMappingURL=app.aaeac81d.js.map