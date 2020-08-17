"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var StyleableListItem = function StyleableListItem(_ref) {
  var _ref$autoWidth = _ref.autoWidth,
      autoWidth = _ref$autoWidth === void 0 ? false : _ref$autoWidth,
      _ref$actionType = _ref.actionType,
      actionType = _ref$actionType === void 0 ? 'normal' : _ref$actionType,
      forwardedRef = _ref.forwardedRef,
      _ref$isAction = _ref.isAction,
      isAction = _ref$isAction === void 0 ? false : _ref$isAction,
      props = (0, _objectWithoutProperties2.default)(_ref, ["autoWidth", "actionType", "forwardedRef", "isAction"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledListItem, (0, _extends2.default)({}, props, {
    autoWidth: autoWidth,
    actionType: actionType,
    isAction: isAction,
    ref: forwardedRef
  }));
};

var ListItem = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(StyleableListItem, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.ListItem = ListItem;