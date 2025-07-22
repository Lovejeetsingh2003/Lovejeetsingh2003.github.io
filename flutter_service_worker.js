'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ebbf9879372863d5aa43806fe07b9c30",
"assets/AssetManifest.bin.json": "2be60bc277b47072b4b46f3c86833873",
"assets/AssetManifest.json": "99762ab8d946980f423815d9605d57ce",
"assets/assets/icons/figma.png": "b8fb744105bf792b895be7712cd646f6",
"assets/assets/icons/firebase.png": "5bb2cb1d383353e6ced80930d1097615",
"assets/assets/icons/flutter.png": "0ee7b2475a1b7d3fa4a1d811b97321c2",
"assets/assets/icons/github.png": "b3de8ff2dd5eea8d318e021af4dacc1b",
"assets/assets/icons/linkedin.png": "efde16542c037d1158737faa60a37b0d",
"assets/assets/icons/mongo_db.png": "1d1fbf6d7ebac225051118d2cc3863e9",
"assets/assets/icons/my_sticker.png": "70840e094f97d0b69dc99eb5c1aca1e9",
"assets/assets/icons/postman.png": "4a77ed6be77b8b957d1a9698ad259670",
"assets/assets/icons/profile_pic.png": "021c66d7ee5a3338a0422f1873783604",
"assets/assets/icons/resume.png": "68f6a1557ace78dafd346c8270da215b",
"assets/assets/icons/vs_code.png": "65367fa35022b86ad3cbf3ba7eb1ec1a",
"assets/assets/images/cloudy_blue.svg": "74ec009ebc700965e79658cb81a46893",
"assets/assets/images/cloudy_green.svg": "46625124da07325c392edc4d37d4affe",
"assets/assets/images/cloudy_pink.svg": "de7340c9107c953b91afc4de7f6cf5fd",
"assets/assets/images/cloudy_purple.svg": "3faf58973183c348ae83dab9dee830c2",
"assets/assets/images/cloudy_red.svg": "cc5fa13220528d743f26b342fe79fd21",
"assets/assets/images/cloudy_yellow.svg": "7a43d22c05f910fcfae826778eb9cb61",
"assets/assets/projects_screenshots/plantopia_1.jpg": "2bc2666206294489ae1fd1ba6c56ec53",
"assets/assets/projects_screenshots/plantopia_10.jpg": "30e6ddab2b0bcf3eed3654140036af86",
"assets/assets/projects_screenshots/plantopia_2.jpg": "71232d0ff33e2a81321fea4fcb64c7c1",
"assets/assets/projects_screenshots/plantopia_3.jpg": "bffe01887ca30ff4bac7b528e280aed5",
"assets/assets/projects_screenshots/plantopia_4.jpg": "d70e6a9f60ae7004cfdb06be97eebac4",
"assets/assets/projects_screenshots/plantopia_5.jpg": "6860016deb24193e39b1567bf40f614e",
"assets/assets/projects_screenshots/plantopia_6.jpg": "99961143cafc5bdcfdf18ba5f6f4fc16",
"assets/assets/projects_screenshots/plantopia_7.jpg": "bb75d80a6cba54660d2411b07b208ab4",
"assets/assets/projects_screenshots/plantopia_8.jpg": "0803068d3e8c572d6fc4ac62ef847a9f",
"assets/assets/projects_screenshots/plantopia_9.jpg": "903a55508ac4f2f4bd7f1181ae6a9f1b",
"assets/assets/projects_screenshots/plantopia_cover.jpg": "657bd036ea684418a51985e798c61e4f",
"assets/assets/projects_screenshots/portfolio_1.png": "f35704db5554051fe9b953bc313dc0f9",
"assets/assets/projects_screenshots/portfolio_2.png": "08ad66cf1dd019e6f60a6e158f3677e0",
"assets/assets/projects_screenshots/portfolio_3.png": "0e46f499d8fd25ab4df6ba870a2035f4",
"assets/assets/projects_screenshots/portfolio_4.png": "fc03ac3b4ac08ad6a92e01952193a3c3",
"assets/assets/projects_screenshots/portfolio_5.png": "e6c0da2fdf2d65672c4ce8ed9ee432b2",
"assets/assets/projects_screenshots/portfolio_6.png": "44b91dc045cbdd0ddb1f1ca428041a27",
"assets/assets/projects_screenshots/portfolio_7.png": "40e1887181005375f4ff84a4f0bc1d70",
"assets/assets/projects_screenshots/portfolio_cover.png": "08ad66cf1dd019e6f60a6e158f3677e0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ccd42b1e785ceae55e932c32986970d",
"assets/NOTICES": "80a0b4f152103f0cc17ba940cb9fb75c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1638691f367322abe9f4cc272cba7ea8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "8fa6fd83578bf596ff9018082ca12848",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
