import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { StyleableH4 } from '../../Typography/private';
export var StyledLabel = /*#__PURE__*/styled(StyleableH4).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "m3fyue-0"
})(["cursor:pointer;display:inline-block;margin-bottom:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (_ref2) {
  var theme = _ref2.theme,
      renderOptional = _ref2.renderOptional;
  return renderOptional && css(["&::after{color:", ";content:' (optional)';font-weight:", ";}"], theme.colors.secondary60, theme.typography.fontWeight.regular);
});
StyledLabel.defaultProps = {
  theme: defaultTheme
};