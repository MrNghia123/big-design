import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledTableHead } from './styled';
export var Head = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      props = _objectWithoutProperties(_ref, ["className", "style", "hidden"]);

  return /*#__PURE__*/React.createElement(StyledTableHead, _extends({
    hidden: hidden
  }, props));
});