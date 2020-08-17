import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { StyleableH3 } from '../../Typography/private';
export var StyledFieldsetLegend = /*#__PURE__*/styled(StyleableH3).attrs({
  as: 'legend'
}).withConfig({
  displayName: "styled__StyledFieldsetLegend",
  componentId: "n32oj8-0"
})(["&:not(:last-child){margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
});
StyledFieldsetLegend.defaultProps = {
  theme: defaultTheme
};