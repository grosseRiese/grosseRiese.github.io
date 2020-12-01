const staticCacheName = "Instablam-site-static-v2.2.4";

const assetsArr = [
  '/index.html',
  '/assets/icons/logoInstaBlam192.png',
  '/assets/icons/logoInstaBlam512.png',
  '/assets/main.css',
  '/assets/icons/favicon.ico',
  '/manifest.json',
];
  //install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assetsArr);
    })
  );
  
});

//active event
self.addEventListener('activate', evt => {
    evt.waitUntil(
      caches.keys().then(keys =>{
        console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
          )
      })
    );
});

//fetch event
self.addEventListener('fetch', evt => {

  if( navigator.onLine ) {
    console.log('Fetch: online');
    evt.respondWith( fetch(evt.request).then(response => {
        let clone = response.clone();
        caches.open(staticCacheName).then(cache => {
            cache.put(evt.request, clone);
        })
        return response;
    }) )
  }
  else {
    console.log('Fetch: offline, request url is:', evt.request.url);
    evt.respondWith( caches.match(evt.request).then(maybeResponse => {
        if( maybeResponse !== undefined ) {
            console.log('Fetch: maybeResponse=', maybeResponse);
            return maybeResponse;
        } else {
            console.log('Fetch: returns new response');
            return new Response('<h1> No internet </h1>')
        }
    }))
  }

});