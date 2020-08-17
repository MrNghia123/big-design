"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var RawFlexItem = function RawFlexItem(_ref) {
  var as = _ref.as,
      forwardedRef = _ref.forwardedRef,
      props = (0, _objectWithoutProperties2.default)(_ref, ["as", "forwardedRef"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledFlexItem, (0, _extends2.default)({
    ref: forwardedRef,
    forwardedAs: as
  }, props));
};

var FlexItem = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(RawFlexItem, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});
exports.FlexItem = FlexItem;