"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Date / Time',
    format: 'hh:mm a',
    tableView: false,
    enableDate: false,
    enableMinDateInput: false,
    datePicker: {
      disableWeekends: false,
      disableWeekdays: false
    },
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
      noCalendar: true,
      format: 'hh:mm a',
      hourIncrement: 1,
      minuteIncrement: 1,
      'time_24hr': false,
      minDate: null,
      disableWeekends: false,
      disableWeekdays: false,
      maxDate: null
    }
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  title: 'FIO-3743',
  display: 'form',
  name: 'fio3743',
  path: 'fio3743'
};
exports["default"] = _default;