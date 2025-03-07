'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.splice.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.get-prototype-of.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _utils = require("../../../utils/utils");
var _Component = _interopRequireDefault(require("../component/Component"));
var _NestedDataComponent2 = _interopRequireDefault(require("../nesteddata/NestedDataComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NestedArrayComponent = /*#__PURE__*/function (_NestedDataComponent) {
  _inherits(NestedArrayComponent, _NestedDataComponent);
  var _super = _createSuper(NestedArrayComponent);
  function NestedArrayComponent() {
    _classCallCheck(this, NestedArrayComponent);
    return _super.apply(this, arguments);
  }
  _createClass(NestedArrayComponent, [{
    key: "componentContext",
    value: function componentContext(component) {
      return this.iteratableRows[component.rowIndex].data;
    }
  }, {
    key: "iteratableRows",
    get: function get() {
      throw new Error('Getter #iteratableRows() is not implemented');
    }
  }, {
    key: "rowIndex",
    get: function get() {
      return _get(_getPrototypeOf(NestedArrayComponent.prototype), "rowIndex", this);
    },
    set: function set(value) {
      this._rowIndex = value;
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(NestedArrayComponent.prototype), "init", this).call(this);
      this.prevHasAddButton = this.hasAddButton();
    }
  }, {
    key: "checkAddButtonChanged",
    value: function checkAddButtonChanged() {
      var isAddButton = this.hasAddButton();
      if (isAddButton !== this.prevHasAddButton) {
        this.prevHasAddButton = isAddButton;
        this.redraw();
      }
    }
  }, {
    key: "checkData",
    value: function checkData(data, flags, row) {
      data = data || this.rootValue;
      flags = flags || {};
      row = row || this.data;
      this.checkAddButtonChanged();
      return this.checkRows('checkData', data, flags, _Component["default"].prototype.checkData.call(this, data, flags, row));
    }
  }, {
    key: "checkRows",
    value: function checkRows(method, data, opts, defaultValue, silentCheck) {
      var _this = this;
      return this.iteratableRows.reduce(function (valid, row, rowIndex) {
        if (!(opts !== null && opts !== void 0 && opts.rowIndex) || (opts === null || opts === void 0 ? void 0 : opts.rowIndex) === rowIndex) {
          return _this.checkRow(method, data, opts, row.data, row.components, silentCheck) && valid;
        } else {
          return valid;
        }
      }, defaultValue);
    }
  }, {
    key: "checkRow",
    value: function checkRow(method, data, opts, row, components, silentCheck) {
      if (opts !== null && opts !== void 0 && opts.isolateRow) {
        silentCheck = true;
        opts.noRefresh = true;
      }
      var valid = _lodash["default"].reduce(components, function (valid, component) {
        return component[method](data, opts, row, silentCheck) && valid;
      }, true);
      if (opts !== null && opts !== void 0 && opts.noRefresh) {
        delete opts.noRefresh;
      }
      return valid;
    }
  }, {
    key: "hasAddButton",
    value: function hasAddButton() {
      var maxLength = _lodash["default"].get(this.component, 'validate.maxLength');
      var conditionalAddButton = _lodash["default"].get(this.component, 'conditionalAddButton');
      return !this.component.disableAddingRemovingRows && !this.options.readOnly && !this.disabled && this.fullMode && !this.options.preview && (!maxLength || this.iteratableRows.length < maxLength) && (!conditionalAddButton || this.evaluate(conditionalAddButton, {
        value: this.dataValue
      }, 'show'));
    }
  }, {
    key: "getComponent",
    value: function getComponent(path, fn, originalPath) {
      path = Array.isArray(path) ? path : [path];
      var key = path.shift();
      var remainingPath = path;
      var result = [];
      var possibleComp = null;
      var comp = null;
      var rowIndex = null;
      if (_lodash["default"].isNumber(key)) {
        rowIndex = key;
        key = remainingPath.shift();
      }
      if (!_lodash["default"].isString(key)) {
        return result;
      }
      this.everyComponent(function (component, components) {
        if (component.component.key === key) {
          possibleComp = component;
          if (remainingPath.length > 0 && 'getComponent' in component) {
            comp = component.getComponent(remainingPath, fn, originalPath);
          } else if (fn) {
            fn(component, components);
          }
          result = rowIndex !== null ? comp : result.concat(comp || possibleComp);
        }
      }, rowIndex);
      if ((!result || result.length === 0) && possibleComp) {
        result = rowIndex !== null ? possibleComp : [possibleComp];
      }
      return result;
    }
  }, {
    key: "everyComponent",
    value: function everyComponent(fn, rowIndex, options) {
      var _options;
      if (_lodash["default"].isObject(rowIndex)) {
        options = rowIndex;
        rowIndex = null;
      }
      if ((_options = options) !== null && _options !== void 0 && _options.email) {
        return;
      }
      var components = this.getComponents(rowIndex);
      _lodash["default"].each(components, function (component, index) {
        if (fn(component, components, index) === false) {
          return false;
        }
        if (typeof component.everyComponent === 'function') {
          if (component.everyComponent(fn, options) === false) {
            return false;
          }
        }
      });
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value, options) {
      if (options !== null && options !== void 0 && options.email) {
        var _this$component$compo;
        var result = "\n        <table border=\"1\" style=\"width:100%\">\n          <thead>\n            <tr>\n      ";
        (_this$component$compo = this.component.components) === null || _this$component$compo === void 0 ? void 0 : _this$component$compo.forEach(function (component) {
          var label = component.label || component.key;
          result += "<th style=\"padding: 5px 10px;\">".concat(label, "</th>");
        });
        result += "\n          </tr>\n        </thead>\n        <tbody>\n      ";
        this.iteratableRows.forEach(function (_ref) {
          var components = _ref.components;
          result += '<tr>';
          _lodash["default"].each(components, function (component) {
            result += '<td style="padding:5px 10px;">';
            if (component.isInputComponent && component.visible && !component.skipInEmail) {
              result += component.getView(component.dataValue, options);
            }
            result += '</td>';
          });
          result += '</tr>';
        });
        result += "\n          </tbody>\n        </table>\n      ";
        return result;
      }
      if (!value || !value.length) {
        return '';
      }
      return _get(_getPrototypeOf(NestedArrayComponent.prototype), "getValueAsString", this).call(this, value, options);
    }
  }, {
    key: "getComponents",
    value: function getComponents(rowIndex) {
      if (rowIndex !== undefined) {
        if (!this.iteratableRows[rowIndex]) {
          return [];
        }
        return this.iteratableRows[rowIndex].components;
      }
      return _get(_getPrototypeOf(NestedArrayComponent.prototype), "getComponents", this).call(this);
    }
  }, {
    key: "removeSubmissionMetadataRow",
    value: function removeSubmissionMetadataRow(index) {
      var componentMetadata = _lodash["default"].get(this.root, "submission.metadata.selectData.".concat(this.path), null);
      if (_lodash["default"].isArray(componentMetadata)) {
        componentMetadata.splice(index, 1);
      }
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }
      return _NestedDataComponent2["default"].schema.apply(_NestedDataComponent2["default"], [{
        disableAddingRemovingRows: false
      }].concat(extend));
    }
  }, {
    key: "savedValueTypes",
    value: function savedValueTypes() {
      return [_utils.componentValueTypes.array];
    }
  }]);
  return NestedArrayComponent;
}(_NestedDataComponent2["default"]);
exports["default"] = NestedArrayComponent;