import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { Box } from '../Box';
import { StyleableH2 } from '../Typography/private';
export var StyledPanel = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledPanel",
  componentId: "sc-1h6ef3q-0"
})(["", "{", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadow.floating;
});
export var StyledH2 = /*#__PURE__*/styled(StyleableH2).withConfig({
  displayName: "styled__StyledH2",
  componentId: "sc-1h6ef3q-1"
})(["flex-grow:1;& ~ .bd-button{width:auto;margin-top:0;}"]);
StyledPanel.defaultProps = {
  theme: defaultTheme,
  marginBottom: 'medium'
};
StyledH2.defaultProps = {
  theme: defaultTheme
};