import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { hideVisually } from 'polished';
import styled from 'styled-components';
export var StyledTableHead = /*#__PURE__*/styled.thead.withConfig({
  displayName: "styled__StyledTableHead",
  componentId: "sc-1p8j1x-0"
})(["", ""], function (_ref) {
  var hidden = _ref.hidden;
  return hidden && hideVisually();
});
StyledTableHead.defaultProps = {
  theme: defaultTheme
};