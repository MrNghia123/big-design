import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { Flex } from '../../Flex';
export var StyledTableHeaderCell = /*#__PURE__*/styled.th.withConfig({
  displayName: "styled__StyledTableHeaderCell",
  componentId: "sc-1opnvtt-0"
})(["background-color:", ";border-bottom:", ";border-top:", ";box-sizing:border-box;color:", ";font-size:", ";padding:", ";white-space:nowrap;", ";", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary10;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.box;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.box;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary60;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fontSize.medium;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.small;
}, function (_ref7) {
  var isSortable = _ref7.isSortable;
  return isSortable && css(["cursor:pointer;"]);
}, function (_ref8) {
  var width = _ref8.width;
  return width !== undefined && css(["width:", ";"], typeof width === 'string' ? width : width + 'px');
}, function (_ref9) {
  var theme = _ref9.theme,
      stickyHeader = _ref9.stickyHeader,
      stickyHeight = _ref9.stickyHeight;
  return stickyHeader && stickyHeight >= 0 && css(["", "{position:sticky;top:", ";z-index:", ";}"], theme.breakpoints.tablet, theme.helpers.remCalc(stickyHeight), theme.zIndex.sticky);
});
export var StyledTableHeaderCheckbox = /*#__PURE__*/styled(StyledTableHeaderCell).withConfig({
  displayName: "styled__StyledTableHeaderCheckbox",
  componentId: "sc-1opnvtt-1"
})(["width:", ";white-space:nowrap;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
});
export var StyledFlex = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "sc-1opnvtt-2"
})(["", ";", ";"], function (_ref11) {
  var align = _ref11.align;

  switch (align) {
    case 'center':
      return css(["justify-content:center;"]);

    case 'right':
      return css(["justify-content:flex-end;"]);

    default:
      return css(["justify-content:flex-start;"]);
  }
}, function (_ref12) {
  var hide = _ref12.hide;
  return hide && hideVisually();
});
StyledFlex.defaultProps = {
  theme: defaultTheme
};
StyledTableHeaderCell.defaultProps = {
  theme: defaultTheme
};
StyledTableHeaderCheckbox.defaultProps = {
  theme: defaultTheme
};