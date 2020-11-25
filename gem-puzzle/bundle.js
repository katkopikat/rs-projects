/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1024px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.puzzle-wrapper {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.puzzle {\r\n    margin: 0px auto;\r\n    width: 500px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.game__name {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    margin-left: 4rem;\r\n    margin-top: 2rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n}\r\n\r\n.status__item {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.time {\r\n    color: #2AB6E1;\r\n}\r\n\r\n.moves {\r\n    color: #E502F1;\r\n}\r\n\r\n.menu__btn {\r\n    color: #05D9DD;\r\n}\r\n\r\n.menu__btn:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.menu__item {\r\n    font-size: 1.1rem;\r\n    color: #4A4A4A;\r\n    margin-bottom: 0.2rem;\r\n    list-style-type: none;\r\n    opacity: 0;\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n.close--menu {\r\n    margin-top: 1rem;\r\n    transform: scale(0.7);\r\n    position: relative;\r\n    left: -12.5rem;\r\n    opacity: 0.5;\r\n}\r\n\r\n.item--new_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--save_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.1s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.item--scores--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.2s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--settings--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.3s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--rules--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.4s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--solution--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.5s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\nli:hover {\r\n    color: #05D9DD;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    user-select: none;\r\n    text-align: center;\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n}\r\n\r\n/* .cell__img4 {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n} */\r\n\r\n[data-id=\"1\"] {\r\n    background-color: #05D9DD;\r\n}\r\n\r\n[data-id=\"2\"] {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n[data-id=\"3\"] {\r\n    background-color: #287EE0;\r\n}\r\n\r\n[data-id=\"4\"] {\r\n    background-color: #354DD5;\r\n}\r\n\r\n[data-id=\"5\"] {\r\n    background-color: #24BBE0;\r\n}\r\n\r\n[data-id=\"6\"] {\r\n    background-color: #5989E5;\r\n}\r\n\r\n[data-id=\"7\"] {\r\n    background-color: #4757F2;\r\n}\r\n\r\n[data-id=\"8\"] {\r\n    background-color: #2E3AB4;\r\n}\r\n\r\n[data-id=\"9\"] {\r\n    background-color: #B93CF2;\r\n}\r\n\r\n[data-id=\"10\"] {\r\n    background-color: #8574F2;\r\n}\r\n\r\n[data-id=\"11\"] {\r\n    background-color: #3B57E6;\r\n}\r\n\r\n[data-id=\"12\"] {\r\n    background-color: #282896;\r\n}\r\n\r\n[data-id=\"13\"] {\r\n    background-color: #E502F1;\r\n}\r\n\r\n[data-id=\"14\"] {\r\n    background-color: #A10FD5;\r\n}\r\n\r\n[data-id=\"15\"] {\r\n    background-color: #631BBC;\r\n}\r\n\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    position: relative;\r\n    color: white;\r\n    font-size: 1rem;\r\n    max-width: 38vw;\r\n    margin: 2rem auto;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.score > ul {\r\n    margin-left: 2rem;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1.2rem;\r\n    list-style: none;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-left: 1.7rem;\r\n    padding-top: 1.7rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.win > h2 {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.rules p {\r\n    margin-left: 2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.winText {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.corner {\r\n    position: relative;\r\n}\r\n\r\n.line {\r\n    position: absolute;\r\n    width: 8.4rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.line--vertical {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: -4.2rem;\r\n    top: 4.15rem;\r\n}\r\n\r\n.btn__close {\r\n    position: absolute;\r\n    right: 0rem;\r\n    top: 0rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.btn__close:hover {\r\n    transform: rotate(-45deg);\r\n    transition: all 0.2s ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.close__line {\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.close-line--vert {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: 0rem;\r\n    top: 0rem;\r\n}\r\n\r\n.solve {\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings__item:hover {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n}\r\n\r\n.active_sound,\r\n.active_mode,\r\n.active_size {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n    opacity: 1;\r\n}\r\n\r\n.type_block,\r\n.size_block,\r\n.sound_block {\r\n    display: inline-block;\r\n    margin-left: 2rem;\r\n    margin-bottom: 0.8rem;\r\n}\r\n\r\n.btn__type {\r\n    padding-right: 2rem;\r\n}\r\n\r\n.btn__size {\r\n    padding-right: 2.8rem;\r\n}\r\n\r\n.btn__sound {\r\n    padding-right: 1.7rem;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.settings > span {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.inactive {\r\n    transition: all 0.3s ease-in-out;\r\n    display: none;\r\n}\r\n\r\n.cell5, .cell7 {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n.cell6, .cell8 {\r\n    background-color: #8574F2;\r\n}\r\n\r\n.cell7  {\r\n    background-color: #354DD5;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.cell8  {\r\n    background-color: #4757F2;\r\n    font-size: 1rem;\r\n}\r\n\r\n.empty {\r\n    color: #171717;\r\n    background-image: none !important;\r\n    background-color: #171717;\r\n    pointer-events: auto;\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    font-size: 1rem;\r\n    max-width: 53vw;\r\n}\r\nh2 {\r\n    font-size: 2.7rem;\r\n }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .rules,.settings,.win,.score {\r\n        font-size: 0.9rem;\r\n        max-width: 62vw;\r\n    }\r\n    h2 {font-size: 2.3rem; }\r\n\r\n    .settings >span {\r\n        font-size: 1rem;\r\n     }\r\n    }\r\n\r\n@media (max-width: 768px){\r\n    .rules, .settings, .win, .score {\r\n         font-size: 0.8rem;\r\n         max-width: 72vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .rules, .settings, .win, .score {\r\n        font-size: 0.8rem;\r\n        max-width: 80vw;\r\n}\r\n    .settings > span{\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .score>ul{\r\n        font-size: 0.8rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1024px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.puzzle-wrapper {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.puzzle {\r\n    margin: 0px auto;\r\n    width: 500px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.game__name {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    margin-left: 4rem;\r\n    margin-top: 2rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n}\r\n\r\n.status__item {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.time {\r\n    color: #2AB6E1;\r\n}\r\n\r\n.moves {\r\n    color: #E502F1;\r\n}\r\n\r\n.menu__btn {\r\n    color: #05D9DD;\r\n}\r\n\r\n.menu__btn:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.menu__item {\r\n    font-size: 1.1rem;\r\n    color: #4A4A4A;\r\n    margin-bottom: 0.2rem;\r\n    list-style-type: none;\r\n    opacity: 0;\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n.close--menu {\r\n    margin-top: 1rem;\r\n    transform: scale(0.7);\r\n    position: relative;\r\n    left: -12.5rem;\r\n    opacity: 0.5;\r\n}\r\n\r\n.item--new_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--save_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.1s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.item--scores--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.2s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--settings--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.3s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--rules--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.4s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--solution--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.5s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\nli:hover {\r\n    color: #05D9DD;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    user-select: none;\r\n    text-align: center;\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n}\r\n\r\n/* .cell__img4 {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n} */\r\n\r\n[data-id=\"1\"] {\r\n    background-color: #05D9DD;\r\n}\r\n\r\n[data-id=\"2\"] {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n[data-id=\"3\"] {\r\n    background-color: #287EE0;\r\n}\r\n\r\n[data-id=\"4\"] {\r\n    background-color: #354DD5;\r\n}\r\n\r\n[data-id=\"5\"] {\r\n    background-color: #24BBE0;\r\n}\r\n\r\n[data-id=\"6\"] {\r\n    background-color: #5989E5;\r\n}\r\n\r\n[data-id=\"7\"] {\r\n    background-color: #4757F2;\r\n}\r\n\r\n[data-id=\"8\"] {\r\n    background-color: #2E3AB4;\r\n}\r\n\r\n[data-id=\"9\"] {\r\n    background-color: #B93CF2;\r\n}\r\n\r\n[data-id=\"10\"] {\r\n    background-color: #8574F2;\r\n}\r\n\r\n[data-id=\"11\"] {\r\n    background-color: #3B57E6;\r\n}\r\n\r\n[data-id=\"12\"] {\r\n    background-color: #282896;\r\n}\r\n\r\n[data-id=\"13\"] {\r\n    background-color: #E502F1;\r\n}\r\n\r\n[data-id=\"14\"] {\r\n    background-color: #A10FD5;\r\n}\r\n\r\n[data-id=\"15\"] {\r\n    background-color: #631BBC;\r\n}\r\n\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    position: relative;\r\n    color: white;\r\n    font-size: 1rem;\r\n    max-width: 38vw;\r\n    margin: 2rem auto;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.score > ul {\r\n    margin-left: 2rem;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1.2rem;\r\n    list-style: none;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-left: 1.7rem;\r\n    padding-top: 1.7rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.win > h2 {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.rules p {\r\n    margin-left: 2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.winText {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.corner {\r\n    position: relative;\r\n}\r\n\r\n.line {\r\n    position: absolute;\r\n    width: 8.4rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.line--vertical {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: -4.2rem;\r\n    top: 4.15rem;\r\n}\r\n\r\n.btn__close {\r\n    position: absolute;\r\n    right: 0rem;\r\n    top: 0rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.btn__close:hover {\r\n    transform: rotate(-45deg);\r\n    transition: all 0.2s ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.close__line {\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.close-line--vert {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: 0rem;\r\n    top: 0rem;\r\n}\r\n\r\n.solve {\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings__item:hover {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n}\r\n\r\n.active_sound,\r\n.active_mode,\r\n.active_size {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n    opacity: 1;\r\n}\r\n\r\n.type_block,\r\n.size_block,\r\n.sound_block {\r\n    display: inline-block;\r\n    margin-left: 2rem;\r\n    margin-bottom: 0.8rem;\r\n}\r\n\r\n.btn__type {\r\n    padding-right: 2rem;\r\n}\r\n\r\n.btn__size {\r\n    padding-right: 2.8rem;\r\n}\r\n\r\n.btn__sound {\r\n    padding-right: 1.7rem;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.settings > span {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.inactive {\r\n    transition: all 0.3s ease-in-out;\r\n    display: none;\r\n}\r\n\r\n.cell5, .cell7 {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n.cell6, .cell8 {\r\n    background-color: #8574F2;\r\n}\r\n\r\n.cell7  {\r\n    background-color: #354DD5;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.cell8  {\r\n    background-color: #4757F2;\r\n    font-size: 1rem;\r\n}\r\n\r\n.empty {\r\n    color: #171717;\r\n    background-image: none !important;\r\n    background-color: #171717;\r\n    pointer-events: auto;\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    font-size: 1rem;\r\n    max-width: 53vw;\r\n}\r\nh2 {\r\n    font-size: 2.7rem;\r\n }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .rules,.settings,.win,.score {\r\n        font-size: 0.9rem;\r\n        max-width: 62vw;\r\n    }\r\n    h2 {font-size: 2.3rem; }\r\n\r\n    .settings >span {\r\n        font-size: 1rem;\r\n     }\r\n    }\r\n\r\n@media (max-width: 768px){\r\n    .rules, .settings, .win, .score {\r\n         font-size: 0.8rem;\r\n         max-width: 72vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .rules, .settings, .win, .score {\r\n        font-size: 0.8rem;\r\n        max-width: 80vw;\r\n}\r\n    .settings > span{\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .score>ul{\r\n        font-size: 0.8rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./assets/sounds/move.mp3":
/*!********************************!*\
  !*** ./assets/sounds/move.mp3 ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./assets/sounds/move.mp3");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cell
/* harmony export */ });
/* eslint-disable linebreak-style */
class Cell {
  constructor(puzzle, ind) {
    this.index = ind;
    this.puzzle = puzzle;

    this.width = this.puzzle.width / this.puzzle.size;
    this.height = this.width;
    this.container = this.createDiv();
    puzzle.container.appendChild(this.container);
  }

  createDiv() {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.classList.add('disabled');

    div.style.order = `${this.index + 1}`;
    div.dataset.id = `${this.index + 1}`;
    div.dataset.pos = `${this.index + 1}`;

    div.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    div.style.backgroundSize = `${this.puzzle.width}rem ${this.puzzle.height}rem`;

    div.innerText = `${this.index + 1}`;
    div.style.color = 'rgba(255,255,255,0.3)';

    const blockWidth = this.puzzle.width / this.puzzle.size;
    const blockHeight = this.puzzle.height / this.puzzle.size;

    const left = blockWidth * (this.index % this.puzzle.size);
    const top = blockHeight * (Math.floor(this.index / this.puzzle.size));

    div.style.height = `${this.puzzle.height / this.puzzle.size - 0.2}rem`;
    div.style.width = `${this.puzzle.width / this.puzzle.size - 0.2}rem`;

    div.style.backgroundPosition = `-${left}rem -${top}rem`;

    return div;
  }
}


/***/ }),

