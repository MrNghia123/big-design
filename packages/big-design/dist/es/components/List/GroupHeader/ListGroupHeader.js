import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledGroupHeader } from './styled';
export var ListGroupHeader = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["className", "style", "value"]);

  return /*#__PURE__*/React.createElement(StyledGroupHeader, _extends({}, rest, {
    tabIndex: -1,
    onMouseDown: preventFocus,
    "aria-hidden": true
  }));
});

function preventFocus(event) {
  event.preventDefault();
}

ListGroupHeader.displayName = 'ListGroupHeader';