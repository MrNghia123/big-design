"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListGroupHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var ListGroupHeader = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "value"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledGroupHeader, (0, _extends2.default)({}, rest, {
    tabIndex: -1,
    onMouseDown: preventFocus,
    "aria-hidden": true
  }));
});
exports.ListGroupHeader = ListGroupHeader;

function preventFocus(event) {
  event.preventDefault();
}

ListGroupHeader.displayName = 'ListGroupHeader';