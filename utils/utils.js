"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  evaluate: true,
  getRandomComponentId: true,
  getPropertyValue: true,
  getElementRect: true,
  boolValue: true,
  isMongoId: true,
  checkCalculated: true,
  checkSimpleConditional: true,
  getComponentActualValue: true,
  checkCustomConditional: true,
  checkJsonConditional: true,
  checkCondition: true,
  checkTrigger: true,
  setActionProperty: true,
  unescapeHTML: true,
  convertStringToHTMLElement: true,
  uniqueName: true,
  guid: true,
  getDateSetting: true,
  isValidDate: true,
  currentTimezone: true,
  offsetDate: true,
  zonesLoaded: true,
  shouldLoadZones: true,
  loadZones: true,
  momentDate: true,
  formatDate: true,
  formatOffset: true,
  getLocaleDateFormatInfo: true,
  convertFormatToFlatpickr: true,
  convertFormatToMoment: true,
  convertFormatToMask: true,
  getInputMask: true,
  unmaskValue: true,
  matchInputMask: true,
  getNumberSeparators: true,
  getNumberDecimalLimit: true,
  getCurrencyAffixes: true,
  fieldData: true,
  delay: true,
  iterateKey: true,
  uniqueKey: true,
  bootstrapVersion: true,
  unfold: true,
  firstNonNil: true,
  withSwitch: true,
  observeOverload: true,
  getContextComponents: true,
  getContextButtons: true,
  translateHTMLTemplate: true,
  sanitize: true,
  fastCloneDeep: true,
  interpolate: true,
  isInputComponent: true,
  getArrayFromComponentPath: true,
  hasInvalidComponent: true,
  getStringFromComponentPath: true,
  round: true,
  getIEBrowserVersion: true,
  getBrowserInfo: true,
  getComponentPathWithoutIndicies: true,
  getComponentPath: true,
  getDataParentComponent: true,
  isPromise: true,
  isInsideScopingComponent: true,
  getFocusableElements: true,
  componentValueTypes: true,
  getComponentSavedTypes: true,
  getItemTemplateKeys: true,
  isSelectResourceWithObjectValue: true,
  _: true,
  jsonLogic: true,
  moment: true,
  Evaluator: true,
  ConditionOperators: true
};
Object.defineProperty(exports, "ConditionOperators", {
  enumerable: true,
  get: function get() {
    return _conditionOperators["default"];
  }
});
Object.defineProperty(exports, "Evaluator", {
  enumerable: true,
  get: function get() {
    return _Evaluator["default"];
  }
});
Object.defineProperty(exports, "_", {
  enumerable: true,
  get: function get() {
    return _lodash["default"];
  }
});
exports.boolValue = boolValue;
exports.bootstrapVersion = bootstrapVersion;
exports.checkCalculated = checkCalculated;
exports.checkCondition = checkCondition;
exports.checkCustomConditional = checkCustomConditional;
exports.checkJsonConditional = checkJsonConditional;
exports.checkSimpleConditional = checkSimpleConditional;
exports.checkTrigger = checkTrigger;
exports.componentValueTypes = void 0;
exports.convertFormatToFlatpickr = convertFormatToFlatpickr;
exports.convertFormatToMask = convertFormatToMask;
exports.convertFormatToMoment = convertFormatToMoment;
exports.convertStringToHTMLElement = convertStringToHTMLElement;
exports.currentTimezone = currentTimezone;
exports.delay = delay;
exports.evaluate = evaluate;
exports.fastCloneDeep = fastCloneDeep;
exports.fieldData = fieldData;
exports.firstNonNil = void 0;
exports.formatDate = formatDate;
exports.formatOffset = formatOffset;
exports.getArrayFromComponentPath = getArrayFromComponentPath;
exports.getBrowserInfo = getBrowserInfo;
exports.getComponentActualValue = getComponentActualValue;
exports.getComponentPath = getComponentPath;
exports.getComponentPathWithoutIndicies = getComponentPathWithoutIndicies;
exports.getComponentSavedTypes = getComponentSavedTypes;
exports.getContextButtons = getContextButtons;
exports.getContextComponents = getContextComponents;
exports.getCurrencyAffixes = getCurrencyAffixes;
exports.getDataParentComponent = getDataParentComponent;
exports.getDateSetting = getDateSetting;
exports.getElementRect = getElementRect;
exports.getFocusableElements = getFocusableElements;
exports.getIEBrowserVersion = getIEBrowserVersion;
exports.getInputMask = getInputMask;
exports.getItemTemplateKeys = getItemTemplateKeys;
exports.getLocaleDateFormatInfo = getLocaleDateFormatInfo;
exports.getNumberDecimalLimit = getNumberDecimalLimit;
exports.getNumberSeparators = getNumberSeparators;
exports.getPropertyValue = getPropertyValue;
exports.getRandomComponentId = getRandomComponentId;
exports.getStringFromComponentPath = getStringFromComponentPath;
exports.guid = guid;
exports.hasInvalidComponent = hasInvalidComponent;
exports.interpolate = void 0;
exports.isInputComponent = isInputComponent;
exports.isInsideScopingComponent = isInsideScopingComponent;
exports.isMongoId = isMongoId;
exports.isPromise = isPromise;
exports.isSelectResourceWithObjectValue = isSelectResourceWithObjectValue;
exports.isValidDate = isValidDate;
exports.iterateKey = iterateKey;
Object.defineProperty(exports, "jsonLogic", {
  enumerable: true,
  get: function get() {
    return _jsonLogicJs["default"];
  }
});
exports.loadZones = loadZones;
exports.matchInputMask = matchInputMask;
Object.defineProperty(exports, "moment", {
  enumerable: true,
  get: function get() {
    return _momentTimezone["default"];
  }
});
exports.momentDate = momentDate;
exports.observeOverload = observeOverload;
exports.offsetDate = offsetDate;
exports.round = round;
exports.sanitize = sanitize;
exports.setActionProperty = setActionProperty;
exports.shouldLoadZones = shouldLoadZones;
exports.translateHTMLTemplate = translateHTMLTemplate;
exports.unescapeHTML = unescapeHTML;
exports.unfold = unfold;
exports.uniqueKey = uniqueKey;
exports.uniqueName = uniqueName;
exports.unmaskValue = unmaskValue;
exports.withSwitch = withSwitch;
exports.zonesLoaded = zonesLoaded;
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.number.to-fixed.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _fetchPonyfill2 = _interopRequireDefault(require("fetch-ponyfill"));
var _jsonLogicJs = _interopRequireDefault(require("json-logic-js"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone/moment-timezone"));
var _jstimezonedetect = _interopRequireDefault(require("jstimezonedetect"));
var _operators = require("./jsonlogic/operators");
var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));
var _dompurify = _interopRequireDefault(require("dompurify"));
var _formUtils = require("./formUtils");
Object.keys(_formUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formUtils[key];
    }
  });
});
var _Evaluator = _interopRequireDefault(require("./Evaluator"));
var _conditionOperators = _interopRequireDefault(require("./conditionOperators"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var interpolate = _Evaluator["default"].interpolate;
exports.interpolate = interpolate;
var _fetchPonyfill = (0, _fetchPonyfill2["default"])({
    Promise: _nativePromiseOnly["default"]
  }),
  fetch = _fetchPonyfill.fetch;
// Configure JsonLogic
_operators.lodashOperators.forEach(function (name) {
  return _jsonLogicJs["default"].add_operation("_".concat(name), _lodash["default"][name]);
});

// Retrieve Any Date
_jsonLogicJs["default"].add_operation('getDate', function (date) {
  return (0, _momentTimezone["default"])(date).toISOString();
});

// Set Relative Minimum Date
_jsonLogicJs["default"].add_operation('relativeMinDate', function (relativeMinDate) {
  return (0, _momentTimezone["default"])().subtract(relativeMinDate, 'days').toISOString();
});

// Set Relative Maximum Date
_jsonLogicJs["default"].add_operation('relativeMaxDate', function (relativeMaxDate) {
  return (0, _momentTimezone["default"])().add(relativeMaxDate, 'days').toISOString();
});
function setPathToComponentAndPerentSchema(component) {
  component.path = getComponentPath(component);
  var dataParent = getDataParentComponent(component);
  if (dataParent && _typeof(dataParent) === 'object') {
    dataParent.path = getComponentPath(dataParent);
  }
}

/**
 * Evaluate a method.
 *
 * @param func
 * @param args
 * @return {*}
 */
function evaluate(func, args, ret, tokenize) {
  var returnVal = null;
  var component = args.component ? args.component : {
    key: 'unknown'
  };
  if (!args.form && args.instance) {
    args.form = _lodash["default"].get(args.instance, 'root._form', {});
  }
  var componentKey = component.key;
  if (typeof func === 'string') {
    if (ret) {
      func += ";return ".concat(ret);
    }
    if (tokenize) {
      // Replace all {{ }} references with actual data.
      func = func.replace(/({{\s+(.*)\s+}})/, function (match, $1, $2) {
        if ($2.indexOf('data.') === 0) {
          return _lodash["default"].get(args.data, $2.replace('data.', ''));
        } else if ($2.indexOf('row.') === 0) {
          return _lodash["default"].get(args.row, $2.replace('row.', ''));
        }

        // Support legacy...
        return _lodash["default"].get(args.data, $2);
      });
    }
    try {
      func = _Evaluator["default"].evaluator(func, args);
      args = _lodash["default"].values(args);
    } catch (err) {
      console.warn("An error occured within the custom function for ".concat(componentKey), err);
      returnVal = null;
      func = false;
    }
  }
  if (typeof func === 'function') {
    try {
      returnVal = _Evaluator["default"].evaluate(func, args);
    } catch (err) {
      returnVal = null;
      console.warn("An error occured within custom function for ".concat(componentKey), err);
    }
  } else if (_typeof(func) === 'object') {
    try {
      returnVal = _jsonLogicJs["default"].apply(func, args);
    } catch (err) {
      returnVal = null;
      console.warn("An error occured within custom function for ".concat(componentKey), err);
    }
  } else if (func) {
    console.warn("Unknown function type for ".concat(componentKey));
  }
  return returnVal;
}
function getRandomComponentId() {
  return "e".concat(Math.random().toString(36).substring(7));
}

/**
 * Get a property value of an element.
 *
 * @param style
 * @param prop
 * @return {number}
 */
function getPropertyValue(style, prop) {
  var value = style.getPropertyValue(prop);
  value = value ? value.replace(/[^0-9.]/g, '') : '0';
  return parseFloat(value);
}

/**
 * Get an elements bounding rectagle.
 *
 * @param element
 * @return {{x: string, y: string, width: string, height: string}}
 */
function getElementRect(element) {
  var style = window.getComputedStyle(element, null);
  return {
    x: getPropertyValue(style, 'left'),
    y: getPropertyValue(style, 'top'),
    width: getPropertyValue(style, 'width'),
    height: getPropertyValue(style, 'height')
  };
}

/**
 * Determines the boolean value of a setting.
 *
 * @param value
 * @return {boolean}
 */
function boolValue(value) {
  if (_lodash["default"].isBoolean(value)) {
    return value;
  } else if (_lodash["default"].isString(value)) {
    return value.toLowerCase() === 'true';
  } else {
    return !!value;
  }
}

/**
 * Check to see if an ID is a mongoID.
 * @param text
 * @return {Array|{index: number, input: string}|Boolean|*}
 */
function isMongoId(text) {
  return text.toString().match(/^[0-9a-fA-F]{24}$/);
}

/**
 * Checks the calculated value for a provided component and data.
 *
 * @param {Object} component
 *   The component to check for the calculated value.
 * @param {Object} submission
 *   A submission object.
 * @param data
 *   The full submission data.
 */
function checkCalculated(component, submission, rowData) {
  // Process calculated value stuff if present.
  if (component.calculateValue) {
    _lodash["default"].set(rowData, component.key, evaluate(component.calculateValue, {
      value: undefined,
      data: submission ? submission.data : rowData,
      row: rowData,
      util: this,
      component: component
    }, 'value'));
  }
}

/**
 * Check if a simple conditional evaluates to true.
 *
 * @param condition
 * @param condition
 * @param row
 * @param data
 * @param instance
 * @returns {boolean}
 */
function checkSimpleConditional(component, condition, row, data, instance) {
  if (condition.when) {
    var value = getComponentActualValue(condition.when, data, row);
    var eq = String(condition.eq);
    var show = String(condition.show);

    // Special check for selectboxes component.
    if (_lodash["default"].isObject(value) && _lodash["default"].has(value, condition.eq)) {
      return String(value[condition.eq]) === show;
    }
    // FOR-179 - Check for multiple values.
    if (Array.isArray(value) && value.map(String).includes(eq)) {
      return show === 'true';
    }
    return String(value) === eq === (show === 'true');
  } else {
    var _condition$conditions = condition.conditions,
      conditions = _condition$conditions === void 0 ? [] : _condition$conditions,
      _condition$conjunctio = condition.conjunction,
      conjunction = _condition$conjunctio === void 0 ? 'all' : _condition$conjunctio,
      _condition$show = condition.show,
      _show = _condition$show === void 0 ? true : _condition$show;
    if (!conditions.length) {
      return true;
    }
    var conditionsResult = _lodash["default"].map(conditions, function (cond) {
      var comparedValue = cond.value,
        operator = cond.operator,
        conditionComponentPath = cond.component;
      if (!conditionComponentPath) {
        return true;
      }
      var value = getComponentActualValue(conditionComponentPath, data, row);
      var СonditionOperator = _conditionOperators["default"][operator];
      return СonditionOperator ? new СonditionOperator().getResult({
        value: value,
        comparedValue: comparedValue,
        instance: instance,
        component: component,
        conditionComponentPath: conditionComponentPath
      }) : true;
    });
    var result = false;
    switch (conjunction) {
      case 'any':
        result = _lodash["default"].some(conditionsResult, function (res) {
          return !!res;
        });
        break;
      default:
        result = _lodash["default"].every(conditionsResult, function (res) {
          return !!res;
        });
    }
    return _show ? result : !result;
  }
}
function getComponentActualValue(compPath, data, row) {
  var value = null;
  if (data) {
    value = (0, _formUtils.getValue)({
      data: data
    }, compPath);
  }
  if (row && _lodash["default"].isNil(value)) {
    value = (0, _formUtils.getValue)({
      data: row
    }, compPath);
  }

  // FOR-400 - Fix issue where falsey values were being evaluated as show=true
  if (_lodash["default"].isNil(value) || _lodash["default"].isObject(value) && _lodash["default"].isEmpty(value)) {
    value = '';
  }
  return value;
}

/**
 * Check custom javascript conditional.
 *
 * @param component
 * @param custom
 * @param row
 * @param data
 * @returns {*}
 */
function checkCustomConditional(component, custom, row, data, form, variable, onError, instance) {
  if (typeof custom === 'string') {
    custom = "var ".concat(variable, " = true; ").concat(custom, "; return ").concat(variable, ";");
  }
  var value = instance && instance.evaluate ? instance.evaluate(custom, {
    row: row,
    data: data,
    form: form
  }) : evaluate(custom, {
    row: row,
    data: data,
    form: form
  });
  if (value === null) {
    return onError;
  }
  return value;
}
function checkJsonConditional(component, json, row, data, form, onError) {
  try {
    return _jsonLogicJs["default"].apply(json, {
      data: data,
      row: row,
      form: form,
      _: _lodash["default"]
    });
  } catch (err) {
    console.warn("An error occurred in jsonLogic advanced condition for ".concat(component.key), err);
    return onError;
  }
}
function getRow(component, row, instance, conditional) {
  var _condition$when;
  var condition = conditional || component.conditional;
  // If no component's instance passed (happens only in 6.x server), calculate its path based on the schema
  if (!instance) {
    instance = _lodash["default"].cloneDeep(component);
    setPathToComponentAndPerentSchema(instance);
  }
  var dataParent = getDataParentComponent(instance);
  var parentPath = dataParent ? getComponentPath(dataParent) : null;
  var isTriggerCondtionComponentPath = condition.when || !condition.conditions ? (_condition$when = condition.when) === null || _condition$when === void 0 ? void 0 : _condition$when.startsWith(parentPath) : _lodash["default"].some(condition.conditions, function (cond) {
    return cond.component.startsWith(parentPath);
  });
  if (dataParent && isTriggerCondtionComponentPath) {
    var newRow = {};
    _lodash["default"].set(newRow, parentPath, row);
    row = newRow;
  }
  return row;
}

/**
 * Checks the conditions for a provided component and data.
 *
 * @param component
 *   The component to check for the condition.
 * @param row
 *   The data within a row
 * @param data
 *   The full submission data.
 *
 * @returns {boolean}
 */
function checkCondition(component, row, data, form, instance) {
  var customConditional = component.customConditional,
    conditional = component.conditional;
  if (customConditional) {
    return checkCustomConditional(component, customConditional, row, data, form, 'show', true, instance);
  } else if (conditional && (conditional.when || _lodash["default"].some(conditional.conditions || [], function (condition) {
    return condition.component && condition.operator;
  }))) {
    row = getRow(component, row, instance);
    return checkSimpleConditional(component, conditional, row, data, instance);
  } else if (conditional && conditional.json) {
    return checkJsonConditional(component, conditional.json, row, data, form, true);
  }

  // Default to show.
  return true;
}

/**
 * Test a trigger on a component.
 *
 * @param component
 * @param action
 * @param data
 * @param row
 * @returns {mixed}
 */
function checkTrigger(component, trigger, row, data, form, instance) {
  // If trigger is empty, don't fire it
  if (!trigger[trigger.type]) {
    return false;
  }
  switch (trigger.type) {
    case 'simple':
      row = getRow(component, row, instance, trigger.simple);
      return checkSimpleConditional(component, trigger.simple, row, data, instance);
    case 'javascript':
      return checkCustomConditional(component, trigger.javascript, row, data, form, 'result', false, instance);
    case 'json':
      return checkJsonConditional(component, trigger.json, row, data, form, false);
  }
  // If none of the types matched, don't fire the trigger.
  return false;
}
function setActionProperty(component, action, result, row, data, instance) {
  var property = action.property.value;
  switch (action.property.type) {
    case 'boolean':
      {
        var currentValue = _lodash["default"].get(component, property, false).toString();
        var newValue = action.state.toString();
        if (currentValue !== newValue) {
          _lodash["default"].set(component, property, newValue === 'true');
        }
        break;
      }
    case 'string':
      {
        var evalData = {
          data: data,
          row: row,
          component: component,
          result: result
        };
        var textValue = action.property.component ? action[action.property.component] : action.text;
        var _currentValue = _lodash["default"].get(component, property, '');
        var _newValue = instance && instance.interpolate ? instance.interpolate(textValue, evalData) : _Evaluator["default"].interpolate(textValue, evalData);
        if (_newValue !== _currentValue) {
          _lodash["default"].set(component, property, _newValue);
        }
        break;
      }
  }
  return component;
}

/**
 * Unescape HTML characters like &lt, &gt, &amp and etc.
 * @param str
 * @returns {string}
 */
function unescapeHTML(str) {
  if (typeof window === 'undefined' || !('DOMParser' in window)) {
    return str;
  }
  var doc = new window.DOMParser().parseFromString(str, 'text/html');
  return doc.documentElement.textContent;
}

/**
 * Make HTML element from string
 * @param str
 * @param selector
 * @returns {HTMLElement}
 */

function convertStringToHTMLElement(str, selector) {
  var doc = new window.DOMParser().parseFromString(str, 'text/html');
  return doc.body.querySelector(selector);
}

/**
 * Make a filename guaranteed to be unique.
 * @param name
 * @param template
 * @param evalContext
 * @returns {string}
 */
function uniqueName(name, template, evalContext) {
  template = template || '{{fileName}}-{{guid}}';
  //include guid in template anyway, to prevent overwriting issue if filename matches existing file
  if (!template.includes('{{guid}}')) {
    template = "".concat(template, "-{{guid}}");
  }
  var parts = name.split('.');
  var fileName = parts.slice(0, parts.length - 1).join('.');
  var extension = parts.length > 1 ? ".".concat(_lodash["default"].last(parts)) : '';
  //allow only 100 characters from original name to avoid issues with filename length restrictions
  fileName = fileName.substr(0, 100);
  evalContext = Object.assign(evalContext || {}, {
    fileName: fileName,
    guid: guid()
  });
  //only letters, numbers, dots, dashes, underscores and spaces are allowed. Anything else will be replaced with dash
  var uniqueName = "".concat(_Evaluator["default"].interpolate(template, evalContext)).concat(extension).replace(/[^0-9a-zA-Z.\-_ ]/g, '-');
  return uniqueName;
}
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/**
 * Return a translated date setting.
 *
 * @param date
 * @return {(null|Date)}
 */
function getDateSetting(date) {
  if (_lodash["default"].isNil(date) || _lodash["default"].isNaN(date) || date === '') {
    return null;
  }
  if (date instanceof Date) {
    return date;
  } else if (typeof date.toDate === 'function') {
    return date.isValid() ? date.toDate() : null;
  }
  var dateSetting = typeof date !== 'string' || date.indexOf('moment(') === -1 ? (0, _momentTimezone["default"])(date) : null;
  if (dateSetting && dateSetting.isValid()) {
    return dateSetting.toDate();
  }
  dateSetting = null;
  try {
    var value = _Evaluator["default"].evaluator("return ".concat(date, ";"), 'moment')(_momentTimezone["default"]);
    if (typeof value === 'string') {
      dateSetting = (0, _momentTimezone["default"])(value);
    } else if (typeof value.toDate === 'function') {
      dateSetting = (0, _momentTimezone["default"])(value.toDate().toUTCString());
    } else if (value instanceof Date) {
      dateSetting = (0, _momentTimezone["default"])(value);
    }
  } catch (e) {
    return null;
  }
  if (!dateSetting) {
    return null;
  }

  // Ensure this is a date.
  if (!dateSetting.isValid()) {
    return null;
  }
  return dateSetting.toDate();
}
function isValidDate(date) {
  return _lodash["default"].isDate(date) && !_lodash["default"].isNaN(date.getDate());
}

/**
 * Get the current timezone string.
 *
 * @return {string}
 */
function currentTimezone() {
  if (_momentTimezone["default"].currentTimezone) {
    return _momentTimezone["default"].currentTimezone;
  }
  _momentTimezone["default"].currentTimezone = _jstimezonedetect["default"].determine().name();
  return _momentTimezone["default"].currentTimezone;
}

/**
 * Get an offset date provided a date object and timezone object.
 *
 * @param date
 * @param timezone
 * @return {Date}
 */
function offsetDate(date, timezone) {
  if (timezone === 'UTC') {
    return {
      date: new Date(date.getTime() + date.getTimezoneOffset() * 60000),
      abbr: 'UTC'
    };
  }
  var dateMoment = (0, _momentTimezone["default"])(date).tz(timezone);
  return {
    date: new Date(date.getTime() + (dateMoment.utcOffset() + date.getTimezoneOffset()) * 60000),
    abbr: dateMoment.format('z')
  };
}

/**
 * Returns if the zones are loaded.
 *
 * @return {boolean}
 */
function zonesLoaded() {
  return _momentTimezone["default"].zonesLoaded;
}

/**
 * Returns if we should load the zones.
 *
 * @param timezone
 * @return {boolean}
 */
function shouldLoadZones(timezone) {
  if (timezone === currentTimezone() || timezone === 'UTC') {
    return false;
  }
  return true;
}

/**
 * Externally load the timezone data.
 *
 * @return {Promise<any> | *}
 */
function loadZones(url, timezone) {
  if (timezone && !shouldLoadZones(timezone)) {
    // Return non-resolving promise.
    return new _nativePromiseOnly["default"](_lodash["default"].noop);
  }
  if (_momentTimezone["default"].zonesPromise) {
    return _momentTimezone["default"].zonesPromise;
  }
  return _momentTimezone["default"].zonesPromise = fetch(url).then(function (resp) {
    return resp.json().then(function (zones) {
      _momentTimezone["default"].tz.load(zones);
      _momentTimezone["default"].zonesLoaded = true;

      // Trigger a global event that the timezones have finished loading.
      if (document && document.createEvent && document.body && document.body.dispatchEvent) {
        var event = document.createEvent('Event');
        event.initEvent('zonesLoaded', true, true);
        document.body.dispatchEvent(event);
      }
    });
  });
}

/**
 * Get the moment date object for translating dates with timezones.
 *
 * @param value
 * @param format
 * @param timezone
 * @return {*}
 */
function momentDate(value, format, timezone) {
  var momentDate = (0, _momentTimezone["default"])(value);
  if (!timezone) {
    return momentDate;
  }
  if (timezone === 'UTC') {
    timezone = 'Etc/UTC';
  }
  if ((timezone !== currentTimezone() || format && format.match(/\s(z$|z\s)/)) && _momentTimezone["default"].zonesLoaded) {
    return momentDate.tz(timezone);
  }
  return momentDate;
}

/**
 * Format a date provided a value, format, and timezone object.
 *
 * @param value
 * @param format
 * @param timezone
 * @return {string}
 */
function formatDate(timezonesUrl, value, format, timezone, flatPickrInputFormat) {
  var momentDate = (0, _momentTimezone["default"])(value, flatPickrInputFormat || undefined);
  if (timezone === currentTimezone()) {
    // See if our format contains a "z" timezone character.
    if (format.match(/\s(z$|z\s)/)) {
      loadZones(timezonesUrl);
      if (_momentTimezone["default"].zonesLoaded) {
        return momentDate.tz(timezone).format(convertFormatToMoment(format));
      } else {
        return momentDate.format(convertFormatToMoment(format.replace(/\s(z$|z\s)/, '')));
      }
    }

    // Return the standard format.
    return momentDate.format(convertFormatToMoment(format));
  }
  if (timezone === 'UTC') {
    var offset = offsetDate(momentDate.toDate(), 'UTC');
    return "".concat((0, _momentTimezone["default"])(offset.date).format(convertFormatToMoment(format)), " UTC");
  }

  // Load the zones since we need timezone information.
  loadZones(timezonesUrl);
  if (_momentTimezone["default"].zonesLoaded && timezone) {
    return momentDate.tz(timezone).format("".concat(convertFormatToMoment(format), " z"));
  } else {
    return momentDate.format(convertFormatToMoment(format));
  }
}

/**
 * Pass a format function to format within a timezone.
 *
 * @param formatFn
 * @param date
 * @param format
 * @param timezone
 * @return {string}
 */
function formatOffset(timezonesUrl, formatFn, date, format, timezone) {
  if (timezone === currentTimezone()) {
    return formatFn(date, format);
  }
  if (timezone === 'UTC') {
    return "".concat(formatFn(offsetDate(date, 'UTC').date, format), " UTC");
  }

  // Load the zones since we need timezone information.
  loadZones(timezonesUrl);
  if (_momentTimezone["default"].zonesLoaded) {
    var offset = offsetDate(date, timezone);
    return "".concat(formatFn(offset.date, format), " ").concat(offset.abbr);
  } else {
    return formatFn(date, format);
  }
}
function getLocaleDateFormatInfo(locale) {
  var formatInfo = {};
  var day = 21;
  var exampleDate = new Date(2017, 11, day);
  var localDateString = exampleDate.toLocaleDateString(locale);
  formatInfo.dayFirst = localDateString.slice(0, 2) === day.toString();
  return formatInfo;
}

/**
 * Convert the format from the angular-datepicker module to flatpickr format.
 * @param format
 * @return {string}
 */
function convertFormatToFlatpickr(format) {
  return format
  // Remove the Z timezone offset, not supported by flatpickr.
  .replace(/Z/g, '')

  // Year conversion.
  .replace(/y/g, 'Y').replace('YYYY', 'Y').replace('YY', 'y')

  // Month conversion.
  .replace('MMMM', 'F').replace(/M/g, 'n').replace('nnn', 'M').replace('nn', 'm')

  // Day in month.
  .replace(/d/g, 'j').replace(/jj/g, 'd')

  // Day in week.
  .replace('EEEE', 'l').replace('EEE', 'D')

  // Hours, minutes, seconds
  .replace('HH', 'H').replace('hh', 'G').replace('mm', 'i').replace('ss', 'S').replace(/a/g, 'K');
}

/**
 * Convert the format from the angular-datepicker module to moment format.
 * @param format
 * @return {string}
 */
function convertFormatToMoment(format) {
  return format
  // Year conversion.
  .replace(/y/g, 'Y')
  // Day in month.
  .replace(/d/g, 'D')
  // Day in week.
  .replace(/E/g, 'd')
  // AM/PM marker
  .replace(/a/g, 'A')
  // Unix Timestamp
  .replace(/U/g, 'X');
}
function convertFormatToMask(format) {
  return format
  // Long month replacement.
  .replace(/M{4}/g, 'MM')
  // Initial short month conversion.
  .replace(/M{3}/g, '***')
  // Short month conversion if input as text.
  .replace(/e/g, 'Q')
  // Year conversion.
  .replace(/[ydhmsHMG]/g, '9')
  // AM/PM conversion.
  .replace(/a/g, 'AA');
}

/**
 * Returns an input mask that is compatible with the input mask library.
 * @param {string} mask - The Form.io input mask.
 * @param {string} placeholderChar - Char which is used as a placeholder.
 * @returns {Array} - The input mask for the mask library.
 */
function getInputMask(mask, placeholderChar) {
  if (mask instanceof Array) {
    return mask;
  }
  var maskArray = [];
  maskArray.numeric = true;
  for (var i = 0; i < mask.length; i++) {
    switch (mask[i]) {
      case '9':
        maskArray.push(/\d/);
        break;
      case 'A':
        maskArray.numeric = false;
        maskArray.push(/[a-zA-Z]/);
        break;
      case 'a':
        maskArray.numeric = false;
        maskArray.push(/[a-z]/);
        break;
      case '*':
        maskArray.numeric = false;
        maskArray.push(/[a-zA-Z0-9]/);
        break;
      // If char which is used inside mask placeholder was used in the mask, replace it with space to prevent errors
      case placeholderChar:
        maskArray.numeric = false;
        maskArray.push(' ');
        break;
      default:
        maskArray.numeric = false;
        maskArray.push(mask[i]);
        break;
    }
  }
  return maskArray;
}
function unmaskValue(value, mask, placeholderChar) {
  if (!mask || !value || value.length > mask.length) {
    return value;
  }
  var unmaskedValue = value.split('');
  for (var i = 0; i < mask.length; i++) {
    var _char = value[i] || '';
    var charPart = mask[i];
    if (!_lodash["default"].isRegExp(charPart) && _char === charPart) {
      unmaskedValue[i] = '';
    }
  }
  unmaskedValue = unmaskedValue.join('').replace(placeholderChar, '');
  return unmaskedValue;
}
function matchInputMask(value, inputMask) {
  if (!inputMask) {
    return true;
  }

  // If value is longer than mask, it isn't valid.
  if (value.length > inputMask.length) {
    return false;
  }
  for (var i = 0; i < inputMask.length; i++) {
    var _char2 = value[i] || '';
    var charPart = inputMask[i];
    if (!(_lodash["default"].isRegExp(charPart) && charPart.test(_char2) || charPart === _char2)) {
      return false;
    }
  }
  return true;
}
function getNumberSeparators() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  var formattedNumberString = 12345.6789.toLocaleString(lang);
  var delimeters = formattedNumberString.match(/..(.)...(.)../);
  if (!delimeters) {
    return {
      delimiter: ',',
      decimalSeparator: '.'
    };
  }
  return {
    delimiter: delimeters.length > 1 ? delimeters[1] : ',',
    decimalSeparator: delimeters.length > 2 ? delimeters[2] : '.'
  };
}
function getNumberDecimalLimit(component, defaultLimit) {
  if (_lodash["default"].has(component, 'decimalLimit')) {
    return _lodash["default"].get(component, 'decimalLimit');
  }
  // Determine the decimal limit. Defaults to 20 but can be overridden by validate.step or decimalLimit settings.
  var decimalLimit = defaultLimit || 20;
  var step = _lodash["default"].get(component, 'validate.step', 'any');
  if (step !== 'any') {
    var parts = step.toString().split('.');
    if (parts.length > 1) {
      decimalLimit = parts[1].length;
    }
  }
  return decimalLimit;
}
function getCurrencyAffixes(_ref) {
  var _ref$currency = _ref.currency,
    currency = _ref$currency === void 0 ? 'USD' : _ref$currency,
    decimalLimit = _ref.decimalLimit,
    decimalSeparator = _ref.decimalSeparator,
    lang = _ref.lang;
  // Get the prefix and suffix from the localized string.
  var regex = "(.*)?".concat(100 .toLocaleString(lang));
  if (decimalLimit) {
    regex += "".concat(decimalSeparator === '.' ? '\\.' : decimalSeparator).concat(0 .toLocaleString(lang), "{").concat(decimalLimit, "}");
  }
  regex += '(.*)?';
  var parts = 100 .toLocaleString(lang, {
    style: 'currency',
    currency: currency,
    useGrouping: true,
    maximumFractionDigits: decimalLimit || 0,
    minimumFractionDigits: decimalLimit || 0
  }).replace('.', decimalSeparator).match(new RegExp(regex));
  return {
    prefix: (parts === null || parts === void 0 ? void 0 : parts[1]) || '',
    suffix: (parts === null || parts === void 0 ? void 0 : parts[2]) || ''
  };
}

/**
 * Fetch the field data provided a component.
 *
 * @param data
 * @param component
 * @return {*}
 */
function fieldData(data, component) {
  if (!data) {
    return '';
  }
  if (!component || !component.key) {
    return data;
  }
  if (component.key.includes('.')) {
    var value = data;
    var parts = component.key.split('.');
    var key = '';
    for (var i = 0; i < parts.length; i++) {
      key = parts[i];

      // Handle nested resources
      if (value.hasOwnProperty('_id')) {
        value = value.data;
      }

      // Return if the key is not found on the value.
      if (!value.hasOwnProperty(key)) {
        return;
      }

      // Convert old single field data in submissions to multiple
      if (key === parts[parts.length - 1] && component.multiple && !Array.isArray(value[key])) {
        value[key] = [value[key]];
      }

      // Set the value of this key.
      value = value[key];
    }
    return value;
  } else {
    // Convert old single field data in submissions to multiple
    if (component.multiple && !Array.isArray(data[component.key])) {
      data[component.key] = [data[component.key]];
    }

    // Fix for checkbox type radio submission values in tableView
    if (component.type === 'checkbox' && component.inputType === 'radio') {
      return data[component.name] === component.value;
    }
    return data[component.key];
  }
}

/**
 * Delays function execution with possibility to execute function synchronously or cancel it.
 *
 * @param fn Function to delay
 * @param delay Delay time
 * @return {*}
 */
function delay(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var timer = setTimeout.apply(void 0, [fn, delay].concat(args));
  function cancel() {
    clearTimeout(timer);
  }
  function earlyCall() {
    cancel();
    return fn.apply(void 0, args);
  }
  earlyCall.timer = timer;
  earlyCall.cancel = cancel;
  return earlyCall;
}

/**
 * Iterate the given key to make it unique.
 *
 * @param {String} key
 *   Modify the component key to be unique.
 *
 * @returns {String}
 *   The new component key.
 */
function iterateKey(key) {
  if (!key.match(/(\d+)$/)) {
    return "".concat(key, "1");
  }
  return key.replace(/(\d+)$/, function (suffix) {
    return Number(suffix) + 1;
  });
}

/**
 * Determines a unique key within a map provided the base key.
 *
 * @param map
 * @param base
 * @return {*}
 */
function uniqueKey(map, base) {
  var newKey = base;
  while (map.hasOwnProperty(newKey)) {
    newKey = iterateKey(newKey);
  }
  return newKey;
}

/**
 * Determines the major version number of bootstrap.
 *
 * @return {number}
 */
function bootstrapVersion(options) {
  if (options.bootstrap) {
    return options.bootstrap;
  }
  if (typeof $ === 'function' && typeof $().collapse === 'function') {
    return parseInt($.fn.collapse.Constructor.VERSION.split('.')[0], 10);
  }
  return 0;
}

/**
 * Retrun provided argument.
 * If argument is a function, returns the result of a function call.
 * @param {*} e;
 *
 * @return {*}
 */
function unfold(e) {
  if (typeof e === 'function') {
    return e();
  }
  return e;
}

/**
 * Map values through unfold and return first non-nil value.
 * @param {Array<T>} collection;
 *
 * @return {T}
 */
var firstNonNil = _lodash["default"].flow([_lodash["default"].partialRight(_lodash["default"].map, unfold), _lodash["default"].partialRight(_lodash["default"].find, function (v) {
  return !_lodash["default"].isUndefined(v);
})]);

/*
 * Create enclosed state.
 * Returns functions to getting and cycling between states.
 * @param {*} a - initial state.
 * @param {*} b - next state.
 * @return {Functions[]} -- [get, toggle];
 */
exports.firstNonNil = firstNonNil;
function withSwitch(a, b) {
  var state = a;
  var next = b;
  function get() {
    return state;
  }
  function toggle() {
    var prev = state;
    state = next;
    next = prev;
  }
  return [get, toggle];
}
function observeOverload(callback) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$limit = options.limit,
    limit = _options$limit === void 0 ? 50 : _options$limit,
    _options$delay = options.delay,
    delay = _options$delay === void 0 ? 500 : _options$delay;
  var callCount = 0;
  var timeoutID = 0;
  var reset = function reset() {
    return callCount = 0;
  };
  return function () {
    if (timeoutID !== 0) {
      clearTimeout(timeoutID);
      timeoutID = 0;
    }
    timeoutID = setTimeout(reset, delay);
    callCount += 1;
    if (callCount >= limit) {
      clearTimeout(timeoutID);
      reset();
      return callback();
    }
  };
}
function getContextComponents(context, excludeNested) {
  var excludedTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var values = [];
  context.utils.eachComponent(context.instance.options.editForm.components, function (component, path) {
    var addToContextComponents = excludeNested ? !component.tree : true;
    if (component.key !== context.data.key && addToContextComponents && !_lodash["default"].includes(excludedTypes, component.type)) {
      values.push({
        label: "".concat(component.label || component.key, " (").concat(path, ")"),
        value: path
      });
    }
  });
  return values;
}
function getContextButtons(context) {
  var values = [];
  context.utils.eachComponent(context.instance.options.editForm.components, function (component) {
    if (component.type === 'button') {
      values.push({
        label: "".concat(component.key, " (").concat(component.label, ")"),
        value: component.key
      });
    }
  });
  return values;
}

