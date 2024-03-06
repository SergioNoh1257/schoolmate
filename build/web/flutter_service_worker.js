'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c38367a5a0e0723d0786afa2bf1b8a28",
"assets/AssetManifest.bin.json": "bbafa6c282a9570525ba449baa96c1e9",
"assets/AssetManifest.json": "0a1ad3ac2b47c844d547099d8d1445ef",
"assets/assets/fonts/JosefinSans-VariableFont_wght.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"assets/assets/fonts/Orbitron-VariableFont_wght.ttf": "83b8326522939aff37ae053681ca1e31",
"assets/assets/fonts/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/assets/fonts/ShadowsIntoLight-Regular.ttf": "e8f47a72dddf523096a21b4a93f56f89",
"assets/assets/fonts/SingleDay-Regular.ttf": "c001b522a4772b225d26d0cb039a064a",
"assets/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf": "f8409c4c5e0b5ab0abc7783a1ce58fda",
"assets/assets/loading_dark.png": "af005c87c41e25960a7f8bc2eb1e72a0",
"assets/assets/loading_light.png": "cee370f5d417063e2ebe588a45439416",
"assets/assets/login_dark.png": "46ae5bfa5dded88619b2832a5103b43e",
"assets/assets/login_light.png": "a33b86e299abfecf6110a148d28327c0",
"assets/assets/schoolmate_eagle.png": "4e2e7c3bc7ac3c0a2db15e464b61a009",
"assets/assets/schoolmate_eagle_splash_screen.png": "6ca0dc5fec422ee08287101a26092cb3",
"assets/assets/sounds/done.mp3": "7cb704da680faea624f901f27ac5137f",
"assets/assets/sounds/error.mp3": "5d1a82c02feb4da50310329aeba6dbd2",
"assets/assets/sounds/notify.mp3": "2a6f756b36fb4b22eaa75efc714ee651",
"assets/FontManifest.json": "9a4a6a6b86ff45afd16c72fa114d38bd",
"assets/fonts/MaterialIcons-Regular.otf": "97fe3847891b1e64957243b648301920",
"assets/NOTICES": "2afb8f417d11ee3cf5213a31e31af958",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "87f5de3414e41914cd536d0647d70ce2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-512.png": "93fd053bd9b669c7898f9706030b9322",
"icons/Icon-maskable-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-maskable-512.png": "93fd053bd9b669c7898f9706030b9322",
"index.html": "08589148931cf432edbb93f8ee40c76d",
"/": "08589148931cf432edbb93f8ee40c76d",
"main.dart.js": "56e5f8af50ac07c40a3eed97ca37b6a9",
"manifest.json": "f4d2d78a69782464a34a407e55d3216d",
"splash/img/branding-1x.png": "e200c45b6c5a9ba922ac60e0f4478954",
"splash/img/branding-2x.png": "c4cf7ceecfc3894d5d45dbe62f93a3fc",
"splash/img/branding-3x.png": "b2ac837f01c50a7412d06b9ba59707a3",
"splash/img/branding-4x.png": "084391af3c816afabb8738057da861e3",
"splash/img/branding-dark-1x.png": "c419b55651edfd688c33c70bd19711fe",
"splash/img/branding-dark-2x.png": "655e5f71c32d42d307971c302b90dced",
"splash/img/branding-dark-3x.png": "0b959d3a577a8665dd6df274dcca0bcb",
"splash/img/branding-dark-4x.png": "6e7fc0448c824fde49cbccc5e8d2bd13",
"splash/img/dark-1x.png": "13ac85191a3e256d7f4d3f3172d07256",
"splash/img/dark-2x.png": "8a97de8be4706eeb3419208994fc8374",
"splash/img/dark-3x.png": "a504e7043d182efbf0969bd8573b4739",
"splash/img/dark-4x.png": "161f7c3966c9886994fdb3f00fbc0e07",
"splash/img/light-1x.png": "13ac85191a3e256d7f4d3f3172d07256",
"splash/img/light-2x.png": "8a97de8be4706eeb3419208994fc8374",
"splash/img/light-3x.png": "a504e7043d182efbf0969bd8573b4739",
"splash/img/light-4x.png": "161f7c3966c9886994fdb3f00fbc0e07",
"version.json": "ac8a71f5f76608c50733382e7487b068"};
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
