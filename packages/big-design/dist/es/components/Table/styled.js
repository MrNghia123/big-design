import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { withMargins } from '../../mixins';
export var StyledTableFigure = /*#__PURE__*/styled.figure.withConfig({
  displayName: "styled__StyledTableFigure",
  componentId: "xns2ns-0"
})(["margin:0;max-width:100%;overflow-x:auto;white-space:nowrap;", "{white-space:normal;}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, withMargins());
export var StyledTable = /*#__PURE__*/styled.table.withConfig({
  displayName: "styled__StyledTable",
  componentId: "xns2ns-1"
})(["border-color:transparent;border-spacing:0;color:", ";text-align:left;width:100%;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
});
StyledTableFigure.defaultProps = {
  theme: defaultTheme
};
StyledTable.defaultProps = {
  theme: defaultTheme
};