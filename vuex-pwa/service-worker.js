importScripts("/precache-manifest.cc698b113ac869b68ac8816800bf694e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


/*
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


importScripts(
  "/precache-manifest.e53fb0f57d06b2f70a8933601e86e446.js"
);

workbox.core.setCacheNameDetails({prefix: "media-device-pwa"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});*/
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName:"googleapis",
    plugins:[
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ],
    method:"GET",
    cacheableResponse:{statuses:[0, 200]}
  })
);

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true,
});
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

