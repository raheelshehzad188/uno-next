/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/themeCustomizerConfig.js":
/*!*****************************************!*\
  !*** ./config/themeCustomizerConfig.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigDB: () => (/* binding */ ConfigDB)\n/* harmony export */ });\nconst ConfigDB = {\n    LayoutMode: \"light-layout\",\n    LayoutType: \"ltr\",\n    // PrimaryColor: \"#1C7C54\",\n    // SecondaryColor: \"#1C7C54\",\n    // PrimaryColor: \"#3777FF\",\n    // SecondaryColor: \"#6237ff\",\n    // PrimaryColor: \"#004d42\",\n    // SecondaryColor: \"#004d42\",\n    PrimaryColor: \"#163b64\",\n    SecondaryColor: \"#00648D\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvdGhlbWVDdXN0b21pemVyQ29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCQyxZQUFZO0lBQ1pDLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QkMsY0FBYztJQUNkQyxnQkFBZ0I7QUFDbEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Vuby1yZWFsLWVzdGF0ZS8uL2NvbmZpZy90aGVtZUN1c3RvbWl6ZXJDb25maWcuanM/Yzg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29uZmlnREIgPSB7XG4gIExheW91dE1vZGU6IFwibGlnaHQtbGF5b3V0XCIsXG4gIExheW91dFR5cGU6IFwibHRyXCIsXG4gIC8vIFByaW1hcnlDb2xvcjogXCIjMUM3QzU0XCIsXG4gIC8vIFNlY29uZGFyeUNvbG9yOiBcIiMxQzdDNTRcIixcbiAgLy8gUHJpbWFyeUNvbG9yOiBcIiMzNzc3RkZcIixcbiAgLy8gU2Vjb25kYXJ5Q29sb3I6IFwiIzYyMzdmZlwiLFxuICAvLyBQcmltYXJ5Q29sb3I6IFwiIzAwNGQ0MlwiLFxuICAvLyBTZWNvbmRhcnlDb2xvcjogXCIjMDA0ZDQyXCIsXG4gIFByaW1hcnlDb2xvcjogXCIjMTYzYjY0XCIsXG4gIFNlY29uZGFyeUNvbG9yOiBcIiMwMDY0OERcIixcbn07XG4iXSwibmFtZXMiOlsiQ29uZmlnREIiLCJMYXlvdXRNb2RlIiwiTGF5b3V0VHlwZSIsIlByaW1hcnlDb2xvciIsIlNlY29uZGFyeUNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/themeCustomizerConfig.js\n");

/***/ }),

