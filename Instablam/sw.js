const staticCacheName = "Instablam-site-static-v2.2.4";

const assetsArr = [
  '/',
  '/Instablam/',
  '/Instablam/index.html',
  '/Instablam/js/app.js',
  '/Instablam/js/capturePhoto.js',
  '/Instablam/js/show-notification.js',
  '/Instablam/js/video.js',
  '/Instablam/js/geocode-data.js',
  '/Instablam/assets/icons/videocam-24px.svg',
  '/Instablam/assets/icons/videocam_off-24px.svg',
  '/Instablam/assets/icons/add_a_photo-24px.svg',
  '/Instablam/assets/icons/download-solid.svg',
  '/Instablam/assets/icons/logoInstaBlam192.png',
  '/Instablam/assets/icons/logoInstaBlam512.png',
  '/Instablam/assets/main.css',
  '/Instablam/assets/icons/favicon.ico',
  '/Instablam/manifest.json',
  'https://geocode.xyz/',
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