// Tags that could be in text, that should be ommited or handled in a special way
var inTextTags = ['#text', 'A', 'B', 'EM', 'I', 'SMALL', 'STRONG', 'SUB', 'SUP', 'INS', 'DEL', 'MARK', 'CODE'];

/**
 * Helper function for 'translateHTMLTemplate'. Translates text value of the passed html element.
 *
 * @param {HTMLElement} elem
 * @param {Function} translate
 *
 * @returns {String}
 *   Translated element template.
 */
function translateElemValue(elem, translate) {
  if (!elem.innerText) {
    return elem.innerHTML;
  }
  var elemValue = elem.innerText.replace(_Evaluator["default"].templateSettings.interpolate, '').replace(/\s\s+/g, ' ').trim();
  var translatedValue = translate(elemValue);
  if (elemValue !== translatedValue) {
    var links = elem.innerHTML.match(/<a[^>]*>(.*?)<\/a>/g);
    if (links && links.length) {
      if (links.length === 1 && links[0].length === elem.innerHTML.length) {
        return elem.innerHTML.replace(elemValue, translatedValue);
      }
      var translatedLinks = links.map(function (link) {
        var linkElem = document.createElement('a');
        linkElem.innerHTML = link;
        return translateElemValue(linkElem, translate);
      });
      return "".concat(translatedValue, " (").concat(translatedLinks.join(', '), ")");
    } else {
      return elem.innerText.replace(elemValue, translatedValue);
    }
  } else {
    return elem.innerHTML;
  }
}

