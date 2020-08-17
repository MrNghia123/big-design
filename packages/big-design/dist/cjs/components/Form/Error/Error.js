"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlError = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Typography = require("../../Typography");

var FormControlError = function FormControlError(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(_Typography.Small, (0, _extends2.default)({
    color: "danger",
    margin: "none",
    marginLeft: "xxSmall"
  }, props));
};

exports.FormControlError = FormControlError;