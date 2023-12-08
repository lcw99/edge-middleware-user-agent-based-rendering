'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/newparty.jpg": "a5cbccd7f0b5b45fbdb0baea4c85ae7b",
"icons/apple-touch-icon.png": "1108a8e941714643ffe61988efea8deb",
"icons/wave.jpg": "5413c7123513f68e0401eca88fd2bfd9",
"icons/android-chrome-192x192.png": "885e866b85cc02aaa6870bb0c3109e81",
"icons/android-chrome-512x512.png": "a2252babd2b5f5907ea0730a8e6db553",
"index.html": "bd522600aca8c4c5f652b9ec0c57f5d0",
"/": "bd522600aca8c4c5f652b9ec0c57f5d0",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"favicon-32x32.png": "bd478b70e311adfe8ad68acda7361f3e",
"favicon-16x16.png": "ee3154b5f5976e76ede5a07b627aed9e",
"splash/img/light-2x.png": "620c059eefee316e9a3893dbd83056c7",
"splash/img/dark-3x.png": "e452316ac056a51b2d4acbd7716a63a0",
"splash/img/light-1x.png": "c6e866021e50b0f920eacb2e273b30bb",
"splash/img/dark-4x.png": "1cf8f1f1af0b6d0d83cbfc348f5bce92",
"splash/img/dark-2x.png": "620c059eefee316e9a3893dbd83056c7",
"splash/img/dark-1x.png": "c6e866021e50b0f920eacb2e273b30bb",
"splash/img/light-3x.png": "e452316ac056a51b2d4acbd7716a63a0",
"splash/img/light-4x.png": "1cf8f1f1af0b6d0d83cbfc348f5bce92",
"assets/FontManifest.json": "4b4594d9f96b5f5614b07f5c937f5d0c",
"assets/AssetManifest.json": "b539e0d0b61c47bd95dc9d84d2214dcb",
"assets/assets/images/newparty_logo_hor_black.png": "bdc140293b8e2f9d6bf61dd355aac643",
"assets/assets/images/ocean.jpg": "cac51160b4d7031680d86a3b26f97c30",
"assets/assets/images/newparty_bar_top.png": "12c7b7cc691d4a055cbe638365e30cc3",
"assets/assets/images/61425-light-learning.json": "839a1c3d2eba6b2199db03a865e001ec",
"assets/assets/images/newparty_bar_bottom.png": "2a6ac0662c8c26a27dd41d37bc6fc3fd",
"assets/assets/images/loading.json": "a51c8958c495c90a7780c1c6818a7487",
"assets/assets/images/newparty_bar_left.png": "074b81c2852e842b6f5c24cad444c858",
"assets/assets/images/newparty_logo_hor_black_small.png": "e9f0426477ba8811255cfe4f41bbc0b3",
"assets/assets/images/newparty_logo_hor_white_small.png": "afe231fe8d8c435ec6d0d9f69b0eb22c",
"assets/assets/images/newparty_bar_right.png": "d51b2b47ee79866a5c32ba4311d66071",
"assets/assets/images/forest.jpg": "6ad4765b1e549ead8a006833d486fa0e",
"assets/assets/images/logo_white_hor_120h.png": "734fc2edb9cfba1f4abae374db1469ac",
"assets/assets/telegram_logo.png": "08412639439510ebb7b148b44ce6778b",
"assets/assets/Facebook_logo.png": "1f49127b940e30b312b8d0aac10eddc1",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "d0e3c0b3125ad592e5f7980109d4adca",
"assets/fonts/%25EA%25B0%2595%25EC%259B%2590%25EA%25B5%2590%25EC%259C%25A1%25ED%258A%25BC%25ED%258A%25BC.ttf": "5be660f60e80fb69de99571684ff2ab7",
"assets/fonts/%25EB%25AC%25B8%25ED%2599%2594%25EC%259E%25AC%25EB%258F%258C%25EB%25B4%2584%25EC%25B2%25B4_Regular.ttf": "c13cfac3eae1c246b9179c6edc0d0687",
"assets/fonts/MaterialIcons-Regular.otf": "ba2d8fcc882775be8066649e1ba5cbaa",
"assets/AssetManifest.bin": "cb867243ccb4470f4b14b22a956c740e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/AssetManifest.bin.json": "be47c974a3af230f25ab888e99ed70c8",
"version.json": "e1a66099c0261a8b7df1636aab54cf68",
"main.dart.js": "8778a6f32ebb75d8bedbab3e78752d47",
"manifest.json.old": "103cc420078e5e9ef3137270ac8ca838",
"favicon.ico": "0e94f28ad91b5f8be22740cc009766ae",
"manifest.json": "68b21618041a8339d457e9554b938472",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4"};
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