/**
 * Helper function for 'translateHTMLTemplate'. Goes deep through html tag children and calls function to translate their text values.
 *
 * @param {HTMLElement} tag
 * @param {Function} translate
 *
 * @returns {void}
 */
function translateDeepTag(tag, translate) {
  var children = tag.children.length && _toConsumableArray(tag.children);
  var shouldTranslateEntireContent = children && children.every(function (child) {
    return child.children.length === 0 && inTextTags.some(function (tag) {
      return child.nodeName === tag;
    });
  });
  if (!children || shouldTranslateEntireContent) {
    tag.innerHTML = translateElemValue(tag, translate);
  } else {
    children.forEach(function (child) {
      return translateDeepTag(child, translate);
    });
  }
}

/**
 * Translates text values in html template.
 *
 * @param {String} template
 * @param {Function} translate
 *
 * @returns {String}
 *   Html template with translated values.
 */
function translateHTMLTemplate(template, translate) {
  var isHTML = /<[^>]*>/.test(template);
  if (!isHTML) {
    return translate(template);
  }
  var tempElem = document.createElement('div');
  tempElem.innerHTML = template;
  if (tempElem.innerText && tempElem.children.length) {
    translateDeepTag(tempElem, translate);
    return tempElem.innerHTML;
  }
  return template;
}

