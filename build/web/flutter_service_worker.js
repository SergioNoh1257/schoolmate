'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-maskable-512.png": "93fd053bd9b669c7898f9706030b9322",
"icons/Icon-192.png": "c045c1378ed4839e67341a29db41d539",
"icons/Icon-512.png": "93fd053bd9b669c7898f9706030b9322",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "87f5de3414e41914cd536d0647d70ce2",
"manifest.json": "f4d2d78a69782464a34a407e55d3216d",
"assets/assets/schoolmate_eagle.png": "4e2e7c3bc7ac3c0a2db15e464b61a009",
"assets/assets/login_dark.png": "46ae5bfa5dded88619b2832a5103b43e",
"assets/assets/loading_light.png": "cee370f5d417063e2ebe588a45439416",
"assets/assets/schoolmate_eagle_splash_screen.png": "6ca0dc5fec422ee08287101a26092cb3",
"assets/assets/loading_dark.png": "af005c87c41e25960a7f8bc2eb1e72a0",
"assets/assets/login_light.png": "a33b86e299abfecf6110a148d28327c0",
"assets/assets/fonts/JosefinSans-VariableFont_wght.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"assets/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf": "f8409c4c5e0b5ab0abc7783a1ce58fda",
"assets/assets/fonts/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/assets/fonts/ShadowsIntoLight-Regular.ttf": "e8f47a72dddf523096a21b4a93f56f89",
"assets/assets/fonts/Orbitron-VariableFont_wght.ttf": "83b8326522939aff37ae053681ca1e31",
"assets/assets/fonts/SingleDay-Regular.ttf": "c001b522a4772b225d26d0cb039a064a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin.json": "dc64865cf928e43cfeaecb300187215a",
"assets/AssetManifest.json": "1f56187533343a7272ca20effe718048",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/AssetManifest.bin": "bfa65ba06e5cb22830495d039def2c39",
"assets/FontManifest.json": "f6aaaf6876220cf1d8633cdd45e5386c",
"assets/NOTICES": "08778958746d75973d4131a40cb27c55",
"assets/fonts/MaterialIcons-Regular.otf": "2c262725c63268b7406a38f2d66f427e",
"main.dart.js": "97cdd98e95d99eda444c8647a722fff8",
"index.html": "d033b660da0075474133d92cd39c153b",
"/": "d033b660da0075474133d92cd39c153b",
"version.json": "8f3a4dc21da34d9e4bac25d7054cd2d6",
"splash/img/light-3x.png": "a504e7043d182efbf0969bd8573b4739",
"splash/img/light-2x.png": "8a97de8be4706eeb3419208994fc8374",
"splash/img/branding-4x.png": "084391af3c816afabb8738057da861e3",
"splash/img/branding-dark-4x.png": "6e7fc0448c824fde49cbccc5e8d2bd13",
"splash/img/branding-dark-2x.png": "655e5f71c32d42d307971c302b90dced",
"splash/img/dark-2x.png": "8a97de8be4706eeb3419208994fc8374",
"splash/img/branding-1x.png": "e200c45b6c5a9ba922ac60e0f4478954",
"splash/img/light-1x.png": "13ac85191a3e256d7f4d3f3172d07256",
"splash/img/branding-2x.png": "c4cf7ceecfc3894d5d45dbe62f93a3fc",
"splash/img/dark-3x.png": "a504e7043d182efbf0969bd8573b4739",
"splash/img/branding-dark-1x.png": "c419b55651edfd688c33c70bd19711fe",
"splash/img/branding-dark-3x.png": "0b959d3a577a8665dd6df274dcca0bcb",
"splash/img/dark-4x.png": "161f7c3966c9886994fdb3f00fbc0e07",
"splash/img/light-4x.png": "161f7c3966c9886994fdb3f00fbc0e07",
"splash/img/dark-1x.png": "13ac85191a3e256d7f4d3f3172d07256",
"splash/img/branding-3x.png": "b2ac837f01c50a7412d06b9ba59707a3",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
