import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef } from 'react';
import { StyledFlexItem } from './styled';

var RawFlexItem = function RawFlexItem(_ref) {
  var as = _ref.as,
      forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["as", "forwardedRef"]);

  return /*#__PURE__*/React.createElement(StyledFlexItem, _extends({
    ref: forwardedRef,
    forwardedAs: as
  }, props));
};

export var FlexItem = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawFlexItem, _extends({}, props, {
    forwardedRef: ref
  }));
});