/**
 * Sanitize an html string.
 *
 * @param string
 * @returns {*}
 */
function sanitize(string, options) {
  if (typeof _dompurify["default"].sanitize !== 'function') {
    return string;
  }
  // Dompurify configuration
  var sanitizeOptions = {
    ADD_ATTR: ['ref', 'target'],
    USE_PROFILES: {
      html: true
    }
  };
  // Use profiles
  if (options.sanitizeConfig && options.sanitizeConfig.useProfiles) {
    Object.keys(options.sanitizeConfig.useProfiles).forEach(function (key) {
      sanitizeOptions.USE_PROFILES[key] = options.sanitizeConfig.useProfiles[key];
    });
  }
  // Add attrs
  if (options.sanitizeConfig && Array.isArray(options.sanitizeConfig.addAttr) && options.sanitizeConfig.addAttr.length > 0) {
    options.sanitizeConfig.addAttr.forEach(function (attr) {
      sanitizeOptions.ADD_ATTR.push(attr);
    });
  }
  // Add tags
  if (options.sanitizeConfig && Array.isArray(options.sanitizeConfig.addTags) && options.sanitizeConfig.addTags.length > 0) {
    sanitizeOptions.ADD_TAGS = options.sanitizeConfig.addTags;
  }
  // Allow tags
  if (options.sanitizeConfig && Array.isArray(options.sanitizeConfig.allowedTags) && options.sanitizeConfig.allowedTags.length > 0) {
    sanitizeOptions.ALLOWED_TAGS = options.sanitizeConfig.allowedTags;
  }
  // Allow attributes
  if (options.sanitizeConfig && Array.isArray(options.sanitizeConfig.allowedAttrs) && options.sanitizeConfig.allowedAttrs.length > 0) {
    sanitizeOptions.ALLOWED_ATTR = options.sanitizeConfig.allowedAttrs;
  }
  // Allowd URI Regex
  if (options.sanitizeConfig && options.sanitizeConfig.allowedUriRegex) {
    var allowedUriRegex = options.sanitizeConfig.allowedUriRegex;
    sanitizeOptions.ALLOWED_URI_REGEXP = _lodash["default"].isString(allowedUriRegex) ? new RegExp(allowedUriRegex) : allowedUriRegex;
  }
  // Allow to extend the existing array of elements that are safe for URI-like values
  if (options.sanitizeConfig && Array.isArray(options.sanitizeConfig.addUriSafeAttr) && options.sanitizeConfig.addUriSafeAttr.length > 0) {
    sanitizeOptions.ADD_URI_SAFE_ATTR = options.sanitizeConfig.addUriSafeAttr;
  }
  return _dompurify["default"].sanitize(string, sanitizeOptions);
}

