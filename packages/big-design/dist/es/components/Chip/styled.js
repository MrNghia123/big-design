import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { Box } from '../Box';
import { StyleableButton } from '../Button/private';
export var StyledChip = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledChip",
  componentId: "bia514-0"
})(["align-items:center;display:inline-flex;user-select:none;"]);
export var StyledCloseButton = /*#__PURE__*/styled(StyleableButton).withConfig({
  displayName: "styled__StyledCloseButton",
  componentId: "bia514-1"
})(["color:", ";height:auto;padding:0;width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary60;
});
StyledChip.defaultProps = {
  theme: defaultTheme
};
StyledCloseButton.defaultProps = {
  theme: defaultTheme
};