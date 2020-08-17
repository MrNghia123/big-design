import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { CloseIcon } from '@bigcommerce/big-design-icons';
import React, { memo } from 'react';
import { Text } from '../Typography';
import { StyledChip, StyledCloseButton } from './styled';
export var Chip = memo(function (_ref) {
  var children = _ref.children,
      label = _ref.label,
      onDelete = _ref.onDelete,
      rest = _objectWithoutProperties(_ref, ["children", "label", "onDelete"]);

  var ariaLabel = label ? {
    'aria-label': "Remove ".concat(label)
  } : {};

  var renderDeleteButton = function renderDeleteButton() {
    return onDelete && /*#__PURE__*/React.createElement(StyledCloseButton, _extends({}, ariaLabel, {
      iconOnly: /*#__PURE__*/React.createElement(CloseIcon, {
        size: "medium",
        title: "Delete"
      }),
      onClick: onDelete,
      type: "button",
      variant: "subtle"
    }));
  };

  return /*#__PURE__*/React.createElement(StyledChip, _extends({
    margin: "xxSmall"
  }, rest, {
    backgroundColor: "secondary30",
    borderRadius: "normal",
    paddingLeft: "xSmall",
    paddingRight: "xxSmall"
  }), /*#__PURE__*/React.createElement(Text, {
    margin: "none",
    marginRight: "xxSmall"
  }, label), renderDeleteButton());
});
Chip.displayName = 'Chip';