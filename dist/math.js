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

/***/ "./assets/scripts/math-example/index.js":
/*!**********************************************!*\
  !*** ./assets/scripts/math-example/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {sum, subtract, subtractAsync, sumAsync} = __webpack_require__(/*! ./math */ \"./assets/scripts/math-example/math.js\")\n\n// result = sum(3, 7)\n// expected = 10\n// expect(result).toBe(expected);\n\n\n// result = subtract(7, 3)\n// expected = 4\n// expect(result).toBe(expected);\n\ntest(`sum adds numbers`, ()=> {\n  const result = sum(3, 7)\n  const expected = 10\n  expect(result).toBe(expected);  \n})\n\ntest(`subtract subtracts numbers`, ()=> {\n  const result = subtract(10, 7)\n  const expected = 3\n  expect(result).toBe(expected);  \n})\n\ntest(`sumAsync sums numbers`, async ()=> {\n  const result = await sumAsync(10, 7)\n  const expected = 17\n  expect(result).toBe(expected);  \n})\n\ntest(`10 > 9`, () => {\n  expect(10).toBeGreaterThan(9);\n})\ntest(`10 > 11`, () => {\n  expect(10).toBeGreaterThan(11);\n})\ntest(`10 > 10`, () => {\n  expect(10).toBeGreaterThan(10);\n})\n\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`${actual} is not equal to ${expected}`);\n      }\n    },\n    toBeGreaterThan(expected) {\n      if (actual <= expected) {\n        throw new Error(`${actual} is greater than ${expected}`);\n      }\n    }\n  }\n}\n\nasync function test(title, callback) {\n  try {\n    await callback();\n    console.log(`✅ ${title}`)\n  } catch (error) {\n    console.error(`❌ ${title}`)\n    console.error(error);\n  }\n}\n\n//# sourceURL=webpack:///./assets/scripts/math-example/index.js?");

/***/ }),

/***/ "./assets/scripts/math-example/math.js":
/*!*********************************************!*\
  !*** ./assets/scripts/math-example/math.js ***!
  \*********************************************/
/***/ ((module) => {

eval("// sum is intentionally broken so you can see errors in the tests\nconst sum = (a, b) => a + b\nconst subtract = (a, b) => a - b\n\n// these are kinda pointless I know, but it's just to simulate an async function\nconst sumAsync = (...args) => Promise.resolve(sum(...args))\nconst subtractAsync = (...args) => Promise.resolve(subtract(...args))\n\nmodule.exports = {sum, subtract, sumAsync, subtractAsync}\n\n\n//# sourceURL=webpack:///./assets/scripts/math-example/math.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/math-example/index.js");
/******/ 	
/******/ })()
;