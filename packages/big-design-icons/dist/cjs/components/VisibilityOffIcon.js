"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityOffIcon = void 0;

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
    d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16a.996.996 0 000 1.41l1.97 1.97A11.892 11.892 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72a.996.996 0 101.41-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33a2.97 2.97 0 00-2.64-2.64l2.64 2.64z"
  }));
};

var IconWithForwardedRef = (0, _react.forwardRef)(function (iconProps, ref) {
  return /*#__PURE__*/_react.default.createElement(Icon, (0, _extends2.default)({}, iconProps, {
    svgRef: ref
  }));
});
var VisibilityOffIcon = (0, _react.memo)((0, _base.createStyledIcon)(IconWithForwardedRef));
exports.VisibilityOffIcon = VisibilityOffIcon;
VisibilityOffIcon.displayName = 'VisibilityOffIcon';