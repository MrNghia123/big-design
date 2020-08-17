import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { withTransition } from '../../../mixins/transitions';
export var StyledTableRow = /*#__PURE__*/styled.tr.withConfig({
  displayName: "styled__StyledTableRow",
  componentId: "xq0hr0-0"
})(["", " background-color:", ";&:hover{background-color:", ";}"], withTransition(['background-color']), function (_ref) {
  var isSelected = _ref.isSelected,
      theme = _ref.theme;
  return isSelected ? theme.colors.primary10 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary10;
});
StyledTableRow.defaultProps = {
  theme: defaultTheme
};