import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
export var StyledGroupHeader = /*#__PURE__*/styled.li.withConfig({
  displayName: "styled__StyledGroupHeader",
  componentId: "sc-1tf563r-0"
})(["align-items:center;box-sizing:border-box;color:", ";cursor:default;display:flex;font-size:", ";font-weight:", ";height:", ";justify-content:space-between;min-width:", ";outline:none;padding:0 ", ";text-transform:uppercase;&:not(:first-child){margin-top:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary50;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontSize.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.helpers.remCalc(36);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.helpers.remCalc(256);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.medium;
});
StyledGroupHeader.defaultProps = {
  theme: defaultTheme
};