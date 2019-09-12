(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-context */ "./node_modules/vue-context/dist/js/vue-context.js");
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  created: function created() {
    var _this = this;

    _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('openQuickView',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(patient, year) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.RESET_DOCUMENTS_STATE();

                _this.selectedMonthText = '';
                payload = {
                  id: patient.id,
                  year: year
                };
                _this.quickviewActive = true;
                _this.isLoading = true;
                _this.year = year;
                _this.patient = patient;
                _context.next = 9;
                return _this.folderMonth(payload);

              case 9:
                if (!_context.sent) {
                  _context.next = 11;
                  break;
                }

                _this.isLoading = false;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  data: function data() {
    return {
      isLoading: false,
      quickviewActive: false,
      year: '',
      patient: '',
      selectedMonthText: '',
      filterSearch: '',
      selectedDocumentOnContext: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['getMonth', 'getDocuments']), {
    // normal list without dayOnly filter
    // filteredList() {
    //   return this.getDocuments.filter((document) => {
    //     return document.form_name.toLowerCase().includes(this.filterSearch.toLowerCase()) || document.form_number.toLowerCase().includes(this.filterSearch.toLowerCase())
    //   })
    // },
    filteredList: function filteredList() {
      var _this2 = this;

      if (this.filterSearch.charAt(0) == ':') {
        if (this.filterSearch.length > 1) {
          var checkKey = this.filterSearch.substring(1);
          checkKey = checkKey.replace(/\s/g, '');
          return this.getDocuments.filter(function (document) {
            return _this2.$options.filters.dayOnly(document.record_date).toLowerCase().includes(checkKey.toLowerCase());
          });
        }
      } else {
        return this.getDocuments.filter(function (document) {
          return document.form_name.toLowerCase().includes(_this2.filterSearch.toLowerCase()) || document.form_number.toLowerCase().includes(_this2.filterSearch.toLowerCase());
        });
      }
    }
  }),
  components: {
    VueContext: vue_context__WEBPACK_IMPORTED_MODULE_3__["VueContext"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(['folderMonth', 'documents']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])(['RESET_DOCUMENTS_STATE']), {
    closeQuickview: function closeQuickview() {
      this.quickviewActive = !this.quickviewActive;
    },
    onContextOpen: function onContextOpen(event, data) {
      this.selectedDocumentOnContext = data;
    },
    onContextClose: function onContextClose(event, data) {
      this.selectedDocumentOnContext = {};
    },
    findDocuments: function () {
      var _findDocuments = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(patient, year, month) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.selectedMonthText = this.$options.filters.monthByName(month);
                payload = {
                  patient: patient,
                  year: year,
                  month: month
                };
                this.isLoading = true;
                _context2.next = 5;
                return this.documents(payload);

              case 5:
                if (!_context2.sent) {
                  _context2.next = 7;
                  break;
                }

                this.isLoading = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findDocuments(_x3, _x4, _x5) {
        return _findDocuments.apply(this, arguments);
      }

      return findDocuments;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: "quickview has-padding-15 quickview-left-border",
          class: _vm.quickviewActive ? "is-active" : "",
          attrs: { id: "viewDocumentList" }
        },
        [
          _c("Loading", {
            attrs: {
              active: _vm.isLoading,
              "can-cancel": true,
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
          _c(
            "header",
            { staticClass: "quickview-header has-margin-bottom-15" },
            [
              _c("p", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.year) + " - " + _vm._s(_vm.patient.name))
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "delete",
                attrs: { "data-dismiss": "quickview" },
                on: { click: _vm.closeQuickview }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "field is-horizontal" }, [
            _c(
              "div",
              { staticClass: "dropdown is-hoverable has-margin-right-10" },
              [
                _c("div", { staticClass: "dropdown-trigger" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      attrs: {
                        "aria-haspopup": "true",
                        "aria-controls": "dropdown-menu4"
                      }
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.selectedMonthText == ""
                                ? "Bulan Kedatangan"
                                : _vm.selectedMonthText
                            ) +
                            " "
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu",
                    attrs: { id: "dropdown-menu4", role: "menu" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "dropdown-content" },
                      _vm._l(_vm.getMonth, function(month) {
                        return _c(
                          "a",
                          {
                            key: month,
                            staticClass: "dropdown-item",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.findDocuments(
                                  _vm.patient,
                                  _vm.year,
                                  month
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm._f("monthByName")(month)) +
                                "\n            "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "control has-icons-left",
                staticStyle: { width: "100%" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filterSearch,
                      expression: "filterSearch"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "text", placeholder: "Filter" },
                  domProps: { value: _vm.filterSearch },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.filterSearch = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "is-divider",
            attrs: { "data-content": "Rekam Medis Pasien" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "quickview-body" },
            [
              _vm.getDocuments.length < 1
                ? [_vm._m(3)]
                : _vm._l(_vm.filteredList, function(document) {
                    return _c(
                      "div",
                      { key: document.id, staticClass: "card" },
                      [
                        _c(
                          "div",
                          { staticClass: "card-title has-text-right" },
                          [
                            _c("i", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm._f("indoDate")(document.record_date)
                                  ) +
                                  "\n            "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "columns" }, [
                            _c("div", { staticClass: "column" }, [
                              _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    contextmenu: function($event) {
                                      $event.preventDefault()
                                      return _vm.$refs.menu.open(
                                        $event,
                                        document
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _vm._m(4, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "media-content" },
                                      [
                                        _c("p", { staticClass: "title is-4" }, [
                                          _vm._v(_vm._s(document.form_number))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "subtitle is-6" },
                                          [_vm._v(_vm._s(document.form_name))]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vue-context",
        {
          ref: "menu",
          on: { close: _vm.onContextClose, open: _vm.onContextOpen }
        },
        [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-book-open has-margin-right-10" }),
              _vm._v("\n        Buka Dokumen\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-print has-margin-right-10" }),
              _vm._v("\n        Print\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", {
                staticClass: "fas fa-file-download has-margin-right-10"
              }),
              _vm._v("\n        Download\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-share has-margin-right-10" }),
              _vm._v("\n        Pindahkan\n      ")
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-calendar-day" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", {
        staticClass: "fas fa-angle-down",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-quote-left" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-content" }, [
        _c("p", [_c("i", [_vm._v("Tidak Ada Bulan Yang Dipilih")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-left" }, [
      _c("div", { staticClass: "icon is-large" }, [
        _c("i", { staticClass: "fas fa-file-pdf fa-3x" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/parts/DocumentQuickView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/parts/DocumentQuickView.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true& */ "./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true&");
/* harmony import */ var _DocumentQuickView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentQuickView.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentQuickView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22703d4d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/DocumentQuickView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentQuickView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentQuickView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentQuickView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentQuickView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DocumentQuickView.vue?vue&type=template&id=22703d4d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentQuickView_vue_vue_type_template_id_22703d4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);