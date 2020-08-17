"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.RawSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _Flex = require("../Flex");

var _styled = require("./styled");

var RawSwitch = function RawSwitch(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checked", "disabled", "forwardedRef"]);
  var uniqueSwitchId = (0, _hooks.useUniqueId)('switch');
  var id = props.id ? props.id : uniqueSwitchId;
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, null, /*#__PURE__*/_react.default.createElement(_styled.HiddenCheckbox, (0, _extends2.default)({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled
  }, props, {
    ref: forwardedRef
  })), /*#__PURE__*/_react.default.createElement(_styled.StyledSwitchLabel, {
    "aria-hidden": true,
    disabled: disabled,
    htmlFor: id,
    checked: checked
  }));
};

exports.RawSwitch = RawSwitch;
var Switch = (0, _react.memo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawSwitch, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Switch = Switch;