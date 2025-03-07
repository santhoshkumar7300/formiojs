"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
var _address = _interopRequireDefault(require("./address"));
var _builder = _interopRequireDefault(require("./builder"));
var _builderComponent = _interopRequireDefault(require("./builderComponent"));
var _builderComponents = _interopRequireDefault(require("./builderComponents"));
var _builderEditForm = _interopRequireDefault(require("./builderEditForm"));
var _builderPlaceholder = _interopRequireDefault(require("./builderPlaceholder"));
var _builderSidebar = _interopRequireDefault(require("./builderSidebar"));
var _builderSidebarGroup = _interopRequireDefault(require("./builderSidebarGroup"));
var _builderWizard = _interopRequireDefault(require("./builderWizard"));
var _button = _interopRequireDefault(require("./button"));
var _checkbox = _interopRequireDefault(require("./checkbox"));
var _columns = _interopRequireDefault(require("./columns"));
var _component = _interopRequireDefault(require("./component"));
var _componentModal = _interopRequireDefault(require("./componentModal"));
var _components = _interopRequireDefault(require("./components"));
var _tableComponents = _interopRequireDefault(require("./tableComponents"));
var _container = _interopRequireDefault(require("./container"));
var _datagrid = _interopRequireDefault(require("./datagrid"));
var _day = _interopRequireDefault(require("./day"));
var _dialog = _interopRequireDefault(require("./dialog"));
var _editgrid = _interopRequireDefault(require("./editgrid"));
var _editgridTable = _interopRequireDefault(require("./editgridTable"));
var _field = _interopRequireDefault(require("./field"));
var _fieldset = _interopRequireDefault(require("./fieldset"));
var _file = _interopRequireDefault(require("./file"));
var _html = _interopRequireDefault(require("./html"));
var _icon = _interopRequireDefault(require("./icon"));
var _iconClass = _interopRequireDefault(require("./iconClass"));
var _input = _interopRequireDefault(require("./input"));
var _label = _interopRequireDefault(require("./label"));
var _loader = _interopRequireDefault(require("./loader"));
var _loading = _interopRequireDefault(require("./loading"));
var _map = _interopRequireDefault(require("./map"));
var _message = _interopRequireDefault(require("./message"));
var _modaldialog = _interopRequireDefault(require("./modaldialog"));
var _modaledit = _interopRequireDefault(require("./modaledit"));
var _modalPreview = _interopRequireDefault(require("./modalPreview"));
var _multipleMasksInput = _interopRequireDefault(require("./multipleMasksInput"));
var _multiValueRow = _interopRequireDefault(require("./multiValueRow"));
var _multiValueTable = _interopRequireDefault(require("./multiValueTable"));
var _panel = _interopRequireDefault(require("./panel"));
var _pdf = _interopRequireDefault(require("./pdf"));
var _pdfBuilder = _interopRequireDefault(require("./pdfBuilder"));
var _pdfBuilderUpload = _interopRequireDefault(require("./pdfBuilderUpload"));
var _radio = _interopRequireDefault(require("./radio"));
var _resourceAdd = _interopRequireDefault(require("./resourceAdd"));
var _select = _interopRequireDefault(require("./select"));
var _selectOption = _interopRequireDefault(require("./selectOption"));
var _signature = _interopRequireDefault(require("./signature"));
var _survey = _interopRequireDefault(require("./survey"));
var _tab = _interopRequireDefault(require("./tab"));
var _table = _interopRequireDefault(require("./table"));
var _tree = _interopRequireDefault(require("./tree"));
var _partials = _interopRequireDefault(require("./tree/partials"));
var _webform = _interopRequireDefault(require("./webform"));
var _well = _interopRequireDefault(require("./well"));
var _wizard = _interopRequireDefault(require("./wizard"));
var _wizardHeader = _interopRequireDefault(require("./wizardHeader"));
var _wizardHeaderClassic = _interopRequireDefault(require("./wizardHeaderClassic"));
var _wizardHeaderVertical = _interopRequireDefault(require("./wizardHeaderVertical"));
var _wizardNav = _interopRequireDefault(require("./wizardNav"));
var _cssClasses = _interopRequireDefault(require("./cssClasses"));
var _errorsList = _interopRequireDefault(require("./errorsList"));
var _alert = _interopRequireDefault(require("./alert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = _objectSpread(_objectSpread({
  transform: function transform(type, text) {
    if (!text) {
      return text;
    }
    switch (type) {
      case 'class':
        return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
    }
    return text;
  },
  defaultIconset: 'fa',
  iconClass: _iconClass["default"],
  cssClasses: _cssClasses["default"],
  address: _address["default"],
  builder: _builder["default"],
  builderComponent: _builderComponent["default"],
  builderComponents: _builderComponents["default"],
  builderEditForm: _builderEditForm["default"],
  builderPlaceholder: _builderPlaceholder["default"],
  builderSidebar: _builderSidebar["default"],
  builderSidebarGroup: _builderSidebarGroup["default"],
  builderWizard: _builderWizard["default"],
  button: _button["default"],
  checkbox: _checkbox["default"],
  columns: _columns["default"],
  component: _component["default"],
  componentModal: _componentModal["default"],
  components: _components["default"],
  tableComponents: _tableComponents["default"],
  container: _container["default"],
  datagrid: _datagrid["default"],
  day: _day["default"],
  dialog: _dialog["default"],
  editgrid: _editgrid["default"],
  editgridTable: _editgridTable["default"],
  field: _field["default"],
  fieldset: _fieldset["default"],
  file: _file["default"],
  html: _html["default"],
  icon: _icon["default"],
  input: _input["default"],
  label: _label["default"],
  loader: _loader["default"],
  loading: _loading["default"],
  map: _map["default"],
  message: _message["default"],
  modaledit: _modaledit["default"],
  modaldialog: _modaldialog["default"],
  modalPreview: _modalPreview["default"],
  multipleMasksInput: _multipleMasksInput["default"],
  multiValueRow: _multiValueRow["default"],
  multiValueTable: _multiValueTable["default"],
  panel: _panel["default"],
  pdf: _pdf["default"],
  pdfBuilder: _pdfBuilder["default"],
  pdfBuilderUpload: _pdfBuilderUpload["default"],
  radio: _radio["default"],
  resourceAdd: _resourceAdd["default"],
  select: _select["default"],
  selectOption: _selectOption["default"],
  signature: _signature["default"],
  survey: _survey["default"],
  tab: _tab["default"],
  table: _table["default"],
  tree: _tree["default"]
}, _partials["default"]), {}, {
  webform: _webform["default"],
  well: _well["default"],
  wizard: _wizard["default"],
  wizardHeader: _wizardHeader["default"],
  wizardHeaderClassic: _wizardHeaderClassic["default"],
  wizardHeaderVertical: _wizardHeaderVertical["default"],
  wizardNav: _wizardNav["default"],
  errorsList: _errorsList["default"],
  alert: _alert["default"]
});
exports["default"] = _default;