import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ExpandMoreIcon } from '@bigcommerce/big-design-icons';
import React, { useState } from 'react';
import { useUniqueId } from '../../hooks';
import { Box } from '../Box';
import { StyledButton } from './styled';
export var Collapse = function Collapse(_ref) {
  var children = _ref.children,
      title = _ref.title,
      onCollapseChange = _ref.onCollapseChange,
      _ref$initiallyOpen = _ref.initiallyOpen,
      initiallyOpen = _ref$initiallyOpen === void 0 ? false : _ref$initiallyOpen;

  var _useState = useState(initiallyOpen),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var triggerId = useUniqueId('collapse-title');
  var panelId = useUniqueId('collapse-panel');

  var handleTitleClick = function handleTitleClick() {
    var nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);

    if (typeof onCollapseChange === 'function') {
      onCollapseChange(nextIsOpen);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledButton, {
    "aria-expanded": isOpen,
    "aria-controls": panelId,
    iconRight: /*#__PURE__*/React.createElement(ExpandMoreIcon, {
      title: title
    }),
    id: triggerId,
    isOpen: isOpen,
    variant: "subtle",
    onClick: handleTitleClick,
    marginVertical: "small"
  }, title), /*#__PURE__*/React.createElement(Box, {
    "aria-labelledby": triggerId,
    display: isOpen ? 'block' : 'none',
    id: panelId,
    hidden: !isOpen,
    role: "region"
  }, children));
};