/**
 * Fast cloneDeep for JSON objects only.
 */
function fastCloneDeep(obj) {
  return obj ? JSON.parse(JSON.stringify(obj)) : obj;
}
function isInputComponent(componentJson) {
  if (componentJson.input === false || componentJson.input === true) {
    return componentJson.input;
  }
  switch (componentJson.type) {
    case 'htmlelement':
    case 'content':
    case 'columns':
    case 'fieldset':
    case 'panel':
    case 'table':
    case 'tabs':
    case 'well':
    case 'button':
      return false;
    default:
      return true;
  }
}
function getArrayFromComponentPath(pathStr) {
  if (!pathStr || !_lodash["default"].isString(pathStr)) {
    if (!_lodash["default"].isArray(pathStr)) {
      return [pathStr];
    }
    return pathStr;
  }
  return pathStr.replace(/[[\]]/g, '.').replace(/\.\./g, '.').replace(/(^\.)|(\.$)/g, '').split('.').map(function (part) {
    return _lodash["default"].defaultTo(_lodash["default"].toNumber(part), part);
  });
}
function hasInvalidComponent(component) {
  return component.getComponents().some(function (comp) {
    if (_lodash["default"].isArray(comp.components)) {
      return hasInvalidComponent(comp);
    }
    return comp.error;
  });
}
function getStringFromComponentPath(path) {
  if (!_lodash["default"].isArray(path)) {
    return path;
  }
  var strPath = '';
  path.forEach(function (part, i) {
    if (_lodash["default"].isNumber(part)) {
      strPath += "[".concat(part, "]");
    } else {
      strPath += i === 0 ? part : ".".concat(part);
    }
  });
  return strPath;
}
function round(number, precision) {
  if (_lodash["default"].isNumber(number)) {
    return number.toFixed(precision);
  }
  return number;
}

