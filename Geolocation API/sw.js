const staticCacheName = "site-static-geo-v2.4.3";

const assetsArr = [
  '/',
  '/Geolocation API/',
  '/Geolocation API/index.html',
  '/Geolocation API/js/app.js',
  '/Geolocation API/assets/icons/vue-logo-192.png',
  '/Geolocation API/assets/icons/vuejs-log-512.png',
  '/Geolocation API/assets/main.css',
  '/Geolocation API/assets/icons/favicon.ico',
  '/Geolocation API/manifest.json',
  'https://geocode.xyz/',
];
  //install event
self.addEventListener('install', evt => {
  //console.log('Service worker: install');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assetsArr);
    })
  );
  
});

//active event
self.addEventListener('activate', evt => {
    //console.log('Service worker: activated');
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
//    console.log('Service worker: fetch',evt);
  // Look for cached files and handle AJAX failures due to being offline
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
    );
});