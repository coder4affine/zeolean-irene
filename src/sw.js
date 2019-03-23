console.log('workbox is working');

//https://developers.google.com/web/tools/workbox/modules/workbox-strategies

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://localhost:3004/*'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://localhost:5000/*'),
  new workbox.strategies.NetworkFirst(),
);

self.addEventListener('fetch', event => {
  if (
    event.request.method === 'POST' ||
    event.request.method === 'PUT' ||
    event.request.method === 'DELETE'
  ) {
    event.respondWith(
      fetch(event.request).catch(
        () => 
          new Response(
            JSON.stringify({
              error: 'This actions disabled while app is offline',
            }),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          ),

          return cache.put(req.clone(), response);
      ),
    );
  }
});

// self.addEventListener('sync', function (event) {
//     console.log('now online')
//     if (event.tag === 'sendFormData') { // event.tag name checked
//       // here must be the same as the one used while registering
//       // sync
//       event.waitUntil(
//         // Send our POST request to the server, now that the user is
//         // online
//         sendPostToServer()
//         )`
//     }
//   })