/***/ "./src/CellNumber.js":
/*!***************************!*\
  !*** ./src/CellNumber.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cell
/* harmony export */ });
/* eslint-disable linebreak-style */
class Cell {
  constructor(puzzle, ind) {
    this.index = ind;
    this.puzzle = puzzle;
    this.height = this.puzzle.height / this.puzzle.size;
    this.width = this.height;

    this.container = this.createDiv();
    const wrapper = document.querySelector('.puzzle');
    wrapper.appendChild(this.container);
  }

  createDiv() {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.classList.add('disabled');
    div.style.order = `${this.index + 1}`;
    div.innerText = `${this.index + 1}`;
    div.dataset.id = `${this.index + 1}`;
    div.dataset.pos = `${this.index + 1}`;
    div.style.height = `${this.puzzle.height / this.puzzle.size - 0.2}rem`;
    div.style.width = `${this.puzzle.width / this.puzzle.size - 0.2}rem`;

    if (this.puzzle.size === 5) div.classList.add('cell5');
    if (this.puzzle.size === 6) div.classList.add('cell6');
    if (this.puzzle.size === 7) div.classList.add('cell7');
    if (this.puzzle.size === 8) div.classList.add('cell8');
    return div;
  }
}


/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Game
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
class Game {
  constructor(container, width, size, mode) {
    this.parentConteiner = container;
    this.width = width;
    this.size = size;
    this.mode = mode;
    this.cells = [];
    this.arrPosition = [];
    this.countMoves = 0;
    this.limitLeft = [];
    this.limitRight = [];
    this.allowBtnForClick = [];
    this.emptyPos = null;
    this.timerId = null;
    this.isAutoClick = false;
    this.gameIsPaused = false;
    this.audioOn = true;

    this.saveGame();
    this.openMenu();
  }

  init() {
    this.container = this.createWrapper();
    this.parentConteiner.appendChild(this.container);
    this.arrPosition.splice(0, this.arrPosition.length);
  }

  createWrapper() {
    const div = document.createElement('div');
    div.className = 'puzzle';
    div.style.position = 'relative';
    div.style.margin = '2rem auto';
    div.style.width = `${this.width}rem`;
    document.querySelector('.wrapper').append(div);

    return div;
  }

  // set limites for moves
  setLimite() {
    for (let i = 1; i <= this.size * this.size; i += this.size) { // Ограничение слева
      this.limitLeft.push(i);
    }
    for (let i = this.size; i <= this.size * this.size; i += this.size) { // Ограничение справа
      this.limitRight.push(i);
    }
  }

  // get position empty elements
  getEmptyPosition() {
    this.emptyPos = document.querySelector('.empty').style.order;
    return this.emptyPos;
  }

  // make clickable items near empty item
  addClickable() {
    this.emptyPos = +this.getEmptyPosition();
    let tempTop; let tempBottom; let tempLeft; let
      tempRight;

    // top
    if ((this.emptyPos - this.size) >= 1) {
      tempTop = document.querySelector(`[data-pos="${this.emptyPos - this.size}"]`);
      tempTop.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos - this.size);
    }
    // bottom
    if (this.emptyPos + this.size <= this.size * this.size) {
      tempBottom = document.querySelector(`[data-pos="${this.emptyPos + this.size}"]`);
      tempBottom.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos + this.size);
    }
    // left
    if (!this.limitLeft.includes(this.emptyPos)) {
      tempLeft = document.querySelector(`[data-pos="${this.emptyPos - 1}"]`);
      tempLeft.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos - 1);
    }
    // right
    if (!this.limitRight.includes(this.emptyPos)) {
      tempRight = document.querySelector(`[data-pos="${this.emptyPos + 1}"]`);
      tempRight.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos + 1);
    }
    return this.allowBtnForClick;
  }

  // delete clickable property
  deleteClickable() {
    this.allowBtnForClick = [];
    document.querySelectorAll('.clickable').forEach((item) => {
      item.classList.remove('clickable');
    });
    return this.allowBtnForClick;
  }

  // ADD EVENT LISTENER FOR ITEM, MOVE ITEMS AND ANIMATION
  clickItems() {
    const empty = document.querySelector('.empty');
    const grid = document.querySelectorAll('.cell');
    const audio = document.querySelector('.audio');

    grid.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        item.style.setProperty('transition', 'all 0.3s ease-in-out');
        const margin = 0.6;
        const distanse = parseInt(item.style.width, 10) + margin;
        // animation
        if (!this.isAutoClick) {
          if (this.audioOn) {
            audio.play();
          }
          if (e.target.style.order === `${this.emptyPos + 1}`) {
            item.style.transform = `translateX(-${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos - 1}`) {
            item.style.transform = `translateX(${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos + this.size}`) {
            item.style.transform = `translateY(-${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos - this.size}`) {
            item.style.transform = `translateY(${distanse}rem)`;
          }

          // chahge flex:order
          setTimeout(() => {
            item.style.setProperty('transition', 'none');
            item.style.setProperty('transform', 'none');

            const curPos = item.style.order;
            item.style.order = this.emptyPos;
            item.dataset.pos = this.emptyPos;
            empty.style.order = curPos;
            empty.dataset.pos = curPos;
            this.arrPosition.push(`${index + 1},${curPos},${this.emptyPos}`);
            this.countMoves += 1;
            this.updateMoves();
            this.gameIsSolved();
            this.deleteClickable();
            this.addClickable();
            if (this.countMoves === 1) {
              this.startTimer();
            }
          }, 350);
        } else {
          const curPos = item.style.order;
          item.style.order = this.emptyPos;
          item.dataset.pos = this.emptyPos;
          document.querySelector('.empty').style.order = curPos;
          document.querySelector('.empty').dataset.pos = curPos;
          this.arrPosition.push(`${index + 1},${curPos},${this.emptyPos}`);
          this.deleteClickable();
          this.addClickable();
          if (this.countMoves === 1) {
            this.startTimer();
          }
        }
      });
    });
  }

  // RANDOM ITEM:
  // get random number
  static getRandomInt(min, max) {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }

  // make n-random autoclick for randomize items on the field
  randomizeItem() {
    let randomNumb;
    if (this.size === 3) randomNumb = Game.getRandomInt(30, 60);
    if (this.size === 4) randomNumb = Game.getRandomInt(100, 150);
    if (this.size === 5 || this.size === 6 || this.size === 7) {
      randomNumb = Game.getRandomInt(150, 200);
    }
    if (this.size === 8) randomNumb = Game.getRandomInt(200, 250);

    for (let i = 0; i < randomNumb; i += 1) {
      this.isAutoClick = true;
      this.autoClickItems();
    }
    this.updateAfterAutoClick();
    return this.countMoves;
  }

  // autoclick, when we push on random allow item
  autoClickItems() {
    const RandomNumbBtn = this.allowBtnForClick[Game.getRandomInt(0, this.allowBtnForClick.length)];
    const randomBtn = document.querySelector(`[data-pos="${RandomNumbBtn}"]`);
    randomBtn.click(this.clickItems);
  }

  // remove autoclick-flag
  updateAfterAutoClick() {
    this.isAutoClick = false;
    return this.isAutoClick;
  }

  // update moves
  updateMoves() {
    document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
  }

  // remove back and forth steps
  removeDuplicateSteps() {
    const arr = [...this.arrPosition].reverse();

    for (let j = 0; j < 3; j += 1) {
      for (let i = 0; i < arr.length - 1; i += 1) {
        const ArrOneStep = arr[i].split(',');
        const ArrOneStepback = arr[i + 1].split(',');

        if (ArrOneStep[0] === ArrOneStepback[0]
         && ArrOneStep[1] === ArrOneStepback[2]
         && ArrOneStep[2] === ArrOneStepback[1]) {
          arr.splice(i, 2);
        }
      }
    }
    this.arrPosition = this.arrPosition.splice(0, this.arrPosition.length);
    this.arrPosition = [...arr];
    return this.arrPosition;
  }

  // solve animation (reverse animation)
  reverseHistory() {
    this.removeDuplicateSteps();
    const history = [...this.arrPosition];

    const makeStep = (hist, i = 0) => {
      const ArrOneStep = hist[i].split(',');
      const tempEmpty = document.querySelector('.empty');
      const temp = document.querySelector(`[data-id="${ArrOneStep[0]}"]`);

      temp.style.order = `${ArrOneStep[1]}`;
      tempEmpty.style.order = `${ArrOneStep[2]}`;

      if (i === hist.length - 1) {
        return;
      }
      setTimeout(() => {
        makeStep(hist, i + 1);
      }, 500);
    };
    makeStep(history);
  }

  showSolve() {
    document.querySelector('.item--solution').addEventListener('click', () => {
      this.reverseHistory();
    });
  }

  startTimer() {
    let timeMinute = 0;
    let seconds = 0;
    let minutes = 0;
    this.timerId = setInterval(() => {
      seconds = timeMinute % 60;
      minutes = Math.trunc((timeMinute / 60) % 60);

      const secText = seconds > 9 ? `${seconds}` : `0${seconds}`;
      const minText = minutes > 9 ? `${minutes}` : `0${minutes}`;

      document.querySelector('.time').innerText = `Time: ${minText}:${secText}`;
      timeMinute += 1;
    }, 1000);
  }

  clearTimer() {
    setTimeout(() => {
      clearInterval(this.timerId);
    }, 0);
  }

  saveGame() {
    document.querySelector('.item--save_game').addEventListener('click', () => {
      localStorage.setItem('savedgame', this.arrPosition);
    });
  }

  /* loadGame(){
      let lastGameStr = localStorage.getItem('savedgame');
          let lastGameArr = lastGameStr.match(/\d{1,2}\,\d{1,2}\,\d{1,2}/g);

          for (let i = 0; i < lastGameArr.length; i++){
              let ArrOneStep = lastGameArr[i].split(',');
              console.log(ArrOneStep)
              let temp = document.querySelector(`[data-id="${ArrOneStep[0]}"]`);
              temp.style.order = `${ArrOneStep[1]}`;
              temp.dataset.pos = `${ArrOneStep[1]}`;
              let tempEmpty = document.querySelector('.empty');
              tempEmpty.style.order = `${ArrOneStep[2]}`;
              tempEmpty.dataset.pos = `${ArrOneStep[2]}`;
              this.deleteClickable();
              this.addClickable();
          }
  } */

  gameIsSolved() {
    for (let i = 1; i <= this.size * this.size; i += 1) {
      const { pos } = document.querySelector(`[data-pos="${i}"]`).dataset;
      const { id } = document.querySelector(`[data-pos="${i}"]`).dataset;
      if (pos === id && i === this.size * this.size) {
        this.showWinMessage();
        this.clearTimer();
      } else if (pos !== id) {
        break;
      }
    }
  }

  openMenu() {
    const listMenu = ['new_game', 'save_game', 'scores', 'settings', 'rules', 'solution'];
    document.querySelector('.menu__btn').addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('inactive');
      listMenu.forEach((item) => {
        document.querySelector(`.item--${item}`).classList.add(`item--${item}--open`);
      });
    });

    Game.showRules();
    Game.showScore();
    Game.closeMenu();
    return this.gameIsPaused;
  }

  static closeMenu() {
    document.querySelector('.close--menu').addEventListener('click', () => {
      document.querySelector('.menu').classList.add('inactive');
    });
  }

  showWinMessage() {
    const win = document.createElement('div');
    win.classList.add('win');
    const time = document.querySelector('.time').innerText.replace('Time:', '');
    win.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>You won!</h2>
            <p class="winText">You won in ${time} and ${this.countMoves} moves!</p>
            <span class="btn__close btn__close--win">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;

    document.querySelector('.header').after(win);
    setTimeout(() => {
      document.querySelector('.btn__close--win').addEventListener('click', () => {
        win.remove();
      });
    }, 500);
    this.saveResult();
  }

  static showRules() {
    document.querySelector('.item--rules').addEventListener('click', () => {
      const rules = document.createElement('div');
      rules.classList.add('rules');

      rules.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Rules</h2>
             <p>The object of the puzzle is to place the tiles in order<br>
                by making sliding moves that use the empty space.<br>
                <br>
                You can save your game and load it later.<br>
                Or you can just use pause button.<br>
                Also you can choose game field size and mode (picture or number),<br>
                and turn on or tutn off sounds in Settings.<br>
                Have a nice game!</p>
            <span class="btn__close btn__close--rules">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
      document.querySelector('.header').after(rules);

      setTimeout(() => {
        document.querySelector('.btn__close--rules').addEventListener('click', () => {
          rules.remove();
          document.querySelector('.menu').classList.add('inactive');
        });
      }, 1000);
    });
  }

  saveResult() {
    let countPlace = 1;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key.match(/place/)) {
        countPlace += 1;
      }
    }
    const time = document.querySelector('.time').innerText.replace('Time:', '');
    localStorage.setItem(`place${countPlace}`,
      `${this.countMoves}_________${time}_______${this.size}_______${this.mode}`);
  }

  static showScore() {
    document.querySelector('.item--scores').addEventListener('click', () => {
      const score = document.createElement('div');
      score.classList.add('score');

      score.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Best scores</h2>
         <ul class="scores__list">
         <li class="score_position position_heading">#_______Steps_______Time_______Field_______Mode</li>
         </ul>
            <span class="btn__close btn__close--score">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
      document.querySelector('.header').after(score);

      const historyArr = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (key.match(/place/)) {
          historyArr.push(localStorage.getItem(`place${i + 1}`));
        }
      }

      const sortArrayByDigits = (array) => {
        const reg = /\D/g;
        array.sort((a, b) => (parseInt(a.replace(reg, ''), 10) - parseInt(b.replace(reg, ''), 10)));
        return (array);
      };

      sortArrayByDigits(historyArr);

      for (let i = 0; i < historyArr.length; i += 1) {
        if (historyArr.length === 0) {
          const scoreLi = document.createElement('li');
          scoreLi.classList.add('score_position none_score');
          scoreLi.innerText = 'No results yet';
        }
        if (i < 10) {
          // document.querySelector('.none_score').remove();
          const scoreLi = document.createElement('li');
          scoreLi.classList.add('score_position');
          scoreLi.classList.add(`position${i + 1}`);

          const curPos = document.querySelector('.scores__list').lastChild;
          curPos.after(scoreLi);
          scoreLi.innerText = `${i + 1}_________${historyArr[i]}`;
        }
      }
      setTimeout(() => {
        document.querySelector('.btn__close--score').addEventListener('click', () => {
          score.remove();
          document.querySelector('.menu').classList.add('inactive');
        });
      }, 500);
    });
  }
}


