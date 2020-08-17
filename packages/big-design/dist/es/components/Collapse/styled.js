import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { withTransition } from '../../mixins/transitions';
import { StyleableButton } from '../Button/private';
export var StyledButton = /*#__PURE__*/styled(StyleableButton).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1t5o5ar-0"
})(["height:auto;line-height:inherit;margin-left:-", ";padding:", ";padding-right:", ";width:auto;&:active,&:hover:not(:active){background:none;color:", ";}span{grid-gap:", ";}svg{", " ", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.none;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary70;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.none;
}, withTransition(['transform']), function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen && css(["transform:rotate(-180deg);"]);
});
StyledButton.defaultProps = {
  theme: defaultTheme
};