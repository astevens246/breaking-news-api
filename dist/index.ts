/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/news-api.ts":
/*!*************************!*\
  !*** ./src/news-api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNews: () => (/* binding */ getNews),\n/* harmony export */   getNewsWithPopularity: () => (/* binding */ getNewsWithPopularity),\n/* harmony export */   getRecentNews: () => (/* binding */ getRecentNews),\n/* harmony export */   getTopBusinessHeadlines: () => (/* binding */ getTopBusinessHeadlines)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar apiKey = 'caa94f99e23d40d29d1db0c88389230e';\nfunction getNews(query, from_date, sortBy, page) {\n    return __awaiter(this, void 0, void 0, function () {\n        var url, res, json, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    url = \"https://newsapi.org/v2/everything?q=\".concat(query, \"&from=\").concat(from_date, \"&sortBy=\").concat(sortBy, \"&apiKey=\").concat(apiKey, \"&page=\").concat(page, \"&language=en\");\n                    console.log('Fetching URL:', url);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(url)];\n                case 2:\n                    res = _a.sent();\n                    if (!res.ok) {\n                        throw new Error(\"Error fetching news: \".concat(res.statusText));\n                    }\n                    return [4 /*yield*/, res.json()];\n                case 3:\n                    json = _a.sent();\n                    return [2 /*return*/, json];\n                case 4:\n                    error_1 = _a.sent();\n                    console.error('Failed to fetch news:', error_1);\n                    throw error_1;\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction getTopBusinessHeadlines() {\n    return __awaiter(this, void 0, void 0, function () {\n        var url, res, json, error_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    url = \"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=\".concat(apiKey);\n                    console.log('Fetching URL:', url);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(url)];\n                case 2:\n                    res = _a.sent();\n                    if (!res.ok) {\n                        throw new Error(\"Error fetching top business headlines: \".concat(res.statusText));\n                    }\n                    return [4 /*yield*/, res.json()];\n                case 3:\n                    json = _a.sent();\n                    return [2 /*return*/, json];\n                case 4:\n                    error_2 = _a.sent();\n                    console.error('Failed to fetch top business headlines:', error_2);\n                    throw error_2;\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction getNewsWithPopularity(query, from_date, page) {\n    return __awaiter(this, void 0, void 0, function () {\n        var url, res, json, error_3;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    url = \"https://newsapi.org/v2/everything?q=\".concat(query, \"&from=\").concat(from_date, \"&sortBy=popularity&apiKey=\").concat(apiKey, \"&page=\").concat(page, \"&language=en\");\n                    console.log('Fetching URL:', url);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(url)];\n                case 2:\n                    res = _a.sent();\n                    if (!res.ok) {\n                        throw new Error(\"Error fetching news with popularity: \".concat(res.statusText));\n                    }\n                    return [4 /*yield*/, res.json()];\n                case 3:\n                    json = _a.sent();\n                    return [2 /*return*/, json];\n                case 4:\n                    error_3 = _a.sent();\n                    console.error('Failed to fetch news with popularity:', error_3);\n                    throw error_3;\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction getRecentNews(query, from_date, page) {\n    return __awaiter(this, void 0, void 0, function () {\n        var url, res, json, error_4;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    url = \"https://newsapi.org/v2/everything?q=\".concat(query, \"&from=\").concat(from_date, \"&sortBy=publishedAt&apiKey=\").concat(apiKey, \"&page=\").concat(page, \"&language=en\");\n                    console.log('Fetching URL:', url);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(url)];\n                case 2:\n                    res = _a.sent();\n                    if (!res.ok) {\n                        throw new Error(\"Error fetching recent news: \".concat(res.statusText));\n                    }\n                    return [4 /*yield*/, res.json()];\n                case 3:\n                    json = _a.sent();\n                    return [2 /*return*/, json];\n                case 4:\n                    error_4 = _a.sent();\n                    console.error('Failed to fetch recent news:', error_4);\n                    throw error_4;\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n\n//# sourceURL=webpack://lib/./src/news-api.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/news-api.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});