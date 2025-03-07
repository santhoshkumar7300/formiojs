"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  key: 'labelPosition',
  ignore: true
}, {
  key: 'placeholder',
  ignore: true
}, {
  key: 'description',
  ignore: true
}, {
  key: 'autofocus',
  ignore: true
}, {
  key: 'tooltip',
  ignore: true
}, {
  key: 'tabindex',
  ignore: true
}, {
  key: 'tableView',
  ignore: true
}, {
  key: 'hideLabel',
  ignore: true
}, {
  weight: 0,
  type: 'textfield',
  input: true,
  key: 'label',
  label: 'Label',
  placeholder: 'Field Label',
  tooltip: 'The label for this field.',
  validate: {
    required: true
  },
  autofocus: true,
  overrideEditForm: true
}];
exports["default"] = _default;