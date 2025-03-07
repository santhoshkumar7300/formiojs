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
//     '<div id="' +
//     ((__t = ctx.groupId) == null ? "" : __t) +
//     '" class="accordion builder-sidebar' +
//     ((__t = ctx.scrollEnabled ? " builder-sidebar_scroll" : "") == null
//       ? ""
//       : __t) +
//     '" ref="sidebar">\n  <input class="form-control builder-sidebar_search" type="search" ref="sidebar-search" placeholder="' +
//     ((__t = ctx.t("Search field(s)")) == null ? "" : __t) +
//     '" />\n  <div ref="sidebar-groups">\n    ';
//   ctx.groups.forEach(function (group) {
//     __p += "\n      " + ((__t = group) == null ? "" : __t) + "\n    ";
//   });
//   __p += "\n  </div>\n</div>\n";
//   return __p;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (ctx) {
  var __t,
    __p = "",
    __j = Array.prototype.join;
  function print() {
    __p += __j.call(arguments, "");
  }
  __p +=
    // Using an <aside> element with a lavender background.
    '<aside id="' +
    (ctx.groupId == null ? "" : ctx.groupId) +
    '" class="accordion builder-sidebar" style="background-color: lavender;" ref="sidebar">\n' +
    '  <div class="input-group mb-3">\n' +
    '    <input class="form-control builder-sidebar_search" type="search" ref="sidebar-search" placeholder="' +
    (ctx.t("Search field(s)") == null ? "" : ctx.t("Search field(s)")) +
    '" aria-label="Search" />\n' +
    "  </div>\n" +
    '  <div ref="sidebar-groups">\n';
  ctx.groups.forEach(function (group) {
    __p += "\n      " + (group == null ? "" : group) + "\n    ";
  });
  __p += "\n  </div>\n</aside>\n";
  return __p;
};