/***/ "./layout/TapToTop.js":
/*!****************************!*\
  !*** ./layout/TapToTop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TapToTop = ()=>{\n    const [goingUp, setGoingUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Tap to Top Scroll\n        const handleScroll = ()=>{\n            const currentScrollY = window.scrollY;\n            if (currentScrollY > 500) setGoingUp(true);\n            else setGoingUp(false);\n        };\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        goingUp\n    ]);\n    const tapToTop = ()=>{\n        window.scrollTo({\n            behavior: \"smooth\",\n            top: 0\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `tap-top ${goingUp ? \"top\" : \"\"}`,\n        onClick: tapToTop,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fas fa-arrow-up\"\n            }, void 0, false, {\n                fileName: \"/Users/hassan/Documents/uno-next/layout/TapToTop.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hassan/Documents/uno-next/layout/TapToTop.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hassan/Documents/uno-next/layout/TapToTop.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TapToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvVGFwVG9Ub3AuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLFdBQVc7SUFDZixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1Isb0JBQW9CO1FBQ3BCLE1BQU1LLGVBQWU7WUFDbkIsTUFBTUMsaUJBQWlCQyxPQUFPQyxPQUFPO1lBQ3JDLElBQUlGLGlCQUFpQixLQUFLRixXQUFXO2lCQUNoQ0EsV0FBVztRQUNsQjtRQUNBRyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSixjQUFjO1lBQUVLLFNBQVM7UUFBSztRQUVoRSxPQUFPLElBQU1ILE9BQU9JLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUc7UUFBQ0Y7S0FBUTtJQUVaLE1BQU1TLFdBQVc7UUFDZkwsT0FBT00sUUFBUSxDQUFDO1lBQ2RDLFVBQVU7WUFDVkMsS0FBSztRQUNQO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxDQUFDLFFBQVEsRUFBRWQsVUFBVSxRQUFRLEdBQUcsQ0FBQztRQUFFZSxTQUFTTjtrQkFDMUQsNEVBQUNJO3NCQUNDLDRFQUFDRztnQkFBRUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtBQUVBLGlFQUFlZixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5vLXJlYWwtZXN0YXRlLy4vbGF5b3V0L1RhcFRvVG9wLmpzPzdmNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUYXBUb1RvcCA9ICgpID0+IHtcbiAgY29uc3QgW2dvaW5nVXAsIHNldEdvaW5nVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVGFwIHRvIFRvcCBTY3JvbGxcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgaWYgKGN1cnJlbnRTY3JvbGxZID4gNTAwKSBzZXRHb2luZ1VwKHRydWUpO1xuICAgICAgZWxzZSBzZXRHb2luZ1VwKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtnb2luZ1VwXSk7XG5cbiAgY29uc3QgdGFwVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgdG9wOiAwLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFwLXRvcCAke2dvaW5nVXAgPyBcInRvcFwiIDogXCJcIn1gfSBvbkNsaWNrPXt0YXBUb1RvcH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy11cCc+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXBUb1RvcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhcFRvVG9wIiwiZ29pbmdVcCIsInNldEdvaW5nVXAiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsWSIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXBUb1RvcCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ0b3AiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/TapToTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/scss/app.scss */ \"./public/assets/scss/app.scss\");\n/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _layout_TapToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/TapToTop */ \"./layout/TapToTop.js\");\n/* harmony import */ var _redux_toolkit_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux-toolkit/store */ \"./redux-toolkit/store.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/themeCustomizerConfig */ \"./config/themeCustomizerConfig.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        router.events.on(\"routeChangeComplete\", ()=>{\n            document.documentElement.style.setProperty(\"--theme-default\", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.PrimaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.PrimaryColor : \"#163b64\");\n            document.documentElement.style.setProperty(\"--theme-default2\", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.SecondaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.SecondaryColor : \"#00648D\");\n        });\n        document.documentElement.style.setProperty(\"--theme-default\", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.PrimaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.PrimaryColor : \"#163b64\");\n        document.documentElement.style.setProperty(\"--theme-default2\", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.SecondaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_11__.ConfigDB.SecondaryColor : \"#00648D\");\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://www.googletagmanager.com/gtag/js?id=G-C508DE32EC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-C508DE32EC');`\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"UNO Real Estate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"UNO - Real Estate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"UNO, Real Estate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"UNO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        children: \"@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i'); @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap'); @import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i');\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icon.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"UNO - Real Estate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"google-site-verification\",\n                        content: \"fjgGzodvfq1RcGZ1_PAxUfAIoZM2aF3qOgoNaC88KBY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n                store: _redux_toolkit_store__WEBPACK_IMPORTED_MODULE_8__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_TapToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/hassan/Documents/uno-next/pages/_app.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1g7QUFDVTtBQUNXO0FBQ1Y7QUFDTjtBQUNRO0FBQ0s7QUFDQTtBQUNQO0FBQ087QUFDWTtBQUUzRCxTQUFTUSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUM7UUFDUk8sT0FBT0MsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCO1lBQ3RDQyxTQUFTQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUN4QyxtQkFDQVYsb0VBQVFBLENBQUNXLFlBQVksR0FBR1gsb0VBQVFBLENBQUNXLFlBQVksR0FBRztZQUVsREosU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FDeEMsb0JBQ0FWLG9FQUFRQSxDQUFDWSxjQUFjLEdBQUdaLG9FQUFRQSxDQUFDWSxjQUFjLEdBQUc7UUFFeEQ7UUFDQUwsU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FDeEMsbUJBQ0FWLG9FQUFRQSxDQUFDVyxZQUFZLEdBQUdYLG9FQUFRQSxDQUFDVyxZQUFZLEdBQUc7UUFFbERKLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQ3hDLG9CQUNBVixvRUFBUUEsQ0FBQ1ksY0FBYyxHQUFHWixvRUFBUUEsQ0FBQ1ksY0FBYyxHQUFHO0lBRXhELEdBQUc7UUFBQ1IsT0FBT0MsTUFBTTtLQUFDO0lBRWxCLHFCQUNFOzswQkFDRSw4REFBQ1osa0RBQUlBOztrQ0FDSCw4REFBQ29CO3dCQUNDQyxLQUFLO3dCQUNMQyxLQUFJOzs7Ozs7a0NBRU4sOERBQUNGO3dCQUNDRyx5QkFBeUI7NEJBQ3ZCQyxRQUFRLENBQUM7Ozs7aUNBSVksQ0FBQzt3QkFDeEI7Ozs7OztrQ0FFRiw4REFBQ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLFdBQVU7d0JBQWtCQyxTQUFROzs7Ozs7a0NBQzFDLDhEQUFDRjt3QkFBS0csTUFBSzt3QkFBV0QsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0Y7d0JBQUtHLE1BQUs7d0JBQWNELFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLRyxNQUFLO3dCQUFXRCxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDRjt3QkFBS0csTUFBSzt3QkFBU0QsU0FBUTs7Ozs7O2tDQUM1Qiw4REFBQ1o7a0NBQU07Ozs7OztrQ0FRUCw4REFBQ2M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7d0JBQVlDLE1BQUs7Ozs7OztrQ0FDdkMsOERBQUNSO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDRyxNQUFLO3dCQUNMRCxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUMzQixpREFBUUE7Z0JBQUNLLE9BQU9BLHVEQUFLQTswQkFDcEI7O3NDQUNFLDhEQUFDRzs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7c0NBQ3hCLDhEQUFDTCx3REFBUUE7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0FBRUEsaUVBQWVILGdFQUFrQkEsQ0FBQ00sTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vuby1yZWFsLWVzdGF0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhcFRvVG9wIGZyb20gXCIuLi9sYXlvdXQvVGFwVG9Ub3BcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4LXRvb2xraXQvc3RvcmVcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBcInBob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgQ29uZmlnREIgfSBmcm9tIFwiLi4vY29uZmlnL3RoZW1lQ3VzdG9taXplckNvbmZpZ1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiLS10aGVtZS1kZWZhdWx0XCIsXG4gICAgICAgIENvbmZpZ0RCLlByaW1hcnlDb2xvciA/IENvbmZpZ0RCLlByaW1hcnlDb2xvciA6IFwiIzE2M2I2NFwiXG4gICAgICApO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tdGhlbWUtZGVmYXVsdDJcIixcbiAgICAgICAgQ29uZmlnREIuU2Vjb25kYXJ5Q29sb3IgPyBDb25maWdEQi5TZWNvbmRhcnlDb2xvciA6IFwiIzAwNjQ4RFwiXG4gICAgICApO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS10aGVtZS1kZWZhdWx0XCIsXG4gICAgICBDb25maWdEQi5QcmltYXJ5Q29sb3IgPyBDb25maWdEQi5QcmltYXJ5Q29sb3IgOiBcIiMxNjNiNjRcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXRoZW1lLWRlZmF1bHQyXCIsXG4gICAgICBDb25maWdEQi5TZWNvbmRhcnlDb2xvciA/IENvbmZpZ0RCLlNlY29uZGFyeUNvbG9yIDogXCIjMDA2NDhEXCJcbiAgICApO1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctQzUwOERFMzJFQ1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gIGd0YWcoJ2NvbmZpZycsICdHLUM1MDhERTMyRUMnKTtgLFxuICAgICAgICAgIH19XG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHRpdGxlPlVOTyBSZWFsIEVzdGF0ZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVU5PIC0gUmVhbCBFc3RhdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiVU5PLCBSZWFsIEVzdGF0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiVU5PXCIgLz5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIEBpbXBvcnRcbiAgICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpLDgwMCw4MDBpJyk7XG4gICAgICAgICAgQGltcG9ydFxuICAgICAgICAgIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICBAaW1wb3J0XG4gICAgICAgICAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGknKTtcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5zdmdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPHRpdGxlPlVOTyAtIFJlYWwgRXN0YXRlPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiZmpnR3pvZHZmcTFSY0daMV9QQXhVZkFJb1pNMmFGM3FPZ29OYUM4OEtCWVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPFRhcFRvVG9wIC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUHJvdmlkZXIiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJUYXBUb1RvcCIsInN0b3JlIiwiQ29uZmlnREIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImV2ZW50cyIsIm9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiUHJpbWFyeUNvbG9yIiwiU2Vjb25kYXJ5Q29sb3IiLCJzY3JpcHQiLCJhc3luYyIsInNyYyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGl0bGUiLCJtZXRhIiwiaHR0cEVxdWl2IiwiY29udGVudCIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux-toolkit/reducers/currencyReducer.js":
