// Object.defineProperty(exports, "__esModule", {
//   value: true,
// });
// exports.default = function (ctx) {
//   var __t,
//     __p = "",
//     __j = Array.prototype.join;
//   function print() {
//     __p += __j.call(arguments, "");
//   }
//   __p +=
//     '<div class="card form-builder-panel" ref="group-panel-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '">\n  <div class="card-header form-builder-group-header" id="heading-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '">\n    <h5 class="mb-0 mt-0 d-grid accordion-header ">\n      <button\n  style="color:#E6E6FA;"      class="btn btn-block  builder-group-button"\n        type="button"\n        data-toggle="collapse"\n        data-target="#group-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '"\n        data-parent="#' +
//     ((__t = ctx.groupId) == null ? "" : __t) +
//     '"\n        aria-expanded="' +
//     ((__t = ctx.group.default) == null ? "" : __t) +
//     '"\n        aria-controls="group-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '"\n        ref="sidebar-anchor"\n      >\n        ' +
//     ((__t = ctx.t(ctx.group.title, { _userInput: true })) == null ? "" : __t) +
//     '\n      </button>\n    </h5>\n  </div>\n  <div\n    id="group-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '"\n    class="collapse ' +
//     ((__t = ctx.group.default ? " show" : "") == null ? "" : __t) +
//     '"\n    data-parent="#' +
//     ((__t = ctx.groupId) == null ? "" : __t) +
//     '"\n    data-default="' +
//     ((__t = ctx.group.default) == null ? "" : __t) +
//     '"\n    aria-labelledby="heading-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '"\n    ref="sidebar-group"\n  >\n    <div id="group-container-' +
//     ((__t = ctx.groupKey) == null ? "" : __t) +
//     '" class="d-grid gap-1 no-drop p-2 w-100" ref="sidebar-container">\n      ';
//   if (ctx.group.componentOrder.length || ctx.subgroups.length) {
//     __p += "\n        ";
//     !ctx.group.componentOrder ||
//       ctx.group.componentOrder.forEach(function (componentKey) {
//         __p +=
//           '\n          <span\n            ref="sidebar-component"\n            data-group="' +
//           ((__t = ctx.groupKey) == null ? "" : __t) +
//           '"\n            data-key="' +
//           ((__t = ctx.group.components[componentKey].key) == null ? "" : __t) +
//           '"\n            data-type="' +
//           ((__t = ctx.group.components[componentKey].schema.type) == null
//             ? ""
//             : __t) +
//           '"\n            class="btn btn-outline-secondary btn-sm formcomponent drag-copy m-0"\n            tabindex="' +
//           ((__t = ctx.keyboardActionsEnabled ? 0 : -1) == null ? "" : __t) +
//           '"\n          >\n            ';
//         if (ctx.group.components[componentKey].icon) {
//           __p +=
//             '\n              <i class="' +
//             ((__t = ctx.iconClass(ctx.group.components[componentKey].icon)) ==
//             null
//               ? ""
//               : __t) +
//             '" style="margin-right: 5px;"></i>\n            ';
//         }
//         __p +=
//           "\n            " +
//           ((__t = ctx.t(ctx.group.components[componentKey].title, {
//             _userInput: true,
//           })) == null
//             ? ""
//             : __t) +
//           "\n          </span>\n        ";
//       });
//     __p +=
//       "\n        " +
//       ((__t = ctx.subgroups.join("")) == null ? "" : __t) +
//       "\n      ";
//   } else {
//     __p +=
//       "\n        <div>" +
//       ((__t = ctx.t("No Matches Found")) == null ? "" : __t) +
//       "</div>\n      ";
//   }
//   __p += "\n    </div>\n  </div>\n</div>\n";
//   return __p;
// };

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = function (ctx) {
  var __t,
    __p = "",
    __j = Array.prototype.join;
  function print() {
    __p += __j.call(arguments, "");
  }
  __p +=
    '<div class="card form-builder-panel" style="border: 1px solid #734F96; margin-bottom: 10px;" ref="group-panel-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '">\n  <div class="card-header form-builder-group-header" id="heading-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '">\n    <h5 class="mb-0 mt-0 d-grid accordion-header ">\n      <button\n        style="color:#734F96;"\n        class="btn btn-block builder-group-button"\n        type="button"\n        data-toggle="collapse"\n        data-target="#group-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '"\n        data-parent="#' +
    ((__t = ctx.groupId) == null ? "" : __t) +
    '"\n        aria-expanded="' +
    ((__t = ctx.group.default) == null ? "" : __t) +
    '"\n        aria-controls="group-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '"\n        ref="sidebar-anchor"\n      >\n        ' +
    ((__t = ctx.t(ctx.group.title, { _userInput: true })) == null ? "" : __t) +
    '\n      </button>\n    </h5>\n  </div>\n  <div\n    id="group-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '"\n    class="collapse ' +
    ((__t = ctx.group.default ? " show" : "") == null ? "" : __t) +
    '"\n    data-parent="#' +
    ((__t = ctx.groupId) == null ? "" : __t) +
    '"\n    data-default="' +
    ((__t = ctx.group.default) == null ? "" : __t) +
    '"\n    aria-labelledby="heading-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '"\n    ref="sidebar-group"\n  >\n    <div id="group-container-' +
    ((__t = ctx.groupKey) == null ? "" : __t) +
    '" class="d-grid gap-1 no-drop p-2 w-100" ref="sidebar-container">\n      ';
  if (ctx.group.componentOrder.length || ctx.subgroups.length) {
    __p += "\n        ";
    !ctx.group.componentOrder ||
      ctx.group.componentOrder.forEach(function (componentKey) {
        __p +=
          '\n          <span\n            ref="sidebar-component"\n            data-group="' +
          ((__t = ctx.groupKey) == null ? "" : __t) +
          '"\n            data-key="' +
          ((__t = ctx.group.components[componentKey].key) == null ? "" : __t) +
          '"\n            data-type="' +
          ((__t = ctx.group.components[componentKey].schema.type) == null
            ? ""
            : __t) +
          '"\n            class="btn btn-outline-secondary btn-sm formcomponent drag-copy m-0"\n            tabindex="' +
          ((__t = ctx.keyboardActionsEnabled ? 0 : -1) == null ? "" : __t) +
          '"\n          >\n            ';
        if (ctx.group.components[componentKey].icon) {
          __p +=
            '\n              <i class="' +
            ((__t = ctx.iconClass(ctx.group.components[componentKey].icon)) ==
            null
              ? ""
              : __t) +
            '" style="margin-right: 5px;"></i>\n            ';
        }
        __p +=
          "\n            " +
          ((__t = ctx.t(ctx.group.components[componentKey].title, {
            _userInput: true,
          })) == null
            ? ""
            : __t) +
          "\n          </span>\n        ";
      });
    __p +=
      "\n        " +
      ((__t = ctx.subgroups.join("")) == null ? "" : __t) +
      "\n      ";
  } else {
    __p +=
      "\n        <div>" +
      ((__t = ctx.t("No Matches Found")) == null ? "" : __t) +
      "</div>\n      ";
  }
  __p += "\n    </div>\n  </div>\n</div>\n";
  return __p;
};
