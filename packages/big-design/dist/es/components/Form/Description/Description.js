import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useMemo } from 'react';
import { Small } from '../../Typography';
import { StyledLink } from './styled';
export var FormControlDescription = function FormControlDescription(_ref) {
  var className = _ref.className,
      style = _ref.style,
      link = _ref.link,
      props = _objectWithoutProperties(_ref, ["className", "style", "link"]);

  var renderedDescriptionLink = useMemo(function () {
    if (!link) {
      return;
    }

    return link && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement(StyledLink, link, link.text));
  }, [link]);
  return /*#__PURE__*/React.createElement(Small, props, props.children, renderedDescriptionLink);
};