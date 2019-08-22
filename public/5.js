(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      doc: {
        nrm: '',
        name: '',
        date: '',
        docRm: []
      },
      filenameToUpload: '',
      lang: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__["id"],
      isLoading: false
    };
  },
  components: {
    // 'DatePicker': import('vuejs-datepicker')
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  methods: {
    fileToUpload: function fileToUpload(event) {
      var _this = this;

      // Multi File
      // let files = event.target.files
      // for (let i = 0; i < files.length; i++) {
      //   if (files[i].type === 'application/pdf') {
      //     let reader = new FileReader()
      //     reader.onload = (event) => {
      //       this.doc.docRm.push(reader.result)
      //     }
      //     reader.readAsDataURL(files[i])
      //   } else {
      //     alert('Filenya bukan PDF masbroo!')
      //   }
      // }
      // Single File
      var file = event.target.files[0];
      var reader = new FileReader();

      if (file.type === 'application/pdf') {
        reader.onload = function (event) {
          _this.doc.docRm = reader.result;
          _this.filenameToUpload = file.name;
        };

        reader.readAsDataURL(file);
      } else {
        alert('Filenya bukan PDF masbroo!');
      }
    },
    upload: function upload() {
      var _this2 = this;

      this.isLoading = true;
      axios.post('upload', this.doc).then(function (response) {
        // console.log(response)
        if (response.status == 200) {
          _this2.isLoading = false;
          Vue.$toast.success('Upload sukses....!', {
            position: 'top'
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.isLoading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "column" },
    [
      _c("Loading", {
        attrs: {
          active: _vm.isLoading,
          "is-full-page": true,
          "can-cancel": true,
          "on-cancel": _vm.onCancel,
          color: "hsl(171, 100%, 41%)"
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("h3", { staticClass: "title" }, [
        _vm._v("\n    Upload File Rekam Medis\n  ")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Nomor Rekam Medis")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.doc.nrm,
                    expression: "doc.nrm"
                  }
                ],
                staticClass: "input is-rounded",
                attrs: {
                  type: "text",
                  placeholder: "Text input",
                  required: ""
                },
                domProps: { value: _vm.doc.nrm },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.doc, "nrm", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Tanggal Perekaman")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control has-icons-left" },
              [
                _c("DatePicker", {
                  attrs: {
                    "input-class": "input is-rounded",
                    language: _vm.lang,
                    "full-month-name": true,
                    format: "dd MMMM yyyy",
                    "use-utc": true
                  },
                  model: {
                    value: _vm.doc.date,
                    callback: function($$v) {
                      _vm.$set(_vm.doc, "date", $$v)
                    },
                    expression: "doc.date"
                  }
                }),
                _vm._v(" "),
                _vm._m(2)
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", { staticClass: "label" }, [_vm._v("Nama Pasien")]),
        _vm._v(" "),
        _c("div", { staticClass: "control has-icons-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.doc.name,
                expression: "doc.name"
              }
            ],
            staticClass: "input is-rounded",
            attrs: { type: "text", placeholder: "Text input", required: "" },
            domProps: { value: _vm.doc.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.doc, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._m(3)
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
                    attrs: { type: "file", multiple: "", name: "file" },
                    on: { change: _vm.fileToUpload }
                  }),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("span", { staticClass: "file-name" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.filenameToUpload == ""
                            ? "Tidak ada file"
                            : _vm.filenameToUpload
                        ) +
                        "\n            "
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
            "button",
            {
              staticClass:
                "button is-link is-normal has-margin-bottom-15 is-fullwidth",
              on: { click: _vm.upload }
            },
            [_vm._m(5), _vm._v("\n        Simpan\n      ")]
          ),
          _vm._v(" "),
          _vm._m(6)
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "subtitle" }, [
      _c("i", [_vm._v("*File yang diupload harus format .pdf")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-address-card" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-calendar-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-font" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "file-cta" }, [
      _c("span", { staticClass: "file-icon" }, [
        _c("i", { staticClass: "fas fa-upload" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "file-label" }, [
        _vm._v("\n                Upload Dokumen\n              ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-margin-right-5" }, [
      _c("i", { staticClass: "fas fa-save" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box is-normal" }, [
      _c("p", [_vm._v("Tampilkan Nama File dan Folder")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/parts/UploadDocument.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/parts/UploadDocument.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadDocument.vue?vue&type=template&id=38612e94&scoped=true& */ "./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true&");
/* harmony import */ var _UploadDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadDocument.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38612e94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/UploadDocument.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocument.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocument.vue?vue&type=template&id=38612e94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/UploadDocument.vue?vue&type=template&id=38612e94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocument_vue_vue_type_template_id_38612e94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);