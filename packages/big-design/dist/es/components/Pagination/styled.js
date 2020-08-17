import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { StyleableButton } from '../Button/private';
export var StyledButton = /*#__PURE__*/styled(StyleableButton).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-12shuvi-0"
})(["color:", ";width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
});
StyledButton.defaultProps = {
  theme: defaultTheme
};