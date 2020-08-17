import _extends from "@babel/runtime/helpers/esm/extends";
import React, { forwardRef, memo } from 'react';
import { StyledBox } from './styled';

var RawBox = function RawBox(props) {
  return /*#__PURE__*/React.createElement(StyledBox, _extends({
    ref: props.forwardedRef
  }, props));
};

export var Box = memo(forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawBox, _extends({}, props, {
    forwardedRef: ref
  }));
}));
Box.displayName = 'Box';