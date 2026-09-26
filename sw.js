// Service Worker for Mobile POS PWA - 100% Offline First
// All libraries are local - no internet required after first load
const CACHE_NAME = 'mob-pos-v2.0.0';

// ALL assets are local — no CDN needed
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './tailwind.js',
  './dexie.js',
  './lucide.js',
  './html2pdf.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[Service Worker] Caching all local assets for offline use');
      // Cache all files at install time
      for (const url of ASSETS_TO_CACHE) {
        try {
          await cache.add(url);
          console.log('[SW] Cached:', url);
        } catch (e) {
          console.warn('[SW] Could not cache:', url, e.message);
        }
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Cache-first strategy: serve from cache, fall back to network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache (works offline)
      }
      // Not in cache - try network, then cache for future
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          try {
            cache.put(event.request, responseToCache);
          } catch (err) {
            // Ignore opaque cache failures
          }
        });
        return networkResponse;
      }).catch(() => {
        // Fully offline fallback
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
