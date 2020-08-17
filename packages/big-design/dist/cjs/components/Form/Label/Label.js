"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlLabel = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var FormControlLabel = function FormControlLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledLabel, props);
};

exports.FormControlLabel = FormControlLabel;