/**
 * Check for Internet Explorer browser version
 *
 * @return {(number|null)}
 */
function getIEBrowserVersion() {
  var _getBrowserInfo = getBrowserInfo(),
    ie = _getBrowserInfo.ie,
    version = _getBrowserInfo.version;
  return ie ? version : null;
}

/**
 * Get browser name and version (modified from 'jquery-browser-plugin')
 *
 * @return {Object} -- {{browser name, version, isWebkit?}}
 * Possible browser names: chrome, safari, ie, edge, opera, mozilla, yabrowser
 */
function getBrowserInfo() {
  var browser = {};
  if (typeof window === 'undefined') {
    return browser;
  }
  var ua = window.navigator.userAgent.toLowerCase();
  var match = /(edge|edg)\/([\w.]+)/.exec(ua) || /(opr)[/]([\w.]+)/.exec(ua) || /(yabrowser)[ /]([\w.]+)/.exec(ua) || /(chrome)[ /]([\w.]+)/.exec(ua) || /(iemobile)[/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
  var matched = {
    browser: match[5] || match[3] || match[1] || '',
    version: match[4] || match[2] || '0'
  };
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = parseInt(matched.version, 10);
  }
  // Chrome, Opera 15+, Safari and Yandex.Browser are webkit based browsers
  if (browser.chrome || browser.opr || browser.safari || browser.edg || browser.yabrowser) {
    browser.isWebkit = true;
  }
  // IE11 has a new token so we will assign it ie to avoid breaking changes
  if (browser.rv || browser.iemobile) {
    browser.ie = true;
  }
  // Edge has a new token since it became webkit based
  if (browser.edg) {
    browser.edge = true;
  }
  // Opera 15+ are identified as opr
  if (browser.opr) {
    browser.opera = true;
  }
  return browser;
}
function getComponentPathWithoutIndicies() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return path.replace(/\[\d+\]/, '');
}

