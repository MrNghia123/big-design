"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _Box = require("../Box");

var _styled = require("./styled");

var Collapse = function Collapse(_ref) {
  var children = _ref.children,
      title = _ref.title,
      onCollapseChange = _ref.onCollapseChange,
      _ref$initiallyOpen = _ref.initiallyOpen,
      initiallyOpen = _ref$initiallyOpen === void 0 ? false : _ref$initiallyOpen;

  var _useState = (0, _react.useState)(initiallyOpen),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var triggerId = (0, _hooks.useUniqueId)('collapse-title');
  var panelId = (0, _hooks.useUniqueId)('collapse-panel');

  var handleTitleClick = function handleTitleClick() {
    var nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);

    if (typeof onCollapseChange === 'function') {
      onCollapseChange(nextIsOpen);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styled.StyledButton, {
    "aria-expanded": isOpen,
    "aria-controls": panelId,
    iconRight: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ExpandMoreIcon, {
      title: title
    }),
    id: triggerId,
    isOpen: isOpen,
    variant: "subtle",
    onClick: handleTitleClick,
    marginVertical: "small"
  }, title), /*#__PURE__*/_react.default.createElement(_Box.Box, {
    "aria-labelledby": triggerId,
    display: isOpen ? 'block' : 'none',
    id: panelId,
    hidden: !isOpen,
    role: "region"
  }, children));
};

exports.Collapse = Collapse;