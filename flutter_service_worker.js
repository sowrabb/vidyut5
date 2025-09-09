'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5abac791288c25d19c3249e7da251009",
"version.json": "8a535977b7be55d21f1f0aa4139d141f",
"index.html": "8c5c5ec1190a1c5675b0989b559a9b93",
"/": "8c5c5ec1190a1c5675b0989b559a9b93",
"main.dart.js": "816524ed8d2a2288269347967d9b780c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "04e76be6ad78ed6bcdbe36943964acc4",
"assets/AssetManifest.json": "81d4d108f1f6fcc714dafb8f8683247b",
"assets/NOTICES": "67baa7dbc95c3a6b80060dcacf665cdd",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/AssetManifest.bin.json": "a6ce702ecd5c69b0c57e7c2465012f89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c10e74105d12a9c26a1baedfa4521b58",
"assets/fonts/MaterialIcons-Regular.otf": "3d50f91f2b9e3aaefca6b8e9974b15df",
"assets/assets/demo-images/tools/tool02.jpeg": "6c111a67a833ef92223a4339869fae13",
"assets/assets/demo-images/tools/tool03.jpeg": "1701e487538a189cbd3aba0ae5a6656c",
"assets/assets/demo-images/tools/tool04.jpeg": "411fab45333adf7edcfffb9e52044ec0",
"assets/assets/demo-images/tools/tool08.jpeg": "2b03a221f722ecc015e667e7280cd99e",
"assets/assets/demo-images/tools/tool09.jpeg": "be397e9abbda2b09d425b54ed97bf804",
"assets/assets/demo-images/tools/tool05.jpeg": "8270158f7f3656dea4a277d96f732aa1",
"assets/assets/demo-images/tools/tool10.jpeg": "2c9673dc15d0a793f962aa25a36134da",
"assets/assets/demo-images/tools/tool06.jpeg": "1d77b81dc56349525d6975fa8c6a7446",
"assets/assets/demo-images/tools/tool07.jpeg": "1b2db7cf7055da48fff273895c0700d2",
"assets/assets/demo-images/tools/tool01.jpeg": "af08c0eaa6178423e090202909a67aab",
"assets/assets/demo-images/switches/switch02.jpeg": "131f0363089a79d488b48106ade9a1dd",
"assets/assets/demo-images/switches/switch03.jpeg": "5c1eef770f8a67b3fb86e051597d8059",
"assets/assets/demo-images/switches/switch04.jpeg": "62315e26b0af15d91d4f28ea32563e13",
"assets/assets/demo-images/switches/switch05.jpeg": "5826998e3184bd55cea382f0d8e3e7f1",
"assets/assets/demo-images/switches/switch06.jpeg": "04afc1dc8a0e38212071a52e68c0f011",
"assets/assets/demo-images/switches/switch07.jpeg": "dcc9c1b9f04c18b07cfcb3f1370c7975",
"assets/assets/demo-images/switches/switch01.jpeg": "aac955eefb806fe08fd6d696bc4a6fe9",
"assets/assets/demo-images/motors/motor07.jpeg": "7d5dae69a2204f5a2e5c7f6a3276f6bb",
"assets/assets/demo-images/motors/motor06.jpeg": "8aac2a6c410897caad304086136d017d",
"assets/assets/demo-images/motors/motor01.jpeg": "0e68cb6f33a57cf1ecde1ded9eae1cbd",
"assets/assets/demo-images/motors/motor03.jpeg": "1313906d941a11c5439ad536421b04c6",
"assets/assets/demo-images/motors/motor02.jpeg": "51e6dde257a980d59876c21100dc43a8",
"assets/assets/demo-images/motors/motor05.jpeg": "3a9b46c3f2cbb515af7b2c59eed56a96",
"assets/assets/demo-images/motors/motor08.jpeg": "fc6f66a1f46437a2f7b6071715dec019",
"assets/assets/demo-images/motors/motor04.jpeg": "11aabd4f055b9fc0f01bf57326871558",
"assets/assets/demo-images/transformer/transformer02.jpeg": "66719bb692f43a7813103688a6edc6ec",
"assets/assets/demo-images/transformer/transformer03.jpeg": "af706c2633b4bddecea6b321481c81ad",
"assets/assets/demo-images/transformer/transformer08.jpeg": "6c433c8c1cfc4729e2fa8abb89d1303e",
"assets/assets/demo-images/transformer/transformer04.jpeg": "5e329ef96abb06b854c289958883ce63",
"assets/assets/demo-images/transformer/transformer05.jpeg": "76833eeb5700d1ecd47528f8d30efc84",
"assets/assets/demo-images/transformer/transformer06.jpeg": "558488021b1e83ec8781c28297163d46",
"assets/assets/demo-images/transformer/transformer07.jpeg": "1f1e608e6d93ae60d722d4720338ca2d",
"assets/assets/demo-images/transformer/transformer01.jpeg": "f3136585ef0bf16f324d813fbcd12f08",
"assets/assets/demo-images/panels/panel05.jpeg": "eb353bb1999f5be6b2d8eb9cb1d1c267",
"assets/assets/demo-images/panels/panel04.jpeg": "536a7f2f81267d9368f5fd055577c7d2",
"assets/assets/demo-images/panels/panel03.jpeg": "f731b571fc7f030955533ad6ac3cb798",
"assets/assets/demo-images/panels/panel02.jpeg": "a5f1e66493b86db2f031dc59e7ddd964",
"assets/assets/demo-images/panels/panel01.jpeg": "801e0f8b1db3e87a743c658b20c61b7f",
"assets/assets/demo-images/panels/panel06.jpeg": "efd13dd91bd214dd3ef31a9ce6cf096b",
"assets/assets/demo-images/circuit-breakers/breaker09.jpeg": "e114e0b2a956c370a00706ad7033228e",
"assets/assets/demo-images/circuit-breakers/breaker05.jpeg": "f299d22ff08bd73f9ebccb526fc1aa63",
"assets/assets/demo-images/circuit-breakers/breaker13.jpeg": "dadc96e3fd0d13c4dbe6c0ad0c3fff31",
"assets/assets/demo-images/circuit-breakers/breaker12.jpeg": "e8c279915ff8c4eee4cec4c69ebfd066",
"assets/assets/demo-images/circuit-breakers/breaker04.jpeg": "cfff14a6a4cf3429f9bfcb51aef66223",
"assets/assets/demo-images/circuit-breakers/breaker08.jpeg": "f9a40bb24d5c0d82bcf12d834571c5ef",
"assets/assets/demo-images/circuit-breakers/breaker03.jpeg": "1f9b3b7efdf8958fc8a9e458483b1c95",
"assets/assets/demo-images/circuit-breakers/breaker14.jpeg": "05c3efda39e4b3b7893d46bc39fe32ab",
"assets/assets/demo-images/circuit-breakers/breaker02.jpeg": "40c785a2455c51ab06210a2a582af92f",
"assets/assets/demo-images/circuit-breakers/breaker01.jpeg": "9f9a86ef0656c1aeeba1e30f4b88f014",
"assets/assets/demo-images/circuit-breakers/breaker11.jpeg": "d0fccfee475c5f2155bc6e1f8275ba93",
"assets/assets/demo-images/circuit-breakers/breaker07.jpeg": "2b79c986073b9c0c210f80f3e679a468",
"assets/assets/demo-images/circuit-breakers/breaker06.jpeg": "c36064c9172004fd960d761a186e311e",
"assets/assets/demo-images/circuit-breakers/breaker10.jpeg": "89a7e3262ab8ebea4ee47266e3c9d85d",
"assets/assets/demo-images/safety/safety01.jpeg": "7e7e1cb3bf622d04642ff86f6a9ece67",
"assets/assets/demo-images/safety/safety06.jpeg": "1581f3a9ba9c4a3150147d1767475a68",
"assets/assets/demo-images/safety/safety07.jpeg": "714ea482a3a7ad5ed8139410d927594b",
"assets/assets/demo-images/safety/safety08.jpeg": "461b06fb82b5ca6dc91423adc8880285",
"assets/assets/demo-images/safety/safety04.jpeg": "1d293373192a40fc8049d82e8dbfa548",
"assets/assets/demo-images/safety/safety05.jpeg": "91eceb711d9526571907b033302aa41e",
"assets/assets/demo-images/safety/safety02.jpeg": "e0856c4362f2e08c86d977e4cce1a092",
"assets/assets/demo-images/safety/safety03.jpeg": "d808420a27c640c0b8122ae717d0a962",
"assets/assets/demo-images/wires-cables/wire05.jpeg": "46ac69884e21aaa0efe39a3aedda7e52",
"assets/assets/demo-images/wires-cables/wire09.jpeg": "2bd608ed3f1e5495206a820b9fdb955c",
"assets/assets/demo-images/wires-cables/wire08.jpeg": "10f1ab303b592b134117fdd841a49ce4",
"assets/assets/demo-images/wires-cables/wire04.jpeg": "02bd93c2b074c28f8497527c107f6581",
"assets/assets/demo-images/wires-cables/wire03.jpeg": "461aa58328e30418c3071453aa6dadbd",
"assets/assets/demo-images/wires-cables/wire02.jpeg": "c7c0179be485d73431067ca65411e8e1",
"assets/assets/demo-images/wires-cables/wire01.jpeg": "358b6ac970d5ef81f36d394eedd59d98",
"assets/assets/demo-images/wires-cables/wire07.jpeg": "38a7e2ccd84f1f4159d3dce653b35f95",
"assets/assets/demo-images/wires-cables/wire06.jpeg": "a61aef61feb7c1253fd90e9f421e79fd",
"assets/assets/demo-images/lights/light07.jpeg": "f05d2d11fd301cfa515f0e44917092c0",
"assets/assets/demo-images/lights/light11.jpeg": "1683bdd3c5a55fcd44462175cf8a90e7",
"assets/assets/demo-images/lights/light10.jpeg": "a14bfddfe3b886d671d3e046f582f114",
"assets/assets/demo-images/lights/light06.jpeg": "60bbfa4f20f3eb5c13564a88ac1b64da",
"assets/assets/demo-images/lights/light01.jpeg": "60e213048df4d4e5b1f248433c374cd4",
"assets/assets/demo-images/lights/light03.jpeg": "1e68886fcde9a4db26123d241b286fa8",
"assets/assets/demo-images/lights/light02.jpeg": "61a5766a5a68e28972952283a9acf0f8",
"assets/assets/demo-images/lights/light05.jpeg": "82017555f218d25ddfc1c0cc4de699fb",
"assets/assets/demo-images/lights/light09.jpeg": "5c785a3c5d35371e7459150140bf6f4f",
"assets/assets/demo-images/lights/light08.jpeg": "f6442858aeba126cfbbac05f9e8dd0d3",
"assets/assets/demo-images/lights/light04.jpeg": "3e8c6fca33ca91a97ea0fd6465d98a5b",
"assets/assets/demo-images/lights/light12.jpeg": "bb38c3291cbb32c2687d06d90d4817e3",
"assets/assets/demo-images/conduits/conduit03.jpeg": "b9c2717b7a414139a307ab1e9b994c3a",
"assets/assets/demo-images/conduits/conduit02.jpeg": "3c7d02cbdb31670d816426b0c1a92c2f",
"assets/assets/demo-images/conduits/conduit05.jpeg": "c20906fc8527f7dfdab3e17abb18e540",
"assets/assets/demo-images/conduits/conduit04.jpeg": "007ad5ed9739a28dfd6c0ea70096525a",
"assets/assets/demo-images/conduits/conduit08.jpeg": "b9c2717b7a414139a307ab1e9b994c3a",
"assets/assets/demo-images/conduits/conduit07.jpeg": "68e74132d265ebf8de10961ec2fb140e",
"assets/assets/demo-images/conduits/conduit06.jpeg": "edf1043f339ddf46bcfd25e3bd6e1060",
"assets/assets/demo-images/conduits/conduit01.jpeg": "192b9411d619143da643b60bd87c7280",
"assets/assets/logo.png": "5364a007fd98243bbe461d83770ee61a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