/**
 * Returns a path to the component which based on its schema
 * @param {*} component is a component's schema containing link to its parent's schema in the 'parent' property
 */
function getComponentPath(component) {
  var _component$_form;
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!component || !component.key || (component === null || component === void 0 ? void 0 : (_component$_form = component._form) === null || _component$_form === void 0 ? void 0 : _component$_form.display) === 'wizard') {
    // unlike the Webform, the Wizard has the key and it is a duplicate of the panel key
    return path;
  }
  path = component.isInputComponent || component.input === true ? "".concat(component.key).concat(path ? '.' : '').concat(path) : path;
  return getComponentPath(component.parent, path);
}

/**
 * Returns a parent component of the passed component instance skipping all the Layout components
 * @param {*} componentInstance
 * @return {(Component|undefined)}
 */
function getDataParentComponent(componentInstance) {
  if (!componentInstance) {
    return;
  }
  var parent = componentInstance.parent;
  if (parent && (parent.isInputComponent || parent.input)) {
    return parent;
  } else {
    return getDataParentComponent(parent);
  }
}

/**
 * Returns whether the value is a promise
 * @param value
 * @return {boolean}
 */
function isPromise(value) {
  return value && value.then && typeof value.then === 'function' && Object.prototype.toString.call(value) === '[object Promise]';
}

