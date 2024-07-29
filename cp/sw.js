/**
 * The service worker should be located at the site root (/sw.js),
 * to ensure it can handle requests for the entire website and not
 * just a particular sub-path.
 *
 * It cannot be served from the CDN, because that's on a different origin.
 *
 * A website can only register a single service worker per scope. The
 * current service worker is named `gcm-service-worker` because it used
 * to only enable push messages. In reality, different functionalities are
 * imported below.
 *
 * When updating the service worker, you can change this or any imported
 * script without having to rename the file, as recommended by
 * https://web.dev/service-worker-lifecycle/#avoid-url-change.
 */

const CACHE = "nnsvn-offline-v6";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {
        console.error('Fetch failed; returning offline page instead.', error);
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});