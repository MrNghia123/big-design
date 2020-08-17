import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledBadge } from './styled';
export var Badge = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["className", "style", "label"]);

  return typeof label === 'string' ? /*#__PURE__*/React.createElement(StyledBadge, props, label) : null;
});
Badge.displayName = 'Badge';