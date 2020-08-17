import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Small } from '../../Typography';
export var FormControlError = function FormControlError(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return /*#__PURE__*/React.createElement(Small, _extends({
    color: "danger",
    margin: "none",
    marginLeft: "xxSmall"
  }, props));
};