"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestoreIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _utils = require("../utils");

// **********************************
// Auto-generated file, do NOT modify
// **********************************
var Icon = function Icon(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      theme = _ref.theme,
      props = (0, _objectWithoutProperties2.default)(_ref, ["svgRef", "title", "theme"]);
  var uniqueTitleId = (0, _utils.useUniqueId)('icon');
  var titleId = title ? props.titleId || uniqueTitleId : undefined;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_react.default.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.25 3a9.003 9.003 0 00-9.26 9H2.2c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.32-.31.09-.85-.35-.85h-1.8c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48a.994.994 0 00-1.32.08c-.42.43-.39 1.13.08 1.5a8.931 8.931 0 005.52 1.9c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.33-.74-.75-.74z"
  }));
};

var IconWithForwardedRef = (0, _react.forwardRef)(function (iconProps, ref) {
  return /*#__PURE__*/_react.default.createElement(Icon, (0, _extends2.default)({}, iconProps, {
    svgRef: ref
  }));
});
var RestoreIcon = (0, _react.memo)((0, _base.createStyledIcon)(IconWithForwardedRef));
exports.RestoreIcon = RestoreIcon;
RestoreIcon.displayName = 'RestoreIcon';