/***/ }),

/***/ "./src/NumberPuzzle.js":
/*!*****************************!*\
  !*** ./src/NumberPuzzle.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ NumberPuzzle
/* harmony export */ });
/* harmony import */ var _CellNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellNumber */ "./src/CellNumber.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* eslint-disable linebreak-style */



class NumberPuzzle extends _Game__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(container, width, size, mode) {
    super(container, width, size, mode);
    this.parentConteiner = container;
    this.width = width;
    this.height = width;
    this.size = size;
    this.mode = mode;
    this.cells = [];
    this.arrPosition = [];
    this.limitLeft = [];
    this.limitRight = [];
    this.allowBtnForClick = [];
    this.init();
    this.generateCells();
    this.setLimite();
    this.addClickable();
    this.randomizeItem();
    this.countMoves = 0;
    this.showSolve();
  }

  generateCells() {
    for (let i = 0; i < this.size * this.size; i += 1) {
      this.cells.push(new _CellNumber__WEBPACK_IMPORTED_MODULE_0__.default(this, i));
    }
    document.querySelector(`[data-id="${this.size * this.size}"]`).classList.add('empty');
    this.clickItems();
  }
}


/***/ }),

/***/ "./src/PicturePuzzle.js":
/*!******************************!*\
  !*** ./src/PicturePuzzle.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PicturePuzzle
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./src/Cell.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* eslint-disable linebreak-style */



class PicturePuzzle extends _Game__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(container, imageSrc, width, size, mode) {
    super(container, width, size, mode);
    this.imageSrc = imageSrc;
    this.parentConteiner = container;
    this.width = width;
    this.height = width;
    this.size = size;
    this.mode = mode;
    this.cells = [];
    this.arrPosition = [];
    this.countMoves = 0;
    this.limitLeft = [];
    this.limitRight = [];
    this.allowBtnForClick = [];

    this.init();

    const img = new Image();
    img.onload = () => {
      this.height = (img.height * this.width) / img.width;
      this.container.style.width = `${this.width}rem`;
      this.container.style.height = `${this.height}rem`;
    };

    img.src = this.imageSrc;
    this.generateCells();
    this.emptyPos = +this.getEmptyPosition();
    this.setLimite();
    this.addClickable();
    this.randomizeItem();
    this.showSolve();
  }

  generateCells() {
    for (let i = 0; i < this.size * this.size; i += 1) {
      this.cells.push(new _Cell__WEBPACK_IMPORTED_MODULE_0__.default(this, i));
    }
    document.querySelector(`[data-id="${this.size * this.size}"]`).classList.add('empty');
    this.clickItems();
  }
}


/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createEnvironment
/* harmony export */ });
/* eslint-disable linebreak-style */
function createEnvironment() {
  const content = document.createElement('div');
  content.className = 'content';
  document.body.prepend(content);

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  content.prepend(wrapper);

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = `<span class="header__wrapper"> 
                    <h1 class="game__name">#Gem<br> Puzzle</h1>
                    <span class="status">
                    <span class="status__item menu__btn">Menu</span>
                    <span class="status__item moves">Moves: 0</span>
                    <span class="status__item time">Time: 00:00</span>       
                    <ul class="menu inactive">
                        <li class="menu__item item--new_game">New game</li>
                        <li class="menu__item item--save_game">Save game</li>
                        <li class="menu__item item--scores">Best scores</li>
                        <li class="menu__item item--settings">Settings</li>
                        <li class="menu__item item--solution">Solution</li>
                        <li class="menu__item item--rules">Rules</li>
                        <li class="menu__item close--menu">   <span class="btn__close">
                        <span class="close__line close-line--vert"></span>
                        <span class="close__line close-line--horiz"></span>
                    </span></li>
                 
                    </ul>
                    </span>
                    <audio class="audio" src="assets/sounds/move.mp3"></audio>`;
  wrapper.prepend(header);

  const puzzleContainer = document.createElement('div');
  puzzleContainer.className = 'puzzle-wrapper';
  wrapper.append(puzzleContainer);
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/move.mp3 */ "./assets/sounds/move.mp3");
/* harmony import */ var _PicturePuzzle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PicturePuzzle */ "./src/PicturePuzzle.js");
/* harmony import */ var _NumberPuzzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumberPuzzle */ "./src/NumberPuzzle.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "./src/environment.js");
/* eslint-disable linebreak-style */






let mode = '';
let size = 4;

function createNumberPuzzle() {
  const numberPuzzle = new _NumberPuzzle__WEBPACK_IMPORTED_MODULE_3__.default(
    document.querySelector('.puzzle-wrapper'), 30, size, 'number',
  );
  mode = 'number';
  return mode;
}

function createPictirePuzzle() {
  const setRandomImg = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const randomImg = setRandomImg(1, 151);

  const picturePuzzle = new _PicturePuzzle__WEBPACK_IMPORTED_MODULE_2__.default(
    document.querySelector('.puzzle-wrapper'),
    `https://raw.githubusercontent.com/irinainina/image-data/master/box/${randomImg}.jpg`,
    30, size, 'picture',
  );
  mode = 'picture';
  return mode;
}

