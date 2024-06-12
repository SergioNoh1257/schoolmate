'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "89f4a977c76628e34ea819c08ef39b11",
"assets/AssetManifest.bin.json": "b67d4c608544ff522adae57a7e720580",
"assets/AssetManifest.json": "f40bfa090d0b4529ed34e45ef8bf7680",
"assets/assets/fonts/Comfortaa_normal.ttf": "b14da82fd326fb23ada0b4df443cda25",
"assets/assets/fonts/Honk_normal.ttf": "c675433ac017fa2313e792101f293234",
"assets/assets/fonts/JosefinSans_italic.ttf": "b0dc350427faa64a69c5958bff759a3b",
"assets/assets/fonts/JosefinSans_normal.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"assets/assets/fonts/Montserrat_italic.ttf": "87a9f36eac8c031aff3af3957a14e81e",
"assets/assets/fonts/Montserrat_normal.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/fonts/Nunito_italic.ttf": "14e83abff83f855acdf3bfd30da3ad79",
"assets/assets/fonts/Nunito_normal.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/fonts/RedditSans_italic.ttf": "cae2a96de8351ca544edb4c8e698df95",
"assets/assets/fonts/RedditSans_normal.ttf": "24a8ec580243a893c350acdcda341cb0",
"assets/assets/fonts/SometypeMono_italic.ttf": "eeeeeaaf9fa4a03d2e768151779eb5f0",
"assets/assets/fonts/SometypeMono_normal.ttf": "223345b282d1d6de69b51eb79ea82892",
"assets/assets/fonts/SpaceGrotesk_normal.ttf": "f8409c4c5e0b5ab0abc7783a1ce58fda",
"assets/assets/fonts/Syne_normal.ttf": "b40791bf642807959b25240291cf0a8d",
"assets/assets/fonts/Teachers_italic.ttf": "6fe37f3e2a5827c83c96409ba8b16e21",
"assets/assets/fonts/Teachers_normal.ttf": "801b79c4213659ff2bc14a4aacffe166",
"assets/assets/loading_dark.png": "af005c87c41e25960a7f8bc2eb1e72a0",
"assets/assets/loading_light.png": "cee370f5d417063e2ebe588a45439416",
"assets/assets/login_dark.png": "46ae5bfa5dded88619b2832a5103b43e",
"assets/assets/login_light.png": "a33b86e299abfecf6110a148d28327c0",
"assets/assets/schoolmate_eagle.png": "4368fb6b11b2864918febae788746427",
"assets/assets/schoolmate_eagle_splash_screen.ico": "66d9fc557217daaeda019da51cb8dae0",
"assets/assets/schoolmate_eagle_splash_screen.png": "6f8d2c8ec84d6d78b52b984d821a0dcf",
"assets/assets/schoolmate_eagle_splash_screen.svg": "65fe1a085bde1177a8afe96400bf1d9a",
"assets/assets/sounds/done.mp3": "7cb704da680faea624f901f27ac5137f",
"assets/assets/sounds/error.mp3": "5d1a82c02feb4da50310329aeba6dbd2",
"assets/assets/sounds/notify.mp3": "2a6f756b36fb4b22eaa75efc714ee651",
"assets/FontManifest.json": "ecd965b5efce61e54b186c323c6cb8bb",
"assets/fonts/MaterialIcons-Regular.otf": "401317ba89fef07e77bde5488a75f76e",
"assets/NOTICES": "209c6e2b69a2abfbfdda9ecf2db5b383",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7ab2bdd891428011ac201d108c1250ea",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8a33725074bb1c19a49746f0657dc696",
"icons/Icon-192.png": "287e530700a7e64418f22de06b6cfa38",
"icons/Icon-512.png": "868778d4edc807183f3ffb4048c46b1d",
"icons/Icon-maskable-192.png": "287e530700a7e64418f22de06b6cfa38",
"icons/Icon-maskable-512.png": "868778d4edc807183f3ffb4048c46b1d",
"index.html": "25f2c15559df57f2696fd60477d5a186",
"/": "25f2c15559df57f2696fd60477d5a186",
"main.dart.js": "60a1eb8bb774ea9b27660926126dab91",
"manifest.json": "f4d2d78a69782464a34a407e55d3216d",
"splash/img/branding-1x.png": "e200c45b6c5a9ba922ac60e0f4478954",
"splash/img/branding-2x.png": "c4cf7ceecfc3894d5d45dbe62f93a3fc",
"splash/img/branding-3x.png": "b2ac837f01c50a7412d06b9ba59707a3",
"splash/img/branding-4x.png": "084391af3c816afabb8738057da861e3",
"splash/img/branding-dark-1x.png": "c419b55651edfd688c33c70bd19711fe",
"splash/img/branding-dark-2x.png": "655e5f71c32d42d307971c302b90dced",
"splash/img/branding-dark-3x.png": "0b959d3a577a8665dd6df274dcca0bcb",
"splash/img/branding-dark-4x.png": "6e7fc0448c824fde49cbccc5e8d2bd13",
"splash/img/dark-1x.png": "4b09b4b3d73390721c4f69ab15e24640",
"splash/img/dark-2x.png": "d28325a13e67d9d57fb73690690530ef",
"splash/img/dark-3x.png": "be426f76864d46f2636be31179a271b2",
"splash/img/dark-4x.png": "17b6abc754448f72eadf8cb3aa3b212a",
"splash/img/light-1x.png": "4b09b4b3d73390721c4f69ab15e24640",
"splash/img/light-2x.png": "d28325a13e67d9d57fb73690690530ef",
"splash/img/light-3x.png": "be426f76864d46f2636be31179a271b2",
"splash/img/light-4x.png": "17b6abc754448f72eadf8cb3aa3b212a",
"version.json": "1f75e3faf15af562e0e95a4dff8ea834"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
