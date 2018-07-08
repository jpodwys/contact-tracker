let version;
let CACHE = 'contact-tracker';
 
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function (cache) {
    cache.addAll(['/'/*, '/manifest.json', '/favicon.ico', '/icon-192x192.png'*/]);
  }));
});
 
self.addEventListener('fetch', function(e) {
  e.respondWith(fromCache(e.request));
  if(~url.indexOf('manifest') || ~url.indexOf('icon')) return;
  e.waitUntil(update(e.request));
});
 
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request);
  });
}
 
function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      if(response.status >= 300) return;
      return cache.put(request, response.clone()).then(function () {
        return response;
      });
    });
  });
}
