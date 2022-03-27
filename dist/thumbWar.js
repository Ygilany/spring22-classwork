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

/***/ "./assets/scripts/thumbWar/index.js":
/*!******************************************!*\
  !*** ./assets/scripts/thumbWar/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const utils = __webpack_require__(/*! ./utils */ \"./assets/scripts/thumbWar/utils.js\")\n\nfunction thumbWar(player1, player2) {\n  const numberToWin = 2\n  let player1Wins = 0\n  let player2Wins = 0\n  while (player1Wins < numberToWin && player2Wins < numberToWin) {\n    const winner = utils.getWinner(player1, player2)\n    if (winner === player1) {\n      player1Wins++\n    } else if (winner === player2) {\n      player2Wins++\n    }\n  }\n  return player1Wins > player2Wins ? player1 : player2\n}\n\nmodule.exports = thumbWar\n\n//# sourceURL=webpack:///./assets/scripts/thumbWar/index.js?");

/***/ }),

/***/ "./assets/scripts/thumbWar/utils.js":
/*!******************************************!*\
  !*** ./assets/scripts/thumbWar/utils.js ***!
  \******************************************/
/***/ ((module) => {

eval("// returns the winning player or null for a tie\n// Let's pretend this isn't using Math.random() but instead\n// is making a call to some third party machine learning\n// service that has a testing environment we don't control\n// and is unreliable so we want to mock it out for tests.\nfunction getWinner(player1, player2) {\n  const winningNumber = Math.random()\n  return winningNumber < 1 / 3\n    ? player1\n    : winningNumber < 2 / 3\n      ? player2\n      : null\n}\n\nmodule.exports = {getWinner}\n\n//# sourceURL=webpack:///./assets/scripts/thumbWar/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/thumbWar/index.js");
/******/ 	
/******/ })()
;