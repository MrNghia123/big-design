import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledGridItem } from './styled';
export var GridItem = function GridItem(_ref) {
  var as = _ref.as,
      rest = _objectWithoutProperties(_ref, ["as"]);

  return /*#__PURE__*/React.createElement(StyledGridItem, _extends({
    forwardedAs: as
  }, rest));
};