const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/pages/latitude.html',
  '/pages/xls.html',
  '/pages/phenom.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets)
    })
  )
});

self.addEventListener('activate', function(event) {
  // console.log('Service worker activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
    return cacheRes || fetch(event.request);
    })
  )
});