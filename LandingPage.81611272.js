// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"lkwa9":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c2bf65c581611272";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hHK2S":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e30a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e30a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _fa = require("react-icons/fa"); // Added new icons
var _imageShimmer = require("./ImageShimmer");
var _imageShimmerDefault = parcelHelpers.interopDefault(_imageShimmer);
var _chocolatePng = require("../images/chocolate.png");
var _chocolatePngDefault = parcelHelpers.interopDefault(_chocolatePng);
var _smallChocolatePng = require("../images/smallChocolate.png");
var _smallChocolatePngDefault = parcelHelpers.interopDefault(_smallChocolatePng);
var _cakePng = require("../images/cake.png");
var _cakePngDefault = parcelHelpers.interopDefault(_cakePng);
var _brownieJpg = require("../images/brownie.jpg");
var _brownieJpgDefault = parcelHelpers.interopDefault(_brownieJpg);
var _mousseJpg = require("../images/mousse.jpg");
var _mousseJpgDefault = parcelHelpers.interopDefault(_mousseJpg);
var _customer1Jpg = require("../images/customer1.jpg");
var _customer1JpgDefault = parcelHelpers.interopDefault(_customer1Jpg);
var _customer2Jpg = require("../images/customer2.jpg");
var _customer2JpgDefault = parcelHelpers.interopDefault(_customer2Jpg);
var _customer3Jpg = require("../images/customer3.jpg");
var _customer3JpgDefault = parcelHelpers.interopDefault(_customer3Jpg);
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _restaurantSlice = require("../utils/restaurantSlice");
var _reactToastify = require("react-toastify");
var _reactToastifyCss = require("react-toastify/dist/ReactToastify.css");
var _s = $RefreshSig$();
// Custom Hero Section Carousel Data
const heroSlides = [
    {
        image: (0, _chocolatePngDefault.default),
        headline: "Handcrafted Chocolates",
        subtext: "Taste the passion in every exquisite piece.",
        bgColor: "from-purple-600 to-pink-500"
    },
    {
        image: (0, _cakePngDefault.default),
        headline: "Celebration Cakes",
        subtext: "Making your special moments even sweeter.",
        bgColor: "from-blue-500 to-cyan-400"
    },
    {
        image: (0, _smallChocolatePngDefault.default),
        headline: "Everyday Delights",
        subtext: "Small treats, big smiles, anytime, anywhere.",
        bgColor: "from-green-500 to-yellow-400"
    }
];
const testimonials = [
    {
        quote: "Absolutely delightful! The chocolates are out of this world, and the delivery was so fast.",
        author: "Priya Sharma",
        rating: 5,
        customerImg: (0, _customer1JpgDefault.default)
    },
    {
        quote: "ChocoDil made our anniversary cake truly special. The taste was heavenly!",
        author: "Amit Singh",
        rating: 5,
        customerImg: (0, _customer2JpgDefault.default)
    },
    {
        quote: "My go-to place for desserts now. Consistently fresh and incredibly tasty.",
        author: "Yinka",
        rating: 4,
        customerImg: (0, _customer3JpgDefault.default)
    }
];
const features = [
    {
        icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaHeart), {
            className: "text-pink-500 text-3xl mb-2"
        }, void 0, false, {
            fileName: "src/components/LandingPage.js",
            lineNumber: 74,
            columnNumber: 11
        }, undefined),
        title: "Handcrafted with Love",
        description: "Each item is meticulously made with the finest ingredients and a touch of passion."
    },
    {
        icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaShippingFast), {
            className: "text-blue-500 text-3xl mb-2"
        }, void 0, false, {
            fileName: "src/components/LandingPage.js",
            lineNumber: 80,
            columnNumber: 11
        }, undefined),
        title: "Speedy Delivery",
        description: "Get your treats delivered fresh and fast, right to your doorstep, typically within 2-3 days."
    },
    {
        icon: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaSmile), {
            className: "text-yellow-500 text-3xl mb-2"
        }, void 0, false, {
            fileName: "src/components/LandingPage.js",
            lineNumber: 86,
            columnNumber: 11
        }, undefined),
        title: "Customer Satisfaction",
        description: "Your happiness is our priority. We strive to make every experience a sweet one."
    }
];
const LandingPage = ()=>{
    _s();
    const contentCategories = [
        // Renamed to avoid conflict with `content` in `useEffect`
        {
            img: (0, _chocolatePngDefault.default),
            title: "Bar Chocolate",
            text: "Indulge in our exquisite bar chocolates, crafted to melt in your mouth and elevate your senses. Pure bliss in every bite!",
            category: "chocolate"
        },
        {
            img: (0, _smallChocolatePngDefault.default),
            title: "Small Chocolate",
            text: "Perfectly portioned delightful small chocolates for a quick treat or a sweet surprise. Share the joy!",
            category: "small chocolate"
        },
        {
            img: (0, _cakePngDefault.default),
            title: "Decadent Cakes",
            text: "Celebrate life's moments with our freshly baked, beautifully designed cakes. Taste the artistry and passion!",
            category: "cake"
        },
        {
            img: (0, _brownieJpgDefault.default),
            title: "Gourmet Brownies",
            text: "Rich, fudgy, and irresistibly delicious brownies that are a perfect indulgence for any craving.",
            category: "brownie"
        },
        {
            img: (0, _mousseJpgDefault.default),
            title: "Creamy Mousses",
            text: "Light and airy, our mousses are a delicate symphony of flavors, perfect for a sophisticated dessert.",
            category: "mousse"
        }
    ];
    const dispatch = (0, _reactRedux.useDispatch)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const [imageLoaded, setImageLoaded] = (0, _react.useState)(contentCategories.map(()=>false));
    const [currentSlide, setCurrentSlide] = (0, _react.useState)(0);
    const newsletterEmailRef = (0, _react.useRef)(null); // Ref for newsletter input
    // Logic for filtering if user clicks on button
    const handleCategorySelection = async (category)=>{
        (0, _reactToastify.toast).info("Loading treats for you...", {
            autoClose: 1500
        }); // Optional: loading toast
        await dispatch((0, _restaurantSlice.fetchRestaurants)()); // Fetch all restaurants
        dispatch((0, _restaurantSlice.filterByCategory)(category)); // Then filter by category
        navigate("/filteredList"); // Navigate to the filtered list page
    };
    // Preload images and manage loading state for category sections
    (0, _react.useEffect)(()=>{
        const loadImage = (item, index)=>{
            return new Promise((resolve)=>{
                const img = new Image();
                img.src = item.img;
                img.onload = ()=>{
                    setTimeout(()=>{
                        setImageLoaded((prevState)=>{
                            const updatedState = [
                                ...prevState
                            ];
                            updatedState[index] = true;
                            return updatedState;
                        });
                        resolve();
                    }, 300);
                };
                img.onerror = ()=>{
                    console.error(`Failed to load image: ${item.img}`);
                    setImageLoaded((prevState)=>{
                        const updatedState = [
                            ...prevState
                        ];
                        updatedState[index] = true; // Mark as loaded even on error to hide shimmer
                        return updatedState;
                    });
                    resolve();
                };
            });
        };
        const loadAllCategoryImages = async ()=>{
            for(let i = 0; i < contentCategories.length; i++)await loadImage(contentCategories[i], i);
        };
        const initialLoadDelay = setTimeout(()=>{
            loadAllCategoryImages();
        }, 500);
        return ()=>clearTimeout(initialLoadDelay);
    }, [
        contentCategories
    ]);
    // Hero carousel auto-play
    (0, _react.useEffect)(()=>{
        const slideInterval = setInterval(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds
        return ()=>clearInterval(slideInterval);
    }, []);
    const handleNewsletterSignup = (e)=>{
        e.preventDefault();
        const email = newsletterEmailRef.current.value;
        if (email && email.includes("@") && email.includes(".")) {
            // Simulate API call for newsletter signup
            (0, _reactToastify.toast).success("Thank you for subscribing to our newsletter!");
            newsletterEmailRef.current.value = ""; // Clear input
        } else (0, _reactToastify.toast).error("Please enter a valid email address.");
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "select-none container mx-auto p-0 md:p-6 mt-0 md:mt-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactToastify.ToastContainer), {
                className: "mt-20"
            }, void 0, false, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 208,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "relative h-[calc(100vh-80px)] w-full overflow-hidden mb-12 shadow-2xl rounded-b-xl",
                children: [
                    heroSlides.map((slide, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: `absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-4 md:p-0
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
              bg-gradient-to-br ${slide.bgColor}`,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "text-center text-white z-20 p-6 bg-black bg-opacity-30 rounded-xl backdrop-blur-sm transform transition-transform duration-1000 ease-in-out",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                            className: "text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down",
                                            children: slide.headline
                                        }, void 0, false, {
                                            fileName: "src/components/LandingPage.js",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            className: "text-lg md:text-xl font-light mb-8 animate-fade-in-up",
                                            children: slide.subtext
                                        }, void 0, false, {
                                            fileName: "src/components/LandingPage.js",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            onClick: ()=>{
                                                location.href = "#sectionDelight";
                                            },
                                            className: "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-purple-800 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-bounce-slow",
                                            children: "Explore All Delights!"
                                        }, void 0, false, {
                                            fileName: "src/components/LandingPage.js",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/LandingPage.js",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    src: slide.image,
                                    alt: slide.headline,
                                    className: "absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "src/components/LandingPage.js",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, index, true, {
                            fileName: "src/components/LandingPage.js",
                            lineNumber: 213,
                            columnNumber: 11
                        }, undefined)),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2",
                        children: heroSlides.map((_, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                onClick: ()=>setCurrentSlide(index),
                                className: `w-3 h-3 rounded-full bg-white transition-all duration-300 ${index === currentSlide ? "w-8 opacity-100" : "opacity-50"}`
                            }, index, false, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 245,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 243,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 211,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "py-16 bg-gradient-to-r from-yellow-100 to-orange-100 text-center mb-12 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-4xl font-extrabold text-gray-800 mb-10",
                        children: "Why Choose ChocoDil?"
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 258,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex flex-wrap justify-center gap-8 px-4",
                        children: features.map((feature, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "w-full sm:w-1/2 lg:w-1/4 p-4 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 group",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300",
                                        children: feature.icon
                                    }, void 0, false, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "text-xl font-bold text-gray-800 mt-4 mb-2",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-gray-600",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, index, true, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 263,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 261,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 257,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "py-16 px-4 md:px-0 mb-12",
                id: "sectionDelight",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-4xl font-extrabold text-center text-purple-700 mb-12",
                        children: "Explore Our Delicious Categories"
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-4",
                        children: contentCategories.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                onClick: ()=>handleCategorySelection(item.category),
                                className: "relative bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer   transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl   group animate-fade-in-up",
                                style: {
                                    animationDelay: `${index * 0.1}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "relative w-full h-64 overflow-hidden",
                                        children: [
                                            !imageLoaded[index] ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _imageShimmerDefault.default), {
                                                className: "w-full h-full"
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: item.img,
                                                alt: item.title,
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "p-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-gray-600 text-sm mb-4 line-clamp-3",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                className: "inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-full   hover:bg-red-700 transition duration-300 transform hover:scale-105   opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
                                                children: [
                                                    "View Items ",
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaRegHandPointer), {}, void 0, false, {
                                                        fileName: "src/components/LandingPage.js",
                                                        lineNumber: 318,
                                                        columnNumber: 30
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, index, true, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 286,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 284,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 280,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "py-16 bg-purple-100 text-center mb-12 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-4xl font-extrabold text-purple-800 mb-10",
                        children: "What Our Customers Say"
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 328,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4",
                        children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "bg-white p-6 rounded-xl shadow-md relative transform hover:scale-105 transition-transform duration-300",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaQuoteLeft), {
                                        className: "text-purple-400 text-4xl absolute top-4 left-4 opacity-30"
                                    }, void 0, false, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-gray-700 text-lg italic mb-4 mt-8",
                                        children: [
                                            '"',
                                            testimonial.quote,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "font-semibold text-gray-800",
                                        children: [
                                            "- ",
                                            testimonial.author
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "mt-4 items-center justify-center flex space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                src: testimonial.customerImg,
                                                alt: "Customer img",
                                                className: "w-36 h-36 rounded-full object-cover object-top border-4 border-pink-300 shadow-xl ml-6",
                                                onError: (e)=>{
                                                    e.target.src = "https://placehold.co/200x200/FFC0CB/6A0DAD?text=Customer";
                                                }
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "flex justify-center mb-2",
                                                children: [
                                                    ...Array(5)
                                                ].map((_, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaStar), {
                                                        className: `text-xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`
                                                    }, i, false, {
                                                        fileName: "src/components/LandingPage.js",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, undefined))
                                            }, void 0, false, {
                                                fileName: "src/components/LandingPage.js",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, index, true, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 333,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 331,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 327,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center mb-12 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-4xl font-extrabold mb-4",
                        children: "Stay Sweet!"
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 374,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-lg mb-8",
                        children: "Subscribe to our newsletter for exclusive deals, new arrivals, and sweet surprises!"
                    }, void 0, false, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                        onSubmit: handleNewsletterSignup,
                        className: "max-w-screen-md mx-auto flex flex-col sm:flex-row gap-4 px-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                type: "email",
                                ref: newsletterEmailRef,
                                placeholder: "Enter your email address",
                                className: "flex-grow p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white",
                                required: true
                            }, void 0, false, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 383,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                type: "submit",
                                className: "bg-purple-700 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-lg",
                                children: [
                                    "Subscribe ",
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaEnvelope), {
                                        className: "inline-block ml-2"
                                    }, void 0, false, {
                                        fileName: "src/components/LandingPage.js",
                                        lineNumber: 394,
                                        columnNumber: 23
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/LandingPage.js",
                                lineNumber: 390,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/LandingPage.js",
                        lineNumber: 379,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/LandingPage.js",
                lineNumber: 373,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/LandingPage.js",
        lineNumber: 207,
        columnNumber: 5
    }, undefined);
};
_s(LandingPage, "eSzmxqZYaFhZf3j+JUGmgSaUo1w=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = LandingPage;
exports.default = LandingPage;
var _c;
$RefreshReg$(_c, "LandingPage");

  $parcel$ReactRefreshHelpers$e30a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-icons/fa":"4Bs28","./ImageShimmer":"2cegY","../images/chocolate.png":"4T9BM","../images/smallChocolate.png":"1Y9Jz","../images/cake.png":"5JBbW","../images/brownie.jpg":"2mGHw","../images/mousse.jpg":"XObaS","../images/customer1.jpg":"fQVoH","../images/customer2.jpg":"gYTUi","../images/customer3.jpg":"eXILP","react-router-dom":"fdOAw","react-redux":"62sf7","../utils/restaurantSlice":"ekpM8","react-toastify":"lV1rO","react-toastify/dist/ReactToastify.css":"gJP2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"2cegY":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e986 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e986.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function ImageShimmer() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full h-72 bg-gray-200 animate-pulse rounded-lg"
    }, void 0, false, {
        fileName: "src/components/ImageShimmer.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ImageShimmer;
exports.default = ImageShimmer;
var _c;
$RefreshReg$(_c, "ImageShimmer");

  $parcel$ReactRefreshHelpers$e986.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4T9BM":[function(require,module,exports,__globalThis) {
module.exports = require("3f542bf69a98b9be").getBundleURL('gIDvd') + "chocolate.f3858387.png" + "?" + Date.now();

},{"3f542bf69a98b9be":"lgJ39"}],"1Y9Jz":[function(require,module,exports,__globalThis) {
module.exports = require("863a9139e3da8509").getBundleURL('gIDvd') + "smallChocolate.a9d8ec1f.png" + "?" + Date.now();

},{"863a9139e3da8509":"lgJ39"}],"5JBbW":[function(require,module,exports,__globalThis) {
module.exports = require("815a7387384da859").getBundleURL('gIDvd') + "cake.d67ebc93.png" + "?" + Date.now();

},{"815a7387384da859":"lgJ39"}],"2mGHw":[function(require,module,exports,__globalThis) {
module.exports = require("14c53879aae84a2e").getBundleURL('gIDvd') + "brownie.9dbd7ba6.jpg" + "?" + Date.now();

},{"14c53879aae84a2e":"lgJ39"}],"XObaS":[function(require,module,exports,__globalThis) {
module.exports = require("c913d9d26eda6419").getBundleURL('gIDvd') + "mousse.d47ac1ca.jpg" + "?" + Date.now();

},{"c913d9d26eda6419":"lgJ39"}],"fQVoH":[function(require,module,exports,__globalThis) {
module.exports = require("cc260b45ba695c5f").getBundleURL('gIDvd') + "customer1.69eb9276.jpg" + "?" + Date.now();

},{"cc260b45ba695c5f":"lgJ39"}],"gYTUi":[function(require,module,exports,__globalThis) {
module.exports = require("9be7ca0f442d4839").getBundleURL('gIDvd') + "customer2.c7cd23ab.jpg" + "?" + Date.now();

},{"9be7ca0f442d4839":"lgJ39"}],"eXILP":[function(require,module,exports,__globalThis) {
module.exports = require("cad8a340e8c3a518").getBundleURL('gIDvd') + "customer3.cf2c5766.jpg" + "?" + Date.now();

},{"cad8a340e8c3a518":"lgJ39"}],"gJP2Y":[function() {},{}]},["aQL8O","lkwa9"], null, "parcelRequire94c2")

//# sourceMappingURL=LandingPage.81611272.js.map
