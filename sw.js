self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("alerta-pg").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "manifest.json"
      ]);
    })
  );
});
