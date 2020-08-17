import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { withTransition } from '../../mixins/transitions';
import { Box } from '../Box';
export var StyledLink = /*#__PURE__*/styled.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-2535c9-0"
})(["", " align-items:center;color:", ";display:flex;height:100%;text-decoration:none;width:100%;&:focus{outline:none;}"], withTransition(['background-color', 'color']), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
});
export var StyledBox = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledBox",
  componentId: "sc-2535c9-1"
})(["position:relative;"]);
StyledLink.defaultProps = {
  theme: defaultTheme
};
StyledBox.defaultProps = {
  theme: defaultTheme
};