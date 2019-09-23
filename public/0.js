(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/MainPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../parts/SearchBar */ "./resources/js/components/parts/SearchBar.vue");
/* harmony import */ var _parts_UploadDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../parts/UploadDocument */ "./resources/js/components/parts/UploadDocument.vue");
/* harmony import */ var _parts_DocumentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../parts/DocumentList */ "./resources/js/components/parts/DocumentList.vue");
//
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
  name: 'MainPage',
  components: {
    // 'SearchBar': () => import('./../parts/SearchBar'),
    // 'UploadDocument': () => import('./../parts/UploadDocument'),
    // 'DocumentList': () => import('./../parts/DocumentList')
    SearchBar: _parts_SearchBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    UploadDocument: _parts_UploadDocument__WEBPACK_IMPORTED_MODULE_1__["default"],
    DocumentList: _parts_DocumentList__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/event */ "./resources/js/helpers/event.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/utilities */ "./resources/js/helpers/utilities.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__);


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






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      document: {},
      currentDate: '',
      newDate: '',
      modalOpen: false,
      isLoading: false,
      // datepicker
      lang: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_4__["id"]
    };
  },
  watch: {
    'document.record_date': function documentRecord_date(value) {
      if (value != '') {
        this.currentDate = this.$options.filters.indoDate(value);
      }
    },
    modalOpen: function modalOpen(value) {
      if (!value) {
        this.document = {}, this.currentDate = '', this.newDate = '';
      }
    }
  },
  created: function created() {
    var _this = this;

    _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('openDatePickerMoveDocument', function (document) {
      _this.document = document;
      _this.modalOpen = true;
    });
  },
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    modalHandler: function modalHandler() {
      this.modalOpen = !this.modalOpen;
    },
    updateDate: function () {
      var _updateDate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var doc, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                doc = {
                  document: this.document,
                  date: this.newDate
                };
                _context.prev = 2;
                _context.next = 5;
                return axios.put('update-record-date/' + this.document.id, doc);

              case 5:
                response = _context.sent;

                if (response.status === 200) {
                  this.modalOpen = false;
                  this.document = {};
                  this.newDate = this.currentDate = '';
                  this.isLoading = false;
                  _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('closeQuickView');
                  Vue.$toast.success(response.data.message);
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function updateDate() {
        return _updateDate.apply(this, arguments);
      }

      return updateDate;
    }()
  }
});

/***/ }),

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
/* harmony import */ var _DocumentQuickView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentQuickView */ "./resources/js/components/parts/DocumentQuickView.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-context */ "./node_modules/vue-context/dist/js/vue-context.js");
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EditPatientModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditPatientModal */ "./resources/js/components/parts/EditPatientModal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    _helpers_event__WEBPACK_IMPORTED_MODULE_5__["Event"].$on('sendKeyword', function (keyword) {
      _this.keyword = keyword;
    });
  },
  mounted: function mounted() {
    bulma_extensions_dist_js_bulma_extensions_min_js__WEBPACK_IMPORTED_MODULE_0__["bulmaQuickview"].attach();
  },
  updated: function updated() {
    this.patient = this.getSearchResult;
  },
  data: function data() {
    return {
      isLoading: false,
      isModalLoading: false,
      patient: {},
      keyword: ''
    };
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueContext: vue_context__WEBPACK_IMPORTED_MODULE_4__["VueContext"],
    // EditPatientModal: () => import('./EditPatientModal'),
    // DocumentQuickView: () => import('./DocumentQuickView')
    EditPatientModal: _EditPatientModal__WEBPACK_IMPORTED_MODULE_7__["default"],
    DocumentQuickView: _DocumentQuickView__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['getSearchResult', 'getMultiplePatientData'])),
  methods: {
    editPatient: function editPatient(patient) {
      _helpers_event__WEBPACK_IMPORTED_MODULE_5__["Event"].$emit('openEditPatientModal', patient);
    },
    openQuickview: function openQuickview(patient, year) {
      _helpers_event__WEBPACK_IMPORTED_MODULE_5__["Event"].$emit('openQuickView', patient, year);
    },
    triggerSearch: function triggerSearch(keyword) {
      _helpers_event__WEBPACK_IMPORTED_MODULE_5__["Event"].$emit('triggerSearch', keyword);
    }
  }
});

