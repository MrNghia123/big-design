import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { StyleableButton } from '../Button/private';
import { Flex } from '../Flex';
export var StyledTabs = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledTabs",
  componentId: "sc-6je9le-0"
})(["overflow:auto;"]);
export var StyledTab = /*#__PURE__*/styled(StyleableButton).withConfig({
  displayName: "styled__StyledTab",
  componentId: "sc-6je9le-1"
})(["border:none;border-bottom:", " solid transparent;border-bottom-color:", ";border-radius:0;color:", ";pointer-events:", ";width:auto;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (props) {
  return props.id === props.activeTab ? props.theme.colors.primary40 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (props) {
  return props.id === props.activeTab ? 'none' : 'auto';
}, function (props) {
  return props.id === props.activeTab && css(["color:", ";&:focus{box-shadow:none;}"], props.theme.colors.secondary70);
});
StyledTab.defaultProps = {
  theme: defaultTheme,
  variant: 'subtle'
};
StyledTabs.defaultProps = {
  theme: defaultTheme
};