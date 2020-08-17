import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { Link } from '../../Link';
export var StyledLink = /*#__PURE__*/styled(Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1ha6q9e-0"
})(["font-size:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontSize.small;
});
StyledLink.defaultProps = {
  theme: defaultTheme
};