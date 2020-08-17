import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
export var StyledTableDataCell = /*#__PURE__*/styled.td.withConfig({
  displayName: "styled__StyledTableDataCell",
  componentId: "sc-16y6nzi-0"
})(["background-color:", ";box-sizing:border-box;color:", ";font-size:", ";padding:", ";", " ", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontSize.medium;
}, function (_ref4) {
  var theme = _ref4.theme,
      withPadding = _ref4.withPadding;
  return withPadding ? theme.spacing.small : 0;
}, function (_ref5) {
  var theme = _ref5.theme,
      withBorder = _ref5.withBorder;
  return withBorder && css(["border-bottom:", ";"], theme.border.box);
}, function (_ref6) {
  var align = _ref6.align;
  return align && css(["text-align:", ";"], align);
}, function (_ref7) {
  var verticalAlign = _ref7.verticalAlign;
  return verticalAlign && css(["vertical-align:", ";"], verticalAlign);
}, function (_ref8) {
  var width = _ref8.width;
  return width !== undefined && css(["width:", ";"], typeof width === 'string' ? width : width + 'px');
});
export var StyledTableDataCheckbox = /*#__PURE__*/styled(StyledTableDataCell).withConfig({
  displayName: "styled__StyledTableDataCheckbox",
  componentId: "sc-16y6nzi-1"
})(["background-color:", ";padding:", ";", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.white;
}, function (_ref10) {
  var theme = _ref10.theme;
  return "0 ".concat(theme.spacing.small);
}, function (props) {
  return props.isCheckbox && css(["width:", ";white-space:nowrap;"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
  });
});
StyledTableDataCell.defaultProps = {
  theme: defaultTheme
};
StyledTableDataCheckbox.defaultProps = {
  theme: defaultTheme
};