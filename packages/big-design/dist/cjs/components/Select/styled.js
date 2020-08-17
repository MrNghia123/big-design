"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownButton = exports.StyledInputContainer = exports.StyledDropdownIcon = exports.StyledStatusMessage = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styled = require("../Button/styled");

var StyledStatusMessage = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledStatusMessage",
  componentId: "sc-1v66t78-0"
})(["", ""], (0, _polished.hideVisually)());

exports.StyledStatusMessage = StyledStatusMessage;
var StyledDropdownIcon = /*#__PURE__*/(0, _styledComponents.default)(_bigDesignIcons.ArrowDropDownIcon).withConfig({
  displayName: "styled__StyledDropdownIcon",
  componentId: "sc-1v66t78-1"
})(["", ""], function (_ref) {
  var disabled = _ref.disabled;
  return !disabled && (0, _styledComponents.css)([":hover{cursor:pointer;}"]);
});
exports.StyledDropdownIcon = StyledDropdownIcon;

var StyledInputContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledInputContainer",
  componentId: "sc-1v66t78-2"
})(["input[readonly]{cursor:pointer;}"]);

exports.StyledInputContainer = StyledInputContainer;
var DropdownButton = /*#__PURE__*/(0, _styledComponents.default)(_styled.StyledButton).withConfig({
  displayName: "styled__DropdownButton",
  componentId: "sc-1v66t78-3"
})(["color:", ";height:auto;padding:0;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary60;
});
exports.DropdownButton = DropdownButton;
StyledStatusMessage.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledDropdownIcon.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledInputContainer.defaultProps = {
  theme: _bigDesignTheme.theme
};
DropdownButton.defaultProps = {
  theme: _bigDesignTheme.theme
};