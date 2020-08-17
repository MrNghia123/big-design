"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var Badge = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "label"]);
  return typeof label === 'string' ? /*#__PURE__*/_react.default.createElement(_styled.StyledBadge, props, label) : null;
});
exports.Badge = Badge;
Badge.displayName = 'Badge';