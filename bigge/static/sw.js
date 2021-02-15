const cacheName = 'bigge-v1';
const staticAssets = [
    "/",
    "/static/css/style.css",
    "/static/js/inobounce.min.js",
    "/static/js/app.js",
    "/static/data.json",
    "/static/manifest.json",
    "/static/images/types/baas.svg",
    "/static/images/types/big.svg",
    "/static/images/types/lepeltje.svg",
    "/static/images/types/medusa.svg",
    "/static/images/types/mlt.svg",
    "/static/images/types/nhie.svg",
    "/static/images/types/opdracht.svg",
    "/static/images/types/stemrecht.svg",
    "/static/images/types/vingeren.svg",
    "/static/images/linnen.svg",
    "/static/images/bg.svg"
];


self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    }
    catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}