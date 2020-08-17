"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var RawFlex = function RawFlex(_ref) {
  var as = _ref.as,
      forwardedRef = _ref.forwardedRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["as", "forwardedRef"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledFlex, (0, _extends2.default)({
    forwardedAs: as,
    ref: forwardedRef
  }, rest));
};

var Flex = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(RawFlex, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});
exports.Flex = Flex;