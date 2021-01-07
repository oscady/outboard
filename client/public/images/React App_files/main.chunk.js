(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!****************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ "./src/GlobalStyles.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Theme */ "./src/Theme.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Content/Content */ "./src/components/Content/Content.js");
/* harmony import */ var _components_Player_Player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Player/Player */ "./src/components/Player/Player.js");
/* harmony import */ var _actions_audioActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/audioActions */ "./src/actions/audioActions.js");
/* harmony import */ var _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/trackUploadActions */ "./src/actions/trackUploadActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_back_Home_BackendHome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components-back/Home/BackendHome */ "./src/components-back/Home/BackendHome.js");
/* harmony import */ var _pages_Music_SingleMusicItemContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Music/SingleMusicItemContainer */ "./src/pages/Music/SingleMusicItemContainer.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Home/Home */ "./src/pages/Home/Home.js");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/About/About */ "./src/pages/About/About.js");
/* harmony import */ var _pages_Login_Login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Login/Login */ "./src/pages/Login/Login.js");
/* harmony import */ var _pages_Artists_Artists__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Artists/Artists */ "./src/pages/Artists/Artists.js");
/* harmony import */ var _pages_Music_Music__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/Music/Music */ "./src/pages/Music/Music.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();





















function App(props) {
  _s();

  const [signedIn, setSignedIn] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [playing, setPlaying] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.audio.playing);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    props.getTracks();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _Theme__WEBPACK_IMPORTED_MODULE_4__["Theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["GlobalStyles"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
          path: "/cms",
          render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_back_Home_BackendHome__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
          signedIn: signedIn,
          setSignedIn: setSignedIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Content_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
          playing: playing,
          animate: {
            height: '100vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              exact: true,
              path: "/",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Home_Home__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              path: "/about",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_About_About__WEBPACK_IMPORTED_MODULE_16__["default"], {
                full: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 48
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              path: "/user",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Login_Login__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              path: "/artists",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Artists_Artists__WEBPACK_IMPORTED_MODULE_18__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              exact: true,
              path: "/music",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Music_Music__WEBPACK_IMPORTED_MODULE_19__["default"], {
                playing: playing
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 54
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
              path: "/music/:id",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Music_SingleMusicItemContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
                playing: playing
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), props.audio.playing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Player_Player__WEBPACK_IMPORTED_MODULE_8__["Player"], {
        playing: playing
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

_s(App, "ZCW6CJ+CBlBwjjzCTegUOHqvsL8=");

_c = App;
App.propTypes = {
  setAudioPlaing: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  setAudioPaused: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  getTracks: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};

const mapStateToProps = state => ({
  audio: state.audio,
  track: state.track
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, {
  setAudioPlaying: _actions_audioActions__WEBPACK_IMPORTED_MODULE_9__["setAudioPlaying"],
  setAudioPaused: _actions_audioActions__WEBPACK_IMPORTED_MODULE_9__["setAudioPaused"],
  getTracks: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_10__["getTracks"]
})(App));

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/GlobalStyles.js":
/*!*****************************!*\
  !*** ./src/GlobalStyles.js ***!
  \*****************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    align-items: flex-start;
    background: ${({
  theme
}) => theme.white};
    color: ${({
  theme
}) => theme.primaryDark};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow-x:hidden;
    overflow-y: overlay;
    
  }

  *::-webkit-scrollbar, body::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
    color: ${({
  theme
}) => theme.white};

  }
  *::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
    background: ${({
  theme
}) => theme.white};        /* color of the tracking area */
    position: relative;
    z-index:110;
  }
  *::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
    background-color: ${({
  theme
}) => theme.primaryDark};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid ${({
  theme
}) => theme.white};  /* creates padding around scroll thumb */

  }

  .App {
    font-family: sans-serif;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  
}

  `;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Theme.js":
/*!**********************!*\
  !*** ./src/Theme.js ***!
  \**********************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const Theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  beigeColor: '#fbfcf7',
  buttonColor: '#d7e5e9',
  primaryHover: '#343078',
  white: '#FEFEFA',
  eggShell: '#F5FAF0',
  mobileSmall: '320px',
  mobile: '768px',
  laptopSmall: '992px',
  desktop: '1200px',
  burgerBorder: '0px 1px 1px #EFFFFA',
  menuHeight: '100px',
  menuHeightMobile: '100px',
  header: '1.6rem',
  subHead: '1.3rem',
  paragraph: '1.1rem'
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/audioActions.js":
/*!*************************************!*\
  !*** ./src/actions/audioActions.js ***!
  \*************************************/
/*! exports provided: getTracks, setTracksLoading, setAudioPlaying, setAudioPaused, getSecondsToMinutesAndSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTracks", function() { return getTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTracksLoading", function() { return setTracksLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAudioPlaying", function() { return setAudioPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAudioPaused", function() { return setAudioPaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondsToMinutesAndSeconds", function() { return getSecondsToMinutesAndSeconds; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


 // get items action sent to reducer

const getTracks = () => dispatch => {
  dispatch(setTracksLoading(console.log('items are loading...')));
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/playlists').then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_TRACKS"],
    payload: res.data
  }));
}; // get single project
// export const getSingleTrack = (id) => (dispatch) => {
// 	dispatch(setItemsLoading());
// 	axios
// 		.get(`/data/playlist`)
// 		.then((res) => dispatch({ type: GET_SINGLE_ITEM, payload: res.data }))
// 		.catch((err) => console.error("Can't get item", err));
// };
// // add new item sent to reducer
// export const addItem = (item) => (dispatch) => {
// 	dispatch(setItemsLoading(console.log('items are loading...')));
// 	axios.post('/api/items', item).then((res) =>
// 		dispatch({
// 			type: ADD_ITEM,
// 			payload: res.data
// 		})
// 	);
// };
// // delete item by id request sent to reducer
// export const deleteItem = (id) => (dispatch) => {
// 	axios.delete(`/api/items/${id}`).then((res) =>
// 		dispatch({
// 			type: DELETE_ITEM,
// 			payload: id
// 		})
// 	);
// };
// loading items graphic sent to reducer

const setTracksLoading = item => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TRACKS_LOADING"]
  };
}; // loading items graphic sent to reducer

const setAudioPlaying = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_AUDIO_PLAYING"],
    payload: id
  };
}; // loading items graphic sent to reducer

const setAudioPaused = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_AUDIO_PAUSED"]
  };
}; // get current player time

const getSecondsToMinutesAndSeconds = time => {
  if (time === 0) {
    return '0 : 00';
  }

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes} : 0${seconds}`;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/releaseActions.js":
/*!***************************************!*\
  !*** ./src/actions/releaseActions.js ***!
  \***************************************/
/*! exports provided: getReleases, getSingleRelease, setReleasePlaylist, addRelease, deleteRelease, setReleasesLoading, setReleasesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReleases", function() { return getReleases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRelease", function() { return getSingleRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReleasePlaylist", function() { return setReleasePlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRelease", function() { return addRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRelease", function() { return deleteRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReleasesLoading", function() { return setReleasesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReleasesLoaded", function() { return setReleasesLoaded; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


 // get releases action sent to reducer

const getReleases = () => dispatch => {
  dispatch(setReleasesLoading(console.log('releases are loading...')));
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/release').then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_RELEASES"],
    payload: res.data
  }));
  dispatch(setReleasesLoaded(console.log('releases are loaded...')));
}; // get single project

const getSingleRelease = id => dispatch => {
  dispatch(setReleasesLoading());
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/release/${id}`).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_SINGLE_RELEASE"],
    payload: res.data
  })).catch(err => console.error("Can't get release", err));
}; // get single project

const setReleasePlaylist = id => dispatch => {
  dispatch(setReleasesLoading());
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/release/${id}`).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_RELEASE_PLAYLIST"],
    payload: res.data
  })).catch(err => console.error("Can't get release", err));
  dispatch(setReleasesLoaded(console.log('releases are loaded...')));
}; // add new release sent to reducer

const addRelease = release => dispatch => {
  dispatch(setReleasesLoading(console.log('releases are loading...')));
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/release', release).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_RELEASE"],
    payload: res.data
  }));
}; // delete release by id request sent to reducer

const deleteRelease = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/release/${id}`).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_RELEASE"],
    payload: id
  }));
}; // loading releases graphic sent to reducer

const setReleasesLoading = release => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RELEASES_LOADING"]
  };
}; // loaded releases graphic sent to reducer

const setReleasesLoaded = release => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RELEASES_LOADED"]
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/trackUploadActions.js":
/*!*******************************************!*\
  !*** ./src/actions/trackUploadActions.js ***!
  \*******************************************/
/*! exports provided: getTracks, addTrack, setTracksLoading, setTracksLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTracks", function() { return getTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrack", function() { return addTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTracksLoading", function() { return setTracksLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTracksLoaded", function() { return setTracksLoaded; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


 // get images action sent to reducer

const getTracks = () => dispatch => {
  dispatch(setTracksLoading(console.log('Tracks are loading...')));
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/tracks').then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_TRACKS"],
    payload: res.data
  }));
}; // add new image sent to reducer

const addTrack = track => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/tracks', track).then(res => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_TRACK"],
    payload: res.data
  })).catch(err => console.log(err));
}; // loading images graphic sent to reducer

const setTracksLoading = track => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TRACKS_LOADING"]
  };
}; // loading images graphic sent to reducer

const setTracksLoaded = track => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TRACKS_LOADED"]
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: GET_ITEMS, GET_SINGLE_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ADD_IMAGE, GET_IMAGES, DELETE_IMAGE, IMAGES_LOADING, ADD_TRACK, GET_TRACKS, DELETE_TRACK, TRACKS_LOADING, TRACKS_LOADED, USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCCESS, GET_ERRORS, CLEAR_ERRORS, SET_OVERLAY_ON, SET_OVERLAY_OFF, SET_AUDIO_PLAYING, SET_AUDIO_PAUSED, AUDIO_PLAYING, AUDIO_PAUSED, GET_RELEASES, GET_SINGLE_RELEASE, ADD_RELEASE, DELETE_RELEASE, RELEASES_LOADING, RELEASES_LOADED, SET_RELEASE_PLAYLIST, RECEIVE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SINGLE_ITEM", function() { return GET_SINGLE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_LOADING", function() { return ITEMS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGE", function() { return ADD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_IMAGES", function() { return GET_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_IMAGE", function() { return DELETE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_LOADING", function() { return IMAGES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TRACK", function() { return ADD_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRACKS", function() { return GET_TRACKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TRACK", function() { return DELETE_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACKS_LOADING", function() { return TRACKS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACKS_LOADED", function() { return TRACKS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADING", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCCESS", function() { return REGISTER_SUCCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OVERLAY_ON", function() { return SET_OVERLAY_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OVERLAY_OFF", function() { return SET_OVERLAY_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUDIO_PLAYING", function() { return SET_AUDIO_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUDIO_PAUSED", function() { return SET_AUDIO_PAUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_PLAYING", function() { return AUDIO_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIO_PAUSED", function() { return AUDIO_PAUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RELEASES", function() { return GET_RELEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SINGLE_RELEASE", function() { return GET_SINGLE_RELEASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RELEASE", function() { return ADD_RELEASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RELEASE", function() { return DELETE_RELEASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASES_LOADING", function() { return RELEASES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASES_LOADED", function() { return RELEASES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RELEASE_PLAYLIST", function() { return SET_RELEASE_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_SONG", function() { return RECEIVE_CURRENT_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SONG", function() { return PLAY_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE_SONG", function() { return PAUSE_SONG; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const GET_ITEMS = 'GET_ITEMS';
const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const ITEMS_LOADING = 'ITEMS_LOADING';
const ADD_IMAGE = 'ADD_IMAGE';
const GET_IMAGES = 'GET_IMAGES';
const DELETE_IMAGE = 'DELETE_IMAGE';
const IMAGES_LOADING = 'IMAGES_LOADING';
const ADD_TRACK = 'ADD_TRACK';
const GET_TRACKS = 'GET_TRACKS';
const DELETE_TRACK = 'DELETE_TRACK';
const TRACKS_LOADING = 'TRACKS_LOADING';
const TRACKS_LOADED = 'TRACKS_LOADED';
const USER_LOADING = 'USER_LOADING';
const USER_LOADED = 'USER_LOADED';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';
const REGISTER_SUCCCESS = 'REGISTER_SUCCCESS';
const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const SET_OVERLAY_ON = 'SET_OVERLAY_ON';
const SET_OVERLAY_OFF = 'SET_OVERLAY_OFF';
const SET_AUDIO_PLAYING = 'SET_AUDIO_PLAYING';
const SET_AUDIO_PAUSED = 'SET_AUDIO_PAUSED';
const AUDIO_PLAYING = 'AUDIO_PLAYING';
const AUDIO_PAUSED = 'AUDIO_PAUSED';
const GET_RELEASES = 'GET_RELEASES';
const GET_SINGLE_RELEASE = 'GET_SINGLE_RELEASE';
const ADD_RELEASE = 'ADD_RELEASE';
const DELETE_RELEASE = 'DELETE_RELEASE';
const RELEASES_LOADING = 'RELEASES_LOADING';
const RELEASES_LOADED = 'RELEASES_LOADED';
const SET_RELEASE_PLAYLIST = 'RELEASES_LOADED';
const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
const PLAY_SONG = 'PLAY_SONG';
const PAUSE_SONG = 'PAUSE_SONG';

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Basic/Buttons/SideBarButton.styled.js":
/*!*******************************************************************!*\
  !*** ./src/components-back/Basic/Buttons/SideBarButton.styled.js ***!
  \*******************************************************************/
/*! exports provided: SideBarButtonStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarButtonStyled", function() { return SideBarButtonStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const SideBarButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
	width: 90%;
	height: 40px;
	min-width: 150px;
	font-size: 1.8rem;
	color: black;
	background-color: blueviolet;
	border: 1px solid transparent;
	margin: 10px;

	&:hover {
		cursor: pointer;
		border: 1px solid white;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Basic/Containers/ContentContainer.styled.js":
/*!*************************************************************************!*\
  !*** ./src/components-back/Basic/Containers/ContentContainer.styled.js ***!
  \*************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	height: 100vh;
	width: 100vw;
	background-color: white;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 150;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Content/Content.js":
/*!************************************************!*\
  !*** ./src/components-back/Content/Content.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Content/Content.js";

const ContentStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
	height: 100%;
	width: 100%;
	background-color: #1b3679;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	position: relative;
`;
_c = ContentStyled;

const Content = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentStyled, {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_c2 = Content;
/* harmony default export */ __webpack_exports__["default"] = (Content);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ContentStyled");
__webpack_require__.$Refresh$.register(_c2, "Content");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Home/BackendHome.js":
/*!*************************************************!*\
  !*** ./src/components-back/Home/BackendHome.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackendHome_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackendHome.styled */ "./src/components-back/Home/BackendHome.styled.js");
/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SideBar/SideBar */ "./src/components-back/SideBar/SideBar.js");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavBar/NavBar */ "./src/components-back/NavBar/NavBar.js");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Content/Content */ "./src/components-back/Content/Content.js");
/* harmony import */ var _Tracks_Tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tracks/Tracks */ "./src/components-back/Tracks/Tracks.js");
/* harmony import */ var _Releases_Releases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Releases/Releases */ "./src/components-back/Releases/Releases.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Basic_Containers_ContentContainer_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Basic/Containers/ContentContainer.styled */ "./src/components-back/Basic/Containers/ContentContainer.styled.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Home/BackendHome.js";










const BackendHome = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Containers_ContentContainer_styled__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackendHome_styled__WEBPACK_IMPORTED_MODULE_1__["BackendHomeStyled"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        path: "/cms/tracks",
        render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tracks_Tracks__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 50
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        path: "/cms/releases",
        render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Releases_Releases__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};

_c = BackendHome;
/* harmony default export */ __webpack_exports__["default"] = (BackendHome);

var _c;

__webpack_require__.$Refresh$.register(_c, "BackendHome");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Home/BackendHome.styled.js":
/*!********************************************************!*\
  !*** ./src/components-back/Home/BackendHome.styled.js ***!
  \********************************************************/
/*! exports provided: BackendHomeStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendHomeStyled", function() { return BackendHomeStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const BackendHomeStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: absolute;
	top: 100px;
	width: 100vw;
	z-index: 151;
	height: calc(100vh - 100px);
	display: grid;
	background-color: transparent;
	grid-template-columns: 1fr 7fr;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Burger/Burger.js":
/*!*****************************************************!*\
  !*** ./src/components-back/NavBar/Burger/Burger.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Burger.styled */ "./src/components-back/NavBar/Burger/Burger.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/NavBar/Burger/Burger.js";




const Burger = ({
  open,
  setOpen
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Burger_styled__WEBPACK_IMPORTED_MODULE_3__["StyledBurger"], {
    open: open,
    onClick: () => setOpen(!open),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Burger;
Burger.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Burger);

var _c;

__webpack_require__.$Refresh$.register(_c, "Burger");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Burger/Burger.styled.js":
/*!************************************************************!*\
  !*** ./src/components-back/NavBar/Burger/Burger.styled.js ***!
  \************************************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  @media (max-width: ${({
  theme
}) => theme.mobile}) {
    display: flex;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({
  theme,
  open
}) => open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      transform: ${({
  open
}) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      opacity: ${({
  open
}) => open ? "0" : "1"};
      transform: ${({
  open
}) => open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      transform: ${({
  open
}) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Burger/index.js":
/*!****************************************************!*\
  !*** ./src/components-back/NavBar/Burger/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Burger */ "./src/components-back/NavBar/Burger/Burger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Burger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/LogoContainer/LogoContainer.js":
/*!*******************************************************************!*\
  !*** ./src/components-back/NavBar/LogoContainer/LogoContainer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogoContainer_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoContainer.styled */ "./src/components-back/NavBar/LogoContainer/LogoContainer.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/NavBar/LogoContainer/LogoContainer.js";


const LogoContainer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_styled__WEBPACK_IMPORTED_MODULE_1__["LogoContainerStyled"], {
    open: props.open,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = LogoContainer;
/* harmony default export */ __webpack_exports__["default"] = (LogoContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogoContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/LogoContainer/LogoContainer.styled.js":
/*!**************************************************************************!*\
  !*** ./src/components-back/NavBar/LogoContainer/LogoContainer.styled.js ***!
  \**************************************************************************/
/*! exports provided: LogoContainerStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainerStyled", function() { return LogoContainerStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const LogoContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	align-items: flex-end;
	justify-content: flex-end;
	height: calc(${({
  theme
}) => theme.menuHeight} - 10px);
	width: calc(${({
  theme
}) => theme.menuHeight} - 10px);
	z-index: 30;

	@media (max-width: ${({
  theme
}) => theme.mobile}) {
		top: 50px;
		left: ${props => props.open ? 0 : 0};
		right: ${props => props.open ? 0 : 100};
		margin-left: ${props => props.open ? 'auto' : '1px'};
		margin-right: auto;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/LogoContainer/MobileLogo.js":
/*!****************************************************************!*\
  !*** ./src/components-back/NavBar/LogoContainer/MobileLogo.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MobileLogo_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileLogo.styled */ "./src/components-back/NavBar/LogoContainer/MobileLogo.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/NavBar/LogoContainer/MobileLogo.js";


const LogoContainer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileLogo_styled__WEBPACK_IMPORTED_MODULE_1__["MobileLogoStyled"], {
    open: props.open,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = LogoContainer;
/* harmony default export */ __webpack_exports__["default"] = (LogoContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogoContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/LogoContainer/MobileLogo.styled.js":
/*!***********************************************************************!*\
  !*** ./src/components-back/NavBar/LogoContainer/MobileLogo.styled.js ***!
  \***********************************************************************/
/*! exports provided: MobileLogoStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogoStyled", function() { return MobileLogoStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const MobileLogoStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: ${({
  theme
}) => theme.menuHeight};
  width: ${({
  theme
}) => theme.menuHeight};
  z-index:30;
  
  @media (max-width: ${({
  theme
}) => theme.mobile}) {
      top: 0;
      left: 0;
      display: ${props => props.open ? 'none' : 'flex'};
      height: ${({
  theme
}) => theme.menuHeightMobile};
      width: ${({
  theme
}) => theme.menuHeightMobile};
    }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Menu/Menu.js":
/*!*************************************************!*\
  !*** ./src/components-back/NavBar/Menu/Menu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.styled */ "./src/components-back/NavBar/Menu/Menu.styled.js");
/* harmony import */ var _LogoContainer_LogoContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LogoContainer/LogoContainer */ "./src/components-back/NavBar/LogoContainer/LogoContainer.js");
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/LogoIcon */ "./src/icons/LogoIcon.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/NavBar/Menu/Menu.js";








const Menu = ({
  open
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_styled__WEBPACK_IMPORTED_MODULE_3__["StyledMenu"], {
    open: open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_LogoContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: "65px",
        height: "65px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      exact: true,
      activeStyle: {
        borderBottom: '2px solid white'
      },
      to: "/cms/tracks",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "tracks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), "Tracks"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      exact: true,
      activeStyle: {
        borderBottom: '2px solid white'
      },
      to: "/cms/artists",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "artists"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined), "Artists"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      exact: true,
      activeStyle: {
        borderBottom: '2px solid white'
      },
      to: "/cms/releases",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "releases"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), "Releases"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      exact: true,
      activeStyle: {
        borderBottom: '2px solid white'
      },
      to: "/cms/images",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "images"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), "Images"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

_c = Menu;
Menu.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

__webpack_require__.$Refresh$.register(_c, "Menu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Menu/Menu.styled.js":
/*!********************************************************!*\
  !*** ./src/components-back/NavBar/Menu/Menu.styled.js ***!
  \********************************************************/
/*! exports provided: StyledMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-end;
	background: transparent;
	height: ${({
  theme
}) => theme.menuHeight};
	text-align: left;
	padding: 0rem;
	padding-right: 1rem;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: transform 0.3s ease-out;
	z-index: 9;

	@media (max-width: ${({
  theme
}) => theme.mobile}) {
		transform: ${({
  open
}) => open ? 'translateY(0)' : 'translateX(-100%)'};
		opacity: ${({
  open
}) => open ? 1 : 0};
		background-color: ${({
  theme
}) => theme.white};
		width: 100%;
		height: 100vh;
		flex-direction: column;
		padding: 10px 10px 0px 0px;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	a {
		font-size: 1.1rem;
		text-transform: uppercase;
		font-weight: bold;
		margin: 20px;
		margin-right: 40px;
		letter-spacing: 0.0.5rem;
		color: ${({
  theme
}) => theme.primaryDark};
		text-decoration: none;
		transition: color 0.3s linear;
		padding-bottom: 5px;
		border-bottom: 2px solid transparent;

		@media (max-width: ${({
  theme
}) => theme.mobile}) {
			font-size: 1.2rem;
			text-align: center;
			margin: 20px auto;
		}

		&:hover {
			color: ${({
  theme
}) => theme.primaryHover};
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/Menu/index.js":
/*!**************************************************!*\
  !*** ./src/components-back/NavBar/Menu/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components-back/NavBar/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/NavBar.js":
/*!**********************************************!*\
  !*** ./src/components-back/NavBar/NavBar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/components-back/NavBar/hooks.js");
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Burger */ "./src/components-back/NavBar/Burger/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/components-back/NavBar/Menu/index.js");
/* harmony import */ var _LogoContainer_MobileLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoContainer/MobileLogo */ "./src/components-back/NavBar/LogoContainer/MobileLogo.js");
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/LogoIcon */ "./src/icons/LogoIcon.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/NavBar/NavBar.js",
    _s = __webpack_require__.$Refresh$.signature();








function NavBar(props) {
  _s();

  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log('nav bar rendered');
  }, []);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"])(node, () => setOpen(false));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: node,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_MobileLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "40px",
        height: "40px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      setOpen: setOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: open,
      setOpen: setOpen,
      signedIn: props.signedIn,
      setSignedIn: props.setSignedIn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

_s(NavBar, "mviti+NlJaWfIk9z7MsAV1ua7wo=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

__webpack_require__.$Refresh$.register(_c, "NavBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/NavBar/hooks.js":
/*!*********************************************!*\
  !*** ./src/components-back/NavBar/hooks.js ***!
  \*********************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();


const useOnClickOutside = (ref, handler) => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Releases/Releases.js":
/*!**************************************************!*\
  !*** ./src/components-back/Releases/Releases.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SideBar/SideBar */ "./src/components-back/SideBar/SideBar.js");
/* harmony import */ var _Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Basic/Buttons/SideBarButton.styled */ "./src/components-back/Basic/Buttons/SideBarButton.styled.js");
/* harmony import */ var _Basic_Containers_ContentContainer_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Basic/Containers/ContentContainer.styled */ "./src/components-back/Basic/Containers/ContentContainer.styled.js");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Content/Content */ "./src/components-back/Content/Content.js");
/* harmony import */ var _UploadRelease__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UploadRelease */ "./src/components-back/Releases/UploadRelease.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Releases/Releases.js";








const Releases = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/cms/releases/upload",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
          children: "upload release"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
        children: "somethins"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
        children: "somethinselse"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/cms/releases/upload",
        render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UploadRelease__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 63
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

_c = Releases;
/* harmony default export */ __webpack_exports__["default"] = (Releases);

var _c;

