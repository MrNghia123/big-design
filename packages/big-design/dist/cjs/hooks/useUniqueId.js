"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUniqueId = useUniqueId;

var _reactUid = require("react-uid");

function useUniqueId(prefix) {
  var uid = (0, _reactUid.useUID)();
  return "bd-".concat(prefix, "-").concat(uid);
}