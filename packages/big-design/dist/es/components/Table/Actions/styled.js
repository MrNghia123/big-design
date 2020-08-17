import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { withFlexedContainer } from '../../Flex/withFlex';
export var StyledFlex = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledFlex",
  componentId: "yxkzj0-0"
})(["", " background-color:", ";display:flex;padding:", ";", ""], withFlexedContainer(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.small;
}, function (_ref3) {
  var theme = _ref3.theme,
      stickyHeader = _ref3.stickyHeader;
  return stickyHeader && css(["", "{position:sticky;top:0;z-index:", ";}"], theme.breakpoints.tablet, theme.zIndex.sticky + 1);
});
StyledFlex.defaultProps = {
  theme: defaultTheme
};