const V="wordhoard-v2";
const CORE=["./","index.html","pics.json","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!=="wordhoard-pics").map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request; if(req.method!=="GET") return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    // app files: network first (so updates arrive), cache as fallback (offline)
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(req,c));return r;}).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
  } else if(req.destination==="image"){
    // pictures found online: keep a copy so kept pictures work offline
    e.respondWith(caches.open("wordhoard-pics").then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{c.put(req,r.clone());return r;}))));
  }
});
