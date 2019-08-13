(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainPage'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "control has-icons-left has-icons-right" }, [
            _c("input", {
              staticClass: "input is-large is-rounded",
              attrs: { type: "text", placeholder: "Cari NRM" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-medium is-left" }, [
              _c("i", { staticClass: "fas fa-file-pdf" })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-medium is-right" }, [
              _c("i", { staticClass: "fas fa-search" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("h3", { staticClass: "title" }, [
            _vm._v("\r\n        Upload File Rekam Medis\r\n      ")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "subtitle" }, [
            _c("i", [_vm._v("*File yang diupload harus format .pdf")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Nomor Rekam Medis")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                staticClass: "input is-rounded",
                attrs: { type: "text", placeholder: "Text input", required: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-left" }, [
                _c("i", { staticClass: "fas fa-address-card" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("Nama")]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                staticClass: "input is-rounded",
                attrs: { type: "text", placeholder: "Text input", required: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-left" }, [
                _c("i", { staticClass: "fas fa-font" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "field" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "file is-normal is-boxed has-name is-primary is-centered"
                  },
                  [
                    _c("label", { staticClass: "file-label" }, [
                      _c("input", {
                        staticClass: "file-input",
                        attrs: { type: "file", name: "resume" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "file-cta" }, [
                        _c("span", { staticClass: "file-icon" }, [
                          _c("i", { staticClass: "fas fa-upload" })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "file-label" }, [
                          _vm._v(
                            "\r\n                    Upload Dokumen\r\n                  "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "file-name" }, [
                        _vm._v(
                          "\r\n                  Screen Shot 2017-07-29 at 15.54.25.png\r\n                "
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "a",
                {
                  staticClass:
                    "button is-link is-normal has-margin-bottom-15 is-fullwidth"
                },
                [
                  _c("span", { staticClass: "icon has-margin-right-5" }, [
                    _c("i", { staticClass: "fas fa-save" })
                  ]),
                  _vm._v("\r\n            Simpan\r\n          ")
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "box is-normal" }, [
                _c("p", [_vm._v("Tampilkan Nama File dan Folder")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v("\r\n          E-Doc Library Rekam Medis\r\n        ")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "subtitle" }, [
            _c("i", [_vm._v("*Dokumen rekam medis bersifat rahasia ")])
          ]),
          _vm._v(" "),
          _c("nav", { staticClass: "panel" }, [
            _c("p", { staticClass: "panel-heading" }, [
              _vm._v("\r\n            Rekam Medis\r\n          ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "panel-block" }, [
              _c("span", { staticClass: "panel-icon" }, [
                _c("i", {
                  staticClass: "fas fa-book",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v("\r\n            bulma\r\n          ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "panel-block" }, [
              _c("span", { staticClass: "panel-icon" }, [
                _c("i", {
                  staticClass: "fas fa-book",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v("\r\n            marksheet\r\n          ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "panel-block" }, [
              _c("span", { staticClass: "panel-icon" }, [
                _c("i", {
                  staticClass: "fas fa-book",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v("\r\n            marksheet\r\n          ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "panel-block" }, [
              _c("span", { staticClass: "panel-icon" }, [
                _c("i", {
                  staticClass: "fas fa-book",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v("\r\n            marksheet\r\n          ")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "panel-block" }, [
              _c("span", { staticClass: "panel-icon" }, [
                _c("i", {
                  staticClass: "fas fa-book",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v("\r\n            marksheet\r\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-block" }, [
              _c(
                "button",
                { staticClass: "button is-primary is-outlined is-fullwidth" },
                [_vm._v("\r\n              reset all filters\r\n            ")]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/MainPage.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/MainPage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainPage.vue?vue&type=template&id=ce9fb104&scoped=true& */ "./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true&");
/* harmony import */ var _MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ce9fb104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/MainPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainPage.vue?vue&type=template&id=ce9fb104&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/MainPage.vue?vue&type=template&id=ce9fb104&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_ce9fb104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);