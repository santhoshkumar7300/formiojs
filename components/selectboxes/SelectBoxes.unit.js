"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.entries.js");
var _powerAssert = _interopRequireDefault(require("power-assert"));
var _harness = _interopRequireDefault(require("../../../test/harness"));
var _lodash = _interopRequireDefault(require("lodash"));
var _SelectBoxes = _interopRequireDefault(require("./SelectBoxes"));
var _Formio = _interopRequireDefault(require("./../../Formio"));
var _fixtures = require("./fixtures");
var _wizardWithSelectBoxes = _interopRequireDefault(require("../../../test/forms/wizardWithSelectBoxes"));
var _fixtures2 = require("../radio/fixtures");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
describe('SelectBoxes Component', function () {
  it('Should build a SelectBoxes component', function () {
    return _harness["default"].testCreate(_SelectBoxes["default"], _fixtures.comp1).then(function (component) {
      _harness["default"].testElements(component, 'input[type="checkbox"]', 8);
    });
  });
  it('Should build a SelectBoxes component with URL DataSrc', function (done) {
    var form = _lodash["default"].cloneDeep(_fixtures.comp5);
    var element = document.createElement('div');
    var originalMakeRequest = _Formio["default"].makeRequest;
    _Formio["default"].makeRequest = function () {
      return new Promise(function (resolve) {
        var values = [{
          name: 'Alabama',
          abbreviation: 'AL'
        }, {
          name: 'Alaska',
          abbreviation: 'AK'
        }, {
          name: 'American Samoa',
          abbreviation: 'AS'
        }];
        resolve(values);
      });
    };
    _Formio["default"].createForm(element, form).then(function (form) {
      var selectBoxes = form.getComponent('selectBoxes');
      setTimeout(function () {
        _powerAssert["default"].equal(selectBoxes.loadedOptions.length, 3);
        _Formio["default"].makeRequest = originalMakeRequest;
        done();
      }, 200);
    })["catch"](done);
  });
  it('Should display values in DataTab', function (done) {
    _harness["default"].testCreate(_SelectBoxes["default"], _fixtures.comp6).then(function (component) {
      var value1 = component.getView({
        Alabama: false,
        Alaska: true
      });
      var value2 = component.getView({
        Alabama: true,
        Alaska: true
      });
      _powerAssert["default"].equal(value1, 'Alaska');
      _powerAssert["default"].equal(value2, 'Alabama, Alaska');
      done();
    });
  });
  it('Should provide metadata.selectData for SelectBoxes component with URL DataSrc', function (done) {
    var form = _lodash["default"].cloneDeep(_fixtures.comp5);
    var element = document.createElement('div');
    var originalMakeRequest = _Formio["default"].makeRequest;
    _Formio["default"].makeRequest = function () {
      return new Promise(function (resolve) {
        var values = [{
          name: 'Alabama',
          abbreviation: 'AL'
        }, {
          name: 'Alaska',
          abbreviation: 'AK'
        }, {
          name: 'American Samoa',
          abbreviation: 'AS'
        }];
        resolve(values);
      });
    };
    _Formio["default"].createForm(element, form).then(function (form) {
      var selectBoxes = form.getComponent('selectBoxes');
      setTimeout(function () {
        var value = {
          AL: false,
          AK: true,
          AS: true
        };
        selectBoxes.setValue(value);
        setTimeout(function () {
          _powerAssert["default"].equal(selectBoxes.dataValue, value);
          var submit = form.getComponent('submit');
          var clickEvent = new Event('click');
          var submitBtn = submit.refs.button;
          submitBtn.dispatchEvent(clickEvent);
          setTimeout(function () {
            _powerAssert["default"].equal(_lodash["default"].isEqual(form.submission.metadata.selectData.selectBoxes, [{
              name: 'Alaska'
            }, {
              name: 'American Samoa'
            }]), true);
            _powerAssert["default"].equal(form.submission.metadata.listData.selectBoxes.length, 3);
            _Formio["default"].makeRequest = originalMakeRequest;
            done();
          }, 200);
        }, 200);
      }, 200);
    })["catch"](done);
  });
  describe('error messages', function () {
    it('Should have a minSelectedCount validation message', function () {
      var formJson = {
        components: [{
          type: 'selectboxes',
          key: 'options',
          values: [{
            label: 'Option 1',
            value: '1'
          }, {
            label: 'Option 2',
            value: '2'
          }, {
            label: 'Option 3',
            value: '3'
          }, {
            label: 'Option 4',
            value: '4'
          }],
          validate: {
            minSelectedCount: 2
          }
        }]
      };
      var element = document.createElement('div');
      return _Formio["default"].createForm(element, formJson).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(form) {
          var comp;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  form.submission = {
                    data: {
                      options: {
                        1: true
                      }
                    }
                  };
                  comp = form.getComponent('options');
                  setTimeout(function () {
                    var messageContainer = comp.refs.messageContainer;
                    _powerAssert["default"].equal(messageContainer.textContent.trim(), 'You must select at least 2 items.');
                  }, 300);
                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
    it('Should use the minSelectedCountMessage if provided', function () {
      var formJson = {
        components: [{
          type: 'selectboxes',
          key: 'options',
          values: [{
            label: 'Option 1',
            value: '1'
          }, {
            label: 'Option 2',
            value: '2'
          }, {
            label: 'Option 3',
            value: '3'
          }, {
            label: 'Option 4',
            value: '4'
          }],
          validate: {
            minSelectedCount: 2
          },
          minSelectedCountMessage: 'Please select at least {{minCount}} items.'
        }]
      };
      var element = document.createElement('div');
      return _Formio["default"].createForm(element, formJson).then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(form) {
          var comp;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  form.submission = {
                    data: {
                      options: {
                        1: true
                      }
                    }
                  };
                  comp = form.getComponent('options');
                  setTimeout(function () {
                    var messageContainer = comp.refs.messageContainer;
                    _powerAssert["default"].equal(messageContainer.textContent.trim(), 'Please select at least 2 items.');
                  }, 300);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
    it('Hidden SelectBoxes validation should not prevent submission', function (done) {
      var element = document.createElement('div');
      _Formio["default"].createForm(element, _fixtures.comp4).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(form) {
          var submit, clickEvent, submitBtn;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  submit = form.getComponent('submit');
                  clickEvent = new Event('click');
                  submitBtn = submit.refs.button;
                  submitBtn.dispatchEvent(clickEvent);
                  setTimeout(function () {
                    _powerAssert["default"].equal(form.submission.state, 'submitted');
                    _powerAssert["default"].equal(form.errors.length, 0);
                    done();
                  }, 500);
                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }())["catch"](done);
    });
    it('Should have a maxSelectedCount validation message', function () {
      var formJson = {
        components: [{
          type: 'selectboxes',
          key: 'options',
          values: [{
            label: 'Option 1',
            value: '1'
          }, {
            label: 'Option 2',
            value: '2'
          }, {
            label: 'Option 3',
            value: '3'
          }, {
            label: 'Option 4',
            value: '4'
          }],
          validate: {
            maxSelectedCount: 2
          }
        }]
      };
      var element = document.createElement('div');
      return _Formio["default"].createForm(element, formJson).then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(form) {
          var comp;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  form.submission = {
                    data: {
                      options: {
                        1: true,
                        2: true,
                        3: true
                      }
                    }
                  };
                  comp = form.getComponent('options');
                  setTimeout(function () {
                    var messageContainer = comp.refs.messageContainer;
                    _powerAssert["default"].equal(messageContainer.textContent.trim(), 'You can only select up to 2 items.');
                  }, 300);
                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    });
    it('Should use the maxSelectedCountMessage if provided', function () {
      var formJson = {
        components: [{
          type: 'selectboxes',
          key: 'options',
          values: [{
            label: 'Option 1',
            value: '1'
          }, {
            label: 'Option 2',
            value: '2'
          }, {
            label: 'Option 3',
            value: '3'
          }, {
            label: 'Option 4',
            value: '4'
          }],
          validate: {
            maxSelectedCount: 2
          },
          maxSelectedCountMessage: 'Please select {{maxCount}} items at most.'
        }]
      };
      var element = document.createElement('div');
      return _Formio["default"].createForm(element, formJson).then( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(form) {
          var comp;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  form.submission = {
                    data: {
                      options: {
                        1: true,
                        2: true,
                        3: true
                      }
                    }
                  };
                  comp = form.getComponent('options');
                  setTimeout(function () {
                    var messageContainer = comp.refs.messageContainer;
                    _powerAssert["default"].equal(messageContainer.textContent.trim(), 'Please select 2 items at most.');
                  }, 300);
                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    });
    it('Should provide validation for ValueProperty', function (done) {
      var form = _lodash["default"].cloneDeep(_fixtures.comp5);
      var element = document.createElement('div');
      var originalMakeRequest = _Formio["default"].makeRequest;
      _Formio["default"].makeRequest = function () {
        return new Promise(function (resolve) {
          var values = [{
            name: 'Alabama',
            abbreviation: 'AL'
          }, {
            name: 'Alaska',
            abbreviation: {
              a: 2,
              b: 'c'
            }
          }, {
            name: 'American Samoa',
            abbreviation: true
          }];
          resolve(values);
        });
      };
      _Formio["default"].createForm(element, form).then( /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(form) {
          var selectBoxes;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  selectBoxes = form.getComponent('selectBoxes');
                  setTimeout(function () {
                    var inputs = selectBoxes.element.querySelectorAll('input');
                    inputs[1].checked = true;
                    inputs[2].checked = true;
                    setTimeout(function () {
                      var submit = form.getComponent('submit');
                      var clickEvent = new Event('click');
                      var submitBtn = submit.refs.button;
                      submitBtn.dispatchEvent(clickEvent);
                      setTimeout(function () {
                        _powerAssert["default"].equal(form.errors.length, 1);
                        _powerAssert["default"].equal(selectBoxes.error.message, 'Invalid Value Property');
                        selectBoxes.setValue({
                          'AL': true
                        });
                        setTimeout(function () {
                          _powerAssert["default"].equal(form.errors.length, 0);
                          _powerAssert["default"].equal(!!selectBoxes.error, false);
                          document.innerHTML = '';
                          _Formio["default"].makeRequest = originalMakeRequest;
                          done();
                        }, 300);
                      }, 300);
                    }, 300);
                  }, 200);
                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }())["catch"](done);
    });
  });
  it('Should set "checked" attribute correctly when value is changed', function (done) {
    _Formio["default"].createForm(document.createElement('div'), _wizardWithSelectBoxes["default"]).then(function (form) {
      var selectBoxes = form.getComponent(['selectBoxes']);
      var value = {
        five: false,
        four: false,
        one: true,
        three: false,
        two: true
      };
      selectBoxes.setValue(value);
      var checkInputs = function checkInputs(values) {
        Object.entries(values).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];
          var input = selectBoxes.element.querySelector("input[value=\"".concat(key, "\"]"));
          _powerAssert["default"].equal(input.checked, value, 'Should be checked');
        });
      };
      setTimeout(function () {
        checkInputs(value);
        form.setPage(1);
        setTimeout(function () {
          form.setPage(0);
          setTimeout(function () {
            checkInputs(value);
            done();
          });
        }, 200);
      }, 200);
    })["catch"](done);
  });
  it('Should have correct submission data when setting the value property', function (done) {
    var originalMakeRequest = _Formio["default"].makeRequest;
    _Formio["default"].makeRequest = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", [{
                data: {
                  name: 'Bob',
                  referenceId: '1'
                }
              }, {
                data: {
                  name: 'Tom',
                  referenceId: '2'
                }
              }, {
                data: {
                  name: 'Joe',
                  referenceId: '3'
                }
              }]);
            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    var changeEvent = new Event('change');
    _Formio["default"].createForm(document.createElement('div'), _fixtures2.comp12, {}).then(function (form) {
      setTimeout(function () {
        var selectBoxesComponent = form.getComponent('selectBoxes');
        selectBoxesComponent.refs.input[0].checked = true;
        selectBoxesComponent.refs.input[0].dispatchEvent(changeEvent);
        setTimeout(function () {
          _powerAssert["default"].deepEqual(form.getValue().data, {
            selectBoxes: {
              Bob: true,
              Tom: false,
              Joe: false
            }
          });
          done();
        }, 200);
        _Formio["default"].makeRequest = originalMakeRequest;
      }, 200);
    });
  });
  it('Should show validation errors when the value property is set', function (done) {
    var originalMakeRequest = _Formio["default"].makeRequest;
    _Formio["default"].makeRequest = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", [{
                data: {
                  name: 'Bob',
                  referenceId: '1'
                }
              }, {
                data: {
                  name: 'Tom',
                  referenceId: '2'
                }
              }, {
                data: {
                  name: 'Joe',
                  referenceId: '3'
                }
              }]);
            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    var newComp12 = _lodash["default"].cloneDeep(_fixtures2.comp12);
    newComp12.components.push({
      'type': 'button',
      'key': 'submit'
    });
    _lodash["default"].set(newComp12.components[0], 'validate.required', true);
    _Formio["default"].createForm(document.createElement('div'), newComp12, {}).then(function (form) {
      var selectBoxesComponent = form.getComponent('selectBoxes');
      var buttonComponent = form.getComponent('submit');
      buttonComponent.refs.button.click();
      setTimeout(function () {
        _powerAssert["default"].equal(selectBoxesComponent.errors.length, 1);
        done();
      }, 200);
      _Formio["default"].makeRequest = originalMakeRequest;
    });
  });
});
describe('SelectBoxes Component', function () {
  it('should have red asterisk left hand side to the options labels if component is required and label is hidden', function () {
    return _harness["default"].testCreate(_SelectBoxes["default"], _fixtures.comp3).then(function (component) {
      var options = component.element.querySelectorAll('.form-check-label');
      options.forEach(function (i) {
        _powerAssert["default"].deepEqual(!!getComputedStyle(i, ':before'), true);
      });
    });
  });
  it('Should perform OnlyAvailableItems check properly', function (done) {
    _harness["default"].testCreate(_SelectBoxes["default"], _fixtures.comp7).then(function (component) {
      _powerAssert["default"].equal(component.validateValueAvailability(true, {
        a: true
      }), true, 'Should be valid');
      _powerAssert["default"].equal(component.validateValueAvailability(true, {
        a: false,
        b: false,
        c: false
      }), true, 'Should be valid');
      _powerAssert["default"].equal(component.validateValueAvailability(true, {
        a: false,
        newKey: false
      }), false, 'Should not be valid');
      _powerAssert["default"].equal(component.validateValueAvailability(true, {
        newKey: false
      }), false, 'Should not be valid');
      _powerAssert["default"].equal(component.validateValueAvailability(true, {}), true, 'Should be valid');
      _powerAssert["default"].equal(component.validateValueAvailability(false, {}), true, 'Should be valid');
      done();
    })["catch"](done);
  });
});