/**
 * Determines if the component has a scoping parent in tree (a component which scopes its children and manages its
 * changes by itself, e.g. EditGrid)
 * @param componentInstance
 * @param firstPass
 * @returns {boolean|boolean|*}
 */
function isInsideScopingComponent(componentInstance) {
  var firstPass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!firstPass && componentInstance !== null && componentInstance !== void 0 && componentInstance.hasScopedChildren) {
    return true;
  }
  var dataParent = getDataParentComponent(componentInstance);
  if (dataParent !== null && dataParent !== void 0 && dataParent.hasScopedChildren) {
    return true;
  } else if (dataParent !== null && dataParent !== void 0 && dataParent.parent) {
    return isInsideScopingComponent(dataParent.parent, false);
  }
  return false;
}
function getFocusableElements(element) {
  var focusableSelector = "button:not([disabled]), input:not([disabled]), select:not([disabled]),\n    textarea:not([disabled]), button:not([disabled]), [href]";
  return element.querySelectorAll(focusableSelector);
}

// Export lodash to save space with other libraries.

var componentValueTypes = {
  number: 'number',
  string: 'string',
  "boolean": 'boolean',
  array: 'array',
  object: 'object',
  date: 'date',
  any: 'any'
};
exports.componentValueTypes = componentValueTypes;
function getComponentSavedTypes(fullSchema) {
  var schema = fullSchema || {};
  if (schema.persistent !== true) {
    return [];
  }
  if (schema.multiple) {
    return [componentValueTypes.array];
  }
  return null;
}
function getItemTemplateKeys(template) {
  var templateKeys = [];
  if (!template) {
    return templateKeys;
  }
  var keys = template.match(/({{\s*(.*?)\s*}})/g);
  if (keys) {
    keys.forEach(function (key) {
      var propKey = key.match(/{{\s*item\.(.*?)\s*}}/);
      if (propKey && propKey.length > 1) {
        templateKeys.push(propKey[1]);
      }
    });
  }
  return templateKeys;
}
function isSelectResourceWithObjectValue() {
  var comp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var reference = comp.reference,
    dataSrc = comp.dataSrc,
    valueProperty = comp.valueProperty;
  return reference || dataSrc === 'resource' && (!valueProperty || valueProperty === 'data');
}