import { ArrowDropDownIcon } from '@bigcommerce/big-design-icons';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/styled';
export var StyledStatusMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledStatusMessage",
  componentId: "sc-1v66t78-0"
})(["", ""], hideVisually());
export var StyledDropdownIcon = /*#__PURE__*/styled(ArrowDropDownIcon).withConfig({
  displayName: "styled__StyledDropdownIcon",
  componentId: "sc-1v66t78-1"
})(["", ""], function (_ref) {
  var disabled = _ref.disabled;
  return !disabled && css([":hover{cursor:pointer;}"]);
});
export var StyledInputContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledInputContainer",
  componentId: "sc-1v66t78-2"
})(["input[readonly]{cursor:pointer;}"]);
export var DropdownButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "styled__DropdownButton",
  componentId: "sc-1v66t78-3"
})(["color:", ";height:auto;padding:0;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary60;
});
StyledStatusMessage.defaultProps = {
  theme: defaultTheme
};
StyledDropdownIcon.defaultProps = {
  theme: defaultTheme
};
StyledInputContainer.defaultProps = {
  theme: defaultTheme
};
DropdownButton.defaultProps = {
  theme: defaultTheme
};