__webpack_require__.$Refresh$.register(_c, "Releases");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Releases/TrackModal.js":
/*!****************************************************!*\
  !*** ./src/components-back/Releases/TrackModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Tracks_Tracks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tracks/Tracks */ "./src/components-back/Tracks/Tracks.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Releases/TrackModal.js",
    _s = __webpack_require__.$Refresh$.signature();





const ItemList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul`
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: pink;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;

	li {
		display: flex;
		flex-direction: row;
		background-color: lightpink;
		align-content: center;
		justify-content: space-between;
		margin-top: 5px;
	}
`;
_c = ItemList;

const TracksModal = props => {
  _s();

  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setModal(!modal);

  const addItem = id => {
    let array = props.items;
    props.items.includes(id) ? props.setItems(props.items.filter(item => item !== id)) : props.setItems([...props.items, id]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "danger",
      onClick: toggle,
      children: buttonLabel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: modal,
      toggle: toggle,
      className: className,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
        toggle: toggle,
        children: "Modal title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemList, {
          children: props.uploadedTracks.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [item.artistName, " - ' ", item.trackName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: () => addItem(item._id),
              children: "add track"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 8
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          color: "primary",
          onClick: toggle,
          children: "OK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          color: "secondary",
          onClick: toggle,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, undefined);
};

_s(TracksModal, "TRWSB3LiAWCiDEbPAmxZ7bLGYpg=");

_c2 = TracksModal;
/* harmony default export */ __webpack_exports__["default"] = (TracksModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ItemList");
__webpack_require__.$Refresh$.register(_c2, "TracksModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Releases/UploadRelease.js":
/*!*******************************************************!*\
  !*** ./src/components-back/Releases/UploadRelease.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_releaseActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/releaseActions */ "./src/actions/releaseActions.js");
/* harmony import */ var _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/trackUploadActions */ "./src/actions/trackUploadActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_artists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/artists */ "./src/data/artists.js");
/* harmony import */ var _TrackModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TrackModal */ "./src/components-back/Releases/TrackModal.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Releases/UploadRelease.js",
    _s = __webpack_require__.$Refresh$.signature();










const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  height: 150px;
  width: 100%;
  position:absolute;
  bottom: 0;
  left:0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
_c = ButtonContainer;
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
position: relative;
  height: 50%%
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px;
`;
_c2 = FormContainer;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
position: relative;
  height: calc(100vh - 100px);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
_c3 = Container;
const Preview = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
	position: relative;
	height: 50%;
	width: 100%;
	background-color: red;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: space-between;
	justify-content: center;
`;
_c4 = Preview;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
	height: 300px;
	width: 300px;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		width: 100%;
	}
`;
_c5 = Image;
const Tracks = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
	height: 200px;
	width: 400px;
	align-items: center;
	justify-content: center;
	background-color: green;

	li {
		font-size: 2rem;
		text-align: left;
		color:black;
	}
	`;
_c6 = Tracks;

const UploadRelease = props => {
  _s();

  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [artists, setArtists] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [artwork, setArtwork] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [uploadedTracks, setUploadedTracks] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [dropdownOpen, setDropdownOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    props.getTracks();
    setUploadedTracks(props.track.tracks);
    console.log(items);
  }, [name]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    items.map(track => console.log(track));
  }, [name, items]);

  const clearForm = () => {
    setName('');
    setArtists([]);
    setItems([]);
    setArtwork('');
  };

  const onSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', name);
    formData.append('artists', artists); //formData.append('tracks', items);

    formData.append('artwork', artwork);

    for (var y = 0; y < 5; y++) {
      formData.append('tracks[]', items[y]);
    }

    console.log(items);
    console.log(formData);
    props.addRelease(formData);
    clearForm();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: onSubmit,
      action: "/cms",
      style: {
        height: '50%',
        width: '100%'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "name",
            children: "Release Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "name",
            value: name,
            onChange: e => setName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "artists",
            children: "artists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "artists",
            value: artists,
            onChange: e => setArtists(...artists, e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "tracks",
            children: "tracks"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            buttonLabel: "Add Tracks",
            className: "modal-lg",
            items: items,
            setItems: setItems,
            uploadedTracks: props.track.tracks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "artwork",
            children: "Artwork"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "artwork",
            value: artwork,
            onChange: e => setArtwork(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Preview, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
        children: artwork ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: artwork
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 23
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tracks, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: items ? items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: item.trackName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 39
          }, undefined)) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "btn-lg",
          style: {
            margin: '20px'
          },
          type: "submit",
          onClick: onSubmit,
          children: "add item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "btn-lg",
          style: {
            margin: '20px'
          },
          onClick: clearForm,
          children: "Clear Form"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 3
  }, undefined);
};

_s(UploadRelease, "VXn7oE/Nr2HEYBBOnTpFOh1S9z8=");

_c7 = UploadRelease;
UploadRelease.propTypes = {
  setAudioPlaing: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  setAudioPaused: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  getReleases: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  addRelease: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  tracks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  release: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  getTracks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

const mapStateToProps = state => ({
  release: state.release,
  track: state.track
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  addRelease: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_4__["addRelease"],
  getReleases: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_4__["getReleases"],
  getTracks: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_5__["getTracks"]
})(UploadRelease));

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "ButtonContainer");
__webpack_require__.$Refresh$.register(_c2, "FormContainer");
__webpack_require__.$Refresh$.register(_c3, "Container");
__webpack_require__.$Refresh$.register(_c4, "Preview");
__webpack_require__.$Refresh$.register(_c5, "Image");
__webpack_require__.$Refresh$.register(_c6, "Tracks");
__webpack_require__.$Refresh$.register(_c7, "UploadRelease");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/SideBar/SideBar.js":
/*!************************************************!*\
  !*** ./src/components-back/SideBar/SideBar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.styled */ "./src/components-back/SideBar/SideBar.styled.js");
/* harmony import */ var _Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Basic/Buttons/SideBarButton.styled */ "./src/components-back/Basic/Buttons/SideBarButton.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/SideBar/SideBar.js";



const SideBar = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideBar_styled__WEBPACK_IMPORTED_MODULE_1__["SideBarStyled"], {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

_c = SideBar;
/* harmony default export */ __webpack_exports__["default"] = (SideBar);

var _c;

__webpack_require__.$Refresh$.register(_c, "SideBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/SideBar/SideBar.styled.js":
/*!*******************************************************!*\
  !*** ./src/components-back/SideBar/SideBar.styled.js ***!
  \*******************************************************/
/*! exports provided: SideBarStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarStyled", function() { return SideBarStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const SideBarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 10px;
	background-color: black;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Tracks/Tracks.js":
/*!**********************************************!*\
  !*** ./src/components-back/Tracks/Tracks.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SideBar/SideBar */ "./src/components-back/SideBar/SideBar.js");
/* harmony import */ var _Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Basic/Buttons/SideBarButton.styled */ "./src/components-back/Basic/Buttons/SideBarButton.styled.js");
/* harmony import */ var _Basic_Containers_ContentContainer_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Basic/Containers/ContentContainer.styled */ "./src/components-back/Basic/Containers/ContentContainer.styled.js");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Content/Content */ "./src/components-back/Content/Content.js");
/* harmony import */ var _UploadTrack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UploadTrack */ "./src/components-back/Tracks/UploadTrack.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Tracks/Tracks.js";








