/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"mbmb_pvm_CyclomediaWidget":"mbmb_pvm_CyclomediaWidget"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/hiking/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ExpandCollapseContent',\n  components: {},\n  props: {\n    item: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  data: function data() {\n    return {\n      photoNumber: 0,\n      imgsrc: null\n    };\n  },\n  computed: {\n    allPics: function allPics() {\n      var allPics = {};\n\n      for (var i = 0; i < 10; i++) {\n        if (this.item.fields['Date' + i]) {\n          this.item.fields['PicsDate' + i]['date'] = this.item.fields['Date' + i];\n          allPics[this.item.fields['Date' + i]] = this.item.fields['PicsDate' + i];\n        }\n      }\n\n      return allPics;\n    },\n    pictures2: function pictures2() {\n      var pictures = [];\n\n      for (var _i = 0, _Object$entries = Object.entries(this.allPics); _i < _Object$entries.length; _i++) {\n        var pics = _Object$entries[_i];\n\n        var _iterator = Object(C_Users_rothw_Projects_hiking_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pics),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var pic = _step.value;\n            pictures.push(pic);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        console.log('in pictures2, pics:', pics);\n      }\n\n      return pictures;\n    },\n    pictures: function pictures() {\n      var pics = [];\n      var pics1 = this.item.fields.PicsDate1;\n      console.log('pictures computed, pics1:', pics1);\n      var pics2 = this.item.fields.PicsDate2;\n      console.log('pictures computed, pics2:', pics2);\n\n      if (pics1 && pics2) {\n        var _iterator2 = Object(C_Users_rothw_Projects_hiking_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pics1),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var pic1 = _step2.value;\n            pic1.date = this.item.fields.Date1;\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n\n        var _iterator3 = Object(C_Users_rothw_Projects_hiking_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pics2),\n            _step3;\n\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var pic2 = _step3.value;\n            pic2.date = this.item.fields.Date2;\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n\n        pics = pics1.concat(pics2);\n      } else if (pics1) {\n        var _iterator4 = Object(C_Users_rothw_Projects_hiking_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pics1),\n            _step4;\n\n        try {\n          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n            var _pic = _step4.value;\n            _pic.date = this.item.fields.Date1;\n          }\n        } catch (err) {\n          _iterator4.e(err);\n        } finally {\n          _iterator4.f();\n        }\n\n        pics = pics1;\n      }\n\n      return pics;\n    },\n    picsLength: function picsLength() {\n      return this.pictures.length;\n    }\n  },\n  watch: {\n    photoNumber: function photoNumber(nextPhotoNumber) {\n      var _this = this;\n\n      // console.log('watch photoNumber, nextPhotoNumber:', nextPhotoNumber);\n      this.imgsrc = './images/spinner3.png';\n      var myImage = new Image();\n      myImage.src = this.pictures[this.photoNumber].url;\n\n      myImage.onload = function () {\n        _this.imgsrc = myImage.src;\n      };\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this.imgsrc = './images/spinner3.png';\n    var myImage = new Image();\n    myImage.src = this.pictures[this.photoNumber].url;\n\n    myImage.onload = function () {\n      _this2.imgsrc = myImage.src;\n    };\n  },\n  methods: {\n    changePhotoNumber: function changePhotoNumber(direction) {\n      console.log('changePhotoNumber, direction:', direction);\n      var newNumber;\n\n      if (direction == 'up') {\n        newNumber = this.photoNumber + 1;\n      } else if (direction == 'down') {\n        newNumber = this.photoNumber - 1;\n      }\n\n      this.photoNumber = newNumber;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"263dc3a7-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"263dc3a7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"main-content\" }, [\n    _c(\"div\", [\n      _vm._v(\" Town/City: \" + _vm._s(_vm.item.fields.Town)),\n      _c(\"br\"),\n      _vm._v(\" State: \" + _vm._s(_vm.item.fields.State) + \" \"),\n    ]),\n    _c(\"div\", { staticClass: \"columns is-vcentered is-mobile\" }, [\n      _c(\"div\", { staticClass: \"column is-2 has-text-centered\" }, [\n        _c(\n          \"button\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.photoNumber + 1 > 1,\n                expression: \"photoNumber+1>1\",\n              },\n            ],\n            staticClass: \"button square-button\",\n            on: {\n              click: function ($event) {\n                return _vm.changePhotoNumber(\"down\")\n              },\n            },\n          },\n          [_c(\"font-awesome-icon\", { attrs: { icon: \"arrow-left\" } })],\n          1\n        ),\n      ]),\n      _vm.picsLength\n        ? _c(\"div\", { staticClass: \"column is-8 has-text-centered\" }, [\n            _c(\"div\", { staticClass: \"image-div\" }, [\n              _c(\"img\", { attrs: { src: _vm.imgsrc } }),\n            ]),\n            _vm._v(\n              \" Date: \" + _vm._s(_vm.pictures[_vm.photoNumber].date) + \" \"\n            ),\n          ])\n        : _vm._e(),\n      !_vm.picsLength\n        ? _c(\"div\", { staticClass: \"column is-8 has-text-centered\" }, [\n            _vm._v(\" No photos \"),\n          ])\n        : _vm._e(),\n      _c(\"div\", { staticClass: \"column is-2 has-text-centered\" }, [\n        _c(\n          \"button\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.picsLength && _vm.photoNumber + 1 < _vm.picsLength,\n                expression: \"picsLength && photoNumber+1<picsLength\",\n              },\n            ],\n            staticClass: \"button square-button\",\n            on: {\n              click: function ($event) {\n                return _vm.changePhotoNumber(\"up\")\n              },\n            },\n          },\n          [_c(\"font-awesome-icon\", { attrs: { icon: \"arrow-right\" } })],\n          1\n        ),\n      ]),\n    ]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22263dc3a7-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@font-face{font-family:\\\"Montserrat\\\";src:local(\\\"Montserrat Regular\\\"),local(\\\"Montserrat-Regular\\\"),url(\\\"https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff\\\") format(\\\"woff\\\");font-weight:normal;font-style:normal}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans Italic\\\"),local(\\\"OpenSans-Italic\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff\\\") format(\\\"woff\\\");font-weight:normal;font-style:italic}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans Bold Italic\\\"),local(\\\"OpenSans-BoldItalic\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff\\\") format(\\\"woff\\\");font-weight:bold;font-style:italic}@font-face{font-family:\\\"Montserrat\\\";src:local(\\\"Montserrat Bold\\\"),local(\\\"Montserrat-Bold\\\"),url(\\\"https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff\\\") format(\\\"woff\\\");font-weight:bold;font-style:normal}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans Bold\\\"),local(\\\"OpenSans-Bold\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff\\\") format(\\\"woff\\\");font-weight:bold;font-style:normal}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans SemiBold Italic\\\"),local(\\\"OpenSans-SemiBoldItalic\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff\\\") format(\\\"woff\\\");font-weight:600;font-style:italic}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans SemiBold\\\"),local(\\\"OpenSans-SemiBold\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff\\\") format(\\\"woff\\\");font-weight:600;font-style:normal}@font-face{font-family:\\\"Open Sans\\\";src:local(\\\"Open Sans Regular\\\"),local(\\\"OpenSans-Regular\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2\\\") format(\\\"woff2\\\"),url(\\\"https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff\\\") format(\\\"woff\\\");font-weight:normal;font-style:normal}table{border:0px none;border-style:none !important}.square-button{width:46px}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2701c26c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/ExpandCollapseContent.vue":
/*!**************************************************!*\
  !*** ./src/components/ExpandCollapseContent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandCollapseContent.vue?vue&type=template&id=2ab0f112& */ \"./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112&\");\n/* harmony import */ var _ExpandCollapseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandCollapseContent.vue?vue&type=script&lang=js& */ \"./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ExpandCollapseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ExpandCollapseContent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?");

