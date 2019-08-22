(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bulma_extensions_dist_js_bulma_extensions_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma-extensions/dist/js/bulma-extensions.min.js */ "./node_modules/bulma-extensions/dist/js/bulma-extensions.min.js");
/* harmony import */ var bulma_extensions_dist_js_bulma_extensions_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma_extensions_dist_js_bulma_extensions_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_2__);
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
  mounted: function mounted() {
    bulma_extensions_dist_js_bulma_extensions_min_js__WEBPACK_IMPORTED_MODULE_0__["bulmaQuickview"].attach();
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    isDocumentClicked: function isDocumentClicked() {
      var _this = this;

      this.isLoading = true;
      Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(function () {
        _this.isLoading = false;
      }, 2000); // alert('Document Clicked....!')
    },
    // listClicked() {
    //   alert('List Clicked....!')
    // }
    onCancel: function onCancel() {
      this.isLoading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "column" }, [
    _c("h1", { staticClass: "title" }, [
      _vm._v("\n    E-Doc Library Rekam Medis\n  ")
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("nav", { staticClass: "panel" }, [
      _c("p", { staticClass: "panel-heading" }, [
        _vm._v("\n      Tahun Perekaman Rekam Medis [NRM-NAMA_PASIEN]\n    ")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "panel-block",
          attrs: {
            "data-show": "quickview",
            "data-target": "viewDocumentList",
            title: "Klik untuk melihat detail"
          },
          on: { click: _vm.isDocumentClicked }
        },
        [_vm._m(1), _vm._v("\n      bulma A\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "panel-block",
          attrs: {
            "data-show": "quickview",
            "data-target": "viewDocumentList",
            title: "Klik untuk melihat detail"
          },
          on: { click: _vm.isDocumentClicked }
        },
        [_vm._m(2), _vm._v("\n      bulma B\n    ")]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "quickview has-padding-15 quickview-left-border",
        attrs: { id: "viewDocumentList" }
      },
      [
        _c("Loading", {
          attrs: {
            active: _vm.isLoading,
            "can-cancel": true,
            "on-cancel": _vm.onCancel,
            color: "hsl(171, 100%, 41%)",
            loader: "bars"
          },
          on: {
            "update:active": function($event) {
              _vm.isLoading = $event
            }
          }
        }),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", {
          staticClass: "is-divider",
          attrs: { "data-content": "Rekam Medis" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "quickview-body" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: { click: _vm.isDocumentClicked }
                },
                [_vm._m(5)]
              )
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "subtitle" }, [
      _c("i", [_vm._v("*Dokumen rekam medis bersifat rahasia ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-book", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-book", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      { staticClass: "quickview-header has-margin-bottom-15" },
      [
        _c("p", { staticClass: "title" }, [_vm._v("TAHUN-NRM")]),
        _vm._v(" "),
        _c("span", {
          staticClass: "delete",
          attrs: { "data-dismiss": "quickview" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field" }, [
      _c("div", { staticClass: "control has-icons-left" }, [
        _c("input", {
          staticClass: "input is-fullwidth",
          attrs: { type: "text", placeholder: "Filter", required: "" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "icon is-left" }, [
          _c("i", { staticClass: "fas fa-address-card" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media" }, [
      _c("div", { staticClass: "media-left" }, [
        _c("div", { staticClass: "icon is-large" }, [
          _c("i", { staticClass: "fas fa-file-pdf fa-3x" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "media-content" }, [
        _c("p", { staticClass: "title is-4" }, [_vm._v("John Smith")]),
        _vm._v(" "),
        _c("p", { staticClass: "subtitle is-6" }, [_vm._v("@johnsmith")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/parts/DocumentList.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/parts/DocumentList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true& */ "./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true&");
/* harmony import */ var _DocumentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentList.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f4f60d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/DocumentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentList.vue?vue&type=template&id=2f4f60d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentList_vue_vue_type_template_id_2f4f60d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);