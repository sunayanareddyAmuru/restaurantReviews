// installation
self.addEventListener("installatiion", (event) => {
	event.waitUntil(caches.open("sample").then((cache) => {
		return cache.addAll([]);
	}))
})
// fetch Event
self.addEventListener("fetch", (event) => {
	event.respondWith(caches.match(event.request).then((res) => {
		return res || fetch(event.request).then((response) => {
			caches.open("sample").then((cache) => {
				cache.put(event.request, response.clone());
				return response;
			})
		})
	}))
})
