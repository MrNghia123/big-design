"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsetDescription = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = require("../../Typography");

var FieldsetDescription = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(_Typography.Small, props);
});
exports.FieldsetDescription = FieldsetDescription;