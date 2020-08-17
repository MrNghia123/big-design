"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timepicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _Select = require("../Select");

var RawTimePicker = function RawTimePicker(_ref) {
  var error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
      onTimeChange = _ref.onTimeChange,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["error", "forwardedRef", "label", "locale", "onTimeChange", "value"]);
  var localization = (0, _utils.createLocalizationProvider)(locale);
  var options = (0, _react.useMemo)(function () {
    return (0, _utils.getTimeIntervals)(localization);
  }, [localization]);
  return /*#__PURE__*/_react.default.createElement(_Select.Select, (0, _extends2.default)({
    autoWidth: true,
    label: label,
    error: error,
    value: value,
    onOptionChange: onTimeChange,
    placeholder: "hh : mm",
    options: options,
    inputRef: forwardedRef
  }, props));
};

var Timepicker = (0, _react.memo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawTimePicker, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Timepicker = Timepicker;