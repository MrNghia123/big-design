"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var RawBox = function RawBox(props) {
  return /*#__PURE__*/_react.default.createElement(_styled.StyledBox, (0, _extends2.default)({
    ref: props.forwardedRef
  }, props));
};

var Box = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(RawBox, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Box = Box;
Box.displayName = 'Box';