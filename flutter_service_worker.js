'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4785437fdec94653be588ce75de5fb05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5bcbe85a78bf5f7be211e91dd00dec49",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8c785c335d2d450289e050185963a826",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c50d4dc4fbb32692fd97783aba7d35c",
".git/logs/refs/heads/main": "983aa4dab80196cdfb47f7243db92a9f",
".git/logs/refs/remotes/origin/HEAD": "fa285c5f4c8e845d379885c9d471d5f0",
".git/logs/refs/remotes/origin/main": "205b08cd6ab9b1bd24cd1fcce26450ef",
".git/objects/0b/4b5fe555444fc7a69024bc156e26f9f8db6b64": "492d4906401cb1b3f65275edcab27be4",
".git/objects/10/1d9e77c22b894014e63a5454665c27bf5b0324": "e8db3ed116d72c0e3230e4e2c25648a9",
".git/objects/11/92632ce916a0afe816e869e7ae3de50e2077d1": "3b52bf0d985e5fddb5cbb883713bb84f",
".git/objects/12/2ee23e7df1cf6c9d5603ecf2fd581a04dfe624": "713c9dbb6c8ca1981b497a677cec5b47",
".git/objects/14/e20738efa63e72376296b06fed7499d8376fd6": "8dc51d318dc38862db6d2e8782ab88d9",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/23/69c09ba179fd2ddc0d79853530873dcd1b7f10": "4655d4c2cdd4efb7f04d7a47ed176c95",
".git/objects/32/2135e28daa006600d92cabe6a22cb7f03d839c": "1e7124f1de90bfa041976c55a2f64d0f",
".git/objects/32/e72f55247ae4661bab67dabfd19b9947e617e2": "b7959d6f75adcab65f0aa3b7df14e7f0",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c51c0ddab419adf13f42729746221e3fb7d399": "8bce58aba9a3a43e289965ad551c6c9d",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/55/1a6e4c6fc1d986a93642b87bce03842c1c549c": "f875aac6960a7521cec659d80664c2fd",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/e4ea41a23fdca6fdb66aee0b1b8b7558d334c2": "eef9d9828d913ae7addd4dbc59940e43",
".git/objects/5b/f1c7547078f70ebd586c867b5bc34492fcc409": "83e5e331e4fe89443662b03a93871137",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/8da977c8cab6df107705b2d71a147b0ee74ad9": "e525313265c7d121310b31825d49e8e5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/5aa9117be30742b2452f1650e2d083b31aecf0": "339f7bf8f9f678335ed56802dc68ccf2",
".git/objects/7f/99762b8e5533522aef511925da3d857474baa8": "3f9b96fdd60737a07cb73396dce87ae1",
".git/objects/7f/f113faea8108eec62781d28aa049de75da4eac": "506dcb69f932b90af55a65b6319175c5",
".git/objects/80/f2efa34f960a5ef48fd483b99a6bf0edf99d7b": "7cfbf841a16d4b76e95f7d8939343c0b",
".git/objects/88/0eb455ae01f4ad7c7b63bfa515df23680986eb": "957f39b1e132d92bccd8a7d26d50f1fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/2bbd1e95b01d72d736586ae8aa01e736fceac2": "0e9f855b24ad321e3e45df2ad1fcd179",
".git/objects/98/a52ff8aea3a5f2e7e5e1a0a93750c5334974cd": "39a69fe50dc77df75972c4fd0c2d9a6a",
".git/objects/9b/ea079a9199aea650a44a9c28770b6d393c4c6d": "24354f18df941e38aa996a983185cb97",
".git/objects/9c/2a4253857f2228e94bf14c1362717776f1436a": "835fe0f9864be30e9485b7ecb1a85a1c",
".git/objects/9d/9f910c2e13d01453bd51f23b35aba09e746777": "a232a36f12fb0d8387b1a0eb170ebc02",
".git/objects/a0/0e21db1ce0cb7a03211e51275c0a5d2ccc868d": "869c29e4673639ac9c7d8a8820bd5027",
".git/objects/a2/ebe36466b6ad30c679a1c270ffccf05eb9bc43": "30b2e24a19676e132e34fc08619ca461",
".git/objects/a5/9a596fa1a435e2f56dec98ef0c4e0ded0e92cd": "753ccf5625229075e747fc2700d5f8d4",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/84bf705aa64ec290003e3a6d4be8174aa897cf": "382160820c8f27d511a5d80e1c1b34df",
".git/objects/a7/713860df3bac3c31e0894bb59d64b5a322f86d": "11bc8f6fb1a8f2a0a3a3d89eccf817e3",
".git/objects/a8/38cb412cd78075c056ae474bb778a6ed7d2f98": "bc2e70d60a79b240b43eca213c33ee37",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/3b5ba80990df0d902232d2708c6dc8898b9385": "b5166e35a48cfd53df8f19e1afb0ebc0",
".git/objects/ad/7bc49e5c2ecc79b41ac3e33e02c13d43b71c07": "44ade66420e604cf82484ae2ebf731c1",
".git/objects/ad/941472cfcb00ce8877cfbf9b27c405322e8b78": "2606fd7c2ad0364a9a197db778f8c76a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/500c26a626e863a51a05b0e031de7382764118": "5bc661f45fca717e2d2dfd25d1e980c4",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/828a5aae23ee5ecf634ccb9232f0df9a26fd19": "63bbea6fccc5239e7a8cf48ea2e33994",
".git/objects/bf/955738e487229256a64f19c27139b982f608ef": "434654ba8b7b3d8652d5d098298763e4",
".git/objects/c0/a6bc31198bf803637eae988c9a718d43d93e2e": "2fbfe88ae076314ab4fe6521ff94b058",
".git/objects/c1/1377beabd354ac539d91f0ace51e6e9e3e8e18": "2583ffa494d2fa7b8bc83ebf6faf01c0",
".git/objects/c1/9836543d47c3b9568a16e2a8de057098155660": "6a9cbe24e2f3614a15ee51d31c041904",
".git/objects/cf/54b5caad33c2161e44ab438ceb3579f5543759": "1a8ad767d0ec9801dcf1e380aadf2c79",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/158b4aa0ac6acf0b81765f77ca25bb2bb55f00": "bba5c80e4367c2671b9d994c863fddb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/7d1a8547ba8dcd12b31f589931c317500f401b": "323770752972cd139ec83dd77c8c9be3",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e1/d477eaf33df7f3bf19c90038f8f3dc320cce50": "3c60779337f61799a0be8224db4cb1ba",
".git/objects/e3/2b59ab82b2d42b5c6091143797ce8b824e42f4": "b7c1dbe10d60b66a56235c5a445a101f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/5f438ac09ebf60f69fd7485e6e594ae0879f5e": "115dea5bdf4983e1a641803f978d4a16",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "583deb37770b3d6a80c4f2b824597ff1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f27b26de96d06a989fa4d14045e7180c",
"assets/AssetManifest.bin": "3c4919bbbe8d5de48dcb33c17554734b",
"assets/AssetManifest.bin.json": "9686607c36423f8ec87116424211ea2c",
"assets/AssetManifest.json": "1f82f3b1b827c075f4bac5550cd957ec",
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
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ccd42b1e785ceae55e932c32986970d",
"assets/NOTICES": "c0a393e833ebb19830a68e23255451ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"flutter_bootstrap.js": "047765a28021191f9e688cbedfa94ed9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "fc6fa44a072036383dd1d14c59d77a3b",
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
