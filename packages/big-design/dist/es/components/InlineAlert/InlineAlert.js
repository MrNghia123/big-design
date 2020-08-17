import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { CloseIcon } from '@bigcommerce/big-design-icons';
import React, { memo, useMemo } from 'react';
import { excludePaddingProps } from '../../mixins';
import { getMessagingIcon } from '../../utils';
import { Box } from '../Box';
import { MessagingButton } from '../Button/private';
import { GridItem } from '../Grid';
import { StyledHeader, StyledInlineAlert, StyledLink, StyledMessageItem } from './styled';
export var InlineAlert = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      header = _ref.header,
      props = _objectWithoutProperties(_ref, ["className", "style", "header"]);

  var filteredProps = excludePaddingProps(props);
  var icon = useMemo(function () {
    return props.type && getMessagingIcon(props.type, true);
  }, [props.type]);
  var renderedMessages = useMemo(function () {
    return props.messages.map(function (_ref2, index) {
      var text = _ref2.text,
          link = _ref2.link;
      return /*#__PURE__*/React.createElement(Box, {
        key: index
      }, /*#__PURE__*/React.createElement(StyledMessageItem, null, text), " ", link && /*#__PURE__*/React.createElement(StyledLink, link, link.text));
    });
  }, [props.messages]);
  var renderedHeader = useMemo(function () {
    return header && /*#__PURE__*/React.createElement(StyledHeader, null, header);
  }, [header]);
  return /*#__PURE__*/React.createElement(StyledInlineAlert, _extends({}, filteredProps, {
    role: "alert"
  }), /*#__PURE__*/React.createElement(GridItem, {
    gridArea: "icon"
  }, icon), /*#__PURE__*/React.createElement(GridItem, {
    gridArea: "messages"
  }, renderedHeader, renderedMessages), props.onClose && /*#__PURE__*/React.createElement(GridItem, null, /*#__PURE__*/React.createElement(MessagingButton, {
    onClick: props.onClose,
    iconOnly: /*#__PURE__*/React.createElement(CloseIcon, {
      size: "medium",
      title: "Close."
    })
  })));
});
InlineAlert.defaultProps = {
  messages: [],
  type: 'success'
};