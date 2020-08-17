import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { excludePaddingProps } from '../../mixins/paddings/paddings';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { StyledH2, StyledPanel } from './styled';
export var RawPanel = memo(function (props) {
  var filteredProps = excludePaddingProps(props);

  var action = filteredProps.action,
      children = filteredProps.children,
      header = filteredProps.header,
      rest = _objectWithoutProperties(filteredProps, ["action", "children", "header"]);

  var renderHeader = function renderHeader() {
    if (!header && !action) {
      return null;
    }

    if (typeof header !== 'string') {
      return null;
    }

    return /*#__PURE__*/React.createElement(Flex, {
      flexDirection: "row"
    }, header && /*#__PURE__*/React.createElement(StyledH2, null, header), action && /*#__PURE__*/React.createElement(Button, action, action.text));
  };

  return /*#__PURE__*/React.createElement(StyledPanel, _extends({}, rest, {
    backgroundColor: "white",
    shadow: "raised",
    padding: {
      mobile: 'medium',
      tablet: 'xxLarge'
    },
    borderRadius: "none"
  }), renderHeader(), children);
});
export var Panel = function Panel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawPanel, props);
};
Panel.displayName = 'Panel';