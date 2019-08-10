/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
    {
        "url": "404.html",
        "revision": "e19b3a729c3af7723cc6e63b72fb481d"
    },
    {
        "url": "404/index.html",
        "revision": "e19b3a729c3af7723cc6e63b72fb481d"
    },
    {
        "url": "assets/css/0.styles.e444384c.css",
        "revision": "99af4ec968c41ad6a55f8fa0fcf26b9e"
    },
    {
        "url": "assets/js/app.e5c58d91.js",
        "revision": "15d97b62e39e997463f3d304a1bc9bd2"
    },
    {
        "url": "assets/js/page--node-modules-gridsome-app-pages-404-vue.e6e3ce00.js",
        "revision": "ee3d3bbe881d3231cbd8fa4d7120abde"
    },
    {
        "url": "assets/js/page--src-pages-book-appt-vue.f6216e0f.js",
        "revision": "cab7961e8032cfa923da5e99464616c9"
    },
    {
        "url": "assets/js/page--src-pages-contact-vue.2a8a9881.js",
        "revision": "d165900249fa877b4f6210fb612275ea"
    },
    {
        "url": "assets/js/page--src-pages-index-vue.4f9eda0a.js",
        "revision": "540b9da012eedff7e25e4f7aeeb4fc34"
    },
    {
        "url": "assets/js/page--src-pages-qand-a-vue.b0299582.js",
        "revision": "ed4709d6a97f8876e8ff3a04bc7202cb"
    },
    {
        "url": "assets/js/page--src-pages-services-vue.39eb610a.js",
        "revision": "5e73b217f49431f0ada72c919ede268a"
    },
    {
        "url": "assets/js/page--src-pages-thankyou-vue.54910ea2.js",
        "revision": "372cdb36a1fabed394feae5ddff7575c"
    },
    {
        "url": "assets/manifest/client.json",
        "revision": "a26e66661e56dc288c40905796851021"
    },
    {
        "url": "assets/static/favicon.1539b60.9bb7ffa.png",
        "revision": "528be7fc357e86e472eb90c5d06e45dc"
    },
    {
        "url": "assets/static/favicon.62d22cb.9bb7ffa.png",
        "revision": "ad421981f2b44e3acd7d3a62216121c4"
    },
    {
        "url": "assets/static/favicon.7b22250.9bb7ffa.png",
        "revision": "792bff5e8c82b79551825020d8e1ef23"
    },
    {
        "url": "assets/static/favicon.ac8d93a.9bb7ffa.png",
        "revision": "334b56425dfcc146103ee3782ec52c08"
    },
    {
        "url": "assets/static/favicon.b9532cc.9bb7ffa.png",
        "revision": "ca3a37aacaa9c61829dc1aa0968a5abf"
    },
    {
        "url": "assets/static/favicon.ce0531f.9bb7ffa.png",
        "revision": "18c8ed18f36ee2d4e9c68e9cb7b5437c"
    },
    {
        "url": "assets/static/favicon.dc0cdc5.9bb7ffa.png",
        "revision": "e3aac802cecf084e741fabb058f2ec1b"
    },
    {
        "url": "assets/static/favicon.f22e9f3.9bb7ffa.png",
        "revision": "055aaf279e4d282a73be160a353c13c2"
    },
    {
        "url": "assets/static/favicon.png",
        "revision": "fe4792d482196a50cf9ae0d9d90b6493"
    },
    {
        "url": "book-appt/index.html",
        "revision": "e3e516c2eef6e8a796b93cc987530b96"
    },
    {
        "url": "contact/index.html",
        "revision": "12e6e8835ae880deef496be51b492081"
    },
    {
        "url": "index.html",
        "revision": "25420080582c44ac8a8a56f132d28a59"
    },
    {
        "url": "manifest.json",
        "revision": "0d0abacb3fe7ac2e709f5418b92191a2"
    },
    {
        "url": "qand-a/index.html",
        "revision": "495ea1ecd5fa130b373cc9ed73b943f1"
    },
    {
        "url": "services/index.html",
        "revision": "14df2a89b91fde62ec30a3a74f16232b"
    },
    {
        "url": "thankyou/index.html",
        "revision": "0464c01381cd4f7d23237f81ae3a983e"
    },
    {
        "url": "404",
        "revision": "58562ccce683f1fa20f0b08d84a700bb"
    },
    {
        "url": "book-appt",
        "revision": "4588bc91cfe539bd5684e3c30993ff68"
    },
    {
        "url": "contact",
        "revision": "c169ae72704e998675892234277690e3"
    },
    {
        "url": "services",
        "revision": "e714719887878fa517bfd60281947359"
    },
    {
        "url": "qand-a",
        "revision": "6dc3c46b32912fc665fd1592f094f8b0"
    },
    {
        "url": "thankyou",
        "revision": "d1c28df368a8fe15ca8ec186df0937d8"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
