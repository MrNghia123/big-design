"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronLeftIcon = void 0;

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
    d: "M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"
  }));
};

var IconWithForwardedRef = (0, _react.forwardRef)(function (iconProps, ref) {
  return /*#__PURE__*/_react.default.createElement(Icon, (0, _extends2.default)({}, iconProps, {
    svgRef: ref
  }));
});
var ChevronLeftIcon = (0, _react.memo)((0, _base.createStyledIcon)(IconWithForwardedRef));
exports.ChevronLeftIcon = ChevronLeftIcon;
ChevronLeftIcon.displayName = 'ChevronLeftIcon';