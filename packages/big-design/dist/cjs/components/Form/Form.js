"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _styled = require("./styled");

var StyleableForm = function StyleableForm(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = (0, _objectWithoutProperties2.default)(_ref, ["forwardedRef"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledForm, (0, _extends2.default)({}, props, {
    ref: forwardedRef
  }));
};

var Form = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StyleableForm, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Form = Form;