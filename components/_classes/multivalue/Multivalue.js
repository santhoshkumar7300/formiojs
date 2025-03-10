"use strict";

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
require("core-js/modules/es.reflect.set.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.get-prototype-of.js");
var _Field2 = _interopRequireDefault(require("../field/Field"));
var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var Multivalue = /*#__PURE__*/function (_Field) {
  _inherits(Multivalue, _Field);
  var _super = _createSuper(Multivalue);
  function Multivalue() {
    _classCallCheck(this, Multivalue);
    return _super.apply(this, arguments);
  }
  _createClass(Multivalue, [{
    key: "dataValue",
    get: function get() {
      var parent = _get(_getPrototypeOf(Multivalue.prototype), "dataValue", this);
      if (!parent && this.component.multiple) {
        return [];
      }
      return parent;
    },
    set: function set(value) {
      _set(_getPrototypeOf(Multivalue.prototype), "dataValue", value, this, true);
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var value = _get(_getPrototypeOf(Multivalue.prototype), "defaultValue", this);
      if (this.component.multiple) {
        if (_lodash["default"].isArray(value)) {
          value = !value.length ? [_get(_getPrototypeOf(Multivalue.prototype), "emptyValue", this)] : value;
        } else {
          value = [value];
        }
      }
      return value;
    }
  }, {
    key: "addAnother",
    get: function get() {
      return this.t(this.component.addAnother || 'Add Another');
    }
  }, {
    key: "useWrapper",
    value: function useWrapper() {
      return this.component.hasOwnProperty('multiple') && this.component.multiple;
    }
  }, {
    key: "render",
    value: function render() {
      // If single value field.
      if (!this.useWrapper()) {
        return _get(_getPrototypeOf(Multivalue.prototype), "render", this).call(this, "<div ref=\"element\">\n          ".concat(this.renderElement(this.component.type !== 'hidden' ? this.dataValue : ''), "\n        </div>"));
      }

      // Make sure dataValue is in the correct array format.
      var dataValue = this.dataValue;
      if (!Array.isArray(dataValue)) {
        dataValue = dataValue ? [dataValue] : [];
      }

      // If multiple value field.
      return _get(_getPrototypeOf(Multivalue.prototype), "render", this).call(this, this.renderTemplate('multiValueTable', {
        rows: dataValue.map(this.renderRow.bind(this)).join(''),
        disabled: this.disabled,
        addAnother: this.addAnother
      }));
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      return '';
    }
  }, {
    key: "renderRow",
    value: function renderRow(value, index) {
      return this.renderTemplate('multiValueRow', {
        index: index,
        disabled: this.disabled,
        element: "".concat(this.renderElement(value, index))
      });
    }
  }, {
    key: "attach",
    value: function attach(dom) {
      var _this = this;
      var superAttach = _get(_getPrototypeOf(Multivalue.prototype), "attach", this).call(this, dom);
      this.loadRefs(dom, {
        addButton: 'multiple',
        input: 'multiple',
        removeRow: 'multiple',
        mask: 'multiple',
        select: 'multiple'
      });
      var promises = [];
      this.refs.input.forEach(function (element, index) {
        promises.push(_this.attachElement.call(_this, element, index));
      });
      if (!this.component.multiple) {
        return _nativePromiseOnly["default"].all(promises);
      }
      this.refs.removeRow.forEach(function (removeButton, index) {
        _this.addEventListener(removeButton, 'click', function (event) {
          event.preventDefault();
          _this.removeValue(index);
        });
      });

      // If single value field.
      this.refs.addButton.forEach(function (addButton) {
        _this.addEventListener(addButton, 'click', function (event) {
          event.preventDefault();
          _this.addValue();
        });
      });
      return superAttach.then(function () {
        return _nativePromiseOnly["default"].all(promises);
      });
    }
  }, {
    key: "detach",
    value: function detach() {
      if (this.refs.input && this.refs.input.length) {
        this.refs.input.forEach(function (input) {
          if (input.mask) {
            input.mask.destroy ? input.mask.destroy() : input.mask.remove();
          }
          if (input.widget) {
            input.widget.destroy();
          }
        });
      }
      if (this.refs.mask && this.refs.mask.length) {
        this.refs.mask.forEach(function (input) {
          if (input.mask) {
            input.mask.destroy ? input.mask.destroy() : input.mask.remove();
          }
        });
      }
      _get(_getPrototypeOf(Multivalue.prototype), "detach", this).call(this);
    }

    /**
     * Attach inputs to the element.
     *
     * @param element
     * @param index
     */
  }, {
    key: "attachElement",
    value: function attachElement(element, index) {
      var _this2 = this;
      this.addEventListener(element, this.inputInfo.changeEvent, function () {
        // Delay update slightly to give input mask a chance to run.
        var textCase = _lodash["default"].get(_this2.component, 'case', 'mixed');
        if (textCase !== 'mixed') {
          var selectionStart = element.selectionStart,
            selectionEnd = element.selectionEnd;
          if (textCase === 'uppercase' && element.value) {
            element.value = element.value.toUpperCase();
          }
          if (textCase === 'lowercase' && element.value) {
            element.value = element.value.toLowerCase();
          }
          if (element.selectionStart && element.selectionEnd) {
            element.selectionStart = selectionStart;
            element.selectionEnd = selectionEnd;
          }
        }
        try {
          _this2.saveCaretPosition(element, index);
        } catch (err) {
          console.warn('An error occurred while trying to save caret position', err);
        }

        // If a mask is present, delay the update to allow mask to update first.
        if (element.mask) {
          setTimeout(function () {
            return _this2.updateValue(null, {
              modified: _this2.component.type !== 'hidden'
            }, index);
          }, 1);
        } else {
          return _this2.updateValue(null, {
            modified: _this2.component.type !== 'hidden'
          }, index);
        }
      });
      if (!this.attachMultiMask(index)) {
        var applyMask = function applyMask() {
          _this2.setInputMask(element);
          var valueMask = _this2.component.inputMask;
          var displayMask = _this2.component.displayMask;
          if (valueMask && displayMask && displayMask !== valueMask && _this2.refs.valueMaskInput) {
            _this2.setInputMask(_this2.refs.valueMaskInput, valueMask);
          }
        };
        if (this.inputInfo.changeEvent === 'blur') {
          this.addEventListener(element, this.inputInfo.changeEvent, function () {
            var _document$querySelect;
            applyMask();
            _this2.dataValue = _this2.refs.input[0].value;
            var submitBtnDisabled = (_document$querySelect = document.querySelector('[name="data[submit]"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.disabled;
            submitBtnDisabled = true;
            if (_this2.checkComponentValidity()) {
              _this2.updateComponentValue(_this2.refs.input[0].value);
              submitBtnDisabled = false;
            }
          });
        } else {
          applyMask();
        }
      }
    }
  }, {
    key: "onSelectMaskHandler",
    value: function onSelectMaskHandler(event) {
      this.updateMask(event.target.maskInput, this.getMaskPattern(event.target.value));
    }
  }, {
    key: "getMaskPattern",
    value: function getMaskPattern(maskName) {
      if (!this.multiMasks) {
        this.multiMasks = {};
      }
      if (this.multiMasks[maskName]) {
        return this.multiMasks[maskName];
      }
      var mask = this.component.inputMasks.find(function (inputMask) {
        return inputMask.label === maskName;
      });
      this.multiMasks[maskName] = mask ? mask.mask : this.component.inputMasks[0].mask;
      return this.multiMasks[maskName];
    }
  }, {
    key: "attachMultiMask",
    value: function attachMultiMask(index) {
      if (!(this.isMultipleMasksField && this.component.inputMasks.length && this.refs.input.length)) {
        return false;
      }
      var maskSelect = this.refs.select[index];
      maskSelect.onchange = this.onSelectMaskHandler.bind(this);
      maskSelect.maskInput = this.refs.mask[index];
      this.setInputMask(maskSelect.maskInput, this.component.inputMasks[0].mask);
      return true;
    }
  }, {
    key: "updateMask",
    value: function updateMask(input, mask) {
      if (!mask) {
        return;
      }
      this.setInputMask(input, mask, !this.component.placeholder);
      this.updateValue();
    }

    /**
     * Adds a new empty value to the data array.
     */
  }, {
    key: "addNewValue",
    value: function addNewValue(value) {
      if (value === undefined) {
        value = this.component.defaultValue ? this.component.defaultValue : this.emptyValue;
        // If default is an empty aray, default back to empty value.
        if (Array.isArray(value) && value.length === 0) {
          value = this.emptyValue;
        }
      }
      var dataValue = this.dataValue || [];
      if (!Array.isArray(dataValue)) {
        dataValue = [dataValue];
      }
      if (Array.isArray(value)) {
        dataValue = dataValue.concat(value);
      } else {
        dataValue.push(value);
      }
      this.dataValue = dataValue;
    }

    /**
     * Adds a new empty value to the data array, and add a new row to contain it.
     */
  }, {
    key: "addValue",
    value: function addValue() {
      this.addNewValue();
      this.redraw();
      this.checkConditions();
      if (!this.isEmpty(this.dataValue)) {
        this.restoreValue();
      }
      if (this.root) {
        this.root.onChange();
      }
    }
  }]);
  return Multivalue;
}(_Field2["default"]);
exports["default"] = Multivalue;