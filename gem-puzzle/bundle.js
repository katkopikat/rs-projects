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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1024px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.puzzle-wrapper {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.puzzle {\r\n    margin: 0px auto;\r\n    width: 500px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.game__name {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    margin-left: 4rem;\r\n    margin-top: 2rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n}\r\n\r\n.status__item {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.time {\r\n    color: #2AB6E1;\r\n}\r\n\r\n.moves {\r\n    color: #E502F1;\r\n}\r\n\r\n.menu__btn {\r\n    color: #05D9DD;\r\n}\r\n\r\n.menu__btn:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.menu__item {\r\n    font-size: 1.1rem;\r\n    color: #4A4A4A;\r\n    margin-bottom: 0.2rem;\r\n    list-style-type: none;\r\n    opacity: 0;\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n.close--menu {\r\n    margin-top: 1rem;\r\n    transform: scale(0.7);\r\n    position: relative;\r\n    left: -12.5rem;\r\n    opacity: 0.5;\r\n}\r\n\r\n.item--new_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--save_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.1s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.item--scores--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.2s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--settings--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.3s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--rules--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.4s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--solution--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.5s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\nli:hover {\r\n    color: #05D9DD;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    user-select: none;\r\n    text-align: center;\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n}\r\n\r\n/* .cell__img4 {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n} */\r\n\r\n[data-id=\"1\"] {\r\n    background-color: #05D9DD;\r\n}\r\n\r\n[data-id=\"2\"] {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n[data-id=\"3\"] {\r\n    background-color: #287EE0;\r\n}\r\n\r\n[data-id=\"4\"] {\r\n    background-color: #354DD5;\r\n}\r\n\r\n[data-id=\"5\"] {\r\n    background-color: #24BBE0;\r\n}\r\n\r\n[data-id=\"6\"] {\r\n    background-color: #5989E5;\r\n}\r\n\r\n[data-id=\"7\"] {\r\n    background-color: #4757F2;\r\n}\r\n\r\n[data-id=\"8\"] {\r\n    background-color: #2E3AB4;\r\n}\r\n\r\n[data-id=\"9\"] {\r\n    background-color: #B93CF2;\r\n}\r\n\r\n[data-id=\"10\"] {\r\n    background-color: #8574F2;\r\n}\r\n\r\n[data-id=\"11\"] {\r\n    background-color: #3B57E6;\r\n}\r\n\r\n[data-id=\"12\"] {\r\n    background-color: #282896;\r\n}\r\n\r\n[data-id=\"13\"] {\r\n    background-color: #E502F1;\r\n}\r\n\r\n[data-id=\"14\"] {\r\n    background-color: #A10FD5;\r\n}\r\n\r\n[data-id=\"15\"] {\r\n    background-color: #631BBC;\r\n}\r\n\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    position: relative;\r\n    color: white;\r\n    font-size: 1rem;\r\n    max-width: 38vw;\r\n    margin: 2rem auto;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.score > ul {\r\n    margin-left: 2rem;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1.2rem;\r\n    list-style: none;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-left: 1.7rem;\r\n    padding-top: 1.7rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.win > h2 {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.rules p {\r\n    margin-left: 2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.winText {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.corner {\r\n    position: relative;\r\n}\r\n\r\n.line {\r\n    position: absolute;\r\n    width: 8.4rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.line--vertical {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: -4.2rem;\r\n    top: 4.15rem;\r\n}\r\n\r\n.btn__close {\r\n    position: absolute;\r\n    right: 0rem;\r\n    top: 0rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.btn__close:hover {\r\n    transform: rotate(-45deg);\r\n    transition: all 0.2s ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.close__line {\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.close-line--vert {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: 0rem;\r\n    top: 0rem;\r\n}\r\n\r\n.solve {\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings__item:hover {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n}\r\n\r\n.active_sound,\r\n.active_mode,\r\n.active_size {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n    opacity: 1;\r\n}\r\n\r\n.type_block,\r\n.size_block,\r\n.sound_block {\r\n    display: inline-block;\r\n    margin-left: 2rem;\r\n    margin-bottom: 0.8rem;\r\n}\r\n\r\n.btn__type {\r\n    padding-right: 2rem;\r\n}\r\n\r\n.btn__size {\r\n    padding-right: 2.8rem;\r\n}\r\n\r\n.btn__sound {\r\n    padding-right: 1.7rem;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.settings > span {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.inactive {\r\n    transition: all 0.3s ease-in-out;\r\n    display: none;\r\n}\r\n\r\n.cell5, .cell7 {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n.cell6, .cell8 {\r\n    background-color: #8574F2;\r\n}\r\n\r\n.cell7  {\r\n    background-color: #354DD5;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.cell8  {\r\n    background-color: #4757F2;\r\n    font-size: 1rem;\r\n}\r\n\r\n.empty {\r\n    pointer-events: auto;\r\n    opacity: 0 !important;\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    font-size: 1rem;\r\n    max-width: 53vw;\r\n}\r\nh2 {\r\n    font-size: 2.7rem;\r\n }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .rules,.settings,.win,.score {\r\n        font-size: 0.9rem;\r\n        max-width: 62vw;\r\n    }\r\n    h2 {font-size: 2.3rem; }\r\n\r\n    .settings >span {\r\n        font-size: 1rem;\r\n     }\r\n    }\r\n\r\n@media (max-width: 768px){\r\n    .rules, .settings, .win, .score {\r\n         font-size: 0.8rem;\r\n         max-width: 72vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .rules, .settings, .win, .score {\r\n        font-size: 0.8rem;\r\n        max-width: 80vw;\r\n}\r\n    .settings > span{\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .score>ul{\r\n        font-size: 0.8rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #171717;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1024px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.puzzle-wrapper {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.puzzle {\r\n    margin: 0px auto;\r\n    width: 500px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.game__name {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    margin-left: 4rem;\r\n    margin-top: 2rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n}\r\n\r\n.status__item {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.time {\r\n    color: #2AB6E1;\r\n}\r\n\r\n.moves {\r\n    color: #E502F1;\r\n}\r\n\r\n.menu__btn {\r\n    color: #05D9DD;\r\n}\r\n\r\n.menu__btn:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    transition: all 0.3s ease-in-out;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.menu__item {\r\n    font-size: 1.1rem;\r\n    color: #4A4A4A;\r\n    margin-bottom: 0.2rem;\r\n    list-style-type: none;\r\n    opacity: 0;\r\n    margin-top: -1.5rem;\r\n}\r\n\r\n.close--menu {\r\n    margin-top: 1rem;\r\n    transform: scale(0.7);\r\n    position: relative;\r\n    left: -12.5rem;\r\n    opacity: 0.5;\r\n}\r\n\r\n.item--new_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--save_game--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.1s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.item--scores--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.2s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--settings--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.3s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--rules--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.4s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\n.item--solution--open {\r\n    transition: margin 0.5s cubic-bezier(1, 0, 0, 1) 0.5s;\r\n    margin-top: 0rem;\r\n    opacity: 1;\r\n}\r\n\r\nli:hover {\r\n    color: #05D9DD;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    user-select: none;\r\n    text-align: center;\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n}\r\n\r\n/* .cell__img4 {\r\n    height: 24%;\r\n    width: 24%;\r\n    margin: 0.1rem;\r\n} */\r\n\r\n[data-id=\"1\"] {\r\n    background-color: #05D9DD;\r\n}\r\n\r\n[data-id=\"2\"] {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n[data-id=\"3\"] {\r\n    background-color: #287EE0;\r\n}\r\n\r\n[data-id=\"4\"] {\r\n    background-color: #354DD5;\r\n}\r\n\r\n[data-id=\"5\"] {\r\n    background-color: #24BBE0;\r\n}\r\n\r\n[data-id=\"6\"] {\r\n    background-color: #5989E5;\r\n}\r\n\r\n[data-id=\"7\"] {\r\n    background-color: #4757F2;\r\n}\r\n\r\n[data-id=\"8\"] {\r\n    background-color: #2E3AB4;\r\n}\r\n\r\n[data-id=\"9\"] {\r\n    background-color: #B93CF2;\r\n}\r\n\r\n[data-id=\"10\"] {\r\n    background-color: #8574F2;\r\n}\r\n\r\n[data-id=\"11\"] {\r\n    background-color: #3B57E6;\r\n}\r\n\r\n[data-id=\"12\"] {\r\n    background-color: #282896;\r\n}\r\n\r\n[data-id=\"13\"] {\r\n    background-color: #E502F1;\r\n}\r\n\r\n[data-id=\"14\"] {\r\n    background-color: #A10FD5;\r\n}\r\n\r\n[data-id=\"15\"] {\r\n    background-color: #631BBC;\r\n}\r\n\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    position: relative;\r\n    color: white;\r\n    font-size: 1rem;\r\n    max-width: 38vw;\r\n    margin: 2rem auto;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.score > ul {\r\n    margin-left: 2rem;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1.2rem;\r\n    list-style: none;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Spartan', sans-serif;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-left: 1.7rem;\r\n    padding-top: 1.7rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.win > h2 {\r\n    padding-bottom: 0;\r\n}\r\n\r\n.rules p {\r\n    margin-left: 2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.winText {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.corner {\r\n    position: relative;\r\n}\r\n\r\n.line {\r\n    position: absolute;\r\n    width: 8.4rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.line--vertical {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: -4.2rem;\r\n    top: 4.15rem;\r\n}\r\n\r\n.btn__close {\r\n    position: absolute;\r\n    right: 0rem;\r\n    top: 0rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.btn__close:hover {\r\n    transform: rotate(-45deg);\r\n    transition: all 0.2s ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.close__line {\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 0.15rem;\r\n    background-color: white;\r\n}\r\n\r\n.close-line--vert {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    left: 0rem;\r\n    top: 0rem;\r\n}\r\n\r\n.solve {\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings__item:hover {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n}\r\n\r\n.active_sound,\r\n.active_mode,\r\n.active_size {\r\n    cursor: pointer;\r\n    color: #05D9DD;\r\n    opacity: 1;\r\n}\r\n\r\n.type_block,\r\n.size_block,\r\n.sound_block {\r\n    display: inline-block;\r\n    margin-left: 2rem;\r\n    margin-bottom: 0.8rem;\r\n}\r\n\r\n.btn__type {\r\n    padding-right: 2rem;\r\n}\r\n\r\n.btn__size {\r\n    padding-right: 2.8rem;\r\n}\r\n\r\n.btn__sound {\r\n    padding-right: 1.7rem;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.settings > span {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.inactive {\r\n    transition: all 0.3s ease-in-out;\r\n    display: none;\r\n}\r\n\r\n.cell5, .cell7 {\r\n    background-color: #2AB6E1;\r\n}\r\n\r\n.cell6, .cell8 {\r\n    background-color: #8574F2;\r\n}\r\n\r\n.cell7  {\r\n    background-color: #354DD5;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.cell8  {\r\n    background-color: #4757F2;\r\n    font-size: 1rem;\r\n}\r\n\r\n.empty {\r\n    pointer-events: auto;\r\n    opacity: 0 !important;\r\n\r\n}\r\n\r\n@media (max-width: 1024px){\r\n.rules,\r\n.settings,\r\n.win,\r\n.score {\r\n    font-size: 1rem;\r\n    max-width: 53vw;\r\n}\r\nh2 {\r\n    font-size: 2.7rem;\r\n }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .rules,.settings,.win,.score {\r\n        font-size: 0.9rem;\r\n        max-width: 62vw;\r\n    }\r\n    h2 {font-size: 2.3rem; }\r\n\r\n    .settings >span {\r\n        font-size: 1rem;\r\n     }\r\n    }\r\n\r\n@media (max-width: 768px){\r\n    .rules, .settings, .win, .score {\r\n         font-size: 0.8rem;\r\n         max-width: 72vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .rules, .settings, .win, .score {\r\n        font-size: 0.8rem;\r\n        max-width: 80vw;\r\n}\r\n    .settings > span{\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .score>ul{\r\n        font-size: 0.8rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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
      // if (historyArr.length > 1) {
      //   const sortArrayByDigits = (array) => {
      //     const reg = /\D/g;
      //     array.sort((a, b) =>
      //           (parseInt(a.replace(reg, ''), 10) - parseInt(b.replace(reg, ''), 10)));
      //   };
      //   sortArrayByDigits(historyArr);
      // }

      for (let i = 0; i < historyArr.length; i += 1) {
        if (i < 10) {
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
      }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL2Fzc2V0cy9zb3VuZHMvbW92ZS5tcDMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL0NlbGxOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvTnVtYmVyUHV6emxlLmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvUGljdHVyZVB1enpsZS5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlLy4vc3JjL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovL2dlbS1wdXp6bGUvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9nZW0tcHV6emxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VtLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW0tcHV6emxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dlbS1wdXp6bGUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGtCQUFrQixtQkFBbUIsK0JBQStCLHFFQUFxRSxLQUFLLGNBQWMsa0NBQWtDLEtBQUssa0JBQWtCLG9CQUFvQix1QkFBdUIsS0FBSyxrQkFBa0IsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5Qix5Q0FBeUMsS0FBSyxpQkFBaUIseUJBQXlCLHFCQUFxQixzQkFBc0IsMkJBQTJCLHdCQUF3QixLQUFLLHFCQUFxQiwyQ0FBMkMscUJBQXFCLHdCQUF3Qix5QkFBeUIsS0FBSyxpQkFBaUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsK0JBQStCLDBCQUEwQixxQkFBcUIsS0FBSyx1QkFBdUIsMkJBQTJCLEtBQUssZUFBZSx1QkFBdUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssb0JBQW9CLHVCQUF1QixLQUFLLDBCQUEwQixxQkFBcUIsd0JBQXdCLEtBQUssZUFBZSx5Q0FBeUMsNEJBQTRCLEtBQUsscUJBQXFCLDBCQUEwQix1QkFBdUIsOEJBQThCLDhCQUE4QixtQkFBbUIsNEJBQTRCLEtBQUssc0JBQXNCLHlCQUF5Qiw4QkFBOEIsMkJBQTJCLHVCQUF1QixxQkFBcUIsS0FBSywrQkFBK0IsNERBQTRELHlCQUF5QixtQkFBbUIsS0FBSyxnQ0FBZ0MsOERBQThELHlCQUF5QixtQkFBbUIsU0FBUyw2QkFBNkIsOERBQThELHlCQUF5QixtQkFBbUIsS0FBSywrQkFBK0IsOERBQThELHlCQUF5QixtQkFB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VyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FB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REFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQSw2Qjs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHV6emxlLXdyYXBwZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnB1enpsZSB7XFxyXFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX19uYW1lIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c19faXRlbSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgICBjb2xvcjogIzJBQjZFMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmVzIHtcXHJcXG4gICAgY29sb3I6ICNFNTAyRjE7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19idG4ge1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2J0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjb2xvcjogIzRBNEE0QTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS0tbWVudSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAtMTIuNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tbmV3X2dhbWUtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMHM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zYXZlX2dhbWUtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC4xcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNjb3Jlcy0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjJzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tc2V0dGluZ3MtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC4zcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXJ1bGVzLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuNHM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zb2x1dGlvbi0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjVzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMDVEOUREO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiAyNCU7XFxyXFxuICAgIHdpZHRoOiAyNCU7XFxyXFxuICAgIG1hcmdpbjogMC4xcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNlbGxfX2ltZzQge1xcclxcbiAgICBoZWlnaHQ6IDI0JTtcXHJcXG4gICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgbWFyZ2luOiAwLjFyZW07XFxyXFxufSAqL1xcclxcblxcclxcbltkYXRhLWlkPVxcXCIxXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVEOUREO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBQjZFMTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjNcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODdFRTA7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0REQ1O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiNVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0QkJFMDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjZcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTg5RTU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI3XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1N0YyO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiOFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFM0FCNDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjlcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOTNDRjI7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxMFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzRGMjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjExXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1N0U2O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTJcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4OTY7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxM1xcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDJGMTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjE0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTEwRkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTVcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzFCQkM7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcyxcXHJcXG4uc2V0dGluZ3MsXFxyXFxuLndpbixcXHJcXG4uc2NvcmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM4dnc7XFxyXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUgPiB1bCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luID4gaDIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzIHAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luVGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ybmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDguNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjE1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUtLXZlcnRpY2FsIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC00LjJyZW07XFxyXFxuICAgIHRvcDogNC4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwcmVtO1xcclxcbiAgICB0b3A6IDByZW07XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG5fX2Nsb3NlOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VfX2xpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbGluZS0tdmVydCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwcmVtO1xcclxcbiAgICB0b3A6IDByZW07XFxyXFxufVxcclxcblxcclxcbi5zb2x2ZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5nc19faXRlbTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVfc291bmQsXFxyXFxuLmFjdGl2ZV9tb2RlLFxcclxcbi5hY3RpdmVfc2l6ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi50eXBlX2Jsb2NrLFxcclxcbi5zaXplX2Jsb2NrLFxcclxcbi5zb3VuZF9ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fdHlwZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3NpemUge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5fX3NvdW5kIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZWQge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MgPiBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw1LCAuY2VsbDcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDYsIC5jZWxsOCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTc0RjI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsNyAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0REQ1O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw4ICB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU3RjI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XFxyXFxuLnJ1bGVzLFxcclxcbi5zZXR0aW5ncyxcXHJcXG4ud2luLFxcclxcbi5zY29yZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1M3Z3O1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5ydWxlcywuc2V0dGluZ3MsLndpbiwuc2NvcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYydnc7XFxyXFxuICAgIH1cXHJcXG4gICAgaDIge2ZvbnQtc2l6ZTogMi4zcmVtOyB9XFxyXFxuXFxyXFxuICAgIC5zZXR0aW5ncyA+c3BhbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAucnVsZXMsIC5zZXR0aW5ncywgLndpbiwgLnNjb3JlIHtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgICBtYXgtd2lkdGg6IDcydnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgLnJ1bGVzLCAuc2V0dGluZ3MsIC53aW4sIC5zY29yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODB2dztcXHJcXG59XFxyXFxuICAgIC5zZXR0aW5ncyA+IHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2NvcmU+dWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7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QjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7O0FBRXpCOztBQUVBO0FBQ0E7Ozs7SUFJSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0EsSUFBSSxpQkFBaUIsRUFBRTs7SUFFdkI7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7O0FBRUo7SUFDSTtTQUNLLGlCQUFpQjtTQUNqQixlQUFlO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0FBQ3ZCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wdXp6bGUtd3JhcHBlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHV6emxlIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVfX25hbWUge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzX19pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuICAgIGNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZXMge1xcclxcbiAgICBjb2xvcjogI0U1MDJGMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2J0biB7XFxyXFxuICAgIGNvbG9yOiAjMDVEOUREO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGNvbG9yOiAjNEE0QTRBO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLS1tZW51IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IC0xMi41cmVtO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1uZXdfZ2FtZS0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwcztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNhdmVfZ2FtZS0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjFzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tc2NvcmVzLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuMnM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLS1zZXR0aW5ncy0tb3BlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKSAwLjNzO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0tcnVsZXMtLW9wZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSkgMC40cztcXHJcXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tLXNvbHV0aW9uLS1vcGVuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuNXM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwNUQ5REQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBoZWlnaHQ6IDI0JTtcXHJcXG4gICAgd2lkdGg6IDI0JTtcXHJcXG4gICAgbWFyZ2luOiAwLjFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbF9faW1nNCB7XFxyXFxuICAgIGhlaWdodDogMjQlO1xcclxcbiAgICB3aWR0aDogMjQlO1xcclxcbiAgICBtYXJnaW46IDAuMXJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjFcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNUQ5REQ7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIyXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFCNkUxO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiM1xcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4N0VFMDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTRERDU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI1XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRCQkUwO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiNlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5ODlFNTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjdcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU3RjI7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCI4XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzQUI0O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiOVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I5M0NGMjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjEwXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU3NEYyO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTFcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU3RTY7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxMlxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Mjg5NjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcIjEzXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUwMkYxO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiMTRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMTBGRDU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLWlkPVxcXCIxNVxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzMUJCQztcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLFxcclxcbi5zZXR0aW5ncyxcXHJcXG4ud2luLFxcclxcbi5zY29yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzh2dztcXHJcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZSA+IHVsIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53aW4gPiBoMiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMgcCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi53aW5UZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb3JuZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogOC40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZS0tdmVydGljYWwge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTQuMnJlbTtcXHJcXG4gICAgdG9wOiA0LjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX19jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDByZW07XFxyXFxuICAgIHRvcDogMHJlbTtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fY2xvc2U6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZV9fbGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMC4xNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1saW5lLS12ZXJ0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDByZW07XFxyXFxuICAgIHRvcDogMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvbHZlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzX19pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZV9zb3VuZCxcXHJcXG4uYWN0aXZlX21vZGUsXFxyXFxuLmFjdGl2ZV9zaXplIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzA1RDlERDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnR5cGVfYmxvY2ssXFxyXFxuLnNpemVfYmxvY2ssXFxyXFxuLnNvdW5kX2Jsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX190eXBlIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fc2l6ZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9fc291bmQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyA+IHNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDUsIC5jZWxsNyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQUI2RTE7XFxyXFxufVxcclxcblxcclxcbi5jZWxsNiwgLmNlbGw4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzRGMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw3ICB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTRERDU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDggIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTdGMjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHkge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcXHJcXG4ucnVsZXMsXFxyXFxuLnNldHRpbmdzLFxcclxcbi53aW4sXFxyXFxuLnNjb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUzdnc7XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLnJ1bGVzLC5zZXR0aW5ncywud2luLC5zY29yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNjJ2dztcXHJcXG4gICAgfVxcclxcbiAgICBoMiB7Zm9udC1zaXplOiAyLjNyZW07IH1cXHJcXG5cXHJcXG4gICAgLnNldHRpbmdzID5zcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5ydWxlcywgLnNldHRpbmdzLCAud2luLCAuc2NvcmUge1xcclxcbiAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgIG1heC13aWR0aDogNzJ2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xcclxcbiAgICAucnVsZXMsIC5zZXR0aW5ncywgLndpbiwgLnNjb3JlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xcclxcbn1cXHJcXG4gICAgLnNldHRpbmdzID4gc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY29yZT51bHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL3NvdW5kcy9tb3ZlLm1wM1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcbiAgY29uc3RydWN0b3IocHV6emxlLCBpbmQpIHtcclxuICAgIHRoaXMuaW5kZXggPSBpbmQ7XHJcbiAgICB0aGlzLnB1enpsZSA9IHB1enpsZTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5wdXp6bGUud2lkdGggLyB0aGlzLnB1enpsZS5zaXplO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZURpdigpO1xyXG4gICAgcHV6emxlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXYoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICBkaXYuc3R5bGUub3JkZXIgPSBgJHt0aGlzLmluZGV4ICsgMX1gO1xyXG4gICAgZGl2LmRhdGFzZXQuaWQgPSBgJHt0aGlzLmluZGV4ICsgMX1gO1xyXG4gICAgZGl2LmRhdGFzZXQucG9zID0gYCR7dGhpcy5pbmRleCArIDF9YDtcclxuXHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMucHV6emxlLmltYWdlU3JjfSlgO1xyXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gYCR7dGhpcy5wdXp6bGUud2lkdGh9cmVtICR7dGhpcy5wdXp6bGUuaGVpZ2h0fXJlbWA7XHJcblxyXG4gICAgZGl2LmlubmVyVGV4dCA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcbiAgICBkaXYuc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjMpJztcclxuXHJcbiAgICBjb25zdCBibG9ja1dpZHRoID0gdGhpcy5wdXp6bGUud2lkdGggLyB0aGlzLnB1enpsZS5zaXplO1xyXG4gICAgY29uc3QgYmxvY2tIZWlnaHQgPSB0aGlzLnB1enpsZS5oZWlnaHQgLyB0aGlzLnB1enpsZS5zaXplO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSBibG9ja1dpZHRoICogKHRoaXMuaW5kZXggJSB0aGlzLnB1enpsZS5zaXplKTtcclxuICAgIGNvbnN0IHRvcCA9IGJsb2NrSGVpZ2h0ICogKE1hdGguZmxvb3IodGhpcy5pbmRleCAvIHRoaXMucHV6emxlLnNpemUpKTtcclxuXHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5wdXp6bGUuaGVpZ2h0IC8gdGhpcy5wdXp6bGUuc2l6ZSAtIDAuMn1yZW1gO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5wdXp6bGUud2lkdGggLyB0aGlzLnB1enpsZS5zaXplIC0gMC4yfXJlbWA7XHJcblxyXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAtJHtsZWZ0fXJlbSAtJHt0b3B9cmVtYDtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcbiAgY29uc3RydWN0b3IocHV6emxlLCBpbmQpIHtcclxuICAgIHRoaXMuaW5kZXggPSBpbmQ7XHJcbiAgICB0aGlzLnB1enpsZSA9IHB1enpsZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5wdXp6bGUuaGVpZ2h0IC8gdGhpcy5wdXp6bGUuc2l6ZTtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRGl2KCk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1enpsZScpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEaXYoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIGRpdi5zdHlsZS5vcmRlciA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcbiAgICBkaXYuaW5uZXJUZXh0ID0gYCR7dGhpcy5pbmRleCArIDF9YDtcclxuICAgIGRpdi5kYXRhc2V0LmlkID0gYCR7dGhpcy5pbmRleCArIDF9YDtcclxuICAgIGRpdi5kYXRhc2V0LnBvcyA9IGAke3RoaXMuaW5kZXggKyAxfWA7XHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5wdXp6bGUuaGVpZ2h0IC8gdGhpcy5wdXp6bGUuc2l6ZSAtIDAuMn1yZW1gO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5wdXp6bGUud2lkdGggLyB0aGlzLnB1enpsZS5zaXplIC0gMC4yfXJlbWA7XHJcblxyXG4gICAgaWYgKHRoaXMucHV6emxlLnNpemUgPT09IDUpIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsNScpO1xyXG4gICAgaWYgKHRoaXMucHV6emxlLnNpemUgPT09IDYpIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsNicpO1xyXG4gICAgaWYgKHRoaXMucHV6emxlLnNpemUgPT09IDcpIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsNycpO1xyXG4gICAgaWYgKHRoaXMucHV6emxlLnNpemUgPT09IDgpIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsOCcpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgd2lkdGgsIHNpemUsIG1vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Q29udGVpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICB0aGlzLmFyclBvc2l0aW9uID0gW107XHJcbiAgICB0aGlzLmNvdW50TW92ZXMgPSAwO1xyXG4gICAgdGhpcy5saW1pdExlZnQgPSBbXTtcclxuICAgIHRoaXMubGltaXRSaWdodCA9IFtdO1xyXG4gICAgdGhpcy5hbGxvd0J0bkZvckNsaWNrID0gW107XHJcbiAgICB0aGlzLmVtcHR5UG9zID0gbnVsbDtcclxuICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICB0aGlzLmlzQXV0b0NsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWVJc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hdWRpb09uID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNhdmVHYW1lKCk7XHJcbiAgICB0aGlzLm9wZW5NZW51KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZVdyYXBwZXIoKTtcclxuICAgIHRoaXMucGFyZW50Q29udGVpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMuYXJyUG9zaXRpb24uc3BsaWNlKDAsIHRoaXMuYXJyUG9zaXRpb24ubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVdyYXBwZXIoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAncHV6emxlJztcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luID0gJzJyZW0gYXV0byc7XHJcbiAgICBkaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLndpZHRofXJlbWA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZChkaXYpO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICAvLyBzZXQgbGltaXRlcyBmb3IgbW92ZXNcclxuICBzZXRMaW1pdGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnNpemUgKiB0aGlzLnNpemU7IGkgKz0gdGhpcy5zaXplKSB7IC8vINCe0LPRgNCw0L3QuNGH0LXQvdC40LUg0YHQu9C10LLQsFxyXG4gICAgICB0aGlzLmxpbWl0TGVmdC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc2l6ZTsgaSA8PSB0aGlzLnNpemUgKiB0aGlzLnNpemU7IGkgKz0gdGhpcy5zaXplKSB7IC8vINCe0LPRgNCw0L3QuNGH0LXQvdC40LUg0YHQv9GA0LDQstCwXHJcbiAgICAgIHRoaXMubGltaXRSaWdodC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IHBvc2l0aW9uIGVtcHR5IGVsZW1lbnRzXHJcbiAgZ2V0RW1wdHlQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuZW1wdHlQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKS5zdHlsZS5vcmRlcjtcclxuICAgIHJldHVybiB0aGlzLmVtcHR5UG9zO1xyXG4gIH1cclxuXHJcbiAgLy8gbWFrZSBjbGlja2FibGUgaXRlbXMgbmVhciBlbXB0eSBpdGVtXHJcbiAgYWRkQ2xpY2thYmxlKCkge1xyXG4gICAgdGhpcy5lbXB0eVBvcyA9ICt0aGlzLmdldEVtcHR5UG9zaXRpb24oKTtcclxuICAgIGxldCB0ZW1wVG9wOyBsZXQgdGVtcEJvdHRvbTsgbGV0IHRlbXBMZWZ0OyBsZXRcclxuICAgICAgdGVtcFJpZ2h0O1xyXG5cclxuICAgIC8vIHRvcFxyXG4gICAgaWYgKCh0aGlzLmVtcHR5UG9zIC0gdGhpcy5zaXplKSA+PSAxKSB7XHJcbiAgICAgIHRlbXBUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke3RoaXMuZW1wdHlQb3MgLSB0aGlzLnNpemV9XCJdYCk7XHJcbiAgICAgIHRlbXBUb3AuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljay5wdXNoKHRoaXMuZW1wdHlQb3MgLSB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG4gICAgLy8gYm90dG9tXHJcbiAgICBpZiAodGhpcy5lbXB0eVBvcyArIHRoaXMuc2l6ZSA8PSB0aGlzLnNpemUgKiB0aGlzLnNpemUpIHtcclxuICAgICAgdGVtcEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7dGhpcy5lbXB0eVBvcyArIHRoaXMuc2l6ZX1cIl1gKTtcclxuICAgICAgdGVtcEJvdHRvbS5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuICAgICAgdGhpcy5hbGxvd0J0bkZvckNsaWNrLnB1c2godGhpcy5lbXB0eVBvcyArIHRoaXMuc2l6ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBsZWZ0XHJcbiAgICBpZiAoIXRoaXMubGltaXRMZWZ0LmluY2x1ZGVzKHRoaXMuZW1wdHlQb3MpKSB7XHJcbiAgICAgIHRlbXBMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHt0aGlzLmVtcHR5UG9zIC0gMX1cIl1gKTtcclxuICAgICAgdGVtcExlZnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljay5wdXNoKHRoaXMuZW1wdHlQb3MgLSAxKTtcclxuICAgIH1cclxuICAgIC8vIHJpZ2h0XHJcbiAgICBpZiAoIXRoaXMubGltaXRSaWdodC5pbmNsdWRlcyh0aGlzLmVtcHR5UG9zKSkge1xyXG4gICAgICB0ZW1wUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke3RoaXMuZW1wdHlQb3MgKyAxfVwiXWApO1xyXG4gICAgICB0ZW1wUmlnaHQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljay5wdXNoKHRoaXMuZW1wdHlQb3MgKyAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmFsbG93QnRuRm9yQ2xpY2s7XHJcbiAgfVxyXG5cclxuICAvLyBkZWxldGUgY2xpY2thYmxlIHByb3BlcnR5XHJcbiAgZGVsZXRlQ2xpY2thYmxlKCkge1xyXG4gICAgdGhpcy5hbGxvd0J0bkZvckNsaWNrID0gW107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpY2thYmxlJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrYWJsZScpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hbGxvd0J0bkZvckNsaWNrO1xyXG4gIH1cclxuXHJcbiAgLy8gQUREIEVWRU5UIExJU1RFTkVSIEZPUiBJVEVNLCBNT1ZFIElURU1TIEFORCBBTklNQVRJT05cclxuICBjbGlja0l0ZW1zKCkge1xyXG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKTtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8nKTtcclxuXHJcbiAgICBncmlkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCAnYWxsIDAuM3MgZWFzZS1pbi1vdXQnKTtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSAwLjY7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuc2UgPSBwYXJzZUludChpdGVtLnN0eWxlLndpZHRoLCAxMCkgKyBtYXJnaW47XHJcbiAgICAgICAgLy8gYW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0b0NsaWNrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hdWRpb09uKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlLnRhcmdldC5zdHlsZS5vcmRlciA9PT0gYCR7dGhpcy5lbXB0eVBvcyArIDF9YCkge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2Rpc3RhbnNlfXJlbSlgO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5zdHlsZS5vcmRlciA9PT0gYCR7dGhpcy5lbXB0eVBvcyAtIDF9YCkge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGlzdGFuc2V9cmVtKWA7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnN0eWxlLm9yZGVyID09PSBgJHt0aGlzLmVtcHR5UG9zICsgdGhpcy5zaXplfWApIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtkaXN0YW5zZX1yZW0pYDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuc3R5bGUub3JkZXIgPT09IGAke3RoaXMuZW1wdHlQb3MgLSB0aGlzLnNpemV9YCkge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZGlzdGFuc2V9cmVtKWA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY2hhaGdlIGZsZXg6b3JkZXJcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ25vbmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1clBvcyA9IGl0ZW0uc3R5bGUub3JkZXI7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUub3JkZXIgPSB0aGlzLmVtcHR5UG9zO1xyXG4gICAgICAgICAgICBpdGVtLmRhdGFzZXQucG9zID0gdGhpcy5lbXB0eVBvcztcclxuICAgICAgICAgICAgZW1wdHkuc3R5bGUub3JkZXIgPSBjdXJQb3M7XHJcbiAgICAgICAgICAgIGVtcHR5LmRhdGFzZXQucG9zID0gY3VyUG9zO1xyXG4gICAgICAgICAgICB0aGlzLmFyclBvc2l0aW9uLnB1c2goYCR7aW5kZXggKyAxfSwke2N1clBvc30sJHt0aGlzLmVtcHR5UG9zfWApO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50TW92ZXMgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJc1NvbHZlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNsaWNrYWJsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENsaWNrYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudE1vdmVzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDM1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGN1clBvcyA9IGl0ZW0uc3R5bGUub3JkZXI7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLm9yZGVyID0gdGhpcy5lbXB0eVBvcztcclxuICAgICAgICAgIGl0ZW0uZGF0YXNldC5wb3MgPSB0aGlzLmVtcHR5UG9zO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jykuc3R5bGUub3JkZXIgPSBjdXJQb3M7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKS5kYXRhc2V0LnBvcyA9IGN1clBvcztcclxuICAgICAgICAgIHRoaXMuYXJyUG9zaXRpb24ucHVzaChgJHtpbmRleCArIDF9LCR7Y3VyUG9zfSwke3RoaXMuZW1wdHlQb3N9YCk7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNsaWNrYWJsZSgpO1xyXG4gICAgICAgICAgdGhpcy5hZGRDbGlja2FibGUoKTtcclxuICAgICAgICAgIGlmICh0aGlzLmNvdW50TW92ZXMgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUkFORE9NIElURU06XHJcbiAgLy8gZ2V0IHJhbmRvbSBudW1iZXJcclxuICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBtaW5OdW0gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIGNvbnN0IG1heE51bSA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4TnVtIC0gbWluTnVtKSkgKyBtaW5OdW07XHJcbiAgfVxyXG5cclxuICAvLyBtYWtlIG4tcmFuZG9tIGF1dG9jbGljayBmb3IgcmFuZG9taXplIGl0ZW1zIG9uIHRoZSBmaWVsZFxyXG4gIHJhbmRvbWl6ZUl0ZW0oKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYjtcclxuICAgIGlmICh0aGlzLnNpemUgPT09IDMpIHJhbmRvbU51bWIgPSBHYW1lLmdldFJhbmRvbUludCgzMCwgNjApO1xyXG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gNCkgcmFuZG9tTnVtYiA9IEdhbWUuZ2V0UmFuZG9tSW50KDEwMCwgMTUwKTtcclxuICAgIGlmICh0aGlzLnNpemUgPT09IDUgfHwgdGhpcy5zaXplID09PSA2IHx8IHRoaXMuc2l6ZSA9PT0gNykge1xyXG4gICAgICByYW5kb21OdW1iID0gR2FtZS5nZXRSYW5kb21JbnQoMTUwLCAyMDApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gOCkgcmFuZG9tTnVtYiA9IEdhbWUuZ2V0UmFuZG9tSW50KDIwMCwgMjUwKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWI7IGkgKz0gMSkge1xyXG4gICAgICB0aGlzLmlzQXV0b0NsaWNrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hdXRvQ2xpY2tJdGVtcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVBZnRlckF1dG9DbGljaygpO1xyXG4gICAgcmV0dXJuIHRoaXMuY291bnRNb3ZlcztcclxuICB9XHJcblxyXG4gIC8vIGF1dG9jbGljaywgd2hlbiB3ZSBwdXNoIG9uIHJhbmRvbSBhbGxvdyBpdGVtXHJcbiAgYXV0b0NsaWNrSXRlbXMoKSB7XHJcbiAgICBjb25zdCBSYW5kb21OdW1iQnRuID0gdGhpcy5hbGxvd0J0bkZvckNsaWNrW0dhbWUuZ2V0UmFuZG9tSW50KDAsIHRoaXMuYWxsb3dCdG5Gb3JDbGljay5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7UmFuZG9tTnVtYkJ0bn1cIl1gKTtcclxuICAgIHJhbmRvbUJ0bi5jbGljayh0aGlzLmNsaWNrSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIGF1dG9jbGljay1mbGFnXHJcbiAgdXBkYXRlQWZ0ZXJBdXRvQ2xpY2soKSB7XHJcbiAgICB0aGlzLmlzQXV0b0NsaWNrID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5pc0F1dG9DbGljaztcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSBtb3Zlc1xyXG4gIHVwZGF0ZU1vdmVzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmVzJykuaW5uZXJUZXh0ID0gYE1vdmVzOiAke3RoaXMuY291bnRNb3Zlc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIGJhY2sgYW5kIGZvcnRoIHN0ZXBzXHJcbiAgcmVtb3ZlRHVwbGljYXRlU3RlcHMoKSB7XHJcbiAgICBjb25zdCBhcnIgPSBbLi4udGhpcy5hcnJQb3NpdGlvbl0ucmV2ZXJzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaiArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IEFyck9uZVN0ZXAgPSBhcnJbaV0uc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCBBcnJPbmVTdGVwYmFjayA9IGFycltpICsgMV0uc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgaWYgKEFyck9uZVN0ZXBbMF0gPT09IEFyck9uZVN0ZXBiYWNrWzBdXHJcbiAgICAgICAgICYmIEFyck9uZVN0ZXBbMV0gPT09IEFyck9uZVN0ZXBiYWNrWzJdXHJcbiAgICAgICAgICYmIEFyck9uZVN0ZXBbMl0gPT09IEFyck9uZVN0ZXBiYWNrWzFdKSB7XHJcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hcnJQb3NpdGlvbiA9IHRoaXMuYXJyUG9zaXRpb24uc3BsaWNlKDAsIHRoaXMuYXJyUG9zaXRpb24ubGVuZ3RoKTtcclxuICAgIHRoaXMuYXJyUG9zaXRpb24gPSBbLi4uYXJyXTtcclxuICAgIHJldHVybiB0aGlzLmFyclBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gc29sdmUgYW5pbWF0aW9uIChyZXZlcnNlIGFuaW1hdGlvbilcclxuICByZXZlcnNlSGlzdG9yeSgpIHtcclxuICAgIHRoaXMucmVtb3ZlRHVwbGljYXRlU3RlcHMoKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBbLi4udGhpcy5hcnJQb3NpdGlvbl07XHJcblxyXG4gICAgY29uc3QgbWFrZVN0ZXAgPSAoaGlzdCwgaSA9IDApID0+IHtcclxuICAgICAgY29uc3QgQXJyT25lU3RlcCA9IGhpc3RbaV0uc3BsaXQoJywnKTtcclxuICAgICAgY29uc3QgdGVtcEVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jyk7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7QXJyT25lU3RlcFswXX1cIl1gKTtcclxuXHJcbiAgICAgIHRlbXAuc3R5bGUub3JkZXIgPSBgJHtBcnJPbmVTdGVwWzFdfWA7XHJcbiAgICAgIHRlbXBFbXB0eS5zdHlsZS5vcmRlciA9IGAke0Fyck9uZVN0ZXBbMl19YDtcclxuXHJcbiAgICAgIGlmIChpID09PSBoaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWFrZVN0ZXAoaGlzdCwgaSArIDEpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfTtcclxuICAgIG1ha2VTdGVwKGhpc3RvcnkpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1NvbHZlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tLXNvbHV0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmV2ZXJzZUhpc3RvcnkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRUaW1lcigpIHtcclxuICAgIGxldCB0aW1lTWludXRlID0gMDtcclxuICAgIGxldCBzZWNvbmRzID0gMDtcclxuICAgIGxldCBtaW51dGVzID0gMDtcclxuICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2Vjb25kcyA9IHRpbWVNaW51dGUgJSA2MDtcclxuICAgICAgbWludXRlcyA9IE1hdGgudHJ1bmMoKHRpbWVNaW51dGUgLyA2MCkgJSA2MCk7XHJcblxyXG4gICAgICBjb25zdCBzZWNUZXh0ID0gc2Vjb25kcyA+IDkgPyBgJHtzZWNvbmRzfWAgOiBgMCR7c2Vjb25kc31gO1xyXG4gICAgICBjb25zdCBtaW5UZXh0ID0gbWludXRlcyA+IDkgPyBgJHttaW51dGVzfWAgOiBgMCR7bWludXRlc31gO1xyXG5cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5pbm5lclRleHQgPSBgVGltZTogJHttaW5UZXh0fToke3NlY1RleHR9YDtcclxuICAgICAgdGltZU1pbnV0ZSArPSAxO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBjbGVhclRpbWVyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS0tc2F2ZV9nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZGdhbWUnLCB0aGlzLmFyclBvc2l0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogbG9hZEdhbWUoKXtcclxuICAgICAgbGV0IGxhc3RHYW1lU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhdmVkZ2FtZScpO1xyXG4gICAgICAgICAgbGV0IGxhc3RHYW1lQXJyID0gbGFzdEdhbWVTdHIubWF0Y2goL1xcZHsxLDJ9XFwsXFxkezEsMn1cXCxcXGR7MSwyfS9nKTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RHYW1lQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICBsZXQgQXJyT25lU3RlcCA9IGxhc3RHYW1lQXJyW2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coQXJyT25lU3RlcClcclxuICAgICAgICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtBcnJPbmVTdGVwWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAgIHRlbXAuc3R5bGUub3JkZXIgPSBgJHtBcnJPbmVTdGVwWzFdfWA7XHJcbiAgICAgICAgICAgICAgdGVtcC5kYXRhc2V0LnBvcyA9IGAke0Fyck9uZVN0ZXBbMV19YDtcclxuICAgICAgICAgICAgICBsZXQgdGVtcEVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgdGVtcEVtcHR5LnN0eWxlLm9yZGVyID0gYCR7QXJyT25lU3RlcFsyXX1gO1xyXG4gICAgICAgICAgICAgIHRlbXBFbXB0eS5kYXRhc2V0LnBvcyA9IGAke0Fyck9uZVN0ZXBbMl19YDtcclxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNsaWNrYWJsZSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2thYmxlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgfSAqL1xyXG5cclxuICBnYW1lSXNTb2x2ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnNpemUgKiB0aGlzLnNpemU7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB7IHBvcyB9ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHtpfVwiXWApLmRhdGFzZXQ7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7aX1cIl1gKS5kYXRhc2V0O1xyXG4gICAgICBpZiAocG9zID09PSBpZCAmJiBpID09PSB0aGlzLnNpemUgKiB0aGlzLnNpemUpIHtcclxuICAgICAgICB0aGlzLnNob3dXaW5NZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9zICE9PSBpZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuTWVudSgpIHtcclxuICAgIGNvbnN0IGxpc3RNZW51ID0gWyduZXdfZ2FtZScsICdzYXZlX2dhbWUnLCAnc2NvcmVzJywgJ3NldHRpbmdzJywgJ3J1bGVzJywgJ3NvbHV0aW9uJ107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcclxuICAgICAgbGlzdE1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pdGVtLS0ke2l0ZW19YCkuY2xhc3NMaXN0LmFkZChgaXRlbS0tJHtpdGVtfS0tb3BlbmApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIEdhbWUuc2hvd1J1bGVzKCk7XHJcbiAgICBHYW1lLnNob3dTY29yZSgpO1xyXG4gICAgR2FtZS5jbG9zZU1lbnUoKTtcclxuICAgIHJldHVybiB0aGlzLmdhbWVJc1BhdXNlZDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbG9zZU1lbnUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93V2luTWVzc2FnZSgpIHtcclxuICAgIGNvbnN0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2luLmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xyXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykuaW5uZXJUZXh0LnJlcGxhY2UoJ1RpbWU6JywgJycpO1xyXG4gICAgd2luLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImNvcm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLWhvcml6b250YWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgbGluZS0tdmVydGljYWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgyPllvdSB3b24hPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aW5UZXh0XCI+WW91IHdvbiBpbiAke3RpbWV9IGFuZCAke3RoaXMuY291bnRNb3Zlc30gbW92ZXMhPC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bl9fY2xvc2UgYnRuX19jbG9zZS0td2luXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLXZlcnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLWhvcml6XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+YDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuYWZ0ZXIod2luKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19jbG9zZS0td2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2luLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDUwMCk7XHJcbiAgICB0aGlzLnNhdmVSZXN1bHQoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93UnVsZXMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS0tcnVsZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcnVsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcnVsZXMuY2xhc3NMaXN0LmFkZCgncnVsZXMnKTtcclxuXHJcbiAgICAgIHJ1bGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImNvcm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLWhvcml6b250YWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgbGluZS0tdmVydGljYWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgyPlJ1bGVzPC9oMj5cclxuICAgICAgICAgICAgIDxwPlRoZSBvYmplY3Qgb2YgdGhlIHB1enpsZSBpcyB0byBwbGFjZSB0aGUgdGlsZXMgaW4gb3JkZXI8YnI+XHJcbiAgICAgICAgICAgICAgICBieSBtYWtpbmcgc2xpZGluZyBtb3ZlcyB0aGF0IHVzZSB0aGUgZW1wdHkgc3BhY2UuPGJyPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgWW91IGNhbiBzYXZlIHlvdXIgZ2FtZSBhbmQgbG9hZCBpdCBsYXRlci48YnI+XHJcbiAgICAgICAgICAgICAgICBPciB5b3UgY2FuIGp1c3QgdXNlIHBhdXNlIGJ1dHRvbi48YnI+XHJcbiAgICAgICAgICAgICAgICBBbHNvIHlvdSBjYW4gY2hvb3NlIGdhbWUgZmllbGQgc2l6ZSBhbmQgbW9kZSAocGljdHVyZSBvciBudW1iZXIpLDxicj5cclxuICAgICAgICAgICAgICAgIGFuZCB0dXJuIG9uIG9yIHR1dG4gb2ZmIHNvdW5kcyBpbiBTZXR0aW5ncy48YnI+XHJcbiAgICAgICAgICAgICAgICBIYXZlIGEgbmljZSBnYW1lITwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5fX2Nsb3NlIGJ0bl9fY2xvc2UtLXJ1bGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLXZlcnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLWhvcml6XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+YDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmFmdGVyKHJ1bGVzKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2Nsb3NlLS1ydWxlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgcnVsZXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlUmVzdWx0KCkge1xyXG4gICAgbGV0IGNvdW50UGxhY2UgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgaWYgKGtleS5tYXRjaCgvcGxhY2UvKSkge1xyXG4gICAgICAgIGNvdW50UGxhY2UgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykuaW5uZXJUZXh0LnJlcGxhY2UoJ1RpbWU6JywgJycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHBsYWNlJHtjb3VudFBsYWNlfWAsXHJcbiAgICAgIGAke3RoaXMuY291bnRNb3Zlc31fX19fX19fX18ke3RpbWV9X19fX19fXyR7dGhpcy5zaXplfV9fX19fX18ke3RoaXMubW9kZX1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93U2NvcmUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS0tc2NvcmVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlJyk7XHJcblxyXG4gICAgICBzY29yZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJjb3JuZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS1ob3Jpem9udGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lIGxpbmUtLXZlcnRpY2FsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMj5CZXN0IHNjb3JlczwvaDI+XHJcbiAgICAgICAgIDx1bCBjbGFzcz1cInNjb3Jlc19fbGlzdFwiPlxyXG4gICAgICAgICA8bGkgY2xhc3M9XCJzY29yZV9wb3NpdGlvbiBwb3NpdGlvbl9oZWFkaW5nXCI+I19fX19fX19TdGVwc19fX19fX19UaW1lX19fX19fX0ZpZWxkX19fX19fX01vZGU8L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bl9fY2xvc2UgYnRuX19jbG9zZS0tc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VfX2xpbmUgY2xvc2UtbGluZS0tdmVydFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VfX2xpbmUgY2xvc2UtbGluZS0taG9yaXpcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuYWZ0ZXIoc2NvcmUpO1xyXG5cclxuICAgICAgY29uc3QgaGlzdG9yeUFyciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgaWYgKGtleS5tYXRjaCgvcGxhY2UvKSkge1xyXG4gICAgICAgICAgaGlzdG9yeUFyci5wdXNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwbGFjZSR7aSArIDF9YCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAoaGlzdG9yeUFyci5sZW5ndGggPiAxKSB7XHJcbiAgICAgIC8vICAgY29uc3Qgc29ydEFycmF5QnlEaWdpdHMgPSAoYXJyYXkpID0+IHtcclxuICAgICAgLy8gICAgIGNvbnN0IHJlZyA9IC9cXEQvZztcclxuICAgICAgLy8gICAgIGFycmF5LnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIC8vICAgICAgICAgICAocGFyc2VJbnQoYS5yZXBsYWNlKHJlZywgJycpLCAxMCkgLSBwYXJzZUludChiLnJlcGxhY2UocmVnLCAnJyksIDEwKSkpO1xyXG4gICAgICAvLyAgIH07XHJcbiAgICAgIC8vICAgc29ydEFycmF5QnlEaWdpdHMoaGlzdG9yeUFycik7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgICAgIGNvbnN0IHNjb3JlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgc2NvcmVMaS5jbGFzc0xpc3QuYWRkKCdzY29yZV9wb3NpdGlvbicpO1xyXG4gICAgICAgICAgc2NvcmVMaS5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbiR7aSArIDF9YCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgY3VyUG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlc19fbGlzdCcpLmxhc3RDaGlsZDtcclxuICAgICAgICAgIGN1clBvcy5hZnRlcihzY29yZUxpKTtcclxuICAgICAgICAgIHNjb3JlTGkuaW5uZXJUZXh0ID0gYCR7aSArIDF9X19fX19fX19fJHtoaXN0b3J5QXJyW2ldfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2Nsb3NlLS1zY29yZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgc2NvcmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgQ2VsbE51bWJlciBmcm9tICcuL0NlbGxOdW1iZXInO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyUHV6emxlIGV4dGVuZHMgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCB3aWR0aCwgc2l6ZSwgbW9kZSkge1xyXG4gICAgc3VwZXIoY29udGFpbmVyLCB3aWR0aCwgc2l6ZSwgbW9kZSk7XHJcbiAgICB0aGlzLnBhcmVudENvbnRlaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gd2lkdGg7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICAgIHRoaXMuY2VsbHMgPSBbXTtcclxuICAgIHRoaXMuYXJyUG9zaXRpb24gPSBbXTtcclxuICAgIHRoaXMubGltaXRMZWZ0ID0gW107XHJcbiAgICB0aGlzLmxpbWl0UmlnaHQgPSBbXTtcclxuICAgIHRoaXMuYWxsb3dCdG5Gb3JDbGljayA9IFtdO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2VsbHMoKTtcclxuICAgIHRoaXMuc2V0TGltaXRlKCk7XHJcbiAgICB0aGlzLmFkZENsaWNrYWJsZSgpO1xyXG4gICAgdGhpcy5yYW5kb21pemVJdGVtKCk7XHJcbiAgICB0aGlzLmNvdW50TW92ZXMgPSAwO1xyXG4gICAgdGhpcy5zaG93U29sdmUoKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2VsbHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZTsgaSArPSAxKSB7XHJcbiAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbE51bWJlcih0aGlzLCBpKSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7dGhpcy5zaXplICogdGhpcy5zaXplfVwiXWApLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICB0aGlzLmNsaWNrSXRlbXMoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWN0dXJlUHV6emxlIGV4dGVuZHMgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBpbWFnZVNyYywgd2lkdGgsIHNpemUsIG1vZGUpIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lciwgd2lkdGgsIHNpemUsIG1vZGUpO1xyXG4gICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU3JjO1xyXG4gICAgdGhpcy5wYXJlbnRDb250ZWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IHdpZHRoO1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICB0aGlzLmNlbGxzID0gW107XHJcbiAgICB0aGlzLmFyclBvc2l0aW9uID0gW107XHJcbiAgICB0aGlzLmNvdW50TW92ZXMgPSAwO1xyXG4gICAgdGhpcy5saW1pdExlZnQgPSBbXTtcclxuICAgIHRoaXMubGltaXRSaWdodCA9IFtdO1xyXG4gICAgdGhpcy5hbGxvd0J0bkZvckNsaWNrID0gW107XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IChpbWcuaGVpZ2h0ICogdGhpcy53aWR0aCkgLyBpbWcud2lkdGg7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH1yZW1gO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodH1yZW1gO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWcuc3JjID0gdGhpcy5pbWFnZVNyYztcclxuICAgIHRoaXMuZ2VuZXJhdGVDZWxscygpO1xyXG4gICAgdGhpcy5lbXB0eVBvcyA9ICt0aGlzLmdldEVtcHR5UG9zaXRpb24oKTtcclxuICAgIHRoaXMuc2V0TGltaXRlKCk7XHJcbiAgICB0aGlzLmFkZENsaWNrYWJsZSgpO1xyXG4gICAgdGhpcy5yYW5kb21pemVJdGVtKCk7XHJcbiAgICB0aGlzLnNob3dTb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDZWxscygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplICogdGhpcy5zaXplOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5jZWxscy5wdXNoKG5ldyBDZWxsKHRoaXMsIGkpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0aGlzLnNpemUgKiB0aGlzLnNpemV9XCJdYCkuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgIHRoaXMuY2xpY2tJdGVtcygpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW52aXJvbm1lbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xyXG4gIGRvY3VtZW50LmJvZHkucHJlcGVuZChjb250ZW50KTtcclxuXHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3dyYXBwZXInO1xyXG4gIGNvbnRlbnQucHJlcGVuZCh3cmFwcGVyKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX3dyYXBwZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZ2FtZV9fbmFtZVwiPiNHZW08YnI+IFB1enpsZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1c19faXRlbSBtZW51X19idG5cIj5NZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzX19pdGVtIG1vdmVzXCI+TW92ZXM6IDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNfX2l0ZW0gdGltZVwiPlRpbWU6IDAwOjAwPC9zcGFuPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51IGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gaXRlbS0tbmV3X2dhbWVcIj5OZXcgZ2FtZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gaXRlbS0tc2F2ZV9nYW1lXCI+U2F2ZSBnYW1lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSBpdGVtLS1zY29yZXNcIj5CZXN0IHNjb3JlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gaXRlbS0tc2V0dGluZ3NcIj5TZXR0aW5nczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gaXRlbS0tc29sdXRpb25cIj5Tb2x1dGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gaXRlbS0tcnVsZXNcIj5SdWxlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gY2xvc2UtLW1lbnVcIj4gICA8c3BhbiBjbGFzcz1cImJ0bl9fY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS12ZXJ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLWhvcml6XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjbGFzcz1cImF1ZGlvXCIgc3JjPVwiYXNzZXRzL3NvdW5kcy9tb3ZlLm1wM1wiPjwvYXVkaW8+YDtcclxuICB3cmFwcGVyLnByZXBlbmQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgcHV6emxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHV6emxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwdXp6bGUtd3JhcHBlcic7XHJcbiAgd3JhcHBlci5hcHBlbmQocHV6emxlQ29udGFpbmVyKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3NvdW5kcy9tb3ZlLm1wMyc7XHJcbmltcG9ydCBQaWN0dXJlUHV6emxlIGZyb20gJy4vUGljdHVyZVB1enpsZSc7XHJcbmltcG9ydCBOdW1iZXJQdXp6bGUgZnJvbSAnLi9OdW1iZXJQdXp6bGUnO1xyXG5pbXBvcnQgY3JlYXRlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcblxyXG5sZXQgbW9kZSA9ICcnO1xyXG5sZXQgc2l6ZSA9IDQ7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJQdXp6bGUoKSB7XHJcbiAgY29uc3QgbnVtYmVyUHV6emxlID0gbmV3IE51bWJlclB1enpsZShcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUtd3JhcHBlcicpLCAzMCwgc2l6ZSwgJ251bWJlcicsXHJcbiAgKTtcclxuICBtb2RlID0gJ251bWJlcic7XHJcbiAgcmV0dXJuIG1vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBpY3RpcmVQdXp6bGUoKSB7XHJcbiAgY29uc3Qgc2V0UmFuZG9tSW1nID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcblxyXG4gIGNvbnN0IHJhbmRvbUltZyA9IHNldFJhbmRvbUltZygxLCAxNTEpO1xyXG5cclxuICBjb25zdCBwaWN0dXJlUHV6emxlID0gbmV3IFBpY3R1cmVQdXp6bGUoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV6emxlLXdyYXBwZXInKSxcclxuICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaXJpbmFpbmluYS9pbWFnZS1kYXRhL21hc3Rlci9ib3gvJHtyYW5kb21JbWd9LmpwZ2AsXHJcbiAgICAzMCwgc2l6ZSwgJ3BpY3R1cmUnLFxyXG4gICk7XHJcbiAgbW9kZSA9ICdwaWN0dXJlJztcclxuICByZXR1cm4gbW9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NldHRpbmdzKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLS1zZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzJyk7XHJcblxyXG4gICAgc2V0dGluZ3MuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiY29ybmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSBsaW5lLS1ob3Jpem9udGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgbGluZS0tdmVydGljYWxcIj48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxoMj5TZXR0aW5nczwvaDI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlX2Jsb2NrXCI+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX190eXBlXCI+bW9kZTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIG1vZGUtLW51bWJlciBhY3RpdmVfbW9kZVwiIGRhdGEtbW9kZT1cImFjdGl2ZV9tb2RlXCI+bnVtYmVyPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIG1vZGUtLXBpY3R1cmVcIiBkYXRhLW1vZGU9XCJpbmFjdGl2ZV9tb2RlXCI+cGljdHVyZTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+PGJyPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV9ibG9ja1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX19zaXplXCI+ZmllbGQ6IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXR0aW5nc19faXRlbSBzaXplX19pdGVtIHNpemUzXCIgZGF0YS1zaXplPVwiaW5hY3RpdmVfc2l6ZVwiPiAzeDMgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNpemVfX2l0ZW0gc2l6ZTQgYWN0aXZlX3NpemVcIiBkYXRhLXNpemU9XCJhY3RpdmVfc2l6ZVwiPiA0eDQgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNpemVfX2l0ZW0gc2l6ZTVcIiBkYXRhLXNpemU9XCJpbmFjdGl2ZV9zaXplXCI+IDV4NSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3NfX2l0ZW0gc2l6ZV9faXRlbSBzaXplNlwiIGRhdGEtc2l6ZT1cImluYWN0aXZlX3NpemVcIj4gNng2IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXR0aW5nc19faXRlbSBzaXplX19pdGVtIHNpemU3XCIgZGF0YS1zaXplPVwiaW5hY3RpdmVfc2l6ZVwiPiA3eDcgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNpemVfX2l0ZW0gc2l6ZThcIiBkYXRhLXNpemU9XCJpbmFjdGl2ZV9zaXplXCI+IDh4OCA8L3NwYW4+XHJcbjwvc3Bhbj48YnI+XHJcbjxzcGFuIGNsYXNzPVwic291bmRfYmxvY2tcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bl9fc291bmRcIj5zb3VuZDogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNvdW5kLS1vbiBhY3RpdmVfc291bmQgXCIgZGF0YS1zb3VuZD1cImFjdGl2ZV9zb3VuZFwiPm9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzX19pdGVtIHNvdW5kLS1vZmZcIiBkYXRhLXNvdW5kPVwiaW5hY3RpdmVfc291bmRcIj5vZmY8L3NwYW4+XHJcbjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bl9fY2xvc2UgY2xvc2Utc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZV9fbGluZSBjbG9zZS1saW5lLS12ZXJ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlX19saW5lIGNsb3NlLWxpbmUtLWhvcml6XCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmFmdGVyKHNldHRpbmdzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgbW9kZVBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZS0tcGljdHVyZScpO1xyXG4gICAgICBjb25zdCBtb2RlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGUtLW51bWJlcicpO1xyXG4gICAgICBjb25zdCBzaXplcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaXplX19pdGVtJyk7XHJcbiAgICAgIGNvbnN0IHNvdW5kT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmQtLW9uJyk7XHJcbiAgICAgIGNvbnN0IHNvdW5kT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdW5kLS1vZmYnKTtcclxuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8nKTtcclxuXHJcbiAgICAgIHNpemVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHNpemUgPSBpbmRleCArIDM7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3NpemUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfc2l6ZScpO1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfc2l6ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1enpsZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgaWYgKG1vZGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU51bWJlclB1enpsZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGNyZWF0ZVBpY3RpcmVQdXp6bGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtb2RlTnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGUgPSAnbnVtYmVyJztcclxuICAgICAgICBtb2RlUGljdHVyZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfbW9kZScpO1xyXG4gICAgICAgIG1vZGVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX21vZGUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV6emxlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY3JlYXRlTnVtYmVyUHV6emxlKCk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW9kZVBpY3R1cmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kZSA9ICdwaWN0dXJlJztcclxuICAgICAgICBtb2RlUGljdHVyZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbW9kZScpO1xyXG4gICAgICAgIG1vZGVOdW1iZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX21vZGUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV6emxlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY3JlYXRlUGljdGlyZVB1enpsZSgpO1xyXG4gICAgICAgIHJldHVybiBtb2RlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHNvdW5kIG9mZlxyXG4gICAgICBzb3VuZE9mZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzb3VuZE9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9zb3VuZCcpO1xyXG4gICAgICAgIHNvdW5kT2ZmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9zb3VuZCcpO1xyXG4gICAgICAgIGF1ZGlvLm11dGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmF1ZGlvT24gPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBzb3VuZCBvblxyXG4gICAgICBzb3VuZE9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNvdW5kT2ZmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9zb3VuZCcpO1xyXG4gICAgICAgIHNvdW5kT24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3NvdW5kJyk7XHJcbiAgICAgICAgYXVkaW8ubXV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hdWRpb09uID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Utc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZXR0aW5ncy5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLS1uZXdfZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXp6bGUnKS5yZW1vdmUoKTtcclxuICAgICAgY3JlYXRlTnVtYmVyUHV6emxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV6emxlJykucmVtb3ZlKCk7XHJcbiAgICAgIGNyZWF0ZVBpY3RpcmVQdXp6bGUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY3JlYXRlRW52aXJvbm1lbnQoKTtcclxuY3JlYXRlTnVtYmVyUHV6emxlKCk7XHJcbnNob3dTZXR0aW5ncygpO1xyXG5uZXdHYW1lKCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=