/*!***************************************************!*\
  !*** ./redux-toolkit/reducers/currencyReducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currencyReducer: () => (/* binding */ currencyReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    currency: \"AED\",\n    name: \"United Arab Emirates Dirham\",\n    symbol: \"AED\",\n    currencyValue: 1\n};\nconst currencyReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, {\n    currencyChange: (state, action)=>{\n        state.currency = action.payload.currency;\n        state.name = action.payload.name;\n        state.symbol = action.payload.symbol;\n        state.currencyValue = action.payload.value;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC10b29sa2l0L3JlZHVjZXJzL2N1cnJlbmN5UmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUMsZUFBZTtJQUNuQkMsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsZUFBZTtBQUNqQjtBQUVPLE1BQU1DLGtCQUFrQk4sK0RBQWFBLENBQUNDLGNBQWM7SUFDekRNLGdCQUFnQixDQUFDQyxPQUFPQztRQUN0QkQsTUFBTU4sUUFBUSxHQUFHTyxPQUFPQyxPQUFPLENBQUNSLFFBQVE7UUFDeENNLE1BQU1MLElBQUksR0FBR00sT0FBT0MsT0FBTyxDQUFDUCxJQUFJO1FBQ2hDSyxNQUFNSixNQUFNLEdBQUdLLE9BQU9DLE9BQU8sQ0FBQ04sTUFBTTtRQUNwQ0ksTUFBTUgsYUFBYSxHQUFHSSxPQUFPQyxPQUFPLENBQUNDLEtBQUs7SUFDNUM7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5vLXJlYWwtZXN0YXRlLy4vcmVkdXgtdG9vbGtpdC9yZWR1Y2Vycy9jdXJyZW5jeVJlZHVjZXIuanM/MTM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjdXJyZW5jeTogXCJBRURcIixcbiAgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlcyBEaXJoYW1cIixcbiAgc3ltYm9sOiBcIkFFRFwiLFxuICBjdXJyZW5jeVZhbHVlOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XG4gIGN1cnJlbmN5Q2hhbmdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLmN1cnJlbmN5ID0gYWN0aW9uLnBheWxvYWQuY3VycmVuY3k7XG4gICAgc3RhdGUubmFtZSA9IGFjdGlvbi5wYXlsb2FkLm5hbWU7XG4gICAgc3RhdGUuc3ltYm9sID0gYWN0aW9uLnBheWxvYWQuc3ltYm9sO1xuICAgIHN0YXRlLmN1cnJlbmN5VmFsdWUgPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJjdXJyZW5jeVZhbHVlIiwiY3VycmVuY3lSZWR1Y2VyIiwiY3VycmVuY3lDaGFuZ2UiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-toolkit/reducers/currencyReducer.js\n");

