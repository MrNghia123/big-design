import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { createLocalizationProvider } from '../../utils';
import { Input } from '../Input';
import Header from './Header';
import { StyledDatepicker } from './styled';

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
      props = _objectWithoutProperties(_ref, ["dateFormat", "error", "forwardedRef", "label", "locale", "min", "max", "onDateChange", "required", "placeholder", "value"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var localization = createLocalizationProvider(locale);
  registerLocale(locale, localization);

  var updateDate = function updateDate(value) {
    return onDateChange(value.toISOString());
  };

  useEffect(function () {
    if (typeof value === 'string') {
      setSelected(new Date(value));
    } else {
      setSelected(undefined);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledDatepicker, null, /*#__PURE__*/React.createElement(ReactDatePicker, {
    renderCustomHeader: function renderCustomHeader(_ref2) {
      var date = _ref2.date,
          decreaseMonth = _ref2.decreaseMonth,
          increaseMonth = _ref2.increaseMonth,
          prevMonthButtonDisabled = _ref2.prevMonthButtonDisabled,
          nextMonthButtonDisabled = _ref2.nextMonthButtonDisabled;
      return /*#__PURE__*/React.createElement(Header, {
        months: localization.monthsLong,
        date: date,
        decreaseMonth: decreaseMonth,
        increaseMonth: increaseMonth,
        prevMonthButtonDisabled: prevMonthButtonDisabled,
        nextMonthButtonDisabled: nextMonthButtonDisabled
      });
    },
    customInput: /*#__PURE__*/React.createElement(Input, _extends({
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

export var Datepicker = memo(forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawDatepicker, _extends({}, props, {
    forwardedRef: ref
  }));
}));