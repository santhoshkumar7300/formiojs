"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidationChecker = void 0;
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.number.is-nan.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.values.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _utils = require("../utils/utils");
var _moment = _interopRequireDefault(require("moment"));
var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));
var _inputmask = _interopRequireDefault(require("inputmask"));
var _fetchPonyfill2 = _interopRequireDefault(require("fetch-ponyfill"));
var _calendarUtils = require("../utils/calendarUtils");
var _Rules = _interopRequireDefault(require("./Rules"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _fetchPonyfill = (0, _fetchPonyfill2["default"])({
    Promise: _nativePromiseOnly["default"]
  }),
  fetch = _fetchPonyfill.fetch,
  Headers = _fetchPonyfill.Headers,
  Request = _fetchPonyfill.Request;
var ValidationChecker = /*#__PURE__*/function () {
  function ValidationChecker() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ValidationChecker);
    this.config = _lodash["default"].defaults(config, ValidationChecker.config);
    this.validators = {
      required: {
        key: 'validate.required',
        method: 'validateRequired',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('required'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          if (!(0, _utils.boolValue)(setting) || component.isValueHidden()) {
            return true;
          }
          var isCalendar = component.validators.some(function (validator) {
            return validator === 'calendar';
          });
          if (!value && isCalendar && component.widget.enteredDate) {
            return !this.validators.calendar.check.call(this, component, setting, value);
          }
          return !component.isEmpty(value);
        }
      },
      onlyAvailableItems: {
        key: 'validate.onlyAvailableItems',
        method: 'validateValueAvailability',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('valueIsNotAvailable'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting) {
          return !(0, _utils.boolValue)(setting);
        }
      },
      unique: {
        key: 'validate.unique',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('unique'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var _this = this;
          // Skip if setting is falsy
          if (!(0, _utils.boolValue)(setting)) {
            return true;
          }

          // Skip if value is empty object or falsy
          if (!value || _lodash["default"].isObjectLike(value) && _lodash["default"].isEmpty(value)) {
            return true;
          }

          // Skip if we don't have a database connection
          if (!this.config.db) {
            return true;
          }
          return new _nativePromiseOnly["default"](function (resolve) {
            var form = _this.config.form;
            var submission = _this.config.submission;
            var path = "data.".concat(component.path);
            var addPathQueryParams = function addPathQueryParams(pathQueryParams, query, path) {
              var pathArray = path.split(/\[\d+\]?./);
              var needValuesInArray = pathArray.length > 1;
              var pathToValue = path;
              if (needValuesInArray) {
                pathToValue = pathArray.shift();
                var pathQueryObj = {};
                _lodash["default"].reduce(pathArray, function (pathQueryPath, pathPart, index) {
                  var isLastPathPart = index === pathArray.length - 1;
                  var obj = _lodash["default"].get(pathQueryObj, pathQueryPath, pathQueryObj);
                  var addedPath = "$elemMatch['".concat(pathPart, "']");
                  _lodash["default"].set(obj, addedPath, isLastPathPart ? pathQueryParams : {});
                  return pathQueryPath ? "".concat(pathQueryPath, ".").concat(addedPath) : addedPath;
                }, '');
                query[pathToValue] = pathQueryObj;
              } else {
                query[pathToValue] = pathQueryParams;
              }
            };

            // Build the query
            var query = {
              form: form._id
            };
            var collationOptions = {};
            if (_lodash["default"].isString(value)) {
              var _component$component$;
              if (component.component.dbIndex) {
                addPathQueryParams(value, query, path);
              }
              // These are kind of hacky but provides for a more efficient "unique" validation when the string is an email,
              // because we (by and large) only have to worry about ASCII and partial unicode; this way, we can use collation-
              // aware indexes with case insensitive email searches to make things like login and registration a whole lot faster
              else if (component.component.type === 'email' || component.component.type === 'textfield' && ((_component$component$ = component.component.validate) === null || _component$component$ === void 0 ? void 0 : _component$component$.pattern) === '[A-Za-z0-9]+') {
                addPathQueryParams(value, query, path);
                collationOptions = {
                  collation: {
                    locale: 'en',
                    strength: 2
                  }
                };
              } else {
                addPathQueryParams({
                  $regex: new RegExp("^".concat((0, _utils.escapeRegExCharacters)(value), "$")),
                  $options: 'i'
                }, query, path);
              }
            }
            // FOR-213 - Pluck the unique location id
            else if (_lodash["default"].isPlainObject(value) && value.address && value.address['address_components'] && value.address['place_id']) {
              addPathQueryParams({
                $regex: new RegExp("^".concat((0, _utils.escapeRegExCharacters)(value.address['place_id']), "$")),
                $options: 'i'
              }, query, "".concat(path, ".address.place_id"));
            }
            // Compare the contents of arrays vs the order.
            else if (_lodash["default"].isArray(value)) {
              addPathQueryParams({
                $all: value
              }, query, path);
            } else if (_lodash["default"].isObject(value) || _lodash["default"].isNumber(value)) {
              addPathQueryParams({
                $eq: value
              }, query, path);
            }
            // Only search for non-deleted items
            query.deleted = {
              $eq: null
            };
            query.state = 'submitted';
            var uniqueValidationCallback = function uniqueValidationCallback(err, result) {
              if (err) {
                return resolve(false);
              } else if (result) {
                // Only OK if it matches the current submission
                if (submission._id && result._id.toString() === submission._id) {
                  resolve(true);
                } else {
                  component.conflictId = result._id.toString();
                  return resolve(false);
                }
              } else {
                return resolve(true);
              }
            };
            // Try to find an existing value within the form
            _this.config.db.findOne(query, null, collationOptions, function (err, result) {
              if (err && collationOptions.collation) {
                // presume this error comes from db compatibility, try again as regex
                delete query[path];
                addPathQueryParams({
                  $regex: new RegExp("^".concat((0, _utils.escapeRegExCharacters)(value), "$")),
                  $options: 'i'
                }, query, path);
                _this.config.db.findOne(query, uniqueValidationCallback);
              } else {
                return uniqueValidationCallback(err, result);
              }
            });
          })["catch"](function () {
            return false;
          });
        }
      },
      multiple: {
        key: 'validate.multiple',
        hasLabel: true,
        message: function message(component) {
          var shouldBeArray = (0, _utils.boolValue)(component.component.multiple) || Array.isArray(component.emptyValue);
          var isRequired = component.component.validate.required;
          var messageKey = shouldBeArray ? isRequired ? 'array_nonempty' : 'array' : 'nonarray';
          return component.t(component.errorMessage(messageKey), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          // Skip multiple validation if the component tells us to
          if (!component.validateMultiple()) {
            return true;
          }
          var shouldBeArray = (0, _utils.boolValue)(setting);
          var canBeArray = Array.isArray(component.emptyValue);
          var isArray = Array.isArray(value);
          var isRequired = component.component.validate.required;
          if (shouldBeArray) {
            if (isArray) {
              return isRequired ? !!value.length : true;
            } else {
              // Null/undefined is ok if this value isn't required; anything else should fail
              return _lodash["default"].isNil(value) ? !isRequired : false;
            }
          } else {
            return canBeArray || !isArray;
          }
        }
      },
      select: {
        key: 'validate.select',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('select'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value, data, index, row, async) {
          // Skip if setting is falsy
          if (!(0, _utils.boolValue)(setting)) {
            return true;
          }

          // Skip if value is empty
          if (!value || _lodash["default"].isEmpty(value)) {
            return true;
          }

          // Skip if we're not async-capable
          if (!async) {
            return true;
          }
          var schema = component.component;

          // Initialize the request options
          var requestOptions = {
            url: setting,
            method: 'GET',
            qs: {},
            json: true,
            headers: {}
          };

          // If the url is a boolean value
          if (_lodash["default"].isBoolean(requestOptions.url)) {
            requestOptions.url = !!requestOptions.url;
            if (!requestOptions.url || schema.dataSrc !== 'url' || !schema.data.url || !schema.searchField) {
              return true;
            }

            // Get the validation url
            requestOptions.url = schema.data.url;

            // Add the search field
            requestOptions.qs[schema.searchField] = value;

            // Add the filters
            if (schema.filter) {
              requestOptions.url += (!requestOptions.url.includes('?') ? '?' : '&') + schema.filter;
            }

            // If they only wish to return certain fields.
            if (schema.selectFields) {
              requestOptions.qs.select = schema.selectFields;
            }
          }
          if (!requestOptions.url) {
            return true;
          }

          // Make sure to interpolate.
          requestOptions.url = (0, _utils.interpolate)(requestOptions.url, {
            data: component.data
          });

          // Add query string to URL
          requestOptions.url += (requestOptions.url.includes('?') ? '&' : '?') + _lodash["default"].chain(requestOptions.qs).map(function (val, key) {
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(val));
          }).join('&').value();

          // Set custom headers.
          if (schema.data && schema.data.headers) {
            _lodash["default"].each(schema.data.headers, function (header) {
              if (header.key) {
                requestOptions.headers[header.key] = header.value;
              }
            });
          }

          // Set form.io authentication.
          if (schema.authenticate && this.config.token) {
            requestOptions.headers['x-jwt-token'] = this.config.token;
          }
          return fetch(new Request(requestOptions.url, {
            headers: new Headers(requestOptions.headers)
          })).then(function (response) {
            if (!response.ok) {
              return false;
            }
            return response.json();
          }).then(function (results) {
            return results && results.length;
          })["catch"](function () {
            return false;
          });
        }
      },
      min: {
        key: 'validate.min',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('min'), {
            field: component.errorLabel,
            min: parseFloat(setting),
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var min = parseFloat(setting);
          var parsedValue = parseFloat(value);
          if (Number.isNaN(min) || Number.isNaN(parsedValue)) {
            return true;
          }
          return parsedValue >= min;
        }
      },
      max: {
        key: 'validate.max',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('max'), {
            field: component.errorLabel,
            max: parseFloat(setting),
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var max = parseFloat(setting);
          var parsedValue = parseFloat(value);
          if (Number.isNaN(max) || Number.isNaN(parsedValue)) {
            return true;
          }
          return parsedValue <= max;
        }
      },
      minSelectedCount: {
        key: 'validate.minSelectedCount',
        message: function message(component, setting) {
          return component.component.minSelectedCountMessage ? component.component.minSelectedCountMessage : component.t(component.errorMessage('minSelectedCount'), {
            minCount: parseFloat(setting),
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var min = parseFloat(setting);
          if (!min) {
            return true;
          }
          var count = Object.keys(value).reduce(function (total, key) {
            if (value[key]) {
              total++;
            }
            return total;
          }, 0);

          // Should not be triggered if there is no options selected at all
          return !count || count >= min;
        }
      },
      maxSelectedCount: {
        key: 'validate.maxSelectedCount',
        message: function message(component, setting) {
          return component.component.maxSelectedCountMessage ? component.component.maxSelectedCountMessage : component.t(component.errorMessage('maxSelectedCount'), {
            minCount: parseFloat(setting),
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var max = parseFloat(setting);
          if (!max) {
            return true;
          }
          var count = Object.keys(value).reduce(function (total, key) {
            if (value[key]) {
              total++;
            }
            return total;
          }, 0);
          return count <= max;
        }
      },
      minLength: {
        key: 'validate.minLength',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('minLength'), {
            field: component.errorLabel,
            length: setting,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var minLength = parseInt(setting, 10);
          if (!value || !minLength || typeof value !== 'string' || component.isEmpty(value)) {
            return true;
          }
          return value.length >= minLength;
        }
      },
      maxLength: {
        key: 'validate.maxLength',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('maxLength'), {
            field: component.errorLabel,
            length: setting,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var maxLength = parseInt(setting, 10);
          if (!maxLength || typeof value !== 'string') {
            return true;
          }
          return value.length <= maxLength;
        }
      },
      maxWords: {
        key: 'validate.maxWords',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('maxWords'), {
            field: component.errorLabel,
            length: setting,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var maxWords = parseInt(setting, 10);
          if (!maxWords || typeof value !== 'string') {
            return true;
          }
          return value.trim().split(/\s+/).length <= maxWords;
        }
      },
      minWords: {
        key: 'validate.minWords',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('minWords'), {
            field: component.errorLabel,
            length: setting,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var minWords = parseInt(setting, 10);
          if (!minWords || !value || typeof value !== 'string') {
            return true;
          }
          return value.trim().split(/\s+/).length >= minWords;
        }
      },
      email: {
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('invalid_email'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          /* eslint-disable max-len */
          // From http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          /* eslint-enable max-len */

          // Allow emails to be valid if the component is pristine and no value is provided.
          return !value || re.test(value);
        }
      },
      url: {
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('invalid_url'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          /* eslint-disable max-len */
          // From https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
          var re = /^(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
          // From http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
          var emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          /* eslint-enable max-len */

          // Allow urls to be valid if the component is pristine and no value is provided.
          return !value || re.test(value) && !emailRe.test(value);
        }
      },
      date: {
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('invalid_date'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          if (!value) {
            return true;
          }
          if (value === 'Invalid date' || value === 'Invalid Date') {
            return false;
          }
          if (typeof value === 'string') {
            value = new Date(value);
          }
          return value instanceof Date === true && value.toString() !== 'Invalid Date';
        }
      },
      day: {
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('invalid_day'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          if (!value) {
            return true;
          }
          var _ref = component.dayFirst ? [0, 1, 2] : [1, 0, 2],
            _ref2 = _slicedToArray(_ref, 3),
            DAY = _ref2[0],
            MONTH = _ref2[1],
            YEAR = _ref2[2];
          var values = value.split('/').map(function (x) {
              return parseInt(x, 10);
            }),
            day = values[DAY],
            month = values[MONTH],
            year = values[YEAR],
            maxDay = getDaysInMonthCount(month, year);
          if (day < 0 || day > maxDay) {
            return false;
          }
          if (month < 0 || month > 12) {
            return false;
          }
          if (year < 0 || year > 9999) {
            return false;
          }
          return true;
          function isLeapYear(year) {
            // Year is leap if it is evenly divisible by 400 or evenly divisible by 4 and not evenly divisible by 100.
            return !(year % 400) || !!(year % 100) && !(year % 4);
          }
          function getDaysInMonthCount(month, year) {
            switch (month) {
              case 1: // January
              case 3: // March
              case 5: // May
              case 7: // July
              case 8: // August
              case 10: // October
              case 12:
                // December
                return 31;
              case 4: // April
              case 6: // June
              case 9: // September
              case 11:
                // November
                return 30;
              case 2:
                // February
                return isLeapYear(year) ? 29 : 28;
              default:
                return 31;
            }
          }
        }
      },
      pattern: {
        key: 'validate.pattern',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(_lodash["default"].get(component, 'component.validate.patternMessage', component.errorMessage('pattern')), {
            field: component.errorLabel,
            pattern: setting,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          if (component.isEmpty(value)) return true;
          var pattern = setting;
          if (!pattern) {
            return true;
          }
          var regex = new RegExp("^".concat(pattern, "$"));
          return regex.test(value);
        }
      },
      json: {
        key: 'validate.json',
        check: function check(component, setting, value, data, index, row) {
          if (!setting) {
            return true;
          }
          var valid = component.evaluate(setting, {
            data: data,
            row: row,
            rowIndex: index,
            input: value
          });
          if (valid === null) {
            return true;
          }
          return valid;
        }
      },
      mask: {
        key: 'inputMask',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage('mask'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value) {
          var inputMask;
          if (component.isMultipleMasksField) {
            var maskName = value ? value.maskName : undefined;
            var formioInputMask = component.getMaskByName(maskName);
            if (formioInputMask) {
              inputMask = formioInputMask;
            }
            value = value ? value.value : value;
          } else {
            inputMask = setting;
          }
          if (value && inputMask && typeof value === 'string' && component.type === 'textfield') {
            return _inputmask["default"].isValid(value, inputMask);
          }
          inputMask = inputMask ? (0, _utils.getInputMask)(inputMask) : null;
          if (value && inputMask && !component.skipMaskValidation) {
            // If char which is used inside mask placeholder was used in the mask, replace it with space to prevent errors
            inputMask = inputMask.map(function (_char) {
              return _char === component.placeholderChar ? ' ' : _char;
            });
            return (0, _utils.matchInputMask)(value, inputMask);
          }
          return true;
        }
      },
      custom: {
        key: 'validate.custom',
        message: function message(component) {
          return component.t(component.errorMessage('custom'), {
            field: component.errorLabel,
            data: component.data
          });
        },
        check: function check(component, setting, value, data, index, row) {
          if (!setting) {
            return true;
          }
          var valid = component.evaluate(setting, {
            valid: true,
            data: data,
            rowIndex: index,
            row: row,
            input: value
          }, 'valid', true);
          if (valid === null) {
            return true;
          }
          return valid;
        }
      },
      maxDate: {
        key: 'maxDate',
        hasLabel: true,
        message: function message(component, setting) {
          var date = (0, _utils.getDateSetting)(setting);
          return component.t(component.errorMessage('maxDate'), {
            field: component.errorLabel,
            maxDate: (0, _moment["default"])(date).format(component.format)
          });
        },
        check: function check(component, setting, value) {
          //if any parts of day are missing, skip maxDate validation
          if (component.isPartialDay && component.isPartialDay(value)) {
            return true;
          }
          var date = component.getValidationFormat ? (0, _moment["default"])(value, component.getValidationFormat()) : (0, _moment["default"])(value);
          var maxDate = (0, _utils.getDateSetting)(setting);
          if (_lodash["default"].isNull(maxDate)) {
            return true;
          } else {
            maxDate.setHours(0, 0, 0, 0);
          }
          return date.isBefore(maxDate) || date.isSame(maxDate);
        }
      },
      minDate: {
        key: 'minDate',
        hasLabel: true,
        message: function message(component, setting) {
          var date = (0, _utils.getDateSetting)(setting);
          return component.t(component.errorMessage('minDate'), {
            field: component.errorLabel,
            minDate: (0, _moment["default"])(date).format(component.format)
          });
        },
        check: function check(component, setting, value) {
          //if any parts of day are missing, skip minDate validation
          if (component.isPartialDay && component.isPartialDay(value)) {
            return true;
          }
          var date = component.getValidationFormat ? (0, _moment["default"])(value, component.getValidationFormat()) : (0, _moment["default"])(value);
          var minDate = (0, _utils.getDateSetting)(setting);
          if (_lodash["default"].isNull(minDate)) {
            return true;
          } else {
            minDate.setHours(0, 0, 0, 0);
          }
          return date.isAfter(minDate) || date.isSame(minDate);
        }
      },
      minYear: {
        key: 'minYear',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('minYear'), {
            field: component.errorLabel,
            minYear: setting
          });
        },
        check: function check(component, setting, value) {
          var minYear = setting;
          var year = /\d{4}$/.exec(value);
          year = year ? year[0] : null;
          if (!+minYear || !+year) {
            return true;
          }
          return +year >= +minYear;
        }
      },
      maxYear: {
        key: 'maxYear',
        hasLabel: true,
        message: function message(component, setting) {
          return component.t(component.errorMessage('maxYear'), {
            field: component.errorLabel,
            maxYear: setting
          });
        },
        check: function check(component, setting, value) {
          var maxYear = setting;
          var year = /\d{4}$/.exec(value);
          year = year ? year[0] : null;
          if (!+maxYear || !+year) {
            return true;
          }
          return +year <= +maxYear;
        }
      },
      calendar: {
        key: 'validate.calendar',
        messageText: '',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage(this.validators.calendar.messageText), {
            field: component.errorLabel,
            maxDate: (0, _moment["default"])(component.dataValue).format(component.format)
          });
        },
        check: function check(component, setting, value, data, index) {
          this.validators.calendar.messageText = '';
          var widget = component.getWidget(index);
          if (!widget) {
            return true;
          }
          var settings = widget.settings,
            enteredDate = widget.enteredDate;
          var minDate = settings.minDate,
            maxDate = settings.maxDate,
            format = settings.format;
          var momentFormat = [(0, _utils.convertFormatToMoment)(format)];
          if (momentFormat[0].match(/M{3,}/g)) {
            momentFormat.push(momentFormat[0].replace(/M{3,}/g, 'MM'));
          }
          if (!value && enteredDate) {
            var _checkInvalidDate = (0, _calendarUtils.checkInvalidDate)(enteredDate, momentFormat, minDate, maxDate),
              message = _checkInvalidDate.message,
              result = _checkInvalidDate.result;
            if (!result) {
              this.validators.calendar.messageText = message;
              return result;
            }
          }
          if (value && enteredDate) {
            if ((0, _moment["default"])(value).format() !== (0, _moment["default"])(enteredDate, momentFormat, true).format() && enteredDate.match(/_/gi)) {
              this.validators.calendar.messageText = _calendarUtils.CALENDAR_ERROR_MESSAGES.INCOMPLETE;
              return false;
            } else {
              widget.enteredDate = '';
              return true;
            }
          }
        }
      },
      time: {
        key: 'validate.time',
        messageText: 'Invalid time',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage(this.validators.time.messageText), {
            field: component.errorLabel
          });
        },
        check: function check(component, setting, value) {
          if (component.isEmpty(value)) return true;
          return (0, _moment["default"])(value, component.component.format).isValid();
        }
      },
      availableValueProperty: {
        key: 'validate.availableValueProperty',
        method: 'validateValueProperty',
        messageText: 'Invalid Value Property',
        hasLabel: true,
        message: function message(component) {
          return component.t(component.errorMessage(this.validators.availableValueProperty.messageText), {
            field: component.errorLabel
          });
        },
        check: function check(component, setting, value) {
          if (component.component.dataSrc === 'url' && (_lodash["default"].isUndefined(value) || _lodash["default"].isObject(value))) {
            return false;
          }
          return true;
        }
      }
    };
  }
  _createClass(ValidationChecker, [{
    key: "checkValidator",
    value: function checkValidator(component, validator, setting, value, data, index, row, async) {
      var _this2 = this;
      var resultOrPromise = null;

      // Allow each component to override their own validators by implementing the validator.method
      if (validator.method && typeof component[validator.method] === 'function') {
        resultOrPromise = component[validator.method](setting, value, data, index, row, async);
      } else {
        resultOrPromise = validator.check.call(this, component, setting, value, data, index, row, async);
      }
      var processResult = function processResult(result) {
        if (typeof result === 'string') {
          return result;
        }
        if (!result && validator.message) {
          return validator.message.call(_this2, component, setting, index, row);
        }
        return '';
      };
      if (async) {
        return _nativePromiseOnly["default"].resolve(resultOrPromise).then(processResult);
      } else {
        return processResult(resultOrPromise);
      }
    }
  }, {
    key: "validate",
    value: function validate(component, validatorName, value, data, index, row, async, conditionallyVisible, validationObj) {
      // Skip validation for conditionally hidden components
      if (!conditionallyVisible && !_lodash["default"].get(component.component, 'validateWhenHidden', false)) {
        return false;
      }
      var validator = this.validators[validatorName];
      var setting = _lodash["default"].get(validationObj || component.component, validator.key, null);
      var resultOrPromise = this.checkValidator(component, validator, setting, value, data, index, row, async);
      var processResult = function processResult(result) {
        if (result) {
          var _component$refs$input;
          var resultData = {
            message: (0, _utils.unescapeHTML)(_lodash["default"].get(result, 'message', result)),
            level: _lodash["default"].get(result, 'level') === 'warning' ? 'warning' : 'error',
            path: (0, _utils.getArrayFromComponentPath)(component.path || ''),
            context: {
              validator: validatorName,
              hasLabel: validator.hasLabel,
              setting: setting,
              key: component.key,
              label: component.label,
              value: value,
              index: index,
              input: (_component$refs$input = component.refs.input) === null || _component$refs$input === void 0 ? void 0 : _component$refs$input[index]
            }
          };
          if (validatorName === 'unique' && component.conflictId) {
            resultData.conflictId = component.conflictId;
          }
          return resultData;
        } else {
          return false;
        }
      };
      if (async) {
        return _nativePromiseOnly["default"].resolve(resultOrPromise).then(processResult);
      } else {
        return processResult(resultOrPromise);
      }
    }
  }, {
    key: "checkComponent",
    value: function checkComponent(component, data, row) {
      var _component$addons,
        _this3 = this;
      var includeWarnings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var isServerSidePersistent = typeof process !== 'undefined' && _lodash["default"].get(process, 'release.name') === 'node' && !_lodash["default"].defaultTo(component.component.persistent, true);

      // If we're server-side and it's not a persistent component, don't run validation at all
      if (isServerSidePersistent || component.component.validate === false) {
        return async ? _nativePromiseOnly["default"].resolve([]) : [];
      }
      data = data || component.rootValue;
      row = row || component.data;
      var values = component.component.multiple && Array.isArray(component.validationValue) ? component.validationValue : [component.validationValue];
      var conditionallyVisible = component.conditionallyVisible();
      var addonsValidations = [];
      if (component !== null && component !== void 0 && (_component$addons = component.addons) !== null && _component$addons !== void 0 && _component$addons.length) {
        values.forEach(function (value) {
          component.addons.forEach(function (addon) {
            if (!addon.checkValidity(value)) {
              addonsValidations.push.apply(addonsValidations, _toConsumableArray(addon.errors || []));
            }
          });
        });
      }

      // If this component has the new validation system enabled, use it instead.
      var validations = _lodash["default"].get(component, 'component.validations');
      var nextGenResultsOrPromises = [];
      if (validations && Array.isArray(validations) && validations.length) {
        var validationsGroupedByMode = _lodash["default"].chain(validations).groupBy(function (validation) {
          return validation.mode;
        }).value();
        if (component.calculateCondition) {
          includeWarnings = true;
          var uiGroupedValidation = _lodash["default"].chain(validationsGroupedByMode.ui).filter('active').groupBy(function (validation) {
            return validation.group || null;
          }).value();
          var commonValidations = uiGroupedValidation["null"] || [];
          delete uiGroupedValidation["null"];
          commonValidations.forEach(function (_ref3) {
            var condition = _ref3.condition,
              message = _ref3.message,
              severity = _ref3.severity;
            if (!component.calculateCondition(condition)) {
              nextGenResultsOrPromises.push({
                level: severity || 'error',
                message: component.t(message),
                componentInstance: component
              });
            }
          });
          _lodash["default"].forEach(uiGroupedValidation, function (validationGroup) {
            _lodash["default"].forEach(validationGroup, function (_ref4) {
              var condition = _ref4.condition,
                message = _ref4.message,
                severity = _ref4.severity;
              if (!component.calculateCondition(condition)) {
                nextGenResultsOrPromises.push({
                  level: severity || 'error',
                  message: component.t(message),
                  componentInstance: component
                });
                return false;
              }
            });
          });
        } else {
          nextGenResultsOrPromises = this.checkValidations(component, validations, data, row, values, async);
        }
        if (component.validators.includes('custom') && validationsGroupedByMode.js) {
          _lodash["default"].each(validationsGroupedByMode.js, function (validation) {
            nextGenResultsOrPromises.push(_lodash["default"].map(values, function (value, index) {
              return _this3.validate(component, 'custom', value, data, index, row, async, conditionallyVisible, validation);
            }));
          });
        }
        if (component.validators.includes('json') && validationsGroupedByMode.json) {
          _lodash["default"].each(validationsGroupedByMode.json, function (validation) {
            nextGenResultsOrPromises.push(_lodash["default"].map(values, function (value, index) {
              return _this3.validate(component, 'json', value, data, index, row, async, conditionallyVisible, validation);
            }));
          });
        }
      }
      var validateCustom = _lodash["default"].get(component, 'component.validate.custom');
      var customErrorMessage = _lodash["default"].get(component, 'component.validate.customMessage');

      // Run primary validators
      var resultsOrPromises = (0, _lodash["default"])(component.validators).chain().map(function (validatorName) {
        if (!_this3.validators.hasOwnProperty(validatorName)) {
          return {
            message: "Validator for \"".concat(validatorName, "\" is not defined"),
            level: 'warning',
            context: {
              validator: validatorName,
              key: component.key,
              label: component.label
            }
          };
        }

        // Handle the case when there is no values defined and it is required.
        if (validatorName === 'required' && !values.length) {
          return [_this3.validate(component, validatorName, null, data, 0, row, async, conditionallyVisible)];
        }
        return _lodash["default"].map(values, function (value, index) {
          return _this3.validate(component, validatorName, value, data, index, row, async, conditionallyVisible);
        });
      }).flatten().value();

      // Run the "unique" pseudo-validator
      component.component.validate = component.component.validate || {};
      component.component.validate.unique = component.component.unique;
      resultsOrPromises.push(this.validate(component, 'unique', component.validationValue, data, 0, data, async, conditionallyVisible));

      // Run the "multiple" pseudo-validator
      component.component.validate.multiple = component.component.multiple;
      resultsOrPromises.push(this.validate(component, 'multiple', component.validationValue, data, 0, data, async, conditionallyVisible));
      resultsOrPromises.push.apply(resultsOrPromises, addonsValidations);
      resultsOrPromises.push.apply(resultsOrPromises, _toConsumableArray(nextGenResultsOrPromises));

      // Define how results should be formatted
      var formatResults = function formatResults(results) {
        // Condense to a single flat array
        results = (0, _lodash["default"])(results).chain().flatten().compact().value();
        if (customErrorMessage || validateCustom) {
          _lodash["default"].each(results, function (result) {
            result.message = component.t(customErrorMessage || result.message, {
              field: component.errorLabel,
              data: data,
              row: row,
              error: result
            });
            result.context.hasLabel = false;
          });
        }
        return includeWarnings ? results : _lodash["default"].reject(results, function (result) {
          return result.level === 'warning';
        });
      };
      // Wait for results if using async mode, otherwise process and return immediately
      if (async) {
        return _nativePromiseOnly["default"].all(resultsOrPromises).then(formatResults);
      } else {
        return formatResults(resultsOrPromises);
      }
    }

    /**
     * Use the new validations engine to evaluate any errors.
     *
     * @param component
     * @param validations
     * @param data
     * @param row
     * @param values
     * @returns {any[]}
     */
  }, {
    key: "checkValidations",
    value: function checkValidations(component, validations, data, row, values, async) {
      var _this4 = this;
      // Get results.
      var results = validations.map(function (validation) {
        return _this4.checkRule(component, validation, data, row, values, async);
      });

      // Flatten array and filter out empty results.
      var messages = results.reduce(function (prev, result) {
        if (result) {
          return [].concat(_toConsumableArray(prev), _toConsumableArray(result));
        }
        return prev;
      }, []).filter(function (result) {
        return result;
      });

      // Keep only the last error for each rule.
      var rules = messages.reduce(function (prev, message) {
        prev[message.context.validator] = message;
        return prev;
      }, {});
      return Object.values(rules);
    }
  }, {
    key: "checkRule",
    value: function checkRule(component, validation, data, row, values, async) {
      var Rule = _Rules["default"].getRule(validation.rule);
      var results = [];
      if (Rule) {
        var rule = new Rule(component, validation.settings, this.config);
        values.map(function (value, index) {
          var result = rule.check(value, data, row, async);
          if (result !== true) {
            results.push({
              level: validation.level || 'error',
              message: component.t(validation.message || rule.defaultMessage, {
                settings: validation.settings,
                field: component.errorLabel,
                data: data,
                row: row,
                error: result
              }),
              context: {
                key: component.key,
                index: index,
                label: component.label,
                validator: validation.rule
              }
            });
          }
        });
      }
      // If there are no results, return false so it is removed by filter.
      return results.length === 0 ? false : results;
    }
  }, {
    key: "check",
    get: function get() {
      return this.checkComponent;
    }
  }, {
    key: "get",
    value: function get() {
      _lodash["default"].get.call(this, arguments);
    }
  }, {
    key: "each",
    value: function each() {
      _lodash["default"].each.call(this, arguments);
    }
  }, {
    key: "has",
    value: function has() {
      _lodash["default"].has.call(this, arguments);
    }
  }]);
  return ValidationChecker;
}();
exports.ValidationChecker = ValidationChecker;
ValidationChecker.config = {
  db: null,
  token: null,
  form: null,
  submission: null
};
var instance = new ValidationChecker();
exports["default"] = instance;