const Tracks = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/cms/tracks/upload",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
          children: "upload track"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
        children: "somethins"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_Buttons_SideBarButton_styled__WEBPACK_IMPORTED_MODULE_3__["SideBarButtonStyled"], {
        children: "somethinselse"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/cms/tracks/upload",
        render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UploadTrack__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 61
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

_c = Tracks;
/* harmony default export */ __webpack_exports__["default"] = (Tracks);

var _c;

__webpack_require__.$Refresh$.register(_c, "Tracks");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components-back/Tracks/UploadTrack.js":
/*!***************************************************!*\
  !*** ./src/components-back/Tracks/UploadTrack.js ***!
  \***************************************************/
/*! exports provided: UploadTrack, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTrack", function() { return UploadTrack; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/trackUploadActions */ "./src/actions/trackUploadActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components-back/Tracks/UploadTrack.js";






const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  height: 150px;
  width: 100%;
  position:absolute;
  bottom: 0;
  left:0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
_c = ButtonContainer;
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
position: relative;
  height: 100%
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px;
`;
_c2 = FormContainer;
class UploadTrack extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.selectItem = item => {
      this.setState({
        id: item._id,
        artistName: item.artistName,
        trackName: item.trackName,
        url: item.url,
        artwork: item.artwork
      });
    };

    this.toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    };

    this.clearForm = () => {
      this.setState({
        id: null,
        artistName: '',
        trackName: '',
        artwork: '',
        url: ''
      });
    };

    this.onChange = e => {
      switch (e.target.name) {
        // case 'favourite':
        // 	this.setState({
        // 		favourite: !this.state.favourite // flip boolean value
        // 	});
        // 	break;
        default:
          this.setState({
            [e.target.name]: e.target.value
          });
      }
    };

    this.onSubmit = e => {
      e.preventDefault();
      const {
        artistName,
        trackName,
        url,
        artwork
      } = this.state; // this.composeGalleryArray(gallery);
      // const galleryLen = gallery.length;

      let formData = new FormData();
      formData.append('artistName', artistName);
      formData.append('trackName', trackName);
      formData.append('url', url);
      formData.append('artwork', artwork); // for (var y = 0; y < galleryLen; y++) {
      //   formData.append("gallery[]", gallery[y]);
      // }
      // close modal.

      this.toggle();
      this.props.addTrack(formData);
      this.clearForm();
    };

    this.state = {
      id: null,
      artistName: '',
      modal: false,
      trackName: '',
      url: '',
      artwork: ''
    };
  }

  componentDidMount() {
    this.clearForm();
  }

  render() {
    const {
      artistName,
      trackName,
      url,
      artwork
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.onSubmit,
      action: "/cms",
      style: {
        height: '100%',
        width: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "artistName",
            children: "Artist Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "artistName",
            value: artistName,
            onChange: this.onChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "trackName",
            children: "Track Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "trackName",
            value: trackName,
            onChange: this.onChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "url",
            children: "url"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "url",
            value: url,
            onChange: this.onChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            style: {
              padding: '5px',
              fontSize: '2rem',
              textAlign: 'left',
              color: 'white'
            },
            htmlFor: "artwork",
            children: "Artwork"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "text",
            name: "artwork",
            value: artwork,
            onChange: this.onChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "btn-lg",
          style: {
            margin: '20px'
          },
          type: "submit",
          children: "add item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "btn-lg",
          style: {
            margin: '20px'
          },
          onClick: this.clearForm,
          children: "Clear Form"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }, this);
  }

}
UploadTrack.propTypes = {
  setAudioPlaing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setAudioPaused: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getTracks: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  addTrack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

const mapStateToProps = state => ({
  audio: state.audio
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  addTrack: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_4__["addTrack"],
  getTracks: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_4__["getTracks"]
})(UploadTrack));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ButtonContainer");
__webpack_require__.$Refresh$.register(_c2, "FormContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AboutFooter/AboutFooter.js":
/*!***************************************************!*\
  !*** ./src/components/AboutFooter/AboutFooter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutFooter_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutFooter.styled */ "./src/components/AboutFooter/AboutFooter.styled.js");
/* harmony import */ var _FullPageComponent_FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FullPageComponent/FullPageComponent.styled */ "./src/components/FullPageComponent/FullPageComponent.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/AboutFooter/AboutFooter.js";



const AboutFooter = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FullPageComponent_FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_2__["FullPageRowStyled"], {
    columns: "1fr 1fr",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AboutFooter_styled__WEBPACK_IMPORTED_MODULE_1__["AboutFooterItemStyled"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Equalising the Underground"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "All successful artists started somewhere."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "We are equalising the underground, creating a shared space for established artists and up-and-coming talented producers working toward the common goal of releasing and sharing quality music."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AboutFooter_styled__WEBPACK_IMPORTED_MODULE_1__["AboutFooterItemStyled"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Fundraising Initiative"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Supporting Charitable Causes in Music"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "In line with our ethos of giving back and providing opportunities in music for all, we will be announcing ongoing subscription milestones."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "When these targets are reached, we will work in partnership to fund a wide range ofcharitable organisations that are already doing positive work in the music community."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Outboard is a full cycle approach to the development and wellbeing of electronic music endeavours across the board."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

_c = AboutFooter;
/* harmony default export */ __webpack_exports__["default"] = (AboutFooter);

var _c;

__webpack_require__.$Refresh$.register(_c, "AboutFooter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AboutFooter/AboutFooter.styled.js":
/*!**********************************************************!*\
  !*** ./src/components/AboutFooter/AboutFooter.styled.js ***!
  \**********************************************************/
/*! exports provided: AboutFooterItemStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFooterItemStyled", function() { return AboutFooterItemStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const AboutFooterItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	flex-direction: column;
	width: 90%;

	position: relative;
	margin: 0 auto;
	padding: 0;
	padding-bottom: 50px;
	h1 {
		text-align: left;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 10px;
	}

	h2 {
		text-align: left;
		text-transform: capitalize;
		margin: 0;
		margin-bottom: 20px;
	}

	p {
		text-align: left;
		text-transform: capitalize;
		margin: 0;
		margin-bottom: 10px;
		line-height: 1.5;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AboutList/AboutList.js":
/*!***********************************************!*\
  !*** ./src/components/AboutList/AboutList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutList_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutList.styled */ "./src/components/AboutList/AboutList.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/AboutList/AboutList.js";


const AboutList = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AboutList_styled__WEBPACK_IMPORTED_MODULE_1__["AboutListStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.bio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = AboutList;
/* harmony default export */ __webpack_exports__["default"] = (AboutList);

var _c;

__webpack_require__.$Refresh$.register(_c, "AboutList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AboutList/AboutList.styled.js":
/*!******************************************************!*\
  !*** ./src/components/AboutList/AboutList.styled.js ***!
  \******************************************************/
/*! exports provided: AboutListStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutListStyled", function() { return AboutListStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const AboutListStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	flex-wrap: nowrap;
	overflow: hidden;

	h3 {
		text-align: left;
		color: ${({
  theme
}) => theme.primaryDark};
		font-size: 1.9rem;
		text-transform: uppercase;
		white-space: nowrap;
		font-weight: bold;
		margin: 5px;
		margin-bottom: 20px;
	}

	p {
		text-align: left;
		color: ${({
  theme
}) => theme.primaryDark};
		font-size: 1rem;
		font-weight: lighter;
		line-height: 1.8rem;
		margin: 5px;
	}

	div {
		margin-bottom: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		a {
			font-weight: bold;
			font-size: 1.4rem;
			text-align: left;
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Basic/Background/Background.js":
/*!*******************************************************!*\
  !*** ./src/components/Basic/Background/Background.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Background_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background.styled */ "./src/components/Basic/Background/Background.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Basic/Background/Background.js";


const Background = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Background_styled__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyled"], {
    background: props.background
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

_c = Background;
/* harmony default export */ __webpack_exports__["default"] = (Background);

var _c;

__webpack_require__.$Refresh$.register(_c, "Background");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Basic/Background/Background.styled.js":
/*!**************************************************************!*\
  !*** ./src/components/Basic/Background/Background.styled.js ***!
  \**************************************************************/
/*! exports provided: BackgroundStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundStyled", function() { return BackgroundStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const BackgroundStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 0;
	background: url(${props => props.background});
	background-position: 50% 50%;
	background-size: 35% 95%;
	background-repeat: no-repeat;
	opacity: 8%;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Basic/Portal.js":
/*!****************************************!*\
  !*** ./src/components/Basic/Portal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/usePortal */ "./src/hooks/usePortal.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();




/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */

const Portal = ({
  id,
  children
}) => {
  _s();

  const target = Object(_hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, target);
};

_s(Portal, "d22EksAnz8DgyiXjXDgs5mCDlFQ=", false, function () {
  return [_hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Portal;
/* harmony default export */ __webpack_exports__["default"] = (Portal);

var _c;

__webpack_require__.$Refresh$.register(_c, "Portal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Content/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Content/Content.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.styled */ "./src/components/Content/Content.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Content/Content.js";


const Content = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_styled__WEBPACK_IMPORTED_MODULE_1__["ContentStyled"], {
    playing: props.playing,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

_c = Content;
/* harmony default export */ __webpack_exports__["default"] = (Content);

var _c;

__webpack_require__.$Refresh$.register(_c, "Content");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Content/Content.styled.js":
/*!**************************************************!*\
  !*** ./src/components/Content/Content.styled.js ***!
  \**************************************************/
/*! exports provided: ContentStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentStyled", function() { return ContentStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const ContentStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
	position: relative;
	height: ${props => props.playing ? 'calc(100vh - 60px)' : '100vh'};
	width: 100vw;
	background: ${({
  theme
}) => theme.white};
	overflow-y: overlay;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 12px; /* width of the entire scrollbar */
		color: ${({
  theme
}) => theme.white};
		
	}

	&::-webkit-scrollbar-track {
		background: ${({
  theme
}) => theme.white}; /* color of the tracking ar */
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({
  theme
}) => theme.primaryDark}; /* color of the scroll thumb */
		border-radius: 20px; /* roundness of the scroll thumb */
		border: 3px solid ${({
  theme
}) => theme.white}; /* creates padding around scroll thumb */
		position: relative;
		z-index:12;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/FullPageComponent/FullPageComponent.js":
/*!***************************************************************!*\
  !*** ./src/components/FullPageComponent/FullPageComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPageComponent.styled */ "./src/components/FullPageComponent/FullPageComponent.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/FullPageComponent/FullPageComponent.js";


const FullPageComponent = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_1__["FullPageComponentStyled"], {
    background: props.background,
    rows: props.rows,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = FullPageComponent;
/* harmony default export */ __webpack_exports__["default"] = (FullPageComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "FullPageComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/FullPageComponent/FullPageComponent.styled.js":
/*!**********************************************************************!*\
  !*** ./src/components/FullPageComponent/FullPageComponent.styled.js ***!
  \**********************************************************************/
/*! exports provided: FullPageComponentStyled, FullPageColumnStyled, FullPageRowStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageComponentStyled", function() { return FullPageComponentStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageColumnStyled", function() { return FullPageColumnStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageRowStyled", function() { return FullPageRowStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const FullPageComponentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	width: 100vw;
	top: 0;
	display: grid;
	grid-template-rows: ${props => props.rows};
	grid-row-gap: 50px;
	padding: 8rem 7.5% 0% 7.5%;
	align-items: center;
	justify-content: center;
`;
const FullPageColumnStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	height: 50%;
	min-height: 1px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const FullPageRowStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	height: auto;
	min-height: 1px;
	width: 100%;
	display: grid;
	grid-template-columns: ${props => props.columns};
	gap: 80px;
	align-items: flex-start;
	justify-content: center;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/FullPageComponent/FullPageRow.js":
/*!*********************************************************!*\
  !*** ./src/components/FullPageComponent/FullPageRow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPageComponent.styled */ "./src/components/FullPageComponent/FullPageComponent.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/FullPageComponent/FullPageRow.js";


const FullPageRow = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FullPageComponent_styled__WEBPACK_IMPORTED_MODULE_1__["FullPageRowStyled"], {
    columns: props.columns,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

_c = FullPageRow;
/* harmony default export */ __webpack_exports__["default"] = (FullPageRow);

var _c;

__webpack_require__.$Refresh$.register(_c, "FullPageRow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoginComponent/Info.styled.js":
/*!******************************************************!*\
  !*** ./src/components/LoginComponent/Info.styled.js ***!
  \******************************************************/
/*! exports provided: InfoStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoStyled", function() { return InfoStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const InfoStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	width: 100%;
	position: absolute;
	height: 100px;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: row;
	align-content: space-between;

	div {
		&:first-child {
			width: 50%;
			display: flex;
			padding-bottom: 20px;
			align-items: flex-start;
			justify-content: flex-end;
			flex-direction: column;

			h3 {
				font-weight: bold;
				text-transform: uppercase;
				font-size: 1.3rem;
				text-align: left;
				margin-bottom: 5px;
			}

			a {
				font-size: 1.1rem;
				text-align: left;
			}
		}

		&:last-child {
			width: 50%;
			display: flex;
			padding-bottom: 20px;
			align-items: flex-end;
			flex-direction: row;

			h3 {
				font-weight: bold;
				text-transform: uppercase;
				font-size: 1.3rem;
				margin: 0 auto;
				text-align: left;
			}

			a {
				font-weight: bold;
				font-size: 1.1rem;
				text-align: left;
				margin-right: 60px;
			}
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoginComponent/LoginComponent.js":
/*!*********************************************************!*\
  !*** ./src/components/LoginComponent/LoginComponent.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginComponent_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.styled */ "./src/components/LoginComponent/LoginComponent.styled.js");
/* harmony import */ var _Subscribe_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscribe.styled */ "./src/components/LoginComponent/Subscribe.styled.js");
/* harmony import */ var _Info_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Info.styled */ "./src/components/LoginComponent/Info.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/LoginComponent/LoginComponent.js";




const LoginComponent = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginComponent_styled__WEBPACK_IMPORTED_MODULE_1__["LoginComponentStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginComponent_styled__WEBPACK_IMPORTED_MODULE_1__["LoginFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "email",
        placeholder: "Username/email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Subscribe_styled__WEBPACK_IMPORTED_MODULE_2__["SubscribeFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Don't have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "GBP \xA31.99 per month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: props.register,
        children: "subscribe to outboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Info_styled__WEBPACK_IMPORTED_MODULE_3__["InfoStyled"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "contact / submit music"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "team@outboardmusic.com",
          children: "team@outboardmusic.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "FAQs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "TERMS OF SERVICE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

_c = LoginComponent;
/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoginComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoginComponent/LoginComponent.styled.js":
/*!****************************************************************!*\
  !*** ./src/components/LoginComponent/LoginComponent.styled.js ***!
  \****************************************************************/
/*! exports provided: LoginComponentStyled, LoginFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentStyled", function() { return LoginComponentStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFields", function() { return LoginFields; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const LoginComponentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	width: 60vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: transparent;
`;
const LoginFields = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	min-height: 200px;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	h1 {
		font-size: 1.6rem;
		width: 100%;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({
  theme
}) => theme.primaryDark};
	}

	input {
		width: 30%;
		margin: 30px;
		margin-left: 0px;
		height: 30px;
		border: none;
		border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};
		color: ${({
  theme
}) => theme.primaryDark};
		background: none;
		font-size: 1.4rem;
		letter-spacing: 1.5px;
		font-family: monospace;

		&:focus {
			border: none;
			border-bottom: 3px solid ${({
  theme
}) => theme.primaryDark};
			outline: none;
		}

		::-webkit-input-placeholder {
			/* Chrome/Opera/Safari */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		::-moz-placeholder {
			/* Firefox 19+ */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-ms-input-placeholder {
			/* IE 10+ */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-moz-placeholder {
			/* Firefox 18- */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
	}

	a {
		font-size: 1.1rem;
		width: fit-content;
		height: 30px;
		margin: 30px;
		margin-left: 0px;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({
  theme
}) => theme.primaryDark};
		border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoginComponent/Subscribe.styled.js":
/*!***********************************************************!*\
  !*** ./src/components/LoginComponent/Subscribe.styled.js ***!
  \***********************************************************/
/*! exports provided: SubscribeFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeFields", function() { return SubscribeFields; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const SubscribeFields = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	min-height: 200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;

	a {
		font-size: 1.7rem;
		width: fit-content;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({
  theme
}) => theme.primaryDark};
		margin: 10px;
		margin-left: 0;
		border-bottom: 2px solid transparent;

		&:focus {
			border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};
			outline: none;
		}

		&:hover {
			cursor: pointer;
			border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};
			outline: none;
		}
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		p {
			font-size: 1rem;
			text-align: left;
			margin: 10px;
			margin-left: 0;
			margin-right: 40px;
			width: fit-content;
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Burger/Burger.js":
/*!************************************************!*\
  !*** ./src/components/NavBar/Burger/Burger.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Burger.styled */ "./src/components/NavBar/Burger/Burger.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/NavBar/Burger/Burger.js";




const Burger = ({
  open,
  setOpen
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Burger_styled__WEBPACK_IMPORTED_MODULE_3__["StyledBurger"], {
    open: open,
    onClick: () => setOpen(!open),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Burger;
Burger.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Burger);

var _c;

__webpack_require__.$Refresh$.register(_c, "Burger");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Burger/Burger.styled.js":
/*!*******************************************************!*\
  !*** ./src/components/NavBar/Burger/Burger.styled.js ***!
  \*******************************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  @media (max-width: ${({
  theme
}) => theme.mobile}) {
    display: flex;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({
  theme,
  open
}) => open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      transform: ${({
  open
}) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      opacity: ${({
  open
}) => open ? "0" : "1"};
      transform: ${({
  open
}) => open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      -webkit-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      -moz-box-shadow: ${({
  theme
}) => theme.burgerBorder};
      box-shadow: ${({
  theme
}) => theme.burgerBorder};
      transform: ${({
  open
}) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Burger/index.js":
/*!***********************************************!*\
  !*** ./src/components/NavBar/Burger/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Burger */ "./src/components/NavBar/Burger/Burger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Burger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/LogoContainer/LogoContainer.js":
/*!**************************************************************!*\
  !*** ./src/components/NavBar/LogoContainer/LogoContainer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogoContainer_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoContainer.styled */ "./src/components/NavBar/LogoContainer/LogoContainer.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/NavBar/LogoContainer/LogoContainer.js";


const LogoContainer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_styled__WEBPACK_IMPORTED_MODULE_1__["LogoContainerStyled"], {
    open: props.open,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = LogoContainer;
/* harmony default export */ __webpack_exports__["default"] = (LogoContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogoContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/LogoContainer/LogoContainer.styled.js":
/*!*********************************************************************!*\
  !*** ./src/components/NavBar/LogoContainer/LogoContainer.styled.js ***!
  \*********************************************************************/
/*! exports provided: LogoContainerStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainerStyled", function() { return LogoContainerStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const LogoContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	align-items: flex-end;
	justify-content: flex-end;
	height: calc(${({
  theme
}) => theme.menuHeight} - 10px);
	width: calc(${({
  theme
}) => theme.menuHeight} - 10px);
	z-index: 30;

	@media (max-width: ${({
  theme
}) => theme.mobile}) {
		top: 50px;
		left: ${props => props.open ? 0 : 0};
		right: ${props => props.open ? 0 : 100};
		margin-left: ${props => props.open ? 'auto' : '1px'};
		margin-right: auto;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/LogoContainer/MobileLogo.js":
/*!***********************************************************!*\
  !*** ./src/components/NavBar/LogoContainer/MobileLogo.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MobileLogo_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileLogo.styled */ "./src/components/NavBar/LogoContainer/MobileLogo.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/NavBar/LogoContainer/MobileLogo.js";


const LogoContainer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileLogo_styled__WEBPACK_IMPORTED_MODULE_1__["MobileLogoStyled"], {
    open: props.open,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = LogoContainer;
/* harmony default export */ __webpack_exports__["default"] = (LogoContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogoContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/LogoContainer/MobileLogo.styled.js":
/*!******************************************************************!*\
  !*** ./src/components/NavBar/LogoContainer/MobileLogo.styled.js ***!
  \******************************************************************/
/*! exports provided: MobileLogoStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogoStyled", function() { return MobileLogoStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const MobileLogoStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: ${({
  theme
}) => theme.menuHeight};
  width: ${({
  theme
}) => theme.menuHeight};
  z-index:30;
  
  @media (max-width: ${({
  theme
}) => theme.mobile}) {
      top: 0;
      left: 0;
      display: ${props => props.open ? 'none' : 'flex'};
      height: ${({
  theme
}) => theme.menuHeightMobile};
      width: ${({
  theme
}) => theme.menuHeightMobile};
    }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Menu/Menu.js":
/*!********************************************!*\
  !*** ./src/components/NavBar/Menu/Menu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.styled */ "./src/components/NavBar/Menu/Menu.styled.js");
/* harmony import */ var _LogoContainer_LogoContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LogoContainer/LogoContainer */ "./src/components/NavBar/LogoContainer/LogoContainer.js");
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/LogoIcon */ "./src/icons/LogoIcon.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/NavBar/Menu/Menu.js";








const Menu = ({
  signedIn,
  open,
  setSignedIn
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: signedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_styled__WEBPACK_IMPORTED_MODULE_3__["StyledMenu"], {
      open: open,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_LogoContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        open: open,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: "65px",
          height: "65px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        onClick: () => setSignedIn(false),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/basket",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaShoppingCart"], {
          style: {
            transform: "scale(1.5)"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/artists",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "artists"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, undefined), "artists"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/music",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "music"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, undefined), "music"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/submit",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, undefined), "submit music"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/about",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "about"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, undefined), "about"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/contact",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, undefined), "contact"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined) : !signedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_styled__WEBPACK_IMPORTED_MODULE_3__["StyledMenu"], {
      open: open,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_LogoContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        open: open,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: "65px",
          height: "65px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        onClick: () => setSignedIn(true),
        children: "login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, undefined), "home"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/about",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "about"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, undefined), "about"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        exact: true,
        activeStyle: {
          borderBottom: "2px solid blue"
        },
        to: "/user",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          role: "img",
          "aria-label": "login/signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }, undefined), "login/signup"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined) : null
  }, void 0, false);
};

_c = Menu;
Menu.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  signedIn: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

__webpack_require__.$Refresh$.register(_c, "Menu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Menu/Menu.styled.js":
/*!***************************************************!*\
  !*** ./src/components/NavBar/Menu/Menu.styled.js ***!
  \***************************************************/
/*! exports provided: StyledMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-end;
	background: transparent;
	height: ${({
  theme
}) => theme.menuHeight};
	text-align: left;
	padding: 0rem;
	padding-right: 1rem;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: transform 0.3s ease-out;
	z-index: 9;

	@media (max-width: ${({
  theme
}) => theme.mobile}) {
		transform: ${({
  open
}) => open ? 'translateY(0)' : 'translateX(-100%)'};
		opacity: ${({
  open
}) => open ? 1 : 0};
		background-color: ${({
  theme
}) => theme.white};
		width: 100%;
		height: 100vh;
		flex-direction: column;
		padding: 10px 10px 0px 0px;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	a {
		font-size: 1.1rem;
		text-transform: uppercase;
		font-weight: bold;
		margin: 20px;
		margin-right: 40px;
		letter-spacing: 0.0.5rem;
		color: ${({
  theme
}) => theme.primaryDark};
		text-decoration: none;
		transition: color 0.3s linear;
		padding-bottom: 5px;
		border-bottom: 2px solid transparent;

		@media (max-width: ${({
  theme
}) => theme.mobile}) {
			font-size: 1.2rem;
			text-align: center;
			margin: 20px auto;
		}

		&:hover {
			color: ${({
  theme
}) => theme.primaryHover};
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/Menu/index.js":
/*!*********************************************!*\
  !*** ./src/components/NavBar/Menu/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components/NavBar/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/components/NavBar/hooks.js");
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Burger */ "./src/components/NavBar/Burger/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/components/NavBar/Menu/index.js");
/* harmony import */ var _LogoContainer_MobileLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoContainer/MobileLogo */ "./src/components/NavBar/LogoContainer/MobileLogo.js");
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/LogoIcon */ "./src/icons/LogoIcon.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/NavBar/NavBar.js",
    _s = __webpack_require__.$Refresh$.signature();








function NavBar(props) {
  _s();

  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log('nav bar rendered');
  }, []);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"])(node, () => setOpen(false));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: node,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LogoContainer_MobileLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "40px",
        height: "40px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      setOpen: setOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: open,
      setOpen: setOpen,
      signedIn: props.signedIn,
      setSignedIn: props.setSignedIn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

_s(NavBar, "mviti+NlJaWfIk9z7MsAV1ua7wo=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

__webpack_require__.$Refresh$.register(_c, "NavBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar/hooks.js":
/*!****************************************!*\
  !*** ./src/components/NavBar/hooks.js ***!
  \****************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();


const useOnClickOutside = (ref, handler) => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Player/Audio.js":
/*!****************************************!*\
  !*** ./src/components/Player/Audio.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_md___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/md/ */ "./node_modules/react-icons-kit/md/index.js");
/* harmony import */ var react_icons_kit_md___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_audioActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/audioActions */ "./src/actions/audioActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProgressBar */ "./src/components/Player/ProgressBar.js");
/* harmony import */ var _data_playlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/playlist */ "./src/data/playlist.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Player/Audio.js",
    _s = __webpack_require__.$Refresh$.signature();











const getSecondsToMinutesAndSeconds = time => {
  if (time === 0) {
    return '0 : 00';
  }

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes} : 0${seconds}`;
};

const iconStyles = {
  display: 'flex',
  cursor: 'pointer',
  color: 'white',
  width: '60px',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black'
};
const Counter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
	font-size: 1.2rem;
	width: 100px;
	color: white;
	font-weight: bold;
	background-color: black;
	top: 50;
`;
_c = Counter;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
`;
_c2 = Container;

function Audio(props) {
  _s();

  let audioPlayer;
  const [currentTrackDuration, setCurrentTrackDuration] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [currentTrackMoment, setCurrentTrackMoment] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [progressBarWidth, setProgressBarWidth] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('0');
  const [isPlaying, setIsPlaying] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayer');
  };

  const handleStop = () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0.0;
    setIsPlaying(false);
    setCurrentTrackMoment(0);
  };

  const handlePlay = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const handleMetadata = () => {
    const duration = Math.floor(audioPlayer.duration);
    setProgress(Math.floor(audioPlayer.duration));
    setCurrentTrackDuration(getSecondsToMinutesAndSeconds(duration));
  };

  const handleTimeupdate = playNext => {
    setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
    setProgressBarWidth(Math.floor(audioPlayer.currentTime / audioPlayer.duration * 100) + '%');

    if (audioPlayer.currentTime === audioPlayer.duration) {
      playNext();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCurrentTrackDuration(0);
    setCurrentTrackMoment(0);
    setProgressBarWidth('0');
    handlePlay();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    initPlayer();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_data_playlist__WEBPACK_IMPORTED_MODULE_9__["PlaylistContext"].Consumer, {
    children: value => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        id: "audioPlayer",
        preload: "metadata",
        onLoadedMetadata: handleMetadata,
        onTimeUpdate: () => handleTimeupdate(value.handleNextTrack),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
          src: props.url,
          type: "audio/ogg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 7
        }, this), "Ooops, your browser is sooo old."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          style: iconStyles,
          icon: isPlaying ? react_icons_kit_md___WEBPACK_IMPORTED_MODULE_4__["ic_pause"] : react_icons_kit_md___WEBPACK_IMPORTED_MODULE_4__["ic_play_arrow"],
          onClick: handlePlay,
          size: 40
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_8__["ProgressBar"], {
          track: props.url,
          progressPercent: progressBarWidth,
          currentTrackMoment: currentTrackMoment,
          width: '100%',
          duration: progress
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Counter, {
          children: currentTrackDuration || '0 : 00'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 6
      }, this)]
    }, props.url, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 3
  }, this);
}

_s(Audio, "HeAHmZcPTEXGrRU/+rXH+mtOwVY=");

_c3 = Audio;
Audio.propTypes = {
  setAudioPlaying: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  setAudioPaused: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

const mapStateToProps = state => ({
  audio: state.audio
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  setAudioPlaying: _actions_audioActions__WEBPACK_IMPORTED_MODULE_5__["setAudioPlaying"],
  setAudioPaused: _actions_audioActions__WEBPACK_IMPORTED_MODULE_5__["setAudioPaused"]
})(Audio));

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Counter");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Audio");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Player/Player.js":
/*!*****************************************!*\
  !*** ./src/components/Player/Player.js ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Playlist */ "./src/components/Player/Playlist.js");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Top */ "./src/components/Player/Top.js");
/* harmony import */ var _data_playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/playlist */ "./src/data/playlist.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Player/Player.js",
    _s = __webpack_require__.$Refresh$.signature();






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 60px;
	margin: 0 auto;
	border-radius: 5px;
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	z-index: 10;
`;
_c = Container;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
_c2 = Loading;
const Player = props => {
  _s();

  const [playlist, setPlaylist] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [currentTrack, setCurrentTrack] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const handleChangeTrack = id => {
    setCurrentTrack(id);
  };

  const handleNextTrack = () => {
    if (currentTrack === playlist.length - 1) {
      setCurrentTrack(0);
      return;
    }

    setCurrentTrack(currentTrack + 1);
  };

  const handlePrevTrack = () => {
    if (currentTrack === 0) {
      setCurrentTrack(playlist.length - 1);
      return;
    }

    setCurrentTrack(currentTrack - 1);
  };

  const handleFetchData = async () => {
    const playlist = await Object(_data_playlist__WEBPACK_IMPORTED_MODULE_5__["fetchPlaylist"])();
    setPlaylist(playlist);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    handleFetchData();
  }, []);

  if (playlist.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Loading, {
        children: "loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_data_playlist__WEBPACK_IMPORTED_MODULE_5__["PlaylistContext"].Provider, {
      value: {
        handleNextTrack,
        handlePrevTrack
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Top__WEBPACK_IMPORTED_MODULE_4__["Top"], {
        track: playlist[currentTrack]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, undefined);
};

_s(Player, "1P5DuGAPLnzeFla7tA4r3pDdDME=");

_c3 = Player;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "Loading");
__webpack_require__.$Refresh$.register(_c3, "Player");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Player/Playlist.js":
/*!*******************************************!*\
  !*** ./src/components/Player/Playlist.js ***!
  \*******************************************/
/*! exports provided: Playlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return Playlist; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Player/Playlist.js";



function Playlist(props) {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    height: 260px;
    box-sizing: border-box;
    overflow: scroll;
  `;
  const Item = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    width: 100%;
    height: 45px;
    cursor: pointer;
    color: #b2b2b2;
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    box-sizing: border-box;
  `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
  `;
  const Descr = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    width: 100%;
    justify-content: center;
  `;
  const Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
    font-weight: bold;
    font-size: 0.8rem;
  `;
  const Author = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 300;
  `;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: props.playlist.map(track => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
      onClick: () => props.onChangeTrack(track.id),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
        src: track.cover,
        alt: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Descr, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: track.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Author, {
          children: track.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)]
    }, track.id, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
_c = Playlist;
Playlist.PropsTypes = {
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  onChangeTrack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Playlist");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Player/ProgressBar.js":
/*!**********************************************!*\
  !*** ./src/components/Player/ProgressBar.js ***!
  \**********************************************/
/*! exports provided: ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Player/ProgressBar.js",
    _s = __webpack_require__.$Refresh$.signature();





const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: black;
	border-radius: 5px;
	z-index: 100;

	h3 {
		position: relative;
		color: white;
		width: fit-content;
		white-space: nowrap;
		left: 100px;
	}
`;
_c = Container;
const Point = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div)`
		position: absolute;
		left: ${props => props.progressPercent};
		top: 50%;
		transform: translate(-50%, -50%);
		bottom: 10px;
		height: 100%;
		width: 8px;
		background-color: black;
		border-radius: 50%;
	`;
const Progress = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div)`
		position: absolute;
		left: 0;
		top: 0;
		bottom: 10px;
		height: inherit;
		background-color: whitesmoke;
		overflow:hidden;
		z-index: 101;

		h3 {
			position: relative;
			width: fit-content;
			white-space:nowrap;
			left: 100px;
			color: black;
		}
	`;
_c2 = Progress;
function ProgressBar(props) {
  _s();

  const [progressValue, setProgressValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setProgressValue(props.duration);
  }, [props.duration]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [console.log((props.duration / 1000 * props.currentTrackMoment).toFixed(1)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "TRANSIENT BEING - TRACK 4 (DUB MIX)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Progress, {
        progressPercent: props.progressPercent,
        initial: {
          width: '0%'
        },
        animate: {
          width: props.currentTrackMoment / 1000 * props.duration.toFixed(1) + '%'
        },
        exit: {
          width: '0%'
        },
        transition: {
          type: 'inertia',
          stiffness: 1
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "TRANSIENT BEING - TRACK 4 (DUB MIX)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }, this);
}

_s(ProgressBar, "w/59kiQcd2loNjkPmN4ZTWEhqXU=");

_c3 = ProgressBar;
ProgressBar.propTypes = {
  progressPercent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "Progress");
__webpack_require__.$Refresh$.register(_c3, "ProgressBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Player/Top.js":
/*!**************************************!*\
  !*** ./src/components/Player/Top.js ***!
  \**************************************/
/*! exports provided: Top */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top", function() { return Top; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Audio */ "./src/components/Player/Audio.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Player/Top.js";




function Top(props) {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
		border-radius: 5px 5px 0 0;
		height: 60px;
		z-index: 101;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #27117c;
		box-sizing: border-box;
		background-color: black;
	`;
  const Cover = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img`
		width: 135px;
		height: 135px;
		border-radius: 5px;
		margin-right: 1rem;
	`;
  const Info = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
		display: flex;
		flex-direction: row;
	`;
  const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
		font-size: 1rem;
		font-weight: 600;
		margin: 0px;
		white-space: nowrap;
	`;
  const Author = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		margin: 0px;
		white-space: nowrap;
	`;
  const Controls = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
		margin: 0;
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		width: 100%;
	`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Controls, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Audio__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: props.track.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, this);
}
_c = Top;
Top.propTypes = {
  track: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Top");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RegisterComponent/RegisterComponent.js":
/*!***************************************************************!*\
  !*** ./src/components/RegisterComponent/RegisterComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.styled */ "./src/components/RegisterComponent/RegisterComponent.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/RegisterComponent/RegisterComponent.js";


const RegisterComponent = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterComponentStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "subscribe to outboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "email",
        placeholder: "Username/email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Last Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Natianality"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "Text",
        placeholder: "How did you hear about us?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterFields"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "Text",
        placeholder: "etc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: ["NEXT >", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 12
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterComponent_styled__WEBPACK_IMPORTED_MODULE_1__["RegisterFields"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: props.register,
        children: "cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = RegisterComponent;
/* harmony default export */ __webpack_exports__["default"] = (RegisterComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "RegisterComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RegisterComponent/RegisterComponent.styled.js":
/*!**********************************************************************!*\
  !*** ./src/components/RegisterComponent/RegisterComponent.styled.js ***!
  \**********************************************************************/
/*! exports provided: RegisterComponentStyled, RegisterFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponentStyled", function() { return RegisterComponentStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFields", function() { return RegisterFields; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const RegisterComponentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	width: 60vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: transparent;

	h1 {
		font-size: 2rem;
		width: 100%;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({
  theme
}) => theme.primaryDark};
		margin-bottom: 30px;
	}
`;
const RegisterFields = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	min-height: 100px;
	width: 70%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	input {
		width: 45%;
		margin: 30px;
		margin-left: 0px;
		height: 30px;
		border: none;
		border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};
		color: ${({
  theme
}) => theme.primaryDark};
		background: none;
		font-size: 1.4rem;
		letter-spacing: 1.5px;
		font-family: monospace;

		&:focus {
			border: none;
			border-bottom: 3px solid ${({
  theme
}) => theme.primaryDark};
			outline: none;
		}

		::-webkit-input-placeholder {
			/* Chrome/Opera/Safari */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		::-moz-placeholder {
			/* Firefox 19+ */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-ms-input-placeholder {
			/* IE 10+ */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
		:-moz-placeholder {
			/* Firefox 18- */
			color: ${({
  theme
}) => theme.primaryDark};
			opacity: 0.3;
			font-size: 1.2rem;
		}
	}

	a {
		font-size: 1.1rem;
		width: fit-content;
		height: 30px;
		margin: 30px;
		margin-left: 0px;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		color: ${({
  theme
}) => theme.primaryDark};
		border-bottom: 2px solid ${({
  theme
}) => theme.primaryDark};

		&:hover {
			cursor: pointer;
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Release/Release.js":
/*!*******************************************!*\
  !*** ./src/components/Release/Release.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Release_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Release.styled */ "./src/components/Release/Release.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Release/Release.js";


const Release = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Release_styled__WEBPACK_IMPORTED_MODULE_1__["ReleaseStyled"], {
    animate: {
      opacity: 1
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: props.title + ' ' + props.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.artwork,
        alt: props.artist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "RELEASES FROM:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), props.artists.map(artist => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: [artist, " / "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 35
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = Release;
/* harmony default export */ __webpack_exports__["default"] = (Release);

var _c;

__webpack_require__.$Refresh$.register(_c, "Release");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Release/Release.styled.js":
/*!**************************************************!*\
  !*** ./src/components/Release/Release.styled.js ***!
  \**************************************************/
/*! exports provided: ReleaseStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseStyled", function() { return ReleaseStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const ReleaseStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  opacity:0;
  
  
  h1 {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    font-size:1.6rem;
  }

  h2 {
    font-size: 1rem;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    font-weight: lighter;
    text-transform: uppercase;
  }

  h3 {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    font-size:1rem;
  }

  div {
    position: relative;
    position: flex;
    min-width: 1px;
    width: 100%;

    &:after {
      content:'';
      display: block;
      padding-bottom: 100%;
    }
  }

  img {
    position: absolute;
    margin-left: -50%;
    height:100%;
    width: 100%;
  }

`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SalesPitch/SalesPitch.js":
/*!*************************************************!*\
  !*** ./src/components/SalesPitch/SalesPitch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesPitch.styled */ "./src/components/SalesPitch/SalesPitch.styled.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./src/icons/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/SalesPitch/SalesPitch.js";




const SalesPitch = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesPitchContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "SUBSCRIBERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "ARTISTS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About1"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Minimal Subscription"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\xA31.99 a month subscription fee. 5 exclusive tracks available to download each month."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About5"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Fair Payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "We're re-writing the script in how music is accessed by its listeners whilst shaking up the way artists are paid for their work."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About2"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Discover New Music"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Discover new artists through bio and about sections of each artist featured."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About6"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Connect With Engaged Listeners"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Outboard is a members' platform that provides its active subsribers with a bundle of exclusive music each month for next to nothing."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About3"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Download Exclusive Content"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Unreleased material, onl available to download and stream by Outboard Members. Access to all previous releases in private members area."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About7"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Power in Numbers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "By keeping the subscription rate low, we generate a larger user base. The monthly subscription revenue (after transaction fees) is then split equally between that months artists and Outboard. As the community grows, so does the revenue fr artists."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About4"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Contribute"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Build a community that pays artists fairly for their work. As our subscriber base grows, the more srtists will earn for their productions."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesItem"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_3__["About8"], {
          width: "90px",
          height: "90px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Perpetuate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Continue sales once the exlusive release period is over through our online members' store. Subscribers will have access to purchase the Outboard back catalogue at normal market rate.", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontWeight: 'bold'
              },
              children: "Artists receive 100% this revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, undefined), " (after online transaction fees)."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesModels"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "CURRENT MODELS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "The current market leaders in digital downloads take a huge percentage of the profit from sales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "BEATPORT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "60%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "TRAXSOURCE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "40%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "ITUNES"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "30%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "BANDCAMP"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "15-20%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SalesPitch_styled__WEBPACK_IMPORTED_MODULE_2__["SalesModels"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Outboard commission from individual back catalogue track purchases:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "0%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

_c = SalesPitch;
/* harmony default export */ __webpack_exports__["default"] = (SalesPitch);

var _c;

__webpack_require__.$Refresh$.register(_c, "SalesPitch");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SalesPitch/SalesPitch.styled.js":
/*!********************************************************!*\
  !*** ./src/components/SalesPitch/SalesPitch.styled.js ***!
  \********************************************************/
/*! exports provided: SalesPitchContainer, SalesItem, SalesModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPitchContainer", function() { return SalesPitchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesItem", function() { return SalesItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModels", function() { return SalesModels; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const SalesPitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	min-height: 100%;
	width: 100%;
	min-width: 400px;
	display: grid;
	grid-template-rows: 40px 200px 200px 200px 200px 300px;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20rem;
	grid-row-gap: 0px;
	padding: 30px;
	align-items: center;
	justify-content: center;
	background-color: ${({
  theme
}) => theme.white};

	h1 {
		text-align: left;
	}
`;
const SalesItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: 100%;
  max-height: 200px;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;

  svg {
    order: 1;
    margin: 0 auto;
    margin-left:0;
  }

  div {
    order:2;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
   
   h1 {
     font-size:2rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }
    h2 {
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }
     h3 {
      font-weight: bold;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }

    p {
      font-size: 1.1rem;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 20px;
    }

    div {
      width: 22.5%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
    }
  }
  
`;
const SalesModels = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: 100%;
  max-height: 200px;
  flex-direction: column;
  flex-wrap: nowrap;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  svg {
    order: 1;
    margin: 0 auto;
    margin-left:0;
  }

  div {
    order:2;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items:space-between;
    justify-content: space-between;
   
   h1 {
     font-size:4rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin-left: 0;
      margin-top: 0px;
      margin-bottom:12px;
    }
    h2 {
      font-size:2rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin: 5px;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }
     h3 {
      font-weight: bold;
      text-align: left;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }

    p {
      font-size: 1.1rem;
      width: 100%;
      text-align: left;
      margin-left: 0;
      margin-top: 5px;
      margin-bottom:12px;
    }

    div {
      width: 20%;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
      text-align: left;

      h3 {
        text-align: left;
        margin: 0;
        margin-top: 5px;
      }
    }
  }
  `;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Subscribe/Subscribe.js":
/*!***********************************************!*\
  !*** ./src/components/Subscribe/Subscribe.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Subscribe_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscribe.styled */ "./src/components/Subscribe/Subscribe.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/components/Subscribe/Subscribe.js";


const Subscribe = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Subscribe_styled__WEBPACK_IMPORTED_MODULE_1__["SubscribeStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Don't have an account?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Subscribe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      style: {
        marginBottom: '40px'
      },
      children: "GBP \xA31.99 per month"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      style: {
        marginBottom: '60px'
      },
      children: "Submit Music"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "CONTACT / SUBMIT MUSIC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "team@outboardmusic.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = Subscribe;
/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

var _c;

__webpack_require__.$Refresh$.register(_c, "Subscribe");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Subscribe/Subscribe.styled.js":
/*!******************************************************!*\
  !*** ./src/components/Subscribe/Subscribe.styled.js ***!
  \******************************************************/
/*! exports provided: SubscribeStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeStyled", function() { return SubscribeStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const SubscribeStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	flex-direction: column;
	padding-top: 70px;
	align-items: flex-start;
	width: 80%;
	margin: 0 auto;

	p {
		font-size: 1.1rem;
		margin: 0;
	}

	h3 {
		font-weight: bold;
		font-size: 1rem;
		margin: 0;
		margin-bottom: 10px;
	}
	button {
		background-color: ${({
  theme
}) => theme.buttonColor};
		text-transform: uppercase;
		font-weight: bold;
		font-size: 1.6rem;
		padding: 0.7rem;
		border: 1px solid transparent;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;

		&:hover {
			cursor: pointer;
			border: 1px solid ${({
  theme
}) => theme.primaryLight};
		}
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/about.js":
/*!***************************!*\
  !*** ./src/data/about.js ***!
  \***************************/
/*! exports provided: aboutItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutItems", function() { return aboutItems; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const aboutItems = [{
  id: 1,
  header: 'what is outboard?',
  bio: 'Electronic music subscription platform that gives subscribers exclusive unreleased monthly music bundles for only GBP £1.99 per month.'
}, {
  id: 2,
  header: 'why?',
  bio: 'We have created a service that delivers exclusive music from up and coming artists alongside exlusive originals from established producers, whilst simultaneously building a community/subscription model that pays artists fairly for their work.'
}, {
  id: 3,
  header: 'who is it for?',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/artists.js":
/*!*****************************!*\
  !*** ./src/data/artists.js ***!
  \*****************************/
/*! exports provided: artists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artists", function() { return artists; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const artists = [{
  id: 1,
  name: 'what is outboard?',
  bio: 'Electronic music subscription platform that gives subscribers exclusive unreleased monthly music bundles for only GBP £1.99 per month.',
  avatar: ''
}, {
  id: 2,
  name: 'why?',
  bio: 'We have created a service that delivers exclusive music from up and coming artists alongside exlusive originals from established producers, whilst simultaneously building a community/subscription model that pays artists fairly for their work.',
  avatar: ''
}, {
  id: 3,
  name: 'who is it for?',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.',
  avatar: ''
}, {
  id: 4,
  name: 'who is it for?',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.',
  avatar: ''
}, {
  id: 5,
  name: 'who is it for?',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.',
  avatar: ''
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/playlist.js":
/*!******************************!*\
  !*** ./src/data/playlist.js ***!
  \******************************/
/*! exports provided: fetchPlaylist, PlaylistContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlaylist", function() { return fetchPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistContext", function() { return PlaylistContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const fetchedPlaylist = [{
  id: 0,
  title: 'Shader',
  author: 'Blawan',
  url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Blawan-Shader.mp3',
  cover: 'https://via.placeholder.com/300/D4CBEB'
}, {
  id: 1,
  title: 'Mammoth',
  author: 'Dachshund & Quenum',
  url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Dachshund-&-Quenum-Mammoth.mp3',
  cover: 'https://via.placeholder.com/300/A89ACD'
}, {
  id: 2,
  title: 'Must Be Love',
  author: 'Cassie Ft. P.Diddy',
  url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Cassie-Ft-P.Diddy-Must-Be-Love.mp3',
  cover: 'https://via.placeholder.com/300/B6A2EB'
}, {
  id: 3,
  title: 'India In Me',
  author: 'Cobblestone Jazz',
  url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Cobblestone-Jazz-India-In-Me.mp3',
  cover: 'https://via.placeholder.com/300/9A8CBE'
}, {
  id: 4,
  title: 'Esperana',
  author: 'Dimitri Andreas',
  url: 'https://oscybcdn.ams3.digitaloceanspaces.com/outboard/Dimitri-Andreas-Esperana.mp3',
  cover: 'https://via.placeholder.com/300/9A8CBE'
}]; // mock api request

const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(fetchedPlaylist), 1000);
  });
};
const PlaylistContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/releases.js":
/*!******************************!*\
  !*** ./src/data/releases.js ***!
  \******************************/
/*! exports provided: releaseItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseItems", function() { return releaseItems; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const releaseItems = [{
  id: 1,
  title: 'outboard001',
  header: 'THIS MONTHS MUSIC',
  artists: ['Blenk', 'Blawan', 'Clouds', 'Stef Mendesidis', 'Karenn'],
  tracks: [],
  date: 'JAN 2021',
  artwork: '../images/artwork1.jpeg',
  bio: 'Electronic music subscription platform that gives subscribers exclusive unreleased monthly music bundles for only GBP £1.99 per month.'
}, {
  id: 2,
  title: 'outboard002',
  header: 'THIS MONTHS MUSIC',
  artists: ['Drizzy Drake', 'Zara Larrson', 'Charli XCX', 'Backstreet Boys', 'Bob Dylan'],
  tracks: [],
  date: 'FEB 2021',
  artwork: '../images/artwork2.jpeg',
  bio: 'We have created a service that delivers exciting and exclusive music fronm up and coming artists as well as unreleased originals from established heads, whilst simultaneously building a community/subscription model that pays artists fairly for their work.'
}, {
  id: 3,
  header: 'THIS MONTHS MUSIC',
  title: 'outboard003',
  artists: ['Digitalism', 'Switch', 'Basement Jaxx', 'Hot Chip', 'Jamie Jones'],
  tracks: [],
  date: 'MAR 2021',
  artwork: '../images/artwork3.jpeg',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.'
}, {
  id: 4,
  title: 'outboard001',
  header: 'THIS MONTHS MUSIC',
  artists: ['Blenk', 'Blawan', 'Clouds', 'Stef Mendesidis', 'Karenn'],
  tracks: [],
  date: 'JAN 2021',
  artwork: '../images/artwork1.jpeg',
  bio: 'Electronic music subscription platform that gives subscribers exclusive unreleased monthly music bundles for only GBP £1.99 per month.'
}, {
  id: 5,
  title: 'outboard002',
  header: 'THIS MONTHS MUSIC',
  artists: ['Drizzy Drake', 'Zara Larrson', 'Charli XCX', 'Backstreet Boys', 'Bob Dylan'],
  tracks: [],
  date: 'FEB 2021',
  artwork: '../images/artwork2.jpeg',
  bio: 'We have created a service that delivers exciting and exclusive music fronm up and coming artists as well as unreleased originals from established heads, whilst simultaneously building a community/subscription model that pays artists fairly for their work.'
}, {
  id: 6,
  header: 'THIS MONTHS MUSIC',
  title: 'outboard003',
  artists: ['Digitalism', 'Switch', 'Basement Jaxx', 'Hot Chip', 'Jamie Jones'],
  tracks: [],
  date: 'MAR 2021',
  artwork: '../images/artwork3.jpeg',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.'
}, {
  id: 7,
  title: 'outboard001',
  header: 'THIS MONTHS MUSIC',
  artists: ['Blenk', 'Blawan', 'Clouds', 'Stef Mendesidis', 'Karenn'],
  tracks: [],
  date: 'JAN 2021',
  artwork: '../images/artwork1.jpeg',
  bio: 'Electronic music subscription platform that gives subscribers exclusive unreleased monthly music bundles for only GBP £1.99 per month.'
}, {
  id: 8,
  title: 'outboard002',
  header: 'THIS MONTHS MUSIC',
  artists: ['Drizzy Drake', 'Zara Larrson', 'Charli XCX', 'Backstreet Boys', 'Bob Dylan'],
  tracks: [],
  date: 'FEB 2021',
  artwork: '../images/artwork2.jpeg',
  bio: 'We have created a service that delivers exciting and exclusive music fronm up and coming artists as well as unreleased originals from established heads, whilst simultaneously building a community/subscription model that pays artists fairly for their work.'
}, {
  id: 9,
  header: 'THIS MONTHS MUSIC',
  title: 'outboard003',
  artists: ['Digitalism', 'Switch', 'Basement Jaxx', 'Hot Chip', 'Jamie Jones'],
  tracks: [],
  date: 'MAR 2021',
  artwork: '../images/artwork3.jpeg',
  bio: 'For DJs, Producers and music lovers - by DJs, Producers and music lovers.'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/hooks/usePortal.js":
/*!********************************!*\
  !*** ./src/hooks/usePortal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();


/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */

function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}
/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem 
 */


function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */


function usePortal(id) {
  _s();

  const rootElemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`); // Parent is either a new root or the existing dom element

    const parentElem = existingParent || createRootElement(id); // If there is no existing DOM element, add a new one.

    if (!existingParent) {
      addRootElement(parentElem);
    } // Add the detached element to the parent


    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);
  /**
    * It's important we evaluate this lazily:
    * - We need first render to contain the DOM element, so it shouldn't happen
    *   in useEffect. We would normally put this in the constructor().
    * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
    *   since this will run every single render (that's a lot).
    * - We want the ref to consistently point to the same DOM element and only
    *   ever run once.
    * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    */

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

_s(usePortal, "aHdAbTDrTa5a3NQL1rgGPfFVhlo=");

/* harmony default export */ __webpack_exports__["default"] = (usePortal);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About1.js":
/*!*****************************!*\
  !*** ./src/icons/About1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About1.js";


function SvgAbout1(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 162 162",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2168 728c-507 62-987 357-1268 781-196 297-293 621-293 982s97 685 293 982c385 580 1100 887 1781 766 636-113 1174-576 1377-1183 69-207 84-311 84-565 0-195-3-241-24-341-116-553-464-1005-962-1250-146-71-321-129-475-157-113-21-398-29-513-15zm371 188c725 79 1295 621 1405 1339 27 176 15 453-27 614-74 285-219 542-422 744-286 286-652 444-1064 460-282 12-549-51-810-190-368-196-657-558-771-967-52-184-70-463-42-651 76-514 396-958 857-1189 264-133 582-191 874-160z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -32.91) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2408 3917c-62 54-22 154 62 154 54 0 92-37 92-89 0-80-91-118-154-65z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -163.465) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2033 3852c-21 16-27 31-27 60 0 50 22 81 68 97 31 10 42 9 63-5 62-40 71-99 23-150-28-31-89-32-127-2z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -159.175) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2791 3793c-85 47-57 173 39 173 109 0 123-159 16-183-15-3-40 1-55 10z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -154.84) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1676 3753c-15 18-27 44-27 57 0 41 48 89 89 89 44 0 87-35 95-79 5-25 0-39-22-66-39-46-96-47-135-1z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -148.452) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3117 3628c-40 23-57 71-40 112 18 45 54 66 97 58 50-10 72-32 78-77 4-33 0-47-19-69-31-35-79-44-116-24z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -139.69) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1376 3519c-29 36-28 90 2 123 35 39 70 44 113 15 31-21 37-32 40-69 3-36-2-49-23-71-38-37-102-37-132 2z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -128.373) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3371 3417c-43 56-12 151 50 151 69 0 107-36 107-100 0-71-112-108-157-51z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -117.513) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1154 3215c-77 59-29 187 64 170 80-14 110-97 53-153-33-33-86-41-117-17z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -102.226) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3625.28 3045.85c66.13-3.43 113.58 61.37 89.71 122.15-18.79 48.36-40.98 62.48-89.71 59.97-47.98-3.17-75.46-26.96-87.71-77.38-12.83-52.58 27.98-101.61 87.71-104.74z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.03433 .03007 .03007 .03433 168.455 -161.04)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M998 2883c-14 12-25 36-29 62-4 34-1 47 19 70 37 42 82 47 122 14 38-32 49-74 28-114-27-51-96-67-140-32z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -71.059) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3711.89 2682.97c70.08-4.68 122.28 64.1 97.74 127.39-14.32 36.92-55.81 61.78-97.74 58.42-32.99-2.94-79.16-48.14-80.29-80.43-2.5-50.27 38.56-103.36 80.29-105.38z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.04175 .01842 .01842 .04175 247.077 -112.218)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M948.489 2486.2c55.101-26.67 124.891 8.18 137.341 69.73 13.38 64.23-76.12 127.59-137.341 97.99-39.614-19.15-63.767-86.36-45.052-125.07 7.4-15.31 27.719-34.37 45.052-42.65z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.01986 .04108 .04108 .01986 -67.498 -10.917)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3711.88 2308.74c69.88-9.93 125.11 50.98 105.82 117.54-13.78 47.54-53.98 71.96-105.82 62.83-63.09-10.92-94.45-90.68-54.83-141.04 25.57-32.35 29.47-35.63 54.83-39.33z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.03997 .02201 .02201 .03997 239.082 -89.076)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1012 2132c-23 11-46 50-46 78 0 47 54 98 105 98 33 0 74-43 80-86 6-33 2-43-25-71-34-33-72-40-114-19z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 -3.02) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3638.07 1921.76c29.8-5.1 80.86 24.85 96.5 58.38 27.28 54.26-32.95 135.88-96.5 130.45-81.19-7.89-115.51-101.18-57.17-157.37 15.85-15.26 42.28-29.62 57.17-31.46z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.03287 .03166 .03166 .03287 194.138 -76.215)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1187 1762c-66 24-86 108-38 156 58 58 153 16 153-67 0-60-64-109-115-89z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 28.967) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3482.05 1641.18c33.98 6.21 65.41 39.51 73.35 77.7 8.34 40.14-30.27 95.15-73.35 104.1-66.58 13.84-124.71-49.65-105.8-115.89 14.51-53.06 50.62-75.89 105.8-65.91z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.04468 .00929 .00929 .04468 268.116 10.555)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1458.1 1494.09c65.26 12.63 93.16 84.29 56.08 141.93-19.24 28.69-25.87 33.17-56.08 36.68-65.68 8.18-113.69-41.45-104.11-105.85 7.46-49.7 54.13-82.44 104.11-72.76z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.03781 .02555 .02555 .03781 52.297 29.865)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3117.29 1376.71c58.82-26.75 127.71 18.43 127.02 84.22.07 67.9-57.85 103.82-127.02 77.75-44.23-17.43-62.79-57.34-47.53-103.64 13.24-41.31 16.7-44.92 47.53-58.33z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.03156 .03296 .03296 .03155 168.315 -18.483)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1721.79 1264.2c68.26-7.6 112.99 24.79 112.86 82.17.53 66.85-51.39 108.82-112.86 90.91-42.65-11.61-69.44-50.32-65.28-95.31 2.59-35.68 35.42-74.1 65.28-77.77z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.04218 .0174 .0174 .04218 102.535 49.08)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2779 1212c-15 14-31 40-34 58-5 27-1 39 25 68 41 46 98 49 135 6 50-59 21-140-56-151-34-4-47-1-70 19z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 81.08) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2146.11 1166.66c47.74 12.06 80.33 48.05 77.75 86.04-3.67 49.34-32.42 82.71-77.75 90.53-98.55 16.99-148.71-103.24-68.81-163.69 32.24-24.84 25.34-23.65 68.81-12.88z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "matrix(-.04497 .00775 .00775 .04497 154.377 68.88)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2414 1130c-76 76 10 192 106 143 59-31 66-111 14-152-39-31-83-27-120 9z",
      fillRule: "nonzero",
      stroke: "#000",
      transform: "translate(-27.637 88.563) scale(.04563)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        transform: "matrix(.23727 -.0034 0 .23727 -195.015 -266.367)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("clipPath", {
          id: "about_1_svg__a",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M973.043 1473.95h7.127a48.859 48.859 0 01-3.409-7.9c-.93-2.78-1.394-5.99-1.394-9.6 0-4.75.903-9.22 2.711-13.4 1.808-4.19 4.493-7.8 8.057-10.85 3.563-3.05 7.953-5.45 13.169-7.2 5.216-1.76 11.236-2.64 18.046-2.64 6 0 11.44.72 16.35 2.17 4.91 1.45 9.22 3.67 12.94 6.66 4.03 3.31 7.12 7.34 9.29 12.09 2.17 4.75 3.36 10.74 3.57 17.97h-24.48c0-6.71-1.6-11.59-4.81-14.64-3.2-3.05-7.38-4.57-12.55-4.57-5.26 0-9.21 1.37-11.85 4.1-2.63 2.74-3.95 6.38-3.95 10.93 0 3.2.52 6.14 1.55 8.83 1.03 2.68 2.12 5.37 3.25 8.05h22.31v14.26h-18.28c0 .62.03 1.21.08 1.78.05.57.08 1.16.08 1.78 0 4.13-1.06 8.01-3.18 11.62-2.12 3.62-5.81 7.34-11.077 11.16l.31.46c2.995-1.55 5.707-2.66 8.137-3.33 2.42-.67 4.98-1.01 7.67-1.01 2.79 0 5.08.21 6.89.63 1.81.41 3.49.9 5.04 1.47 1.55.57 3.1 1.06 4.64 1.47 1.55.41 3.41.62 5.58.62 3.1 0 5.94-.7 8.52-2.09 2.59-1.4 4.75-2.97 6.51-4.73l10.69 19.52c-3.2 2.79-7 5.12-11.39 6.98-4.39 1.85-9.06 2.78-14.02 2.78-3.92 0-7.31-.41-10.15-1.23-2.84-.83-5.47-1.74-7.9-2.72-2.42-.98-4.85-1.88-7.28-2.71-2.43-.82-5.24-1.24-8.44-1.24-3.309 0-6.305.7-8.99 2.09a65.789 65.789 0 00-7.902 4.88l-12.395-18.43c4.648-3 8.418-6.35 11.31-10.07 2.892-3.72 4.338-7.91 4.338-12.55 0-1.24-.103-2.46-.309-3.65a38.809 38.809 0 00-.775-3.48h-13.634v-14.26zm118.217-11h-25.57v-16.88c8.06-.21 14.88-2.09 20.46-5.66 5.57-3.56 9.03-9.17 10.38-16.81h19.98V1535h-25.25v-72.05zm40.59 46.64h25.72V1535h-25.72v-25.41zm77.16 28.04c-5.89 0-11.23-.75-16.03-2.24-4.81-1.5-8.97-3.57-12.48-6.2-3.51-2.63-6.32-5.71-8.44-9.22a30.705 30.705 0 01-4.11-11.31h24.17c.73 2.58 2.4 5.01 5.04 7.28 2.63 2.27 6.38 3.41 11.23 3.41 7.54 0 13.17-2.99 16.89-8.98 3.2-5.07 5.11-12.76 5.73-23.09h-.31c-3.2 4.03-6.92 7.2-11.15 9.53-4.24 2.32-9.3 3.48-15.19 3.48-5.47 0-10.64-.92-15.49-2.78-4.86-1.86-9.09-4.5-12.71-7.91-3.61-3.41-6.45-7.48-8.52-12.24-2.06-4.75-3.1-10.07-3.1-15.96 0-5.78 1.09-11.07 3.26-15.88 2.17-4.8 5.19-8.9 9.06-12.31 3.88-3.41 8.5-6.07 13.87-7.98 5.37-1.91 11.2-2.87 17.51-2.87 6.4 0 12.21.93 17.43 2.79 5.21 1.86 9.73 4.49 13.55 7.9 10.33 9.3 15.5 24.69 15.5 46.17 0 9.51-.98 18.16-2.95 25.95-1.96 7.8-5.26 14.23-9.91 19.29-3.82 4.34-8.42 7.62-13.79 9.84-5.37 2.22-11.73 3.33-19.06 3.33zm-.31-56.08c3 0 5.76-.49 8.29-1.47 2.53-.99 4.7-2.38 6.51-4.19a19.81 19.81 0 004.26-6.35c1.03-2.43 1.55-5.14 1.55-8.14 0-2.89-.52-5.6-1.55-8.13-1.03-2.53-2.45-4.67-4.26-6.43-1.81-1.75-3.98-3.15-6.51-4.18-2.53-1.04-5.24-1.55-8.13-1.55-6.2 0-11.16 1.91-14.88 5.73-3.72 3.82-5.58 8.63-5.58 14.41 0 2.89.47 5.58 1.4 8.06.93 2.48 2.3 4.62 4.1 6.43 1.81 1.8 3.96 3.22 6.43 4.26 2.48 1.03 5.27 1.55 8.37 1.55zm98.23 56.08c-5.89 0-11.23-.75-16.04-2.24-4.8-1.5-8.96-3.57-12.47-6.2-3.51-2.63-6.32-5.71-8.44-9.22a30.705 30.705 0 01-4.11-11.31h24.17c.73 2.58 2.4 5.01 5.04 7.28 2.63 2.27 6.38 3.41 11.23 3.41 7.54 0 13.17-2.99 16.89-8.98 3.2-5.07 5.11-12.76 5.73-23.09h-.31c-3.2 4.03-6.92 7.2-11.15 9.53-4.24 2.32-9.3 3.48-15.19 3.48-5.47 0-10.64-.92-15.49-2.78-4.86-1.86-9.09-4.5-12.71-7.91-3.61-3.41-6.45-7.48-8.52-12.24-2.06-4.75-3.1-10.07-3.1-15.96 0-5.78 1.09-11.07 3.26-15.88 2.17-4.8 5.19-8.9 9.06-12.31s8.5-6.07 13.87-7.98c5.37-1.91 11.21-2.87 17.51-2.87 6.4 0 12.21.93 17.43 2.79 5.21 1.86 9.73 4.49 13.55 7.9 10.33 9.3 15.5 24.69 15.5 46.17 0 9.51-.99 18.16-2.95 25.95-1.96 7.8-5.27 14.23-9.91 19.29-3.83 4.34-8.42 7.62-13.79 9.84-5.37 2.22-11.73 3.33-19.06 3.33zm-.31-56.08c3 0 5.76-.49 8.29-1.47 2.53-.99 4.7-2.38 6.51-4.19 1.8-1.81 3.22-3.92 4.26-6.35 1.03-2.43 1.55-5.14 1.55-8.14 0-2.89-.52-5.6-1.55-8.13-1.04-2.53-2.46-4.67-4.26-6.43-1.81-1.75-3.98-3.15-6.51-4.18-2.53-1.04-5.24-1.55-8.13-1.55-6.2 0-11.16 1.91-14.88 5.73-3.72 3.82-5.58 8.63-5.58 14.41 0 2.89.47 5.58 1.4 8.06.93 2.48 2.3 4.62 4.1 6.43 1.81 1.8 3.96 3.22 6.43 4.26 2.48 1.03 5.27 1.55 8.37 1.55z",
            clipRule: "nonzero"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          clipPath: "url(#about_1_svg__a)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("use", {
            xlinkHref: "#about_1_svg___Image2",
            x: 35.914,
            y: 68.58,
            width: 90.287,
            height: 28.204,
            transform: "matrix(4.18158 .06007 0 4.0989 821.937 1134.3)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("image", {
        id: "about_1_svg___Image2",
        width: 91,
        height: 29,
        xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAdAFsDAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQI/8QALBAAAgECBAQFBAMAAAAAAAAAAQIRAyEAEjFBIlFhcQQTgZGhQsHR8CMysf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDx+IdUU1AxLZctlgc5Mj932DBKakpUqZnRcoUCATJ1tMxzG+oiMAaSjy4LhhTFuHMCWBIt79iRbATIhmWoYvxcQJ157/5gDTpVAMoZEKHMXawUjrz6dOuAzFc4qVlclnzkh7ZTqOc+umAC52biGa5NiAzA/aT+6gGRCGUusIxAApkA3F9b6H5wCqKTPUq5agQyAFUGLEjX39MAVXw/lhgzrvDEctPcH8HAZqjCqlUs5fLfzCCDy7iI9RgGPg61U+YKTqGuAqSB7YBXeaJAiFHDwxy7zqfnnGAo2aorFFprTCgTMxYTrJi3eB0OAQU2alTK5VJb+MhiW3hQO416jABqmRlDKyurcENAS+kH11/OALhk8QR/ZiCjKDrHQaAfbAOIJKoWPCEhSCTl33OgOmnaJCb03pVRTqCnLycrGV6driJnvbUGotS8oK1I5YzElpY9hHOddvfAIpRKYLCmWiFAneNf3n0wFFWtUCstMZoym+hNgTeBOl9tdRgJBl8lQyjKNIiST6zG/wAYCbs2Y5QkbQgwHXxN4fK1WmGCggBrkERHoBcX/ARgCsabU2OSVgmd+Y0uTftgHo5qgqNmMNUBqEDqbAfOn+XCfmeUVNJzwm0QOIaemneMBR6VZnao1OFLERI1In2GvIYAuGVDVzZKgH0tcAiBNokwDbWScApRfLApMzAXAL2WQNbRzHXlpgIKFJJPAD9OxGAurcENJBJUkD+t7m1iL/PbAamxquGFNFDTC01IJO6jqQR6R2wCoVdw2dmeJ0Jkg6TtMbc8A4p+GQAVcmaJPGw1uPpOASmzvVFNqj8QA4TFiJNsBalT8+qBmjhLNmGaSDE4DN4YCi1SVPlhDBXWSR+fjlgJLTDNUCEqaIJJ1LESZnbTAV8PS/ipy0qyO8RplkxPWPeDgJV4V6gcCpkrcROrG++wtgFSoy0zGWBxEZRxaW+cBg+Wm8qMrtBAtcCZHr+3wBpZTUKRpLAmIBAO3oPbABAi0TWykrnK5Cdo5+uA6PDeHev4N/FvWJZGiGEzAG/2wHHUeWkot++A/9k="
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout1;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout1);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About2.js":
/*!*****************************!*\
  !*** ./src/icons/About2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About2.js";


function SvgAbout2(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 164 164",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2599 698c-437 47-868 224-1234 508-110 85-311 286-402 402-282 362-462 804-507 1247-48 473 28 904 236 1329 128 261 265 450 475 658 197 195 384 327 633 449 355 174 687 252 1072 252 385 1 731-82 1085-258l175-87 845 844c465 465 858 849 874 855 20 8 38 8 58 0 43-16 735-711 749-752 8-24 7-40-1-58-7-13-393-404-857-869l-844-845 77-153c187-369 270-710 269-1107 0-542-175-1051-516-1499-84-110-286-313-407-409-257-202-554-350-888-443-267-74-587-97-892-64zm558 200c501 67 939 283 1294 636 242 240 415 519 537 865 134 378 153 854 51 1260-165 659-636 1219-1254 1492-454 202-947 248-1431 134-394-92-774-304-1061-593-298-300-484-631-589-1049-150-600-30-1272 318-1785 140-207 388-455 595-595 273-185 632-321 966-365 154-20 423-20 574 0zm2481 4430l793 793-267 268c-147 147-275 268-284 268s-369-354-801-786l-785-785 76-57c100-77 346-322 418-417 31-42 57-77 57-77 1 0 357 357 793 793z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 66.03,
      transform: "matrix(.026 0 0 .026 -10.676 -16.891)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2793 2633c-553 26-1075 302-1400 741-245 331-367 703-366 1115 2 561 258 1087 700 1439 254 202 571 337 898 383 114 16 379 16 494 0 240-34 503-126 706-248 217-131 447-352 597-576 58-87 169-319 202-420 69-216 92-366 92-588 0-307-60-563-195-829-97-192-186-315-340-472-354-361-883-569-1388-545zm226 203c218 21 374 65 577 163 329 159 580 406 747 736 140 276 199 576 173 872-22 244-63 391-169 607-162 326-404 570-731 736-473 240-1015 240-1488 0-199-100-346-213-490-376-145-164-262-366-334-581-111-328-109-708 4-1038 170-495 546-870 1041-1040 219-76 436-101 670-79z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 66.03,
      transform: "matrix(.026 0 0 .026 -10.676 -52.41)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2851 4357c-55 12-89 79-69 131 17 47 49 59 190 71 285 24 535 129 731 307 262 238 403 525 429 879 8 108 21 139 67 158 37 15 76 5 107-27 21-23 23-35 21-117-14-638-482-1211-1109-1361-63-15-151-30-194-33-43-4-95-8-115-10-21-2-47-1-58 2z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 66.03,
      transform: "matrix(.026 0 0 .026 -10.676 -87.123)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout2;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout2);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About3.js":
/*!*****************************!*\
  !*** ./src/icons/About3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About3.js";


function SvgAbout3(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 128 196",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M57.802.194C38.565 2.354 21.291 15.937 15.127 33.8c-2.944 8.48-3.258 11.975-3.298 34.156V85.31l-2.473.785c-3.22 1.02-6.478 3.926-8.088 7.185L.091 95.634l-.118 43.068c-.118 44.717-.079 46.248 1.57 49.467.982 1.885 3.887 4.633 6.046 5.693.903.471 2.866 1.06 4.319 1.296 3.65.588 100.583.588 104.234 0 4.71-.786 8.598-3.926 10.246-8.402l.903-2.356-.235-89.198-1.139-2.159c-1.963-3.769-5.614-6.635-9.343-7.38l-1.178-.236L115.2 65.6c-.236-21.632-.354-22.967-2.749-30.348-4.161-12.72-13.348-23.399-25.44-29.602-4.475-2.277-10.56-4.397-14.644-5.025C68.363-.002 61.453-.2 57.802.194zm16.921 7.577c7.342 1.924 15.782 6.753 21.004 12.053 4.475 4.554 8.794 11.739 10.718 17.863 2.002 6.478 2.277 9.776 2.277 29.406v18.02h-6.596V66.464c0-20.415-.235-22.731-2.67-29.17-4.083-10.639-13.544-19.276-25.165-22.927-3.455-1.1-4.161-1.178-10.718-1.178-6.556 0-7.223.078-10.678 1.178-7.263 2.277-12.642 5.614-17.47 10.718-4.398 4.75-7.028 9.304-9.03 15.782l-1.1 3.651-.314 40.595h-6.517V66.11c-.04-17.431.04-19.355.825-23.085 2.905-14.29 11.07-25.126 23.87-31.643 4.475-2.277 6.752-3.101 11.895-4.2 5.221-1.14 13.937-.904 19.669.588zm-2.08 13.034c10.285 3.259 17.902 10.797 21.356 21.122l1.296 3.808.157 19.709.118 19.669H31.577l.157-19.905c.157-19.394.196-19.944 1.1-22.77 3.847-11.74 12.915-19.944 24.811-22.457 3.18-.668 11.739-.196 14.997.824zm44.52 71.728c1.138.55 2.041 1.413 2.708 2.59l1.021 1.728v86.568l-1.02 1.767c-.668 1.138-1.571 2.041-2.71 2.551-1.648.825-2.512.825-53.589.825h-51.94l-1.61-.903c-.863-.51-2.002-1.453-2.473-2.08l-.864-1.179V96.027l.982-1.335c.51-.746 1.649-1.727 2.473-2.16 1.453-.784 2.866-.784 53.432-.824 51.077 0 51.94 0 53.59.825z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M60.472 120.132c-4.868 1.492-8.323 6.203-8.323 11.464 0 2.16.235 3.102 1.492 5.654l1.491 3.023v6.556c0 3.847.197 7.184.472 8.009 2.277 6.792 11.228 7.852 14.997 1.806 1.217-2.002 1.217-2.042 1.374-9.226l.157-7.224 1.178-1.453c5.967-7.459.392-19.08-9.109-18.962-1.491 0-3.14.157-3.73.353zm6.478 6.832c1.177.785 2.198 2.944 2.198 4.632 0 1.531-1.295 3.573-2.866 4.476l-1.256.746v8.087c0 8.323-.118 9.03-1.728 9.03-1.334 0-1.57-1.413-1.57-9.383 0-7.38-.04-7.813-.864-8.559-2.12-1.923-2.63-5.143-1.177-7.498 1.491-2.474 4.79-3.141 7.263-1.531z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout3;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout3);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout3");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About4.js":
/*!*****************************!*\
  !*** ./src/icons/About4.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About4.js";


function SvgAbout4(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 176 146",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3308 4900c-216 27-489 108-687 205-108 52-126 65-139 96s-13 40 1 71c17 34 53 58 88 58 10 0 65-23 123-51 289-142 599-208 937-198 298 9 548 69 820 198 72 34 139 62 149 62 73 0 119-85 78-144-32-45-243-143-457-212-208-66-339-86-598-90-130-2-272 0-315 5z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 -152.936) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1609 3878c-285 77-478 320-478 599 0 110 16 183 61 278 62 130 164 232 294 294 95 45 169 62 273 61 465-3 761-486 555-905-45-92-157-211-245-261-142-79-318-105-460-66zm255 185c270 70 405 366 282 619-80 164-272 264-453 236-291-46-456-349-334-615 59-130 169-214 326-249 46-10 119-7 179 9z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 -112.643) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5303 3885c-286 61-494 318-494 608 1 349 274 625 620 627 176 2 315-56 441-181 127-126 188-268 188-441s-57-309-183-436c-159-161-360-223-572-177zm235 189c134 34 233 117 293 244 31 65 33 78 33 180 0 103-2 116-33 182-62 129-173 214-320 245-189 39-380-57-468-235-39-78-40-83-40-196 0-106 3-121 30-177 96-195 305-296 505-243z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 -112.988) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1381 3008c-140 30-297 122-390 229-85 97-155 245-168 356-6 50-4 57 23 84 21 21 39 28 68 28 59 0 80-24 105-120 45-179 166-310 347-375 65-23 80-24 388-24s322 1 391 24c178 62 301 196 349 381 22 85 48 114 102 114 29 0 48-7 66-25 31-31 33-66 9-157-58-226-238-416-468-495l-87-30-331-3c-263-2-346 1-404 13z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 -41.974) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5090 2981c-271 48-494 246-569 506-28 97-26 143 8 172 39 34 94 34 127 1 15-15 30-48 37-82 42-203 225-376 431-408 38-6 177-10 310-10 286 0 352 8 457 59 143 70 246 201 283 360 8 31 24 68 38 81 43 44 129 25 151-33 13-36-16-155-63-252-51-106-122-192-210-257-83-61-129-85-226-117-69-23-91-24-399-26-179-2-348 1-375 6z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 -41.315) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3449 1603c-218 53-406 236-461 451-21 79-21 234-1 315 69 270 321 467 599 469 115 1 202-20 303-73 86-46 198-150 243-227 107-185 117-406 27-592-46-94-93-153-173-219-64-53-186-112-267-129-74-16-193-14-270 5zm281 194c369 124 408 630 62 807-191 97-437 36-557-140-56-81-77-160-73-271 4-110 32-186 98-266 105-128 308-185 470-130z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 29.48) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1473 1302c-12 5-31 22-41 37-16 25-17 35-5 93 22 112 104 340 165 465 121 245 307 492 498 664 213 191 281 224 341 164 31-31 35-88 8-118-10-12-59-52-108-89-118-91-313-294-401-418-131-184-245-432-308-666-14-52-34-103-44-113-23-23-74-32-105-19z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 40.369) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5577 1366c-19 16-33 40-38 65-13 73-81 270-131 381-126 282-342 558-588 751-97 76-105 85-105 129-1 43 48 96 86 97 76 0 374-274 538-494 179-241 308-511 373-780 23-96 15-136-32-160-42-22-67-19-103 11z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 38.863) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3219 744c-148 30-316 134-410 254-97 124-170 325-142 392 15 37 62 57 110 47 44-8 62-33 78-108 32-153 134-283 283-359 94-48 163-55 490-51 282 4 309 6 366 28 83 30 152 75 208 136 64 68 96 127 129 235 30 100 51 124 106 124 18 0 46-10 61-22 35-27 37-82 6-184-40-132-116-245-226-339-76-65-131-95-241-134l-84-29-330-3c-252-1-349 2-404 13z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 39.08,
      transform: "translate(-25.103 99.898) scale(.03138)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout4;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout4);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout4");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About5.js":
/*!*****************************!*\
  !*** ./src/icons/About5.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About5.js";


function SvgAbout5(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 156 173",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M90.627.166c-10.38 1.02-16.712 2.224-23.478 4.48-9.113 3.057-16.002 7.784-18.535 12.788-1.452 2.843-2.224 10.01-1.915 17.207.123 3.151.185 7.29.123 9.268-.185 4.757-.154 13.13 0 17.516.093 1.946.031 5.313-.123 7.476l-.31 3.954-2.965.34c-11.06 1.359-20.543 6.116-28.884 14.488C7.064 95.128 3.048 102.511.67 113.076c-.587 2.688-.68 4.109-.68 9.793 0 5.622.124 7.167.71 9.855 2.225 10.132 6.611 18.133 13.84 25.362 9.237 9.237 20.389 14.18 33.116 14.674 9.546.34 18.196-1.638 26.29-6.117 7.568-4.201 14.766-11.245 19.153-18.813l1.452-2.472 8.99-.185c11.367-.247 17.237-.988 26.165-3.305 9.175-2.41 15.724-5.654 20.049-10.01 2.78-2.78 3.954-5.19 4.664-9.792.649-4.109.742-13.994.155-17.269-.247-1.483-.247-2.564 0-4.047.216-1.112.37-4.726.37-8.032 0-3.305-.154-6.92-.37-8.032-.247-1.482-.247-2.564 0-4.046.463-2.534.494-13.408.03-15.91-.246-1.42-.216-2.842.124-5.684.494-3.954.402-10.843-.185-14.427-.216-1.235-.216-2.502.03-3.892.588-3.182.464-13.098-.185-17.423-.648-4.418-1.668-6.858-3.892-9.299-6.333-7.012-20.574-12.14-38.152-13.716-3.367-.309-18.967-.401-21.717-.123zm25.61 6.425c21.315 3.028 34.753 10.75 31.633 18.165-.68 1.637-3.182 4.17-5.653 5.746-17.516 11.06-58.51 12.048-79.362 1.915-6.302-3.09-9.236-6.024-9.484-9.484-.123-1.575 0-2.1.711-3.305 1.39-2.379 4.201-4.603 8.464-6.704 7.013-3.49 15.6-5.653 26.691-6.796 4.603-.463 22.644-.185 27 .463zm32.93 29.07c-.432 6.116-.988 8.866-2.13 10.503-4.202 6.148-17.918 11.152-35.187 12.82-4.974.495-17.021.495-22.057.031-15.631-1.544-27.74-5.468-33.641-10.997-.896-.834-1.823-1.947-2.1-2.472-.65-1.266-1.33-5.22-1.607-9.576-.247-3.77-.402-3.676 2.224-1.607 3.645 2.873 11.152 6.024 18.751 7.878 18.597 4.54 43.126 3.954 59.962-1.452 5.19-1.668 11.306-4.665 13.84-6.735 1.05-.895 2.007-1.637 2.07-1.637.061-.03 0 1.452-.124 3.244zM57.45 56.173c14.52 8.372 41.365 11.4 64.626 7.322 10.35-1.823 19.802-5.345 25.146-9.36l2.194-1.669-.216 3.027c-.31 4.17-1.02 8.774-1.514 9.7-2.595 4.912-12.048 9.639-23.972 12.08-12.172 2.44-27.494 2.841-40.222.988-13.778-2.008-25.3-6.765-28.946-11.986-1.08-1.545-1.791-5.005-2.1-10.349l-.217-3.553 1.607 1.329c.865.71 2.502 1.822 3.614 2.471zm91.75 19.462c-.31 4.109-1.02 8.743-1.514 9.638-.68 1.298-3.028 3.615-4.974 4.943-8.248 5.592-25.146 9.33-42.198 9.299-6.21 0-6.457-.062-7.569-2.04-1.73-3.027-4.973-7.135-8.248-10.41l-3.244-3.213 1.267.217c7.723 1.235 25.084 1.452 33.023.432 14.087-1.823 25.672-5.715 31.974-10.72.772-.648 1.513-1.173 1.575-1.173.062 0 .031 1.359-.092 3.027zM57.264 79.28c5.777.958 12.264 3.553 17.33 6.982 9.824 6.642 16.713 17.269 18.783 29.07.68 3.83.68 11.09 0 15.013-1.576 9.237-6.148 17.701-13.099 24.405-8 7.692-17.577 11.739-28.914 12.14-7.94.278-13.871-.957-20.945-4.417-9.02-4.387-15.848-11.245-20.235-20.235-3.429-7.012-4.726-13.098-4.448-20.975.216-6.457 1.36-11.307 4.016-17.176 3.769-8.31 11.832-16.558 20.358-20.852 8.063-4.047 17.917-5.5 27.154-3.955zm91.904 16.435c-.402 5.499-1.02 8.835-1.885 10.194-4.417 6.858-20.08 12.172-39.48 13.407-2.935.186-5.962.31-6.703.31H99.77l-.216-2.163c-.309-2.811-1.328-7.692-2.162-10.04-.34-1.02-.618-1.884-.618-1.946 0-.062 1.853-.124 4.14-.124 17.639 0 34.537-3.769 44.36-9.885 1.267-.773 2.564-1.7 2.904-2.07 1.081-1.205 1.236-.834.989 2.317zm.03 19.802c-.617 8.928-1.359 10.874-5.158 13.808-5.715 4.387-15.23 7.538-28.112 9.299-3.337.463-18.844 1.081-18.813.772 0-.062.278-1.08.648-2.255.773-2.564 1.947-8.742 1.947-10.41v-1.267h1.513c3.77 0 12.975-.71 17.114-1.298 12.512-1.822 22.768-5.375 28.637-9.916 1.205-.927 2.255-1.699 2.317-1.699.062-.03.031 1.298-.092 2.966z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout5;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout5);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout5");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About6.js":
/*!*****************************!*\
  !*** ./src/icons/About6.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About6.js";


function SvgAbout6(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 147 175",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3612 3622l-26 13-3 302-3 301h-292c-317 0-330 3-330 57 0 63 7 64 329 67l294 3v286c0 242 2 290 16 310 19 26 54 30 84 8 19-14 20-32 23-310l3-295h272c265 0 320-5 339-34 14-22 9-56-11-74-17-15-54-18-309-18h-291l-3-294-3-295-25-20c-29-24-30-24-64-7z",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 41.61,
      transform: "translate(-32.522 -148.127) scale(.04126)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2231 2029c-341 71-597 285-703 588-61 176-64 393-7 571 87 271 297 487 561 579 510 175 1065-141 1174-668 99-480-215-963-690-1061-70-14-281-20-335-9zm336 136c485 130 723 656 499 1102-194 387-665 536-1051 334-190-99-331-273-389-482-31-112-31-279 0-396 79-296 323-520 626-574 71-13 238-5 315 16z",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 41.61,
      transform: "translate(-32.522 -39.365) scale(.04126)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1717 806c-274 34-525 171-688 376-109 138-168 265-204 438-19 91-22 313-6 345 11 20 39 20 1553 20 1480 0 1542-1 1559-19 13-15 17-42 17-127 0-448-279-847-688-983-162-55-210-58-887-56-344 1-639 3-656 6zm1438 144c85 25 201 79 274 128 239 158 392 436 393 710v81H921l8-96c28-359 243-658 568-790 140-57 152-57 902-55 630 3 699 5 756 22z",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 41.61,
      transform: "translate(-32.522 91.718) scale(.04126)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout6;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout6);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout6");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About7.js":
/*!*****************************!*\
  !*** ./src/icons/About7.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About7.js";


function SvgAbout7(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 170 174",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3229 4829c-293 41-529 239-623 523-34 103-38 293-9 401 112 412 531 648 941 529 182-53 358-201 446-375 60-120 83-231 76-369-6-127-23-195-75-302-68-137-198-267-340-338-113-57-292-86-416-69zm212 205c188 44 346 190 403 372 30 94 30 233 0 327-54 172-184 300-368 362-86 29-236 27-329-5-179-61-316-211-359-392-45-191 9-381 148-519 134-133 325-188 505-145z",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 24.57,
      transform: "matrix(.02995 0 0 .02995 -14.513 -144.096)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1628 642c-136 32-215 68-322 149-120 92-202 212-258 378-31 94-34 287-5 392 19 71 79 197 114 242 20 25 20 27 2 37-155 89-342 257-435 391-133 192-205 395-225 638-24 277 128 486 396 545l28 7 3 464c3 457 4 466 28 525 51 127 157 231 279 276l74 27 956-6 58-28c31-15 79-44 105-65l47-38 5 370c7 404 7 405 77 526 31 53 120 136 174 164 100 50 126 52 589 53 470 0 488-2 599-58 74-38 155-126 198-216l38-78 6-770 68 51c45 34 93 59 140 73 68 21 91 22 537 19l467-3 68-33c145-68 251-209 273-361 6-38 10-254 10-480v-412l45-11c25-6 59-16 76-22 98-32 208-137 260-248 28-60 34-87 38-170 18-412-198-826-555-1064-61-40-112-75-114-77s11-25 30-51c79-116 119-250 118-400 0-116-11-175-52-278-68-170-201-314-369-399-68-34-236-74-313-74-145 0-297 47-418 128-312 208-422 616-256 947 18 36 42 78 53 94 11 15 18 33 14 38-3 5-31 24-61 41-31 17-93 61-138 96-45 36-82 64-84 62-1-2-15-26-31-54-174-304-546-447-877-337-161 53-322 182-405 325-22 37-43 67-47 67s-21-14-37-31c-33-34-158-123-212-151l-34-17 47-76c26-42 60-114 75-160 25-74 28-100 28-221 0-152-13-211-74-336-89-181-236-307-434-373-117-39-269-50-367-27zm236 196c138 25 279 119 357 237 162 244 94 594-144 752-148 98-335 123-491 66-229-83-368-281-368-521 0-290 243-537 536-544 27 0 76 4 110 10zm3116 0c205 38 375 198 427 404 36 137 22 256-43 386-40 79-151 194-224 230-189 95-391 87-559-22-175-113-275-329-246-531 45-312 338-524 645-467zm-1514 982c218 65 365 236 397 461 35 245-113 491-352 584-46 17-90 25-172 28-97 4-120 1-187-22-100-34-168-79-239-157-190-210-188-526 3-733 111-119 240-177 397-177 58 0 118 6 153 16zm-2103 182c192 135 493 155 710 49 41-20 87-45 103-55 27-18 30-17 68 1 72 34 179 111 260 186l79 74-6 65c-12 125 34 296 113 417 39 61 41 68 24 77-153 88-310 226-413 363-223 297-309 734-190 967 34 66 119 149 192 188 39 20 70 41 70 47 0 5-23 32-51 59-88 84-93 85-576 81-414-3-418-3-465-28-66-34-104-72-132-133l-25-52v-501c0-366-4-508-13-529-18-39-61-57-137-57-109-1-201-56-253-152-20-36-23-58-22-158 3-364 222-718 555-896 72-39 73-39 109-13zm3150 21c225 133 521 130 741-6l63-39 75 39c41 21 115 71 163 110 220 178 358 435 387 726 13 118 8 153-26 222-47 94-118 135-250 146-85 7-97 11-119 36l-24 28v498c0 431-2 504-17 548-24 72-70 124-138 157l-60 30h-861l-60-30c-38-18-71-45-92-72l-32-43 57-29c166-84 269-248 269-430 0-302-131-626-344-852-73-77-206-182-287-228l-48-27 45-74c68-109 100-217 106-357l5-116 59-61c33-34 89-83 125-109 66-48 169-107 184-108 5 0 41 19 79 41zM3050 3042c210 87 462 65 656-57 43-27 49-28 84-16 110 39 308 205 403 339 65 90 138 246 166 354 32 119 35 321 6 379-46 92-133 146-248 153-85 6-121 19-136 49-8 15-13 184-15 532-2 456-5 513-21 548-28 60-81 114-139 141-52 25-54 25-486 25-467 0-466 0-541-57-19-15-49-52-66-82l-30-55-5-524-6-523-29-25c-24-21-41-26-89-26-155 0-264-81-295-220-7-31-8-84-1-154 33-352 229-650 543-829l78-44 48 30c26 17 81 44 123 62z",
      fillRule: "nonzero",
      stroke: "#000",
      strokeWidth: 24.57,
      transform: "matrix(.02995 0 0 .02995 -14.513 2.8)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout7;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout7);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout7");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/About8.js":
/*!*****************************!*\
  !*** ./src/icons/About8.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/About8.js";


function SvgAbout8(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 154 135",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M11.258.508c-.962.27-2.496.842-3.398 1.293C5.816 2.823 2.78 5.95 1.636 8.145c-1.864 3.698-1.774.661-1.683 60.917l.09 55.173.721 1.804c1.474 3.669 4.24 6.525 7.637 7.908l1.744.722h133.23l2.284-1.083c4.12-1.924 6.916-5.652 7.637-10.192.451-2.737.451-86.775 0-89.602-.691-4.48-3.397-8.088-7.547-10.072l-2.375-1.143-6.254-.09-6.224-.12v-9.742c0-5.563-.12-10.073-.3-10.554-.18-.42-.782-1.082-1.354-1.413C128.22.027 127.65.027 70.611.027c-49.491.03-57.88.09-59.353.48zm112.061 7.066v14.853l-55.174-.09-55.173-.06-1.474-.752c-1.653-.812-3.187-2.796-3.788-4.931-.932-3.428 1.473-7.607 5.051-8.69.451-.15 25.528-.27 55.715-.3l54.843-.03zM10.296 29.162l1.744.692 65.035.15c60.887.15 65.096.18 66.028.691 1.414.782 2.225 1.925 2.616 3.759.21.962.331 5.953.331 12.598v11.035l-57.308.18-1.263.662c-1.774.962-3.729 3.157-4.45 5.021-.541 1.443-.602 2.556-.602 14.823v13.26l.752 1.654c.902 1.954 2.646 3.638 4.901 4.69l1.624.752h56.376l-.09 11.937-.09 11.907-.782 1.413a5.55 5.55 0 01-2.195 2.135l-1.383.721H76.775c-62.15 0-64.795-.03-65.998-.601-.692-.3-1.534-.872-1.864-1.233-1.474-1.654-1.444-.15-1.444-50.213 0-44.8 0-47.146.542-46.935.3.12 1.323.541 2.285.902zM146.05 65.664v25.888h-27.602c-24.685.03-27.662-.03-28.083-.481-.45-.421-.51-2.015-.51-12.448s.06-12.027.51-12.448c.421-.45 3.398-.511 28.083-.511h27.602z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M108.586 71.347c-2.646.661-4.87 2.976-5.472 5.803-1.143 5.081 3.638 9.892 8.75 8.75 2.104-.482 4.089-1.955 5.141-3.82.962-1.773 1.052-4.9.18-6.614-1.653-3.187-5.322-4.961-8.599-4.12z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgAbout8;
/* harmony default export */ __webpack_exports__["default"] = (SvgAbout8);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgAbout8");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/FullLogo.js":
/*!*******************************!*\
  !*** ./src/icons/FullLogo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/FullLogo.js";


function SvgFulllogo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 2301 587",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M512.694 189.964c2.962 1.526 3.77 2.872 8.166 13.91 15.256 38.048 20.46 80.404 14.986 121.593-3.768 28.178-12.024 54.202-25.664 80.494-29.075 56.445-78.969 99.16-139.72 119.8-5.923 2.063-11.756 3.679-12.923 3.679-1.167 0-3.5-1.167-5.115-2.603-2.782-2.512-2.961-3.14-5.743-21.626-2.872-18.845-2.961-21.807-.539-25.037.629-.897 7.359-3.948 14.807-6.82 33.651-12.922 60.303-32.216 82.289-59.765 20.46-25.754 33.292-54.111 39.484-87.673 2.692-14.627 2.961-48.548.449-62.188-3.859-21.178-8.076-34.548-15.884-50.88-6.64-13.82-7.179-17.5-3.32-21.448l2.603-2.602 21.447-.27c19.024-.179 21.716-.09 24.677 1.436zm-28.087 16.96c7.268 16.423 13.909 39.395 16.511 56.804 2.244 15.435 2.244 46.035-.09 59.675-5.473 33.113-16.242 61.201-33.112 86.417-23.242 34.728-57.432 62.816-94.673 77.712-4.936 1.975-9.333 3.949-9.781 4.308-.898.718 1.077 16.87 2.064 16.87 1.794 0 18.665-6.82 25.575-10.32 58.15-29.164 97.813-74.57 117.914-134.695 13.012-39.125 14.717-85.699 4.666-124.914-2.243-8.704-7.358-24.408-9.96-30.87-.539-1.435-1.975-1.704-10.05-1.704-5.206 0-9.244.359-9.064.718z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M432.739 189.785c5.384 2.961 19.473 28.716 26.023 47.56 5.385 15.435 9.692 40.83 9.692 57.522-.09 10.858-3.14 32.036-6.55 44.24-14.718 53.573-52.946 96.647-103.109 116.3-10.589 4.038-11.217 4.217-14.268 2.96-1.705-.717-3.68-2.243-4.307-3.41-1.077-2.063-6.551-35.086-6.551-40.022 0-4.128 2.602-6.461 12.563-11.397 30.51-15.345 52.676-40.291 62.816-70.802 9.333-28.267 8.525-55.906-2.423-84.353-5.653-14.717-13.55-26.831-25.575-39.394-6.192-6.551-6.91-7.628-6.91-11.038 0-2.692.718-4.666 2.334-6.461l2.243-2.692 25.754-.18c21.178-.18 26.204 0 28.268 1.167zm-28.716 17.05c-.36.359 1.256 3.23 3.5 6.371 18.665 26.293 27.908 59.765 25.126 91.173-1.436 16.242-3.68 25.934-9.692 41.19-11.755 30.42-35.984 57.162-64.52 71.61-3.231 1.615-5.923 3.589-5.923 4.307 0 .808.448 4.576 1.077 8.525.718 4.935 1.435 7.09 2.333 7.09 2.153 0 14.178-6.372 22.972-12.026 47.023-30.42 74.123-83.455 71.162-139.182-1.346-26.203-8.525-50.163-21.447-71.88l-4.667-7.806h-9.691c-5.295 0-9.871.359-10.23.628z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M302.082 189.338c36.612 3.051 68.469 24.498 84.711 56.983 9.243 18.576 12.474 35.536 10.858 56.624-2.781 33.92-23.152 65.418-52.944 81.84-3.32 1.795-6.73 3.32-7.628 3.32-3.5 0-7.09-2.781-8.076-6.37-1.705-5.834-6.551-40.741-5.923-42.446.27-.898 3.5-4.667 7.09-8.526 19.831-21.088 20.728-51.419 1.973-71.7-6.82-7.358-14.716-12.652-22.882-15.255-8.256-2.602-22.883-2.782-30.242-.359-23.062 7.449-37.69 27.19-37.69 50.881 0 14.717 6.103 27.64 18.576 39.664 3.051 2.872 4.038 4.577 4.038 6.73 0 4.038-4.487 35.805-5.653 40.023-1.167 4.038-4.846 7.358-8.256 7.358-5.474 0-22.255-11.665-32.754-22.793-11.576-12.294-17.858-22.793-23.062-38.228-8.884-26.652-6.82-55.457 5.743-80.673 18.755-37.69 59.854-60.663 102.12-57.073zm-19.922 17.947c-29.075 3.949-53.483 21.358-66.585 47.65-12.204 24.32-12.025 53.933.359 78.61 5.025 9.961 15.255 22.345 23.6 28.537l3.41 2.512 1.437-9.602 1.525-9.601-5.025-5.654c-13.37-15.076-19.832-37.869-16.242-57.7 2.781-15.346 8.883-26.832 20.37-38.139 8.435-8.256 14.896-12.294 26.203-16.242 7.09-2.513 9.96-2.962 20.19-3.32 10.77-.36 12.833-.18 20.55 2.063 10.949 3.141 15.974 5.744 24.858 12.833 12.204 9.602 19.293 20.19 23.78 35.356 6.102 20.64 1.346 45.228-12.025 61.65-8.166 10.14-7.538 8.435-6.281 17.678.538 4.576 1.346 8.794 1.705 9.512.897 1.615 13.37-9.961 19.473-18.037 5.922-7.808 12.114-20.999 14.627-31.319 2.782-10.948 2.961-28.446.448-39.394-4.666-20.46-16.421-38.408-33.023-50.791-13.46-9.961-24.139-14.179-42.984-17.05-4.846-.718-13.28-.539-20.37.448z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M206.422 189.246c4.756 1.167 7.538 5.833 6.281 10.679-.269 1.166-3.589 5.563-7.358 9.691-16.332 17.679-24.857 33.383-30.69 55.996-2.333 9.064-2.513 11.397-2.513 27.819 0 16.152.27 18.844 2.513 27.818 6.102 24.498 17.409 44.15 34.818 60.752 10.23 9.781 19.204 15.884 32.126 22.075 11.845 5.654 12.742 7 11.217 16.243-.538 3.32-1.526 9.333-2.064 13.46-1.705 12.025-3.68 21.448-4.756 22.704-.628.718-2.423 1.705-4.218 2.243-2.782.987-4.217.628-13.82-3.32-37.51-15.345-69.276-43.881-88.121-78.879-9.153-17.05-16.512-39.035-19.204-57.252-3.858-26.383-.807-58.778 7.897-82.917 6.551-18.037 19.922-42.625 25.127-46.035 1.974-1.256 6.012-1.526 25.934-1.705 12.922-.09 25.036.18 26.83.628zm-48.1 24.498c-7.986 13.012-15.613 33.293-19.382 51.42-2.692 13.101-2.423 45.317.448 58.867 6.551 30.331 19.922 56.086 40.113 77.084 14.537 15.076 29.344 26.114 44.42 33.113 7.986 3.68 8.884 3.68 8.973-.18 0-1.704.449-4.935.987-7.178.45-2.244.629-4.846.36-5.654-.36-.897-3.949-3.23-8.167-5.294-15.255-7.628-32.126-22.435-45.048-39.574-12.024-15.973-19.562-32.665-24.05-53.304-2.332-10.5-2.602-13.64-2.602-30.152-.09-15.345.27-19.832 1.975-27.549 4.576-20.73 13.012-39.753 23.87-53.573 1.525-1.884 2.692-3.948 2.692-4.487 0-.807-3.051-.987-10.05-.807l-10.141.269-4.397 7z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M120.454 189.697c6.192 2.782 6.46 7.897 1.166 18.486-20.998 41.728-25.754 91.712-13.101 136.85 5.025 17.857 11.935 33.65 21.447 49.175 22.883 37.33 59.765 66.854 101.403 81.212 12.473 4.218 12.563 4.487 8.973 28.357-4.127 28.088-4.576 28.447-25.126 21.537-22.703-7.717-48.548-21.268-66.674-34.908-37.96-28.446-66.316-65.418-83.007-108.492C49.113 339.47 44.715 291.1 53.33 246.411c4.127-21.267 13.999-50.163 18.934-55.278l2.333-2.333 21.447-.18c16.781-.179 21.986 0 24.409 1.077zm-39.484 24.05c-9.513 24.857-14.09 50.342-14.09 79.686 0 37.69 7.539 69.008 24.589 102.66 18.306 36.164 43.881 64.79 77.533 86.955 18.216 12.025 50.97 27.28 52.585 24.588.45-.628.988-3.5 1.347-6.372.358-2.871.807-6.191 1.076-7.268.449-1.705-.448-2.333-7.358-5.115-56.265-22.255-100.775-67.931-120.427-123.837-8.884-25.037-12.294-45.407-12.204-72.777 0-27.01 4.935-52.048 15.345-77.802l3.32-8.256-9.512.27-9.423.269-2.781 6.999z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      transform: "matrix(0 -4.5409 -4.5409 0 16242.149 120242.549)",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        cx: 26415.2,
        cy: 3512.25,
        r: 62.246,
        fill: "none",
        stroke: "#000",
        strokeWidth: 4.75
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fontFamily: "'NHaasGroteskTXPro-75Bd','Neue Haas Grotesk Text Pro',sans-serif",
      fontWeight: 700,
      fontSize: 154.936,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
        x: 967,
        y: 1535,
        transform: "matrix(.58353 0 0 .58353 123.5 -521.877)",
        children: ["E", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tspan", {
          x: "1067.4px 1167.8px 1280.44px 1369.06px 1477.83px 1581.32px 1624.09px 1727.58px 1827.98px",
          y: "1535px 1535px 1535px 1535px 1535px 1535px 1535px 1535px 1535px",
          children: "XCLUSIVES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
        x: 967,
        y: 1687.87,
        transform: "matrix(.58353 0 0 .58353 123.5 -521.877)",
        children: ["F", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tspan", {
          x: "1062.75px 1170.12px 1290.51px 1424.06px 1457.99px 1558.08px 1670.41px",
          y: "1687.87px 1687.87px 1687.87px 1687.87px 1687.87px 1687.87px 1687.87px",
          children: "ROM THE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
        x: 967,
        y: 1840.74,
        transform: "matrix(.58353 0 0 .58353 123.5 -521.877)",
        children: ["U", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tspan", {
          x: "1075.77px 1189.02px 1301.51px 1401.91px 1509.28px 1627.34px 1734.71px 1855.1px 1963.86px 2077.12px",
          y: "1840.74px 1840.74px 1840.74px 1840.74px 1840.74px 1840.74px 1840.74px 1840.74px 1840.74px 1840.74px",
          children: "NDERGROUND"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
        x: 967,
        y: 1535,
        fontFamily: "'NHaasGroteskTXPro-75Bd','Neue Haas Grotesk Text Pro',sans-serif",
        fontWeight: 700,
        fontSize: 117.268,
        transform: "translate(-1792.6 -3656.682) scale(2.54782)",
        children: ["O", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tspan", {
          x: "1054.48px 1133.17px 1205.29px 1282.33px 1364.54px 1444.63px 1522.26px",
          y: "1535px 1535px 1535px 1535px 1535px 1535px 1535px",
          children: "UTBOARD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgFulllogo;
/* harmony default export */ __webpack_exports__["default"] = (SvgFulllogo);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgFulllogo");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/LogoIcon.js":
/*!*******************************!*\
  !*** ./src/icons/LogoIcon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/LogoIcon.js";


function SvgLogoicon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 146 146",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M127.126 47.111c.734.379.935.712 2.025 3.448 3.78 9.431 5.07 19.93 3.714 30.139-.934 6.984-2.98 13.434-6.361 19.952-7.207 13.99-19.574 24.578-34.632 29.693-1.468.512-2.914.912-3.203.912-.29 0-.867-.289-1.268-.645-.69-.622-.734-.778-1.423-5.36-.712-4.671-.734-5.405-.134-6.206.156-.222 1.824-.979 3.67-1.69 8.341-3.203 14.947-7.985 20.397-14.814 5.071-6.384 8.252-13.412 9.786-21.73.668-3.626.734-12.034.112-15.415-.957-5.25-2.002-8.563-3.937-12.612-1.646-3.425-1.78-4.337-.823-5.316l.645-.645 5.316-.066c4.715-.045 5.382-.023 6.116.355zm-6.961 4.204c1.801 4.07 3.447 9.765 4.092 14.08.556 3.826.556 11.41-.022 14.791-1.357 8.208-4.026 15.17-8.208 21.42-5.76 8.608-14.235 15.57-23.466 19.262-1.223.49-2.313.979-2.424 1.068-.222.178.267 4.181.512 4.181.444 0 4.626-1.69 6.339-2.558 14.413-7.228 24.244-18.483 29.227-33.386 3.225-9.698 3.647-21.241 1.156-30.962-.556-2.157-1.824-6.05-2.469-7.651-.133-.356-.49-.423-2.49-.423-1.291 0-2.292.09-2.247.178z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M107.308 47.067c1.335.734 4.827 7.118 6.45 11.789 1.335 3.825 2.403 10.12 2.403 14.257-.022 2.691-.779 7.94-1.624 10.966-3.648 13.279-13.123 23.955-25.557 28.826-2.624 1.001-2.78 1.046-3.536.734-.423-.178-.912-.556-1.068-.845-.267-.512-1.624-8.697-1.624-9.92 0-1.023.646-1.602 3.114-2.825 7.563-3.804 13.057-9.987 15.57-17.55 2.314-7.006 2.113-13.857-.6-20.908-1.402-3.647-3.359-6.65-6.34-9.764-1.534-1.624-1.712-1.89-1.712-2.736 0-.667.178-1.157.578-1.601l.556-.668 6.384-.044c5.25-.045 6.495 0 7.006.289zm-7.117 4.226c-.09.09.311.8.867 1.58 4.627 6.516 6.918 14.813 6.228 22.598-.356 4.026-.912 6.428-2.402 10.21-2.914 7.54-8.92 14.168-15.993 17.749-.8.4-1.468.89-1.468 1.067 0 .2.112 1.135.267 2.114.178 1.223.356 1.757.579 1.757.533 0 3.514-1.58 5.694-2.98 11.655-7.541 18.372-20.686 17.638-34.5-.333-6.494-2.113-12.433-5.316-17.816l-1.156-1.935h-2.403c-1.312 0-2.446.09-2.535.156z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M74.923 46.956c9.075.756 16.971 6.072 20.997 14.124 2.291 4.604 3.092 8.808 2.691 14.035-.69 8.408-5.738 16.215-13.123 20.286-.823.445-1.668.823-1.89.823-.868 0-1.757-.69-2.002-1.58-.423-1.445-1.624-10.098-1.468-10.52.067-.223.867-1.157 1.757-2.113 4.916-5.227 5.138-12.745.49-17.772-1.691-1.824-3.648-3.136-5.673-3.782-2.046-.645-5.671-.689-7.495-.088-5.717 1.846-9.342 6.739-9.342 12.611 0 3.648 1.512 6.85 4.604 9.831.756.712 1.001 1.135 1.001 1.669 0 1-1.112 8.874-1.401 9.92-.29 1-1.201 1.824-2.047 1.824-1.356 0-5.516-2.892-8.118-5.65-2.87-3.047-4.426-5.65-5.717-9.475-2.202-6.606-1.69-13.746 1.424-19.996 4.649-9.342 14.836-15.037 25.312-14.147zm-4.938 4.449c-7.206.978-13.256 5.293-16.504 11.81-3.025 6.028-2.98 13.368.09 19.485 1.245 2.469 3.78 5.539 5.849 7.073l.845.623.356-2.38.378-2.38-1.245-1.401c-3.315-3.737-4.916-9.387-4.026-14.302.69-3.804 2.202-6.65 5.049-9.453 2.09-2.047 3.692-3.048 6.495-4.026 1.757-.623 2.469-.734 5.004-.823 2.67-.09 3.18-.045 5.094.511 2.713.779 3.959 1.424 6.161 3.181 3.025 2.38 4.782 5.005 5.894 8.764 1.513 5.116.334 11.21-2.98 15.28-2.024 2.514-1.869 2.091-1.557 4.382.133 1.135.333 2.18.422 2.358.223.4 3.315-2.469 4.827-4.47 1.468-1.936 3.003-5.206 3.626-7.764.69-2.713.734-7.05.11-9.764a21.716 21.716 0 00-8.184-12.59c-3.337-2.468-5.984-3.514-10.655-4.225-1.2-.178-3.292-.134-5.049.11z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M51.212 46.933c1.18.29 1.869 1.446 1.557 2.647-.066.29-.89 1.38-1.823 2.402-4.049 4.382-6.162 8.275-7.607 13.88-.579 2.246-.623 2.825-.623 6.895 0 4.004.067 4.671.623 6.895 1.512 6.073 4.315 10.944 8.63 15.059 2.535 2.424 4.76 3.937 7.963 5.471 2.936 1.402 3.158 1.735 2.78 4.026-.134.823-.378 2.313-.512 3.337-.422 2.98-.912 5.316-1.179 5.627-.155.178-.6.423-1.045.556-.69.245-1.045.156-3.425-.823-9.298-3.803-17.172-10.877-21.843-19.551-2.268-4.226-4.092-9.676-4.76-14.191-.956-6.54-.2-14.569 1.958-20.552 1.624-4.471 4.938-10.565 6.228-11.41.49-.312 1.49-.379 6.428-.423 3.203-.023 6.206.044 6.65.155zM39.29 53.006c-1.98 3.225-3.87 8.252-4.804 12.745-.667 3.247-.6 11.232.111 14.59 1.624 7.519 4.938 13.903 9.943 19.107 3.603 3.737 7.273 6.473 11.01 8.208 1.98.912 2.202.912 2.224-.045 0-.422.111-1.223.245-1.78.11-.555.155-1.2.089-1.4-.09-.223-.979-.801-2.024-1.313-3.782-1.89-7.963-5.56-11.166-9.809-2.98-3.959-4.85-8.096-5.961-13.212-.579-2.602-.645-3.38-.645-7.473-.022-3.804.066-4.916.49-6.829 1.133-5.138 3.224-9.853 5.916-13.279.378-.467.667-.978.667-1.112 0-.2-.756-.244-2.491-.2l-2.514.067-1.09 1.735z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M29.904 47.045c1.535.69 1.602 1.958.29 4.582-5.206 10.343-6.384 22.732-3.248 33.92 1.245 4.427 2.958 8.341 5.316 12.19 5.672 9.252 14.813 16.57 25.134 20.129 3.092 1.045 3.114 1.112 2.224 7.029-1.023 6.961-1.134 7.05-6.228 5.338-5.627-1.913-12.033-5.272-16.526-8.653-9.409-7.05-16.437-16.214-20.574-26.891-4.07-10.52-5.16-22.51-3.025-33.586 1.023-5.272 3.47-12.434 4.693-13.702l.578-.578 5.316-.045c4.16-.044 5.45 0 6.05.267zm-9.787 5.961c-2.357 6.162-3.492 12.478-3.492 19.752 0 9.342 1.869 17.104 6.095 25.445 4.537 8.964 10.876 16.06 19.217 21.553 4.516 2.981 12.634 6.762 13.034 6.095.112-.156.245-.867.334-1.58.09-.711.2-1.534.267-1.8.111-.424-.111-.58-1.824-1.269-13.946-5.516-24.978-16.837-29.85-30.695-2.201-6.205-3.047-11.254-3.024-18.038 0-6.695 1.223-12.901 3.803-19.285l.823-2.046-2.358.067-2.335.066-.69 1.735z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      transform: "matrix(0 -1.12553 -1.12553 0 4025.898 29803.91)",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        cx: 26415.2,
        cy: 3512.25,
        r: 62.246,
        fill: "none",
        stroke: "#000",
        strokeWidth: 4.75
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgLogoicon;
/* harmony default export */ __webpack_exports__["default"] = (SvgLogoicon);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgLogoicon");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/Submit1.js":
/*!******************************!*\
  !*** ./src/icons/Submit1.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/Submit1.js";


function SvgSubmit1(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 189 189",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M76.328.212c-1.342.447-2.306 1.376-2.891 2.718-.447 1.101-.516 4.37-.516 22.781V47.22l-11.528.103c-10.943.103-11.597.138-12.354.826-.792.723-13.524 15.658-36.546 42.912C3.58 101.625.586 105.41.276 106.477c-.24.998-.344 13.73-.275 40.4.103 42.637-.034 39.678 2.134 41.226.791.551 7.777.62 91.915.689 86.168.103 91.124.068 92.294-.517.654-.344 1.514-1.204 1.892-1.892.62-1.205.654-3.132.654-40.4 0-32.382-.068-39.334-.481-40.297-.276-.654-7.502-9.395-16.071-19.478a9791.036 9791.036 0 01-23.882-28.218c-4.577-5.437-8.74-10.083-9.257-10.324-.654-.275-4.336-.413-12.113-.413h-11.184V25.54c0-19.443-.069-21.852-.585-22.987C114.078.005 114.869.108 94.945.04 85.103.005 76.74.074 76.328.212zm30.902 38.335c0 16.45.103 30.455.24 31.074.104.654.689 1.652 1.274 2.203 1.032 1.067 1.067 1.067 6.022 1.17l4.99.103-12.492 15.658c-6.882 8.603-12.595 15.692-12.698 15.726-.137 0-5.884-7.02-12.767-15.692L69.24 73.097l5.024-.206c3.613-.104 5.196-.31 5.644-.689 1.72-1.41 1.686-.619 1.686-33.07V8.574h25.637v29.973zM72.92 55.925v8.294l-6.262.034c-6.848 0-8.362.241-9.67 1.652-.723.723-.895 1.308-.895 2.822v1.892L73.92 92.85c9.807 12.252 18.238 22.438 18.72 22.644 1.205.55 2.512.516 3.717-.103 1.17-.62 35.341-42.981 36.236-44.977 1.135-2.443-.207-5.059-2.925-5.816-.723-.206-4.095-.344-7.537-.344l-6.228-.034v-8.294h19.34l39.643 46.801-26.876.172c-19.375.138-27.083.31-27.6.585-1.651.964-2.03 1.824-2.511 5.61-.241 2.064-.757 4.542-1.101 5.54-2.203 6.435-6.608 11.322-12.63 14.109-3.269 1.514-5.575 1.996-9.704 1.962-6.848 0-11.7-1.996-16.518-6.849-2.34-2.305-3.407-3.716-4.405-5.78-1.445-2.926-2.443-6.54-2.443-8.845 0-2.237-.62-3.923-1.824-5.093l-1.101-1.067-54.165-.344 39.574-46.8h19.34zm-9.635 58.433c2.857 12.32 12.56 21.92 24.812 24.501 3.303.688 9.394.688 12.835-.034 8.328-1.72 15.865-6.986 20.579-14.385 1.858-2.959 2.994-5.643 3.957-9.429l.826-3.269 26.98-.069 26.944-.103v68.653H8.604V111.57h54.028l.653 2.788z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgSubmit1;
/* harmony default export */ __webpack_exports__["default"] = (SvgSubmit1);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgSubmit1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/Submit2.js":
/*!******************************!*\
  !*** ./src/icons/Submit2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/Submit2.js";


function SvgSubmit2(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 240 194",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M158.085.763c-2.154.484-4.9.7-6.03.484-1.67-.27-7.538 1.346-29.236 7.915l-27.135 8.237H64.08c-26.328 0-31.712.108-32.627.808-1.023.7-1.13 1.723-1.4 10.014l-.27 9.207-4.953 1.453c-2.8.808-5.491 1.992-6.191 2.692-1.185 1.185-1.239 1.454-.646 4.2.377 1.669.807 3.392 1.023 3.93.323.754-.7.97-7.753 1.615C2.11 52.126.872 52.448.064 54.28c-.7 1.508 12.545 135.892 13.568 137.777.323.646 1.076 1.4 1.669 1.669.753.43 20.567-1.4 68.269-6.192 36.934-3.715 67.462-6.73 67.838-6.73.377 0 1.4-.646 2.262-1.346l1.507-1.346-.861-8.722c-.485-4.738-.754-8.884-.592-9.099.107-.215 3.876-.43 8.345-.43 10.768 0 10.445.322 10.445-9.476v-7.215l9.476-2.8c6.137-1.83 9.852-3.23 10.606-4.038.592-.646 3.607-2.315 6.676-3.768 7.807-3.715 12.814-7.161 19.221-13.407 10.284-9.906 16.852-21.859 19.975-36.288 1.4-6.622 1.4-20.459-.054-27.027-2.907-13.514-8.776-24.659-17.983-34.296-10.552-11.037-23.85-18.252-38.55-20.782-6.19-1.077-18.359-1.077-23.796 0zm22.505 7.86c19.49 3.392 35.588 15.506 44.472 33.38 8.83 17.714 8.937 36.558.323 54.272-5.169 10.66-12.168 18.628-21.967 24.981-4.738 3.123-11.145 6.03-11.683 5.438-.216-.27-2.639-7.86-5.33-16.852-3.393-11.145-4.739-16.421-4.254-16.583.323-.161 2.208-1.4 4.092-2.853 13.783-10.499 13.73-31.496 0-41.995-4.577-3.5-8.83-5.007-15.13-5.492L166 42.542l-4.953-16.367c-2.692-8.991-4.738-16.529-4.523-16.798 1.615-1.561 16.69-2.046 24.067-.754zm-14.376 61.97c10.068 33.273 18.198 60.57 18.09 60.677-.484.377-120.924 36.665-121.086 36.45-.753-.861-36.503-120.601-36.18-120.978.484-.43 119.202-36.611 120.332-36.665.323 0 8.776 27.243 18.844 60.516zM68.441 25.529c-.162.161-16.744 5.222-28.912 8.83l-1.562.484v-9.53h15.345c8.453 0 15.29.108 15.129.216zm109.241 26.866c4.146 1.938 7.053 4.846 9.045 8.884 1.562 3.23 1.831 4.307 1.831 8.13 0 3.822-.27 4.899-1.83 8.13-1.723 3.499-5.654 7.698-7.161 7.698-.323 0-2.854-7.43-5.6-16.529-2.745-9.098-5.168-16.905-5.33-17.336-.43-1.184 5.815-.485 9.045 1.023zM26.015 72.531L30.053 86.1v35.75c0 34.995 0 35.75 1.13 36.88 1.024 1.023 1.885 1.13 11.2 1.13H52.45l2.154 7.215c2.261 7.484 3.553 9.745 5.76 9.745.755 0 13.892-3.823 29.29-8.453l27.943-8.507h27.674l.323 2.423c.161 1.292.484 4.307.7 6.622l.323 4.254-62.886 6.353c-34.619 3.446-62.992 6.245-63.046 6.192-.323-.323-12.653-125.555-12.437-125.77.484-.485 12.975-1.67 13.352-1.293.215.162 2.154 6.407 4.415 13.891zm18.144 60.032c3.123 10.283 5.707 18.897 5.707 19.059 0 .161-2.692.323-5.976.323h-5.923l.054-19.652c0-10.821.162-19.382.27-19.059.107.323 2.745 8.991 5.868 19.329zm120.44 16.26v3.122l-10.014-.054c-5.546 0-9.745-.161-9.314-.323 1.13-.484 18.413-5.76 18.897-5.815.216 0 .431 1.346.431 3.07z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M98.914 63.163c-4.36 1.4-8.345 3.984-11.737 7.699-9.53 10.499-9.099 26.328 1.077 36.45 10.445 10.498 26.812 10.498 37.365 0 16.744-16.799 4.9-45.388-18.79-45.226-2.908 0-5.923.43-7.915 1.077zm14.483 7.968c4.092 1.561 8.346 5.438 10.338 9.476 1.346 2.746 1.561 3.876 1.561 8.022 0 5.492-1.13 8.453-4.738 12.49l-2.154 2.424-2.045-3.715c-4.038-7.215-6.838-15.883-7.484-22.99-.162-2.046-.377-4.469-.539-5.33-.323-1.938.7-1.992 5.061-.377zm-12.114 8.722c.808 6.353 3.77 15.56 7.053 21.751 2.8 5.277 2.692 5.654-1.13 5.654-7.215.053-14.376-4.577-17.444-11.253-1.831-3.984-1.67-11.145.269-15.29 1.723-3.554 4.738-6.892 7.753-8.453l2.1-1.077.376 1.83c.162.97.646 4.038 1.023 6.838z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgSubmit2;
/* harmony default export */ __webpack_exports__["default"] = (SvgSubmit2);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgSubmit2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/Submit3.js":
/*!******************************!*\
  !*** ./src/icons/Submit3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/Submit3.js";


function SvgSubmit3(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 190 214",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M90.208.385c-2.121.67-4.876 2.605-6.402 4.43-2.048 2.494-2.867 4.69-3.09 8.45l-.26 3.462-27.362 15.82c-15.039 8.712-27.92 16.082-28.59 16.417-1.153.596-1.302.596-2.344-.149-.596-.446-2.197-1.19-3.537-1.675-2.01-.707-3.015-.856-5.472-.707-10.2.633-16.23 11.205-11.577 20.362 1.228 2.457 3.946 5.063 6.18 5.994l1.749.744v33.243l.037 33.242-1.787.857c-2.494 1.228-5.1 3.722-6.217 6.067-3.648 7.446-.781 15.598 6.738 19.135 2.271 1.116 3.016 1.265 5.733 1.228 3.164-.037 5.435-.745 8.413-2.718 1.005-.67 1.117-.595 29.52 15.784l28.515 16.491.224 3.388c.297 4.244 1.19 6.44 3.871 9.232 2.867 3.015 5.882 4.318 10.014 4.355 2.866 0 3.425-.112 6.105-1.452 5.025-2.494 7.892-6.998 7.892-12.47v-2.978l28.366-16.342c15.598-8.972 28.478-16.38 28.627-16.454.149-.112.968.298 1.786.819 2.346 1.563 4.765 2.27 7.93 2.308 12.73.149 18.761-15.412 9.306-24.16-1.266-1.154-2.904-2.308-3.648-2.606l-1.377-.484V73.682l1.265-.521c5.584-2.345 9.232-8.971 8.227-14.928-.819-4.653-3.685-8.524-7.855-10.572-4.094-2.01-9.864-1.638-13.55.857-.781.558-1.563.967-1.787.967-.186 0-13.14-7.37-28.775-16.416l-28.44-16.417-.075-2.829c-.112-4.17-1.303-6.961-4.095-9.79-3.015-2.978-5.1-3.909-9.344-4.058-2.047-.074-3.946.075-4.914.41zm8.674 4.876c6.85 3.5 6.85 13.364 0 16.975-2.494 1.303-6.514 1.191-8.971-.223-3.611-2.16-5.621-6.59-4.616-10.386.93-3.5 3.61-6.329 6.775-7.11 1.936-.484 5.1-.15 6.812.744zM85.63 24.47c1.6 1.414 5.211 3.127 6.589 3.127.484 0 .558 2.084.558 14.816v14.815l-2.457.261c-6.142.633-12.657 2.494-17.682 4.988-6.366 3.164-13.14 8.823-17.422 14.481-1.34 1.787-2.606 3.201-2.866 3.201-.224 0-6.03-3.238-12.843-7.184L27.073 65.79l.298-1.19c.335-1.341.41-6.925.112-8.377-.149-.781 2.494-2.382 27.957-17.086 15.485-8.935 28.217-16.23 28.291-16.23.075 0 .93.707 1.899 1.563zm48.058 14.63c25.202 14.555 28.069 16.304 27.994 17.086-.521 4.542-.521 6.18 0 7.78l.559 1.787-12.508 7.185c-6.85 3.983-12.694 7.221-12.955 7.221-.298 0-1.563-1.414-2.904-3.164-8.338-11.056-20.846-18.054-34.955-19.469l-2.605-.298V42.413c0-12.732.074-14.816.558-14.816 1.377 0 4.988-1.713 6.514-3.127.931-.856 1.825-1.527 1.973-1.564.112 0 12.88 7.296 28.33 16.193zM18.474 51.83c2.01 1.006 3.835 3.277 4.542 5.659.707 2.42.707 3.09-.037 5.621-2.495 8.376-14.072 8.934-17.72.819-2.196-4.802.447-10.795 5.696-12.731 1.935-.707 5.472-.41 7.52.633zm160.928-.074c3.35 1.75 5.248 4.765 5.248 8.488 0 5.36-4.02 9.343-9.38 9.343-5.435 0-9.493-3.908-9.493-9.232 0-4.206 2.494-7.705 6.552-9.232 1.638-.632 5.249-.297 7.073.633zm-76.574 9.828c5.026.968 8.04 2.01 13.03 4.579 10.422 5.323 18.724 15.113 22.41 26.355 3.126 9.68 2.903 21.07-.634 30.451-4.206 11.13-12.768 20.4-23.564 25.463-3.536 1.637-8.152 3.126-12.098 3.834-2.978.52-11.912.52-14.89 0-18.986-3.462-33.504-17.347-37.524-36.035-.856-3.983-1.154-12.098-.596-15.82C52.09 80.345 66.98 65.045 86.895 61.434c4.43-.82 11.392-.745 15.933.149zm64.773 10.386c.93.521 2.494 1.265 3.5 1.6l1.823.633-.223 65.22-2.01.707c-2.16.707-4.505 2.27-5.845 3.834l-.819.968-12.768-7.37c-9.195-5.324-12.694-7.52-12.582-7.967.111-.298.856-2.233 1.712-4.28 2.308-5.659 3.276-10.2 3.5-16.678.26-8.152-1.08-15.225-4.245-22.298-.632-1.415-1.005-2.718-.856-2.904.186-.149 5.92-3.536 12.769-7.52l12.433-7.221 1.005 1.154c.521.633 1.713 1.6 2.606 2.122zM38.278 76.325l12.62 7.26-.893 1.823c-6.143 12.21-6.403 29-.633 41.32 1.08 2.309 1.377 3.351 1.08 3.575-.261.148-5.994 3.499-12.77 7.407l-12.321 7.073-1.675-1.563c-1.713-1.564-5.212-3.425-6.44-3.425-.633 0-.67-1.824-.67-32.796V74.203l2.308-.819c1.414-.52 3.052-1.563 4.206-2.605 1.043-.931 2.01-1.713 2.197-1.75.186 0 6.03 3.276 12.991 7.296zm16.305 59.45c2.01 2.94 6.738 7.78 10.163 10.386 6.887 5.323 15.114 8.636 24.234 9.753l3.797.447v29.93h-.893c-1.303 0-5.398 2.084-6.775 3.461l-1.192 1.191-28.291-16.379c-27.994-16.156-28.33-16.38-28.143-17.459.298-1.712.223-6.812-.112-8.152l-.298-1.154 12.62-7.297c6.961-4.02 12.731-7.333 12.843-7.333.149-.037 1.042 1.154 2.047 2.606zm94.89 4.653c6.55 3.797 12.097 7.036 12.32 7.222.336.223.299.893-.11 2.382-.485 1.824-.485 3.723 0 7.483.074.632-5.138 3.797-28.07 17.049l-28.142 16.305-.968-.856c-1.898-1.675-3.61-2.68-5.807-3.35l-2.196-.67-.224-29.707 3.239-.26c8.487-.745 18.054-4.616 25.35-10.238 3.388-2.568 7.67-7.035 9.754-10.088 1.191-1.75 1.936-2.494 2.345-2.345.298.112 5.92 3.313 12.508 7.073zM18.66 145.23c2.42 1.34 4.02 3.537 4.616 6.366 1.452 6.924-5.286 12.843-12.359 10.758-1.005-.298-2.345-1.191-3.573-2.42-7.818-7.817 1.6-20.064 11.316-14.704zm160.593-.484c1.973.782 4.355 3.574 4.988 5.77 1.675 6.068-2.16 11.726-8.301 12.21-5.696.447-10.126-3.61-10.163-9.269-.037-7.073 6.663-11.391 13.476-8.71zm-81.19 46.309c4.43 1.638 6.961 6.775 5.621 11.54-.67 2.42-3.76 5.584-6.068 6.291-7.072 2.085-13.81-3.834-12.321-10.833 1.228-5.881 7.035-9.045 12.768-6.998z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3568 3524c-67 20-161 78-205 128-19 23-51 73-69 110-31 63-34 76-34 174 0 101 2 109 40 186 46 93 117 164 207 206 51 25 71 28 173 28 110 0 120-2 185-34 85-42 168-127 206-210 40-86 46-213 14-307-59-175-204-284-383-291-48-2-106 3-134 10zm257 113c62 29 124 90 156 155 21 41 25 65 25 149-1 115-18 159-91 232-125 125-338 127-463 4-76-74-97-128-97-241 0-82 4-102 28-148 28-53 89-117 136-142 87-47 218-51 306-9z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 24.87,
      transform: "matrix(.03723 0 0 .03723 -42.464 -58.134)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3476 2714c-32 8-98 35-147 59-72 35-107 61-179 134-133 133-193 269-201 452l-4 79h1470l-3-87c-9-299-232-564-537-639-78-19-324-18-399 2zm436 108c222 77 367 251 408 492l5 34H3042l6-50c14-120 99-277 194-359 62-52 171-110 245-130 36-10 110-16 199-16 128-1 149 2 226 29z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 24.87,
      transform: "matrix(.03723 0 0 .03723 -42.464 6.527)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgSubmit3;
/* harmony default export */ __webpack_exports__["default"] = (SvgSubmit3);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgSubmit3");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/Submit4.js":
/*!******************************!*\
  !*** ./src/icons/Submit4.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/Submit4.js";


function SvgSubmit4(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 217 225",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M100.93 146.832c-14.98 2.737-27.042 13.935-30.93 28.734-.829 3.133-1.009 4.61-1.009 8.858-.036 5.581.396 8.462 1.873 13.035 4.068 12.53 14.439 22.289 27.185 25.53 6.554 1.692 11.343 1.8 17.968.36 13.791-2.917 24.918-13.143 29.203-26.754 4.104-12.963.432-28.41-9.146-38.384-8.93-9.29-22.505-13.683-35.144-11.379zm14.907 5.653c12.387 3.133 21.605 12.243 24.738 24.414 4.717 18.436-6.662 37.016-25.386 41.373-4.069.936-10.586.864-14.835-.144-14.223-3.421-24.485-15.16-25.998-29.635-1.368-13.503 5.401-26.322 17.464-32.947 7.094-3.889 16.168-5.077 24.017-3.06zM98.77.712C87.247 2.73 77.309 7.878 69.1 16.16c-9.831 9.902-14.872 21.064-15.916 35.18-.468 6.337-.108 10.802 1.404 16.995 3.42 14.115 13.827 27.69 26.358 34.46 8.281 4.464 15.591 6.517 24.881 7.021 10.226.54 22.649-2.88 31.867-8.75 9.182-5.87 16.924-15.34 20.992-25.673 3.025-7.67 4.645-18.689 3.817-26.034-1.476-12.927-6.733-24.017-15.7-33.02-2.304-2.304-5.112-4.86-6.228-5.689C128.512 1.9 113.137-1.772 98.77.712zm16.635 5.041c6.337.973 10.37 2.305 16.024 5.366 3.096 1.656 9.47 6.12 9.506 6.625 0 .504-4.97 4.861-6.662 5.87-1.476.863-1.836.935-2.124.467-.18-.288-1.189-2.052-2.233-3.924-2.556-4.573-5.581-8.498-6.697-8.786-2.233-.54-4.141 1.476-3.133 3.384.252.468 1.368 2.053 2.485 3.493 1.116 1.44 2.736 3.961 3.6 5.581l1.585 2.917-1.08.432c-2.99 1.152-11.415 2.593-14.944 2.593h-1.404V21.2c0-7.418-.108-8.642-.648-9.254-.828-.9-2.593-.864-3.529.072-.72.72-.756 1.26-.756 9.218v8.498l-2.377-.216c-4.32-.325-7.993-.865-10.874-1.657-4.069-1.08-3.997-1.008-2.808-3.42 1.08-2.125 3.24-5.402 5.365-8.21 1.512-1.98 1.656-3.565.324-4.43-1.657-1.08-2.845-.575-5.005 2.09-1.08 1.367-3.025 4.32-4.321 6.553l-2.34 4.032-1.441-.792c-2.017-1.152-5.905-4.357-6.41-5.257-.504-.972-.396-1.116 2.197-3.097 5.33-3.996 12.063-7.31 17.68-8.641 6.23-1.477 14.079-1.873 20.02-.937zM76.301 26.098c.9.72 2.484 1.764 3.456 2.34l1.765 1.009-.54 1.584c-2.737 7.778-4.321 21.28-3.565 30.679.468 5.653 1.44 10.982 2.845 15.627.648 2.052.864 3.313.612 3.42-1.189.397-5.437 3.493-7.454 5.438l-2.376 2.232-1.98-2.376c-10.84-13.035-13.9-31.255-7.959-47.963 1.837-5.185 5.222-11.126 8.606-15.05l1.369-1.621 1.764 1.656c.936.936 2.52 2.269 3.457 3.025zm70.899-1.513c4.825 6.554 7.021 11.127 8.822 18.256 1.656 6.59 1.764 15.628.252 22.47-1.656 7.633-5.761 15.987-10.442 21.316l-1.62 1.836-.9-1.152c-.937-1.188-5.942-5.077-7.959-6.157l-1.152-.648.936-2.953c2.16-6.842 3.205-13.935 3.205-22.505 0-8.318-.72-13.899-2.773-21.389-.648-2.376-1.08-4.32-1.008-4.356 2.413-1.44 6.986-4.79 8.246-6.122.936-.936 1.764-1.692 1.908-1.692.108 0 1.225 1.404 2.485 3.096zM90.956 32.94c1.944.54 5.293 1.153 7.381 1.369 2.125.252 4.573.504 5.438.612l1.62.216v39.572l-2.557.252c-4.429.397-9.974 1.369-13.214 2.305-1.729.504-3.313.9-3.493.9-.216 0-.72-1.08-1.116-2.412-3.277-10.623-3.53-26.358-.649-38.205 1.26-5.185 1.62-6.013 2.413-5.76.36.107 2.232.611 4.177 1.151zm39.752 1.657c1.549 5.113 2.305 10.514 2.521 17.86.288 9.362-.468 15.519-2.953 23.513l-.756 2.484-2.16-.684c-3.565-1.08-9.434-2.232-13.251-2.52l-3.6-.289-.109-19.804c-.072-15.627 0-19.912.396-20.128.252-.18 1.296-.324 2.305-.324 2.844 0 9.326-1.045 12.602-2.053 4.285-1.296 4.033-1.368 5.005 1.945zm-24.377 62.33c1.008.755 2.34.683 3.24-.217.685-.72.757-1.26.757-8.714v-7.921h1.224c4.033 0 15.772 2.34 15.772 3.132 0 .612-2.449 4.79-4.681 7.994-1.189 1.692-2.125 3.349-2.125 3.709 0 1.008 1.693 2.556 2.809 2.556.72 0 1.368-.576 2.736-2.448 1.729-2.34 5.546-8.39 5.906-9.362.288-.792 3.456 1.116 6.265 3.709 2.485 2.34 2.52 2.34 1.8 3.132-1.188 1.333-7.201 5.293-10.406 6.878-3.673 1.8-10.262 3.997-13.827 4.609-3.42.576-12.819.54-16.455-.036-7.526-1.225-17.68-5.906-23.19-10.73l-1.476-1.26 1.657-1.693c1.692-1.765 6.013-4.897 6.733-4.897.216 0 .936 1.08 1.584 2.376 1.549 3.06 3.853 6.518 5.546 8.318 1.656 1.728 3.06 1.872 4.213.396.972-1.26.792-1.944-1.26-4.68-2.99-3.89-5.366-8.067-4.97-8.679.54-.828 8.462-2.592 13.431-2.952l3.6-.253.181 8.246c.18 7.598.252 8.282.936 8.786z",
      fillRule: "nonzero"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5498 2054c-27 21-35 52-21 87 3 9 47 46 97 83 232 173 442 448 558 729 106 258 143 463 133 751-8 266-58 466-175 696-172 340-411 588-754 782-54 31-105 66-113 79-25 38 9 99 55 99 42 1 230-110 378-221 379-285 654-740 739-1222 20-108 22-154 18-321-6-210-22-317-72-491-61-214-168-430-306-617-70-95-310-334-396-395-89-62-106-67-141-39z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 42.17,
      transform: "matrix(.036 0 0 .036 -15.591 -19.56)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1019 4667c-193 13-242 19-263 34-34 24-39 67-11 95 25 25 97 27 336 11 78-5 143-8 145-6s10 108 17 235c11 200 16 235 32 254 28 30 73 27 100-8 19-24 22-37 17-86-3-32-11-157-18-277-14-243-18-257-82-264-21-2-144 3-273 12z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 42.17,
      transform: "matrix(.036 0 0 .036 -15.591 -112.676)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M904 1921c-226 262-381 610-438 982-19 123-18 415 1 530 39 240 111 448 226 656 187 337 557 670 912 819 129 55 317 112 371 114s76-12 87-56-25-78-96-94c-369-82-774-343-1015-655-262-337-393-774-355-1180 37-397 168-726 398-1005 77-93 87-131 45-165-43-35-68-25-136 54z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 42.17,
      transform: "matrix(.036 0 0 .036 -15.591 -.44)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5010 1730c-20 26-190 517-190 550 0 10 5 26 13 35 13 17 501 197 534 197 24 0 62-49 62-79 0-47-34-66-240-140-111-40-205-75-207-77s29-96 69-208c40-113 73-219 73-237 0-65-74-91-114-41z",
      fillRule: "nonzero",
      stroke: "#071c3b",
      strokeWidth: 42.17,
      transform: "matrix(.036 0 0 .036 -15.591 95.485)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
        x: 967,
        y: 1535,
        fontFamily: "'NHaasGroteskTXPro-75Bd','Neue Haas Grotesk Text Pro',sans-serif",
        fontWeight: 700,
        fontSize: 154.936,
        transform: "matrix(.29319 -.00421 0 .29319 -189.938 -244.327)",
        children: "\xA3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20427 2828.86h212",
        fill: "none",
        stroke: "#071c3b",
        strokeWidth: 10.42,
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
        transform: "translate(-8424.853 -1120.426) scale(.41556)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgSubmit4;
/* harmony default export */ __webpack_exports__["default"] = (SvgSubmit4);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgSubmit4");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/SubmitFlowArrow.js":
/*!**************************************!*\
  !*** ./src/icons/SubmitFlowArrow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/icons/SubmitFlowArrow.js";


function SvgSubmitflowarrow(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    viewBox: "0 0 135 29",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5,
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18690 2922.05c76-28.08 146.1-26.99 211 0",
      fill: "none",
      stroke: "#559175",
      strokeWidth: 10.42,
      strokeDasharray: "0,20.83,0,0",
      transform: "matrix(.52066 0 0 .52066 -9728.42 -1507.926)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
      x: 18594.9,
      y: 3467,
      fontFamily: "'ProximaNovaSoft-Bold','Proxima Nova Soft'",
      fontWeight: 700,
      fontSize: 32.258,
      fill: "#559175",
      transform: "matrix(1.12593 .3933 -.47184 1.35075 -19191.9 -11969.481)",
      children: "&gt;"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgSubmitflowarrow;
/* harmony default export */ __webpack_exports__["default"] = (SvgSubmitflowarrow);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgSubmitflowarrow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/icons/index.js":
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
/*! exports provided: About1, About2, About3, About4, About5, About6, About7, About8, FullLogo, LogoIcon, Submit1, Submit2, Submit3, Submit4, SubmitFlowArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _About1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About1 */ "./src/icons/About1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About1", function() { return _About1__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _About2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About2 */ "./src/icons/About2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About2", function() { return _About2__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _About3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About3 */ "./src/icons/About3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About3", function() { return _About3__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _About4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About4 */ "./src/icons/About4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About4", function() { return _About4__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _About5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About5 */ "./src/icons/About5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About5", function() { return _About5__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _About6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About6 */ "./src/icons/About6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About6", function() { return _About6__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _About7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About7 */ "./src/icons/About7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About7", function() { return _About7__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _About8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About8 */ "./src/icons/About8.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About8", function() { return _About8__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _FullLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FullLogo */ "./src/icons/FullLogo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullLogo", function() { return _FullLogo__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LogoIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LogoIcon */ "./src/icons/LogoIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoIcon", function() { return _LogoIcon__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Submit1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Submit1 */ "./src/icons/Submit1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit1", function() { return _Submit1__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Submit2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Submit2 */ "./src/icons/Submit2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit2", function() { return _Submit2__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Submit3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Submit3 */ "./src/icons/Submit3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit3", function() { return _Submit3__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Submit4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Submit4 */ "./src/icons/Submit4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit4", function() { return _Submit4__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _SubmitFlowArrow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SubmitFlowArrow */ "./src/icons/SubmitFlowArrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitFlowArrow", function() { return _SubmitFlowArrow__WEBPACK_IMPORTED_MODULE_14__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

















const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _components_Player_Player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Player/Player */ "./src/components/Player/Player.js");
/* harmony import */ var _components_Basic_Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Basic/Portal */ "./src/components/Basic/Portal.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/index.js";










react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_7__["default"],
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 2
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/About/About.js":
/*!**********************************!*\
  !*** ./src/pages/About/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AboutList_AboutList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AboutList/AboutList */ "./src/components/AboutList/AboutList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/about */ "./src/data/about.js");
/* harmony import */ var _components_FullPageComponent_FullPageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageComponent */ "./src/components/FullPageComponent/FullPageComponent.js");
/* harmony import */ var _components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageRow */ "./src/components/FullPageComponent/FullPageRow.js");
/* harmony import */ var _components_SalesPitch_SalesPitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SalesPitch/SalesPitch */ "./src/components/SalesPitch/SalesPitch.js");
/* harmony import */ var _components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Basic/Background/Background */ "./src/components/Basic/Background/Background.js");
/* harmony import */ var _components_AboutFooter_AboutFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AboutFooter/AboutFooter */ "./src/components/AboutFooter/AboutFooter.js");
/* harmony import */ var _Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Basic/PageContainer.styled */ "./src/pages/Basic/PageContainer.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/About/About.js",
    _s = __webpack_require__.$Refresh$.signature();











const About = props => {
  _s();

  const [abouts, setAbouts] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setAbouts([_data_about__WEBPACK_IMPORTED_MODULE_3__["aboutItems"]]);
  }, [_data_about__WEBPACK_IMPORTED_MODULE_3__["aboutItems"]]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_9__["PageContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rows: "auto auto auto",
      children: [abouts ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          backgroundColor: 'black !important'
        },
        columns: "1fr 1fr 1fr",
        children: _data_about__WEBPACK_IMPORTED_MODULE_3__["aboutItems"].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutList_AboutList__WEBPACK_IMPORTED_MODULE_1__["default"], {
          header: item.header,
          bio: item.bio
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 33
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "there's no abouts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        columns: "1fr",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SalesPitch_SalesPitch__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        columns: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutFooter_AboutFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, undefined);
};

_s(About, "yedlZtSJMHCBTRa/vbZLn7t+z5Y=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

__webpack_require__.$Refresh$.register(_c, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Artists/Artists.js":
/*!**************************************!*\
  !*** ./src/pages/Artists/Artists.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_artists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/artists */ "./src/data/artists.js");
/* harmony import */ var _Artists_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Artists.styled */ "./src/pages/Artists/Artists.styled.js");
/* harmony import */ var _components_FullPageComponent_FullPageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageComponent */ "./src/components/FullPageComponent/FullPageComponent.js");
/* harmony import */ var _components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageRow */ "./src/components/FullPageComponent/FullPageRow.js");
/* harmony import */ var react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lorem-ipsum */ "./node_modules/react-lorem-ipsum/dist/index.js");
/* harmony import */ var react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Basic/PageContainer.styled */ "./src/pages/Basic/PageContainer.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Artists/Artists.js",
    _s = __webpack_require__.$Refresh$.signature();









const Artists = props => {
  _s();

  const [artists, setArtists] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data_artists__WEBPACK_IMPORTED_MODULE_2__["artists"]);
  const [viewArtist, setViewArtist] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => {
    setViewArtist(!viewArtist);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_7__["PageContainer"], {
    children: viewArtist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ContentContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["SingleArtist"], {
        animate: {
          opacity: 1
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            paddingLeft: '80px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            style: {
              marginBottom: '60px'
            },
            children: "otbd002-mar 2020"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: Object(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["username"])()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
            gender: "all",
            className: "avatar",
            width: "650",
            height: "650",
            alt: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "biography"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, undefined), Object(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["loremIpsum"])({
            p: 3,
            avgSentencesPerParagraph: 3
          }).slice(0, 3).map(text => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text",
            children: text
          }, text, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            onClick: toggle,
            children: "back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ContentContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "featured artists"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "OTBD002 - MAR 2020"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistsStyled"], {
          animate: {
            opacity: 1
          },
          children: artists.map(artist => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistItem"], {
            onClick: toggle,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
              gender: "all",
              className: "avatar",
              width: "350",
              height: "350",
              alt: "Avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 10
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: Object(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["username"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 10
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 9
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "OTBD001 - FEB 2020"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistsStyled"], {
          animate: {
            opacity: 1
          },
          children: artists.map(artist => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistItem"], {
            onClick: toggle,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
              gender: "all",
              className: "avatar",
              width: "350",
              height: "350",
              alt: "Avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 10
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: Object(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["username"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 10
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 9
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "OTBD001 - FEB 2020"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistsStyled"], {
          animate: {
            opacity: 1
          },
          children: artists.map(artist => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Artists_styled__WEBPACK_IMPORTED_MODULE_3__["ArtistItem"], {
            onClick: toggle,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
              gender: "all",
              className: "avatar",
              width: "350",
              height: "350",
              alt: "Avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 10
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: Object(react_lorem_ipsum__WEBPACK_IMPORTED_MODULE_6__["username"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 10
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 9
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};

_s(Artists, "RdC+dP4xCnDyh2M7vB5eDKZZV4A=");

_c = Artists;
/* harmony default export */ __webpack_exports__["default"] = (Artists);

var _c;

__webpack_require__.$Refresh$.register(_c, "Artists");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Artists/Artists.styled.js":
/*!*********************************************!*\
  !*** ./src/pages/Artists/Artists.styled.js ***!
  \*********************************************/
/*! exports provided: ArtistPage, Container, ArtistsStyled, ArtistItem, Header, SingleArtist, ContentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPage", function() { return ArtistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsStyled", function() { return ArtistsStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistItem", function() { return ArtistItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleArtist", function() { return SingleArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return ContentContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const ArtistPage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 0;
	align-items: flex-start;
	justify-content: flex-start;

	h1 {
		margin: 0px 20px 30px 20px;
		font-size: 2.5rem;
		text-transform: uppercase;
	}

	h2 {
		margin: 0px 20px 20px 20px;
		font-size: 2rem;
		text-transform: uppercase;
	}
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	width: 100%;
	position: relative;
	top: 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;
const ArtistsStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0;
  opacity:0.3;
  margin-bottom: 100px;
`;
const ArtistItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	width: 100%;
	cursor: pointer;

	h3 {
		margin: 10px 10px 0px 10px;
		font-size: 1.5rem;
		text-transform: capitalize;
		text-align: left;
	}

	img {
		width: 100%;
	}
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	position: relative;
	left: 0;
	right: 0;
	width: 100%;
	top: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	margin: 0 auto;
	margin-top: 70px;

	h1 {
		margin: 0px 20px 30px 20px;
		font-size: 2.5rem;
		text-transform: uppercase;
	}
`;
const SingleArtist = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
	display: grid;
	height: 100%;
	width: 100%;
	grid-template-columns: 2fr 2fr 2fr 1fr;
	grid-column-gap: 30px;
  grid-row-gap: 30px;
	align-items: flex-start;
	padding-top: 15%;
  opacity:0;

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h1 {
			font-size: 1.8rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-left: 0;
      margin-bottom: 10px;
		}

		h2 {
			font-size: 1.5rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-left: 0;
		}

    h3 {
      content:"< back";
			text-transform: uppercase;
			font-weight: bold;
			margin: 0;
      cursor:pointer;
		}

		p {
			font-size: 1rem;
      line-height: 1.7rem;
			text-align: left;
			width: 100%;

		}

		img {
			width: 100%;
			height: auto;
		}
	}
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	h2 {
		margin-left: 10px;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Basic/PageContainer.styled.js":
/*!*************************************************!*\
  !*** ./src/pages/Basic/PageContainer.styled.js ***!
  \*************************************************/
/*! exports provided: PageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return PageContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	width: 100vw;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AboutList_AboutList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AboutList/AboutList */ "./src/components/AboutList/AboutList.js");
/* harmony import */ var _components_Release_Release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Release/Release */ "./src/components/Release/Release.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/about */ "./src/data/about.js");
/* harmony import */ var _data_releases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/releases */ "./src/data/releases.js");
/* harmony import */ var _components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Subscribe/Subscribe */ "./src/components/Subscribe/Subscribe.js");
/* harmony import */ var _components_FullPageComponent_FullPageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageComponent */ "./src/components/FullPageComponent/FullPageComponent.js");
/* harmony import */ var _components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/FullPageComponent/FullPageRow */ "./src/components/FullPageComponent/FullPageRow.js");
/* harmony import */ var _components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Basic/Background/Background */ "./src/components/Basic/Background/Background.js");
/* harmony import */ var _Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Basic/PageContainer.styled */ "./src/pages/Basic/PageContainer.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Home/Home.js",
    _s = __webpack_require__.$Refresh$.signature();












const Home = props => {
  _s();

  const [releases, setReleases] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const [abouts, setAbouts] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const these = _data_releases__WEBPACK_IMPORTED_MODULE_5__["releaseItems"].slice(0, 2);
    setReleases([...these]);
    setAbouts([_data_about__WEBPACK_IMPORTED_MODULE_4__["aboutItems"]]);
  }, [_data_releases__WEBPACK_IMPORTED_MODULE_5__["releaseItems"], _data_about__WEBPACK_IMPORTED_MODULE_4__["aboutItems"]]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_10__["PageContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      rows: "2fr 1fr",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_9__["default"], {
        background: "https://cdn.mems.lol/outboard/keyboard-image.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), releases ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        columns: "1fr 1fr 1fr",
        children: [releases.map(release => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Release_Release__WEBPACK_IMPORTED_MODULE_2__["default"], {
          header: release.header,
          artwork: release.artwork,
          title: release.title,
          artists: release.artists,
          date: release.date
        }, release.id, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 8
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "there's no releaes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }, undefined), abouts ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPageComponent_FullPageRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        columns: "1fr 1fr 1fr",
        children: _data_about__WEBPACK_IMPORTED_MODULE_4__["aboutItems"].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutList_AboutList__WEBPACK_IMPORTED_MODULE_1__["default"], {
          header: item.header,
          bio: item.bio
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 33
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 6
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "there's no abouts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, undefined);
};

_s(Home, "ANWxRLWSFBA0Ynjx7KkRYgURjMw=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Login/Login.js":
/*!**********************************!*\
  !*** ./src/pages/Login/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.styled */ "./src/pages/Login/Login.styled.js");
/* harmony import */ var _components_LoginComponent_LoginComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoginComponent/LoginComponent */ "./src/components/LoginComponent/LoginComponent.js");
/* harmony import */ var _components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Basic/Background/Background */ "./src/components/Basic/Background/Background.js");
/* harmony import */ var _components_RegisterComponent_RegisterComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RegisterComponent/RegisterComponent */ "./src/components/RegisterComponent/RegisterComponent.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Login/Login.js",
    _s = __webpack_require__.$Refresh$.signature();







const Login = props => {
  _s();

  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const register = () => {
    setUser(!user);
  };

  return user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login_styled__WEBPACK_IMPORTED_MODULE_2__["LoginStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      background: "https://cdn.mems.lol/outboard/keyboard-image.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponent_LoginComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      register: register
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login_styled__WEBPACK_IMPORTED_MODULE_2__["LoginStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      background: "https://cdn.mems.lol/outboard/keyboard-image.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RegisterComponent_RegisterComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      register: register
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined);
};

_s(Login, "IrsbzKFLz02lRPqolw+I1TGGLYE=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Login/Login.styled.js":
/*!*****************************************!*\
  !*** ./src/pages/Login/Login.styled.js ***!
  \*****************************************/
/*! exports provided: LoginStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStyled", function() { return LoginStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const LoginStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: flex-end;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/Music.js":
/*!**********************************!*\
  !*** ./src/pages/Music/Music.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Music_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Music.styled */ "./src/pages/Music/Music.styled.js");
/* harmony import */ var _components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Basic/Background/Background */ "./src/components/Basic/Background/Background.js");
/* harmony import */ var _data_releases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/releases */ "./src/data/releases.js");
/* harmony import */ var _SingleMusicItem_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleMusicItem.styled */ "./src/pages/Music/SingleMusicItem.styled.js");
/* harmony import */ var _MusicReleaseContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MusicReleaseContainer */ "./src/pages/Music/MusicReleaseContainer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _TrackList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TrackList */ "./src/pages/Music/TrackList.js");
/* harmony import */ var _Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Basic/PageContainer.styled */ "./src/pages/Basic/PageContainer.styled.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/trackUploadActions */ "./src/actions/trackUploadActions.js");
/* harmony import */ var _actions_releaseActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/releaseActions */ "./src/actions/releaseActions.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Music/Music.js",
    _s = __webpack_require__.$Refresh$.signature();















const SingleMusicItemContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./SingleMusicItemContainer */ "./src/pages/Music/SingleMusicItemContainer.js")));
_c2 = SingleMusicItemContainer;

const renderLoader = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
  children: "Loading"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 28
}, undefined);

const Music = props => {
  _s();

  const [releases, setReleases] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [theImage, setTheImage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [currentPlaylist, setCurrentPlaylist] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(); // var item = document.getElementsByTagName('MAIN')[0];
  // window.addEventListener('wheel', function(e) {
  // 	if (e.deltaY > 0) item.scrollLeft += 100;
  // 	else item.scrollLeft -= 100;
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    props.getReleases();
    setReleases(props.release.releases);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Basic_PageContainer_styled__WEBPACK_IMPORTED_MODULE_9__["PageContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Basic_Background_Background__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        backgroundSize: '80% 70% !important'
      },
      background: "https://cdn.mems.lol/outboard/leaves-image.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), releases ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Music_styled__WEBPACK_IMPORTED_MODULE_2__["MusicStyled"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "PREVIOUS RELEASES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Music_styled__WEBPACK_IMPORTED_MODULE_2__["ContentContainer"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MusicReleaseContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setCurrentPlaylist: setCurrentPlaylist,
          setTheImage: setTheImage,
          toggle: toggle,
          releases: releases
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "...loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, undefined);
};

_s(Music, "5LwuptiHC0OVB5zSWDVtwC3AgqA=");

_c3 = Music;
Music.propTypes = {
  getTracks: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  track: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  getReleases: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  release: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  currentTrack: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};

const mapStateToProps = state => ({
  audio: state.audio,
  track: state.track,
  release: state.release
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, {
  getTracks: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_13__["getTracks"],
  getReleases: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_14__["getReleases"]
})(Music)));

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "SingleMusicItemContainer$lazy");
__webpack_require__.$Refresh$.register(_c2, "SingleMusicItemContainer");
__webpack_require__.$Refresh$.register(_c3, "Music");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/Music.styled.js":
/*!*****************************************!*\
  !*** ./src/pages/Music/Music.styled.js ***!
  \*****************************************/
/*! exports provided: MusicStyled, MusicItemStyled, ContentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicStyled", function() { return MusicStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicItemStyled", function() { return MusicItemStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return ContentContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const MusicStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	height: calc(100vh - 240px);
	width: 100vw;
	margin: 120px 0px 120px 0px;
	display: grid;
	grid-template-columns: 1fr 5fr;
	grid-column-gap: 300px;
	align-items: center;

	h1 {
		margin: 0 auto;
		margin-bottom: 200px;
		width: 300px;
	}
`;
const MusicItemStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
display: flex;
  height: 700px;
  width: 500px;
  margin: 50px;
  opacity: 1;
  align-items:flex-start;
  justify-content:flex-start;
  flex-wrap:wrap;

  img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    min-width: 500px;

    &:hover {
      cursor:pointer
    }
  }

  div {
    margin-top: 5px;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
  }

 p {
    font-size: 1rem;
    text-align: left;
  }

`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	height: 100%;
	width: 100%;

	overflow-y: hidden;
	overflow-x: overlay hidden;
	display: flex;
	z-index: 5;

	align-items: space-around;
	margin: 40px;

	justify-content: flex-start;

	&::-webkit-scrollbar-thumb {
		width: 5px !important; /* width of the entire scrollbar */
		color: ${({
  theme
}) => theme.black};
		border: 5px solid white;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/MusicItem.js":
/*!**************************************!*\
  !*** ./src/pages/Music/MusicItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Music_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Music.styled */ "./src/pages/Music/Music.styled.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Music/MusicItem.js";


const MusicItem = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Music_styled__WEBPACK_IMPORTED_MODULE_1__["MusicItemStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.release.artwork
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: props.release.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

_c = MusicItem;
/* harmony default export */ __webpack_exports__["default"] = (MusicItem);

var _c;

__webpack_require__.$Refresh$.register(_c, "MusicItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/MusicReleaseContainer.js":
/*!**************************************************!*\
  !*** ./src/pages/Music/MusicReleaseContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _MusicItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MusicItem */ "./src/pages/Music/MusicItem.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Music/MusicReleaseContainer.js";



const MusicReleaseContainer = ({
  releases,
  toggle
}) => {
  return releases.map(release => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/music/${release._id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MusicItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      artwork: release.artwork,
      title: release.title,
      date: release.date,
      toggle: toggle,
      release: release
    }, release._id, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined));
};

_c = MusicReleaseContainer;
/* harmony default export */ __webpack_exports__["default"] = (MusicReleaseContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "MusicReleaseContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/SingleMusicItem.styled.js":
/*!***************************************************!*\
  !*** ./src/pages/Music/SingleMusicItem.styled.js ***!
  \***************************************************/
/*! exports provided: SingleMusicContainerStyled, Container, SingleMusicItemStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMusicContainerStyled", function() { return SingleMusicContainerStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMusicItemStyled", function() { return SingleMusicItemStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const SingleMusicContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: 100vw;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  left:0;
  right: 0;
  bottom:0;
  z-index:8;
  background-color:${({
  theme
}) => theme.eggShell};
  opacity:1;
  padding: 100px 150px 0px 150px;


  h3 {
    color:black;
    width: 100%;
    text-align: left;
    height: 30px;
    cursor: pointer;
  }

`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: grid;
	grid-template-columns: 1.5fr 2fr 1fr;
	grid-gap: 40px;
	align-items: center;
	height: calc(100% - 100px);
	width: 100%;
	align-items: flex-start;
	opacity: 1;

	img {
		width: 100%;
		height: auto;
	}
`;
const SingleMusicItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/SingleMusicItemContainer.js":
/*!*****************************************************!*\
  !*** ./src/pages/Music/SingleMusicItemContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleMusicItem_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleMusicItem.styled */ "./src/pages/Music/SingleMusicItem.styled.js");
/* harmony import */ var _TrackList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrackList */ "./src/pages/Music/TrackList.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_releaseActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/releaseActions */ "./src/actions/releaseActions.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Music/SingleMusicItemContainer.js",
    _s = __webpack_require__.$Refresh$.signature();








 // const variants = {
// 	open: {
// 		opacity: 1,
// 		x: 0,
// 		transition: {
// 			type: 'tween',
// 			stiffness: 0,
// 			restDelta: 10,
// 			mass: 0.5
// 		}
// 	},
// 	closed: {
// 		opacity: 0,
// 		x: '100%',
// 		transition: {
// 			x: { type: 'spring', stiffness: 100 },
// 			damping: 10,
// 			mass: 0.1,
// 			when: 'beforeChildren'
// 		}
// 	}
// };

const SingleMusicItemContainer = props => {
  _s();

  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [currentPlaylist, setCurrentPlaylist] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    props.getReleases();
    props.setReleasePlaylist(id);
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCurrentPlaylist(props.release.playlist);
  }, [props.release.playlist]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SingleMusicItem_styled__WEBPACK_IMPORTED_MODULE_2__["SingleMusicContainerStyled"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      onClick: () => setOpen(false),
      children: "back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, undefined), currentPlaylist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SingleMusicItem_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: currentPlaylist.artwork
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        playlist: currentPlaylist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, undefined);
};

_s(SingleMusicItemContainer, "fhgVWxXI+mzz1lgwdr+vqdcCb3Y=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"]];
});

_c = SingleMusicItemContainer;
SingleMusicItemContainer.propTypes = {
  setReleasePlaylist: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  getReleases: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  release: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};

const mapStateToProps = state => ({
  release: state.release
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  getReleases: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_7__["getReleases"],
  setReleasePlaylist: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_7__["setReleasePlaylist"]
})(SingleMusicItemContainer)));

var _c;

__webpack_require__.$Refresh$.register(_c, "SingleMusicItemContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/TrackList.js":
/*!**************************************!*\
  !*** ./src/pages/Music/TrackList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TrackList_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrackList.styled */ "./src/pages/Music/TrackList.styled.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _actions_audioActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/audioActions */ "./src/actions/audioActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_playlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/playlist */ "./src/data/playlist.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/trackUploadActions */ "./src/actions/trackUploadActions.js");
/* harmony import */ var _actions_releaseActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/releaseActions */ "./src/actions/releaseActions.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/oscady/Documents/projects/outboard/client/src/pages/Music/TrackList.js",
    _s = __webpack_require__.$Refresh$.signature();












const Tracklist = props => {
  _s();

  const [currentList, setCurrentList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [currentTrack, setCurrentTrack] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); // const handleFetchData = () => {
  // 	props.getReleases();
  // 	const tracks = props.release.releases;
  // };

  const handleChangeTrack = id => {
    setCurrentTrack(id);
  };

  const handleNextTrack = () => {
    if (currentTrack === currentList.length - 1) {
      setCurrentTrack(0);
      return;
    }

    setCurrentTrack(currentTrack + 1);
  };

  const handlePrevTrack = () => {
    if (currentTrack === 0) {
      setCurrentTrack(currentList.length - 1);
      return;
    }

    setCurrentTrack(currentTrack - 1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCurrentList(props.playlist.tracks);
    console.log(props.playlist.tracks);
    return setCurrentList([]);
  }, [props.playlist]);
  const Loading = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_data_playlist__WEBPACK_IMPORTED_MODULE_7__["PlaylistContext"].Provider, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TrackList_styled__WEBPACK_IMPORTED_MODULE_2__["TracklistContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: props.playlist.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "feb 2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "featured tracks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: props.playlist.tracks.map((track, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [index !== currentTrack ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
              onClick: setCurrentTrack(index),
              style: {
                cursor: 'pointer',
                marginRight: '10px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 10
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPause"], {
              onClick: props.setAudioPaused,
              style: {
                cursor: 'pointer',
                marginRight: '10px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 10
            }, undefined), track.artistName + ' - ' + track.trackName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "buy track"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 8
          }, undefined)]
        }, track._id, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, undefined);
};

_s(Tracklist, "Lp8mpcAzb7vmZXWW7Y0s7v/C3fc=");

_c = Tracklist;
Tracklist.propTypes = {
  setAudioPlaing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setAudioPaused: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getTracks: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  track: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  getReleases: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  release: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  audio: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  playing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  currentTrack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};

const mapStateToProps = state => ({
  audio: state.audio,
  track: state.track,
  release: state.release
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  setAudioPlaying: _actions_audioActions__WEBPACK_IMPORTED_MODULE_4__["setAudioPlaying"],
  setAudioPaused: _actions_audioActions__WEBPACK_IMPORTED_MODULE_4__["setAudioPaused"],
  getTracks: _actions_trackUploadActions__WEBPACK_IMPORTED_MODULE_9__["getTracks"],
  getReleases: _actions_releaseActions__WEBPACK_IMPORTED_MODULE_10__["getReleases"]
})(Tracklist));

var _c;

__webpack_require__.$Refresh$.register(_c, "Tracklist");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Music/TrackList.styled.js":
/*!*********************************************!*\
  !*** ./src/pages/Music/TrackList.styled.js ***!
  \*********************************************/
/*! exports provided: TracklistContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracklistContainer", function() { return TracklistContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const TracklistContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 5px 0px;
	}

	h2 {
		font-size: 1.6rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 25px 0px;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;

		margin: 5px 0px 5px 0px;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	li {
		font-size: 1.2rem;
		font-weight: lighter;
		text-align: left;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0px 0px 1.5px 0px;

		p {
			font-size: 1rem;
			font-weight: lighter;
			text-align: left;
		}

		a {
			font-size: 1rem;
			font-weight: bold;
			text-align: left;
			white-space: nowrap;
			cursor: pointer;
		}
	}

	p {
		font-size: 1rem;
		font-weight: lighter;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 400px;
	}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/audioReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/audioReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  playlist: [],
  currentTrack: {},
  playing: false,
  playingTime: '0: 00'
}; // export items in current state + changes

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_TRACKS"]:
      return { ...state,
        // return state of items
        playlist: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_AUDIO_PLAYING"]:
      return { ...state,
        playing: true
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_AUDIO_PAUSED"]:
      return { ...state,
        playing: false
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (audioReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/imageUploadReducer.js":
/*!********************************************!*\
  !*** ./src/reducers/imageUploadReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  images: [],
  loading: false
}; // export images in current state + changes

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_IMAGES"]:
      return { ...state,
        // return state of images
        images: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return { ...state,
        images: [action.payload, ...state.images],
        // copy state and return with new image
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["IMAGES_LOADING"]:
      return { ...state,
        loading: true
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (imageUploadReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _itemReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemReducer */ "./src/reducers/itemReducer.js");
/* harmony import */ var _imageUploadReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageUploadReducer */ "./src/reducers/imageUploadReducer.js");
/* harmony import */ var _audioReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioReducer */ "./src/reducers/audioReducer.js");
/* harmony import */ var _trackUploadReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trackUploadReducer */ "./src/reducers/trackUploadReducer.js");
/* harmony import */ var _releaseReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./releaseReducer */ "./src/reducers/releaseReducer.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  item: _itemReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  image: _imageUploadReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  audio: _audioReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  track: _trackUploadReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  release: _releaseReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/itemReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/itemReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  items: [],
  singleItem: {},
  loading: false
}; // export items in current state + changes

/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS"]:
      return { ...state,
        // return state of items
        items: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_SINGLE_ITEM"]:
      return { ...state,
        // return state of items
        singleItem: state.items.filter(item => item._id === action.payload),
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM"]:
      return { ...state,
        items: state.items.filter(item => item._id !== action.payload) //return state without selected id

      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM"]:
      return { ...state,
        items: [action.payload, ...state.items] // copy state and return with new item

      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ITEMS_LOADING"]:
      return { ...state,
        loading: true
      };

    default:
      return state;
  }
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/releaseReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/releaseReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  releases: [],
  playlist: [],
  loading: false
}; // export tracks in current state + changes

const releaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_RELEASES"]:
      return { ...state,
        // return state of tracks
        releases: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_RELEASE_PLAYLIST"]:
      return { ...state,
        playlist: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_RELEASE"]:
      return { ...state,
        releases: [action.payload, ...state.tracks] // copy state and return with new image

      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["RELEASES_LOADING"]:
      return { ...state,
        loading: true
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["RELEASES_LOADED"]:
      return { ...state,
        loading: false
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (releaseReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/trackUploadReducer.js":
/*!********************************************!*\
  !*** ./src/reducers/trackUploadReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  tracks: [],
  loading: false
}; // export tracks in current state + changes

const trackUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_TRACKS"]:
      return { ...state,
        // return state of tracks
        tracks: action.payload,
        loading: false
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ADD_TRACK"]:
      return { ...state,
        tracks: [action.payload, ...state.tracks] // copy state and return with new image

      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TRACKS_LOADING"]:
      return { ...state,
        loading: true
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["TRACKS_LOADED"]:
      return { ...state,
        loading: false
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (trackUploadReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "../node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const initialState = {};
const middleWare = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]; //const rootReducer = combineReducers({form: formReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleWare)));
/* harmony default export */ __webpack_exports__["default"] = (store);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ../node_modules/react-dev-utils/refreshOverlayInterop.js */ "../node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** multi ../node_modules/webpack/hot/dev-server.js ../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ../node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/oscady/Documents/projects/outboard/node_modules/webpack/hot/dev-server.js */"../node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/oscady/Documents/projects/outboard/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"../node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/oscady/Documents/projects/outboard/node_modules/react-dev-utils/webpackHotDevClient.js */"../node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/oscady/Documents/projects/outboard/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map