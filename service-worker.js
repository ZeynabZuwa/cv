"use strict";var precacheConfig=[["/cv/index.html","36349855440c09dc3c7e4ac000ef4bee"],["/cv/static/css/main.fd12bcb5.css","ce3681f7b625f0184e78bab62463973d"],["/cv/static/js/0.33e443c6.chunk.js","5a583653f0200e7a7bb7c1d0042dcc85"],["/cv/static/js/main.e1e50dc1.js","134a6a883c6828d1870084f8aba74ffc"],["/cv/static/media/csharp-original.c6961b79.svg","c6961b79062b431cb39106d60635832d"],["/cv/static/media/css3-original-wordmark.2ca88453.svg","2ca884530d6e08f8540700e76c3a63cb"],["/cv/static/media/github.1f33e75d.svg","1f33e75d7b7df995b1609f8573ac8c9b"],["/cv/static/media/hamicon.86595150.svg","8659515094d85059439811bbedcbbc39"],["/cv/static/media/html5-original-wordmark.eb0bfe64.svg","eb0bfe64ddcaa0b4c3be19b19541b584"],["/cv/static/media/javascript-original.de79c8f1.svg","de79c8f14c2b0d692ae215d7e6eccd54"],["/cv/static/media/linkedin.9e36c8fd.svg","9e36c8fd15d6f93ed6a45f9484746e8f"],["/cv/static/media/microsoftsqlserver-plain-wordmark.bd2b231e.svg","bd2b231ec672d3885655322c47ecc7b3"],["/cv/static/media/react-original-wordmark.fadd9c95.svg","fadd9c9566ccc46c6b0e73caca5860de"],["/cv/static/media/zay.33a5984b.svg","33a5984bb25a1940f8e59c8dec15f845"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/cv/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});