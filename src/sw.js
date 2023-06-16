const staticCacheName = 'site-static-v2';
const assets = [
  '/src/',
  '/src/index.html',
  '/src/pages/latitude.html',
  '/src/pages/xls.html',
  '/src/pages/phenom.html',
  '/src/js/app.js',
  '/src/js/ui.js',
  '/src/js/materialize.min.js',
  '/src/js/memoryItems/LatitudeMemoryItems.js',
  '/src/js/memoryItems/phenomMemoryItems.js',
  '/src/js/memoryItems/xlsMemoryItems.js',
  '/src/js/createDeck.js',
  '/src/js/flaschard.js',
  '/src/css/styles.css',
  '/src/css/materialize.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]
//
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets)
    })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
    return cacheRes || fetch(event.request);
    })
  )
});