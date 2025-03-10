"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'editGrid',
    hideLabel: true,
    tableView: false,
    modalEdit: true,
    templates: {
      header: '<div class="row">\n  <div class="col-sm-2"><strong>Title</strong></div>\n  <div class="col-sm-3"><strong>First name</strong></div>\n  <div class="col-sm-6"><strong>Last name</strong></div>\n  <div class="col-sm-1"></div>\n</div>',
      row: '<div class="row">\n  <div class="col-sm-2">\n   {{ _.get(row, \'title\', \'\') }}\n  </div>\n  <div class="col-sm-3">\n   {{ _.get(row, \'firstName\', \'\') }}\n  </div>\n  <div class="col-sm-3">\n   {{ _.get(row, \'familyName\', \'\') }}\n  </div>\n  <div class="col-sm-1">\n  {% if (instance.options.readOnly) { %}\n    <div class="btn-group pull-right">\n      <div class="btn btn-default btn-light btn-sm editRow">\n        <i class="{{ iconClass(\'eye\') }}"></i>\n      </div>\n    </div>\n  {% } else { %}\n    <div class="btn-group pull-right">\n      <button class="btn btn-secondary btn-sm editRow" >\n        <i class="{{ iconClass(\'edit\') }}"></i>\n      </button>\n      <button class="btn btn-danger btn-sm removeRow">\n        <i class="{{ iconClass(\'trash\') }}"></i>\n      </button>\n    </div>\n  {% } %}\n  </div>\n</div>'
    },
    addAnother: 'Add',
    'modal': true,
    saveRow: 'Close',
    redrawOn: 'data',
    validate: {
      required: true,
      maxLength: 2
    },
    rowDrafts: true,
    key: 'editGrid',
    type: 'editgrid',
    displayAsTable: false,
    alwaysEnabled: false,
    input: true,
    components: [{
      label: 'Title',
      widget: 'choicesjs',
      tableView: true,
      data: {
        values: [{
          value: 'mr',
          label: 'Mr'
        }, {
          value: 'ms',
          label: 'Ms'
        }]
      },
      validate: {
        required: true
      },
      key: 'title',
      type: 'select',
      labelWidth: 30,
      labelMargin: 3,
      alwaysEnabled: false,
      input: true,
      hideOnChildrenHidden: false
    }, {
      label: 'First name',
      tableView: true,
      validate: {
        required: true
      },
      key: 'firstName',
      type: 'textfield',
      labelWidth: 30,
      labelMargin: 3,
      alwaysEnabled: false,
      input: true,
      hideOnChildrenHidden: false
    }, {
      label: 'Family name',
      tableView: true,
      validate: {
        required: true
      },
      key: 'familyName',
      type: 'textfield',
      labelWidth: 30,
      labelMargin: 3,
      alwaysEnabled: false,
      input: true,
      hideOnChildrenHidden: false
    }],
    path: 'editGridPath'
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  title: 'edit grids',
  display: 'form'
};
exports["default"] = _default;