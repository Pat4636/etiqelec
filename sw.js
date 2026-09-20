/* Service worker minimal pour Étiqélec Smart.
   L'application fonctionne entièrement hors-ligne par elle-même (tout est déjà inline dans
   index.html) : ce fichier ne sert qu'à satisfaire les critères d'installabilité de Chrome
   (PWA / "Ajouter à l'écran d'accueil"), pas à mettre en cache quoi que ce soit de particulier. */
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){});
