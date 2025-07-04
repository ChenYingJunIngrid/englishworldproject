'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "95a9caf19b932dfdd457b58c8485d52b",
"assets/AssetManifest.bin.json": "e2bca486cc0cb2aaad16de46a48ec72e",
"assets/AssetManifest.json": "9301d29c9c049ee4ab51bdb34f1ccecc",
"assets/assets/abandon.jpg": "11fa589e2ba8344300b9afd8b2066653",
"assets/assets/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/assets/ability.jpg": "f1fd8c1afb2123dda05765f4a23c99a5",
"assets/assets/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/assets/able.jpg": "a8a8c533ea1ffed1370726141b823339",
"assets/assets/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/assets/aboard.jpg": "80246750094a96c7efe19f8a35e06d13",
"assets/assets/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/assets/abounding.jpg": "01be9b6178fc5875a7f6547edbc8a6d2",
"assets/assets/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/assets/about.jpg": "4f0176d59ff64069abb97e6a0a85f090",
"assets/assets/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/assets/above.jpg": "5a3b0540dcab2f92f4cf01db478944b9",
"assets/assets/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/assets/abroad.jpg": "6323441e3e1fd5431ec290376ee30242",
"assets/assets/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/assets/absent.jpg": "0e3eba46f861c2bb92ed13f46d95e119",
"assets/assets/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/assets/absorb.jpg": "15a5909ef0f600d486cc72864e4a6922",
"assets/assets/absorb.mp3": "141e52f04e2ad5a7775d6c62a51297d9",
"assets/assets/accent.jpg": "72295e3b5aa78607fa004d0ea02668e6",
"assets/assets/accent.mp3": "e211da5b251d169322b8bb0155eeb955",
"assets/assets/accept.jpg": "49307bfe3dfb19a8b18c34d2a9c2c0fa",
"assets/assets/accept.mp3": "8a91d80dae16febbd71c9bcac08ad347",
"assets/assets/acceptant.jpg": "8f1823a97547e246c2150ed644eda9d1",
"assets/assets/acceptant.mp3": "2c4996b8cfa40d29f9bda1c373726640",
"assets/assets/accident.jpg": "e4c397481cfd0f8b39c706a8c11ae760",
"assets/assets/accident.mp3": "77ac6f708fca57cc02baf305775e0724",
"assets/assets/accord.png": "8ae02160787551b7da3f14a7cc8c54b1",
"assets/assets/account.mp3": "ef891ecdb3217423bc409556b3ccd176",
"assets/assets/account.png": "55b4e78c7745ddd5e75dfdf99c4ae6c5",
"assets/assets/accountant.mp3": "e633389082f22d9867ba3e73960c26a9",
"assets/assets/accountant.png": "58f6134c34bb13bf61aff112b5cf8145",
"assets/assets/accurate.png": "00e69336b8a5d1d41ce79cb05d332256",
"assets/assets/accuse.jpg": "e5134cbfaeaa23278ec8fb51f143991c",
"assets/assets/ache.jpg": "c78d22e1592923aab045371c6355e855",
"assets/assets/book.png": "e24e3d5ecb18c0baafc72bb27595334e",
"assets/assets/EduVICWANTHandPre-VariableFont_wght.ttf": "db3f06905c07b7393ad99741e745cc57",
"assets/assets/nextpage.png": "14ce69fb3193187d058f6c049691fac2",
"assets/assets/person%2520holding%2520a%2520book.png": "f6e04680bbd0a107baf82121bb106b8d",
"assets/assets/person%2520holding%2520an%2520orange%2520book.png": "fe60d378ea549be3202c400b9eee87f8",
"assets/assets/personalresult.png": "da3afe10cde5924c8e155394458b5998",
"assets/FontManifest.json": "cf9a1b412f943964f8f7c1405d88e162",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6c2c2ac750d8de9567d8c7e35f8cc4ad",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9094ee2ff0649e87f59034db3e95611e",
"/": "9094ee2ff0649e87f59034db3e95611e",
"main.dart.js": "7e0eb40250177536d5e3e10564acf30a",
"manifest.json": "7151da03a8879dc52fb66cd7af67c30e",
"version.json": "1deeda96d956ccc344c73361ed58105d"};
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
