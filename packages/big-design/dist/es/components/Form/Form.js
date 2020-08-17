import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef } from 'react';
import { typedMemo } from '../../utils';
import { StyledForm } from './styled';

var StyleableForm = function StyleableForm(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  return /*#__PURE__*/React.createElement(StyledForm, _extends({}, props, {
    ref: forwardedRef
  }));
};

export var Form = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyleableForm, _extends({}, props, {
    forwardedRef: ref
  }));
}));