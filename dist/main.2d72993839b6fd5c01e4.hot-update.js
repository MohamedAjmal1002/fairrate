"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebapp"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\r\n\r\n//http request\r\n\r\nconst ajax = new XMLHttpRequest();\r\najax.open(\"GET\", \"dist/spritemap.svg\", true);\r\najax.send();\r\najax.onload = function(e) {\r\n  const div = document.createElement(\"div\");\r\n  div.innerHTML = ajax.responseText;\r\n  document.body.insertBefore(div, document.body.childNodes[0]);\r\n  div.classList.add('hide-svg');\r\n}\r\n\r\n\r\nconst dropdown = document.querySelectorAll('.dropdown');\r\nlet photohead = document.querySelector('.photo');\r\nlet proofhead = document.querySelector('.proof');\r\nlet uploadhead = document.querySelector('.upload-head');\r\n\r\n\r\n\r\n\r\n//dropdown\r\n\r\ndropdown.forEach((dropElement) => {\r\n    dropElement.addEventListener('click', () =>{\r\n        dropElement.closest('.dropdown-wrapper').classList.toggle('dropdown-open')\r\n    })\r\n});\r\n\r\n//page-3 heading\r\n\r\nphotohead.addEventListener('click', () => {\r\n    uploadhead.innerHTML = 'Upload Photo Indentification'\r\n});\r\nproofhead.addEventListener('click', () => {\r\n    uploadhead.innerHTML = 'Upload Proof of Address'\r\n});\r\n\r\n//page nav\r\n\r\n\r\nconst content = document.querySelectorAll('.content');  \r\nconst buttons = document.querySelectorAll('.gotoNextPage'); \r\nbuttons.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n        let valid = false;\r\n        const currentPage = document.querySelector('.content.active');\r\n        const gotopageNumber = button.getAttribute('gotopageNumber');\r\n        const isValid = checkAllInputValid('.content.active', valid);\r\n        if(isValid) {\r\n            currentPage.classList.remove('active');\r\n            content[gotopageNumber].classList.add('active');\r\n        }\r\n    });\r\n\r\n})\r\n\r\n//valid inputs\r\n\r\n\r\nfunction checkAllInputValid(activePage, valid) {\r\n    const pageInputs = document.querySelectorAll(activePage + ' ' + '.mandatory');\r\n    const pageInputsArrary = Array.from(pageInputs);\r\n    pageInputsArrary.map((pageInput) =>{\r\n        checkInput(pageInput)\r\n    });\r\n\r\n    const errorField = document.querySelector(activePage + ' ' + '.error');\r\n    if(errorField) {\r\n        valid = false;\r\n    } else {\r\n        valid = true\r\n    }\r\n    return valid;\r\n}\r\n\r\nfunction checkInput(input){\r\n    if(input.value.trim() === ''){\r\n        onError(input);\r\n\r\n    } else {\r\n        onSuccess(input);\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction onSuccess (input){\r\n    let parent = input.parentElement;\r\n    let msgElm = parent.querySelector('small');\r\n    msgElm.style.visibility='hidden';  \r\n    input.classList.add(\"success\");  \r\n    input.classList.remove(\"error\");  \r\n}\r\nfunction onError (input){\r\n    let parent = input.parentElement;\r\n    let msgElm = parent.querySelector('small');\r\n    msgElm.style.visibility='visible';  \r\n    msgElm.innerHTML='*required'; \r\n    input.classList.add(\"error\");  \r\n    input.classList.remove(\"success\");  \r\n}\n\n//# sourceURL=webpack://webapp/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e192b41c741cc40183d")
/******/ })();
/******/ 
/******/ }
);