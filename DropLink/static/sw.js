self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('droplink').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/static/manifest.json',
        '/static/icon-192.png',
        '/static/icon-512.png',
        '/static/apple-touch-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});