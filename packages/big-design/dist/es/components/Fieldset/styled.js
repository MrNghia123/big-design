import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
export var StyledFieldset = /*#__PURE__*/styled.fieldset.withConfig({
  displayName: "styled__StyledFieldset",
  componentId: "ac9lek-0"
})(["border:none;margin:0 0 ", ";padding:0;&:last-child{margin:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xLarge;
});
StyledFieldset.defaultProps = {
  theme: defaultTheme
};