/***/ }),

/***/ "./redux-toolkit/reducers/gridReducer.js":
/*!***********************************************!*\
  !*** ./redux-toolkit/reducers/gridReducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gridReducer: () => (/* binding */ gridReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initialState = {\n    gridSize: \"2\",\n    gridStyle: \"\"\n};\nconst gridReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, {\n    gridSize: (state, action)=>{\n        state.gridSize = action.payload;\n    },\n    gridStyle: (state, action)=>{\n        state.gridSize = action.payload;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC10b29sa2l0L3JlZHVjZXJzL2dyaWRSZWR1Y2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxJQUFJQyxlQUFlO0lBQUVDLFVBQVU7SUFBS0MsV0FBVztBQUFHO0FBRTNDLE1BQU1DLGNBQWNKLCtEQUFhQSxDQUFDQyxjQUFjO0lBQ3JEQyxVQUFVLENBQUNHLE9BQU9DO1FBQ2hCRCxNQUFNSCxRQUFRLEdBQUdJLE9BQU9DLE9BQU87SUFDakM7SUFDQUosV0FBVyxDQUFDRSxPQUFPQztRQUNqQkQsTUFBTUgsUUFBUSxHQUFHSSxPQUFPQyxPQUFPO0lBQ2pDO0FBT0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vuby1yZWFsLWVzdGF0ZS8uL3JlZHV4LXRvb2xraXQvcmVkdWNlcnMvZ3JpZFJlZHVjZXIuanM/OTdkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxudmFyIGluaXRpYWxTdGF0ZSA9IHsgZ3JpZFNpemU6IFwiMlwiLCBncmlkU3R5bGU6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IGdyaWRSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgZ3JpZFNpemU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUuZ3JpZFNpemUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgZ3JpZFN0eWxlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLmdyaWRTaXplID0gYWN0aW9uLnBheWxvYWQ7XG4gIH0sXG4gIC8vIGdyaWRTaXplOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyAgIHN0YXRlLmdyaWRTaXplID0gYWN0aW9uLnBheWxvYWQ7XG4gIC8vIH0sXG4gIC8vIGdyaWRTaXplOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyAgIHN0YXRlLmdyaWRTaXplID0gYWN0aW9uLnBheWxvYWQ7XG4gIC8vIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiZ3JpZFNpemUiLCJncmlkU3R5bGUiLCJncmlkUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-toolkit/reducers/gridReducer.js\n");

