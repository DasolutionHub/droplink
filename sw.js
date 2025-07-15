const CACHE = 'droplink-cache-v1';
const FILES = [
  '/',
  '/index.html',
  '/icon-180.png',
  '/icon-512.png'
];

// Install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES))
});

// Fetch
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
});