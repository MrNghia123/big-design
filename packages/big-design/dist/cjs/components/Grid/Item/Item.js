"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var GridItem = function GridItem(_ref) {
  var as = _ref.as,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["as"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledGridItem, (0, _extends2.default)({
    forwardedAs: as
  }, rest));
};

exports.GridItem = GridItem;