/***/ }),

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
/* harmony import */ var _parts_DatePickerModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../parts/DatePickerModal */ "./resources/js/components/parts/DatePickerModal.vue");
/* harmony import */ var _NoteModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NoteModal */ "./resources/js/components/parts/NoteModal.vue");


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
    }()), _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('closeQuickView', function () {
      _this.quickviewActive = false;
    });
  },
  data: function data() {
    return {
      isLoading: false,
      quickviewActive: false,
      year: '',
      patient: '',
      selectedMonthText: '',
      filterSearch: '',
      selectedDocumentOnContext: {},
      isMonthEmpty: true
    };
  },
  watch: {
    selectedMonthText: function selectedMonthText(value) {
      if (value != '') {
        this.isMonthEmpty = false;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['getMonth', 'getDocuments']), {
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
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a,
    // DatePickerModal: () => import('./DatePickerModal')
    DatePickerModal: _parts_DatePickerModal__WEBPACK_IMPORTED_MODULE_5__["default"],
    NoteModal: _NoteModal__WEBPACK_IMPORTED_MODULE_6__["default"]
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
    }(),
    openDocument: function () {
      var _openDocument = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response, _response$data, base64, record;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get('open-document', {
                  params: {
                    id: this.selectedDocumentOnContext.id
                  }
                });

              case 3:
                response = _context3.sent;

                if (response.status == 200) {
                  _response$data = response.data, base64 = _response$data.base64, record = _response$data.record;
                  this.renderDocument(base64, record);
                }

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function openDocument() {
        return _openDocument.apply(this, arguments);
      }

      return openDocument;
    }(),
    renderDocument: function renderDocument(base64, record) {
      var newWindow = window.open();
      newWindow.document.write('<iframe src="data:application/pdf;base64,' + base64 + '" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100vh" width="100%" allowfullscreen></iframe>');
      var title = record.patient.nrm + ' - ' + record.form_name;
      newWindow.document.title = title;
    },
    openDatePicker: function openDatePicker() {
      _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('openDatePickerMoveDocument', this.selectedDocumentOnContext);
    },
    openNoteModal: function openNoteModal(document) {
      _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('openNoteModal', document);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditPatientModal',
  data: function data() {
    return {
      modalOpen: false,
      isLoading: false,
      isFormLoading: false,
      patient: {}
    };
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  created: function created() {
    var _this = this;

    _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('openEditPatientModal', function (patient) {
      _this.modalOpen = true;
      _this.patient = patient;
    });
  },
  methods: {
    modalHandler: function modalHandler() {
      this.modalOpen = !this.modalOpen;
    },
    updatePatient: function () {
      var _updatePatient = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                this.isFormLoading = true;
                _context.prev = 2;
                _context.next = 5;
                return axios.put('update-patient', this.patient);

              case 5:
                response = _context.sent;

                if (response.status == 200) {
                  this.isLoading = false;
                  this.isFormLoading = false;
                  Vue.$toast.success(response.data.message);
                  this.modalOpen = false;
                }

                console.log(response);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function updatePatient() {
        return _updatePatient.apply(this, arguments);
      }

      return updatePatient;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NoteModal',
  data: function data() {
    return {
      modalOpen: false,
      isLoading: false,
      document: {}
    };
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  created: function created() {
    var _this = this;

    _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('openNoteModal', function (document) {
      _this.document = document;
      _this.modalOpen = true;
    });
  },
  methods: {
    modalHandler: function modalHandler() {
      this.modalOpen = !this.modalOpen;
    },
    updateNote: function () {
      var _updateNote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.put('update-note', this.document);

              case 4:
                response = _context.sent;

                if (response.status == 200) {
                  this.modalOpen = false;
                  this.document = {};
                  this.isLoading = false;
                  _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('closeQuickView');
                  Vue.$toast.success(response.data.message);
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function updateNote() {
        return _updateNote.apply(this, arguments);
      }

      return updateNote;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
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

    _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$on('triggerSearch', function (keyword) {
      _this.search(keyword);
    });
  },
  data: function data() {
    return {
      keyword: '',
      isLoading: false
    };
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(['searchPatient']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])(['RESET_MULTIPLE_PATIENT_DATA', 'RESET_DOCUMENTS_STATE']), {
    search: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(keyword) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!keyword) {
                  _context.next = 12;
                  break;
                }

                this.isLoading = !this.isLoading;
                this.RESET_MULTIPLE_PATIENT_DATA();
                this.RESET_DOCUMENTS_STATE();
                _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('closeQuickView');
                _helpers_event__WEBPACK_IMPORTED_MODULE_2__["Event"].$emit('sendKeyword', keyword);
                _context.next = 8;
                return this.searchPatient(keyword);

              case 8:
                if (!_context.sent) {
                  _context.next = 10;
                  break;
                }

                this.isLoading = !this.isLoading;

              case 10:
                _context.next = 13;
                break;

              case 12:
                Vue.$toast.error('Kolom pencarian tidak boleh kosong!');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function search(_x) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/UploadDocument.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helpers/event */ "./resources/js/helpers/event.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        formName: '',
        formNumber: '',
        note: '',
        docRm: []
      },
      // Buat Validasi sendiri tanpa package, jangan manja.....!
      validation: {
        nrm: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        name: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        date: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        formName: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        formNumber: {
          required: {
            state: true,
            message: '*wajib diisi'
          }
        },
        docRm: {
          required: {
            state: true,
            message: '*file belum dipilih'
          }
        }
      },
      //
      filenameToUpload: '',
      lang: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_2__["id"],
      isLoading: false,
      fieldIsDisabled: false,
      // check tanpa identitas formulir
      isChecked: false,
      // list form number
      options: [],
      // checkbox
      disabledCheckbox: false,
      // loading nama pasien field
      fieldLoading: false
    };
  },
  watch: {
    isChecked: function isChecked(value) {
      if (value === true) {
        this.doc.formName = this.doc.formNumber = null;
        this.validation.formName.required.state = true;
        this.validation.formNumber.required.state = true;
      }

      this.fieldIsDisabled = !this.fieldIsDisabled;
    },
    'doc.formNumber': function docFormNumber(value) {
      if (value == null) {
        this.doc.formName = '';
        this.disabledCheckbox = false;
      } else if (value != '') {
        this.disabledCheckbox = true;
      }
    }
  },
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a,
    VSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a // 'v-select': () => import('vue-select')

  },
  methods: {
    fileToUpload: function fileToUpload(event) {
      var _this = this;

      // Multi File
      var files = event.target.files;
      this.filenameToUpload = files[0].name;

      for (var i = 0; i < files.length; i++) {
        if (files[i].type === 'application/pdf') {
          (function () {
            var reader = new FileReader();

            reader.onload = function (event) {
              _this.doc.docRm.push(reader.result);
            };

            reader.readAsDataURL(files[i]);
          })();
        } else {
          Vue.$toast.info("Dokumen ".concat(files[i].name, " harus berformat PDF!"));
          this.filenameToUpload = '';
          this.doc.docRm = [];
          return;
        }
      } // Single File
      // let file = event.target.files[0]
      // let reader = new FileReader()
      // if (file.type === 'application/pdf') {
      //   reader.onload = (event) => {
      //     this.doc.docRm = reader.result
      //     this.filenameToUpload = file.name
      //   }
      //   reader.readAsDataURL(file)
      // } else {
      //   Vue.$toast.info(`Dokumen ${ file.name } harus berformat PDF!`)
      //   this.filenameToUpload = ''
      //   this.doc.docRm = []
      //   return
      // }

    },
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.validateFormUpload();

              case 2:
                if (!_context.sent) {
                  _context.next = 15;
                  break;
                }

                this.clearFormValidation();
                this.isLoading = true;
                _context.prev = 5;
                _context.next = 8;
                return axios.post('upload', this.doc);

              case 8:
                response = _context.sent;

                if (response.status == 200 || response.status == 201) {
                  this.isLoading = false;
                  _helpers_event__WEBPACK_IMPORTED_MODULE_5__["Event"].$emit('closeQuickView');
                  Vue.$toast.success(response.data.message);
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12]]);
      }));

      function upload() {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),
    onCancel: function onCancel() {
      this.isLoading = false;
    },
    clearForm: function clearForm() {
      this.filenameToUpload = this.doc.nrm = this.doc.name = this.doc.date = this.doc.formName = this.doc.formNumber = '';
      this.isChecked = false;
      this.doc.docRm = [];
    },
    patientName: function () {
      var _patientName = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.fieldLoading = true;
                _context2.prev = 1;
                _context2.next = 4;
                return axios.get('patient-name', {
                  params: {
                    nrm: this.doc.nrm
                  }
                });

              case 4:
                response = _context2.sent;
                this.doc.name = response.data.result;
                this.fieldLoading = false;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));

      function patientName() {
        return _patientName.apply(this, arguments);
      }

      return patientName;
    }(),
    searchFormNumber: function searchFormNumber(search, loading) {
      this.newFormNumber = search;
      this.options.push({
        number: search
      });

      if (search != '') {
        loading(true);
        this.getFormNumber(search, loading, this);
      }
    },
    getFormNumber: _.debounce(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(search, loading, vm) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get('form-number', {
                  params: {
                    formNumber: search
                  }
                });

              case 3:
                response = _context3.sent;

                if (response.status == 200) {
                  loading(false);
                  vm.options = response.data.result;
                }

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }(), 1500),
    setSelected: function setSelected(value) {
      if (typeof value == 'string') {
        this.doc.formNumber = value;
        this.doc.formName = '';
      } else if (_typeof(value) == 'object') {
        this.doc.formNumber = value.number;
        this.doc.formName = value.name;
      }
    },
    clearUpload: function clearUpload() {
      this.doc.docRm = [];
    },
    // Validation
    validateFormUpload: function validateFormUpload() {
      var validateResult = []; // NRM

      if (this.doc.nrm == '') {
        this.validation.nrm.required.state = false;
        validateResult.push(0);
      } else {
        validateResult.push(1);
      } // Date


      if (this.doc.date == '') {
        this.validation.date.required.state = false;
        validateResult.push(0);
      } else {
        validateResult.push(1);
      } // Name


      if (this.doc.name == '') {
        this.validation.name.required.state = false;
        validateResult.push(0);
      } else {
        validateResult.push(1);
      }

      if (!this.isChecked) {
        // formNumber
        if (this.doc.formNumber == '') {
          this.validation.formNumber.required.state = false;
          validateResult.push(0);
        } else {
          validateResult.push(1);
        } // formName


        if (this.doc.formName == '') {
          this.validation.formName.required.state = false;
          validateResult.push(0);
        } else {
          validateResult.push(1);
        }
      } // file


      if (this.doc.docRm.length == 0) {
        this.validation.docRm.required.state = false;
        validateResult.push(0);
      } else {
        validateResult.push(1);
      }

      if (validateResult.includes(0)) {
        return false;
      } else {
        return true;
      }
    },
    // Clear Form Validation Error
    clearFormValidation: function clearFormValidation() {
      this.validation.nrm.required.state = true;
      this.validation.name.required.state = true;
      this.validation.date.required.state = true;
      this.validation.formName.required.state = true;
      this.validation.formNumber.required.state = true;
      this.validation.docRm.required.state = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.centerIconArrowButton[data-v-0e7e52b2]{\r\n  margin: 0px auto 10px auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
  return _c(
    "div",
    [
      _c("SearchBar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "columns" },
        [_c("UploadDocument"), _vm._v(" "), _c("DocumentList")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal", class: _vm.modalOpen == true ? "is-active" : "" },
    [
      _c("div", {
        staticClass: "modal-background",
        on: { click: _vm.modalHandler }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-content narrow" }, [
        _c(
          "div",
          { staticClass: "card" },
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
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "field" }, [
                _c("div", { staticClass: "control" }, [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Tanggal Kedatangan Saat Ini")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentDate,
                        expression: "currentDate"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: { "text-align": "center" },
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: _vm.currentDate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.currentDate = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c(
                  "div",
                  { staticClass: "control" },
                  [
                    _c("label", { staticClass: "label" }, [
                      _vm._v("Tanggal Kedatangan Baru")
                    ]),
                    _vm._v(" "),
                    _c("DatePicker", {
                      attrs: {
                        inline: "",
                        language: _vm.lang,
                        "full-month-name": true,
                        format: "dd MMMM yyyy",
                        "use-utc": true
                      },
                      model: {
                        value: _vm.newDate,
                        callback: function($$v) {
                          _vm.newDate = $$v
                        },
                        expression: "newDate"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-link is-fullwidth",
                    on: { click: _vm.updateDate }
                  },
                  [_vm._m(1), _vm._v("\n            Pindahkan\n          ")]
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "modal-close is-large",
        attrs: { "aria-label": "close" },
        on: { click: _vm.modalHandler }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-column" }, [
      _c("span", { staticClass: "icon is-large centerIconArrowButton" }, [
        _c("i", { staticClass: "fas fa-arrow-circle-down fa-2x" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-margin-right-5" }, [
      _c("i", { staticClass: "fas fa-share" })
    ])
  }
]
render._withStripped = true



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
  return _c(
    "div",
    { staticClass: "column" },
    [
      _c("h1", { staticClass: "title" }, [
        _vm._v("\n    E-Doc Library Rekam Medis\n  ")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "nav",
        { staticClass: "panel" },
        [
          _vm.getMultiplePatientData.length != 0
            ? [
                _c("p", { staticClass: "panel-heading is-clearfix" }, [
                  _vm._v(
                    "\n        Hasil Pencarian: '" +
                      _vm._s(_vm.keyword != "" ? _vm.keyword : "") +
                      "'\n      "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "panel-tabs" }, [
                  _c("a", { staticClass: "is-active" }, [
                    _vm._v(
                      "Ditemukan " +
                        _vm._s(_vm.getMultiplePatientData.length) +
                        " data"
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.getMultiplePatientData, function(patient) {
                  return [
                    _c(
                      "a",
                      {
                        key: patient.id,
                        staticClass: "panel-block",
                        attrs: {
                          "data-show": "quickview",
                          "data-target": "viewDocumentList",
                          title: "Klik untuk melihat detail"
                        },
                        on: {
                          click: function($event) {
                            return _vm.triggerSearch(patient.nrm)
                          }
                        }
                      },
                      [
                        _vm._m(1, true),
                        _vm._v(
                          "\n          " +
                            _vm._s(patient.nrm) +
                            " - " +
                            _vm._s(patient.name) +
                            "\n        "
                        )
                      ]
                    )
                  ]
                })
              ]
            : [
                _c(
                  "p",
                  {
                    staticClass: "panel-heading is-clearfix",
                    attrs: {
                      title:
                        _vm.getSearchResult.name == ""
                          ? ""
                          : _vm.getSearchResult.name
                    }
                  },
                  [
                    _vm.getSearchResult.nrm
                      ? [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm._f("fixedLength")(
                                  _vm.getSearchResult.nrm +
                                    " - " +
                                    _vm.getSearchResult.name
                                )
                              ) +
                              "\n        "
                          )
                        ]
                      : [_c("i", [_vm._v("Tidak ada pasien yang dipilih")])],
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "button is-pulled-right",
                        attrs: { title: "Edit NRM dan Nama Pasien" },
                        on: {
                          click: function($event) {
                            return _vm.editPatient(_vm.patient)
                          }
                        }
                      },
                      [_vm._m(2)]
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._l(_vm.getSearchResult.year, function(year) {
                  return [
                    _c(
                      "a",
                      {
                        key: year,
                        staticClass: "panel-block",
                        attrs: {
                          "data-show": "quickview",
                          "data-target": "viewDocumentList",
                          title: "Klik untuk melihat detail"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openQuickview(_vm.patient, year)
                          }
                        }
                      },
                      [
                        _vm._m(4, true),
                        _vm._v("\n          " + _vm._s(year) + "\n        ")
                      ]
                    )
                  ]
                })
              ]
        ],
        2
      ),
      _vm._v(" "),
      _c("DocumentQuickView"),
      _vm._v(" "),
      _c("EditPatientModal")
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
      _c("i", [_vm._v("*Dokumen rekam medis bersifat rahasia ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", {
        staticClass: "fas fa-user-injured",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-pen-square" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "panel-tabs" }, [
      _c("a", { staticClass: "is-active" }, [_vm._v("Tahun Kedatangan Pasien")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-book", attrs: { "aria-hidden": "true" } })
    ])
  }
]
render._withStripped = true



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
                            attrs: { href: "javascript:void(0)" },
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
                      rawName: "v-model.trim",
                      value: _vm.filterSearch,
                      expression: "filterSearch",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: "Filter",
                    disabled: _vm.isMonthEmpty
                  },
                  domProps: { value: _vm.filterSearch },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.filterSearch = $event.target.value.trim()
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(2)
              ]
            ),
            _vm._v(" "),
            _vm._m(3)
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
                ? [_vm._m(4)]
                : _vm._l(_vm.filteredList, function(document) {
                    return _c(
                      "div",
                      { key: document.id, staticClass: "card" },
                      [
                        _c(
                          "div",
                          { staticClass: "card-title has-text-right" },
                          [
                            document.note != null
                              ? [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "icon has-text-info is-medium has-margin-left-5 tooltip is-tooltip-left",
                                      attrs: {
                                        "data-tooltip":
                                          "Klik untuk melihat catatan / keterangan"
                                      }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: {
                                            click: function($event) {
                                              return _vm.openNoteModal(document)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-sticky-note"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _c("i", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm._f("indoDate")(document.record_date)
                                  ) +
                                  "\n            "
                              )
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "columns" }, [
                            _c("div", { staticClass: "column" }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "javascript:void(0)",
                                    title:
                                      "Klik kanan untuk melihat menu pilihan"
                                  },
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
                                    _vm._m(5, true),
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
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.openDocument }
              },
              [
                _c("i", {
                  staticClass: "fas fa-book-open has-margin-right-10"
                }),
                _vm._v("\n        Buka Dokumen\n      ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.openDatePicker }
              },
              [
                _c("i", { staticClass: "fas fa-share has-margin-right-10" }),
                _vm._v("\n        Pindahkan\n      ")
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("DatePickerModal"),
      _vm._v(" "),
      _c("NoteModal")
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
    return _c(
      "span",
      {
        staticClass:
          "icon has-text-info is-medium has-margin-left-5 tooltip is-tooltip-left",
        attrs: {
          "data-tooltip":
            "Gunakan tanda ':' untuk filter tanggal. Contoh :15 untuk tanggal 15"
        }
      },
      [_c("i", { staticClass: "fas fa-info-circle fa-lg" })]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal", class: _vm.modalOpen == true ? "is-active" : "" },
    [
      _c("div", {
        staticClass: "modal-background",
        on: { click: _vm.modalHandler }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modal-content" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "field" }, [
              _c(
                "div",
                {
                  staticClass: "control has-icons-left has-icons-right",
                  class: _vm.isFormLoading == true ? "is-loading" : ""
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.patient.nrm,
                        expression: "patient.nrm"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text", placeholder: "NRM", disabled: "" },
                    domProps: { value: _vm.patient.nrm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.patient, "nrm", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c(
                "div",
                {
                  staticClass: "control has-icons-left",
                  class: _vm.isFormLoading == true ? "is-loading" : ""
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.patient.name,
                        expression: "patient.name"
                      }
                    ],
                    staticClass: "input",
                    attrs: {
                      type: "text",
                      placeholder: "Nama Pasien",
                      disabled: _vm.isFormLoading
                    },
                    domProps: { value: _vm.patient.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.patient, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "button is-primary is-fullwidth",
                class: _vm.isFormLoading == true ? "is-loading" : "",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.updatePatient }
              },
              [_vm._v("\n          Perbarui\n        ")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "modal-close is-large",
        attrs: { "aria-label": "close" },
        on: { click: _vm.modalHandler }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fas fa-address-card" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fas fa-font" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal", class: _vm.modalOpen == true ? "is-active" : "" },
    [
      _c("div", {
        staticClass: "modal-background",
        on: { click: _vm.modalHandler }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal-content" },
        [
          _c("Loading", {
            attrs: {
              active: _vm.isLoading,
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
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "field" }, [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.document.note,
                        expression: "document.note"
                      }
                    ],
                    staticClass: "textarea",
                    domProps: { value: _vm.document.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.document, "note", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "button is-primary is-fullwidth",
                  attrs: { href: "javascript:void(0)" },
                  on: { click: _vm.updateNote }
                },
                [_vm._v("\n          Perbarui\n        ")]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "modal-close is-large",
        attrs: { "aria-label": "close" },
        on: { click: _vm.modalHandler }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "columns" },
    [
      _c("Loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": true,
          "is-full-page": true,
          color: "hsl(171, 100%, 41%)",
          loader: "spinner"
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c("div", { staticClass: "control has-icons-left has-icons-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword,
                expression: "keyword"
              }
            ],
            staticClass: "input is-large is-rounded",
            staticStyle: { "text-align": "center" },
            attrs: { type: "text", placeholder: "NRM atau Nama Pasien" },
            domProps: { value: _vm.keyword },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.search(_vm.keyword)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.keyword = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
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
    return _c("span", { staticClass: "icon is-medium is-left" }, [
      _c("i", { staticClass: "fas fa-file-pdf" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-medium is-right" }, [
      _c("i", { staticClass: "fas fa-search" })
    ])
  }
]
render._withStripped = true



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
      _c("div", {
        staticClass: "is-divider",
        attrs: { "data-content": "DATA PASIEN" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Nomor Rekam Medis\n          "),
              _c("i", { staticClass: "is-size-7 has-text-danger" }, [
                _vm._v(
                  _vm._s(
                    _vm.validation.nrm.required.state
                      ? ""
                      : _vm.validation.nrm.required.message
                  )
                )
              ])
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
                class: _vm.validation.nrm.required.state ? "" : "is-danger",
                attrs: {
                  type: "text",
                  placeholder: "Text input",
                  required: ""
                },
                domProps: { value: _vm.doc.nrm },
                on: {
                  change: _vm.patientName,
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
              _vm._v("Tanggal Kedatangan\n            "),
              _c("i", { staticClass: "is-size-7 has-text-danger" }, [
                _vm._v(
                  _vm._s(
                    _vm.validation.date.required.state
                      ? ""
                      : _vm.validation.date.required.message
                  )
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control has-icons-left" },
              [
                _c("DatePicker", {
                  attrs: {
                    "input-class": _vm.validation.date.required.state
                      ? "input is-rounded"
                      : "input is-rounded is-danger",
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
        _c("label", { staticClass: "label" }, [
          _vm._v("Nama Pasien\n      "),
          _c("i", { staticClass: "is-size-7 has-text-danger" }, [
            _vm._v(
              _vm._s(
                _vm.validation.name.required.state
                  ? ""
                  : _vm.validation.name.required.message
              )
            )
          ])
        ]),
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
            class: [
              _vm.validation.name.required.state ? "" : "is-danger",
              _vm.fieldLoading ? "is-loading" : ""
            ],
            staticStyle: { "text-transform": "uppercase" },
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
      _c("div", {
        staticClass: "is-divider",
        attrs: { "data-content": "DOKUMEN REKAM MEDIS" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.isChecked,
                  expression: "isChecked"
                }
              ],
              staticClass: "is-checkradio has-background-color is-success",
              attrs: {
                type: "checkbox",
                id: "checkbox1",
                disabled: _vm.disabledCheckbox
              },
              domProps: {
                checked: Array.isArray(_vm.isChecked)
                  ? _vm._i(_vm.isChecked, null) > -1
                  : _vm.isChecked
              },
              on: {
                change: function($event) {
                  var $$a = _vm.isChecked,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.isChecked = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.isChecked = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.isChecked = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "label has-margin-left-10",
                attrs: {
                  title:
                    "Centang apabila dokumen tidak memiliki Nomor atau Nama Formulir",
                  for: "checkbox1"
                }
              },
              [_vm._v("Upload Tanpa Identitas Formulir Rekam Medis")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Nomor Form\n          "),
              _c("i", { staticClass: "is-size-7 has-text-danger" }, [
                _vm._v(
                  _vm._s(
                    _vm.validation.formNumber.required.state
                      ? ""
                      : _vm.validation.formNumber.required.message
                  )
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control has-icons-left" },
              [
                _c(
                  "v-select",
                  {
                    attrs: {
                      options: _vm.options,
                      label: "number",
                      disabled: _vm.fieldIsDisabled,
                      placeholder: "Ketik nomor form",
                      taggable: true
                    },
                    on: {
                      search: _vm.searchFormNumber,
                      input: _vm.setSelected
                    },
                    model: {
                      value: _vm.doc.formNumber,
                      callback: function($$v) {
                        _vm.$set(_vm.doc, "formNumber", $$v)
                      },
                      expression: "doc.formNumber"
                    }
                  },
                  [
                    _c("template", { slot: "no-options" }, [
                      _c("i", [_vm._v("pilihan tidak tersedia...")])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("Nama Form\n            "),
              _c("i", { staticClass: "is-size-7 has-text-danger" }, [
                _vm._v(
                  _vm._s(
                    _vm.validation.formName.required.state
                      ? ""
                      : _vm.validation.formName.required.message
                  )
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.doc.formName,
                    expression: "doc.formName"
                  }
                ],
                staticClass: "input",
                class: _vm.validation.formName.required.state
                  ? ""
                  : "is-danger",
                attrs: {
                  type: "text",
                  placeholder: "Text input",
                  required: "",
                  disabled: _vm.fieldIsDisabled
                },
                domProps: { value: _vm.doc.formName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.doc, "formName", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(4)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("label", { staticClass: "label" }, [
            _vm._v("Pilih Dokumen\n        "),
            _c("i", { staticClass: "is-size-7 has-text-danger" }, [
              _vm._v(
                _vm._s(
                  _vm.validation.docRm.required.state
                    ? ""
                    : _vm.validation.docRm.required.message
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c(
              "div",
              {
                staticClass:
                  "file is-centered is-boxed is-danger has-name is-fullwidth"
              },
              [
                _c("label", { staticClass: "file-label" }, [
                  _c("input", {
                    staticClass: "file-input",
                    attrs: { type: "file", name: "file" },
                    on: { change: _vm.fileToUpload, click: _vm.clearUpload }
                  }),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("span", { staticClass: "file-name" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm._f("fixedLengthFileNameUpload")(
                            _vm.filenameToUpload == ""
                              ? "Tidak ada file"
                              : _vm.filenameToUpload
                          )
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
          _c("label", { staticClass: "label" }, [
            _vm._v("Catatan / Keterangan")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.doc.note,
                expression: "doc.note"
              }
            ],
            staticClass: "textarea",
            attrs: { placeholder: "Input Catatan / Keterangan" },
            domProps: { value: _vm.doc.note },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.doc, "note", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "button",
            {
              staticClass: "button is-dark is-fullwidth",
              on: { click: _vm.clearForm }
            },
            [_vm._m(6), _vm._v("\n        Bersihkan Form\n      ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "button",
            {
              staticClass: "button is-link is-fullwidth",
              on: { click: _vm.upload }
            },
            [_vm._m(7), _vm._v("\n        Simpan\n      ")]
          )
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
    return _c("span", { staticClass: "icon is-left" }, [
      _c("i", { staticClass: "fas fa-spell-check" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "file-cta" }, [
      _c("span", { staticClass: "file-icon is-large" }, [
        _c("i", { staticClass: "fas fa-upload fas fa-1x" })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "file-label is-centered",
          staticStyle: { "margin-left": "95px" }
        },
        [_vm._v("\n                Upload Dokumen\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-margin-right-5" }, [
      _c("i", { staticClass: "fas fa-broom" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-margin-right-5" }, [
      _c("i", { staticClass: "fas fa-save" })
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



/***/ }),

/***/ "./resources/js/components/parts/DatePickerModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/parts/DatePickerModal.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true& */ "./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true&");
/* harmony import */ var _DatePickerModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePickerModal.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& */ "./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatePickerModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e7e52b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/DatePickerModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DatePickerModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=style&index=0&id=0e7e52b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_style_index_0_id_0e7e52b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/DatePickerModal.vue?vue&type=template&id=0e7e52b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePickerModal_vue_vue_type_template_id_0e7e52b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/parts/EditPatientModal.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/parts/EditPatientModal.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true& */ "./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true&");
/* harmony import */ var _EditPatientModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPatientModal.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPatientModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43ed48cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/EditPatientModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPatientModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPatientModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/EditPatientModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPatientModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/EditPatientModal.vue?vue&type=template&id=43ed48cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPatientModal_vue_vue_type_template_id_43ed48cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/parts/NoteModal.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/parts/NoteModal.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteModal.vue?vue&type=template&id=b627b05e&scoped=true& */ "./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true&");
/* harmony import */ var _NoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b627b05e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/NoteModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/NoteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteModal.vue?vue&type=template&id=b627b05e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/NoteModal.vue?vue&type=template&id=b627b05e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteModal_vue_vue_type_template_id_b627b05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/parts/SearchBar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/parts/SearchBar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true& */ "./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bc64b41",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/SearchBar.vue?vue&type=template&id=3bc64b41&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_3bc64b41_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/helpers/event.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/event.js ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var Event = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./resources/js/helpers/utilities.js":
/*!*******************************************!*\
  !*** ./resources/js/helpers/utilities.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// add days function
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

/***/ })

}]);