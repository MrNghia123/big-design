"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datepicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _utils = require("../../utils");

var _Input = require("../Input");

var _Header = _interopRequireDefault(require("./Header"));

var _styled = require("./styled");

var RawDatepicker = function RawDatepicker(_ref) {
  var _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? 'EE, dd MMM, yyyy' : _ref$dateFormat,
      error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
      min = _ref.min,
      max = _ref.max,
      onDateChange = _ref.onDateChange,
      required = _ref.required,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["dateFormat", "error", "forwardedRef", "label", "locale", "min", "max", "onDateChange", "required", "placeholder", "value"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var localization = (0, _utils.createLocalizationProvider)(locale);
  (0, _reactDatepicker.registerLocale)(locale, localization);

  var updateDate = function updateDate(value) {
    return onDateChange(value.toISOString());
  };

  (0, _react.useEffect)(function () {
    if (typeof value === 'string') {
      setSelected(new Date(value));
    } else {
      setSelected(undefined);
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledDatepicker, null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    renderCustomHeader: function renderCustomHeader(_ref2) {
      var date = _ref2.date,
          decreaseMonth = _ref2.decreaseMonth,
          increaseMonth = _ref2.increaseMonth,
          prevMonthButtonDisabled = _ref2.prevMonthButtonDisabled,
          nextMonthButtonDisabled = _ref2.nextMonthButtonDisabled;
      return /*#__PURE__*/_react.default.createElement(_Header.default, {
        months: localization.monthsLong,
        date: date,
        decreaseMonth: decreaseMonth,
        increaseMonth: increaseMonth,
        prevMonthButtonDisabled: prevMonthButtonDisabled,
        nextMonthButtonDisabled: nextMonthButtonDisabled
      });
    },
    customInput: /*#__PURE__*/_react.default.createElement(_Input.Input, (0, _extends2.default)({
      label: label,
      error: error
    }, props)),
    className: "calendar-input",
    calendarClassName: "bc-datepicker",
    dateFormat: dateFormat || 'EE, dd MMM, yyyy',
    locale: locale,
    maxDate: max ? new Date(max) : undefined,
    minDate: min ? new Date(min) : undefined,
    selected: selected,
    placeholderText: placeholder,
    required: required,
    onChange: updateDate,
    ref: forwardedRef
  }));
};

var Datepicker = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(RawDatepicker, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Datepicker = Datepicker;