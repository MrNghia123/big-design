import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
export var StyledTableBody = /*#__PURE__*/styled.tbody.withConfig({
  displayName: "styled__StyledTableBody",
  componentId: "sc-1bwe2hn-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      withFirstRowBorder = _ref.withFirstRowBorder;
  return withFirstRowBorder && css(["tr:first-of-type > td{border-top:", ";}"], theme.border.box);
});
StyledTableBody.defaultProps = {
  theme: defaultTheme
};