/***/ }),

/***/ "./redux-toolkit/reducers/inputsReducer.js":
/*!*************************************************!*\
  !*** ./redux-toolkit/reducers/inputsReducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputsReducer: () => (/* binding */ inputsReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    price: [\n        600000,\n        1750000\n    ],\n    area: [\n        80,\n        250\n    ]\n};\nconst inputsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, {\n    propertyStatus: (state, action)=>{\n        state.propertyStatus = action.payload;\n    },\n    propertyType: (state, action)=>{\n        state.propertyType = action.payload;\n    },\n    maxRooms: (state, action)=>{\n        state.maxRooms = action.payload;\n    },\n    bed: (state, action)=>{\n        state.bed = action.payload;\n    },\n    bath: (state, action)=>{\n        state.bath = action.payload;\n    },\n    agencies: (state, action)=>{\n        state.agencies = action.payload;\n    },\n    price: (state, action)=>{\n        action.payload ? state.price = [\n            ...action.payload\n        ] : state.price.splice(0, state.price.length);\n    },\n    area: (state, action)=>{\n        action.payload ? state.area = [\n            ...action.payload\n        ] : state.area.splice(0, state.area.length);\n    },\n    sortBy: (state, action)=>{\n        state.sortBy = action.payload;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC10b29sa2l0L3JlZHVjZXJzL2lucHV0c1JlZHVjZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1DLGVBQWU7SUFDbkJDLE9BQU87UUFBQztRQUFRO0tBQVE7SUFDeEJDLE1BQU07UUFBQztRQUFJO0tBQUk7QUFDakI7QUFFTyxNQUFNQyxnQkFBZ0JKLCtEQUFhQSxDQUFDQyxjQUFjO0lBQ3ZESSxnQkFBZ0IsQ0FBQ0MsT0FBT0M7UUFDdEJELE1BQU1ELGNBQWMsR0FBR0UsT0FBT0MsT0FBTztJQUN2QztJQUNBQyxjQUFjLENBQUNILE9BQU9DO1FBQ3BCRCxNQUFNRyxZQUFZLEdBQUdGLE9BQU9DLE9BQU87SUFDckM7SUFDQUUsVUFBVSxDQUFDSixPQUFPQztRQUNoQkQsTUFBTUksUUFBUSxHQUFHSCxPQUFPQyxPQUFPO0lBQ2pDO0lBQ0FHLEtBQUssQ0FBQ0wsT0FBT0M7UUFDWEQsTUFBTUssR0FBRyxHQUFHSixPQUFPQyxPQUFPO0lBQzVCO0lBQ0FJLE1BQU0sQ0FBQ04sT0FBT0M7UUFDWkQsTUFBTU0sSUFBSSxHQUFHTCxPQUFPQyxPQUFPO0lBQzdCO0lBQ0FLLFVBQVUsQ0FBQ1AsT0FBT0M7UUFDaEJELE1BQU1PLFFBQVEsR0FBR04sT0FBT0MsT0FBTztJQUNqQztJQUNBTixPQUFPLENBQUNJLE9BQU9DO1FBQ2JBLE9BQU9DLE9BQU8sR0FDVEYsTUFBTUosS0FBSyxHQUFHO2VBQUlLLE9BQU9DLE9BQU87U0FBQyxHQUNsQ0YsTUFBTUosS0FBSyxDQUFDWSxNQUFNLENBQUMsR0FBR1IsTUFBTUosS0FBSyxDQUFDYSxNQUFNO0lBQzlDO0lBQ0FaLE1BQU0sQ0FBQ0csT0FBT0M7UUFDWkEsT0FBT0MsT0FBTyxHQUNURixNQUFNSCxJQUFJLEdBQUc7ZUFBSUksT0FBT0MsT0FBTztTQUFDLEdBQ2pDRixNQUFNSCxJQUFJLENBQUNXLE1BQU0sQ0FBQyxHQUFHUixNQUFNSCxJQUFJLENBQUNZLE1BQU07SUFDNUM7SUFDQUMsUUFBUSxDQUFDVixPQUFPQztRQUNkRCxNQUFNVSxNQUFNLEdBQUdULE9BQU9DLE9BQU87SUFDL0I7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5vLXJlYWwtZXN0YXRlLy4vcmVkdXgtdG9vbGtpdC9yZWR1Y2Vycy9pbnB1dHNSZWR1Y2VyLmpzPzRjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJpY2U6IFs2MDAwMDAsIDE3NTAwMDBdLFxuICBhcmVhOiBbODAsIDI1MF0sXG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRzUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XG4gIHByb3BlcnR5U3RhdHVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLnByb3BlcnR5U3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XG4gIH0sXG4gIHByb3BlcnR5VHlwZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzdGF0ZS5wcm9wZXJ0eVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgbWF4Um9vbXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUubWF4Um9vbXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgYmVkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLmJlZCA9IGFjdGlvbi5wYXlsb2FkO1xuICB9LFxuICBiYXRoOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLmJhdGggPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgYWdlbmNpZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUuYWdlbmNpZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgcHJpY2U6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgYWN0aW9uLnBheWxvYWRcbiAgICAgID8gKHN0YXRlLnByaWNlID0gWy4uLmFjdGlvbi5wYXlsb2FkXSlcbiAgICAgIDogc3RhdGUucHJpY2Uuc3BsaWNlKDAsIHN0YXRlLnByaWNlLmxlbmd0aCk7XG4gIH0sXG4gIGFyZWE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgYWN0aW9uLnBheWxvYWRcbiAgICAgID8gKHN0YXRlLmFyZWEgPSBbLi4uYWN0aW9uLnBheWxvYWRdKVxuICAgICAgOiBzdGF0ZS5hcmVhLnNwbGljZSgwLCBzdGF0ZS5hcmVhLmxlbmd0aCk7XG4gIH0sXG4gIHNvcnRCeTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzdGF0ZS5zb3J0QnkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJwcmljZSIsImFyZWEiLCJpbnB1dHNSZWR1Y2VyIiwicHJvcGVydHlTdGF0dXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJwcm9wZXJ0eVR5cGUiLCJtYXhSb29tcyIsImJlZCIsImJhdGgiLCJhZ2VuY2llcyIsInNwbGljZSIsImxlbmd0aCIsInNvcnRCeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-toolkit/reducers/inputsReducer.js\n");

/***/ }),

