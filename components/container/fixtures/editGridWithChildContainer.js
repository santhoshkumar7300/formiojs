"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'Edit Grid With Child Container',
  name: 'editGridWithChildContainer',
  path: 'editgridwithchildcontainer',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Edit Grid',
    tableView: false,
    validateWhenHidden: false,
    rowDrafts: false,
    key: 'editGrid',
    type: 'editgrid',
    displayAsTable: false,
    input: true,
    components: [{
      label: 'Container',
      tableView: false,
      validateWhenHidden: false,
      key: 'container',
      type: 'container',
      input: true,
      components: [{
        label: 'Text Field',
        applyMaskOn: 'change',
        tableView: true,
        validateWhenHidden: false,
        key: 'textField',
        type: 'textfield',
        input: true
      }]
    }]
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }]
};
exports["default"] = _default;