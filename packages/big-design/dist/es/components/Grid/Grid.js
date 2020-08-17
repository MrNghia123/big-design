import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef } from 'react';
import { StyledGrid } from './styled';

var RawGrid = function RawGrid(_ref) {
  var as = _ref.as,
      forwardedRef = _ref.forwardedRef,
      rest = _objectWithoutProperties(_ref, ["as", "forwardedRef"]);

  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    forwardedAs: as,
    ref: forwardedRef
  }, rest));
};

export var Grid = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawGrid, _extends({}, props, {
    forwardedRef: ref
  }));
});