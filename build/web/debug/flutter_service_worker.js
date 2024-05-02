'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-maskable-512.png": "93fd053bd9b669c7898f9706030b9322",
"icons/Icon-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-512.png": "93fd053bd9b669c7898f9706030b9322",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "87f5de3414e41914cd536d0647d70ce2",
"manifest.json": "f4d2d78a69782464a34a407e55d3216d",
"assets/assets/schoolmate_eagle.png": "4e2e7c3bc7ac3c0a2db15e464b61a009",
"assets/assets/schoolmate_eagle_splash_screen.ico": "5f64fff308ac6d21c2ec2dcfe0d80e1f",
"assets/assets/login_dark.png": "46ae5bfa5dded88619b2832a5103b43e",
"assets/assets/loading_light.png": "cee370f5d417063e2ebe588a45439416",
"assets/assets/sounds/done.mp3": "7cb704da680faea624f901f27ac5137f",
"assets/assets/sounds/notify.mp3": "2a6f756b36fb4b22eaa75efc714ee651",
"assets/assets/sounds/error.mp3": "5d1a82c02feb4da50310329aeba6dbd2",
"assets/assets/schoolmate_eagle_splash_screen.png": "6ca0dc5fec422ee08287101a26092cb3",
"assets/assets/loading_dark.png": "af005c87c41e25960a7f8bc2eb1e72a0",
"assets/assets/login_light.png": "a33b86e299abfecf6110a148d28327c0",
"assets/assets/fonts/JosefinSans_normal.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"assets/assets/fonts/SpaceGrotesk_normal.ttf": "f8409c4c5e0b5ab0abc7783a1ce58fda",
"assets/assets/fonts/Montserrat_normal.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/fonts/Nunito_normal.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/fonts/JosefinSans_italic.ttf": "b0dc350427faa64a69c5958bff759a3b",
"assets/assets/fonts/SometypeMono_normal.ttf": "223345b282d1d6de69b51eb79ea82892",
"assets/assets/fonts/Montserrat_italic.ttf": "87a9f36eac8c031aff3af3957a14e81e",
"assets/assets/fonts/Honk_normal.ttf": "c675433ac017fa2313e792101f293234",
"assets/assets/fonts/Nunito_italic.ttf": "14e83abff83f855acdf3bfd30da3ad79",
"assets/assets/fonts/SometypeMono_italic.ttf": "eeeeeaaf9fa4a03d2e768151779eb5f0",
"assets/assets/fonts/Comfortaa_normal.ttf": "b14da82fd326fb23ada0b4df443cda25",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "17d1345734804f9a51df8423f3ca1c9f",
"assets/AssetManifest.json": "a3719dd973307d303c29576a5d07bf4d",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/AssetManifest.bin": "e72d087948c7cf6eb1dd7906c3f38fff",
"assets/FontManifest.json": "49575707966f9d3cf6dd3e9c31999238",
"assets/NOTICES": "c39d1129f5e92c41bc084af81ef97182",
"assets/fonts/MaterialIcons-Regular.otf": "ba51636c01365e1a82d6b986d39faa1e",
"main.dart.js": "fa9e9aa2026d76e52bca04623ed560e3",
"index.html": "3d85952d1f34c25faad130d6f9e8ef2b",
"/": "3d85952d1f34c25faad130d6f9e8ef2b",
"version.json": "096de13eb24e2f549775fb74121c3081",
"splash/img/light-3x.png": "d901857470907c20367b59e763ee5cb4",
"splash/img/light-2x.png": "791299894b0b79ea1ef2cd8e55f26206",
"splash/img/branding-4x.png": "084391af3c816afabb8738057da861e3",
"splash/img/branding-dark-4x.png": "6e7fc0448c824fde49cbccc5e8d2bd13",
"splash/img/branding-dark-2x.png": "655e5f71c32d42d307971c302b90dced",
"splash/img/dark-2x.png": "791299894b0b79ea1ef2cd8e55f26206",
"splash/img/branding-1x.png": "e200c45b6c5a9ba922ac60e0f4478954",
"splash/img/light-1x.png": "f02a507325922852f02e0fa3f63a0fab",
"splash/img/branding-2x.png": "c4cf7ceecfc3894d5d45dbe62f93a3fc",
"splash/img/dark-3x.png": "d901857470907c20367b59e763ee5cb4",
"splash/img/branding-dark-1x.png": "c419b55651edfd688c33c70bd19711fe",
"splash/img/branding-dark-3x.png": "0b959d3a577a8665dd6df274dcca0bcb",
"splash/img/dark-4x.png": "79b5af9fae39cd241ba7036f60aec260",
"splash/img/light-4x.png": "79b5af9fae39cd241ba7036f60aec260",
"splash/img/dark-1x.png": "f02a507325922852f02e0fa3f63a0fab",
"splash/img/branding-3x.png": "b2ac837f01c50a7412d06b9ba59707a3",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