function showSettings() {
  document.querySelector('.item--settings').addEventListener('click', () => {
    const settings = document.createElement('div');
    settings.classList.add('settings');

    settings.innerHTML = `<span class="corner">
            <span class="line line--horizontal"></span>
            <span class="line line--vertical"></span>
        </span>
        <h2>Settings</h2>
        <span class="type_block">
         <span class="btn__type">mode: </span>
            <span class="settings__item mode--number active_mode" data-mode="active_mode">number</span>
            <span class="settings__item mode--picture" data-mode="inactive_mode">picture</span>
        </span><br>
        <span class="size_block">
        <span class="btn__size">field: </span>
            <span class="settings__item size__item size3" data-size="inactive_size"> 3x3 </span>
            <span class="settings__item size__item size4 active_size" data-size="active_size"> 4x4 </span>
            <span class="settings__item size__item size5" data-size="inactive_size"> 5x5 </span>
            <span class="settings__item size__item size6" data-size="inactive_size"> 6x6 </span>
            <span class="settings__item size__item size7" data-size="inactive_size"> 7x7 </span>
            <span class="settings__item size__item size8" data-size="inactive_size"> 8x8 </span>
</span><br>
<span class="sound_block">
        <span class="btn__sound">sound: </span>
            <span class="settings__item sound--on active_sound " data-sound="active_sound">on</span>
            <span class="settings__item sound--off" data-sound="inactive_sound">off</span>
</span>
        <span class="btn__close close-settings">
            <span class="close__line close-line--vert"></span>
            <span class="close__line close-line--horiz"></span>
        </span>`;
    document.querySelector('.header').after(settings);

    setTimeout(() => {
      const modePicture = document.querySelector('.mode--picture');
      const modeNumber = document.querySelector('.mode--number');
      const sizes = document.querySelectorAll('.size__item');
      const soundOn = document.querySelector('.sound--on');
      const soundOff = document.querySelector('.sound--off');
      const audio = document.querySelector('.audio');

      sizes.forEach((item, index) => {
        item.addEventListener('click', () => {
          size = index + 3;
          document.querySelector('.active_size').classList.remove('active_size');
          item.classList.add('active_size');
          document.querySelector('.puzzle').remove();
          if (mode === 'number') {
            createNumberPuzzle();
          } else createPictirePuzzle();
        });
      });

      modeNumber.addEventListener('click', () => {
        mode = 'number';
        modePicture.classList.remove('active_mode');
        modeNumber.classList.add('active_mode');
        document.querySelector('.puzzle').remove();
        createNumberPuzzle();
        return mode;
      });

      modePicture.addEventListener('click', () => {
        mode = 'picture';
        modePicture.classList.add('active_mode');
        modeNumber.classList.remove('active_mode');
        document.querySelector('.puzzle').remove();
        createPictirePuzzle();
        return mode;
      });

      // sound off
      soundOff.addEventListener('click', () => {
        soundOn.classList.remove('active_sound');
        soundOff.classList.add('active_sound');
        audio.muted = true;
        // this.audioOn = false;
      });

      // sound on
      soundOn.addEventListener('click', () => {
        soundOff.classList.remove('active_sound');
        soundOn.classList.add('active_sound');
        audio.muted = false;

        // this.audioOn = true;
      });

      document.querySelector('.close-settings').addEventListener('click', () => {
        settings.remove();
      });
    }, 500);
  });
}

function newGame() {
  document.querySelector('.item--new_game').addEventListener('click', () => {
    if (mode === 'number') {
      document.querySelector('.puzzle').remove();
      createNumberPuzzle();
    } else {
      document.querySelector('.puzzle').remove();
      createPictirePuzzle();
    }
  });
}

