const CACHE_NAME = "version-1"
const urlsToCache = ['index.html', 'offline.html']


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')
                return cache.addAll(urlsToCache);
            }
            )
    )
}
)

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Return cached response if found
                if (cachedResponse) return cachedResponse;
                // Else fetch from network
                return fetch(event.request)
                    .catch(() => {
                        // If both fail, show the offline page for navigation requests
                        if (event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html')) {
                            return caches.match('offline.html');
                        }
                    });
            })
    );
});









self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})