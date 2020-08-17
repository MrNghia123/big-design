"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var Head = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "hidden"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledTableHead, (0, _extends2.default)({
    hidden: hidden
  }, props));
});
exports.Head = Head;