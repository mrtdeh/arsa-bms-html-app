'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/1a/e44bdeade1cde0de41a0dd2625b57110f9cb24": "89f2ebcd8c136fe47075c4cb58b00d66",
".git/objects/2b/998216ee51c8039c2e9ee221d94a6ac1418c6b": "560e5b6f55fd734dcae41c970aa5570e",
".git/objects/7d/e4df85e1f3a8bb282b2c93822fc0469d7539d7": "faa1df91dc7c7c4281ab665333708f3d",
".git/objects/68/89568c3b6ccf5f4dc7f359bc0eaf5be95f247b": "0975b141672693562e0c2f7107ba8d64",
".git/objects/47/3b257e2e6950d3a75ce00d81066a63903b476c": "ba1e3726b54c4c3430610ce1987e14b2",
".git/objects/65/0e6a545830200b8a9b7581d45e1f540c68d261": "d8619bbe2c45dc977ce0ec52c723a410",
".git/objects/14/38c429d579434e6fbf76d5cd8fcb00eff56189": "c33b1c25dc4ff96637ca468a08fef64a",
".git/objects/e4/62cd399239cdfa3424990e517fb7ca8074d4a1": "1562cc6d3f52e3ffab239d75ab741fde",
".git/objects/cd/9487d21a4468f51f4fe3a1ae848148e9c60d31": "3be447d90a71c5953c9b58c90bec58ea",
".git/objects/c3/4af266bf83817c0363fce8fbf17140f852f241": "9eefa5486428721a07f4d28d0e03051d",
".git/objects/9d/4c1b4bf3ed8e5914c2bcebdc4509a4e4823c5c": "7383fae6f861bfd9d4ab9bf71f4ef720",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/69/b6bc955219616e81429ca67e5e75b66fc9d947": "0bd7e1c8d14b66c87d5a0a0c5e3bb564",
".git/objects/d8/a7cd4fda256059ddd490b82f7eb6c8a14f7908": "0f81db42f3872147eb85e87dfb7d677b",
".git/objects/73/5ee50f4bc1136a99d411a49c592740a839f286": "fe634132ebc7c66faf1b328d97d4e726",
".git/objects/02/d986fd8f6fdc37364fbbacbb6cadd35fb27394": "c647b073f4fc6ae6a2f4308b2dc6cd0c",
".git/objects/92/97bfd5fffef3bc9b30c00dbe2991bb020ef541": "6ac960c0fffdca2b8275170d451aabc9",
".git/objects/01/5a77f6620886ec93b3b0eaa2f4c288b3720c91": "4c96807cb014dce3795593438d8328d5",
".git/objects/c2/65953f2bd6fc42c8021106b768a5801031e596": "e680759e12e8641693c047bd72b82e9b",
".git/objects/b5/c1167fad88e49f0d908cfc11a6164295058f2d": "b8397c327230a48082e5040da27ba36d",
".git/objects/fc/6ac12569f22dc666b3f7e4f35d3e23549915ef": "cb8abd4a8a023c359149b9c3bf21b73d",
".git/objects/db/de2e79c4e40be3e45a8742894b9b03cb10df22": "4f11f75dc65697b46bb0dd006dee9317",
".git/objects/7f/b115b6a1ed9953731633a06b6b8a8636fc04ff": "779b4bacb47e23e945a205ca11f309d3",
".git/objects/ce/534505b50ac63e935aa9ddd53b67a1974c8c26": "f76b918b65a50835b2eba9a8456afad5",
".git/objects/71/06d670b6f776d2ee160e906ea54f8aaa6a7054": "b40e6a8ef490172727eeddf7e4a1f0a1",
".git/objects/71/fea6d78727302f8c2243e714c15f4221b8bd17": "8557eb8ff844e2801ebdc2df5c206187",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/f8/6f1ee8810f8d3dc0d7f4f7216f42405a805823": "a3a9f90e3b972c7da5de52cf069a6a96",
".git/objects/ac/3ec87267e9d66efe9821d27a7d01a5c17b7365": "085321716ffb97ad853094e32092bc19",
".git/objects/ac/ebec9a5b5060ec2a55cc88cf5cfbcbe5fdaf92": "86c943f6087bad88e15b09c9fb66b552",
".git/objects/67/ac82bfcf6a4d5c617d92c3e5f2ea42f540728f": "9d4f5070ad45391fc0e3d3d6794a8c03",
".git/objects/0c/178d8b6530d4a2a903e749682b1ea6e4eaa612": "4ad7482691cf6aef395629317ae1db84",
".git/objects/29/6301f1c55934e431a2ffd01aac3f423a1de9b8": "b192a558495f2ae46045686abf58a426",
".git/objects/86/5ec0c2d491a68d7733eb11218bbf141a47700a": "f1260c28cac3ece07d942bdb6a8d190a",
".git/objects/30/706e5a22001d4af0d860aed04c4871f66e31f3": "ca6adb21e780b8e490466441e1e40524",
".git/objects/30/990474accd91c7189ab814e270cd5fdf2bf574": "5e87a7bc6660b7522a88c2cd392bcf49",
".git/objects/8c/1d4dda65e6a32002dacb550459f919cf3ad12a": "3e696cdfbc8b1c3b24236ed17e0a6a0f",
".git/objects/6e/5b224d7bed2137f8fa3cfcc6e28f564acdefc5": "feff9a8576af6b6353ece5ab1816d319",
".git/objects/83/b505c3a7e4229c6d726024f4b590d8fc531902": "42a4771e62a73fce92c7824db7d0f7bb",
".git/objects/83/8337dbd6d46d38dd43fdcd196acc854fa45ce2": "f6df94ca6c51e90bab508e636ac79665",
".git/objects/bd/678ef373ce975fd739e580258b42a78175146f": "a234c3053db4231e37b43d59456abbc6",
".git/objects/af/9c1466a353e46c500c269e7f378523728ae927": "da6244d71ca691465a26658f52d9f4e1",
".git/objects/0e/6dab1ee545be706918d3de95856262ea7869d6": "95d5f4ccd2b7ecabc8060ead479d3965",
".git/objects/c5/cded2dad324aa23acf775504ddeb9e0de52527": "e1d5d2f8d7de3c8b3cbb1cd48798cb83",
".git/objects/09/9c768ec21a960163d33330b70216278c16cf34": "705af340db025068cb2eb5142af5be3e",
".git/objects/51/4f1e01673514c0098b7dda971336aa5a8aeabb": "e896f695a36933b33d79ffc4d508cd05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ad/cb6fcbee8a15a72b264afdcbe8c4d685ea2e36": "a10f8400830fa860f1cc267befe70bfa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3d9797a1f6b3e86d9973c1922bc022ac0735b0": "bd7fde05fb3184344faceebf123d2912",
".git/objects/fb/16a6992a4c65c4ecbac80e992015f73d4eb0d3": "c3cbc66ca63b315103f4d02fa43b162f",
".git/objects/fb/9d689d1535269336c7c0059273f92b0e993467": "bc4fe12d6adbdde5bb05ba042677b790",
".git/objects/3e/8b90e1b414d9d4b0f8eaed4bb54ab3056c493a": "5dca5fdd039ed9f17e0dbe10ea7ec7b0",
".git/objects/c8/f363ec46f341d3f65d5999720b210b97bb3fb8": "fbb3a11f2bd88e1885355117c6ca0ec1",
".git/objects/b8/9627bb9a0ac05718540adc4eb7a96736275bfc": "d25c810c00ede639d6dc4fc86110ab62",
".git/objects/b8/911940f2b41ada4db0ef784c9822cbffbcb8fd": "2f2392f815d75f7b36c0898b6aa2ec21",
".git/objects/da/7e3de17b37a57a05d6423f98bf950460bbb4fb": "8e200e5494536c81fc9a966e8bb9731c",
".git/objects/da/8e59d46090e4fa21a090569ffd7b74351ebb42": "3183f25c26e0dc9a9338cf485d76e2ec",
".git/objects/8b/c68b5fc4a9d7f0549db9768ee3045ce9ff77da": "86e1226451a33a11df49ba8fba2e6112",
".git/objects/c4/61101740ec4a8a897dbfb6fb04ee0bfc00ae4f": "af1ba0f5b39a011b6de97882e3b0d8b5",
".git/objects/57/6ce17141e7066fe8816d904adb4cd4f7066cad": "d9ed0536244f0dfe25fcb669b7ad4593",
".git/objects/52/9957ac22f38282f071b7d8cec21ffe7777eaea": "73c29312a562186b196f20b79c6bf9ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/06/4073b53d6845c46e6013b3ab441db23425be9e": "e4933b22bad4c4b8092ab15241fab3a5",
".git/objects/54/d892203565ee325694b0f68ab0ee498ccb19fc": "f744b3804938fe332c126e37b55f8da9",
".git/objects/54/4d1f01385340d66b6f707237131749c06b48ce": "512991303185f2c41945e754ab4634ea",
".git/objects/31/62b84606b45ae1d7d7935ba1ac19e1d292b289": "41e65fdfafacdf93e138e8b76fc41513",
".git/objects/2a/10d400efbc9872a61b18c52431542e95f1939d": "1e8440e826af95a57870f089572d39b1",
".git/objects/a5/6314cd5b4e7aa256214c42311f181c33a1999e": "681cf8f5c6853a167132663abcc10893",
".git/objects/a5/7ae5e42d3c235377b1e5b02416a887e7be3943": "721cbe2ac12544be0eea771a41fa3ae8",
".git/objects/43/eb994c15730e57f26d973458ef9594e711575f": "7f8c4e105ab7d5c4edc7b73c102b79b7",
".git/objects/45/909106c4c86d11463b853869d11bb046275cc5": "6bdd5841794c3331d6818b7930397e34",
".git/objects/7c/697211a1fa11cffe4e1024db9963452b635c75": "6d47d85622c884430ffcb780cbdac11e",
".git/objects/33/a370c4ac2cbb7864ede71047b46f64fc96060c": "b93157f37d8581527ee162b4cfdcff5b",
".git/objects/33/c6b9992865da83841897b40d7e92720f6e7144": "aa35c736f914a5f29c71d957f427055d",
".git/objects/aa/0d55e96e75b99da4e490320a74a5c70f3116eb": "6bff7f443e689415b2b160614f256a87",
".git/objects/e9/2fe83283ee6e21488e4ed6ea75b84a37a572ce": "a6b82f164138191d76fd3d8f2e31c5d5",
".git/objects/e9/8c1d4bec5dfee33cebcbbef6accbf8b7a52df9": "1d55ea9791012b0f3b73c2bd8a680385",
".git/objects/e9/74980af48fbb8dfba11310318e49d797395776": "e3a89ae962c61892b06d19b1f9b3ff45",
".git/objects/4f/3cdfa2e74a0a93c2f8d34422e25dab6c11cb19": "5b039b7fba010254583fba5a8ea70cf2",
".git/objects/1b/0dbd1247d77d4d0e637d5afd8d512268be3d97": "687a5fb4f06ec413f89b373092001b5a",
".git/objects/87/8083ce2fb3cc466fadbaf627f3ba53a75fe5cb": "0ce7bf1cdf0a1f16e9c848f68596c8d9",
".git/objects/1d/a26cc3afe5e9981951958f31d2aa262e4ffd24": "7be173326485a5176f3b1c93cdb35cad",
".git/objects/e6/1116b2376f577c6088ec6b8eb26a2b4fe1aeb2": "588df825c194da6723ae56fea077e032",
".git/objects/85/ee21309587a1499767e5b5b777a4ca392d0102": "68ae98d88aedcbe2dfade03c553dc3d5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/b30c4e68f6f4d66eaf745045c98d1e13b8b3c0": "0abf2e45ac57e76c78248470df58046a",
".git/objects/0d/07499bb31a2bdd02c08cc712bbfac9fd2a96b5": "b0d42572ac3ddef324e55ba92cd09762",
".git/objects/0d/778bd07072a3b4539197d41c674b673504f384": "99001cc6d701035da59681f71d16dd01",
".git/objects/8a/fc3324015fe18ce6fa0e474661d2c9bceb0913": "1e8530bdc15552bffe7b649ea66a66b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a4/030b64c4f5385cde080cb3f4b82d11baed3881": "94125bf3fc43d0e5e9fe3f88abccee0f",
".git/objects/4d/0591a44de6eb91aebd8784b7b5f6b589f19bfc": "6a59bf25698ccd962ed04ff52adf7b8c",
".git/objects/99/6ac0d6eb7bad469a9e094125be0f14f092d7a2": "b47c3b4d85a1bd8a2c0b1ae578c92131",
".git/objects/b9/10a8b9fcf4d39fdb46279d14cde5bd5b44f39d": "26408b1c4d04db22af6d0d1a441d4d25",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9b/522013f32134d7c1e111516b2a4bb182114920": "5ae87f36552640810bd0f855ca0a85c7",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/logs/refs/remotes/origin/master": "854bfeca340b20bb3dffe752774241eb",
".git/logs/refs/heads/master": "b7410008bef071d6a1f9059b16ee304c",
".git/logs/HEAD": "b7410008bef071d6a1f9059b16ee304c",
".git/config": "c48c96ef1f58a6533c251c03f5321714",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "597ade102ff5af5216fa895550d1f972",
".git/COMMIT_EDITMSG": "a4a6cb8b60695d718a902afaba4c2765",
".git/refs/remotes/origin/master": "5b3c54b1888515b44097a8b72f96eaef",
".git/refs/heads/master": "5b3c54b1888515b44097a8b72f96eaef",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/assets/fonts/bmsIcons.ttf": "68ebdbeddb9764d2be10f9a34fd117ec",
"assets/assets/fonts/appIcons.ttf": "fcc1dc1d5407b4f8cd041d5bd4439801",
"assets/assets/fonts/rooms.ttf": "439983e16a143024f052eb7dbdb5007b",
"assets/assets/images/login-bg.jpeg": "36ff2f09650889a788ba601fddb6f31f",
"assets/assets/images/appIcon-offline.png": "b9a50b9147fcef6cbb6ad529813e81e8",
"assets/assets/images/logo.png": "ee83cc9c38f4a42062f2e57458a1c05a",
"assets/assets/images/bg-blur.jpg": "f770a8850d9d35d6133a4685549e90c5",
"assets/assets/images/bg2.jpg": "dcfb4bf4c8f3878c5abf6b985c1163a8",
"assets/assets/images/off-device.png": "f0638f472eed01091bf05aa2dd30ba07",
"assets/assets/images/appIcon.png": "a4e0cab740d24189ea00e1e708f6e2dd",
"assets/assets/images/bg.jpg": "3e38a2b1afcf2240ad9409bb3f0702c5",
"assets/assets/images/on-device.png": "815bc8e04c634cf768fd15b7d44c92ff",
"assets/FontManifest.json": "8a2d9b9b84325f018842578fa2af00a9",
"assets/AssetManifest.json": "bacf5bb7cac437dfd430f8e4d4fca9fa",
"assets/NOTICES": "041f5fc9309c666646a0b40fd9ed3aee",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"logo.png": "ee83cc9c38f4a42062f2e57458a1c05a",
"index.html": "3c121080c905c4ffcacc0ad851e5797e",
"/": "3c121080c905c4ffcacc0ad851e5797e",
"bg-blur.jpg": "f770a8850d9d35d6133a4685549e90c5",
"main.dart.js": "74b1211f8ed57c84742b0c26cce0b9ba",
"index-temp.html": "85d01639d34d1e1ff6ac0594fa75285d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c8e8b69cc30a7368749382bb3193cc56",
"version.json": "95ed09f7a80fa9406ffcf6b782e2d1c1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
