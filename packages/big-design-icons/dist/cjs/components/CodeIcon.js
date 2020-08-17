"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeIcon = void 0;

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
    height: 24,
    viewBox: "0 0 24 24",
    width: 24,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/_react.default.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 000-1.4.984.984 0 00-1.4 0l-4.59 4.59a.996.996 0 000 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 000-1.4zm6.6 0l3.9-3.9-3.9-3.9a.984.984 0 010-1.4.984.984 0 011.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 01-1.4 0 .984.984 0 010-1.4z"
  }));
};

var IconWithForwardedRef = (0, _react.forwardRef)(function (iconProps, ref) {
  return /*#__PURE__*/_react.default.createElement(Icon, (0, _extends2.default)({}, iconProps, {
    svgRef: ref
  }));
});
var CodeIcon = (0, _react.memo)((0, _base.createStyledIcon)(IconWithForwardedRef));
exports.CodeIcon = CodeIcon;
CodeIcon.displayName = 'CodeIcon';