/***/ "./redux-toolkit/store.js":
/*!********************************!*\
  !*** ./redux-toolkit/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_inputsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/inputsReducer */ \"./redux-toolkit/reducers/inputsReducer.js\");\n/* harmony import */ var _reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/currencyReducer */ \"./redux-toolkit/reducers/currencyReducer.js\");\n/* harmony import */ var _reducers_gridReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/gridReducer */ \"./redux-toolkit/reducers/gridReducer.js\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        inputsReducer: _reducers_inputsReducer__WEBPACK_IMPORTED_MODULE_1__.inputsReducer,\n        currencyReducer: _reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_2__.currencyReducer,\n        gridReducer: _reducers_gridReducer__WEBPACK_IMPORTED_MODULE_3__.gridReducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC10b29sa2l0L3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNPO0FBQ0k7QUFDUjtBQUU5QyxNQUFNSSxRQUFRSixnRUFBY0EsQ0FBQztJQUNsQ0ssU0FBUztRQUNQSixhQUFhQSxvRUFBQUE7UUFDYkMsZUFBZUEsd0VBQUFBO1FBQ2ZDLFdBQVdBLGdFQUFBQTtJQUNiO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vuby1yZWFsLWVzdGF0ZS8uL3JlZHV4LXRvb2xraXQvc3RvcmUuanM/NzM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBpbnB1dHNSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5wdXRzUmVkdWNlclwiO1xuaW1wb3J0IHsgY3VycmVuY3lSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvY3VycmVuY3lSZWR1Y2VyXCI7XG5pbXBvcnQgeyBncmlkUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL2dyaWRSZWR1Y2VyXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGlucHV0c1JlZHVjZXIsXG4gICAgY3VycmVuY3lSZWR1Y2VyLFxuICAgIGdyaWRSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJpbnB1dHNSZWR1Y2VyIiwiY3VycmVuY3lSZWR1Y2VyIiwiZ3JpZFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux-toolkit/store.js\n");

/***/ }),

/***/ "./public/assets/scss/app.scss":
/*!*************************************!*\
  !*** ./public/assets/scss/app.scss ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify","vendor-chunks/photoswipe"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();