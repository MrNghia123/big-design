import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { withMargins } from '../../mixins';
export var StyledBadge = /*#__PURE__*/styled.span.withConfig({
  displayName: "styled__StyledBadge",
  componentId: "sc-1oik56k-0"
})(["", ";color:", ";border-radius:", ";display:inline-block;font-size:", ";font-weight:", ";line-height:", ";text-align:center;text-transform:uppercase;padding:0 ", ";", " ", " ", " ", ""], withMargins(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.helpers.remCalc(12);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.lineHeight.small;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.xSmall;
}, function (_ref7) {
  var theme = _ref7.theme,
      variant = _ref7.variant;
  return variant === 'secondary' && css(["background-color:", ";"], theme.colors.secondary60);
}, function (_ref8) {
  var theme = _ref8.theme,
      variant = _ref8.variant;
  return variant === 'success' && css(["background-color:", ";"], theme.colors.success50);
}, function (_ref9) {
  var theme = _ref9.theme,
      variant = _ref9.variant;
  return variant === 'warning' && css(["color:", ";background-color:", ";"], theme.colors.secondary70, theme.colors.warning40);
}, function (_ref10) {
  var theme = _ref10.theme,
      variant = _ref10.variant;
  return variant === 'danger' && css(["background-color:", ";"], theme.colors.danger40);
});
StyledBadge.defaultProps = {
  theme: defaultTheme,
  variant: 'secondary'
};