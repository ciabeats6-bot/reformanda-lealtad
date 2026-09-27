// Service worker mínimo: permite instalar la app. No guarda nada en caché
// para que la caja siempre use la versión más reciente y datos en vivo.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
