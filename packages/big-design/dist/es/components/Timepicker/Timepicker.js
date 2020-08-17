import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo, useMemo } from 'react';
import { createLocalizationProvider, getTimeIntervals } from '../../utils';
import { Select } from '../Select';

var RawTimePicker = function RawTimePicker(_ref) {
  var error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
      onTimeChange = _ref.onTimeChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["error", "forwardedRef", "label", "locale", "onTimeChange", "value"]);

  var localization = createLocalizationProvider(locale);
  var options = useMemo(function () {
    return getTimeIntervals(localization);
  }, [localization]);
  return /*#__PURE__*/React.createElement(Select, _extends({
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

export var Timepicker = memo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawTimePicker, _extends({}, props, {
    forwardedRef: ref
  }));
}));