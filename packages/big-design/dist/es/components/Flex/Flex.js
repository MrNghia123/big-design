import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef } from 'react';
import { StyledFlex } from './styled';

var RawFlex = function RawFlex(_ref) {
  var as = _ref.as,
      forwardedRef = _ref.forwardedRef,
      rest = _objectWithoutProperties(_ref, ["as", "forwardedRef"]);

  return /*#__PURE__*/React.createElement(StyledFlex, _extends({
    forwardedAs: as,
    ref: forwardedRef
  }, rest));
};

export var Flex = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawFlex, _extends({}, props, {
    forwardedRef: ref
  }));
});