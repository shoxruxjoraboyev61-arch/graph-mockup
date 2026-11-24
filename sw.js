const C='graph-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest'])))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.open(C).then(async c=>{try{const r=await fetch(e.request);if(r.ok&&new URL(e.request.url).origin===location.origin)c.put(e.request,r.clone());return r}catch(_){const m=await c.match(e.request);if(m)return m;throw _}}))});
