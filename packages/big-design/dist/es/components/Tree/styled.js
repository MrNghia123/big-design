import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
export var StyledUl = /*#__PURE__*/styled.ul.withConfig({
  displayName: "styled__StyledUl",
  componentId: "sc-7vo4ly-0"
})(["list-style-type:none;margin:0;padding:0;user-select:none;> li > ul{padding-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.xxSmall);
});
StyledUl.defaultProps = {
  theme: defaultTheme
};