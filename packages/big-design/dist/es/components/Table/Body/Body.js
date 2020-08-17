import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledTableBody } from './styled';
export var Body = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyledTableBody, props);
});