(0,_environment__WEBPACK_IMPORTED_MODULE_4__.default)();
createNumberPuzzle();
showSettings();
newGame();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL2Fzc2V0cy9zb3VuZHMvbW92ZS5tcDMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL0NlbGxOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvTnVtYmVyUHV6emxlLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvUGljdHVyZVB1enpsZS5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW0tcHV6emxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGtCQUFrQixtQkFBbUIsK0JBQStCLHFFQUFxRSxLQUFLLGNBQWMsa0NBQWtDLEtBQUssa0JBQWtCLG9CQUFvQix1QkFBdUIsS0FBSyxrQkFBa0IsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5Qix5Q0FBeUMsS0FBSyxpQkFBaUIseUJBQXlCLHFCQUFxQixzQkFBc0IsMkJBQTJCLHdCQUF3QixLQUFLLHFCQUFxQiwyQ0FBMkMscUJBQXFCLHdCQUF3Qix5QkFBeUIsS0FBSyxpQkFBaUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsK0JBQStCLDBCQUEwQixxQkFBcUIsS0FBSyx1QkFBdUIsMkJBQTJCLEtBQUssZUFBZSx1QkFBdUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssb0JBQW9CLHVCQUF1QixLQUFLLDBCQUEwQixxQkFBcUIsd0JBQXdCLEtBQUssZUFBZSx5Q0FBeUMsNEJBQTRCLEtBQUsscUJBQXFCLDBCQUEwQix1QkFBdUIsOEJBQThCLDhCQUE4QixtQkFBbUIsNEJBQTRCLEtBQUssc0JBQXNCLHlCQUF5Qiw4QkFBOEIsMkJBQTJCLHVCQUF1QixxQkFBcUIsS0FBSywrQkFBK0IsNERBQTRELHlCQUF5QixtQkFBbUIsS0FBSyxnQ0FBZ0MsOERBQThELHlCQUF5QixtQkFBbUIsU0FBUyw2QkFBNkIsOERBQThELHlCQUF5QixtQkFBbUIsS0FBSywrQkFBK0IsOERBQThELHlCQUF5QixtQkFB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LEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFP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QUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQSw2Qjs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHV6emxlLXdyYXBwZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnB1enpsZSB7XFxyXFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX19uYW1lIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c19faXRlbSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgICBjb2xvcjogIzJBQjZFMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVzIHtcXHJcXG4gICAgY29sb3I6ICNFNTAyRjE7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19idG4ge1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2J0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjb2xvcjogIzRBNEE0QTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS0tbWVudSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAtMTIuNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tbmV3X2dhbWUtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMHM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zYXZlX2dhbWUtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC4xcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNjb3Jlcy0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjJzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tc2V0dGluZ3MtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC4zcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXJ1bGVzLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuNHM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zb2x1dGlvbi0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjVzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMDVEOUREO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiAyNCU7XFxyXFxuICAgIHdpZHRoOiAyNCU7XFxyXFxuICAgIG1hcmdpbjogMC4xcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNlbGxfX2ltZzQge1xcclxcbiAgICBoZWlnaHQ6IDI0JTtcXHJcXG4gICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgbWFyZ2luOiAwLjFyZW07XFxyXFxufSAqL1xcclxcblxcclxcbltkYXRhLWlkPVxcXCIxXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVEOUREO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBQjZFMTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjNcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODdFRTA7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0REQ1O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiNVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0QkJFMDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjZcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTg5RTU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI3XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1N0YyO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiOFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFM0FCNDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjlcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOTNDRjI7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxMFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzRGMjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjExXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1N0U2O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTJcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4OTY7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxM1xcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDJGMTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjE0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTEwRkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTVcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzFCQkM7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcyxcXHJcXG4uc2V0dGluZ3MsXFxyXFxuLndpbixcXHJcXG4uc2NvcmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM4dnc7XFxyXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUgPiB1bCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luID4gaDIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzIHAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ybmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDguNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjE1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUtLXZlcnRpY2FsIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC00LjJyZW07XFxyXFxuICAgIHRvcDogNC4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwcmVtO1xcclxcbiAgICB0b3A6IDByZW07XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG5fX2Nsb3NlOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VfX2xpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbGluZS0tdmVydCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwcmVtO1xcclxcbiAgICB0b3A6IDByZW07XFxyXFxufVxcclxcblxcclxcbi5zb2x2ZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5nc19faXRlbTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVfc291bmQsXFxyXFxuLmFjdGl2ZV9tb2RlLFxcclxcbi5hY3RpdmVfc2l6ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2Jsb2NrLFxcclxcbi5zaXplX2Jsb2NrLFxcclxcbi5zb3VuZF9ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdHlwZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3NpemUge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3NvdW5kIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MgPiBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw1LCAuY2VsbDcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDYsIC5jZWxsOCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTc0RjI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsNyAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0REQ1O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw4ICB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU3RjI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gICAgY29sb3I6ICMxNzE3MTc7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xcclxcbi5ydWxlcyxcXHJcXG4uc2V0dGluZ3MsXFxyXFxuLndpbixcXHJcXG4uc2NvcmUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1heC13aWR0aDogNTN2dztcXHJcXG59XFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAucnVsZXMsLnNldHRpbmdzLC53aW4sLnNjb3JlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA2MnZ3O1xcclxcbiAgICB9XFxyXFxuICAgIGgyIHtmb250LXNpemU6IDIuM3JlbTsgfVxcclxcblxcclxcbiAgICAuc2V0dGluZ3MgPnNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLnJ1bGVzLCAuc2V0dGluZ3MsIC53aW4sIC5zY29yZSB7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgICAgICAgbWF4LXdpZHRoOiA3MnZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxyXFxuICAgIC5ydWxlcywgLnNldHRpbmdzLCAud2luLCAuc2NvcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDgwdnc7XFxyXFxufVxcclxcbiAgICAuc2V0dGluZ3MgPiBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNjb3JlPnVse1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFD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LGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixvQkFBb0I7O0FBRXhCOztBQUVBO0FBQ0E7Ozs7SUFJSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0EsSUFBSSxpQkFBaUIsRUFBRTs7SUFFdkI7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7O0FBRUo7SUFDSTtTQUNLLGlCQUFpQjtTQUNqQixlQUFlO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0FBQ3ZCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wdXp6bGUtd3JhcHBlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHV6emxlIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX25hbWUge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzX19pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuICAgIGNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZXMge1xcclxcbiAgICBjb2xvcjogI0U1MDJGMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2J0biB7XFxyXFxuICAgIGNvbG9yOiAjMDVEOUREO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGNvbG9yOiAjNEE0QTRBO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLS1tZW51IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IC0xMi41cmVtO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1uZXdfZ2FtZS0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNhdmVfZ2FtZS0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjFzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tc2NvcmVzLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuMnM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zZXR0aW5ncy0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjNzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tcnVsZXMtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC40cztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNvbHV0aW9uLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuNXM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBoZWlnaHQ6IDI0JTtcXHJcXG4gICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgbWFyZ2luOiAwLjFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbF9faW1nNCB7XFxyXFxuICAgIGhlaWdodDogMjQlO1xcclxcbiAgICB3aWR0aDogMjQlO1xcclxcbiAgICBtYXJnaW46IDAuMXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjFcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNUQ5REQ7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIyXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiM1xcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4N0VFMDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTRERDU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI1XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRCQkUwO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiNlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5ODlFNTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjdcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU3RjI7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI4XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzQUI0O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiOVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I5M0NGMjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjEwXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU3NEYyO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTFcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU3RTY7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxMlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Mjg5NjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjEzXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUwMkYxO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMTBGRDU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxNVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzMUJCQztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLFxcclxcbi5zZXR0aW5ncyxcXHJcXG4ud2luLFxcclxcbi5zY29yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzh2dztcXHJcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZSA+IHVsIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53aW4gPiBoMiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMgcCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi53aW5UZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb3JuZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogOC40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZS0tdmVydGljYWwge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTQuMnJlbTtcXHJcXG4gICAgdG9wOiA0LjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX19jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDByZW07XFxyXFxuICAgIHRvcDogMHJlbTtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fY2xvc2U6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZV9fbGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMC4xNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1saW5lLS12ZXJ0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDByZW07XFxyXFxuICAgIHRvcDogMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvbHZlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzX19pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZV9zb3VuZCxcXHJcXG4uYWN0aXZlX21vZGUsXFxyXFxuLmFjdGl2ZV9zaXplIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfYmxvY2ssXFxyXFxuLnNpemVfYmxvY2ssXFxyXFxuLnNvdW5kX2Jsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190eXBlIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fc2l6ZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fc291bmQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyA+IHNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDUsIC5jZWxsNyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUI2RTE7XFxyXFxufVxcclxcblxcclxcbi5jZWxsNiwgLmNlbGw4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzRGMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw3ICB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTRERDU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDggIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTdGMjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHkge1xcclxcbiAgICBjb2xvcjogIzE3MTcxNztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuLnJ1bGVzLFxcclxcbi5zZXR0aW5ncyxcXHJcXG4ud2luLFxcclxcbi5zY29yZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1M3Z3O1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5ydWxlcywuc2V0dGluZ3MsLndpbiwuc2NvcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYydnc7XFxyXFxuICAgIH1cXHJcXG4gICAgaDIge2ZvbnQtc2l6ZTogMi4zcmVtOyB9XFxyXFxuXFxyXFxuICAgIC5zZXR0aW5ncyA+c3BhbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAucnVsZXMsIC5zZXR0aW5ncywgLndpbiwgLnNjb3JlIHtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgICBtYXgtd2lkdGg6IDcydnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgLnJ1bGVzLCAuc2V0dGluZ3MsIC53aW4sIC5zY29yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODB2dztcXHJcXG59XFxyXFxuICAgIC5zZXR0aW5ncyA+IHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2NvcmU+dWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9zb3VuZHMvbW92ZS5tcDNcIjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHB1enpsZSwgaW5kKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kO1xyXG4gICAgdGhpcy5wdXp6bGUgPSBwdXp6bGU7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMucHV6emxlLndpZHRoIC8gdGhpcy5wdXp6bGUuc2l6ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jcmVhdGVEaXYoKTtcclxuICAgIHB1enpsZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGl2KCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgZGl2LnN0eWxlLm9yZGVyID0gYCR7dGhpcy5pbmRleCArIDF9YDtcclxuICAgIGRpdi5kYXRhc2V0LmlkID0gYCR7dGhpcy5pbmRleCArIDF9YDtcclxuICAgIGRpdi5kYXRhc2V0LnBvcyA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcblxyXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLnB1enpsZS5pbWFnZVNyY30pYDtcclxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGAke3RoaXMucHV6emxlLndpZHRofXJlbSAke3RoaXMucHV6emxlLmhlaWdodH1yZW1gO1xyXG5cclxuICAgIGRpdi5pbm5lclRleHQgPSBgJHt0aGlzLmluZGV4ICsgMX1gO1xyXG4gICAgZGl2LnN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zKSc7XHJcblxyXG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IHRoaXMucHV6emxlLndpZHRoIC8gdGhpcy5wdXp6bGUuc2l6ZTtcclxuICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gdGhpcy5wdXp6bGUuaGVpZ2h0IC8gdGhpcy5wdXp6bGUuc2l6ZTtcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gYmxvY2tXaWR0aCAqICh0aGlzLmluZGV4ICUgdGhpcy5wdXp6bGUuc2l6ZSk7XHJcbiAgICBjb25zdCB0b3AgPSBibG9ja0hlaWdodCAqIChNYXRoLmZsb29yKHRoaXMuaW5kZXggLyB0aGlzLnB1enpsZS5zaXplKSk7XHJcblxyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMucHV6emxlLmhlaWdodCAvIHRoaXMucHV6emxlLnNpemUgLSAwLjJ9cmVtYDtcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMucHV6emxlLndpZHRoIC8gdGhpcy5wdXp6bGUuc2l6ZSAtIDAuMn1yZW1gO1xyXG5cclxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgLSR7bGVmdH1yZW0gLSR7dG9wfXJlbWA7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHB1enpsZSwgaW5kKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kO1xyXG4gICAgdGhpcy5wdXp6bGUgPSBwdXp6bGU7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMucHV6emxlLmhlaWdodCAvIHRoaXMucHV6emxlLnNpemU7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZURpdigpO1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUnKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGl2KCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICBkaXYuc3R5bGUub3JkZXIgPSBgJHt0aGlzLmluZGV4ICsgMX1gO1xyXG4gICAgZGl2LmlubmVyVGV4dCA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcbiAgICBkaXYuZGF0YXNldC5pZCA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcbiAgICBkaXYuZGF0YXNldC5wb3MgPSBgJHt0aGlzLmluZGV4ICsgMX1gO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMucHV6emxlLmhlaWdodCAvIHRoaXMucHV6emxlLnNpemUgLSAwLjJ9cmVtYDtcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMucHV6emxlLndpZHRoIC8gdGhpcy5wdXp6bGUuc2l6ZSAtIDAuMn1yZW1gO1xyXG5cclxuICAgIGlmICh0aGlzLnB1enpsZS5zaXplID09PSA1KSBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbDUnKTtcclxuICAgIGlmICh0aGlzLnB1enpsZS5zaXplID09PSA2KSBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbDYnKTtcclxuICAgIGlmICh0aGlzLnB1enpsZS5zaXplID09PSA3KSBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbDcnKTtcclxuICAgIGlmICh0aGlzLnB1enpsZS5zaXplID09PSA4KSBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbDgnKTtcclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHdpZHRoLCBzaXplLCBtb2RlKSB7XHJcbiAgICB0aGlzLnBhcmVudENvbnRlaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xyXG4gICAgdGhpcy5jZWxscyA9IFtdO1xyXG4gICAgdGhpcy5hcnJQb3NpdGlvbiA9IFtdO1xyXG4gICAgdGhpcy5jb3VudE1vdmVzID0gMDtcclxuICAgIHRoaXMubGltaXRMZWZ0ID0gW107XHJcbiAgICB0aGlzLmxpbWl0UmlnaHQgPSBbXTtcclxuICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljayA9IFtdO1xyXG4gICAgdGhpcy5lbXB0eVBvcyA9IG51bGw7XHJcbiAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgdGhpcy5pc0F1dG9DbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lSXNQYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXVkaW9PbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zYXZlR2FtZSgpO1xyXG4gICAgdGhpcy5vcGVuTWVudSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jcmVhdGVXcmFwcGVyKCk7XHJcbiAgICB0aGlzLnBhcmVudENvbnRlaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmFyclBvc2l0aW9uLnNwbGljZSgwLCB0aGlzLmFyclBvc2l0aW9uLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVXcmFwcGVyKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3B1enpsZSc7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpbiA9ICcycmVtIGF1dG8nO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH1yZW1gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0IGxpbWl0ZXMgZm9yIG1vdmVzXHJcbiAgc2V0TGltaXRlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5zaXplICogdGhpcy5zaXplOyBpICs9IHRoaXMuc2l6ZSkgeyAvLyDQntCz0YDQsNC90LjRh9C10L3QuNC1INGB0LvQtdCy0LBcclxuICAgICAgdGhpcy5saW1pdExlZnQucHVzaChpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSB0aGlzLnNpemU7IGkgPD0gdGhpcy5zaXplICogdGhpcy5zaXplOyBpICs9IHRoaXMuc2l6ZSkgeyAvLyDQntCz0YDQsNC90LjRh9C10L3QuNC1INGB0L/RgNCw0LLQsFxyXG4gICAgICB0aGlzLmxpbWl0UmlnaHQucHVzaChpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGdldCBwb3NpdGlvbiBlbXB0eSBlbGVtZW50c1xyXG4gIGdldEVtcHR5UG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLmVtcHR5UG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jykuc3R5bGUub3JkZXI7XHJcbiAgICByZXR1cm4gdGhpcy5lbXB0eVBvcztcclxuICB9XHJcblxyXG4gIC8vIG1ha2UgY2xpY2thYmxlIGl0ZW1zIG5lYXIgZW1wdHkgaXRlbVxyXG4gIGFkZENsaWNrYWJsZSgpIHtcclxuICAgIHRoaXMuZW1wdHlQb3MgPSArdGhpcy5nZXRFbXB0eVBvc2l0aW9uKCk7XHJcbiAgICBsZXQgdGVtcFRvcDsgbGV0IHRlbXBCb3R0b207IGxldCB0ZW1wTGVmdDsgbGV0XHJcbiAgICAgIHRlbXBSaWdodDtcclxuXHJcbiAgICAvLyB0b3BcclxuICAgIGlmICgodGhpcy5lbXB0eVBvcyAtIHRoaXMuc2l6ZSkgPj0gMSkge1xyXG4gICAgICB0ZW1wVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHt0aGlzLmVtcHR5UG9zIC0gdGhpcy5zaXplfVwiXWApO1xyXG4gICAgICB0ZW1wVG9wLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xyXG4gICAgICB0aGlzLmFsbG93QnRuRm9yQ2xpY2sucHVzaCh0aGlzLmVtcHR5UG9zIC0gdGhpcy5zaXplKTtcclxuICAgIH1cclxuICAgIC8vIGJvdHRvbVxyXG4gICAgaWYgKHRoaXMuZW1wdHlQb3MgKyB0aGlzLnNpemUgPD0gdGhpcy5zaXplICogdGhpcy5zaXplKSB7XHJcbiAgICAgIHRlbXBCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke3RoaXMuZW1wdHlQb3MgKyB0aGlzLnNpemV9XCJdYCk7XHJcbiAgICAgIHRlbXBCb3R0b20uY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljay5wdXNoKHRoaXMuZW1wdHlQb3MgKyB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG4gICAgLy8gbGVmdFxyXG4gICAgaWYgKCF0aGlzLmxpbWl0TGVmdC5pbmNsdWRlcyh0aGlzLmVtcHR5UG9zKSkge1xyXG4gICAgICB0ZW1wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7dGhpcy5lbXB0eVBvcyAtIDF9XCJdYCk7XHJcbiAgICAgIHRlbXBMZWZ0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xyXG4gICAgICB0aGlzLmFsbG93QnRuRm9yQ2xpY2sucHVzaCh0aGlzLmVtcHR5UG9zIC0gMSk7XHJcbiAgICB9XHJcbiAgICAvLyByaWdodFxyXG4gICAgaWYgKCF0aGlzLmxpbWl0UmlnaHQuaW5jbHVkZXModGhpcy5lbXB0eVBvcykpIHtcclxuICAgICAgdGVtcFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHt0aGlzLmVtcHR5UG9zICsgMX1cIl1gKTtcclxuICAgICAgdGVtcFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xyXG4gICAgICB0aGlzLmFsbG93QnRuRm9yQ2xpY2sucHVzaCh0aGlzLmVtcHR5UG9zICsgMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hbGxvd0J0bkZvckNsaWNrO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZXRlIGNsaWNrYWJsZSBwcm9wZXJ0eVxyXG4gIGRlbGV0ZUNsaWNrYWJsZSgpIHtcclxuICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljayA9IFtdO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUnKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWxsb3dCdG5Gb3JDbGljaztcclxuICB9XHJcblxyXG4gIC8vIEFERCBFVkVOVCBMSVNURU5FUiBGT1IgSVRFTSwgTU9WRSBJVEVNUyBBTkQgQU5JTUFUSU9OXHJcbiAgY2xpY2tJdGVtcygpIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jyk7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvJyk7XHJcblxyXG4gICAgZ3JpZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgJ2FsbCAwLjNzIGVhc2UtaW4tb3V0Jyk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMC42O1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbnNlID0gcGFyc2VJbnQoaXRlbS5zdHlsZS53aWR0aCwgMTApICsgbWFyZ2luO1xyXG4gICAgICAgIC8vIGFuaW1hdGlvblxyXG4gICAgICAgIGlmICghdGhpcy5pc0F1dG9DbGljaykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXVkaW9Pbikge1xyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuc3R5bGUub3JkZXIgPT09IGAke3RoaXMuZW1wdHlQb3MgKyAxfWApIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtkaXN0YW5zZX1yZW0pYDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuc3R5bGUub3JkZXIgPT09IGAke3RoaXMuZW1wdHlQb3MgLSAxfWApIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2Rpc3RhbnNlfXJlbSlgO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5zdHlsZS5vcmRlciA9PT0gYCR7dGhpcy5lbXB0eVBvcyArIHRoaXMuc2l6ZX1gKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7ZGlzdGFuc2V9cmVtKWA7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnN0eWxlLm9yZGVyID09PSBgJHt0aGlzLmVtcHR5UG9zIC0gdGhpcy5zaXplfWApIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2Rpc3RhbnNlfXJlbSlgO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNoYWhnZSBmbGV4Om9yZGVyXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsICdub25lJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJQb3MgPSBpdGVtLnN0eWxlLm9yZGVyO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLm9yZGVyID0gdGhpcy5lbXB0eVBvcztcclxuICAgICAgICAgICAgaXRlbS5kYXRhc2V0LnBvcyA9IHRoaXMuZW1wdHlQb3M7XHJcbiAgICAgICAgICAgIGVtcHR5LnN0eWxlLm9yZGVyID0gY3VyUG9zO1xyXG4gICAgICAgICAgICBlbXB0eS5kYXRhc2V0LnBvcyA9IGN1clBvcztcclxuICAgICAgICAgICAgdGhpcy5hcnJQb3NpdGlvbi5wdXNoKGAke2luZGV4ICsgMX0sJHtjdXJQb3N9LCR7dGhpcy5lbXB0eVBvc31gKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE1vdmVzICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW92ZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSXNTb2x2ZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDbGlja2FibGUoKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGlja2FibGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRNb3ZlcyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAzNTApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJQb3MgPSBpdGVtLnN0eWxlLm9yZGVyO1xyXG4gICAgICAgICAgaXRlbS5zdHlsZS5vcmRlciA9IHRoaXMuZW1wdHlQb3M7XHJcbiAgICAgICAgICBpdGVtLmRhdGFzZXQucG9zID0gdGhpcy5lbXB0eVBvcztcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpLnN0eWxlLm9yZGVyID0gY3VyUG9zO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5JykuZGF0YXNldC5wb3MgPSBjdXJQb3M7XHJcbiAgICAgICAgICB0aGlzLmFyclBvc2l0aW9uLnB1c2goYCR7aW5kZXggKyAxfSwke2N1clBvc30sJHt0aGlzLmVtcHR5UG9zfWApO1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVDbGlja2FibGUoKTtcclxuICAgICAgICAgIHRoaXMuYWRkQ2xpY2thYmxlKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5jb3VudE1vdmVzID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFJBTkRPTSBJVEVNOlxyXG4gIC8vIGdldCByYW5kb20gbnVtYmVyXHJcbiAgc3RhdGljIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgY29uc3QgbWluTnVtID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBjb25zdCBtYXhOdW0gPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heE51bSAtIG1pbk51bSkpICsgbWluTnVtO1xyXG4gIH1cclxuXHJcbiAgLy8gbWFrZSBuLXJhbmRvbSBhdXRvY2xpY2sgZm9yIHJhbmRvbWl6ZSBpdGVtcyBvbiB0aGUgZmllbGRcclxuICByYW5kb21pemVJdGVtKCkge1xyXG4gICAgbGV0IHJhbmRvbU51bWI7XHJcbiAgICBpZiAodGhpcy5zaXplID09PSAzKSByYW5kb21OdW1iID0gR2FtZS5nZXRSYW5kb21JbnQoMzAsIDYwKTtcclxuICAgIGlmICh0aGlzLnNpemUgPT09IDQpIHJhbmRvbU51bWIgPSBHYW1lLmdldFJhbmRvbUludCgxMDAsIDE1MCk7XHJcbiAgICBpZiAodGhpcy5zaXplID09PSA1IHx8IHRoaXMuc2l6ZSA9PT0gNiB8fCB0aGlzLnNpemUgPT09IDcpIHtcclxuICAgICAgcmFuZG9tTnVtYiA9IEdhbWUuZ2V0UmFuZG9tSW50KDE1MCwgMjAwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpemUgPT09IDgpIHJhbmRvbU51bWIgPSBHYW1lLmdldFJhbmRvbUludCgyMDAsIDI1MCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5pc0F1dG9DbGljayA9IHRydWU7XHJcbiAgICAgIHRoaXMuYXV0b0NsaWNrSXRlbXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQWZ0ZXJBdXRvQ2xpY2soKTtcclxuICAgIHJldHVybiB0aGlzLmNvdW50TW92ZXM7XHJcbiAgfVxyXG5cclxuICAvLyBhdXRvY2xpY2ssIHdoZW4gd2UgcHVzaCBvbiByYW5kb20gYWxsb3cgaXRlbVxyXG4gIGF1dG9DbGlja0l0ZW1zKCkge1xyXG4gICAgY29uc3QgUmFuZG9tTnVtYkJ0biA9IHRoaXMuYWxsb3dCdG5Gb3JDbGlja1tHYW1lLmdldFJhbmRvbUludCgwLCB0aGlzLmFsbG93QnRuRm9yQ2xpY2subGVuZ3RoKV07XHJcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke1JhbmRvbU51bWJCdG59XCJdYCk7XHJcbiAgICByYW5kb21CdG4uY2xpY2sodGhpcy5jbGlja0l0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBhdXRvY2xpY2stZmxhZ1xyXG4gIHVwZGF0ZUFmdGVyQXV0b0NsaWNrKCkge1xyXG4gICAgdGhpcy5pc0F1dG9DbGljayA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBdXRvQ2xpY2s7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgbW92ZXNcclxuICB1cGRhdGVNb3ZlcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlcycpLmlubmVyVGV4dCA9IGBNb3ZlczogJHt0aGlzLmNvdW50TW92ZXN9YDtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBiYWNrIGFuZCBmb3J0aCBzdGVwc1xyXG4gIHJlbW92ZUR1cGxpY2F0ZVN0ZXBzKCkge1xyXG4gICAgY29uc3QgYXJyID0gWy4uLnRoaXMuYXJyUG9zaXRpb25dLnJldmVyc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGogKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBBcnJPbmVTdGVwID0gYXJyW2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgQXJyT25lU3RlcGJhY2sgPSBhcnJbaSArIDFdLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGlmIChBcnJPbmVTdGVwWzBdID09PSBBcnJPbmVTdGVwYmFja1swXVxyXG4gICAgICAgICAmJiBBcnJPbmVTdGVwWzFdID09PSBBcnJPbmVTdGVwYmFja1syXVxyXG4gICAgICAgICAmJiBBcnJPbmVTdGVwWzJdID09PSBBcnJPbmVTdGVwYmFja1sxXSkge1xyXG4gICAgICAgICAgYXJyLnNwbGljZShpLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYXJyUG9zaXRpb24gPSB0aGlzLmFyclBvc2l0aW9uLnNwbGljZSgwLCB0aGlzLmFyclBvc2l0aW9uLmxlbmd0aCk7XHJcbiAgICB0aGlzLmFyclBvc2l0aW9uID0gWy4uLmFycl07XHJcbiAgICByZXR1cm4gdGhpcy5hcnJQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8vIHNvbHZlIGFuaW1hdGlvbiAocmV2ZXJzZSBhbmltYXRpb24pXHJcbiAgcmV2ZXJzZUhpc3RvcnkoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZVN0ZXBzKCk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gWy4uLnRoaXMuYXJyUG9zaXRpb25dO1xyXG5cclxuICAgIGNvbnN0IG1ha2VTdGVwID0gKGhpc3QsIGkgPSAwKSA9PiB7XHJcbiAgICAgIGNvbnN0IEFyck9uZVN0ZXAgPSBoaXN0W2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgIGNvbnN0IHRlbXBFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xyXG4gICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke0Fyck9uZVN0ZXBbMF19XCJdYCk7XHJcblxyXG4gICAgICB0ZW1wLnN0eWxlLm9yZGVyID0gYCR7QXJyT25lU3RlcFsxXX1gO1xyXG4gICAgICB0ZW1wRW1wdHkuc3R5bGUub3JkZXIgPSBgJHtBcnJPbmVTdGVwWzJdfWA7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gaGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1ha2VTdGVwKGhpc3QsIGkgKyAxKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH07XHJcbiAgICBtYWtlU3RlcChoaXN0b3J5KTtcclxuICB9XHJcblxyXG4gIHNob3dTb2x2ZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLS1zb2x1dGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJldmVyc2VIaXN0b3J5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VGltZXIoKSB7XHJcbiAgICBsZXQgdGltZU1pbnV0ZSA9IDA7XHJcbiAgICBsZXQgc2Vjb25kcyA9IDA7XHJcbiAgICBsZXQgbWludXRlcyA9IDA7XHJcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNlY29uZHMgPSB0aW1lTWludXRlICUgNjA7XHJcbiAgICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKCh0aW1lTWludXRlIC8gNjApICUgNjApO1xyXG5cclxuICAgICAgY29uc3Qgc2VjVGV4dCA9IHNlY29uZHMgPiA5ID8gYCR7c2Vjb25kc31gIDogYDAke3NlY29uZHN9YDtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IG1pbnV0ZXMgPiA5ID8gYCR7bWludXRlc31gIDogYDAke21pbnV0ZXN9YDtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykuaW5uZXJUZXh0ID0gYFRpbWU6ICR7bWluVGV4dH06JHtzZWNUZXh0fWA7XHJcbiAgICAgIHRpbWVNaW51dGUgKz0gMTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJUaW1lcigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNhdmVHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLXNhdmVfZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZWRnYW1lJywgdGhpcy5hcnJQb3NpdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIGxvYWRHYW1lKCl7XHJcbiAgICAgIGxldCBsYXN0R2FtZVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlZGdhbWUnKTtcclxuICAgICAgICAgIGxldCBsYXN0R2FtZUFyciA9IGxhc3RHYW1lU3RyLm1hdGNoKC9cXGR7MSwyfVxcLFxcZHsxLDJ9XFwsXFxkezEsMn0vZyk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0R2FtZUFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgbGV0IEFyck9uZVN0ZXAgPSBsYXN0R2FtZUFycltpXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKEFyck9uZVN0ZXApXHJcbiAgICAgICAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7QXJyT25lU3RlcFswXX1cIl1gKTtcclxuICAgICAgICAgICAgICB0ZW1wLnN0eWxlLm9yZGVyID0gYCR7QXJyT25lU3RlcFsxXX1gO1xyXG4gICAgICAgICAgICAgIHRlbXAuZGF0YXNldC5wb3MgPSBgJHtBcnJPbmVTdGVwWzFdfWA7XHJcbiAgICAgICAgICAgICAgbGV0IHRlbXBFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xyXG4gICAgICAgICAgICAgIHRlbXBFbXB0eS5zdHlsZS5vcmRlciA9IGAke0Fyck9uZVN0ZXBbMl19YDtcclxuICAgICAgICAgICAgICB0ZW1wRW1wdHkuZGF0YXNldC5wb3MgPSBgJHtBcnJPbmVTdGVwWzJdfWA7XHJcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVDbGlja2FibGUoKTtcclxuICAgICAgICAgICAgICB0aGlzLmFkZENsaWNrYWJsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gIH0gKi9cclxuXHJcbiAgZ2FtZUlzU29sdmVkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5zaXplICogdGhpcy5zaXplOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgeyBwb3MgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7aX1cIl1gKS5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke2l9XCJdYCkuZGF0YXNldDtcclxuICAgICAgaWYgKHBvcyA9PT0gaWQgJiYgaSA9PT0gdGhpcy5zaXplICogdGhpcy5zaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaG93V2luTWVzc2FnZSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvcyAhPT0gaWQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3Blbk1lbnUoKSB7XHJcbiAgICBjb25zdCBsaXN0TWVudSA9IFsnbmV3X2dhbWUnLCAnc2F2ZV9nYW1lJywgJ3Njb3JlcycsICdzZXR0aW5ncycsICdydWxlcycsICdzb2x1dGlvbiddO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XHJcbiAgICAgIGxpc3RNZW51LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaXRlbS0tJHtpdGVtfWApLmNsYXNzTGlzdC5hZGQoYGl0ZW0tLSR7aXRlbX0tLW9wZW5gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBHYW1lLnNob3dSdWxlcygpO1xyXG4gICAgR2FtZS5zaG93U2NvcmUoKTtcclxuICAgIEdhbWUuY2xvc2VNZW51KCk7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lSXNQYXVzZWQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xvc2VNZW51KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLS1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1dpbk1lc3NhZ2UoKSB7XHJcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbi5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlubmVyVGV4dC5yZXBsYWNlKCdUaW1lOicsICcnKTtcclxuICAgIHdpbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJjb3JuZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS1ob3Jpem9udGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLXZlcnRpY2FsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMj5Zb3Ugd29uITwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwid2luVGV4dFwiPllvdSB3b24gaW4gJHt0aW1lfSBhbmQgJHt0aGlzLmNvdW50TW92ZXN9IG1vdmVzITwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5fX2Nsb3NlIGJ0bl9fY2xvc2UtLXdpblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS12ZXJ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS1ob3JpelwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPmA7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmFmdGVyKHdpbik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fY2xvc2UtLXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdpbi5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCA1MDApO1xyXG4gICAgdGhpcy5zYXZlUmVzdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2hvd1J1bGVzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLXJ1bGVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJ1bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJ1bGVzLmNsYXNzTGlzdC5hZGQoJ3J1bGVzJyk7XHJcblxyXG4gICAgICBydWxlcy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJjb3JuZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS1ob3Jpem9udGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLXZlcnRpY2FsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMj5SdWxlczwvaDI+XHJcbiAgICAgICAgICAgICA8cD5UaGUgb2JqZWN0IG9mIHRoZSBwdXp6bGUgaXMgdG8gcGxhY2UgdGhlIHRpbGVzIGluIG9yZGVyPGJyPlxyXG4gICAgICAgICAgICAgICAgYnkgbWFraW5nIHNsaWRpbmcgbW92ZXMgdGhhdCB1c2UgdGhlIGVtcHR5IHNwYWNlLjxicj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIFlvdSBjYW4gc2F2ZSB5b3VyIGdhbWUgYW5kIGxvYWQgaXQgbGF0ZXIuPGJyPlxyXG4gICAgICAgICAgICAgICAgT3IgeW91IGNhbiBqdXN0IHVzZSBwYXVzZSBidXR0b24uPGJyPlxyXG4gICAgICAgICAgICAgICAgQWxzbyB5b3UgY2FuIGNob29zZSBnYW1lIGZpZWxkIHNpemUgYW5kIG1vZGUgKHBpY3R1cmUgb3IgbnVtYmVyKSw8YnI+XHJcbiAgICAgICAgICAgICAgICBhbmQgdHVybiBvbiBvciB0dXRuIG9mZiBzb3VuZHMgaW4gU2V0dGluZ3MuPGJyPlxyXG4gICAgICAgICAgICAgICAgSGF2ZSBhIG5pY2UgZ2FtZSE8L3A+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX19jbG9zZSBidG5fX2Nsb3NlLS1ydWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS12ZXJ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS1ob3JpelwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5hZnRlcihydWxlcyk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19jbG9zZS0tcnVsZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHJ1bGVzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVJlc3VsdCgpIHtcclxuICAgIGxldCBjb3VudFBsYWNlID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgIGlmIChrZXkubWF0Y2goL3BsYWNlLykpIHtcclxuICAgICAgICBjb3VudFBsYWNlICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlubmVyVGV4dC5yZXBsYWNlKCdUaW1lOicsICcnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwbGFjZSR7Y291bnRQbGFjZX1gLFxyXG4gICAgICBgJHt0aGlzLmNvdW50TW92ZXN9X19fX19fX19fJHt0aW1lfV9fX19fX18ke3RoaXMuc2l6ZX1fX19fX19fJHt0aGlzLm1vZGV9YCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2hvd1Njb3JlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLXNjb3JlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xyXG5cclxuICAgICAgc2NvcmUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiY29ybmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgbGluZS0taG9yaXpvbnRhbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS12ZXJ0aWNhbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDI+QmVzdCBzY29yZXM8L2gyPlxyXG4gICAgICAgICA8dWwgY2xhc3M9XCJzY29yZXNfX2xpc3RcIj5cclxuICAgICAgICAgPGxpIGNsYXNzPVwic2NvcmVfcG9zaXRpb24gcG9zaXRpb25faGVhZGluZ1wiPiNfX19fX19fU3RlcHNfX19fX19fVGltZV9fX19fX19GaWVsZF9fX19fX19Nb2RlPC9saT5cclxuICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5fX2Nsb3NlIGJ0bl9fY2xvc2UtLXNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLXZlcnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLWhvcml6XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+YDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmFmdGVyKHNjb3JlKTtcclxuXHJcbiAgICAgIGNvbnN0IGhpc3RvcnlBcnIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgIGlmIChrZXkubWF0Y2goL3BsYWNlLykpIHtcclxuICAgICAgICAgIGhpc3RvcnlBcnIucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcGxhY2Uke2kgKyAxfWApKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNvcnRBcnJheUJ5RGlnaXRzID0gKGFycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVnID0gL1xcRC9nO1xyXG4gICAgICAgIGFycmF5LnNvcnQoKGEsIGIpID0+IChwYXJzZUludChhLnJlcGxhY2UocmVnLCAnJyksIDEwKSAtIHBhcnNlSW50KGIucmVwbGFjZShyZWcsICcnKSwgMTApKSk7XHJcbiAgICAgICAgcmV0dXJuIChhcnJheSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzb3J0QXJyYXlCeURpZ2l0cyhoaXN0b3J5QXJyKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChoaXN0b3J5QXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2NvcmVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICBzY29yZUxpLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX3Bvc2l0aW9uIG5vbmVfc2NvcmUnKTtcclxuICAgICAgICAgIHNjb3JlTGkuaW5uZXJUZXh0ID0gJ05vIHJlc3VsdHMgeWV0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCAxMCkge1xyXG4gICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vbmVfc2NvcmUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnN0IHNjb3JlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgc2NvcmVMaS5jbGFzc0xpc3QuYWRkKCdzY29yZV9wb3NpdGlvbicpO1xyXG4gICAgICAgICAgc2NvcmVMaS5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbiR7aSArIDF9YCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgY3VyUG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlc19fbGlzdCcpLmxhc3RDaGlsZDtcclxuICAgICAgICAgIGN1clBvcy5hZnRlcihzY29yZUxpKTtcclxuICAgICAgICAgIHNjb3JlTGkuaW5uZXJUZXh0ID0gYCR7aSArIDF9X19fX19fX19fJHtoaXN0b3J5QXJyW2ldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2Nsb3NlLS1zY29yZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgc2NvcmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCBDZWxsTnVtYmVyIGZyb20gJy4vQ2VsbE51bWJlcic7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJQdXp6bGUgZXh0ZW5kcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHdpZHRoLCBzaXplLCBtb2RlKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIsIHdpZHRoLCBzaXplLCBtb2RlKTtcclxuICAgIHRoaXMucGFyZW50Q29udGVpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB3aWR0aDtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xyXG4gICAgdGhpcy5jZWxscyA9IFtdO1xyXG4gICAgdGhpcy5hcnJQb3NpdGlvbiA9IFtdO1xyXG4gICAgdGhpcy5saW1pdExlZnQgPSBbXTtcclxuICAgIHRoaXMubGltaXRSaWdodCA9IFtdO1xyXG4gICAgdGhpcy5hbGxvd0J0bkZvckNsaWNrID0gW107XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgdGhpcy5zZXRMaW1pdGUoKTtcclxuICAgIHRoaXMuYWRkQ2xpY2thYmxlKCk7XHJcbiAgICB0aGlzLnJhbmRvbWl6ZUl0ZW0oKTtcclxuICAgIHRoaXMuY291bnRNb3ZlcyA9IDA7XHJcbiAgICB0aGlzLnNob3dTb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDZWxscygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplICogdGhpcy5zaXplOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBDZWxsTnVtYmVyKHRoaXMsIGkpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0aGlzLnNpemUgKiB0aGlzLnNpemV9XCJdYCkuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgIHRoaXMuY2xpY2tJdGVtcygpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IENlbGwgZnJvbSAnLi9DZWxsJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmVQdXp6bGUgZXh0ZW5kcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGltYWdlU3JjLCB3aWR0aCwgc2l6ZSwgbW9kZSkge1xyXG4gICAgc3VwZXIoY29udGFpbmVyLCB3aWR0aCwgc2l6ZSwgbW9kZSk7XHJcbiAgICB0aGlzLmltYWdlU3JjID0gaW1hZ2VTcmM7XHJcbiAgICB0aGlzLnBhcmVudENvbnRlaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gd2lkdGg7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICAgIHRoaXMuY2VsbHMgPSBbXTtcclxuICAgIHRoaXMuYXJyUG9zaXRpb24gPSBbXTtcclxuICAgIHRoaXMuY291bnRNb3ZlcyA9IDA7XHJcbiAgICB0aGlzLmxpbWl0TGVmdCA9IFtdO1xyXG4gICAgdGhpcy5saW1pdFJpZ2h0ID0gW107XHJcbiAgICB0aGlzLmFsbG93QnRuRm9yQ2xpY2sgPSBbXTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKGltZy5oZWlnaHQgKiB0aGlzLndpZHRoKSAvIGltZy53aWR0aDtcclxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt0aGlzLndpZHRofXJlbWA7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaGVpZ2h0fXJlbWA7XHJcbiAgICB9O1xyXG5cclxuICAgIGltZy5zcmMgPSB0aGlzLmltYWdlU3JjO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNlbGxzKCk7XHJcbiAgICB0aGlzLmVtcHR5UG9zID0gK3RoaXMuZ2V0RW1wdHlQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5zZXRMaW1pdGUoKTtcclxuICAgIHRoaXMuYWRkQ2xpY2thYmxlKCk7XHJcbiAgICB0aGlzLnJhbmRvbWl6ZUl0ZW0oKTtcclxuICAgIHRoaXMuc2hvd1NvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNlbGxzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemUgKiB0aGlzLnNpemU7IGkgKz0gMSkge1xyXG4gICAgICB0aGlzLmNlbGxzLnB1c2gobmV3IENlbGwodGhpcywgaSkpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3RoaXMuc2l6ZSAqIHRoaXMuc2l6ZX1cIl1gKS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xyXG4gICAgdGhpcy5jbGlja0l0ZW1zKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbnZpcm9ubWVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XHJcbiAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNvbnRlbnQpO1xyXG5cclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlci5jbGFzc05hbWUgPSAnd3JhcHBlcic7XHJcbiAgY29udGVudC5wcmVwZW5kKHdyYXBwZXIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImhlYWRlcl9fd3JhcHBlclwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJnYW1lX19uYW1lXCI+I0dlbTxicj4gUHV6emxlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzX19pdGVtIG1lbnVfX2J0blwiPk1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNfX2l0ZW0gbW92ZXNcIj5Nb3ZlczogMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1c19faXRlbSB0aW1lXCI+VGltZTogMDA6MDA8L3NwYW4+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnUgaW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1uZXdfZ2FtZVwiPk5ldyBnYW1lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1zYXZlX2dhbWVcIj5TYXZlIGdhbWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIGl0ZW0tLXNjb3Jlc1wiPkJlc3Qgc2NvcmVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1zZXR0aW5nc1wiPlNldHRpbmdzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1zb2x1dGlvblwiPlNvbHV0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1ydWxlc1wiPlJ1bGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBjbG9zZS0tbWVudVwiPiAgIDxzcGFuIGNsYXNzPVwiYnRuX19jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLXZlcnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VfX2xpbmUgY2xvc2UtbGluZS0taG9yaXpcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNsYXNzPVwiYXVkaW9cIiBzcmM9XCJhc3NldHMvc291bmRzL21vdmUubXAzXCI+PC9hdWRpbz5gO1xyXG4gIHdyYXBwZXIucHJlcGVuZChoZWFkZXIpO1xyXG5cclxuICBjb25zdCBwdXp6bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwdXp6bGVDb250YWluZXIuY2xhc3NOYW1lID0gJ3B1enpsZS13cmFwcGVyJztcclxuICB3cmFwcGVyLmFwcGVuZChwdXp6bGVDb250YWluZXIpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc291bmRzL21vdmUubXAzJztcclxuaW1wb3J0IFBpY3R1cmVQdXp6bGUgZnJvbSAnLi9QaWN0dXJlUHV6emxlJztcclxuaW1wb3J0IE51bWJlclB1enpsZSBmcm9tICcuL051bWJlclB1enpsZSc7XHJcbmltcG9ydCBjcmVhdGVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmxldCBtb2RlID0gJyc7XHJcbmxldCBzaXplID0gNDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU51bWJlclB1enpsZSgpIHtcclxuICBjb25zdCBudW1iZXJQdXp6bGUgPSBuZXcgTnVtYmVyUHV6emxlKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1enpsZS13cmFwcGVyJyksIDMwLCBzaXplLCAnbnVtYmVyJyxcclxuICApO1xyXG4gIG1vZGUgPSAnbnVtYmVyJztcclxuICByZXR1cm4gbW9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGljdGlyZVB1enpsZSgpIHtcclxuICBjb25zdCBzZXRSYW5kb21JbWcgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuXHJcbiAgY29uc3QgcmFuZG9tSW1nID0gc2V0UmFuZG9tSW1nKDEsIDE1MSk7XHJcblxyXG4gIGNvbnN0IHBpY3R1cmVQdXp6bGUgPSBuZXcgUGljdHVyZVB1enpsZShcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUtd3JhcHBlcicpLFxyXG4gICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pcmluYWluaW5hL2ltYWdlLWRhdGEvbWFzdGVyL2JveC8ke3JhbmRvbUltZ30uanBnYCxcclxuICAgIDMwLCBzaXplLCAncGljdHVyZScsXHJcbiAgKTtcclxuICBtb2RlID0gJ3BpY3R1cmUnO1xyXG4gIHJldHVybiBtb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2V0dGluZ3MoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLXNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MnKTtcclxuXHJcbiAgICBzZXR0aW5ncy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJjb3JuZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLWhvcml6b250YWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS12ZXJ0aWNhbFwiPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGgyPlNldHRpbmdzPC9oMj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVfYmxvY2tcIj5cclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5fX3R5cGVcIj5tb2RlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gbW9kZS0tbnVtYmVyIGFjdGl2ZV9tb2RlXCIgZGF0YS1tb2RlPVwiYWN0aXZlX21vZGVcIj5udW1iZXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gbW9kZS0tcGljdHVyZVwiIGRhdGEtbW9kZT1cImluYWN0aXZlX21vZGVcIj5waWN0dXJlPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj48YnI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX2Jsb2NrXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5fX3NpemVcIj5maWVsZDogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNpemVfX2l0ZW0gc2l6ZTNcIiBkYXRhLXNpemU9XCJpbmFjdGl2ZV9zaXplXCI+IDN4MyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc2l6ZV9faXRlbSBzaXplNCBhY3RpdmVfc2l6ZVwiIGRhdGEtc2l6ZT1cImFjdGl2ZV9zaXplXCI+IDR4NCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc2l6ZV9faXRlbSBzaXplNVwiIGRhdGEtc2l6ZT1cImluYWN0aXZlX3NpemVcIj4gNXg1IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXR0aW5nc19faXRlbSBzaXplX19pdGVtIHNpemU2XCIgZGF0YS1zaXplPVwiaW5hY3RpdmVfc2l6ZVwiPiA2eDYgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNpemVfX2l0ZW0gc2l6ZTdcIiBkYXRhLXNpemU9XCJpbmFjdGl2ZV9zaXplXCI+IDd4NyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc2l6ZV9faXRlbSBzaXplOFwiIGRhdGEtc2l6ZT1cImluYWN0aXZlX3NpemVcIj4gOHg4IDwvc3Bhbj5cclxuPC9zcGFuPjxicj5cclxuPHNwYW4gY2xhc3M9XCJzb3VuZF9ibG9ja1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX19zb3VuZFwiPnNvdW5kOiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc291bmQtLW9uIGFjdGl2ZV9zb3VuZCBcIiBkYXRhLXNvdW5kPVwiYWN0aXZlX3NvdW5kXCI+b248L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc291bmQtLW9mZlwiIGRhdGEtc291bmQ9XCJpbmFjdGl2ZV9zb3VuZFwiPm9mZjwvc3Bhbj5cclxuPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX19jbG9zZSBjbG9zZS1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLXZlcnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VfX2xpbmUgY2xvc2UtbGluZS0taG9yaXpcIj48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPmA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuYWZ0ZXIoc2V0dGluZ3MpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb2RlUGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlLS1waWN0dXJlJyk7XHJcbiAgICAgIGNvbnN0IG1vZGVOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZS0tbnVtYmVyJyk7XHJcbiAgICAgIGNvbnN0IHNpemVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpemVfX2l0ZW0nKTtcclxuICAgICAgY29uc3Qgc291bmRPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VuZC0tb24nKTtcclxuICAgICAgY29uc3Qgc291bmRPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmQtLW9mZicpO1xyXG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpbycpO1xyXG5cclxuICAgICAgc2l6ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgc2l6ZSA9IGluZGV4ICsgMztcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc2l6ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9zaXplJyk7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9zaXplJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV6emxlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICBpZiAobW9kZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY3JlYXRlTnVtYmVyUHV6emxlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgY3JlYXRlUGljdGlyZVB1enpsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG1vZGVOdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kZSA9ICdudW1iZXInO1xyXG4gICAgICAgIG1vZGVQaWN0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9tb2RlJyk7XHJcbiAgICAgICAgbW9kZU51bWJlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbW9kZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUnKS5yZW1vdmUoKTtcclxuICAgICAgICBjcmVhdGVOdW1iZXJQdXp6bGUoKTtcclxuICAgICAgICByZXR1cm4gbW9kZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtb2RlUGljdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RlID0gJ3BpY3R1cmUnO1xyXG4gICAgICAgIG1vZGVQaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9tb2RlJyk7XHJcbiAgICAgICAgbW9kZU51bWJlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfbW9kZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUnKS5yZW1vdmUoKTtcclxuICAgICAgICBjcmVhdGVQaWN0aXJlUHV6emxlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gc291bmQgb2ZmXHJcbiAgICAgIHNvdW5kT2ZmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNvdW5kT24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3NvdW5kJyk7XHJcbiAgICAgICAgc291bmRPZmYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3NvdW5kJyk7XHJcbiAgICAgICAgYXVkaW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuYXVkaW9PbiA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHNvdW5kIG9uXHJcbiAgICAgIHNvdW5kT24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc291bmRPZmYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3NvdW5kJyk7XHJcbiAgICAgICAgc291bmRPbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfc291bmQnKTtcclxuICAgICAgICBhdWRpby5tdXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmF1ZGlvT24gPSB0cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1zZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNldHRpbmdzLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLW5ld19nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAobW9kZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1enpsZScpLnJlbW92ZSgpO1xyXG4gICAgICBjcmVhdGVOdW1iZXJQdXp6bGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUnKS5yZW1vdmUoKTtcclxuICAgICAgY3JlYXRlUGljdGlyZVB1enpsZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jcmVhdGVFbnZpcm9ubWVudCgpO1xyXG5jcmVhdGVOdW1iZXJQdXp6bGUoKTtcclxuc2hvd1NldHRpbmdzKCk7XHJcbm5ld0dhbWUoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==