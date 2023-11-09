/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContactPage: () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\n    const contentContainer = document.querySelector(\"#content\");\n    const contact = document.createElement(\"div\");\n    contact.setAttribute(\"id\", \"contact\");\n    contact.setAttribute(\"data-tab-content\", \"\");\n    contact.innerHTML = `<div class=\"hero\">\n    <h1>Contact us</h1>\n    </div>\n    <div class=\"contact-container\">\n        <div class=\"info\">\n            <div class=\"address\">\n                <p>\n                1024 Oakwood Ave<br />San\n                Diego, CA 22434\n                </p>\n            </div>\n            <div class=\"hours\">\n                <p>\n                <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\n                >8am-11pm\n                </p>\n            </div>\n            <div class=\"phone\">\n                <p>(222)-888 5555</p>\n            </div>\n        </div>\n    </div>`;\n    contentContainer.appendChild(contact);\n})();\n\n\n\n//# sourceURL=webpack://12.odin-project-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\n    const contentContainer = document.querySelector(\"#content\");\n    const home = document.createElement(\"div\");\n    home.classList.add(\"tab-content\");\n    home.innerHTML = `<div id=\"home\" class=\"active\" data-tab-content>\n    <div class=\"hero\">\n        <h1>Odin Restaurant!</h1>\n        <p>The beginnings in 1998 were modest, as Le Planteur was hidden at the far end of a narrow and bumpy lane in Yangon. Finding the restaurant was almost like going on a treasure hunt.</p>\n        <div class=\"btn-container\">\n            <a data-tab-target=\"#menu\" class=\"order-now\">Menu</a>\n        </div>\n    </div>\n    </div>`;\n\n    contentContainer.appendChild(home);\n})();\n\n\n\n//# sourceURL=webpack://12.odin-project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\");\n\n// Navigation tabs\ntabs.forEach((tab) =>\n    tab.addEventListener(\"click\", () => {\n        const target = document.querySelector(tab.dataset.tabTarget);\n        tabContents.forEach((tabContent) => {\n            tabContent.classList.remove(\"active\");\n        });\n        tabs.forEach((tab) => {\n            tab.classList.remove(\"red\");\n        });\n        tab.classList.add(\"red\");\n        target.classList.add(\"active\");\n    })\n);\n\n//# sourceURL=webpack://12.odin-project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\n    const contentContainer = document.querySelector(\"#content\");\n    const menu = document.createElement(\"div\");\n    menu.setAttribute(\"id\", \"menu\");\n    menu.setAttribute(\"data-tab-content\", \"\");\n    menu.innerHTML = `\n    <div class=\"menu-container\">\n    <div class=\"menu-item\">\n        <img src=\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D\" alt=\"\" />\n        <div class=\"item-content\">\n            <h4>GOAT CHEESE</h4>\n            <p>confit fig – Heirloom beetroot</p>\n        </div>\n    </div>\n    <div class=\"menu-item\">\n        <img src=\"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" />\n        <div class=\"item-content\">\n            <h4>PAN-SEARED HOKKAIDO SCALLOPS</h4>\n            <p>green pea – chorizo</p>\n        </div>\n    </div>\n    <div class=\"menu-item\">\n        <img src=\"https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D\" alt=\"\" />\n        <div class=\"item-content\">\n            <h4>NGAPALI BAY LOBSTER RAVIOLI</h4>\n            <p>double boiled consommé</p>\n        </div>\n    </div>\n    </div>`;\n\n    contentContainer.appendChild(menu);\n})();\n\n\n\n//# sourceURL=webpack://12.odin-project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ (() => {

eval("const pageLoad = (() => {\n    const contentContainer = document.querySelector(\"#content\");\n    const header = document.createElement(\"header\");\n    header.innerHTML = `\n    <nav>\n    <h2>Odin-Project-Restaurant-Page</h2>\n    <ul class=\"links\">\n        <li data-tab-target=\"#home\" class=\"tab red\">Home</li>\n        <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\n        <li data-tab-target=\"#contact\" class=\"tab\">Contact</li>\n    </ul>\n    </nav>`;\n\n    contentContainer.appendChild(header)\n})();\n\n//# sourceURL=webpack://12.odin-project-restaurant-page/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;