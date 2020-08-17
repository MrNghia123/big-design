import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { OpenInNewIcon } from '@bigcommerce/big-design-icons';
import React, { forwardRef, memo } from 'react';
import { StyledLink } from './styled';
var StyleableLink = memo(function (props) {
  return /*#__PURE__*/React.createElement(StyledLink, props);
});
export var Link = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      external = _ref.external,
      props = _objectWithoutProperties(_ref, ["children", "external"]);

  var isExternal = external && props.target === '_blank';
  return /*#__PURE__*/React.createElement(StyleableLink, _extends({}, props, {
    isExternal: isExternal,
    forwardedRef: ref
  }), isExternal ? /*#__PURE__*/React.createElement("span", null, children) : children, isExternal && /*#__PURE__*/React.createElement(OpenInNewIcon, {
    size: "medium"
  }));
});
Link.displayName = 'Link';