"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  _id: '634d14afcfc5b40fecb8fb12',
  title: '4824-5',
  name: '48245',
  path: '48245',
  type: 'form',
  display: 'form',
  tags: [],
  owner: '6080329e2c806a03c1e15aa4',
  components: [{
    label: 'Data Grid',
    reorder: false,
    addAnotherPosition: 'bottom',
    layoutFixed: false,
    enableRowGroups: false,
    initEmpty: false,
    tableView: false,
    defaultValue: [{}],
    key: 'dataGrid',
    type: 'datagrid',
    input: true,
    components: [{
      label: 'Text Field',
      tableView: true,
      key: 'textField',
      type: 'textfield',
      input: true
    }, {
      label: 'Text Area',
      autoExpand: false,
      tableView: true,
      key: 'textArea',
      type: 'textarea',
      input: true
    }, {
      label: 'Number',
      mask: false,
      tableView: false,
      delimiter: false,
      requireDecimal: false,
      inputFormat: 'plain',
      truncateMultipleSpaces: false,
      key: 'number',
      type: 'number',
      input: true
    }, {
      label: 'Password',
      autocomplete: 'dzmitry@form.io',
      tableView: false,
      key: 'password',
      type: 'password',
      input: true,
      "protected": true
    }, {
      label: 'Checkbox',
      tableView: false,
      key: 'checkbox',
      type: 'checkbox',
      input: true
    }, {
      label: 'Select Boxes',
      optionsLabelPosition: 'right',
      tableView: false,
      values: [{
        label: 'Pamela Raynor',
        value: 'pamelaRaynor',
        shortcut: ''
      }, {
        label: 'Evert Dickinson',
        value: 'evertDickinson',
        shortcut: ''
      }, {
        label: 'Paige Brekke',
        value: 'paigeBrekke',
        shortcut: ''
      }],
      key: 'selectBoxes',
      type: 'selectboxes',
      input: true,
      inputType: 'checkbox'
    }, {
      label: 'Select',
      widget: 'choicesjs',
      tableView: true,
      data: {
        values: [{
          label: 'Aliza Hessel',
          value: 'alizaHessel'
        }, {
          label: 'Carlie Nikolaus',
          value: 'carlieNikolaus'
        }, {
          label: 'Jettie Wolf',
          value: 'jettieWolf'
        }]
      },
      key: 'select',
      type: 'select',
      input: true
    }, {
      label: 'Radio',
      optionsLabelPosition: 'right',
      inline: false,
      tableView: false,
      values: [{
        label: 'Anabelle Spinka',
        value: 'anabelleSpinka',
        shortcut: ''
      }, {
        label: 'Osvaldo Krajcik',
        value: 'osvaldoKrajcik',
        shortcut: ''
      }, {
        label: 'Cierra Reichel',
        value: 'cierraReichel',
        shortcut: ''
      }],
      key: 'radio',
      type: 'radio',
      input: true
    }, {
      label: 'Email',
      tableView: true,
      key: 'email',
      type: 'email',
      input: true
    }, {
      label: 'Url',
      tableView: true,
      key: 'url',
      type: 'url',
      input: true
    }, {
      label: 'Phone Number',
      tableView: true,
      key: 'phoneNumber',
      type: 'phoneNumber',
      input: true
    }, {
      label: 'Tags',
      tableView: false,
      key: 'tags',
      type: 'tags',
      input: true
    }, {
      label: 'Address',
      tableView: true,
      provider: 'google',
      key: 'address',
      type: 'address',
      providerOptions: {
        params: {
          autocompleteOptions: {},
          key: ''
        }
      },
      input: true,
      components: [{
        label: 'Address 1',
        tableView: false,
        key: 'address1',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }, {
        label: 'Address 2',
        tableView: false,
        key: 'address2',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }, {
        label: 'City',
        tableView: false,
        key: 'city',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }, {
        label: 'State',
        tableView: false,
        key: 'state',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }, {
        label: 'Country',
        tableView: false,
        key: 'country',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }, {
        label: 'Zip Code',
        tableView: false,
        key: 'zip',
        type: 'textfield',
        input: true,
        customConditional: 'show = _.get(instance, \'parent.manualMode\', false);'
      }]
    }, {
      label: 'Date / Time',
      tableView: false,
      datePicker: {
        disableWeekends: false,
        disableWeekdays: false
      },
      enableMinDateInput: false,
      enableMaxDateInput: false,
      key: 'dateTime',
      type: 'datetime',
      input: true,
      widget: {
        type: 'calendar',
        displayInTimezone: 'viewer',
        locale: 'en',
        useLocaleSettings: false,
        allowInput: true,
        mode: 'single',
        enableTime: true,
        noCalendar: false,
        format: 'yyyy-MM-dd hh:mm a',
        hourIncrement: 1,
        minuteIncrement: 1,
        'time_24hr': false,
        minDate: null,
        disableWeekends: false,
        disableWeekdays: false,
        maxDate: null
      }
    }, {
      label: 'Day',
      hideInputLabels: false,
      inputsLabelPosition: 'top',
      useLocaleSettings: false,
      tableView: false,
      fields: {
        day: {
          hide: false
        },
        month: {
          hide: false
        },
        year: {
          hide: false
        }
      },
      key: 'day',
      type: 'day',
      input: true,
      defaultValue: '00/00/0000'
    }, {
      label: 'Time',
      tableView: true,
      key: 'time',
      type: 'time',
      input: true,
      inputMask: '99:99'
    }, {
      label: 'Currency',
      mask: false,
      spellcheck: true,
      tableView: false,
      currency: 'USD',
      inputFormat: 'plain',
      truncateMultipleSpaces: false,
      key: 'currency',
      type: 'currency',
      input: true,
      delimiter: true
    }, {
      label: 'Survey',
      tableView: false,
      questions: [{
        label: 'Ole Ferry',
        value: 'oleFerry',
        tooltip: ''
      }, {
        label: 'Kariane Erdman',
        value: 'karianeErdman',
        tooltip: ''
      }],
      values: [{
        label: 'Alexa Corwin',
        value: 'alexaCorwin',
        tooltip: ''
      }, {
        label: 'Susie Schiller',
        value: 'susieSchiller',
        tooltip: ''
      }],
      key: 'survey',
      type: 'survey',
      input: true
    }]
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  settings: {
    theme: 'Materia'
  },
  properties: {},
  project: '61029d3b4c9d4e24e774bb15',
  _vid: 0,
  created: '2022-10-17T08:39:11.941Z',
  modified: '2022-10-19T08:24:10.344Z',
  machineName: 'dev-pvbwkiwgifflcai:48245'
};
exports["default"] = _default;