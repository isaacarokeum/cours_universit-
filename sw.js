// Mes Cours — fonctionne hors ligne.
// À l'installation : toute l'app (pages, données, KaTeX, police) est mise en cache.
// Ensuite : réseau d'abord pour avoir les derniers cours, cache si pas de connexion.
const CACHE = 'mes-cours-v8';
const LOCAL = [
  './', 'index.html', 'matiere.html', 'cours.html', 'section.html', 'edt.html', 'devoirs.html',
  'notes.html', 'formules.html', 'vocab.html', 'app.js', 'style.css', 'manifest.json',
  'icon-192.png', 'icon-512.png',
  'data/base.js', 'data/math-a.js', 'data/mechanical-science.js', 'data/engineering-principles.js',
  'data/routes-to-success.js', 'data/coursework.js', 'data/english.js'
];
const KATEX = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/';
const REMOTE = [
  KATEX + 'katex.min.css', KATEX + 'katex.min.js', KATEX + 'contrib/auto-render.min.js',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'
];
// Polices KaTeX les plus utilisées (chargées par katex.min.css)
['KaTeX_Main-Regular', 'KaTeX_Main-Bold', 'KaTeX_Main-Italic', 'KaTeX_Math-Italic', 'KaTeX_Size1-Regular',
 'KaTeX_Size2-Regular', 'KaTeX_Size3-Regular', 'KaTeX_Size4-Regular', 'KaTeX_AMS-Regular']
  .forEach((f) => REMOTE.push(KATEX + 'fonts/' + f + '.woff2'));

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    await c.addAll(LOCAL);
    await Promise.all(REMOTE.map((u) => c.add(u).catch(() => {}))); // un échec ne bloque pas l'installation
  }));
});

self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));

const isStatic = (url) => /cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(url.host);

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    // Réseau d'abord, sinon cache (en ignorant ?m=..&w=.. pour les pages)
    e.respondWith(
      fetch(e.request).then((r) => {
        const copy = r.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request).then((r) => r || caches.match(e.request, { ignoreSearch: true })))
    );
  } else if (isStatic(url)) {
    // KaTeX et polices : cache d'abord (ils ne changent jamais)
    e.respondWith(
      caches.match(e.request).then((r) => r || fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      }))
    );
  }
});