/***/ }),

/***/ "./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ExpandCollapseContent.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?");

/***/ }),

/***/ "./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?");

/***/ }),

/***/ "./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112&":
/*!*********************************************************************************!*\
  !*** ./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_263dc3a7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"263dc3a7-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./ExpandCollapseContent.vue?vue&type=template&id=2ab0f112& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"263dc3a7-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ExpandCollapseContent.vue?vue&type=template&id=2ab0f112&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_263dc3a7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_263dc3a7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandCollapseContent_vue_vue_type_template_id_2ab0f112___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ExpandCollapseContent.vue?");

/***/ }),

/***/ "./src/data-sources/hikes.js":
/*!***********************************!*\
  !*** ./src/data-sources/hikes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  id: 'hikes',\n  type: 'http-get',\n  dependent: 'none',\n  resettable: false,\n  url: 'https://api.airtable.com/v0/appqasIqir5SS0S9s/hikes?api_key=' + \"keyZ84hQSumaKJOhi\",\n  options: {\n    params: {}\n  }\n});\n\n//# sourceURL=webpack:///./src/data-sources/hikes.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_rothw_Projects_hiking_map_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamationTriangle */ \"./node_modules/@fortawesome/free-solid-svg-icons/faExclamationTriangle.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCalendarAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCalendarAlt */ \"./node_modules/@fortawesome/free-solid-svg-icons/faCalendarAlt.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCalendarAlt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCalendarAlt__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faBuilding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBuilding */ \"./node_modules/@fortawesome/free-solid-svg-icons/faBuilding.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faBuilding__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faBuilding__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faUserMd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUserMd */ \"./node_modules/@fortawesome/free-solid-svg-icons/faUserMd.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faUserMd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faUserMd__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCircle */ \"./node_modules/@fortawesome/free-solid-svg-icons/faCircle.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCar */ \"./node_modules/@fortawesome/free-solid-svg-icons/faCar.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faCheckSquare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/faCheckSquare */ \"./node_modules/@fortawesome/free-regular-svg-icons/faCheckSquare.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faCheckSquare__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons_faCheckSquare__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ \"./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faSquare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/faSquare */ \"./node_modules/@fortawesome/free-regular-svg-icons/faSquare.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons_faSquare__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons_faSquare__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowRight */ \"./node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowLeft */ \"./node_modules/@fortawesome/free-solid-svg-icons/faArrowLeft.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _phila_pinboard_src_main_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @phila/pinboard/src/main.js */ \"./node_modules/@phila/pinboard/src/main.js\");\n/* harmony import */ var _data_sources_hikes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-sources/hikes */ \"./src/data-sources/hikes.js\");\n/* harmony import */ var _components_ExpandCollapseContent_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ExpandCollapseContent.vue */ \"./src/components/ExpandCollapseContent.vue\");\n/* harmony import */ var _creativebulma_bulma_tooltip_dist_bulma_tooltip_min_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css */ \"./node_modules/@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css\");\n/* harmony import */ var _creativebulma_bulma_tooltip_dist_bulma_tooltip_min_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_creativebulma_bulma_tooltip_dist_bulma_tooltip_min_css__WEBPACK_IMPORTED_MODULE_19__);\n\n\n\n\n\n// this is the base-config for resource-finder\n// the point of this file is that it will move outside the project\n// (so that settings we put in it can be used by other projects)\n// and be pulled in with an axios call or something\n// (we might not need to use axios with new vue async tools)\n// if that is not needed, we can move this info to main.js\n// turn off console logging in production\nif (false) {}\n\nconsole.log('main.js process.env.NODE_ENV:', \"development\", 'process.env.VUE_APP_PUBLICPATH:', \"/hiking/\"); // Font Awesome Icons\n\n\n\n\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__[\"library\"].add(_fortawesome_free_solid_svg_icons_faExclamationTriangle__WEBPACK_IMPORTED_MODULE_5__[\"faExclamationTriangle\"], _fortawesome_free_solid_svg_icons_faCalendarAlt__WEBPACK_IMPORTED_MODULE_6__[\"faCalendarAlt\"], _fortawesome_free_solid_svg_icons_faBuilding__WEBPACK_IMPORTED_MODULE_7__[\"faBuilding\"], _fortawesome_free_solid_svg_icons_faUserMd__WEBPACK_IMPORTED_MODULE_8__[\"faUserMd\"], _fortawesome_free_solid_svg_icons_faCircle__WEBPACK_IMPORTED_MODULE_9__[\"faCircle\"], _fortawesome_free_solid_svg_icons_faCar__WEBPACK_IMPORTED_MODULE_10__[\"faCar\"], _fortawesome_free_regular_svg_icons_faCheckSquare__WEBPACK_IMPORTED_MODULE_11__[\"faCheckSquare\"], _fortawesome_free_regular_svg_icons_faSquare__WEBPACK_IMPORTED_MODULE_13__[\"faSquare\"], _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_12__[\"faCheck\"], _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_14__[\"faArrowRight\"], _fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_15__[\"faArrowLeft\"]); // import pinboard\n\n // data-sources\n\n\n // import customGreeting from './components/customGreeting.vue';\n\nvar customComps = {\n  'expandCollapseContent': _components_ExpandCollapseContent_vue__WEBPACK_IMPORTED_MODULE_18__[\"default\"] // 'customGreeting': customGreeting,\n\n};\n\nObject(_phila_pinboard_src_main_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"])({\n  alerts: {\n    modal: {\n      enabled: false,\n      // header: 'Possible closures',\n      // body: '<p>All City-run COVID-19 testing sites and health centers are open and on a normal schedule, though others may be closed. Please call ahead to ensure that the site you are going to is open.</p>',\n      header: 'Before you go',\n      body: '<p>Some test sites may be closed due to winter weather conditions.  Always call ahead before you go to a site.</p>'\n    },\n    // header: {\n    //   type: 'alertBanner',\n    //   // enabled: function(state) {\n    //   //   return state.alertResponse === 'alertHours';\n    //   // },\n    //   // content: '<b>Until further notice:</b> Please call ahead or check hours of operation while business restrictions are still in effect.',\n    // },\n    alertChecks: [// {\n      //   type: 'alertHours',\n      //   condition: [\n      //     {\n      //       'day': 1,\n      //       'startTime': '1:00',\n      //       'endTime': '23:59',\n      //     },\n      //     {\n      //       'day': 2,\n      //       'startTime': '1:00',\n      //       'endTime': '23:59',\n      //     },\n      //   ],\n      // },\n    ]\n  },\n  app: {\n    title: 'Outdoor Places',\n    logoAlt: 'logo',\n    type: 'hikes',\n    trustedSite: 'hidden',\n    skipGreeting: true\n  },\n  // resetDataOnGeocode: true,\n  retractableRefine: false,\n  dropdownRefine: false,\n  searchBar: {\n    hide: true,\n    placeholder: 'Search by address',\n    searchTypes: ['address'],\n    labelText: {\n      address: 'Search by address'\n    },\n    placeholderText: {\n      address: 'Search by address'\n    }\n  },\n  locationInfo: {\n    siteName: function siteName(item) {\n      return item.fields.Name;\n    }\n  },\n  customComps: customComps,\n  // baseConfig: BASE_CONFIG_URL,\n  // holidays: {\n  //   days: ['Monday'],\n  // },\n  // hiddenRefine: {\n  //   City: function(item) {\n  //     return item.attributes.City === 'Philadelphia';\n  //   },\n  //   Visibility: function(item) {\n  //     return item.attributes.Visibility === 'pub' || item.attributes.Visibility === 'For Public View';\n  //   },\n  // },\n  refine: {\n    type: 'categoryField_array',\n    columns: false,\n    value: function value(item) {\n      return item.fields.State;\n    }\n  },\n  markerType: 'circle-marker',\n  circleMarkers: {\n    color: '#ff781f',\n    selectedColor: '#FF0000',\n    weight: 0,\n    radius: 8,\n    mobileRadius: 12,\n    size: 10,\n    mobileSize: 20\n  },\n  cyclomedia: {\n    enabled: false,\n    measurementAllowed: false,\n    popoutAble: true,\n    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',\n    username: Object({\"NODE_ENV\":\"development\",\"VUE_APP_AIRTABLE_API_KEY\":\"keyZ84hQSumaKJOhi\",\"VUE_APP_CLI_UI_URL\":\"\",\"VUE_APP_MAPBOX_ACCESSTOKEN\":\"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA\",\"VUE_APP_PUBLICPATH\":\"/hiking/\",\"BASE_URL\":\"/hiking/\"}).VUE_APP_CYCLOMEDIA_USERNAME,\n    password: Object({\"NODE_ENV\":\"development\",\"VUE_APP_AIRTABLE_API_KEY\":\"keyZ84hQSumaKJOhi\",\"VUE_APP_CLI_UI_URL\":\"\",\"VUE_APP_MAPBOX_ACCESSTOKEN\":\"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA\",\"VUE_APP_PUBLICPATH\":\"/hiking/\",\"BASE_URL\":\"/hiking/\"}).VUE_APP_CYCLOMEDIA_PASSWORD,\n    apiKey: Object({\"NODE_ENV\":\"development\",\"VUE_APP_AIRTABLE_API_KEY\":\"keyZ84hQSumaKJOhi\",\"VUE_APP_CLI_UI_URL\":\"\",\"VUE_APP_MAPBOX_ACCESSTOKEN\":\"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA\",\"VUE_APP_PUBLICPATH\":\"/hiking/\",\"BASE_URL\":\"/hiking/\"}).VUE_APP_CYCLOMEDIA_API_KEY\n  },\n  dataSources: {\n    hikes: _data_sources_hikes__WEBPACK_IMPORTED_MODULE_17__[\"default\"]\n  },\n  router: {\n    enabled: false\n  },\n  // projection: '3857',\n  geocoder: {\n    url: function url(input) {\n      var inputEncoded = encodeURIComponent(input);\n      return \"//api.phila.gov/finder/v1/search/\".concat(inputEncoded);\n    },\n    params: {\n      include_units: true\n    }\n  },\n  footer: [// {\n    //   type: \"native\",\n    //   href: \"https://www.phila.gov/\",\n    //   attrs: {\n    //     target: \"_blank\",\n    //   },\n    //   text: \"cityOfPhiladelphia\",\n    // },\n    // {\n    //   type: \"native\",\n    //   href: \"#\",\n    //   text: \"about\",\n    // },\n    // {\n    //   type: \"native\",\n    //   href: \"https://www.phila.gov/feedback/\",\n    //   attrs: {\n    //     target: \"_blank\",\n    //   },\n    //   text: \"feedback\",\n    // },\n  ],\n  map: {\n    // type: 'leaflet',\n    type: 'mapbox',\n    tiles: 'hosted',\n    containerClass: 'map-container',\n    defaultBasemap: 'pwd',\n    center: [-75.163471, 39.953338],\n    minZoom: 7,\n    maxZoom: 25,\n    shouldInitialize: true,\n    zoom: 7,\n    geocodeZoom: 15,\n    imagery: {\n      enabled: false\n    },\n    basemaps: {\n      pwd: {\n        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',\n        tiledLayers: ['cityBasemapLabels'],\n        type: 'featuremap',\n        attribution: 'Parcels: Philadelphia Water'\n      }\n    },\n    tiledLayers: {\n      cityBasemapLabels: {\n        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',\n        zIndex: '3'\n      }\n    }\n  },\n  mbStyle: 'mapbox://styles/mapbox/satellite-streets-v12?access_token=pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA',\n  // mbStyle: 'mapbox://styles/ajrothwell/ck6gz6rmk04681ir1fdmagq5h',\n  // mbStyle: 'https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA',\n  // mbStyle: 'mapbox://styles/ajrothwell/ck6gz6rmk04681ir1fdmagq5h',\n  // mbStyle: {\n  //   version: 8,\n  //   sources: {\n  //     pwd: {\n  //       tiles: [\n  //         'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',\n  //       ],\n  //       type: 'raster',\n  //       tileSize: 256,\n  //     },\n  //   },\n  //   layers: [\n  //     {\n  //       id: 'pwd',\n  //       type: 'raster',\n  //       source: 'pwd',\n  //     },\n  //   ],\n  // },\n  basemapSources: {\n    pwd: {\n      source: {\n        tiles: ['https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}' // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'\n        ],\n        type: 'raster',\n        tileSize: 256\n      },\n      layer: {\n        id: 'pwd',\n        type: 'raster'\n      }\n    },\n    imagery2019: {\n      source: {\n        tiles: ['https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}' // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'\n        ],\n        type: 'raster',\n        tileSize: 256\n      },\n      layer: {\n        id: 'imagery2019',\n        type: 'raster'\n      }\n    }\n  },\n  basemapLabelSources: {\n    cityBasemapLabels: {\n      source: {\n        tiles: ['https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'],\n        type: 'raster',\n        tileSize: 256\n      },\n      layer: {\n        id: 'cityBasemapLabels',\n        type: 'raster'\n      }\n    },\n    imageryBasemapLabels: {\n      source: {\n        tiles: ['https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}'],\n        type: 'raster',\n        tileSize: 256\n      },\n      layer: {\n        id: 'imageryBasemapLabels',\n        type: 'raster'\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ })

/******/ });